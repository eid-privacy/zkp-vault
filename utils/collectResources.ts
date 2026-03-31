/**
 * collectResources.ts
 *
 * Scans all vault content directories for ## Resources sections, extracts
 * URLs, creates canonical stub files in Resources/subtype/, and rewrites
 * source files to use wikilinks instead of raw URLs.
 *
 * Also extracts URLs from Resources/index.md if present.
 *
 * Usage:
 *   bun run utils/collectResources.ts [--dry-run]
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_ROOT = path.resolve(__dirname, '../docs');
const RESOURCES_ROOT = path.join(VAULT_ROOT, 'Resources');
const DRY_RUN = process.argv.includes('--dry-run');

// Directories to scan for ## Resources sections
const SCAN_DIRS = [
  'ProofSystems',
  'CryptographicPrimitives',
  'IntermediateRepresentations',
  'TheoreticalModels',
  'ToolingApplication',
];

// Label → subtype mapping
const LABEL_TO_SUBTYPE: Record<string, string> = {
  paper: 'papers',
  explainer: 'blogs',
  blog: 'blogs',
  vitalik: 'blogs',
  docs: 'docs',
  doc: 'docs',
  spec: 'docs',
  code: 'code',
  github: 'code',
  wiki: 'wikis',
  video: 'videos',
  presentation: 'presentations',
  benchmark: 'blogs',
  // catch-alls
  link: 'blogs',
  url: 'blogs',
};

// Normalized display label (what stays in the source file)
const LABEL_NORMALIZE: Record<string, string> = {
  vitalik: 'Blog',
  explainer: 'Explainer',
  paper: 'Paper',
  blog: 'Blog',
  docs: 'Docs',
  doc: 'Docs',
  spec: 'Spec',
  code: 'Code',
  github: 'Code',
  wiki: 'Wiki',
  video: 'Video',
  presentation: 'Presentation',
  benchmark: 'Blog',
  link: 'Blog',
  url: 'Blog',
};

// ---------------------------------------------------------------------------
// URL → filename derivation
// ---------------------------------------------------------------------------

function isDocHostname(hostname: string): boolean {
  return (
    hostname.startsWith('docs.') ||
    hostname.startsWith('book.') ||
    hostname.startsWith('dev.') ||
    hostname === 'risczero.com' ||
    hostname === 'zokrates.github.io' ||
    hostname === 'zcash.github.io' ||
    hostname === 'platform.ligetron.com' ||
    hostname === 'starkware.co' ||
    hostname === 'noir-lang.org' ||
    hostname === 'learn.0xparc.org'
  );
}

function deriveFilename(url: string, sourceBasename: string, label: string): string {
  let u: URL;
  try {
    u = new URL(url);
  } catch {
    return slugify(sourceBasename);
  }

  const hostname = u.hostname.replace(/^www\./, '');
  const pathParts = u.pathname.replace(/\.(pdf|html|htm)$/, '').split('/').filter(Boolean);

  // IACR eprint: eprint.iacr.org/YEAR/NUM
  if (hostname === 'eprint.iacr.org' && pathParts.length >= 2) {
    return `IACR-${pathParts[pathParts.length - 2]}-${pathParts[pathParts.length - 1]}`;
  }

  // GitHub: github.com/owner/repo[/...]
  if (hostname === 'github.com' && pathParts.length >= 2) {
    const repo = pathParts[1];
    // If the source file is named after the repo, use source name for clarity
    if (sourceBasename.toLowerCase().includes(repo.toLowerCase())) {
      return slugify(sourceBasename);
    }
    return slugify(`${pathParts[0]}-${repo}`);
  }

  // ACM dl: dl.acm.org/doi/…  → use source basename
  if (hostname === 'dl.acm.org' || hostname === 'acm-stag.literatumonline.com' || hostname === 'acmccs.github.io') {
    return slugify(sourceBasename);
  }

  // Springer: link.springer.com → use source basename
  if (hostname === 'link.springer.com' || hostname === 'springer.com') {
    return slugify(sourceBasename);
  }

  // IACR archive (non-eprint)
  if (hostname === 'iacr.org') {
    return slugify(sourceBasename);
  }

  // HackMD: hackmd.io/@slug/note-name
  if (hostname === 'hackmd.io' && pathParts.length >= 2) {
    return slugify(pathParts[pathParts.length - 1]);
  }

  // ZKProof standards proposals → use filename from URL path (e.g. proposal-turbo_plonk)
  if (hostname === 'docs.zkproof.org' && pathParts.some(p => p === 'standards')) {
    return slugify(pathParts[pathParts.length - 1]);
  }

  // Documentation sites → use sourceBasename + "-Docs" for clarity
  if (isDocHostname(hostname)) {
    return slugify(`${sourceBasename}-Docs`);
  }

  // Personal/blog URLs — use the last meaningful path segment
  const lastPart = pathParts[pathParts.length - 1];
  if (lastPart && lastPart.length > 5) {
    // Truncate very long slugs (e.g. Medium article slugs with hash suffix)
    const slug = slugify(lastPart);
    if (slug.length > 60) {
      const truncated = slug.slice(0, 60);
      const lastHyphen = truncated.lastIndexOf('-');
      return lastHyphen > 30 ? truncated.slice(0, lastHyphen) : truncated;
    }
    return slug;
  }

  // Fallback: source basename
  return slugify(sourceBasename);
}

function slugify(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9-_]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function titleFromFilename(filename: string): string {
  return filename
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// ---------------------------------------------------------------------------
// Scan Resources/** for existing URL:: entries to support deduplication
// ---------------------------------------------------------------------------

interface ExistingResource {
  url: string;
  filename: string; // without .md
  subtype: string;
  filepath: string;
}

function loadExistingResources(): ExistingResource[] {
  const results: ExistingResource[] = [];
  const subtypeDirs = ['papers', 'blogs', 'books', 'wikis', 'docs', 'code', 'videos', 'presentations'];
  for (const sub of subtypeDirs) {
    const dir = path.join(RESOURCES_ROOT, sub);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
      const filepath = path.join(dir, file);
      const content = fs.readFileSync(filepath, 'utf-8');
      const match = content.match(/^URL:: (.+)$/m);
      if (match) {
        results.push({
          url: match[1].trim(),
          filename: path.basename(file, '.md'),
          subtype: sub,
          filepath,
        });
      }
    }
  }
  return results;
}

// ---------------------------------------------------------------------------
// Create stub resource file
// ---------------------------------------------------------------------------

function createStub(filepath: string, subtype: string, title: string, url: string): void {
  const subtypeSingular = subtype.replace(/s$/, ''); // papers→paper, blogs→blog, etc.
  const content = `---
type: resource
subtype: ${subtypeSingular}
generated: true
year:
authors: []
tags: []
---

# ${title}

URL:: ${url}

## Description

`;
  if (DRY_RUN) {
    console.log(`  [DRY] Would create: ${filepath}`);
  } else {
    fs.mkdirSync(path.dirname(filepath), { recursive: true });
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`  Created: ${path.relative(VAULT_ROOT, filepath)}`);
  }
}

// ---------------------------------------------------------------------------
// Parse ## Resources section from a file
// ---------------------------------------------------------------------------

interface ResourceLine {
  original: string;     // the full original line
  label: string;        // raw label text (lowercased)
  url: string;          // extracted URL
}

function parseResourceLines(content: string): { lines: ResourceLine[]; sectionStart: number; sectionEnd: number } | null {
  const lines = content.split('\n');
  let inSection = false;
  let sectionStart = -1;
  let sectionEnd = lines.length;
  const resourceLines: ResourceLine[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^## Resources\s*$/.test(line)) {
      inSection = true;
      sectionStart = i;
      continue;
    }

    if (inSection) {
      // End of section: another ## heading
      if (/^## /.test(line) && !/^## Resources\s*$/.test(line)) {
        sectionEnd = i;
        break;
      }

      // Match: `- Label: URL` or `- Label (context): URL`
      const m = line.match(/^- (.+?):\s*(https?:\/\/\S+)\s*$/);
      if (m) {
        const label = m[1].trim().toLowerCase().split(/[\s(]/)[0]; // first word, lowercase
        resourceLines.push({
          original: line,
          label,
          url: m[2].trim(),
        });
      }
    }
  }

  if (sectionStart === -1) return null;
  return { lines: resourceLines, sectionStart, sectionEnd };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

interface Replacement {
  url: string;
  wikilink: string;
  label: string;
  normalizedLabel: string;
}

const urlToResource = new Map<string, ExistingResource>(); // url → existing resource
const created: ExistingResource[] = [];

function getOrCreateResource(
  url: string,
  subtype: string,
  sourceBasename: string,
  label: string,
): string {
  // Dedup check
  if (urlToResource.has(url)) {
    return urlToResource.get(url)!.filename;
  }

  // Derive filename
  let filename = deriveFilename(url, sourceBasename, label);

  // Avoid conflict with existing content entry names by suffixing with type
  if (contentEntryNames.has(filename)) {
    const suffix = subtype === 'papers' ? '-Paper'
      : subtype === 'blogs' ? '-Blog'
      : subtype === 'code' ? '-Code'
      : subtype === 'docs' ? '-Docs'
      : '';
    if (suffix) filename = `${filename}${suffix}`;
  }

  // Ensure uniqueness within the subtype dir
  const dir = path.join(RESOURCES_ROOT, subtype);
  let candidate = filename;
  let counter = 2;
  while (
    fs.existsSync(path.join(dir, `${candidate}.md`)) &&
    !created.find(r => r.filename === candidate && r.subtype === subtype)
  ) {
    // File exists but NOT one we just created → check if same URL
    const existing = fs.readFileSync(path.join(dir, `${candidate}.md`), 'utf-8');
    const existingUrlMatch = existing.match(/^URL:: (.+)$/m);
    if (existingUrlMatch && existingUrlMatch[1].trim() === url) {
      // Same URL → reuse
      break;
    }
    candidate = `${filename}-${counter++}`;
  }
  filename = candidate;

  const filepath = path.join(dir, `${filename}.md`);
  const title = titleFromFilename(filename);
  createStub(filepath, subtype, title, url);

  const resource: ExistingResource = { url, filename, subtype, filepath };
  urlToResource.set(url, resource);
  created.push(resource);
  return filename;
}

function processFile(filepath: string): void {
  const content = fs.readFileSync(filepath, 'utf-8');
  const sourceBasename = path.basename(filepath, '.md');
  const parsed = parseResourceLines(content);
  if (!parsed || parsed.lines.length === 0) return;

  const replacements: Replacement[] = [];

  for (const rl of parsed.lines) {
    let subtype = LABEL_TO_SUBTYPE[rl.label] ?? 'blogs';
    // URL-based override: GitHub always → code, docs hostnames → docs
    try {
      const u = new URL(rl.url);
      const h = u.hostname.replace(/^www\./, '');
      if (h === 'github.com') subtype = 'code';
      // docs.zkproof.org/pages/standards/... are standard proposals → papers
      else if (h === 'docs.zkproof.org' && u.pathname.includes('/standards/')) subtype = 'papers';
      else if (isDocHostname(h)) subtype = 'docs';
    } catch { /* ignore */ }
    const normalizedLabel = LABEL_NORMALIZE[rl.label] ?? (rl.label.charAt(0).toUpperCase() + rl.label.slice(1));

    const filename = getOrCreateResource(rl.url, subtype, sourceBasename, rl.label);
    replacements.push({
      url: rl.url,
      wikilink: `[[${filename}]]`,
      label: rl.label,
      normalizedLabel,
    });
  }

  // Rewrite the file: replace raw URL lines in ## Resources with wikilinks
  let newContent = content;
  for (const rep of replacements) {
    // Replace lines matching `- AnyLabel: <url>` with `- NormalizedLabel: [[filename]]`
    const escaped = rep.url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const lineRe = new RegExp(`^(- .+?:\\s*)${escaped}\\s*$`, 'm');
    newContent = newContent.replace(lineRe, `$1${rep.wikilink}`);
  }

  if (newContent !== content) {
    if (DRY_RUN) {
      console.log(`  [DRY] Would rewrite: ${path.relative(VAULT_ROOT, filepath)}`);
    } else {
      fs.writeFileSync(filepath, newContent, 'utf-8');
      console.log(`  Rewrote: ${path.relative(VAULT_ROOT, filepath)}`);
    }
  }
}

// Build a set of all existing content entry basenames (to detect naming conflicts)
const contentEntryNames = new Set<string>();
for (const dir of SCAN_DIRS) {
  const dirPath = path.join(VAULT_ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;
  for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.md'))) {
    contentEntryNames.add(path.basename(file, '.md'));
  }
}

// Load existing resources into the dedup map
const existing = loadExistingResources();
for (const r of existing) {
  urlToResource.set(r.url, r);
}

console.log(`Loaded ${existing.length} existing resource(s) for deduplication.\n`);

// Process all source directories
for (const dir of SCAN_DIRS) {
  const dirPath = path.join(VAULT_ROOT, dir);
  if (!fs.existsSync(dirPath)) continue;
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && f !== 'README.md');
  console.log(`Processing ${dir}/ (${files.length} files)...`);
  for (const file of files) {
    processFile(path.join(dirPath, file));
  }
}

// Also extract URLs from Resources/index.md if it still exists
const indexPath = path.join(RESOURCES_ROOT, 'index.md');
if (fs.existsSync(indexPath)) {
  console.log('\nExtracting URLs from Resources/index.md...');
  const content = fs.readFileSync(indexPath, 'utf-8');
  const urlRe = /https?:\/\/\S+/g;
  let m: RegExpExecArray | null;
  while ((m = urlRe.exec(content)) !== null) {
    const url = m[0].replace(/[.,)>]+$/, ''); // strip trailing punctuation
    if (!urlToResource.has(url)) {
      // Default to blogs for unclassified index.md URLs
      getOrCreateResource(url, 'blogs', 'index', 'link');
    }
  }
}

console.log(`\nDone. Created ${created.length} new resource stub(s).`);
if (DRY_RUN) console.log('(DRY RUN — no files were written)');

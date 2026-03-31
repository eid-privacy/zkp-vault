import * as fs from 'fs';
import * as path from 'path';

const VAULT_ROOT = path.resolve(__dirname, '../docs');

const SECTION_LABELS: Record<string, string> = {
  ProofSystems: 'Proof Systems',
  CryptographicPrimitives: 'Cryptographic Primitives',
  IntermediateRepresentations: 'Intermediate Representations',
  TheoreticalModels: 'Theoretical Models',
  ToolingApplication: 'Tooling & Applications',
  Resources: 'Resources',
  Applications: 'Applications',
  Tags: 'Tags',
};

const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';
const QUIET = process.argv.includes('--quiet');

function ok(msg: string) { return `${GREEN}✓${RESET} ${msg}`; }
function fail(msg: string) { return `${RED}✗${RESET} ${msg}`; }

// --- Helpers ---

function getAllMdFiles(): { rel: string; abs: string; dir: string; file: string }[] {
  const results: { rel: string; abs: string; dir: string; file: string }[] = [];
  for (const dir of Object.keys(SECTION_LABELS)) {
    const dirPath = path.join(VAULT_ROOT, dir);
    if (!fs.existsSync(dirPath)) continue;
    // Scan top-level files
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith('.md')) {
        results.push({
          rel: `${dir}/${entry.name}`,
          abs: path.join(dirPath, entry.name),
          dir,
          file: entry.name,
        });
      } else if (entry.isDirectory()) {
        // Scan one level of subdirectories (e.g. Resources/papers/, Resources/blogs/)
        const subDir = path.join(dirPath, entry.name);
        for (const subEntry of fs.readdirSync(subDir, { withFileTypes: true })) {
          if (subEntry.isFile() && subEntry.name.endsWith('.md')) {
            results.push({
              rel: `${dir}/${entry.name}/${subEntry.name}`,
              abs: path.join(subDir, subEntry.name),
              dir,
              file: subEntry.name,
            });
          }
        }
      }
    }
  }
  return results;
}

function parseFrontmatter(content: string): Record<string, unknown> | null {
  if (!content.startsWith('---\n')) return null;
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return null;
  const yaml = content.slice(4, end);
  const result: Record<string, unknown> = {};
  let i = 0;
  const lines = yaml.split('\n');
  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) { i++; continue; }
    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();
    if (rest === '' || rest === '[]') {
      // Possibly a list
      const items: string[] = [];
      if (rest === '[]') {
        result[key] = items;
        i++;
        continue;
      }
      i++;
      while (i < lines.length && lines[i].startsWith('  - ')) {
        items.push(lines[i].slice(4).trim());
        i++;
      }
      result[key] = items;
    } else {
      result[key] = rest.replace(/^['"]|['"]$/g, '');
      i++;
    }
  }
  return result;
}

// --- Check 1: Wiki-links ---

function checkWikiLinks(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  // Bare name lookup: "Groth16" → true
  const nameSet = new Set(files.map(f => path.basename(f.file, '.md')));
  // Path lookup: "ProofSystems/Groth16" → true (with and without .md)
  const pathSet = new Set(files.map(f => f.rel.replace(/\.md$/, '')));

  const errors: string[] = [];
  let count = 0;

  for (const { rel, abs } of files) {
    // Normalize escaped pipes (\|) used in table cells so wikilinks parse correctly
    const content = fs.readFileSync(abs, 'utf-8').replace(/\\\|/g, '|');
    const re = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      const raw = m[1].trim();
      // Pure anchor link (e.g. [[#Papers]]) — refers to a heading in the same file, always valid
      if (raw.startsWith('#')) continue;
      count++;
      // Strip optional heading anchor (e.g. "SomeFile#Heading" → "SomeFile")
      const target = raw.includes('#') ? raw.slice(0, raw.indexOf('#')) : raw;
      const isPath = target.includes('/');
      const resolved = isPath ? pathSet.has(target) : nameSet.has(target);
      if (!resolved) {
        errors.push(`    ${rel}  →  [[${raw}]]`);
      }
    }
  }
  return { errors, count };
}

// --- Check 2: Markdown relative links ---

function checkMarkdownLinks(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  const errors: string[] = [];
  let count = 0;

  for (const { rel, abs } of files) {
    const content = fs.readFileSync(abs, 'utf-8');
    const dir = path.dirname(abs);
    const re = /\[([^\]]*)\]\(([^)]*)\)/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      const href = m[2].trim();
      if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#')) continue;
      count++;
      const resolved = path.resolve(dir, href);
      if (!fs.existsSync(resolved)) {
        errors.push(`    ${rel}  →  ${href}`);
      }
    }
  }
  return { errors, count };
}

// --- Check 3: Orphaned files ---

function checkOrphans(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  const referencedNames = new Set<string>();
  const referencedPaths = new Set<string>();

  // Collect all tag values from frontmatter (for Tags/ special case)
  const frontmatterTags = new Set<string>();

  // Sources to scan: all vault files + root README
  const scanSources: { abs: string; dir: string }[] = files.map(f => ({ abs: f.abs, dir: path.dirname(f.abs) }));
  const rootReadme = path.join(VAULT_ROOT, 'README.md');
  if (fs.existsSync(rootReadme)) {
    scanSources.push({ abs: rootReadme, dir: VAULT_ROOT });
  }

  for (const { abs, dir } of scanSources) {
    // Normalize escaped pipes (\|) used in table cells so wikilinks parse correctly
    const content = fs.readFileSync(abs, 'utf-8').replace(/\\\|/g, '|');

    // Wiki-links
    const wikiRe = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    let m: RegExpExecArray | null;
    while ((m = wikiRe.exec(content)) !== null) {
      referencedNames.add(m[1].trim());
    }

    // Markdown links
    const mdRe = /\[([^\]]*)\]\(([^)]*)\)/g;
    while ((m = mdRe.exec(content)) !== null) {
      const href = m[2].trim();
      if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('#')) continue;
      const resolved = path.resolve(dir, href);
      referencedPaths.add(resolved);
    }

    // Frontmatter tags
    const fm = parseFrontmatter(content);
    if (fm && Array.isArray(fm['tags'])) {
      for (const tag of fm['tags'] as string[]) {
        frontmatterTags.add(tag);
      }
    }
  }

  const errors: string[] = [];
  for (const { rel, abs, dir, file } of files) {
    const baseName = path.basename(file, '.md');
    const isReferenced =
      referencedNames.has(baseName) ||
      referencedPaths.has(abs) ||
      (dir === 'Tags' && frontmatterTags.has(baseName));
    if (!isReferenced) {
      errors.push(`    ${rel}`);
    }
  }

  return { errors, count: files.length };
}

// --- Check 4: Navigation ---

function checkNavigation(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  const errors: string[] = [];

  for (const { rel, abs, dir, file } of files) {
    const label = SECTION_LABELS[dir];
    const parts = rel.split('/');
    const content = fs.readFileSync(abs, 'utf-8');
    let expected: string;
    if (parts.length === 3) {
      // Subdirectory file: e.g. Resources/papers/CS97.md
      const subdir = parts[1];
      const name = path.basename(file, '.md');
      if (file === 'README.md') {
        expected = `[Home](../../README.md) > [${label}](../README.md) > ${subdir}`;
      } else {
        expected = `[Home](../../README.md) > [${label}](../README.md) > [${subdir}](README.md) > ${name}`;
      }
    } else {
      if (file === 'README.md') {
        expected = `[Home](../README.md) > ${label}`;
      } else {
        const name = path.basename(file, '.md');
        expected = `[Home](../README.md) > [${label}](README.md) > ${name}`;
      }
    }
    if (!content.includes(expected)) {
      errors.push(`    ${rel}  (missing)`);
    }
  }

  return { errors, count: files.length };
}

// --- Check 5: Frontmatter ---

function checkFrontmatter(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  const errors: string[] = [];

  const typeRequiredFields: Record<string, string[]> = {
    proof_system: ['type', 'tags', 'year'],
    tooling_application: ['type', 'subtype', 'tags'],
    cryptographic_primitive: ['type', 'tags'],
    intermediate_representation: ['type', 'tags'],
    tag: ['type'],
    theoretical_model: ['type', 'tags'],
  };

  for (const { rel, abs, file } of files) {
    if (file === 'README.md') continue;
    const content = fs.readFileSync(abs, 'utf-8');
    const fm = parseFrontmatter(content);
    if (!fm) {
      errors.push(`    ${rel}  (no frontmatter)`);
      continue;
    }

    if (!fm['type']) {
      errors.push(`    ${rel}  (missing: type)`);
    }
    const type = fm['type'] as string | undefined;
    if (type !== 'tag' && !('tags' in fm)) {
      errors.push(`    ${rel}  (missing: tags)`);
    }

    if (type && typeRequiredFields[type]) {
      for (const field of typeRequiredFields[type]) {
        if (field === 'type' || field === 'tags') continue; // already checked
        if (!(field in fm) || fm[field] === '' || fm[field] === undefined) {
          errors.push(`    ${rel}  (missing: ${field})`);
        }
      }
    }
  }

  return { errors, count: files.length };
}

// --- Check 6: Tag consistency ---

function checkTagConsistency(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  const allTags = new Set<string>();
  for (const { abs } of files) {
    const content = fs.readFileSync(abs, 'utf-8');
    const fm = parseFrontmatter(content);
    if (fm && Array.isArray(fm['tags'])) {
      for (const tag of fm['tags'] as string[]) {
        allTags.add(tag);
      }
    }
  }

  const errors: string[] = [];
  for (const tag of allTags) {
    const tagFile = path.join(VAULT_ROOT, 'Tags', `${tag}.md`);
    if (!fs.existsSync(tagFile)) {
      errors.push(`    ${tag}  (no Tags/${tag}.md)`);
    }
  }

  return { errors, count: allTags.size };
}

// --- Main ---

function printSection(
  label: string,
  count: number,
  errors: string[],
  unit = 'links'
): boolean {
  const header = `[${label}]`.padEnd(36) + `(${count} ${unit} checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok(`All ${label.toLowerCase()} resolve`)}`);
  } else {
    console.log(`  ${fail(`${errors.length} broken ${label.toLowerCase()}:`)}`);
    for (const e of errors) console.log(e);
  }
  console.log();
  return errors.length > 0;
}

if (!QUIET) console.log('=== ZKP Vault Verification ===\n');

const files = getAllMdFiles();

const wikiResult = checkWikiLinks(files);
const mdResult = checkMarkdownLinks(files);
const orphanResult = checkOrphans(files);
const breadcrumbResult = checkNavigation(files);
const fmResult = checkFrontmatter(files);
const tagResult = checkTagConsistency(files);

let failCount = 0;

function report(label: string, count: string, errors: string[], okMsg: string): boolean {
  if (errors.length === 0) {
    if (!QUIET) {
      console.log(`${label.padEnd(36)}(${count})`);
      console.log(`  ${ok(okMsg)}`);
      console.log();
    }
    return false;
  } else {
    console.log(`${label.padEnd(36)}(${count})`);
    console.log(`  ${fail(`${errors.length} error${errors.length === 1 ? '' : 's'}:`)}`);
    for (const e of errors) console.log(e);
    console.log();
    return true;
  }
}

if (report('[Wiki-links]',      `${wikiResult.count} links checked`,       wikiResult.errors,       'All wiki-links resolve'))       failCount++;
if (report('[Markdown links]',  `${mdResult.count} links checked`,         mdResult.errors,         'All markdown links resolve'))   failCount++;
if (report('[File coverage]',   `${orphanResult.count} files checked`,     orphanResult.errors,     'All files are linked'))         failCount++;
if (report('[Navigation]',      `${breadcrumbResult.count} files checked`, breadcrumbResult.errors, 'All navigation present'))       failCount++;
if (report('[Frontmatter]',     `${fmResult.count} files checked`,         fmResult.errors,         'All frontmatter valid'))        failCount++;
if (report('[Tag consistency]', `${tagResult.count} tags checked`,         tagResult.errors,        'All tags have tag files'))      failCount++;

if (failCount === 0) {
  if (!QUIET) console.log(`=== Result: ${GREEN}PASS${RESET} ===`);
  process.exit(0);
} else {
  console.log(`=== Result: ${RED}FAIL${RESET} (${failCount} ${failCount === 1 ? 'category' : 'categories'} with errors) ===`);
  process.exit(1);
}

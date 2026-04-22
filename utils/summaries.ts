/**
 * summaries.ts
 *
 * Generates summary README files for vault sections:
 *   - Resources/README.md  (by type + by topic views)
 *   - Tags/README.md       (alphabetical table with descriptions)
 *   - Tags/<tag>.md        (## Entries tagged section replaced with static list)
 *
 * Usage:
 *   bun run utils/summaries.ts                      # generate all
 *   bun run utils/summaries.ts resources           # Resources/README.md only
 *   bun run utils/summaries.ts resource-subtypes   # Resources/<subtype>/README.md only
 *   bun run utils/summaries.ts tags                # Tags/README.md + all tag entry lists
 *   bun run utils/summaries.ts tag-files           # Tag entry lists only
 *   bun run utils/summaries.ts related             # ## Related resources sections only
 *
 * Cross-linking resources:
 *   Add `related: [<filename>, ...]` to a resource's frontmatter (filename without .md).
 *   summaries.ts will populate `## Related resources` in both files bidirectionally.
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_ROOT = path.resolve(__dirname, '../docs');
const QUIET = process.argv.includes('--quiet');

// ---------------------------------------------------------------------------
// Shared: frontmatter parsing
// ---------------------------------------------------------------------------

function parseFrontmatter(content: string): Record<string, unknown> {
  if (!content.startsWith('---\n')) return {};
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return {};
  const yaml = content.slice(4, end);
  const result: Record<string, unknown> = {};
  const lines = yaml.split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) { i++; continue; }
    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();
    if (rest === '' || rest === '[]') {
      const items: string[] = [];
      if (rest === '[]') { result[key] = items; i++; continue; }
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

function extractH1(content: string): string {
  const m = content.match(/^# (.+)$/m);
  return m ? m[1].trim() : '';
}

function extractUrl(content: string): string {
  const fm = parseFrontmatter(content);
  if (fm.url) return String(fm.url);
  // Fallback for any files not yet migrated
  const m = content.match(/^URL:: (.+)$/m);
  return m ? m[1].trim() : '';
}

/** Extract the first non-empty paragraph after a given `## Heading`. */
function extractSectionParagraph(content: string, heading: string): string {
  const re = new RegExp(`^## ${heading}\\s*\\n([\\s\\S]*?)(?=\\n##|$)`, 'm');
  const m = content.match(re);
  if (!m) return '';
  const body = m[1].trim();
  // Return the first paragraph (up to a blank line)
  const para = body.split(/\n\n/)[0].replace(/\n/g, ' ').trim();
  return para;
}

// ---------------------------------------------------------------------------
// Resources README
// ---------------------------------------------------------------------------

const RESOURCES_ROOT = path.join(VAULT_ROOT, 'Resources');
const SUBTYPES = ['papers', 'blogs', 'books', 'wikis', 'docs', 'code'];
const SUBTYPE_LABELS: Record<string, string> = {
  papers: 'Papers',
  blogs: 'Blogs & Explainers',
  books: 'Books',
  wikis: 'Wikis & Standards',
  docs: 'Documentation',
  code: 'Code & Repositories',
};

interface ResourceMeta {
  filename: string;
  subtype: string;
  title: string;
  year: string;
  authors: string[];
  tags: string[];
  url: string;
  related: string[];
}

function loadResources(): ResourceMeta[] {
  const resources: ResourceMeta[] = [];
  for (const subtype of SUBTYPES) {
    const dir = path.join(RESOURCES_ROOT, subtype);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'README.md');
    for (const file of files) {
      const content = fs.readFileSync(path.join(dir, file), 'utf-8');
      const fm = parseFrontmatter(content);
      resources.push({
        filename: path.basename(file, '.md'),
        subtype,
        title: extractH1(content) || path.basename(file, '.md'),
        year: String(fm['year'] ?? ''),
        authors: (fm['authors'] as string[] | undefined) ?? [],
        tags: (fm['tags'] as string[] | undefined) ?? [],
        url: extractUrl(content),
        related: (fm['related'] as string[] | undefined) ?? [],
      });
    }
  }
  return resources;
}

function authorsStr(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length <= 3) return authors.join(', ');
  return `${authors[0]} et al.`;
}

function resourceWikilink(r: ResourceMeta): string {
  return `[[${r.filename}|${r.title}]]`;
}

function renderResourcesByType(resources: ResourceMeta[]): string {
  const lines: string[] = [];
  lines.push('## By Type\n');
  for (const subtype of SUBTYPES) {
    const entries = resources.filter(r => r.subtype === subtype);
    if (entries.length === 0) continue;
    lines.push(`### ${SUBTYPE_LABELS[subtype]}\n`);
    lines.push('| Resource | Year | Authors | Tags |');
    lines.push('|---|---|---|---|');
    const sorted = [...entries].sort((a, b) => {
      const ya = parseInt(a.year) || 0;
      const yb = parseInt(b.year) || 0;
      return yb - ya || a.title.localeCompare(b.title);
    });
    for (const r of sorted) {
      lines.push(`| ${resourceWikilink(r)} | ${r.year} | ${authorsStr(r.authors)} | ${r.tags.join(', ')} |`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

function renderResourcesByTopic(resources: ResourceMeta[]): string {
  const lines: string[] = [];
  lines.push('## By Topic\n');
  const tagMap = new Map<string, ResourceMeta[]>();
  for (const r of resources) {
    for (const tag of r.tags) {
      if (!tagMap.has(tag)) tagMap.set(tag, []);
      tagMap.get(tag)!.push(r);
    }
  }
  if (tagMap.size === 0) {
    lines.push('_No tags assigned yet._\n');
    return lines.join('\n');
  }
  const sortedTags = [...tagMap.keys()].sort();
  for (const tag of sortedTags) {
    const entries = tagMap.get(tag)!;
    lines.push(`### ${tag}\n`);
    const sorted = [...entries].sort((a, b) => {
      const ya = parseInt(a.year) || 0;
      const yb = parseInt(b.year) || 0;
      return yb - ya || a.title.localeCompare(b.title);
    });
    for (const r of sorted) {
      const yearStr = r.year ? `, ${r.year}` : '';
      lines.push(`- ${resourceWikilink(r)} (${r.subtype.replace(/s$/, '')}${yearStr})`);
    }
    lines.push('');
  }
  return lines.join('\n');
}

/** Convert a heading string to a GitHub/mkdocs-style anchor slug. */
function headingSlug(s: string): string {
  return s.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
}

function buildNavTable(tags: string[], cols: number, cellFn: (s: string) => string = s => `[${s}](#${headingSlug(s)})`): string {
  const N = tags.length;
  const baseRows = Math.floor(N / cols);
  const extraCols = N % cols;
  const columns: string[][] = [];
  let idx = 0;
  for (let c = 0; c < cols; c++) {
    const colLen = baseRows + (c < extraCols ? 1 : 0);
    columns.push(tags.slice(idx, idx + colLen));
    idx += colLen;
  }
  const numRows = baseRows + (extraCols > 0 ? 1 : 0);
  const colHeaders = columns.map(col => {
    if (col.length === 0) return '';
    const first = col[0][0].toLowerCase();
    const last = col[col.length - 1][0].toLowerCase();
    return first === last ? first : `${first}-${last}`;
  });
  const rows: string[] = [];
  rows.push('| ' + colHeaders.join(' | ') + ' |');
  rows.push('| ' + Array(cols).fill('---').join(' | ') + ' |');
  for (let r = 0; r < numRows; r++) {
    const cells = columns.map(col => col[r] !== undefined ? cellFn(col[r]) : '');
    rows.push('| ' + cells.join(' | ') + ' |');
  }
  return rows.join('\n');
}

function generateResourcesReadme(): void {
  const resources = loadResources();
  if (!QUIET) console.log(`Resources: loaded ${resources.length} entries.`);

  const byType = renderResourcesByType(resources);
  const byTopic = renderResourcesByTopic(resources);

  const typeNavItems = SUBTYPES
    .filter(s => resources.some(r => r.subtype === s))
    .map(s => `- [${SUBTYPE_LABELS[s]}](#${headingSlug(SUBTYPE_LABELS[s])})`)
    .join('\n');

  const allTags = [...new Set(resources.flatMap(r => r.tags))].sort();
  const topicNavTable = buildNavTable(allTags, 5);

  const total = resources.length;
  const readme = `---
type: resources
status: generated
generated: true
tags:
  - zkp
  - papers
  - tutorials
  - learning
---

[Home](../README.md) > Resources

# ZKP Resources

Curated external resources for Zero-Knowledge Proofs — ${total} entries across papers, blogs, books, wikis, docs, and code repositories.

_This file is auto-generated. Run \`devbox run summaries\` to update._

## By Type

${typeNavItems}

## By Topic

${topicNavTable}

${byType}
${byTopic}`;

  fs.writeFileSync(path.join(RESOURCES_ROOT, 'README.md'), readme, 'utf-8');
  if (!QUIET) console.log('Written: Resources/README.md');
}

// ---------------------------------------------------------------------------
// Resources subtype READMEs (Resources/papers/README.md, etc.)
// ---------------------------------------------------------------------------

function generateResourceSubtypeReadmes(): void {
  const all = loadResources();

  for (const subtype of SUBTYPES) {
    const entries = all.filter(r => r.subtype === subtype);
    const dir = path.join(RESOURCES_ROOT, subtype);
    if (!fs.existsSync(dir)) continue;

    const label = SUBTYPE_LABELS[subtype];
    const sorted = [...entries].sort((a, b) => {
      const ya = parseInt(a.year) || 0;
      const yb = parseInt(b.year) || 0;
      return yb - ya || a.title.localeCompare(b.title);
    });

    const navTable = buildNavTable(
      sorted.map(r => r.filename),
      5,
      filename => `[[${filename}]]`,
    );

    const tableRows = sorted.map(r =>
      `| ${resourceWikilink(r)} | ${r.year} | ${authorsStr(r.authors)} | ${r.tags.join(', ')} |`
    );

    const readme = `---
type: resource-index
status: generated
generated: true
subtype: ${subtype}
tags: []
---

[Home](../../README.md) > [Resources](../README.md) > ${subtype}

# ZKP ${label}

${entries.length} entr${entries.length === 1 ? 'y' : 'ies'}.

_This file is auto-generated. Run \`devbox run summaries\` to update._

## Navigation

${navTable}

## All ${label}

| Resource | Year | Authors | Tags |
|---|---|---|---|
${tableRows.join('\n')}
`;

    fs.writeFileSync(path.join(dir, 'README.md'), readme, 'utf-8');
    if (!QUIET) console.log(`Written: Resources/${subtype}/README.md`);
  }
}

// ---------------------------------------------------------------------------
// Tags README
// ---------------------------------------------------------------------------

interface TagMeta {
  filename: string;
  title: string;
  description: string;
}

function loadTags(): TagMeta[] {
  const tagsDir = path.join(VAULT_ROOT, 'Tags');
  if (!fs.existsSync(tagsDir)) return [];
  const files = fs.readdirSync(tagsDir)
    .filter(f => f.endsWith('.md') && f !== 'README.md')
    .sort();
  return files.map(file => {
    const content = fs.readFileSync(path.join(tagsDir, file), 'utf-8');
    return {
      filename: path.basename(file, '.md'),
      title: extractH1(content) || path.basename(file, '.md'),
      description: extractSectionParagraph(content, 'Description'),
    };
  });
}

function generateTagsReadme(): void {
  const tags = loadTags();
  if (!QUIET) console.log(`Tags: loaded ${tags.length} entries.`);

  const navTable = buildNavTable(tags.map(t => t.filename), 5, s => `[[${s}]]`);

  const tableRows = tags.map(t =>
    `| [[${t.filename}|${t.title}]] | ${t.description} |`
  );

  const readme = `---
type: tags-index
status: generated
generated: true
tags: []
---

[Home](../README.md) > Tags

# ZKP Tags

All ${tags.length} tag definitions used across the vault.

_This file is auto-generated. Run \`devbox run summaries\` to update._

## Navigation

${navTable}

## All Tags

| Tag | Description |
|---|---|
${tableRows.join('\n')}
`;

  fs.writeFileSync(path.join(VAULT_ROOT, 'Tags', 'README.md'), readme, 'utf-8');
  if (!QUIET) console.log('Written: Tags/README.md');
}

// ---------------------------------------------------------------------------
// Tag entry lists (Tags/<tag>.md → ## Entries tagged section)
// ---------------------------------------------------------------------------

const CONTENT_DIRS = [
  'CryptographicPrimitives',
  'ProofSystems',
  'IntermediateRepresentations',
  'TheoreticalModels',
  'ToolingApplication',
  'Applications',
  'Resources/papers',
  'Resources/blogs',
  'Resources/books',
  'Resources/wikis',
  'Resources/docs',
  'Resources/code',
  'Resources/videos',
  'Resources/presentations',
];

function buildTagIndex(): Map<string, Array<{ title: string; filename: string }>> {
  const index = new Map<string, Array<{ title: string; filename: string }>>();
  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join(VAULT_ROOT, dir);
    if (!fs.existsSync(dirPath)) continue;
    const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md') && f !== 'README.md');
    for (const file of files) {
      const content = fs.readFileSync(path.join(dirPath, file), 'utf-8');
      const fm = parseFrontmatter(content);
      const tags = (fm['tags'] as string[] | undefined) ?? [];
      if (tags.length === 0) continue;
      const title = extractH1(content) || path.basename(file, '.md');
      const filename = path.basename(file, '.md');
      for (const tag of tags) {
        if (!index.has(tag)) index.set(tag, []);
        index.get(tag)!.push({ title, filename });
      }
    }
  }
  return index;
}

function generateTagFiles(): void {
  const tagIndex = buildTagIndex();
  const tagsDir = path.join(VAULT_ROOT, 'Tags');
  if (!fs.existsSync(tagsDir)) return;

  const files = fs.readdirSync(tagsDir).filter(f => f.endsWith('.md') && f !== 'README.md').sort();
  let updated = 0;

  for (const file of files) {
    const slug = path.basename(file, '.md');
    const filePath = path.join(tagsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    const HEADING = '\n## Entries tagged\n';
    const headingIdx = content.indexOf(HEADING);
    if (headingIdx === -1) continue;

    const bodyStart = headingIdx + HEADING.length;
    const nextHeadingIdx = content.indexOf('\n## ', bodyStart);
    const bodyEnd = nextHeadingIdx === -1 ? content.length : nextHeadingIdx;

    const entries = tagIndex.get(slug) ?? [];
    const sorted = [...entries].sort((a, b) => a.title.localeCompare(b.title));

    const listBody = sorted.length === 0
      ? '\n_No entries tagged yet._\n'
      : '\n' + sorted.map(e => `- [[${e.filename}|${e.title}]]`).join('\n') + '\n';

    const newContent = content.slice(0, bodyStart) + listBody + content.slice(bodyEnd);

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      updated++;
      if (!QUIET) console.log(`  Tags/${file}: ${sorted.length} entr${sorted.length === 1 ? 'y' : 'ies'}`);
    }
  }

  if (!QUIET) console.log(`Tags: updated ${updated} tag files.`);
}

// ---------------------------------------------------------------------------
// Related resources sections (Resources/**/*.md → ## Related resources)
// ---------------------------------------------------------------------------

function generateRelatedSections(): void {
  const all = loadResources();

  // Build filename → ResourceMeta map
  const byFilename = new Map<string, ResourceMeta>();
  for (const r of all) byFilename.set(r.filename, r);

  // Build bidirectional relation map
  const relations = new Map<string, Set<string>>();
  const ensureSet = (k: string) => { if (!relations.has(k)) relations.set(k, new Set()); };
  for (const r of all) {
    for (const rel of r.related) {
      ensureSet(r.filename);
      ensureSet(rel);
      relations.get(r.filename)!.add(rel);
      relations.get(rel)!.add(r.filename);
    }
  }

  if (relations.size === 0) {
    if (!QUIET) console.log('Related: no relations defined.');
    return;
  }

  let updated = 0;
  for (const subtype of SUBTYPES) {
    const dir = path.join(RESOURCES_ROOT, subtype);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md') && f !== 'README.md');
    for (const file of files) {
      const filename = path.basename(file, '.md');
      const relatedSet = relations.get(filename);
      if (!relatedSet || relatedSet.size === 0) continue;

      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      const HEADING = '\n## Related resources\n';
      const headingIdx = content.indexOf(HEADING);
      const nextHeadingIdx = headingIdx !== -1 ? content.indexOf('\n## ', headingIdx + HEADING.length) : -1;

      const relatedEntries = [...relatedSet]
        .map(rel => byFilename.get(rel))
        .filter(Boolean) as ResourceMeta[];
      const sorted = [...relatedEntries].sort((a, b) => a.title.localeCompare(b.title));

      const listBody = '\n' + sorted.map(r => {
        const yearStr = r.year ? `, ${r.year}` : '';
        return `- [[${r.filename}|${r.title}]] (${r.subtype.replace(/s$/, '')}${yearStr})`;
      }).join('\n') + '\n';

      let newContent: string;
      if (headingIdx !== -1) {
        const bodyEnd = nextHeadingIdx === -1 ? content.length : nextHeadingIdx;
        newContent = content.slice(0, headingIdx + HEADING.length) + listBody + content.slice(bodyEnd);
      } else {
        // Append the section at end of file (ensure trailing newline)
        const base = content.endsWith('\n') ? content : content + '\n';
        newContent = base + HEADING + listBody;
      }

      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        updated++;
        if (!QUIET) console.log(`  Resources/${subtype}/${file}: ${sorted.length} related`);
      }
    }
  }

  if (!QUIET) console.log(`Related: updated ${updated} resource files.`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const arg = process.argv[2] ?? 'all';

if (arg === 'resources' || arg === 'all') generateResourcesReadme();
if (arg === 'resource-subtypes' || arg === 'all') generateResourceSubtypeReadmes();
if (arg === 'tags' || arg === 'all') generateTagsReadme();
if (arg === 'tag-files' || arg === 'tags' || arg === 'all') generateTagFiles();
if (arg === 'related' || arg === 'all') generateRelatedSections();

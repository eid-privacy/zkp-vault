/**
 * generateResourcesReadme.ts
 *
 * Reads all Resources/subtype/*.md files and generates Resources/README.md
 * with two views:
 *   1. By type — one table per subdirectory
 *   2. By topic — entries grouped by tag
 *
 * Usage:
 *   bun run utils/generateResourcesReadme.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const VAULT_ROOT = path.resolve(__dirname, '..');
const RESOURCES_ROOT = path.join(VAULT_ROOT, 'Resources');
const OUTPUT_PATH = path.join(RESOURCES_ROOT, 'README.md');

const SUBTYPES = ['papers', 'blogs', 'books', 'wikis', 'docs', 'code', 'videos', 'presentations'];

const SUBTYPE_LABELS: Record<string, string> = {
  papers: 'Papers',
  blogs: 'Blogs & Explainers',
  books: 'Books',
  wikis: 'Wikis & Standards',
  docs: 'Documentation',
  code: 'Code & Repositories',
  videos: 'Videos',
  presentations: 'Presentations',
};

// ---------------------------------------------------------------------------
// Frontmatter parsing (minimal, no external deps)
// ---------------------------------------------------------------------------

interface ResourceMeta {
  filename: string;   // without .md
  subtype: string;
  title: string;
  year: string;
  authors: string[];
  tags: string[];
  url: string;
}

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

function extractTitle(content: string): string {
  const m = content.match(/^# (.+)$/m);
  return m ? m[1].trim() : '';
}

function extractUrl(content: string): string {
  const m = content.match(/^URL:: (.+)$/m);
  return m ? m[1].trim() : '';
}

// ---------------------------------------------------------------------------
// Load all resource entries
// ---------------------------------------------------------------------------

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
        title: extractTitle(content) || path.basename(file, '.md'),
        year: String(fm['year'] ?? ''),
        authors: (fm['authors'] as string[] | undefined) ?? [],
        tags: (fm['tags'] as string[] | undefined) ?? [],
        url: extractUrl(content),
      });
    }
  }
  return resources;
}

// ---------------------------------------------------------------------------
// Render helpers
// ---------------------------------------------------------------------------

function authorsStr(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length <= 3) return authors.join(', ');
  return `${authors[0]} et al.`;
}

function wikilink(r: ResourceMeta): string {
  return `[[${r.filename}\\|${r.title}]]`;
}

// ---------------------------------------------------------------------------
// View 1: By type
// ---------------------------------------------------------------------------

function renderByType(resources: ResourceMeta[]): string {
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
      const link = wikilink(r);
      const authors = authorsStr(r.authors);
      const tags = r.tags.join(', ');
      lines.push(`| ${link} | ${r.year} | ${authors} | ${tags} |`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// View 2: By topic (tags)
// ---------------------------------------------------------------------------

function renderByTopic(resources: ResourceMeta[]): string {
  const lines: string[] = [];
  lines.push('## By Topic\n');

  // Collect all tags, skip empties
  const tagMap = new Map<string, ResourceMeta[]>();
  for (const r of resources) {
    for (const tag of r.tags) {
      if (!tagMap.has(tag)) tagMap.set(tag, []);
      tagMap.get(tag)!.push(r);
    }
  }

  if (tagMap.size === 0) {
    lines.push('_No tags assigned yet. Add tags to resource files to populate this view._\n');
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
      lines.push(`- ${wikilink(r)} (${r.subtype.replace(/s$/, '')}${yearStr})`);
    }
    lines.push('');
  }

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const resources = loadResources();
console.log(`Loaded ${resources.length} resource(s) across ${SUBTYPES.length} types.`);

const byType = renderByType(resources);
const byTopic = renderByTopic(resources);

const total = resources.length;
const readme = `---
type: resources
status: generated
tags:
  - zkp
  - papers
  - tutorials
  - learning
---

[Home](../README.md) > Resources

# ZKP Resources

Curated external resources for Zero-Knowledge Proofs — ${total} entries across papers, blogs, books, wikis, docs, and code repositories.

_This file is auto-generated. Run \`devbox run gen-resources-readme\` to update._

${byType}
${byTopic}`;

fs.writeFileSync(OUTPUT_PATH, readme, 'utf-8');
console.log(`Written: Resources/README.md`);

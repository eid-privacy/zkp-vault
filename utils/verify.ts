import * as fs from 'fs';
import * as path from 'path';

const VAULT_ROOT = path.resolve(__dirname, '..');

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

function ok(msg: string) { return `${GREEN}✓${RESET} ${msg}`; }
function fail(msg: string) { return `${RED}✗${RESET} ${msg}`; }

// --- Helpers ---

function getAllMdFiles(): { rel: string; abs: string; dir: string; file: string }[] {
  const results: { rel: string; abs: string; dir: string; file: string }[] = [];
  for (const dir of Object.keys(SECTION_LABELS)) {
    const dirPath = path.join(VAULT_ROOT, dir);
    if (!fs.existsSync(dirPath)) continue;
    for (const file of fs.readdirSync(dirPath).filter(f => f.endsWith('.md'))) {
      results.push({
        rel: `${dir}/${file}`,
        abs: path.join(dirPath, file),
        dir,
        file,
      });
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
    const content = fs.readFileSync(abs, 'utf-8');
    const re = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    let m: RegExpExecArray | null;
    while ((m = re.exec(content)) !== null) {
      count++;
      const target = m[1].trim();
      const isPath = target.includes('/');
      const resolved = isPath ? pathSet.has(target) : nameSet.has(target);
      if (!resolved) {
        errors.push(`    ${rel}  →  [[${target}]]`);
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
    const content = fs.readFileSync(abs, 'utf-8');

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

// --- Check 4: Breadcrumbs ---

function checkBreadcrumbs(files: ReturnType<typeof getAllMdFiles>): { errors: string[]; count: number } {
  const errors: string[] = [];

  for (const { rel, abs, dir, file } of files) {
    const label = SECTION_LABELS[dir];
    const content = fs.readFileSync(abs, 'utf-8');
    let expected: string;
    if (file === 'README.md') {
      expected = `[Home](../README.md) > ${label}`;
    } else {
      const name = path.basename(file, '.md');
      expected = `[Home](../README.md) > [${label}](README.md) > ${name}`;
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

  for (const { rel, abs } of files) {
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

console.log('=== ZKP Vault Verification ===\n');

const files = getAllMdFiles();

const wikiResult = checkWikiLinks(files);
const mdResult = checkMarkdownLinks(files);
const orphanResult = checkOrphans(files);
const breadcrumbResult = checkBreadcrumbs(files);
const fmResult = checkFrontmatter(files);
const tagResult = checkTagConsistency(files);

let failCount = 0;

// Wiki-links
{
  const { errors, count } = wikiResult;
  const header = `[Wiki-links]`.padEnd(36) + `(${count} links checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok('All wiki-links resolve')}`);
  } else {
    console.log(`  ${fail(`${errors.length} broken wiki-links:`)}`);
    for (const e of errors) console.log(e);
    failCount++;
  }
  console.log();
}

// Markdown links
{
  const { errors, count } = mdResult;
  const header = `[Markdown links]`.padEnd(36) + `(${count} links checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok('All markdown links resolve')}`);
  } else {
    console.log(`  ${fail(`${errors.length} broken markdown links:`)}`);
    for (const e of errors) console.log(e);
    failCount++;
  }
  console.log();
}

// File coverage
{
  const { errors, count } = orphanResult;
  const header = `[File coverage]`.padEnd(36) + `(${count} files checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok('All files are linked')}`);
  } else {
    console.log(`  ${fail(`${errors.length} orphaned files:`)}`);
    for (const e of errors) console.log(e);
    failCount++;
  }
  console.log();
}

// Breadcrumbs
{
  const { errors, count } = breadcrumbResult;
  const header = `[Breadcrumbs]`.padEnd(36) + `(${count} files checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok('All breadcrumbs present')}`);
  } else {
    console.log(`  ${fail(`${errors.length} files missing breadcrumbs:`)}`);
    for (const e of errors) console.log(e);
    failCount++;
  }
  console.log();
}

// Frontmatter
{
  const { errors, count } = fmResult;
  const header = `[Frontmatter]`.padEnd(36) + `(${count} files checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok('All frontmatter valid')}`);
  } else {
    console.log(`  ${fail(`${errors.length} frontmatter issues:`)}`);
    for (const e of errors) console.log(e);
    failCount++;
  }
  console.log();
}

// Tag consistency
{
  const { errors, count } = tagResult;
  const header = `[Tag consistency]`.padEnd(36) + `(${count} tags checked)`;
  console.log(header);
  if (errors.length === 0) {
    console.log(`  ${ok('All tags have tag files')}`);
  } else {
    console.log(`  ${fail(`${errors.length} tags without tag files:`)}`);
    for (const e of errors) console.log(e);
    failCount++;
  }
  console.log();
}

if (failCount === 0) {
  console.log(`=== Result: ${GREEN}PASS${RESET} ===`);
  process.exit(0);
} else {
  console.log(`=== Result: ${RED}FAIL${RESET} (${failCount} ${failCount === 1 ? 'category' : 'categories'} with errors) ===`);
  process.exit(1);
}

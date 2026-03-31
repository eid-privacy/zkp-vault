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

const DRY_RUN = process.argv.includes('--dry-run');
const QUIET = process.argv.includes('--quiet');

function buildBreadcrumb(dir: string, subdir: string | null, filename: string): string {
  const label = SECTION_LABELS[dir];
  const name = path.basename(filename, '.md');
  if (subdir === null) {
    if (filename === 'README.md') {
      return `[Home](../README.md) > ${label}`;
    }
    return `[Home](../README.md) > [${label}](README.md) > ${name}`;
  } else {
    if (filename === 'README.md') {
      return `[Home](../../README.md) > [${label}](../README.md) > ${subdir}`;
    }
    return `[Home](../../README.md) > [${label}](../README.md) > [${subdir}](README.md) > ${name}`;
  }
}

function insertBreadcrumb(filePath: string, breadcrumb: string): void {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Idempotency: skip if any home navigation already present
  if (content.includes('[Home](../README.md)') || content.includes('[Home](../../README.md)')) {
    if (!QUIET) console.log(`  skip  ${path.relative(VAULT_ROOT, filePath)}`);
    return;
  }

  let newContent: string;

  if (content.startsWith('---\n')) {
    // Insert after closing frontmatter delimiter
    const closingDelim = content.indexOf('\n---\n', 4);
    if (closingDelim !== -1) {
      const after = closingDelim + 5; // skip '\n---\n'
      newContent =
        content.slice(0, after) +
        '\n' + breadcrumb + '\n' +
        content.slice(after);
    } else {
      // Malformed frontmatter — prepend
      newContent = breadcrumb + '\n\n' + content;
    }
  } else {
    // No frontmatter — prepend
    newContent = breadcrumb + '\n\n' + content;
  }

  if (DRY_RUN) {
    if (!QUIET) console.log(`  dry   ${path.relative(VAULT_ROOT, filePath)}`);
    if (!QUIET) console.log(`        ${breadcrumb}`);
  } else {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    if (!QUIET) console.log(`  write ${path.relative(VAULT_ROOT, filePath)}`);
  }
}

for (const [dir, label] of Object.entries(SECTION_LABELS)) {
  const dirPath = path.join(VAULT_ROOT, dir);
  if (!fs.existsSync(dirPath)) {
    if (!QUIET) console.log(`\n${label}: directory not found, skipping`);
    continue;
  }

  if (!QUIET) console.log(`\n${label}`);
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith('.md')) {
      insertBreadcrumb(path.join(dirPath, entry.name), buildBreadcrumb(dir, null, entry.name));
    } else if (entry.isDirectory()) {
      const subdir = entry.name;
      const subdirPath = path.join(dirPath, subdir);
      const subEntries = fs.readdirSync(subdirPath, { withFileTypes: true });
      for (const subEntry of subEntries) {
        if (subEntry.isFile() && subEntry.name.endsWith('.md')) {
          insertBreadcrumb(
            path.join(subdirPath, subEntry.name),
            buildBreadcrumb(dir, subdir, subEntry.name),
          );
        }
      }
    }
  }
}

if (!QUIET) console.log(
  DRY_RUN
    ? '\n[dry-run] no files modified — rerun without --dry-run to apply'
    : '\ndone'
);

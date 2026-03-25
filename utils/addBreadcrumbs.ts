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

const DRY_RUN = process.argv.includes('--dry-run');

function buildBreadcrumb(dir: string, filename: string): string {
  const label = SECTION_LABELS[dir];
  const name = path.basename(filename, '.md');
  if (filename === 'README.md') {
    return `[Home](../README.md) > ${label}`;
  }
  return `[Home](../README.md) > [${label}](README.md) > ${name}`;
}

function insertBreadcrumb(filePath: string, breadcrumb: string): void {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Idempotency: skip if breadcrumb already present
  if (content.includes('[Home](../README.md)')) {
    console.log(`  skip  ${path.relative(VAULT_ROOT, filePath)}`);
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
    console.log(`  dry   ${path.relative(VAULT_ROOT, filePath)}`);
    console.log(`        ${breadcrumb}`);
  } else {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`  write ${path.relative(VAULT_ROOT, filePath)}`);
  }
}

for (const [dir, label] of Object.entries(SECTION_LABELS)) {
  const dirPath = path.join(VAULT_ROOT, dir);
  if (!fs.existsSync(dirPath)) {
    console.log(`\n${label}: directory not found, skipping`);
    continue;
  }

  console.log(`\n${label}`);
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));

  for (const file of files) {
    insertBreadcrumb(path.join(dirPath, file), buildBreadcrumb(dir, file));
  }
}

console.log(
  DRY_RUN
    ? '\n[dry-run] no files modified — rerun without --dry-run to apply'
    : '\ndone'
);

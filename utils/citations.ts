/**
 * Fetches citation counts for papers in docs/Resources/papers from OpenAlex and stores them
 * in each paper's frontmatter (`doi`, `citations`, `citations_updated`).
 *
 * Papers are looked up by DOI if known, otherwise by title. A title match must agree on the
 * title words and on the year (±2, to allow eprint vs. published version; any later year for an
 * exact title, as OpenAlex dates re-digitised old papers to 2004–2007); among matching
 * works, the most-cited one is taken. Entries updated less than MAX_AGE_DAYS ago are skipped.
 *
 * Usage:
 *   OPENALEX_API_KEY=... bun run utils/citations.ts            # update stale entries
 *   OPENALEX_API_KEY=... bun run utils/citations.ts --force    # update all entries
 *   bun run utils/citations.ts --dry-run                       # show matches, write nothing
 *
 * Run manually (devbox run citations), not in CI. Without OPENALEX_API_KEY, OpenAlex only
 * allows a small shared daily budget.
 */

import * as fs from 'fs';
import * as path from 'path';

const PAPERS_DIR = path.resolve(__dirname, '../docs/Resources/papers');
const API = 'https://api.openalex.org';
const MAX_AGE_DAYS = 30;
const DELAY_MS = 150;

const FORCE = process.argv.includes('--force');
const DRY_RUN = process.argv.includes('--dry-run');
const API_KEY = process.env.OPENALEX_API_KEY ?? '';

interface Work {
  display_name: string;
  cited_by_count: number;
  doi: string | null;
  publication_year: number;
}

function frontmatterValue(content: string, key: string): string | undefined {
  const m = content.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?\\s*$`, 'm'));
  return m ? m[1].trim() : undefined;
}

/** H1 without the trailing "(Authors Year)" / "(Groth16)" part. */
function paperTitle(content: string): string {
  const h1 = content.match(/^# (.+)$/m)?.[1] ?? '';
  return h1.replace(/\s*\([^()]*\)\s*$/, '').trim();
}

function words(s: string): Set<string> {
  return new Set(s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(w => w.length > 1));
}

function similarity(a: string, b: string): number {
  const wa = words(a);
  const wb = words(b);
  if (wa.size === 0 || wb.size === 0) return 0;
  let common = 0;
  for (const w of wa) if (wb.has(w)) common++;
  return common / Math.max(wa.size, wb.size);
}

async function get(url: string): Promise<any> {
  const sep = url.includes('?') ? '&' : '?';
  const res = await fetch(API_KEY ? `${url}${sep}api_key=${API_KEY}` : url);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`OpenAlex ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return res.json();
}

const SELECT = 'select=display_name,cited_by_count,doi,publication_year';

async function lookup(doi: string | undefined, title: string, year: number): Promise<Work | null> {
  if (doi) {
    const w = await get(`${API}/works/doi:${encodeURIComponent(doi)}?${SELECT}`);
    if (w) return w;
  }
  if (!title) return null;
  // Title search first (precise), then full-text search
  const query = title.replace(/[,:|]/g, ' ');
  for (const q of [`filter=title.search:${encodeURIComponent(query)}`, `search=${encodeURIComponent(query)}`]) {
    const r = await get(`${API}/works?${q}&per-page=10&${SELECT}`);
    const matches: Work[] = (r?.results ?? []).filter((w: Work) => {
      const sim = similarity(w.display_name ?? '', title);
      if (sim < 0.8) return false;
      if (!year || !w.publication_year || Math.abs(w.publication_year - year) <= 2) return true;
      // Same title, later year: re-digitised old papers (dated 2004–2007) or journal versions
      return sim >= 0.95 && w.publication_year > year;
    });
    matches.sort((a, b) => b.cited_by_count - a.cited_by_count);
    if (matches.length) return matches[0];
  }
  return null;
}

function setField(content: string, key: string, value: string): string {
  const end = content.indexOf('\n---\n', 4);
  const fm = content.slice(0, end);
  const re = new RegExp(`^${key}:.*$`, 'm');
  const line = `${key}: ${value}`;
  const newFm = re.test(fm) ? fm.replace(re, line) : `${fm}\n${line}`;
  return newFm + content.slice(end);
}

function doiFromUrl(url: string | undefined): string | undefined {
  return url?.match(/doi\.org\/(10\.[^\s"]+)/)?.[1];
}

async function main(): Promise<void> {
  const today = new Date().toISOString().slice(0, 10);
  const files = fs.readdirSync(PAPERS_DIR).filter(f => f.endsWith('.md') && f !== 'README.md').sort();
  let updated = 0, skipped = 0;
  const unmatched: string[] = [];

  for (const file of files) {
    const p = path.join(PAPERS_DIR, file);
    let content = fs.readFileSync(p, 'utf-8');
    const last = frontmatterValue(content, 'citations_updated');
    if (!FORCE && last && (Date.now() - Date.parse(last)) / 86_400_000 < MAX_AGE_DAYS) { skipped++; continue; }

    const doi = frontmatterValue(content, 'doi') || doiFromUrl(frontmatterValue(content, 'url'));
    const title = paperTitle(content);
    const year = parseInt(frontmatterValue(content, 'year') ?? '') || 0;

    let work: Work | null;
    try {
      work = await lookup(doi, title, year);
    } catch (e) {
      console.error(`Stopping at ${file}: ${(e as Error).message}`);
      break;
    }
    await new Promise(r => setTimeout(r, DELAY_MS));

    if (!work) { unmatched.push(file); continue; }
    console.log(`${String(work.cited_by_count).padStart(6)}  ${file}  ←  ${work.display_name} (${work.publication_year})`);
    if (DRY_RUN) continue;

    if (!frontmatterValue(content, 'doi') && work.doi) {
      content = setField(content, 'doi', `"${work.doi.replace('https://doi.org/', '')}"`);
    }
    content = setField(content, 'citations', String(work.cited_by_count));
    content = setField(content, 'citations_updated', today);
    fs.writeFileSync(p, content, 'utf-8');
    updated++;
  }

  console.log(`\nUpdated ${updated}, skipped ${skipped} (fresh), unmatched ${unmatched.length}.`);
  if (unmatched.length) console.log(`Unmatched (check title/year, or add a doi:):\n  ${unmatched.join('\n  ')}`);
  if (DRY_RUN) console.log('(dry run — no files written)');
}

main();

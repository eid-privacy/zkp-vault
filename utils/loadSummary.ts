import * as fs from 'fs';
import * as path from 'path';
import * as csv from 'csv-parse/sync';
import { SummaryEntry } from '../models/zkp';

export function loadSummary(): SummaryEntry[] {
  const csvPath = path.resolve(__dirname, '..', 'ZKP-summary.csv');
  const content = fs.readFileSync(csvPath, { encoding: 'utf-8' });
  // csv-parse expects rows; we will use column headers from first line
  const records = csv.parse(content, {
    columns: true,
    skip_empty_lines: true,
    trim: true,
  }) as SummaryEntry[];
  return records;
}

export interface Framework {
  name: string;
  based_on: string;
  easyness: string | boolean;
  fast_and_short: boolean | string;
  post_quantum: boolean | string;
  mobile_and_web: boolean;
  maintained: string | boolean;
  open_source: boolean;
  security_review: boolean;
  sign_and_hash: boolean | string;
  url: string;
}

export interface SummaryEntry {
  kingdom: string;
  order: string;
  name_species: string;
  doi_semantic: string;
  names: string;
  abbreviations: string;
  date: string;
  conference_paper: string;
  github: string;
  complexity: string;
  based_on: string;
  why: string;
  blog_doc: string;
}

export const frameworks: Framework[] = require('../ZKP-data.json').frameworks as Framework[];

// Placeholder for loading CSV data; implement parsing as needed
export const summary: SummaryEntry[] = [];

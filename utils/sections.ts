/**
 * Vault sections: one place for the docs/ folder names and their display labels.
 * Folders are one level deep; tabs and grouping are defined in docs/.pages.
 */

// eID tab
export const EID_SECTIONS: Record<string, string> = {
  eID: 'eID',
};

// ZKPs tab
export const ZKP_SECTIONS: Record<string, string> = {
  ZKP: 'ZKPs',
  TheoreticalModels: 'Foundations',
  Sigma: 'Sigma Proofs',
  ProofSystems: 'Proof Systems',
  IntermediateRepresentations: 'Intermediate Representations',
  CircuitTooling: 'Circuit Tooling',
  zkVM: 'zkVMs',
  AnonymousCredentials: 'Anonymous Credentials',
};

// All content sections (hand-written notes)
export const CONTENT_SECTIONS: Record<string, string> = {
  ...EID_SECTIONS,
  ...ZKP_SECTIONS,
};

// Content sections plus generated/reference sections
export const SECTION_LABELS: Record<string, string> = {
  ...CONTENT_SECTIONS,
  Resources: 'Resources',
  Tags: 'Tags',
};

# Past Steps & Session History

## Project Overview
A ZKP (Zero-Knowledge Proof) knowledge vault — an Obsidian-based collection of ZKP papers, frameworks, applications, libraries, and blog posts. Also serves as an mkDocs site. Goal: produce a blog post summarizing the most important elements.

## Current State (2026-03-17)
- Single git commit: `8bd3725 snapshot` — project is in early/bootstrapped state
- Untracked directories: `Applications/`, `Frameworks/`, `Fundamentals/`, `Resources/` (each with `index.md`)
- Untracked file: `index.ts` (exports from `models/zkp.ts` and `utils/loadSummary.ts`)
- TypeScript models defined: `Framework`, `SummaryEntry` in `models/zkp.ts`
- CSV loader implemented: `utils/loadSummary.ts` (uses `csv-parse/sync`)
- Data files: `ZKP-data.json` (frameworks), `ZKP-summary.csv` (summary entries)
- Templates: `templates/` — Obsidian templates for proof_system, cryptographic_primitive, intermediate_representation, tags, theoretical_models, tooling_application
- Content directories: `CryptographicPrimitives/`, `ProofSystems/`, `IntermediateRepresentations/`, `TheoreticalModels/`, `ToolingApplication/`, `Tags/`

## Work Done

### Session 2026-03-17
- Created `CLAUDE.md` and `PAST_STEPS.md` for session continuity
- Analyzed all source files (`ZKP-frameworks.md`, `ZKP-summary.csv`, `ZKP-data.json`, templates)
- Fixed all 6 templates in `templates/` — they were all identical copies of `proof_system` with content duplicated twice each
- Each template now has the correct `type`, appropriate frontmatter fields, and body structure

## Open Tasks / Next Steps
- **Fill content**: populate `ProofSystems/`, `CryptographicPrimitives/`, `IntermediateRepresentations/`, `TheoreticalModels/`, `ToolingApplication/`, `Tags/` using the CSV and frameworks data + the new templates
- The CSV has ~30 real entries to convert into individual notes
- The frameworks doc has 9 frameworks to convert into `tooling_application` notes
- `ZKP-data.json` should be kept in sync with framework notes (or replaced by them)

## Notes & Decisions
- No `package.json` visible — `csv-parse` dependency in `loadSummary.ts` may need setup
- `models/zkp.ts` has a placeholder `summary: SummaryEntry[] = []` — real loading done by `loadSummary()`
- `ZKP-data.json` is a JSON snapshot of the framework comparison table; powers `Framework[]` TypeScript model
- CSV taxonomy (Kingdom/Order) maps to directories:
  - `Algorithm / IP` → `ProofSystems/`
  - `Algorithm / Sigma` → `CryptographicPrimitives/`
  - `0 - Circuit repr.` → `IntermediateRepresentations/`
  - `theoretical_model` → `TheoreticalModels/`
  - `Code / Application` → `ToolingApplication/`
  - `Blog` → `Resources/`
  - `Tags/` → tag definitions
- Template `subtype` options for `tooling_application`: `circuit_dsl`, `zkvm`, `library`, `application`
- Framework evaluation criteria (9 points) come from `ZKP-frameworks.md`; criterion 9 specifically requires secp256k1 signature + sha256 (for e-ID holder binding)

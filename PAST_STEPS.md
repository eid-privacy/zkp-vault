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

### Session 2026-03-25
- Created all 69 tag definition files in `Tags/` following `templates/tags.md`
- Each file has `type: tag` frontmatter, H1 title, description, and a Dataview query auto-listing entries with that tag
- Tags span 9 groups: foundational/meta, proof system families, properties, arithmetization/IR, cryptographic primitives, tooling/impl, application domain, resource type, ecosystem

### Session 2026-03-17
- Created `CLAUDE.md` and `PAST_STEPS.md` for session continuity
- Analyzed all source files (`ZKP-frameworks.md`, `ZKP-summary.csv`, `ZKP-data.json`, templates)
- Fixed all 6 templates in `templates/` — they were all identical copies of `proof_system` with content duplicated twice each
- Each template now has the correct `type`, appropriate frontmatter fields, and body structure
- Populated all content directories from CSV + frameworks data:
  - `CryptographicPrimitives/`: 6 files (Pedersen, Camenisch-Michels, ZKAttest, Sigma×3)
  - `ProofSystems/`: 24 files (GMR85 through UltraHonk)
  - `IntermediateRepresentations/`: 4 files (R1CS, ACIR, AIR, PLONKish)
  - `TheoreticalModels/`: 2 files (IP Model, ZK Families Overview)
  - `ToolingApplication/`: 15 files (Noir, Barretenberg, Circom2, Docknetwork, Ligero-Prover, Spartan-Framework, Halo2, RISC-Zero, gnark, ZoKrates, SP1, OpenVM, Pico, Valida, Powdr)
  - `Resources/`: 5 files (Thaler book, Evolution of ZKPs, ZKProof Wiki, PLONK Family Note, Tomescu blog)

### Session 2026-03-25 (Resources restructuring)
- Merged `Applications/index.md` → `Applications/README.md`; deleted `index.md`
- Decided to keep `README.md` (not `index.md`) as section landing pages for GitHub compatibility
- Restructured `Resources/` into subdirectories by resource type: `papers/`, `blogs/`, `books/`, `wikis/`, `docs/`, `code/`, `videos/`, `presentations/`
- Moved 5 existing `Resources/*.md` files to appropriate subdirs
- Wrote `utils/migrateResources.ts`: scans all content dirs for `## Resources` URLs, creates canonical stub files in `Resources/type/`, rewrites source files to use wikilinks; supports dedup and `--dry-run`
- Wrote `utils/generateResourcesReadme.ts`: generates `Resources/README.md` with "By Type" and "By Topic" views from subdirectory frontmatter
- Deleted `Resources/index.md` and `Resources/README.md` (replaced by generated file)
- Updated `verify.ts` to scan subdirectories and handle `\|` in table wikilinks
- Added `migrate-resources` and `gen-resources-readme` to `devbox.json`
- Fixed `Tags/plonk-family.md` to use bare wikilink `[[Plonk-Family-Note]]`
- Result: 59 resource files across 8 types; wiki-links ✓, markdown links ✓, file coverage ✓, tag consistency ✓
- Pre-existing failures (not introduced here): breadcrumbs (all 186 files), README frontmatter (5 section READMEs)

### Session 2026-03-26 (Resources metadata fill-in)
- Filled in `authors`, `year`, `tags` for all 58 files in `Resources/` subdirectories
- Renamed `## Description` → `## Summary` in every file and added a short summary paragraph
- Papers identified and annotated: GMR85, BFM88 (NIZK), Fiat-Shamir, Pedersen, Camenisch-Stadler, Camenisch-Michels, Damgård sigma notes, Pinocchio (GGPR12/Parno13), Groth16, Bulletproofs (2017/1066), Hyrax (2017/1132), FRI/ICALP-2018, Ligero, Ligero++, Sonic, Aurora (2019/317), Spartan (2019/550), PLONK (2019/953), Plookup (2020/315), Updatable SRS (2018/046), HyperPlonk, TurboPLONK proposal, ZKAttest
- Two stub papers (IACR-2020-735, IACR-2022-1608) have year + conservative tags but no authors — content not determined with confidence
- Blogs annotated: Vitalik PLONK, Tomescu crypto principles, Noir circuit backend, Groth16 explainer, PLONK family note, PLONKish arithmetization, Halo2 deep dive, SP1 vs RISC Zero
- Docs annotated: STARK-101/AIR, R1CS, Halo2, Noir, Circom2, gnark, ZoKrates, SP1, OpenVM, RISC Zero, Ligetron, docknetwork
- Code annotated: Spartan, Spartan2, Crescent, Sonic, ACVM, Aztec packages

## Open Tasks / Next Steps
- **README**: write a proper entry-point README (3 candidate approaches proposed to user — see session 2026-03-17b)
- ~~**Tags/**: tag definition files not yet created~~ — done (see Session 2026-03-25)
- **Applications/**: no individual application notes created (only the generic index.md exists)
- `ZKP-data.json` could be replaced by / kept in sync with the ToolingApplication notes
- Longfellow and Crescent entries in CSV are empty — fill when data is available

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

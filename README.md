# zkp-vault

[![Site](https://img.shields.io/badge/Site-eid--privacy.github.io%2Fzkp--vault-blue)](https://eid-privacy.github.io/zkp-vault/)

A ZKP (Zero-Knowledge Proof) knowledge vault and mkDocs site covering papers, frameworks, cryptographic primitives, and tooling — from foundational theory to production-ready implementations.

The rendered site lives at **[eid-privacy.github.io/zkp-vault](https://eid-privacy.github.io/zkp-vault/)**.

See [docs/README.md](docs/README.md) for the vault index.

## Requirements

- [Devbox](https://www.jetify.com/devbox) — manages all runtimes and tools
- [Obsidian](https://obsidian.md) (optional) — open `docs/` as the vault for graph view

## Setup

```sh
# Install devbox (once)
curl -fsSL https://get.jetify.com/devbox | bash

# Enter the dev environment (installs all dependencies)
devbox shell
```

This installs Node.js, Bun, Python, and all Python packages (mkdocs, mkdocs-material, plugins).

## Viewing the site locally

```sh
devbox run serve   # starts mkdocs dev server at http://localhost:8000
```

## Building the site

```sh
devbox run build   # outputs to _site/
```

## Project layout

```
docs/                         # vault content (open this dir in Obsidian)
  CryptographicPrimitives/
  ProofSystems/
  IntermediateRepresentations/
  TheoreticalModels/
  ToolingApplication/
  Resources/
  Tags/
  Applications/
mkdocs.yml                    # MkDocs config
devbox.json                   # dev environment
requirements.txt              # Python dependencies
utils/                        # TypeScript generator scripts
```

---

## Usage Guide

How to add content, update generated files, and verify the vault.

All commands run inside the devbox environment:

```sh
devbox shell    # enter the environment once
```

### Directory structure

| Directory | Content type |
|---|---|
| `ProofSystems/` | Proof system entries (GMR85, PLONK, Groth16, …) |
| `CryptographicPrimitives/` | Primitive entries (Pedersen, Sigma protocols, …) |
| `IntermediateRepresentations/` | IR entries (R1CS, AIR, PLONKish, ACIR) |
| `TheoreticalModels/` | Theoretical model entries |
| `ToolingApplication/` | Tools, frameworks, libraries, ZK VMs |
| `Applications/` | Real-world use-case notes |
| `Resources/papers/` | Academic paper stubs |
| `Resources/blogs/` | Blog posts and explainers |
| `Resources/books/` | Books and comprehensive guides |
| `Resources/wikis/` | Wikis and standards documents |
| `Resources/docs/` | Official documentation sites |
| `Resources/code/` | Code repositories |
| `Resources/videos/` | Video content |
| `Resources/presentations/` | Slides and conference talks |
| `Tags/` | Tag definition files |
| `templates/` | Obsidian note templates |

### Adding a new entry

#### 1. Pick the right template

| You are adding… | Template |
|---|---|
| A proof system (SNARK, STARK, IOP, …) | `templates/proof_system.md` |
| A cryptographic primitive | `templates/cryptographic_primitive.md` |
| An intermediate representation | `templates/intermediate_representation.md` |
| A theoretical model | `templates/theoretical_models.md` |
| A tool, library, or ZK VM | `templates/tooling_application.md` |

#### 2. Create the file

Copy the template into the correct directory and rename it (use `Title-Case-Kebab.md`):

```sh
cp templates/proof_system.md ProofSystems/MyNewScheme.md
```

Fill in the frontmatter fields and body sections.

#### 3. Add tags

Tags in the frontmatter must have a corresponding definition file in `Tags/`. Check what exists:

```sh
ls Tags/
```

If you use a new tag, create its definition file from the template:

```sh
cp templates/tags.md Tags/my-new-tag.md
```

Edit it to add a description.

**Tag rules**: tags must be techniques (e.g. `commit`, `lookup`, `sigma`, `reed-solomon`) or high-level categories (e.g. `snark`, `stark`, `zkvm`, `circuit-dsl`). Do **not** create protocol-specific tags (e.g. `groth16`, `ligero`, `plonk`) — those belong to the content page itself, not as tags.

#### 4. Link external resources

In the `## Resources` section, **do not paste raw URLs**. Instead:

a. Run the migration script to detect any raw URLs you've added and create canonical stub files:

```sh
devbox run collect-resources
```

This creates stubs in `Resources/subtype/` and rewrites your file to use wikilinks automatically.

b. If you know the resource already exists (e.g. the Thaler book), link it directly:

```
## Resources
- Book: [[Thaler-Proofs-Arguments-ZK]]
- Paper: [[GWC19-PLONK]]
```

**Label conventions** (used by the migration script to classify resources):

| Label | Goes to |
|---|---|
| `Paper:` | `Resources/papers/` |
| `Explainer:` | `Resources/blogs/` |
| `Blog:` | `Resources/blogs/` |
| `Docs:` | `Resources/docs/` |
| `Spec:` | `Resources/docs/` |
| `Code:` | `Resources/code/` |
| `Wiki:` | `Resources/wikis/` |
| `Video:` | `Resources/videos/` |

#### 5. Link to other entries

Use Obsidian wikilinks by filename (no path needed):

```
Based on: [[PLONK]], [[Groth16]]
Used by: [[Noir]], [[Barretenberg]]
```

### Filling in a resource stub

After `collect-resources` runs, each new stub in `Resources/subtype/` looks like:

```markdown
---
type: resource
subtype: paper
year:
authors: []
url: https://eprint.iacr.org/2019/953.pdf
tags: []
---

# IACR 2019 953

## Summary
```

Fill in:
- `year` — publication year (integer)
- `authors` — list of author names
- `tags` — topic tags (must exist in `Tags/`)
- The `# Title` line — replace the auto-generated title with the real paper title
- `## Summary` — a short summary paragraph

All metadata lives in YAML frontmatter. Do **not** use Dataview inline fields (`URL::`, `Paper::`, etc.).

Tags on resource stubs populate the **By Topic** view in `Resources/README.md`.

### Updating generated files

Regenerate after adding or editing resource stubs or tag files:

```sh
devbox run summaries          # regenerates Resources/README.md and Tags/README.md
devbox run collect-resources  # collects resource URLs from content files into Resources/ stubs
devbox run verify             # runs vault integrity checks
```

`collect-resources` is idempotent — safe to re-run.

### Verification

```sh
devbox run verify
```

| Check | What it validates |
|---|---|
| Wiki-links | Every `[[wikilink]]` resolves to an existing file |
| Markdown links | Every `[text](path)` relative link resolves |
| File coverage | Every `.md` file is linked from somewhere |
| Navigation | Navigation breadcrumb present in each file |
| Frontmatter | Required fields present for each entry type |
| Tag consistency | Every tag used in frontmatter has a `Tags/` definition file |

Fix all wiki-link and frontmatter errors before committing. Navigation errors are a known pre-existing issue.

### Common workflows

#### Add a new proof system

```sh
cp templates/proof_system.md ProofSystems/NewScheme.md
# edit the file, add tags, add ## Resources with label: URL
devbox run collect-resources
devbox run summaries
devbox run verify
```

#### Add a new tool or library

```sh
cp templates/tooling_application.md ToolingApplication/NewTool.md
# subtype options: circuit_dsl | zkvm | library | application
# edit, add resources
devbox run collect-resources
devbox run summaries
devbox run verify
```

#### Add resources via a content file

```sh
# In ProofSystems/MyScheme.md, add:
#   ## Resources
#   - Paper: https://eprint.iacr.org/2019/953.pdf
#   - Code: https://github.com/my/repo

devbox run collect-resources   # creates stubs + replaces URLs with wikilinks
devbox run summaries           # update Resources/README.md
devbox run verify
```

`collect-resources` deduplicates across all content files — if the same URL already exists as a stub, it reuses the existing wikilink instead of creating a duplicate.

#### Check for a resource before linking

```sh
grep -r "url: https://eprint.iacr.org/2019/953" Resources/
```

If it already exists, use its filename as the wikilink target.

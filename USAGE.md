# Usage Guide

How to add content, update generated files, and verify the vault.

---

## Prerequisites

All commands run inside the devbox environment:

```sh
devbox shell    # enter the environment once
```

Or prefix any command with `devbox run --`:

```sh
devbox run verify
```

---

## Directory structure

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

---

## Adding a new entry

### 1. Pick the right template

| You are adding… | Template |
|---|---|
| A proof system (SNARK, STARK, IOP, …) | `templates/proof_system.md` |
| A cryptographic primitive | `templates/cryptographic_primitive.md` |
| An intermediate representation | `templates/intermediate_representation.md` |
| A theoretical model | `templates/theoretical_models.md` |
| A tool, library, or ZK VM | `templates/tooling_application.md` |

### 2. Create the file

Copy the template into the correct directory and rename it (use `Title-Case-Kebab.md`):

```sh
cp templates/proof_system.md ProofSystems/MyNewScheme.md
```

Fill in the frontmatter fields and body sections.

### 3. Add tags

Tags in the frontmatter must have a corresponding definition file in `Tags/`. Check what exists:

```sh
ls Tags/
```

If you use a new tag, create its definition file from the template:

```sh
cp templates/tags.md Tags/my-new-tag.md
```

Edit it to add a description.

### 4. Link external resources

In the `## Resources` section, **do not paste raw URLs**. Instead:

a. Run the migration script to detect any raw URLs you've added and create canonical stub files:

```sh
devbox run migrate-resources
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

### 5. Link to other entries

Use Obsidian wikilinks by filename (no path needed):

```
Based on: [[PLONK]], [[Groth16]]
Used by: [[Noir]], [[Barretenberg]]
```

---

## Filling in a resource stub

After `migrate-resources` runs, each new stub in `Resources/subtype/` looks like:

```markdown
---
type: resource
subtype: paper
year:
authors: []
tags: []
---

# IACR 2019 953

URL:: https://eprint.iacr.org/2019/953.pdf

## Description
```

Fill in:
- `year` — publication year (integer)
- `authors` — list of author names
- `tags` — topic tags (must exist in `Tags/`)
- The `# Title` line — replace the auto-generated title with the real paper title
- `## Description` — a short summary

Tags on resource stubs populate the **By Topic** view in `Resources/README.md`.

---

## Updating generated files

### Resources/README.md

Regenerate after adding or editing resource stubs:

```sh
devbox run gen-resources-readme
```

This rewrites `Resources/README.md` with two views: **By Type** (one table per subtype) and **By Topic** (entries grouped by tag).

### Migrate inline URLs → resource stubs

If you've added raw URLs to `## Resources` sections:

```sh
devbox run migrate-resources           # create stubs + rewrite source files
devbox run gen-resources-readme        # update the README
```

`migrate-resources` is idempotent — safe to re-run.

---

## Verification

```sh
devbox run verify
```

Checks:

| Check | What it validates |
|---|---|
| Wiki-links | Every `[[wikilink]]` resolves to an existing file |
| Markdown links | Every `[text](path)` relative link resolves |
| File coverage | Every `.md` file is linked from somewhere |
| Navigation | Navigation breadcrumb present in each file |
| Frontmatter | Required fields present for each entry type |
| Tag consistency | Every tag used in frontmatter has a `Tags/` definition file |

Fix all wiki-link and frontmatter errors before committing. Navigation errors are a known pre-existing issue.

---

## Common workflows

### Add a new proof system

```sh
cp templates/proof_system.md ProofSystems/NewScheme.md
# edit the file, add tags, add ## Resources with label: URL
devbox run migrate-resources
devbox run gen-resources-readme
devbox run verify
```

### Add a new tool or library

```sh
cp templates/tooling_application.md ToolingApplication/NewTool.md
# subtype options: circuit_dsl | zkvm | library | application
# edit, add resources
devbox run migrate-resources
devbox run gen-resources-readme
devbox run verify
```

### Add a resource directly (no source entry)

Create the file manually in the right subdirectory:

```sh
cp Resources/papers/GWC19-PLONK.md Resources/blogs/My-New-Blog.md
# edit frontmatter, title, URL::, description
devbox run gen-resources-readme
devbox run verify
```

### Check for a resource before linking

```sh
grep -r "URL:: https://eprint.iacr.org/2019/953" Resources/
```

If it already exists, use its filename as the wikilink target.

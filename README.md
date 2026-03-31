# zkp-vault

A ZKP (Zero-Knowledge Proof) knowledge vault and mkDocs site covering papers, frameworks, cryptographic primitives, and tooling — from foundational theory to production-ready implementations.

See [docs/README.md](docs/README.md) for the vault index.

## Requirements

- [Devbox](https://www.jetify.com/devbox) — manages all runtimes and tools
- [Obsidian](https://obsidian.md) (optional) — open `docs/` as the vault for graph view and Dataview queries

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

## Updating content

Content lives in `docs/`. The main entry point is [`docs/README.md`](docs/README.md).

Generated files (run after editing source data):

```sh
devbox run summaries          # regenerates Resources/README.md and Tags/README.md
devbox run collect-resources  # collects resource URLs from content files into Resources/ stubs
devbox run verify             # runs vault integrity checks
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

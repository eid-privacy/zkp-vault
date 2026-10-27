[Home](README.md) > Contribute

# Contribute

The vault is an [Obsidian](https://obsidian.md) notebook (`docs/`) rendered with MkDocs. Contributions are welcome as pull requests on
[eid-privacy/zkp-vault](https://github.com/eid-privacy/zkp-vault).

- **Setup**: `devbox shell` installs everything; `devbox run serve` starts a local site at http://localhost:8000.
- **New entries**: copy a template from `templates/` into the matching section folder (`eID/`, `TheoreticalModels/`, `Sigma/`, `ProofSystems/`, `IntermediateRepresentations/`, `CircuitTooling/`, `zkVM/`, `AnonymousCredentials/`).
- **Resources**: list them under `## Resources` with a label (`Paper:`, `Blog:`, `Code:`, ...) and run `devbox run collect-resources` to create resource stubs.
- **Papers**: one file per paper in `Resources/papers/`, named `<AuthorInitials><YY>-<Short-Title>`; add a row to [Paper History](Paper-History.md).
- **Before committing**: `devbox run summaries` (regenerates indexes) and `devbox run verify` (links, frontmatter, tags).

The full guide is in the repository [README](https://github.com/eid-privacy/zkp-vault#usage-guide).

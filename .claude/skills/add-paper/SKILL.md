---
name: add-paper
description: Add a new academic paper to the ZKP Vault (docs/Resources/papers) — correct cite_as naming, frontmatter, manual Paper History / count updates in docs/README.md, regeneration via devbox run summaries, and verification. Use whenever asked to add a paper by URL, DOI, or citation.
---

# Add a Paper to the ZKP Vault

## 1. Fetch metadata
Use WebFetch on the given URL to extract: title, all authors, publication year, abstract/summary, and (if available) a direct PDF link.

## 2. Pick a `cite_as` slug
Convention used throughout `docs/Resources/papers/` — check that directory for existing slugs before deciding, to avoid collisions and keep style consistent:

- `<AuthorInitials><YY>-<Short-Title>`
- Single author: first three letters of the surname — `Dam04` (Damgård), `Ped91` (Pedersen), `Sch80` (Schwartz), `Cra97` (Cramer).
- 2 authors: one letter each — `CS97` (Camenisch, Stadler), `LZ26` (Lehmann, Zacharakis).
- 3–6 authors: one letter per author — `GHE25`, `KVRSCLT26`, `FHLL25`, `ENRTTX26`.
- More authors / letters unwieldy: `<FirstAuthorsInitials>+<YY>` — `BFH+20`, `CHJ+20`, `BBB+17`.
- `YY` is the 2-digit publication year. `<Short-Title>` is a short hyphenated descriptive slug, not necessarily the full title.

## 3. Create the paper file
Path: `docs/Resources/papers/<cite_as>.md`. Copy the shape of an existing entry (e.g. `LZ26-AnonCreds-Legacy.md`, `Dam04-Sigma-Protocols.md`):

```markdown
---
type: resource
subtype: paper
cite_as: <cite_as>
year: <YYYY>
authors:
  - <Author One>
  - <Author Two>
url: "<canonical URL, page or direct PDF>"
tags:
  - <tag1>
  - <tag2>
related:        # optional — cite_as slugs of closely related papers already in the vault
  - <OtherCiteAs>
---

[Home](../../README.md) > [Resources](../README.md) > [papers](README.md) > <cite_as>

# <Full Title> (<Author(s)> <Year>)

## Summary
<2-4 sentence summary: problem addressed, contribution, why it matters for this vault's ZKP/e-ID focus.>

## Related resources

- [[<OtherCiteAs>|<Other Title>]] (paper, <year>)
```

Notes:
- The breadcrumb line's exact bracket/paren structure is checked by `devbox run verify`'s Navigation check — copy it verbatim, substituting only `<cite_as>`.
- Tags: reuse existing tags — check `docs/Tags/README.md`. Every tag used must have a corresponding `docs/Tags/<tag>.md` file (Tag consistency check); if a new tag is genuinely warranted, create it from `templates/tags.md`.
- `related:` entries here get mirrored into a `## Related resources` block on *both* files the next time `devbox run summaries` runs — don't hand-edit the other file.

## 4. Update the manually-maintained parts of `docs/README.md`
Almost everything else regenerates, but this file is hand-maintained:
- Bump the resource count in the intro bullet (`Resource Index — N external resources...`).
- Bump the `Papers` row count in the `## Resources Index` table.
- Prepend a row to the `## Paper History` table (newest-first) with today's date, the linked title, and the comma-separated author list.

## 5. Regenerate + verify
Requires an active devbox shell (`$DEVBOX_SHELL_ENABLED` set — if unset, ask the user to run Claude inside `devbox shell`).

```bash
devbox run summaries   # regenerates Resources/README.md, Resources/papers/README.md,
                        # Tags/*.md, and bidirectional "## Related resources" sections
devbox run verify       # checks wiki-links, markdown links, file coverage,
                        # navigation breadcrumbs, frontmatter, tag consistency
```

Both must report success. Optionally sanity-check the site itself:

```bash
devbox run build        # mkdocs build --strict
```

If this fails with `mkdocs: command not found`, the venv's Python packages haven't been installed in this shell yet:

```bash
source .venv/bin/activate && pip install -qr requirements.txt
```
then retry the build.

## 6. Commit
Stage exactly the files that changed: the new paper file, `docs/README.md`, and whatever `devbox run summaries` touched (typically `docs/Resources/README.md`, `docs/Resources/papers/README.md`, `docs/Tags/*.md`, and any `related:` counterpart files). Do not blindly `git add -A`.

The repo's pre-commit hook regenerates and checks `devbox.lock`; if the commit fails with `generated files are out of date: devbox.lock`, stage `devbox.lock` too and re-commit — expected, not a sign of unrelated changes.

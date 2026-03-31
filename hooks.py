"""
MkDocs hooks for zkp-vault.

1. Monkeypatches os.walk to follow symlinks — required so that the roamlinks
   plugin can index files under docs/ symlinks (e.g. docs/ProofSystems →
   ../ProofSystems). Survives pip reinstalls of the plugin.

2. on_page_content — injects a source-metadata block (paper, DOI, URL,
   GitHub) directly after the page's <h1>, sourced from YAML frontmatter.
"""

import re

# ---------------------------------------------------------------------------
# Source-metadata injection
# ---------------------------------------------------------------------------

def on_page_content(html, page, config, files, **kwargs):
    meta = page.meta or {}

    paper  = str(meta.get('paper',  '') or '')
    doi    = str(meta.get('doi',    '') or '')
    url    = str(meta.get('url',    '') or '')
    github = str(meta.get('github', '') or '')

    parts = []

    valid_doi = doi and doi.upper() != 'N/A'

    if paper:
        if valid_doi:
            parts.append(
                f'<strong>Paper:</strong> '
                f'<a href="https://doi.org/{doi}">{paper}</a>'
            )
        else:
            parts.append(f'<strong>Paper:</strong> {paper}')
    elif valid_doi:
        parts.append(
            f'<strong>DOI:</strong> '
            f'<a href="https://doi.org/{doi}">{doi}</a>'
        )

    if url:
        parts.append(f'<strong>URL:</strong> <a href="{url}">{url.rstrip("/")}</a>')

    if github:
        segments = github.rstrip('/').split('/')
        gh_display = '/'.join(segments[-2:]) if len(segments) >= 2 else github
        parts.append(
            f'<strong>GitHub:</strong> '
            f'<a href="{github}">{gh_display}</a>'
        )

    if not parts:
        return html

    sep = ' <span class="source-meta-sep">·</span> '
    block = f'<div class="source-meta">{sep.join(parts)}</div>'

    return re.sub(r'(</h1>)', r'\1\n' + block, html, count=1)

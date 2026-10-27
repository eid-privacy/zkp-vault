"""
MkDocs hooks for zkp-vault.

1. Monkeypatches os.walk to follow symlinks — required so that the roamlinks
   plugin can index files under docs/ symlinks (e.g. docs/<Section> →
   ../<Section>). Survives pip reinstalls of the plugin.

2. on_page_content — injects a source-metadata block (paper, DOI, URL,
   GitHub) directly after the page's <h1>, sourced from YAML frontmatter,
   preceded by the page's last-modified date (from git).
"""

import datetime
import os
import re
import subprocess

# ---------------------------------------------------------------------------
# Last-modified dates (one `git log` pass per build)
# ---------------------------------------------------------------------------

_last_modified = {}


def on_pre_build(config, **kwargs):
    """Map each file under docs/ to the date of the last commit touching it."""
    _last_modified.clear()
    docs_dir = os.path.abspath(config['docs_dir'])
    try:
        root = subprocess.run(['git', 'rev-parse', '--show-toplevel'], cwd=docs_dir,
                              capture_output=True, text=True, check=True).stdout.strip()
        log = subprocess.run(['git', 'log', '--format=@%cs', '--name-only', '--', docs_dir], cwd=root,
                             capture_output=True, text=True, check=True).stdout
    except (OSError, subprocess.CalledProcessError):
        return
    date = None
    for line in log.splitlines():
        if line.startswith('@'):
            date = line[1:]
        elif line and date:
            _last_modified.setdefault(os.path.join(root, line), date)


def _page_date(page):
    path = os.path.abspath(page.file.abs_src_path)
    date = _last_modified.get(path)
    if date is None:  # not committed yet
        date = datetime.date.fromtimestamp(os.path.getmtime(path)).isoformat()
    return date


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

    block = f'<div class="page-updated">Last modified: {_page_date(page)}</div>'
    if parts:
        sep = ' <span class="source-meta-sep">·</span> '
        block += f'\n<div class="source-meta">{sep.join(parts)}</div>'

    if '</h1>' not in html:
        return block + '\n' + html
    return re.sub(r'(</h1>)', lambda m: m.group(1) + '\n' + block, html, count=1)

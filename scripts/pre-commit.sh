#!/usr/bin/env bash
set -euo pipefail

npx ts-node utils/addNavigation.ts --quiet
bun run utils/summaries.ts --quiet

if ! git diff --exit-code --quiet; then
  echo "pre-commit: generated files are out of date — stage them and commit again:"
  git diff --name-only
  exit 1
fi

bun utils/verify.ts --quiet

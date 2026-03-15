#!/usr/bin/env bash

set -euo pipefail

while IFS= read -r -d '' entry; do
    path="${entry:3}"

    if [[ "$path" != "package.json" ]]; then
        printf 'Refusing to tag with non-package changes present: %s\n' "$path" >&2
        exit 1
    fi
done < <(git status --porcelain --untracked-files=all -z)

prefix="$(date -u +%Y.%m.%d)"
latest=0

while IFS= read -r tag; do
    suffix="${tag#"$prefix"}"

    if [[ "$suffix" =~ ^[0-9]+$ ]] && ((suffix > latest)); then
        latest="$suffix"
    fi
done < <(git tag --list "${prefix}*")

next=$((latest + 1))
tag="${prefix}${next}"

bun -e 'const fs = require("fs"); const pkg = JSON.parse(fs.readFileSync("package.json", "utf8")); pkg.version = process.argv[1]; fs.writeFileSync("package.json", `${JSON.stringify(pkg, null, 2)}\n`);' "$tag"

git add package.json
if ! git diff --cached --quiet; then
    git commit -m "chore: new version $tag"
fi
git tag -a "$tag" -m "Release $tag"

printf 'Updated package.json, created commit, and tagged %s\n' "$tag"

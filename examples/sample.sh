#!/usr/bin/env sh
# Shell sample
set -eu

NAME="window"
COUNT=3

format_line() {
  printf "%s-%02d\n" "$NAME" "$1"
}

i=1
while [ "$i" -le "$COUNT" ]; do
  format_line "$i"
  i=$((i + 1))
done

[ -n "${HOME:-}" ] && echo "home=$HOME"

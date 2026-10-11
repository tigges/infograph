#!/usr/bin/env bash
# Render each gallery option (and the combined set) as one A4 PDF.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
PORT="${PORT:-4173}"
OUT="$ROOT/print"
mkdir -p "$OUT"

if ! curl -sf "http://127.0.0.1:${PORT}/" >/dev/null; then
  python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$ROOT" >/tmp/infograph-http.log 2>&1 &
  echo $! >/tmp/infograph-http.pid
  for _ in 1 2 3 4 5 6 7 8 9 10; do
    curl -sf "http://127.0.0.1:${PORT}/" >/dev/null && break
    sleep 0.2
  done
fi

print_one() {
  local name="$1"
  local query="$2"
  local dest="$3"
  local profile="/tmp/chrome-print-${name}-$$"
  rm -rf "$profile"
  mkdir -p "$profile"
  set +e
  timeout 45s google-chrome \
    --headless \
    --disable-gpu \
    --no-sandbox \
    --no-first-run \
    --no-default-browser-check \
    --disable-extensions \
    --disable-dev-shm-usage \
    --disable-background-networking \
    --disable-sync \
    --disable-component-update \
    --disable-default-apps \
    --disable-features=TranslateUI,MediaRouter \
    --no-pdf-header-footer \
    --hide-scrollbars \
    --run-all-compositor-stages-before-draw \
    --virtual-time-budget=8000 \
    --user-data-dir="$profile" \
    --print-to-pdf="$dest" \
    "http://127.0.0.1:${PORT}/?print=${query}"
  local status=$?
  set -e
  rm -rf "$profile"
  # Chrome often writes the PDF then hangs; timeout 124 is OK if the file exists.
  if [[ ! -s "$dest" ]]; then
    echo "failed to write $dest (exit ${status})" >&2
    exit 1
  fi
  echo "wrote $dest"
}

print_one a3 option-a3 "$OUT/01-a3-diagram.pdf"
print_one flat option-flat "$OUT/02-flat-kit.pdf"
print_one vintage option-vintage "$OUT/03-banner-map.pdf"
print_one dash option-dash "$OUT/04-three-column.pdf"
print_one all all "$OUT/all-four-sheets.pdf"

# Recipe: converting a lab to shared strings (`static/labs/_shared/i18n.js`)

Reference conversion: `static/labs/difference-engine/` (PR: lab-i18n-difference-engine).
Mechanism and desk instructions: `static/labs/_shared/README.md`.

## Order (Nayana, 2026-11-05: desks localise labs themselves via strings files)
1. difference-engine — done.
2. pebble-trays — done (44 keys); vm-terminal — done (15 keys; guest Linux output stays English).
3. mini-cpu — done (72 keys; assembler error messages are JS-generated).
4. breadboard — done (wrapper chrome only, 7 keys; circuitjs1 / Falstad UI stays English, GPL).
5. analytical-engine frame text last (our wrapper chrome only; Walker's scripts/*.js and its
   alert() calls stay as upstream).

## Steps per lab
1. Fresh branch from origin/main. Record a baseline: serve `static/` (`python3 -m http.server`),
   drive the lab headless (puppeteer-core + /usr/bin/google-chrome) through every button/state,
   dump `document.title`, `<html lang>`, all title/aria-label/placeholder attrs and
   `body.innerText` per state.
2. Add `<script src="../_shared/i18n.js"></script>` in `<head>` right after `<meta charset>`.
   Keep `<!-- NOINDEX-PRELAUNCH: remove at announcement -->` and the robots meta untouched.
3. Static text: add `data-i18n="key"` (text), `data-i18n-html="key_html"` (text containing
   links/markup), `data-i18n-attr="title:key;aria-label:key"` (attributes), and `<title data-i18n>`.
   Leave the English in the HTML (it is the last-resort fallback).
4. JS text: replace every user-visible literal with `t('key', {vars})`; never build sentences by
   concatenating translated fragments: one key per sentence with `{placeholders}`. Wrap words that
   sit next to symbols (e.g. "cycles=") in their own span/key.
5. Defer the first render: `LabI18n.ready.then(init)` instead of calling `init()` at parse time.
6. Write `strings.en.json` (stable dotted keys, `_html` suffix for HTML) and `STRINGS.md`
   (key table with context: where shown, what each placeholder is, length limits, cross-refs).
7. `python3 scripts/check-lab-strings.py <lab>` → 0 errors, 0 warnings.
8. Re-run the baseline driver for no `?lang`, `?lang=en`, `?lang=xx`: text must be identical
   (only an expected 404 for strings.xx.json in the console). Then a temporary
   `strings.qq.json` (prefixed values, one key deleted) proves translation + per-key fallback;
   delete it, never commit it. Screenshots to `_editorial/lab-shots/` only if wanted.
9. Full build (all locales, `--themesDir /workspace/freebook/from-relays-to-attention/themes`),
   link check, PR, merge.

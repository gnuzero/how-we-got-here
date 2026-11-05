# Shared lab localisation (`_shared/i18n.js`)

One mechanism for every lab under `static/labs/`. Desks translate by **adding a JSON file**;
they never edit lab HTML/JS and never fork a lab per language.

## How it works
1. `layouts/shortcodes/lab.html` embeds `/labs/<type>/?lang=<site language code>`, where the
   code is Hugo's `site.Language.Lang`: `en`, `th`, `si`, `ta`, `ro`, `zh-hans`, `zh-hant`
   (lowercase, exactly the keys under `[languages]` in `hugo.toml`). The "Open lab in new tab"
   link carries the same `?lang=`. The iframe title and that link text come from Hugo
   `i18n/<lang>.toml` keys `labIframeTitle` (`{{ .Type }}` = lab type) and `labOpenNewTab`;
   locales without them fall back to English.
2. A converted lab loads `<script src="../_shared/i18n.js"></script>` in `<head>` (relative
   path, so it works under any baseURL, `hugo server`, GitHub Pages and the built `public/`).
3. `i18n.js` reads `?lang=` (missing/invalid → `en`), fetches `strings.en.json` and
   `strings.<lang>.json` **from the lab's own folder**, then:
   - `data-i18n="key"` → element `textContent`
   - `data-i18n-html="key"` → element `innerHTML` (only for keys ending `_html`, e.g. text with links)
   - `data-i18n-attr="title:key1;aria-label:key2"` → attributes
   - sets `<html lang>` to the locale actually loaded (`en` if it fell back)
   - exposes `t(key, vars)` (also `LabI18n.t`) for JS-generated text and `LabI18n.ready`
     (a Promise; start the lab's first render in `LabI18n.ready.then(...)`).
4. Fallbacks, per key: locale file → `strings.en.json` → the English text already in the
   HTML → the key name. A missing/invalid locale file is not fatal (English shows; the
   browser logs a 404 for the missing file, which is expected).
5. No layout shift: the body is `visibility:hidden` (still laid out) until strings are
   applied, at most 1.5 s.

## Interpolation
`{name}` in a string is replaced by `vars.name`: `t('log.cycle', {n: 3, x: 2, next: 3})`.
Translators may move or reorder placeholders but must keep every one, spelled exactly.
Unknown placeholders are left as-is. No plural rules: labs use separate keys where needed.

## Adding a locale for a lab (desks)
1. Copy `static/labs/<lab>/strings.en.json` to `static/labs/<lab>/strings.<code>.json`.
2. Translate values only. Keep keys, `{placeholders}`, and in `*_html` keys the HTML tags
   and their `href`s. Read the lab's `STRINGS.md` for context notes.
3. Run `python3 scripts/check-lab-strings.py <lab>` (from the repo root); it must say 0 errors
   (missing/extra keys, invalid JSON, placeholder or tag mismatches are errors).
4. Test: `hugo server --themesDir …` then open `http://localhost:1313/labs/<lab>/?lang=<code>`
   and the chapter page that embeds the lab in your locale. Click through every button so
   the JS-generated messages appear. Check the browser console: no errors (a 404 for a strings file means the file name is wrong).
5. Submit via the normal desk → fact-check → PR flow. Optionally add `labIframeTitle` /
   `labOpenNewTab` to `i18n/<code>.toml`.

## Converting another lab (engineers)
See `_editorial/lab-i18n-recipe.md`.

## Limits
- Opening `index.html` straight from disk (`file://`) in Chrome blocks `fetch`/XHR of JSON:
  HTML-attribute strings still show in English, but JS-generated text shows key names. Use a
  local server (`hugo server` or `python3 -m http.server` in `static/`). Firefox works from disk.
- Guest output inside vm-terminal (Linux) and third-party simulators (circuitjs, Walker's
  Analytical Engine) are not covered; only the wrapper chrome we own is translatable.
- No RTL support (no RTL locale in the book).

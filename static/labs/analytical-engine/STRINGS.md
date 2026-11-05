# Analytical Engine lab — UI strings

Source of truth: [`strings.en.json`](strings.en.json) (36 keys). Mechanism and rules:
[`../_shared/README.md`](../_shared/README.md). Copy to `strings.<code>.json`, translate values,
run `python3 scripts/check-lab-strings.py analytical-engine`, preview
`/labs/analytical-engine/?lang=<code>`.

Notes for this lab:
- **Our wrapper chrome only.** John Walker's Fourmilab emulator under `scripts/*.js` stays
  English — including every `alert()`, the Timing report text, and the dynamic annunciator
  status words (`Set` / `Not set`, `Running` / `Stopped`) written by `annunciator.js`. Do not
  edit those scripts for localisation.
- Section titles (Program, Printer, Controls, …) are **PNG images** (`figures/t_*.png`).
  Translate the matching `alt.*` keys for accessibility; the visible glyphs stay English
  until/unless someone redraws the figures.
- `label.ingress*` / `label.egress*` use a non-breaking space (`\u00a0`) between the word and
  the digit (same as Walker's `&nbsp;`). Keep that character.
- `btn.erase` is shared by Printer Erase, Attendant's Log Erase, and Curve Drawing Erase.
- `footer_html` and `nav.origin` must keep their `<a href="…">` targets (Fourmilab URLs).
- `ORIGIN.md` is English provenance text; not a strings file.

| Key | English | Context |
|---|---|---|
| `page.title` | The Analytical Engine Emulator | Browser tab title. |
| `alt.title` … `alt.curvedrawing` | (see JSON) | `alt` on the title PNGs / rule. |
| `btn.submit` | Submit | Program panel. |
| `btn.clear` | Clear | Program panel. |
| `btn.load` | Load | Program panel (loads a `.ae` file). |
| `btn.erase` | Erase | Printer / Attendant log / Curve drawing. |
| `btn.timing` | Timing | Appends Walker's English timing report to the log. |
| `btn.reset` / `btn.step` / `btn.start` | Reset / Step / Start | Controls. |
| `btn.hide` | Hide | Curve Drawing Apparatus (shown only when a program opens it). |
| `chk.comments` | Keep comments | Program checkbox label. |
| `chk.panel` / `chk.trace` / `chk.animate` | Panel / Trace / Animate | Controls checkboxes. |
| `label.operation` / `label.runup` | Operation: / Run-up: | Mill annunciator labels (trailing colon kept). |
| `label.ingress0` … `label.egress0p` | Ingress 0: … | Axis labels; keep `\u00a0` before the digit. |
| `canvas.unsupported` | Your browser does not support HTML5 canvas. | `<canvas>` fallback. |
| `nav.origin` | Origin: Fourmilab / John Walker | Footer nav link text. |
| `footer_html` | (HTML; see JSON) | Address line; keep both `<a>` tags. |

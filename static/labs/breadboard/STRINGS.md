# Virtual Breadboard lab — UI strings

Source of truth: [`strings.en.json`](strings.en.json) (7 keys). Mechanism and rules:
[`../_shared/README.md`](../_shared/README.md). Copy to `strings.<code>.json`, translate values,
run `python3 scripts/check-lab-strings.py breadboard`, preview `/labs/breadboard/?lang=<code>`.

Notes for this lab:
- **Wrapper chrome only.** The embedded CircuitJS1 / Falstad simulator UI (menus, component
  names, right-click options) stays English — do not translate it, and do not fork the
  simulator for localisation. It is GPL third-party (see `ORIGIN.md`).
- The iframe `src` and the “Open AND gate” button `href` embed the same AND-gate circuit
  data (`cct=`). Leave both URLs untouched; translate only the visible link text.
- “Wokwi” and “MCU” in `btn.wokwi` are proper names / acronyms — keep them. The ↗ arrow
  character is part of the string (matches the other labs’ “open elsewhere” style).
- `note_html` must keep the `<strong>`, `<div class="meta">`, and all three `<code>` tags
  (and the curly apostrophe in “Falstad’s”). Translate only the visible prose.
- `ORIGIN.md` and `and.txt` are not strings files (`and.txt` is circuit data).

| Key | English | Context |
|---|---|---|
| `page.title` | Virtual Breadboard Lab | Browser tab title. |
| `page.heading` | Virtual Breadboard Lab | Top heading. |
| `page.subtitle` | Interactive circuit simulator — a real gate… | Grey line under the heading. Em dash is `—` (U+2014). |
| `btn.open_and` | Open AND gate in new tab ↗ | Toolbar link; opens Falstad with the same `cct=` as the iframe. Keep “AND”. |
| `btn.wokwi` | Wokwi (physical breadboard + real MCU) ↗ | Toolbar link-out. Keep “Wokwi” and “MCU”. |
| `iframe.title` | Circuit simulator — AND gate | iframe `title` attribute (accessibility). |
| `note_html` | (HTML; see JSON) | Body note + grey `.meta` line. Keep tags and `cct=` / path literals inside `<code>`. |

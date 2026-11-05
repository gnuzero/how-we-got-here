# VM Terminal lab — UI strings

Source of truth: [`strings.en.json`](strings.en.json) (15 keys). Mechanism and rules:
[`../_shared/README.md`](../_shared/README.md). Copy to `strings.<code>.json`, translate values,
run `python3 scripts/check-lab-strings.py vm-terminal`, preview `/labs/vm-terminal/?lang=<code>`.

Notes for this lab:
- **Wrapper chrome only.** Guest Linux output inside the v86 screen (shell prompts, `whoami` /
  `uname` / `ls` results, kernel messages) stays English — do not translate it.
- The three example commands (`whoami`, `uname`, `ls`) are literal shell commands the reader
  types; keep them in the HTML as `<code>` (not in the strings file).
- `btn.boot` (“Boot VM”) is named inside `first.body_html` and `status.idle`; keep the
  visible name identical to the button translation. `btn.restart` (“Restart”) is named in
  `first.hint`.
- `note_html` must keep the `<strong>`, `<code>`, and `<a href="ORIGIN.md">` tags (and the
  `&amp;` entity). Translate only the visible prose.
- `ORIGIN.md` is English provenance/licence text for the vendored binaries; it is not a
  strings file.

| Key | English | Context |
|---|---|---|
| `page.title` | VM Terminal Lab | Browser tab title. |
| `page.heading` | VM Terminal Lab | Top heading. |
| `page.subtitle` | Real x86 machine, running client-side… | Grey line under the heading. |
| `btn.boot` | Boot VM | Primary button; named in first.body_html and status.idle. |
| `btn.restart` | Restart | Secondary button; named in first.hint. |
| `status.idle` | Not started — press Boot VM | Status line before first boot. |
| `first.heading` | First commands | Heading of the tip box (UPPERCASE via CSS in Latin scripts). |
| `first.body_html` | (HTML; see JSON) | Tip body. Keep both `<strong>…</strong>` spans. |
| `first.hint` | Type each command and press Enter… | Grey tip under the example commands. |
| `note_html` | (HTML; see JSON) | Footer note with v86 credit and ORIGIN.md link. |
| `status.already` | Already running — click the screen for keyboard | Status if Boot VM is pressed while already running. |
| `status.loading` | Loading local VM image + booting… | Status immediately after Boot VM (before emulator-ready). Ellipsis character is `…` (U+2026). |
| `status.booting` | Booting kernel… | Status on emulator-ready. |
| `status.running` | Running — click the screen, then try whoami / uname / ls | Status on emulator-started. Keep the three command names. |
| `status.restarted` | Restarted — click the screen when the prompt returns | Status after Restart. |

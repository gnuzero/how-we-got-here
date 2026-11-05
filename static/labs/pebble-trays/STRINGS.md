# Pebble Trays lab — UI strings

Source of truth: [`strings.en.json`](strings.en.json) (44 keys). Mechanism and rules:
[`../_shared/README.md`](../_shared/README.md). Copy to `strings.<code>.json`, translate values,
run `python3 scripts/check-lab-strings.py pebble-trays`, preview `/labs/pebble-trays/?lang=<code>`.

Notes: digits, "+1" / "−1" button faces are not translated. Many strings are only heard by
screen readers (`aria.*`, `live.*`): translate them too. Recipe lines should be plain
imperative instructions; the trays have no symbols, so word the counts naturally.

| Key | English | Context |
|---|---|---|
| `page.title` | Pebble Trays Lab | Browser tab title (lab opened in a new tab). |
| `page.heading` | Pebble Trays | Top heading. |
| `page.subtitle` | Original for this book · CC BY 4.0 · Hold marks · follow the list · write the result | Grey line under the heading; keep "CC BY 4.0". |
| `guide.heading` | Guided beat | Guide box heading (UPPERCASE via CSS in Latin scripts). |
| `guide.ready.phase` | Ready | Guide phase on load / restart. |
| `guide.ready.body` | Keep marks in the trays. Reveal one recipe step at a time and do only that step. When the list ends, copy how many marks sit in the last tray onto the strip. | Guide body on load / restart. |
| `panel.trays` | Three trays | Heading of the trays panel. |
| `btn.clear` | Clear all trays | Button: empty all three trays. |
| `panel.recipe` | Recipe card | Heading of the recipe panel. |
| `btn.next` | Show next step | Button: reveal the next recipe line. Quoted inside recipe.facedown_html — keep identical. |
| `btn.restart` | Restart recipe | Button: hide the recipe again. |
| `answer.label` | Answer strip — copy the count from the last tray | Label of the number input. |
| `note` | A shared practice for the “what is this kind of machine?” pages — one English copy for every language of the book. | Footnote. English says "one English copy for every language"; translate the meaning for your locale (e.g. "the same lab in every language") — do not claim it is English. |
| `tray.first` | First tray | Tray name; also {tray} in aria labels. |
| `tray.middle` | Middle tray | Tray name; also {tray}. |
| `tray.last` | Last tray | Tray name; also {tray}. |
| `recipe.1` | Put three pebbles in the first tray. | Recipe line 1 (instruction to the reader). |
| `recipe.2` | Put two pebbles in the middle tray. | Recipe line 2. |
| `recipe.3` | Move every pebble from the first tray into the last tray. | Recipe line 3. |
| `recipe.4` | Move every pebble from the middle tray into the last tray. | Recipe line 4. |
| `recipe.5` | Look at the last tray. Copy that count onto the answer strip. | Recipe line 5. |
| `count.one` | {n} pebble | Tray count when n = 1. {n} = number. |
| `count.other` | {n} pebbles | Tray count for any other n (0, 2…24). Languages without plural forms may use the same text as count.one. |
| `aria.add` | Add one pebble to {tray} | Screen-reader label of the +1 button. {tray} = tray name. |
| `aria.remove` | Remove one pebble from {tray} | Screen-reader label of the −1 button. |
| `aria.empty` | Empty {tray} into the last tray | Screen-reader label of the "Empty into last" button. |
| `btn.emptyIntoLast` | Empty into last | Small button on first/middle trays: pour all pebbles into the last tray. Keep short. |
| `recipe.facedown_html` | (HTML; see strings.en.json) | Recipe box before the first step. HTML: keep <strong>…</strong> around the btn.next text. |
| `recipe.stepnum` | Step {n} | Number above a past recipe line. {n} = 1–5. |
| `recipe.stepnum.current` | Step {n} (do this now) | Number above the current line. |
| `recipe.done` | List finished. Copy the last tray onto the strip. | Shown under the list after the last step. |
| `btn.allShown` | All steps shown | btn.next replaced by this when all steps are shown (button disabled). |
| `live.moved.one` | Moved {n} pebble into the last tray. | Screen-reader announcement after pouring 1 pebble. |
| `live.moved.other` | Moved {n} pebbles into the last tray. | Announcement after pouring n ≠ 1 pebbles. |
| `live.step` | Step {n} of {total}: {text} | Announcement when a step is revealed. {n} step, {total} = 5, {text} = the recipe line. |
| `guide.step.phase` | Step {n} of {total} | Guide phase per step. {n}, {total}. |
| `guide.step.body` | Do only this step. Use +1 / −1 on the trays. Do not skip ahead. | Guide body per step; keep "+1 / −1" (button faces). |
| `guide.write.phase` | Write the result | Guide phase after the last step. |
| `guide.write.body` | Copy how many pebbles sit in the last tray onto the answer strip. | Guide body after the last step. |
| `live.restarted` | Recipe restarted. Card is face-down. | Announcement after Restart recipe. |
| `live.cleared` | All trays cleared. | Announcement after Clear all trays. |
| `check.finishFirst` | Finish the recipe steps first. | Under the answer if typed before the last step. |
| `check.ok` | Matches the last tray. | Answer matches (green). |
| `check.bad` | Does not match the last tray yet — count again. | Answer does not match (red). |

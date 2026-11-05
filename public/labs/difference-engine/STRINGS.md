# Difference Engine lab — UI strings

Source of truth: [`strings.en.json`](strings.en.json) (52 keys). Mechanism and
general rules: [`../_shared/README.md`](../_shared/README.md).

To translate: copy `strings.en.json` to `strings.<code>.json` in this folder (code =
the site language code: `th`, `si`, `ta`, `ro`, `zh-hans`, `zh-hant`), translate the
values only, run `python3 scripts/check-lab-strings.py difference-engine`, and preview
with `/labs/difference-engine/?lang=<code>`.

Notes for this lab:
- Mathematical symbols (x, Y, Δ₁, Δ₂, x², digits, `→`, `✓`/`✗`) are not words; keep them.
- `btn.reset` ("Reset (carry ready)") is quoted by name inside `guide.settle.hint` and
  `guide.classic.hint`; `btn.step` ("Step") inside `guide.ready.body`. Keep the quoted names
  identical to your button translations.
- The digits on the wheels are not translated (decimal 0–9 is the point of the lab).
- Space is tight on buttons and the bank labels at narrow widths (iframe ≈ 640 px high,
  full column width): prefer short forms.

| Key | English | Context |
|---|---|---|
| `page.title` | Difference Engine Lab — Finite Differences & Carry | Browser tab / window title (shown when the lab is opened in a new tab). |
| `page.heading` | Difference Engine Lab — Carry | Top heading of the lab. |
| `page.subtitle` | Original for this book · CC BY 4.0 · Finite differences for f(x)=x² · figure wheels + tooth catching neighbor | Grey line under the heading. Keep "CC BY 4.0" and the formula f(x)=x² unchanged. |
| `guide.heading` | Guided beat | Small heading of the guide box (rendered UPPERCASE by CSS in Latin scripts). |
| `panel.columns` | Columns (method of differences) | Heading of the wheels panel. |
| `bank.y.name` | Y — result | Name of the result column bank. Keep the symbol Y. |
| `bank.y.meta` | should track x² | Grey note for the Y bank. |
| `bank.d1.name` | Δ₁ — first difference | Name of the first-difference bank. Keep Δ₁. |
| `bank.d1.meta` | grows by Δ₂ each cycle | Grey note for the Δ₁ bank. |
| `bank.d2.name` | Δ₂ — second difference | Name of the second-difference bank. Keep Δ₂. |
| `bank.d2.meta` | constant for quadratics | Grey note for the Δ₂ bank. |
| `btn.step` | Step | Main button: run one difference cycle. Short (one word ideally). |
| `btn.reset` | Reset (carry ready) | Button: reset to x=3 so the first Step carries. Referred to by name in guide.settle.hint and guide.classic.hint — keep consistent. |
| `btn.classic` | Reset (x=0 classic) | Button: reset to x=0 (blank classic table). |
| `readout.cycles` | cycles | Word before "=<count>" in the readout line (x=, Y=, Δ₁=, Δ₂= stay as symbols). |
| `panel.log` | What just happened | Heading of the log panel. |
| `note_html` | (HTML; see strings.en.json) | Footnote under the log. HTML: keep the three <a ...> tags and their href/target/rel exactly; translate only the visible text. Museum names may stay in English or use their official local name. |
| `guide.ready.phase` | Ready | Guide phase label after load / "Reset (carry ready)". |
| `guide.ready.body` | Press Step. One finite-difference cycle: add Δ₁ into Y, then add Δ₂ into Δ₁. When a wheel rolls past 9, watch the arm catch the next column. | Guide body after load / reset. "Step" must match btn.step. |
| `guide.ready.hint` | Start at x=3 (Y=9, Δ₁=7, Δ₂=2) so the first Step produces a carry into tens. | Guide hint after load / reset. |
| `col.ones` | ones | Label under the ones wheel; also inserted as {place} in log lines. |
| `col.tens` | tens | Label under the tens wheel; also inserted as {place} in log lines. |
| `col.place` | p{n} | Label for higher places (not shown at current widths). {n} = place index. |
| `carry.to.tens` | tens | Inserted as {dest}: carry goes into the tens column. |
| `carry.to.next` | next | Inserted as {dest}: carry goes into the next column. |
| `carry.to.overflow` | overflow | Inserted as {dest}: carry falls off the top (overflow). |
| `guide.carry.phase` | CARRY | Guide phase label while a carry happens (shown in capitals in English). |
| `guide.carry.body` | {label}: wheel rolled past 9→{digit}. A tooth catches the next column toward {dest}. | {label} = column symbol (label.y / label.d1), {digit} = new digit 0–9, {dest} = a carry.to.* word. |
| `guide.carry.hint` | That catch is the physical event Babbage’s columns enforced. | Guide hint during a carry. |
| `log.carry` | {label} carry @ {place}: {before}+{add}{carryIn} → {digit} · tooth catches {dest} | Log line for a carry. {label} column symbol, {place} col.ones/col.tens, {before} old digit, {add} digit added, {carryIn} = log.carryIn or empty, {digit} new digit, {dest} carry.to.* word. Keep the arithmetic order "before+add carryIn → digit". |
| `log.carryIn` | +1 | Appended after {add} when an incoming carry is also added. Normally keep "+1". |
| `log.overflow` | {label} overflow past column width — widen in a real engine. | Log line when a carry runs off the top column. {label} column symbol. |
| `log.add` | {label} {place}: {before}+{add} → {digit} | Log line for a digit add without carry. Same placeholders as log.carry. |
| `log.cycle` | —— Cycle {n} (x={x} → x={next}) —— | Log separator at the start of each cycle. {n} cycle number, {x} old x, {next} new x. |
| `guide.step1.phase` | STEP — add Δ₁ into Y | Guide phase during the first half of a cycle. |
| `guide.step1.body` | First half of the difference cycle: add the first-difference column into the result. | Guide body during the first half. |
| `guide.step1.hint` | Watch for a rollover past 9 on Y. | Guide hint during the first half. |
| `guide.step2.phase` | STEP — add Δ₂ into Δ₁ | Guide phase during the second half. |
| `guide.step2.body` | Second half: the constant second difference advances Δ₁ for the next cycle. | Guide body during the second half. |
| `guide.step2.hint` | Carry can happen here too on later steps. | Guide hint during the second half. |
| `label.y` | Y | Column symbol inserted as {label}. Normally keep "Y". |
| `label.d1` | Δ₁ | Column symbol inserted as {label}. Normally keep "Δ₁". |
| `log.settled` | Settled: Y={y} (expect x²={expect}){mark} | Log line at the end of a cycle. {y} value of Y, {expect} = x², {mark} = " ✓" or " ✗" (includes its leading space; put it where it reads naturally). |
| `guide.settle.phase` | SETTLE | Guide phase at the end of a cycle. |
| `guide.settle.body.ok` | Cycle done. Y is now {y} (= {x}²). Step again to continue the table. | Guide body when Y = x². {y} value, {x} new x. |
| `guide.settle.body.bad` | Cycle done. Y is now {y}. Step again to continue the table. | Guide body if Y ≠ x² (should not normally appear). {y} value. |
| `guide.settle.hint` | Reset (carry ready) jumps back to Y=9 so the carry is obvious on the first Step. | Guide hint at the end of a cycle; names the btn.reset button. |
| `log.reset` | Reset at x=3 (Y=9, Δ₁=7, Δ₂=2). First Step should carry on Y: 9+7 → 16. | Log line after "Reset (carry ready)". |
| `log.classic` | Classic start x=0 (Y=0, Δ₁=1, Δ₂=2). Carry appears when Y reaches 9+7. | Log line after "Reset (x=0 classic)". |
| `guide.classic.phase` | Ready (classic) | Guide phase after the classic reset. |
| `guide.classic.body` | Same engine, blank table. Step repeatedly; carry shows once Y approaches 9. | Guide body after the classic reset. |
| `guide.classic.hint` | Or use Reset (carry ready) to jump straight to the tooth-catch moment. | Guide hint after the classic reset; names the btn.reset button. |

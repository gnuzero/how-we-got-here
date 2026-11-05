# Mini-CPU lab — UI strings

Source of truth: [`strings.en.json`](strings.en.json) (72 keys). Mechanism and rules:
[`../_shared/README.md`](../_shared/README.md). Copy to `strings.<code>.json`, translate values,
run `python3 scripts/check-lab-strings.py mini-cpu`, preview `/labs/mini-cpu/?lang=<code>`.

Notes for this lab:
- ISA mnemonics (`NOP`, `LDA`, `ADD`, …), register names (A, B, PC, IR) and flag names
  (CARRY, ZERO, HALT) are the machine’s vocabulary: keep them, or use the established
  local teaching form if one exists. Hex/decimal examples (`13`, `0xD`, `0xZZ`, `300`) stay.
- `btn.assemble` / `btn.step` / `btn.reset` are named inside guide and error copy; keep the
  quoted/button names identical to your button translations.
- Assembler error keys (`asm.*`) are shown both in the log (red) and as the guide body.
  `{what}` is one of `asm.what.operand` / `asm.what.value` / `asm.what.address`.
- `src.default` is the starter program in the editor (comments + instructions). Translate
  the comment lines; leave the mnemonics and numbers alone.
- Memory-grid cells (`0: LDI 5`) and the IR `--` placeholder are not translated (ISA text).
- Embedded 11× per locale (plus a few extras in si / zh); shared state is per iframe, so
  each embed is independent. Posts pass no lab parameters — only `type` and optional `height`.

| Key | English | Context |
|---|---|---|
| `page.title` | Mini-CPU Lab — 8-bit Toy ISA | Browser tab title (lab opened in a new tab). |
| `page.heading` | Mini-CPU Lab | Top heading. |
| `page.subtitle` | 8-bit toy ISA · 4-bit opcode / 4-bit operand · 16 bytes RAM · A/B registers · Carry/Zero flags | Grey line under the heading. Keep the technical tokens. |
| `guide.heading` | Guided beat | Guide box heading (UPPERCASE via CSS in Latin scripts). |
| `panel.assembly` | Assembly | Heading of the source panel. |
| `btn.assemble` | Assemble | Primary button: assemble source into memory. |
| `btn.step` | Step | Button: one fetch/decode/execute cycle. |
| `btn.run` | Run | Button: auto-step every 250 ms. |
| `btn.stop` | Stop | Button: stop auto-stepping. |
| `btn.reset` | Reset | Button: clear registers; memory kept. |
| `isa.lead_html` | (HTML; see strings.en.json) | ISA summary line. Keep every `<code>…</code>` and the `<strong>` tag; translate only the prose around them. |
| `isa.note1_html` | (HTML) | First ISA note (operand rules / NOP 7). Keep `<code>` tags. Mentions Assemble. |
| `isa.note2_html` | (HTML) | ZERO-flag note. Keep `<code>` tags and ZERO / Reset / JZ. |
| `isa.note3_html` | (HTML) | 8-bit wrap / CARRY note. |
| `isa.note4_html` | (HTML) | Shared program+data memory note. Keep `<code>STA</code>` / `<code>HLT</code>`. |
| `panel.cpu` | CPU State | Heading of the registers panel. |
| `reg.a` / `reg.b` / `reg.pc` / `reg.ir` | A / B / PC / IR | Register labels. Normally keep as-is. |
| `flag.carry` / `flag.zero` / `flag.halt` | CARRY / ZERO / HALT | Flag chips. Normally keep as-is. |
| `panel.output` | Output Register | Heading above the OUT display. |
| `panel.memory` | Memory (16 × 8-bit) | Heading of the memory grid. |
| `src.default` | (multi-line; see JSON) | Default editor contents. Translate comments only. |
| `guide.intro.phase` | Fetch → Decode → Execute | Guide phase after load / successful Assemble. |
| `guide.intro.body` | A canned 8-instruction program… | Guide body after load / Assemble. Mentions Step, Assemble. |
| `guide.intro.hint` | Tip: amber border… | Guide hint after load / Assemble. |
| `guide.reset.hint` | CPU registers cleared… | Guide hint after Reset. Mentions Step. |
| `guide.assembleError.phase` | Assemble error | Guide phase when Assemble fails. |
| `guide.assembleError.hint` | Fix the source, then press Assemble. | Guide hint on Assemble failure. |
| `guide.halted.phase` | Halted | Guide phase when Step is pressed after HLT. |
| `guide.halted.body` | CPU is stopped after HLT… | Guide body when already halted. Mentions Reset, Assemble. |
| `guide.step.phase` | Step {n} · Fetch / Decode / Execute | Guide phase during stepping. {n} = step count. |
| `guide.step.hint` | Press Step again… | Guide hint while running. |
| `guide.step.hintDone` | Beat complete — Output should be 13 (5+8)… | Guide hint after HLT on the canned program. |
| `guide.run.phase` | Run | Guide phase while auto-stepping. |
| `guide.run.body` | Auto-stepping every 250ms… | Guide body while auto-stepping. Mentions Stop, Step. |
| `guide.body.joined` | {fetch} · {decode} · {execute} | Joins the three step narration lines. Keep the “ · ” separators or adapt locally. |
| `step.fetch` | FETCH: IR ← mem[{pc}] = 0x{byte}; PC → {next} | Fetch narration. {pc} address, {byte} two hex digits, {next} next PC. |
| `step.decode` | DECODE: {insn} (opcode 0x{op}, operand {arg}) | Decode narration. {insn} is e.g. `LDI 5` or `OUT`; {op} hex digit; {arg} 0–15. |
| `step.execute` | EXECUTE: {detail} | Execute narration wrapper. {detail} = one of the `exec.*` strings. |
| `exec.nop` … `exec.unknown` | (see JSON) | Per-opcode execute narration. `{arg}`, `{A}`, `{prevA}`, `{prevMem}`, `{carry}`, `{zero}`, `{out}` as shown. JC/JZ have `.taken` / `.fall` variants. |
| `log.assembled` | Assembled {count} words into memory. Ready. | Log line after a successful Assemble. {count} = word count. |
| `log.reset` | Reset. | Log line after Reset. |
| `log.halted` | CPU halted — reset to run again. | Red log line if Step while halted. |
| `log.hlt` | HLT — program finished. Output = {out} | Log line when HLT executes. {out} = output register. |
| `log.unknownOpcode` | Unknown opcode 0x{op} at PC {pc} | Red log line for a bad opcode byte. |
| `asm.unknownMnemonic` | Line {line}: unknown mnemonic '{mnem}' | Assembler error. |
| `asm.exceeds` | Line {line}: program exceeds 16 words | Assembler error. |
| `asm.needsOperand` | Line {line}: {name} needs an {what} (0–15) | Assembler error. {what} from asm.what.*. English keeps “an” for all three (matches prior behaviour). |
| `asm.unexpected` | Line {line}: unexpected '{extra}' after '{mnem} {arg}' | Assembler error. |
| `asm.badOperand` | Line {line}: bad {what} '{arg}' — write a number 0–15 in decimal (13) or hex (0xD) | Assembler error. |
| `asm.outOfRangeValue` | Line {line}: {what} '{arg}' is out of range — {name} takes 0–15 (the operand is 4 bits) | Assembler error for LDI / optional-operand overflow. |
| `asm.outOfRangeAddr` | Line {line}: address '{arg}' is past the end of memory — addresses are 0–15 | Assembler error for LDA/ADD/… address overflow. |
| `asm.what.operand` / `asm.what.value` / `asm.what.address` | operand / value / address | Inserted as {what} in asm.* errors. |

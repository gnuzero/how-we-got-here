# Labs guided-experience progress

**Scope:** local tree only (`/workspace/freebook/from-relays-to-attention`).  
**Constraints honored:** no git commits, no remotes, no `content.si` / `content.ta`, no fourth lab.

## Playthrough notes (pre-change)

### mini-cpu (`static/labs/mini-cpu/index.html`)
- Fully client-side, no CDN. Works on load (auto-assembles a short demo).
- **Gaps:** no fetch/decode/execute narration; reader cannot tell they should Assemble then Step and watch **A + memory**; sample was 6 lines, not a clear 8-instruction guided beat.

### breadboard (`static/labs/breadboard/index.html`)
- CDN-dependent on falstad.com.
- iframe loaded blank CircuitJS (`circuitjs.html` with no `startCircuit`).
- Toolbar had AND link for new tab only; first-time reader saw empty canvas.
- Note text was author-facing (“replace the iframe src…”) not reader-facing.

### vm-terminal (`static/labs/vm-terminal/index.html`)
- Heavy CDN (copy.sh/v86: `libv86.js`, `v86.wasm`, seabios, vgabios, `linux4.iso`).
- Blank black box until Boot; no first commands.
- Offline note was author-facing.

## What changed

### 1. mini-cpu — flagship guided beat
- Canned **8-instruction** program (same ISA: NOP/LDA/ADD/SUB/STA/LDI/JMP/JC/JZ/OUT/HLT; addresses 0–15):

```
LDI 5
STA 14
LDI 8
ADD 14
STA 15
LDA 15
OUT
HLT
```

  Narrative: load 5 → store at mem[14] → load 8 → add stored 5 → store sum at mem[15] → reload → OUT → HLT (expected output **13**).
- Added a one-screen **Guided beat** panel. On load: program assembled, guide visible (“press Step repeatedly… watch A and memory”).
- Each **Step** (and **Run** auto-steps) updates the guide with **FETCH / DECODE / EXECUTE** copy and tells the reader what to watch (A, memory cell, output, halt).
- Assemble / Step / Run / Stop / Reset preserved; dark theme / layout kept; guide is inline, not a separate page.

### 2. breadboard — default gate + two sentences
- iframe `src` now: `https://www.falstad.com/circuit/circuitjs.html?startCircuit=and.txt`
- Author-facing embed docs replaced with **two reader sentences** (AND gate; toggle inputs, watch output).
- Falstad new-tab + Wokwi links kept; still client-side embed.

### 3. vm-terminal — first-command card
- Visible **First commands** card: try `whoami`, `uname`, `ls` after boot; click screen for keyboard.
- Boot / Restart kept; CDN loading unchanged (still copy.sh/v86).
- Author “download for offline” note removed from the page; CDN dependency documented here instead.

### 4. Optional labs index
- `content/labs/_index.md` lightly tweaked so the three labs read as guided beats (short; book body not rewritten).

## How to verify

Open each file in a browser (file:// or via Hugo static serve):

1. `static/labs/mini-cpu/index.html` — guide visible on load; Step eight times → Output **13**; Assemble after edits still works.
2. `static/labs/breadboard/index.html` — AND gate should appear in the iframe (needs network); two-sentence note below.
3. `static/labs/vm-terminal/index.html` — first-command card visible before Boot; Boot still loads v86 from CDN.

HTML sanity: no broken `<script>` / unclosed tags in the three lab pages (validated with a simple tag-balance check).

## Remaining risks

| Risk | Labs | Notes |
|------|------|--------|
| CDN offline | breadboard, vm-terminal | Falstad + copy.sh required; mini-cpu is offline-safe. |
| Falstad iframe / X-Frame | breadboard | If falstad.com sends a restrictive `X-Frame-Options` / CSP, the embed may blank; new-tab link still works. |
| v86 boot time / size | vm-terminal | First boot downloads wasm + BIOS + ~ISO; can take tens of seconds; blank screen until Boot is expected. |
| Network / ad-block | both CDN labs | Blockers may break embeds or wasm fetch. |

## Explicit non-goals (this pass)

- No git commits or remotes.
- No edits under `content.si` or `content.ta`.
- No fourth lab.


## Spine hooks (pass 2)

**Goal:** readers hit labs early on the narrative spine, not only as late appendages.

### Changes
- Rewrote `content/labs/_index.md` in VISION voice: journey beats (gates → breadboard, ISA → mini-CPU, running machine → VM), not a catalog of toys. Points at the guided beats from pass 1. Removed author-facing embed cookbook from the public index.
- Post **07** (`07-logic-gates-from-transistors.md`): breadboard was already embedded (frontmatter `labs: ["breadboard"]`); moved it after “Building NAND and NOR” with a short **Try this now** sentence before the shortcode (AND gate default). Kept post **08** breadboard embed unchanged.
- Post **11** (`11-instruction-sets.md`): mini-cpu embed confirmed; relocated after “Encoding, Concretely” with a short **Try this now** sentence before the shortcode (not dumped at the bottom after the x86 aside).

### Explicit non-goals (this pass)
- No fourth lab.
- No `content.si` / `content.ta`.
- No git.

### CDN / X-Frame risks (unchanged — do not paper over)
Still real; still only documented here and in the lab pages’ honest status, not hidden:
- Breadboard needs falstad.com; iframe may blank under restrictive `X-Frame-Options` / CSP — new-tab link remains the fallback.
- VM terminal needs copy.sh/v86 (wasm + BIOS + ISO); first boot can take tens of seconds; offline without local assets.
- Mini-CPU stays fully offline-safe.


## Unix/Linux VM hooks (pass 3)

**Goal:** VM try-this-now on the Unix/Linux spine (posts 22–23). Still no fourth lab.

### Changes
- Post **22** (`22-time-sharing-and-the-unix-lineage.md`): `vm-terminal` was already in frontmatter + bottom dump; moved after “From Multics to Unix” with **Try this now** (`uname` / `whoami` / `ls`) before the shortcode. Prose otherwise untouched.
- Post **23** (`23-the-gnu-movement-and-linux.md`): same — moved after “Linux Fills the Gap” with **Try this now** before the shortcode. Prose otherwise untouched (no Jules distill rewrite).

### Explicit non-goals
- No fourth lab; no `content.si` / `content.ta`; no git; no encyclopedia rewrite of body prose.

### CDN / X-Frame risks (unchanged)
VM still depends on copy.sh/v86; first boot download/time and offline gaps remain. Documented here only — not papered over in the posts.

## Play-test (pass 4) — 2026-09-06

**Method:** served `static/` via local `http://127.0.0.1:8765`, opened each lab in the box browser as a first-time reader. Screenshots in `_editorial/lab-shots/`. No new embeds, no fourth lab, no SI/TA, no git, no Jules Phase 1 prose edits.

### Scorecard

| Lab | Rating | One-line |
|-----|--------|----------|
| **mini-cpu** | **GREEN** | Guided panel + 8-instruction program on load; Step through HLT; Output **13**; FETCH/DECODE/EXECUTE copy updates. |
| **breadboard** | **RED** | Falstad chrome loads in the iframe, but the circuit canvas stays blank (“Current Circuit” empty). Reader note visible. New-tab link still offered. |
| **vm-terminal** | **RED** | First-command card OK before Boot. After >90s status stuck on “Downloading VM image + booting…”, screen black, no prompt; could not run `whoami`. |

### What actually worked
- **mini-cpu** fully offline and teachable without a manual. Shots: `lab-shots/mini-cpu-load.png`, `lab-shots/mini-cpu-stepped.png`.

### What failed
- **breadboard:** iframe UI present, **AND canvas blank**. No visible X-Frame error in the page chrome. Probe from this environment: `https://www.falstad.com/circuit/circuits/and.txt` (and the whole `/circuit/circuits/` tree) returns **404** — `?startCircuit=and.txt` likely cannot load a circuit file anymore. Do not paper this over; new-tab is not a substitute for a working default embed. Shot: `lab-shots/breadboard.png`.
- **vm-terminal:** browser play-test saw repeated **zero-byte** fetches toward public `copy.sh` CDN for `libv86.js` / `v86.wasm` while status never left downloading. Separate curl from the box shell still gets HTTP 200 for those URLs and for `linux4.iso` (~7.7MB) — so reachability from shell ≠ reliable first-boot in the reader browser here. Shots: `lab-shots/vm-terminal-before-boot.png`, `lab-shots/vm-terminal-after-boot.png`.

### CDN / framing honesty (still open)
- Breadboard: CDN + broken/missing `startCircuit` asset path → **red embed**.
- VM: CDN-dependent first boot → **red** in this play-test (download never completed in-browser).
- Mini-CPU: no CDN → **green**.

### Explicit non-goals this pass
Stand down on new shortcodes. Report only.

## Breadboard fix + replay (pass 5) — 2026-09-06

**Rating: GREEN**

### Root cause
Falstad no longer ships `and.txt` at `/circuit/circuits/` (404). Old `?startCircuit=and.txt` left a blank canvas.

### Fix
- Embedded a classic 2-input AND circuit in the iframe URL via `?cct=` (URL-encoded CircuitJS dump: type `150` AND + logic inputs/output + wires).
- Shipped the same dump as local `static/labs/breadboard/and.txt` for reference.
- New-tab link uses the same `cct=` URL.
- Simulator UI still loads from falstad.com (CDN); circuit data does not.

### Replay
Opened `http://127.0.0.1:8765/labs/breadboard/` — AND gate visible (two inputs, gate, output); toggled top input L→H. Shot: `lab-shots/breadboard-replay.png`.

### Still open
VM terminal still RED (CDN first-boot hang) — next in Lucas fix order. Mini-cpu stays GREEN (untouched).

## VM fix + replay (pass 6) — 2026-09-06

**Rating: GREEN**

### Root cause
First boot depended on live `copy.sh/v86` CDN. Browser play-test saw zero-byte fetches and hung on “Downloading…”.

### Fix
Vendored under `static/labs/vm-terminal/assets/`:
- `libv86.js` (~346KB)
- `v86.wasm` (~1.4MB)
- `seabios.bin`, `vgabios.bin`
- `linux4.iso` (~7.4MB)

`index.html` now loads those relative paths only (no CDN URLs).

### Replay
Booted to usable `~%` shell; `whoami` → `root`. Shots: `lab-shots/vm-terminal-replay-before.png`, `lab-shots/vm-terminal-replay-after.png`.

## Scorecard after fix order (2026-09-06)

| Lab | Rating | Notes |
|-----|--------|-------|
| mini-cpu | **GREEN** | Untouched; guided beat still works. |
| breadboard | **GREEN** | AND via `cct=` embed; replay toggled inputs. |
| vm-terminal | **GREEN** | Local v86 assets; shell + `whoami`. |

Constraints honored: no fourth lab, no SI/TA, no git, no Jules Phase 1 prose, mini-cpu not churned.

## Needle move — post 08 try-this-now (pass 7) — 2026-09-07

**Shipped:** One spine hook on **08** (`08-from-gates-to-combinational-logic.md`) — breadboard already in frontmatter but dumped at bottom with no try-this-now.

- Moved embed after “Half Adder to Full Adder” (where carry = AND).
- **Try this now** ties the green AND-gate lab to the half-adder carry before ripple-carry is explained.
- No fourth lab; mini-cpu untouched; SI/TA untouched; no git.
- Breadboard still GREEN from pass 5 (`cct=` AND). CDN note for Falstad UI unchanged.

## Needle move — post 12 try-this-now (pass 8) — 2026-09-07

**Shipped:** Post **12** (`12-datapath-design.md`) — mini-cpu was dumped at bottom with no try-this-now.

- Moved embed after “One Instruction, One Clock” (ADD walkthrough).
- **Try this now** ties guided mini-CPU Step (fetch/decode/execute) to the single-cycle datapath path before the pipelining constraint section.
- Mini-cpu lab HTML untouched (still GREEN). No fourth lab; no SI/TA; no git.

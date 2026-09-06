# English editorial pass — Phase 3 & 4 (posts 11–30)

Executor: Lucas finish pass (Phase 3–4 slice)  
Date: 2026-09-06 (Asia/Bangkok)

## Scope

- Phase 3: `content/posts/11-instruction-sets.md` through `20-arm-and-risc-v-the-architecture-landscape-today.md`
- Phase 4: `content/posts/21-batch-processing-and-the-birth-of-the-operating-system.md` through `30-real-time-systems-in-practice.md`
- Not touched: `content.th/`, `content.si/`, `content.ta/`; no git commit/push; no images/schematics generated; prompts / labs / ASSET CHECKLIST comments left in place

## Result

| Metric | Value |
|--------|-------|
| Slice post files | 20 |
| Read fully | **20 / 20** |
| `draft: false` | **20 / 20** |
| `draft: true` remaining in slice | **0** |
| Missing files | none |

Note: A parallel completed editorial wave also set posts 00–30 to `draft: false`. This executor applied substantive prose/fact edits to **11–25** before that steering arrived; **26–30** were already polished and undrafted — left as-is (no re-edit-to-touch).

## Files — Phase 3 (11–20)

- `11-instruction-sets.md` — tightened ISA definition and closing CISC/RISC compromise paragraph; `draft: false`
- `12-datapath-design.md` — light prose tighten (single-cycle framing, pipelining bridge); `draft: false`
- `13-pipelining.md` — tightened opening and downstream hazards bridge; `draft: false`
- `14-branch-prediction.md` — softened misprediction-cost wording; tightened predictor/BTB wrap-up; `draft: false`
- `15-caches.md` — light tighten; coherence closing; checklist whitespace cleanup; `draft: false`
- `16-out-of-order-execution.md` — light tighten; Tomasulo / Model 91 timing softened to “mid-to-late 1960s”; `draft: false`
- `17-superscalar-multicore.md` — clarified P ≈ CV²f (capacitance named); multicore software-demand paragraph tightened; checklist whitespace; `draft: false`
- `18-mainframes-to-minicomputers-to-microprocessors.md` — softened ENIAC figures (“about” / “roughly”); PDP-11 / 4004 wording; 4004 clock “up to ~740 kHz”; facts verified (ENIAC ~1800 sq ft / ~30 tons; PDP-11 ~600k sold; 4004 ~2300 transistors / ~740 kHz); `draft: false`
- `19-the-x86-vs-risc-split.md` — light prose tighten on RISC argument and closing lesson; `draft: false`
- `20-arm-and-risc-v-the-architecture-landscape-today.md` — light tighten on licensing / market segments; dropped “as of this writing”; `draft: false`

## Files — Phase 4 (21–30)

- `21-batch-processing-and-the-birth-of-the-operating-system.md` — light prose tighten; `draft: false`
- `22-time-sharing-and-the-unix-lineage.md` — Multics / Unix licensing wording softened; `draft: false`
- `23-the-gnu-movement-and-linux.md` — **fact fix:** Linux was not GPL on first 1991 release; corrected to restrictive non-commercial license in 1991, GPL relicensing early 1992; `draft: false`
- `24-virtual-memory-and-multitasking.md` — page size / segfault / swapping wording softened; `draft: false`
- `25-containers-and-modern-os-isolation.md` — VM startup cost softened (“many seconds”); isolation-breakout claim softened; `draft: false`
- `26-from-machine-code-to-assembly.md` — read/verified; already polished + `draft: false` (parallel wave); no further edit
- `27-high-level-languages-fortran-cobol-lisp-c.md` — read/verified; already `draft: false`; no further edit (see soft flag on COBOL year)
- `28-compilers-jit-and-modern-language-runtimes.md` — read/verified; already polished + `draft: false`; no further edit
- `29-real-time-systems-and-deterministic-scheduling.md` — read/verified; already polished + `draft: false`; no further edit
- `30-real-time-systems-in-practice.md` — read/verified; already polished + `draft: false`; no further edit

## Fact-check summary (hard claims)

Verified as accurate / conservatively worded:
- ENIAC ~1,800 sq ft, ~30 tons
- IBM System/360 1964; PDP-11 1970, ~600,000 sold; Intel 4004 1971, ~2,300 transistors, up to ~740 kHz
- Tomasulo / System/360 Model 91 (1960s)
- Multics ~1965; Unix from Bell Labs post-Multics exit ~1969 on PDP-7; BSD vs System V split
- GNU 1983; Linux 1991, GPL from early 1992
- FORTRAN 1957; Lisp 1958 / McCarthy; C ~1972 / Ritchie; FLOW-MATIC → COBOL (Hopper influence, not sole author)
- RISC-V origins ~2010 UC Berkeley
- Cache lines commonly 64 B; pages commonly 4 KB; x86 instruction length up to 15 bytes
- P ≈ CV²f; mid-2000s ILP + power-wall pivot
- Rate-monotonic optimality among fixed-priority (Liu & Layland class); DO-178C as avionics software standard

## Soft flags (not blocking)

1. **COBOL year in post 27** — text says “COBOL (1959, specified by the CODASYL committee)”. CODASYL work and draft specs were 1959; published COBOL-60 is April 1960. Acceptable shorthand; could soft-edit later to “1959–60” if desired. Left alone per “do not re-edit just to touch” steering.
2. **Post 30 DO-178C** — “formal verification (or exhaustive worst-case analysis)” is stronger than DO-178C always requires (objectives scale by DAL). Conceptually fine for this level; soften later if needed.
3. **Assets still unchecked** — all posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
4. **Labs** — `mini-cpu` / `vm-terminal` shortcodes left intact; render not re-verified.
5. **Parallel waves** — posts 26–30 undrafted by concurrent pass before this executor finished them; final state consistently `draft: false`.

## Claims not independently re-verified to primary sources

- Exact corporate contribution narratives around Linux (qualitative, left as soft historical framing)
- Relative market-share language for ARM / RISC-V / x86 (intentionally qualitative; no invented percentages)
- DO-178C DAL-specific verification methods (see soft flag)

## Outcome for parent

- Files touched by this executor: **11–25** (15 files) + this report  
- Files in slice left unchanged after concurrent undraft: **26–30** (5 files)  
- **`draft: false` count in slice: 20 / 20**  
- No commit / push; no other-language trees touched

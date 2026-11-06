# Jules progress — Phase 1 English distill (00 + 01–04)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 1 slice — `content/posts/01-foreword.md` + `01`–`04` only; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; doors only where a real primary source already exists

## Done

Phase 1 slice **01–04 (+00)** distilled in place. Marked done.

## Per-file notes

### `01-foreword.md`

- Catalog / “rigorous introduction and lasting reference” voice cut.
- Reframed as journey invite per VISION: interactive journey, not encyclopedia; spine named; labs as doing-not-collecting.
- Attribution kept: concept Nayana Hettiarachchi; authorship Grok team (Lucas, Benjamin, Harper).
- Summary tightened. Kept short. `draft: false`.

### `04-mechanical-electromechanical-computing.md`

- Cut Jacquard patent/Napoleon catalog padding; kept Babbage / Jacquard / Lovelace named.
- Sharpened constraint→architecture bridge: friction/tolerance ceiling → electrical switching.
- Summary tightened toward the constraint story.
- Door added (Lovelace Notes). Prompts + ASSET CHECKLIST left intact.

### `08-relays-and-electromechanical-logic.md`

- Light distill: kept Zuse / Rojas / telephone-exchange industrial base; cut mild encyclopedia padding.
- Constraint bridge sharpened: moving metal → speed + wear ceiling → electrons (tubes).
- Summary tightened. Door added (Rojas 1998). Prompts + checklist intact.

### `09-the-vacuum-tube-era.md`

- Cut mild folklore padding; kept ENIAC scale + patch-cable programming as the stored-program pain.
- Constraint bridge: tube physics (heat / size / vacuum envelope) → transistor necessity.
- Named Goldstine as the door-out account (against tube-swap folklore).
- Summary tightened. Door added (Goldstine). Prompts + checklist intact.

### `10-why-the-transistor-had-to-happen.md`

- Distilled size / power / reliability as three ceilings; kept Phase 2 handoff.
- Named Bardeen, Brattain, Shockley / Bell Labs where the door fits naturally.
- Summary tightened. Door added (Bell Labs transistor papers). Prompts + checklist intact.

## Doors out added

| Post | Door text |
|------|-----------|
| 01 | `**Door out:** Ada Lovelace's *Notes* on the Analytical Engine (on Menabrea's translation) — the primary text for the Bernoulli-numbers sketch and the "any symbols" argument.` |
| 02 | `**Door out:** Raúl Rojas, "How to Make Zuse's Z3 a Universal Computer" (1998) — the careful argument for Z3 Turing-completeness and its limits.` |
| 03 | `**Door out:** Herman H. Goldstine, *The Computer from Pascal to von Neumann* — Goldstine-class ENIAC history, useful against folklore.` |
| 04 | `**Door out:** Bardeen, Brattain, and Shockley's Bell Labs transistor papers (late 1940s / early 1950s) — the primary physics of the solid-state switch that broke the tube ceiling.` |
| 00 | none (foreword; no primary-source door) |

No invented RFCs, URLs, or fake textbooks.

## Soft flags (not blocking)

1. **Post 03 Goldstine door** — book title is the standard Goldstine history; exact ENIAC chapter cites not re-checked against a physical copy this pass. Honest enough for a brief door; Lucas can tighten citation form later if desired.
2. **Post 04 Bell Labs door** — named authors + era, not a specific Physical Review / Bell System Technical Journal citation string. Kept brief on purpose; no invented DOI/URL.
3. **Assets still unchecked** — all four posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
4. **Other languages** — `content.th` / `content.si` / `content.ta` not touched (mtime check at end of pass).

## Outcome for parent

- Files edited: **5** English posts (`00`, `01`, `02`, `03`, `04`) + this report
- Phase 1 slice 01–04 (+00) **done**
- No commit / push; no other-language trees touched; no new chapters

---

# Jules progress — Phase 3 English distill (11–20)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 3 — `content/posts/17-instruction-sets.md` through `26-arm-and-risc-v-the-architecture-landscape-today.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no posts 05–10; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve lab frontmatter/shortcodes (esp. 11 `labs: ["mini-cpu"]` + `{{< lab type="mini-cpu" >}}` + Try-this-now); doors only where a real primary source already exists
- Note: prior polish in `_editorial/en-phase-3-4.md` was draft/facts only — this pass is VISION distill (cut encyclopedia, sharpen constraint→architecture)

## Done

Phase 3 slice **11–20** distilled in place. Marked done.

## Per-file notes

### `17-instruction-sets.md`

- Cut ISA field catalog; kept architecture vs microarchitecture split as spine.
- Sharpened CISC/RISC as competing answers to the software–hardware contract; pipeline tractability as the RISC constraint win.
- Summary tightened. Lab hooks preserved: `labs: ["mini-cpu"]`, Try-this-now sentence, `{{< lab type="mini-cpu" >}}`.
- Door added (Patterson & Ditzel 1980). Prompts + ASSET CHECKLIST intact. `draft: false`.

### `18-datapath-design.md`

- Cut component encyclopedia listing into a short single-instruction walkthrough.
- Constraint bridge sharpened: worst-case single-cycle clock → pipelining necessity.
- Summary tightened. Lab shortcode preserved. No door (teaching walkthrough; no single famous primary beyond textbooks).
- Prompts + checklist intact. `draft: false`.

### `19-pipelining.md`

- Cut mild textbook padding on stages; kept IF/ID/EX/MEM/WB and latency-vs-throughput.
- Hazards framed as constraints that force forwarding, stalls, then branch prediction and OOO.
- Summary tightened. Lab shortcode preserved. No door (classic textbook material without one named primary this pass).
- Prompts + checklist intact. `draft: false`.

### `20-branch-prediction.md`

- Distilled static/dynamic + 2-bit counter + BTB toward flush-cost → prediction.
- Kept lab-hook sentence for stepping a loop branch. Lab shortcode preserved.
- Summary tightened. Door added (Smith ISCA 1981). Prompts + checklist intact. `draft: false`.

### `21-caches.md`

- Cut organization catalog tone; kept locality → line fetch, then associativity as the conflict/hardware tradeoff.
- Coherence (MESI) as multicore constraint feeding Post 17.
- Summary tightened. Door added (Wilkes 1965). Prompts + checklist intact. `draft: false`.

### `22-out-of-order-execution.md`

- Sharpened in-order stall → execute-when-ready / commit-in-order; Tomasulo stays named.
- Renaming / reservation stations / ROB kept as connective tissue, not a catalog.
- Summary tightened. Lab shortcode preserved. Door added (Tomasulo 1967). Prompts + checklist intact. `draft: false`.

### `23-superscalar-multicore.md`

- ILP wall + power wall (P ≈ CV²f) → wide-instead-of-fast pivot; software demand for threads named.
- Cut mild encyclopedia padding; kept Phase 4 / 7 / 9 handoffs.
- Summary tightened. Door added (Olukotun et al. ASPLOS 1996). Prompts + checklist intact. `draft: false`.

### `24-mainframes-to-minicomputers-to-microprocessors.md`

- Reframed as three answers to “who gets a computer”; cut timeline-catalog voice.
- Named Amdahl / Blaauw / Brooks; kept S/360, PDP-11, 4004 facts from prior polish.
- Summary tightened. Lab shortcode preserved. Door added (Amdahl/Blaauw/Brooks 1964). Prompts + checklist intact. `draft: false`.

### `25-the-x86-vs-risc-split.md`

- Kept commercial fight spine; sharpened compatibility moat → µop translation as the real resolution.
- Closing lesson (ecosystem beats paper elegance) kept as bridge to ARM / RISC-V.
- Summary tightened. Lab shortcode preserved. Door added (Patterson & Ditzel 1980 — same primary as 11; see soft flag). Prompts + checklist intact. `draft: false`.

### `26-arm-and-risc-v-the-architecture-landscape-today.md`

- Cut market-segment catalog tone; kept licensing/economics as the constraint that moved after desktop settled.
- Named Asanović / Patterson among RISC-V drivers; qualitative market map kept soft.
- Summary tightened. Lab shortcode preserved. Door added (RISC-V ISA Manual). Prompts + checklist intact. `draft: false`.

## Doors out added

| Post | Door text |
|------|-----------|
| 11 | `**Door out:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — the classic argument that launched the RISC side of this split.` |
| 12 | none |
| 13 | none |
| 14 | `**Door out:** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — early systematic treatment of dynamic branch prediction, including saturating-counter ideas that became textbook.` |
| 15 | `**Door out:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — early statement of the cache idea as a fast slave store beside slower main memory.` |
| 16 | `**Door out:** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — the primary paper behind modern out-of-order issue and rename.` |
| 17 | `**Door out:** Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson, and Kunyung Chang, "The Case for a Single-Chip Multiprocessor" (ASPLOS 1996) — an early, explicit argument for putting multiple cores on one die as ILP returns flatten.` |
| 18 | `**Door out:** G. M. Amdahl, G. A. Blaauw, and F. P. Brooks Jr., "Architecture of the IBM System/360" (*IBM Journal of Research and Development*, 1964) — the primary statement of a compatible machine family and the ISA/implementation split.` |
| 19 | `**Door out:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — the manifesto of the RISC side of this commercial fight.` |
| 20 | `**Door out:** The RISC-V Instruction Set Manual (riscv.org) — the living primary specification for the open ISA this post names; start with the unprivileged ISA volume.` |

No invented RFCs, DOIs, or fake textbooks. riscv.org named only as the real home of the living RISC-V manuals.

## Soft flags (not blocking)

1. **Posts 11 and 19 share Patterson & Ditzel 1980** — appropriate on both (philosophy intro vs commercial fight); Lucas can drop one or retarget 11 to Hennessy/Patterson COD if desired.
2. **Posts 12 and 13 have no door** — single-cycle datapath and classic 5-stage pipeline are textbook material without one named primary chosen this pass; honest omission better than inventing a cite.
3. **Post 14 Smith 1981** — title/venue are the standard citation for early dynamic branch prediction; saturating-counter attribution in textbooks sometimes blends Smith with later work — door kept as the study, not a claim that Smith alone invented every 2-bit variant.
4. **Post 15 Wilkes 1965** — “slave memory” is the historical term; modern “cache” naming came later. Door is the idea primary, not a modern cache-organization textbook.
5. **Post 17 Olukotun et al.** — one important early multicore argument among several; not claimed as the sole industry cause of the mid-2000s pivot.
6. **Post 20 RISC-V Manual** — living spec (versioned volumes); no frozen DOI. Site named because it *is* the primary.
7. **Assets still unchecked** — all ten posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
8. **Labs** — mini-cpu frontmatter/shortcodes left intact on 11–14, 16, 18–20; Try-this-now on 11 preserved; render not re-verified.
9. **Other languages / Phase 2** — `content.th` / `content.si` / `content.ta` not touched; posts 05–10 mtimes unchanged (Arun’s slice).

## Outcome for parent

- Files edited: **10** English posts (`11`–`20`) + this report (Phase 3 section appended; Phase 1 section kept)
- Phase 3 slice 11–20 **done**
- No commit / push; no other-language trees touched; no new chapters; posts 05–10 untouched

---

# Jules progress — Phase 4 English distill (21–30)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 4 — `content/posts/27-batch-processing-and-the-birth-of-the-operating-system.md` through `36-real-time-systems-in-practice.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no posts 05–10; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve all lab frontmatter/shortcodes (esp. 22/23 Try-this-now + `{{< lab type="vm-terminal" height="600" >}}`); doors only where a real primary already exists; Linux 1991 restrictive → GPL early 1992 kept correct
- Note: prior polish in `_editorial/en-phase-3-4.md` was draft/facts only — this pass is VISION distill (cut encyclopedia, sharpen constraint→architecture)

## Done

Phase 4 slice **21–30** distilled in place. Marked done.

## Per-file notes

### `27-batch-processing-and-the-birth-of-the-operating-system.md`

- Cut job-control catalog voice; reframed around idle-CPU constraint → resident monitor as OS ancestor.
- Bridge sharpened: no interactivity → time-sharing necessity (Post 22).
- Summary tightened. Lab shortcode preserved. No door (early monitors lack one named primary this pass).
- Prompts + checklist intact. `draft: false`.

### `28-time-sharing-and-the-unix-lineage.md`

- Light distill; kept Multics ambition vs Unix simplicity; Thompson / Ritchie named.
- **Try this now** sentence + `{{< lab type="vm-terminal" height="600" >}}` preserved exactly.
- Summary tightened. Door added (Ritchie & Thompson CACM 1974). Prompts + checklist intact. `draft: false`.

### `29-the-gnu-movement-and-linux.md`

- Cut mild encyclopedia padding on GNU tool list; kept Stallman / Torvalds named; Hurd gap → Linux fill.
- **Fact kept:** 1991 restrictive non-commercial release, GPL relicensing early 1992.
- **Try this now** sentence + `{{< lab type="vm-terminal" height="600" >}}` preserved exactly.
- Summary tightened. Door added (GPL + GNU Manifesto 1985). Prompts + checklist intact. `draft: false`.

### `30-virtual-memory-and-multitasking.md`

- Cut page-table textbook padding; kept illusion → MMU/page fault → isolation-as-security.
- Bridge sharpened: heavyweight process isolation → containers question (Post 25).
- Summary tightened. Lab shortcode preserved. No door (teaching material; no single famous primary chosen).
- Prompts + checklist intact. `draft: false`.

### `31-containers-and-modern-os-isolation.md`

- Cut buzzword catalog; kept VM-vs-container tradeoff as constraint story (isolation strength vs boot/footprint).
- Namespaces / cgroups / chroot lineage kept as connective tissue, not a feature list.
- Summary tightened. Lab shortcode preserved. No door (kernel mechanisms; no classic single primary this pass).
- Prompts + checklist intact. `draft: false`.

### `32-from-machine-code-to-assembly.md`

- Distilled to readability + labels as the forced first abstraction; one-to-one mapping stressed.
- Kept mini-cpu lab hook. Summary tightened. No door.
- Prompts + checklist intact. `draft: false`.

### `33-high-level-languages-fortran-cobol-lisp-c.md`

- Reframed four languages as four domain constraints (formula / business prose / symbolic lists / systems-close-to-metal), not a catalog.
- Hopper, McCarthy, Ritchie stay named; COBOL year softened to 1959–60 (prior soft flag).
- Summary tightened. Door added (Ritchie HOPL-II C; McCarthy Lisp pointed). No labs field (none originally). Prompts + checklist intact. `draft: false`.

### `34-compilers-jit-and-modern-language-runtimes.md`

- Cut stage-by-stage encyclopedia into short pipeline spine; AOT vs JIT as information constraint (runtime facts AOT never had).
- GC ↔ real-time tension kept as bridge to 29–30. Lab shortcode preserved.
- Summary tightened. No door (Dragon Book is textbook; honest omission this pass). Prompts + checklist intact. `draft: false`.

### `35-real-time-systems-and-deterministic-scheduling.md`

- Sharpened fast ≠ deterministic; hard vs soft; RMS as provable fixed-priority bound; priority inversion named.
- Summary tightened. Lab shortcode preserved. Door added (Liu & Layland 1973).
- Prompts + checklist intact. `draft: false`.

### `36-real-time-systems-in-practice.md`

- Distilled avionics / industrial into shared sense–compute–actuate budget; Phase 3 speed tricks as timing enemies.
- Softened DO-178C wording (objectives scale by DAL — prior soft flag). Both lab shortcodes preserved.
- Summary tightened. Door added (DO-178C). Prompts + checklist intact. `draft: false`.

## Doors out added

| Post | Door text |
|------|-----------|
| 21 | none |
| 22 | `**Door out:** Dennis M. Ritchie and Ken Thompson, "The UNIX Time-Sharing System" (*Communications of the ACM*, 1974) — the classic primary statement of Unix's design.` |
| 23 | `**Door out:** The GNU General Public License (Free Software Foundation) — the primary legal text that made copyleft enforceable; read alongside Stallman's GNU Manifesto (1985) for the project's stated goal.` |
| 24 | none |
| 25 | none |
| 26 | none |
| 27 | `**Door out:** Dennis M. Ritchie, "The Development of the C Language" (HOPL-II / ACM) — primary account of C's design beside Unix; for Lisp's founding statement, see John McCarthy's early CACM papers on recursive functions of symbolic expressions.` |
| 28 | none |
| 29 | `**Door out:** C. L. Liu and James W. Layland, "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment" (*Journal of the ACM*, 1973) — the primary paper behind rate-monotonic scheduling and classical hard-real-time schedulability.` |
| 30 | `**Door out:** RTCA DO-178C, *Software Considerations in Airborne Systems and Equipment Certification* — the primary civil-avionics software assurance standard this post names (assurance objectives scale by Design Assurance Level).` |

No invented RFCs, DOIs, or fake textbooks. GPL / Manifesto / Unix CACM / Liu & Layland / DO-178C / Ritchie HOPL are real primaries.

## Soft flags (not blocking)

1. **Posts 21, 24, 25, 26, 28 have no door** — honest omission (early monitors, VM teaching material, kernel isolation mechanisms, assemblers, compiler-pipeline textbooks). Lucas can add Atlas/Denning/Dragon Book later if desired.
2. **Post 27 door points at Ritchie HOPL-II + McCarthy** — C is the systems-spine primary; Lisp is a named secondary pointer, not a full second door block.
3. **Post 23 GPL door** — names the license family + Manifesto year; not a specific GPL version string (GPLv1/v2/v3). Kept brief on purpose.
4. **Post 30 DO-178C** — still the right primary; wording now notes DAL-scaled objectives (addresses prior en-phase-3-4 soft flag).
5. **Post 27 COBOL year** — now “1959–60” (CODASYL 1959 / COBOL-60).
6. **Try-this-now 22/23** — verified preserved verbatim with `height="600"` shortcodes.
7. **Assets still unchecked** — all ten posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
8. **Labs** — vm-terminal / mini-cpu frontmatter/shortcodes left intact; render not re-verified.
9. **Other languages / Phase 2** — `content.th` / `content.si` / `content.ta` not touched; posts 05–10 mtimes unchanged.

## Outcome for parent

- Files edited: **10** English posts (`21`–`30`) + this report (Phase 4 section appended; Phase 1 and Phase 3 sections kept)
- Phase 4 slice 21–30 **done**
- No commit / push; no other-language trees touched; no new chapters; posts 05–10 untouched

---

# Jules progress — Phase 5 English distill (31–37)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 5 — `content/posts/37-buses-101.md` through `43-interconnects-at-scale.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no posts 05–10; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve labs if present (none found); doors only where a real primary already exists
- Note: prior polish in `_editorial/en-rest.md` was draft/facts only — this pass is VISION distill (cut encyclopedia/catalog voice; keep constraint→architecture)

## Done

Phase 5 slice **31–37** distilled in place. Marked done.

## Per-file notes

### `37-buses-101.md`

- Cut mild signal/arbitration catalog; kept address-width ceiling (32-bit → 4 GB) and request/grant as fairness, not a scheme list.
- Constraint bridge sharpened: one transaction at a time → Post 32's escape from shared wires.
- Summary tightened. No door (teaching intro; no single famous primary this pass).
- Prompts + checklist intact. `draft: false`. No labs.

### `38-from-isa-bus-to-pci-to-pcie.md`

- Cut bus-timeline / feature-list voice; reframed ISA → PCI → PCIe as one constraint sequence (parallel intuition → skew wall → PCI headroom-not-escape → serial point-to-point).
- Years 1992 / 2003 kept as facts, not the spine. x1…x16 kept as how bandwidth scales after serial won.
- Summary tightened. No door (PCIe living spec belongs on 33).
- Prompts + checklist intact. `draft: false`.

### `39-pcie-deep-dive.md`

- Cut layer / encoding / generation catalog (dropped 8b/10b vs 128b/130b list); kept intent / reliability / electrons split and TLP as the contract.
- One Gen 3 vs Gen 5 x16 fact kept (~16 vs ~64 GB/s) as "same wires, 4× rate," not a generation table.
- Nitefury / GPUDirect P2P / Post 37 handoff kept. Door added (PCI Express Base Spec, living).
- Prompts + checklist intact. `draft: false`.

### `40-memory-buses.md`

- Cut DDR-generation catalog tone; kept both-edges trick and bandwidth-vs-latency split as the Post 35 setup.
- Channels / ranks / banks reframed as overlap to hide a slow access, not a DIMM feature list. DDR5 dual 32-bit subchannels kept as one parallelism fact.
- Summary tightened. No door (JEDEC family is real; no single classic paper chosen this pass).
- Prompts + checklist intact. `draft: false`.

### `41-the-memory-wall.md`

- Named Wulf and McKee in body; kept diverging-exponentials argument, capacitor-sense physics, cache/OOO as hide-not-close.
- HBM / GPU-memory / Phase 9 as the bandwidth-not-latency response. Door added (Wulf & McKee 1995).
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `42-the-clock-speed-wall.md`

- Light distill; kept P ≈ CV²f, Dennard/leakage, thermal ceiling as same *kind* as skew, wide-instead-of-fast pivot.
- Two-walls-one-turn bridge sharpened toward Post 17, Post 37, Phase 9/10. No door (Dennard 1974 is the scaling law that broke, not a 2005 clock-wall primary — honest omission).
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `43-interconnects-at-scale.md`

- Cut NVLink / CXL / GPUDirect feature-catalog; kept one constraint (many chips → path between them is the next wall) with three answers (dedicated GPU-GPU, coherent memory beyond one die, fewer copies over the network).
- GPUDirect P2P vs NVLink distinction kept. Custom-fabric / BridgeStack handoff kept. No door (vendor interconnects + living CXL spec; no single classic primary this pass).
- Summary tightened. Prompts + checklist intact. `draft: false`.

## Doors out added

| Post | Door text |
|------|-----------|
| 31 | none |
| 32 | none |
| 33 | `**Door out:** The PCI Express Base Specification (PCI-SIG) — the living primary for lanes, TLPs, and the layered stack this post names; it is versioned (the Base Spec, not a frozen paper).` |
| 34 | none |
| 35 | `**Door out:** Wm. A. Wulf and Sally A. McKee, "Hitting the Memory Wall: Implications of the Obvious" (*ACM SIGARCH Computer Architecture News*, 1995) — the short note that named the wall and showed why the gap would dominate unless something basic changed.` |
| 36 | none |
| 37 | none |

No invented RFCs, DOIs, or fake textbooks. PCI-SIG Base Spec named only as the real living primary (versioned, like the RISC-V manuals in Post 20). Wulf & McKee 1995 verified as the actual coinage of "memory wall."

## Soft flags (not blocking)

1. **Posts 31, 32, 34, 36, 37 have no door** — honest omission (bus intro, expansion history, JEDEC DDR family, 2005 clock-wall as industry physics, vendor interconnects). Lucas can add Dennard 1974 or the CXL Consortium spec later if desired; this pass did not invent them as *the* primary.
2. **Post 33 PCIe Base Spec** — living, versioned (Rev 7.0 current as of this pass); door names the family, not a frozen revision/DOI. Site not required (unlike riscv.org, PCI-SIG membership gates some PDFs).
3. **Post 35 Wulf & McKee** — title/venue/year are the standard citation (*Computer Architecture News* 23(1), March 1995). Authors named in body as well as the door.
4. **Post 33 Gen 3/5 x16 numbers** — ~16 vs ~64 GB/s unidirectional kept from prior `en-rest.md` fact pass; not re-derived from the spec this pass.
5. **Nitefury / BridgeStack** — left as intentional series hardware tie-ins (same as `en-rest.md` soft flag).
6. **Labs** — none in 31–37 (no `labs:` field, no `{{< lab` shortcodes). Nothing to preserve.
7. **Assets still unchecked** — all seven posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
8. **Other languages / Phase 2** — `content.th` / `content.si` / `content.ta` not touched; posts 05–10 mtimes unchanged this pass.

## Outcome for parent

- Files edited: **7** English posts (`31`–`37`) + this report (Phase 5 section appended; Phase 1, 3, and 4 sections kept)
- Phase 5 slice 31–37 **done**
- No commit / push; no other-language trees touched; no new chapters; posts 05–10 untouched


---

# Jules progress — Phase 6 English distill (38–43)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 6 — `content/posts/44-serial-links-and-the-first-machine-to-machine-connections.md` through `49-usenet-archie-gopher-and-the-pre-web-internet.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no posts 05–10; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve all lab frontmatter/shortcodes (`labs: ["vm-terminal"]` + `{{< lab type="vm-terminal" >}}`); doors only where a real primary already exists; **43 special:** light polish only — keep Cass find-then-talk arc (IRC → portals/Yahoo seed), named people, existing door outs (RFC 1459), lab hook
- Note: prior bodies were encyclopedia-leaning source; this pass is VISION distill (cut catalog voice; keep constraint→architecture; name people)

## Done

Phase 6 slice **38–43** distilled in place. Marked done.

## Per-file notes

### `44-serial-links-and-the-first-machine-to-machine-connections.md`

- Cut RS-232/modem encyclopedia padding; reframed around point-to-point ceiling → packet-switching necessity.
- Summary tightened toward the constraint story. Lab frontmatter + shortcode preserved.
- No door (EIA RS-232 is a real standard; no single famous paper primary chosen this pass).
- Prompts + checklist intact. `draft: false`.

### `45-arpanet-and-packet-switching.md`

- Named **Paul Baran**, **Leonard Kleinrock**, **Lawrence Roberts** (VISION internet-origins family).
- Sharpened circuit vs packet as bursty-traffic constraint; IMPs as router ancestors; institutional skepticism kept.
- Summary tightened. Lab preserved. Door added (Baran RAND 1964).
- Prompts + checklist intact. `draft: false`.

### `46-ethernet-and-the-local-area-network.md`

- Named **Robert Metcalfe** and **David Boggs**; CSMA/CD as shared-medium answer without central arbiter.
- Shared-bus → switched-star bridge kept (same *kind* as PCIe escape). Cut mild frame/catalog padding.
- Summary tightened. Lab preserved. Door added (Metcalfe & Boggs CACM 1976).
- Prompts + checklist intact. `draft: false`.

### `47-tcp-ip-and-the-modern-internet-stack.md`

- Named **Vint Cerf** and **Bob Kahn**; layered stack + encapsulation kept as connective tissue, not a protocol encyclopedia.
- Unreliable substrate → TCP reliability as the load-bearing bet. Summary tightened.
- Lab preserved. Door added (RFC 791 + RFC 793; Postel named as RFC editor).
- Prompts + checklist intact. `draft: false`.

### `48-datacenter-networking-and-rdma.md`

- Cut kernel-path / topology encyclopedia tone; kept copies-as-tax → RDMA bypass, fat-tree evenness, BridgeStack/Post 37 handoff.
- Summary tightened. Lab preserved. No door (RDMA/InfiniBand living specs + fat-tree literature; no single classic primary chosen this pass — see soft flag).
- Prompts + checklist intact. `draft: false`.

### `49-usenet-archie-gopher-and-the-pre-web-internet.md` (light polish only)

- **Cass arc preserved:** find-then-talk framing; IRC section (Oikarinen, Kuoppala, Pihl, Reed); portals/Yahoo seed (Yang, Filo) + kin (AOL/Excite/Lycos); Usenet/Archie/Gopher named people (Truscott, Ellis, Emtage, Heelan, Deutsch, McCahill).
- **Doors preserved:** RFC 1459 (normalized to `**Door out:**` block); portal-era framing door kept.
- **Lab preserved:** `labs: ["vm-terminal"]` + `{{< lab type="vm-terminal" >}}`.
- Only leftover encyclopedia voice trimmed (tighter Usenet/Archie/Gopher/Netscape sentences). Summary already Cass-aligned; left as find-then-talk.
- Prompts + checklist intact. `draft: false`.

## Doors out added / kept

| Post | Door text |
|------|-----------|
| 38 | none |
| 39 | `**Door out:** Paul Baran, *On Distributed Communications* (RAND Corporation, 1964) — the classic distributed/packet argument that, with Kleinrock's queueing work and Roberts's ARPA program, underwrites why ARPANET could bet against circuit switching.` |
| 40 | `**Door out:** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — the primary paper that stated the shared-medium LAN and CSMA/CD design.` |
| 41 | `**Door out:** [RFC 791](https://www.rfc-editor.org/rfc/rfc791) (Internet Protocol) and [RFC 793](https://www.rfc-editor.org/rfc/rfc793) (Transmission Control Protocol) — the primary specs for the addressing/routing and reliable-transport halves of this stack (Cerf/Kahn lineage; Postel as RFC editor for these September 1981 texts).` |
| 42 | none |
| 43 | kept RFC 1459 + portal-era framing door (Cass); RFC block normalized to bold Door-out form |

No invented RFCs, DOIs, or fake textbooks. RFC 791/793/1459 and Baran/Metcalfe–Boggs are real primaries.

## Soft flags (not blocking)

1. **Posts 38 and 42 have no door** — honest omission (EIA RS-232 family; RDMA/InfiniBand living specs + fat-tree / Leiserson 1985). Lucas can add Leiserson "Fat-Trees" or an InfiniBand Architecture Spec pointer later if desired.
2. **Post 39 Baran door** — names the RAND *On Distributed Communications* series (1964); Kleinrock + Roberts credited in body and door clause, not as separate door blocks.
3. **Post 41 RFC 791/793** — September 1981 Postel texts are the standard IP/TCP primaries; Cerf/Kahn named in body as the suite's designers (earlier Cerf/Kahn 1974 IEEE paper is related lineage, not substituted here).
4. **Post 43 portal "Door out"** — Cass framing note ("product history sitting on the protocols"), not a named primary paper; kept per special rule (do not strip existing door outs). Not a fake cite.
5. **Post 43 NNTP year** — kept as 1986 fact from prior body; RFC 977 is the usual NNTP primary if Lucas wants a second door later — not added this light pass.
6. **Assets still unchecked** — all six posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
7. **Labs** — vm-terminal frontmatter/shortcodes left intact on all six; render not re-verified.
8. **Other languages / Phase 2** — `content.th` / `content.si` / `content.ta` not touched; posts 05–10 mtimes unchanged this pass.

## Outcome for parent

- Files edited: **6** English posts (`38`–`43`) + this report (Phase 6 section appended; Phase 1, 3, 4, and 5 sections kept)
- Phase 6 slice 38–43 **done**
- No commit / push; no other-language trees touched; no new chapters; posts 05–10 untouched

---

# Jules progress — Phase 7+8 English distill (44–51)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 7 + Phase 8 — `content/posts/51-google-s-big-data-infrastructure-why-they-won.md` through `58-chiplets-advanced-packaging.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no posts 05–10; no Cass `71-who-decides-the-wire.md` / `73-wartime-crypto.md`; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve lab hooks if present (none found); doors only where a real primary already exists
- Note: source bodies were constraint-aware but encyclopedia-leaning (product/feature lists); this pass is VISION distill (cut catalog voice; keep constraint→architecture; name people)

## Done

Phase 7+8 slice **44–51** distilled in place. Marked done.

## Per-file notes

### `51-google-s-big-data-infrastructure-why-they-won.md`

- Cut GFS/MapReduce/Bigtable product-list voice; reframed as one constraint chain (web > one machine → failure-as-normal storage → programming model that hides the cluster → sparse structured layer).
- Named **Ghemawat, Gobioff, Leung**; **Dean and Ghemawat**; **Chang et al.**
- Summary tightened. Door added (GFS SOSP 2003 + MapReduce OSDI 2004 + Bigtable OSDI 2006).
- Prompts + checklist intact. `draft: false`. No labs.

### `52-kubernetes-and-container-orchestration-at-scale.md`

- Cut control-plane feature dump; kept declarative desired state + reconciliation loop as the forced answer to fleet-scale failure.
- Named Borg → Omega → open Kubernetes lineage (Burns et al. door); Verma et al. Borg primary.
- Summary tightened. Door added (Borg EuroSys 2015 + Burns ACM Queue 2016).
- Prompts + checklist intact. `draft: false`. No labs.

### `53-the-machine-learning-software-stack.md`

- Cut NumPy/framework/compiler catalog tone; kept stack as the contract between model and silicon, with distributed training hitting the interconnect wall (Posts 37/42).
- No door (no single classic primary for the whole stack this pass — honest omission).
- Summary tightened. Prompts + checklist intact. `draft: false`. No labs.

### `54-what-7nm-actually-means.md`

- Cut foundry branding-comparison catalog; kept node names as generational labels after planar gate-length physics stopped being one number.
- Bridge to lithography (48) and FinFET/GAA (49) sharpened. No door.
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `55-photolithography.md`

- Kept diffraction → shorter wavelength as the physics spine; tin-plasma source + mirror optics as forced architecture; ASML named as sole commercial production EUV supplier.
- Cut Dec-2025 prototype-news digression (soft-flagged below) — not earned as a primary door and not load-bearing for the constraint story.
- No door (no single classic lithography/ASML primary chosen this pass — honest omission > invented cite).
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `56-finfet-to-gaa.md`

- Light distill; kept short-channel leakage → wrap-the-gate geometry change (FinFET) → GAA as the next wrap; Intel 22 nm Ivy Bridge milestone kept as fact.
- Recurring wall→structure pattern bridge to chiplets (51) kept. No door.
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `57-moore-s-law.md`

- Reframed as economic/physics constraint (Moore's component-count observation), not slogan theater; three metrics separated (count / clock / cost-per-transistor).
- Named **Gordon Moore**. Door added (Electronics 1965).
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `58-chiplets-advanced-packaging.md`

- Kept yield-vs-area constraint → chiplet split → packaging must buy back bandwidth; HBM as same packaging family for Phase 9.
- Cut mild packaging-feature padding. No door.
- Summary tightened. Prompts + checklist intact. `draft: false`.

## Doors out added

| Post | Door text |
|------|-----------|
| 44 | `**Door out:** Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung, "The Google File System" (SOSP 2003); Jeffrey Dean and Sanjay Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters" (OSDI 2004); Fay Chang et al., "Bigtable: A Distributed Storage System for Structured Data" (OSDI 2006) — the three primaries behind this infrastructure story.` |
| 45 | `**Door out:** Abhishek Verma et al., "Large-scale cluster management at Google with Borg" (EuroSys 2015) — the primary account of the internal system Kubernetes descends from; Brendan Burns et al., "Borg, Omega, and Kubernetes" (*ACM Queue*, 2016) — the short lineage paper that ties Borg, Omega, and the open control plane together.` |
| 46 | none |
| 47 | none |
| 48 | none |
| 49 | none |
| 50 | `**Door out:** Gordon E. Moore, "Cramming more components onto integrated circuits" (*Electronics*, April 19, 1965) — the primary statement of the economic component-count observation later nicknamed Moore's Law.` |
| 51 | none |

No invented RFCs, DOIs, or fake textbooks. GFS/MapReduce/Bigtable, Borg, Burns ACM Queue, and Moore 1965 are real primaries.

## Soft flags (not blocking)

1. **Posts 46, 47, 48, 49, 51 have no door** — honest omission (ML stack as a layer cake; node-name teaching; lithography/ASML without one classic paper primary this pass; FinFET/GAA device teaching; chiplet packaging). Lucas can add an EUV/ASML-class primary or a chiplet packaging paper later if earned.
2. **Post 45 Omega** — named in body/door lineage via Burns 2016; Schwarzkopf et al. EuroSys 2013 not given a separate door block (Burns already covers the three-generation arc).
3. **Post 48 Dec-2025 Shenzhen EUV prototype note** — removed this pass (news digression; not a primary; would need re-verification if restored). ASML sole-supplier fact kept.
4. **Post 44 three-paper door** — one block naming all three primaries (same *kind* as Post 41 RFC 791+793); Lucas can split if desired.
5. **Post 49 Intel 22 nm date** — kept 2011–2012 from prior body; not re-audited against Intel product chronologies this pass.
6. **Labs** — none in 44–51 (no `labs:` field, no `{{< lab` shortcodes). Nothing to preserve.
7. **Assets still unchecked** — all eight posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
8. **Other languages / Phase 2 / Cass** — `content.th` / `content.si` / `content.ta` not touched; posts 05–10 and Cass 64/66 mtimes unchanged this pass.

## Outcome for parent

- Files edited: **8** English posts (`44`–`51`) + this report (Phase 7+8 section appended; Phase 1, 3, 4, 5, and 6 sections kept)
- Phase 7+8 slice 44–51 **done**
- No commit / push; no other-language trees touched; no new chapters; posts 05–10 and 64/66 untouched

---

# Jules progress — Phase 9+10+Attention English distill (52–63)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 9 + Phase 10 + Attention close — `content/posts/59-why-gpus-exist.md` through `70-attention-is-all-you-need.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no posts 05–10; no Cass `71-who-decides-the-wire.md` / `73-wartime-crypto.md`; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve lab hooks if present (none found); doors only where a real primary already exists
- Note: source bodies were constraint-aware but encyclopedia-leaning (CUDA/GPU feature lists, sparsity technique dumps, interconnect catalogs); this pass is VISION distill (cut catalog voice; keep constraint→architecture; name people)

## Done

Phase 9+10+Attention slice **52–63** distilled in place. Marked done.

## Per-file notes

### `59-why-gpus-exist.md`

- Cut mild SIMD encyclopedia padding; kept graphics embarrassingly-parallel constraint → SIMT shared-control win → general compute (AI) finding the same shape.
- Summary tightened. No door (no single classic "why GPUs" primary this pass — honest omission > invented CUDA whitepaper).
- Prompts + checklist intact. `draft: false`. No labs.

### `60-cuda-cores-warps-and-occupancy.md`

- Cut programming-model catalog tone; kept SM → warp lockstep → divergence tax → occupancy-as-latency-hide (Post 35 bridge).
- Summary tightened. No door (CUDA programming model; no classic academic primary chosen).
- Prompts + checklist intact. `draft: false`.

### `61-gpu-memory-hierarchy.md`

- Kept thousands-of-threads → bandwidth-over-DDR → HBM stack + interposer (Post 51 packaging family); internal hierarchy as Post 10 echo at GPU scale.
- Bridge to tensor cores sharpened (peak FLOPS useless without sustain). No door (JEDEC HBM family; no single classic paper chosen).
- Summary tightened. Prompts + checklist intact. `draft: false`.

### `62-tensor-cores.md`

- Cut dataflow/encoding padding; kept matmul-as-dominant-op → fused MAC primitive → precision coupling (Post 59) → systolic as alternative (Phase 10).
- Summary tightened. No door (NVIDIA-specific; honest omission > invented whitepaper primary).
- Prompts + checklist intact. `draft: false`.

### `63-multi-gpu-scaling.md`

- Cut NVLink/NVSwitch feature-catalog; kept one-GPU-finite → interconnect wall → direct path vs PCIe → RDMA across servers → BridgeStack/Phase 10 handoff.
- Summary tightened. No door (vendor interconnects; same *kind* as Post 37 omission).
- Prompts + checklist intact. `draft: false`.

### `64-why-matrix-multiply-reshaped-chip-design.md`

- Reframed as Phase 10 opening constraint: AI reduces to matmul → specialize silicon; Post 17 / Post 49 pattern named explicitly.
- Summary tightened. No door (teaching connective tissue; no single primary).
- Prompts + checklist intact. `draft: false`.

### `65-systolic-arrays.md`

- Named **H. T. Kung** and **Charles E. Leiserson** in body; kept weight-stationary dataflow as memory-bandwidth answer; GPU-vs-TPU tradeoff as flexibility vs matmul efficiency; MXU as specialized heart.
- Summary tightened. Door added (Kung & Leiserson 1979). Prompts + checklist intact. `draft: false`.

### `66-quantization-mixed-precision.md`

- Cut bit-field encyclopedia tone; kept fewer-bits → denser MAC throughput in fixed power; mixed (not blanket low) as accuracy/throughput tradeoff; sparsity handoff.
- Summary tightened. No door (Micikevicius et al. ICLR 2018 is a real mixed-precision primary — soft-flagged; not added this pass to avoid stretching "strong candidates").
- Prompts + checklist intact. `draft: false`.

### `67-sparsity-in-hardware.md`

- Cut technique dump; kept skip-zero-MACs → unstructured hard for dense MAC HW → 2:4 structured as hardware-friendly; theory-vs-practice throughput gap kept honest (~1.3–1.5× end-to-end).
- Summary tightened. No door (Ampere-era feature; no classic single primary).
- Prompts + checklist intact. `draft: false`.

### `68-interconnect-at-datacenter-scale.md`

- Cut topology/feature catalog; kept scale → fat-tree / rail-optimized → all-reduce as binding pattern → topology can beat chip specs (series theme).
- Summary tightened. No door (fat-tree / Leiserson 1985 soft-flagged on Phase 6; not forced here).
- Prompts + checklist intact. `draft: false`.

### `69-where-it-s-headed.md`

- Forward-looking, humble: three directions as extensions of already-covered constraints (chiplets+HBM, optics closer to package, PIM) — no invented roadmaps or product forecasts.
- Closing thread (constraint → change structure) kept as spine close before Attention.
- Summary tightened. No door. Prompts + checklist intact. `draft: false`.

### `70-attention-is-all-you-need.md`

- Named **Vaswani et al.**; kept QKV formula + multi-head + three dominance properties (parallelism / long-range / hardware affinity) as close of the spine.
- Modern head/layer counts kept soft and factual (not encyclopedia). Door added (Vaswani et al. NeurIPS 2017).
- Summary tightened. Prompts + checklist intact. `draft: false`.

## Doors out added

| Post | Door text |
|------|-----------|
| 52 | none |
| 53 | none |
| 54 | none |
| 55 | none |
| 56 | none |
| 57 | none |
| 58 | `**Door out:** H. T. Kung and Charles E. Leiserson, "Systolic Arrays (for VLSI)" (*Sparse Matrix Proceedings 1978*, SIAM, 1979) — the classic statement of rhythmic MAC arrays for matrix computation; a closely related form also appears in Mead and Conway's *Introduction to VLSI Systems* (1980).` |
| 59 | none |
| 60 | none |
| 61 | none |
| 62 | none |
| 63 | `**Door out:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin, "Attention Is All You Need" (NeurIPS 2017) — the primary paper that introduced the Transformer and made self-attention the dominant sequence-modeling mechanism.` |

No invented RFCs, DOIs, or fake NVIDIA whitepapers-as-primaries. Kung & Leiserson and Vaswani et al. are real primaries.

## Soft flags (not blocking)

1. **Posts 52–57, 59–62 have no door** — honest omission (GPU/CUDA programming model, HBM/JEDEC family, tensor cores as NVIDIA feature, multi-GPU vendor fabrics, matmul teaching opener, quantization/sparsity technique posts, datacenter interconnect, forward-looking close). Lucas can add Micikevicius et al. ICLR 2018 (mixed precision) or Leiserson Fat-Trees 1985 later if earned.
2. **Post 58 Kung & Leiserson** — cited as *Sparse Matrix Proceedings 1978* (SIAM 1979); also appears in Mead & Conway 1980 §8.3 and as CMU-CS-79-103 tech report. Door names the SIAM proceedings form; Mead & Conway noted as related.
3. **Post 59 Micikevicius omission** — real primary exists; deliberately not added this pass (not in task strong-candidate list; honest omission preferred to stretching).
4. **Post 60 2:4 throughput numbers** — kept ~1.3–1.8× GEMM / ~1.3–1.5× end-to-end from prior body; not re-benchmarked this pass.
5. **Post 62** — forward-looking only; no product names invented; CPO/PIM framed as *kind* of response, not a roadmap.
6. **Post 63 head/layer examples** — GPT-3 / Llama 3 405B counts kept from prior body; not re-audited against every model card this pass.
7. **Labs** — none in 52–63 (no `labs:` field, no `{{< lab` shortcodes). Nothing to preserve.
8. **Assets still unchecked** — all twelve posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
9. **Other languages / Phase 2 / Cass** — `content.th` / `content.si` / `content.ta` not touched; posts 05–10 and Cass 64/66 mtimes unchanged this pass (verified).

## Outcome for parent

- Files edited: **12** English posts (`52`–`63`) + this report (Phase 9+10+Attention section appended; Phase 1, 3, 4, 5, 6, and 7+8 sections kept)
- Phase 9+10+Attention slice 52–63 **done**
- No commit / push; no other-language trees touched; no new chapters; posts 05–10 and 64/66 untouched

---

# Jules progress — Phase 2 English distill (05–10)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: English distill of Phase 2 — `content/posts/11-semiconductors-from-first-principles.md` through `16-the-memory-hierarchy-begins.md`; follow VISION.md
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no Cass 64/66; no new chapters; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST untouched; preserve Reed breadboard hooks (07 Try-this-now + `labs: ["breadboard"]` + `{{< lab type="breadboard" height="700" >}}`; 08–10 `labs: ["breadboard"]` + `{{< lab type="breadboard" >}}`); doors only where a real primary already exists
- Note: **closes the deferred Phase 2 gap** — prior Jules passes (Phases 1, 3–10+Attention) left 05–10 untouched; this is the last deferred English spine slice

## Done

Phase 2 slice **05–10** distilled in place. Deferred gap **closed**. Marked done.

## Per-file notes

### `11-semiconductors-from-first-principles.md`

- Cut band-diagram catalog voice (conductor/insulator/semiconductor laundry); kept pushable-gap → controllable switch as the Post-4 tube-ceiling fix.
- Why-silicon bridge sharpened: temperature headroom, SiO₂ gate dielectric, abundance — named Bardeen/Brattain/Shockley for Ge→Si continuity without re-dooring Shockley (already in 04).
- Doping kept as connective tissue into P-N junction → Post 6.
- Summary tightened. No door (Shockley lineage already door'd in 04; honest omission). Prompts + checklist intact. `draft: false`.

### `12-the-transistor-bjt-to-mosfet.md`

- Cut mild device-mechanism encyclopedia; kept current-controlled idle cost → voltage-controlled channel → MOSFET wins digital density.
- Named Kahng / Atalla; CMOS handoff to Post 7 and Phase 8 scaling kept.
- Summary tightened. Door added (Kahng & Atalla 1960 MOSFET). Prompts + checklist intact. `draft: false`.

### `13-logic-gates-from-transistors.md`

- Cut NAND/NOR catalog dump; kept complementary idle-path story (device → circuit topology).
- Functional completeness kept as one beat, not a truth-table dump.
- **Breadboard hooks preserved verbatim:** `labs: ["breadboard"]`, Try-this-now block, `{{< lab type="breadboard" height="700" >}}`.
- Summary tightened. No door (CMOS topology teaching; Mead & Conway soft-flagged, not forced). Prompts + checklist intact. `draft: false`.

### `14-from-gates-to-combinational-logic.md`

- Cut half/full-adder truth-table textbook voice; kept compose→adder→ALU spine.
- Ripple-carry delay framed as the constraint that forces lookahead — same pattern as the book.
- Combinational→state handoff to Post 9 kept.
- Lab hooks preserved: `labs: ["breadboard"]`, `{{< lab type="breadboard" >}}`. No Try-this-now was present; none invented.
- Summary tightened. No door (classic digital-design teaching; no single primary earned). Prompts + checklist intact. `draft: false`.

### `15-sequential-logic.md`

- Cut latch/flop catalog tone; kept feedback→bistable→edge-trigger→setup/hold→clock ceiling.
- Post 36 clock-wall forward link kept as constraint continuity.
- Lab hooks preserved: `labs: ["breadboard"]`, `{{< lab type="breadboard" >}}`.
- Summary tightened. No door (standard sequential-logic teaching). Prompts + checklist intact. `draft: false`.

### `16-the-memory-hierarchy-begins.md`

- Cut memory-type laundry-list voice; kept flop cost/bit → SRAM speed vs DRAM density → hierarchy as repeated tradeoff.
- Named Dennard; Phase 3 caches / Phase 5 Memory Wall handoffs kept.
- Lab hooks preserved: `labs: ["breadboard"]`, `{{< lab type="breadboard" >}}`.
- Summary tightened. Door added (Dennard 1T1C DRAM patent 1968). Prompts + checklist intact. `draft: false`.

## Doors out added

| Post | Door text |
|------|-----------|
| 05 | none (Shockley/Bardeen/Brattain lineage already door'd in 04) |
| 06 | `**Door out:** D. Kahng and M. M. Atalla's 1960 silicon MOSFET work (Bell Labs / IRE–AIEE Solid-State Device Research Conference) — the practical field-effect device that made oxide-gated voltage control the digital standard.` |
| 07 | none |
| 08 | none |
| 09 | none |
| 10 | `**Door out:** Robert H. Dennard's one-transistor DRAM cell (U.S. Patent 3,387,286, 1968) — the 1T1C idea that made dense main memory practical.` |

No invented RFCs, DOIs, or fake textbooks. Honest omission > fake cite.

## Soft flags (not blocking)

1. **Posts 05, 07–09 have no door** — honest omission (05 Shockley already in 04; 07–09 teaching topology / digital design / sequential logic without one earned primary this pass). Lucas can add Mead & Conway *Introduction to VLSI Systems* (1980) on 07 later if desired.
2. **Post 06 Kahng & Atalla** — cited as 1960 Bell Labs / IRE–AIEE Solid-State Device Research Conference form (the classic MOSFET announcement). Exact published proceedings string not re-checked against a physical copy this pass; brief door on purpose.
3. **Post 10 Dennard** — U.S. Patent 3,387,286 (1968) is the standard 1T1C primary; patent number kept from well-known citation form.
4. **Breadboard labs 08–10** — shortcodes preserved; no Try-this-now text existed on those posts (only 07); not invented.
5. **Assets still unchecked** — all six posts retain `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST; no media generated.
6. **Other languages / Cass** — `content.th` / `content.si` / `content.ta` not touched (mtime Sep 5); Cass 64/66 mtimes unchanged (verified).

## Outcome for parent

- Files edited: **6** English posts (`05`–`10`) + this report (Phase 2 section appended; Phase 1, 3, 4, 5, 6, 7+8, and 9+10+Attention sections kept)
- Phase 2 slice 05–10 **done** — **deferred English spine gap closed**
- No commit / push; no other-language trees touched; no new chapters; Cass 64/66 untouched

---

# Jules progress — Wrap polish (64, 66, index, about)

- Desk: Jules
- Date: 2026-09-06 (Asia/Bangkok)
- Scope: LIGHT polish only — Cass widen-the-lens posts 64 + 66; rewrite `content/_index.md` + `content/about.md` for VISION.md; glance 98/99
- Constraints: no git; no `content.th/` / `content.si/` / `content.ta/`; no new chapters / no close-of-book Cisco–Gates–Jobs chapter; keep all Cass facts, named people, doors; leave `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST on 64/66; do not invent new doors or Cass facts

## Done

Wrap polish **done**. Marked done.

## Per-file notes

### `71-who-decides-the-wire.md`

- Cut leftover catalog / editorial tone: “Derive the family; do not catalog…” → “Kin of the Same Kind” with reader-facing *kind* framing.
- Removed stale production aside (“Lucas will pick”); closed as journey connective tissue — optional side paths to Post 43 / Post 66; main spine named.
- Softened “not a second encyclopedia” close; kept shared-meaning-as-infrastructure beat.
- **Kept:** all Cass facts, named people (Crocker, Postel, Clark, Reynolds, Mockapetris, Dyson, Becker, Davis, Berners-Lee, …), all doors, Nayana/ARIN seed language, RIRs/NIRs/W3C/WHATWG/IEEE/ISO kin, frontmatter prompts + ASSET CHECKLIST.

### `73-wartime-crypto.md`

- Light distill only: opening reframed as connective tissue (not “second history” defense-first); closing adds optional-side-path / spine-continues-at-03 beat.
- **Kept:** all Cass facts, named people (Rejewski, Różycki, Zygalski, Turing, Welchman, Newman, Flowers), Colossus dates/constraint, spine bullets 02→03→04, all doors (TNMOC / Copeland / Bletchley), frontmatter prompts + ASSET CHECKLIST.

### `content/_index.md`

- Rewrote for VISION: interactive journey (not encyclopedia); constraint→architecture spine named; labs / experience first.
- Cut “~45,000 words” / “63 chapters” / “completed editorial pass” catalog marketing.
- Mira named as Thai-edition AI personality; attribution = Nayana concept + Grok team (Lucas, Benjamin, Harper).
- Widen-the-lens 64/66 mentioned lightly as optional side paths; brief optional learning-paths-later note (thin index, not parallel book).

### `content/about.md`

- Reframed as journey (constraint→architecture; labs first; doors out).
- Cut Status block with word-count / editorial-pass catalog marketing.
- Mira named; attribution table kept/aligned; BTS link preserved: `[Team stills — Lucas, Benjamin, Harper](/behind-the-scenes/)`.
- Widen-the-lens + thin learning-path indexes mentioned briefly.

### `101-timeline.md` / `102-glossary.md`

- **Left alone.** Reference by nature; openings do not sell “collect every fact.”

## Soft flags (not blocking)

1. **Learning paths** — mentioned only as future thin indexes on index/about; no path pages created.
2. **Close-of-book** — Cisco/Gates/Jobs/etc. not written (hard constraint this pass).
3. **Assets still unchecked** — 64/66 retain prompts + ASSET CHECKLIST; no media generated.
4. **Other languages** — `content.th` / `content.si` / `content.ta` not touched.

## Outcome for parent

- Files edited: **4** (`64`, `66`, `_index.md`, `about.md`) + this Wrap polish section
- 98/99 **untouched**
- No commit / push; no other-language trees; no new chapters

# Series Tracker — From Relays to Attention: How We Got Here

Cadence: **3 posts/week**. 62 posts total (~21 weeks / ~4.8 months).

**Status: draft text complete for all 62 posts (~35,000 words).** Everything below is written and sitting in `content/posts/` with `draft: true` — nothing is public yet. What's still outstanding per post: hero image, schematics, optional video clip, and a final editorial pass before flipping `draft: false`.

Prompts for image/video/schematics are pre-filled in each post's frontmatter.

## Phase 1 — Foundations: Mechanical to Vacuum-Tube Computing
- [x] 01 Mechanical & Electromechanical Computing — draft written
- [x] 02 Relays and Electromechanical Logic — draft written
- [x] 03 The Vacuum Tube Era — draft written
- [x] 04 Why the Transistor Had to Happen — draft written

## Phase 2 — Physics & Devices
- [x] 05 Semiconductors from First Principles — draft written
- [x] 06 The Transistor: BJT to MOSFET — draft written
- [x] 07 Logic Gates from Transistors — draft written
- [x] 08 From Gates to Combinational Logic — draft written
- [x] 09 Sequential Logic — draft written
- [x] 10 The Memory Hierarchy Begins — draft written

## Phase 3 — Building a CPU & Its Architectures
- [x] 11 Instruction Sets — draft written
- [x] 12 Datapath Design — draft written
- [x] 13 Pipelining — draft written
- [x] 14 Branch Prediction — draft written
- [x] 15 Caches — draft written
- [x] 16 Out-of-Order Execution — draft written
- [x] 17 Superscalar & Multicore — draft written
- [x] 18 Mainframes to Minicomputers to Microprocessors — draft written
- [x] 19 The x86 vs RISC Split — draft written
- [x] 20 ARM and RISC-V: The Architecture Landscape Today — draft written

## Phase 4 — Software Foundations: OS, Languages & Real-Time Systems
- [x] 21 Batch Processing and the Birth of the Operating System — draft written
- [x] 22 Time-Sharing and the Unix Lineage — draft written
- [x] 23 The GNU Movement and Linux — draft written
- [x] 24 Virtual Memory and Multitasking — draft written
- [x] 25 Containers and Modern OS Isolation — draft written
- [x] 26 From Machine Code to Assembly — draft written
- [x] 27 High-Level Languages: FORTRAN, COBOL, Lisp, C — draft written
- [x] 28 Compilers, JIT, and Modern Language Runtimes — draft written
- [x] 29 Real-Time Systems and Deterministic Scheduling — draft written
- [x] 30 Real-Time Systems in Practice — draft written

## Phase 5 — The Bus & System Architecture
- [x] 31 Buses 101 — draft written
- [x] 32 From ISA Bus to PCI to PCIe — draft written
- [x] 33 PCIe Deep Dive — draft written  ← ties into Nitefury/GPU fabric project
- [x] 34 Memory Buses — draft written
- [x] 35 The Memory Wall — draft written
- [x] 36 The Clock Speed Wall — draft written
- [x] 37 Interconnects at Scale — draft written

## Phase 6 — Networking Evolution
- [x] 38 Serial Links and the First Machine-to-Machine Connections — draft written
- [x] 39 ARPANET and Packet Switching — draft written
- [x] 40 Ethernet and the Local Area Network — draft written
- [x] 41 TCP/IP and the Modern Internet Stack — draft written
- [x] 42 Datacenter Networking and RDMA — draft written  ← ties into BridgeStack GPU memory fabric

## Phase 7 — Distributed Systems, Big Data & Orchestration
- [x] 43 Usenet, Archie, Gopher, and the Pre-Web Internet — draft written
- [x] 44 Google's Big Data Infrastructure — Why They Won — draft written
- [x] 45 Kubernetes and Container Orchestration at Scale — draft written
- [x] 46 The Machine Learning Software Stack — draft written

## Phase 8 — Process Nodes & Fabrication
- [x] 47 What '7nm' Actually Means — draft written
- [x] 48 Photolithography — draft written
- [x] 49 FinFET to GAA — draft written
- [x] 50 Moore's Law — draft written
- [x] 51 Chiplets & Advanced Packaging — draft written

## Phase 9 — GPUs & Parallel Compute
- [x] 52 Why GPUs Exist — draft written
- [x] 53 CUDA Cores, Warps, and Occupancy — draft written
- [x] 54 GPU Memory Hierarchy — draft written
- [x] 55 Tensor Cores — draft written
- [x] 56 Multi-GPU Scaling — draft written  ← ties into BridgeStack GPU fabric

## Phase 10 — Modern AI Hardware
- [x] 57 Why Matrix Multiply Reshaped Chip Design — draft written
- [x] 58 Systolic Arrays — draft written
- [x] 59 Quantization & Mixed Precision — draft written
- [x] 60 Sparsity in Hardware — draft written
- [x] 61 Interconnect at Datacenter Scale — draft written
- [x] 62 Where It's Headed — draft written

---
**Start date:** TBD — set once the first post is scheduled for publish.
**Target cadence:** 3 posts/week = 62 posts ≈ 21 weeks (~4.8 months) once publishing begins.


## Wave 1 Phase 1 fact-check (2026-08-23)

Re-verified posts 01–04 for first public cut. Fixes applied:
- [x] Post 01 — Jacquard: dropped false “December 1805 key patent” (that brevet is net-making); use ~1804–05 + April 1805 public recognition
- [x] Post 03 — ENIAC tube reliability: replaced “large part of each day swapping tubes” folklore with derated ~1 failure / ~2 days (Eckert)
- [x] Post 03 — softened stored-program wording (original ENIAC lacked it; ENIAC itself got a mode in 1948)
- [x] Post 02 — soft polish: relay era span; Z3 ~5.3 Hz parenthetical
- [x] Posts 03/04 — ENIAC power “about 150–174 kW”

**Wave 1 text ready** (Foreword already draft:false; 01–04 still draft:true pending assets + deploy scaffolding).

## Fact-check pass (completed)

A research-backed fact-check of ~35 historical/technical claims was run across Phases 1, 3, 4, 6, 7, and 8. Result: 1 outright error found and fixed, 6 imprecise/contested claims reworded, everything else confirmed. Corrections applied directly to the post files:

- [x] Post 18 (Mainframes to Minicomputers) — PDP-11 corrected to "introduced 1970" (was "late 1960s")
- [x] Post 01 (Mechanical Computing) — Jacquard loom: distinguished 1801 drawloom patent from 1804-05 punched-card mechanism
- [x] Post 02 (Relays) — Z3 relay count changed to "~2,000-2,600 (sources vary)"; added Turing-completeness caveat (proven in principle by Rojas, 1998; Z3 lacked true conditional branching)
- [x] Post 27 (High-Level Languages) — COBOL/Grace Hopper: clarified she didn't author COBOL, FLOW-MATIC was the influence
- [x] Post 43 (Usenet/Archie/Gopher) — Netscape corrected to "written from scratch by ex-Mosaic developers" (was "building on Mosaic")
- [x] Post 43 — Usenet corrected to "conceived 1979, deployed 1980" (was just "1980")
- [x] Post 48 (Photolithography) — ASML monopoly caveat added (Dec 2025 Reuters report of a Chinese EUV prototype)

### Phase 10 + Attention fact-check (2026-08-23)
Posts 57–63 checked. No fabricated paper/year/formula errors. Fixes applied:
- [x] Post 62 — photonics: DC fabrics already optical; CPO/SiPh is packaging/power, not “first light”
- [x] Post 63 — modern head/layer counts (tens–low hundreds / ~100+ layers); phase string aligned
- [x] Post 58 — weight-stationary TPU MXU wording (don’t say weights freely flow)
- [x] Post 60 — 2:4 sparse speedups 1.3–1.8× GEMM / ~1.3–1.5× e2e
- [x] Post 61 — cluster scale + fat-tree oversubscription nuance
Posts 57 and 59: all checked claims confirmed.

**Major technical fact-check passes complete** for Phases 1–2, 5, 9–10 (plus prior sampled pass). Remaining: spot-check Phases 3–4, 6–8 claim lists as needed before those waves publish.

### Phase 5 + 9 fact-check (2026-08-23)
Posts 31–37 and 52–56 checked. No hard ERRORs. IMPRECISE fixes applied:
- [x] Post 53 — NVIDIA warps always 32 (not “commonly”)
- [x] Post 55 — native 4×4×4 MMA in one cycle (not “small number of cycles”)
- [x] Post 34 — prefetch 8n through DDR4; 16n + dual subchannels at DDR5
- [x] Post 37 — PCIe GPUDirect P2P vs host-staged path; NVLink as high-BW path
- [x] Post 33 — Gen3 vs Gen5 x16 ~16 vs ~64 GB/s
- [x] Post 54 — TSVs fabricated/etched (not “drilled”)
- [x] Post 36 — soft-pedal V-scaling narrative + Dennard/leakage

### Phase 2 fact-check (2026-08-23)
Posts 05–10 checked. 1 ERROR + several IMPRECISE claims fixed in-file:
- [x] Post 07 — CMOS inverter: corrected steady-state path (output↔rail/GND, not VDD→GND through one FET)
- [x] Post 05 — band-gap excitation vs field-effect band bending; thermally grown SiO₂ (not room-temp “native” oxide)
- [x] Post 07 — CMOS dominance dating softened; NMOS load wording tightened
- [x] Post 09 — SR latch vs gated-latch transparency clarified
- [x] Post 10 — D FF ~20T (not “six or more”); DRAM retention “tens of ms” / ~64 ms refresh window
Posts 06 and 08: all checked claims confirmed, no edits.

## Remaining per-post workflow (before flipping draft: false)
1. Editorial pass on the draft text (all drafts were written quickly, in one internal-only push — verify claims, tighten prose, fact-check specific numbers)
2. Generate hero image from `image_prompt` (Midjourney/DALL-E/SDXL)
3. Hand-draw schematics per the `schematics` field (Excalidraw/Figma — do not AI-generate technical diagrams)
4. Confirm `{{< lab type="..." >}}` shortcode renders correctly for any post with a `labs:` field
5. Optional: generate video clip from `video_prompt` for LinkedIn/promo
6. Set `draft: false`, commit, push
## Added after initial draft (2026-08-22)

- [x] 00 Foreword — attributed to Grok Team (draft: false)
- [x] 63 Attention Is All You Need — new culminating chapter
- [x] 99 Glossary — key terms across the series
- [x] About & Attribution page
- [x] LICENSE (CC BY 4.0)
- [x] TRANSLATIONS.md (Thai / Sinhala / Tamil titles + descriptions)
- [x] Site-wide attribution locked (user = concept & inspirer; Grok Team = authors)

## Additional reference pages (2026-08-22)
- [x] 98 Timeline
- [x] 99 Glossary
- [x] About page
- [x] LICENSE (CC BY 4.0)
- [x] Expanded TRANSLATIONS.md (Thai / Sinhala / Tamil)

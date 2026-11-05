# Romanian (ro) progress

- Desk: **Radu**
- Started: 2026-11-05 (Asia/Colombo)
- Role: gap-filling locale (VISION.md Language authority lock) — original pages, not translations of English/Chinese; depth on topics thin on the Romanian web
- Rules: `draft: false` for shipped pages; comma-below ș ț (no cedilla); no invented RO sources; fact-check via Lucas against primaries before merge; titles/attribution from TRANSLATIONS.md; weight / series_index / date match English

## Shipped

- `_index.md` — series landing (from ro-desk checked; unchanged in fact-check)
- `about.md` — Despre și credite (from ro-desk checked; unchanged in fact-check)
- `posts/00-credits.md` — **Credite și uși de ieșire** (weight -1; fact-checked 2026-11-05)
- `posts/00-foreword.md` — **Cuvânt înainte** (placeholder; Nayana's lane)
- `posts/01-mechanical-electromechanical-computing.md` — **Calcul mecanic și electromecanic** (draft: true; fact-checked 2026-11-05)
- `posts/02-relays-and-electromechanical-logic.md` — **Relee și logica electromecanică** (weight 6 / series_index 5; deep; fact-checked 2026-11-05)
- `posts/03-the-vacuum-tube-era.md` — **Era tuburilor vidate** (weight 6 / series_index 5; fact-checked 2026-11-05)
- `posts/04-why-the-transistor-had-to-happen.md` — **De ce trebuia să apară tranzistorul** (weight 7 / series_index 6; fact-checked 2026-11-05)
- `posts/05-semiconductors-from-first-principles.md` — **Semiconductori de la primele principii** (weight 8 / series_index 7; fact-checked 2026-11-05)
- `posts/35-the-memory-wall.md` — **Zidul memoriei** (weight 38 / series_index 37; fact-checked 2026-11-05)


### Early chapters 00–05 (batch 1, fact-checked 2026-11-05)

- `posts/00-credits.md` — **Credite și uși de ieșire** (weight -1 / series_index -1; date 2026-01-01; aligned with softened English credits; About link `/ro/about/`)
- `posts/00-foreword.md` — **Cuvânt înainte** (placeholder only; Nayana's lane — not expanded by Romanian desk)
- `posts/01-mechanical-electromechanical-computing.md` — **Calcul mecanic și electromecanic** (weight 2 / series_index 1; `draft: true` mirrors English; 1822 Babbage announcement from Science Museum)
- `posts/02-relays-and-electromechanical-logic.md` — **Relee și logica electromecanică** (weight 6 / series_index 5, shared with 03 as in English; deep; MARICA sidebar from Rosman 1962 pp. 203–210)
- `posts/03-the-vacuum-tube-era.md` — **Era tuburilor vidate** (weight 6 / series_index 5; CIFA/MECIPT from Toma 2008 + Iancu 2013; no Felix claim)
- `posts/04-why-the-transistor-had-to-happen.md` — **De ce trebuia să apară tranzistorul** (weight 7 / series_index 6)
- `posts/05-semiconductors-from-first-principles.md` — **Semiconductori de la primele principii** (weight 8 / series_index 7; Si 1.12 eV / Ge 0.66 eV at 300 K from Ioffe NSM)

**Primaries opened (batch 1):** CHM Babbage; Menabrea/Lovelace Sketch (Fourmilab); Shannon 1937/1940 thesis; Rojas 1997; von Neumann First Draft; Penn Engineering ENIAC; Nobel 1956 Bardeen/Brattain/Shockley lectures; Rosman 1962 scan (ICTP); ICTP MARICA page; Toma 2008 Market Watch interview; Iancu 2013 AOS; Science Museum (1822); Ioffe NSM Si/Ge band gaps.

**Still NEVERIFICAT (HTML comments only; nothing on-page relies on them):**
1. ~~Burks–Goldstine–von Neumann 1946 IAS report~~ — closed in batch 2 (IAS scan OCR + UNC transcription)
2. Toma, *Buletin Științific* 1957 (catalog only; CIFA figures rest on Toma 2008 + Iancu 2013)
3. MECIPT detail beyond Iancu 2013 (Drăgănescu 2001 unopened)
4. Bardeen–Brattain, Phys. Rev. 74 (1948) — fetch 403; no figures cited
5. Si/SiO₂ as MOSFET reason — deferred to ch. 06
6. Z3 relay count and clock — omitted from prose
7. Felix — no claim; no source found

### Early chapters 06–13 (batch 2, fact-checked 2026-11-05)

- `posts/06-the-transistor-bjt-to-mosfet.md` — **Tranzistorul: de la BJT la MOSFET** (weight 9 / series_index 8)
- `posts/07-logic-gates-from-transistors.md` — **Porți logice din tranzistori** (weight 10 / series_index 9; NOR completeness from Sheffer 1913)
- `posts/08-from-gates-to-combinational-logic.md` — **De la porți la logică combinațională** (weight 11 / series_index 10; Shannon pp. 59–61)
- `posts/09-sequential-logic.md` — **Logică secvențială** (weight 12 / series_index 11; 74LS74A + 74LS75)
- `posts/10-the-memory-hierarchy-begins.md` — **Începutul ierarhiei de memorie** (weight 13 / series_index 12; Dennard granted 4 Jun 1968)
- `posts/11-instruction-sets.md` — **Seturi de instrucțiuni** (weight 14 / series_index 13; phase "3 — Construirea unui CPU și arhitecturile lui"; RISC-V 20240411 ratified; Patterson & Ditzel 1980)
- `posts/12-datapath-design.md` — **Proiectarea căii de date** (weight 15 / series_index 14)
- `posts/13-pipelining.md` — **Pipelining** (weight 16 / series_index 15; Bloch 1959)

**Primaries opened (batch 2):** CHM Silicon Engine 1947/1948/1951/1960/1963/1966/1970; Kahng, Wanlass, Dennard patents; TI SN74LS00, SN74LS74A, SN74LS75, SN74LS283; Sheffer 1913; Shannon 1937/1940; Burks–Goldstine–von Neumann 1946 (IAS scan via OCR + UNC/Collected Works transcription); First Draft; Amdahl et al. 1964; Bloch 1959; RISC-V Unprivileged 20240411; Patterson & Ditzel 1980.

**Still NEVERIFICAT (batch 2, HTML comments only):** 22 markers — didactic generalisations (sync design, timing budget, hold, single-cycle datapath, 5-stage model, structural hazard, CISC/RISC traits), SRAM cell, inverter topology / ISSCC 1963, LS = bipolar, Peirce, 74181 ALU, x86 (deferred to ch. 19). Full list in the batch-2 fact-check report (ro-desk).


**Discrepancies noted (not on-page errors):** Iancu says MARICA built 1957 vs ICTP experimental 1959 (page uses ICTP 1959); ICTP article landing pp. 183–191 vs scan/history 203–210 (page uses 203–210).

### 47 — Ce înseamnă de fapt „7nm”

- **Topic:** What process-node labels mean; contacted pitch vs marketing nm; IRDS “eq” / stacking; vendor density claims
- **Primaries opened:** IRDS 2020/2021/2022 More Moore + Lithography; Intel 10 nm Fact Sheet 2017; Bohr/Mistry 2011 Tri-Gate; Badaroglu IRDS More Moore ICOS 2023 (eq = equivalent)
- **Still unverified / hedged:** TSMC N7 / Samsung 7LPP contacted pitches (primaries unopened); independent check of Intel “~2× vs other 10 nm” density; Dennard 1974 full paper; IRDS 2025 “2nm” (MM) vs “2.1 nm” (Litho LITH-2) left as documented source inconsistency

### 48 — Fotolitografia

- **Topic:** Photolithography; Rayleigh / k1·λ/NA; immersion; EUV; stochastic noise
- **Primaries opened:** IRDS Lithography; Smith SPIE 5040 (water n ≈ 1.44); ASML public pages (Rayleigh, Light & lasers, lenses/mirrors, pellicle story, NXT/EXE); Born & Wolf / classical Rayleigh via standard refs
- **Still unverified / hedged:** ASML EUV source power (W), conversion efficiency, collector lifetime — omitted; EUV pellicle transmission % — omitted; ASML i-line 220 vs 280 nm both appear on same “Light & lasers” page (source inconsistency left documented)

### 49 — De la FinFET la GAA

- **Topic:** FinFET → GAA / nanosheet; swing / DIBL; Weff arithmetic; IRDS GAA gap
- **Primaries opened:** Hisamoto et al. IEEE TED 2000 (PTAB Ex.1015 figures); Auth et al. VLSI 2012; IRDS §4.2.7
- **Still unverified / hedged:** TSMC N3/N2 and Intel RibbonFET process geometry unopened; Loubet et al. VLSI 2017 / Samsung 3 nm GAA process paper internals unopened

### 53 — Nuclee CUDA, warp-uri și ocupare

- **Topic:** SM / warp / scheduler / occupancy; latency hiding vs CPU memory wall
- **Primaries opened:** NVIDIA Tesla V100 WP; NVIDIA A100 WP; CUDA Programming Guide 13.5; Jia et al. arXiv:1804.06826; Volkov GTC 2010; Vaswani 2017; Dao et al. FlashAttention 2022
- **Still unverified / hedged:** register-allocation granule & reserved smem on cc 8.0 (occupancy stays “teoretic”); V100 PCIe / V100S / A100 80 GB product SKUs omitted; Hopper/H100 dense vs sparse / FP8 not on this page; FlashAttention “19 TB/s” / “40–80 GB” as Dao’s claim only; Jia 375 cycles is third-party microbenchmark; Volkov 2010 is pre-Volta principle

### 54 — Ierarhia de memorie a GPU-ului

- **Topic:** GPU memory hierarchy (registers → shared → L1/L2 → HBM); coalescing; bank conflicts; FlashAttention as IO-aware tiling
- **Primaries opened:** V100 WP; A100 WP; CUDA PG 13.5; FlashAttention (Dao et al.); Roofline EECS-2008-134
- **Still unverified / hedged:** JEDEC HBM physicals (TSV/interposer) not opened — omitted in body; product-page capacity figures not used; same FlashAttention hierarchy numbers as Dao §2.1 only

### 55 — Tensor Cores

- **Topic:** Tensor Core history and programming (Volta → Ampere); WMMA; dense/sparse peaks from whitepapers; PTX `mma` / FP8 section pointer
- **Primaries opened:** V100 WP; A100 WP; CUDA PG / PTX ISA (§9.7.16.5 for FP8 `mma` on sm_89+)
- **Still unverified / hedged:** Hopper PDF not obtainable this pass — no Hopper TFLOPS on the page; product-page variants excluded; native proofread still desirable

### 57 — De ce înmulțirea de matrice a remodelat proiectarea cipurilor

- **Topic:** Why matmul reshaped chip design; TPU v1 economics; compute- vs I/O-bound; attention as matmul
- **Primaries opened:** Jouppi et al. ISCA 2017; Kung 1982; Kung–Leiserson CMU-CS-79-103; Eyeriss 2016; Roofline EECS-2008-134; Vaswani 2017; Chellapilla 2006
- **Still unverified / hedged:** [Dal16] energy–area ratios secondhand via Jouppi §1 only (primary not opened); TPU v2+ omitted; Mead & Conway 1980 bibliographic only; illustrative 1024×1024 intensity desk arithmetic; native idiom of new Dal16/im2col sentences

### 58 — Matrice sistolice

- **Topic:** Systolic arrays (Kung–Leiserson); weight- vs output-stationary; TPU v1 MXU vs Haswell/K80
- **Primaries opened:** Kung–Leiserson CMU-CS-79-103; Kung 1982; Jouppi et al. 2017; Eyeriss 2016
- **Still unverified / hedged:** later TPU generations omitted (out of scope); Tensor Core TOPS deferred to ch.55 / NVIDIA WPs; SIAM 1979 bound pages not scanned (CMU report used); native polish on new sentences welcome

### 60 — Sparsity în hardware

- **Topic:** Pruning / Deep Compression / EIE; Ampere 2:4 sparse Tensor Cores; energy vs DRAM; ridge-point effect of sparsity
- **Primaries opened:** Mishra et al. arXiv:2104.08378; A100 WP; PTX ISA §9.7.16.6; cuSPARSELt docs; Han et al. 2015 & Deep Compression 2016; EIE 2016; Jouppi 2017
- **Still unverified / hedged:** end-to-end (whole-net) 2:4 inference speedup on A100 — no primary opened (page gives none); cuSPARSELt HTML not re-scraped beyond desk copies; native Romanian polish still welcome

### Early chapters 14–21 (batch 3, fact-checked 2026-11-05)

- **Phase 4 string** `4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real` approved (mirrors EN; & → și).
- **Primaries opened (batch 3):** Smith 1981; Lee & Smith 1984; Bloch 1959; Wilkes 1965; Papamarcos & Patel 1984; Sweazey & Smith 1986; Tomasulo 1967; Smith & Pleszkun 1988; Olukotun et al. 1996; Mudge 2001; Amdahl et al. 1964; CHM (PDP-11, 4004, Who invented the microprocessor); ICTP DACICC-1; Iancu 2013 (secondary); Patterson & Ditzel 1980; RISC-V Unprivileged 20240411; Intel Optimization Reference Manual Vol. 2 (050); arm.com/architecture; Patrick 2008 (CHM).
- **Closed:** BTB (Lee & Smith), ROB (Smith & Pleszkun), power formula (Mudge), µop translation (Intel Opt. manual), Patterson & Ditzel.
- **Still NEVERIFICAT (10):** FSM labels; locality terms; 64-byte line; cache taxonomy; literal "MESI"; mid-2000s power-wall narrative; Rus 1997 pages; µop chronology; Arm licence tiers (secondary only); RAND P-7316.
- **Discrepancy flagged on page:** DACICC-1 years ICTP 1959–1963 vs Iancu/Guran 1958–1959.

### Early chapters 22–28 (batch 4, fact-checked 2026-11-05)

- **Primaries opened (batch 4):** Ritchie & Thompson 1974 (Brewer copy, CACM 17(7) pp. 365–375); Ritchie hist/chist; Corbató 1962; Van Vleck CTSS; Multicians history; GNU initial announcement (gnu.org + Wayback 20201224); Linux RELNOTES-0.12, COPYING; GPL-2.0; Torvalds 1991 post; Kilburn et al. 1962 (Crossref DOI 10.1109/TEC.1962.5219356); Denning 1968/1970; namespaces(7), cgroups(7), cgroup-v2; OCI runtime-spec; RISC-V Unprivileged 20240411; First Draft (EDVAC); Backus 1957; COBOL 1960 (OCR); McCarthy 1960; Aycock 2003.
- **Closed:** CACM pages, GNU 1983 announcement, GPL switch (0.12 relnotes), Kilburn IRE citation, cpu.max unit (µs).
- **Computed:** addi x1,x0,5 = 0x00500093; awk sum 500000500000; ELF magic 7f 45 4c 46.
- **Still NEVERIFICAT (11):** BSD/SysV omission (approved); 0.12 release date; IRE page numbers; x86-64 paging/TLB/NX (SDM 403); /proc/self/maps; VM vs container cost; container escapes; x86 asm examples; Hopper/bitsavers PDF; compiler stages; HotSpot/V8/CLR.
- **Discrepancy flagged on page:** Atlas 32 page positions (Kilburn) vs "16 pages" (Multicians).

### Early chapters 29–34 (batch 5, fact-checked 2026-11-05)

- **Phase 5 string** `5 — Magistralele și arhitectura sistemului` approved (mirrors EN; & → și).
- **Primaries opened (batch 5):** Liu & Layland 1973 (UPenn copy); Reeves 1997 (UNC + Wayback); Jones 1997 (Wayback MSR); PCI-SIG FAQ (3.0 double, Gen 4/5), Webinar Rev 6, 30 Years webinar (2023); UTCN C12 PCIe course; JEDEC DDR4 PR 2012, JESD79-4 (2012), DDR5 PR 14 Jul 2020; Micron DRAM module guide Rev. M.
- **Recomputed:** m(2^{1/m}−1) = 1, 0.8284, 0.7798, 0.7568, 0.7435, 0.7177, ln 2 (matches si-b7); 3-task example U=0.75, demand 6 ≤ 8; n=2 boundary 0.8284; 8b/10b and 128b/130b rates; Gen5 126.03/63 GB/s; 2^32.
- **Deferred (Lucas):** DO-178C, IEEE Annals 1991 — no claim relies on them. IBM AT reconciled to PCI-SIG 30 Years slide (8→16 bits @ 8–10 MHz).
- **Still NEVERIFICAT (6):** control-loop timing; microcontroller no-cache generalisation; address/data/control triad label; IBM AT exact clock; ISA skew physics wording; DDR1 JESD79.
- **Conflict stated on page:** Pathfinder patch — Jones/Wilner (VxWorks C interpreter) vs Reeves (specialized patch process; page follows Reeves).


### Early hub + 01a–01c + takes (batch 6, fact-checked 2026-11-05)

- **Pages:** `01-what-is-this-thing` (hub), `01a-babbage-engines`, `01b-jacquard-loom`, `01c-why-mechanical-matters`, nine `01-take-*` (bookHidden). `01-mechanical-electromechanical-computing` left `draft: true` (overlap with 01a; Lucas).
- **Primaries opened (batch 6):** Menabrea/Lovelace *Sketch* (Fourmilab); CHM Babbage Engine / Engines / Modern Sequel / press 2008-05-05; Science Museum Babbage article; CHM Jacquard storage + Punched Card’s Pedigree; Arts et Métiers Jacquard model; Science and Industry Museum Jacquard loom story; Europeana „Creating music out of thin air” (via WebFetch; curl 403).
- **Jacquard dating fix:** page now states what each source supports — 1801 exhibition/demonstration (CHM) and Arts et Métiers brevet 23.12.1801 for replacing *tireur de lacs*; 1804 patent date for the punched-card attachment (Science and Industry Museum). EN „patented 1804” left as conventional dating (proposal only).
- **Tolerances argument (01c):** kept directed shape (ceiling = manufacturing, not lack of ideas; reconstructions once shops held tolerances). Facts checked against Science Museum / CHM; not softened.
- **Still NEVERIFICAT:** fine 1832 vs 1833 halt reconciliation; INPI brevet full text / whether 1801 brevet already covers punched cards; Europeana/Met/SMG dump blocks (cited content from WebFetch only).
- **Take pages:** each marked „Analogie ilustrativă”; factual mechanism claims only where sourced (Europeana barrel/pianola; CHM silk-cards).



### Early 01d + 43b drafts (batch 7, fact-checked 2026-11-05)

- **Pages:** `01d-woodblock-to-movable-type` (~1475 words, Romanian section: Macarie / Coresi / Casa Mureșenilor), `43b-from-press-to-pixel` (~1320 words, no Romanian phototypesetting section). Both `draft: true`, date `2026-01-02` (match EN).
- **Phase 43b:** `7 — Sisteme distribuite, Big Data și orchestrare` (first RO phase-7 string; `&` → `și` as in phases 4/5).
- **Restored after opening sources:** Feng Dao / Changxing 2 = 931 (*Nongshu* j22); Qingli years 1041–1048 (Asian Art Museum); Muybridge 19 Jun 1878 Sallie Gardner (Smarthistory; LoC dump blocked); Le Prince disappeared 1890 (NSMM blog); Grand Café / Salon Indien (Catalogue Lumière FAQ; Institut Lumière heading alone insufficient).
- **Kept NEVERIFICAT / omitted:** Tetraevanghel as first all-Romanian book (press only); Coresi technique wood vs metal / Liubavici; anonymous Transylvanian slide deck not cited; BRV only via Erich & Vârgolici.
- **Conflicts stated on page:** Coresi ~40/1556–1588 (museum) vs ~35/1556–1583 (ro.wikipedia); Liturghier 1508 print place (authors lean Dealu–Târgoviște); Dingjunshan 1905 vs 1908; Wenzhou fragment nature.
- **UDN wording:** RO follows source („primul cotidian în limba chineză”); EN „world first” is looser — left as EN discrepancy, RO unchanged.
- **Romanian section sources:** Erich & Vârgolici 2009 + INP/BNR Tetraevanghel + Prima Școală + Casa Mureșenilor (Wayback) — sufficient; BRV not opened directly.

## Not yet (pending)

- Remaining chapters — pending until present under `checked/` / `checked-early/` with REPORT coverage (next: early chapters 36+ / labs strings per PLAN; 01d+43b drafts shipped batch 7)

## Notes

- Soft flags shared with earlier RO ship: LICENSE URL `devzer01/how-computers-work` broken across locales; prefer comma-below ș ț (verified on these pages).

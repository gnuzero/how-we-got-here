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
1. Burks–Goldstine–von Neumann 1946 IAS report (image-only scan; no figures cited)
2. Toma, *Buletin Științific* 1957 (catalog only; CIFA figures rest on Toma 2008 + Iancu 2013)
3. MECIPT detail beyond Iancu 2013 (Drăgănescu 2001 unopened)
4. Bardeen–Brattain, Phys. Rev. 74 (1948) — fetch 403; no figures cited
5. Si/SiO₂ as MOSFET reason — deferred to ch. 06
6. Z3 relay count and clock — omitted from prose
7. Felix — no claim; no source found

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

## Not yet (pending)

- Remaining chapters — pending until present under `checked/` / `checked-early/` with REPORT coverage (batch 2: ch. 6–13 drafting)

## Notes

- Soft flags shared with earlier RO ship: LICENSE URL `devzer01/how-computers-work` broken across locales; prefer comma-below ș ț (verified on these pages).

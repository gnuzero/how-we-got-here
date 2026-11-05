# Romanian (ro) progress

- Desk: **Radu**
- Started: 2026-11-05 (Asia/Colombo)
- Role: gap-filling locale (VISION.md Language authority lock) — original pages, not translations of English/Chinese; depth on topics thin on the Romanian web
- Rules: `draft: false` for shipped pages; comma-below ș ț (no cedilla); no invented RO sources; fact-check via Lucas against primaries before merge; titles/attribution from TRANSLATIONS.md; weight / series_index / date match English

## Shipped

- `_index.md` — series landing (from ro-desk checked; unchanged in fact-check)
- `about.md` — Despre și credite (from ro-desk checked; unchanged in fact-check)
- `posts/35-the-memory-wall.md` — **Zidul memoriei** (weight 38 / series_index 37; fact-checked 2026-11-05)

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

- All other chapters — pending until present under `checked/` with REPORT coverage

## Notes

- Soft flags shared with earlier RO ship: LICENSE URL `devzer01/how-computers-work` broken across locales; prefer comma-below ș ț (verified on these pages).

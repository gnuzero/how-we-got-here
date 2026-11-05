# Tamil translation progress

- Desk: Arun
- Started: 2026-09-06 (Asia/Bangkok)
- Scope: full bodies for 05–12 (done); 13–20 (done); 21–30 (done); 31–37 (done); 38–43 (done); 44–51 (done); 52–63 + 64/66 (done); 67–69 + paths (done this pass)
- Skip (MVP done; do not touch unless a real error): _index, 00-foreword, 99-glossary (01–04 refreshed 2026-09-07 from current Jules EN — draft:false; 63 already refreshed prior pass)
- Rules: draft:false; titles/attribution from TRANSLATIONS.md; keep frontmatter date/series_index/tags/image_prompt/video_prompt/schematics in English; tech terms in English where MVP Tamil does (transistor, MOSFET, BJT, silicon/சிலிகான், doping, P-N, cache, CPU, CMOS, SRAM, DRAM, ISA, ALU, pipeline, branch prediction, x86, RISC, ARM, RISC-V, superscalar, out-of-order); named historical people stay English (Bell Labs, Tomasulo, IBM, DEC, Intel, ARM, etc.); மேலும் படிக்க only with verified named Tamil works; Wikipedia / untitled notes / language-unverified bookstore listings omitted; no git; no content.si/th; no MVP overwrite

## Done

### New full bodies (05–12)

- 05-semiconductors-from-first-principles.md — ச. சம்பத்து (S. Sampath), *அடிப்படைத் திண்மநிலை இயற்பியல்* (தமிழ்நாடு பாடநூல் மற்றும் கல்வியியல் பணிகள் கழகம், 2019; verified Exotic India Art listing, language: Tamil). தமிழ்நாடு அரசு, *12ஆம் வகுப்பு இயற்பியல் தொகுதி 2*, அலகு 10a: குறைகடத்தி எலக்ட்ரானியல் (ஆற்றல் பட்டைகள், doping, P-N; verified via official Samacheer Kalvi Tamil-medium unit).
- 06-the-transistor-bjt-to-mosfet.md — same Sampath solid-state book; தமிழ்நாடு அரசு 12ஆம் வகுப்பு இயற்பியல் அலகு 10a (இரு முனை சந்தி டிரான்சிஸ்டர் / BJT as switch). MOSFET-as-digital-standard: no named Tamil MOSFET / CMOS-device textbook verified after WebSearch → not invented; BJT coverage credited only.
- 07-logic-gates-from-transistors.md — தமிழ்நாடு அரசு, *12ஆம் வகுப்பு இயற்பியல் தொகுதி 2*, அலகு 10a (லாஜிக் கேட்டுகள் / இலக்கமுறை எலக்ட்ரானியல்). தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 2b: பூலியன் இயற்கணிதம் (AND/OR/NOT/NAND/NOR). CMOS inverter / complementary pair topology: no named Tamil CMOS-VLSI textbook verified → not invented.
- 08-from-gates-to-combinational-logic.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 2b. தமிழ்நாடு அரசு, *கணினி அறிவியல் தொகுதி 1: Concepts* (2005), அத்தியாயம் 4: Half Adder, Full Adder (verified TOC of the official 2005 Government of Tamil Nadu volume). ALU / mux composition: no named Tamil ALU-design textbook verified beyond school-level gates/adders.
- 09-sequential-logic.md — தமிழ்நாடு அரசு, *கணினி அறிவியல் தொகுதி 1: Concepts* (2005), அத்தியாயம் 4.5: The Flip-Flop. தமிழ்நாடு அரசு 12ஆம் வகுப்பு இயற்பியல் அலகு 10a (இலக்கமுறை எலக்ட்ரானியல்). Setup/hold / metastability: no named Tamil timing-constraints textbook verified → not invented.
- 10-the-memory-hierarchy-begins.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (நினைவகச் சாதனங்கள்: SRAM, DRAM, கேச் நினைவகம் — intro types, not 6T/1T1C cell schematics). 6T SRAM vs 1T1C DRAM cell design: no named Tamil memory-cell textbook verified → cell-level claims stay from English distill; school book used only for hierarchy/types.
- 11-instruction-sets.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (மையச் செயலகம், அறிவுறுத்தல்கள் — intro). CISC vs RISC / ISA encoding: no named Tamil ISA textbook verified (Udumalai listings for Vijaya/Jabeen *Computer Architecture and Organisation* and Venkatesan et al. *Digital Principles and Computer Organization* — language not verified as Tamil, omitted).
- 12-datapath-design.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3 (மையச் செயலகம், ALU, கட்டுப்பாட்டகம்). Single-cycle datapath / Patterson–Hennessy-style walkthrough: no named Tamil datapath textbook verified → not invented.

### New full bodies (13–20)

- 13-pipelining.md — no named Tamil pipelining / hazard textbook verified after WebSearch → not invented; English distill only.
- 14-branch-prediction.md — no named Tamil branch-prediction textbook verified → not invented.
- 15-caches.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (கேச் நினைவகம் — intro types / speed role only). Associativity / MESI / Wilkes-level cache organization: no named Tamil cache-organization textbook verified → not invented.
- 16-out-of-order-execution.md — Tomasulo / ROB / renaming: no named Tamil out-of-order textbook verified → not invented.
- 17-superscalar-multicore.md — ILP / power wall / multicore: no named Tamil superscalar-multicore textbook verified → not invented.
- 18-mainframes-to-minicomputers-to-microprocessors.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3 (மையச் செயலகம், நுண்செயலி — intro). Mainframe/minicomputer commercial history (System/360, PDP-11): no named Tamil computing-history textbook verified beyond school microprocessor intro.
- 19-the-x86-vs-risc-split.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3 (RISC / CISC அறிமுகம்). µop translation / commercial lock-in narrative: no named Tamil ISA-history textbook verified → not invented.
- 20-arm-and-risc-v-the-architecture-landscape-today.md — ARM licensing / RISC-V open ISA: no named Tamil ARM or RISC-V textbook verified after WebSearch → not invented.


### New full bodies (21–30)

- 21-batch-processing-and-the-birth-of-the-operating-system.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 4: இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள் (OS அறிமுகம், செயல் மேலாண்மை / FIFO–priority scheduling — batch/mainframe வரலாறு அல்ல).
- 22-time-sharing-and-the-unix-lineage.md — அலகு 4 (நேரப் பகிர்வு, Round Robin); அலகு 5: வழக்கமான இயக்க அமைப்புடன் பணிபுரிதல் (Linux Unix திறந்த மூலப் பதிப்பாக). Multics / Ken Thompson–Dennis Ritchie வரலாறு: no named Tamil Multics/Unix-history textbook verified → not invented. Lab shortcode + Try-this-now preserved.
- 23-the-gnu-movement-and-linux.md — அலகு 4 (Ubuntu GNU/Linux விநியோகமாக); அலகு 5 (Linux / Linus Torvalds / திறந்த மூலம்). Stallman / GPL / GNU Hurd narrative: no named Tamil free-software-history textbook verified → not invented. Lab shortcode + Try-this-now preserved.
- 24-virtual-memory-and-multitasking.md — அலகு 4 (நினைவக மேலாண்மை அறிமுகம் மட்டும்). Page table / MMU / page fault / swap: no named Tamil virtual-memory textbook verified → not invented.
- 25-containers-and-modern-os-isolation.md — namespaces / cgroups / Docker-style containers: no named Tamil container / namespace textbook verified after WebSearch → not invented.
- 26-from-machine-code-to-assembly.md — தமிழ் இணையக் கல்விக்கழகம் (Tamil Virtual Academy), பாடம் 5.4: கணினிமொழி மென்பொருள் (எந்திரமொழி, சில்லுமொழி / assembly, assembler).
- 27-high-level-languages-fortran-cobol-lisp-c.md — TVA பாடம் 5.4 (FORTRAN, COBOL, C / Dennis Ritchie). Lisp / McCarthy / Hopper FLOW-MATIC depth: no named Tamil Lisp textbook verified → not invented beyond English distill.
- 28-compilers-jit-and-modern-language-runtimes.md — TVA பாடம் 5.4 (compiler / interpreter அறிமுகம்). JIT / AOT / garbage collection / IR optimizer pipeline: no named Tamil compiler-design textbook verified → not invented.
- 29-real-time-systems-and-deterministic-scheduling.md — rate-monotonic / Liu–Layland / RTOS / priority inversion: no named Tamil real-time / RTOS textbook verified after WebSearch (hwlibre blog and Wikipedia omitted) → not invented.
- 30-real-time-systems-in-practice.md — DO-178C / avionics / closed-loop industrial control: no named Tamil avionics or industrial-RT textbook verified → not invented.


### New full bodies (31–37)

- 31-buses-101.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (பாட்டை / bus; address bus, data bus, control bus — அறிமுகம்). Arbitration / shared-bus ceiling: no named Tamil textbook verified → not invented.
- 32-from-isa-bus-to-pci-to-pcie.md — ISA → PCI → PCIe / skew / serial escape: no named Tamil bus-history or PCIe textbook verified after WebSearch → not invented.
- 33-pcie-deep-dive.md — TLP / layered PCIe stack / Gen rates: no named Tamil PCIe protocol textbook verified → not invented. Door out: PCI-SIG Base Spec (English primary).
- 34-memory-buses.md — தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3 (DRAM அறிமுகம்). DDR generation / channel–rank–bank: no named Tamil DDR textbook verified → school book for DRAM intro only.
- 35-the-memory-wall.md — Wulf & McKee memory wall / DRAM sensing physics: no named Tamil memory-wall textbook verified → not invented. Door out: Wulf & McKee 1995 (English primary).
- 36-the-clock-speed-wall.md — P≈CV²f / Dennard / thermal ceiling / multicore pivot: no named Tamil clock-wall textbook verified → not invented.
- 37-interconnects-at-scale.md — NVLink / CXL / GPUDirect RDMA: no named Tamil interconnect / fabric textbook verified → not invented. Nitefury / BridgeStack kept as English project refs per source.

## Omitted / unverified (do not invent)

- Wikipedia and Brainkart-style undated notes: used only to confirm official textbook *unit titles*, not credited as sources.
- Kaniyam.com NAND explainer: blog, not a named textbook.
- S. Salivahanan / S. Arivazhagan *Digital Electronics*: English.
- Anna University EC3353 / EE3302 local-author packs (Godse/Bakshi etc.): English.
- Udumalai “பாடநூல்கள்” architecture titles (K. விஜயா / Dr. S. ஜபீன் பேகம்; Venkatesan / Meenakshidevi / Satish Kumar / Edwindhas): language unverified — likely English Anna University local authors sold on a Tamil storefront.
- Self-published Amazon ebook *Basic Digital Electronics in Tamil*: authorship/publisher not independently verified.
- AICTE/Khanna diploma *Fundamentals of Electricals & Electronics Engineering (Tamil)* (Susan S. Mathew / Saji T. Chacko): exists as a Tamil translation, but MOSFET/CMOS/ISA coverage not verified — omitted rather than stretched.
- 11th vocational *மின்னணு பொறியியல் கருத்தியல்*: official Tamil Nadu book exists; chapter-level match to 05–12 not verified in this pass, so not credited in-body.
- Pipelining / hazards / forwarding / branch prediction / Tomasulo / ROB / superscalar / multicore power-wall: Anna University / diploma COA syllabi and Stallings/Mano-style texts are English; no named Tamil textbook verified for these chapter-level topics.
- ARM Holdings licensing model / RISC-V open ISA / x86 µop decode: no named Tamil architecture textbook verified.
- Pothi.com local-author *Computer Architecture and Organization* (Ramya / Sheema / Suganya / Vakula): language not verified as Tamil — omitted.


- Multics / Unix commercial history / AT&T antitrust licensing narrative: school OS units cover time-sharing and Linux-as-Unix-family only.
- Stallman GNU Manifesto / GPL copyleft legal history / GNU Hurd: no named Tamil free-software textbook verified.
- Virtual memory page tables / MMU / demand paging / swap: Unit 4 memory management is allocation/intro only — not credited beyond that.
- Linux namespaces / cgroups / containers / Docker: no named Tamil textbook verified.
- JIT compilation / garbage collection pauses / IR optimization passes: TVA covers classical compiler vs interpreter only.
- Rate-monotonic scheduling / Liu–Layland / priority inheritance / RTOS: no named Tamil RTOS textbook (ta.hwlibre.com blog omitted as unverified).
- DO-178C / fly-by-wire timing certification: no named Tamil avionics software textbook verified.


- ISA → PCI → PCIe evolution / signal skew / differential serial lanes: school Unit 3 covers bus definition and address/data/control only.
- PCIe Transaction/Data Link/Physical layers / TLP fields / Gen bandwidth numbers: no named Tamil PCIe textbook verified.
- DDR prefetch / subchannels / DIMM channel–rank–bank organization: Unit 3 DRAM intro only — not credited beyond that.
- Wulf & McKee memory wall / capacitor sensing vs transistor switching divergence: no named Tamil textbook verified.
- Clock-speed wall / Dennard scaling breakdown / thermal power density: no named Tamil textbook verified (chapter 17 already noted power wall gap).
- NVLink / NVSwitch / CXL / GPUDirect RDMA / peer GPU fabrics: no named Tamil interconnect textbook verified.
- Blog tamilkaniniworld motherboard-bus explainer and Brainkart undated notes: not credited as sources (unit titles only confirmed).

### New full bodies (38–43)

- 38-serial-links-and-the-first-machine-to-machine-connections.md — தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 10 (வலையமைப்பு வரலாறு / dial-up அறிமுகம்). மு. சிவலிங்கம், *நெட்வொர்க் தொழில்நுட்பம்* (பாரதி பகத் பதிப்பகம்; physical/data-link). RS-232 electrical levels: school depth only — not invented beyond English distill. Lab shortcode preserved (no height).
- 39-arpanet-and-packet-switching.md — பாடம் 10 (ARPANET 1969 நான்கு nodes; Paul Baran / Leonard Kleinrock packet switching); பாடம் 11 (ARPANET/Internet அறிமுகம்); மு. சிவலிங்கம். IMP internals / Baran RAND depth: English primary door out kept.
- 40-ethernet-and-the-local-area-network.md — பாடம் 10 (Xerox PARC / Metcalfe–Boggs Ethernet வரலாறு); பாடம் 11 (Ethernet 802.3; WLAN 802.11); மு. சிவலிங்கம். CSMA/CD backoff timing detail: school coverage is intro — English distill for collision algorithm.
- 41-tcp-ip-and-the-modern-internet-stack.md — பாடம் 11 (TCP/IP நான்கு அடுக்குகள்; IP/TCP/UDP); மு. சிவலிங்கம் (TCP/IP ஆழம், IPv4/IPv6). Three-way handshake: Sivalingam/TCP texts; RFC 791/793 door out kept.
- 42-datacenter-networking-and-rdma.md — RDMA / fat-tree / kernel-bypass datacenter fabric: no named Tamil textbook verified after WebSearch → not invented; English distill only. Lab shortcode preserved. (General TCP/IP school books not stretched to RDMA.)
- 43-usenet-archie-gopher-and-the-pre-web-internet.md — பாடம் 10–11 + மு. சிவலிங்கம் (FTP/SMTP/DNS/HTTP application அடுக்கு அறிமுகம் மட்டும்). Usenet/Archie/Gopher/IRC/Yahoo portal history: no named Tamil pre-web-history textbook verified → English distill; named people kept English. Full find→talk spine kept (Usenet → Archie → Gopher → IRC → Consumer Portals/Yahoo seed → AOL/Excite/Lycos kin). RFC 1459 door out + vm-terminal shortcode preserved.

## Omitted / unverified (38–43; do not invent)

- Udumalai *Networks and Security* (கற்பூர தீபன் et al.) and *Network Programming and Management* (Kavitha/Thomas): language unverified — likely English Anna University packs on Tamil storefront (same rule as prior Udumalai omissions).
- Alagappa University DDE *Computer Networks* PDF: English.
- Wikipedia / Vikatan / Brainkart / QB365 notes: unit-title confirmation only — not credited as sources.
- RDMA / InfiniBand / RoCE / fat-tree datacenter topology: no named Tamil textbook verified.
- Usenet / Archie / Gopher / IRC / consumer-portal product history: school Comp Apps covers Internet/TCP/IP/FTP intro only — not credited beyond that.
- 11th Computer Science: no networking unit (networking is 12th Computer Applications Ch. 10–13) — do not invent Class 11 CS networking credit.

### New full bodies (44–51)

- 44-google-s-big-data-infrastructure-why-they-won.md — GFS / MapReduce / Bigtable: no named Tamil distributed-systems or Google-infrastructure textbook verified after WebSearch (Kaniyam Hadoop blog omitted as unverified blog; Anna University Big Data packs English) → not invented; English distill + paper door outs. No labs in source.
- 45-kubernetes-and-container-orchestration-at-scale.md — Kubernetes / Borg / Omega / declarative reconciliation: no named Tamil container-orchestration textbook verified (ta.wikipedia / marketing blogs omitted) → not invented. No labs in source.
- 46-the-machine-learning-software-stack.md — PyTorch/TensorFlow / autodiff / data vs model parallelism: no named Tamil ML-framework textbook verified → not invented. No labs in source.
- 47-what-7nm-actually-means.md — Node-name vs fin/gate pitch: no named Tamil process-node textbook verified. School 12th Physics / Sampath cover MOSFET intro only — not stretched to marketing-node naming. No labs in source.
- 48-photolithography.md — DUV / EUV / tin plasma / ASML mirrors: no named Tamil photolithography / fab textbook verified (fuelcellintamil blog and Udumalai VLSI listings language-unverified — omitted per prior Udumalai rule) → not invented. No labs in source.
- 49-finfet-to-gaa.md — FinFET / GAA nanosheet: no named Tamil FinFET/GAA textbook verified. School MOSFET (அலகு 10a / Sampath) is planar intro only — not credited beyond prior chapters; FinFET/GAA depth English distill. No labs in source.
- 50-moore-s-law.md — Gordon Moore 1965 economic component-count observation vs clock / cost-per-transistor: no named Tamil Moore's Law textbook verified (ta.wikipedia / blogs omitted) → not invented; English primary door out kept. No labs in source.
- 51-chiplets-advanced-packaging.md — Chiplets / interposer / HBM packaging: no named Tamil advanced-packaging textbook verified → not invented. No labs in source.

## Omitted / unverified (44–51; do not invent)

- Kaniyam.com Big Data / Hadoop / semiconductor explainers: blogs, not named textbooks (same rule as prior Kaniyam omissions).
- ta.wikipedia (Kubernetes, மூர் விதி, குறைகடத்தி): Wikipedia not credited.
- Anna University / Technical Publications Big Data Analytics packs (Hadoop, MapReduce, YARN): English.
- Udumalai VLSI Design / VLSI and Chip Design / Manufacturing Technology listings (Neelu Kumari et al.; Muralibabu; Vijayaraghavan et al.): language unverified — likely English Anna University local authors on Tamil storefront (same rule as prior Udumalai omissions).
- fuelcellintamil.blogspot photolithography posts: blog, not a named textbook.
- bfotool / marketing Kubernetes pages: not credited.
- GFS / MapReduce / Bigtable / Borg / Kubernetes / ML autodiff stack / EUV / FinFET / GAA / chiplets chapter-level depth: thin Tamil literature — English distill only; மேலும் படிக்க omitted on all eight rather than invent.

### New full bodies (52–63)

- 52-why-gpus-exist.md — GPU / SIMT / graphics→general compute: no named Tamil GPU textbook verified after WebSearch → not invented; English distill only. No labs in source.
- 53-cuda-cores-warps-and-occupancy.md — SM / warp / occupancy / divergence: no named Tamil CUDA textbook verified → not invented.
- 54-gpu-memory-hierarchy.md — HBM / TSV / GPU memory pyramid: no named Tamil HBM textbook verified → not invented.
- 55-tensor-cores.md — Tensor core MAC / lower precision: no named Tamil tensor-core textbook verified → not invented.
- 56-multi-gpu-scaling.md — NVLink / NVSwitch / GPUDirect RDMA multi-GPU: no named Tamil multi-GPU textbook verified (chapter 37 already noted interconnect gap) → not invented.
- 57-why-matrix-multiply-reshaped-chip-design.md — Matmul-as-AI-workload silicon specialization: no named Tamil AI-hardware textbook verified → not invented.
- 58-systolic-arrays.md — Systolic / TPU MXU / Kung–Leiserson: no named Tamil systolic-array textbook verified → not invented; English door out kept (Kung & Leiserson 1979).
- 59-quantization-mixed-precision.md — FP16/BF16/FP8/INT8 mixed precision: no named Tamil quantization textbook verified → not invented.
- 60-sparsity-in-hardware.md — Structured 2:4 sparsity: no named Tamil sparsity-hardware textbook verified → not invented.
- 61-interconnect-at-datacenter-scale.md — Fat-tree / all-reduce at thousands of GPUs: no named Tamil datacenter-AI-fabric textbook verified → not invented.
- 62-where-it-s-headed.md — Chiplet AI / co-packaged optics / PIM forward look: no named Tamil textbook verified → not invented.
- 63-attention-is-all-you-need.md — **REFRESHED** from current Jules-distilled English (`content/posts/63-attention-is-all-you-need.md`); old Tamil MVP was draft:true / stale. New body: draft:false; title stays "Attention Is All You Need" per TRANSLATIONS.md; Vaswani et al. door out kept. No named Tamil Transformer textbook verified → மேலும் படிக்க omitted.

### Widen-the-lens (64, 66)

- 64-who-decides-the-wire.md — IETF / IANA / RIRs / ICANN / Unicode governance: school 11th CS Unit V (Tamil Computing) mentions IANA/ICANN/Unicode only in TSCII/encoding intro — not stretched to IETF/RIR chapter depth; no named Tamil internet-governance textbook verified → மேலும் படிக்க omitted; English RFC/registry door outs kept.
- 66-wartime-crypto.md — Enigma / Bletchley / Colossus: SlideShare cryptography decks and research papers not named textbooks; no named Tamil wartime-crypto / Colossus history textbook verified → மேலும் படிக்க omitted; English museum/archive door outs kept.

## Omitted / unverified (52–63 + 64/66; do not invent)

- GPU / CUDA / SM / warp / occupancy / HBM / tensor cores / NVLink / systolic / TPU / quantization / structured sparsity / fat-tree all-reduce / PIM / Transformer attention chapter-level depth: thin Tamil literature — English distill only; மேலும் படிக்க omitted on all twelve Phase 9–10 chapters rather than invent.
- IIT/workshop CUDA PDFs and NVIDIA whitepapers: English.
- ta.wikipedia / blogs / marketing AI-hardware pages: not credited.
- Class 11 CS Ch. 18 Tamil Computing (TSCII → IANA/ICANN/Unicode): official Tamil Nadu book exists but covers Tamil encoding intro only — not credited in-body for full governance narrative (same partial-match discipline as prior school-book limits).
- SlideShare *மறைப்பியல்* cryptography deck: presentation, not a named textbook.
- Patterns journal Tamil-language-encoder AES paper: English research article, not a wartime-crypto history textbook.
- Wikipedia / museum tourist paraphrase for Enigma–Colossus: English primary door outs only.

### New full bodies (67–69)

- 67-privacy-consent-identity-cyber.md — Saltzer/Schroeder isolation → Diffie–Hellman/RSA/TLS → Kerberos/OAuth consent → cybersecurity as feedback; phase `தனியுரிமை / அடையாளம் / ஒப்புதல்`; draft:false. Class 11 CS ethics/encryption intro not stretched to chapter depth. No named Tamil security-engineering textbook verified → மேலும் படிக்க omitted; English door outs kept.
- 68-visions-that-shipped.md — Cisco, Gates/Microsoft, Jobs/Apple, GNU+Linus, Bezos, Musk as seeds of kinds; derive kin; stop; phase `கப்பலுக்குச் சென்ற பார்வைகள்`; draft:false. No named Tamil product-vision history textbook verified → மேலும் படிக்க omitted.
- 69-platform-synthesis.md — one-stop composition: distributed systems + networking + AI infra + privacy engineering + software engineering; phase `ஒரு இயந்திரத்திலிருந்து ஒரு Platform வரை`; draft:false. Synthesis-only; மேலும் படிக்க omitted.

### Paths (content.ta/paths/)

- `_index.md` — விருப்பக் கற்றல் பாதைகள்; thin-index voice; draft:false
- `crypto-wartime.md` — weight 1; links 02 → 66 → 03 → 04
- `who-runs-the-internet.md` — weight 2; links 39 → 40 → 41 → 64
- `find-then-talk.md` — weight 3; links 41 → 43 → 44
- `privacy-identity-consent.md` — weight 4; links 24 → 25 → 66 → 67 → 64
- `visions-that-shipped.md` — weight 5; links 23 → 68 → 69
- Markdown link URLs unchanged (`/posts/…`, `/paths/…`, `/labs/`); labels Tamil; proper names English.

## Omitted / unverified (67–69; do not invent)

- தமிழ்நாடு அரசு 11ஆம் வகுப்பு கணினி அறிவியல் அலகு 17 (Computer Ethics and Cyber Security) / Class 12 E-Commerce Security: encryption/SSL intro only — not credited for Saltzer→OAuth→CVE arc.
- Anna University / English infosec packs: English.
- Kaniyam / blog Kerberos–OAuth explainers; Brainkart; ta.wikipedia; SBI cyber-awareness pamphlet: not named textbooks.
- Cisco / Gates / Jobs / Bezos / Musk business-history Tamil titles: none verified → not invented.
- Platform-as-composition synthesis: thin Tamil literature — English distill only; மேலும் படிக்க omitted on all three.

## Wrap slice (2026-09-06 Asia/Bangkok — Arun)

- `content.ta/posts/98-timeline.md` — created (full Tamil body; proper names/years English; phase: குறிப்பு; draft:false)
- `content.ta/about.md` — created (vision-aligned intro; attribution table with **Arun** as Tamil desk; CC BY 4.0; labs; contact; BTS link-only — no Arun portrait invented; no `/bts/arun.png`)
- `content.ta/_index.md` — attribution + signature refreshed to name **Arun** (parallel to Thai Mira); light fix of outdated “62 chapters / first drafts” line only
- `TRANSLATIONS.md` — added Tamil named-desk bullet (**Arun**) + one sentence in Tamil attribution paragraph (clear slot next to Mira)
- 05–10: **light summary sync only** (EN Jules distill summaries were more specific than TA). Bodies already covered the distill beats + மேலும் படிக்க; no body rewrite. Decision: summary polish only.

## Phase 1 unblock (2026-09-07 Asia/Bangkok — Arun)

- `content.ta/posts/01`–`04` **refreshed** from current Jules-distilled English (`content/posts/01`–`04`); old TA was draft:true MVP encyclopedia tone (Jacquard Napoleon/patent padding, etc.).
- All four now **draft: false**; phase string kept: `1 — அடித்தளங்கள்: இயந்திரத்திலிருந்து வெற்றிடக் குழாய் கணினி வரை`.
- Summaries synced to EN constraint→architecture intent; bodies match distill voice (not encyclopedia dump).
- **Door out** kept as English primaries (Lovelace Notes; Rojas 1998; Goldstine; Bardeen/Brattain/Shockley Bell Labs papers) with Tamil gloss — same pattern as post 63. **மேலும் படிக்க omitted** (no verified named Tamil works for these doors; do not invent).
- ASSET CHECKLIST + image_prompt / video_prompt / schematics preserved; named people English; tech terms English where prior TA does.
- `00-foreword.md` left alone (already draft:false).
- content.si / content.th / paths / other chapters: not touched. No git.

## Confirmed untouched

- content.si / content.th — not touched
- 00-foreword and 99-glossary — not touched this pass (00 already draft:false)
- No git
- content.ta/paths/ created prior pass (EN paths existed on disk)


## Parallel needle (2026-09-07 — Arun)

- `content.ta/posts/41-tcp-ip-and-the-modern-internet-stack.md` — added EN connective section *ஒரு வலையமைப்பின் நெறிமுறைகளிலிருந்து ஒரு Stack-க்கு* (NCP → 1983 flag day → apps on substrate + RFC 1034/1035 doors); summary synced; draft:false; no new Tamil sources invented.
- `content.ta/posts/08-from-gates-to-combinational-logic.md` — breadboard shortcode had no Try-this; added **இப்போது முயல்க.** half-adder carry AND-gate hook + `height="700"` to match EN; draft:false.


## Needle — TA 12 mini-cpu Try-this (2026-09-07 — Arun)

- `content.ta/posts/12-datapath-design.md` — added **இப்போது முயல்க.** (Step ↔ single-cycle datapath); moved `{{< lab type="mini-cpu" >}}` next to hook (before single-cycle constraint section); draft:false; no full rewrite; no git.


## Needle — TA 09 Try-this (2026-09-07 — Arun)

- `content.ta/posts/09-sequential-logic.md` — thin insert **இப்போது முயல்க.** (combinational live AND vs sequential feedback/hold); moved breadboard lab next to hook; draft:false; no git.


## Needle — TA 21 Try-this (2026-09-07 — Arun)

- `content.ta/posts/21-batch-processing-and-the-birth-of-the-operating-system.md` — thin **இப்போது முயல்க.** (batch deck vs interactive VM `whoami`/`uname`/`ls`); lab moved next to hook (`height="600"`); draft:false; no git.


## Needle — TA 26 Try-this (2026-09-07 — Arun)

- `content.ta/posts/26-from-machine-code-to-assembly.md` — **இப்போது முயல்க.** Assemble/Step ↔ mnemonic one-to-one opcode bits; lab kept beside hook; draft:false; no git.


## Needle — TA 13 Try-this (2026-09-07 — Arun)

- `content.ta/posts/13-pipelining.md` — **இப்போது முயல்க.** single-cycle Step vs pipeline throughput; lab moved next to hook; draft:false; no git.

## In progress

(none — Phase 1 01–04 unblock done; standby)

## Remaining

(none — Phase 1 TA 01–04 unblocked; standby)

## Tamil-gap pass 1 (2026-09-26 Asia/Bangkok — Arun, branch `ta-gaps-1`)

Direction (Nayana via Lucas, corrected): the *Tamil gap* = spine topics missing or thin **in Tamil online**; fill them with elaborate first-principles Tamil explanations (not translation, not local history).

- Coverage audit: `/workspace/freebook/ta-desk/research/gaps.md` (outside repo; raw evidence in `research/raw/`). 163 topics across chapters 01–69 checked against ta.wikipedia (interlanguage links + plain-text length + ~120 full-text searches), Tamil YouTube (one query per topic, top ~20 parsed), TN Samacheer 11th CS Tamil-medium Vol 1 (full text), and Tamil web searches. Overall: none 41 / thin 107 / adequate 15.
- Pages expanded (frontmatter, spine, existing labs and Try-this hooks kept; draft:false; named people in English; English term in brackets on first use; சொற்கள் glossary table added to each):
  - `14-branch-prediction.md` — branch vocabulary via mini-CPU `JMP/JZ/JC`; CPI penalty arithmetic (stall / not-taken / 90–99% predictors, 2 vs 15-cycle penalty); static rules (BTFN); 1-bit vs 2-bit counter step traces on T T T N ×2; global history / two-level / gshare; BTB + return stack; speculation recovery; new **இப்போது முயல்க** countdown-loop program for the mini-CPU (verified by simulation: JZ = N, N, T; OUT 2, 1, 0).
  - `16-out-of-order-execution.md` — RAW/WAR/WAW on one 4-instruction example; RAT + free-list renaming table; reservation stations + CDB; ROB, precise exceptions, mispredict recovery; cycle-by-cycle OoO vs in-order trace; Tomasulo (1967) vs ROB (Smith & Pleszkun 1985); Try-this: dependency and renaming exercise on the default mini-CPU program (single accumulator A).
  - `09-sequential-logic.md` — SR latch truth table; clock period/frequency (3 GHz = 333 ps); D flip-flop rule + trace; setup/hold/clk-to-Q with f_max worked numbers and critical path; hold independent of clock period; clock skew; metastability, two-flip-flop synchronizer, MTBF formula (illustrative numbers labelled); second Try-this building a D flip-flop in the Falstad breadboard lab (menu names verified in circuitjs1 source).
  - `13-pipelining.md` — five stages defined; 5×9 timing diagram; speedup arithmetic (3.69× not 5×); structural (mini-CPU single memory), data (forwarding, load-use), control hazards with cycle reasoning; CPI roll-up (1.365); Try-this steps on the mini-CPU program.
  - `15-caches.md` — hit/miss, AMAT arithmetic; tag/index/offset split of 0x1234 in a 1 KiB direct-mapped cache; A/B conflict trace direct-mapped vs 2-way; 3 C's; LRU; write-through vs write-back; MESI step table, E-state rationale, false sharing; paper exercises with answers (no lab on this page).
  - `17-superscalar-multicore.md` — issue width, IPC; chain vs independent code; tree reduction; why width costs (branches, ~N² dependency checks, memory latency); CV²f two-core arithmetic (1.024× power, 1.6× throughput); Amdahl worked examples; paper exercises.
- மேலும் படிக்க: unchanged where already verified (09, 15); none added (no new verified named Tamil works for these topics). No local-history edits were made in this pass.
- Build: `hugo --quiet -d /tmp/ta-gaps-build --themesDir /workspace/freebook/from-relays-to-attention/themes` → exit 0 (the worktree has no `themes/hugo-book` submodule checkout, so the shared checkout's theme dir was used read-only).
- Not touched: content/, content.si/, content.th/, 00-credits, other desks' files. No push, no PR.
- Next candidates from the ranked list: 24 virtual memory (text-thin, vm-terminal), 10 SRAM/DRAM cells, 29 priority inversion, 25 cgroups/namespaces, 35/36 memory wall + Dennard scaling, 20 RISC-V.

## Tamil-gap pass 2 (2026-09-26 Asia/Bangkok — Arun, branch `ta-gaps-2`)

Approved by Lucas. Same standard as pass 1 (branch `ta-gaps-1`, not touched here): first-principles Tamil explainers for chapters whose topics are none/thin in Tamil online per `/workspace/freebook/ta-desk/research/gaps.md`. Branch `ta-gaps-2` from `origin/main` 85f3ae0; worktree `/workspace/freebook/ta-gaps-2`. All edits are insertions into existing `content.ta` pages (frontmatter incl. `draft: false`, spine, lab embeds and shortcodes unchanged); each page gained a Tamil coverage-gap note, a முதலில் சொற்கள் term list, worked examples with labelled example values (எடுத்துக்காட்டு மதிப்பு), and a சொற்கள் (தமிழ் | English) glossary.

- `0149403` — ranked items 1–7:
  - `24-virtual-memory-and-multitasking.md` — VA→PA translation, one-/two-level and x86-64 page tables, TLB timing and reach, PTE flags, page-fault steps, COW, context-switch cost; Try-this in vm-terminal (`/proc/self/maps`, smaps, VmSize/VmRSS, pgfault, ASLR, `free`) verified in the v86 image.
  - `10-the-memory-hierarchy-begins.md` — 6T SRAM read/write, transistor counts, 1T1C charge sharing (example values), DDR4-3200 CL22 row-buffer timings, refresh overhead from datasheet figures; Falstad Try-this (NOR latch, RC leak + refresh) with menus checked in circuitjs1 source.
  - `29-real-time-systems-and-deterministic-scheduling.md` — Liu–Layland bound, RM timeline, response-time analysis, inheritance vs none, priority ceiling (Sha/Rajkumar/Lehoczky 1990), Mars Pathfinder per Glenn Reeves; mini-CPU Try-this (steps = 5n+5) verified with the lab JS.
  - `25-containers-and-modern-os-isolation.md` — namespaces, cgroups history, cpu.weight/cpu.max/memory.max/pids.max arithmetic; vm-terminal Try-this (cgroup2 cpu weights 100 vs 400 → ≈20%/80%, v1 freezer) verified in one VM boot.
  - `35-the-memory-wall.md` — latency vs bandwidth, Little's law, Wulf–McKee arithmetic reproduced, DDR-400 vs DDR4-3200, AMAT/CPI, arithmetic intensity, paper exercises (no lab).
  - `36-the-clock-speed-wall.md` — CV²f worked example, Dennard 1974 scaling table, one-/three-generation table, subthreshold 60 mV/decade derivation, constant-voltage scaling, paper exercises (no lab).
  - `20-arm-and-risc-v-the-architecture-landscape-today.md` — x86/AArch64/RISC-V comparison, RISC-V extensions and history, R/I/S/B encodings by hand (checked with capstone), 5+8 in RISC-V vs mini-CPU, flag-free loop; mini-CPU Try-this (IR hex 55 4E 58 2E 4F 1F E0 F0; `LDI 16` → "Line 1: operand out of range (0-15)") verified against the lab JS.
  - `40-ethernet-and-the-local-area-network.md` — 2.94 Mb/s experimental vs 10 Mb/s spec, frame layout, slot time 51.2 µs / 64-byte minimum, efficiency, truncated binary exponential backoff with collision probabilities, full duplex; vm-terminal Try-this (eth0 MTU 1500, ping 100% loss, ARP `<incomplete>`, TX counter) verified in the v86 image.
- `301add4` — `49-finfet-to-gaa.md` (subthreshold swing/DIBL arithmetic, fin and nanosheet W_eff, fin quantization, Samsung 3 nm GAA 2022 / TSMC N2 Q4 2025), `51-chiplets-advanced-packaging.md` (Poisson yield, known-good die, AMD Zen 2 7 nm CCD + 12/14 nm I/O die, bump pitch and pJ/bit), `52-why-gpus-exist.md` (pixel workload, V100 15.7 TFLOPS derivation vs CPU example, SIMD vs SIMT, memory-bound vector add), `53-cuda-cores-warps-and-occupancy.md` (V100 SM table, thread indexing, divergence efficiency, register-limited occupancy, Little's-law latency hiding).
- `fc042af` — `54-gpu-memory-hierarchy.md` (bandwidth = width × pin rate, V100 HBM2 4096-bit/900 GB/s, GPU memory pyramid, tiling T/4), `55-tensor-cores.md` (V100 4×4×4 D=A×B+C, 125 TFLOPS derivation, tiling, FP16 vs FP32 accumulation tested in numpy), `56-multi-gpu-scaling.md` (PCIe 3.0 vs NVLink all-reduce time, scaling efficiency, 16 B/param memory, GPUDirect copies), `57-why-matrix-multiply-reshaped-chip-design.md` (hand FC layer, MAC counts for FC/im2col/attention, batch vs reuse).
- `cb2cde9` — `58-systolic-arrays.md` (simulated 2×2 weight-stationary trace, utilization K/(K+2n−2), data-movement savings, TPU v1 figures from Jouppi et al. 2017), `59-quantization-mixed-precision.md` (format table incl. FP8 from Micikevicius et al. 2022, 6.5 encoded in FP32/BF16/FP16, overflow/underflow, loss scaling, m² multiplier model, INT8 quantization/outliers).
- `9aded09` — `61-interconnect-at-datacenter-scale.md` (simulated 3-GPU ring all-reduce, 2(N−1)/N·S, α–β model, oversubscription, k³/4 fat-tree per Al-Fares et al. 2008, rail-optimized), `62-where-it-s-headed.md` (chiplet+HBM, co-packaged optics I/O energy, PIM movement energy — example values only).
- Real figures were checked against the English chapters or primary sources (NVIDIA Volta whitepaper; Jouppi et al. 2017 arXiv abstract; FP8 paper; RISC-V opcodes; Al-Fares et al. 2008; AMD Zen 2 coverage); all other numbers are labelled as example values.
- மேலும் படிக்க: existing entries kept; none added (no new verified named Tamil works). No Wikipedia citations.
- Build: `hugo --quiet --themesDir /workspace/freebook/from-relays-to-attention/themes -d /tmp/ta-gaps-2-public` → exit 0; every changed page rendered with all its tables. `.hugo_build.lock` removed.
- Not touched: `ta-gaps-1` or its worktree, the shared checkout, content/, content.si/, content.th/, other desks' files. No push, no PR.
- Left for pass 3: 60 sparsity (thin), then the other thin topics in gaps.md (e.g. 50 Moore's law, 18 System/360, neuromorphic in 62).
## Tamil-gap pass 3 (2026-09-26 Asia/Bangkok — Arun, branch `ta-gaps-3`)

Cleared by Lucas. Same standard as pass 2 (branch `ta-gaps-2`, and pass 1 on `ta-gaps-1` / PR #14, neither touched here). Branch `ta-gaps-3` from `origin/main` 85f3ae0; worktree `/workspace/freebook/ta-gaps-3`. All edits are insertions into existing `content.ta` pages (frontmatter incl. `draft: false`, spine, lab embeds, shortcodes, existing try-this hooks and மேலும் படிக்க entries unchanged). Each page gained a Tamil coverage-gap note (YouTube-only evidence labelled "தேடல் முடிவுகள் மட்டும் — காணொளிகள் பார்க்கப்படவில்லை"), a முதலில் சொற்கள் term list, worked examples with labelled example values (எடுத்துக்காட்டு மதிப்பு), and a சொற்கள் (தமிழ் | English) glossary. Pages already done in passes 1–2 were not re-expanded.

- `4cd5ec8` — requested order 1–3:
  - `60-sparsity-in-hardware.md` — 2:4 magnitude pruning by hand, 2:4 storage (FP16 56.25%, INT8 62.5%), sparse dot product checked against dense, CSR 4×4 example and 1000×1000 density table, load imbalance, Amdahl tied to the English chapter's speedup ranges, paper exercises (no lab).
  - `50-moore-s-law.md` — Moore 1965 figures checked against the article text (≈50 components at minimum cost, ≈1,000 by 1970, ×2/year, 65,000 by 1975 = 2^16), U-shaped cost-per-component model, doubling arithmetic (4004 2,300 × 2^25 ≈ 77 billion as a rule projection), cost per transistor = wafer-cost ÷ density, paper exercises (no lab).
  - `18-mainframes-to-minicomputers-to-microprocessors.md` — System/360 model table (30–70 storage width/cycle, read-only-store control) and ISA figures (16×32-bit GPRs, 4×64-bit FPRs, 24-bit addresses, 12-bit displacement, RR/RX/RS/SI/SS formats, AR 3,5 = 1A35, L = 58…) checked against Amdahl/Blaauw/Brooks 1964; PDP-11 figures against DEC's PDP-11/40 Processor Handbook; mini-CPU Try-this (IR 55 4E 58 2E 4F 1F E0 F0 → 13; LDI 9 → 59, output 14) verified against lab JS/simulator.
- Neuromorphic computing: no chapter carries it. `rg` over content/ and content.ta/ finds no neuromorphic/spiking/memristor mention; page 62 covers chiplets, co-packaged optics and processing-in-memory only (gaps.md row 125 attributes it to 62, but the page does not mention it). Skipped; no page invented.
- `62edadd` — thin rows by spine centrality: `11-instruction-sets.md` (full mini-CPU opcode table, hand encode/decode, RISC-V R/I encodings and x86-64 variable-length bytes verified with capstone, misaligned-decode demo, density 2 vs 12 bytes, iron-law example; Try-this 54 4E 59 3E E0 F0 → 5 and `LDI 16` rejection), `12-datapath-design.md` (ADD 14 datapath trace, control-signal table from lab execute semantics, single-cycle 750 ps timing and 3.75× pipelining preview; Try-this trace table verified in simulator), `08-from-gates-to-combinational-logic.md` (half/full adder tables, 6+7 ripple trace, ripple delay table, carry-lookahead checked on 6+7, two's-complement subtract, mux, 4-op ALU; Falstad Try-this half adder + Adder chip with "# of Bits" = 1, menu/pin names checked in circuitjs1 source).
- `bedf3b9` — `07-logic-gates-from-transistors.md` (inverter/NAND transistor tables, NMOS-load static power from Falstad's NMOS Inverter example circuit, αCV²f example, NAND-only construction; Try-this with Circuits → Logic Families → NMOS/CMOS examples checked in circuitjs1 setuplist and circuit files), `26-from-machine-code-to-assembly.md` (three-form table, two-pass assembly of a labelled countdown loop, unfixed-insert infinite loop vs fixed JZ 8/JMP 4, all run in the simulator), `41-tcp-ip-and-the-modern-internet-stack.md` (header sizes from RFC 791/793, encapsulation arithmetic, RFC 793 Figure 7 handshake numbers, loss/retransmission, 16-bit window ÷ RTT; vm-terminal Try-this: inetd `cat` echo server, telnet, two ESTABLISHED lines, /proc/net/snmp counters 7→10 segments, TIME_WAIT, refused port → AttemptFails/OutRsts, run in the v86 image).
- `a28b399` — `21-batch-processing-and-the-birth-of-the-operating-system.md` (utilization 67% vs 95%, FCFS vs SJF tables, turnaround cost; vm-terminal batch-job Try-this with deliberate `lss` error, run in the VM), `22-time-sharing-and-the-unix-lineage.md` (round-robin timeline vs batch, quantum/overhead trade-off; vm-terminal Try-this: /proc/stat ctxt, two busy loops ≈38% each, nonvoluntary switches ≈950, pipes, run in the VM).
- Real figures only from the English chapters or sources checked this pass (Moore 1965 article text; Amdahl/Blaauw/Brooks 1964; DEC PDP-11/40 handbook; RFC 791/793; capstone; lab sources; VM runs); everything else labelled as example values. No Wikipedia citations; no மேலும் படிக்க entries added.
- `/workspace/freebook/ta-desk/research/gaps.md` (not in git): all YouTube-based evidence and ratings now labelled "YouTube search results, unwatched" (method note, ratings legend, caveats, counts, headline, ranked-table header, all 163 per-topic headers and evidence lines, inline YouTube claims); no ratings changed. Backup `/tmp/gaps.md.bak-pass3`.
- Build: `hugo --quiet --themesDir /workspace/freebook/from-relays-to-attention/themes -d /tmp/ta-gaps-3-public` → exit 0; every changed page rendered with all its tables. `.hugo_build.lock` removed.
- Not touched: `ta-gaps-1`, `ta-gaps-2` or their worktrees, the shared checkout, content/, content.si/, content.th/, other desks' files. No push, no PR.
- Fixed in fact-check (Nayana, one commit): 11 "four encodings" → three (add, sub, addi); 08 CLA c₃ gate count → one 4-input OR + three ANDs (one 4-input); 07 Falstad hover text → NMOS "Ids = …", PMOS "Isd = …"; 22 per-process slice ≈ 2 ms (5 ms is the interval between A's preemptions); 41 /proc/net/snmp step 4 → only the counters are 0 (RtoAlgorithm/RtoMin/RtoMax/MaxConn are settings); asset-checklist comment shortcode neutralised in 07, 08, 11, 12, 18, 21, 22, 26, 41.
- Left for pass 4 (thin rows, by centrality): 19 x86/RISC, 23 GNU/Linux, 28 compilers/JIT/GC, 30 embedded/watchdog, 38 serial/UART/RS-232, 39 packet switching, 42 datacenter/RDMA, 43 Usenet (lab chapters); then 31–34 buses/PCI/PCIe/DDR, 05 semiconductors, 06 MOSFET, 27 languages, 44–48, 63–64, 01–03.
## Tamil-gap pass 4 (2026-09-26 Asia/Bangkok — Arun, branch `ta-gaps-4`)

Cleared by Lucas. Same standard as pass 3 (branch `ta-gaps-3`; passes 1–2 on `ta-gaps-1` / PR #14 and `ta-gaps-2`; none touched here). Branch `ta-gaps-4` from `origin/main` 85f3ae0 (unchanged since pass 3; no pass-4 page was already expanded on main, so nothing skipped); worktree `/workspace/freebook/ta-gaps-4`. All edits are insertions into existing `content.ta` pages (frontmatter incl. `draft: false`, spine, lab embeds, shortcodes, existing try-this hooks and மேலும் படிக்க entries unchanged; `git diff --numstat` shows 0 deletions). Each page gained a Tamil coverage-gap note (YouTube-only evidence labelled "YouTube தேடல் முடிவுகள் மட்டும் — காணொளிகள் பார்க்கப்படவில்லை"), a முதலில் சொற்கள் term list, worked examples with labelled example values (எடுத்துக்காட்டு மதிப்பு), and a சொற்கள் (தமிழ் | English) glossary.

- `4dcdf1f` — lab chapters 19, 23, 28:
  - `19-the-x86-vs-risc-split.md` — real instruction mix from `objdump -d /bin/ls` (x86-64, 22,874 instructions; mov 25.9%, data movement ≈37%, jumps/calls ≈20%; length distribution, mean ≈4.08 bytes), illustrative µop split of `add [rbx], eax`, REX encodings checked with capstone, compatibility-cost example; mini-CPU Try-this (macro expansion → output 13, 10 steps, 7 data-movement) run in the simulator.
  - `23-the-gnu-movement-and-linux.md` — GPL-2 obligations table from the GPL v2 text (s.0 running not restricted, s.2(b) whole work under GPL, s.3(a)/(b) source or ≥3-year written offer at cost, mere aggregation), written-offer and propagation arithmetic, timeline with GPL-2 (June 1991) / GPL-3 (29 June 2007) dates from the licence texts and Linux `COPYING` ("GPL-2.0 WITH Linux-syscall-note"); second vm-terminal Try-this (kernel Linux 4.16.13 built with GCC 7.3.0, userland BusyBox v1.28.4 GPLv2, 73 /bin entries all busybox, no bash) run in the VM; existing hook kept.
  - `28-compilers-jit-and-modern-language-runtimes.md` — `s += i;` through the pipeline, real GCC 14.2 output (-O0 13 instructions / 5 per iteration vs -O2 `movabs rax, 500000500000`), JIT break-even example (≈210,526 iterations), v86 JIT fact from its README; Try-this rewritten around the fact that the VM has **no gcc** (`gcc: not found`): ELF header of /bin/busybox (7f 45 4c 46, 32-bit, i386) and interpreted awk sum (500000500000, ≈6 s) run in the VM.
- `531ea73` — 30, 38, 39:
  - `30-real-time-systems-in-practice.md` — 1 kHz loop budget (WCET 700 µs, 30% margin, +400 µs → miss), cache vs no-cache WCET table, watchdog timeout arithmetic; Try-this: mini-CPU countdown (steps = 4n+3; 15/23/39 for n = 3/5/9, simulator-verified) and VM jitter (five awk runs 0.60–0.73 s, SCHED_OTHER).
  - `38-serial-links-and-the-first-machine-to-machine-connections.md` — 8N1 frame of `A` (LSB first), 9600-baud bit/frame/byte arithmetic, parity, modem 1 KB transfer table, n(n−1)/2 links table; Try-this: 16550A at 0x3f8, base_baud 115200, `stty` 9600 8N1 (divisor 12), tx counter +10, run in the VM.
  - `39-arpanet-and-packet-switching.md` — circuit vs packet multiplexing (10 vs 35 users, binomial P ≈ 0.0004), packetisation overhead, store-and-forward pipelining (1.92 s vs 4.8 s); Try-this: loopback ping packet/byte counters (6 packets, 2,560 bytes = 6×84 + 2×1,028), empty route table, run in the VM.
- `8f3a53f` — 42, 43:
  - `42-datacenter-networking-and-rdma.md` — copy-cost example (20% of a core), fat-tree k³/4 derivation and table, 1.25:1 oversubscription; Try-this: dd 64 MB at 1M/4k/512/64-byte blocks (0.05→5.45 s, ≈2.6 µs per syscall), run in the VM.
  - `43-usenet-archie-gopher-and-the-pre-web-internet.md` — NNTP IHAVE/335/435/235 flooding table (RFC 977), Archie index arithmetic, Gopher menu-line fields (RFC 1436), IRC 512/510/9/200 limits and PRIVMSG arithmetic (RFC 1459); Try-this: a BusyBox Gopher server via inetd + telnet on port 70 (menu and `/about` selector), run in the VM.
- `0bdaa03` — 31–34 (no lab; paper exercises with answers):
  - `31-buses-101.md` — address-width table (2ⁿ, 32 → 4 GB), data-width bandwidth, fixed-priority vs round-robin arbitration, contention table.
  - `32-from-isa-bus-to-pci-to-pcie.md` — skew vs period table, PCIe 1.x/2.x/3.0 rates and encodings from the PCI-SIG FAQ (2.5/5/8 GT/s, ~250/500/1000 MB/s per lane per direction), lane/wire arithmetic.
  - `33-pcie-deep-dive.md` — Gen 2 TLP field sizes from Xilinx WP350 v1.2 (24-byte overhead with 64-bit header, efficiency by payload), replay/ACK example, Gen 3 vs Gen 5 x16 from the English chapter.
  - `34-memory-buses.md` — SDR vs DDR arithmetic, CAS-latency-to-ns example (bandwidth ×2, latency −9%), concurrency-hides-latency table; all DDR numbers labelled example values.
- Real figures only from the English chapters or sources checked this pass (GPL v2/v3 texts; Linux `COPYING`; v86 README; RFC 977/1436/1459; PCI-SIG FAQ; Xilinx WP350; objdump/capstone/GCC on the box; lab sources; VM and simulator runs); everything else labelled as example values. No Wikipedia citations; no மேலும் படிக்க entries added.
- Flags for fact-check: page 28 English/Tamil "See It Live" tells readers to run `gcc` in the VM, but the image has no gcc; page 38 Tamil body renders "tens of kilobits" as "பல்லாயிரக்கணக்கான kilobits" (tens of thousands). Not edited (insertions only).
- Build: `hugo --quiet --themesDir /workspace/freebook/from-relays-to-attention/themes -d /tmp/ta-gaps-4-public` → exit 0; table counts match on every page (28 renders one extra `<table>` from the highlighted C code block). `.hugo_build.lock` removed.
- Not touched: `ta-gaps-1`, `ta-gaps-2`, `ta-gaps-3` or their worktrees, the shared checkout, content/, content.si/, content.th/. No push, no PR; upstream unset on `ta-gaps-4`.
- Left (thin rows, by centrality): 05 semiconductors, 06 MOSFET, 27 languages, 44–48, 63–64, 01–03.
- Fact-check (2026-09-26): 19 adds the omitted `xor` row (754, 3.3%, above `push` 742) and notes `jmp` 1286 = 1275 + 11 `notrack jmp`; 28 "See It Live" now says the VM has no C compiler (`gcc: not found`) and points to the GCC outputs and the try-this, and the -O2 wording is "folded the loop's final value to a constant"; 30 "warm-up" labelled as our guess; comment-shortcode lines neutralised on 19, 23, 28, 30, 38, 39, 42, 43. The "insertions only / 38 not edited" note above is superseded: 43fb22b fixed 38's "tens of kilobits" wording, and this commit edits existing lines. VM re-run (same v86 image, Linux 4.16.13, BusyBox 1.28.4) reproduced every command's output; timings differ as the pages say (awk 1e6 loop 6.64 s; jitter 0.63–0.70 s; dd 0.05/0.15/0.68/5.25 s, sys 4.12 s). The image has no `gopher` applet; 43's inetd + shell-script server works as written. English 28 still says to try `gcc` in the VM (not edited here).
- Wording fix (2026-09-26): "shipped" had been rendered literally with கப்பல் ("ship"). 19: "கப்பல் ஏறின" → "வெளியிடப்பட்டன"; 68 title/phase and the paths title and links: "கப்பலுக்குச் சென்ற பார்வைகள்" → "நடைமுறைக்கு வந்த பார்வைகள்"; 68 body: "glue-ஐக் கப்பலுக்கு அனுப்புங்கள்" → "glue-ஐ ஒரு தயாரிப்பாக வெளியிடுங்கள்" and "கப்பலுக்குச் சென்ற பார்வை" → "நடைமுறைக்கு வந்த பார்வை"; 69: "கப்பலுக்கு அனுப்பும்போது" → "வெளியிடும்போது". No கப்பல் left in content.ta.
## Tamil-gap pass 5 (2026-09-26 Asia/Bangkok — Arun, branch `ta-gaps-5`)

Cleared by Lucas. Same standard as pass 4 (branch `ta-gaps-4`; passes 1–3 on `ta-gaps-1` / PR #14, `ta-gaps-2` / PR #18, `ta-gaps-3`; none touched here). Branch `ta-gaps-5` from `origin/main` 85f3ae0 (unchanged; no pass-5 page was already expanded on main, so nothing skipped); worktree `/workspace/freebook/ta-gaps-5`. The expansion commits only insert lines into existing `content.ta` pages (frontmatter incl. `draft: false`, spine, shortcodes, existing hooks and Door outs unchanged; 0 deletions per commit). None of these pages has a lab: each gained a Tamil coverage-gap note (YouTube-only evidence labelled "YouTube தேடல் முடிவுகள் மட்டும் — காணொளிகள் பார்க்கப்படவில்லை"), a முதலில் சொற்கள் term list, worked examples with labelled example values (எடுத்துக்காட்டு மதிப்பு), காகிதப் பயிற்சிகள் (விடைகளுடன்), and a சொற்கள் (தமிழ் | English) glossary.

- `e55c1d6` — 05, 06, 27:
  - `05-semiconductors-from-first-principles.md` — Si/Ge band gap, atom density, nᵢ and intrinsic resistivity at 300 K from the Ioffe NSM data pages; kT = 0.0259 eV; simplified e^(−Eg/2kT) warming example (Si ×69, Ge ×12, 300 → 373 K); doping and mass-action arithmetic.
  - `06-the-transistor-bjt-to-mosfet.md` — base-current and C·V² switching-energy examples (5 mW vs 0.1 µW per gate; per-billion-gate totals); all example values.
  - `27-high-level-languages-fortran-cobol-lisp-c.md` — the same pay calculation actually run in gfortran 14.2, GnuCOBOL 3.2, SBCL 2.5.2 and GCC (`50.0000000` / `00050` / `50` / `50`); GCC -O2 output for `a*b+c`; COBOL PIC 9(5) overflow (99990 + 20 → 00010); Lisp code-as-data.
- `193f4c3` — 44, 45, 46:
  - `44-google-s-big-data-infrastructure-why-they-won.md` — failure-rate example; GFS paper (64 MB chunks, 3 replicas, <64 B metadata per chunk, the 600 GB / 23.2 min recovery experiment, checked: 91 × 6.25 = 568.75 MB/s ceiling); MapReduce word count by hand and the paper's grep figures; Bigtable `com.cnn.www` example.
  - `45-kubernetes-and-container-orchestration-at-scale.md` — real `kubectl create deployment … --dry-run=client -o yaml` manifest (kubectl 1.32.3), reconciliation timeline, bin-packing and rack-spread examples; Borg figures from Verma et al. (EuroSys 2015).
  - `46-the-machine-learning-software-stack.md` — Python loop vs NumPy timings measured on the box (≈0.18 s vs ≈16–18 ms vs ≈1.5–3.8 ms); autograd by hand for (wx − y)² checked with PyTorch 2.14 CPU (grad −18, w → 1.18); fusion memory-traffic tables; model-memory examples; all-reduce 2(n−1)/n from NVIDIA nccl-tests `doc/PERFORMANCE.md`.
- `adaa2be` — 47, 48:
  - `47-what-7nm-actually-means.md` — 0.7× naming rule and the 0.6·NAND2 + 0.4·SFF density formula from Mark Bohr's 2017 Intel editorial; 2021 renaming (10nm Enhanced SuperFin → Intel 7, Intel 7nm → Intel 4) and the "stopped matching gate length in 1997" statement from Intel's 26 July 2021 8-K and press release; pitch examples.
  - `48-photolithography.md` — CD = k1·λ/NA and k1 = 0.25 from ASML; k1 back-computed from ASML's figures (193 nm / 1.35 NA / 38 nm; 13.5 nm / 0.33 / 13 nm; 0.55 / 8 nm); photon energies from SI constants; 50,000 droplets/s, 4× reduction, stage figures from ASML's EUV page.
- `6d945f4` — 63, 64:
  - `63-attention-is-all-you-need.md` — attention by hand (one query, three tokens) checked with NumPy and PyTorch `scaled_dot_product_attention`; √d_k variance argument, measured std ≈ 8.00 → 1.00; base/big configurations, Table 1 complexities, training-time and FLOPs checks from arXiv 1706.03762v7.
  - `64-who-decides-the-wire.md` — 32-bit IPv4 (RFC 791) and 16-bit ports (RFC 793); prefix arithmetic; IANA registry http 80/tcp; DNS 63/255-octet limits and wire length (RFC 1035); UTF-8 by hand for த (E0 AE A4) per RFC 3629, Tamil block U+0B80–U+0BFF per Unicode Blocks.txt.
- `a9d6e46` — 01, 02, 03:
  - `01-mechanical-electromechanical-computing.md` — finite differences by hand; Babbage engine figures from the Computer History Museum "The Engines" page; Lovelace quotations (Note A, Note G) checked against the full *Sketch* + *Notes* text; Jacquard card-as-bits and tolerance stack-up examples.
  - `02-relays-and-electromechanical-logic.md` — relay half adder; Rojas 1998 branch-free selection a = a·t + (b op c)·(1 − t), the 0/0 halt, and his conclusion (paper read via OCR of the Konrad Zuse Internet Archive PDF); speed and wear arithmetic from the English figures plus example values.
  - `03-the-vacuum-tube-era.md` — ENIAC figures from the Penn Almanac history by Winegrad and Akera (5,000 additions/s vs 15–50 for relay machines; 17,480 tubes × 100,000 pulses/s ≈ 1.75 × 10⁹, which the article rounds to 1.8 billion; 20 accumulators; May 1944 two-accumulator test; trajectory times); derating arithmetic.
- `70be7e1` — separate mistranslation fixes in existing text (word-level): 44 "cognitive as much as physical" and "rigid"; 45 "descends from"; 46 "re-deriving"; 06 BJT base carriers are emitter-injected minority carriers, not majority carriers (Tamil-only sentence); 47 "trade them off"; 63 "linear projections" (×2) and "scales with"; 64 "outgrew hallway meetings", "earn their keep", "the pattern is the point"; 01 "polynomial functions" and "sketch"; 02 "existential" and "tradeoff"; 03 "throttles", "nightmare" (heading) and "settled to".
- Real figures only from the English chapters or sources checked this pass (Ioffe NSM; GFS/MapReduce/Bigtable/Borg papers; nccl-tests docs; Bohr 2017; Intel 8-K; ASML pages; arXiv 1706.03762; RFCs 791/793/1035/3629; IANA port registry; Unicode Blocks.txt; CHM; Lovelace's *Notes*; Rojas 1998; Penn Almanac; runs on the box); everything else labelled as example values. No Wikipedia citations; no மேலும் படிக்க entries added.
- Flags for fact-check (not edited): English 64 says "ARIN (1997) … is the seed name Nayana gave" (editorial leak, mirrored in Tamil); English 63 "The original Transformer used 8 heads" holds for the base model only (big: 16); English 47 says naming held "through the planar era", but Intel's 2021 release dates the break to 1997; the Tamil 03 frontmatter summary uses வர்த்தகம் for "traded"; the Tamil 06 page lacks the English Door out (Kahng & Atalla).
- Build: `hugo --quiet --themesDir /workspace/freebook/from-relays-to-attention/themes -d /tmp/ta-gaps-5-public` → exit 0; table counts match on all 13 pages (45 renders one extra `<table>` from the line-numbered YAML block). `.hugo_build.lock` removed.
- Not touched: `ta-gaps-1` to `ta-gaps-4` or their worktrees, the shared checkout, content/, content.si/, content.th/. No push, no PR; upstream unset on `ta-gaps-5`.
- Left (gaps.md thin/none rows on pages no pass has expanded): 04 point-contact transistor; 37 NVLink / CXL / InfiniBand; 66 Enigma / Colossus; 67 public-key crypto / privacy / digital identity; 68 Memex / Engelbart; 69 computing platform.
- Fact-check (gap pass 5, 2026-09-26): 70be7e1 fixes confirmed against the English (ch06 physics correct: the emitter injects minority carriers into the base). Sources re-checked: Ioffe NSM; GFS/MapReduce/Bigtable/Borg papers; nccl-tests PERFORMANCE.md; Bohr 2017; Intel 8-K (26 July 2021); ASML product/technology pages; arXiv 1706.03762v7 (base 8 heads, big 16); RFC 791/793/1035/3629; IANA ports; Unicode Blocks.txt; CHM "The Engines"; Lovelace's *Notes* (fourmilab); Rojas 1998; Penn Almanac (17,480 × 100,000 = 1.748 × 10⁹ vs "1.8 billion" — labelled as the article's rounding). Re-ran ch27 (GnuCOBOL/gfortran/SBCL/GCC), ch46 (NumPy/autograd) and ch63 (NumPy/PyTorch attention) on the box. Fixed: 03 summary வர்த்தகம் → பரிமாற்றம்; 06 Door out (Kahng & Atalla) added; 46 "13th digit" made precise (13th after the decimal point, 14th significant); 48 "because of cost" no longer attributed to ASML; 64 editorial aside ("the seed name Nayana gave") removed from the Tamil. English 64 still carries that aside, and English 47 "held through the planar era" vs Intel's 1997 date — both left for the English pages.
## Tamil-gap pass 6 (2026-09-26 Asia/Bangkok — Arun, branch `ta-gaps-6`)

Cleared by Lucas; this is the last pass on the gap list. Same standard as pass 5 (branch `ta-gaps-5`; passes 1–4 on `ta-gaps-1` / PR #14, `ta-gaps-2` / PR #18, `ta-gaps-3`, `ta-gaps-4`; none of them touched here). Branch `ta-gaps-6` from `origin/main` 85f3ae0. That base is unchanged after `git fetch origin`, so no earlier pass has merged yet. Worktree: `/workspace/freebook/ta-gaps-6`. The two expansion commits only insert lines into existing `content.ta` pages, with 0 deletions per commit. Frontmatter (including `draft: false`), spine, shortcodes, existing hooks, Door outs and links are unchanged. None of these pages has a lab. Each one gained:
- a Tamil coverage-gap note (YouTube-only evidence labelled "YouTube தேடல் முடிவுகள் மட்டும் — காணொளிகள் பார்க்கப்படவில்லை");
- a முதலில் சொற்கள் term list;
- worked examples with example values labelled எடுத்துக்காட்டு மதிப்பு;
- காகிதப் பயிற்சிகள் (விடைகளுடன்);
- a சொற்கள் (தமிழ் | English) glossary.

All arithmetic was checked in Python.

- `57f61c3`: 37, 04, 68
  - `37-interconnects-at-scale.md`
    - Host-staged vs GPUDirect RDMA traffic in system memory: 4 GB vs 0 per GB (simple model).
    - GPUDirect RDMA facts from NVIDIA's CUDA GPUDirect RDMA docs: Kepler / CUDA 5.0, shared upstream root complex, PCIe-switch vs CPU/IOH vs QPI/HT path quality, `nvidia-peermem` with InfiniBand and RoCE, lazy unpinning and registration cache.
    - Kepler BAR arithmetic: 256 − 32 = 224 MB → 3,584 × 64 KB pages.
    - NVIDIA NVLink page figures, checked: 900 / 1,800 / 3,000 GB/s per GPU; 8 × 900 = 7.2 TB/s, 72 × 1,800 ≈ 130 TB/s, 72 × 3,000 = 216 TB/s; 3,000 ÷ 12 = 250 GB/s for PCIe Gen6.
    - Full mesh n(n−1)/2: 28 and 2,556.
    - All-reduce times with the nccl-tests formula: 450 vs 64 GB/s per direction, 0.054 vs 0.383 s for 14 GB (example values).
    - CXL Consortium "About CXL": cache-coherent; CXL 4.0 raises 64 → 128 GT/s. Pooling example: 2,048 vs 1,024 GB.
    - InfiniBand comes in only through the NVIDIA doc; the English chapter does not name it.
  - `04-why-the-transistor-had-to-happen.md`
    - Per-tube watts from the chapter's own ENIAC figures: 150–174 kW ÷ 18,000 ≈ 8.3–9.7 W, an upper bound.
    - M ÷ N reliability example (example values).
    - Point-contact timeline from CHM's Silicon Engine page: 16 and 23 Dec 1947; patent filed 17 Jun 1948; announced 30 Jun 1948; Phys. Rev. 74 paper; Pierce named it; "Type A".
    - 1956 Nobel citation (nobelprize.org).
    - From Bardeen's Nobel lecture: 0.005 cm = 50 µm contact spacing; emitter/collector operation; power gain "20 db. or more" = 100×, which matches CHM's "up to 100 times"; minority-carrier lesson.
    - Impedance-ratio gain table (example values).
  - `68-visions-that-shipped.md`
    - Longest-prefix-match table, checked with Python `ipaddress`; rule quoted from RFC 4632.
    - Ports needed with and without a common API: A × H vs A + H (example values).
    - GNU four freedoms, from gnu.org.
    - The Linux v0.12 release-notes copyleft paragraph (kernel.org historic archive).
    - Cloud pooling utilization: 30% vs 67% (example values).
    - The coverage note records that gaps.md's Memex and Engelbart rows are not covered in the English chapter (or anywhere in the book), so they were not added.
- `e9ca2e6`: 66, 67, 69
  - `66-wartime-crypto.md`
    - Enigma I rotor I/II/III and UKW-B wiring and turnovers from Crypto Museum.
    - Worked encipherment of A at AAB → B; AAAAA → BDZGO and back, checked with a Python simulator.
    - Reflector has no fixed points, so no letter ever encrypts to itself.
    - Double stepping ADU → ADV → AEW → BFX.
    - Key space: 60 × 17,576 × 150,738,274,937,250 (10 cables) ≈ 1.59 × 10²⁰; 60 orders and the 10-cable practice per Crypto Museum.
    - Tunny from Copeland (Rutherford Journal): teleprinter "addition" = XOR, checked C + W = X and O + Z = D against his COLOSSUS example; chi wheel sizes 41/31/29/26/23 → period 22,041,682.
    - Tutte's 1+2: 70% / 60% / 55%, with 1,271 candidates.
    - Speed table with a 10,000-character example tape: 1,000 (Heath Robinson, Crypto Museum), 5,000 and 25,000 chars/s (Copeland).
    - TNMOC Colossus page: eleven months, Mk 1 delivery and working dates, 550 people, 10 Colossi, 63 million characters.
  - `67-privacy-consent-identity-cyber.md`
    - Saltzer & Schroeder's eight principles, from the MIT page.
    - Toy Diffie–Hellman (q = 23, α = 5, X = 6 and 15 → Y = 8 and 19, K = 2), following the 1976 paper's notation.
    - The paper's b = 200 figures: 400 multiplications vs 2¹⁰⁰ ≈ 10³⁰.
    - RSA paper's own Section VIII example: p = 47, q = 59, n = 2773, φ = 2668, d = 157, e = 17; square-and-multiply 920 → 948; decryption and all ten blocks checked; signature 920¹⁵⁷ mod 2773 = 192 and back.
    - Password search times (example values).
    - OAuth access-token and scope definitions quoted from RFC 6749.
  - `69-platform-synthesis.md`
    - Pure composition math, no external source: nines table; series 0.999⁵ ≈ 99.50%; three replicas 1 − 0.01³; fan-out 1 − 0.99¹⁰⁰ ≈ 63.4%.
    - 200 ms latency budget and staged-rollout example (example values).
- `ea342b6`: separate word-level mistranslation fixes in existing body text (frontmatter untouched):
  - 04: "rounding error" (was literal முழுமையாக்கல் பிழை) and "குழாயின்வை".
  - 66: "breaking one message did not buy you the next day for free".
  - 67: "survey" (was கணக்கெடுப்பு), "curious" (was ஆர்வலர்கள்), "UI copy" (was நகல்), சரிவிழ்த்தன.
  - 68: "ship the glue" and "the vision that shipped" (was literal கப்பல்).
  - 69: "ships a slice" (கப்பல்) and "partition data" (was பகிர்ந்திடுங்கள்).
- **Sources:** real figures come only from the English chapters or from sources checked this pass: NVIDIA NVLink page and GPUDirect RDMA docs; nccl-tests PERFORMANCE.md; CXL Consortium; CHM Silicon Engine; Bardeen's Nobel lecture and nobelprize.org; RFC 4632; RFC 6749; Linux v0.12 RELNOTES; gnu.org; Crypto Museum (Enigma wiring, Enigma I, Lorenz SZ-40/42); TNMOC; Copeland in the Rutherford Journal; Saltzer & Schroeder; Diffie–Hellman 1976; RSA paper. Everything else is labelled as example values. No Wikipedia citations and no மேலும் படிக்க entries added. No new Tamil-language sources found.
- **Flags for fact-check (not edited):**
  - English 66 says Colossus was "first machine operational December 1943". TNMOC says it was delivered late Dec 1943 / Jan 1944 and working in early Feb 1944; Crypto Museum says delivered 18 Jan 1944, first message 5 Feb 1944. The Tamil mirrors the English.
  - Valve counts vary by source: Copeland ~1,600 / ~2,400, Crypto Museum >1,700 / 2,400, TNMOC 2,500. The Tamil insert quotes Copeland and notes TNMOC.
  - The Tamil 68 frontmatter `title` and `phase` use கப்பலுக்குச் சென்ற ("went to the ship") for "shipped" (frontmatter, so not edited).
  - Tamil 19 line 22 has the same literal கப்பல் ஏறின ("shipped"). Page 19 is in pass-4 scope, so it was not edited.
  - gaps.md lists Memex and Engelbart under 68, but no English chapter covers them. That needs an English-content decision.
- **Build:** `hugo --quiet --themesDir /workspace/freebook/from-relays-to-attention/themes -d /tmp/ta-gaps-6-public` → exit 0. Markdown and rendered table counts match on all 6 pages. `.hugo_build.lock` removed.
- **Not touched:** `ta-gaps-1` to `ta-gaps-5` or their worktrees, the shared checkout, content/, content.si/, content.th/. No push, no PR. Upstream is unset on `ta-gaps-6`.
- **Left:** none. All 68 pages with gaps.md thin/none rows (01–64 and 66–69; there is no page 65) now have an expanded page on exactly one of `ta-gaps-1` … `ta-gaps-6`. The one exception by content: 68's Memex and Engelbart rows are acknowledged in the note but have no Tamil text, because the chapter does not cover them. gaps.md ratings are unchanged, since they rate available Tamil literature, not our pages.

### Pass 6 fact-check gate (2026-09-26 Asia/Bangkok — Nayana's checker)

- **Sources reopened and matched:** NVIDIA NVLink page (900 / 1,800 / 3,000 GB/s per GPU; 7.2 / 130 / 216 TB/s; "3 TB/s bidirectional", "12x ... PCIe Gen6"); NVIDIA GPUDirect RDMA docs (Kepler / CUDA 5.0, "standard features of PCI Express", shared upstream root complex, QPI/HT "extremely performance-limited", 256 MB BAR with 32 MB reserved, 64 KB pages, pinning "up to milliseconds", lazy unpinning, registration cache, nvidia-peermem with InfiniBand and RoCE); nccl-tests PERFORMANCE.md (t = (S/B)·2(n−1)/n); CXL Consortium About page (cache-coherent; CXL 4.0 64 → 128 GT/s; backward compatible with 3.x, 2.0, 1.1, 1.0); CHM Silicon Engine 1947 page; Bardeen's Nobel lecture PDF ("of the order of 0.005 cm", "20 db. or more", "If this fact had been recognized earlier, the transistor might have come sooner"); Crypto Museum Enigma wiring and Enigma I pages (I/II/III/UKW-B wiring, turnovers Q/E/V, 60 orders from 15 Dec 1938, 10 cables in practice, Welchman "effectively eliminated the Steckerbrett", Hamer 1997 double stepping); Crypto Museum Lorenz and Colossus pages; Copeland, Rutherford Journal vol. 3 (COLOSSUS + WZHI/NR9 = XDIVSDFE, chi cams 41/31/29/26/23, Tutte 70% / 60% / 55%, 10,000-character example, ~1,600 valves at 5,000 chars/s, ~2,400 valves at 25,000 chars/s); TNMOC Colossus page; Saltzer & Schroeder (eight principles); Diffie–Hellman 1976 (b = 200 → 400 multiplications vs 2¹⁰⁰ ≈ 10³⁰); RSA paper Section VIII (47, 59, 2773, 2668, d = 157, e = 17, 920 → 948, full ten-block ciphertext); RFC 6749 ("specific scopes and durations of access"; space-delimited, case-sensitive scope); RFC 4632 ("Forwarding in the Internet is done on a longest-match basis."); Linux RELNOTES-0.12 (copyleft paragraph). All matched.
- **Recomputed in Python:** every table and exercise answer on 37, 04, 66, 67, 68, 69. An independent Enigma simulator gives AAAAA → BDZGO at AAA (and back), ADU → ADV → AEW → BFX, and AAU → AAV → ABW → ABX. Plugboard counts for 10 / 11 / 13 cables, the key space ≈ 1.59 × 10²⁰, toy DH (8, 19, K = 2; exercise 10, 17, K = 14), RSA 920 → 948 → 920, signature 192, and the availability, fan-out and latency numbers all check. No arithmetic errors found.
- **Fixes (this gate):**
  - 66 body: "first machine operational December 1943" → delivered January 1944 (18 Jan per Flowers' diary via Copeland and per Crypto Museum; TNMOC: late Dec 1943 / Jan 1944), first message attacked 5 Feb 1944, Mark II from June 1944. The same correction goes into English 66 on `en-accuracy-1` (PR #28).
  - 66 Heath Robinson: kept Crypto Museum's 1,000 chars/s and noted that Copeland gives a 2,000 chars/s maximum.
  - 04 body: "பராமரிப்பு கனவு" ("maintenance dream") → "பராமரிப்புத் துர்க்கனவு" (nightmare).
  - 37 exercises 3–4 and 69 exercises 2, 4, 6: added the எடுத்துக்காட்டு மதிப்பு label to hypothetical parameters.
  - 68/69: the three body lines that ea342b6 and ta-gaps-4 commit 05b31b1 (PR #22) both rewrite (68 Cisco, 68 GNU+Linus, 69 summary) go back to origin/main text on this branch, so #22's wording ("நடைமுறைக்கு வந்த", "வெளியிடும்போது") lands without a conflict. The 68 title/phase are also left to #22. The 69 "partition" fix stays. The new pass-6 text adds no கப்பல்.
- **Left for review:** 68's Memex / Engelbart rows need an English-content decision. English 66 has no valve count; the Tamil insert quotes Copeland and notes TNMOC's 2,500 (Crypto Museum: over 1,700 for Mk 1, 2,400 for Mk 2).

### Batch 1 — fork `forks/arun`, branch `ta-batch-1` (2026-11-05 Asia/Colombo)

- **Base:** `main` 79821ce (PR #47 title-sweep). Remote-less fork, nothing pushed.
- **Added (14 files, all `draft: false`, same frontmatter keys as English):** `content.ta/posts/01-what-is-this-thing.md` (hub, `arm: hub`), nine `01-take-*.md` door pages (`bookHidden: true`, `arm:` kept), `01a-babbage-engines.md`, `01b-jacquard-loom.md`, `01c-why-mechanical-matters.md`, `content.ta/behind-the-scenes.md`. Same image URLs; Tamil alt/captions; photographer/licence links unchanged. Lab shortcodes (`difference-engine`, `analytical-engine`, `pebble-trays`) kept as-is with a note that the lab UI is still English — Tamil lab strings not touched. English Wikipedia "Map" links on 01a/01b omitted (no Wikipedia as source). No ASSET CHECKLIST (removed from English since 85f3ae0). No மேலும் படிக்க (no verified named Tamil work).
- **Expanded beyond English (01a/01b/01c):** gap note, முதலில் சொற்கள், worked finite-difference table for x², worked 8-thread card example, illustrative backlash stack-up (labelled எடுத்துக்காட்டு மதிப்பு), paper exercises with answers, சொற்கள் tables. Arithmetic checked in Python.
- **Title consistency:** `content.ta/_index.md` — "63 தொழில்நுட்ப அத்தியாயங்கள் … ~45,000 சொற்கள்" and the Attention-hardware lede replaced with the current English lede/spine; "Grok, Lucas…" → "(Lucas, Benjamin, Harper)" as in English. `content.ta/about.md` — கடன் used for "credit" replaced; paths link added (`/ta/paths/`); BTS link → `/ta/behind-the-scenes/`. `i18n/ta.toml` and `hugo.toml [languages.ta]` already say நாம் அங்கு எப்படிச் சென்றடைந்தோம் — no change.
- **Sources:** CHM "The Engines" (1821 start; 1830 design 16 digits/6 orders/~25,000 parts; 1832 portion ~2,000 parts, one-seventh; funding axed 1842; Analytical Engine 1834; store/mill, fetch-execute; DE2 1847–49, 31 digits, 7th order, ~⅓ parts; jam = error detection); CHM Babbage landing (DE2 8,000 parts, 5 tons, completed London 2002); Science Museum 2023 article (14 June 1822 RAS paper; Clement; £17,500; Lovelace 1843; DE2 built 1985–1991, printer 2002, hand crank; second copy long displayed at CHM); CHM Storage Engine "1801" (Lyon demo); Science and Industry Museum Manchester (1804 patent; draw boy; pins/hooks mechanism); Fourmilab full text of Menabrea/Lovelace *Notes* (Note G, Bernoulli; "other things besides number"; "weaves algebraical patterns").
- **Unverified (marked in-file):** 01a — year building stopped (CHM 1832 vs Science Museum 1833), year omitted.
- **Discrepancies for Lucas (English unchanged):** (1) 01a English: "Funding fought him; so did the manufacturing tolerances" — both museums give the Clement dispute (1832/33) as the immediate halt, funding axed 1842. (2) 01c caption "built in the 20th century": London DE2 calc section 1991 but printer 2002; Serial #2 is later still — Tamil caption says "நவீன காலத்தில்". (3) 01a/01b captions place Serial #2 at CHM in the present tense; Science Museum says it was displayed there "for many years" (past). (4) Jacquard: CHM says 1801 demo in Lyon; Europeana says presented in Paris 1804 with the patent. English "early-1800s" is safe.
- **Open (not changed):** English `01-mechanical-electromechanical-computing.md` is now `draft: true` (split into 01/01a/01b/01c) but Tamil 01-mechanical is still `draft: false` with weight 2 — Tamil now shows both. Needs a desk decision. BTS: no Arun still exists in `static/bts/`; page names Arun in text only.
- **Build:** `hugo --quiet --themesDir /workspace/freebook/from-relays-to-attention/themes -d /tmp/arun-fork-public` → exit 0; all 14 pages render under `/tmp/arun-fork-public/ta/`. Note: `.hugo_build.lock` is tracked in git, so it was restored after the build rather than deleted.

### Batch 2 — fork `forks/arun`, branch `ta-batch-2` from `ta-batch-1` 8300466 (2026-11-05 Asia/Colombo)

- **Scope:** Tamil sync with English changes in `git diff 85f3ae0..79821ce -- content/`.
- **Changed:** 00-credits (desk sentence reworded; 中文 added to map line; new சீன வெளியிடப்பட்ட மூலங்கள் section with names/titles/links verbatim from English; Zunara section rewritten to the softened English; closing line; stale TODO(desk) comment removed; title நன்றியுரையும் மூலாதாரங்களும் kept; no கடன்கள்). 03 (Eckert 1989 Computerworld interview: "another myth", "about every two days", locate within 15 minutes — verified on the page). 18 (">600,000 installed by May 1990" — verified in the CHM-archived DEC timeline, May 1990 entry). 26 (lab assembler has no labels parenthetical). 47 (Intel 2021 8-K "1997" quote moved into "When the name was a length" with planar-into-2010s point; later duplicate shortened; gap paragraph "opened in the planar era and widened"). 63 (base 8 heads, big 16). 99-glossary (added Analytical Engine, Difference Engine, Method of Finite Differences, Punched Card, Store / Mill).
- **Already current:** 14 (no predictor, paper trace), 28 (no gcc; hexdump + awk demo), 64 (no "seed name" note), glossary title, no "From Relays to Attention" or கப்பல் anywhere in content.ta/ or i18n/ta.toml.
- **Not touched (per Lucas):** 01-mechanical-electromechanical-computing.md draft flag — Lucas's own PR.
- **Unverified:** none added. Chinese source entries are copied from English, not re-checked by this desk.
- **Build:** exit 0; `.hugo_build.lock` unchanged in git.

### Batch 3 — fork `forks/arun`, branch `ta-batch-3` from main 0df3a4e (2026-11-05 Asia/Colombo)

- **Added:** `01d-woodblock-to-movable-type.md` and `43b-from-press-to-pixel.md`. These are Tamil gap-rule pages, not translations: same structure as English (China first, Gutenberg/West last), plus Tamil sections. 01d covers Kollam 1578 (Harvard Houghton catalogue) and Tranquebar 1714–15 (King's College London exhibition; Francke Foundations catalogue). 43b covers Tamil99 / TAM / TAB (G.O.Ms.No.17, 13.06.1999, TVA text) and the Unicode Tamil block U+0B80–U+0BFF (Unicode chart). Both pages have worked examples (two-plate pipeline, sort count, CCF number check, UTF-8 bytes; arithmetic checked in Python), exercises with answers, and a glossary table. draft:false.
- **Changed:** 02 (new English "two jobs / pigeons / electric message" section, Tamil). 99-glossary (Glyph, Movable Type, Unicode).
- **Already current:** 01b (1804 patent/attachment), 01c (completed 2008).
- **Unverified markers:** 01d (Goa type, Pero Luis, the 1713 arrival day: sources disagree). 43b (CCF 800 bits × 600,000 ≠ 4 MB; Starlink line dropped because its only source is Wikipedia).
- **Labs:** no lab-strings mechanism in static/labs (no strings.*.json); skipped.
- **Build:** exit 0; `.hugo_build.lock` unchanged in git.

### Labs 1 — branch `ta-labs-1` from 5feee53 (2026-11-05 Asia/Colombo)

- **Added:** `static/labs/difference-engine/strings.ta.json` (all 52 keys); `labIframeTitle` and `labOpenNewTab` in `i18n/ta.toml`. No lab code edits.
- **Terminology:** follows 01a: வித்தியாசப் பொறி, கொண்டு செல்லல் (carry), முதல் / இரண்டாம் வேறுபாடு, இலக்கச் சக்கரம், நிரல்.
- **Buttons:** படி; மீட்டமை (carry தயார்); மீட்டமை (x=0 தொடக்கம்). "carry" kept in English on the button to keep it short; Lucas to confirm.
- **Checks:** `check-lab-strings.py` 0 errors, 0 warnings. Headless Chrome on hugo server clicked Step, Reset and Classic: all text Tamil, `<html lang=ta>`, no console errors, no leftover placeholders. The Tamil 01a iframe has a Tamil title and `?lang=ta`.

### Labs 2 — fork `forks/arun`, branch `ta-labs-2` from main 3a5d8cf (2026-11-05 Asia/Colombo)

- **Added:** `static/labs/mini-cpu/strings.ta.json` (72 keys) and `static/labs/vm-terminal/strings.ta.json` (15 keys; wrapper chrome only, guest Linux stays English). No lab code or `i18n/ta.toml` changes.
- **Terms (Mini-CPU):**
  - Buttons: தொகு = Assemble, படி = Step, ஓட்டு = Run, நிறுத்து = Stop, மீட்டமை = Reset (same as ta-labs-1).
  - Panels: பதிவேடு = register, வெளியீட்டுப் பதிவேடு = Output Register, நினைவகம் = memory, கொடிகள் = flags, CPU நிலை = CPU State, வழிகாட்டும் ஓட்டம் = Guided beat.
  - Steps: எடு / குறிவிலக்கு / செயல்படுத்து = fetch / decode / execute; அறிவுறுத்தல் = instruction; சொல் = word; முகவரி = address; மதிப்பு = value; வரி = line.
  - Kept in English: PC, IR, A, B, CARRY/ZERO/HALT, mnemonics, opcode, operand, immediate, mnemonic, decimal/hex, mem[…], and the "Assembly" panel title.
- **Terms (VM terminal):** VM-ஐத் தொடங்கு = Boot VM, மீண்டும் தொடங்கு = Restart, முனையம் = terminal, கட்டளை = command, சொடுக்கு = click. Kept in English: boot, kernel, shell, prompt, image, emulator, v86, WASM.
- **Assembler errors:** "needs an {what}" became `{name}-க்கு ஒரு {what} தேவை`, where {what} is operand / மதிப்பு / முகவரி.
- **Tests:**
  - `check-lab-strings.py`: 0 errors, 0 warnings for both labs.
  - Headless Chrome with `?lang=ta`. Mini-CPU: Assemble, Step ×2, Run to HLT (Output 13), Reset, and all seven assembler errors were seen in Tamil. VM terminal: Boot VM was clicked and the status reached "running". Both chapter embeds (26, 22) load their labs in Tamil.
  - No page errors and no leftover placeholders.
- **Caveats:**
  - Tamil chapters still name the buttons in English (for example **Step**-ஐ in 26 and 29), which no longer matches the Tamil buttons.
  - The iframe title is still English on this branch because `labIframeTitle` lives on ta-labs-1.
  - In the VM I did not type any commands.

### Batch 4 — fork `forks/arun`, branch `ta-batch-4` from 5feee53 (2026-11-05 Asia/Colombo)

- **Scope:** structural pass on 09, 14, 15, 16, 17, 25 and 29. Additions only; no existing section was deleted or rewritten.
- **Gap notes:** a formal `தமிழ் இடைவெளிக் குறிப்பு` blockquote was added to all seven, after the existing prose gap paragraph. It is based on `ta-desk/research/gaps.md`, and YouTube is labelled as search results that were not watched.
- **முதலில் சொற்கள்:** added to 09, 15, 16, 17 and 25. 14 and 29 already had it.
- **Exercises with answers:** added to 09, 14, 16, 25 and 29, with the arithmetic checked in Python. 15 and 17 already had inline "கையால் முயல்க" exercises with answers, so they were left as they were.
- **64:** English 64 names the RIRs and NIRs, so a short RIR section was added. Its sources are APNIC (service region: Sri Lanka and India are in South Asia; seven NIRs) and IRINN (run by NIXI, recognised by APNIC in March 2012).
- **68:** no Memex body (held).
- **Unverified markers:** none added.
- **Build:** exit 0; `.hugo_build.lock` unchanged in git.

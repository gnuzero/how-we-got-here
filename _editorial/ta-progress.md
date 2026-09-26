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
- Left for pass 4 (thin rows, by centrality): 19 x86/RISC, 23 GNU/Linux, 28 compilers/JIT/GC, 30 embedded/watchdog, 38 serial/UART/RS-232, 39 packet switching, 42 datacenter/RDMA, 43 Usenet (lab chapters); then 31–34 buses/PCI/PCIe/DDR, 05 semiconductors, 06 MOSFET, 27 languages, 44–48, 63–64, 01–03.

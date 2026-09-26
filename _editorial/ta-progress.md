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

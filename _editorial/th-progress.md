# Thai translation progress

- Desk: Mira
- Started: 2026-09-06 (Asia/Bangkok)
- Scope: full bodies for 05–62, then 98-timeline, then about if missing
- Skip (MVP done): _index, 00, 01–04, 63, 99
- Rules: draft:false; titles/attribution from TRANSLATIONS.md; keep frontmatter; tech terms in English where normal; no Bridgestack/gossip; no git; no content.si/ta; no Guido/Python-1991 special credit; อ่านเพิ่ม only with verified named Thai works

## Done

### Retrofit อ่านเพิ่ม (05–12)

- 05-semiconductors-from-first-principles.md — ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ* (verified via WebSearch / Chula Eng textbook list). สุวิทย์ กิระวิทยา NU e-Camp basics: no matching named teaching title verified → not used.
- 06-the-transistor-bjt-to-mosfet.md — ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*; เพื่อชาติ สุขเรือน, *การวิเคราะห์วงจรทรานซิสเตอร์*
- 07-logic-gates-from-transistors.md — ทรงยศ นาคอริยกุล; ศิริพร เดชะศิลารักษ์; ธีรวัฒน์ ประกอบผล
- 08-from-gates-to-combinational-logic.md — ทรงยศ นาคอริยกุล; ศิริพร เดชะศิลารักษ์; ธีรวัฒน์ ประกอบผล
- 09-sequential-logic.md — ทรงยศ นาคอริยกุล; ศิริพร เดชะศิลารักษ์
- 10-the-memory-hierarchy-begins.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี
- 11-instruction-sets.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี; รศ.ดร.เกริก ภิรมย์โสภา
- 12-datapath-design.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี; รศ.ดร.เกริก ภิรมย์โสภา

### New full bodies (13–22)

- 13-pipelining.md — จันทนา; ปัทมา; เกริก
- 14-branch-prediction.md — จันทนา; ปัทมา; เกริก
- 15-caches.md — จันทนา; ปัทมา; เกริก
- 16-out-of-order-execution.md — จันทนา; ปัทมา; เกริก (historical: Tomasulo / IBM System/360 Model 91)
- 17-superscalar-multicore.md — จันทนา; ปัทมา; เกริก
- 18-mainframes-to-minicomputers-to-microprocessors.md — จันทนา; ปัทมา; เกริก (historical: IBM S/360, DEC PDP-11, Intel 4004)
- 19-the-x86-vs-risc-split.md — จันทนา; ปัทมา; เกริก
- 20-arm-and-risc-v-the-architecture-landscape-today.md — จันทนา; ปัทมา; เกริก
- 21-batch-processing-and-the-birth-of-the-operating-system.md — ยรรยง เต็งอำนวย, *ระบบปฏิบัติการ*; ชูเกียรติ วรสุชีพ, *ระบบปฏิบัติการคอมพิวเตอร์ยุคใหม่*; พิรพร หมุนสนิท และคณะ, *ระบบปฏิบัติการ*
- 22-time-sharing-and-the-unix-lineage.md — same OS trio (historical: Ken Thompson, Dennis Ritchie, Multics, BSD, System V)


### New full bodies (23–32)

- 23-the-gnu-movement-and-linux.md — ยรรยง เต็งอำนวย, *ระบบปฏิบัติการ*; ชูเกียรติ วรสุชีพ, *ระบบปฏิบัติการคอมพิวเตอร์ยุคใหม่*; พิรพร หมุนสนิท และคณะ, *ระบบปฏิบัติการ*; วิรุฬห์ ศรีบริรักษ์, *Embedded Android Development* (historical: Richard Stallman, Linus Torvalds, GNU, GPL, Linux)
- 24-virtual-memory-and-multitasking.md — same OS trio (ยรรยง; ชูเกียรติ; พิรพร)
- 25-containers-and-modern-os-isolation.md — OS trio + อาณัติ รัตนถิรกุล, *Docker พื้นฐานสู่การใช้งานจริง*
- 26-from-machine-code-to-assembly.md — ธีรวัฒน์ ประกอบผล, *ภาษาแอสเซมบลีสำหรับ MCS-51*; จารุโลจน์ จงสถิตย์วัฒนา, *หลักการและการประมวลผลภาษาโปรแกรม*; จันทนา จันทราพรชัย, *สถาปัตยกรรมคอมพิวเตอร์และการออกแบบ*
- 27-high-level-languages-fortran-cobol-lisp-c.md — อรพิน ประวัติบริสุทธิ์, *คู่มือเขียนโปรแกรมด้วยภาษา C ฉบับสมบูรณ์*; ธีรวัฒน์ ประกอบผล, *การโปรแกรมภาษาซีสำหรับงานวิทยาศาสตร์*; จารุโลจน์ จงสถิตย์วัฒนา, *หลักการและการประมวลผลภาษาโปรแกรม* (historical: Grace Hopper / FLOW-MATIC→COBOL; FORTRAN 1957 IBM; John McCarthy / Lisp; Dennis Ritchie / C)
- 28-compilers-jit-and-modern-language-runtimes.md — จารุโลจน์ จงสถิตย์วัฒนา, *หลักการและการประมวลผลภาษาโปรแกรม*; เกียรติกูล เจียรนัยธนะกิจ, *ทฤษฎีการคำนวณ*; อรพิน ประวัติบริสุทธิ์, *คู่มือเขียนโปรแกรมด้วยภาษา C ฉบับสมบูรณ์*
- 29-real-time-systems-and-deterministic-scheduling.md — วโรดม ตู้จินดา, *ระบบควบคุมฝังตัว*; วิรุฬห์ ศรีบริรักษ์, *Embedded Android Development*; ดอนสัน ปงผาบ, *ไมโครคอนโทรลเลอร์และการประยุกต์ใช้งาน 1*
- 30-real-time-systems-in-practice.md — same real-time/embedded trio (วโรดม; วิรุฬห์; ดอนสัน)
- 31-buses-101.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี; รศ.ดร.เกริก ภิรมย์โสภา
- 32-from-isa-bus-to-pci-to-pcie.md — จันทนา; ปัทมา; เกริก


### New full bodies (33–42)

- 33-pcie-deep-dive.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี; รศ.ดร.เกริก ภิรมย์โสภา
- 34-memory-buses.md — จันทนา; ปัทมา; เกริก
- 35-the-memory-wall.md — จันทนา; ปัทมา; เกริก
- 36-the-clock-speed-wall.md — จันทนา; ปัทมา; เกริก
- 37-interconnects-at-scale.md — จันทนา; ปัทมา; เกริก
- 38-serial-links-and-the-first-machine-to-machine-connections.md — โอภาส เอี่ยมสิริวงศ์, *เครือข่ายคอมพิวเตอร์และการสื่อสาร*; สุธี พงศาสกุลชัย, *การสื่อสารข้อมูลและเครือข่ายคอมพิวเตอร์*; จตุชัย แพงจันทร์ และ อนุโชต วุฒิพรพงษ์, *เจาะระบบ Network*
- 39-arpanet-and-packet-switching.md — โอภาส เอี่ยมสิริวงศ์; ภัทรสินี ภัทรโกศล, *เครือข่ายคอมพิวเตอร์*; สุวัฒน์ ปุณณชัยยะ และคณะ, *เปิดโลก TCP/IP และโปรโตคอลของอินเตอร์เน็ต*
- 40-ethernet-and-the-local-area-network.md — โอภาส; จตุชัย/อนุโชต; ภัทรสินี (historical: Xerox PARC / Ethernet 1973)
- 41-tcp-ip-and-the-modern-internet-stack.md — โอภาส; สุวัฒน์ ปุณณชัยยะ และคณะ; ภัทรสินี
- 42-datacenter-networking-and-rdma.md — โอภาส; จตุชัย/อนุโชต; ภัทรสินี


### New full bodies (43–52)

- 43-usenet-archie-gopher-and-the-pre-web-internet.md — โอภาส เอี่ยมสิริวงศ์; จตุชัย/อนุโชต; ภัทรสินี (historical: Tom Truscott, Jim Ellis / Usenet; Archie McGill 1990; Gopher Minnesota 1991; Netscape Navigator 1994)
- 44-google-s-big-data-infrastructure-why-they-won.md — อสมา กุลวานิชไชยนันท์, *Big Data Series I: Introduction to a Big Data Project ปฐมบทในการทำโปรเจคบิ๊กดาต้า*; โอภาส เอี่ยมสิริวงศ์ (historical: GFS 2003, MapReduce 2004, Bigtable 2006, Hadoop)
- 45-kubernetes-and-container-orchestration-at-scale.md — อาณัติ รัตนถิรกุล, *Docker พื้นฐานสู่การใช้งานจริง*; ณัฐโชติ พรหมฤทธิ์, *Practical DevOps and Cloud Engineering*
- 46-the-machine-learning-software-stack.md — สุพจน์ เฮงพระพรหม, *การเรียนรู้ของเครื่อง MACHINE LEARNING*; นวลวรรณ สุนทรภิษัช, *การเรียนรู้ของเครื่อง Machine Learning*; รศ.ดร.วฤษาย์ ร่มสายหยุด, *การเรียนรู้ของเครื่องสำหรับการวิเคราะห์ข้อมูลเชิงทำนายและการประยุกต์*
- 47-what-7nm-actually-means.md — ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*
- 48-photolithography.md — ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ* (historical: ASML EUV; Reuters Shenzhen prototype Dec 2025)
- 49-finfet-to-gaa.md — ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ* (historical: Intel Ivy Bridge 22 nm 2011–2012)
- 50-moore-s-law.md — ทรงพล กาญจนชูชัย; จันทนา จันทราพรชัย; รศ.ดร.เกริก ภิรมย์โสภา (historical: Gordon Moore 1965/1975; Intel 4004)
- 51-chiplets-advanced-packaging.md — ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*
- 52-why-gpus-exist.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี; รศ.ดร.เกริก ภิรมย์โสภา (SIMD coverage via Flynn taxonomy in architecture texts)

### New full bodies (53–62)

- 53-cuda-cores-warps-and-occupancy.md — จันทนา จันทราพรชัย; ผศ.ดร. ปัทมา ลงกานี; รศ.ดร.เกริก ภิรมย์โสภา (no named Thai CUDA book found; blogs only — remixman.net / BUA Labs not used)
- 54-gpu-memory-hierarchy.md — จันทนา; ปัทมา; เกริก (memory hierarchy + GPU bandwidth)
- 55-tensor-cores.md — จันทนา; ปัทมา; เกริก (historical: NVIDIA tensor cores / Volta implicit; Google TPU named as alternative)
- 56-multi-gpu-scaling.md — จันทนา; ปัทมา; เกริก
- 57-why-matrix-multiply-reshaped-chip-design.md — จันทนา; เกริก; ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*; สุพจน์ เฮงพระพรหม; นวลวรรณ สุนทรภิษัช; รศ.ดร.วฤษาย์ ร่มสายหยุด (NN layer = matrix multiply)
- 58-systolic-arrays.md — จันทนา; ปัทมา; เกริก; ทรงพล (historical: Google TPU / MXU)
- 59-quantization-mixed-precision.md — สุพจน์; นวลวรรณ; วฤษาย์ (NN numerics); ทรงพล (area/power of arithmetic circuits)
- 60-sparsity-in-hardware.md — สุพจน์; นวลวรรณ; วฤษาย์; จันทนา; เกริก (historical: NVIDIA Ampere Sparse Tensor Cores)
- 61-interconnect-at-datacenter-scale.md — โอภาส เอี่ยมสิริวงศ์, *เครือข่ายคอมพิวเตอร์และการสื่อสาร*; จตุชัย แพงจันทร์ และ อนุโชต วุฒิพรพงษ์, *เจาะระบบ Network*; ภัทรสินี ภัทรโกศล, *เครือข่ายคอมพิวเตอร์*; จันทนา
- 62-where-it-s-headed.md — ทรงพล; จันทนา; เกริก; โอภาส

### 98-timeline + about

- 98-timeline.md — อ่านเพิ่ม omitted (no single named Thai computing-timeline textbook verified; Wikipedia / untitled lecture notes not used)
- about.md — created from content/about.md; attribution table + TRANSLATIONS.md Thai paragraph; Nayana Hettiarachchi = แนวคิดและแรงบันดาลใจ; ทีม Grok (Grok, Lucas, Benjamin, Harper) = authorship. No Thai-lit section.

### Chapters with none verified

- 53–56: no named Thai CUDA / GPU-programming textbook found after WebSearch (reuse architecture trio instead)
- 98-timeline: no single Thai timeline source — อ่านเพิ่ม omitted on purpose
- (53–62 still each have at least one verified named Thai work)

### Vision widen + close (2026-09-06 evening, Mira)

- 64-who-decides-the-wire.md — already done (prior); not redone
- 66-wartime-crypto.md — already done (prior); not redone
- 67-privacy-consent-identity-cyber.md — translated from EN; draft:false; อ่านเพิ่ม: วรเศรษฐ สุวรรณิก *วิทยาการรหัสลับ*; ผศ.ดร. ชาญศักดิ์ ศรีสวัสดิ์สกุล *วิทยาการเข้ารหัสลับและเทคโนโลยีบล็อกเชน*; ปริญญา หอมเอนก *Strategy to Cybersecurity 4.0* (Chula OPAC); ผศ.ดร. จรวย สาวิถี *ความมั่นคงของเครือข่ายคอมพิวเตอร์* (MSU ebook)
- 68-visions-that-shipped.md — translated from EN; draft:false; อ่านเพิ่ม omitted (no verified Thai Cisco/Gates/Jobs/Bezos/Musk seed literature; GNU+Linus already credited in 23)
- 69-platform-synthesis.md — translated from EN; draft:false; อ่านเพิ่ม: ณัฐโชติ พรหมฤทธิ์; อาณัติ รัตนถิรกุล; โอภาส เอี่ยมสิริวงศ์; สุพจน์ เฮงพระพรหม (layer books already verified in project)

### Optional learning paths (content.th/paths/)

- _index.md, crypto-wartime.md, who-runs-the-internet.md, find-then-talk.md, privacy-identity-consent.md, visions-that-shipped.md — full Thai thin indexes from EN content/paths/; draft:false

### Phase 1 + 63 distill

- 01–04, 63 — already draft:false and match EN distill (spot-checked; not rewritten this pass)

## In progress

(none)

## Remaining

(none — 67–69 + content.th/paths/ complete 2026-09-06)

---
title: "De la magistrala ISA la PCI și la PCIe"
weight: 35
date: 2026-01-01
draft: false
phase: "5 — Magistralele și arhitectura sistemului"
series_index: 34
tags: []
summary: "Dezaxarea a omorât magistrala paralelă lată; serialul punct-la-punct e cum am scăpat"
image_prompt: "Timeline infographic: ISA → PCI → PCIe evolution with bandwidth numbers, clean historical technical infographic style"
video_prompt: "20-second animation: parallel bus wires struggling with skew, morphing into serial PCIe lanes, clean motion graphics"
schematics: "Diagram: parallel bus signal skew illustration + PCIe differential signaling diagram"
---

Capitolul 31 a numit plafonul: fiecare dispozitiv concurează pentru aceleași fire. ISA, apoi PCI, apoi PCIe e ingineria din jurul acestui plafon — nu un catalog de magistrale, o succesiune de constrângeri. Surpriza de la final: trecerea la *serial* (mai puține fire) a învins rămânerea la paralel (mai multe fire).

## ISA: paralelul lat, pe ceas comun

Materialul PCI-SIG despre 30 de ani de I/O plasează pe linia timpului, înainte de PCI, magistrala „ISA, 8 -> 16 bits @ 8-10 MHz (from PC-AT)”, apoi Micro Channel (MCA, „16/32 bits, 10 MHz”), Extended ISA („32b @ 8-10 MHz”) și VESA („32b @ 25-40 MHz”), iar debutul PCI în 1992; pe axă apar anii 1981, 1987, 1988 și 1992 (PCI-SIG, „The History of PCI IO Technology: 30 Years of PCI-SIG Innovation”, webinar actualizat 23.03.2023, slide „PCI – Debuts in 1992”; [pcisig.com/.../30 Years…](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf), accesat 2026-11-05). ISA (*Industry Standard Architecture*) e magistrala paralelă clasică a PC-ului: multe linii de date, câte un bit pe fiecare, eșantionate pe același ceas.

Ceasul și lățimea ISA de pe această pagină (8–10 MHz, de la 8 la 16 biți odată cu PC-AT) vin doar din slide-ul PCI-SIG de mai sus. <!-- NEVERIFICAT: IBM PC/AT Technical Reference (bitsavers/archive.org 500/503; pe box nu există o copie locală). Cifra exactă de ceas a AT-ului nu este dată separat de intervalul PCI-SIG. -->
<!-- NEVERIFICAT: mecanismul fizic al dezaxării (skew) ca „lungimi și capacități diferite pe fire” e explicație pedagogică; nu am un primar deschis care să îl formuleze astfel pentru ISA. -->

Intuiția paralelă e: mai multe fire ⇒ mai multă lățime de bandă. La ceasuri modeste, da. Când crești ceasul, aceeași dezaxare fixă între linii mănâncă marginea de timp până când receptorul nu mai poate eșantiona toți biții pe aceeași muchie. Acesta e un plafon fizic, nu un truc ratat.

## PCI: spațiu de manevră, nu evadare

PCI-SIG datează debutul PCI în 1992 și se prezintă ca organizație „Established in 1992” (ibid., slide-uri de introducere și „PCI – Debuts in 1992”). Același material rezumă anii 1992–2003 ca epoca „PCI and PCI-X”, cu rate pe magistrala paralelă (32b, apoi 32b/64b, apoi PCI-X) tot pe modelul de slot partajat (ibid., slide „PCI and PCI-X: 1992–2003”). PCI a consolidat o industrie fragmentată (ibid., „PCI successful in consolidating a fragmented industry…”).

A rămas o magistrală paralelă partajată. A cumpărat spațiu de manevră față de ISA, nu o arhitectură nouă.

## PCIe: a părăsit firele partajate

PCI Express apare în materialul PCI-SIG ca specificație debutată în 2003: soluția e „a Link-based interconnect”, cu compatibilitate software față de PCI ca să facă tranziția fezabilă, și cu punți PCIe-la-PCI pentru platformele de trecere (ibid., „The BIG Transition: PCI Express® Specification Debuts in 2003”). UTCN notează introducerea sub numele „Third Generation I/O” (3GIO) în 2002 și faptul că PCIe a înlocuit PCI și PCI-X; topologia e comutată, fiecare placă legată la un comutator prin fire dedicate, nu printr-o magistrală partajată (UTCN, „C13. PCIe overview”, [elupu.utcluj.ro/.../C12_pciexpress_rom.pdf](https://elupu.utcluj.ro/wp-content/uploads/2024/06/C12_pciexpress_rom.pdf), accesat 2026-11-05).

Un *lane* este perechea de transmisie și recepție: „Perechea de transmisie și recepție împreună se numește lane” (UTCN, C12, ibid.); PCI-SIG descrie semnalizarea ca „Differential, full-duplex” (PCI-SIG, 30 Years, slide „The BIG Transition…”). Lane-urile se grupează în legături mai late (PCI-SIG FAQ Gen 5: un Link PCIe are 1, 2, 4, 8, 12, 16 sau 32 de Lane-uri; [pcisig.com/faq](https://pcisig.com/faq?keys=5.0), accesat 2026-11-05). Dispozitivele fără legătură comună nu mai așteaptă arbitrajul unul altuia pe aceleași fire.

## Rate pe generație, din PCI-SIG

FAQ-ul PCI-SIG care explică de ce 8,0 GT/s la Gen 3 „dublează” pe Gen 2 dă tabelul (PCI-SIG, „How does the PCIe 3.0 8.0 GT/s double the PCIe 2.0 5.0 GT/s bit rate?”, [pcisig.com/how-does-pcie-30-8gts-double-pcie-20-5gts-bit-rate](https://pcisig.com/how-does-pcie-30-8gts-double-pcie-20-5gts-bit-rate), accesat 2026-11-05):

| Generație | Rată brută | Lățime de bandă pe interconect (după codare) | Pe lane / direcție | Total pe link x16 |
|---|---|---|---|---|
| PCIe 1.x | 2,5 GT/s | 2 Gb/s | ~250 MB/s | ~8,0 GB/s |
| PCIe 2.x | 5,0 GT/s | 4 Gb/s | ~500 MB/s | ~16,0 GB/s |
| PCIe 3.0 | 8,0 GT/s | 8 Gb/s | ~1,0 GB/s | ~32,0 GB/s |

FAQ-ul precizează: Gen 1–2 folosesc codarea 8b/10b (20% overhead); Gen 3 trece la 128b/130b; iar „Total bandwidth represents the aggregate interconnect bandwidth in both directions” (ibid.).

**Verificare aritmetică (calculul nostru):** \(2{,}5 \times 8/10 = 2{,}0\) Gb/s = 0,25 GB/s pe lane și direcție; \(\times 16 = 4\) GB/s pe o direcție; pe ambele direcții, \(8\) GB/s — coincidență cu coloana „Total… x16” din FAQ. La fel pentru Gen 2: \(5{,}0 \times 8/10 = 4\) Gb/s → 0,5 GB/s → \(\times 16 = 8\) pe o direcție → \(16\) agregat. La Gen 3: \(8{,}0 \times 128/130 \approx 7{,}877\) Gb/s ≈ 0,985 GB/s ≈ ~1,0 GB/s; \(\times 16 \approx 15{,}8\) pe o direcție; agregat ≈ 31,5 ≈ ~32 GB/s.

FAQ-ul Gen 5 adaugă ratele brute ulterioare: Gen 4 la 16,0 Gigabit/s/Lane/direcție; Gen 5 la 32,0; un Link Gen 5 cu 32 de Lane-uri la 32,0 GT/s dă „an effective raw bandwidth of 128.0 Gigabytes/second in each direction simultaneously” (PCI-SIG FAQ, „What bit rates does the PCIe 5.0 specification support…”, [pcisig.com/faq?keys=5.0](https://pcisig.com/faq?keys=5.0), accesat 2026-11-05).

**Notă despre „total”:** webinarul PCI-SIG Rev 6 listează pentru Gen 3 o lățime de bandă x16 „per direction” de 126 Gb/s (≈ 15,75 GB/s, calculul nostru: 126/8), cu nota „bandwidth after encoding overhead” (PCI-SIG, „PCIe Specification Webinar Rev 6”, slide „Evolution of PCI Express® Specification: Speeds and Feeds”; [pcisig.com/.../PCIe_Specification_Webinar_Rev 6_FINAL_0.pdf](https://pcisig.com/sites/default/files/files/PCIe_Specification_Webinar_Rev%206_FINAL_0.pdf), accesat 2026-11-05). FAQ-ul de mai sus raportează ~32 GB/s pe x16 ca *agregat bidirecțional*. Nu e o contradicție de cifră: e o diferență de convenție (o direcție față de ambele). Pe pagină le țin separate.

Capitolul 33 descompune legătura serială: cum arată un transfer pe straturi.

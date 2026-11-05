---
title: "PCIe în detaliu"
weight: 38
date: 2026-01-01
draft: false
phase: "5 — Magistralele și arhitectura sistemului"
series_index: 37
aliases:
  - /posts/33-pcie-deep-dive/
tags: []
summary: "Intenția călătorește în TLP; fiabilitatea și semnalizarea stau dedesubt — stiva care a înlocuit magistrala partajată"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---


Capitolul 32 a explicat *de ce* PCIe a trecut la serial și punct-la-punct. Acesta arată *cum* e structurat un transfer pe acele legături.

## Straturile

Materialul UTCN despre PCIe descrie stiva pe care o traversează un pachet. În formularea cursului, sistemul are cinci straturi logice: Configuration/OS, Software, **Transaction**, **Data link** și **Physical**; pachetele se formează în *transaction layer*, *data link layer* le extinde cu informații de integritate, iar *physical layer* le codează și le transmite pe legăturile seriale — pentru Gen 1/2, cu 8b/10b (UTCN, „C13. PCIe overview”, secțiunile „Straturile arhitecturii PCIe” și „Funcția stratului fizic”; [elupu.utcluj.ro/.../C12_pciexpress_rom.pdf](https://elupu.utcluj.ro/wp-content/uploads/2024/06/C12_pciexpress_rom.pdf), accesat 2026-11-05). Același material spune că Gen 3 folosește 128b/130b, cu un overhead de 1,56%: doi biți de sincronizare la fiecare 128 de biți de date (ibid.).

Același curs notează că specificațiile PCIe definesc arhitectura dispozitivului cu „3 starturi [sic] logice” (ibid.): cele trei de jos, pe care le folosește și engleza cărții:

- **Transaction Layer** — unde se nasc citirea, scrierea, completarea; unitatea e TLP (*Transaction Layer Packet*).
- **Data Link Layer** — integritatea: detectarea erorilor prin CRC; o eroare LCRC la trimiterea unui TLP produce „un eveniment de retransmitere in Data Link Layer” (UTCN, ibid.).
- **Physical Layer** — firele: pachetul este codat (8b/10b la Gen 1/2) și transmis „prin semnale diferentiale pe legatura PCIe” (UTCN, ibid.).

UTCN enumeră și tipurile de pachete TLP și faptul că switch-urile rutează TLP-urile (pe adresă, pe ID, sau implicit pentru anumite mesaje) (ibid., „Tipurile de pachete (TLP) PCI Express”).

## Lane-uri și generații

Un *lane* este perechea de transmisie și recepție (UTCN: „Perechea de transmisie și recepție împreună se numește lane”; ibid.). FAQ-ul PCI-SIG Gen 5 listează lățimile de Link: 1, 2, 4, 8, 12, 16 sau 32 de Lane-uri (PCI-SIG FAQ, [pcisig.com/faq?keys=5.0](https://pcisig.com/faq?keys=5.0), accesat 2026-11-05).

Ratele brute pe Lane și direcție, din același FAQ:

| Specificație | Rată brută pe Lane / direcție |
|---|---|
| PCIe 1.0 | 2,5 Gigabit/s |
| PCIe 2.0 | 5,0 Gigabit/s |
| PCIe 3.0 | 8,0 Gigabit/s |
| PCIe 4.0 | 16,0 Gigabit/s |
| PCIe 5.0 | 32,0 Gigabit/s |

(ibid., „What bit rates does the PCIe 5.0 specification support…”). FAQ-ul adaugă: un Link Gen 5 cu 32 de Lane-uri la 32,0 GT/s dă „128.0 Gigabytes/second in each direction simultaneously” (ibid.).

**Verificare (calculul nostru):** \(32\) Lane-uri \(\times 32{,}0\) GT/s \(\times 128/130\) biți utili / 8 = \(32 \times 3{,}9385 \approx 126{,}03\) GB/s pe direcție. FAQ-ul spune 128,0 GB/s „raw”; diferența e că „raw” din fraza Gen 5 nu scade încă overhead-ul 128b/130b, pe când webinarul Rev 6 listează explicit „bandwidth after encoding overhead” (PCI-SIG, Webinar Rev 6, slide Speeds and Feeds: Gen 5 x16 per direction = 504 Gb/s ≈ 63 GB/s după overhead; [pcisig.com/.../PCIe_Specification_Webinar_Rev 6…](https://pcisig.com/sites/default/files/files/PCIe_Specification_Webinar_Rev%206_FINAL_0.pdf), accesat 2026-11-05). Pe pagină: 128 GB/s e cifra FAQ pentru 32 Lane-uri *raw*; 63 GB/s e cifra webinar pentru x16 *după* overhead.

Pentru Gen 1, UTCN dă „Viteza inițială de 2,5 Gb/s oferă o lățime de bandă nominală de aproximativ 250 MB/s în fiecare direcție pe fiecare lane” (UTCN C12, ibid.) — aceeași aritmetică \(2{,}5 \times 0{,}8 / 8 = 0{,}25\) GB/s = 250 MB/s.

## De ce contează pentru un fabric personalizat

O placă FPGA pe fabric de memorie trebuie să trăiască în această stivă: să formeze TLP-uri pe care *root complex*-ul și celelalte *endpoint*-uri le acceptă, și să lase IP-ul stabilit să gestioneze fiabilitatea de link și stratul fizic. UTCN descrie *Root Complex*, *Switch*, *Endpoint* și *Bridge* ca elementele topologiei (ibid., „Topologia PCI Express”). Peer-to-peer pe TLP-uri între endpoint-uri (fără CPU pe calea de date) e ideea pe care capitolul 37 o duce mai departe la GPUDirect.

**Ieșire:** *PCI Express Base Specification* (PCI-SIG) — primarul viu pentru lane-uri, TLP-uri și stiva pe straturi; e versionat (Base Spec, nu o lucrare înghețată). Cifrele de pe această pagină vin din FAQ-urile și webinarele publice PCI-SIG și din cursul UTCN, nu din textul Base Spec (care nu a fost deschis; e disponibil doar membrilor PCI-SIG).

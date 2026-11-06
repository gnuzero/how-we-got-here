---
title: "Magistralele de memorie"
weight: 40
date: 2026-01-01
draft: false
phase: "5 — Magistralele și arhitectura sistemului"
series_index: 39
aliases:
  - /posts/34-memory-buses/
  - /posts/39-memory-buses/
tags: []
summary: "DDR a cumpărat lățime de bandă; latența primului bit abia s-a mișcat — băncile și canalele ascund așteptarea"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (capitolele 32–33) e calea către dispozitivele de extensie. Magistrala de memorie e calea care hrănește efectiv CPU-ul — DRAM-ul din capitolul 10 — iar evoluția ei e o negociere continuă între lățime de bandă, latență și putere. Numele generațiilor nu e povestea. Despicarea dintre cele trei, da. Decalajul care rămâne e subiectul din capitolul 35, „Zidul memoriei”.

## Double Data Rate: ambele fronturi, nu neapărat un ceas dublu

Numele standardelor JEDEC spune mecanismul: *Double Data Rate*. Comunicatul JEDEC din 25 septembrie 2012 anunță publicarea inițială a standardului sincron DDR4 (Double Data Rate 4), JESD79-4 (JEDEC, „JEDEC Announces Publication of DDR4 Standard”, 25 septembrie 2012; [jedec.org/news/pressreleases/jedec-announces-publication-ddr4-standard](https://www.jedec.org/news/pressreleases/jedec-announces-publication-ddr4-standard), accesat 2026-11-05). Standardul însuși, deschis în această sesiune, notează că semnalul de mască a datelor `DM_n` „is sampled on both edges of DQS” (JEDEC, *DDR4 SDRAM*, JESD79-4, septembrie 2012, descrierea pinului DM_n/DBI_n; [jedec.org/sites/default/files/docs/JESD79-4.pdf](https://www.jedec.org/sites/default/files/docs/JESD79-4.pdf), accesat 2026-11-05). Transferul pe ambele fronturi ale strobe-ului de date e deci în specificație, nu doar în nume.

Pentru DDR4, standardul o spune direct: arhitectura 8n prefetch „is combined with an interface designed to transfer two data words per clock cycle at the I/O pins” (JEDEC, JESD79-4, §3.2 „Basic Functionality”, p. 9, ibid.). <!-- NEVERIFICAT: aceeași regulă pentru DDR1 (JESD79) nu este citată; JESD79 (DDR1) nu a fost deschis. -->

## Bandwidth-ul a urcat; latența primului bit, mult mai puțin

### DDR4 (JESD79-4)

Comunicatul JEDEC din 2012 fixează rata pe pin pentru DDR4 între 1,6 giga-transferuri pe secundă și un obiectiv maxim inițial de 3,2 giga-transferuri pe secundă, și notează că DDR3 depășise deja ținta sa originală de 1,6 GT/s (JEDEC, comunicat DDR4, 25.09.2012, ibid.). Arhitectura e „8n prefetch with two or four selectable bank groups”, astfel încât activări, citiri, scrieri sau *refresh* pot fi în curs în grupuri de bănci distincte (ibid.). Standardul JESD79-4 confirmă: DDR4 e configurat intern ca șaisprezece bănci (4 bank groups × 4 bănci) pentru x4/x8, respectiv opt bănci (2 bank groups × 4) pentru x16, și folosește arhitectura 8n prefetch; alimentarea e \(V_{DD} = V_{DDQ} = 1{,}2\,\mathrm{V} \pm 0{,}06\,\mathrm{V}\) (JEDEC, JESD79-4, 2012, §3.2 „Basic Functionality”, p. 9, și descrierea pinilor VDD/VDDQ, ibid.).

### DDR5 (JESD79-5)

Comunicatul JEDEC din 14 iulie 2020 anunță publicarea JESD79-5 DDR5 SDRAM. DDR5 „is expected to be launched at 4.8 Gbps (50% higher than DDR4’s end of life speed of 3.2 Gbps)” (JEDEC, „JEDEC Publishes New DDR5 Standard…”, 14 iulie 2020; [jedec.org/news/pressreleases/jedec-publishes-new-ddr5-standard-advancing-next-generation-high-performance](https://www.jedec.org/news/pressreleases/jedec-publishes-new-ddr5-standard-advancing-next-generation-high-performance), accesat 2026-11-05). Același text spune că standardul dublează *burst-length*-ul la BL16 și numărul de bănci la 32 (de la 16), și că DIMM-ul DDR5 are „two 40-bit fully independent sub-channels on the same module”; \(V_{DD}\) scade de la 1,2 V (DDR4) la 1,1 V (ibid.).

**Atenție la cifra de lansare:** 4,8 Gb/s este rata de *lansare* anunțată în comunicatul din 2020, nu o viteză maximă; pe această pagină este singura cifră DDR5 luată din JEDEC (ibid.). Modulele mai rapide de pe piață apar mai jos, din ghidul Micron.

### Ce spun modulele de pe piață

Ghidul Micron pentru module DRAM listează, între altele, module SODIMM DDR4/DDR5 între 3200 și 5600 MT/s, module UDIMM DDR5 la 5600 MT/s și CUDIMM DDR5 între 5600 și 8000 MT/s, la 1,1 V pentru liniile DDR5 din tabel (Micron, *DRAM Module Quick Reference Guide*, Rev. M 03/26; [micron.com/.../dram-module-reference-guide.pdf](https://www.micron.com/content/dam/micron/global/public/products/memory/dram-modules/broad-product/dram-module-reference-guide.pdf), accesat 2026-11-05). Acestea sunt oferte de produs, nu definiția standardului; le cităm ca ilustrare a gamei, nu ca înlocuitor al JESD79.

## Paralelism ca să ascunzi un acces lent

Un **canal** e o cale independentă de controler — cererile concurente nu trebuie să stea una în spatele celeilalte. Comunicatul DDR5 face explicit pasul următor pe modul: două subcanale de 40 de biți, pe același DIMM (JEDEC, 2020, ibid.). În interiorul unui canal, **băncile** și *bank groups* (JESD79-4, 2012; comunicatul DDR4, 2012) permit ca o bancă să termine (sau să facă *refresh*) în timp ce alta primește o cerere nouă. Același tipar, la altă scară, față de ierarhia din capitolul 10: agregatul rămâne mare chiar dacă un singur acces nu s-a făcut mai rapid.

Un DIMM e pachetul fizic — cipuri pe o placă cu conector standard pe margine — deci capacitatea e „câte sloturi, ce densitate”, nu o reproiectare a magistralei (Micron, ghid module, form factor-ele UDIMM/SODIMM/RDIMM etc., ibid.).

## Legătura cu zidul memoriei

Lățimea de bandă de vârf a urcat odată cu generațiile (1,6 → 3,2 GT/s ca obiectiv DDR4; lansare DDR5 la 4,8 Gb/s — JEDEC 2012 și 2020). Latența până la primul bit e altă fizică (citirea sarcinii din celula condensator, din capitolul 10) și e tema din capitolul 35. Magistrala de memorie ascunde așteptarea cu paralelism; nu o anulează.

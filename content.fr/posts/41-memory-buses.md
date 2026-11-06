---
title: "Buses mémoire"
weight: 41
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 40
aliases:
  - /posts/34-memory-buses/
  - /posts/39-memory-buses/
  - /posts/40-memory-buses/
tags: []
summary: "DDR a acheté de la bande passante ; la latence a à peine bougé — banques et canaux cachent l'attente"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe est le chemin vers les périphériques d'extension. Le bus mémoire est celui qui nourrit réellement le CPU — la DRAM — et son évolution est une négociation permanente entre bande passante, latence et puissance. Les noms de génération ne sont pas l'histoire. Le partage entre ces trois axes l'est.

## Les deux fronts, pas une horloge plus rapide

**DDR** — *Double Data Rate* — transfère sur les fronts montant *et* descendant. Environ deux fois le débit d'un design single-data-rate à la même horloge, sans doubler la fréquence (ni les problèmes d'intégrité de signal qui suivent). JEDEC, annonçant DDR4 (JESD79-4) : « Synchronous DDR4 (Double Data Rate 4) » ; l'architecture « is an 8n prefetch with two or four selectable bank groups », combinée à une interface qui transfère deux mots de données par cycle d'horloge aux broches I/O. ([JEDEC, publication DDR4, 25 sept. 2012](https://www.jedec.org/news/pressreleases/jedec-announces-publication-ddr4-standard))

## La bande passante a grimpé ; la latence du premier bit, non

Chaque génération DDR a relevé la bande passante de pointe, surtout via des I/O plus rapides. JEDEC fixe pour DDR4 un débit par broche « 1.6 giga transfers per second to an initial maximum objective of 3.2 giga transfers per second », avec des *bank groups* permettant « separate activation, read, write or refresh operations underway in each unique bank group ». ([ibid.](https://www.jedec.org/news/pressreleases/jedec-announces-publication-ddr4-standard))

DDR5 pousse le parallélisme plus loin sur le module. Le *Micron DDR5 Key Module Features Technical Brief* : « A standard DDR5 module has two independent subchannels » ; « each subchannel allows for 32 data I/Os with a BL of 16 resulting in 64-byte payloads » — les sous-canaux indépendants « increase concurrency and support better scheduling from the memory controller ». ([Micron, DDR5 Key Module Features Tech Brief](https://my.avnet.com/wcm/connect/69a0d62b-5651-4e24-acb5-304daa61a873/DDR5-Key-Module-Technical-Brief.pdf?MOD=AJPERES&attachment=false&id=1601388707554)) Micron résume aussi, côté produit : « up to 2X the effective bandwidth compared to its predecessor DDR4 ». ([Micron DDR5 SDRAM](https://www.micron.com/products/dram/ddr5-sdram))

Ce que les chiffres d'affiche cachent : la *latence* d'accès brute — requête jusqu'au premier bit — a beaucoup moins bougé que la bande passante. La DRAM est devenue bien meilleure une fois le flux démarré, et seulement un peu meilleure à l'attente avant. C'est le décor du prochain chapitre. Autre métrique, autre physique (lecture de charge, cellules condensateur).

## Parallélisme pour cacher un accès lent

Un *canal* est un chemin de contrôleur indépendant — des requêtes concurrentes n'ont pas à s'aligner les unes derrière les autres. Dans un canal, *ranks* et *banks* / *bank groups* (JEDEC ci-dessus) laissent une banque finir (ou rafraîchir) pendant qu'une autre prend une nouvelle requête. Assez d'accès indépendants en chevauchement, et le débit *agrégé* reste élevé même si aucun accès isolé n'est devenu plus rapide. Voilà pourquoi l'organisation existe : pas un catalogue de fonctions DIMM, une façon de cacher la latence que le prochain chapitre nomme mur.

Un DIMM est le package physique — puces sur une carte avec connecteur de bord standard — donc la capacité se lit « combien de slots, quelle taille », pas une refonte du bus.

Les deux prochains chapitres : ce qui arrive quand cette négociation ne suffit plus — le mur mémoire, et son cousin côté calcul, le mur de l'horloge.

Ensuite : [Le mur mémoire]({{< relref "42-the-memory-wall" >}}).

## Sources

- JEDEC — publication DDR4 / JESD79-4 (25 sept. 2012) : <https://www.jedec.org/news/pressreleases/jedec-announces-publication-ddr4-standard>
- Micron, DDR5 Key Module Features Technical Brief (deux sous-canaux indépendants, 32 data I/Os) : <https://my.avnet.com/wcm/connect/69a0d62b-5651-4e24-acb5-304daa61a873/DDR5-Key-Module-Technical-Brief.pdf?MOD=AJPERES&attachment=false&id=1601388707554>
- Micron DDR5 SDRAM (bande passante effective) : <https://www.micron.com/products/dram/ddr5-sdram>

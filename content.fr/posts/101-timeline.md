---
title: "Chronologie"
weight: 101
date: 2026-01-01
draft: false
phase: "Reference"
series_index: 100
aliases:
  - /posts/98-timeline/
tags: ["timeline", "reference", "history"]
summary: "Une chronologie condensée du calcul mécanique aux mécanismes d'attention modernes"
---

# Chronologie

Jalons majeurs couverts par cette série. Chaque date renvoie au chapitre FR qui la cite ; les désaccords de sources y restent côte à côte.

## Fondations mécaniques et électromécaniques

- **1794** — Première grande ligne du télégraphe optique de Chappe (Paris–Lille) ; BnF et CNAM divergent sur les kilomètres (≈230 vs ≈250) — détails dans [Comment le message a voyagé]({{< relref "03-how-the-message-travelled" >}}).
- **1801 / 1804** — Mécanique Jacquard : brevet CNAM / Fondation Napoléon du **23 décembre 1801** ; succès commercial daté **1804** par le Science Museum Group — suite dans [Le métier Jacquard]({{< relref "06-jacquard-loom" >}}).
- **1822** — Babbage annonce la Difference Engine (note RAS, 14 juin 1822) — [Les moteurs de Babbage]({{< relref "05-babbage-engines" >}}).
- **Années 1830** — Babbage conçoit l'Analytical Engine (store + mill) ; arrêt de construction No. 1 : Science Museum **1833** / CHM **1832**, financement coupé **1842** (CHM) — [Les moteurs de Babbage]({{< relref "05-babbage-engines" >}}).
- **1843** — Notes d'Ada Lovelace sur l'Analytical Engine (schéma des nombres de Bernoulli) — [Le métier Jacquard]({{< relref "06-jacquard-loom" >}}) (Menabrea / Lovelace).
- **1937–1941** — Shannon (relais ↔ logique, 1937/1940) ; Zuse Z3 (1938–1941) — [Relais et logique électromécanique]({{< relref "09-relays-and-electromechanical-logic" >}}).

## Tubes à vide

- **1906–1908** — Audion de Lee de Forest (diode 1906 ; triode brevetée 1908) — première amplification électronique largement utilisée. ([Wikipedia — Audion](https://en.wikipedia.org/wiki/Audion)) ; principe de commutation développé dans [L'ère des tubes à vide]({{< relref "10-the-vacuum-tube-era" >}}).
- **1943–1945 / 1946** — Colossus (Mark 1 fin 1943 / début 1944 ; Mark 2 juin 1944) — [Crypto de guerre]({{< relref "73-wartime-crypto" >}}) ; ENIAC annoncé **14 février 1946** — [L'ère des tubes à vide]({{< relref "10-the-vacuum-tube-era" >}}) (Penn / ARL / Smithsonian divergent sur kW et tubes).
- **1945** — *First Draft* von Neumann / EDVAC (**30 juin 1945**) — [L'ère des tubes à vide]({{< relref "10-the-vacuum-tube-era" >}}).

## Transistor et circuits intégrés

- **1947–1948** — Transistor à contacts ponctuels (Bell Labs, 16 décembre 1947 ; annonce 30 juin 1948) — [Pourquoi le transistor devait arriver]({{< relref "11-why-the-transistor-had-to-happen" >}}) ; [Du BJT au MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet" >}}).
- **1958–1959** — Circuit intégré : Kilby (1958) et Noyce (1959). ([Wikipedia — Integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit))
- **1959–1960** — MOSFET (Atalla / Kahng) — [Du BJT au MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet" >}}).
- **1965 / 1975** — Observation de Moore (1965) ; révision vers un doublement ≈ tous les deux ans (1975) — [La loi de Moore]({{< relref "58-moore-s-law" >}}).

## Processeurs et architecture

- **1971** — Intel 4004 (15 novembre 1971) — [Mainframes, mini, micro]({{< relref "25-mainframes-to-minicomputers-to-microprocessors" >}}) (108 kHz musée vs \(t_{cy}\) datasheet côte à côte).
- **Années 1970–1980** — Débats RISC / CISC — [La scission x86 vs RISC]({{< relref "26-the-x86-vs-risc-split" >}}).
- **Années 1980–1990** — Pipeline, caches, superscalaire, out-of-order — [Pipeline]({{< relref "20-pipelining" >}}), [Caches]({{< relref "22-caches" >}}), [Out-of-order]({{< relref "23-out-of-order-execution" >}}), [Superscalaire / multicœur]({{< relref "24-superscalar-multicore" >}}).
- **Années 2000** — Multicœur après le mur de fréquence — [Le mur de la vitesse d'horloge]({{< relref "43-the-clock-speed-wall" >}}) ; [Superscalaire / multicœur]({{< relref "24-superscalar-multicore" >}}).

## Couches logicielles

- **Années 1950–1960** — Batch → temps partagé → OS — [Batch et naissance de l'OS]({{< relref "28-batch-processing-and-the-birth-of-the-operating-system" >}}) ; Multics dès 1965 — [Temps partagé et lignée Unix]({{< relref "29-time-sharing-and-the-unix-lineage" >}}).
- **1969–1970s** — Lignée Unix (après retrait Bell Labs de Multics en 1969 ; CACM 1974) — [Temps partagé et lignée Unix]({{< relref "29-time-sharing-and-the-unix-lineage" >}}).
- **1983–1991** — Projet GNU (Stallman, 1983) et noyau Linux (Torvalds, 1991) — [Le mouvement GNU et Linux]({{< relref "30-the-gnu-movement-and-linux" >}}).
- **Années 1990–2000** — Mémoire virtuelle, containers, isolation moderne — [Mémoire virtuelle]({{< relref "31-virtual-memory-and-multitasking" >}}) ; [Containers]({{< relref "32-containers-and-modern-os-isolation" >}}).

## Réseaux

- **1969** — Premiers nœuds ARPANET — [ARPANET et la commutation de paquets]({{< relref "46-arpanet-and-packet-switching" >}}).
- **1972–** — CYCLADES / Pouzin (IRIA) — datagrammes et internetworking, en parallèle d'ARPANET — [ARPANET]({{< relref "46-arpanet-and-packet-switching" >}}).
- **1973–** — Ethernet (Metcalfe & Boggs, Xerox PARC) — [Ethernet]({{< relref "47-ethernet-and-the-local-area-network" >}}).
- **1974 / 1983** — Papier Cerf & Kahn ; flag day TCP/IP sur ARPANET (**1er janvier 1983**) — [TCP/IP]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}).
- **1978–2012** — Minitel / Télétel (décision 1978 ; ouverture Vélizy 1981 ; fermeture **30 juin 2012**) — [Qui décide du fil]({{< relref "72-who-decides-the-wire" >}}).
- **Années 2000–** — Réseau datacenter, RDMA, fabrics — [Datacenter et RDMA]({{< relref "49-datacenter-networking-and-rdma" >}}) ; [Interconnect à l'échelle datacenter]({{< relref "69-interconnect-at-datacenter-scale" >}}).

## Matériel et algorithmes IA

- **2004 / 2007** — CUDA (créé 2004, sorti 2007) — [Pourquoi les GPU existent]({{< relref "60-why-gpus-exist" >}}).
- **2017** — Tensor Cores (NVIDIA Volta / V100) — [Tensor cores]({{< relref "63-tensor-cores" >}}).
- **2017** — « Attention Is All You Need » (Vaswani et al.) — [Attention Is All You Need]({{< relref "71-attention-is-all-you-need" >}}).
- **Années 2018–** — Scaling des LLM sur matériel matmul ; chiplets, packaging, sparsité, quantification, multi-GPU — [Pourquoi le produit matriciel a remodelé le design]({{< relref "65-why-matrix-multiply-reshaped-chip-design" >}}) ; [Chiplets]({{< relref "59-chiplets-advanced-packaging" >}}) ; [Sparsité]({{< relref "68-sparsity-in-hardware" >}}) ; [Quantification]({{< relref "67-quantization-mixed-precision" >}}) ; [Multi-GPU]({{< relref "64-multi-gpu-scaling" >}}) ; [Où ça va]({{< relref "70-where-it-s-headed" >}}).

## Le fil continu

**Notre interprétation** : chaque transition majeure de cette chronologie a été poussée par une contrainte physique ou économique qui lie (vitesse, puissance, fiabilité, rendement, bande passante mémoire, énergie par opération). La réponse n'a presque jamais été « pousser plus fort la même approche » ; c'était un changement de structure ou de niveau d'abstraction. Ce motif est le vrai sujet de la série — voir aussi [Synthèse plateforme]({{< relref "76-platform-synthesis" >}}).

## Sources

- Chapitres FR reliés ci-dessus (citations primaires y restent)
- Wikipedia — Audion ; Integrated circuit (Kilby 1958 / Noyce 1959)

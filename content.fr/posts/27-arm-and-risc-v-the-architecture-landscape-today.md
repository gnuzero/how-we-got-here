---
title: "ARM et RISC-V : le paysage d'architectures aujourd'hui"
weight: 27
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 26
aliases:
  - /posts/20-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/25-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/26-arm-and-risc-v-the-architecture-landscape-today/
tags: []
summary: "Après le bureau x86, le combat a basculé vers la puissance et la licence — ARM a gagné le mobile ; RISC-V mise sur l'ouvert"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

Le combat x86-contre-RISC a surtout réglé bureau et serveur à la fin des années 1990. La concurrence n'a pas cessé — elle a déménagé. Mobile, embarqué et bordure se soucient plus des watts que du pic monofil, et le *modèle économique* autour d'une ISA s'est révélé aussi important que l'encodage.

## ARM : licencier l'ISA, ne pas construire la fab

ARM Holdings conçoit l'ISA et la licencie — cœurs prêts à fabriquer, ou licences d'architecture qui laissent une entreprise dessiner son propre cœur compatible ARM (le silicium Apple est l'exemple le plus visible de la seconde voie). Le modèle a répandu l'ISA chez de nombreux fabricants sans qu'ARM tienne une fab.

Techniquement, ARM entre dans l'ère mobile déjà réglé pour l'efficacité énergétique — decode simple de lignée RISC rencontrant, pour la première fois à l'échelle de masse, un marché qui tient à la performance par watt. **Notre interprétation** : ce n'était pas de la chance ; des décennies de cette discipline de conception croisent les appareils sur batterie.

## RISC-V : ouvert plutôt que licencié

RISC-V commence comme projet de recherche à UC Berkeley en mai 2010 — Krste Asanović et les doctorants Yunsup Lee et Andrew Waterman, dans le Parallel Computing Laboratory dont David Patterson est directeur. Le premier rapport technique de l'ISA utilisateur paraît en mai 2011. ([RISC-V International — About / History](https://riscv.org/about/) ; [Waterman, Lee, Patterson & Asanović, EECS-2011-62](https://www2.eecs.berkeley.edu/Pubs/TechRpts/2011/EECS-2011-62.pdf)) La Foundation RISC-V est lancée en 2015 ; RISC-V International Association est incorporée en Suisse en mars 2020. ([ibid.](https://riscv.org/about/))

RISC-V International se présente comme « the global non-profit home of the open standard RISC-V Instruction Set Architecture (ISA) » : ISA et extensions ratifiées **royalty-free** et ouvertes — « anyone, anywhere can benefit from the IP contributed and produced by RISC-V ». ([RISC-V International — About](https://riscv.org/about/)) Implémenter un cœur sans négocier avec un vendeur qui contrôle l'ISA : cela compte surtout là où la personnalisation profonde ou le coût de licence ISA nul est le point — embarqué, accélérateurs avec instructions custom sur une base RISC-V.

## Même leçon, une couche plus bas

Carte grossière (**notre interprétation** du paysage commercial, pas un classement de parts de marché mesuré ici) : x86 tient encore beaucoup du bureau et du serveur par inertie de compatibilité ; ARM tient le mobile, avec des percées serveur et laptop ; RISC-V est plus tôt commercialement, et croît surtout là où la flexibilité sans royalties bat une pile logicielle mature.

Le motif du chapitre précédent revient : le gagnant d'un segment n'est pas toujours la « meilleure » ISA isolée — c'est celle dont l'économie colle à ce que le segment achète. ARM a gagné le mobile sur les watts *et* un modèle de licence que les fabricants de téléphones pouvaient personnaliser. RISC-V mise sur « libre et ouvert » pour un ensemble croissant de cas. Atteindre l'échelle x86 ou ARM reste ouvert.

{{< lab type="mini-cpu" >}}

Ensuite : [Traitement par lots et naissance de l'OS]({{< relref path="28-batch-processing-and-the-birth-of-the-operating-system" lang="en" >}}).

## Sources

- RISC-V International — About / History : <https://riscv.org/about/>
- Waterman et al., EECS-2011-62 : <https://www2.eecs.berkeley.edu/Pubs/TechRpts/2011/EECS-2011-62.pdf>
- Manuel d'ISA RISC-V (spécification vivante) : <https://riscv.org/specifications/>

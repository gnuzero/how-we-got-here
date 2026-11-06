---
title: "La rupture x86 contre RISC"
weight: 26
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 25
aliases:
  - /posts/19-the-x86-vs-risc-split/
  - /posts/24-the-x86-vs-risc-split/
  - /posts/25-the-x86-vs-risc-split/
tags: []
summary: "RISC était plus propre sur le papier — le verrouillage logiciel et la traduction en µops ont gardé x86 au sommet"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

Les philosophies CISC et RISC ont un nom. Ce chapitre est ce qui s'est passé quand elles se sont affrontées commercialement — et pourquoi l'ISA « plus propre » n'a pas simplement gagné.

## L'argument RISC

Début des années 1980 : RISC comme réaction à la complexité CISC — travaux Berkeley vers SPARC, Stanford vers MIPS, travaux IBM qui nourrissent POWER/PowerPC. Patterson et Ditzel formulent le dossier : un jeu d'instructions réduit peut gagner en performance réelle, en surface et en temps de conception. ([Patterson & Ditzel, « The Case for the Reduced Instruction Set Computer », *Computer Architecture News*, 1980](https://dl.acm.org/doi/10.1145/641914.641917))

La thèse empirique : beaucoup d'ops CISC complexes sont peu utilisés dans le code compilé, alors que le matériel de decode qu'elles exigent brûle du silicium et complique les pipelines déjà vus dans cette phase. Réduire l'ISA à des instructions simples, de longueur fixe, uniformes ; dépenser le silicium en registres, pipelines plus rapides, meilleurs caches.

MIPS, SPARC et PowerPC ont tous été livrés. Un temps, ils battent x86 sur les benchmarks de calcul pur, surtout stations et serveurs.

## Pourquoi x86 a gardé le plancher

L'avantage de x86 n'a jamais été l'élégance — c'était le logiciel déjà posé sur la compatibilité IBM PC. Une fois ce standard de bureau établi, une base installée énorme ne tournait que sur x86. La rétrocompatibilité devient un fossé : les nouvelles puces doivent exécuter les anciens binaires, donc l'ISA ne peut pas être redessinée proprement à la RISC — seulement étendue, verrue après verrue, pendant qu'Intel puis AMD rendent l'*implémentation* rapide malgré la surface.

La résolution réelle : le x86 moderne n'exécute pas les ops CISC directement dans le cœur hors ordre. Un decode traduit chaque instruction x86 en une ou plusieurs **micro-opérations** (µops) de format fixe — style RISC — et *celles-là* passent par les stations de réservation, le ROB et les unités d'exécution. Le manuel d'optimisation Intel décrit un « in-order issue front end » avec des decodeurs qui fournissent des micro-ops au « out-of-order execution core », puis une « in-order retirement unit ». ([Intel® 64 and IA-32 Architectures Optimization Reference Manual, doc. 356477](https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf)) Dehors : compatible CISC. Dedans : pipeline style RISC sous une couche de traduction.

## Le motif à retenir

**Notre interprétation** : les ISA gagnantes se gagnent rarement sur le seul mérite technique. Compatibilité, verrouillage d'écosystème et échelle de fabrication battent régulièrement une architecture plus propre sur le papier. La même dynamique revient avec le modèle de licence ARM contre l'ISA ouverte RISC-V — le *modèle économique* autour d'un jeu d'instructions peut compter autant que l'encodage.

{{< lab type="mini-cpu" >}}

Ensuite : [ARM et RISC-V]({{< relref "27-arm-and-risc-v-the-architecture-landscape-today" >}}).

## Sources

- Patterson & Ditzel 1980 : <https://dl.acm.org/doi/10.1145/641914.641917>
- Intel Optimization Reference Manual 356477 : <https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf>

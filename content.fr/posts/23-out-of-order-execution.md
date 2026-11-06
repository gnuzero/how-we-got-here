---
title: "Exécution hors ordre"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 22
aliases:
  - /posts/16-out-of-order-execution/
  - /posts/21-out-of-order-execution/
  - /posts/22-out-of-order-execution/
tags: []
labs: ["mini-cpu"]
summary: "Tomasulo 1967 ; Smith & Pleszkun 1988 — exécuter dès que les opérandes sont prêts, retirer dans l'ordre architectural"
image_prompt: "Diagram of Tomasulo reservation stations and ROB, clean textbook schematic"
video_prompt: "20-second animation: instructions waiting on operands then firing out of program order, ROB committing in order"
schematics: "Diagram: reservation station + common data bus + reorder buffer"
---

Un pipeline in-order se bloque dès qu'une instruction attend la mémoire. L'idée hors ordre : **exécuter dès que les opérandes sont prêts**, sans forcément respecter l'ordre du programme — puis **publier** les résultats dans l'ordre architectural, pour que exceptions et écritures restent correctes.

## Tomasulo, IBM System/360 Model 91 (1967)

Robert Tomasulo décrit, pour l'unité flottante du System/360 Model 91, « a simple common data busing and register tagging scheme which permits simultaneous execution of independent instructions while preserving the essential precedences inherent in the instruction stream ». Le *common data bus* (CDB) « improves performance by efficiently utilizing the execution units without requiring specially optimized code » ; le matériel « looking ahead about eight instructions » optimise localement l'exécution. ([Tomasulo, « An Efficient Algorithm for Exploiting Multiple Arithmetic Units », *IBM Journal of Research and Development* 11(1), janv. 1967 — PDF bitsavers](https://www.mirrorservice.org/sites/www.bitsavers.org/pdf/ibm/IBM_Journal_of_Research_and_Development/111/tomasulo.pdf))

Les *reservation stations* retiennent l'opération et les *tags* des opérandes manquants. Quand un résultat apparaît sur le CDB avec son tag, les stations actives qui matchent le capturent. ([ibid.](https://www.mirrorservice.org/sites/www.bitsavers.org/pdf/ibm/IBM_Journal_of_Research_and_Development/111/tomasulo.pdf)) **Notre interprétation** : le *renaming* de registres est déjà là — les tags disent *qui* produit la valeur, pas *quel* registre architectural.

## Reorder buffer : Smith & Pleszkun (1988)

Exécuter hors ordre crée un problème : une exception peut laisser un état incompatible avec le modèle séquentiel. Smith et Pleszkun définissent une interruption *précise* si l'état sauvé correspond à « a sequential model of program execution where one instruction completes before the next begins ». Parmi leurs cinq solutions, le *reorder buffer* laisse les instructions terminer dans n'importe quel ordre, puis « reorder them before they modify the process state » : quand l'entrée en tête du buffer est valide et sans exception, « the results are written into the registers ». ([Smith & Pleszkun, « Implementing Precise Interrupts in Pipelined Processors », *IEEE Trans. Computers*, mai 1988 — PDF UC Davis](https://american.cs.ucdavis.edu/academic/readings/papers/smithpleszkun.pdf))

## Front-end Intel : micro-ops

Les manuels d'optimisation Intel décrivent un « in-order issue front end that fetches instruction streams from memory, with four instruction decoders to supply decoded instruction (micro-ops) to the out-of-order execution core », puis un cœur superscalaire hors ordre et une « in-order retirement unit ». ([Intel® 64 and IA-32 Architectures Optimization Reference Manual, doc. 356477](https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf)) **Notre interprétation** : le front-end reste ordonné ; le désordre vit entre decode et retire.

Ensuite : [Superscalaire et multicoeurs]({{< relref "24-superscalar-multicore" >}}).

## Sources

- Tomasulo 1967 (bitsavers) : <https://www.mirrorservice.org/sites/www.bitsavers.org/pdf/ibm/IBM_Journal_of_Research_and_Development/111/tomasulo.pdf>
- Smith & Pleszkun 1988 (PDF) : <https://american.cs.ucdavis.edu/academic/readings/papers/smithpleszkun.pdf>
- Intel Optimization Reference Manual 356477 : <https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf>

---
title: "Hiérarchie mémoire GPU"
weight: 62
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 61
aliases:
  - /posts/54-gpu-memory-hierarchy/
  - /posts/60-gpu-memory-hierarchy/
  - /posts/61-gpu-memory-hierarchy/
tags: []
summary: "Des milliers de threads forcent la bande passante plutôt que la DDR — la HBM empile la mémoire à côté du calcul"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

Le mur mémoire a nommé le retard de latence DRAM sur le calcul — l'industrie a poursuivi la *bande passante* là où la latence restait têtue. Nulle part cette réponse n'est plus lourde de conséquences que pour la mémoire GPU : le débit parallèle des chapitres SIMT / warps crée un appétit que la DDR classique ne peut pas nourrir.

## Pourquoi les GPU s'étouffent sur une mémoire style CPU

Un CPU exécute un nombre modeste de flux d'instructions ; les caches absorbent souvent le working set. Un GPU peut avoir des milliers de threads sur beaucoup de SM qui veulent de la mémoire à la fois. Le cache on-chip aide, mais la demande agrégée de bande passante dépasse dramatiquement un sous-système mémoire CPU à puissance comparable — la contrainte qui a forcé une autre réponse physique.

## HBM : empiler à côté du die

High Bandwidth Memory est « a computer memory interface for 3D-stacked synchronous dynamic random-access memory (SDRAM) », avec empilement vertical via *through-silicon vias* (TSV) et packaging sur interposeur silicium (2.5D) ou stacking 3D ; la largeur de bus est de « 1024 bits per stack ». ([Wikipedia — High Bandwidth Memory](https://en.wikipedia.org/wiki/High_Bandwidth_Memory)) Combiné à cette interface très large, cela livre bien plus de bande passante qu'une DDR équivalente — payé dans le packaging avancé du chapitre chiplets. HBM et die de calcul GPU partagent typiquement un interposeur silicium : la même famille de packaging, appliquée ici pour mettre la mémoire *à côté* du calcul.

Exemple produit : le GPU NVIDIA A100 « has 40 GB of high-speed HBM2 memory with a class-leading 1555 GB/sec of memory bandwidth ». ([NVIDIA A100 Tensor Core GPU Architecture](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf))

## La hiérarchie à l'intérieur du GPU

Au-delà du HBM-vs-DDR, le GPU a sa propre pyramide. Le fichier de registres de chaque SM est le stockage local le plus rapide. La *shared memory* — scratchpad géré par le programmeur sur le SM — « is expected to be much faster than global memory » et sert de mémoire scratchpad logicielle. ([CUDA C++ Programming Guide](https://docs.nvidia.com/cuda/cuda-c-programming-guide/)) Un cache L2 couvre tout le GPU (40 Mo sur A100, selon le même whitepaper). La HBM est le palier « mémoire principale » : bien plus de bande passante que la DRAM CPU, encore plus de latence que tout ce qui est on-chip — le même tradeoff latence-contre-capacité, à l'échelle GPU.

## Nourrir ce qui vient ensuite

Cette architecture existe pour garder un appétit de calcul énorme nourri. Les FLOPS de pointe ne veulent rien dire si les opérandes n'arrivent pas et les résultats ne partent pas. Les tensor cores du prochain chapitre sont la structure de calcul que la bande passante HBM est construite pour alimenter — le cadrage bande passante reste : le pic d'un tensor core ne signifie quelque chose que contre un système mémoire capable de le tenir.

Ensuite : [Tensor cores]({{< relref "63-tensor-cores" >}}).

## Sources

- Wikipedia — High Bandwidth Memory
- NVIDIA — A100 Tensor Core GPU Architecture (whitepaper)
- NVIDIA — CUDA C++ Programming Guide (shared / global memory)

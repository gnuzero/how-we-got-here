---
title: "Cœurs CUDA, warps et occupancy"
weight: 61
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 60
aliases:
  - /posts/53-cuda-cores-warps-and-occupancy/
  - /posts/59-cuda-cores-warps-and-occupancy/
  - /posts/60-cuda-cores-warps-and-occupancy/
tags: []
summary: "Le SIMT se mappe sur SMs et warps — le lockstep gagne jusqu'à la divergence ; l'occupancy cache les stalls mémoire"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

Le chapitre précédent a dit *pourquoi* les GPU parient sur le SIMT massivement parallèle. Celui-ci donne la carte concrète : Streaming Multiprocessors, warps et occupancy — à quel point ce matériel parallèle est réellement utilisé.

## Le Streaming Multiprocessor

Un GPU NVIDIA est un ensemble de *Streaming Multiprocessors* (SM) — chacun une unité parallèle largement autonome avec beaucoup de cœurs CUDA simples (voies de type ALU, délibérément bien moins complexes qu'un cœur CPU out-of-order), un *warp scheduler*, et un fichier de registres partagé par les threads résidents. Des dizaines de SM tournant largement indépendamment font le parallélisme agrégé d'un GPU, contre une poignée de cœurs complexes sur un CPU.

## Warps : le lockstep comme unité

Le multiprocessor « creates, manages, schedules, and executes threads in groups of 32 parallel threads called warps ». ([CUDA C++ Programming Guide — SIMT Architecture](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#simt-architecture)) Un warp est la granularité où le SIMT est appliqué : les 32 exécutent la *même* instruction au *même* cycle, chacun sur ses propres données. C'est la forme matérielle de « une unité de contrôle partagée, beaucoup de voies ».

Les *thread blocks* regroupent des threads qui s'exécutent sur le même SM et peuvent communiquer via mémoire partagée et barrières ; plusieurs blocks forment une grille. ([Wikipedia — Thread block (CUDA programming)](https://en.wikipedia.org/wiki/Thread_block_(CUDA_programming)))

## Divergence de branche : où le lockstep coûte

« A warp executes one common instruction at a time, so full efficiency is realized when all 32 threads of a warp agree on their execution path. If threads of a warp diverge via a data-dependent conditional branch, the warp executes each branch path taken, disabling threads that are not on that path. » ([CUDA C++ Programming Guide — SIMT Architecture](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#simt-architecture)) Le warp dure aussi longtemps que les deux chemins même si chaque thread n'en a besoin que d'un — taxe directe du même lockstep qui rend le cas non divergent bon marché. Garder les threads d'un warp sur le même chemin est donc une optimisation réelle, pas un goût de style.

## Occupancy : cacher la latence avec du travail prêt

Un SM a des registres et une mémoire partagée finis ; chaque warp résident en consomme une part. L'*occupancy* mesure combien de warps sont résidents et éligibles par rapport à ce que le matériel pourrait supporter. Le toolkit CUDA expose des API de calcul d'occupancy (`cudaOccupancyMaxActiveBlocksPerMultiprocessor`, etc.) pour prédire combien de blocks concurrent un kernel peut tenir. ([CUDA C++ Programming Guide — Occupancy Calculator](https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html#occupancy-calculator)) Une occupancy plus haute aide à cacher la latence mémoire : pendant qu'un warp stall sur un accès lent, le scheduler commute vers un warp prêt et garde les voies occupées.

Ce n'est pas « maximiser et s'arrêter ». Un kernel qui utilise plus de registres ou de shared memory par thread peut lancer moins de warps et finir plus vite si ces ressources réduisent le travail redondant ou le trafic mémoire. Occupancy contre ressources par thread est un vrai tradeoff — visible quand les kernels rencontrent le silicium réel, pas seulement en raisonnement abstrait.

Ensuite : [Hiérarchie mémoire GPU]({{< relref "62-gpu-memory-hierarchy" >}}).

## Sources

- NVIDIA — CUDA C++ Programming Guide (SIMT Architecture ; Occupancy Calculator)
- Wikipedia — Thread block (CUDA programming)

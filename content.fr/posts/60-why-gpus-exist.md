---
title: "Pourquoi les GPU existent"
weight: 60
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 59
aliases:
  - /posts/52-why-gpus-exist/
  - /posts/58-why-gpus-exist/
  - /posts/59-why-gpus-exist/
tags: []
summary: "Le graphisme a fourni une charge embarrassingly parallel — le matériel SIMT a suivi, puis le calcul général a trouvé la même forme"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

Chaque CPU de la phase pipeline suppose des instructions assez indépendantes et imprévisibles pour exiger une machinerie généraliste — prédiction de branche, out-of-order, caches profonds. Les GPU partent d'une autre hypothèse, enracinée dans leur charge d'origine : la *même* opération appliquée indépendamment à un nombre énorme de points de données à la fois.

## Le graphisme a rendu le parallélisme explicite

Un GPU est « a specialized electronic circuit designed for digital image processing and to accelerate computer graphics » ; ils sont « also increasingly being used for artificial intelligence (AI) processing and model training due to linear algebra acceleration ». ([Wikipedia — Graphics processing unit](https://en.wikipedia.org/wiki/Graphics_processing_unit)) Rendre une scène 3D, c'est transformer des millions de sommets et ombrer des millions de pixels — la même maths sur chacun, sans dépendance significative entre pixels voisins. Assez de voies, et ils tournent tous à la fois.

## SIMD / SIMT : une instruction, beaucoup de voies

**SIMD** : « multiple processing elements that perform the same operation on multiple data points simultaneously ». ([Wikipedia — SIMD](https://en.wikipedia.org/wiki/SIMD)) Les GPU implémentent un modèle voisin — **SIMT** (*Single instruction, multiple threads*) : « a single central "control unit" broadcasts an instruction to multiple "processing units" » pour une exécution parallèle synchrone optionnelle ; chaque unité a ses propres données, mais « no PU in the array has a program counter ». ([Wikipedia — Single instruction, multiple threads](https://en.wikipedia.org/wiki/Single_instruction,_multiple_threads))

Le gain est direct : une unité de contrôle partagée pilote beaucoup de voies — gain d'aire et de puissance *pour* le travail embarrassingly parallel same-op-many-data, mauvais ajustement pour le code séquentiel imprévisible. D'où CPU et GPU non interchangeables, et des systèmes réels qui ont typiquement les deux.

## Du graphisme au calcul général

CUDA (Nvidia, créé 2004, sorti 2007) élargit explicitement l'usage des GPU au « general-purpose processing » — IA, calcul scientifique, HPC. ([Wikipedia — CUDA](https://en.wikipedia.org/wiki/CUDA)) L'entraînement et l'inférence de réseaux de neurones sont presque entièrement faits de ce genre de travail matrice/vecteur massivement parallèle et régulier — d'où un matériel né pour le rendu devenu substrat dominant du calcul IA.

Ensuite : [Cœurs CUDA, warps et occupancy]({{< relref "61-cuda-cores-warps-and-occupancy" >}}).

## Sources

- Wikipedia — Graphics processing unit ; SIMD ; Single instruction, multiple threads ; CUDA

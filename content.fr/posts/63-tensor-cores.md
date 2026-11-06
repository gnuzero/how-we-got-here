---
title: "Tensor cores"
weight: 63
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 62
aliases:
  - /posts/55-tensor-cores/
  - /posts/61-tensor-cores/
  - /posts/62-tensor-cores/
tags: []
summary: "Le multiply-accumulate de matrices est devenu l'op IA dominante — le matériel en a fait une primitive de premier rang"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

Les cœurs CUDA sont des voies SIMT généralistes pour un large éventail de travail parallèle. Les tensor cores sont plus étroits : du matériel dédié pour une opération — le multiply-accumulate de matrices — qui domine le calcul des réseaux de neurones modernes. Spécialiser pour cette op bat le même travail fait uniquement sur des cœurs CUDA généralistes.

## Pourquoi le produit matriciel

Couches fully connected, convolutions (reformulées en matmul), et attention dans les transformers se réduisent, au fond, à du multiply-accumulate de matrices — à une échelle où son efficacité domine la performance système. Cette concentration rend le silicium purpose-built rentable.

## Ce qu'un tensor core fait

En 2017, le GPU NVIDIA Tesla V100 « introduced powerful new “Tensor Cores” that provided tremendous speedups for the matrix computations at the heart of deep learning neural network training and inferencing ». ([NVIDIA A100 Tensor Core GPU Architecture](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)) Un tensor core fusionne un multiply-accumulate de matrices de taille fixe — par exemple un produit mixte 4×4×4 par clock dans la génération Volta décrite dans le même whitepaper — comme une opération matérielle plutôt qu'une longue séquence de multiplies et adds séparés sur cœurs CUDA. La fusion coupe le surcoût par op (fetch, decode, routage d'opérandes) relatif à l'arithmétique utile. Les produits plus grands sont tuilés : on alimente des sous-blocs en séquence, on accumule les partiels — le travail de coordination qui fait des kernels deep-learning efficaces un métier à part.

## La précision est couplée au silicium

Les tensor cores tournent souvent le plus efficacement à des précisions plus basses (FP16, BF16, INT8, et de plus en plus FP8). Une arithmétique plus étroite demande moins d'aire et de puissance par op, donc un budget donné packe plus de débit MAC. Un chapitre ultérieur sur la quantification y revient pleinement : la réduction de précision n'est pas un choix logiciel pur — elle est couplée à l'efficacité du matériel MAC sous-jacent à chaque format. A100, par exemple, étend les formats supportés (dont TF32) pour le deep learning et le HPC. ([NVIDIA A100 Tensor Core GPU Architecture](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf))

## Pas la seule réponse

Les tensor cores sont la réponse NVIDIA à l'intérieur d'un GPU autrement généraliste. La phase suivante couvre les tableaux systoliques — le TPU de Google en tête — construits pour le même but matmul, organisés autrement au niveau matériel. Même contrainte ; architecture différente.

Ensuite : [Passage à l'échelle multi-GPU]({{< relref "64-multi-gpu-scaling" >}}).

## Sources

- NVIDIA — A100 Tensor Core GPU Architecture (whitepaper ; introduction Tensor Cores V100 2017 ; formats A100)

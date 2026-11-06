---
title: "La sparsité dans le matériel"
weight: 68
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 67
aliases:
  - /posts/60-sparsity-in-hardware/
  - /posts/66-sparsity-in-hardware/
  - /posts/67-sparsity-in-hardware/
tags: []
summary: "Sauter les MAC à zéro connu — mais seuls les motifs structurés sont bon marché à exploiter pour du matériel MAC dense"
image_prompt: "Diagram of a dense weight matrix vs a 2:4 structured-sparse weight matrix, clean AI accelerator diagram style"
video_prompt: "20-second animation: a dense matrix pruned to a structured 2:4 sparse pattern, hardware skipping zeroed entries, clean technical animation"
schematics: "Diagram: 2:4 structured sparsity pattern + sparse tensor core compute flow"
---

La précision réduite rend chaque opération moins chère. La sparsité est le levier complémentaire : sauter les opérations qui ne contribuent rien — multiplications où un opérande est déjà zéro.

## Pourquoi les réseaux sont souvent sparses

Les réseaux entraînés ont souvent beaucoup de poids près de zéro — dynamiques d'entraînement, ou pruning délibéré qui pousse plus de poids à zéro exact pour un modèle plus petit et moins cher à un petit coût d'accuracy. Zéro fois quoi que ce soit est un no-op ; sauter ce MAC économise du temps et de l'énergie réelle à l'échelle des modèles modernes. NVIDIA le formule ainsi : « the importance of individual weights evolves during the learning process, and by the end of network training, only a subset of weights have acquired a meaningful purpose ». ([NVIDIA A100 Tensor Core GPU Architecture](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf))

## Non structurée vs structurée

La sparsité **non structurée** disperse les zéros arbitrairement. Le matériel matmul dense (tensor cores, tableaux systoliques) est bâti pour du travail régulier ; sauter des zéros arbitraires demande une complexité de contrôle qui peut effacer les gains.

La sparsité **structurée** force un motif friendly pour le matériel. Sur A100, NVIDIA introduit une définition « 2:4 sparse matrix […] that allows two non-zero values in every four-entry vector » ; « Due to the well-defined structure of the matrix, it can be compressed efficiently and reduce memory storage and bandwidth by almost 2x », et « the A100 Sparse Tensor Core doubles math throughput by skipping the zeros ». ([NVIDIA A100 Tensor Core GPU Architecture](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)) Structure prévisible = ce que le matériel spécialisé peut sauter avec une logique de contrôle modeste et régulière.

## Le payoff — et l'écart

NVIDIA annonce jusqu'à 2× de débit mathématique sur ce motif. Le débit *atteint* sur GEMM réels et réseaux bout-en-bout dépend encore des kernels, de la mémoire et du prune/retrain qui préserve l'accuracy — le pic matériel n'est pas le throughput applicatif. Même thème que ailleurs dans la série : une fois qu'on sait quel calcul est structurellement inutile, le silicium peut être bâti pour le sauter — même si le pic annoncé et la production restent distincts.

## Composer avec la précision

Sparsité et précision réduite ne sont pas des alternatives. Les accélérateurs modernes exploitent souvent les deux : MAC à précision basse *et* structurellement sparses — ops moins chères *et* moins nombreuses — dans le même budget d'aire et de puissance.

Ensuite : [Interconnect à l'échelle datacenter]({{< relref "69-interconnect-at-datacenter-scale" >}}).

## Sources

- NVIDIA — A100 Tensor Core GPU Architecture (Fine-Grained Structured Sparsity 2:4)

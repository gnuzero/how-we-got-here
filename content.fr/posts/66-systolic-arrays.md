---
title: "Tableaux systoliques"
weight: 66
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 65
aliases:
  - /posts/58-systolic-arrays/
  - /posts/64-systolic-arrays/
  - /posts/65-systolic-arrays/
tags: []
summary: "Les données pulsent à travers une grille de MAC — spécialiser toute la puce pour le matmul (TPU)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

Les tensor cores sont du matériel matmul spécialisé *à l'intérieur* d'un GPU encore généraliste. Les tableaux systoliques poussent la spécialisation plus loin : une architecture organisée autour du flux de données à travers une grille d'éléments de traitement simples pour la multiplication de matrices. Le TPU (*Tensor Processing Unit*) de Google en est l'exemple shipping le plus en vue. L'idée est plus ancienne : **H. T. Kung** et **Charles E. Leiserson** ont nommé et formalisé les tableaux systoliques pour le VLSI à la fin des années 1970. ([Wikipedia — Systolic array](https://en.wikipedia.org/wiki/Systolic_array))

## Les données circulent ; le calcul se fait en chemin

Un tableau systolique est « a homogeneous network of tightly coupled data processing units (DPUs) called cells or nodes. Each node or DPU independently computes a partial result as a function of the data received from its upstream neighbours, stores the result within itself and passes it downstream ». ([Wikipedia — Systolic array](https://en.wikipedia.org/wiki/Systolic_array)) Chaque cellule fait typiquement un MAC à l'arrivée des données. Le nom évoque délibérément le pouls cardiaque : les données bougent par vagues plutôt que d'être fetchées via un chemin de contrôle central partagé.

## Dataflow à poids stationnaires (TPU)

Sur le TPU de Google, « the Matrix Multiply Unit is the heart of the TPU. It contains 256×256 MACs » en exécution systolique ; « data flows in from the left, and the weights are loaded from the top » — « The weights are preloaded ». ([Jouppi et al., ISCA 2017](https://arxiv.org/pdf/1704.04760.pdf)) Une fois chargés, les poids n'ont pas à être re-fetchés à chaque MAC. Sous la pression de bande passante mémoire déjà nommée dans cette série, cela compte : garder les valeurs réutilisées au site de calcul et couper le mouvement de données — la contrainte à laquelle le design systolique répondait déjà chez Kung et Leiserson.

## Tensor cores GPU vs puce systolique

Les tensor cores siègent dans une architecture SIMT encore généraliste, capable de beaucoup de charges parallèles au-delà du matmul. Une puce à tableau systolique comme un TPU fait un pari plus étroit : organiser *toute* la puce autour d'une multiplication de matrices efficace, avec moins de flexibilité pour le travail qui ne rentre pas dans cette forme. Ni l'un ni l'autre n'est strictement « meilleur » — efficacité sur charges dominées par le matmul contre flexibilité sur un mélange parallèle plus large.

## L'unité matricielle comme cœur spécialisé

Chez Google, l'unité de multiplication matricielle porte le gros du débit matmul, à côté du contrôle, des interfaces mémoire et d'unités pour le reste non-matmul (activations, etc.). Cœur spécialisé plus logique de soutien : motif récurrent des accélérateurs de cette phase. Google a commencé à utiliser des TPU en interne en 2015. ([Wikipedia — Tensor Processing Unit](https://en.wikipedia.org/wiki/Tensor_Processing_Unit))

**Porte de sortie :** H. T. Kung et Charles E. Leiserson, tableaux systoliques pour le VLSI (fin des années 1970 ; forme proche aussi dans Mead & Conway, *Introduction to VLSI Systems*, Addison-Wesley, 1979, selon Wikipedia). ([Wikipedia — Systolic array](https://en.wikipedia.org/wiki/Systolic_array))

Ensuite : [Quantification et précision mixte]({{< relref "67-quantization-mixed-precision" >}}).

## Sources

- Wikipedia — Systolic array ; Tensor Processing Unit
- Jouppi et al., « In-Datacenter Performance Analysis of a Tensor Processing Unit » (ISCA 2017)

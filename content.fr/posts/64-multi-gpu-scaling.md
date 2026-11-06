---
title: "Passage à l'échelle multi-GPU"
weight: 64
date: 2026-01-01
draft: false
phase: "9 — GPUs & Parallel Compute"
series_index: 63
aliases:
  - /posts/56-multi-gpu-scaling/
  - /posts/62-multi-gpu-scaling/
  - /posts/63-multi-gpu-scaling/
tags: []
summary: "Un GPU est fini — l'interconnect entre GPU devient le prochain mur"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean technical animation"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

Un seul GPU a un calcul fini et une HBM finie. Les plus grands modèles d'aujourd'hui ont besoin de beaucoup de GPU — dans un serveur, puis à travers un cluster — et la façon dont ces GPU se parlent décide souvent du débit réel autant que les specs de pointe d'un GPU isolé.

## Découper le travail n'est pas gratuit

Découpes data-parallèles et model-parallèles sont souvent nécessaires. L'efficacité dépend de la vitesse d'échange entre GPU. Si la communication est lente relative au calcul de chaque GPU, les pairs stallent en s'attendant — le mur mémoire, appliqué aux liens GPU-à-GPU au lieu de CPU-à-DRAM.

## Chemins directs dans un serveur

NVLink est un interconnect GPU-à-GPU haute bande passante qui contourne le chemin PCIe médié par le CPU. Sur A100, NVIDIA décrit une troisième génération de NVLink : « twelve » liens « yielding a whopping 600 GB/sec total bandwidth for an entire A100 versus 300 GB/sec for Tesla V100 ». ([NVIDIA A100 Tensor Core GPU Architecture](https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf)) Dans un serveur, NVSwitch transforme cela en all-to-all : chaque GPU atteint chaque autre à bande passante NVLink plutôt que via PCIe et l'hôte. Pour les charges qui échangent constamment de grands gradients, ce chemin direct décide souvent du débit d'entraînement atteint plus qu'un chiffre FLOPS isolé.

## Au-delà d'une boîte

Les grands entraînements traversent beaucoup de serveurs. GPUDirect RDMA cible « Direct communication between GPUs across a cluster » — en éliminant des copies mémoire et le surcoût CPU inutiles entre mémoire GPU et adaptateur réseau. ([NVIDIA GPUDirect Technology](https://developer.download.nvidia.com/devzone/devcenter/cuda/training/GPUDirect_Technology_Overview.pdf)) Même pari « minimiser les hops, maximiser la bande passante directe », maintenant à l'échelle cluster.

## La philosophie que cette série continue de nommer

Chemins GPU-à-GPU directs, moins de hops inutiles, interconnect comme contrainte de premier rang — la même philosophie derrière les fabrics GPU propriétaires à l'intérieur d'une stack vendeur. La phase suivante reprend le fil à vraie échelle datacenter — pas une poignée de GPU dans une boîte, mais des milliers à travers un cluster d'entraînement, câblés pour que le calcul théorique agrégé ne se perde pas dans la coordination.

Ensuite : [Pourquoi le produit matriciel a remodelé le design de puce]({{< relref path="65-why-matrix-multiply-reshaped-chip-design" lang="en" >}}).

## Sources

- NVIDIA — A100 Tensor Core GPU Architecture (NVLink 3e gen ; NVSwitch)
- NVIDIA — GPUDirect Technology Overview (RDMA / élimination des copies)

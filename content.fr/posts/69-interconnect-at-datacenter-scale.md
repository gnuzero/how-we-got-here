---
title: "Interconnect à l'échelle datacenter"
weight: 69
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 68
aliases:
  - /posts/61-interconnect-at-datacenter-scale/
  - /posts/67-interconnect-at-datacenter-scale/
  - /posts/68-interconnect-at-datacenter-scale/
tags: []
summary: "Des milliers de GPU — topologie et all-reduce comptent autant que les FLOPS de pointe d'une puce"
image_prompt: "System diagram of a multi-rack AI training cluster showing a fat-tree network topology, clean datacenter network architecture diagram style"
video_prompt: "25-second animation: a datacenter-scale fat-tree topology with an all-reduce operation propagating gradient data, clean technical animation"
schematics: "Diagram: rail-optimized fat-tree topology + all-reduce ring/tree communication pattern"
---

Le chapitre multi-GPU a couvert le passage à l'échelle dans et à travers quelques serveurs — NVLink, NVSwitch, GPUDirect RDMA. L'entraînement à grande échelle est un autre ordre de grandeur : des milliers à des dizaines de milliers de GPU sur des centaines à des milliers de serveurs. La façon de les câbler compte autant que les specs d'un GPU individuel.

## Le câblage naïf ne scale pas

Connecter chaque serveur à chaque autre fait croître les connexions en quadratique — absurde bien avant des milliers de nœuds. Les vrais clusters utilisent du switching hiérarchique ; la structure choisie décide à la fois de la bande passante atteignable et de *l'uniformité* de cette bande passante sous trafic d'entraînement lourd.

## Fat-tree, réglé pour l'entraînement

Le *fat tree* est « a universal network for provably efficient communication », inventé par Charles E. Leiserson (MIT, 1985) : près du sommet de la hiérarchie, les branches sont « fatter » (plus de bande passante) que plus bas. ([Wikipedia — Fat tree](https://en.wikipedia.org/wiki/Fat_tree)) En pratique : switches feuille près des serveurs, switches spine qui connectent les feuilles — en visant une bande passante de bisection haute (idéalement non oversouscrite) ; les clusters IA réels peuvent encore oversouscrire ou utiliser des variantes *rail-optimized*. Les designs rail-optimized se règlent autour des motifs de communication que les grands jobs d'entraînement génèrent vraiment — pas le trafic datacenter générique.

## L'all-reduce est le motif qui lie

L'entraînement data-parallèle doit synchroniser les gradients sur chaque GPU participant à chaque pas — gradients locaux de chaque tranche de batch, puis combinaison (typiquement moyenne) avant le pas suivant. Les *collective operations* (dont les réductions) sont des briques standard des algorithmes SPMD ; MPI en fournit des réalisations. ([Wikipedia — Collective operation](https://en.wikipedia.org/wiki/Collective_operation)) Cet all-reduce tourne constamment sur un run d'entraînement entier. Son efficacité dépend de la bande passante brute *et* de la topologie : algorithmes en anneau ou en arbre ressentent le câblage physique, pas seulement un pic agrégé théorique.

## La topologie peut battre les fiches techniques

D'excellents GPU sur un fabric mal conçu ou oversouscrit peuvent perdre face à des GPU plus modestes sur un réseau soigneusement rail-optimized — parce que l'all-reduce devient le goulot, pas les FLOPS de pointe d'une puce. Thème de la série : les specs de composant (compte de transistors, horloge, FLOPS de pointe) ne sont qu'une partie de l'histoire. La façon dont les parties sont connectées — des bus d'une puce jusqu'à la topologie d'un cluster d'entraînement — décide souvent de la performance réellement atteinte.

Ensuite : [Où ça va]({{< relref "70-where-it-s-headed" >}}).

## Sources

- Wikipedia — Fat tree (Leiserson 1985) ; Collective operation

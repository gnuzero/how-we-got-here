---
title: "Réseaux de datacenter et RDMA"
weight: 49
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 48
aliases:
  - /posts/42-datacenter-networking-and-rdma/
  - /posts/47-datacenter-networking-and-rdma/
  - /posts/48-datacenter-networking-and-rdma/
tags: []
summary: "Dans un fabric contrôlé, les copies noyau deviennent la taxe — RDMA et topologie rachètent le fil"
image_prompt: "System diagram comparing a traditional TCP/IP data path against an RDMA kernel-bypass data path, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data copied multiple times through the kernel vs a direct RDMA transfer bypassing the CPU, clean comparative animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP kernel-bypass comparison + RDMA verbs data path + fat-tree datacenter topology"
---

TCP/IP est le bon backbone pour un réseau mondial hétérogène et non fiable. Dans un seul datacenter — un propriétaire, distances courtes, fabric conçu — ce même chemin médié par le noyau commence à ressembler à du surcoût pour les charges qui comptent chaque microseconde et chaque octet de bande passante.

## D'où vient le surcoût

Un envoi TCP/IP classique copie les données applicatives dans un buffer noyau, exécute la pile, laisse la NIC transmettre — miroir à la réception. Chaque étape coûte des cycles CPU et, pire pour la latence, de vraies *copies* entre emplacements mémoire. Acceptable pour le web ordinaire. Coûteux pour le HPC ou l'entraînement ML distribué qui échange des gradients plusieurs fois par seconde.

## RDMA : noyau et CPU hors du chemin de données

**RDMA** (*Remote Direct Memory Access*) : accès mémoire direct depuis la mémoire d'un ordinateur vers celle d'un autre « without involving either computer's operating system », pour un accès mémoire réseau à haut débit et faible latence — surtout utile dans les clusters massivement parallèles. ([Wikipedia — Remote direct memory access](https://en.wikipedia.org/wiki/Remote_direct_memory_access)) Même idée que GPUDirect RDMA (chapitre interconnects) — moins de copies, CPU libéré pour le calcul — appliquée entre machines entières, pas seulement entre GPU d'un nœud. NVIDIA documente déjà, pour GPUDirect, « Direct communication between GPUs across a cluster » et l'élimination des copies via mémoire système. ([NVIDIA GPUDirect Technology Overview](https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf))

## Fat-tree : câbler des milliers équitablement

À des milliers de machines, la topologie décide si la bande passante est réelle ou seulement annoncée. Un *fat-tree* structure les commutateurs pour que la capacité scale de façon prévisible vers le haut de la hiérarchie, au lieu de cacher des goulots qui n'apparaissent que sous charge. Les grands clusters d'entraînement sont câblés avec cette délibération — pas par commodité ad hoc.

## Même philosophie que le travail fabric de cette série

Ôter les copies inutiles ; contourner le noyau là où il n'est pas nécessaire ; laisser le matériel déplacer les données aussi directement que la topologie le permet. Ensemble, cela passe le relais aux systèmes distribués de la phase suivante — en commençant par les propres systèmes find-and-talk de l'Internet pré-web.

{{< lab type="vm-terminal" >}}

Ensuite : [Usenet, Archie, Gopher et l'Internet pré-web]({{< relref "50-usenet-archie-gopher-and-the-pre-web-internet" >}}).

## Sources

- Wikipedia — Remote direct memory access
- NVIDIA GPUDirect Technology Overview : <https://developer.download.nvidia.com/devzone/devcenter/cuda/docs/GPUDirect_Technology_Overview.pdf>

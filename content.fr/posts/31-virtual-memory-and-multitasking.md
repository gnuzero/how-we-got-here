---
title: "Mémoire virtuelle et multitâche"
weight: 31
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 30
aliases:
  - /posts/24-virtual-memory-and-multitasking/
  - /posts/29-virtual-memory-and-multitasking/
  - /posts/30-virtual-memory-and-multitasking/
tags: []
summary: "Le temps partagé a besoin d'isolement — la mémoire virtuelle donne à chaque processus l'illusion de posséder la machine"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

Le temps partagé exige que plusieurs processus tournent — apparemment en même temps — sur une machine. Problème immédiat : si chaque processus pouvait lire et écrire n'importe quelle adresse physique, un programme buggé ou malveillant pourrait corrompre les données d'un autre, ou l'OS lui-même. La mémoire virtuelle empêche cela en donnant à chaque processus l'*illusion* de posséder tout l'espace d'adressage, pendant que l'OS gère la vérité en dessous.

## L'illusion centrale

Le concept émerge sous la direction de Tom Kilburn à l'Université de Manchester sur l'**Atlas** : « Virtual memory permitted » d'utiliser disque ou tambour comme extension de la mémoire principale ; Atlas « introduced the concept of “virtual memory” ». ([CHM Timeline — 1962](https://www.computerhistory.org/timeline/1962/)) Multics formalise ensuite un schéma hiérarchique à trois niveaux (mémoire principale, paging device, disque) pour un accès transparent à la mémoire virtuelle. ([multicians.org — History](https://multicians.org/history.html))

Chaque processus voit un espace d'adressage virtuel. Quand il référence une adresse virtuelle, le matériel (MMU) traduit vers une adresse physique via une table de pages que l'OS maintient. Deux processus peuvent tous deux référencer « l'adresse virtuelle 0x1000 » et toucher deux cadres physiques différents.

## Pages, fautes, swap

La mémoire est découpée en pages de taille fixe. La table de pages mappe pages virtuelles → cadres physiques. Toutes les pages virtuelles n'ont pas besoin d'un cadre *en permanence* — marquées « not present », une référence piège l'OS en *page fault*. L'OS peut charger depuis le disque, ou traiter l'accès comme erreur. Le même mécanisme permet le *swapping* sous pression mémoire.

## L'isolement comme sécurité

**Notre interprétation** (mécanisme, pas une garantie absolue contre tous les exploits) : au-delà du multitâche, la traduction est une frontière de sécurité. Un processus n'a pas de *mécanisme* pour adresser la mémoire physique d'un autre — aucune adresse virtuelle valide dans sa table n'y mappe. L'isolement est une traduction d'adresses vérifiée par le matériel, pas une convention.

## Où cela mène

La mémoire virtuelle donne à chaque processus son propre espace isolé — garantie forte, et coûteuse : structures noyau propres, tables de pages propres, coût de commutation de contexte. Les conteneurs (prochain chapitre) demandent : peut-on obtenir *l'essentiel* de l'isolement pratique sans payer un noyau entier par locataire ?

{{< lab type="vm-terminal" >}}

Ensuite : [Conteneurs et isolement OS moderne]({{< relref "32-containers-and-modern-os-isolation" >}}).

## Sources

- CHM Timeline 1962 — Atlas / virtual memory : <https://www.computerhistory.org/timeline/1962/>
- Multicians — History (virtual memory hierarchy) : <https://multicians.org/history.html>

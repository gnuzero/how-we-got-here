---
title: "Caches"
weight: 22
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 21
aliases:
  - /posts/15-caches/
  - /posts/20-caches/
  - /posts/21-caches/
tags: []
summary: "La localité fait marcher la hiérarchie mémoire ; l'associativité et la cohérence sont le prix de la tenir honnête"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

Le chapitre sur la hiérarchie a posé registres, SRAM, DRAM, disque. Le cache est l'endroit où ce compromis porte la performance du CPU. La prémisse est empirique : les programmes réels ont de la **localité**.

## « Slave memory » : Wilkes, 1965

Maurice Wilkes appelle *slave memory* une mémoire rapide qui « automatically accumulates to itself words that come from a slower main memory, and keeps them available for subsequent use without it being necessary for the penalty of main memory access to be incurred again ». ([Wilkes, « Slave Memories and Dynamic Storage Allocation », *IEEE TEC* EC-14(2), 1965 — PDF Cambridge](https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf)) Elle n'est qu'une fraction de la principale : un algorithme câblé doit progressivement réécrire les mots. Dans des conditions favorables, certains « will survive long enough to be used on subsequent occasions and a distinct gain of speed results ». ([ibid.](https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf))

Wilkes donne un *slave* d'instructions de 32 mots sur une mémoire de 64K : le mot d'adresse *r* va dans le registre *r* (mod 32) du *slave*, et les bits de poids fort deviennent une *étiquette* (*tag*) comparée à chaque accès. ([ibid.](https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf)) C'est déjà l'idée : ramener ce dont on a besoin, étiqueter ce qui est là, réécrire si modifié.

## Localité et lignes

Wilkes note que les instructions apparaissent souvent en petites boucles et qu'un *slave* d'instructions peut apporter « a quite appreciable speeding up ». ([ibid.](https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf)) **Notre interprétation** : même logique pour les données — ce qu'on vient de toucher revient ; les voisins arrivent souvent ensuite. D'où le *miss* qui ramène une **ligne** entière.

Sur les microarchitectures Intel documentées, la taille de ligne de cache est de **64 octets** — le document de changements SDM liste « 64-byte cache line size (transfers data up to two lines per sector) » pour NetBurst. ([Intel SDM Documentation Changes, 252046](https://cdrdv2-public.intel.com/819710/252046-sdm-change-document.pdf))

## Où peut vivre une ligne

- **Direct-mapped** — un seul emplacement possible par adresse (l'index décide). Vérification rapide ; conflits quand deux adresses chaudes partagent l'index. Le schéma Wilkes *r* mod 32 est de ce type. ([Wilkes 1965](https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf))
- **Set-associatif** — quelques voies par set ; le tag tranche laquelle.
- **Pleinement associatif** — n'importe quelle ligne, n'importe où.

**Notre interprétation** (vocabulaire pédagogique) : l'adresse se découpe en *offset* (octet dans la ligne), *index* (set) et *tag* (est-ce la bonne ligne ?).

## Cohérence à plusieurs caches

Un cœur, un cache privé : pas de dilemme. Plusieurs caches : deux copies, deux vérités possibles. Sweazey et Smith (1986) placent le protocole « Illinois » défini par Papamarcos & Patel (1984) dans leur classe **MOESI** — « the term "MOESI" is derived from the names of the states » — et montrent comment mapper les états Illinois. ([Sweazey & Smith, ISCA 1986 — PDF Auckland](https://www.cs.auckland.ac.nz/courses/compsci703s1c/resources/Sweazey.pdf)) L'étiquette courante **MESI** suit la même convention d'initiales pour les quatre états Illinois (Modified / Exclusive / Shared / Invalid).

Ensuite : [Exécution hors ordre]({{< relref "23-out-of-order-execution" >}}).

## Sources

- Wilkes 1965 — slave memories : <https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf>
- Intel SDM Documentation Changes (64-byte line) : <https://cdrdv2-public.intel.com/819710/252046-sdm-change-document.pdf>
- Sweazey & Smith 1986 — MOESI / Illinois : <https://www.cs.auckland.ac.nz/courses/compsci703s1c/resources/Sweazey.pdf>

---
title: "Où ça va"
weight: 70
date: 2026-01-01
draft: false
phase: "10 — Modern AI Hardware"
series_index: 69
aliases:
  - /posts/62-where-it-s-headed/
  - /posts/68-where-it-s-headed/
  - /posts/69-where-it-s-headed/
tags: []
summary: "Même motif en avant — chiplets, optique plus près du package, calcul plus près de la mémoire"
image_prompt: "Forward-looking infographic showing chiplet AI accelerators, silicon photonics, and in-memory compute, clean speculative technical illustration style"
video_prompt: "20-second animation: optical interconnect, chiplet assembly, and in-memory compute shown in three panels, clean forward-looking motion graphics"
schematics: "Diagram: silicon photonics transceiver + chiplet AI accelerator package + processing-in-memory block diagram"
---

Cette série a ouvert sur des engrenages et des relais — calcul mécanique et électromécanique, primitif à l'aune moderne, mais la même forme logique (instructions, exécution, état) que chaque arrêt ultérieur a raffinée. Elle se ferme en regardant en avant, pas en arrière : trois directions vers lesquelles le matériel IA bouge activement, chacune une extension d'idées déjà dans cette série. Pas de roadmap inventée — seulement le *genre* de réponse que la colonne vertébrale a déjà enseigné.

## Accélérateurs IA en chiplets

Les chiplets ont répondu au rendement ; la HBM a mis la bande passante à côté du calcul. La combinaison naturelle est les deux : chiplets de calcul désagrégés — parfois spécialisés différemment — plus HBM empilée, liés par interposeur haute densité ou liens de substrat avancé dans un package. Désagréger pour le rendement et la spécialisation ; dépenser le packaging pour que la scission ne devienne pas un nouveau mur d'interconnect. Même motif, appliqué au silicium IA.

## L'optique plus près du package

Les liens courts in-rack restent souvent du cuivre. Rack-à-rack et beaucoup de fabrics leaf–spine IA utilisent déjà de la fibre optique avec des transceivers pluggables. Les SerDes électriques rencontrent encore des limites de portée, puissance et densité. La *silicon photonics* étudie et applique des systèmes photoniques sur silicium, souvent SOI, pour des interconnects optiques « between and within microchips ». ([Wikipedia — Silicon photonics](https://en.wikipedia.org/wiki/Silicon_photonics)) La *co-packaged optics* (CPO) intègre émetteurs/récepteurs optiques avec un ASIC (p. ex. switch) dans un seul package, à la place de modules pluggables en bord de carte — chemins électriques plus courts, moins de puissance SerDes. ([Wikipedia — Co-packaged optics](https://en.wikipedia.org/wiki/Co-packaged_optics)) Pas « introduire la lumière pour la première fois », mais déplacer la conversion là où la bande passante entre GPU et racks est de plus en plus contraignante.

## Processing-in-memory

Le mur mémoire a résonné à travers la HBM et le dataflow à poids stationnaires — minimiser le mouvement, ou l'élargir. Le *processing-in-memory* (PIM / compute-in-memory) va plus loin : « data operations are available directly on the data memory, rather than having to be transferred to CPU registers first », ce qui « may improve the power usage and performance of moving data between the processor and the main memory ». ([Wikipedia — In-memory processing](https://en.wikipedia.org/wiki/In-memory_processing)) Tôt comme technologie largement déployée ; encore une vraie tentative d'attaquer le mur à sa racine plutôt que d'élaborer seulement des hiérarchies autour.

## Le fil continu

Chaque direction est encore le motif de la série : nommer précisément la contrainte qui lie, puis changer la structure plutôt que pousser seulement plus fort. Relais → tubes quand la commutation mécanique liait ; tubes → transistors quand puissance et fiabilité liaient ; scaling single-core → multicœur quand le mur d'horloge liait ; dies monolithiques → chiplets quand le rendement liait. Le mouvement mémoire — pas seulement le débit de calcul — lie les plus grandes charges IA, d'où packaging, optique près du package, et calcul plus près de la mémoire comme réponses vivantes.

Des relais à l'attention : la technologie a changé presque au-delà de toute reconnaissance à chaque pas. La logique d'ingénierie — identifier la vraie contrainte, puis changer l'architecture — non, et il n'y a pas de forte raison d'attendre qu'elle le fasse.

Ensuite : [Attention Is All You Need]({{< relref path="71-attention-is-all-you-need" lang="en" >}}).

## Sources

- Wikipedia — Silicon photonics ; Co-packaged optics ; In-memory processing

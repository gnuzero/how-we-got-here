---
title: "Systèmes temps réel en pratique"
weight: 37
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 36
aliases:
  - /posts/30-real-time-systems-in-practice/
  - /posts/35-real-time-systems-in-practice/
  - /posts/36-real-time-systems-in-practice/
tags: []
summary: "Sense–compute–actuate sur un budget fixe — avionique et contrôle industriel où les astuces de vitesse de la phase CPU deviennent des ennemis du timing"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

Le chapitre précédent a couvert la théorie : échéances dures vs souples, rate-monotonic, pourquoi « rapide » et « temps réel » diffèrent. Ici : où ces garanties sont déployées — et à quoi ressemble construire pour elles.

## Avionique : échéance manquée comme catastrophe

Le contrôle de vol est l'exemple canonique du temps réel dur pour une bonne raison. Une boucle fly-by-wire de stabilisation lit des capteurs, calcule les ajustements de surfaces de contrôle et émet des commandes d'actionneurs sur un cycle fixe et serré. Manquer l'échéance, et la réponse de contrôle peut devenir instable, parfois dans une fenêtre très courte.

Le logiciel avionique civil s'appuie sur des normes comme **RTCA DO-178C**, *Software Considerations in Airborne Systems and Equipment Certification* (13 décembre 2011). La FAA reconnaît DO-178C / EUROCAE ED-12C comme moyen acceptable de conformité pour les aspects logiciels de la certification de type ou de l'autorisation TSO. ([FAA AC 20-115D, 21 juillet 2017](https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-115D.pdf)) Les objectifs d'assurance évoluent avec le niveau logiciel assigné ; l'épine dorsale est la discipline du *pire cas*, pas l'espoir du cas moyen.

## Automatisation industrielle : contrôle continu coordonné

Une ligne de production — bras robotiques, timing de convoyeur, capteurs de contrôle qualité — reprend le même motif en boucle fermée : sense, compute, actuate, répéter, souvent sur un cycle milliseconde. Manquer une échéance ici est en général moins catastrophique qu'en avionique, mais reste grave — une commande de position en retard par rapport à une pièce en mouvement peut signifier collision, pièce lâchée ou dégât sur un équipement coûteux.

## Architecture partagée : boucle fermée

Les deux domaines partagent un motif à nommer : **sense** (état courant depuis les capteurs), **compute** (réponse correcte — souvent un PID ou un algorithme voisin de théorie du contrôle), **actuate** (signal moteur, déflexion de surface), répété sur une période fixe. La garantie temps réel couvre la boucle *entière* bout en bout — latence capteur, calcul et actuation comptent tous contre le même budget. Un algorithme de contrôle fulgurant échoue encore si les E/S capteur ou la communication actionneur injectent un délai imprévisible ailleurs dans la boucle.

## Pourquoi le matériel généraliste ne suffit souvent pas

Les systèmes temps réel tournent fréquemment sur des microcontrôleurs dédiés plutôt que sur des CPU généralistes sous OS généraliste. Architecture plus simple, plus prévisible — souvent sans caches, sans exécution out-of-order, sans prédiction de branche speculative — en échangeant volontairement exactement les techniques de la phase CPU qui rendent le timing *moins* prévisible. Ce que cette phase traite comme un gain de performance est précisément ce qu'un système temps réel dur doit contourner, ou éviter.

## Deux labs, un contraste

Seul chapitre tagué avec les deux labs interactifs, délibérément : le mini-CPU rend tangible le timing d'instruction déterministe et comptable sur matériel simple — pourquoi la simplicité aide la certificabilité. Le terminal VM fait tourner une pile OS généraliste complète — utile pour voir la variance d'ordonnancement et de timing qu'un système temps réel dur est construit pour éliminer.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

Ensuite : [Buses 101]({{< relref "38-buses-101" >}}).

## Sources

- FAA AC 20-115D (reconnaît RTCA DO-178C / EUROCAE ED-12C) : <https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_20-115D.pdf>
- Liu & Layland 1973 (fondements RMS du chapitre précédent) : <https://www.cs.ru.nl/~hooman/DES/LiuLayland.pdf>

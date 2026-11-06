---
title: "Relais et logique électromécanique"
weight: 9
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "Les relais ont prouvé que la logique binaire marche — et que le métal en mouvement ne peut pas suivre"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

Un relais est presque embarrassant de simplicité : un électroaimant, une armature à ressort, des contacts. On alimente la bobine ; l'armature se colle ; les contacts s'ouvrent ou se ferment. Pendant une quinzaine d'années, ce fut le primitif de commutation du calcul.

## Deux métiers pour la même pièce

Dans ce chapitre, un **relais** est un interrupteur : une bobine faible ouvre ou ferme un circuit plus fort, et plus loin il devient brique pour ET, OU et NON. Pour son métier sur une ligne télégraphique, voir [Comment le message a voyagé]({{< relref "03-how-the-message-travelled" >}}).

## Les relais comme logique

Claude E. Shannon, dans sa thèse de master *A Symbolic Analysis of Relay and Switching Circuits* (MIT, signée le **10 août 1937** ; imprimée comme M.S. 1940), pose le problème : dans les circuits de commande — centrale téléphonique automatique, équipements industriels — il faut analyser et *synthétiser* des réseaux de contacts de relais. Sa méthode : chaque circuit est un système d'équations ; le calcul sur ces équations est « exactly analogous to the Calculus of Propositions used in the symbolic study of logic ». ([Shannon, 1940, PDF](https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf), Introduction) Le Tableau I fixe l'analogie série / parallèle / contact inverseur avec la logique propositionnelle. ([Shannon, 1940, Table I](https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf))

Les centrales téléphoniques automatiques étaient déjà pleines de tels réseaux — Shannon les cite comme exemple industriel. ([Shannon, 1940, Introduction](https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf))

Konrad Zuse construit la Z3 entre **1938** et **1941** : elle n'exécute que des séquences fixes d'opérations arithmétiques en virgule flottante, codées sur bande perforée ; « There is no conditional branching ». ([Raúl Rojas, *How to Make Zuse's Z3 a Universal Computer*, 1997/1998](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf)) Rojas montre pourtant qu'une seule boucle de telles instructions peut simuler une machine de Turing à bande bornée — donc la Z3 est, « at least in principle, as universal as today's computers which have a bounded memory size », au prix d'un programme sur bande énorme. ([Rojas, ibid.](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf))

## Pourquoi les relais étaient trop lents

Von Neumann, dans le *First Draft of a Report on the EDVAC* (**30 juin 1945** ; éd. Godfrey), compare explicitement relais et tubes : le temps de réaction pratique d'un relais télégraphique est « of the order of 10 milliseconds … or more » ; des agrégats à tubes ont été trouvés fiables à des délais « as short as a microsecond ». ([von Neumann / Godfrey, *First Draft*](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), §4.3) L'écart n'est pas incrémental : c'est trois ordres de grandeur.

Deuxième problème : les contacts s'usent. Chaque fermeture est du métal sur du métal. Fiabilité et vitesse frappent la même contrainte : des pièces en mouvement.

## Le pont vers l'électronique

**Notre interprétation** : les relais ont prouvé l'architecture — représentation binaire, portes booléennes à partir d'interrupteurs simples, programmes comme données. Ce qu'ils n'ont pas pu prouver, c'est que l'architecture pouvait *courir vite*. Remplacer l'interrupteur mécanique par quelque chose qui change d'état en déplaçant des électrons plutôt que du métal — le tube à vide — au prix d'une puissance et d'une chaleur énormes. Ce compromis est le chapitre suivant.

## Sources

- Claude Shannon, *A Symbolic Analysis of Relay and Switching Circuits* (1940) : <https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf>
- Raúl Rojas, *How to Make Zuse's Z3 a Universal Computer* (1997) : <https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf>
- von Neumann / Godfrey, *First Draft of a Report on the EDVAC* : <https://people.csail.mit.edu/brooks/idocs/JvN.pdf>

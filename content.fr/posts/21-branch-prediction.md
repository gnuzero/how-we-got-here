---
title: "Prédiction de branchement"
weight: 21
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 20
aliases:
  - /posts/14-branch-prediction/
  - /posts/19-branch-prediction/
  - /posts/20-branch-prediction/
tags: []
summary: "Vider le pipeline coûte cher — la prédiction existe pour rendre cela rare"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

Le chapitre précédent a laissé sur la table le coût d'un branchement mal pris : les étages de devant doivent être vidés. La prédiction de branchement est la réponse : deviner direction (et cible) assez tôt pour que le flush soit rare.

## Pourquoi ça compte

James E. Smith pose le problème en 1981 : dans un système haute performance, les branchements conditionnels peuvent rompre le flux d'apport et d'exécution ; on peut prédire et commencer fetch/décode avant de connaître la décision — mais une mauvaise prédiction peut coûter plus cher que d'attendre. ([Smith, « A Study of Branch Prediction Strategies », ISCA 1981 — PDF](https://american.cs.ucdavis.edu/academic/readings/papers/smith-branch.pdf))

## Paris statiques : Stretch, 1959

Avant les tables dynamiques, Stretch parie déjà : l'unité d'instructions « makes the assumption that the branch will not be successful ». ([Bloch 1959](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf)) Smith appelle *statiques* les stratégies qui font la même prédiction chaque fois qu'elles rencontrent une instruction de branchement donnée — Strategy 1 : toujours pris ; Strategy 3 : seulement les branchements arrière. Strategy 1 donne « typically a success rate of over 50% ». ([Smith 1981](https://american.cs.ucdavis.edu/academic/readings/papers/smith-branch.pdf))

## Historique dynamique et compteur sur 2 bits

Strategy 2 de Smith : « Always predict that a branch will be decided as on its last execution » — un bit d'historique. Limite : une décision anormale (sortie de boucle) produit **deux** mauvaises prédictions. ([Smith 1981](https://american.cs.ucdavis.edu/academic/readings/papers/smith-branch.pdf))

Strategy 7 généralise avec des **compteurs** adressés par un hash de l'adresse du branchement : prédire pris si le bit de signe est 0 ; incrémenter / décrémenter selon l'issue. Smith rapporte qu'un compteur sur **2 bits** est souvent plus précis qu'un bit, et qu'élargir au-delà de 2 bits rapporte moins ; parmi les stratégies faisables, Strategy 7 est « probably the best choice based on accuracy, cost, and flexibility ». ([Smith 1981](https://american.cs.ucdavis.edu/academic/readings/papers/smith-branch.pdf))

**Notre interprétation** : le diagramme pédagogique « strongly/weakly taken » des manuels étiquette ce mécanisme de compteur saturant — Smith décrit le compteur, pas ces quatre étiquettes.

## Où fetcher ensuite : le BTB

La direction ne dit pas *où* saute le programme. Lee et Smith (1984) décrivent le *branch target buffer* comme « a small cache memory associated with the instruction fetch stage », dont les entrées retiennent l'adresse d'une instruction déjà exécutée, l'info de prédiction de direction, et « the most recent target address for that branch ». ([Lee & Smith, « Branch Prediction Strategies and Branch Target Buffer Design », *IEEE Computer* 17(1), 1984 — PDF](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/Lee-Smith_Branch-Prediction.pdf))

RISC-V rappelle que le coût d'une mauvaise prédiction est le flush du pipeline. ([RISC-V Unprivileged ISA 20240411, §2.5.2](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf))

Le mini-CPU ci-dessous n'a ni prédicteur, ni pipeline, ni cache — mais tu peux enchaîner une boucle `JZ` et, sur papier, faire avancer un compteur à 2 bits à chaque itération.

{{< lab type="mini-cpu" >}}

Ensuite : [Caches]({{< relref path="22-caches" lang="en" >}}).

## Sources

- Smith — Branch Prediction Strategies (ISCA 1981) : <https://american.cs.ucdavis.edu/academic/readings/papers/smith-branch.pdf>
- Bloch — Stretch (1959) : <https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf>
- Lee & Smith — BTB (1984) : <https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/Lee-Smith_Branch-Prediction.pdf>
- RISC-V Unprivileged ISA 20240411 : <https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf>

---
title: "Chiplets et packaging avancé"
weight: 59
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 58
aliases:
  - /posts/51-chiplets-advanced-packaging/
  - /posts/57-chiplets-advanced-packaging/
  - /posts/58-chiplets-advanced-packaging/
tags: []
summary: "Le rendement chute avec l'aire du die — découper en chiplets et racheter la bande passante avec le packaging avancé"
image_prompt: "Cutaway diagram comparing a monolithic die vs a chiplet package with interposer, clean semiconductor packaging illustration style"
video_prompt: "20-second animation: a monolithic die splitting into chiplets connected via an interposer, yield improving, clean explainer motion graphics"
schematics: "Diagram: monolithic die vs chiplet+interposer cross-section + yield-vs-die-size curve"
---

Quand le scaling dans une géométrie heurte un mur, on change la structure. Les chiplets appliquent ce motif un niveau au-dessus du transistor — pas une nouvelle physique de device, mais une nouvelle réponse à l'assemblage d'une puce entière une fois les dies monolithiques trop grands pour bien rendre.

## Dies monolithiques et mur de rendement

Une puce traditionnelle est une seule pièce de silicium. Tout défaut fatal quelque part ruine le die entier, et la chance d'un tel défaut croît avec l'aire. Wikipedia : un chiplet est un petit CI « designed to be combined with other chiplets on an interposer in a single package » ; parmi les avantages sur un SoC monolithique : « Known good die: chiplets can be tested before assembly, improving the yield of the final device », et « Heterogeneous integration: chiplets can be fabricated with different processes, materials, and nodes ». ([Wikipedia — Chiplet](https://en.wikipedia.org/wiki/Chiplet))

## Découper le silicium, garder la fonction

On découpe ce qui aurait été un grand die en dies plus petits fabriqués séparément, chacun portant une fonction, puis on les reconnecte dans un package avec des interconnects haute densité. Un défaut ne tue que ce petit chiplet. On peut aussi mélanger des nœuds de procédé dans un package — silicium plus ancien et moins cher pour les E/S ; pointe seulement là où la densité de calcul le justifie.

## Le packaging doit racheter le fil

La désagrégation ne marche que si bande passante et latence inter-chiplet restent assez proches des liens on-die. L'*advanced packaging* regroupe multi-chip modules, 3D/2.5D ICs, intégration hétérogène, « several chiplets or dies in a package », et s'assied entre fab et packaging traditionnel. ([Wikipedia — Advanced packaging](https://en.wikipedia.org/wiki/Advanced_packaging)) Sans cette étape, le gain de rendement se paierait par un nouveau mur d'interconnect.

## Même packaging, mémoire de la phase suivante

La même famille de packaging rend possible la HBM : empiler des dies mémoire, les attacher à un die de calcul via un interposeur haute densité. Chiplet compute et HBM sont deux instances d'une contrainte — assez de bande passante entre dies séparés pour que la scission cesse d'être la pénalité de performance.

Ensuite : [Pourquoi les GPU existent]({{< relref "60-why-gpus-exist" >}}).

## Sources

- Wikipedia — Chiplet ; Advanced packaging

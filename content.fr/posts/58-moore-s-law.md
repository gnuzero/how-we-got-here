---
title: "La loi de Moore"
weight: 58
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 57
aliases:
  - /posts/50-moore-s-law/
  - /posts/56-moore-s-law/
  - /posts/57-moore-s-law/
tags: []
summary: "L'observation de Moore était le nombre économique de composants — le compte de transistors grimpe encore ; horloges et coût-par-transistor racontent d'autres histoires"
image_prompt: "Graph infographic: transistor count, clock speed, and cost-per-transistor over time, clean data visualization style"
video_prompt: "15-second animation: three trend lines animating over a timeline from 1970 to 2026, clean data-viz motion graphics"
schematics: "Diagram: three-panel graph — transistor count, clock frequency, cost-per-transistor over time"
---

On déclare sans cesse la « loi de Moore » morte, ranimée, étirée à ce dont l'orateur a besoin. Après les chapitres sur ce que la fabrication a rendu plus dur, il vaut la peine de dire précisément ce que Gordon Moore a observé — et quels trends bundlés sont en fait d'autres contraintes.

## Ce que Moore a réellement écrit

Gordon Moore, dans *Electronics* (19 avril 1965 ; réimpression IEEE souvent citée) : « With unit cost falling as the number of components per circuit rises, by 1975 economics may dictate squeezing as many as 65 000 components on a single silicon chip. » ([Moore, « Cramming more components onto integrated circuits », 1965 / réimpression](https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/moore.pdf))

Wikipedia résume l'observation : en 1965, le nombre de composants par circuit intégré doublait chaque année ; en 1975, Moore révise à un doublement environ tous les deux ans. Ce n'est « not a scientific law » mais une relation empirique. ([Wikipedia — Moore's law](https://en.wikipedia.org/wiki/Moore%27s_law)) Remarquer ce que la claim *n'est pas* : pas une loi de vitesse d'horloge, pas une promesse de performance single-thread, et pas un théorème séparé sur le coût par transistor au-delà du mot « economics » / « unit cost falling ».

## Compte de transistors : encore en hausse

Mesuré comme Moore le formulait — composants (aujourd'hui : transistors) par puce — la tendance a tenu des décennies et grimpe encore, poussée par lithographie et structures de transistor. Les puces high-end modernes portent des milliards de transistors contre environ 2 300 sur l'Intel 4004 cinq décennies plus tôt.

## Vitesse d'horloge : un autre mur

La fréquence d'horloge a grimpé avec le compte de transistors pendant des décennies, puis s'est aplatie vers 2004–2005 — non parce que le scaling de transistors s'est arrêté, mais à cause du mur puissance/thermique (Horowitz ISSCC, chapitre mur d'horloge). Appeler cela « la mort de la loi de Moore » confond deux métriques. Le compte a continué de monter pendant le plateau d'horloge ; l'industrie a dépensé les nouveaux transistors en plus de cœurs et de fonctions spécialisées on-chip.

## Coût par transistor : où le frottement se voit

La moitié économique du cadrage de Moore — composants moins chers à mesure que la densité montait — est là où le frottement de pointe récent est le plus clair. Les outils EUV sont extraordinairment chers ; chaque génération de nœud demande plus d'étapes de procédé élaborées. **Notre interprétation** : pendant des décennies, plus de transistors par wafer ont fait baisser le coût par transistor même quand le coût absolu de la puce tenait ou croissait modestement ; aux nœuds les plus récents, cette relation s'est affaiblie — la densité grimpe encore ; l'amélioration coût-par-transistor n'est plus automatique aux taux historiques.

## Trois métriques, un slogan

Compte de transistors : encore en scaling. Vitesse d'horloge : plate depuis le milieu des années 2000 pour des raisons thermiques connues. Coût par transistor : encore en amélioration absolue sur beaucoup de nœuds, avec un frottement documenté à la pointe. Les traiter comme une seule « loi » cache quelle contrainte cède encore et lesquelles ont forcé les tournants architecturaux de cette phase.

Ensuite : [Chiplets et packaging avancé]({{< relref path="59-chiplets-advanced-packaging" lang="en" >}}).

## Sources

- Moore, « Cramming more components onto integrated circuits » (1965, PDF UT Austin) : <https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/moore.pdf>
- Wikipedia — Moore's law

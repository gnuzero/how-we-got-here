---
title: "Superscalaire et multicoeurs"
weight: 24
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 23
aliases:
  - /posts/17-superscalar-multicore/
  - /posts/22-superscalar-multicore/
  - /posts/23-superscalar-multicore/
tags: []
summary: "L'ILP et la puissance butent — l'industrie élargit le die plutôt que d'accélérer un seul fil"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

Hors ordre, pipelines plus profonds, largeur superscalaire — tout ce qui précède dans cette phase tire plus de parallélisme au niveau instruction (**ILP**) d'un *seul* flot. Au milieu des années 2000, ce levier rencontre un plafond assez dur pour changer de stratégie.

## Deux murs à la fois

Les programmes réels n'offrent pas un travail indépendant illimité. Branches, dépendances de données vraies, latence mémoire : le rendement d'un ROB plus gros, de plus de stations de réservation, d'une issue plus large, diminue. C'est un mur architectural.

En même temps, la puissance dynamique CMOS croît à peu près avec la capacité, la fréquence et le carré de la tension. Mudge écrit l'équation active sous la forme \(P = ACV^{2}f + \ldots\) et note le corollaire : le parallélisme peut réduire la consommation en baissant \(V\) et \(f\). ([Mudge, « Power: A First-Class Architectural Design Constraint », *Computer*, avril 2001](https://tnm.engin.umich.edu/wp-content/uploads/sites/353/2017/12/2001.04.Power-a-First-Class-Architectural-Design-Constraint_Computer.pdf)) Pousser les horloges pour compenser l'ILP qui s'essouffle bute sur la chaleur. Deux plafonds, milieu des années 2000.

## Large plutôt que plus rapide

Le pivot : arrêter de faire faire *plus* à un cœur par cycle ; placer plusieurs cœurs un peu plus simples sur le même die, chacun avec son flot. Le débit de la puce peut continuer à monter alors que complexité et horloge par cœur se stabilisent — *si* le logiciel a du travail parallèle à leur donner.

« Plus rapide » change de sens. Un programme monofil ne gagne pas automatiquement sur huit cœurs plutôt que quatre ; il tourne encore sur un cœur à peu près à la même horloge. **Notre interprétation** : l'ère ILP donnait surtout des gains monofil « gratuits » à chaque génération ; celle-ci exige un logiciel conscient du parallèle.

## Le dossier explicite : Olukotun et al., ASPLOS 1996

Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson et Kunyung Chang, « The Case for a Single-Chip Multiprocessor » (ASPLOS VII, 1996) : dans les technologies avancées, un multiprocesseur monocarte tient dans la même surface qu'un superscalaire large ; sur les applications peu parallèles les performances sont comparables ; avec beaucoup de parallélisme fin *et* grossier, le multiprocessor l'emporte nettement. ([ACM / ASPLOS 1996 — abstract](https://dl.acm.org/doi/10.1145/237090.237140))

Ensuite : [Des mainframes aux microprocesseurs]({{< relref "25-mainframes-to-minicomputers-to-microprocessors" >}}).

## Sources

- Mudge 2001 — \(P \approx ACV^{2}f\) : <https://tnm.engin.umich.edu/wp-content/uploads/sites/353/2017/12/2001.04.Power-a-First-Class-Architectural-Design-Constraint_Computer.pdf>
- Olukotun et al., ASPLOS 1996 : <https://dl.acm.org/doi/10.1145/237090.237140>

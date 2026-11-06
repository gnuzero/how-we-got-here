---
title: "Le mur de l'horloge"
weight: 43
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 42
aliases:
  - /posts/36-the-clock-speed-wall/
  - /posts/41-the-clock-speed-wall/
  - /posts/42-the-clock-speed-wall/
tags: []
summary: "La fréquence a heurté la chaleur — l'industrie est donc allée en largeur (cœurs, puis fabrics) plutôt qu'en horloges plus rapides"
image_prompt: "Graph infographic: CPU clock frequency climbing then flattening around 2005, power density curve rising toward a thermal ceiling, clean data-visualization diagram style"
video_prompt: "20-second animation: a CPU die heating up as frequency is pushed higher, hitting a thermal ceiling, then splitting into multicore, clean technical animation"
schematics: "Diagram: clock frequency vs year graph + power density (P=CV²f) scaling curve + single-core-vs-multicore comparison"
---

Le chapitre précédent était le mur côté mémoire : la latence DRAM qui ne suit plus le CPU. Voici le mur côté calcul, arrivé presque au même moment. Ensemble — pas l'un sans l'autre — ils expliquent pourquoi l'industrie a basculé vers le multicœur, puis vers les fabrics.

## La courbe qui a plié

Horowitz (ISSCC 2014) : « this rapid scaling of clock frequency stopped in the early 2000s, as a result of two factors: First, processors hit the power wall for air cooling […] which is around 100W. Worse still was the fact that voltage scaling also slowed down, since it was no longer possible to scale the threshold voltage due to rising leakage currents. To keep power in check, processor frequencies were reduced, and multiple processors were added to each die. » ([Horowitz, « Computing's Energy Problem… », ISSCC 2014](https://osmarks.net/assets/misc/2014-horowitz.pdf))

## \(P \approx CV^2f\), et le terme tension

Horowitz rappelle la cause sous-jacente de la croissance exponentielle de puissance : « we did not scale power supply voltages at the constant field rate, which Dennard himself reported », et « we scaled clock frequencies faster than dictated by constant-field scaling ». « Because power is \(CV^2F\), and \(C\) scales with technology, power should have become an issue much sooner than it did. » ([ibid.](https://osmarks.net/assets/misc/2014-horowitz.pdf))

Bohr & al. (rétrospective Dennard, 2007) : le scaling idéal de 1974 « ignored the impact of transistor sub-threshold leakage on overall chip power » ; après trente ans, « Due to leakage constraints, it will be difficult to further scale \(V_T\) and thus it will also be difficult to scale operating voltage. » ([Bohr, « A 30 Year Retrospective on Dennard's MOSFET Scaling Paper », 2007](https://users.cs.duke.edu/~lkw34/papers/dennard-ieee2007.pdf)) Chaleur, pas une astuce de circuit manquée.

## Un plafond thermique, même genre que le skew

La puissance qui devient chaleur doit quitter le die, sinon le chip throttle (par design) ou, pire, échoue. Vers le milieu des années 2000, le refroidissement air grand public était déjà près de sa limite utile (~100 W, Horowitz). Pousser les horloges — et la tension qui les accompagne — plus loin voulait dire des densités de puissance que le refroidissement économique ne pouvait plus évacuer. Même catégorie que le skew du bus parallèle : un plafond physique, pas une inefficacité de design qu'on contourne.

## Large plutôt que rapide

Quand le plafond de puissance bloque un cœur unique, on arrête de le rendre plus rapide : on en met plusieurs sur le die, chacun à une horloge plus modeste et plus efficace. Horowitz : la « performance » mesurée en *throughput* « continued to scale, as more cores were added each generation ». ([Horowitz 2014](https://osmarks.net/assets/misc/2014-horowitz.pdf)) Aucun cœur n'a à franchir la ligne thermique qui a arrêté la fréquence.

## Deux murs, un tournant

Le mur mémoire : la latence DRAM perd face au calcul. Le mur de l'horloge : le calcul lui-même heurte la chaleur. Physiques différentes, même décennie. Ensemble ils ont terminé « rendre un cœur plus rapide » comme récit de croissance et forcé « plus de cœurs — et, de plus en plus, déplacer le travail vers du matériel parallèle spécialisé, puis connecter ces unités sans repasser par un CPU généraliste ». Cette dernière clause est le prochain chapitre, puis les GPU et accélérateurs.

Ensuite : [Interconnects at scale]({{< relref "44-interconnects-at-scale" >}}).

## Sources

- Horowitz, « Computing's Energy Problem (and what we can do about it) », ISSCC 2014 : <https://osmarks.net/assets/misc/2014-horowitz.pdf>
- Bohr, « A 30 Year Retrospective on Dennard's MOSFET Scaling Paper », IEEE SSCS Newsletter / 2007 : <https://users.cs.duke.edu/~lkw34/papers/dennard-ieee2007.pdf>

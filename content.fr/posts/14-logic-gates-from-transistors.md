---
title: "Portes logiques à partir de transistors"
weight: 14
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "Le CMOS couple NMOS et PMOS pour qu'une porte au repos n'ouvre aucun chemin statique — la topologie qui a tenu l'échelle"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

Le chapitre précédent nous a laissés avec deux types de MOSFET, canal n et canal p. Ici on les met ensemble.

## L'inverseur : la plus petite unité CMOS

Un inverseur CMOS place un transistor pMOS entre l'alimentation et la sortie, et un nMOS entre la sortie et la masse, grilles liées à la même entrée. Entrée haute → nMOS passant, pMOS bloqué → sortie à la masse. Entrée basse → pMOS passant, nMOS bloqué → sortie au rail. Dans chaque état stable, l'un des deux est bloqué — pas de chemin statique alimentation–masse, sauf pendant la brève commutation.

Le fait historique est documenté. Le Computer History Museum écrit que, dans une communication de conférence de **1963**, C. T. Sah et Frank Wanlass (Fairchild R&D) ont montré que des circuits logiques combinant MOS canal p et canal n en configuration complémentaire « drew close to zero power in standby mode ». ([CHM — 1963: Complementary MOS Circuit Configuration is Invented](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/)) Wanlass brevète l'idée : US 3,356,858, « Low stand-by power complementary field effect circuitry », priorité **18 juin 1963**, délivré le **5 décembre 1967**. ([Google Patents — US3356858A](https://patents.google.com/patent/US3356858A/en))

## Pourquoi cela résout le problème de puissance

Dans n'importe quel état stable de l'inverseur, un des deux transistors est bloqué : entre alimentation et masse, il n'y a pas de chemin de conduction continu. C'est la logique derrière le titre du brevet (*low stand-by power*) et l'observation du CHM sur une consommation au repos « close to zero ». La consommation apparaît surtout à la commutation — charge et décharge de la capacité d'entrée de la porte suivante.

L'adoption a été lente. Le CHM note que le CMOS a d'abord eu des limites de performance ; RCA introduit en **1968** les premiers circuits de la famille CD4000 ; les premières applications CMOS à grand volume sont des produits sur batterie (montres numériques) qui ne demandaient pas la vitesse maximale. Vers **1978**, la combinaison d'une lithographie plus fine et du procédé *silicon-gate* rend le CMOS compétitif en performance avec le bipolaire et le MOS conventionnel. Quand on place des centaines de milliers de transistors sur une puce, le CMOS est la meilleure solution pour la densité de puissance. ([CHM — 1963](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/))

## NAND, NOR et complétude fonctionnelle

Une NAND CMOS à 2 entrées met les nMOS en série (les deux hauts pour tirer bas) et les pMOS en parallèle (l'un ou l'autre bas tire haut). NOR miroite cela. Soit NAND, soit NOR, seule, est fonctionnellement complète — on peut reconstruire AND, OR, NOT, donc toute fonction booléenne.

Vérification sur table de vérité (NAND) :

| A | B | A NAND B |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Identités vérifiées ligne à ligne ici : NOT A = A NAND A ; A AND B = (A NAND B) NAND (A NAND B) ; A OR B = (A NAND A) NAND (B NAND B).

Pour NOR, une source historique : en **1913**, Henry M. Sheffer définit une opération « neither-nor » (*rejection*) et montre que la négation et la disjonction s'expriment par elle : ~p = p|p et p∨q = (p|q)|(p|q). ([Sheffer 1913, *Trans. AMS* 14(4), Theorem I — PDF AMS](https://www.ams.org/journals/tran/1913-014-04/S0002-9947-1913-1500960-1/S0002-9947-1913-1500960-1.pdf))

**Essaie maintenant.** Le labo ci-dessous s'ouvre sur une porte AND — bascule les deux entrées et regarde la sortie. NAND et NOR sont les primitives ci-dessus ; AND s'obtient en les composant. Touche la porte avant que le prochain chapitre construise des additionneurs avec elles.

{{< lab type="breadboard" height="700" >}}

## Suite

Les portes ne sont que l'alphabet. Le prochain chapitre les compose en additionneurs et en ALU — et là le délai de propagation ne s'arrête plus à une porte : il s'additionne le long d'une chaîne.

Ensuite : [Des portes à la logique combinatoire]({{< relref "15-from-gates-to-combinational-logic" >}}).

## Sources

- CHM Silicon Engine — CMOS 1963 : <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>
- Google Patents — US 3,356,858 (Wanlass) : <https://patents.google.com/patent/US3356858A/en>
- Sheffer, H. M. — *Trans. AMS* 14(4), 1913 : <https://www.ams.org/journals/tran/1913-014-04/S0002-9947-1913-1500960-1/S0002-9947-1913-1500960-1.pdf>

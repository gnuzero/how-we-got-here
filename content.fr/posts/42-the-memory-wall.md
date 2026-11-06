---
title: "Le mur mémoire"
weight: 42
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 41
aliases:
  - /posts/35-the-memory-wall/
  - /posts/40-the-memory-wall/
  - /posts/41-the-memory-wall/
tags: []
summary: "Vitesse CPU et latence DRAM ont divergé pendant des décennies — les caches cachent l'écart ; ils ne le ferment pas"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown"
---

Le chapitre précédent s'est fermé sur une scission : la bande passante DDR a scalé ; la *latence* DRAM, non. En zoom arrière, cette scission est un écart système qui s'élargit depuis des décennies.

## Exponentielles divergentes

Wm. A. Wulf et Sally A. McKee l'ont nommé en 1994/1995. « The rate of improvement in microprocessor speed exceeds the rate of improvement in DRAM memory speed, each is improving exponentially, but the exponent for microprocessors is substantially larger than that for DRAMs. The difference between diverging exponentials also grows exponentially. » ([Wulf & McKee, « Hitting the Memory Wall: Implications of the Obvious », déc. 1994 / *SIGARCH Comput. Archit. News* 23(1), mars 1995](https://intranet.di.unisa.it/~vitsca/SC-2011/DesignPrinciplesMulticoreProcessors/Wulf1995.pdf))

Ils partent du temps d'accès moyen \(t_{\mathrm{avg}} = p\,t_c + (1-p)\,t_m\) et concluent « that we are going to hit a wall in the improvement of system performance unless something basic changes ». Sous leurs hypothèses (DRAM +7 %/an, microprocesseur ~80 %/an), « the wall is less than a decade away » ; même avec un cache quasi parfait, « in 10–15 years each memory access will cost, on average, tens or even hundreds of processor cycles ». ([ibid.](https://intranet.di.unisa.it/~vitsca/SC-2011/DesignPrinciplesMulticoreProcessors/Wulf1995.pdf)) Pas une nuisance que de meilleures astuces absorbent tranquillement : une limite structurelle.

## Pourquoi la bande passante a bougé et pas la latence

Pas un oubli — de la physique. La latence d'accès DRAM est dominée par la lecture fiable d'une minuscule charge sur un condensateur (cellule 1T1C). Cette lecture ne scale pas comme la commutation de transistors. On peut monter la bande passante *sans* battre cette limite : prefetch plus large, plus de banques / bank groups (JEDEC DDR4), plus de canaux, transfert double data rate. Du débit sans un premier accès plus court. C'est pourquoi les générations DDR ont vendu de la bande passante. La latence est restée têtue.

## Ce que l'écart coûte

Un cœur qui attend des centaines de cycles sur un miss ne calcule pas. La hiérarchie de caches n'est pas un luxe ; c'est le principal pansement industriel sur le mur — garder le working set en SRAM pour que le CPU paie rarement la latence DRAM pleine. L'exécution out-of-order cache une partie du reste, en chevauchant du travail indépendant avec un miss. Ni l'un ni l'autre ne ferme l'écart. Tous deux le cachent pour les programmes cache-friendly ou assez parallèles.

Une mauvaise localité — grandes structures aléatoires, certains graphes, certaines bases — paie encore le mur en entier. **Notre interprétation** de la suite industrielle : c'est une grande part de pourquoi la *bande passante* (pas seulement la capacité) est devenue une cible de design de premier ordre, et pourquoi les hiérarchies mémoire GPU et HBM dépensent coût et complexité pour déplacer des octets même si l'attente du premier bit a à peine bougé. Ensuite : un mur cousin, côté calcul, au même moment historique.

Ensuite : [Le mur de l'horloge]({{< relref "43-the-clock-speed-wall" >}}).

## Sources

- Wulf & McKee, « Hitting the Memory Wall… », CS-94-48 (déc. 1994) / *CAN* 23(1) mars 1995 : <https://intranet.di.unisa.it/~vitsca/SC-2011/DesignPrinciplesMulticoreProcessors/Wulf1995.pdf>
- JEDEC DDR4 (prefetch / bank groups — chapitre précédent) : <https://www.jedec.org/news/pressreleases/jedec-announces-publication-ddr4-standard>

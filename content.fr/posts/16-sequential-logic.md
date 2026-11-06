---
title: "Logique séquentielle"
weight: 16
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "La rétroaction fait une mémoire bistable ; le basculeur D sur front rend le synchrone tractable — jusqu'à ce que setup/hold plafonnent l'horloge"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

Les circuits du chapitre précédent sont combinatoires : la sortie ne dépend que des entrées présentes. Un ordinateur a besoin d'*état* — registres, compteur de programme, contenu mémoire qui survit d'un cycle à l'autre. Cela exige de la rétroaction.

## Mémoire par rétroaction

Croise deux portes NOR (ou NAND) — chaque sortie alimente une entrée de l'autre — et tu obtiens deux états stables. Le circuit reste là où on l'a poussé la dernière fois, tant que l'alimentation est là. C'est de la mémoire au sens physique : bistabilité, pas un « store » abstrait.

Burks, Goldstine et von Neumann citent déjà « the flip-flop or trigger circuit » parmi les formes courantes de stockage dans les circuits électriques. ([Burks, Goldstine, von Neumann, *Preliminary Discussion…*, IAS 1946, §4.1 — transcription UNC](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html))

Un basculeur SR non cadencé est toujours vivant sur ses entrées et a une combinaison interdite. La fiche TI du 74LS74A note que lorsque PRE et CLR sont tous deux bas, les deux sorties sont hautes — configuration « nonstable; that is, it will not persist when either preset or clear returns to its inactive (high) level ». ([TI — SN74LS74A datasheet, SDLS119](https://www.ti.com/lit/ds/symlink/sn74ls74a.pdf))

**Essaie maintenant.** Le labo ci-dessous est encore une porte vivante — bascule les entrées et regarde la sortie changer *tout de suite*. C'est du combinatoire. Ce chapitre, c'est ce qui se passe quand on recâble des portes sur elles-mêmes pour que la sortie *tienne* après le départ de l'entrée.

{{< lab type="breadboard" height="700" >}}

## Le basculeur D : des fronts, pas des niveaux

Un basculeur transparent suit l'entrée tant qu'il est activé. La fiche SN74LS75 le dit : l'information à D « is transferred to the Q output when the enable (C) is high and the Q output will follow the data input as long as the enable remains high » ; quand l'enable tombe, l'information est retenue. ([TI — SN74LS75](https://www.ti.com/lit/ds/symlink/sn74ls75.pdf))

Le basculeur D commandé sur front résout le problème : il échantillonne D à un instant — le front d'horloge. Pour le 74LS74A : les données à D qui respectent le setup « are transferred to the outputs on the positive-going edge of the clock pulse ». ([TI — SN74LS74A](https://www.ti.com/lit/ds/symlink/sn74ls74a.pdf))

**Notre interprétation** : le déclenchement sur front rend le design synchrone tractable — tous les basculeurs se mettent à jour sur le même front ; entre deux fronts, la logique combinatoire a toute une période pour se stabiliser.

## Setup, hold et plafond d'horloge

Autour du front, la fiche 74LS74A impose deux fenêtres : setup *avant*, hold *après*. Passé le hold, « data at the D input may be changed without affecting the levels at the outputs ». Pour SN74LS74A, les conditions recommandées demandent un setup minimum de **20 ns** et un hold minimum de **5 ns**, avec une fréquence d'horloge recommandée de 0 à **25 MHz** ; en commutation typique, f_max vaut typiquement **33 MHz** (minimum 25 MHz). ([TI — SN74LS74A, SDLS119](https://www.ti.com/lit/ds/symlink/sn74ls74a.pdf))

**Notre interprétation** : entre deux basculeurs, la période d'horloge doit couvrir le délai horloge→Q du premier, le délai de la logique entre eux, et le setup du second — d'où un plafond dur sur la fréquence. Le hold, lui, limite le chemin *le plus court* : ralentir l'horloge ne le répare pas.

## Ce que cela débloque

Des registres faits de basculeurs D tiennent un résultat d'un cycle à l'autre. Le prochain chapitre spécialise ce stockage bistable pour la densité — là où SRAM et DRAM divergent.

Ensuite : [Le début de la hiérarchie mémoire]({{< relref "17-the-memory-hierarchy-begins" >}}).

## Sources

- Burks / Goldstine / von Neumann — *Preliminary Discussion…* IAS 1946 : <https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html>
- TI — SN74LS74A (SDLS119) ; SN74LS75 : <https://www.ti.com/lit/ds/symlink/sn74ls74a.pdf> · <https://www.ti.com/lit/ds/symlink/sn74ls75.pdf>

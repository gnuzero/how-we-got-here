---
title: "FinFET vers GAA"
weight: 57
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 56
aliases:
  - /posts/49-finfet-to-gaa/
  - /posts/55-finfet-to-gaa/
  - /posts/56-finfet-to-gaa/
tags: []
summary: "La fuite short-channel a tué le shrink planaire — envelopper la grille (FinFET), puis l'envelopper tout autour (GAA)"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

Le MOSFET planaire — grille, source, drain à plat sur le silicium — a servi pendant des décennies. En rétrécissant (lithographie), le design planaire a heurté un mur que le seul shrink ne corrigeait plus : la grille perdait le contrôle fiable du canal.

## Effets de canal court

Quand la longueur de canal planaire rétrécit, la grille au-dessus du canal a proportionnellement moins d'autorité, et du courant fuit quand le device devrait être off. C'est de la physique, pas un bug de procédé. Passé un point, rétrécir un transistor *planaire* cesse de livrer une commutation propre.

## FinFET : trois côtés de contrôle

Un **FinFET** (*fin field-effect transistor*) est un MOSFET multi-grille où « the gate is placed on two, three, or four sides of the channel or wrapped around the channel » ; le nom vient des « fins on the silicon surface » formées par les régions source/drain. ([Wikipedia — FinFET](https://en.wikipedia.org/wiki/FinFET) ; [Wikipedia — Multigate device](https://en.wikipedia.org/wiki/Multigate_device)) Plus du canal sous influence de grille à longueur égale — ce qui réprime la fuite short-channel qui tuait le shrink planaire.

L'industrie est passée au FinFET en volume au début des années 2010. **Ivy Bridge** (Intel, 2012), die-shrink 22 nm de Sandy Bridge, « is the first Intel product to feature FinFET transistors ». ([Wikipedia — Ivy Bridge](https://en.wikipedia.org/wiki/Ivy_Bridge_(microarchitecture))) Même motif que le pivot multicœur après le mur d'horloge : quand une approche heurte un vrai plafond physique, changer la structure — pas seulement pousser plus fort l'ancienne forme.

**Fil français (recherche).** Wikipedia note que des efforts de développement sur les transistors multi-grilles ont été rapportés notamment par « Grenoble INP » aux côtés d'ETL, Toshiba, Hitachi, IBM, TSMC — la France dans le fil de recherche des MuGFET, sans en faire *le* récit unique. ([Wikipedia — Multigate device](https://en.wikipedia.org/wiki/Multigate_device))

## Gate-All-Around : quatre côtés

L'enveloppement à trois côtés n'est pas le maximum électrostatique. Les devices multi-grilles les plus utilisés sont FinFET et **GAAFET** (*gate-all-around field-effect transistor*) — transistors non planaires / 3D où la grille entoure le canal. ([Wikipedia — Multigate device](https://en.wikipedia.org/wiki/Multigate_device)) Les nœuds de pointe y migrent à mesure que le FinFET lui-même approche des limites pratiques : le même geste planaire→FinFET, une géométrie plus tard.

## Le motif récurrent

Planaire → FinFET → GAA est la leçon de scaling de cette série sous forme device. Murs électriques (short-channel ici), thermiques, de latence — tous finissent par forcer l'architecture, pas seulement un effort plus dur sur le même design. Les chiplets appliquent ce motif un niveau plus haut — pas au transistor, mais à l'assemblage de puces entières.

Ensuite : [La loi de Moore]({{< relref "58-moore-s-law" >}}).

## Sources

- Wikipedia — FinFET ; Multigate device ; Ivy Bridge (microarchitecture)

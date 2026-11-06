---
title: "Photolithographie"
weight: 56
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 55
aliases:
  - /posts/48-photolithography/
  - /posts/54-photolithography/
  - /posts/55-photolithography/
tags: []
summary: "La diffraction force des longueurs d'onde plus courtes — miroirs EUV et plasma d'étain sont ce qui a gardé les features en mouvement"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

Chaque transistor d'une puce moderne — des milliards, plus denses que les labels de nœud ne peuvent honnêtement nommer — doit être *patterné* sur le silicium. La photolithographie est ce patternage.

## Imprimer avec la lumière, puis construire

Enduire le wafer de résine photosensible (*photoresist*) ; éclairer à travers un masque patterné ; changer chimiquement la résine où la lumière frappe pour qu'elle puisse être sélectivement enlevée ou gardée. Gravure, dépôt et dopage utilisent ce motif pour placer les structures de transistor. ([Wikipedia — Photolithography](https://en.wikipedia.org/wiki/Photolithography))

## La diffraction force des longueurs d'onde plus courtes

La taille de feature résolvable est liée à la longueur d'onde : lumière plus courte, motif plus fin. D'où des décennies de descente spectrale — UV visible, puis UV profond (DUV, lasers excimères 248 nm puis 193 nm), puis UV extrême (**EUV**, ~13,5 nm). ([Wikipedia — EUV lithography](https://en.wikipedia.org/wiki/EUV_lithography))

## Pourquoi l'EUV a été exceptionnellement dur

À ces longueurs d'onde, « EUV light is absorbed by glass and air, so instead of using lenses […] mirrors in vacuum would be needed ». ([ibid.](https://en.wikipedia.org/wiki/EUV_lithography)) La source de production HVM centre sur « a droplet generator that ejects ~25 μm diameter molten tin droplets » frappés par un système laser CO₂ dual-pulse dans une chambre à vide — plasma d'étain qui émet l'EUV utile. ([ibid.](https://en.wikipedia.org/wiki/EUV_lithography))

ASML Holding (Pays-Bas) est, selon Wikipedia, « the world's only manufacturer of extreme ultraviolet (EUV) lithography machines » pour la production de puces avancées (des prototypes chinois ont été rapportés ailleurs ; ASML reste le fournisseur commercial établi). ([Wikipedia — ASML Holding](https://en.wikipedia.org/wiki/ASML_Holding) ; [Wikipedia — EUV lithography](https://en.wikipedia.org/wiki/EUV_lithography))

Sans ce pas de longueur d'onde, les structures FinFET et Gate-All-Around plus fines du prochain chapitre ne seraient pas producibles à un rendement et un coût acceptables. La diffraction a fixé la contrainte ; plasma d'étain et miroirs ont été l'architecture forcée.

Ensuite : [FinFET vers GAA]({{< relref "57-finfet-to-gaa" >}}).

## Sources

- Wikipedia — Photolithography ; EUV lithography ; ASML Holding

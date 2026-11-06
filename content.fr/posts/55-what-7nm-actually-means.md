---
title: "Ce que « 7 nm » veut vraiment dire"
weight: 55
date: 2026-01-01
draft: false
phase: "8 — Process Nodes & Fabrication"
series_index: 54
aliases:
  - /posts/47-what-7nm-actually-means/
  - /posts/53-what-7nm-actually-means/
  - /posts/54-what-7nm-actually-means/
tags: []
summary: "Les noms de nœud ont cessé de suivre une longueur physique — densité et pitchs sont la physique ; le label est une génération"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

Chaque dispositif silicium plus tôt dans cette série — MOSFET, CMOS, cellules mémoire — vit à une échelle où la précision de fabrication décide de ce qui est possible. Des labels comme « 7 nm » ou « 5 nm » sont traités comme s'ils étaient une seule longueur mesurable sur le transistor. Ils ne le sont plus depuis longtemps.

## Quand le nom était une longueur

Historiquement, le nom de nœud de procédé suivait une dimension réelle — à peu près la longueur de grille minimale d'un MOSFET planaire. Pendant des décennies, un nom de nœud voulait dire quelque chose qu'on pouvait montrer sur le device.

## Pourquoi un seul nombre a cessé de suffire

Selon Wikipedia (*7 nm process*) : « Since at least 1997, the length scale of a process node has not referred to any particular dimension on the integrated circuits, such as gate length, metal pitch, or gate pitch, as new lithography processes no longer uniformly shrank all features on a chip. » ([Wikipedia — 7 nm process](https://en.wikipedia.org/wiki/7_nm_process)) L'article *5 nm process* précise encore que le chiffre du nœud « does not indicate that any physical feature […] is five nanometers in size », et qu'historiquement le nom représentait la longueur de grille avant de s'en écarter ; dans la pratique commerciale, « "5 nm" is used primarily as a marketing term » pour une génération plus dense. ([Wikipedia — 5 nm process](https://en.wikipedia.org/wiki/5_nm_process))

FinFET puis Gate-All-Around (chapitres suivants) font de la longueur de grille *une* dimension parmi plusieurs — hauteur de fin, pitch de fin, pitch de grille, pitch d'interconnect. Deux procédés « 7 nm » ne sont pas la même physique sous le même label.

## Ce qu'est le label maintenant

Un nom de nœud moderne est surtout un marqueur générationnel — « notre prochaine génération plus dense et plus efficace » — pas une spec physique inter-fonderies. La comparaison sérieuse utilise des quantités mesurables indépendamment : pitchs, transistors par mm². Celles-ci montrent souvent le « 7 nm » d'une fonderie plus dense que celui d'une autre, parce que la marque s'est découplée de toute longueur unique.

## Pourquoi l'écart compte

« Le 5 nm de TSMC vs le 5 nm de Samsung » n'est pas une comparaison pomme-pomme parce que les chaînes matchent. L'écart de nommage s'est ouvert à l'ère planaire et s'est élargi une fois l'espace de design devenu multi-dimensionnel. Suite : la lithographie qui peut encore imprimer ces structures, et les géométries de transistor qui ont rendu une seule longueur obsolète.

Ensuite : [Photolithographie]({{< relref "56-photolithography" >}}).

## Sources

- Wikipedia — 7 nm process (nommage ≠ dimension particulière depuis au moins 1997)
- Wikipedia — 5 nm process (label marketing / densité)

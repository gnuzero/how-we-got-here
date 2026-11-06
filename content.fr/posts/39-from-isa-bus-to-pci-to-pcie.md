---
title: "De l'ISA bus au PCI au PCIe"
weight: 39
date: 2026-01-01
draft: false
phase: "5 — The Bus & System Architecture"
series_index: 38
aliases:
  - /posts/32-from-isa-bus-to-pci-to-pcie/
  - /posts/37-from-isa-bus-to-pci-to-pcie/
  - /posts/38-from-isa-bus-to-pci-to-pcie/
tags: []
summary: "Le skew a tué le large bus parallèle ; le série point-à-point est comment on a échappé"
image_prompt: "Timeline infographic: ISA → PCI → PCIe evolution with bandwidth numbers, clean historical technical infographic style"
video_prompt: "20-second animation: parallel bus wires struggling with skew, morphing into serial PCIe lanes, clean motion graphics"
schematics: "Diagram: parallel bus signal skew illustration + PCIe differential signaling diagram"
---

Le plafond du chapitre précédent : chaque périphérique rivalise pour les mêmes fils. ISA, puis PCI, puis PCIe est l'ingénierie autour de ce plafond — pas un catalogue de bus, une séquence de contraintes. La surprise à la fin : passer en *série* (moins de fils) a battu rester parallèle (plus de fils).

## L'intuition parallèle, et où elle casse

ISA (*Industry Standard Architecture*) était un large bus parallèle : beaucoup de lignes de données, un bit chacune, clockées ensemble. PCI-SIG place ISA à « 8 -> 16 bits @ 8-10 MHz (from PC-AT) », puis Extended ISA à 32 bits. ([PCI-SIG, « 30 Years… », 2023](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf))

Plus de fils devrait vouloir dire plus de bande passante. À des horloges modestes, oui. Chaque fil a une longueur et une capacité légèrement différentes, donc les bits n'arrivent pas au même instant — **skew**. À une horloge lente, la variance est une petite fraction de la période. Monter l'horloge, rétrécir la période, et le même skew fixe mange la marge de timing jusqu'à ce que le récepteur ne puisse plus échantillonner chaque bit sur un seul front. Plafond physique, pas une astuce manquée.

## PCI a acheté de la marge, pas une échappée

« PCI – Debuts in 1992 ». Encore un bus parallèle partagé : « Bus-based, multi-drop with multiple bus masters (arbitration) » ; 32 bits @ 33/66 MHz au départ, puis des revisions PCI-X jusqu'en 2003. ([PCI-SIG, ibid.](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf)) Meilleure arbitration, configuration plug-and-play, plus de bande passante pratique — encore sujet au skew quand les horloges montent. De la marge, pas une nouvelle architecture.

## PCIe a quitté les fils partagés

« The BIG Transition: PCI Express® Specification Debuts in 2003 ». Énoncé du problème PCI-SIG : « Continued I/O bandwidth and connectivity demand makes PCI bus untenable » — inefficacité des broches, implications de performance du *bus sharing*. Solution : « PCI Express architecture, a Link-based interconnect » — « Differential, full-duplex signaling at 2.5GT/s », largeurs multiples « x1, x2, x4, x8, x12, x16, x32 », avec « Software compatibility w/ PCI » (pas de compatibilité matérielle). ([PCI-SIG, ibid.](https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf))

Chaque périphérique obtient un lien série point-à-point dédié (une voie, ou un faisceau de voies) vers un commutateur / root complex. Une paire différentielle par direction par voie : rien à maintenir en verrouillage sur une douzaine de fils, donc les horloges par voie peuvent monter bien au-delà de tout bus parallèle. Les voies se regroupent (x1, x4, x8, x16) pour les périphériques qui en ont besoin — un GPU prend souvent x16 parce qu'il déplace bien plus qu'une NIC en x1. Des périphériques sans rapport ne partagent plus les fils, donc n'attendent plus l'arbitration les uns des autres.

Moins de fils physiques. Plus de bande passante atteignable. Le plafond du bus partagé est levé. Le prochain chapitre est comment ces liens série structurent un transfert pour que le reste de la machine puisse encore *signifier* une lecture ou une écriture.

Ensuite : [PCIe deep dive]({{< relref path="40-pcie-deep-dive" lang="en" >}}).

## Sources

- PCI-SIG, « 30 Years of PCI-SIG Innovation » webinar (mis à jour 3.23.2023) — PCI 1992, PCIe 2003, 2.5GT/s, largeurs de voies : <https://pcisig.com/sites/default/files/files/30%20Years%20of%20PCI-SIG%20Innovation%20Webinar_Updated%203.23.2023.pdf>

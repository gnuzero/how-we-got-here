---
title: "Des mainframes aux mini-ordinateurs aux microprocesseurs"
weight: 25
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 24
aliases:
  - /posts/18-mainframes-to-minicomputers-to-microprocessors/
  - /posts/23-mainframes-to-minicomputers-to-microprocessors/
  - /posts/24-mainframes-to-minicomputers-to-microprocessors/
tags: []
summary: "Trois ères de qui possède un ordinateur — institution, département, puis une puce pour tout le monde"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC (phase 1) occupe plus de 1 000 pieds carrés et pèse environ 30 tonnes. ([CHM Timeline — 1946 ENIAC](https://www.computerhistory.org/timeline/1946/)) Un CPU de téléphone le dépasse d'ordres de grandeur sur un bout de doigt. Ce rétrécissement n'est pas un seul saut — trois ères, chacune répondant autrement à : *qui a un ordinateur, et combien en existe-t-il ?*

## Mainframes : une machine, partagée

Années 1950–60 : machines de salle pour universités, entreprises, États — partagées en traitement par lots. L'IBM System/360 (1964) compte au-delà de l'échelle : une *famille* de machines compatibles sur une plage de performances, même logiciel. Séparation délibérée de l'ISA et de la boîte. Gene Amdahl, Gerrit Blaauw et Fred Brooks portent cette architecture. ([Amdahl, Blaauw & Brooks, « Architecture of the IBM System/360 », *IBM Journal of Research and Development*, 1964](https://ieeexplore.ieee.org/document/5392405))

## Mini-ordinateurs : un département peut en payer un

Années 1970 : le PDP-11 de DEC (1970) et ses cousins réduisent la machine à ce qu'un département — pas toute une institution — peut acheter. En mai 1990, la famille PDP-11 compte plus de 20 membres ; **plus de 600 000** systèmes ont été installés. ([CHM / DIGITAL Computing Timeline — MicroPDP-11/94, 1990](https://archive.computerhistory.org/resources/text/DEC/dec.digital_(DEC)_timeline_1957-1997.102630354/1990-2.htm)) L'adressage orthogonal et l'encodage propre de l'ISA marquent la conception suivante, y compris des habitudes du C, né avec Unix largement sur PDP-11.

## Microprocesseurs : le CPU sur une seule puce

La rupture : fabriquer tout le CPU sur un circuit intégré plutôt que câbler des racks. Intel annonce le **4004** le 15 novembre 1971 — premier microprocesseur programmable commercial, 4 bits. ([Intel Timeline — The First Programmable Microprocessor: The 4004](https://timeline.intel.com/1971/the-first-programmable-microprocessor:-the-4004)) La légende Intel Museum / Calisphere indique **108 kHz**, environ 50 KIPS, **2 300** transistors. ([Calisphere — Intel® 4004 Microprocessor Die, 1971, Intel Museum Archives](https://calisphere.org/item/ark:/13030/kt8000219w/)) La fiche technique MCS-4 donne une période d'horloge minimale \(t_{cy}\) de **1,35–1,36 µs** (soit environ **740 kHz** au maximum). ([Intel 4004 datasheet — archive.org](https://archive.org/stream/intel-4004/intel-4004_djvu.txt)) Deux figures, deux sources : on les laisse côte à côte. Faible par tout critère moderne ; ancêtre direct de la lignée qui mène à l'8080, au Z80, puis à x86.

## Pourquoi l'effondrement se compose

Chaque pas suit la densité de fabrication : plus de transistors, moins de surface, moins cher. Les mainframes étaient des milliers de composants sur fond de panier ; les microprocesseurs compressent cette structure dans le silicium. L'informatique passe de ressource institutionnelle à outil départemental à appareil personnel (puis embarqué).

{{< lab type="mini-cpu" >}}

Ensuite : [La rupture x86 contre RISC]({{< relref "26-the-x86-vs-risc-split" >}}).

## Sources

- CHM Timeline ENIAC 1946 : <https://www.computerhistory.org/timeline/1946/>
- Amdahl, Blaauw & Brooks 1964 : <https://ieeexplore.ieee.org/document/5392405>
- CHM DEC timeline — MicroPDP-11/94 : <https://archive.computerhistory.org/resources/text/DEC/dec.digital_(DEC)_timeline_1957-1997.102630354/1990-2.htm>
- Intel Timeline 4004 : <https://timeline.intel.com/1971/the-first-programmable-microprocessor:-the-4004>
- Calisphere / Intel Museum — 4004 die (108 kHz, 2300 transistors) : <https://calisphere.org/item/ark:/13030/kt8000219w/>
- Intel 4004 datasheet (\(t_{cy}\)) : <https://archive.org/stream/intel-4004/intel-4004_djvu.txt>

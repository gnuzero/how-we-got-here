---
title: "Liens série et les premières connexions machine à machine"
weight: 45
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 44
aliases:
  - /posts/38-serial-links-and-the-first-machine-to-machine-connections/
  - /posts/43-serial-links-and-the-first-machine-to-machine-connections/
  - /posts/44-serial-links-and-the-first-machine-to-machine-connections/
tags: []
summary: "Un lien série point-à-point ne connecte que deux extrémités — le plafond qui a forcé la commutation de paquets"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

Chaque bus de la phase 5 reste *dans* une machine. Le réseau commence quand des machines séparées doivent se parler — et avant les réseaux à commutation de paquets, cela voulait dire un lien série : un flux de bits, point à point, pas de routage, pas d'adresse au-delà de « la chose au bout de ce fil ».

## RS-232 : le lien série de base

En mai 1960, face à la multiplication des modems, l'industrie fixe une interface électrique standard entre ordinateur et modem (*data set*) : tensions, paramètres de signal, nomenclature des conducteurs. L'Electronic Industries Association rédige **EIA RS-232** — « a logical and physical interface between computer equipment and a modem ». ([Ardent Tool — « Getting to Know the RS-232 Standard »](https://www.ardent-tool.com/comms/Getting_Know_RS232.html)) Le Science Museum Group conserve encore, août 1962, un document « Proposed rewording of EIA Standards RS-232 » dans les archives H. McGregor Ross — preuve que la norme était déjà un objet de travail international dès le début des années 1960. ([Science Museum Group Collection](https://collection.sciencemuseumgroup.org.uk/documents/aa110142634/proposed-rewording-of-eia-standards-rs-232))

Pas d'adressage, pas de routage, pas de correction d'erreur au-delà d'une éventuelle parité simple choisie aux extrémités. Juste deux appareils, un bit à la fois. Les deux bouts se mettent d'accord à l'avance sur le débit (*baud*), car aucune horloge ne voyage avec les données. Suffisant pour des terminaux vers mainframes et mini-ordinateurs — et encore le chemin console le plus simple vers routeurs et embarqué quand il faut un canal qui ne dépend d'aucune pile réseau supérieure.

## Le modem : du numérique sur du fil analogique

La longue distance devait emprunter le réseau téléphonique — analogique, bande étroite, conçu pour la voix. Un modem module un flux de bits numériques sur une porteuse analogique que la ligne peut porter, et le démodule à l'autre bout. Ardent Tool rappelle l'origine du mot : matériel de « modulation / demodulation ». ([Ardent Tool](https://www.ardent-tool.com/comms/Getting_Know_RS232.html)) Les premiers débits se comptaient en centaines de bits par seconde, plus tard en dizaines de kilobits — lents aujourd'hui, mais le seul moyen pratique d'atteindre une machine qui n'était pas dans la même pièce, sur une infrastructure déjà quasi partout.

## Pourquoi cela force l'architecture suivante

Un lien série point-à-point — RS-232 direct ou modem sur téléphone — ne connecte exactement que *deux* extrémités. Pas de réseau multi-nœuds, pas de décision de routage vers une destination qui n'est pas sur le fil. Passer à beaucoup de machines qui se joignent sans une paire dédiée entre chaque couple exige un autre pari : découper les données en paquets, les router saut par saut, partager les liens. C'est ce qu'ARPANET s'est mis à prouver — prochain chapitre.

{{< lab type="vm-terminal" >}}

Ensuite : [ARPANET et la commutation de paquets]({{< relref path="46-arpanet-and-packet-switching" lang="en" >}}).

## Sources

- Ardent Tool — Getting to Know the RS-232 Standard (EIA mai 1960, modem) : <https://www.ardent-tool.com/comms/Getting_Know_RS232.html>
- Science Museum Group — Proposed rewording of EIA Standards RS-232 (août 1962) : <https://collection.sciencemuseumgroup.org.uk/documents/aa110142634/proposed-rewording-of-eia-standards-rs-232>

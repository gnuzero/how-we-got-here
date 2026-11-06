---
title: "Ethernet et le réseau local"
weight: 47
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 46
aliases:
  - /posts/40-ethernet-and-the-local-area-network/
  - /posts/45-ethernet-and-the-local-area-network/
  - /posts/46-ethernet-and-the-local-area-network/
tags: []
summary: "Câble partagé, pas d'arbitre central — CSMA/CD a résolu la contrainte de collision du LAN ; les commutateurs l'ont ensuite ôtée"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET a résolu la commutation de paquets longue distance. Dans un bâtiment, du routage style IMP sur quelques dizaines de mètres de câble est le mauvais outil. Ethernet, commencé à Xerox PARC en 1973 par Robert Metcalfe et David Boggs, devient la réponse locale dominante. ([CHM Timeline 1973 — Linking the Office](https://www.computerhistory.org/timeline/1973/) ; [Wikipedia — Ethernet](https://en.wikipedia.org/wiki/Ethernet))

## Le problème du médium partagé

Les premiers Ethernet mettent beaucoup de stations sur un seul câble partagé — topologie en bus, le même *genre* de contention qu'un bus système, maintenant sur un LAN. Chaque station peut émettre ; chaque station entend chaque transmission. Deux émetteurs à la fois corrompent les deux.

## CSMA/CD : écouter, transmettre, détecter, reculer

La réponse Ethernet est **CSMA/CD** (*Carrier-sense multiple access with collision detection*) : écouter d'abord ; n'émettre que si le médium paraît libre ; toute station peut essayer — pas de grant central ; continuer d'écouter pendant l'envoi ; si collision, arrêter, attendre un *backoff* aléatoire, réessayer. ([Wikipedia — CSMA/CD](https://en.wikipedia.org/wiki/Carrier-sense_multiple_access_with_collision_detection))

L'aléatoire est l'astuce porteuse. Des backoffs fixes identiques collisionneraient à jamais. Des attentes aléatoires différentes laissent une station réussir avant que l'autre ne réessaie — contention décentralisée sans arbitre.

## La trame

Ethernet porte les données en trames : adresses MAC source et destination (adresses matérielles, sous les adresses IP), champ de type pour le protocole supérieur, charge utile, et un CRC — le même *genre* de fiabilité que les contrôles data-link de PCIe, sur un autre médium.

## Du bus partagé à l'étoile commutée

L'Ethernet filaire moderne a surtout quitté le câble partagé pour des commutateurs qui donnent à chaque station son propre lien point-à-point — la même échappée shared→point-à-point que PCIe face aux anciens bus parallèles. Sur un vrai switch, les collisions CSMA/CD classiques disparaissent largement : chaque lien n'a que deux bouts. Les idées comptent encore historiquement, et le Wi-Fi précoce — médium radio encore partagé — a dû résoudre la même contrainte de collision.

## Où cela mène

Ethernet local plus routage paquet longue distance laisse encore un trou : un schéma *universel* d'adressage et de routage qui noue des technologies sous-jacentes différentes en un seul interréseau. C'est TCP/IP — prochain chapitre.

{{< lab type="vm-terminal" >}}

Ensuite : [TCP/IP et la pile Internet moderne]({{< relref "48-tcp-ip-and-the-modern-internet-stack" >}}).

## Sources

- CHM Timeline 1973 (Ethernet / Metcalfe & Boggs) : <https://www.computerhistory.org/timeline/1973/>
- Wikipedia — Ethernet ; CSMA/CD

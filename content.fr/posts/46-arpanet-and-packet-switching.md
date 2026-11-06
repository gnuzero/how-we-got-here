---
title: "ARPANET et la commutation de paquets"
weight: 46
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 45
aliases:
  - /posts/39-arpanet-and-packet-switching/
  - /posts/44-arpanet-and-packet-switching/
  - /posts/45-arpanet-and-packet-switching/
tags: []
summary: "Le trafic informatique en rafales a cassé la commutation de circuits — ARPANET a prouvé que paquets et liens partagés pouvaient marcher"
image_prompt: "Historical network topology map of early ARPANET nodes connected via IMPs, clean historical network diagram style"
video_prompt: "20-second animation: a message broken into packets, routed hop-by-hop, reassembled at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: early ARPANET topology map + packet switching vs circuit switching comparison"
---

Les liens série du chapitre précédent ne connectent exactement que deux extrémités. ARPANET, mis en service en 1969 sous ARPA (plus tard DARPA), vise autre chose : beaucoup de machines joignant beaucoup d'autres sans circuit dédié entre chaque paire, en découpant les données en paquets routés indépendamment saut par saut.

## Commutation de circuits vs commutation de paquets

Le réseau téléphonique utilisait la commutation de circuits : réserver un chemin de bout en bout pour *tout* l'appel, que l'on parle ou non. Adapté à la voix continue ; mauvais pour le trafic informatique, en rafales — transfert actif, puis idle pendant lesquels un circuit réservé reste inutilisé.

La commutation de paquets prend le pari inverse. Découper en paquets portant une adresse de destination ; router chacun indépendamment ; partager les liens physiques entre beaucoup de conversations. Pas de chemin réservé pour toute une session. Paul Baran (RAND) et Leonard Kleinrock (analyse de files d'attente) fournissent le socle intellectuel ; Lawrence Roberts à ARPA transforme le pari en réseau de recherche financé. ([Internet Society — « Brief History of the Internet »](https://www.internetsociety.org/internet/history-internet/brief-history-internet/) ; [Wikipedia — Paul Baran](https://en.wikipedia.org/wiki/Paul_Baran))

## IMPs : les routeurs d'origine

Les sauts d'ARPANET étaient des *Interface Message Processors* (IMP) — mini-ordinateurs dédiés sur chaque site qui acceptaient les paquets de l'hôte local, choisissaient le prochain saut et transféraient. Conceptuellement, c'est encore ce qu'un routeur moderne fait. Fin 1969, quatre hôtes reliés : UCLA, Stanford Research Institute (SRI), UC Santa Barbara, University of Utah. ([Internet Society — Brief History](https://www.internetsociety.org/internet/history-internet/brief-history-internet/) ; [CHM Timeline 1969](https://www.computerhistory.org/timeline/1969/))

## Fil français : Pouzin, IRIA, CYCLADES

En parallèle, la France mène son propre réseau de recherche. Le projet **CYCLADES**, hébergé à l'**IRIA** (ancêtre d'Inria), est lancé en 1972 sous la direction de **Louis Pouzin** — réseau à commutation de paquets centré sur les *datagrammes*, conçu explicitement pour faciliter l'*internetworking*, à la différence d'ARPANET. ([Inria — Our history](https://inria.cl/en/our-history) ; [Wikipedia — CYCLADES](https://en.wikipedia.org/wiki/CYCLADES) ; [Internet Hall of Fame — Louis Pouzin](https://www.internethalloffame.org/inductee/louis-pouzin/)) CHM note aussi que le travail sur CYCLADES commence peu après 1969–70, aux côtés du NPL britannique et d'ALOHANET. ([CHM Timeline 1969](https://www.computerhistory.org/timeline/1969/))

**Sources en désaccord sur la paternité.** Inria écrit que, via Cyclades, « Inria researchers invented packet switching for data transfers ». ([Inria — Our history](https://inria.cl/en/our-history)) Wikipedia et la chronologie ISOC attribuent plutôt l'invention indépendante / le socle à Baran, Kleinrock et le travail contemporain au NPL (Davies). Nous ne tranchons pas : les deux fils — ARPANET et CYCLADES — existent ; la commutation de paquets n'a pas une seule origine nationale.

**Influence sur TCP/IP — attribuée, pas affirmée en notre nom.** Cerf et Kahn, dans « A Protocol for Packet Network Intercommunication » (*IEEE Trans. Commun.*, mai 1974), remercient explicitement « D. Davies and L. Pouzin who constructively commented on the fragmentation and accounting issues », et citent Pouzin, « Presentation and major design aspects of the CYCLADES computer network » (3rd Data Communications Symp., 1973). ([Cerf & Kahn 1974](https://people.eecs.berkeley.edu/~prabal/teaching/eecs582-w12/readings/CK74.pdf)) C'est le crédit primaire que nous rapportons. Des notices plus tardives (Internet Hall of Fame, Queen Elizabeth Prize) vont plus loin et disent que TCP/IP « was derived » du réseau datagramme de CYCLADES — formulation plus forte que l'accusé de réception de 1974 ; nous la laissons à ces sources.

## Pourquoi c'était un vrai pari

Des ingénieurs télécoms formés à la commutation de circuits doutaient souvent qu'un réseau sans chemins réservés puisse livrer des données de façon fiable. Le succès d'ARPANET a été une validation institutionnelle d'une architecture qui avait de vrais sceptiques contre elle — pas une « étape suivante » déjà acquise.

## Ce que cela a préparé

Les protocoles hôte-à-hôte d'ARPANET n'étaient pas encore TCP/IP (prochain chapitre après Ethernet). Le gain architectural — des paquets plutôt que des circuits dédiés — est le socle de tout le reste de cette phase.

{{< lab type="vm-terminal" >}}

Ensuite : [Ethernet et le réseau local]({{< relref "47-ethernet-and-the-local-area-network" >}}).

## Sources

- Internet Society — Brief History of the Internet : <https://www.internetsociety.org/internet/history-internet/brief-history-internet/>
- CHM Timeline 1969 (ARPANET / CYCLADES) : <https://www.computerhistory.org/timeline/1969/>
- Inria — Our history (Cyclades / IRIA) : <https://inria.cl/en/our-history>
- Wikipedia — CYCLADES ; Paul Baran
- Internet Hall of Fame — Louis Pouzin : <https://www.internethalloffame.org/inductee/louis-pouzin/>
- Cerf & Kahn 1974 (PDF Berkeley) — remerciements Pouzin / référence CYCLADES : <https://people.eecs.berkeley.edu/~prabal/teaching/eecs582-w12/readings/CK74.pdf>
- Queen Elizabeth Prize — Louis Pouzin : <https://qeprize.org/winners/louis-pouzin>

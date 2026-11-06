---
title: "TCP/IP et la pile Internet moderne"
weight: 48
date: 2026-01-01
draft: false
phase: "6 — Networking Evolution"
series_index: 47
aliases:
  - /posts/41-tcp-ip-and-the-modern-internet-stack/
  - /posts/46-tcp-ip-and-the-modern-internet-stack/
  - /posts/47-tcp-ip-and-the-modern-internet-stack/
tags: []
summary: "Comment les protocoles Internet se sont empilés et pourquoi — couches, flag day, apps sur un substrat non fiable — pas un catalogue"
image_prompt: "Layered protocol stack diagram with a packet gaining headers at each layer, clean networking textbook diagram style"
video_prompt: "25-second animation: data flowing down through TCP/IP layers gaining headers, then unwrapped at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model with encapsulation + TCP three-way handshake diagram"
---

ARPANET a prouvé la commutation de paquets. Ethernet a standardisé le fil local. Ni l'un ni l'autre ne dit seul comment coudre *différents* réseaux — médias différents, adressages différents — en un interréseau que deux machines quelconques peuvent utiliser. La suite TCP/IP de Vint Cerf et Bob Kahn résout cela ; c'est encore le socle de l'Internet moderne. ([Cerf & Kahn 1974](https://people.eecs.berkeley.edu/~prabal/teaching/eecs582-w12/readings/CK74.pdf) ; [Internet Society — Brief History](https://www.internetsociety.org/internet/history-internet/brief-history-internet/))

## Le modèle en couches

TCP/IP sépare les préoccupations comme la pile PCIe, à l'échelle de l'internetworking. **Lien** : le saut local — Ethernet, Wi-Fi, fibre. **Internet (IP)** : adressage et routage *universels* à travers ces liens ; un paquet IP ne se soucie pas du médium. **Transport (TCP ou UDP)** : livraison ordonnée fiable (TCP) ou best-effort minimal (UDP) au-dessus d'IP. **Application** : HTTP, DNS, SMTP et apparentés, qui choisissent le transport qui convient. ([RFC 791 — Internet Protocol](https://www.rfc-editor.org/rfc/rfc791) ; [RFC 793 — Transmission Control Protocol](https://www.rfc-editor.org/rfc/rfc793))

## Encapsulation

Les données qui descendent gagnent un en-tête à chaque couche — octets applicatifs sous TCP/UDP, ce segment sous IP, ce paquet sous un en-tête de lien (et souvent une queue). À l'autre bout, le processus s'inverse.

## TCP sur un substrat non fiable

IP est explicitement best-effort — pas de promesse de livraison ni d'ordre, pertes autorisées. TCP construit un flux d'octets ordonné et fiable par dessus, avec numéros de séquence et accusés (et retransmission si les ACK n'arrivent pas). ([RFC 793](https://www.rfc-editor.org/rfc/rfc793)) Une connexion commence par une poignée de main à trois voies : SYN, SYN-ACK, ACK final. Ensuite seulement les données applicatives circulent.

Cerf et Kahn remercient, dans le papier de 1974, notamment « D. Davies and L. Pouzin who constructively commented on the fragmentation and accounting issues », et citent le papier CYCLADES de Pouzin (1973) — crédit qu'ils formulent eux-mêmes ; voir le chapitre ARPANET. ([Cerf & Kahn 1974](https://people.eecs.berkeley.edu/~prabal/teaching/eecs582-w12/readings/CK74.pdf))

## D'un protocole de réseau à une pile

ARPANET parlait d'abord son propre protocole hôte-à-hôte (**NCP**), pas TCP/IP. Le pari de Cerf et Kahn est plus large : une *pile* capable d'internetter *plusieurs* réseaux à paquets, pour que le transport et le fil local évoluent séparément. Le basculement pratique sur ARPANET lui-même est le « flag day » du **1er janvier 1983** : NCP éteint, TCP/IP obligatoire — une coupure dure rare qui a rendu l'histoire en couches opérationnelle. ([Internet Society — Brief History](https://www.internetsociety.org/internet/history-internet/brief-history-internet/))

Les protocoles applicatifs se sont ensuite empilés *parce que* ce substrat existait. Le motif est le point : chaque couche achète une contrainte pour que la couche du dessus puisse l'assumer.

## Pourquoi ce design a gagné

L'hypothèse porteuse : le réseau sous-jacent est hétérogène et non fiable, donc les garanties appartiennent à une couche plus haute plutôt qu'à chaque lien physique. Cela a collé à un interréseau mondial cousu pendant des décennies à partir de technologies différentes par des organisations qui n'ont jamais convenu d'un seul standard physique — d'où TCP/IP sous encore essentiellement tout l'Internet moderne, y compris les réseaux de datacenter suivants.

{{< lab type="vm-terminal" >}}

Ensuite : [Réseaux de datacenter et RDMA]({{< relref "49-datacenter-networking-and-rdma" >}}).

## Sources

- Cerf & Kahn, « A Protocol for Packet Network Intercommunication », 1974 : <https://people.eecs.berkeley.edu/~prabal/teaching/eecs582-w12/readings/CK74.pdf>
- RFC 791 (IP) : <https://www.rfc-editor.org/rfc/rfc791>
- RFC 793 (TCP) : <https://www.rfc-editor.org/rfc/rfc793>
- Internet Society — Brief History of the Internet (flag day 1983) : <https://www.internetsociety.org/internet/history-internet/brief-history-internet/>

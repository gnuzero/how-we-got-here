---
title: "Usenet, Archie, Gopher et l'Internet pré-web"
weight: 50
date: 2026-01-01
draft: false
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 49
aliases:
  - /posts/43-usenet-archie-gopher-and-the-pre-web-internet/
  - /posts/48-usenet-archie-gopher-and-the-pre-web-internet/
  - /posts/49-usenet-archie-gopher-and-the-pre-web-internet/
tags: []
summary: "Trouver, puis parler — Usenet, Archie, Gopher, IRC, et les portails grand public qui ont empaqueté les deux"
image_prompt: "Historical illustration of a Usenet hierarchy, Archie prompt, Gopher menu, IRC channel list, and a Yahoo-style portal homepage as one arc, clean vintage internet-history infographic style"
video_prompt: "25-second animation: a Usenet post propagating, an Archie query, a Gopher drill-down, IRC messages in a channel, then a portal homepage bundling directory + chat + mail, clean historical technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: find (Archie/Gopher) + talk (Usenet/IRC) converging into consumer portals, then into the open web"
---

TCP/IP a donné à l'Internet un socle d'adressage et de transport universel. Ce qui a tourné *dessus*, pendant à peu près deux décennies avant que le World Wide Web ne domine l'interface, forme un arc à deux faces : **trouver** quelque chose, puis **parler** à quelqu'un.

## Usenet : discussion distribuée, pas de serveur central

Usenet (*User's Network*) est un système de discussion distribué mondial, développé à partir de l'architecture UUCP (*Unix-to-Unix Copy*). Tom Truscott et Jim Ellis conçoivent l'idée en 1979 ; le système est établi en 1980. Les utilisateurs lisent et publient dans des catégories thématiques — *newsgroups*. ([Wikipedia — Usenet](https://en.wikipedia.org/wiki/Usenet)) Pas de serveur central qui héberge toute la discussion : les sites échangent des articles en store-and-forward. Le format d'échange est décrit dès 1983 (RFC 850) ; le transport sur TCP/IP via **NNTP** est proposé en 1986. ([RFC 850](https://www.rfc-editor.org/rfc/rfc850) ; [RFC 977 — NNTP](https://www.rfc-editor.org/rfc/rfc977))

## Archie : le premier outil de recherche

Avant tout moteur moderne, trouver un fichier voulait souvent dire savoir quel hôte le détenait. **Archie** indexe des archives FTP pour identifier plus facilement des fichiers précis — « considered the first Internet search engine ». Implémentation originale en 1990 par Alan Emtage, alors étudiant à McGill (Montréal) ; l'Internet Hall of Fame date la conception/implémentation à 1989. ([Wikipedia — Archie search engine](https://en.wikipedia.org/wiki/Archie_search_engine) ; [Internet Hall of Fame — Alan Emtage](https://www.internethalloffame.org/inductee/alan-emtage/)) Les contenus étaient hors périmètre — seulement les noms — mais c'était déjà un grand pas au-delà de la devinette du serveur. (Sources en léger désaccord sur 1989 vs 1990 ; nous rapportons les deux.)

## Gopher : navigation par menus avant le Web

**Gopher** (University of Minnesota ; Mark McCahill et collègues) est un protocole client-serveur à menus pour distribuer, chercher et récupérer des documents sur IP — « presented an alternative to the World Wide Web in its early stages ». Le document de base sort du Microcomputer Center de Minnesota en 1991 ; RFC 1436 (mars 1993) le spécifie : serveurs sur le port 70, listes de répertoires ou documents, présentation hiérarchique. ([RFC 1436](https://www.rfc-editor.org/rfc/rfc1436) ; [Wikipedia — Gopher protocol](https://en.wikipedia.org/wiki/Gopher_protocol))

## IRC : parler entre pairs en temps réel

Usenet était de la parole qui *se propageait*. IRC est de la parole qui *se passe maintenant*. RFC 1459 (Oikarinen & Reed, mai 1993) : le protocole IRC « was first implemented as a means for users on a BBS to chat amongst themselves » et « supports a world-wide network of servers and clients ». ([RFC 1459](https://www.rfc-editor.org/rfc/rfc1459) ; [Wikipedia — Internet Relay Chat](https://en.wikipedia.org/wiki/Internet_Relay_Chat))

## Portails grand public : empaqueter trouver et parler

Vers le milieu des années 1990, les outils ouverts ci-dessus supposent encore que l'on sait où pointer un client. Les portails vendent un autre pari : une page d'accueil qui *regroupe* annuaire, news, mail et chat. Yahoo, fondée par Jerry Yang et David Filo en janvier 1994 (incorporée le 2 mars 1995), est l'un des pionniers de cette ère — portail, annuaire, puis services collants. ([Wikipedia — Yahoo! Inc. (1995–2017)](https://en.wikipedia.org/wiki/Yahoo!_Inc._(1995%E2%80%932017))) AOL, Excite, Lycos et apparentés sont la même *catégorie* — hubs d'attention qui empaquetaient find-then-talk pour un public de masse — pas une seconde encyclopédie d'entreprises.

## Pourquoi le Web ouvert a dépassé les menus et les hubs

Le geste central du Web — HTML avec des hyperliens vers *n'importe quel* autre document, n'importe où, non verrouillé à une hiérarchie de menus fixe ou à la taxonomie d'un portail — était un modèle de « find » plus souple que les menus Gopher ou un annuaire curaté. **Notre interprétation** de la suite : les portails ont continué d'empaqueter l'arc ; le graphe d'hyperliens ouvert (puis la recherche à l'échelle des crawlers au prochain chapitre) a gagné la moitié *find*.

{{< lab type="vm-terminal" >}}

Ensuite : [De la presse au pixel]({{< relref "51-from-press-to-pixel" >}}).

## Sources

- Wikipedia — Usenet ; Archie search engine ; Gopher protocol ; Internet Relay Chat ; Yahoo! Inc. (1995–2017)
- RFC 850 (USENET messages, 1983) ; RFC 977 (NNTP, 1986) ; RFC 1436 (Gopher, 1993) ; RFC 1459 (IRC, 1993)
- Internet Hall of Fame — Alan Emtage : <https://www.internethalloffame.org/inductee/alan-emtage/>

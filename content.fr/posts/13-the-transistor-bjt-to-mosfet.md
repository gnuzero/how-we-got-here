---
title: "Le transistor : du BJT au MOSFET"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "Le BJT se commande en courant ; le MOSFET se commande en tension via un oxyde — c'est cette physique qui a ouvert la densité"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

Le mot « transistor » couvre deux familles de dispositifs qui commutent sur des physiques différentes. Selon le Computer History Museum, l'une d'elles en est venue à dominer la production de puces. Le chapitre précédent s'est arrêté à la jonction p–n ; ici on suit ce qu'on a construit dessus, et ce qui est venu après.

## Premier pas : un transistor fragile, à contacts ponctuels

Le CHM date le premier amplificateur à semi-conducteur réussi au **16 décembre 1947** : Bardeen et Brattain pressent deux contacts d'or très rapprochés sur du germanium de haute pureté ; la tension sur l'un module le courant à travers l'autre, amplification « up to 100 times ». Bell Labs annonce le dispositif le **30 juin 1948** ; malgré une construction mécanique délicate, des milliers d'unités sont produites sous le catalogue « Type A ». ([CHM — 1947: Invention of the Point-Contact Transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/))

Cette fragilité compte pour la suite. Le CHM écrit que Shockley a reconnu qu'une configuration mécanique aussi délicate serait difficile à fabriquer en grand volume avec une fiabilité suffisante. ([CHM — 1948: Conception of the Junction Transistor](https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/))

## BJT : le courant commande le courant

Le **23 janvier 1948**, Shockley conçoit un transistor différent, bâti sur la jonction p–n — un « sandwich » de trois couches de semi-conducteur de types n et p séparées par des jonctions. Le mécanisme qu'il invoque est l'*injection de porteurs minoritaires* : les trous peuvent traverser le volume du germanium, pas seulement une couche de surface. Le CHM dit que c'est ainsi que fonctionnent tous les transistors bipolaires à jonctions (BJT) d'aujourd'hui. ([CHM — 1948: Conception of the Junction Transistor](https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/))

**Notre interprétation** (déduite de cette description, non chiffrée par le CHM) : pour tenir un BJT en conduction, il faut injecter des porteurs par la jonction base–émetteur, donc la base consomme du courant tant que le dispositif reste allumé. À l'échelle d'une puce, ce coût de veille s'accumule.

## MOSFET : la tension commande un canal

L'idée d'un transistor à effet de champ est plus ancienne que le BJT. Le CHM écrit que le FET à grille isolée avait été « long anticipated by Lilienfeld, Heil, Shockley and others ». L'obstacle : les *états de surface*, qui empêchaient le champ de pénétrer dans le semi-conducteur. ([CHM — 1960: MOS Transistor Demonstrated](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

En **1959**, M. M. (John) Atalla et Dawon Kahng, à Bell Labs, obtiennent le premier FET à grille isolée réussi. En étudiant des couches de SiO₂ croisées thermiquement, ils trouvent que les états de surface diminuent fortement à l'interface silicium / oxyde. La structure est un sandwich métal (grille), oxyde (isolation), silicium — d'où le nom MOSFET. ([CHM — 1960](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)) Le brevet de Kahng, « Electric Field Controlled Semiconductor Device », US 3,102,230, est déposé le **31 mai 1960** et délivré le **27 août 1963**. ([Google Patents — US3102230A](https://patents.google.com/patent/US3102230A/en))

Différence essentielle avec le BJT : la grille est séparée du canal par un isolant ; une tension sur la grille commande la conduction du canal par champ électrique, sans injection de porteurs *à travers* la grille. **Notre interprétation** : une fois la capacité de grille chargée, tenir le dispositif allumé ne coûte presque rien en courant de grille — l'opposé du courant de base continu du BJT.

## Pourquoi le MOSFET a gagné pour la logique numérique

Au début, le MOSFET n'a pas gagné. Le CHM note que le dispositif Bell Labs était lent et ne répondait à aucun besoin pressant du système téléphonique ; il n'a pas été poussé plus loin. Dans un mémo de 1961, Kahng souligne pourtant « ease of fabrication and the possibility of application in integrated circuits ». Les dispositifs MOS arrivent sur le marché en **1964** (GME 1004, Fairchild FI 100 en canal p ; RCA 3N98 en canal n). Le motif invoqué par le CHM pour la domination d'aujourd'hui : taille et consommation plus faibles que le bipolaire — « over 99 percent of microchips produced today use MOS transistors » (affirmation du musée, page non datée). ([CHM — 1960](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

Ensuite : [Portes logiques à partir de transistors]({{< relref "14-logic-gates-from-transistors" >}}).

## Sources

- CHM Silicon Engine — point-contact 1947 ; junction 1948 ; MOS 1960 : <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/> · <https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/> · <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>
- Google Patents — US 3,102,230 (Kahng) : <https://patents.google.com/patent/US3102230A/en>

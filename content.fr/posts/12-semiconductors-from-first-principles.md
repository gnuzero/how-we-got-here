---
title: "Semi-conducteurs depuis les premiers principes"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "Une bande interdite qu'on peut pousser dans les deux sens — le dopage fait du silicium un commutateur contrôlable"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

Le silicium n'est pas spécial parce qu'il serait magique. Il l'est parce que sa structure de bandes se place là où l'on peut *contrôler* la conduction, au lieu de vivre avec elle toujours allumée ou toujours éteinte.

## Pourquoi un gap qu'on peut traverser compte

Dans un métal, les bandes de valence et de conduction se chevauchent — les électrons se déplacent librement ; on ne peut pas éteindre ça avec des tensions raisonnables. Dans un isolant, le gap interdit est énorme ; on ne peut pas allumer la conduction. Un semi-conducteur est au milieu.

L'archive NSM de l'Institut Ioffe donne, à 300 K, un gap d'énergie de **1,12 eV** pour le silicium et **0,661 eV** pour le germanium. ([Ioffe NSM — Si band structure](http://www.ioffe.ru/SVA/NSM/Semicond/Si/bandstr.html); [Ioffe NSM — Ge band structure](http://www.ioffe.ru/SVA/NSM/Semicond/Ge/bandstr.html)) Ces ordres de grandeur sont ceux qu'un transistor peut pousser dans les deux sens : assez petits pour qu'un champ modeste (ou un peu de chaleur / de lumière) place des porteurs là où ils conduisent ; assez grands pour qu'à température ambiante le matériau ne soit pas déjà inondé.

Le plafond du tube au chapitre précédent était taille, puissance, fiabilité ; le remède commence ici, dans un solide qu'on peut doper et commander par un champ.

## Pourquoi le silicium a gagné sur le germanium

Le germanium a été le matériau de l'expérience point-contact à Bell Labs : le 16 décembre 1947, Bardeen et Brattain obtiennent l'amplification sur une plaquette de germanium de haute pureté. ([CHM — 1947: Invention of the Point-Contact Transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/)) Le silicium a pris le jeu long. Un gap plus large (Ioffe : ~1,12 eV contre ~0,66 eV) signifie, qualitativement, plus de marge thermique avant que les porteurs intrinsèques noient le signal.

Le Computer History Museum note aussi que, en étudiant des couches de dioxyde de silicium croisées thermiquement, Atalla et Kahng ont trouvé que les états de surface diminuent fortement à l'interface silicium / oxyde — le sandwich métal–oxyde–silicium du MOSFET. ([CHM — 1960: MOS Transistor Demonstrated](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/)) **Notre interprétation** : température, qualité d'oxyde, abondance — trois contraintes industrielles qui ont standardisé le Si plutôt que le Ge. L'oxyde comme diélectrique de grille revient au chapitre MOSFET.

## Dopage : du cristal au commutateur

Le silicium intrinsèque conduit mal et uniformément. Le dopage introduit des impuretés à l'état de traces qui fixent le *type* et la *concentration* de porteurs. L'archive Ioffe liste, pour le silicium, des donneurs peu profonds (P : 0,045 eV ; As : 0,054 eV) et des accepteurs (B : 0,045 eV). ([Ioffe NSM — Si donors/acceptors](http://www.ioffe.ru/SVA/NSM/Semicond/Si/bandstr.html)) Un atome du groupe V (phosphore, arsenic) dans le réseau du silicium laisse un électron faiblement lié — matériau de type *n*. Un atome du groupe III (bore) laisse une liaison manquante — un *trou* qui se comporte comme porteur positif mobile — type *p*.

Ni l'un ni l'autre seul n'est un commutateur. Les mettre face à face — une **jonction p–n** — est le bloc de construction des diodes et des transistors qui suivent. Le chapitre suivant reprend là : comment une jonction (ou un canal commandé par une grille) fait du silicium dopé quelque chose qu'un signal externe peut allumer et éteindre.

Ensuite : [Le transistor : du BJT au MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet" >}}).

## Sources

- Ioffe NSM Archive — Si / Ge band structure : <http://www.ioffe.ru/SVA/NSM/Semicond/Si/bandstr.html> · <http://www.ioffe.ru/SVA/NSM/Semicond/Ge/bandstr.html>
- CHM Silicon Engine — point-contact 1947 ; MOS 1960 : <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/> · <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>

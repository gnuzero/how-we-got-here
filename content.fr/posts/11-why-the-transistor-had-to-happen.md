---
title: "Pourquoi le transistor devait arriver"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "Taille, puissance, fiabilité — trois plafonds du tube qui ont rendu la commutation à l'état solide inévitable"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

Au début des années 1950, le tube à vide avait déjà prouvé le concept : commutation électronique, sans pièces mobiles, vitesse de l'ordre de la microseconde (*First Draft*, §4.3 — voir [L'ère des tubes à vide]({{< relref "10-the-vacuum-tube-era" >}})). Ce qu'il n'avait pas résolu, c'est *l'échelle*. Chaque tube de plus ajoute de la chaleur, de la puissance et une chance supplémentaire de panne. Le transistor n'a pas remplacé le tube parce que c'était un gadget élégant — il l'a remplacé parce que la physique du tube avait un plafond dur, et que le calcul devait le franchir.

## Trois contraintes, un goulot

**Taille.** Un tube à vide a besoin d'une enveloppe de verre évacuée, assez grande pour séparer cathode, grille et anode, et assez solide pour tenir le vide. Il y a un plancher à sa miniaturisation. Un transistor est à *l'état solide* — sans vide, sans ballon — et sa taille est donnée par la précision de fabrication, non par la physique d'une chambre évacuée. C'est une courbe d'échelle différente ; c'est celle qui mène, plus tard, à des milliards de transistors sur un seul die (Phase 8).

**Puissance.** La cathode d'un tube doit être chauffée pour l'émission thermoïonique — le filament consomme même quand le tube ne commute pas. Multiplié par des dizaines de milliers de tubes, les sources divergent sur le chiffre exact : **150 kW** chez Penn Engineering, **174 kW** (avec **17 468** tubes) dans l'annexe Ordnance/BRL de l'ARL, **140 kW** sur la notice Smithsonian de l'unité d'initiation. ([Penn Engineering](https://www.engineering.upenn.edu/about/history-heritage/eniac/); [ARL Appendix I — ENIAC](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html); [Smithsonian NMAH](https://americanhistory.si.edu/collections/object/nmah_334262)) Un transistor n'a pas de filament ; il commute en modulant une région de déplétion ou un canal, avec une puissance de veille négligeable face au chauffage thermoïonique. C'est la plus grande raison pour laquelle les machines transistorisées ont pu être bien plus denses sans fondre.

**Fiabilité.** Les tubes cèdent par brûlage de filament et dégradation des joints — usure inscrite dans le cycle thermique normal. Les transistors à l'état solide n'ont ni filament ni joint de vide à maintenir ; ils ne partagent pas *le même* mécanisme de panne. Les premiers transistors ont eu leurs propres problèmes (emballage, contamination), mais le *mécanisme* n'était plus cuit dans le fonctionnement quotidien comme l'était le filament.

## Ce qui est arrivé à Bell Labs

Le prix Nobel de physique 1956 a été décerné conjointement à William Bradford Shockley, John Bardeen et Walter Houser Brattain « for their researches on semiconductors and their discovery of the transistor effect ». ([Nobel Prize — Physics 1956](https://www.nobelprize.org/prizes/physics/1956/summary/))

Le Computer History Museum date le premier amplificateur à semi-conducteur réussi au **16 décembre 1947** : Bardeen et Brattain appliquent deux contacts d'or très rapprochés sur une plaquette de germanium de haute pureté ; la tension sur l'un module le courant à travers l'autre, avec une amplification du signal allant « up to 100 times ». Bell Labs annonce le dispositif le **30 juin 1948**. ([CHM — 1947: Invention of the Point-Contact Transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/))

## Pourquoi « devait arriver »

**Notre interprétation** : le tube avait résolu la vitesse face au relais (*First Draft*, §4.3). Il n'avait pas résolu la densité, la puissance de veille et la panne de filament. Le transistor attaque exactement ce triangle. Cela ne signifie pas que le dispositif est arrivé fini : la physique du *mode* de commutation — semi-conducteurs, dopage, bande interdite — restait à comprendre et à ingénier. C'est un autre sujet que le *pourquoi*. Le chapitre suivant commence là.

Ensuite : [Semi-conducteurs depuis les premiers principes]({{< relref "12-semiconductors-from-first-principles" >}}).

## Sources

- Penn Engineering — ENIAC (150 kW) : <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
- ARL Appendix I — ENIAC (17 468 tubes, 174 kW) : <https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html>
- Smithsonian NMAH — ENIAC Initiating Unit (140 kW) : <https://americanhistory.si.edu/collections/object/nmah_334262>
- Nobel Prize — Physics 1956 : <https://www.nobelprize.org/prizes/physics/1956/summary/>
- CHM Silicon Engine — point-contact 1947 : <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>

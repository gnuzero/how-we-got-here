---
title: "L'ère des tubes à vide"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "Les tubes ont ôté les pièces en mouvement — et ont échangé cette vitesse contre chaleur, puissance et pannes"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

Le tour de force du tube à vide est simple : contrôler un grand courant avec un petit, sans pièce en mouvement. Cela a rendu les calculateurs d'ordres de grandeur plus rapides que tout ce qui était à base de relais — et c'est pourquoi l'époque fut une lutte permanente contre la chaleur, la puissance et le taux de panne.

## Comment une triode commute

Von Neumann, dans le *First Draft of a Report on the EDVAC* (**30 juin 1945**), choisit les tubes « of the conventional radio tube type » comme éléments d'un dispositif de calcul très rapide. L'élément sert de vanne de courant (*gate*) ou, en combinaisons, de trigger à deux équilibres — « all-or-none ». La grille agit comme vanne sur le circuit cathode–plaque ; rien ne bouge hors les électrons. ([von Neumann / Godfrey, *First Draft*](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), §§4.1–5.1)

La comparaison de vitesse est quantitative dans le même texte : agrégats à tubes fiables à des délais de l'ordre d'**une microseconde** ; relais télégraphiques pratiques, de l'ordre de **10 millisecondes** ou plus. ([ibid., §4.3](https://people.csail.mit.edu/brooks/idocs/JvN.pdf)) L'écart est d'environ mille fois — exactement pourquoi l'ère des tubes a existé.

## ENIAC : le tableau de commutation de 30 tonnes

L'Electronic Numerical Integrator and Computer (ENIAC) est annoncé publiquement le **14 février 1946** comme le premier calculateur électronique à usage général ; il a été construit et exploité à la Moore School of Electrical Engineering (aujourd'hui Penn Engineering). ([Penn Engineering — ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/))

Penn Engineering décrit une salle d'environ 30 × 50 pieds, **30 tonnes**, environ **18 000** tubes à vide, et une consommation de **150 kilowatts**. ([Penn Engineering, ibid.](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) L'annexe technique du rapport Ordnance Corps / BRL (ARL) donne **17 468** tubes et une consommation de **174 kW** pour l'ordinateur. ([ARL — *Electronic Computers Within The Ordnance Corps*, Appendix I — ENIAC](https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html)) La notice Smithsonian de l'unité d'initiation ENIAC cite **140 kilowatts**. ([Smithsonian NMAH — ENIAC Initiating Unit](https://americanhistory.si.edu/collections/object/nmah_334262)) Trois chiffres, trois sources : on les laisse côte à côte. La programmation se fait par câbles et commutateurs — panneau à panneau — pas par programme stocké au sens moderne. Mauchly porte la vision tubes/mécanique ; Eckert résout les problèmes d'ingénierie, y compris la fiabilité des tubes en les faisant tourner à un quart de leur puissance nominale. ([Penn Engineering, ibid.](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) Six femmes (Kathleen McNulty Mauchly Antonelli, Jean Jennings Bartik, Betty Snyder Holberton, Marlyn Wescoff Meltzer, Frances Bilas Spence, Ruth Lichterman Teitelbaum) programment la machine ; deux d'entre elles préparent la démonstration publique de février 1946. ([Penn Engineering — The Women of ENIAC](https://www.engineering.upenn.edu/about/history-heritage/eniac/))

Le Computer History Museum résume : technologie électronique plutôt qu'électromécanique, plus de 1 000 fois plus rapide que tout calculateur précédent, plus de 1 000 pieds carrés, ~18 000 tubes, 30 tonnes. ([CHM Timeline — 1946 ENIAC](https://www.computerhistory.org/timeline/1946/))

## Pourquoi 18 000 tubes étaient un cauchemar

Le cathode d'un tube doit être chauffé pour l'émission thermoïonique — le filament consomme même quand le tube ne « calcule » pas. Multipliez par des dizaines de milliers : la puissance ENIAC ci-dessus. Von Neumann note aussi qu'à la vitesse du tube, il vaut mieux *sérialiser* les opérations sur moins d'éléments que de paralléliser au coût typique des relais. ([First Draft, §5.5](https://people.csail.mit.edu/brooks/idocs/JvN.pdf))

**Notre interprétation** : le transistor n'a pas gagné parce que les ingénieurs étaient malins pour l'être. Il a gagné parce que la physique même du tube — chaleur, taille, enveloppe à vide fragile — plafonnait jusqu'où cette approche pouvait scaler. Ce plafond motive le chapitre suivant.

## Sources

- von Neumann / Godfrey, *First Draft of a Report on the EDVAC* : <https://people.csail.mit.edu/brooks/idocs/JvN.pdf>
- Penn Engineering — ENIAC (150 kW) : <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
- ARL / Ordnance Corps Appendix I — ENIAC (17 468 tubes, 174 kW) : <https://ftp.arl.army.mil/mike/comphist/61ordnance/app1.html>
- Smithsonian NMAH — ENIAC Initiating Unit (140 kW) : <https://americanhistory.si.edu/collections/object/nmah_334262>
- Computer History Museum — Timeline 1946 ENIAC : <https://www.computerhistory.org/timeline/1946/>

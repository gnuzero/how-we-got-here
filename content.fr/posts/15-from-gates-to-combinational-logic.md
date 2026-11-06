---
title: "Des portes à la logique combinatoire"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — Physics & Devices"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "Composer des portes en additionneurs et en ALU — puis buter sur le délai du transport en cascade qui force de meilleures structures"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

Une porte seule ne fait pas d'arithmétique. Ce chapitre compose les portes du précédent en circuits combinatoires — sans mémoire, la sortie ne dépend que des entrées présentes. On arrive à l'additionneur, puis à l'idée d'ALU, et on bute sur la première limite structurelle : le transport (*carry*).

## Un additionneur binaire, dès 1938, avec des relais

L'idée qu'un circuit de commutation puisse additionner est plus ancienne que le transistor. Dans sa thèse de master au MIT, Claude Shannon conçoit un additionneur « using only relays and switches » et note que, bien que toute base soit possible, le circuit est « greatly simplified by using the scale of two ». ([Shannon, *A Symbolic Analysis of Relay and Switching Circuits*, MIT 1937/1940 — PDF](https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf), section « An Electric Adder to the Base Two ») Shannon représente chaque chiffre des deux nombres par un commutateur, les chiffres de la somme par des relais, et le transport de la colonne j−1 vers j par un relais séparé. **Notre interprétation** : la même structure, avec des portes à la place des relais, ressemble à ce qu'on appelle aujourd'hui un additionneur *ripple-carry*.

## Du demi-additionneur à l'additionneur complet

Pour un bit, un demi-additionneur (*half adder*) reçoit A et B et produit la somme S = A XOR B et le transport C = A AND B. Un additionneur complet (*full adder*) reçoit en plus le transport d'entrée Cin :

- S = A XOR B XOR Cin
- Cout = (A AND B) OR (Cin AND (A XOR B))

Ces deux équations ont été vérifiées ici sur les huit combinaisons d'entrée : toujours A + B + Cin = 2·Cout + S. Algèbre booléenne, pas un fait historique — pas de source externe requise.

**Essaie maintenant.** Le labo ci-dessous s'ouvre encore sur une porte AND — exactement le transport du demi-additionneur (C = A AND B). Mets les deux entrées à 1 et regarde la sortie passer à 1 : cette porte est le lien qu'on enchaîne d'étage en étage juste après.

{{< lab type="breadboard" height="700" >}}

## Transport en cascade (*ripple-carry*) : simple, et lent pour une raison précise

On colle n additionneurs complets en chaîne ; le Cout de chacun devient le Cin du suivant. Le résultat est correct, mais le bit de poids fort ne connaît sa somme que lorsque le transport a traversé, au pire, tous les étages en dessous.

Le problème est nommé explicitement dès **1946**. Dans *Preliminary Discussion* de l'IAS, Burks, Goldstine et von Neumann décrivent l'addition parallèle en deux temps : d'abord additionner les chiffres correspondants, puis effectuer les transports, « and this must be done in sequence since a carry may produce a carry ». Pour leurs mots de 40 chiffres binaires, « in the worst case, 39 carries will occur » ; les auteurs jugent inefficace d'allouer au pas de transport 39 fois le temps du pas d'addition : « either the carries must be accelerated, or use must be made of the average number of carries or both ». ([Burks, Goldstine, von Neumann, *Preliminary Discussion…*, IAS 1946, §5.5 — scan IAS](https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf))

## Ce que fait l'industrie : anticiper le transport (*look-ahead*)

La solution « accélérer les transports » devient un composant de catalogue. La fiche Texas Instruments du SN74LS283 s'intitule « 4-bit binary full adders with fast carry » et promet « full-carry look-ahead across the four bits » ; le look-ahead interne génère le terme de transport « in ten nanoseconds, typically » pour les variantes '283 / 'LS283. ([TI — SN74LS283 datasheet, SDLS095](https://www.ti.com/lit/ds/symlink/sn74ls283.pdf)) Ce sont des valeurs *typiques* du fabricant, pas des maximums garantis ni des mesures indépendantes.

## De l'additionneur à l'ALU

Une unité arithmétique et logique (ALU) est, en substance, un additionneur plus quelques fonctions logiques bit à bit (AND, OR, XOR), suivies d'un multiplexeur qui choisit quel résultat sort, commandé par quelques bits d'opération. L'idée d'une unité arithmétique centrale est déjà dans les années 1940 : von Neumann l'appelle en 1945 « central arithmetical part », CA. ([von Neumann, *First Draft of a Report on the EDVAC*, 30 juin 1945, §2.2 — PDF Godfrey](https://people.csail.mit.edu/brooks/idocs/JvN.pdf))

Les circuits de ce chapitre ne gardent rien après que les entrées changent ; les éléments qui se souviennent sont le sujet du prochain chapitre.

Ensuite : [Logique séquentielle]({{< relref path="16-sequential-logic" lang="en" >}}).

## Sources

- Shannon — *Symbolic Analysis…* (additionneur base 2) : <https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf>
- Burks / Goldstine / von Neumann — *Preliminary Discussion…* IAS 1946 : <https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf>
- TI — SN74LS283 datasheet : <https://www.ti.com/lit/ds/symlink/sn74ls283.pdf>
- von Neumann — *First Draft* (EDVAC) : <https://people.csail.mit.edu/brooks/idocs/JvN.pdf>

---
title: "Pourquoi le calcul mécanique compte"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "La forme logique est déjà dans le laiton ; le frottement pousse vers l'électricité"
image_prompt: "Minimal diagram: store + mill + instruction sequence as three boxes, then an arrow to electrical switching, clean technical infographic, white background"
video_prompt: "15-second motion graphic: gears morphing into relay contacts, same instruction-store-execute shape preserved, clean light background"
schematics: "Diagram: instruction sequence + execution unit + store — logical shape that survives medium change"
---

Jeux d'instructions, programmes stockés, contrôle séparé du chemin de données — tout cela a des racines dans les moteurs de Babbage et les cartons de Jacquard. Le support changera complètement (relais, tubes, transistors). La **forme logique**, elle, ne changera pas : une séquence d'instructions, une unité d'exécution qui les réalise, et un magasin (*store*) qui conserve l'état entre les pas. ([Computer History Museum — The Engines](https://www.computerhistory.org/babbage/engines/); [Science Museum — Charles Babbage's Difference Engines](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="Difference Engine No. 2, Serial #2 au Computer History Museum" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2, Serial #2 (Computer History Museum) — second exemplaire achevé à Londres en 2008, construit aux tolérances atteignables au XIXe siècle. Photo : <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Ce que le calcul mécanique *ne pouvait pas* faire, du vivant de Babbage, c'était **scaler**. Les trains d'engrenages ont du frottement, du jeu (*backlash*) et une accumulation d'erreurs de cote (*manufacturing-tolerance stack-up*). Chaque chiffre de précision supplémentaire rendait la machine plus difficile à construire de façon fiable. Ce plafond — et non un manque d'idées — est ce qui a poussé le calcul vers la commutation électrique. ([Science Museum, art. cit.](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum); [CHM — A Modern Sequel](https://www.computerhistory.org/babbage/modernsequel/))

Le Science Museum le dit clairement pour le No. 1 : des centaines de pièces presque identiques, usinées une à une, dans une culture d'atelier entre artisanat et production en série ; le différend avec Joseph Clement arrête le chantier ; le Trésor a déjà dépensé £17 500. ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Pour les reconstructions modernes, le CHM précise que les dessins de Babbage ne spécifient ni tolérances, ni méthodes, ni matériaux, ni finition ; on a donc redessiné les 8 000 pièces, en veillant à ne **nulle part** dépasser la précision qu'aurait pu atteindre Babbage. ([CHM — A Modern Sequel](https://www.computerhistory.org/babbage/modernsequel/)) Doron Swade, qui a dirigé la construction, rappelle que l'interchangeabilité et le tolérancement étaient des enjeux critiques : Babbage n'avait pas l'estampage ni le moulage sous pression pour la répétabilité ; les pièces étaient usinées et ajustées à la main. ([Swade, « The Construction of Charles Babbage's Difference Engine No. 2 », *IEEE Annals of the History of Computing* 27.3 (2005)](https://ed-thelen.org/bab/DoronSwadeIEEE.pdf))

La reconstruction ci-dessus est l'exception qui confirme la règle. Le premier Difference Engine No. 2 complet a été achevé au Science Museum de Londres en **2002** ; le second, pour un mécène privé, a été achevé à Londres en **2008** et exposé au Computer History Museum à partir de mai 2008. ([Science Museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum); [CHM — press release, 2008](https://computerhistory.org/press-releases/babbage-engine-exhibit/); [Science Museum — User Manual, DE2](https://www.sciencemuseum.org.uk/sites/default/files/2023-08/User_Manual_PDF_Vsn_1.1_Final_SEC1.pdf)) Une fois que les ateliers ont su tenir ces tolérances, le dessin en laiton a tourné. La forme logique était déjà là. C'est le support qu'il fallait changer d'abord.

Ensuite : les relais, et la logique électromécanique qui porte l'architecture jusqu'à la Seconde Guerre mondiale.

## Sources

- Computer History Museum, « The Engines » / « A Modern Sequel » / press release 2008 : <https://www.computerhistory.org/babbage/engines/> · <https://www.computerhistory.org/babbage/modernsequel/> · <https://computerhistory.org/press-releases/babbage-engine-exhibit/>
- Science Museum, « Charles Babbage's Difference Engines… » : <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
- Science Museum, *Difference Engine No. 2: User Manual* : <https://www.sciencemuseum.org.uk/sites/default/files/2023-08/User_Manual_PDF_Vsn_1.1_Final_SEC1.pdf>
- Doron Swade, « The Construction of Charles Babbage's Difference Engine No. 2 », *IEEE Annals* 27.3 (2005) : <https://ed-thelen.org/bab/DoronSwadeIEEE.pdf>

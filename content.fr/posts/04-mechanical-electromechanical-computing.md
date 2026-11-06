---
title: "Calcul mécanique et électromécanique"
weight: 4
date: 2026-01-01
draft: true
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 3
aliases:
  - /posts/01-mechanical-electromechanical-computing/
  - /posts/02-mechanical-electromechanical-computing/
tags: []
summary: "Les engrenages ont forcé l'idée de programme ; le frottement a forcé l'électricité"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

Le calcul n'a pas commencé avec l'électricité. Il a commencé avec des engrenages.

## Les moteurs de Babbage

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Difference Engine No. 2 au Science Museum, Londres" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, Londres). Photo : <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Charles Babbage annonce la Difference Engine en **1822** : une machine à calculer des fonctions polynomiales par la méthode des différences finies, entièrement par engrenages et colonnes de roues — sans électricité. ([Science Museum — Charles Babbage's Difference Engines](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Chaque colonne est un chiffre ; le report d'un « 1 » est un événement physique.

Il n'achève jamais une Difference Engine à pleine échelle. La suite, l'Analytical Engine, a un *store* (mémoire) et un *mill* (unité arithmétique), et elle est programmable : les instructions viennent de cartons perforés empruntés à la mécanique industrielle. ([Computer History Museum — The Engines](https://www.computerhistory.org/babbage/engines/)) Le détail — Pascaline, tolérances, laboratoires — est dans [Les moteurs de Babbage]({{< relref "05-babbage-engines" >}}).

## Le métier Jacquard

Cette mécanique industrielle, c'est le métier Jacquard. Joseph-Marie Jacquard prend un brevet le **23 décembre 1801** ; le modèle SMG n° 1867-47 dit qu'il en a fait un succès commercial en **1804**. ([MuAM — Modèle Jacquard](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard); [SMG Collection 1867-47](https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components)) Une chaîne de cartons perforés décide quels fils se lèvent : trou → levée ; pas de trou → blocage. Changez les cartons, changez le motif. Le détail lyonnais est dans [Le métier Jacquard]({{< relref "06-jacquard-loom" >}}).

## Pourquoi cela compte pour tout ce qui suit

**Notre interprétation** : jeux d'instructions, programmes stockés, contrôle séparé du chemin de données — tout cela a des racines ici. Le support change (relais, tubes, transistors) ; la forme logique ne change pas. Ce que le mécanique *ne pouvait pas* faire, c'était scaler : frottement, jeu, accumulation d'erreurs de cote. Ce plafond pousse vers la commutation électrique — voir [Pourquoi le calcul mécanique compte]({{< relref "07-why-mechanical-matters" >}}). Ensuite : les relais.

## Sources

- Science Museum — Babbage Difference Engines : <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
- Computer History Museum — The Engines : <https://www.computerhistory.org/babbage/engines/>
- MuAM — Modèle Jacquard ; SMG 1867-47 : <https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard> · <https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components>

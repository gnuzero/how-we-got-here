---
title: "Les moteurs de Babbage"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Pascaline, Difference Engine et Analytical Engine — magasin, moulin, programme sur cartons"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

Le calcul n'a pas commencé avec l'électricité. Il a commencé avec des roues.

## Avant Babbage : la Pascaline

Blaise Pascal met au point, en **1642**, une machine à calculer pour faciliter le travail de son père, commissaire des impôts en Normandie — c'est la notice du Musée des arts et métiers. ([MuAM — Machine arithmétique de Pascal à chiffres plus sous et deniers](https://www.arts-et-metiers.net/musee/machine-arithmetique-de-pascal-chiffres-plus-sous-et-deniers-0)) Le texte du *Privilège* royal (22 mai 1649) présente le même père comme « president en notre Cour des Aydes d'Auvergne » : les deux formulations coexistent dans les sources que nous ouvrons ; nous ne les fusionnons pas. ([Wikisource — Privilège pour la machine arithmétique, éd. Brunschvicg / Boutroux, d'après BnF ms. f. fr. 12988](https://fr.wikisource.org/wiki/%C5%92uvres_de_Blaise_Pascal/Privil%C3%A8ge_pour_la_machine_arithm%C3%A9tique_de_M._Pascal))

Pour la première fois, dit le MuAM, une machine additionne et soustrait en effectuant automatiquement la retenue grâce au *sautoir*. Les roues ne sont pas toutes décimales : dix dents pour toises et livres, vingt pour les sols (20 sols dans une livre), douze pour les deniers (12 deniers dans un sol). ([MuAM — Pascal à chiffres plus sous et deniers](https://www.arts-et-metiers.net/musee/machine-arithmetique-de-pascal-chiffres-plus-sous-et-deniers-0)) Le musée virtuel ACONIT / Inria décrit le sautoir comme une pièce métallique armée par la rotation, qui retombe par gravité au passage de 9 à 0 et fait avancer d'un cran la roue suivante — les roues restent indépendantes, ce qui évite le blocage lors d'une retenue en cascade. ([ACONIT — La Pascaline](https://aconit.inria.fr/omeka/exhibits/show/histoire-machines/prehistoire/pascaline.html))

Le **22 mai 1649**, à Compiègne, le privilège royal accorde à Pascal fils le monopole de construction et de vente de l'instrument dans le royaume. Le même texte reconnaît déjà le frein commercial : l'instrument est « à un prix excessif qui le rend, par sa cherté, comme inutile au public », et Pascal dit espérer le réduire. ([Wikisource — Privilège, 22 mai 1649](https://fr.wikisource.org/wiki/%C5%92uvres_de_Blaise_Pascal/Privil%C3%A8ge_pour_la_machine_arithm%C3%A9tique_de_M._Pascal)) ACONIT résume : la machine ne connut pas de succès commercial à cause de son prix ; une vingtaine d'exemplaires furent construits. ([ACONIT — La Pascaline](https://aconit.inria.fr/omeka/exhibits/show/histoire-machines/prehistoire/pascaline.html))

Combien en reste-t-il ? Les notices divergent. Le MuAM écrit qu'on connaît « à peine une dizaine » d'exemplaires. ([MuAM — Pascal](https://www.arts-et-metiers.net/musee/machine-arithmetique-de-pascal-chiffres-plus-sous-et-deniers-0)) ACONIT : une vingtaine construits, dont neuf survivent, dont quatre exposés au Musée des arts et métiers. ([ACONIT](https://aconit.inria.fr/omeka/exhibits/show/histoire-machines/prehistoire/pascaline.html)) À Clermont-Ferrand, le site Blaise Pascal des bibliothèques métropolitaines indique que la ville possède **deux originaux**, aujourd'hui au Muséum Henri-Lecoq (après le Musée du Ranquet). ([Bibliothèques Clermont Métropole — Le calcul mécanique](https://blaisepascal.bibliotheques-clermontmetropole.eu/son-oeuvre/pascal-savant/mathematiques/le-calcul-mecanique?rCH=2)) La page collections de la Métropole confirme que le département Histoire des sciences et techniques du Muséum Henri-Lecoq conserve des machines à calculer « en lien avec deux originaux » de la machine de Pascal. ([Clermont Auvergne Métropole — Collections Henri-Lecoq](https://www.clermontmetropole.eu/en/bouger-se-divertir/le-dynamisme-culturel/les-musees-de-clermont-auvergne-metropole/museum-henri-lecoq/les-collections-du-museum-henri-lecoq/))

## Les moteurs de Babbage

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Difference Engine No. 2 de Charles Babbage au Science Museum, Londres" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, Londres). Photo : <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Charles Babbage annonce pour la première fois la Difference Engine dans une note lue à la Royal Astronomical Society le **14 juin 1822** (*A note respecting the application of machinery to the calculation of astronomical tables*). ([Science Museum — Charles Babbage's Difference Engines](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) La machine calcule une série de valeurs par la méthode des différences finies — additions et soustractions seulement, plus faciles à mécaniser que la multiplication — et doit imprimer les résultats automatiquement. ([Science Museum, art. cit.](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum); [Computer History Museum — The Engines](https://www.computerhistory.org/babbage/engines/)) Chaque colonne est un chiffre ; le report d'un « 1 » est un événement physique entre roues.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Bras de report entre colonnes de chiffres sur Difference Engine No. 2" loading="lazy" width="1280">
<figcaption>Bras de report entre colonnes sur Difference Engine No. 2, Serial #2 (Computer History Museum). Photo : <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**Essayez maintenant.** Faites avancer le laboratoire depuis Y=9, Δ₁=7. La roue des unités passe 9 ; une dent attrape les dizaines. 9+7 devient 16. C'est la méthode des différences finies sur un modèle pédagogique de colonnes — la méthode pour laquelle le moteur a été conçu.

{{< lab type="difference-engine" height="720" >}}

Original pour ce livre, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Modèle pédagogique de colonnes, pas une reconstruction complète du No. 2.

Il n'a jamais achevé une Difference Engine à pleine échelle. Le financement lui a résisté ; les **tolérances de fabrication** de l'époque aussi. Chaque chiffre de précision supplémentaire multipliait les chances que frottement, jeu (*backlash*) et accumulation d'erreurs de cote (*stack-up*) ruinassent le résultat. Le Science Museum insiste sur le défi d'usiner des centaines de pièces presque identiques dans une culture entre artisanat et production en série ; le Trésor britannique dépensa £17 500 avant l'arrêt abrupt du travail avec Joseph Clement en **1833**. ([Science Museum, art. cit.](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Le Computer History Museum place l'arrêt de la construction du No. 1 en **1832** après le différend avec Clement, et la coupure définitive du financement gouvernemental en **1842**. ([CHM — The Engines](https://www.computerhistory.org/babbage/engines/)) Les deux dates d'arrêt (1832 / 1833) sont celles des musées ; nous les laissons côte à côte.

La suite, l'**Analytical Engine**, est l'ancêtre conceptuel de l'ordinateur général. Elle a un *store* (mémoire) et un *mill* (unité arithmétique), et elle est programmable : les instructions viennent de cartons perforés — idée empruntée à la mécanique industrielle déjà sur le plancher d'usine. ([CHM — The Engines](https://www.computerhistory.org/babbage/engines/); [Science Museum, art. cit.](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

L'émulateur ci-dessous est l'Analytical Engine de John Walker / Fourmilab. Avancez les cartons et regardez changer les colonnes du *mill* et du *store*. Domaine public ; nous hébergeons une copie et gardons le lien d'origine.

{{< lab type="analytical-engine" height="780" >}}

Origine : [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [archive source](https://www.fourmilab.ch/babbage/release/aemsource.zip) (domaine public). Cartes : [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine).

Cet emprunt des cartons est la prochaine étape : le métier Jacquard, et la séparation du programme et de la machine.

## Sources

- MuAM / CNAM, Pascalines (inv. 19600-0000- et 00823-0001-) : <https://www.arts-et-metiers.net/musee/machine-arithmetique-de-pascal-chiffres-plus-sous-et-deniers-0> · <https://www.arts-et-metiers.net/musee/machine-arithmetique-de-pascal-6-chiffres-sans-sous-ni-deniers>
- Wikisource, *Privilège pour la machine arithmétique* (22 mai 1649) : <https://fr.wikisource.org/wiki/%C5%92uvres_de_Blaise_Pascal/Privil%C3%A8ge_pour_la_machine_arithm%C3%A9tique_de_M._Pascal>
- ACONIT / Inria, « La Pascaline » : <https://aconit.inria.fr/omeka/exhibits/show/histoire-machines/prehistoire/pascaline.html>
- Bibliothèques Clermont Métropole, « Le calcul mécanique » : <https://blaisepascal.bibliotheques-clermontmetropole.eu/son-oeuvre/pascal-savant/mathematiques/le-calcul-mecanique?rCH=2>
- Clermont Auvergne Métropole, collections Muséum Henri-Lecoq : <https://www.clermontmetropole.eu/en/bouger-se-divertir/le-dynamisme-culturel/les-musees-de-clermont-auvergne-metropole/museum-henri-lecoq/les-collections-du-museum-henri-lecoq/>
- Science Museum, « Charles Babbage's Difference Engines… » : <https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum>
- Computer History Museum, « The Engines » / « The Babbage Engine » : <https://www.computerhistory.org/babbage/engines/> · <https://www.computerhistory.org/babbage/>
- Fourmilab / John Walker : <https://www.fourmilab.ch/babbage/>

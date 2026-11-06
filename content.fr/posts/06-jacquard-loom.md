---
title: "Le métier Jacquard"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Foundations: Mechanical to Vacuum-Tube Computing"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "Les cartons perforés séparent le programme de la machine qui l'exécute"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage n'a pas inventé le contrôle par cartons perforés. Il l'a emprunté — à Lyon.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Métier Jacquard étroit au Musée d'art et d'industrie, Saint-Étienne" loading="lazy" width="1280">
<figcaption>Métier Jacquard, Musée d'art et d'industrie, Saint-Étienne. Photo : <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

## Lyon, les cartons, les canuts

Joseph-Marie Jacquard (1752–1834) met au point à Lyon, au début du XIXe siècle, une mécanique qui surmonte le métier à tisser à bras et sélectionne les fils de chaîne d'après un programme inscrit sur des cartes perforées. ([Musées Gadagne — Métier équipé d'une mécanique Jacquard](https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard)) Au Musée d'Art et d'Industrie de Saint-Étienne, sur un métier à rubans, « la mécanique Jacquard lit les perforations de programme du dessin ». ([MAI Saint-Étienne — Métier à tisser les rubans avec mécanique Jacquard](https://mai.saint-etienne.fr/decouvrir/musee/parcours-de-visites/parcours-rubans/metier-a-tisser-rubans-avec-mecanique-jacquard)) Trou → le fil peut être tiré ; pas de trou → il reste. Changez la chaîne de cartons, changez le motif. Le métier n'a pas besoin de « savoir » ce qu'est un brocart : il exécute une séquence fixe, codée dans le carton.

La chronologie institutionnelle se lit comme une suite. Le Musée des arts et métiers (CNAM) dit que Jacquard prend un brevet le **23 décembre 1801** pour une machine destinée à suppléer le *tireur de lacs* dans la fabrication des étoffes brochées et façonnées ; la maquette conservée est datée **1808**. ([MuAM — Modèle : Métier original de Jacquard](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard)) La notice de la Fondation Napoléon confirme le même brevet du 23 décembre 1801. ([Fondation Napoléon — Jacquard](https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/)) La notice du modèle SMG n° **1867-47** écrit ensuite : « Jacquard made a commercial success of this loom accessory in **1804** ». ([Science Museum Group Collection — Model of a Jacquard loom, 1867-47](https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components)) Le **2 février 1804**, la Société d'encouragement pour l'industrie nationale lui décerne une médaille d'or. ([Fondation Napoléon — Jacquard](https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/))

La mécanique n'est pas sortie de nulle part. Gadagne la présente comme la combinaison de trois techniques antérieures : les aiguilles et le ruban perforé de Basile Bouchon (**1725**) ; la chaîne de cartons de Jean-Baptiste Falcon (**1728**) ; le métier automatisé de Jacques de Vaucanson, commandé par des cylindres (**1748**). ([Gadagne](https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard)) Un compte rendu Persée de l'étude de C. Ballot (1913) sur la genèse lyonnaise résume la même lignée : Bouchon pour l'action du papier troué sur les aiguilles, Falcon pour la chaîne de cartons, Vaucanson pour l'automatisation (avec le cylindre), Jacquard pour l'adaptation des cartons de Falcon au métier de Vaucanson — Jacquard n'a pas tout créé, mais l'a rendu pratique. ([Persée — Letaconnoux sur Ballot, 1913](https://www.persee.fr/doc/rhmc_0996-2743_1913_num_18_4_4873_t1_0287_0000_3))

Jacquard cherche aussi, d'après le MuAM, à limiter l'encombrement des ateliers de *canuts* par les faisceaux de lacs et à économiser la main-d'œuvre. La mécanique « a été toutefois très mal perçue par les canuts qui redoutaient la perte de leur emploi ». ([MuAM — Modèle Jacquard](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard)) Gadagne dit la même première réticence des ouvriers face au chômage possible, puis l'adoption : en **1834**, 2 885 métiers fonctionnent sur les pentes de la Croix-Rousse ; à la fin du XIXe siècle, près de 20 000. ([Gadagne](https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard))

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Cartons perforés sur un métier Jacquard au Museum of Science and Industry, Manchester" loading="lazy" width="249">
<figcaption>Cartons perforés sur un métier Jacquard (Museum of Science and Industry, Manchester). Photo : <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, domaine public.</figcaption>
</figure>

## Ce que Babbage et Lovelace en font

Dans le *Sketch of the Analytical Engine* (traduction et notes de Lovelace sur Menabrea, 1843), Menabrea écrit que la solution pour faire exécuter à la machine les dispositions successives « has been taken from Jacquard's apparatus », utilisé pour les étoffes brochées ; l'Engine a des cartons d'*opérations* et des cartons de *variables*. ([Fourmilab — Menabrea / Lovelace, *Sketch*](https://www.fourmilab.ch/babbage/sketch.html)) Lovelace pousse l'abstraction : la machine peut manipuler des symboles généraux, pas seulement des nombres, si leurs relations s'expriment dans la science des opérations — et la Note G contient le schéma des nombres de Bernoulli. ([même *Sketch* / Notes, Fourmilab](https://www.fourmilab.ch/babbage/sketch.html)) Un programme est une séquence d'instructions, séparée de la machine qui les exécute.

**Sortie :** Ada Lovelace, *Notes* sur l'Analytical Engine (sur la traduction de Menabrea) — texte primaire pour le schéma Bernoulli et l'argument « pas seulement des nombres ». Carte : [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine).

Ensuite : pourquoi ce chapitre mécanique modèle encore tout ce qui suit — et pourquoi les engrenages seuls ne pouvaient pas scaler.

## Sources

- Musées Gadagne (Lyon), « Métier équipé d'une mécanique Jacquard » : <https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard>
- Musée d'Art et d'Industrie, Saint-Étienne, métier à rubans Jacquard : <https://mai.saint-etienne.fr/decouvrir/musee/parcours-de-visites/parcours-rubans/metier-a-tisser-rubans-avec-mecanique-jacquard>
- MuAM / CNAM, « Modèle : Métier original de Jacquard » : <https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard>
- Fondation Napoléon, notice Jacquard : <https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/>
- Science Museum Group Collection, Model of a Jacquard loom (1867-47) : <https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components>
- Science and Industry Museum, « The story of the Jacquard loom » : <https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom>
- Persée, Letaconnoux sur C. Ballot, *Revue d'histoire moderne & contemporaine*, 1913 : <https://www.persee.fr/doc/rhmc_0996-2743_1913_num_18_4_4873_t1_0287_0000_3>
- Fourmilab, Menabrea / Lovelace, *Sketch of the Analytical Engine* : <https://www.fourmilab.ch/babbage/sketch.html>

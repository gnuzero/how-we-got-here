---
title: "De la presse au pixel"
weight: 51
date: 2026-01-02
draft: false
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 50
aliases:
  - /posts/43b-from-press-to-pixel/
  - /posts/49-from-press-to-pixel/
  - /posts/50-from-press-to-pixel/
tags: []
summary: "Quand la page et les caractères deviennent logiciel — le Cinématographe Lumière en tête ; la photocomposition laser de Wang Xuan, PostScript et CSS ensuite"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[Du bois gravé aux caractères mobiles]({{< relref path="02-woodblock-to-movable-type" lang="en" >}}) laisse la page comme chose physique : encre, caractères, papier. Ici, la page devient fichier — et, en parallèle, une séquence d'images devient quelque chose qu'on peut rejouer devant une salle.

## Lyon d'abord : le Cinématographe Lumière

L'Institut Lumière place le brevet du Cinématographe au **13 février 1895**, pris conjointement par Auguste et Louis Lumière — Louis en ayant trouvé le principe. Le préambule du brevet, tel que l'institut le cite, décrit un mécanisme qui agit par intermittence sur un ruban perforé, avec des déplacements successifs séparés par des temps de repos où s'opère l'impression ou la vision. ([Institut Lumière — Le Cinématographe](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

Le **22 mars 1895**, Louis Lumière projette *La Sortie d'usine* dans les locaux de la Société d'encouragement pour l'industrie nationale, à Paris : première démonstration devant une assemblée. Onze autres projections en France et en Belgique suivent la même année, avant la première commerciale. ([Institut Lumière, art. cit.](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html)) L'histoire de la famille sur le site de l'institut situe *La Sortie des usines Lumière* à Lyon, début mars 1895 (probablement le 19), dans ce qui s'appelle aujourd'hui la rue du Premier-Film, à Monplaisir. ([Institut Lumière — L'histoire Lumière](https://www.institut-lumiere.org/lhistoire-de-la-famille-lumiere))

La première séance payante publique a lieu le **28 décembre 1895**. Le Catalogue Lumière (projet de catalogue de l'Institut) précise le lieu : Salon indien du Grand Café, à Paris, avec un programme de dix films. ([Catalogue Lumière — FAQ Movies](https://catalogue-lumiere.com/faq-movies/); [Institut Lumière — Cinématographe](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

L'usine est lyonnaise. Antoine Lumière, d'après l'institut, achète un vaste terrain à Monplaisir, en banlieue de Lyon, pour fabriquer et commercialiser les plaques sèches « Étiquette bleue » mises au point par Louis ; c'est aussi là que se trouve aujourd'hui l'Institut, 25 rue du Premier-Film. ([Institut Lumière — L'histoire Lumière](https://www.institut-lumiere.org/lhistoire-de-la-famille-lumiere)) Pour le Cinématographe, l'institut note encore qu'une première série de 200 exemplaires est commandée par Louis fin décembre 1895, et que la production de pellicule pour les projections s'organise à Lyon (usine de la S.A. des Pellicules françaises, cours Gambetta). ([Institut Lumière — Cinématographe](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

La couleur photographique suit. L'Institut Lumière date le brevet de la plaque Autochrome du **17 décembre 1903** (Louis et Auguste), sa présentation à l'Académie des sciences du **30 mai 1904**, et la commercialisation de **1907** — après environ quatre ans de mise au point industrielle. ([Institut Lumière — Les Autochromes](https://www.institut-lumiere.org/les-autochromes))

## Avant et à côté : Muybridge, Le Prince, la Chine

Eadweard Muybridge photographie le cheval Sallie Gardner en mouvement sur la piste de Palo Alto le **19 juin 1878** ; l'épreuve est conservée à la Library of Congress. ([Smarthistory — Eadweard Muybridge, *The Horse in Motion*](https://smarthistory.org/eadweard-muybridge-the-horse-in-motion/); [Library of Congress](https://www.loc.gov/item/97502309/))

Louis Le Prince filme la *Roundhay Garden Scene* à Leeds en **octobre 1888** ; une copie sur verre du négatif, faite par le Science Museum dans les années 1930, est conservée par le Science Museum Group. ([Science Museum Group — Glass copy negative of Roundhay Garden Scene](https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene)) Le National Science and Media Museum écrit qu'il disparaît mystérieusement en **1890**, et que son sort reste inconnu. ([National Science and Media Museum — Louis Le Prince](https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/))

Le premier film chinois est généralement dit être *Dingjunshan* (《定军山》), tourné vers **1905** au studio photo Fengtai avec le chanteur d'opéra Tan Xinpei — sans document contemporain de 1905 connu. Cheng Jihua a daté 1908 en 1956 et 1905 dans l'*History of the Development of Chinese Cinema* de 1963 ; le film est perdu, et une affiche largement diffusée est un faux moderne. Li Zhen (2025, via l'Archive nationale du film de Chine) conclut qu'il a très probablement existé et été projeté, mais que le titre, le réalisateur et l'année restent ouverts. ([Li Zhen, via China Film Archive](https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03))

Les rouleaux peints chinois sont un cas plus ancien de regard guidé, pas à pas, mais ce n'est pas du cinéma. Le Musée du Palais décrit le rouleau horizontal (*手卷*) comme se déroulant lentement de droite à gauche ; son *Qingming Shanghe Tu* mesure 24,8 × 528 cm et montre plus de 500 personnages. ([Palace Museum](https://www.dpm.org.cn/collection/paint/228226.html)) Le British Museum date son rouleau des *Admonitions* des Ve–VIIe siècles, « after Gu Kaizhi ». ([British Museum](https://www.britishmuseum.org/collection/object/A_1903-0408-0-1)) Appeler les rouleaux un « proto-cinéma » est **notre interprétation**, pas celle des musées.

## Pourquoi le chinois a forcé le problème

Une police latine a besoin de quelques dizaines de sorts. Un journal chinois a besoin de dizaines de milliers de caractères, chacun dessiné à plusieurs corps et styles. Stocker chacun comme une grille dense de points ne tient pas dans les ordinateurs de la fin des années 1970. Wang Xuan écrit plus tard que le nombre même des caractères a poussé son équipe à décrire les glyphes par leurs contours, pour réduire le volume de données. ([Wang Xuan, 1999, sur Sina](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## Wang Xuan : la photocomposition laser

L'entrée d'histoire de la China Computer Federation donne les chiffres d'ingénierie. Pour un caractère de corps 5 (五号), l'information tombe d'environ 10 000 bits à une moyenne d'environ 800 — soit environ 12 fois moins. La même méthode permet aussi de faire varier le glyphe (plus grand, plus petit, plus haut, plus plat) sans perdre la qualité, si bien que le gain global atteint environ 500 fois ; environ 4 Mo tenaient alors quelque 600 000 maîtres de glyphes (字头). Ce sont des chiffres distincts dans la source — 800 bits est la forme comprimée du corps 5, pas ce qu'on obtient en divisant 4 Mo par 600 000 — ; il ne faut pas les multiplier. La première page-échantillon de journal sort le **27 juillet 1979**, et le premier livre composé sur le système, 《伍豪之剑》, est daté du **15 septembre 1980**. ([CCF Computing History, système Huaguang / Founder](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml))

Dans le même texte de 1999, Wang dit que l'équipe a fixé son propre format de description de page en **1986**, et que ce format a porté les pages envoyées aux imprimeries distantes de **1990** à **1994**. Dès **1990**, ils s'attendaient à ce que PostScript devienne le standard ; à l'automne **1993**, ils sortent ce qu'il appelle le premier interpréteur PostScript Level 2 de Chine. Ce sont les récits de Wang lui-même. ([Wang Xuan, 1999](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## Taïwan : un premier parallèle

Le *United Daily News* de Taipei met en service son système de composition informatique le **16 septembre 1982**. Le livre anniversaire du journal le présente comme le premier quotidien de langue chinoise à adopter la composition informatique ; la lignée croît séparément de la photocomposition laser continentale. ([Livre anniversaire United Daily News](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html))

## Ce que la page est devenue

Une fois que caractères et mise en page vivent dans le logiciel, la « presse » est un moteur de rendu. Adobe sort PostScript en **1984** : un langage qui décrit une page à une imprimante. ([CHM — PostScript](https://computerhistory.org/blog/postscript-a-digital-printing-press/)) Sur le Web, CSS fait le même métier pour les écrans. Sélecteurs, modèle de boîte et cascade décident comment un document devient une mise en page ; les mots restent séparés de leur apparence. ([W3C CSS Snapshot](https://www.w3.org/TR/CSS/))

Les deux lignées — compression chinoise et description de page occidentale — aboutissent au même endroit : une page qu'une machine peut redessiner sans que personne ne compose à la main.

> **Aparté : le remplissage qui ne veut rien dire**
>
> Le texte de remplissage que les maquettistes appellent *lorem ipsum* est du latin brouillé tiré du *De finibus bonorum et malorum* de Cicéron. Dans le texte latin (éd. Schiche / Perseus), on lit notamment : *neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit…* (*De finibus* 1.32). ([Perseus — Cicero, *De finibus* 1.32](https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A2007.01.0036%3Abook%3D1%3Asection%3D32)) Richard McClintock, latiniste devenu directeur des publications au Hampden-Sydney College, a identifié cette source dans l'édition Loeb du *De finibus* — c'est ce que note le Département de classics de l'Université de Virginie. ([UVA Classics — Richard McClintock](https://classics.as.virginia.edu/richard-mcclintock))
>
> Cela appartient ici parce que, une fois le caractère logiciel, on peut mettre en page avant que les mots existent.

## Comment le message voyageait

Les câbles sous-marins ont fait de la mer un fil. En **1850**, un câble à travers la Manche est posé ; le Science History Institute note qu'il a fonctionné puis a rapidement cédé. Le succès commercial de la liaison Manche encourage l'Atlantique. La tentative de **1865** casse ; en **1866**, le *Great Eastern* pose une liaison durable et récupère le câble cassé de 1865. ([Science History Institute — Communicating Underwater](https://www.sciencehistory.org/stories/magazine/communicating-underwater/))

Puis le relais quitte le fond. Telstar, conçu par Bell Labs et financé par AT&T, est lancé depuis Cape Canaveral le **10 juillet 1962**. En quelques heures, il relaie les premières images de télévision en direct vers la France ; il porte ensuite la première télévision transatlantique vue en Amérique, ainsi que téléphone, données et fac-similés. ([NASA — Telstar](https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/)) Le premier lot de **60** satellites Starlink est lancé le **24 mai 2019** ; la taille de la constellation change trop vite pour un chiffre unique. ([FCC — SpaceX experimental authorization narrative](https://apps.fcc.gov/els/GetAtt.html?id=233157&x=))

## Sources

- Institut Lumière — Cinématographe, Autochromes, histoire de la famille : <https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html> · <https://www.institut-lumiere.org/les-autochromes> · <https://www.institut-lumiere.org/lhistoire-de-la-famille-lumiere>
- Catalogue Lumière — FAQ Movies : <https://catalogue-lumiere.com/faq-movies/>
- Smarthistory / Library of Congress — Muybridge : <https://smarthistory.org/eadweard-muybridge-the-horse-in-motion/> · <https://www.loc.gov/item/97502309/>
- Science Museum Group — Roundhay Garden Scene : <https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene>
- National Science and Media Museum — Le Prince : <https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/>
- China Film Archive / Li Zhen — *Dingjunshan* : <https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03>
- Palace Museum ; British Museum — rouleaux : <https://www.dpm.org.cn/collection/paint/228226.html> · <https://www.britishmuseum.org/collection/object/A_1903-0408-0-1>
- Wang Xuan (1999) ; CCF Computing History : <https://finance.sina.com.cn/management/vision/1999-11-19/12733.html> · <https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml>
- United Daily News anniversaire : <https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html>
- CHM PostScript ; W3C CSS Snapshot : <https://computerhistory.org/blog/postscript-a-digital-printing-press/> · <https://www.w3.org/TR/CSS/>
- Perseus — Cicero, *De finibus* 1.32 : <https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A2007.01.0036%3Abook%3D1%3Asection%3D32>
- UVA Classics — Richard McClintock : <https://classics.as.virginia.edu/richard-mcclintock>
- Science History Institute ; NASA Telstar ; FCC Starlink (first 60, 24 May 2019) : <https://www.sciencehistory.org/stories/magazine/communicating-underwater/> · <https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/> · <https://apps.fcc.gov/els/GetAtt.html?id=233157&x=>

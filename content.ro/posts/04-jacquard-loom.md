---
title: "Războiul Jacquard"
weight: 4
date: 2026-01-01
draft: false
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 3
aliases:
  - /posts/01b-jacquard-loom/
tags: []
summary: "Cartelele perforate au făcut programul separat de mașina care îl rulează"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage nu a inventat controlul cu cartele perforate. L-a împrumutat.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Război Jacquard îngust la Musée d'art et d'industrie, Saint-Étienne" loading="lazy" width="1280">
<figcaption>Război Jacquard, Musée d'art et d'industrie, Saint-Étienne. Foto: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

Muzeele și ghidurile nu datează la fel. Musée des Arts et Métiers (Paris) notează că Joseph Marie Jacquard a luat un brevet pe **23 decembrie 1801** pentru o mașină destinată să înlocuiască *tireur de lacs* (tragătorul de sfori) la fabricarea stofelor broșate și modelate; maquette-ul din colecție e datat 1808 (Musée des Arts et Métiers, „Modèle : Métier original de Jacquard”, inv. 07641-0001-, text de Lionel Dufaux în *Guide des collections*, 2013, [arts-et-metiers.net](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard), accesat 2026-11-05). Computer History Museum plasează **demonstrația** din Lyon în **1801**: un lanț de cartele perforate decide care fire din urzeală se ridică la fiecare trecere a suveicii — gaură → ridicare, fără gaură → rămâne jos (Computer History Museum, „1801: Punched cards control Jacquard loom”, [computerhistory.org/storageengine/punched-cards-control-jacquard-loom/](https://www.computerhistory.org/storageengine/punched-cards-control-jacquard-loom/), accesat 2026-11-05; vezi și CHM Revolution, „The Punched Card’s Pedigree”, [computerhistory.org/revolution/punched-cards/2/4](https://www.computerhistory.org/revolution/punched-cards/2/4), accesat 2026-11-05). Science and Industry Museum (Manchester) datează **brevetul** mecanismului Jacquard cu cartele în **1804** — „When Joseph-Marie Jacquard … patented his invention in 1804” (Science and Industry Museum, „The story of the Jacquard loom”, [scienceandindustrymuseum.org.uk](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom), accesat 2026-11-05). Deci pe această pagină: **1801** pentru expoziție / demonstrație și pentru brevetul Arts et Métiers privind înlocuirea tragătorului de sfori; **1804** pentru data de brevet pe care o folosesc muzeele englezești pentru atașamentul cu cartele perforate. Schimbi cartelele, schimbi modelul. Războiul nu „știe” brocartul; execută o secvență fixă, codată fizic, de decizii ridică / nu ridică.

<!-- NEVERIFICAT: textul integral al brevetului INPI (nr. 245 / alte numere) nu a fost deschis aici; nu confirmăm dacă brevetul din 23.12.1801 descrie deja cartelele perforate sau doar mecanica de înlocuire a tireur de lacs. Secondary franceză (Académie de Paris) spune că primul brevet nu e mecanica cu cartele — nerefăcut pe INPI. Decretul napoleonian din 1805 (domeniu public / pensie) e menționat în surse secundare, dar nu e citat pe pagină fără o copie primară. -->

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Cartele perforate pe un război Jacquard la Museum of Science and Industry, Manchester" loading="lazy" width="249">
<figcaption>Cartele perforate pe un război Jacquard (Museum of Science and Industry, Manchester). Foto: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, domeniu public.</figcaption>
</figure>

Menabrea descrie explicit transferul: soluția ca mașina să-și asume singură dispozițiile succesive „a fost luată din aparatul lui Jacquard” folosit la stofele broșate; apoi introduce în Analytical Engine cele două specii de cartele — de operații și de variabile (Menabrea / Lovelace, *Sketch of the Analytical Engine invented by Charles Babbage, Esq.*, *Scientific Memoirs*, 1843, pasajul „taken from Jacquard's apparatus” și cele două specii de cards, [Fourmilab](https://www.fourmilab.ch/babbage/sketch.html), accesat 2026-11-05). Computer History Museum spune același lucru pe scurt: Analytical Engine e programabilă cu cartele perforate, idee împrumutată de la războiul Jacquard (CHM, „The Engines”, [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines), accesat 2026-11-05). Asta e abstracția: un program e o secvență de instrucțiuni, separată de mașina care o rulează.

Ada Lovelace, în *Notes* pe Menabrea, împinge implicația: mecanismul de operare ar putea acționa și asupra altor lucruri decât numerele, dacă relațiile lor fundamentale s-ar putea exprima prin știința abstractă a operațiilor — de pildă sunetele în armonie; și Note G conține diagrama de calcul a Numerelor lui Bernoulli (Lovelace, *Notes* A și G pe Menabrea, Fourmilab). Nu reeditez aici diagrama Bernoulli; ușa de ieșire e textul primar de pe Fourmilab.

**Ușa de ieșire:** Ada Lovelace, *Notes* pe Analytical Engine (pe traducerea lui Menabrea) — textul primar pentru schița Bernoulli și argumentul „nu doar numere”. Hartă: [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine).

Următorul: de ce capitolul mecanic încă modelează tot ce urmează — și de ce roțile singure nu puteau scala.

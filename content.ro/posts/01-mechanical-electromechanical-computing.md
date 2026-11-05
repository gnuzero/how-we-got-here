---
title: "Calcul mecanic și electromecanic"
weight: 2
date: 2026-01-01
draft: true
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 1
tags: []
summary: "Roțile dințate au forțat ideea de program; frecarea a forțat electricitatea"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

Calculul nu a început cu siliciul. A început cu roți dințate — și cu ideea că o secvență fizică de instrucțiuni poate fi separată de mașina care o execută.

## Motoarele lui Babbage: diferențe și analitică

Menabrea, în *Sketch of the Analytical Engine invented by Charles Babbage, Esq.* (traducerea engleză și *Notes* ale Adei Lovelace, *Scientific Memoirs*, 1843; text pe [Fourmilab](https://www.fourmilab.ch/babbage/sketch.html), accesat 2026-11-05), descrie întâi **Difference Engine**: o mașină al cărei nume vine din metoda diferențelor finite. Pentru un polinom de grad *m*, diferențele de ordin *m* sunt constante; repetând adunări pe coloane de diferențe, mașina reproduce valorile polinomului fără înmulțiri generale (Menabrea / Lovelace, *Sketch*, pasajul despre „method of differences” și teorema polinoamelor, Fourmilab). Nu e nevoie de electricitate: fiecare cifră e o coloană mecanică; un transfer (*carry*) e un eveniment fizic între roți.

Computer History Museum notează că Babbage a proiectat motoarele, dar nu le-a construit complet în epoca lui; prima Difference Engine No. 2 terminată după desenele originale a fost finalizată la Londra în 2002 — circa 8.000 de piese, cinci tone, unsprezece picioare lungime (Computer History Museum, „The Babbage Engine”, [computerhistory.org/babbage/](https://www.computerhistory.org/babbage/), accesat 2026-11-05).

Următorul pas din *Sketch* e **Analytical Engine**. Menabrea separă clar două organe: *mill* (unitatea aritmetică) și *store* (depozitul de numere), plus două specii de cartonașe perforate — *operation cards* (ce operație se face) și cartonașe care indică pe ce variabile / unde se scriu rezultatele (Menabrea / Lovelace, *Sketch*, secțiunile despre mill, store și cards, Fourmilab). Schimbi șirul de cartonașe, schimbi calculul — fără să reconstruiești mașina. Asta e, în limbajul de azi, separarea programului de datapath.

Babbage a anunțat pentru prima dată Difference Engine într-o lucrare citită la Royal Astronomical Society pe 14 iunie 1822, *A note respecting the application of machinery to the calculation of astronomical tables* (Science Museum, „Charles Babbage's Difference Engines and the Science Museum”, [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), accesat 2026-11-05).

## De ce contează cartonașele

*Sketch* insistă că șirul de operații comandate de cartonașe și rezultatele pot fi tratate ca o dezvoltare analitică pe care mașina o execută pas cu pas (Menabrea / Lovelace, *Sketch*, pasajele despre „series of operations commanded by the cards”, Fourmilab). Lovelace, în *Notes*, împinge implicația: dacă simbolurile de pe coloane nu sunt neapărat „numere”, ci orice simboluri pe care le-ați definit, mașina poate manipula și altceva decât aritmetică pură — argumentul clasic „nu doar numere” (Lovelace, *Notes* pe Menabrea, Fourmilab). Desk-ul ro nu reeditează aici programul Bernoulli; ușa de ieșire e textul primar de pe Fourmilab.

## Plafonul mecanic

Forma logică — instrucțiuni, unitate de execuție, stare ținută între pași — e deja aici. Ce calculul mecanic *nu* poate face e să scaleze: frecare, joc (*backlash*), toleranțe pe lanțul de roți. Fiecare cifră în plus face construcția mai grea. Plafonul ăsta — nu lipsa ideilor — împinge comutarea spre electricitate: relee, apoi tuburi. Următorul capitol.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Difference Engine No. 2 la Science Museum, Londra" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, Londra). Foto: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

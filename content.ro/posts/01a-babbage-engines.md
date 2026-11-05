---
title: "Motoarele lui Babbage"
weight: 3
date: 2026-01-01
draft: false
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 2
tags: []
summary: "Difference Engine și Analytical Engine — depozit, moară și un program pe cartonașe"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

Calculul nu a început cu electricitatea. A început cu roți dințate.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Difference Engine No. 2 la Science Museum, Londra" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, Londra). Foto: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Charles Babbage a anunțat pentru prima dată Difference Engine într-o lucrare citită la Royal Astronomical Society pe 14 iunie 1822, *A note respecting the application of machinery to the calculation of astronomical tables* (Science Museum, „Charles Babbage's Difference Engines and the Science Museum”, [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), accesat 2026-11-05). Mașina calculează funcții polinomiale prin metoda diferențelor finite, doar cu adunări repetate pe coloane de roți — fără electricitate (Computer History Museum, „The Engines”, [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines), accesat 2026-11-05; Menabrea / Lovelace, *Sketch of the Analytical Engine invented by Charles Babbage, Esq.*, *Scientific Memoirs*, 1843, pasajul despre metoda diferențelor și seria pătratelor, text pe [Fourmilab](https://www.fourmilab.ch/babbage/sketch.html), accesat 2026-11-05). Fiecare cifră e o coloană; un transfer (*carry*) e un eveniment fizic între roți.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Brațe de transfer între coloanele de cifre pe Difference Engine No. 2" loading="lazy" width="1280">
<figcaption>Brațe de transfer între coloanele de cifre pe Difference Engine No. 2, Serial #2 (Computer History Museum). Foto: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**Încearcă acum.** Pornește laboratorul de la Y=9, Δ₁=7. Roata unităților trece de 9; un dinte prinde zecile. 9+7 devine 16. Asta e metoda diferențelor finite pe un model didactic de coloane — metoda pentru care a fost gândit motorul.

{{< lab type="difference-engine" height="720" >}}

Original pentru această carte, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Model pedagogic de coloane, nu o reconstrucție completă a No. 2.

Computer History Museum notează că Babbage a inventat calculatoarele, dar nu le-a construit complet în epoca lui; prima Difference Engine No. 2 terminată după desenele originale a fost finalizată la Londra în 2002 — circa 8.000 de piese, cinci tone, unsprezece picioare lungime (Computer History Museum, „The Babbage Engine”, [computerhistory.org/babbage/](https://www.computerhistory.org/babbage/), accesat 2026-11-05). Science Museum descrie și o porțiune demonstrativă din Difference Engine No. 1 (circa 2.000 de piese), asamblată de Joseph Clement și terminată în 1832 — „porțiunea terminată a motorului neterminat”, cam o șeptime din proiectul complet; lucrul s-a oprit brusc în 1833 după un conflict cu Clement (Science Museum, art. cit., accesat 2026-11-05). Computer History Museum, pe pagina „The Engines”, plasează oprirea construcției No. 1 în 1832, tot după disputa cu Clement, iar finanțarea guvernamentală e tăiată în 1842 (CHM, „The Engines”, accesat 2026-11-05). <!-- NEVERIFICAT: reconcilierea fină 1832 vs 1833 între cele două pagini de muzeu; pe pagină păstrăm ambele formulări cu sursa lor. -->

Următorul proiect, **Analytical Engine**, e strămoșul conceptual al calculatorului general. Menabrea separă clar două organe: *mill* (aparatajul care execută operațiile aritmetice) și coloanele de *Variables*, pe care le numește un *store* de numere acumulate de moară; plus două specii de cartonașe — *Operation cards* (ce operație se face) și cartonașe ale variabilelor (pe ce coloane apar rezultatele) (Menabrea / Lovelace, *Sketch*, secțiunile despre mill, store și cele două specii de cards, Fourmilab). Computer History Museum rezumă aceeași separare *Store* / *Mill* și notează că ideea cartonașelor perforate e împrumutată de la războiul Jacquard (CHM, „The Engines”, accesat 2026-11-05). Schimbi șirul de cartonașe, schimbi calculul — fără să reconstruiești mașina.

Emulatorul găzduit mai jos e Analytical Engine de pe Fourmilab (John Walker). Pașii pe cartonașe schimbă coloanele de la moară și depozit. Domeniu public; găzduim o copie și păstrăm legătura de origine.

{{< lab type="analytical-engine" height="780" >}}

Origine: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [arhiva sursă](https://www.fourmilab.ch/babbage/release/aemsource.zip) (domeniu public). Hărți: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine).

Împrumutul cartonașelor e următoarea oprire: războiul Jacquard și separarea programului de mașină.

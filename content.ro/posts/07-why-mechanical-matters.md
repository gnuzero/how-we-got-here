---
title: "De ce contează calculul mecanic"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "Forma logică a venit în alamă; frecarea a forțat electricitatea"
image_prompt: "Minimal diagram: store + mill + instruction sequence as three boxes, then an arrow to electrical switching, clean technical infographic, white background"
video_prompt: "15-second motion graphic: gears morphing into relay contacts, same instruction-store-execute shape preserved, clean light background"
schematics: "Diagram: instruction sequence + execution unit + store — logical shape that survives medium change"
---

Seturile de instrucțiuni, programele pe suport separat, controlul separat de datapath — toate au rădăcini în motoarele lui Babbage și în cartelele lui Jacquard. Menabrea separă deja *mill* și *store* și două specii de cartele de instrucțiuni (Menabrea / Lovelace, *Sketch of the Analytical Engine invented by Charles Babbage, Esq.*, *Scientific Memoirs*, 1843, secțiunile despre mill, store și cards, [Fourmilab](https://www.fourmilab.ch/babbage/sketch.html), accesat 2026-11-05). Computer History Museum rezumă aceeași structură logică a Analytical Engine: memorie (*Store*) separată de procesorul aritmetic (*Mill*), plus intrare/ieșire pe cartele (Computer History Museum, „The Engines”, [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines), accesat 2026-11-05). Mediul se schimbă complet (relee, tuburi, tranzistoare). Forma logică nu: o secvență de instrucțiuni, o unitate de execuție care le duce la bun sfârșit și un depozit care ține starea între pași.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="Difference Engine No. 2, Serial #2 la Computer History Museum" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2, Serial #2 (Computer History Museum) — al doilea exemplar, terminat în 2008 după desenele din secolul al XIX-lea. Foto: <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Computer History Museum anunță pe 5 mai 2008 deschiderea expoziției cu al doilea exemplar al Difference Engine No. 2: construit la Londra, circa 8.000 de piese, cinci tone, unsprezece picioare lungime și șapte înălțime; primul exemplar e cel de la Science Museum, Londra, terminat în 2002 (Computer History Museum, comunicat „The Computer History Museum Debuts Charles Babbage's Difference Engine No. 2…”, 5 mai 2008, [computerhistory.org/press-releases/babbage-engine-exhibit/](https://computerhistory.org/press-releases/babbage-engine-exhibit/), accesat 2026-11-05). Pagina „A Modern Sequel” a aceluiași muzeu confirmă că duplicatul a fost demonstrat public la CHM din mai 2008 până în ianuarie 2016 (CHM, „A Modern Sequel”, [computerhistory.org/babbage/modernsequel/](https://www.computerhistory.org/babbage/modernsequel/), accesat 2026-11-05).

Ce calculul mecanic *nu* a putut face, în viața lui Babbage, a fost să scaleze. Science Museum notează că formele complicate cereau scule speciale și sute de piese aproape identice, într-o cultură inginerească între meșteșug și producția de serie; proiectul No. 1 a costat Trezoreria 17.500 de lire — echivalentul a douăzeci și două de locomotive cu aburi noi de la Robert Stephenson în 1831 — și a fost considerat un eșec costisitor (Science Museum, „Charles Babbage's Difference Engines and the Science Museum”, [sciencemuseum.org.uk](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), accesat 2026-11-05). Computer History Museum spune pe scurt că, în afară de ansambluri parțiale și modele de încercare, niciun proiect al lui Babbage nu a fost realizat fizic în întregime în timpul vieții lui (CHM, „The Engines”, accesat 2026-11-05). Plafonul ăsta — nu lipsa ideilor — împinge comutarea spre electricitate.

Reconstrucțiile de mai sus sunt excepția care confirmă regula: odată ce atelierele au putut ține toleranțele, desenul de alamă a mers. Forma logică era deja acolo. Mediul a trebuit să se schimbe primul.

Următorul: relee și logica electromecanică care duc arhitectura în al Doilea Război Mondial.

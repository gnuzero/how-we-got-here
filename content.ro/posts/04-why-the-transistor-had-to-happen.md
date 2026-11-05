---
title: "De ce trebuia să apară tranzistorul"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 6
tags: []
summary: "Dimensiune, putere, fiabilitate — trei plafoane ale tubului care au făcut comutarea solid-state inevitabilă"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

La începutul anilor 1950, tubul vidat demonstrase deja conceptul: comutare electronică, fără piese în mișcare, viteză de ordinul microsecundelor (*First Draft*, §4.3 — vezi capitolul 03). Ce nu rezolvase era *scara*. Fiecare tub în plus adaugă căldură, putere și încă o șansă de defect. Tranzistorul nu a înlocuit tubul pentru că era o jucărie elegantă — l-a înlocuit pentru că fizica tubului avea un plafon dur, iar calculul trebuia să treacă dincolo de el.

## Trei constrângeri, un gât de sticlă

**Dimensiune.** Un tub vidat are nevoie de un balon de sticlă evacuat, suficient de mare ca să separe catodul, grila și anodul, și suficient de rezistent ca să țină vidul. Există o podea pe cât de mic poate fi. Un tranzistor e *solid-state* — fără vid, fără balon — iar dimensiunea lui e dată de precizia de fabricație, nu de fizica unei camere evacuate. E o curbă de scalare diferită; e cea care ajunge, mai târziu, la miliarde de tranzistoare pe un singur die (Faza 8).

**Putere.** Catodul unui tub trebuie încălzit pentru emisie termionică — filamentul consumă și când tubul nu comută. Înmulțit cu zeci de mii de tuburi: ENIAC la circa **150 kW**, pe pagina instituțională Penn Engineering (Penn Engineering, „What ENIAC Was…”, [engineering.upenn.edu/…/eniac/](https://www.engineering.upenn.edu/about/history-heritage/eniac/), accesat 2026-11-05). Un tranzistor nu are filament; comută modulând o regiune de epuizare sau un canal, cu putere de așteptare neglijabilă față de încălzirea termionică. Asta e cel mai mare motiv pentru care mașinile tranzistorizate au putut fi mult mai dense fără să se topească.

**Fiabilitate.** Tuburile cedează prin arderea filamentului și degradarea etanșării — uzură încorporată în ciclul termic normal. Toma descrie, pe CIFA-1, verificarea la fiecare pornire a lămpilor arse și scăderea fiabilității din cauza celor ~5 kVA (Toma, interviu *Market Watch* 2008, [Cronica IT&C](https://cronica-it.github.io/amintiri/2008/vtoma-amintiri-inceputuri/), accesat 2026-11-05). Tranzistoarele solid-state nu împărtășesc *același* mecanism de defect (filament + vid).

## Ce a sosit la Bell Labs

Premiul Nobel pentru Fizică 1956 a fost acordat lui William Bradford Shockley, John Bardeen și Walter Houser Brattain „for their researches on semiconductors and their discovery of the transistor effect” (Nobel Prize Outreach, „The Nobel Prize in Physics 1956”, [nobelprize.org/prizes/physics/1956/summary/](https://www.nobelprize.org/prizes/physics/1956/summary/), accesat 2026-11-05).

John Bardeen, în prelegerea Nobel din 11 decembrie 1956, plasează descoperirea efectului de tranzistor în cursul unui program fundamental de cercetare a semiconductorilor — în special germaniu și siliciu — la Bell Telephone Laboratories, sub direcția generală a lui Shockley; Brattain lucra mai ales pe proprietăți de suprafață (Bardeen, Nobel Lecture, 11 Dec. 1956, pp. 318–319 ale textului tipărit; PDF [nobelprize.org/uploads/2018/06/bardeen-lecture.pdf](https://www.nobelprize.org/uploads/2018/06/bardeen-lecture.pdf), accesat 2026-11-05). Forma tip *point-contact* e cea în care Bardeen și Brattain au încorporat efectul; Shockley dezvoltă ulterior structura pe joncțiune (Bardeen, ibid.; Shockley, Nobel Lecture, 11 Dec. 1956, PDF [shockley-lecture.pdf](https://www.nobelprize.org/uploads/2018/06/shockley-lecture.pdf), accesat 2026-11-05, pasajele despre junction transistor).

<!-- NEVERIFICAT din APS Phys. Rev. 74 (Bardeen–Brattain 1948): articolul returnează 403 la fetch automat. Nu cităm cifre din el; vezi SOURCES-B1 („unverified by automated fetch”). Data „1947” pentru demonstrația de laborator e standard în narațiunea Bell Labs / Nobel, dar articolul de jurnal nu a fost deschis aici. -->

## De ce „trebuia să apară”

Tubul rezolvase viteza față de releu (*First Draft*, §4.3). Nu rezolvase densitatea, puterea de așteptare și defectul de filament. Tranzistorul atacă exact acel triunghi. Nu înseamnă că dispozitivul a sosit gata: fizica *modului* în care comută — semiconductori, dopare, bandă interzisă — încă trebuia înțeleasă și inginerită. Asta e alt subiect decât *de ce* trebuia să apară. Capitolul 05 începe acolo.

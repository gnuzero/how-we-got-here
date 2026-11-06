---
title: "Semiconductori de la primele principii"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Fizică și dispozitive"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "O bandă interzisă pe care o poți împinge în ambele sensuri — doparea face din siliciu un comutator controlabil"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

Siliciul nu e special pentru că e „magic”. E special pentru că structura lui de benzi stă acolo unde poți *controla* conducția, în loc să trăiești cu ea mereu pornită sau mereu oprită.

## De ce contează un gap pe care îl poți traversa

Walter H. Brattain, în prelegerea Nobel din 11 decembrie 1956, fixează ordinele de mărime pe care le folosim aici: gap-ul e „approximately three quarters of an electron volt for germanium, one electron volt for silicon”, și variază la alți semiconductori de la zecimi la câțiva electron-volți (Brattain, Nobel Lecture, 11 Dec. 1956; PDF [brattain-lecture.pdf](https://www.nobelprize.org/uploads/2018/06/brattain-lecture.pdf), accesat 2026-11-05, pasajul despre p–n junction model / gap).

Într-un metal, benzile de valență și de conducție se suprapun — electronii se mișcă liber; nu poți opri asta cu tensiuni rezonabile. Într-un izolator, gap-ul interzis e uriaș; nu poți porni conducția. Un semiconductor stă la mijloc. Gap-ul siliciului, de ordinul **1 eV** la Brattain (ibid.), e suficient de mic încât un câmp modest (sau puțină căldură / lumină) să pună purtători unde conduc, și suficient de mare încât la temperatura camerei materialul să nu fie deja inundat. Proprietatea „împingibilă în ambele sensuri” e ce îi trebuie unui tranzistor. Plafonul tubului din capitolul 04 era dimensiune, putere, fiabilitate; remediul începe aici, într-un solid pe care îl poți dopa și controla cu câmp.

Valorile de referință actuale la 300 K sunt **1,12 eV** pentru siliciu și **0,66 eV** pentru germaniu (Ioffe Institute, NSM Archive, „Band structure and carrier concentration” pentru [Si](http://www.ioffe.ru/SVA/NSM/Semicond/Si/bandstr.html) și [Ge](http://www.ioffe.ru/SVA/NSM/Semicond/Ge/bandstr.html), accesat 2026-11-05) — în acord cu ordinele de mărime ale lui Brattain.

## De ce a câștigat siliciul asupra germaniului

Germaniul a fost materialul experimentului point-contact de la Bell Labs — Bardeen descrie golurile introduse din contactul de aur în germaniul de tip *n* — în cadrul programului pe Ge și Si din anii ’40 (Bardeen, Nobel Lecture, 11 Dec. 1956, PDF [bardeen-lecture.pdf](https://www.nobelprize.org/uploads/2018/06/bardeen-lecture.pdf), accesat 2026-11-05). Siliciul a luat jocul lung. Gap-ul mai lat (Brattain: ~1 eV față de ~¾ eV la Ge) înseamnă, calitativ, mai mult spațiu termic înainte ca purtătorii intrinseci să înece semnalul. Bardeen notează că atomii de impuritate din Ge și Si cu mai mult de patru electroni de valență (ex. arsen, grupa V) se substituie în rețea și donează electroni — baza dopării de tip *n* (Bardeen, ibid., pasajul despre impurity atoms). Shockley dezvoltă fizica joncțiunii și a dispozitivelor pe joncțiune în propria prelegere (Shockley, Nobel Lecture, 11 Dec. 1956, PDF [shockley-lecture.pdf](https://www.nobelprize.org/uploads/2018/06/shockley-lecture.pdf), accesat 2026-11-05).

<!-- NEVERIFICAT aici: calitatea interfeței Si/SiO₂ crescut termic ca motiv industrial al MOSFET — e standard în narațiunea dispozitivelor, dar nu e o cifră din prelegerile Nobel 1956 pe care le-am deschis. O lăsăm pentru capitolul 06, cu sursă primară. -->

## Dopare: de la cristal la comutator

Siliciul intrinsec conduce prost și uniform. Doparea introduce impurități în urme care fixează *tipul* și *concentrația* de purtători. Bardeen (Nobel Lecture, 1956) descrie substituția unui atom din grupa V (ex. arsen) pe locul unui atom de germaniu/siliciu: un electron de valență rămâne slab legat — material de tip *n*. Completarea simetrică (grupa III, un electron de valență în minus) lasă o legătură lipsă — un *gol* (*hole*) care se comportă ca purtător mobil pozitiv — tip *p* (Bardeen, ibid.; Brattain, ibid., modelul p–n).

Niciunul singur nu e un comutator. Punerea lor față în față — o **joncțiune p–n** — e blocul de construcție al diodelor și al tranzistoarelor care urmează. Brattain folosește explicit joncțiunea p–n dintr-un monocristal de semiconductor „such as silicon or germanium” ca model de dublu strat de sarcină (Brattain, Nobel Lecture, 1956). Capitolul 06 preia de aici: cum o joncțiune (sau un canal controlat de grilă) face din siliciul dopat ceva pe care un semnal extern îl poate aprinde și stinge.

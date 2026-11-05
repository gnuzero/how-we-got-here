---
title: "Tranzistorul: de la BJT la MOSFET"
weight: 9
date: 2026-01-01
draft: false
phase: "2 — Fizică și dispozitive"
series_index: 8
tags: []
summary: "Doi tranzistori, două fizici: BJT-ul cere curent de bază, MOSFET-ul se comandă prin câmp, printr-un oxid izolator, și asta a deschis drumul densității"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

Cuvântul „tranzistor” acoperă două familii de dispozitive care comută pe baza unor fizici diferite. Potrivit Computer History Museum, una dintre ele a ajuns să domine producția de cipuri (vezi mai jos). Capitolul 05 s-a oprit la joncțiunea p–n. Aici urmărim ce s-a construit pe ea și ce a venit după.

## Primul pas: un tranzistor fragil, cu contacte punctiforme

Computer History Museum datează primul amplificator cu semiconductor reușit la 16 decembrie 1947: Bardeen și Brattain au apăsat două contacte de aur, foarte apropiate, pe o plăcuță de germaniu de înaltă puritate, iar tensiunea pe un contact a modulat curentul prin celălalt, cu o amplificare a semnalului de „up to 100 times” (CHM, *The Silicon Engine*, „1947: Invention of the Point-Contact Transistor”, [link](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/), accesat 2026-11-05). Aceeași pagină notează că Bell Labs a anunțat public dispozitivul pe 30 iunie 1948 și că, în ciuda construcției mecanice delicate, s-au produs multe mii de bucăți, sub denumirea de catalog „Type A” (ibid.).

Fragilitatea aceasta contează pentru restul poveștii. CHM scrie că Shockley a recunoscut că o configurație mecanică atât de delicată ar fi greu de fabricat în volum mare cu fiabilitate suficientă (CHM, „1948: Conception of the Junction Transistor”, [link](https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/), accesat 2026-11-05).

## BJT: curentul comandă curentul

Pe 23 ianuarie 1948, Shockley a conceput un tranzistor diferit, construit pe joncțiunea p–n, un „sandviș” din trei straturi de semiconductor de tip n și p separate de joncțiuni (CHM, „1948: Conception of the Junction Transistor”, ibid.). Mecanismul pe care îl invoca era *minority carrier injection* (injecția de purtători minoritari): golurile pot traversa volumul germaniului, nu doar un strat de suprafață. CHM spune că așa funcționează toate tranzistoarele bipolare cu joncțiuni (BJT, *bipolar junction transistor*) de azi (ibid.).

Din această descriere rezultă diferența de comandă. Într-un BJT, ca să conducă tranzistorul, trebuie să injectezi purtători prin joncțiunea bază–emitor, deci baza consumă curent cât timp dispozitivul e menținut în conducție. <!-- NEVERIFICAT: întreaga frază e o deducție a noastră, nu o afirmație a CHM; formularea cantitativă (I_C ≈ β·I_B, ordinul de mărime al lui β) nu provine din sursele deschise în această sesiune; am păstrat doar ideea calitativă, dedusă din descrierea CHM a injecției de purtători. -->

Fabricarea a durat. CHM notează că au mai trecut doi ani până când Bell Labs a avut procese pentru producție în cantitate (CHM 1948, ibid.). Gordon Teal a crescut monocristale mari de germaniu, cu o tehnică pornită de la metoda lui Jan Czochralski din 1917, iar Morgan Sparks a format joncțiuni adăugând în topitură pastile de impurități (CHM, „1951: First Grown-Junction Transistors Fabricated”, [link](https://www.computerhistory.org/siliconengine/first-grown-junction-transistors-fabricated/), accesat 2026-11-05). Potrivit aceleiași pagini, în aprilie 1950 cei doi au început să adauge succesiv o impuritate de tip p și una de tip n, obținând structuri n-p-n cu o bază subțire, iar Bell Labs a anunțat tranzistoarele *grown-junction* pe 4 iulie 1951 (ibid.).

## MOSFET: tensiunea comandă un canal

Ideea unui tranzistor cu efect de câmp e mai veche decât BJT-ul. CHM scrie că FET-ul cu grilă izolată fusese „long anticipated by Lilienfeld, Heil, Shockley and others” (CHM, „1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated”, [link](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), accesat 2026-11-05). Obstacolul erau stările de suprafață (*surface states*), care împiedicau câmpul electric să pătrundă în semiconductor (ibid.).

Potrivit aceleiași pagini CHM, în 1959 M. M. (John) Atalla și Dawon Kahng de la Bell Labs au obținut primul FET cu grilă izolată reușit (ibid.). Studiind straturi de dioxid de siliciu crescute termic, au constatat că stările de suprafață scad mult la interfața dintre siliciu și oxidul lui (ibid.). Structura e un sandviș metal (grila), oxid (izolația) și siliciu (semiconductorul), de unde numele MOSFET (ibid.). Brevetul lui Kahng, „Electric Field Controlled Semiconductor Device”, US 3,102,230, a fost depus pe 31 mai 1960 și acordat pe 27 august 1963 (Google Patents, data depunerii 1960-05-31, data publicării 1963-08-27, [US3102230A](https://patents.google.com/patent/US3102230A/en), accesat 2026-11-05; aceeași referință apare în lista de documente a paginii CHM 1960).

Asta e diferența esențială față de BJT. Grila e separată de canal printr-un izolator, așa că o tensiune pe grilă controlează conducția canalului prin câmp electric, (CHM 1960, ibid., descrierea structurii M-O-S și a câmpului care trebuie să pătrundă în semiconductor), deci fără injecție de purtători prin grilă. <!-- NEVERIFICAT: precizarea „fără injecție de purtători prin grilă” e deducția noastră; afirmația că MOSFET-ul „nu consumă curent de grilă în regim static” e formulată aici calitativ, ca urmare a izolației de oxid; nu am deschis o fișă tehnică sau un manual care să dea curentul de grilă. -->

CHM mai notează că regiunea de conducție a unui MOS poate fi de tip p („p-channel”) sau n („n-channel”) și că dispozitivele cu canal n sunt mai rapide, dar mai greu de fabricat (CHM 1960, ibid.). Lucrul acesta devine important în capitolul 07, unde cele două tipuri se combină.

## De ce a câștigat MOSFET-ul în logica digitală

La început, MOSFET-ul nu a câștigat. CHM scrie că dispozitivul de la Bell Labs era lent și nu rezolva o nevoie presantă a sistemului telefonic, așa că nu a fost dezvoltat mai departe (CHM 1960, ibid.). Totuși, într-un memoriu din 1961, Kahng îi remarca „ease of fabrication and the possibility of application in integrated circuits” (ibid.). Cercetătorii de la Fairchild și RCA au văzut avantajul: în 1962, Heiman și Hofstein au făcut la RCA un dispozitiv integrat experimental cu 16 tranzistori (ibid.). Dispozitivele MOS au ajuns pe piață în 1964, cu GME 1004 și Fairchild FI 100 (canal p) și RCA 3N98 (canal n) (ibid.).

Motivul invocat de CHM pentru dominația de azi e unul singur: dimensiunea mai mică și consumul mai mic decât al dispozitivelor bipolare, care fac ca „over 99 percent of microchips produced today use MOS transistors” (CHM 1960, ibid.). Cifra de 99% e afirmația muzeului, pe o pagină nedatată, nu o măsurătoare pe care am putea-o verifica independent.

Atenție la ordinea faptelor: același text spune că atingerea acestei ubicuități „took decades of effort” (ibid.). BJT-ul nu a dispărut imediat: CHM notează că RAM-urile bipolare au servit ca memorii rapide de tip *cache* (CHM, „1966: Semiconductor RAMs Serve High-speed Storage Needs”, vezi capitolul 10). Pasul următor, capitolul 07, arată cum CMOS a transformat MOSFET-ul într-o poartă logică cu un consum în repaus „close to zero” (CHM 1963, citat în capitolul 07).

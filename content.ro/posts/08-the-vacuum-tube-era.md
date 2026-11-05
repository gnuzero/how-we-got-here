---
title: "Era tuburilor vidate"
weight: 8
date: 2026-01-01
draft: false
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 7
aliases:
  - /posts/03-the-vacuum-tube-era/
tags: []
summary: "Tuburile au scos piesele în mișcare — și au schimbat viteza pe căldură, putere și defecte"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

Șiretlicul de bază al tubului vidat: controlezi un curent mare cu unul mic, fără piese în mișcare. Asta a făcut calculatoarele cu ordine de mărime mai rapide decât orice pe relee — și a făcut din epocă o luptă permanentă cu căldura, puterea și rata de defecte.

## Cum comută un triod

Von Neumann, în *First Draft of a Report on the EDVAC* (30 iunie 1945; ediția Godfrey, *IEEE Annals* 15(4), 1993; PDF [people.csail.mit.edu](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), accesat 2026-11-05), alege tuburile vidate „of the conventional radio tube type” ca elemente ale unui dispozitiv de calcul foarte rapid (§4.3). Elementul e folosit ca valvă de curent (*gate*) sau, în combinații, ca trigger cu două echilibre — „all-or-none” (§5.1). Grila acționează ca valvă pe circuitul catod–placă; nimic nu se mișcă în afară de electroni (§4.1).

Comparația de viteză e cantitativă în același paragraf: agregate cu tuburi, fiabile la întârzieri de ordinul **unei microsecunde**; releele telegrafice practice, de ordinul **10 milisecunde** sau mai mult (von Neumann / Godfrey, *First Draft*, §4.3). Diferența e de aproximativ o mie de ori — exact motivul pentru care epoca tuburilor a existat.

## ENIAC: comutatorul de 30 de tone

Electronic Numerical Integrator and Computer (ENIAC) a fost anunțat public pe **14 februarie 1946** ca primul calculator electronic de uz general; a fost construit și operat la Moore School of Electrical Engineering (azi parte din Penn Engineering) (Penn Engineering, „Celebrating Penn Engineering History: ENIAC”, [engineering.upenn.edu/…/eniac/](https://www.engineering.upenn.edu/about/history-heritage/eniac/), accesat 2026-11-05).

Aceeași pagină instituțională, în secțiunea „What ENIAC Was and How it Worked”, dă cifrele pe care le cităm aici (Penn Engineering, ibid., accesat 2026-11-05):

- încăpere de circa **30 × 50** picioare; greutate **30** de tone;
- **40** de panouri, aranjate în U pe o față de circa **80** de picioare;
- circa **18.000** de tuburi vidate;
- circa **500.000** de îmbinări lipite, **70.000** de rezistoare, **10.000** de condensatoare;
- linii de alimentare dedicate; consum circa **150** kW.

Mauchly a fost viziunea pe tuburi și mecanică; Eckert a rezolvat problemele de inginerie — inclusiv fiabilitatea tuburilor, rulate la un sfert din puterea nominală (Penn Engineering, ibid.). Șase femei (printre care Kathleen McNulty Mauchly Antonelli, Jean Jennings Bartik, Betty Snyder Holberton, Marlyn Wescoff Meltzer, Frances Bilas Spence, Ruth Lichterman Teitelbaum) au programat mașina prin cabluri și comutatoare; când ENIAC a fost prezentat la Penn în februarie 1946, două dintre ele pregătiseră rularea de test care a impresionat presa (Penn Engineering, „The Women of ENIAC”, ibid.).


## De ce totul se încălzea

Catodul unui tub trebuie încălzit pentru emisie termionică — filamentul consumă și când tubul nu „calculează”. Înmulțiți cu zeci de mii de tuburi: puterea ENIAC de mai sus. Von Neumann subliniază totodată că, la viteza tubului, merită să *serializați* operațiile pe mai puține elemente, în loc să paralelați pe scumpetea tipică releelor (*First Draft*, §5.5). Căldura, puterea și defectele de filament sunt plafonul pe care capitolul 04 îl tratează ca motivație a tranzistorului.

<!-- NEVERIFICAT pe primară deschisă aici: raportul tehnic Burks–Goldstine–von Neumann 1946 (PDF IAS descărcat, dar scan fără text extractabil de pdftotext — vezi SOURCES-B1). Nu cităm cifre din el. -->

## Sidebar: CIFA-1 și MECIPT — tuburi în România

**CIFA-1.** Victor Toma, într-un interviu din *Market Watch* nr. 103 (24 martie 2008), republicat pe Cronica IT&C, spune că în **aprilie 1957**, după patru ani de muncă la Institutul de Fizică Atomică (IFA), a anunțat în publicațiile Academiei Române primul calculator electronic românesc, CIFA-1 (Toma, interviu 2008, [cronica-it.github.io/…](https://cronica-it.github.io/amintiri/2008/vtoma-amintiri-inceputuri/), accesat 2026-11-05). Cifrele pe care le dă el însuși în acel text:

- circa **50** de operații pe secundă, pe numere cu **9** cifre plus semn;
- **1.500** de tuburi electronice;
- memorie pe cilindru magnetic de **512** cuvinte, limitată de rotația de **3.000** ture/min;
- consum circa **5** kVA — supraîncălzire și fiabilitate scăzută; la fiecare pornire se verificau lămpile arse (Toma, ibid.).

Ștefan Iancu (AOS, 2013) plasează același fir: proiect prezentat la Dresda (1955), CIFA-1 cu ~1.500 de tuburi pus în funcțiune la IFA în 1957 (Iancu atribuie începutul proiectului, în 1953, lui Victor Toma); urmează CIFA-2 (~800 tuburi, 1959), CIFA-3 (1961, Centrul de calcul al Universității din București), CIFA-4 (1962) (Iancu, *Annals of the Academy of Romanian Scientists*, Series on Information Science and Technology, Vol. 6 Nr. 2, 2013, §2, [PDF](https://aos.ro/wp-content/anale/IFVol6Nr2Art.4.pdf), accesat 2026-11-05). Articolul primar al lui Toma din *Buletin Științific* (1957) e înregistrat bibliografic, dar **nu a putut fi deschis** în această sesiune — vezi NOTES-B1.

**MECIPT.** Iancu (2013, același §2) notează că la Institutul Politehnic din Timișoara a fost realizat MECIPT-1 în **1961**, cu tuburi, de inginerul William Lövenfeld și matematicianul Joseph Kaufmann; în 1962–1968, cu participarea lui Vasile Baltac, au urmat MECIPT-2 și MECIPT-3, complet tranzistorizate (Iancu, 2013, §2, citând M. Drăgănescu, 2001). Nu am deschis sursa Drăgănescu 2001; pentru MECIPT cităm doar afirmația din Iancu 2013 și marcăm detaliile tehnice fine ca <!-- NEVERIFICAT --> până la o primară.

Niciun claim Felix aici: fără sursă deschisă, fără text.

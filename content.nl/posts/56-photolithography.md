---
title: "Fotolithografie: een patroon kleiner maken"
weight: 56
date: 2026-01-01
draft: false
phase: "8 — Fabricage en procesgeneraties"
series_index: 55
aliases:
  - /posts/48-photolithography/
  - /posts/54-photolithography/
  - /posts/55-photolithography/
tags: []
summary: "ASML, EUV en de prijs van kortgolviger licht: een Nederlandse en Vlaamse ingang tot chipfabricage."
---

Teken twee evenwijdige lijnen, dicht naast elkaar. Stel je nu voor dat je dat patroon met licht op een oppervlak moet afbeelden. Welke knop zou je willen hebben om ze nog dichter bij elkaar te zetten?

ASML vat de lithografische resolutie samen met **CD = k₁ · λ / NA**: de kritische afmeting CD hangt af van de golflengte λ, de numerieke apertuur NA van de optiek en een procesafhankelijke factor k₁. ([ASML, *The Rayleigh criterion*](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion)) Volgens die beschrijving zijn er drie hefbomen: kortgolviger licht, een grotere numerieke apertuur en verbeteringen aan het proces die k₁ verlagen. ([ASML, *The Rayleigh criterion*](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion))

## Van Eindhoven naar een gedeelde ontwikkelopgave

Volgens ASML’s eigen bedrijfsgeschiedenis richtten Philips en ASM International in 1984 ASM Lithography op, aanvankelijk gevestigd naast een Philips-kantoor in Eindhoven. ([ASML, *History*, jaren 1980](https://www.asml.com/en/company/about-asml/history)) Dezelfde geschiedenis vermeldt een verhuizing naar Veldhoven in 1985 en het begin van de samenwerking met Carl Zeiss in 1986. ([ASML, *History*](https://www.asml.com/en/company/about-asml/history))

Het Vlaamse aanknopingspunt is geen claim dat één stad EUV heeft uitgevonden: ASML beschrijft leveringen van EUV-demonstratiemachines in augustus 2006 aan onderzoeksinstellingen in Albany en aan imec in Leuven. ([ASML, *EUV lithography systems*, *Early days of EUV*](https://www.asml.com/en/products/euv-lithography-systems)) De ontvangers gebruikten deze prototypes volgens die bron om de technologie en haar plaats in de halfgeleiderfabricage te onderzoeken. ([ASML, *EUV lithography systems*](https://www.asml.com/en/products/euv-lithography-systems))

**Bronbeperking:** deze geschiedenis en de machinespecificaties hieronder komen van de leverancier zelf. Lees de historische mijlpalen als ASML’s eigen verslag en de prestatiecijfers als fabrikantspecificaties, niet als onafhankelijke metingen.

## Eerste hefboom: een kortere golf

ASML beschrijft argonfluoride-lasers voor DUV-lithografie met een golflengte van 193 nm, tegenover 13,5 nm voor EUV. ([ASML, *Light and lasers*](https://www.asml.com/en/technology/lithography-principles/light-and-lasers)) De overgang naar een andere golflengte vraagt volgens ASML niet alleen een nieuwe lichtbron, maar ook andere optische materialen, resistmaterialen en processen. ([ASML, *The Rayleigh criterion*](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion))

De EUV-bron gebruikt volgens de productbeschrijving een CO₂-laser die twee pulsen op een bewegende tindruppel afvuurt: het tin verdampt en er ontstaat EUV-licht. ([ASML, *EUV lithography systems*, *Light source*](https://www.asml.com/en/products/euv-lithography-systems)) ASML beschrijft op de pagina over lichtbronnen de eerste puls als het afplatten van de druppel en de tweede als de vorming van een lichtgevende plasmawolk. ([ASML, *Light and lasers*](https://www.asml.com/en/technology/lithography-principles/light-and-lasers))

Daarmee is het licht nog niet bij de chip. EUV wordt ook door lucht geabsorbeerd; daarom moet volgens ASML het hele lichtpad van bron tot wafer in hoogvacuüm liggen. ([ASML, *EUV lithography systems*, *Vacuum chamber*](https://www.asml.com/en/products/euv-lithography-systems)) De optische kolom gebruikt meerlaagse spiegels in plaats van lenzen, terwijl ook het reticle — de drager van het patroon — reflecterend is. ([ASML, *EUV lithography systems*, *Optical column* en *Reticle*](https://www.asml.com/en/products/euv-lithography-systems)) Korter licht verandert hier dus meerdere delen van het systeem tegelijk. ([ASML, *The Rayleigh criterion*](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion); [*EUV lithography systems*](https://www.asml.com/en/products/euv-lithography-systems))

## Tweede hefboom: meer numerieke apertuur

ASML geeft voor het NXE-platform een NA van 0,33 en een resolutie van 13 nm, en voor het EXE-platform een NA van 0,55 en een resolutie van 8 nm. ([ASML, *EUV lithography systems*, *NXE systems* en *EXE systems*](https://www.asml.com/en/products/euv-lithography-systems)) Beide gebruiken volgens die productpagina licht met een golflengte van 13,5 nm. ([ASML, *EUV lithography systems*](https://www.asml.com/en/products/euv-lithography-systems))

Probeer de verhouding na te rekenen. Houd λ en k₁ voor deze **eigen rekenoefening** constant; vergelijk vervolgens 0,33 / 0,55 = 0,60. Binnen dat vereenvoudigde model wordt de kritische afmeting dus 60% van de oude waarde. ([Eigen berekening uit de Rayleigh-formule](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion), met [de NA-waarden van ASML](https://www.asml.com/en/products/euv-lithography-systems)) Dat is een modelvergelijking, geen meting van een specifieke productielijn.

De golflengte en de afmeting van een gedrukt detail zijn daarmee niet dezelfde grootheid: in de formule spelen ook NA en k₁ mee. ([ASML, *The Rayleigh criterion*](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion)) Kijk bij een getal in nanometers dus eerst naar het etiket: gaat het over licht, resolutie of een procesgeneratie?

## Niet iedere laag vraagt dezelfde machine

Volgens ASML worden de ingewikkeldste lagen met EUV gedrukt, terwijl andere lagen met uiteenlopende DUV-systemen worden gemaakt. ([ASML, *EUV lithography systems*, inleiding](https://www.asml.com/en/products/euv-lithography-systems)) De leverancier beschrijft EUV en DUV daarom als technieken die naast elkaar nodig blijven, niet als een eenvoudige vervanging van alle oude machines. ([ASML, *EUV lithography systems*](https://www.asml.com/en/products/euv-lithography-systems))

Teken nu een keten: **bron → patroon → optiek → wafer**. Zet bij elke stap de vraag wat er bij een verandering van golflengte opnieuw moet worden ontworpen. Vergelijk je schets met de onderdelen op de productpagina. Kies ten slotte één beperking uit de keten en leg aan iemand anders uit waarom alleen een krachtiger lamp daarvoor niet vanzelf de oplossing is.

## Verder lezen

Vorige: [55 — Wat betekent 7 nm? (Engels)](/posts/55-what-7nm-actually-means/). Volgende: [57 — FinFET naar GAA (Engels)](/posts/57-finfet-to-gaa/).

---

Nederlandse editie: **Sanne**. Bronnen geraadpleegd op 6 november 2026 (Asia/Colombo).

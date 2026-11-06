---
title: "Babbages rekenmachines"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — Van mechaniek tot elektronenbuizen"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Van eindige verschillen naar een programma op ponskaarten — reken mee en volg de store en de mill"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

Leg het kaartje uit het vorige hoofdstuk naast een rij getallen. Je wilt niet alleen een losse som uitbesteden, maar een hele tabel laten ontstaan. Welke handelingen zou je steeds opnieuw willen uitvoeren? En waar bewaar je de tussenstand?

## Een tabel maken door op te tellen

In 1822 maakte Charles Babbage zijn Difference Engine bekend in een voordracht voor de Royal Astronomical Society. ([Science Museum, *Charles Babbage’s Difference Engines and the Science Museum*, ‘Difference Engine No. 1’](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Het ontwerp was bedoeld om een reeks waarden van veeltermen te berekenen en de resultaten automatisch als tabel af te drukken. ([Computer History Museum, *The Engines*, ‘Difference Engine No. 1’](https://www.computerhistory.org/babbage/engines/))

Het onderliggende principe is de methode van eindige verschillen: een Difference Engine kan de tabel verder opbouwen door herhaald op te tellen, zonder voor elke nieuwe waarde opnieuw te vermenigvuldigen of te delen. ([Computer History Museum, *The Engines*, openingsparagrafen](https://www.computerhistory.org/babbage/engines/))

**Zelf uitgewerkte rekenproef, geen overgenomen archieftabel.** Kies `Y = x²` en schrijf het volgende stukje tabel uit:

| x | Y = x² | Toename naar de volgende waarde: Δ₁ |
|---|---:|---:|
| 3 | 9 | 7 |
| 4 | 16 | 9 |
| 5 | 25 | 11 |
| 6 | 36 | 13 |

Controleer de derde kolom door telkens `(x+1)² − x²` te berekenen. Werk dat verschil ook uit als `2x + 1`. Neem vervolgens het verschil tussen twee opeenvolgende toenamen: `9 − 7`, `11 − 9` en `13 − 11`. Noteer telkens `2` als tweede verschil, `Δ₂`.

Volg nu dit voorschrift: tel eerst de huidige `Δ₁` bij `Y` op en verhoog daarna `Δ₁` met `Δ₂`. Begin bij `Y = 9`, `Δ₁ = 7`, `Δ₂ = 2`. Reken zelf na: na de eerste ronde krijg je `Y = 16` en `Δ₁ = 9`; na de volgende `Y = 25` en `Δ₁ = 11`. Dit is ook het rekenvoorschrift van het onderstaande lesmodel voor `x²`. ([Modelverantwoording van dit boek](/labs/difference-engine/ORIGIN.md); [lesmodel met beginstand](/labs/difference-engine/))

## Maak de overdracht zichtbaar

Babbages rekenmachines waren decimale mechanische machines: voor ieder cijfer van een getal was een afzonderlijk cijferwiel voorzien. ([Computer History Museum, ‘Binary, Decimal and Error Detection’](https://www.computerhistory.org/babbage/engines/)) Het Science Museum beschrijft bij de Difference Engine tandwielen, stangen en andere mechanische onderdelen, met getallen weergegeven door de standen van wielen in kolommen. ([Science Museum, ‘Difference Engine No. 1’](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum))

Klik in het lesmodel op **Step** en volg vooral de overgang van eenheden naar tientallen bij `9 + 7 = 16`. Houd de twee vragen uit elkaar: klopt de optelling, en hoe maak je het doorgeven naar de volgende cijferpositie zichtbaar?

{{< lab type="difference-engine" height="720" >}}

Dit is een eigen pedagogisch model van het boek, onder CC BY 4.0, geen volledige reconstructie van Difference Engine No. 2. ([Herkomst en modelgrenzen](/labs/difference-engine/ORIGIN.md); [licentie](https://creativecommons.org/licenses/by/4.0/)) Gebruik de animatie om de rekenstap te volgen, niet om er alle details van Babbages overbrengingen uit af te leiden.

## Van ontwerp naar werkplaats

Joseph Clement bouwde een werkend gedeelte van Difference Engine No. 1, dat in 1832 gereed was. ([Science Museum, ‘Difference Engine No. 1’](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Het werk aan de volledige machine kwam na een conflict met Clement stil te liggen. ([Science Museum, ‘Difference Engine No. 1’](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) De Britse overheidsfinanciering werd in 1842 beëindigd. ([Computer History Museum, ‘Difference Engine No. 1’](https://www.computerhistory.org/babbage/engines/)) Geen van Babbages grote engine-ontwerpen werd tijdens zijn leven in zijn geheel gerealiseerd; er bleven wel werkende deelconstructies en proefstukken over. ([Computer History Museum, ‘Physical Legacy’](https://www.computerhistory.org/babbage/engines/))

## Ons argument: de grens van de werkplaats

**Dit is het eigen argument van dit boek: naast geldgebrek werkten ook de fabricagetoleranties van die tijd Babbages ambitie tegen.** In deze lezing betekende iedere extra cijferpositie ook een extra gelegenheid voor wrijving, speling en opgetelde maatverschillen om de uitkomst te bederven. Onze ontwerpvraag is daarom niet alleen hoe je het juiste rekenvoorschrift bedenkt, maar ook hoe je dat voorschrift betrouwbaar door een hele keten onderdelen laat uitvoeren.

---

## Een ander soort opdracht: de Analytical Engine

In 1834 bedacht Babbage de ambitieuzere Analytical Engine, een ontwerp voor een algemeen programmeerbare rekenmachine. ([Computer History Museum, ‘The Analytical Engine’](https://www.computerhistory.org/babbage/engines/)) In dit ontwerp hield de **store** getallen en tussenresultaten vast, terwijl de afzonderlijke **mill** de rekenbewerkingen uitvoerde. ([Science Museum, ‘The Analytical Engine’](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) De besturing met ponskaarten was ontleend aan het Jacquard-weefgetouw. ([Computer History Museum, ‘The Analytical Engine’](https://www.computerhistory.org/babbage/engines/))

Teken voor je eigen begrippenschets twee vakken: **bewaren** en **bewerken**. Leg denkbeeldig twee getallen in het eerste vak, breng ze naar het tweede voor een optelling en zet de uitkomst daarna op een gekozen plek terug. Geef ook aan wie of wat bepaalt welke getallen aan de beurt zijn. Deze tekening is onze leessteun bij het ontwerp, geen historische bouwtekening.

Ada Lovelace publiceerde in 1843 een uiteenzetting over de Analytical Engine waarin zij ook mogelijkheden buiten louter getalsmatige berekeningen besprak, zoals het werken met symbolen, letters en muzieknoten. ([Science Museum, ‘Ada Lovelace and Charles Babbage’](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum)) Vraag bij dat idee steeds wat je getallen laat voorstellen en welke bewerkingen je erop wilt uitvoeren; verwissel een voorstel niet met een al gebouwde toepassing.

## Geef de emulator een klein programma

De hieronder gehoste Analytical Engine-emulator is van John Walker; de oorspronkelijke documentatie en software staan bij Fourmilab. ([Herkomst van deze gehoste kopie](/labs/analytical-engine/ORIGIN.md); [Fourmilab, *The Analytical Engine*](https://www.fourmilab.ch/babbage/)) Walker gebruikt voor de emulator één tekststroom waarin verschillende kaartsoorten door elkaar staan, een expliciete vereenvoudiging van de afzonderlijke kaartstromen in de historische ontwerpen. ([Walker, *Is the Emulator Authentic?*, ‘Interleaving the card streams’](https://www.fourmilab.ch/babbage/authentic.html)) Lees de tekstnotatie dus als die van deze emulator, niet als een afschrift van een negentiende-eeuws kaartendeck.

{{< lab type="analytical-engine" height="780" >}}

**Een zelfgemaakt oefenprogramma voor deze emulator.** Voer onderstaande regels in het programmaveld in en dien het programma in. Stap daarna kaart voor kaart door de uitvoering:

```text
N0 9
N1 7
+
L0
L1
S2
P
H
```

In Walkers kaartnotatie laden `N`-kaarten getallen in de store, kiest `+` de optelling, brengen `L`-kaarten waarden naar de mill en zet `S` de uitkomst terug in de store. ([Walker, *Programming Cards*, ‘Number Cards’, ‘Operation Cards’, ‘Variable Cards’](https://www.fourmilab.ch/babbage/cards.html)) `P` drukt het laatste rekenresultaat af en `H` stopt de uitvoering. ([Walker, ‘Action Cards’](https://www.fourmilab.ch/babbage/cards.html))

Volg bij deze zelfgekozen optelling waar de `9` en de `7` terechtkomen. Controleer dat plek `2` in de store na afloop `16` bevat en dat de printer `16` toont. Verander daarna alleen de tweede getalkaart en voorspel de nieuwe uitkomst voordat je opnieuw begint. Verander pas daarna de bewerking. Welke wijziging hoort bij de gegevens, en welke bij de opdracht?

Walker stelt de emulatorsoftware beschikbaar in het publieke domein. ([Fourmilab, *Table of Contents*, ‘Download’](https://www.fourmilab.ch/babbage/contents.html)) De grenzen en ontwerpkeuzes van zijn emulator zijn afzonderlijk verantwoord. ([Walker, *Is the Emulator Authentic?*](https://www.fourmilab.ch/babbage/authentic.html))

## Verder op de route

**Vorige:** [4 — Wat is dit voor ding?]({{< relref "04-what-is-this-thing.md" >}}). **Volgende:** [6 — Het Jacquard-weefgetouw]({{< relref "06-jacquard-loom.md" >}}).

Neem naar het weefgetouw de vraag mee waar de opdracht is vastgelegd en wat er moet veranderen om een andere opdracht uit te voeren.

---

Nederlandse editie: **Sanne**.

---
title: "Het Jacquard-weefgetouw"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Van mechaniek tot elektronenbuizen"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "Een patroon losmaken van het getouw: ponskaarten, voorbereidend werk en de stap naar Babbages rekenmachine."
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Leg vier stroken papier evenwijdig naast elkaar en nummer ze van links naar rechts. Schrijf op drie losse kaartjes:

```text
1 0 1 0
0 1 0 1
1 1 0 0
```

Spreek voor deze denkproef af: bij `1` til je de bijbehorende strook op, bij `0` laat je haar liggen. Schuif een dwarse strook onder de opgetilde stroken door. Laat alles zakken en neem het volgende kaartje. Wissel daarna de volgorde van de kaartjes, zonder de vier genummerde stroken te verplaatsen. Wat heb je veranderd: het gereedschap of de opdracht?

Dit is een zelfbedacht leesmodel, geen reconstructie van een historische ponskaart. Gebruik het om de opdracht apart van de uitvoering te bekijken.

## Niet het hele getouw vervangen

Bij het weven kruist een inslagdraad de kettingdraden; welke kettingdraden boven of onder de inslag terechtkomen, bepaalt het geweven patroon. ([Science and Industry Museum, *Programming patterns*, ‘Punch cards weaving patterns’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)) In het systeem dat het museum beschrijft, bestuurt een Jacquard-mechanisme boven op het getouw met verwisselbare ponskaarten welke kettingdraden worden opgetild. ([Science and Industry Museum, ‘Punch cards weaving patterns’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom))

De kaarten worden aan elkaar geregen en één voor één voor het mechanisme gebracht. ([Science and Industry Museum, ‘Step by step’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)) Waar een gat zit, kan een pen door de kaart heen en wordt een haak ingeschakeld om de bijbehorende kettingdraad op te tillen; zonder gat houdt het karton de pen tegen en blijft die draad omlaag. ([Science and Industry Museum, ‘Step by step’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)) Daarna voert een schietspoel de inslagdraad onder de opgetilde en boven de overige kettingdraden door. ([Science and Industry Museum, ‘Step by step’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom))

Voor de kaarten komt een andere stap: volgens dezelfde museumuitleg tekent een ontwerper het patroon op ruitjespapier en zet een kaartenmaker het rij voor rij om in ponskaarten. ([Science and Industry Museum, ‘Step by step’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)) Houd daarom in je denkproef drie dingen uit elkaar: het gewenste beeld, de vastgelegde aanwijzingen en het uitvoeren van die aanwijzingen. Vraag niet alleen wie de kaarten leest, maar ook wie ze maakt.

## Drie mijlpalen, niet één uitvindingsdag

Het Musée des Arts et Métiers van het Cnam dateert Jacquards octrooi op **23 december 1801**: het betrof een machine die de *tireur de lacs*, de bediener van de trekkoorden bij het weven van stoffen met patronen, moest vervangen. ([Cnam, *Modèle : Métier original de Jacquard*](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard))

De biografie van Marc Allégret op de website van de Fondation Napoléon vermeldt dat de Société d’encouragement pour l’industrie nationale Jacquard op **2 februari 1804** een gouden medaille toekende. ([Allégret, *Jacquard*, Fondation Napoléon](https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/))

De Science Museum Group plaatst het **commerciële succes in 1804** en beschrijft het mechanisme als voortbouwend op uitvindingen van Falcon, Vaucanson en Jacquard zelf. ([Science Museum Group, object 1867-47](https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components)) Die collectiepagina schrijft aan Jacquard vooral het automatisch aanbieden van de volgende kaart aan de kaartlezer toe; het gebruik van gaten om te bepalen welke kettingdraden omhooggaan, bestond volgens het museum al eerder. ([Science Museum Group, object 1867-47](https://collection.sciencemuseumgroup.org.uk/objects/co44888/model-of-a-jacquard-loom-with-shuttle-and-components))

Lees een octrooi, een onderscheiding en commercieel succes dus als verschillende ijkpunten. Maak er niet achteraf één verjaardag van waarop een compleet systeem uit het niets zou zijn verschenen.

## In Gent: ook de opdracht moet worden gemaakt

Het Gentse Industriemuseum beschrijft onder objectnummer **V10018** een ponskaartmachine met klavier van Grosse Webereimaschinen, waarmee gaatjes in kartonnen kaarten voor jacquardpatronen worden gemaakt. ([Industriemuseum, *Ponskaartmachine van het merk Grosse Webereimaschinen*](https://www.industriemuseum.be/nl/collectie-item/ponskaartmachine-van-het-merk-grosse-webereimaschinen)) Het museum dateert dit voorwerp tussen **1900 en 1950**. ([Industriemuseum, object V10018, ‘details’](https://www.industriemuseum.be/nl/collectie-item/ponskaartmachine-van-het-merk-grosse-webereimaschinen)) Gebruik dit veel latere gereedschap als geheugensteun: verwar het uitvoeren van een patroon niet met het voorbereiden ervan.

Hetzelfde museum beschrijft zijn TC2 als een digitaal programmeerbaar jacquardgetouw waarvan de kettingdraden afzonderlijk computergestuurd en pneumatisch worden bediend. ([Industriemuseum, *Digitaal weven met de TC2*](https://www.industriemuseum.be/nl/maakwerking-tc2)) De inslag wordt bij dat getouw nog handmatig door de ketting gevoerd. ([Industriemuseum, *Digitaal weven met de TC2*](https://www.industriemuseum.be/nl/maakwerking-tc2)) Vraag ook hier nauwkeurig welk deel van de klus je aan de machine overdraagt, in plaats van alles samen ‘automatisch’ te noemen.

## Van een weefpatroon naar een rekenopdracht

Voor zijn Analytical Engine voorzag Charles Babbage ponskaarten die zowel getallen als aanwijzingen voor bewerkingen aan de machine zouden doorgeven. ([Science and Industry Museum, ‘Inspiring early computing’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)) Het museum legt daarbij uitdrukkelijk het verband met de verwisselbare kaarten van het Jacquard-weefgetouw. ([Science and Industry Museum, ‘Inspiring early computing’](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom))

**Onze ontwerpbril in dit hoofdstuk is deze: maak onderscheid tussen de machine die kan handelen en de verwisselbare beschrijving van wat zij moet doen.** Lees dat als de vergelijking waarmee wij door het boek reizen, niet als de bewering dat een weefgetouw en een rekenmachine hetzelfde zijn.

Keer nu terug naar je drie kaartjes. Geef ze aan iemand die jouw gekozen patroon niet heeft gezien, maar wel de afgesproken regels kent. Laat diegene de opdracht uitvoeren zonder extra gebaren of uitleg. Wijs vervolgens aan waar je de opdracht zou veranderen en waar je juist het gereedschap zou moeten aanpassen. Neem die twee verschillende ingrepen mee naar de volgende halte.

## Verder op de route

**Vorige:** [5 — Babbages rekenmachines]({{< relref "05-babbage-engines.md" >}}). **Volgende:** [7 — Waarom mechaniek ertoe doet (Engels · EN)]({{< relref path="07-why-mechanical-matters.md" lang="en" >}}).

---

Nederlandse editie: **Sanne**.

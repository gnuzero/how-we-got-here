---
title: "Wie mag verder? Dijkstra en het THE-systeem"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — Besturingssystemen, talen en realtime-systemen"
series_index: 27
aliases:
  - /posts/21-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/26-batch-processing-and-the-birth-of-the-operating-system/
  - /posts/27-batch-processing-and-the-birth-of-the-operating-system/
tags: []
summary: "Wachten, seinpalen en lagen: een systeem begrijpen zonder alle tijdvolgordes uit te tekenen."
---

> Eerste Nederlandse bijdrage — inhoudelijke controle door Lucas staat nog open.

Stel je twee taken voor die allebei dezelfde printer willen gebruiken. Geef ze ieder een kaartje met een opdracht. Wie mag beginnen? Wie moet wachten? Wat moet er gebeuren zodra de printer vrijkomt?

In zijn verslag uit 1968 beschrijft Edsger W. Dijkstra het THE-multiprogrammeringssysteem aan de Technische Hogeschool Eindhoven, ontworpen voor de Electrologica X8. ([Dijkstra, EWD196, inleiding en *The tool and the goal*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Het doel was een gestage stroom gebruikersprogramma’s voor de universiteit te verwerken, met onder meer kortere doorlooptijden voor kleine programma’s en doelmatiger gebruik van randapparatuur. ([EWD196, *The tool and the goal*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Dijkstra schrijft uitdrukkelijk dat het geen *multi-access*-systeem is. ([EWD196](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Lees dit dus niet als een beschrijving van een moderne interactieve dienst voor gelijktijdig ingelogde gebruikers.

## Niet gokken op de snelheid van de ander

Dijkstra beschrijft het systeem als samenwerkende sequentiële processen, zonder een aanname over hun onderlinge snelheidsverhoudingen. ([EWD196, *Processor Allocation*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Hun samenwerking wordt vastgelegd met expliciete synchronisatie: voorwaarden waaronder een proces verder mag of moet wachten. ([EWD196, *Processor Allocation*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html))

In zijn Nederlandstalige notitie *Over seinpalen* begint hij precies bij zulke afhankelijkheden: een faciliteit kan maar één proces tegelijk bedienen, of een proces moet wachten op informatie die een ander nog moet leveren. ([Dijkstra, EWD74, opening](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html)) Zijn woord **seinpaal** is dus geen achteraf bedacht Nederlands alternatief; het staat in de oorspronkelijke Nederlandse tekst. ([EWD74](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html))

De seinpalen in die notitie zijn niet-negatieve gehele getallen in gemeenschappelijk geheugen. ([EWD74, definitie](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html)) Bij de V-operatie worden de opgegeven seinpalen in één ondeelbare handeling met één verhoogd. ([EWD74, *De V-operatie*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html)) De P-operatie kan pas worden voltooid wanneer de betrokken waarden positief zijn; de verlaging met één bij voltooiing is eveneens ondeelbaar. ([EWD74, *De P-operatie*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html))

Het ondeelbare karakter hoort bij de definitie, niet bij een vrijblijvende afspraak tussen programma’s. ([EWD74, opmerkingen bij P en V](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html)) Dijkstra licht dat toe met twee gelijktijdige verhogingen van een seinpaal die op drie staat: na beide operaties moet de waarde vijf zijn, zonder verloren ophoging. ([EWD74, V-operatie, opmerking 1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html))

## Speel één kritische sectie na

In Dijkstra’s eerste voorbeeld staat de seinpaal op één wanneer niemand in de kritische sectie zit en op nul wanneer een proces die sectie uitvoert. ([EWD74, voorbeeld 1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html)) Zijn procesvorm is: eerst P, dan de kritische sectie, daarna V en vervolgens de rest van het proces. ([EWD74, voorbeeld 1](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html))

Probeer dit met twee personen en één munt. Noem het pakken van de munt P en het terugleggen V. Spreek af dat pakken als één handeling gebeurt. Laat de eerste persoon de munt vasthouden terwijl de tweede probeert te beginnen. Leg de munt daarna terug. Wissel van rol.

Zie het als een naspeeloefening van de toegang tot één sectie, niet als een implementatie van een besturingssysteem. In EWD74 wordt een geblokkeerd programma juist niet voortdurend naar de seinpaal gestuurd om te kijken: het sluimert, terwijl de coördinator bij een V-operatie nagaat welke programma’s weer uitvoerbaar kunnen worden. ([EWD74, *De coördinator*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html)) Wachten is in deze beschrijving dus niet hetzelfde als eindeloos zelf blijven controleren. ([EWD74, *De coördinator*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD00xx/EWD74.html))

## Lagen maken een kleiner bewijsprobleem

Het THE-verslag verdeelt verantwoordelijkheden hiërarchisch: niveau nul verdeelt processortijd en verwerkt de klokinterrupt; niveau één beheert de koppeling tussen informatiesegmenten en opslagpagina’s. ([EWD196, *System hierarchy*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Daarboven komen de consolecommunicatie op niveau twee, de in- en uitvoerprocessen op niveau drie en de gebruikersprogramma’s op niveau vier. ([EWD196, *System hierarchy*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Niveau vijf is de operator, met Dijkstra’s expliciete kanttekening dat die niet door de groep is geïmplementeerd. ([EWD196](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html))

Boven niveau nul hoeft de beschrijving niet meer over de identiteit van fysieke processoren te gaan; boven niveau één worden gegevens via segmenten aangeduid in plaats van via concrete kern- of trommelpagina’s. ([EWD196, *System hierarchy*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Iedere laag laat dus details uit het volgende redeneerstuk verdwijnen. ([EWD196, *System hierarchy* en *Design experience*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html))

De groep testte van onder naar boven: pas nadat een niveau grondig was getest, werd het volgende geheel of gedeeltelijk toegevoegd. ([EWD196, *Design experience*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Dijkstra verklaart dat zonder de scheiding tussen klokafhandeling en trommelbeheer het aantal relevante combinaties van gebeurtenissen onbeheersbaar zou groeien. ([EWD196, *Design experience*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html)) Dit is het technische punt om vast te houden: structuur helpt de hoeveelheid gedrag waarover je tegelijk moet redeneren te beperken. ([EWD196, *Conclusions*](https://www.cs.utexas.edu/~EWD/transcriptions/EWD01xx/EWD196.html))

## Dezelfde vraag achter de sprong

In de tekst die in maart 1968 verscheen als *Go To Statement Considered Harmful* vraagt Dijkstra hoe de voortgang van een proces begrijpelijk kan worden beschreven vanuit de programmatekst. ([Dijkstra, EWD215, inclusief publicatienoot](https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD215.html)) Zijn bezwaar tegen ongebreidelde sprongen is dat ze bruikbare coördinaten voor die voortgang moeilijk te vinden maken. ([EWD215](https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD215.html)) Dat is meer dan een smaakvoorkeur voor een nette bladspiegel: zijn argument gaat over de relatie tussen stilstaande tekst en gedrag dat zich in de tijd ontvouwt. ([EWD215](https://www.cs.utexas.edu/~EWD/transcriptions/EWD02xx/EWD215.html))

Leg de munt en de laagtekening nog eens naast elkaar. Welke afspraak bepaalt *wanneer* iemand verder mag? Welke scheiding bepaalt *waarover* je op dat moment nog moet nadenken?

## Verder lezen

Vorige: [27 — ARM en RISC-V (Engels)](/posts/27-arm-and-risc-v-the-architecture-landscape-today/). Volgende: [29 — Time-sharing en Unix (Engels)](/posts/29-time-sharing-and-the-unix-lineage/).

---

Nederlandse editie: **Sanne**. Bronnen geraadpleegd op 6 november 2026 (Asia/Colombo).

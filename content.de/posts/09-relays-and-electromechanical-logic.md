---
title: "Relais und elektromechanische Logik"
weight: 9
date: 2026-01-01
draft: false
phase: "1 — Grundlagen: vom mechanischen Rechnen zur Elektronenröhre"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "Relais bewiesen, dass binäre Logik funktioniert, und dass bewegtes Metall nicht mithalten kann"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

Ein Relais ist beinahe verblüffend einfach: ein Elektromagnet, ein federnder Anker, ein Satz Kontakte. Fließt Strom durch die Spule, zieht der Anker an, und die Kontakte öffnen oder schließen sich. Die These dieses Buchs: Etwa anderthalb Jahrzehnte lang war das der grundlegende Schaltbaustein des Rechnens.

## Zwei Aufgaben für dasselbe Bauteil

In diesem Kapitel ist ein **Relais** ein Schalter: Eine schwache Spule öffnet oder schließt einen stärkeren Stromkreis, und später wird daraus ein Baustein für UND, ODER und NICHT. Seine Aufgabe auf der Telegrafenleitung beschreibt [Wie die Nachricht reiste]({{< relref "03-how-the-message-travelled" >}}).

Jetzt wird der Schalter für Logik verdrahtet.

## Relais als Logik

Unsere Deutung (Grundlage jeder Schaltalgebra, kein historischer Befund): Zwei Kontakte in Reihe ergeben UND, denn Strom fließt nur, wenn *beide* geschlossen sind. Parallel geschaltet ergeben sie ODER. Ein Ruhekontakt liefert NICHT. Aus diesen dreien lässt sich jede boolesche Funktion bauen, Addierer, Vergleicher, Decoder, dieselben Logikfamilien, die Phase 2 in Silizium baut, hier in elektromechanischer Hardware.

## Berlin 1941: Zuses Z3

Das Deutsche Museum besitzt ein Relais aus der Bauart der Z3: ein Klappanker-Relais von Siemens & Halske, 1940 hergestellt, entwickelt für die Fernsprechvermittlung und millionenfach gebaut. Mit dieser Sorte Relais konstruierte Konrad Zuse 1940–1941 die originale Z3. ([Deutsches Museum Digital, „Relais aus der Zuse Z3“](https://digital.deutsches-museum.de/de/digital-catalogue/collection-object/77863T1/))

Unsere Deutung: Hier zeigt sich, warum Relaisrechner überhaupt baubar waren. Die Bauteile kamen aus einer bestehenden Industrie der Fernsprechtechnik, nicht aus einer eigens geschaffenen.

Vorher kamen Z1 und Z2. Laut einem Beitrag des Radiosenders SWR2 wurde die Z1 1938 fertig, ein elektrisch angetriebener, aber mechanischer Rechner. ([SWR2 Zeitwort, 12.05.1941](https://www.swr.de/swrkultur/leben-und-gesellschaft/swr2-zeitwort-2022-05-12-100.pdf)) Horst Zuse, Informatiker und Sohn Konrad Zuses, schreibt: Mit der Z2 (1938–39) testete Zuse die Zuverlässigkeit der Relaistechnik; sie überzeugte ihn, und er baute die Z3 vollständig aus Relais. Die Z3 wurde am 12. Mai 1941 fertiggestellt. ([Horst Zuse, „Z3-Detail“](https://horst-zuse.hier-im-netz.de/z3-detail.html))

Das Deutsche Museum nennt die Z3 den ersten programmierbaren Binär-Computer der Welt. ([Deutsches Museum, Ausstellung Informatik](https://www.deutsches-museum.de/museumsinsel/ausstellung/informatik)) Nach Horst Zuse rechnete sie mit binären Gleitkommazahlen zu 22 Bit und hatte einen Speicher von 64 Wörtern. Das Programm las sie, wie schon die Z1, von einem 8-Kanal-Filmstreifen. ([Horst Zuse, „Z3-Detail“](https://horst-zuse.hier-im-netz.de/z3-detail.html)) Dafür diente gebrauchter 35-Millimeter-Kinofilm, in den pro Zahl und Zeichen bis zu acht Löcher gestanzt wurden. ([HNF-Blog, „Löcher im Streifen“](https://blog.hnf.de/loecher-im-streifen/))

Wie viele Relais? Die Quellen sind sich nicht einig. Horst Zuse nennt rund 600 im Rechenwerk und 1.600 im Speicher, weist aber darauf hin, dass Konrad Zuse selbst 1961 die Zahl 2.600 angab. ([Horst Zuse, „Z3-Detail“](https://horst-zuse.hier-im-netz.de/z3-detail.html)) Auch SWR2 nennt 600 plus 1.600. Die Maschine schaffte laut SWR2 zwei Additionen pro Sekunde und alle drei Sekunden eine Multiplikation; ihre „Taktwalze“ drehte sich 5,3-mal pro Sekunde. ([SWR2 Zeitwort](https://www.swr.de/swrkultur/leben-und-gesellschaft/swr2-zeitwort-2022-05-12-100.pdf))

Nach Horst Zuse wurde die Original-Z3 beim Bombenangriff vom 21. Dezember 1943 zerstört; 1961 ließ Konrad Zuse sie zu Werbezwecken nachbauen, mit nur einem statt zwei Speicherschränken. ([Horst Zuse, „Z3-Detail“](https://horst-zuse.hier-im-netz.de/z3-detail.html)) Das Deutsche Museum zeigt ein Foto von Zuse vor seinem Nachbau der Z3 im Museum, aufgenommen im Juni 1984. ([Deutsches Museum, Ausstellung Informatik](https://www.deutsches-museum.de/museumsinsel/ausstellung/informatik))

### Der Vorbehalt: keine bedingte Verzweigung

Raúl Rojas von der Freien Universität Berlin zeigte 1998, dass die Z3 nur feste Folgen von Gleitkomma-Operationen auf dem Lochstreifen ausführen konnte. Dennoch kann eine einzige Programmschleife aus diesen Rechenbefehlen jede Turingmaschine mit begrenztem Band simulieren, indem bedingte Verzweigung und indirekte Adressierung rein arithmetisch nachgebildet werden. Die Z3 ist damit *zumindest im Prinzip* so universell wie heutige Rechner mit begrenztem Adressraum; der Preis ist ein enorm wachsendes Programm auf dem Lochstreifen. ([Rojas, IEEE Annals of the History of Computing 20(3), 1998](https://ieeexplore.ieee.org/document/707574); [Vorabfassung als PDF, FU Berlin](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf))

**Tür nach draußen:** Raúl Rojas, „How to Make Zuse's Z3 a Universal Computer“ (1998), die sorgfältige Begründung für die Turing-Vollständigkeit der Z3 und ihre Grenzen.

## Warum Relais zu langsam waren

Die These dieses Buchs: Die Schaltzeit eines Relais wird von *mechanischer* Bewegung bestimmt; der Anker muss sich bewegen, in der Größenordnung von Millisekunden. Die 5,3 Umdrehungen der Taktwalze pro Sekunde (laut SWR2, siehe oben) neben einer heutigen CPU mit Milliarden Takten pro Sekunde: Der Abstand ist nicht graduell, er ist existenziell. Aus mechanischen Schaltern lässt sich kein brauchbarer moderner Computer bauen, so gut sie auch konstruiert sein mögen.

Die These dieses Buchs: Das zweite Problem ist der Verschleiß. Jedes Schließen ist Metall auf Metall: Funkenbildung, Abbrand, irgendwann Ausfall. Tausende Relais heißen Tausende Verschleißstellen. Zuverlässigkeit und Geschwindigkeit kämpften gegen dieselbe Grenze: bewegte Teile.

## Die Brücke zur Elektronik

Die These dieses Buchs: Relais bewiesen die Architektur, also binäre Darstellung, boolesche Gatter aus einfachen Schaltern und Programme als Daten. Was sie nicht beweisen konnten, war, dass diese Architektur *schnell* laufen kann. Dafür musste der mechanische Schalter durch etwas ersetzt werden, das seinen Zustand durch bewegte Elektronen statt durch bewegtes Metall ändert: die Elektronenröhre, um den Preis von enormem Strombedarf und enormer Hitze. Dieser Zielkonflikt folgt als Nächstes.

**Weiter:** [Das Zeitalter der Elektronenröhre]({{< relref "10-the-vacuum-tube-era.md" >}})

## Quellen

- Deutsches Museum Digital, „Relais aus der Zuse Z3“ (deutsch): <https://digital.deutsches-museum.de/de/digital-catalogue/collection-object/77863T1/>
- Deutsches Museum, Ausstellung „Informatik“ (deutsch): <https://www.deutsches-museum.de/museumsinsel/ausstellung/informatik>
- Horst Zuse, „Z3-Detail“ (deutsch): <https://horst-zuse.hier-im-netz.de/z3-detail.html>
- SWR2 Zeitwort, „12.05.1941: Konrad Zuse präsentiert seinen Computer Z3“, Detlef Clas (PDF, deutsch): <https://www.swr.de/swrkultur/leben-und-gesellschaft/swr2-zeitwort-2022-05-12-100.pdf>
- Heinz Nixdorf MuseumsForum, Blog, „Löcher im Streifen“ (deutsch): <https://blog.hnf.de/loecher-im-streifen/>
- Raúl Rojas, „How to Make Zuse's Z3 a Universal Computer“, IEEE Annals of the History of Computing 20(3), 1998, S. 51–54 (englisch): <https://ieeexplore.ieee.org/document/707574>; Vorabfassung (FU Berlin, PDF): <https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf>

---
title: "Der Transistor: vom BJT zum MOSFET"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — Physik und Bauelemente"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "Stromgesteuerte Bipolartransistoren verbrauchten Ruheleistung; spannungsgesteuerte MOSFETs machten Dichte möglich"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

Die These dieses Buchs: Zwei Bauelementfamilien heißen beide „Transistor“. Sie schalten nach verschiedener Physik, und nur eine davon skaliert zu den Milliarden Bauelementen auf einem heutigen Chip.

## Transistoren in Deutschland

Nach einem Transistorsymposium der Bell-Laboratorien beschloss Siemens 1952, in München an der Balanstraße eine Transistorfabrik aufzubauen; ab 1953 fertigte Siemens dort die Spitzentransistoren TS13 und TS33, die den Bell-Transistoren sehr ähnlich sahen. Siemens war damals laut *Elektronikpraxis* der erste deutsche Transistorhersteller. ([Elektronikpraxis, „Bell-Transistor Nr. 9 im Deutschen Museum in München zu sehen“](https://www.elektronikpraxis.de/bell-transistor-nr-9-im-deutschen-museum-in-muenchen-zu-sehen-a-791989/)) Das Deutsche Museum bestätigt, dass Siemens eine Lizenz für den Nachbau des Bell-Transistors erlangte und darauf seine Halbleitersparte gründete; den Transistor Nr. 9 zeigt es in seiner Elektronik-Ausstellung. ([Deutsches Museum, Ausstellung Elektronik (Presse)](https://www.deutsches-museum.de/museum/presse/wer-wir-sind/die-ausstellungen/elektronik))

**Herbert Kroemer.** Kroemer, 1928 in Deutschland geboren, wurde 1952 an der Universität Göttingen in Physik promoviert. ([Nobelprize.org, Pressemitteilung „Der Nobelpreis in Physik 2000“](https://www.nobelprize.org/prizes/physics/2000/9716-pressemitteilung-der-nobelpreis-in-physik-2000/)) In seinem Nobelvortrag erzählt er, die Idee gehe auf 1953/54 zurück, als er im Fernmeldetechnischen Zentralamt (FTZ) der Deutschen Bundespost arbeitete: Die frühen Bipolartransistoren seien für die Fernmeldetechnik viel zu langsam gewesen. Schon 1954 schlug er vor, die Basis aus einem Mischkristall verschiedener Halbleiter mit veränderlicher Bandlücke zu bauen, etwa Ge-Si; das nennt er die ursprüngliche Konzeption des Heterostruktur-Bipolartransistors (HBT). ([Herbert Kroemer, Nobelvortrag, 8. Dezember 2000 (PDF)](https://www.nobelprize.org/uploads/2018/06/kroemer-lecture.pdf)) Den ersten ausgearbeiteten Vorschlag für einen Heterostrukturtransistor veröffentlichte er 1957, damals bei RCA in Princeton. ([Nobelprize.org, „Popular information“ Physik 2000](https://www.nobelprize.org/prizes/physics/2000/popular-information/)) Im Jahr 2000 erhielt er zusammen mit Schores Alfjorow die Hälfte des Physik-Nobelpreises „für die Entwicklung von Halbleiterheterostrukturen für Hochgeschwindigkeits- und Optoelektronik“. ([Nobelprize.org, Pressemitteilung](https://www.nobelprize.org/prizes/physics/2000/9716-pressemitteilung-der-nobelpreis-in-physik-2000/))

Die Datierung hängt davon ab, was man zählt: 1954 (Kroemers eigene Darstellung der ersten Idee, veröffentlicht im *Archiv der elektrischen Übertragung*) oder 1957 (der erste ausgearbeitete Vorschlag laut Nobelstiftung).

## Der Bipolartransistor: Strom steuert Strom

Ein Bipolartransistor besteht aus drei abwechselnd p- und n-dotierten Schichten, Emitter, Basis und Kollektor. Ein kleiner Basisstrom steuert den viel größeren Kollektorstrom; schaltet man den Basisstrom ab, versiegt der Kollektorstrom. ([Hochschule Stralsund, Kompendium Leistungselektronik, Kap. 1 (PDF)](https://antriebstechnik.hochschule-stralsund.de/1024x768/Dokumentenframe/Kompendium/Fachvorlesungen/Leistungselektronik/le1.pdf)) Bei einem npn-Transistor gehört zum n-fachen Basisstrom etwa der n-fache Kollektorstrom. ([LEIFIphysik, „Stromsteuerkennlinie des Transistors“](https://www.leifiphysik.de/elektronik/transistor/versuche/stromsteuerkennlinie-des-transistors))

Die These dieses Buchs: Um ihn eingeschaltet zu halten, muss man ständig Basisstrom liefern. Auf Chipgröße summieren sich diese Ruhekosten: Bipolare Logikfamilien stießen allein durch statische Verlustleistung an eine thermische Grenze, auch wenn die Gatter gerade nicht schalteten.

## Der MOSFET: Spannung steuert einen Kanal

Beim MOSFET ist das Gate durch eine sehr dünne Schicht aus isolierendem Siliziumdioxid von den anderen Anschlüssen elektrisch vollkommen isoliert. Im p-Substrat liegen zwei n-leitende Inseln, Source und Drain; ohne Gatespannung fließt kein Drainstrom. Eine positive Gatespannung zieht Elektronen an die Oberfläche unter dem Oxid; bei ausreichender Spannung entsteht dort eine Inversionsschicht, ein dünner n-leitender Kanal von Source zu Drain, und der Strom setzt ein. So steuert die Gatespannung den Drainstrom, wobei das Gate (in idealer Betrachtung) strom- und daher leistungslos bleibt. ([Hochschule Stralsund, Kompendium Leistungselektronik, Kap. 1 (PDF)](https://antriebstechnik.hochschule-stralsund.de/1024x768/Dokumentenframe/Kompendium/Fachvorlesungen/Leistungselektronik/le1.pdf))

Die These dieses Buchs: Das ist das Gegenteil des dauernden Basisstroms beim Bipolartransistor.

## Bell Labs, 1959–1964

1959 gelang M. M. (John) Atalla und Dawon Kahng in den Bell Labs der erste erfolgreiche Feldeffekttransistor mit isoliertem Gate, lange erwartet von Lilienfeld, Heil, Shockley und anderen. Sie überwanden die „surface states“, indem sie thermisch gewachsene Siliziumdioxidschichten nutzten: Metall (Gate), Oxid (Isolierung), Silizium, daher der Name MOSFET. Weil das Bauteil langsam war und keinen dringenden Bedarf des Telefonnetzes deckte, verfolgte Bell es nicht weiter; Forscher bei Fairchild und RCA erkannten dagegen die Vorteile. 1964 kamen MOS-Bauteile auf den Markt: General Microelectronics und Fairchild mit p-Kanal-Bauteilen für Logik und Schalten, RCA mit einem n-Kanal-Transistor zum Verstärken. Das US-Patent 3,102,230 von Kahng wurde am 31. Mai 1960 angemeldet und am 27. August 1963 erteilt. Wegen ihrer geringeren Größe und Leistungsaufnahme verwenden laut CHM heute über 99 Prozent der produzierten Mikrochips MOS-Transistoren. ([Computer History Museum, „1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated“](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/))

In einem Konferenzbeitrag von 1963 zeigten C. T. Sah und Frank Wanlass vom Fairchild-Forschungslabor, dass Logikschaltungen aus p- und n-Kanal-MOS-Transistoren in komplementärer Anordnung im Ruhezustand fast keine Leistung aufnehmen; Wanlass patentierte die heute CMOS genannte Idee. ([Computer History Museum, „1963: Complementary MOS Circuit Configuration is Invented“](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/))

## Warum der MOSFET die Digitallogik gewann

Die These dieses Buchs: Fast kein statischer Gatestrom, darin liegt die ganze Geschichte. CMOS baut darauf auf, sodass nennenswerter Strom vor allem *beim Umschalten* fließt, nicht beim Halten eines Zustands. Das ließ die Transistorzahlen von Tausenden auf Milliarden steigen, ohne dass der Chip schmilzt; Phase 8 kommt auf diesen Skalierungsbogen zurück. Bipolartransistoren verschwanden nicht: Sie zählen weiter, wo Treiberstrom oder analoge Linearität wichtiger sind als Dichte. Für Digitallogik in großem Maßstab aber machte die Ruheleistungsphysik des MOSFET ihn zum einzig gangbaren Weg.

**Tür nach draußen:** D. Kahng und M. M. Atallas Arbeiten von 1960 zum Silizium-MOSFET (Bell Labs / IRE–AIEE Solid-State Device Research Conference), das praktische Feldeffektbauteil, das die spannungsgesteuerte Oxid-Gate-Technik zum digitalen Standard machte.

**Weiter:** [Logikgatter aus Transistoren]({{< relref path="14-logic-gates-from-transistors.md" lang="en" >}}) (vorerst auf Englisch)

## Quellen

- Deutsches Museum, Ausstellung „Elektronik“, Pressetext (deutsch): <https://www.deutsches-museum.de/museum/presse/wer-wir-sind/die-ausstellungen/elektronik>
- Elektronikpraxis, „Bell-Transistor Nr. 9 im Deutschen Museum in München zu sehen“ (deutsch): <https://www.elektronikpraxis.de/bell-transistor-nr-9-im-deutschen-museum-in-muenchen-zu-sehen-a-791989/>
- Nobelprize.org, Pressemitteilung „Der Nobelpreis in Physik 2000“ (deutsch): <https://www.nobelprize.org/prizes/physics/2000/9716-pressemitteilung-der-nobelpreis-in-physik-2000/>
- Hochschule Stralsund, Kompendium Leistungselektronik, Kapitel 1 „Allgemeine Eigenschaften von Halbleiterbauelementen“ (PDF, deutsch): <https://antriebstechnik.hochschule-stralsund.de/1024x768/Dokumentenframe/Kompendium/Fachvorlesungen/Leistungselektronik/le1.pdf>
- LEIFIphysik, „Stromsteuerkennlinie des Transistors“ (deutsch): <https://www.leifiphysik.de/elektronik/transistor/versuche/stromsteuerkennlinie-des-transistors>
- Nobelprize.org, „The Nobel Prize in Physics 2000 – Popular information“ (englisch): <https://www.nobelprize.org/prizes/physics/2000/popular-information/>
- Herbert Kroemer, Nobelvortrag „Quasi-Electric Fields and Band Offsets“ (PDF, englisch): <https://www.nobelprize.org/uploads/2018/06/kroemer-lecture.pdf>
- Computer History Museum, „1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated“ (englisch): <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>
- Computer History Museum, „1963: Complementary MOS Circuit Configuration is Invented“ (englisch): <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>

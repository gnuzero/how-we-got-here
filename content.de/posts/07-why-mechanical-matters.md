---
title: "Warum das mechanische Rechnen zählt"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Grundlagen: vom mechanischen Rechnen zur Elektronenröhre"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "Die logische Form entstand in Messing; die Reibung erzwang die Elektrizität"
image_prompt: "Minimal diagram: store + mill + instruction sequence as three boxes, then an arrow to electrical switching, clean technical infographic, white background"
video_prompt: "15-second motion graphic: gears morphing into relay contacts, same instruction-store-execute shape preserved, clean light background"
schematics: "Diagram: instruction sequence + execution unit + store — logical shape that survives medium change"
---

Die These dieses Buchs: Befehlssätze, gespeicherte Programme, die Trennung von Steuerung und Datenpfad, all das wurzelt in Babbages Maschinen und Jacquards Karten. Das Medium wird sich vollständig ändern (Relais, Röhren, Transistoren). Die logische Form nicht: eine Folge von Befehlen, eine ausführende Einheit und ein Speicher, der den Zustand zwischen den Schritten hält.

## Zahnräder aus Tübingen und Hannover

Lange vor Babbage rechneten im deutschsprachigen Raum bereits Zahnräder. Am 20. September 1623 meldete der Tübinger Wilhelm Schickard Johannes Kepler, er habe eine Maschine aus elf vollständigen und sechs „verstümmelten“ Rädchen gebaut, die eingegebene Zahlen selbsttätig addiere, subtrahiere, multipliziere und dividiere und dabei die Zehner und Hunderter „von selber“ erhöhe. Ein Exemplar für Kepler verbrannte im folgenden Jahr halbfertig. Erst 1960 bewies ein Nachbau, dass die Konstruktion funktionierte. ([Universität Tübingen, „Schickards Rechenmaschine“](https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/fachbereich/geschichtliches/schickards-rechenmaschine/))

Gottfried Wilhelm Leibniz ersann 1672 in Paris die Staffelwalze: einen Zylinder mit neun Zahnrippen gestaffelter Länge, der es erlaubte, alle Ziffern gleichzeitig ins Rechenwerk zu übertragen und damit mechanisch zu multiplizieren und zu dividieren. Seine einzige erhaltene Maschine, ab 1690 gebaut, verwahrt heute die Gottfried Wilhelm Leibniz Bibliothek in Hannover. ([Leibniz Universität Hannover, Leibniz-Ausstellung](https://www.uni-hannover.de/universitaet/profil/leibniz/leibnizausstellung))

Laut Deutschem Museum konnte zu Leibniz' Lebzeiten kein für ihn zufriedenstellend funktionierendes Exemplar angefertigt werden: Der Zehnerübertrag lief wegen eines Konstruktionsfehlers nur über höchstens drei Stellen. Den Nachbau im Museum stellte 1923 die Braunschweiger Rechenmaschinenfabrik Grimme, Natalis & Co. her. ([Deutsches Museum Digital, Rechenmaschine von Leibniz, Nachbildung](https://digital.deutsches-museum.de/de/digital-catalogue/collection-object/56956/))

Unsere Deutung: Schon hier zeigt sich das Problem dieses Kapitels. Die Idee war da; der Übertrag über viele Stellen scheiterte an der Mechanik.

## Was Messing nicht konnte

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="Differenzmaschine Nr. 2, Exemplar Nr. 2, im Computer History Museum" loading="lazy" width="1280">
<figcaption>Differenzmaschine Nr. 2, gebaut nach Babbages Plänen (Exemplar Nr. 2, Computer History Museum). Foto: <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Die These dieses Buchs: Was mechanisches Rechnen zu Babbages Lebzeiten *nicht* konnte, war skalieren. Zahnradgetriebe haben Reibung, Spiel und sich aufaddierende Fertigungstoleranzen. Jede zusätzliche Stelle Genauigkeit machte die Maschine schwerer zuverlässig zu bauen. Diese Grenze, nicht ein Mangel an Ideen, drängte das Rechnen zum elektrischen Schalten.

Ein zweites vollständiges Exemplar der Differenzmaschine Nr. 2 stellte das Science Museum 2008 für Nathan Myhrvold fertig; es wurde im Mai 2008 an das Computer History Museum geliefert. ([Science Museum, „Difference Engine No. 2: Technical Description“](https://www.sciencemuseum.org.uk/sites/default/files/2023-09/DE2_Technical_Description.pdf))

Die These dieses Buchs: Der Nachbau ist die Ausnahme, die die Regel bestätigt. Sobald Werkstätten diese Toleranzen halten konnten, lief der Messingentwurf. Die logische Form war schon da. Zuerst musste sich das Medium ändern.

Als Nächstes: Licht, und danach die Relais und die elektromechanische Logik, die die Architektur bis in den Zweiten Weltkrieg trug.

**Weiter:** [Licht einfangen]({{< relref "08-capturing-light.md" >}})

## Quellen

- Universität Tübingen, Fachbereich Informatik, „Schickards Rechenmaschine“ (deutsch): <https://uni-tuebingen.de/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/fachbereich/geschichtliches/schickards-rechenmaschine/>
- Leibniz Universität Hannover, „Leibniz-Ausstellung“ (deutsch): <https://www.uni-hannover.de/universitaet/profil/leibniz/leibnizausstellung>
- Deutsches Museum Digital, „Rechenmaschine von Gottfried Wilhelm Leibniz, Nachbildung“ (deutsch): <https://digital.deutsches-museum.de/de/digital-catalogue/collection-object/56956/>
- Science Museum, Doron Swade, „Charles Babbage's Difference Engine No. 2: Technical Description“ (PDF, englisch): <https://www.sciencemuseum.org.uk/sites/default/files/2023-09/DE2_Technical_Description.pdf>

---
title: "Warum der Transistor kommen musste"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — Grundlagen: vom mechanischen Rechnen zur Elektronenröhre"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "Größe, Strombedarf, Zuverlässigkeit: drei Grenzen der Röhre, die das Schalten im Festkörper unausweichlich machten"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

Die These dieses Buchs: Anfang der 1950er Jahre hatte die Röhre das Prinzip bewiesen, elektronisches Schalten ohne bewegte Teile. Gelöst hatte sie nicht das Problem der *Größenordnung*. Jede weitere Röhre brachte mehr Wärme, mehr Strombedarf und eine weitere Ausfallmöglichkeit. Der Transistor ersetzte die Röhre nicht, weil er ein hübsches Gerät war, sondern weil die Physik der Röhre selbst eine harte Grenze hatte.

## Die Idee war älter als das Bauteil

**Julius Edgar Lilienfeld.** Im Oktober 1925 meldete Lilienfeld in Kanada ein Patent an; das US-Patent „Method and apparatus for controlling electric currents“ wurde im Oktober 1926 eingereicht und im Januar 1930 erteilt. Das Konzept nutzte ein elektrisches Feld an einem Anschluss, um den Strom zwischen zwei anderen zu verändern, war also ein Feldeffekttransistor. Einen funktionierenden Prototyp baute Lilienfeld nie, und die damalige Halbleitertechnik hätte dafür wohl nicht gereicht. ([Nature Electronics, „100 years of field-effect transistors“](https://www.nature.com/articles/s41928-025-01498-9); Anmeldedatum 8. Oktober 1926 laut [Google Patents, US1745175A](https://patents.google.com/patent/US1745175A/en)) Ab 1910 lehrte Lilienfeld Physik an der Universität Leipzig ([ETHW, „A Very Early Conception of a Solid State Device“](https://ethw.org/A_Very_Early_Conception_of_a_Solid_State_Device)); *Physics Today* nannte ihn 1964 rückblickend „formerly a professor of physics at the University of Leipzig“ ([Physics Today, Virgil E. Bottom, „Invention of the solid-state amplifier“](https://physicstoday.aip.org/features/invention-of-the-solid-state-amplifier)).

**Oskar Heil.** Das britische Patent GB 439,457 nennt als Anmelder „HEIL, O., 21, Jagowstrasse, Grunewald, Berlin“, als Prioritätsdatum („Convention date“) den 2. März 1934 und als britisches Anmeldedatum den 4. März 1935. Darin wird der elektrische Widerstand einer dünnen Halbleiterschicht, die eine Elektrode eines Kondensators bildet, über eine durch eine dünne Isolierschicht getrennte Steuerelektrode verändert. ([Google Patents, GB439457A](https://patents.google.com/patent/GB439457A/en)) Das Computer History Museum nennt das „essentially a field-effect transistor“ und hält fest, dass es weder für Heil noch für Lilienfeld Belege für tatsächlich gebaute, funktionierende Bauteile gibt. ([Computer History Museum, „1926: Field Effect Semiconductor Device Concepts Patented“](https://www.computerhistory.org/siliconengine/field-effect-semiconductor-device-concepts-patented/))

**Walter Schottky bei Siemens.** Die Neue Deutsche Biographie berichtet: 1927 kehrte Schottky zu Siemens & Halske in Berlin zurück und betrieb dort Grundlagenforschung in Halbleiterphysik und Elektronik. 1929 wies er die Sperrschichten in Metall-Halbleiter-Übergängen („Schottky-Kontakt“) experimentell nach. 1939–42 publizierte er mit Eberhard Spenke, gleichzeitig und unabhängig von Nevill Mott, Arbeiten zur Raumladungstheorie der Sperrschichten in Halbleitern, die laut NDB 1947 zum Ausgangspunkt für die Entwicklung des Transistors wurden. ([Deutsche Biographie / NDB, „Schottky, Walter“](https://www.deutsche-biographie.de/gnd118759183.html)) Dieselbe NDB-Seite vermerkt, dass Schottky schon 1916 bei Siemens das „Schirmgitter“ der Elektronenröhre erfand.

Unsere Deutung: Einer der Väter der Halbleitertheorie hatte zuvor selbst die Röhre verbessert. Die Brücke zwischen beiden Welten verlief in Deutschland auch durch eine einzelne Laborbiografie.

## Paris 1948: das Transistron

Das Deutsche Museum zeigt in seiner Elektronik-Ausstellung den Transistor Nr. 9 aus den Bell-Laboratorien und daneben das Transistron: Der deutsche Physiker Herbert Franz Mataré entwickelte den ersten „europäischen“ Transistor zusammen mit Heinrich Welker in einem Labor in Paris, unabhängig von und fast zeitgleich mit den Amerikanern. Siemens erlangte laut Museum eine Lizenz für den Nachbau des Bell-Transistors und gründete darauf seine Halbleitersparte. ([Deutsches Museum, Ausstellung Elektronik (Presse)](https://www.deutsches-museum.de/museum/presse/wer-wir-sind/die-ausstellungen/elektronik))

Das Computer History Museum ergänzt: Mataré hatte im Krieg bei Telefunken Kristallgleichrichter aus Silizium und Germanium entwickelt, Welker in München an der Reinigung von Germanium gearbeitet. Nach dem Krieg stellte sie die Compagnie des Freins et Signaux ein, eine Westinghouse-Tochter. Im Juni 1948 erzielte Mataré mit Welkers reinerem Germanium reproduzierbare Verstärkung; einen Monat später erfuhren sie von der Bell-Erfindung. ([Computer History Museum, „1948: The European Transistor Invention“](https://www.computerhistory.org/siliconengine/the-european-transistor-invention/)) Das Labor lag laut pro-physik.de in einem Haus in Aulnay-sous-Bois bei Paris; vorgestellt wurde das Transistron am 18. Mai 1949. ([pro-physik.de, „Vom Sommerfeld-Assistenten zum Siemens-Forschungsleiter“](https://pro-physik.de/nachrichten/vom-sommerfeld-assistenten-zum-siemens-forschungsleiter)) Mataré selbst sagte dem SPIEGEL: „Den Transistoreffekt hatten wir zum ersten Mal Anfang 1948 gemessen, den ersten Prototypen eines Transistors haben wir dann im Mai oder Juni gebaut.“ ([DER SPIEGEL, „60 Jahre Euro-Transistor“](https://www.spiegel.de/netzwelt/tech/60-jahre-euro-transistor-deutschlands-vergessene-chip-grossvaeter-a-547455.html))

In den Bell Labs hatten John Bardeen und Walter Brattain am 16. Dezember 1947 den ersten erfolgreichen Halbleiterverstärker vorgeführt: zwei eng benachbarte Goldkontakte auf einem Germaniumplättchen. ([Computer History Museum, „1947: Invention of the Point-Contact Transistor“](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/))

## Drei Grenzen, ein Engpass

**Größe.** Eine Röhre braucht einen evakuierten Glaskolben, in dem Kathode, Gitter und Anode sitzen. ([Universität Duisburg-Essen, Anleitung C12 (PDF)](https://www.uni-due.de/imperia/md/content/physik/studium/praktika/gp/anleitungen/c12.pdf)) Die These dieses Buchs: Daraus folgt eine Untergrenze der Baugröße. Ein Transistor kommt ohne Vakuum und Kolben aus; seine Größe bestimmt die Fertigungsgenauigkeit. Das ist eine andere Skalierungskurve, und sie führt am Ende zu Milliarden Transistoren auf einem Chip (Phase 8).

**Strombedarf.** Die Kathode einer Röhre wird beheizt, damit Elektronen thermisch austreten. ([Universität Duisburg-Essen, Anleitung C12 (PDF)](https://www.uni-due.de/imperia/md/content/physik/studium/praktika/gp/anleitungen/c12.pdf)) Die ENIAC mit ihren 18.000 Röhren verbrauchte 150 Kilowatt. ([Penn Engineering, „ENIAC“](https://www.engineering.upenn.edu/about/history-heritage/eniac/)) Die These dieses Buchs: Der Heizstrom fließt, ob die Röhre schaltet oder nicht; ein Transistor hat keinen Heizfaden. Das ist der wichtigste Grund, warum transistorisierte Maschinen viel dichter gebaut werden konnten.

**Zuverlässigkeit.** J. Presper Eckert berichtete, dass die Heizfäden der ENIAC-Röhren länger hielten, wenn man sie unter ihrer Nennspannung betrieb. ([Computerworld, Interview mit J. Presper Eckert](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html)) Die These dieses Buchs: Der Verschleiß steckte in der Röhre selbst. Ein Festkörperbauteil hat keinen Heizfaden und keine Vakuumdichtung; frühe Transistoren hatten eigene Probleme, aber nicht diesen eingebauten Ausfallmechanismus.

Die These dieses Buchs: Diese Asymmetrie wächst mit jeder Stückzahl. Zehn Röhren sind beherrschbar, 18.000 sind der Wartungsalbtraum der ENIAC; 18.000 Transistoren sind auf einem heutigen Chip ein Rundungsfehler.

## Was als Nächstes kommt

Die These dieses Buchs: Das Bauteil kam nicht fertig an. *Wie* es schaltet, Halbleiter, Dotierung, Bandlücke, musste erst verstanden und beherrscht werden. Phase 2 beginnt dort: was ein Halbleiter ist, warum Silizium das Material der Wahl wurde und wie Dotierung den steuerbaren Schalter erzeugt.

**Tür nach draußen:** die Bell-Labs-Arbeiten von Bardeen, Brattain und Shockley zum Transistor (späte 1940er / frühe 1950er Jahre), die Primärphysik des Festkörperschalters.

**Weiter:** [Halbleiter von Grund auf]({{< relref "12-semiconductors-from-first-principles.md" >}})

## Quellen

- Deutsches Museum, Ausstellung „Elektronik“, Pressetext (deutsch): <https://www.deutsches-museum.de/museum/presse/wer-wir-sind/die-ausstellungen/elektronik>
- Deutsche Biographie / Neue Deutsche Biographie, „Schottky, Walter“ (deutsch): <https://www.deutsche-biographie.de/gnd118759183.html>
- pro-physik.de, „Vom Sommerfeld-Assistenten zum Siemens-Forschungsleiter“ (deutsch): <https://pro-physik.de/nachrichten/vom-sommerfeld-assistenten-zum-siemens-forschungsleiter>
- DER SPIEGEL, „60 Jahre Euro-Transistor: Deutschlands vergessene Chip-Großväter“ (deutsch): <https://www.spiegel.de/netzwelt/tech/60-jahre-euro-transistor-deutschlands-vergessene-chip-grossvaeter-a-547455.html>
- Universität Duisburg-Essen, Fakultät für Physik, Grundpraktikum, Anleitung C12 (PDF, deutsch): <https://www.uni-due.de/imperia/md/content/physik/studium/praktika/gp/anleitungen/c12.pdf>
- Computer History Museum, „1948: The European Transistor Invention“ (englisch): <https://www.computerhistory.org/siliconengine/the-european-transistor-invention/>
- Computer History Museum, „1926: Field Effect Semiconductor Device Concepts Patented“ (englisch): <https://www.computerhistory.org/siliconengine/field-effect-semiconductor-device-concepts-patented/>
- Computer History Museum, „1947: Invention of the Point-Contact Transistor“ (englisch): <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
- Nature Electronics, „100 years of field-effect transistors“ (englisch): <https://www.nature.com/articles/s41928-025-01498-9>
- Google Patents, US1745175A (englisch): <https://patents.google.com/patent/US1745175A/en>
- Google Patents, GB439457A (englisch): <https://patents.google.com/patent/GB439457A/en>
- Engineering and Technology History Wiki (IEEE), „A Very Early Conception of a Solid State Device“ (englisch): <https://ethw.org/A_Very_Early_Conception_of_a_Solid_State_Device>
- Physics Today, Virgil E. Bottom, „Invention of the solid-state amplifier“ (1964, englisch): <https://physicstoday.aip.org/features/invention-of-the-solid-state-amplifier>
- Penn Engineering, „ENIAC“ (englisch): <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
- Computerworld, Interview mit J. Presper Eckert (englisch): <https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html>

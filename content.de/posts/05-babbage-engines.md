---
title: "Babbages Maschinen"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — Grundlagen: vom mechanischen Rechnen zur Elektronenröhre"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Differenzmaschine und Analytische Maschine: Speicher, Rechenwerk und ein Programm auf Karten"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

Das Rechnen mit Maschinen begann nicht mit Elektrizität. Es begann mit Zahnrädern.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Charles Babbages Differenzmaschine Nr. 2 im Science Museum, London" loading="lazy" width="1280">
<figcaption>Differenzmaschine Nr. 2 (Science Museum, London). Foto: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

1822 schlug Charles Babbage die Differenzmaschine vor: eine mechanische Rechenmaschine für Polynomfunktionen nach dem Differenzenverfahren, ganz aus ineinandergreifenden Zahnrädern und Ziffernsäulen. Keine Elektrizität. Jede Säule war eine Ziffer; der Übertrag einer „1“ war ein physischer Vorgang: Ein Zahn greift und dreht das Nachbarrad mit.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Nahaufnahme der Übertragshebel zwischen den Ziffernsäulen der Differenzmaschine Nr. 2" loading="lazy" width="1280">
<figcaption>Übertragshebel zwischen den Ziffernsäulen der Differenzmaschine Nr. 2, Exemplar Nr. 2 (Computer History Museum). Foto: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**Gleich ausprobieren.** Lassen Sie das Labor ab Y=9, Δ₁=7 einen Schritt laufen. Das Einerrad dreht über die 9 hinaus; ein Zahn nimmt die Zehner mit. Aus 9+7 wird 16. Das ist das Differenzenverfahren bei der Arbeit an x², genau die Methode, für die die Maschine gebaut wurde.

{{< lab type="difference-engine" height="720" >}}

Eigens für dieses Buch erstellt, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Ein didaktisches Säulenmodell, keine vollständige Rekonstruktion von Nr. 2.

Eine vollständige Differenzmaschine in voller Größe hat er nie fertiggestellt. Die These dieses Buchs: Die Finanzierung stand gegen ihn, ebenso die Fertigungstoleranzen seiner Zeit. Jede zusätzliche Stelle Genauigkeit war eine weitere Gelegenheit für Reibung, Spiel und sich aufaddierende Toleranzen, das Ergebnis zu verderben.

Seine Nachfolgekonstruktion, die Analytische Maschine, ist der eigentliche Vorfahr des modernen Computers. Sie hatte einen „Store“ (Speicher) und eine „Mill“ (das Rechenwerk), und sie war programmierbar. Die Befehle kamen von Lochkarten, eine Idee, entlehnt aus Industriemaschinen, die bereits in den Fabrikhallen standen.

Der eingebettete Emulator unten ist John Walkers Analytical Engine von Fourmilab. Gehen Sie die Karten Schritt für Schritt durch und sehen Sie zu, wie sich Rechenwerk und Speichersäulen ändern. Gemeinfrei; wir hosten eine Kopie und verlinken das Original.

{{< lab type="analytical-engine" height="780" >}}

Original: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) – [Quellcode-ZIP](https://www.fourmilab.ch/babbage/release/aemsource.zip) (gemeinfrei). Übersichten: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine).

Diese Entlehnung ist die nächste Station: der Jacquard-Webstuhl und die Trennung von Programm und Maschine.

## In Deutschland zu sehen

Das Bonner Arithmeum besitzt Nachbauten der Differenzmaschine von 1833 und des bis 1871 entstandenen Fragments der Analytischen Maschine. ([HNF-Blog, „Die Geburt des Computers“](https://blog.hnf.de/die-geburt-des-computers/))

**Weiter:** [Der Jacquard-Webstuhl]({{< relref "06-jacquard-loom.md" >}})

## Quellen

- Fourmilab / John Walker, The Analytical Engine (englisch): <https://www.fourmilab.ch/babbage/>
- Wikipedia, „Difference Engine“ (englisch): <https://en.wikipedia.org/wiki/Difference_Engine> (allgemeine Übersicht, kein Beleg für die These dieses Buchs)
- Wikipedia, „Analytical Engine“ (englisch): <https://en.wikipedia.org/wiki/Analytical_Engine> (allgemeine Übersicht, kein Beleg für die These dieses Buchs)
- Heinz Nixdorf MuseumsForum, Blog, „Die Geburt des Computers“ (deutsch): <https://blog.hnf.de/die-geburt-des-computers/>

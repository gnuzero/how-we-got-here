---
title: "Der Jacquard-Webstuhl"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Grundlagen: vom mechanischen Rechnen zur Elektronenröhre"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "Lochkarten trennten das Programm von der Maschine, die es ausführt"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage hat die Lochkartensteuerung nicht erfunden. Er hat sie entlehnt.

## In Krefeld läuft sie noch

Im Haus der Seidenkultur in Krefeld, der ehemaligen Paramentenweberei Hubert Gotzes, wurden von 1908 bis 1992 Seidentextilien für die katholische Kirche gewebt. Herzstück des Museums ist der original erhaltene Jacquard-Handwebsaal mit acht historischen Webstühlen aus dem 19. Jahrhundert. ([Haus der Seidenkultur Krefeld](https://seidenkultur.de/))

Das Museum beschreibt das Prinzip so: Jede Lochkarte entsprach einem Schusseintrag im Muster; Nadeln tasteten die Karte ab, und ein Loch bedeutete, dass der zugehörige Faden gehoben wird, kein Loch, dass er unten bleibt. ([Haus der Seidenkultur, „Websaal“](https://seidenkultur.de/websaal/))

Die NRW-Stiftung, die das Museum gefördert hat, beschreibt den „Kartenschläger“, der mit den großen Lochkarten die Webmuster gewissermaßen „programmieren“ konnte. ([NRW-Stiftung, Haus der Seidenkultur Krefeld](https://www.nrw-stiftung.de/entdecken/foerderprojekte/haus-der-seidenkultur-krefeld.html))

## Lyon, 1801

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Schmaler Jacquard-Webstuhl im Musée d'art et d'industrie, Saint-Étienne" loading="lazy" width="1280">
<figcaption>Jacquard-Webstuhl, Musée d'art et d'industrie, Saint-Étienne. Foto: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

Am 23. Dezember 1801 erhielt Joseph-Marie Jacquard ein Patent auf eine Maschine, die den Zugjungen (*tireur de lacs*) beim Weben gemusterter Stoffe ersetzen sollte. Laut Musée des Arts et Métiers wollte er die Werkstätten von den Schnurbündeln an den Seiten der Webstühle entlasten und Arbeitskraft sparen; die Mechanik wurde im 19. Jahrhundert mehrfach verbessert, war sehr erfolgreich und bei den Lyoner Seidenwebern, die um ihre Arbeit fürchteten, sehr unbeliebt. ([Musée des Arts et Métiers, „Métier original de Jacquard“](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard))

Die Musées Gadagne in Lyon datieren die Entwicklung ebenfalls auf 1801. Die Mechanik steuert über 600 bis 800 Haken die Fäden und wählt sie nach einem Programm auf Lochkarten aus; ihr Hauptvorteil ist, dass ein einzelner Weber sie bedienen kann. 1834 liefen am Hang der Croix-Rousse 2.885 solcher Webstühle, Ende des 19. Jahrhunderts fast 20.000. ([Musées Gadagne, „Métier équipé d'une mécanique Jacquard“](https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard))

Und 1804? Laut Fondation Napoléon verwendete Jacquard an seinem eigenen Webstuhl Bänder aus gelochtem Karton und erhielt am 2. Februar 1804 von der Société d'encouragement pour l'industrie nationale eine Goldmedaille. Im Musée des Arts et Métiers stehen demnach das originale Modell Jacquards und ein Jacquard-Webstuhl von 1804. ([Fondation Napoléon, Biografie Jacquard](https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/))

Das Musée des Arts et Métiers beschreibt Jacquards Idee als Verbindung dreier älterer Ansätze: des automatisch angetriebenen Zylinders von Vaucanson, des gelochten Papiers von Basile Bouchon und der gelochten Kartons von Jean-Philippe Falcon. Jeder Takt des Webstuhls dreht das Prisma der Mechanik und legt eine neue Karte vor. ([Musée des Arts et Métiers, Dossier „Codage/décodage“](https://www.arts-et-metiers.net/sites/arts-et-metiers/files/2021-10/field_media_document-439-pj-codage-decodage.pdf))

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Nahaufnahme der Lochkarten eines Jacquard-Webstuhls im Museum of Science and Industry, Manchester" loading="lazy" width="249">
<figcaption>Lochkarten an einem Jacquard-Webstuhl (Museum of Science and Industry, Manchester). Foto: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, gemeinfrei.</figcaption>
</figure>

Unsere Deutung: Karten tauschen heißt Muster tauschen. Der Webstuhl „kennt“ keinen Seidenbrokat; er führt eine feste, körperlich codierte Folge von Heben und Nichtheben aus.

## Von der Karte zum Programm

Die These dieses Buchs: Genau diese Abstraktion übernahm Babbage für die Analytische Maschine. Ein Programm ist eine Folge von Befehlen, getrennt von der Maschine, die sie ausführt.

Ada Lovelace übertrug Luigi Menabreas Aufsatz über die Analytische Maschine ins Englische; er erschien 1843 in den „Scientific Memoirs“, mit sieben Nachträgen von ihr. Anhang G enthält das Programm, das die ersten Bernoullischen Zahlen liefert. ([HNF-Blog, „Ada wird 200“](https://blog.hnf.de/ada-wird-200/)) Das Deutsche Patent- und Markenamt nennt diese Anleitung mit Rechenbefehlen und Speicherplätzen aller Zwischenergebnisse das heute als erste „Software“ geltende Computerprogramm der Welt. ([DPMA, „Ada Lovelace“](https://www.dpma.de/english/our_office/publications/ingeniouswomen/adalovelace/index.html))

In ihren Notes schrieb sie, die Maschine könne auch auf andere Dinge als Zahlen wirken, sofern sich deren Beziehungen in der Sprache der Operationen ausdrücken ließen. ([DPMA, „Ada Lovelace“](https://www.dpma.de/english/our_office/publications/ingeniouswomen/adalovelace/index.html); sinngemäß von uns aus dem Englischen übertragen) Die Max-Planck-Gesellschaft fasst diese Vision als Maschine zusammen, die auch Musiknoten, Buchstaben und Bilder verarbeiten könnte. ([Max-Planck-Gesellschaft, „Ada Lovelace“](https://www.mpg.de/frauen-in-der-forschung/ada-lovelace))

**Tür nach draußen:** Ada Lovelaces *Notes* zur Analytischen Maschine (zu Menabreas Aufsatz), der Primärtext für die Bernoulli-Skizze und das Argument „beliebige Symbole“. Übersicht: [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine).

Als Nächstes: warum dieses mechanische Kapitel alles Spätere noch prägt, und warum Zahnräder allein nicht skalieren konnten.

**Weiter:** [Warum das mechanische Rechnen zählt]({{< relref "07-why-mechanical-matters.md" >}})

## Quellen

- Haus der Seidenkultur Krefeld, Startseite (deutsch): <https://seidenkultur.de/>
- Haus der Seidenkultur Krefeld, „Websaal“ (deutsch): <https://seidenkultur.de/websaal/>
- NRW-Stiftung, „Haus der Seidenkultur Krefeld“ (deutsch): <https://www.nrw-stiftung.de/entdecken/foerderprojekte/haus-der-seidenkultur-krefeld.html>
- Musée des Arts et Métiers – Cnam, „Modèle : Métier original de Jacquard“ (französisch): <https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard>
- Musée des Arts et Métiers – Cnam, Dossier „Codage/décodage“ (PDF, französisch): <https://www.arts-et-metiers.net/sites/arts-et-metiers/files/2021-10/field_media_document-439-pj-codage-decodage.pdf>
- Musées Gadagne, Lyon, „Métier équipé d'une mécanique Jacquard“ (französisch): <https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard>
- Fondation Napoléon, „Jacquard, Joseph Marie (1752–1834)“ (französisch): <https://www.napoleon.org/histoire-des-2-empires/biographies/jacquard-joseph-marie-1752-1834-mecanicien-tisserand/>
- Heinz Nixdorf MuseumsForum, Blog, „Ada wird 200“ (deutsch): <https://blog.hnf.de/ada-wird-200/>
- Deutsches Patent- und Markenamt, „Ada Lovelace“ (englisch): <https://www.dpma.de/english/our_office/publications/ingeniouswomen/adalovelace/index.html>
- Max-Planck-Gesellschaft, „Ada Lovelace“ (deutsch): <https://www.mpg.de/frauen-in-der-forschung/ada-lovelace>
- Wikipedia, „Jacquard machine“ (englisch, allgemeine Übersicht): <https://en.wikipedia.org/wiki/Jacquard_machine>

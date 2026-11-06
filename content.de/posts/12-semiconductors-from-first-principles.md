---
title: "Halbleiter von Grund auf"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Physik und Bauelemente"
series_index: 11
aliases:
  - /posts/05-semiconductors-from-first-principles/
  - /posts/10-semiconductors-from-first-principles/
  - /posts/11-semiconductors-from-first-principles/
tags: []
summary: "Eine Bandlücke, die man in beide Richtungen schieben kann: Dotierung macht Silizium zum steuerbaren Schalter"
image_prompt: "Technical illustration of a silicon crystal lattice showing band gap diagram, labeled, textbook diagram style, blue/orange color coding"
video_prompt: "20-second animation: electron jumping across the band gap into the conduction band, clean scientific animation"
schematics: "Diagram: energy band diagram + silicon lattice with N-type and P-type doping"
---

Die These dieses Buchs: Silizium ist nicht besonders, weil es magisch wäre, sondern weil seine Bandstruktur dort liegt, wo man Leitung *steuern* kann, statt mit ihr dauerhaft an oder dauerhaft aus zu leben.

## Deutsche Vorgeschichte: vom Kristall zur Theorie

**Ferdinand Braun, 1874.** In den *Annalen der Physik und Chemie* von 1874 beschrieb Braun, dass an der Berührungsstelle zwischen einer Metallspitze und einem Bleiglanzkristall (Bleisulfid) Strom nur in einer Richtung frei fließt, die erste schriftliche Beschreibung einer Halbleiterdiode. ([Computer History Museum, „1874: Semiconductor Point-Contact Rectifier Effect is Discovered“](https://www.computerhistory.org/siliconengine/semiconductor-point-contact-rectifier-effect-is-discovered/)) Wo genau, ist uneinheitlich überliefert:

- Das **Deutsche Museum** schreibt, Braun habe 1874 eine Stelle als Oberlehrer am Thomasgymnasium in **Leipzig** angetreten, dort in Würzburg begonnene Untersuchungen fortgesetzt und dabei den Gleichrichter-Effekt bei Halbleitern entdeckt. ([Deutsches Museum, Findbuch NL 003 Braun (PDF)](https://www.deutsches-museum.de/assets/Forschung/Archiv/Download/Findbuecher_PDF/NL_003_Braun.pdf))
- Das **Universitätsarchiv Würzburg** berichtet, Braun habe in Würzburg Leitfähigkeitsmessungen an Salzschmelzen ohne befriedigende Ergebnisse gemacht und sich als Lehrer in Leipzig vor allem mit neuartigen Widerstandsmessungen an Kristallen beschäftigt. ([Universität Würzburg, Universitätsarchiv, „Ferdinand Braun“](https://www.uni-wuerzburg.de/uniarchiv/persoenlichkeiten/bedeutende-gelehrte/ferdinand-braun/))
- Das **Computer History Museum** verortet die Kristallversuche 1874 an der Universität **Würzburg**. ([Computer History Museum](https://www.computerhistory.org/siliconengine/semiconductor-point-contact-rectifier-effect-is-discovered/))

Nach Marburg kam Braun erst danach: Im Juli 1877 wurde er dort außerordentlicher Professor. ([Deutsches Museum, Findbuch NL 003 Braun (PDF)](https://www.deutsches-museum.de/assets/Forschung/Archiv/Download/Findbuecher_PDF/NL_003_Braun.pdf))

**Karl Baedeker, 1907.** Die Universität Leipzig schreibt, der in Leipzig geborene Physiker Karl Bädeker habe 1907 erstmals Verbindungen wie Cadmiumoxid und Kupferjodid nachgewiesen, die zugleich durchsichtig und leitfähig sind, und seine Habilitation über diese Materialien an der Universität Leipzig geschrieben. ([idw / Universität Leipzig, „Konferenz ehrt Leipziger Physiker Bädeker“, 2014](https://nachrichten.idw-online.de/2014/09/24/konferenz-ehrt-leipziger-physiker-baedeker)) Die Physikalisch-Astronomische Fakultät der Universität Jena führt ihn von 1910 bis 1914 als Titular-außerordentlichen Professor für Physik am Physikalischen Institut, mit den Arbeitsgebieten „Künstliche Elektronenleitfähigkeit“ und „Thermoelektrische Kraft in Schwermetallverbindungen“. ([Universität Jena, Professoren-Galerie, „Baedecker, Karl Wilhelm“](https://www.physik.uni-jena.de/3830/baedecker-karl-wilhelm-1877-1914)) Für die Arbeit von 1907 nennt die Leipziger Mitteilung also Leipzig; einen Jena-Bezug für 1907 konnten wir auf keiner institutionellen Seite belegen.

**Walter Schottky.** Bei Siemens & Halske wies Schottky 1929 die Sperrschichten in Metall-Halbleiter-Übergängen experimentell nach („Schottky-Kontakt“) und erklärte die Gleichrichterwirkung des Kupfer-I-oxid-Gleichrichters; 1939–42 folgte mit Eberhard Spenke die Raumladungstheorie der Sperrschichten. ([Deutsche Biographie / NDB, „Schottky, Walter“](https://www.deutsche-biographie.de/gnd118759183.html)) Unsere Deutung: Damit war Brauns rätselhafte Richtungsabhängigkeit gut fünfzig Jahre später physikalisch gedeutet.

**Heinrich Welker und die III-V-Halbleiter.** Nach seinem Eintritt 1951 in das neugegründete Labor für Festkörperphysik der Siemens-Schuckert-Werke in Erlangen meldete Welker noch im selben Jahr das Patent über Verbindungshalbleiter an. Er sagte voraus, dass eine Reihe von Verbindungen aus Elementen der III. und V. Hauptgruppe, etwa GaAs, InP, AlP und GaP, in derselben Zinkblendestruktur kristallisieren wie Silizium und Germanium und deshalb Halbleiter sein sollten, „Nachbildungen“ von Si und Ge. Schon 1955 waren laut dem Erlanger Physiker Albrecht Winnacker alle III-V-Halbleiter mit Zinkblendestruktur als Einkristalle herstellbar. ([Universität Erlangen-Nürnberg, Lehrstuhl für Werkstoffe der Elektronik und Energietechnik, Albrecht Winnacker, „Verbindungshalbleiter – ein Erlanger Beitrag zur modernen Elektronik“](https://www.halbleiter.techfak.uni-erlangen.de/allgemeine-vortraege-und-kleinere-schriften/verbindungshalbleiter-ein-erlanger-beitrag-zur-modernen-elektronik.shtml))

## Warum eine überwindbare Lücke zählt

Leiter sind Materialien, deren Valenz- und Leitungsband aneinandergrenzen oder überlappen; Metalle wie Kupfer und Aluminium leiten deshalb gut. Isolatoren haben eine große Bandlücke, das Valenzband ist voll, das Leitungsband leer, und selbst bei hohem Energieeintrag gelangen Elektronen kaum hinüber. Halbleiter liegen dazwischen: Bei niedriger Temperatur fließt kein Strom, mit steigender Temperatur oder durch Fremdatome steigt die Leitfähigkeit deutlich. Die Bandlücke von Silizium beträgt etwa 1,1 eV. ([Bergische Universität Wuppertal, „GET it digital“, Modul 9: Halbleiterbauelemente, Skript (PDF)](https://getitdigital.uni-wuppertal.de/module/modul-9-halbleiterbauelemente/Skript.pdf))

Die These dieses Buchs: Genau diese Eigenschaft, in beide Richtungen schiebbar, braucht ein Transistor. Die Grenzen der Röhre in Kapitel 11 waren Größe, Strombedarf und Zuverlässigkeit; die Lösung beginnt hier, in einem Festkörper, den man dotieren und mit Feldern steuern kann.

## Warum Silizium Germanium verdrängte

Bardeen und Brattain bauten ihren ersten Transistor im Dezember 1947 auf einem Germaniumplättchen. ([Computer History Museum, „1947: Invention of the Point-Contact Transistor“](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/)) Die Wuppertaler Tabelle nennt Germanium mit einer Bandlücke von 0,7 eV „früher häufig in elektronischen Geräten verwendet“ und Silizium mit 1,1 eV das „häufigste Halbleitermaterial“. ([Universität Wuppertal, Skript Modul 9 (PDF)](https://getitdigital.uni-wuppertal.de/module/modul-9-halbleiterbauelemente/Skript.pdf))

Stanford Engineering nennt zwei Gründe für Silizium: Es ist reichlich vorhanden und damit billig, und sein natürliches Oxid SiO₂ isoliert in dicht gepackten Schaltungen und „passiviert“ die Oberfläche. Germanium dagegen ist selten, und sein natürliches Oxid ist thermisch instabil und löst sich in Wasser. ([Stanford University School of Engineering, „Small scale of transistors calls for revival of a silicon ‚rival‘“](https://engineering.stanford.edu/news/small-scale-transistors-calls-revival-silicon-rival)) Das Oxid als Gate-Isolator des MOSFET greift Kapitel 13 wieder auf.

## Dotierung: vom Kristall zum Schalter

Baut man in einen Siliziumkristall ein fünfwertiges Element wie Phosphor ein, entsteht ein n-Halbleiter: Vier der fünf Außenelektronen werden für die Bindung gebraucht, das fünfte löst sich schon bei geringer Energiezufuhr; zurück bleibt ein ortsfester positiver Atomrumpf, der Donator. Ein dreiwertiges Element wie Bor holt sich zur Absättigung der Bindung ein Elektron aus der Umgebung; es entsteht eine negative ortsfeste Ladung, der Akzeptor, und in der Umgebung ein positives Loch: ein p-Halbleiter. ([LEIFIphysik, „Dotierte Halbleiter“](https://www.leifiphysik.de/elektronik/einfuehrung-die-elektronik/grundwissen/dotierte-halbleiter))

Die These dieses Buchs: Keine der beiden Sorten ist für sich ein Schalter. Erst zusammen, als p-n-Übergang, werden sie zum Grundbaustein jeder folgenden Diode und jedes Transistors. Kapitel 13 setzt dort an.

**Weiter:** [Der Transistor: vom BJT zum MOSFET]({{< relref "13-the-transistor-bjt-to-mosfet.md" >}})

## Quellen

- Deutsches Museum, Archiv, Findbuch NL 003 Karl Ferdinand Braun (PDF, deutsch): <https://www.deutsches-museum.de/assets/Forschung/Archiv/Download/Findbuecher_PDF/NL_003_Braun.pdf>
- Universität Würzburg, Universitätsarchiv, „Ferdinand Braun“ (deutsch): <https://www.uni-wuerzburg.de/uniarchiv/persoenlichkeiten/bedeutende-gelehrte/ferdinand-braun/>
- idw / Universität Leipzig, „Konferenz ehrt Leipziger Physiker Bädeker“ (2014, deutsch): <https://nachrichten.idw-online.de/2014/09/24/konferenz-ehrt-leipziger-physiker-baedeker>
- Universität Jena, Physikalisch-Astronomische Fakultät, Professoren-Galerie, „Baedecker, Karl Wilhelm“ (deutsch): <https://www.physik.uni-jena.de/3830/baedecker-karl-wilhelm-1877-1914>
- Deutsche Biographie / NDB, „Schottky, Walter“ (deutsch): <https://www.deutsche-biographie.de/gnd118759183.html>
- Universität Erlangen-Nürnberg, Albrecht Winnacker, „Verbindungshalbleiter – ein Erlanger Beitrag zur modernen Elektronik“ (deutsch): <https://www.halbleiter.techfak.uni-erlangen.de/allgemeine-vortraege-und-kleinere-schriften/verbindungshalbleiter-ein-erlanger-beitrag-zur-modernen-elektronik.shtml>
- Bergische Universität Wuppertal, „GET it digital“, Modul 9: Halbleiterbauelemente, Skript (PDF, deutsch): <https://getitdigital.uni-wuppertal.de/module/modul-9-halbleiterbauelemente/Skript.pdf>
- LEIFIphysik, „Dotierte Halbleiter“ (deutsch): <https://www.leifiphysik.de/elektronik/einfuehrung-die-elektronik/grundwissen/dotierte-halbleiter>
- Computer History Museum, „1874: Semiconductor Point-Contact Rectifier Effect is Discovered“ (englisch): <https://www.computerhistory.org/siliconengine/semiconductor-point-contact-rectifier-effect-is-discovered/>
- Computer History Museum, „1947: Invention of the Point-Contact Transistor“ (englisch): <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
- Stanford University School of Engineering, „Small scale of transistors calls for revival of a silicon ‚rival‘“ (englisch): <https://engineering.stanford.edu/news/small-scale-transistors-calls-revival-silicon-rival>

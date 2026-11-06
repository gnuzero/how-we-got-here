---
title: "Das Zeitalter der Elektronenröhre"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — Grundlagen: vom mechanischen Rechnen zur Elektronenröhre"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "Röhren beseitigten die bewegten Teile und bezahlten die Geschwindigkeit mit Hitze, Strombedarf und Ausfällen"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

Der Kerntrick der Elektronenröhre ist einfach: einen großen Strom mit einem kleinen steuern, ohne bewegte Teile. Die These dieses Buchs: Das machte Rechner um Größenordnungen schneller als alles auf Relaisbasis, und deshalb war die Epoche ein ständiger Kampf gegen Hitze, Strombedarf und Ausfallrate.

## Wien 1906: das Kathodenstrahlrelais

Am 4. März 1906 reichte der österreichische Physiker Robert von Lieben beim deutschen Patentamt seine Anmeldung DRP 179807 für ein „Kathodenstrahlrelais“ ein. Ziel war, „mittels Stromschwankungen kleiner Energie solche von großer Energie auszulösen“; gedacht war es vor allem als Verstärker für die Telefonie. Lieben baute mit seinen Mitarbeitern Reisz und Strauss später ebenfalls ein Gitter ein; 1911 übernahm ein Industriekonsortium die Rechte und übertrug sie der Tochterfirma Telefunken. ([heise online, „100 Jahre Verstärkerröhre“](https://www.heise.de/news/100-Jahre-Verstaerkerroehre-107889.html))

Bevor Liebens Patent am 19. November 1906 veröffentlicht wurde, hatte Lee de Forest in den USA bereits unter der Nummer 841387 ein Patent für Röhrentypen angemeldet; heise nennt de Forest den Erfinder der Triode und hält fest, dass im deutschsprachigen Raum vorrangig Lieben die Erfinderpriorität zuerkannt wurde, weltweit aber de Forest als Erfinder der Elektronenröhre gilt. ([heise online](https://www.heise.de/news/100-Jahre-Verstaerkerroehre-107889.html))

Unsere Deutung: Liebens Name „Relais“ ist kein Zufall. Die Röhre trat als Nachfolger genau jenes Bauteils an, das im vorigen Kapitel an seine Grenze stieß.

## Wie eine Triode schaltet

In einer einfachen Elektronenröhre sitzen Metallelektroden in einem evakuierten Glaskolben. Aus der beheizten Kathode treten Elektronen thermisch ins Vakuum aus und werden von der Anode aufgefangen; ein nennenswerter Strom fließt nur bei positiver Anodenspannung. Bei der Triode ist zwischen Kathode und Anode eine weitere Elektrode angebracht, das Gitter, aus Stäben oder einem Drahtnetz. Schon eine relativ kleine negative Gitterspannung verändert den Anodenstrom stark; darauf beruht die Verstärkerwirkung der Triode. ([Universität Duisburg-Essen, Physikalisches Grundpraktikum, Versuchsanleitung C12 „Kennlinien von Elektronenröhren“ (PDF)](https://www.uni-due.de/imperia/md/content/physik/studium/praktika/gp/anleitungen/c12.pdf))

Die These dieses Buchs: Außer Elektronen bewegt sich nichts. Deshalb konnten Röhren in Mikrosekunden schalten, wo Relais Millisekunden brauchten, ein Gewinn von etwa dem Tausendfachen durch den Wegfall mechanischer Bewegung.

## ENIAC: die 30-Tonnen-Schalttafel

Die ENIAC wurde am 14. Februar 1946 öffentlich vorgestellt, gebaut an der Moore School der University of Pennsylvania. Voll in Betrieb belegte sie einen Raum von 30 mal 50 Fuß, wog 30 Tonnen, brauchte 18.000 Röhren und hatte eigene Stromleitungen mit einem Verbrauch von 150 Kilowatt. ([Penn Engineering, „ENIAC“](https://www.engineering.upenn.edu/about/history-heritage/eniac/))

Ab Juli 1947 wurde die ENIAC umgebaut, sodass codierte Befehle in ihren „function tables“ gespeichert wurden, Bänken von Zehnstellungsschaltern, die vorher Konstanten hielten. Im April 1948 lief auf der umgebauten Maschine ein in Schaltern gespeichertes Programm. ([Computer History Museum, „Programming the ENIAC“](https://computerhistory.org/blog/programming-the-eniac-an-example-of-why-computer-history-is-hard/))

Die These dieses Buchs: Vorher hieß „Programmieren“ physisches Umverdrahten mit Steckkabeln und Schaltern; die *Abfolge der Operationen* lag in der Kabelführung. Dieser Schmerz ist der direkte Vorfahr der CPU-Architektur in Phase 3: ein *gespeichertes* Programm, Befehle im selben Speicher wie die Daten.

Herman H. Goldstines Geschichte der frühen Elektronenrechner bleibt der klassische Bericht aus nächster Nähe; populäre Geschichten vom „Röhrentausch alle paar Minuten“ sollte man daran messen. Miterfinder J. Presper Eckert nannte genau diese Geschichte in einem 1989 aufgezeichneten Interview „another myth“. ([Computerworld, Interview mit J. Presper Eckert](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html))

**Tür nach draußen:** Herman H. Goldstine, *The Computer from Pascal to von Neumann*, ENIAC-Geschichte aus erster Reihe, nützlich gegen Legenden.

## Warum 18.000 Röhren ein Albtraum waren

Eckert zufolge fiel etwa alle zwei Tage eine Röhre aus, und das Team fand den Fehler binnen 15 Minuten. Die Heizfäden hielten länger, weil man sie unterhalb ihrer Nennspannung betrieb, und die Maschine war auf herausnehmbaren Einschüben aufgebaut, sodass ausgefallene Röhren schnell getauscht werden konnten. ([Computerworld, Interview mit J. Presper Eckert](https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html))

Die These dieses Buchs: Ausfälle waren real und teuer. Jede Röhre gibt spürbar Wärme ab; Räume voller Röhren brauchten ernsthafte Kühlung. Die Maschine war mächtig für ihre Zeit und brutal teuer im Betrieb.

## Röhrenrechner in Deutschland: Göttingen und München

Am 7. Juni 1952 weihte der Physiker Heinz Billing in Göttingen die G1 offiziell ein, laut HNF den ersten programmierbaren Elektronenrechner in Deutschland. Sie enthielt 476 Röhren, 101 Relais und einen Trommelspeicher und schaffte im Durchschnitt zwei bis drei Rechenoperationen pro Sekunde. Die Relais für das Projekt steuerte Konrad Zuse bei. ([HNF-Blog, „G1 – der erste deutsche Röhrenrechner“](https://blog.hnf.de/g1-der-erste-deutsche-roehrenrechner/))

Das Findbuch des Deutschen Museums zu Billings Nachlass datiert die Fertigstellung dagegen auf den „Herbst 1952“; es nennt die G1 die erste deutsche elektronische Rechenmaschine und den Nachfolger G2 „im Herbst 1954“ einsatzbereit. ([Deutsches Museum, Findbuch NL 106 Billing](https://www.deutsches-museum.de/assets/Forschung/Archiv/Download/Findbuecher_PDF/NL_106_Billing.pdf)) heise berichtet, die G1 sei bis 1958 gelaufen und dann verschrottet worden; nur der Trommelspeicher sei erhalten und stehe im Deutschen Museum. ([heise online, „Computerpionier Heinz Billing feiert 100. Geburtstag“](https://www.heise.de/news/Computerpionier-Heinz-Billing-feiert-100-Geburtstag-2164603.html))

In München speicherte die PERM (Programmgesteuerte Elektronische Rechenanlage München) 1956 laut Deutschem Museum 8.192 Datenwörter zu je 51 Bit. ([Deutsches Museum, Ausstellung Informatik](https://www.deutsches-museum.de/museumsinsel/ausstellung/informatik)) Die TU München berichtet, Hans Piloty habe sie 1956 nach fünf Jahren Bauzeit fertiggestellt, obwohl Röhren und Dioden schwer zu beschaffen waren; sie lief bis 1974 und steht seit 1988 im Deutschen Museum. ([TU München, „Rechenmonster“](https://www.tum.de/aktuelles/alle-meldungen/pressemitteilungen/details/rechenmonster)) Das HNF nennt 2.400 Röhren und 3.000 Halbleiterdioden und datiert die Inbetriebnahme auf den 8. Mai 1956, „nicht am 7. Mai, wie man manchmal liest“; zu besichtigen war sie im Deutschen Museum demnach von 1988 bis 2022. ([HNF-Blog, „PERM: das Rechenmonster aus München“](https://blog.hnf.de/perm-das-rechenmonster-aus-muenchen/))

## Die Brücke

Die These dieses Buchs: Der Transistor gewann nicht, weil Ingenieure um der Klugheit willen klug waren. Er gewann, weil die Physik der Röhre selbst, Hitze, Größe und der empfindliche Vakuumkolben, dem Ansatz eine harte Obergrenze setzte.

**Weiter:** [Warum der Transistor kommen musste]({{< relref "11-why-the-transistor-had-to-happen.md" >}})

## Quellen

- heise online, „100 Jahre Verstärkerröhre“ (deutsch): <https://www.heise.de/news/100-Jahre-Verstaerkerroehre-107889.html>
- Heinz Nixdorf MuseumsForum, Blog, „G1 – der erste deutsche Röhrenrechner“ (deutsch): <https://blog.hnf.de/g1-der-erste-deutsche-roehrenrechner/>
- Deutsches Museum, Archiv, Findbuch NL 106 Heinz Billing (PDF, deutsch): <https://www.deutsches-museum.de/assets/Forschung/Archiv/Download/Findbuecher_PDF/NL_106_Billing.pdf>
- heise online, „Computerpionier Heinz Billing feiert 100. Geburtstag“ (deutsch): <https://www.heise.de/news/Computerpionier-Heinz-Billing-feiert-100-Geburtstag-2164603.html>
- Deutsches Museum, Ausstellung „Informatik“ (deutsch): <https://www.deutsches-museum.de/museumsinsel/ausstellung/informatik>
- Technische Universität München, „Rechenmonster“ (deutsch): <https://www.tum.de/aktuelles/alle-meldungen/pressemitteilungen/details/rechenmonster>
- Heinz Nixdorf MuseumsForum, Blog, „PERM: das Rechenmonster aus München“ (deutsch): <https://blog.hnf.de/perm-das-rechenmonster-aus-muenchen/>
- Universität Duisburg-Essen, Fakultät für Physik, Grundpraktikum, Anleitung C12 (PDF, deutsch): <https://www.uni-due.de/imperia/md/content/physik/studium/praktika/gp/anleitungen/c12.pdf>
- Penn Engineering, „ENIAC“ (englisch): <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
- Computer History Museum, „Programming the ENIAC: an example of why computer history is hard“ (englisch): <https://computerhistory.org/blog/programming-the-eniac-an-example-of-why-computer-history-is-hard/>
- Computerworld, „Q&A: A lost interview with ENIAC co-inventor J. Presper Eckert“ (englisch): <https://www.computerworld.com/article/1701347/q-a-a-lost-interview-with-eniac-co-inventor-j-presper-eckert.html>

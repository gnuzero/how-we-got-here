---
title: "El telar de Jacquard"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: del cálculo mecánico a los tubos de vacío"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "Las tarjetas perforadas separaron el programa de la máquina que lo ejecuta"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

Babbage no inventó el control por tarjetas perforadas. Lo tomó prestado (planteamiento del capítulo).

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Telar Jacquard estrecho en el Musée d'art et d'industrie de Saint-Étienne" loading="lazy" width="1280">
<figcaption>Telar Jacquard, Musée d'art et d'industrie, Saint-Étienne. Foto: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

El 23 de diciembre de 1801, Joseph-Marie Jacquard obtuvo una patente para una máquina destinada a sustituir al «tireur de lacs», el ayudante que tiraba de las cuerdas en el tejido de telas brocadas y labradas (Musée des Arts et Métiers – Cnam, «Modèle : Métier original de Jacquard», inv. 07641-0001 (texto de Lionel Dufaux); [arts-et-metiers.net/musee/modele-metier-original-de-jacquard](https://www.arts-et-metiers.net/musee/modele-metier-original-de-jacquard), consultado 2026-11-06). Buscaba despejar los talleres de los tejedores de seda lioneses, abarrotados por los haces de cuerdas a los lados de los telares, y ahorrar mano de obra; la mecánica se perfeccionó varias veces a lo largo del siglo XIX y tuvo un gran éxito, aunque los tejedores temían perder su empleo (ibíd.). El Musée d’histoire de Lyon dice que Jacquard la puso a punto en 1801 (Musées Gadagne (Musée d’histoire de Lyon), «Métier équipé d’une mécanique Jacquard», inv. 009.1; [gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard](https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard), consultado 2026-11-06); el Science Museum de Londres escribe que los telares Jacquard se construyeron por primera vez en 1804 (Science Museum, «Women in Computing», 31 de mayo de 2020; [sciencemuseum.org.uk/objects-and-stories/women-computing](https://www.sciencemuseum.org.uk/objects-and-stories/women-computing), consultado 2026-11-06). Las dos fechas no se contradicen necesariamente, pero ninguna de las fuentes que abrimos explica qué cambió entre una y otra.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Detalle de tarjetas perforadas en un telar Jacquard del Museum of Science and Industry de Mánchester" loading="lazy" width="249">
<figcaption>Tarjetas perforadas en un telar Jacquard (Museum of Science and Industry, Mánchester). Foto: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, dominio público.</figcaption>
</figure>

La mecánica Jacquard va montada encima de un telar de mano y gobierna todos los hilos mediante 600 a 800 ganchos, que selecciona con un programa inscrito en tarjetas perforadas; su gran ventaja era que podía manejarla una sola persona y no varias, como el telar tradicional (Musées Gadagne (Musée d’histoire de Lyon), «Métier équipé d’une mécanique Jacquard», inv. 009.1; [gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard](https://www.gadagne-lyon.fr/mhl/metier-equipe-dune-mecanique-jacquard), consultado 2026-11-06). Según el mismo museo, más que un invento de la nada fue una hábil combinación de tres técnicas anteriores: las agujas de Basile Bouchon (1725), la cadena de cartones perforados de Jean-Baptiste Falcon (1728) y el telar automatizado de Vaucanson (ibíd.). Dicho de forma simplificada (lectura del capítulo): agujero, el hilo sube; sin agujero, se queda. Cambia las tarjetas y cambia el dibujo. El telar no sabía qué era un «brocado de seda»; ejecutaba una secuencia fija, codificada físicamente, de decisiones de subir o no subir.

### En Valencia

La seda tenía en Valencia una larga tradición gremial: el barrio de Velluters, que tomó su nombre de los tejedores de terciopelo, llegó a tener en 1767 cerca de cinco mil telares, que daban trabajo a casi la mitad de la población de la ciudad (Museo de la Seda de Valencia (Colegio del Arte Mayor de la Seda), «Museo»; [museodelasedavalencia.com/museo](https://www.museodelasedavalencia.com/museo/), consultado 2026-11-06). En Montcada, en la antigua fábrica de Garín, el Museu de la Fàbrica de la Seda conserva once telares Jacquard del siglo XIX en funcionamiento y más de cien cartones perforados (Comunitat Valenciana, Ruta de la Seda, «Museu de la Fàbrica de la Seda» (Montcada); [actividades.comunitatvalenciana.com/…/museu-de-la-fabrica-de-la-seda](https://www.actividades.comunitatvalenciana.com/ruta-de-la-seda/recursos/museu-de-la-fabrica-de-la-seda), consultado 2026-11-06).

## El programa, separado de la máquina

Esa es la abstracción que Babbage adoptó para la máquina analítica: un programa es una secuencia de instrucciones separada de la máquina que la ejecuta (lectura del capítulo). La máquina analítica, en efecto, se iba a programar con tarjetas perforadas, la técnica con la que el telar de Jacquard controlaba los dibujos (Science Museum, «Charles Babbage’s Difference Engines and the Science Museum», 18 de julio de 2023; [sciencemuseum.org.uk/…/charles-babbages-difference-engines-and-science-museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), consultado 2026-11-06).

Ada Lovelace vio lo que implicaba esa separación. Sus notas a la memoria de Menabrea sobre la máquina analítica, publicadas en agosto de 1843 en los *Scientific Memoirs* de Taylor con la firma «A.A.L.», explicaban que la máquina podía manipular cantidades distintas de los números, como símbolos, letras e incluso notas musicales (Science Museum, «Women in Computing», 31 de mayo de 2020; [sciencemuseum.org.uk/objects-and-stories/women-computing](https://www.sciencemuseum.org.uk/objects-and-stories/women-computing), consultado 2026-11-06). En su Nota G tomó como ejemplo los números de Bernoulli y expuso paso a paso cómo los calcularía la máquina; el Science Museum lo describe como el primer algoritmo publicado, a veces considerado el primer programa informático (ibíd.).

**Puerta de salida:** las *Notas* de Ada Lovelace sobre la máquina analítica (a la traducción de Menabrea), el texto original del cálculo de los números de Bernoulli y del argumento de «cualquier símbolo». Mapa: [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine) (en inglés).

Siguiente: por qué este capítulo mecánico sigue marcando todo lo que viene después, y por qué los engranajes solos no podían crecer ([Por qué importa el cálculo mecánico]({{< relref "07-why-mechanical-matters.md" >}})).

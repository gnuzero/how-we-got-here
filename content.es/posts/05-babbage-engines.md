---
title: "Las máquinas de Babbage"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: del cálculo mecánico a los tubos de vacío"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "La máquina de diferencias y la máquina analítica: almacén, molino y un programa en tarjetas"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

La computación no empezó con la electricidad. Empezó con engranajes (planteamiento del capítulo).

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Máquina de diferencias n.º 2 de Charles Babbage en el Science Museum de Londres" loading="lazy" width="1280">
<figcaption>Máquina de diferencias n.º 2 (Science Museum, Londres). Foto: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Charles Babbage dio a conocer su primera máquina de calcular, la máquina de diferencias, en una comunicación leída en la Royal Astronomical Society el 14 de junio de 1822 (Science Museum, «Charles Babbage’s Difference Engines and the Science Museum», 18 de julio de 2023; [sciencemuseum.org.uk/…/charles-babbages-difference-engines-and-science-museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), consultado 2026-11-06). Estaba pensada para calcular y tabular funciones polinómicas (Computer History Museum, «The Engines», sitio *The Babbage Engine*; [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines/), consultado 2026-11-06) mediante el método de las diferencias finitas, que solo necesita sumas y restas, mucho más fáciles de mecanizar que la multiplicación (Science Museum, «Charles Babbage’s Difference Engines and the Science Museum», 18 de julio de 2023; [sciencemuseum.org.uk/…/charles-babbages-difference-engines-and-science-museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), consultado 2026-11-06). Era enteramente mecánica: ruedas dentadas de latón, varillas, trinquetes y piñones, y los números se representaban en sistema decimal por la posición de ruedas metálicas de diez dientes montadas en columnas (ibíd.). Cada cifra de un número tenía su propia rueda (Computer History Museum, «The Engines», sitio *The Babbage Engine*; [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines/), consultado 2026-11-06). Llevarse una era, por tanto, un hecho físico: un diente que engancha la rueda vecina y la hace avanzar (lectura del capítulo).

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Detalle de los brazos de acarreo entre columnas de cifras de la máquina de diferencias n.º 2" loading="lazy" width="1280">
<figcaption>Brazos de acarreo entre columnas de cifras en la máquina de diferencias n.º 2, ejemplar n.º 2 (Computer History Museum). Foto: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**Pruébalo ahora.** Haz avanzar el laboratorio desde Y=9, Δ₁=7. La rueda de las unidades pasa del 9; un diente engancha las decenas. 9+7 se convierte en 16. Son las diferencias finitas calculando x², el método para el que se construyó la máquina.

{{< lab type="difference-engine" height="720" >}}

Original para este libro, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Es un modelo didáctico de columnas, no una reconstrucción completa de la n.º 2.

Cuando se pagaron las últimas facturas de la primera máquina de diferencias, el Tesoro británico había gastado 17.500 libras (Science Museum, «Charles Babbage’s Difference Engines and the Science Museum», loc. cit.). En 1842 el Gobierno tomó la decisión definitiva de abandonar la máquina de diferencias (Science Museum Group Collection, «Charles Babbage 1791-1871»; [collection.sciencemuseumgroup.org.uk/people/ap8/babbage-charles](https://collection.sciencemuseumgroup.org.uk/people/ap8/babbage-charles), consultado 2026-11-06).

Babbage nunca terminó una máquina de diferencias a escala completa: ninguno de sus diseños se construyó entero en vida suya (Computer History Museum, «The Engines», sitio *The Babbage Engine*; [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines/), consultado 2026-11-06). El argumento de este capítulo es que la financiación jugó en su contra, y también las tolerancias de fabricación de la época: cada cifra más de precisión era otra ocasión para que el rozamiento, la holgura y la acumulación de errores arruinaran el resultado.

### Una mirada desde Madrid, 1914

Leonardo Torres Quevedo dedicó a Babbage unas páginas de sus «Ensayos sobre automática» (Leonardo Torres y Quevedo, «Ensayos sobre automática. Su definición. Extensión teórica de sus aplicaciones», *Revista de la Real Academia de Ciencias Exactas, Físicas y Naturales*, XII, enero de 1914; PDF de la Real Academia de Ciencias, [rac.es/fedora/get/Revistas:REV_20100220_03288/PDF](https://rac.es/fedora/get/Revistas:REV_20100220_03288/PDF), consultado 2026-11-06). Escribió que hizo falta «el genio mecánico de Babbage» para afrontar el problema y que, pese a largos años de trabajo y a gastar «á manos llenas» su dinero y el de su país, no obtuvo «ningún resultado satisfactorio» (ibíd., p. 416). Según Torres Quevedo, Babbage dispuso de un taller instalado por el Gobierno inglés y de un laboratorio en su casa, gastó cerca de un millón de francos —500.000 de su fortuna y 425.000 del Gobierno— y trabajó en la obra durante treinta años; sus dibujos y modelos se conservaban en el museo de Kensington (ibíd., p. 417). Lo que Torres Quevedo concluyó de todo ello para su propia máquina se cuenta en [Why mechanical matters]({{< relref path="07-why-mechanical-matters.md" lang="en" >}}) (en inglés en esta rama).

### La máquina analítica

En 1834, con la máquina de diferencias paralizada, Babbage concibió otra más ambiciosa, la máquina analítica (Science Museum, «Charles Babbage’s Difference Engines and the Science Museum», 18 de julio de 2023; [sciencemuseum.org.uk/…/charles-babbages-difference-engines-and-science-museum](https://www.sciencemuseum.org.uk/objects-and-stories/charles-babbages-difference-engines-and-science-museum), consultado 2026-11-06). Es, a nuestro juicio, el verdadero antepasado del ordenador moderno. Tenía un «almacén» (*store*) donde se guardaban los números y los resultados intermedios, y un «molino» (*mill*) separado donde se hacían las operaciones aritméticas; y era programable mediante tarjetas perforadas, la técnica con la que el telar de Jacquard controlaba los dibujos del tejido (ibíd.; también Computer History Museum, «The Engines», sitio *The Babbage Engine*; [computerhistory.org/babbage/engines](https://www.computerhistory.org/babbage/engines/), consultado 2026-11-06). Es decir, una idea tomada de una máquina que ya estaba en las fábricas (lectura del capítulo).

El emulador alojado aquí abajo es el Analytical Engine de Fourmilab, de John Walker. Avanza las tarjetas y observa cómo cambian las columnas del molino y del almacén. Es de dominio público; alojamos una copia y conservamos el enlace al original.

{{< lab type="analytical-engine" height="780" >}}

Origen: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [código fuente (zip)](https://www.fourmilab.ch/babbage/release/aemsource.zip) (dominio público). Mapas: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine) (en inglés).

Ese préstamo es la próxima parada: [el telar de Jacquard]({{< relref "06-jacquard-loom.md" >}}) y la separación entre el programa y la máquina.

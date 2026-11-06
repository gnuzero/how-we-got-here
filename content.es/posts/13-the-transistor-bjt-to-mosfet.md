---
title: "El transistor: del BJT al MOSFET"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — Física y dispositivos"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "Los BJT, controlados por corriente, gastaban energía en reposo; los MOSFET, controlados por tensión, hicieron posible la densidad"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

Dos familias de dispositivos reciben el nombre de «transistor». Conmutan con física distinta, y solo una de ellas escala hasta los miles de millones de dispositivos de un chip moderno (planteamiento del capítulo).

## El BJT: una corriente controla otra corriente

Un transistor bipolar de unión está formado por tres regiones de semiconductor dopado; una corriente pequeña en la región central, la base, controla una corriente mayor entre las regiones de los extremos, el emisor y el colector (HyperPhysics (Georgia State University), «Transistors»; [hyperphysics.phy-astr.gsu.edu/hbase/Solids/trans.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Solids/trans.html), consultado 2026-11-06). En un NPN, el emisor y el colector son de tipo N y la base de tipo P (explicación del capítulo). Para mantenerlo encendido hay que seguir suministrando corriente de base (explicación del capítulo). A escala de chip ese coste en reposo se acumula: es el punto débil del bipolar para la lógica densa (argumento del capítulo).

## El MOSFET: una tensión controla un canal

El MOSFET añade al transistor de efecto de campo una capa de dióxido de silicio entre la puerta y el semiconductor, y logra una impedancia de entrada altísima, del orden de 10⁹ a 10¹⁴ ohmios (HyperPhysics (Georgia State University), «MOSFET»; [hyperphysics.phy-astr.gsu.edu/hbase/Electronic/mosfet.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/mosfet.html), consultado 2026-11-06). Es el SiO₂ estable del [capítulo anterior]({{< relref "12-semiconductors-from-first-principles.md" >}}). La tensión de puerta no empuja corriente *a través* de la puerta, porque el óxido bloquea la continua: crea un campo que forma o elimina un canal conductor entre la fuente y el drenador. En un NMOS, una tensión de puerta positiva atrae electrones hacia una capa de inversión en un cuerpo de tipo P y circula corriente; al bajar la tensión, el canal desaparece y la corriente se detiene (explicación del capítulo).

**La puerta no consume prácticamente corriente en régimen estacionario.** Una vez cargada la capacidad de la puerta, mantener el dispositivo encendido casi no cuesta nada: lo contrario de la corriente de base continua del BJT (explicación del capítulo, coherente con la impedancia de entrada citada arriba).

## Por qué el MOSFET ganó en la lógica digital

Que la puerta casi no consuma corriente en reposo es toda la historia (argumento del capítulo). En 1963, C. T. Sah y Frank Wanlass, del laboratorio de I+D de Fairchild, mostraron que los circuitos lógicos que combinan transistores MOS de canal p y de canal n en configuración complementaria consumían casi cero potencia en espera; Wanlass patentó la idea que hoy se llama CMOS (CHM, «1963: Complementary MOS Circuit Configuration is Invented», *The Silicon Engine*; [computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), consultado 2026-11-06). Cuando los diseñadores aprovecharon el escalado para meter cientos de miles de transistores en un chip, CMOS resultó la mejor solución para gestionar la densidad de potencia (ibíd.). Según el Computer History Museum, por su menor tamaño y su menor consumo frente a los dispositivos bipolares, más del 99 % de los microchips que se producen hoy usan transistores MOS (CHM, «1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated», *The Silicon Engine*; [computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), consultado 2026-11-06). El próximo capítulo, [puertas lógicas a partir de transistores]({{< relref "14-logic-gates-from-transistors.md" >}}), construye sobre esa base; el arco del escalado vuelve más adelante en el libro (encuadre del capítulo).

Los BJT no desaparecieron: siguen importando donde la capacidad de corriente o la linealidad analógica pesan más que la densidad. Para la lógica digital a gran escala, la física del consumo en reposo del MOSFET lo convirtió en el único camino viable (argumento del capítulo).

**Puerta de salida:** M. M. (John) Atalla y Dawon Kahng, de Bell Labs, lograron en 1959 el primer transistor de efecto de campo de puerta aislada que funcionó, reduciendo los «estados de superficie» en la interfaz entre el silicio y su óxido térmico; Kahng solicitó la patente el 31 de mayo de 1960 (CHM, «1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated», *The Silicon Engine*; [computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), consultado 2026-11-06). El mismo museo señala que Bell Labs no siguió desarrollándolo porque era lento y no resolvía ninguna necesidad urgente del sistema telefónico, y que fueron Fairchild y RCA quienes vieron sus ventajas; los dispositivos MOS llegaron al mercado en 1964 (ibíd.).

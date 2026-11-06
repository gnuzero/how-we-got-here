---
title: "Puertas lógicas a partir de transistores"
weight: 14
date: 2026-01-01
draft: false
phase: "2 — Física y dispositivos"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS empareja NMOS y PMOS para que las puertas en reposo no tengan camino estático: la topología que escaló"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

CMOS —*Complementary Metal-Oxide-Semiconductor*, metal-óxido-semiconductor complementario— es la topología de circuito que está detrás de casi todos los chips digitales (planteamiento del capítulo). Los procesos de los años setenta solían tener solo transistores nMOS, baratos pero con consumo en reposo; desde los años ochenta se usan procesos CMOS por su bajo consumo en reposo (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 1: Circuits & Layout», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), consultado 2026-11-06). La idea es emparejar un NMOS con un PMOS para que, en régimen estacionario, conduzca exactamente uno de los dos. La corriente estática casi nula del dispositivo, que vimos en [el capítulo anterior]({{< relref "13-the-transistor-bjt-to-mosfet.md" >}}), se convierte así en una familia lógica que se puede componer (explicación del capítulo).

## El inversor: la unidad CMOS más pequeña

El PMOS va arriba, hacia la alimentación; el NMOS abajo, hacia masa; las puertas unidas forman la entrada y los drenadores unidos, la salida. Un nMOS conduce con un 1 en la puerta y un pMOS con un 0 (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 1: Circuits & Layout», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), consultado 2026-11-06). Entrada alta: NMOS encendido, PMOS apagado, salida a masa. Entrada baja: PMOS encendido, NMOS apagado, salida a la alimentación. En cualquiera de los dos estados estables un transistor conduce y el otro no, de modo que nunca hay un camino estático de la alimentación a masa salvo durante la breve conmutación (explicación del capítulo). Ese camino breve existe: como las entradas tienen tiempos de subida y bajada finitos, el PMOS y el NMOS conducen a la vez durante un instante (Carnegie Mellon University, ECE 322, «Power Dissipation in CMOS», apuntes del curso (diapositivas); [course.ece.cmu.edu/~ece322/LECTURES/Lecture13/Lecture13.03.pdf](https://course.ece.cmu.edu/~ece322/LECTURES/Lecture13/Lecture13.03.pdf), consultado 2026-11-06).

## Por qué esto resuelve el problema del consumo

La lógica de estilo NMOS más antigua consume en reposo; CMOS no (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 1: Circuits & Layout», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), consultado 2026-11-06). En CMOS la energía se gasta casi toda en las transiciones, al cargar y descargar la capacidad de entrada de la puerta siguiente: la potencia dinámica es proporcional a la capacidad, al cuadrado de la tensión de alimentación, a la frecuencia y a la actividad de conmutación (Carnegie Mellon University, ECE 322, «Power Dissipation in CMOS», apuntes del curso (diapositivas); [course.ece.cmu.edu/~ece322/LECTURES/Lecture13/Lecture13.03.pdf](https://course.ece.cmu.edu/~ece322/LECTURES/Lecture13/Lecture13.03.pdf), consultado 2026-11-06). Por eso escala con la *actividad* y la *frecuencia*, no con cuántas puertas inactivas haya en el chip (argumento del capítulo). El mismo curso añade la corriente de fuga, cuya importancia crece a medida que los dispositivos se hacen más pequeños (ibíd.). Ya en 1963, Sah y Wanlass mostraron que la configuración complementaria consumía casi cero potencia en espera (CHM, «1963: Complementary MOS Circuit Configuration is Invented», *The Silicon Engine*; [computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), consultado 2026-11-06). El MOSFET hizo posible la corriente estática casi nula en el dispositivo; CMOS es el truco de circuito que la lleva a todas las puertas que vienen después (argumento del capítulo).

## NAND, NOR y completitud funcional

Una NAND CMOS de dos entradas pone los nMOS en serie —la salida es 0 cuando ambas entradas son 1— y, por lo tanto, necesita los pMOS en paralelo; la red de subida es el complemento de la de bajada, y lo que está en serie en una está en paralelo en la otra (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 1: Circuits & Layout», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), consultado 2026-11-06). La NOR es el reflejo. La NAND y la NOR son puertas universales: combinándolas se obtiene un inversor, una OR o una AND, y por lo tanto cualquier función booleana (HyperPhysics (Georgia State University), «NAND Gate»; [hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nand.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nand.html), consultado 2026-11-06). Por eso las bibliotecas de celdas estándar se apoyan tanto en celdas NAND bien caracterizadas: al componerlas salen sumadores, bancos de registros y procesadores enteros (argumento del capítulo).

**Pruébalo ahora.** El laboratorio de abajo se abre con una puerta AND: cambia las dos entradas y observa la salida. La NAND y la NOR son las primitivas CMOS de arriba; la AND es lo que se obtiene al componerlas. Juega con la puerta antes de que el siguiente capítulo construya sumadores con ellas.

{{< lab type="breadboard" height="700" >}}

## Hacia dónde sigue

Todas las estructuras de CPU de la fase 3 —sumador completo, ALU, banco de registros— son composición de estas puertas (encuadre del capítulo). Siguiente: la primera estructura real, la lógica combinacional, empezando por el sumador: [De las puertas a la lógica combinacional]({{< relref "15-from-gates-to-combinational-logic.md" >}}).

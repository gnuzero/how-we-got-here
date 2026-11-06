---
title: "Lógica secuencial"
weight: 16
date: 2026-01-01
draft: false
phase: "2 — Física y dispositivos"
series_index: 15
aliases:
  - /posts/09-sequential-logic/
  - /posts/14-sequential-logic/
  - /posts/15-sequential-logic/
tags: []
summary: "La realimentación crea memoria biestable; los biestables por flanco hacen manejable el diseño síncrono, hasta que el tiempo de preparación limita el reloj"
image_prompt: "Timing diagram showing clock, data, output for a D flip-flop, clean waveform diagram style"
video_prompt: "20-second animation: clock edge triggering a D flip-flop, setup/hold violation shown, clean waveform animation"
labs: ["breadboard"]
schematics: "Diagram: SR latch + D flip-flop schematic + timing diagram with setup/hold windows"
---

La [lógica combinacional]({{< relref "15-from-gates-to-combinational-logic.md" >}}) es una función pura de las entradas actuales: no recuerda el pasado. Un ordenador necesita *estado* —registros, un contador de programa, contenidos de memoria que persistan de un ciclo a otro—, y eso exige realimentación (planteamiento del capítulo).

## Memoria a partir de la realimentación

Si se acoplan dos puertas de modo que la salida de cada una alimente la entrada de la otra, se obtiene un circuito biestable, la pieza fundamental de los demás elementos de estado (David Harris (Harvey Mudd College), E85 *Digital Design & Computer Engineering*, «Lecture 3: Timing & Sequential Circuits», apuntes del curso (diapositivas), otoño de 2019; [pages.hmc.edu/harris/class/e85/old/fall19/lect3.pdf](https://pages.hmc.edu/harris/class/e85/old/fall19/lect3.pdf), consultado 2026-11-06). Un *latch* de este tipo «retiene» el valor creado por la señal de entrada y lo mantiene hasta que otra señal lo cambia (HyperPhysics (Georgia State University), «NAND-gate Latch»; [hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nandlatch.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nandlatch.html), consultado 2026-11-06). Es memoria en sentido físico: biestabilidad, no un «almacén» abstracto (explicación del capítulo). Los biestables son los dispositivos de memoria básicos de la lógica secuencial, y en bancos forman los «registros» (HyperPhysics (Georgia State University), «Flip-Flops»; [hyperphysics.phy-astr.gsu.edu/hbase/Electronic/flipflop.html](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/flipflop.html), consultado 2026-11-06).

El *latch* SR sin control de reloj responde siempre a sus entradas y tiene un estado no válido que hay que evitar, cuando S = R = 1 (David Harris (Harvey Mudd College), E85 *Digital Design & Computer Engineering*, «Lecture 3: Timing & Sequential Circuits», apuntes del curso (diapositivas), otoño de 2019; [pages.hmc.edu/harris/class/e85/old/fall19/lect3.pdf](https://pages.hmc.edu/harris/class/e85/old/fall19/lect3.pdf), consultado 2026-11-06). El *latch* D lo evita: mientras el reloj está en 1, D pasa a Q (es *transparente*); cuando el reloj está en 0, Q conserva su valor anterior (es *opaco*) (ibíd.). La transparencia resulta incómoda cuando muchos elementos deben actualizarse a la vez (argumento del capítulo).

**Pruébalo ahora.** El laboratorio de abajo sigue siendo una puerta en vivo: cambia las entradas y mira cómo la salida cambia *al instante*. Esa respuesta inmediata es combinacional. Este capítulo trata de lo que ocurre cuando se conectan las puertas sobre sí mismas para que la salida pueda *mantenerse* después de que la entrada desaparezca.

{{< lab type="breadboard" height="700" >}}

## El biestable D: flancos, no niveles

Un biestable D (*flip-flop* D) está formado por dos *latches* consecutivos, L1 y L2, gobernados por el reloj de forma que cuando uno es transparente el otro es opaco; así, Q cambia solo en el flanco de subida del reloj y el resto del tiempo conserva su valor (por eso también se le llama biestable maestro-esclavo) (David Harris (Harvey Mudd College), E85 *Digital Design & Computer Engineering*, «Lecture 3: Timing & Sequential Circuits», apuntes del curso (diapositivas), otoño de 2019; [pages.hmc.edu/harris/class/e85/old/fall19/lect3.pdf](https://pages.hmc.edu/harris/class/e85/old/fall19/lect3.pdf), consultado 2026-11-06; David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 11: Sequential Circuit Design», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf), consultado 2026-11-06). El disparo por flanco es lo que hace manejable el diseño síncrono: en un circuito secuencial síncrono el estado cambia en el flanco de reloj y todo el sistema queda sincronizado con él, de modo que se razona paso a paso en lugar de perseguir señales continuas que compiten entre sí (Harris, E85, «Lecture 4: Finite State Machines», apuntes del curso, [pages.hmc.edu/harris/class/e85/old/fall19/lect4.pdf](https://pages.hmc.edu/harris/class/e85/old/fall19/lect4.pdf), consultado 2026-11-06; la conclusión sobre la manejabilidad es argumento del capítulo).

## Preparación, mantenimiento y el techo del reloj

La entrada D debe estar estable durante un tiempo mínimo *antes* del flanco (tiempo de preparación o *setup*) y *después* de él (tiempo de mantenimiento o *hold*) (David Harris (Harvey Mudd College), E85, «Lecture 5», apuntes del curso (diapositivas), otoño de 2019; [pages.hmc.edu/harris/class/e85/old/fall19/lect5.pdf](https://pages.hmc.edu/harris/class/e85/old/fall19/lect5.pdf), consultado 2026-11-06). Si no, puede aparecer la metaestabilidad: un biestable tiene dos estados estables y un estado metaestable entre ellos, y si cae en él puede quedarse allí durante un tiempo indeterminado (ibíd.). No es pedantería de manual. El periodo de reloj debe cubrir el retardo del biestable de origen, la propagación de la lógica combinacional *y* el tiempo de preparación del biestable siguiente: Tc ≥ tpcq + tpd + tsetup (ibíd.). Las dos restricciones no actúan igual: si se viola la de preparación, se reduce la velocidad del reloj; si se viola la de mantenimiento, el chip falla a cualquier velocidad (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 11: Sequential Circuit Design», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect11.pdf), consultado 2026-11-06). Es la de preparación, por tanto, la que fija el techo de la frecuencia (lectura nuestra de esa fuente). El libro vuelve sobre esta restricción en [The Clock Speed Wall]({{< relref path="43-the-clock-speed-wall.md" lang="en" >}}) (en inglés por ahora), cuando subir la frecuencia dejó de funcionar.

## Lo que esto desbloquea

Los biestables por flanco se convierten en registros, contadores y máquinas de estados y, en la fase 3, en el contador de programa y los registros de segmentación que hacen de la CPU una máquina *secuencial* (encuadre del capítulo). Siguiente: especializar el almacenamiento biestable para ganar densidad, donde la SRAM y la DRAM se separan: [Empieza la jerarquía de memoria]({{< relref "17-the-memory-hierarchy-begins.md" >}}).

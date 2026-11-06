---
title: "Empieza la jerarquía de memoria"
weight: 17
date: 2026-01-01
draft: false
phase: "2 — Física y dispositivos"
series_index: 16
aliases:
  - /posts/10-the-memory-hierarchy-begins/
  - /posts/15-the-memory-hierarchy-begins/
  - /posts/16-the-memory-hierarchy-begins/
tags: []
summary: "Los biestables salen demasiado caros por bit: la SRAM compra velocidad, la DRAM compra densidad, y la jerarquía es ese compromiso repetido"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

Un biestable D, como el de [Lógica secuencial]({{< relref "16-sequential-logic.md" >}}), es un buen elemento de memoria, pero caro por bit (argumento del capítulo). Unos cuantos registros, bien; gigabytes de memoria principal construidos así, no. Dos diseños de celda se reparten el compromiso: SRAM para la velocidad cerca de la CPU y DRAM para la densidad más lejos (planteamiento del capítulo).

## SRAM: rápida, estable y costosa en área

La celda SRAM guarda un bit «como un *latch*», y la celda de seis transistores (6T), la que usan la mayoría de los chips comerciales, almacena el dato en dos inversores acoplados en cruz; para leer y escribir se activa la línea de palabra (*wordline*) (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 19: SRAM», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect19.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect19.pdf), consultado 2026-11-06). Con alimentación, mantiene el valor sin refresco (explicación del capítulo). En un arreglo de memoria, el tamaño de la celda es la mayor parte del tamaño total (ibíd.). Seis transistores por bit cuestan área, y por eso la SRAM aparece como *caché* (fase 3): lo bastante pequeña para que el coste sea aceptable, lo bastante rápida para que importen la ausencia de refresco y las lecturas no destructivas (argumento del capítulo).

## DRAM: densa, barata y de mucho mantenimiento

A mediados de los años sesenta, el equipo de IBM en el que trabajaba Robert Dennard usaba celdas MOS de seis transistores por bit; Dennard ideó en 1966 guardar el bit como carga en un condensador, con un solo transistor, y refrescarlo repetidamente (IBM, «Dynamic random-access memory (DRAM)», IBM History; [ibm.com/history/dram](https://www.ibm.com/history/dram), consultado 2026-11-06). Su patente describe cada celda formada por un único transistor de efecto de campo y un único condensador (1T1C), y explica que, como la carga del condensador se fuga, es necesario regenerar periódicamente la información (Robert H. Dennard (IBM), «Field-effect transistor memory», patente de EE. UU. 3.387.286, solicitada el 14 de julio de 1967 y concedida el 4 de junio de 1968; texto en [patents.google.com/patent/US3387286A](https://patents.google.com/patent/US3387286A/en), consultado 2026-11-06). Un transistor en lugar de seis es la ventaja de densidad, y la razón de que la memoria principal sea DRAM (argumento del capítulo). Hoy, el controlador de memoria debe refrescar cada fila periódicamente; el intervalo típico es de 64 ms, y algunos dispositivos actuales ya trabajan con 32 ms (Mohammad Sadrosadati y Onur Mutlu (ETH Zúrich), *Computer Architecture*, «Lecture 7: Data Retention in Memory», apuntes del curso (diapositivas), otoño de 2025; [safari.ethz.ch/architecture/fall2025](https://safari.ethz.ch/architecture/fall2025/lib/exe/fetch.php?media=onur-comparch-fall2025-lecture7-memory-dataretention-and-refresh-afterlecture.pdf), consultado 2026-11-06). El refresco cuesta energía y rendimiento, porque el banco no está disponible mientras se refresca (ibíd.); es el precio de la densidad (argumento del capítulo). Además, la lectura es destructiva: la patente de Dennard ya señalaba que en la celda con condensador cada lectura destruye la información, que hay que volver a escribir (Robert H. Dennard (IBM), «Field-effect transistor memory», patente de EE. UU. 3.387.286, solicitada el 14 de julio de 1967 y concedida el 4 de junio de 1968; texto en [patents.google.com/patent/US3387286A](https://patents.google.com/patent/US3387286A/en), consultado 2026-11-06). La SRAM no tiene ninguno de los dos problemas (explicación del capítulo).

**Puerta de salida:** la celda DRAM de un transistor de Robert H. Dennard, patente de EE. UU. 3.387.286, concedida en 1968 (Robert H. Dennard (IBM), «Field-effect transistor memory», patente de EE. UU. 3.387.286, solicitada el 14 de julio de 1967 y concedida el 4 de junio de 1968; texto en [patents.google.com/patent/US3387286A](https://patents.google.com/patent/US3387286A/en), consultado 2026-11-06): la idea 1T1C que hizo práctica la memoria principal densa (valoración del capítulo).

## La jerarquía que esto prepara

Registros (biestables) arriba: los más rápidos, los más pequeños, los más caros por bit. Debajo, la caché SRAM. Más abajo, la memoria principal DRAM. Y debajo, el disco o el SSD. La pirámide no es decoración: es el compromiso entre número de transistores y velocidad repetido en cada nivel (argumento del capítulo). Las cachés de la fase 3 se apoyan en esto, y el «muro de la memoria» de la fase 5 es lo que pasa cuando la brecha entre CPU y DRAM, fijada justo por este compromiso, crece más rápido de lo que las cachés pueden ocultar (encuadre del capítulo).

{{< lab type="breadboard" >}}

Siguiente: [Instruction sets]({{< relref path="18-instruction-sets.md" lang="en" >}}) (en inglés por ahora).

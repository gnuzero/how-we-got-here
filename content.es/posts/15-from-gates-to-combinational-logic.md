---
title: "De las puertas a la lógica combinacional"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — Física y dispositivos"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "Componer puertas en sumadores y una ALU, y toparse con el retardo del acarreo en cascada que obliga a mejores estructuras"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

Una puerta sola casi no sirve de nada. El comportamiento útil empieza cuando se componen, y la primera estructura canónica es el sumador: el punto en que las puertas se convierten en «lo que hace aritmética dentro de una CPU» (planteamiento del capítulo).

## Del semisumador al sumador completo

Con dos bits A y B, la suma es A XOR B y el acarreo es A AND B: eso es un semisumador (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 17: Adders», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf), consultado 2026-11-06). No puede aceptar un acarreo de *entrada* del bit menos significativo (explicación del capítulo). Un sumador completo toma A, B y C y produce la suma y el acarreo de salida: S = A ⊕ B ⊕ C, y Cout es la función mayoría de las tres entradas (ibíd.). Si se encadena el Cout de una etapa con la entrada de acarreo de la siguiente —la forma más sencilla de sumador, una cascada de sumadores completos (ibíd.)—, se puede sumar a cualquier anchura, una posición de bit cada vez.

**Pruébalo ahora.** El laboratorio de abajo sigue abriéndose con una puerta AND: es el acarreo del semisumador. Pon las dos entradas en alto y mira cómo sube la salida; esa sola puerta es la restricción que se propagará cuando encadenes sumadores en la sección siguiente.

{{< lab type="breadboard" height="700" >}}

## Acarreo en cascada: sencillo, y lento por una razón

Cuatro sumadores completos en fila forman un sumador de 4 bits con acarreo en cascada (*ripple-carry*). En él, el camino crítico va de la entrada de acarreo a la salida de acarreo (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 17: Adders», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf), consultado 2026-11-06): el acarreo del bit 3 no puede ser correcto hasta que se haya asentado el del bit 2, que espera al del bit 1, que espera al del bit 0. El acarreo *se propaga en cascada*. Con pocos bits no importa; con muchos más, esa cadena puede marcar a qué velocidad va toda la ALU (ejemplo ilustrativo). Por eso existen el sumador con anticipación de acarreo (*carry-lookahead*), que calcula en paralelo la generación de acarreo para muchos bits, y los sumadores en árbol, cuya anticipación recursiva da un retardo del orden de log N (David Harris (Harvey Mudd College), *CMOS VLSI Design*, 4.ª ed., «Lecture 17: Adders», apuntes del curso (diapositivas); [pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf), consultado 2026-11-06): más puertas, camino más corto en el peor caso. Es el mismo patrón del resto del libro: un cuello de botella físico obliga a la siguiente arquitectura (argumento del capítulo).

## De los sumadores a una ALU sencilla

Una ALU de un bit con suma, resta, AND y OR usa un código de operación para elegir el resultado; para restar se aprovecha el mismo sumador: A − B = A + (B′ + 1), donde B′ sale de un inversor y el +1 entra por el acarreo de entrada (Allan Gottlieb (New York University), «Computer Systems Design», lección 9, apuntes del curso, otoño de 2001; [cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/lectures/lecture-09.html](https://cs.nyu.edu/~gottlieb/courses/2000s/2001-02-fall/arch/lectures/lecture-09.html), consultado 2026-11-06). Una ALU de 32 bits es simplemente una fila de esas celdas (ibíd.). Un bloque, varios caminos combinacionales: conceptualmente pequeño, pero en la práctica es el primer momento en que las «puertas» se convierten en aritmética de CPU (argumento del capítulo).

Todo lo visto hasta aquí es combinacional: las salidas dependen solo de las entradas actuales. Una secuencia de operaciones necesita un estado que persista en el tiempo. Ese es el tema del siguiente capítulo: [Lógica secuencial]({{< relref "16-sequential-logic.md" >}}).

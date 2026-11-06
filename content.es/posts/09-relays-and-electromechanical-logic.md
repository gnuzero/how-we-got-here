---
title: "Relés y lógica electromecánica"
weight: 9
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: del cálculo mecánico a los tubos de vacío"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "Los relés demostraron que la lógica binaria funciona, y que el metal en movimiento no puede seguir el ritmo"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

Un relé es casi vergonzosamente simple: un electroimán, una armadura con resorte y unos contactos. Pasa corriente por la bobina, la armadura se mueve y los contactos se abren o se cierran. Durante unos quince años, esa fue la pieza básica de conmutación de la computación (descripción y encuadre del capítulo).

## Dos trabajos para la misma pieza

En este capítulo, un **relé** es un interruptor: una bobina débil abre o cierra un circuito más fuerte, y luego se convierte en ladrillo para construir Y, O y NO. Para su otro trabajo, en una línea telegráfica, véase [Cómo viajaba el mensaje]({{< relref "03-how-the-message-travelled.md" >}}).

Ahora, cableemos el interruptor para hacer lógica.

## Torres Quevedo: elegir con electroimanes

En español, quien lo escribió antes que casi nadie fue Leonardo Torres Quevedo. Su paso de los engranajes a la electricidad, el telekino y el Ajedrecista se cuentan en [Por qué importa el cálculo mecánico]({{< relref "07-why-mechanical-matters.md" >}}); aquí interesa el método.

En sus «Ensayos sobre automática» de 1914 distingue dos clases de autómatas: los que imitan «la apariencia y los movimientos» de un hombre o un animal y repiten siempre los mismos actos, y los que imitan «no los gestos, sino las acciones del hombre» (Leonardo Torres y Quevedo, «Ensayos sobre automática. Su definición. Extensión teórica de sus aplicaciones», *Revista de la Real Academia de Ciencias Exactas, Físicas y Naturales*, XII, enero de 1914; PDF de la Real Academia de Ciencias, [rac.es/fedora/get/Revistas:REV_20100220_03288/PDF](https://rac.es/fedora/get/Revistas:REV_20100220_03288/PDF), consultado 2026-11-06, p. 391). El objetivo principal de la automática, escribe, es que los autómatas «tengan discernimiento», que en cada momento puedan ordenar la operación deseada teniendo en cuenta las impresiones que reciben «y también, á veces, las que han recibido anteriormente» (ibíd., p. 393). Esa última frase describe, en lenguaje de este libro, una máquina con **estado**: la respuesta depende de la entrada y de lo que ya pasó (interpretación nuestra).

El principio de su método electromecánico, dice, «es sumamente sencillo» (ibíd., p. 395). Cada circunstancia que el autómata debe vigilar mueve un conmutador: una escobilla que barre una línea de contactos y toca uno tras otro (ibíd.). Con *n* conmutadores de *P₁, P₂, … Pₙ* contactos, el sistema tiene *P₁ × P₂ × … × Pₙ* posiciones; para cada una basta que la armadura de un electroimán, al ser atraída, dispare la operación correspondiente, de modo que hay un electroimán por posición (ibíd., pp. 395-396). Leído hoy, es una tabla de verdad hecha con cobre: las entradas eligen una fila y la fila dispara una salida; y el precio también se ve, porque el número de electroimanes crece como el producto de las posiciones (lectura nuestra).

Para que una calculadora así no necesite ruedas sin fin, propone escribir cada cantidad con un número fijo de cifras significativas y un exponente, en la forma *n; m*: en vez de 2.435,27, «243527; 4», y en vez de 0,00000341862, «341862; −5»; con exponentes menores que cien, toda cantidad cabe en ocho cifras (ibíd., p. 415). Es, en sustancia, lo que hoy llamamos coma flotante: mantisa de ancho fijo más exponente (la equivalencia es nuestra).

En 1920 construyó su aritmómetro: una máquina de calcular conectada a una máquina de escribir en la que se tecleaban los números y las operaciones en el orden en que debían ejecutarse; al terminar, la máquina de escribir imprimía el resultado (Museo Torres Quevedo, Universidad Politécnica de Madrid, «Aritmómetro»; [blogs.upm.es/museotorresquevedocaminos/aritmometro/](https://blogs.upm.es/museotorresquevedocaminos/aritmometro/), consultado 2026-11-06). El Museo Torres Quevedo de la UPM, que lo conserva, lo llama «la primera calculadora digital del mundo» y señala que tenía los subsistemas habituales de un computador: unidad aritmético-lógica, control, memoria, entrada y salida (ibíd.).

## Relés como lógica

Pon dos contactos en serie y tienes Y: solo pasa corriente si *ambos* están cerrados. Ponlos en paralelo y tienes O. Añade un contacto normalmente cerrado y tienes NO. Combinándolos se puede construir cualquier función booleana —sumadores, comparadores, decodificadores—, las mismas familias lógicas que la fase 2 construye en silicio, aquí en hardware electromecánico (explicación del capítulo).

La telefonía ya había industrializado el relé, y eso ayudó a que las computadoras de relés fueran construibles (argumento del capítulo). En 1937 George Stibitz, de los Bell Laboratories, montó con relés un sumador de demostración que condujo a la Model I Complex Calculator, de relés, en 1939; ese mismo año, en Alemania, Konrad Zuse construyó su Z2, también con relés de compañía telefónica (Computer History Museum, «Timeline of Computer History: Computers», entradas de 1937 y 1941; [computerhistory.org/timeline/computers](https://www.computerhistory.org/timeline/computers/), consultado 2026-11-06). La Z3 de Zuse, terminada en 1941, usaba 2.300 relés, hacía aritmética binaria en coma flotante y tenía palabras de 22 bits; se destruyó en un bombardeo sobre Berlín a finales de 1943 (ibíd.).

Raúl Rojas subraya que la Z3 solo podía ejecutar secuencias fijas de operaciones aritméticas codificadas en una cinta perforada, sin salto condicional (Raúl Rojas, «How to Make Zuse’s Z3 a Universal Computer», *IEEE Annals of the History of Computing*, 20 (3), 1998, pp. 51-54; resumen y preprint en la Freie Universität Berlin, [inf.fu-berlin.de/lehre/SS01/hc/zuse/node14.html](https://www.inf.fu-berlin.de/lehre/SS01/hc/zuse/node14.html) y [preprint PDF](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf), consultados 2026-11-06). En 1998 mostró que, aun así, un único bucle de programa con esas instrucciones puede simular cualquier máquina de Turing con cinta de tamaño finito, simulando los saltos condicionales y el direccionamiento indirecto por medios puramente aritméticos: la Z3 es, al menos en principio, tan universal como un computador actual con memoria limitada, a costa de un programa enormemente más largo (ibíd.).

**Puerta de salida:** Raúl Rojas, «How to Make Zuse’s Z3 a Universal Computer» (1998), el argumento cuidadoso sobre la universalidad de la Z3 y sus límites.

## Por qué los relés eran demasiado lentos

El tiempo de conmutación de un relé lo domina el movimiento *mecánico*: la armadura tiene que desplazarse. Al lado de un procesador moderno, la diferencia no es de grado sino de naturaleza: no se puede construir un computador moderno útil con interruptores mecánicos, por bien diseñados que estén (argumento del capítulo).

Segundo problema: los contactos se desgastan. Cada cierre es metal contra metal, con arcos, picaduras y, al final, fallos; miles de relés son miles de puntos de desgaste. Fiabilidad y velocidad chocaban con la misma limitación: las piezas móviles (argumento del capítulo). Torres Quevedo ya lo había admitido en 1914: con medios electromecánicos «un contacto puede fallar» (Leonardo Torres y Quevedo, «Ensayos sobre automática. Su definición. Extensión teórica de sus aplicaciones», *Revista de la Real Academia de Ciencias Exactas, Físicas y Naturales*, XII, enero de 1914; PDF de la Real Academia de Ciencias, [rac.es/fedora/get/Revistas:REV_20100220_03288/PDF](https://rac.es/fedora/get/Revistas:REV_20100220_03288/PDF), consultado 2026-11-06, p. 416).

## El puente hacia la electrónica

Los relés demostraron la arquitectura: representación binaria, puertas booleanas hechas con interruptores sencillos, programas como datos. Lo que no podían demostrar es que esa arquitectura corriera *deprisa*. Para eso había que sustituir el interruptor mecánico por algo que cambiara de estado moviendo electrones en vez de metal: el tubo de vacío, a costa de un enorme consumo y calor (encuadre del capítulo). Ese compromiso es [lo siguiente]({{< relref "10-the-vacuum-tube-era.md" >}}).

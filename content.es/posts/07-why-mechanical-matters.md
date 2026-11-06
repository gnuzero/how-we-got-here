---
title: "Por qué importa el cálculo mecánico"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: del cálculo mecánico a los tubos de vacío"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "La forma lógica llegó en bronce; el rozamiento empujó hacia la electricidad, y Torres Quevedo lo dijo por escrito en 1914"
image_prompt: "Minimal diagram: store + mill + instruction sequence as three boxes, then an arrow to electrical switching, clean technical infographic, white background"
video_prompt: "15-second motion graphic: gears morphing into relay contacts, same instruction-store-execute shape preserved, clean light background"
schematics: "Diagram: instruction sequence + execution unit + store — logical shape that survives medium change"
---

Interpretación nuestra, la misma tesis de la edición en inglés: los conjuntos de instrucciones, los programas almacenados y la separación entre control y datos tienen raíces en las [máquinas de Babbage]({{< relref "05-babbage-engines.md" >}}) y en las [tarjetas de Jacquard]({{< relref "06-jacquard-loom.md" >}}). El medio cambiará por completo (relés, tubos, transistores). La forma lógica no: una secuencia de instrucciones, una unidad que las ejecuta y un almacén que guarda el estado entre un paso y el siguiente.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="Máquina diferencial n.º 2 de Babbage, segundo ejemplar, en el Computer History Museum" loading="lazy" width="1280">
<figcaption>Máquina diferencial n.º 2, segundo ejemplar, expuesto en el Computer History Museum de mayo de 2008 a enero de 2016. Foto: <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

## El techo: tolerancias que se acumulan

Lo que el cálculo mecánico *no* podía hacer en vida de Babbage era escalar. Los trenes de engranajes tienen rozamiento, holgura y tolerancias de fabricación que se acumulan de pieza en pieza. Cada dígito más de precisión hacía la máquina más difícil de construir con fiabilidad. Ese techo, y no la falta de ideas, es lo que empujó el cálculo hacia la conmutación eléctrica (este es el argumento del capítulo).

La máquina diferencial n.º 2 se construyó en el Science Museum de Londres a partir de los planos de Babbage de 1847-1849: la sección de cálculo se terminó en 1991 y el aparato de impresión en 2002; un segundo ejemplar se expuso en el Computer History Museum desde mayo de 2008 (Computer History Museum, «A Modern Sequel», Babbage Engine; [computerhistory.org/babbage/modernsequel/](https://www.computerhistory.org/babbage/modernsequel/), consultado 2026-11-06). Tiene 8.000 piezas y pesa unas cinco toneladas (ibíd.).

La reconstrucción de la foto es la excepción que confirma la regla: en cuanto los talleres pudieron mantener esas tolerancias, el diseño en bronce funcionó. La forma lógica ya estaba ahí. Primero tenía que cambiar el medio (argumento del capítulo).

## Un ingeniero español lo escribió en 1914

Leonardo Torres Quevedo llegó a la misma conclusión desde dentro del oficio. En sus «Ensayos sobre automática. Su definición. Extensión teórica de sus aplicaciones», publicados en enero de 1914 en la *Revista de la Real Academia de Ciencias Exactas, Físicas y Naturales*, tomo XII (Leonardo Torres y Quevedo, *Rev. Acad. de Ciencias*, XII, enero de 1914, pp. 391 y ss.; PDF de la Real Academia de Ciencias, [rac.es/fedora/get/Revistas:REV_20100220_03288/PDF](https://rac.es/fedora/get/Revistas:REV_20100220_03288/PDF), consultado 2026-11-06), cuenta que empezó «como todo el mundo» por las soluciones mecánicas y que las dificultades le parecieron «absolutamente invencibles» (ibíd., p. 416). Enumera las razones: el gran número de mecanismos, las múltiples conexiones entre ellos, la necesidad de cambiarlas a cada momento, combinarlo todo sin que los mecanismos se estorben y sin que «los rozamientos» impidan la marcha de la máquina (ibíd.).

Sobre Babbage escribe que gastó cerca de un millón de francos, 500.000 de su fortuna y 425.000 del Gobierno inglés, que trabajó treinta años en la obra y que, a pesar de todo, fracasó (ibíd., pp. 416-417). En una nota observa que Babbage preveía cincuenta ruedas para representar cada variable (ibíd., nota de p. 415).

Su salida fue la electricidad, y la vio venir del telekino, su sistema de mando a distancia: construyendo sus modelos apreció «la gran facilidad» que dan los aparatos electromecánicos y pensó que se podrían aplicar a las máquinas de calcular (ibíd., p. 418). No ocultó el coste: con medios electromecánicos «un contacto puede fallar» (ibíd., p. 416). Pero defendió que las grandes redes telegráficas y telefónicas funcionan con mucha regularidad (ibíd., p. 418).

### El telekino

El IEEE reconoce el telekino con un *Milestone*: Torres Quevedo empezó a desarrollarlo en 1901 para probar sus dirigibles sin arriesgar vidas y pidió patentes en 1902 y 1903 (IEEE, *Milestone* «Early Developments in Remote-Control, 1901», dedicado el 15 de marzo de 2007, Engineering and Technology History Wiki; [ethw.org/Milestones:Early_Developments_in_Remote-Control,_1901](https://ethw.org/Milestones:Early_Developments_in_Remote-Control,_1901), consultado 2026-11-06). Lo probó con un triciclo y, en 1905 y 1906, con barcas en el estanque de la Casa de Campo de Madrid y en la ría de Bilbao (ibíd.).

### El Ajedrecista

Para demostrar que las máquinas podían asumir trabajos reservados hasta entonces a la inteligencia humana, Torres Quevedo construyó autómatas ajedrecistas (Museo Torres Quevedo, Universidad Politécnica de Madrid, «Autómata ajedrecista»; [blogs.upm.es/museotorresquevedocaminos/automata-ajedrecista/](https://blogs.upm.es/museotorresquevedocaminos/automata-ajedrecista/), consultado 2026-11-06). El primero data de 1912 y se presentó en París en 1914; el segundo, de 1920, movía las piezas con electroimanes bajo el tablero (ibíd.). Ambos juegan solo el final de rey y torre contra rey (ibíd.).

## Lo que se lleva de aquí

Interpretación nuestra: la forma lógica (instrucciones, ejecución, almacén) nació en bronce; lo que obligó a cambiar de medio fue el coste físico de escalarla. Torres Quevedo lo dijo con sus propias palabras en 1914 y apostó por el electroimán y el contacto, aceptando que un contacto puede fallar.

Siguiente: [Atrapar la luz]({{< relref "08-capturing-light.md" >}}), y después los relés y la lógica electromecánica.

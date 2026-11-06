---
title: "Por qué tenía que llegar el transistor"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: del cálculo mecánico a los tubos de vacío"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "Tamaño, consumo y fiabilidad: tres techos del tubo que hicieron inevitable la conmutación de estado sólido"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

A comienzos de los años cincuenta, el tubo de vacío ya había demostrado la idea: conmutación electrónica, sin piezas móviles, mucho más rápida que la de los relés (véase [el capítulo anterior]({{< relref "10-the-vacuum-tube-era.md" >}})). Lo que no había resuelto era la *escala*. Cada tubo de más añadía calor, consumo y otra ocasión de avería. El transistor no sustituyó al tubo por ser un aparato ingenioso, sino porque la propia física del tubo tenía un techo duro y la computación necesitaba pasarlo (argumento del capítulo).

## Tres límites, un solo cuello de botella

**Tamaño.** Un tubo necesita una ampolla de vidrio al vacío lo bastante grande para separar cátodo, rejilla y ánodo, y lo bastante resistente para mantener el vacío; eso pone un mínimo a lo pequeño que puede ser. Un transistor es de estado sólido —sin vacío ni ampolla— y su tamaño lo fija la precisión de fabricación, no la física de una cámara vacía. Es otra curva de escalado, y es la que acabará poniendo cantidades enormes de transistores en un solo chip, como se verá en la fase 8 (argumento del capítulo).

**Consumo.** El cátodo de un tubo tiene que calentarse para emitir electrones, y ese calefactor consume corriente conmute o no el tubo. Multiplicado por miles de tubos, da cifras como los 150 kilovatios de la ENIAC (Penn Engineering, «Celebrating Penn Engineering History: ENIAC»; [engineering.upenn.edu/about/history-heritage/eniac](https://www.engineering.upenn.edu/about/history-heritage/eniac/), consultado 2026-11-06). Un transistor no tiene filamento calefactor; conmuta modulando una región de agotamiento o un canal, con un consumo en reposo muy pequeño. Esa es la principal razón por la que las máquinas transistorizadas podían ser mucho más densas sin fundirse (argumento del capítulo). El Computer History Museum resume que en 1953 un prototipo de computador transistorizado demostró las ventajas de tamaño y bajo consumo de los semiconductores frente a los tubos, y que ya en 1952 aparecieron en audífonos y radios de bolsillo, donde los consumidores pagaban por la portabilidad y el bajo consumo (CHM, «Timeline», *The Silicon Engine*; [computerhistory.org/siliconengine/timeline](https://www.computerhistory.org/siliconengine/timeline/), consultado 2026-11-06).

**Fiabilidad.** Los tubos fallan porque el filamento se quema y el cierre se degrada: un desgaste inscrito en el ciclo térmico normal. El transistor de estado sólido no tiene filamento ni cierre de vacío que mantener, así que no comparte ese modo de fallo de la misma manera. Los primeros transistores tenían sus propios problemas (encapsulado, contaminación), pero el *mecanismo* de fallo no formaba parte del funcionamiento diario como el filamento en los tubos (argumento del capítulo). De hecho, el grupo de física del estado sólido que Bell Labs organizó en 1945 buscaba, entre otras cosas, sustitutos semiconductores para los tubos de vacío y los conmutadores electromecánicos poco fiables de la red telefónica Bell (CHM, «1947: Invention of the Point-Contact Transistor», *The Silicon Engine*; [computerhistory.org/siliconengine/invention-of-the-point-contact-transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/), consultado 2026-11-06).

## Las cifras, lado a lado

Un tubo disipa potencia de forma continua, sobre todo en el calefactor, y tiene una vida limitada; un transistor disipa una pequeña fracción, no pierde nada en calefactor y, sobre todo, su tamaño y su consumo *bajan* a medida que mejora la fabricación, mientras que los del tubo no. Esa asimetría se acumula: diez tubos se manejan; los dieciocho mil de la ENIAC (Penn Engineering, «Celebrating Penn Engineering History: ENIAC»; [engineering.upenn.edu/about/history-heritage/eniac](https://www.engineering.upenn.edu/about/history-heritage/eniac/), consultado 2026-11-06) fueron la pesadilla de mantenimiento del capítulo anterior; dieciocho mil transistores son una cifra insignificante en un chip moderno (argumento del capítulo).

## Lo que viene

El 16 de diciembre de 1947, en Bell Labs, John Bardeen y Walter Brattain lograron el primer amplificador semiconductor: dos contactos de oro muy próximos sobre una pequeña placa de germanio de alta pureza; la tensión en un contacto modulaba la corriente que pasaba por el otro y amplificaba la señal hasta 100 veces (CHM, «1947: Invention of the Point-Contact Transistor», *The Silicon Engine*; [computerhistory.org/siliconengine/invention-of-the-point-contact-transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/), consultado 2026-11-06). Lo mostraron a los responsables del laboratorio el 23 de diciembre, y Bell Labs presentó el «transistor» en una rueda de prensa en Nueva York el 30 de junio de 1948 (ibíd.). En 1948 William Shockley concibió una estructura mejorada, el transistor de unión, basada en la comprensión teórica de la unión p-n (CHM, «Timeline», *The Silicon Engine*; [computerhistory.org/siliconengine/timeline](https://www.computerhistory.org/siliconengine/timeline/), consultado 2026-11-06). Shockley, Bardeen y Brattain recibieron el Premio Nobel de Física de 1956 «por sus investigaciones sobre semiconductores y su descubrimiento del efecto transistor» (NobelPrize.org, «The Nobel Prize in Physics 1956»; [nobelprize.org/prizes/physics/1956/summary](https://www.nobelprize.org/prizes/physics/1956/summary/), consultado 2026-11-06; traducción nuestra).

Nada de eso significa que el dispositivo llegara terminado. Había que entender y dominar la física de *cómo* conmuta —semiconductores, dopado, bandas prohibidas—, y ese es otro tema distinto de por qué tenía que llegar. La fase 2 empieza ahí: qué es un semiconductor, por qué el silicio se impuso y cómo el dopado crea el interruptor controlable que el tubo nunca pudo ser (encuadre del capítulo; continúa en [Semiconductores desde los primeros principios]({{< relref "12-semiconductors-from-first-principles.md" >}})).

**Puerta de salida:** los artículos de Bardeen, Brattain y Shockley en Bell Labs, empezando por John Bardeen y Walter Brattain, «The Transistor, a Semi-Conductor Triode», *Physical Review* 74 (15 de julio de 1948), pp. 230-231, que el Computer History Museum enumera entre los documentos de la época (CHM, «1947: Invention of the Point-Contact Transistor», *The Silicon Engine*; [computerhistory.org/siliconengine/invention-of-the-point-contact-transistor](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/), consultado 2026-11-06).

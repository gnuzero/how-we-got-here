---
title: "Relés e lógica eletromecânica"
weight: 9
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: do cálculo mecânico às válvulas de vácuo"
series_index: 8
aliases:
  - /posts/02-relays-and-electromechanical-logic/
  - /posts/07-relays-and-electromechanical-logic/
  - /posts/08-relays-and-electromechanical-logic/
tags: []
summary: "Os relés provaram que a lógica binária funciona — e que o metal em movimento não acompanha o ritmo"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

Um relé é quase embaraçosamente simples: um eletroíman, uma armadura com mola, um conjunto de contactos. Energize a bobina, a armadura puxa, os contactos abrem ou fecham. Durante um intervalo, essa peça foi o primitivo de comutação da computação (**interpretação nossa** do lugar do capítulo; factos concretos abaixo).

No [capítulo 3]({{< relref "03-how-the-message-travelled" >}}) o relé já apareceu na linha telegráfica — incluindo o arco lusófono do telégrafo óptico e elétrico em Portugal e no Brasil, e o arranjo intensidade→quantidade de Henry. Aqui o mesmo tipo de peça muda de ofício: passa a ser interruptor para lógica.

## Dois ofícios para a mesma peça

Neste capítulo um **relé** é um interruptor: uma bobina fraca abre ou fecha um circuito mais forte e, depois, torna-se bloco de construção para E, OU e NÃO. Para o ofício na linha telegráfica, ver [Como a mensagem viajou]({{< relref "03-how-the-message-travelled" >}}).

Agora ligue o interruptor para lógica.

## Relés como lógica

Ligue dois contactos em série e tem E (AND): corrente só se *ambos* estiverem fechados. Em paralelo, OU (OR). Um contacto normalmente fechado dá NÃO (NOT). Combine isso e pode construir qualquer função booleana — somadores, comparadores, descodificadores — as mesmas famílias de lógica que a Fase 2 constrói em silício, aqui em hardware eletromecânico (**interpretação nossa** da ponte lógica; sem números inventados).

## A Z3 de Konrad Zuse

O Computer History Museum regista que Konrad Zuse terminou o computador Z3: usa **2 300** relés, faz aritmética binária em vírgula flutuante e tem palavra de **22** bits; foi usado em cálculos aerodinâmicos e destruído num bombardeamento a Berlim no fim de **1943**; Zuse supervisionou depois uma reconstrução nos anos **1960**, hoje no Deutsches Museum em Munique (Computer History Museum, timeline «1941» / «Konrad Zuse finishes the Z3 Computer», [computerhistory.org](https://www.computerhistory.org/timeline/1941/), acessado 2026-11-06).

O Deutsches Museum situa em **1941** a criação, por Zuse, do «world's first programmable binary computer, the Z3», e diz que a era do computador universal começou nesse ano com a primeira máquina Z3 «fully functional and programmable» (Deutsches Museum, «Computers», [deutsches-museum.de](https://www.deutsches-museum.de/en/museumsinsel/ausstellung/computers), acessado 2026-11-06).

Raúl Rojas mostra que a Z3, construída entre **1938** e **1941**, só executava sequências fixas de operações aritméticas em vírgula flutuante (adição, subtração, multiplicação, divisão e raiz quadrada) codificadas em fita perfurada — **sem ramificação condicional** no sentido usual — e argumenta que, mesmo assim, um único ciclo de programa com essas instruções pode simular qualquer máquina de Turing com fita de tamanho limitado, tornando a Z3, «at least in principle», tão universal quanto computadores atuais com espaço de endereçamento limitado (Rojas, «How to Make Zuse's Z3 a Universal Computer», manuscrito / IEEE Annals 1998; PDF FU Berlin, [inf.fu-berlin.de](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf), acessado 2026-11-06).

**Porta de saída:** Raúl Rojas, «How to Make Zuse's Z3 a Universal Computer» (1998) — o argumento cuidadoso sobre universalidade e limites da Z3.

## Por que o metal em movimento não basta

**Interpretação nossa:** o tempo de comutação de um relé é dominado pelo movimento mecânico da armadura; contactos desgastam-se (arco, pitting). Muitos relés significam muitos pontos de desgaste. Velocidade e fiabilidade lutam contra a mesma restrição — peças móveis. A Z3 mostrou a arquitetura; o passo seguinte foi substituir o interruptor mecânico por algo que muda de estado movendo eletrões em vez de metal.

## A ponte para a eletrónica

Os relés provaram a arquitetura: representação binária, portas booleanas a partir de interruptores simples, programas como dados. O que não puderam provar é que a arquitetura corresse *depressa*. Resolver isso significou trocar o interruptor mecânico pela válvula de vácuo — à custa de potência e calor enormes. Essa troca é o próximo capítulo.

**Próximo:** [A era da válvula de vácuo]({{< relref "/posts/10-the-vacuum-tube-era.md" >}}).

## Fontes

- Computer History Museum, timeline 1941 (Z3): <https://www.computerhistory.org/timeline/1941/>
- Deutsches Museum, «Computers»: <https://www.deutsches-museum.de/en/museumsinsel/ausstellung/computers>
- Raúl Rojas, «How to Make Zuse's Z3 a Universal Computer» (PDF FU Berlin / Annals 1998): <https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf>
- Capítulo 3 deste livro (telégrafo / relé na linha) e as suas fontes.

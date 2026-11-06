---
title: "O transístor: do BJT ao MOSFET"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — Física e dispositivos"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "BJTs controlados por corrente queimavam potência em repouso; MOSFETs controlados por tensão tornaram a densidade possível"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

O Museu Faraday (IST) conta que o primeiro trabalho que Shockley deu a Bardeen e Brattain foi investigar por que a sua proposta teórica de transístor de **efeito de campo** não funcionava na prática; Bardeen avançou a hipótese de estados superficiais que impediam o campo de penetrar no semicondutor — e que uma proposta semelhante ao que seria o FET tinha sido feita em **1925** por Julius Edgar Lilienfeld, sem que ninguém tivesse ainda realizado um dispositivo que funcionasse (Museu Faraday / IST, «Do radar à junção PN», Moisés Piedade e Carlos Fernandes, [museufaraday.tecnico.ulisboa.pt](https://museufaraday.tecnico.ulisboa.pt/HistTecnology/Do%20radar%20%c3%a0%20jun%c3%a7%c3%a3o%20%20PN.pdf), acessado 2026-11-06). Duas famílias de dispositivos acabariam por partilhar o nome «transístor» — e só uma delas escalaria até milhares de milhões num die moderno (**interpretação nossa** do arco deste capítulo).

## O BJT: corrente controla corrente

A Britannica define o transístor como dispositivo semicondutor que amplifica, controla e gera sinais elétricos; tipicamente tem três terminais — emissor, coletor e base (ou, em aplicações modernas de comutação, fonte, dreno e porta); um sinal elétrico aplicado à base (ou porta) influencia a capacidade do material de conduzir corrente entre emissor (ou fonte) e coletor (ou dreno) (Encyclopaedia Britannica, «transistor», [britannica.com](https://www.britannica.com/technology/transistor), acessado 2026-11-06). Nos transístores bipolares, a condução usa tanto buracos como eletrões, com regiões chamadas emissor, base e coletor; a Britannica descreve-os como mais rápidos que os FETs mas a consumirem mais corrente, adequados a aplicações de alta velocidade como ICs de radiofrequência (mesma fonte, secção de tipos).

Num BJT NPN (emissor N, base P, coletor N), uma pequena corrente de base controla uma corrente maior coletor–emissor; para o manter ligado, continua-se a alimentar corrente de base (**interpretação nossa** da física bipolar descrita pela Britannica, aplicada à escala de chip).

## O MOSFET: tensão controla um canal

Em **1959**, M. M. (John) Atalla e Dawon Kahng, nos Bell Labs, obtiveram o primeiro FET de porta isolada bem-sucedido, ao superar os «estados de superfície» que bloqueavam a penetração de campos elétricos no semicondutor; ao investigar camadas de dióxido de silício crescidas termicamente, verificaram que esses estados podiam ser marcadamente reduzidos na interface silício–óxido, num sanduíche metal (M — porta) / óxido (O — isolante) / silício (S — semicondutor) — daí o nome MOSFET, popularmente MOS; o dispositivo era lento e não respondia a necessidades urgentes do sistema telefónico, pelo que não foi prosseguido de imediato nos Bell Labs (Computer History Museum, «1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated», [computerhistory.org](https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/), acessado 2026-11-06). O marco do CHM intitula-se **1960**: Atalla e Kahng fabricaram transístores funcionais e demonstraram o primeiro amplificador de efeito de campo MOS bem-sucedido (mesma fonte).

A região condutora do MOS é material tipo p («dispositivo de canal p») ou tipo n («canal n»); os de canal n são mais rápidos mas mais difíceis de fabricar; dispositivos MOS chegaram ao mercado comercial em **1964** (GME e Fairchild com dispositivos de canal p para lógica e comutação; RCA com um de canal n para amplificação); por serem menores e consumirem menos potência do que os bipolares, **mais de 99 %** dos microchips produzidos hoje usam transístores MOS (CHM, loc. cit.).

A Britannica, a falar de comutação moderna, descreve a tensão aplicada ao elétrodo de porta (em geral poucos volts ou menos) a decidir se a corrente pode fluir da fonte ao dreno — o transístor a funcionar como interruptor: se flui corrente, o circuito está «ligado»; se não, «desligado»; esses dois estados correspondem aos 1s e 0s binários dos computadores digitais (Britannica, «transistor», loc. cit.).

**Interpretação nossa:** a porta do MOSFET, isolada pelo óxido, não pede uma corrente contínua de polarização como a base do BJT; uma vez carregada a capacitância da porta, manter o dispositivo ligado custa quase nada em corrente contínua — o oposto da corrente de base contínua do BJT. É essa física de potência em repouso quase nula que associamos à escalabilidade digital (**interpretação nossa**).

## Por que o MOSFET ganhou para a lógica digital

**Interpretação nossa:** a corrente de porta quase nula em regime estacionário é a história central. A lógica CMOS (próximo capítulo) assenta nela, de modo que corrente significativa flui sobretudo *enquanto* se comuta, não enquanto se mantém o estado — o que permitiu a contagem de transístores subir de milhares a milhares de milhões sem derreter o die.

Os BJTs não desapareceram: a Britannica ainda os situa onde velocidade e corrente importam mais do que densidade (Britannica, loc. cit.). Para lógica digital à escala séria, a física de potência em repouso do MOSFET tornou-o o caminho viável — e cada porta do próximo capítulo é construída a partir dele (**interpretação nossa** do fio do livro).

**Porta de saída:** o trabalho de D. Kahng e M. M. Atalla no MOSFET de silício (Bell Labs; marco CHM de 1960) — o dispositivo de efeito de campo com porta isolada por óxido que tornou o controlo por tensão o padrão digital.

**Próximo:** [Portas lógicas a partir de transístores]({{< relref "14-logic-gates-from-transistors" >}}).

## Fontes

- Museu Faraday / IST, «Do radar à junção PN» (Moisés Piedade e Carlos Fernandes): <https://museufaraday.tecnico.ulisboa.pt/HistTecnology/Do%20radar%20%c3%a0%20jun%c3%a7%c3%a3o%20%20PN.pdf>
- Encyclopaedia Britannica, «transistor»: <https://www.britannica.com/technology/transistor>
- Computer History Museum, «1960: Metal Oxide Semiconductor (MOS) Transistor Demonstrated»: <https://www.computerhistory.org/siliconengine/metal-oxide-semiconductor-mos-transistor-demonstrated/>

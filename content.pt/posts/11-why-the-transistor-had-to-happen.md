---
title: "Por que o transístor teve de acontecer"
weight: 11
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: do cálculo mecânico às válvulas de vácuo"
series_index: 10
aliases:
  - /posts/04-why-the-transistor-had-to-happen/
  - /posts/09-why-the-transistor-had-to-happen/
  - /posts/10-why-the-transistor-had-to-happen/
tags: []
summary: "Tamanho, potência, fiabilidade — três tetos da válvula que tornaram a comutação de estado sólido inevitável"
image_prompt: "Split comparison illustration: vacuum tube vs point-contact transistor at same scale, size and heat dissipation visually contrasted, minimalist technical infographic style, clean typography"
video_prompt: "15-second animation: vacuum tube shrinking and morphing into a transistor die, symbolizing the miniaturization leap, clean motion graphics style, light background"
schematics: "Comparison table/diagram: tube vs transistor — size, power draw, switching speed, failure rate"
---

O Museu Faraday (IST / Universidade de Lisboa) resume, num caderno sobre os 70 anos do transístor, que a **16 de dezembro de 1947**, nos Bell Labs, Walter Brattain e John Bardeen obtiveram pela primeira vez ganho de tensão com um dispositivo de contactos pontuais metálicos sobre germânio, e que William Shockley perseguia um transístor de junção monolítico, «feito» que o caderno situa em **1948** (Museu Faraday / IST, «Transístor — 70 anos em 2017», [museufaraday.tecnico.ulisboa.pt](https://museufaraday.tecnico.ulisboa.pt/HistTecnology/Transistor70.pdf), acessado 2026-11-06). As datas canónicas abaixo seguem o Computer History Museum e o NobelPrize.org; o Faraday serve de abertura lusófona institucional.

## Três tetos da válvula

No [capítulo 10]({{< relref "10-the-vacuum-tube-era" >}}) a Britannica descreveu válvulas volumosas, frágeis, que exigem potência para aquecer o cátodo e tendem a queimar após alguns milhares de horas; o ENIAC, nas fontes Penn / Smithsonian, consumia **150 kW** ou **140 kW** consoante a ficha. **Interpretação nossa:** cada válvula a mais acrescentava calor, potência e outro ponto de falha — a válvula já tinha provado a comutação eletrónica sem peças móveis, mas não tinha resolvido a *escala*.

**Tamanho.** Uma válvula precisa de um envelope evacuado; um transístor é de estado sólido — sem vácuo nem vidro a delimitar o mínimo (**interpretação nossa** da curva de escala diferente).

**Potência.** O cátodo de uma válvula tem de ser aquecido para emissão termiónica (Britannica, «electron tube», citada no cap. 10). Um transístor não tem filamento de aquecimento no mesmo sentido (**interpretação nossa** do ganho de densidade sem «derreter»).

**Fiabilidade.** A Britannica associa a válvula a queima e fragilidade; o estado sólido não partilha o mesmo modo de falha do filamento e do selo de vácuo (**interpretação nossa**; problemas iniciais de encapsulamento/contaminação existem, mas o mecanismo não é o do filamento).

## Datas: o que o CHM e o Nobel dizem

O Computer History Museum (Silicon Engine) regista que, a **16 de dezembro de 1947**, a investigação de John Bardeen e Walter Brattain culminou no «first successful semiconductor amplifier» — dois contactos de ouro muito próximos sobre uma placa de germânio de alta pureza, com amplificação do sinal de entrada até **100** vezes; a **23 de dezembro** demonstraram o dispositivo a responsáveis do laboratório da Bell Labs (CHM, «1947: Invention of the Point-Contact Transistor», [computerhistory.org](https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/), acessado 2026-11-06).

Baptizado «transistor» por John Pierce, o dispositivo foi anunciado publicamente pela Bell Labs numa conferência de imprensa em Nova Iorque a **30 de junho de 1948** (mesma fonte CHM).

Sobre a junção, o marco do CHM intitula-se «**1948: Conception of the Junction Transistor**»: a **23 de janeiro de 1948** William Shockley concebeu (*conceived*) um transístor distinto baseado na junção p-n; pediu patente em junho de 1948; publicou a teoria em **1949**; e só em **1951** a Bell Labs desenvolveu processos que permitiram fabricar o seu transístor de junção em quantidades de produção (CHM, «1948: Conception of the Junction Transistor», [computerhistory.org](https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/), acessado 2026-11-06).

O Nobel Prize in Physics **1956** foi atribuído conjuntamente a William Bradford Shockley, John Bardeen e Walter Houser Brattain «for their researches on semiconductors and their discovery of the transistor effect» (NobelPrize.org, «The Nobel Prize in Physics 1956», [nobelprize.org](https://www.nobelprize.org/prizes/physics/1956/summary), acessado 2026-11-06).

## O que vem a seguir

Nada disto significa que o dispositivo chegou acabado. A física de *como* comuta — semicondutores, dopagem, bandas — ainda tinha de ser compreendida e engenheirada. Esse é outro assunto do «porquê» deste capítulo. A Fase 2 começa aí: o que é um semicondutor, por que o silício se tornou o material de escolha, e como a dopagem cria o interruptor controlável que a válvula não podia ser.

**Porta de saída:** artigos Bell Labs de Bardeen, Brattain e Shockley (finais dos anos 1940 / início dos 1950) — a física primária do interruptor de estado sólido.

**Próximo:** [Semicondutores a partir dos primeiros princípios]({{< relref "/posts/12-semiconductors-from-first-principles.md" >}}).

## Fontes

- Museu Faraday / IST, «Transístor — 70 anos em 2017»: <https://museufaraday.tecnico.ulisboa.pt/HistTecnology/Transistor70.pdf>
- Computer History Museum, «1947: Invention of the Point-Contact Transistor»: <https://www.computerhistory.org/siliconengine/invention-of-the-point-contact-transistor/>
- Computer History Museum, «1948: Conception of the Junction Transistor»: <https://www.computerhistory.org/siliconengine/conception-of-the-junction-transistor/>
- NobelPrize.org, «The Nobel Prize in Physics 1956»: <https://www.nobelprize.org/prizes/physics/1956/summary>
- Capítulo 10 deste livro (Penn / Smithsonian ENIAC; Britannica electron tube) e as suas fontes.

---
title: "A era da válvula de vácuo"
weight: 10
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: do cálculo mecânico às válvulas de vácuo"
series_index: 9
aliases:
  - /posts/03-the-vacuum-tube-era/
  - /posts/08-the-vacuum-tube-era/
  - /posts/09-the-vacuum-tube-era/
tags: []
summary: "As válvulas tiraram as peças móveis — e trocaram essa velocidade por calor, potência e falhas"
image_prompt: "Cross-section technical diagram of a triode vacuum tube showing cathode, grid, and anode with electron flow arrows, labeled, vintage engineering textbook illustration style, amber glow accent"
video_prompt: "25-second animation: electron flow inside a triode vacuum tube visualized as glowing particles moving from heated cathode through control grid to anode, showing grid voltage modulating current, dark background with warm tube glow"
schematics: "Diagram: triode internal structure + basic vacuum tube amplifier/switch circuit"
---

A válvula de vácuo controla um fluxo de eletrões sem peças móveis mecânicas: o cátodo emite eletrões (emissão termiónica por calor), o ânodo (placa) positivo atrai-os, e uma grelha de controlo entre eles varia o fluxo (Encyclopaedia Britannica, «electron tube», [britannica.com](https://www.britannica.com/technology/electron-tube), acessado 2026-11-06). **Interpretação nossa:** isso é amplificação; com a topologia certa, também é um interruptor — corrente ligada ou desligada para um 1 ou um 0 — e por isso a era das válvulas foi um combate constante contra calor, potência e taxa de falha.

No Brasil, o Museu Capixaba do Computador (MCC) publicou um artigo de divulgação sobre o ENIAC de 1946, situando-o na Universidade da Pensilvânia e descrevendo-o como composto por 18 000 válvulas eletrónicas e cerca de 30 toneladas (MCC, «O computador ENIAC de 1946», 15 fev. 2023, [museucapixaba.com.br](https://museucapixaba.com.br/hoje/computador-eniac-de-1946/), acessado 2026-11-06). **Usamos o MCC só como ligação lusófona de divulgação; as cifras de potência e a data de anúncio abaixo vêm das fontes Penn / Smithsonian.**

## Como a válvula comuta

A Britannica descreve o tubo de eletrões como dispositivo selado que regula o fluxo de eletrões; o cátodo emite (frequentemente por emissão termiónica); um ânodo positivo atrai e acelera; algumas válvulas têm uma grelha entre cátodo e ânodo para controlar o fluxo (Britannica, loc. cit.). Nada se move excepto eletrões — **interpretação nossa** do salto face ao relé mecânico do capítulo anterior.

## ENIAC: duas leituras de potência, lado a lado

A Penn Engineering afirma que o Electronic Numerical Integrator and Computer (ENIAC) foi **anunciado originalmente a 14 de fevereiro de 1946**, construído e operado na Moore School of Electrical Engineering; em plena operação ocupava uma sala de **30 por 50 pés**, pesava **30 toneladas**, tinha **40** painéis em U, exigia **18 000** válvulas de vácuo, e «used **150** kilowatts of electricity» (Penn Engineering, «ENIAC», [engineering.upenn.edu](https://www.engineering.upenn.edu/about/history-heritage/eniac/), acessado 2026-11-06). A mesma página diz que um cálculo de balística que antes levava **12 horas** numa calculadora de mão podia fazer-se em **30 segundos** (mesma fonte).

O registo do Smithsonian National Museum of American History (NMAH) sobre o Accumulator #2 do ENIAC descreve a máquina completa: construída entre **maio de 1943** e **fevereiro de 1946** na Moore School sob contrato do Ballistics Research Laboratory; preenchia uma sala de **30 por 50 pés** e pesava **30 toneladas**; usava cerca de (**around**) **18 000** válvulas de 16 tipos, 1 500 relés, 70 000 resistências e 10 000 condensadores; e «consumed **140** kilowatts of power» (Smithsonian, object nmah_334742, [si.edu](https://www.si.edu/object/nmah_334742), acessado 2026-11-06).

**Penn Engineering: 150 kW. Smithsonian NMAH: 140 kW.** Apresentamos as duas cifras lado a lado, cada uma com a sua fonte; **não reconciliamos** a diferença.

A programação do ENIAC, nas fontes institucionais acima, passa por cabos, interruptores e painéis (Penn descreve programadoras a «plugging in cables and setting switches»; o MCC fala em chaves e fios / diagramas dos 40 painéis). **Interpretação nossa:** a sequência de operações vivia no encaminhamento físico — a dor que o programa armazenado viria a resolver.

## O teto das válvulas

A Britannica nota que as válvulas de eletrões são volumosas, frágeis e exigem potência significativa para aquecer os filamentos do cátodo, e tendem a queimar após alguns milhares de horas; os transístores, mais pequenos, com menos calor e menos consumo, substituíram-nas em muitas aplicações de baixa potência e baixa frequência a partir do fim dos anos 1950 (Britannica, loc. cit.). **Interpretação nossa:** o teto não foi falta de ideias — foi a física da própria válvula (calor, tamanho, envelope de vácuo frágil) a limitar até onde esta abordagem escalava. Esse é o gancho do próximo capítulo.

**Próximo:** [Por que o transístor teve de acontecer]({{< relref "/posts/11-why-the-transistor-had-to-happen.md" >}}).

## Fontes

- Encyclopaedia Britannica, «electron tube»: <https://www.britannica.com/technology/electron-tube>
- Museu Capixaba do Computador, «O computador ENIAC de 1946»: <https://museucapixaba.com.br/hoje/computador-eniac-de-1946/>
- Penn Engineering, «ENIAC»: <https://www.engineering.upenn.edu/about/history-heritage/eniac/>
- Smithsonian Institution / NMAH, ENIAC Accumulator #2 (nmah_334742): <https://www.si.edu/object/nmah_334742>

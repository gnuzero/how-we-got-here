---
title: "Os motores de Babbage"
weight: 5
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: do cálculo mecânico às válvulas de vácuo"
series_index: 4
aliases:
  - /posts/01a-babbage-engines/
  - /posts/03-babbage-engines/
tags: []
summary: "Motor de Diferenças e Motor Analítico — depósito, moinho e um programa em cartões"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

A computação não começou com eletricidade. Começou com engrenagens.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Motor de Diferenças n.º 2 de Charles Babbage no Science Museum, Londres" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, Londres). Foto: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

Em 1822, Charles Babbage escreveu a Sir Humphry Davy, presidente da Royal Society, sobre a possibilidade de automatizar a construção de tabelas matemáticas — em especial tabelas de logaritmos para navegação — e leu à Society o artigo «On the Theoretical Principles of the Machinery for Calculating Tables»; chamou à máquina *Difference Engine* (Encyclopaedia Britannica, «Difference Engine», [britannica.com](https://www.britannica.com/technology/Difference-Engine), acessado 2026-11-06). O Computer History Museum situa o início do trabalho no Motor de Diferenças n.º 1 em 1821 e descreve motores de diferenças como calculadoras baseadas no método das diferenças finitas, que usam só adição aritmética e dispensam multiplicação e divisão mais difíceis de implementar mecanicamente (Computer History Museum, «The Engines», [computerhistory.org](https://www.computerhistory.org/babbage/engines/), acessado 2026-11-06). A Britannica descreve o Motor de Diferenças como dispositivo digital decimal: dígitos representados por posições em rodas dentadas; quando uma roda passa de 9 a 0, faz a seguinte avançar uma posição — o *carry* (Britannica, loc. cit.).

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="Detalhe dos braços de transporte (carry) entre colunas de dígitos no Motor de Diferenças n.º 2" loading="lazy" width="1280">
<figcaption>Braços de *carry* entre colunas de dígitos no Difference Engine No. 2, Serial #2 (Computer History Museum). Foto: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>. A legenda no Commons descreve os braços que transmitem um *carry* de um contador ao seguinte quando uma posição «passa de 9».</figcaption>
</figure>

**Experimente agora.** Avance o laboratório a partir de Y=9, Δ₁=7. A roda das unidades passa o 9; um dente agarra as dezenas. 9+7 torna-se 16. São as diferenças finitas a fazer x² — o método para o qual o motor foi pensado.

{{< lab type="difference-engine" height="720" >}}

Original deste livro, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Modelo pedagógico de coluna, não uma reconstrução completa do n.º 2.

**O argumento deste livro** (como no original em inglês): ele nunca terminou um Motor de Diferenças em escala completa. O financiamento lutou contra ele; as tolerâncias de fabrico da época também. Cada dígito extra de precisão era outra oportunidade para atrito, folga (*backlash*) e acumulação de erros arruinarem o resultado.

O passo seguinte, o Motor Analítico, é o verdadeiro antepassado do computador moderno. O Computer History Museum descreve-o como motor de cálculo programável de propósito geral, com um «Store» (depósito / memória) onde se guardavam números e resultados intermédios e um «Mill» (moinho / unidade aritmética) separado onde se fazia o processamento aritmético; as instruções vinham de cartões perfurados — ideia tomada do tear Jacquard usado para tecidos de padrões complexos (Computer History Museum, «The Engines», loc. cit.).

O emulador abaixo é o Analytical Engine de John Walker / Fourmilab. Avance os cartões e veja as colunas do moinho e do depósito mudarem. Domínio público; hospedamos uma cópia e mantemos o link de origem.

{{< lab type="analytical-engine" height="780" >}}

Origem: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [source zip](https://www.fourmilab.ch/babbage/release/aemsource.zip) (domínio público). Mapas: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine).

Esse empréstimo é a próxima paragem: o tear Jacquard, e a separação entre programa e máquina.

**Próximo:** [O tear Jacquard]({{< relref "/posts/06-jacquard-loom.md" >}}).

## Fontes

- Encyclopaedia Britannica, «Difference Engine»: <https://www.britannica.com/technology/Difference-Engine>
- Computer History Museum, «The Engines»: <https://www.computerhistory.org/babbage/engines/>
- Wikimedia Commons, foto Difference Engine No. 2 (Marcin Wichary, CC BY 2.0): <https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg>
- Wikimedia Commons, detalhe dos braços de *carry* (Jitze Couperus, CC BY 2.0): <https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg>
- Fourmilab / John Walker, Analytical Engine emulator: <https://www.fourmilab.ch/babbage/>

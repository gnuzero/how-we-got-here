---
title: "Por que a computação mecânica importa"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Fundamentos: do cálculo mecânico às válvulas de vácuo"
series_index: 6
aliases:
  - /posts/01c-why-mechanical-matters/
  - /posts/05-why-mechanical-matters/
tags: []
summary: "A forma lógica chegou em latão; o atrito forçou a eletricidade"
image_prompt: "Minimal diagram: store + mill + instruction sequence as three boxes, then an arrow to electrical switching, clean technical infographic, white background"
video_prompt: "15-second motion graphic: gears morphing into relay contacts, same instruction-store-execute shape preserved, clean light background"
schematics: "Diagram: instruction sequence + execution unit + store — logical shape that survives medium change"
---

Conjuntos de instruções, programas armazenados, controlo separado do datapath — todos têm raízes nos motores de Babbage e nos cartões de Jacquard (**interpretação nossa** do arco dos capítulos 5–6; factos nesses capítulos e nas suas fontes). O meio vai mudar por completo (relés, válvulas, transístores). A forma lógica não: uma sequência de instruções, uma unidade de execução que as cumpre, e um depósito que guarda estado entre passos (**interpretação nossa** da forma que o livro leva adiante).

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Charles_Babbage%27s_Difference_Engine_No._2_%282586166238%29.jpg" alt="Difference Engine No. 2, Serial #2 no Computer History Museum" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2, Serial #2 (Computer History Museum). Foto: <a href="https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg">Erik Pitti</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**O argumento deste livro** (como no original em inglês): o que a computação mecânica *não pôde* fazer, em vida de Babbage, foi escalar. Trens de engrenagens têm atrito, folga (*backlash*) e acumulação de tolerâncias de fabrico. Cada dígito extra de precisão tornava a máquina mais difícil de construir com fiabilidade. Esse teto — não a falta de ideias — é o que empurrou a computação para a comutação elétrica.

A reconstrução acima é a exceção que confirma a regra: quando as oficinas passaram a segurar essas tolerâncias, o desenho em latão correu. A forma lógica já estava lá. O meio é que teve de mudar primeiro (**o argumento deste livro**, continuação do parágrafo anterior; sem citação de museu sob este argumento).

**Próximo:** [Capturando a luz]({{< relref "/posts/08-capturing-light.md" >}}).

## Fontes

- Wikimedia Commons, foto Difference Engine No. 2 Serial #2 (Erik Pitti, CC BY 2.0): <https://commons.wikimedia.org/wiki/File:Charles_Babbage%27s_Difference_Engine_No._2_(2586166238).jpg>
- Capítulos anteriores deste livro (motores de Babbage; tear Jacquard) e as suas fontes.

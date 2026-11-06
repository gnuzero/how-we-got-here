---
title: "Das portas à lógica combinacional"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — Física e dispositivos"
series_index: 14
aliases:
  - /posts/08-from-gates-to-combinational-logic/
  - /posts/13-from-gates-to-combinational-logic/
  - /posts/14-from-gates-to-combinational-logic/
tags: []
summary: "Compor portas em somadores e numa ALU — e bater no atraso do carry-ripple que força estruturas melhores"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

Uma porta sozinha quase não serve. O comportamento útil começa quando se as compõe — e a primeira estrutura canónica é o somador: o sítio onde as portas passam a ser «a coisa que faz aritmética dentro de uma CPU» (**interpretação nossa** do lugar do capítulo).

## Do half adder ao full adder

As notas de Harris (Harvey Mudd) dão o *half adder* com soma S = A ⊕ B e carry Cout = A · B; o *full adder* com S = A ⊕ B ⊕ C e Cout = MAJ(A, B, C) — a maioria dos três bits de entrada (David Harris, «Introduction to CMOS VLSI Design», Lecture 17: Adders, CMOS VLSI Design 4th Ed., [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf), acessado 2026-11-06). O HyperPhysics situa o *full adder* como unidade lógica que tem de obedecer à tabela de verdade da soma com carry-in, e nota que somar dígitos binários com o full adder envolve tratar o «carry» de um dígito para o seguinte (HyperPhysics, «The Full Adder», [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fulladd.html), acessado 2026-11-06). O half adder, só com A e B, não aceita carry-*in* de um bit menos significativo; o full adder encadeia Cout de um estágio no Cin do seguinte e permite somar largura arbitrária, um bit de cada vez (Harris, loc. cit.; HyperPhysics, loc. cit.).

**Experimente agora.** O laboratório abaixo continua a abrir numa porta AND — o carry do half adder. Ponha as duas entradas em alto e veja a saída subir; essa porta única é a restrição que vai ripple quando se encadeiam somadores na secção seguinte.

{{< lab type="breadboard" height="700" >}}

## Ripple-carry: simples, lento por uma razão

Harris descreve o *carry-ripple adder* como o desenho mais simples: cascata de full adders; o caminho crítico vai de Cin a Cout; o atraso de carry através de todos os N estágios é o que torna o ripple lento, e estruturas como *carry-lookahead* existem precisamente para acelerar (Harris, Lecture 17, loc. cit.). Quatro full adders em fila fazem um somador de 4 bits em ripple-carry: o carry do bit 3 não está certo até o do bit 2 assentar, que espera pelo bit 1, que espera pelo bit 0. O carry *ripple*. Em 4 bits serve; em 64 bits essa cadeia fixa quão depressa a ALU inteira pode marcar o relógio (**interpretação nossa** da escala a partir do caminho crítico de Harris). O mesmo padrão do resto deste livro — um gargalo físico força a arquitectura seguinte (**interpretação nossa**).

## Dos somadores a uma ALU simples

O HyperPhysics situa a unidade aritmética e lógica (ALU) do microprocessador como o sítio onde ocorrem as operações aritméticas, com a operação especificada por sinais da unidade de controlo (HyperPhysics, «The Microprocessor», [hyperphysics.phy-astr.gsu.edu](https://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/micropro.html), acessado 2026-11-06). Na leitura deste livro, pôr um mux à frente do mesmo hardware de somador — bits de controlo a seleccionar soma, subtração (soma com operando invertido mais Cin, a reutilizar o somador), AND, OR — é o primeiro momento em que «portas» passam a aritmética de CPU (**interpretação nossa** da composição; a ALU como bloco nomeado está no HyperPhysics).

Tudo até aqui é combinacional — as saídas dependem só das entradas actuais. Uma sequência de operações precisa de estado que persiste no tempo. Esse é o próximo post.

**Próximo:** [Lógica sequencial]({{< relref path="/posts/16-sequential-logic.md" lang="en" >}}) (capítulo em inglês até existir em português).

## Fontes

- David Harris (Harvey Mudd College), «Introduction to CMOS VLSI Design», Lecture 17: Adders: <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect17.pdf>
- HyperPhysics, «The Full Adder»: <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/fulladd.html>
- HyperPhysics, «The Microprocessor» (ALU): <https://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/micropro.html>

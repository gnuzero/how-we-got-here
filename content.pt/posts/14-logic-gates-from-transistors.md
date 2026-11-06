---
title: "Portas lógicas a partir de transístores"
weight: 14
date: 2026-01-01
draft: false
phase: "2 — Física e dispositivos"
series_index: 13
aliases:
  - /posts/07-logic-gates-from-transistors/
  - /posts/12-logic-gates-from-transistors/
  - /posts/13-logic-gates-from-transistors/
tags: []
summary: "CMOS emparelha NMOS e PMOS para que portas ociosas não tenham caminho estático — a topologia que escalou"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

CMOS — *Complementary Metal-Oxide-Semiconductor* — é a topologia de circuito por detrás de quase todos os chips digitais **do fim dos anos 1970 aos anos 1980**, na formulação de Makimoto (SHMJ): o CMOS foi empurrado para o *mainstream* da VLSI no lugar do NMOS «from the late 1970s to the 1980s» (Tsugio Makimoto, «Evolution of Low Power Electronics and Its Future Applications», ISPLED 2003 / Makimoto Library, Semiconductor History Museum of Japan, [shmj.or.jp](https://www.shmj.or.jp/makimoto/en/pdf/makimoto_E_06_12.pdf), acessado 2026-11-06). O Computer History Museum descreve a configuração CMOS (Wanlass, 1963) como a de mais baixa potência, hoje a tecnologia de fabrico dominante; circuitos que combinam MOS de canal p e canal n em simetria complementar «drew close to zero power in standby mode» (Computer History Museum, «1963: Complementary MOS Circuit Configuration is Invented», [computerhistory.org](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), acessado 2026-11-06). Emparelhar um NMOS com um PMOS de modo que, em regime estacionário, exatamente um conduza transforma a corrente quase nula do dispositivo (capítulo 13) numa família lógica componível (**interpretação nossa** do fio deste capítulo).

## O inversor: a unidade CMOS mais pequena

PMOS em cima (ao rail de alimentação), NMOS em baixo (à massa); portas ligadas como entrada, drenos como saída. O MIT 6.012 (Lecture 12) descreve o inversor CMOS assim: com VIN = 0, NMOS desligado e PMOS ligado ⇒ VOUT = VDD; com VIN = VDD, NMOS ligado e PMOS desligado ⇒ VOUT = 0; e «No current while idle in any logic state» / «No power consumption while idling» — NMOS e PMOS comutam alternadamente, sem caminho de corrente entre alimentação e massa em repouso (MIT OpenCourseWare, 6.012 Microelectronic Devices and Circuits, Spring 2009, Lecture 12, [ocw.mit.edu](https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf), acessado 2026-11-06).

## Por que isto resolve o problema de potência

O CHM associa ao CMOS RCA de 1975 um processo pensado «to minimize leakage»; na mesma linha, Makimoto assinala que, com a miniaturização, a potência estática sobe pelo aumento da corrente de fuga (*leakage current*) — o desafio moderno de equilibrar potência activa e estática (CHM, loc. cit.; Makimoto / SHMJ, loc. cit.). Em lógica NMOS antiga (pull-down mais uma carga), flui corrente enquanto a saída está baixa; em CMOS, em *standby*, a corrente de caminho rail–massa fica perto de zero, restando sobretudo fugas (**interpretação nossa** a partir das duas fontes). A potência gasta-se quase só nas transições — carregar e descarregar a capacitância de entrada da porta seguinte — e escala com a *actividade* e a *frequência* de comutação, não com quantas portas ociosas existem no die (**interpretação nossa** da consequência do *standby* quase nulo). O MOSFET tornou possível corrente quase nula no dispositivo; o CMOS é o truque de circuito que a torna família lógica.

## NAND, NOR e completude funcional

Uma NAND CMOS de 2 entradas põe NMOS em série (Y = 0 quando ambas as entradas são 1) e PMOS em paralelo (Y = 1 quando qualquer entrada é 0) — topologia do exemplo NAND nas notas de Harris (David Harris, Harvey Mudd College, «Introduction to CMOS VLSI Design», Lecture 1: Circuits & Layout, CMOS VLSI Design 4th Ed., [pages.hmc.edu](https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf), acessado 2026-11-06). A mesma aula enuncia a regra dos complementos de condução: a rede de *pull-up* é o complemento da de *pull-down* (paralelo ↔ série); a NOR CMOS segue essa dualidade (NMOS em paralelo, PMOS em série) (Harris, loc. cit.). O HyperPhysics classifica a NAND e a NOR como portas universais: «combinations of them can be used to accomplish any of the basic operations and can thus produce an inverter, an OR gate or an AND gate» (HyperPhysics, «NAND Gate», [hyperphysics.phy-astr.gsu.edu](http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nand.html), acessado 2026-11-06). Em concreto, **AND** obtém-se como **NAND seguida de um inversor**: HyperPhysics lista AND e inversor entre as funções produzíveis a partir de combinações de NAND; inverter a saída da NAND é exactamente a AND (mesma fonte). É por isso que bibliotecas de células-padrão se apoiam tanto em células NAND bem caracterizadas: compose-as e obtém somadores, bancos de registos, processadores inteiros (**interpretação nossa** do uso em VLSI).

**Experimente agora.** O laboratório abaixo abre numa porta AND — alterne as duas entradas e observe a saída. NAND e NOR são as primitivas CMOS acima; AND é o que se obtém ao as compor. Toque na porta antes do próximo post construir somadores a partir delas.

{{< lab type="breadboard" height="700" >}}

## Para onde isto vai a seguir

Toda a estrutura de CPU da Fase 3 — somador completo, ALU, banco de registos — é composição destas portas. A seguir: a primeira estrutura real, lógica combinacional, a começar pelo somador.

**Próximo:** [Das portas à lógica combinacional]({{< relref "15-from-gates-to-combinational-logic" >}}).

## Fontes

- Computer History Museum, «1963: Complementary MOS Circuit Configuration is Invented»: <https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/>
- Tsugio Makimoto, «Evolution of Low Power Electronics and Its Future Applications» (ISPLED 2003; Makimoto Library / Semiconductor History Museum of Japan): <https://www.shmj.or.jp/makimoto/en/pdf/makimoto_E_06_12.pdf>
- MIT OpenCourseWare, 6.012 Microelectronic Devices and Circuits (Spring 2009), Lecture 12: <https://ocw.mit.edu/courses/6-012-microelectronic-devices-and-circuits-spring-2009/118cfea55bd035e209c3bbc649698326_MIT6_012S09_lec12.pdf>
- David Harris (Harvey Mudd College), «Introduction to CMOS VLSI Design», Lecture 1: Circuits & Layout: <https://pages.hmc.edu/harris/cmosvlsi/4e/lect/lect1.pdf>
- HyperPhysics, «NAND Gate»: <http://hyperphysics.phy-astr.gsu.edu/hbase/Electronic/nand.html>

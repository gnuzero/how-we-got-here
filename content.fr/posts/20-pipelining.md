---
title: "Pipeline"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 19
aliases:
  - /posts/13-pipelining/
  - /posts/18-pipelining/
  - /posts/19-pipelining/
tags: []
summary: "Chevaucher les instructions pour le débit — puis les aléas forcent le forwarding, les stalls, et tout ce qui suit"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

Le chemin monocycle laisse du débit sur la table : chaque instruction attend le chemin le plus lent possible. Le pipeline coupe l'exécution en étages et laisse plusieurs instructions occuper des étages *différents* en même temps.

## L'idée, avant les microprocesseurs : Stretch, 1959

En 1959, Erich Bloch décrit l'IBM Stretch, lancé pour gagner « two orders of magnitude » face au 704. Le système devait profiter de « every possible overlap of systems function ». ([Bloch, « The Engineering Design of the Stretch Computer », EJCC 1959 — PDF bitsavers](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf)) Sur la plupart des machines des huit années précédentes, « and the 704 is a case in point », il y a « a sequential flow of instructions ». Sur Stretch, deux mots d'instructions et quatre opérandes peuvent arriver simultanément, et l'exécution se chevauche avec l'apport. ([ibid.](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf))

## Étages chevauchés

Le vocabulaire didactique standard nomme cinq étages : **IF** (*instruction fetch*), **ID** (*instruction decode & register read*), **EX** (*execute operation or calculate address*), **MEM** (*access memory operand*), **WB** (*write result back to register*). Des registres de pipeline les séparent. ([Notes de cours — Fussell, CS352H *Computer Systems Architecture*, University of Texas at Austin, Topic 8: MIPS Pipelined Implementation, automne 2009](https://www.cs.utexas.edu/~fussell/courses/cs352h/lectures/8-MIPS-Pipeline.pdf)) Les mêmes notes soulignent que le gain du pipeline vient du **débit** : « Speedup due to increased throughput — Latency (time for each instruction) does not decrease ». ([ibid.](https://www.cs.utexas.edu/~fussell/courses/cs352h/lectures/8-MIPS-Pipeline.pdf)) En régime établi, une instruction *termine* chaque cycle — même si chacune prend encore cinq cycles du début à la fin.

**Essaie maintenant.** Enchaîne le mini-CPU une instruction à la fois — l'habitude monocycle. La promesse du pipeline, c'est le débit : les mêmes pièces qui se chevauchent.

{{< lab type="mini-cpu" >}}

## Aléas : où l'indépendance casse

**Aléa de données.** Bloch donne déjà un exemple STORE / LOAD / ADD où l'opérande n'est pas encore en mémoire : l'unité doit « forward » le résultat. ([Bloch 1959](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf)) Quand le résultat n'est pas encore disponible non plus pour le forwarding, l'instruction attend (*stall*).

**Aléa de contrôle.** Sur Stretch, pour les branchements conditionnels, l'unité d'instructions « makes the assumption that the branch will not be successful » ; si le branchement est pris, les modifications doivent être annulées et le look-ahead sert de « recovery memory ». ([Bloch 1959](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf))

## Ce que dit l'ISA : RISC-V

Le manuel RISC-V note que les transferts de contrôle RV32I « do not have architecturally visible delay slots ». Sur les branchements conditionnels, un compare-and-branch combiné « fits into a regular pipeline » et permet d'observer et de prédire plus tôt dans le front-end ; le coût d'une mauvaise prédiction est « flushing pipelines on a branch mispredict ». ([RISC-V Unprivileged ISA 20240411, §2.5](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf))

Les flushes coûtent cher — d'où la prédiction de branchement au prochain chapitre.

Ensuite : [Prédiction de branchement]({{< relref "21-branch-prediction" >}}).

## Sources

- Bloch — Stretch (1959) : <https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf>
- RISC-V Unprivileged ISA 20240411 : <https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf>

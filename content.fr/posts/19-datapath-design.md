---
title: "Conception du chemin de données"
weight: 19
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 18
aliases:
  - /posts/12-datapath-design/
  - /posts/17-datapath-design/
  - /posts/18-datapath-design/
tags: []
summary: "Un chemin de données monocycle rend les pièces visibles — et montre pourquoi son horloge est dimensionnée sur le pire cas"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

Le chapitre précédent a défini le contrat — ce que la machine promet. Le chemin de données (*datapath*) est le matériel qui tient la promesse. La version la plus simple — *monocycle* — termine une instruction entière par battement d'horloge. Les CPU réels ne sont plus bâtis ainsi ; c'est encore le moyen le plus clair de voir comment les pièces se connectent.

## Les pièces, nommées dès 1945

Dans le *First Draft* sur l'EDVAC, von Neumann sépare trois « specific parts » : une partie arithmétique centrale (CA) ; un organe de contrôle central (CC) qui assure « the proper sequencing of its operations » — en distinguant les instructions d'un problème, qui doivent être stockées, des organes qui les exécutent « no matter what they are » ; et la mémoire M. ([von Neumann, *First Draft…*, 30 juin 1945, §2.2–2.5 — PDF Godfrey](https://people.csail.mit.edu/brooks/idocs/JvN.pdf))

**Notre interprétation** : la distinction du §2.3 correspond à la frontière ISA / chemin de données — les instructions changent d'un programme à l'autre ; les organes qui les exécutent restent.

## Comment circule une instruction : variante IAS, 1946

Le rapport IAS décrit le contrôle pas à pas : un mot contient une paire d'ordres ; le contrôle commande à la mémoire de transmettre la paire, puis d'exécuter le premier ordre, puis le second, « until the end of the problem ». ([Burks et al., IAS 1946, §6.1 — UNC](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html)) Un type d'ordre charge un nombre et demande une opération à l'unité arithmétique ; un autre écrit le résultat en mémoire. L'accumulateur est « a parallel storage organ which can receive a number and add it to the one already in it ». ([ibid., §5.5](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html))

## Monocycle sur un ISA de type RISC

Le manuel RISC-V place `rs1`, `rs2` et `rd` aux mêmes positions dans tous les formats de base « to simplify decoding ». ([RISC-V Unprivileged ISA 20240411, §2.2](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf)) **Notre interprétation** : le fichier de registres peut recevoir les adresses de lecture directement depuis des bits fixes de l'instruction, avant que le décodeur ait fini de trancher l'opération.

**Essaie maintenant.** Enchaîne le mini-CPU ci-dessous. Chaque Pas est une de ces pièces au ralenti — fetch dans l'IR, décode l'opcode, exécute dans A et la mémoire.

{{< lab type="mini-cpu" >}}

## La contrainte qui force le pipeline

Dans un chemin monocycle, chaque instruction doit tenir dans une période d'horloge. Une seule horloge : la période est donc celle de l'instruction au chemin le plus long. **Notre interprétation** : toute addition « paie » alors la vitesse du pire cas (souvent un load). Le pipeline coupe ce long chemin en étages — même ISA, bien plus de travail fini par seconde. C'est le prochain chapitre.

Ensuite : [Pipeline]({{< relref "20-pipelining" >}}).

## Sources

- von Neumann — *First Draft* (EDVAC) : <https://people.csail.mit.edu/brooks/idocs/JvN.pdf>
- Burks / Goldstine / von Neumann — IAS 1946 : <https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html>
- RISC-V Unprivileged ISA 20240411 : <https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf>

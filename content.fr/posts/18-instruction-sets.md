---
title: "Jeux d'instructions"
weight: 18
date: 2026-01-01
draft: false
phase: "3 — Building a CPU & Its Architectures"
series_index: 17
aliases:
  - /posts/11-instruction-sets/
  - /posts/16-instruction-sets/
  - /posts/17-instruction-sets/
tags: []
summary: "L'ISA est le contrat logiciel–matériel ; CISC et RISC sont deux réponses à ce que ce contrat doit contenir"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

Le matériel des chapitres précédents exécute ce qu'on lui demande — si on sait le demander. Le jeu d'instructions (ISA, *instruction set architecture*) est la langue de la demande : opérations, registres, formats binaires sur lesquels un programme peut compter. La définition de 1964 ci-dessous la sépare explicitement de l'implémentation.

## Contrat : architecture versus implémentation

En présentant l'IBM System/360, Gene Amdahl, Gerrit Blaauw et Fred Brooks écrivent que *architecture* décrit « the attributes of a system as seen by the programmer, i.e., the conceptual structure and functional behavior, as distinct from the organization of the data flow and controls, the logical design, and the physical implementation ». ([Amdahl, Blaauw, Brooks, « Architecture of the IBM System/360 », *IBM J. R&D* 8(2), 1964 — PDF](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf))

Parmi les innovations listées : « strict upward and downward machine-language compatibility over a line of six models having a performance range factor of 50 ». ([ibid., Abstract](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf)) Le programme voit seize registres généraux ; où ils vivent physiquement « according to the model ». ([ibid.](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf))

## Un format moderne et ouvert : RISC-V

Pour un ISA dont la spécification est publique, prenons RISC-V. Pour la base RV32I, le manuel définit 32 registres `x` de 32 bits ; `x0` est câblé à zéro. ([*RISC-V Instruction Set Manual, Vol. I*, 20240411, §2.1](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf)) RV32I a quatre formats de base (R/I/S/U), « all are a fixed 32 bits in length » ; registres source et destination aux mêmes positions « to simplify decoding » ; le bit de signe de tout immédiat est toujours le bit 31 « to speed sign-extension circuitry ». ([ibid., §2.2](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf)) C'est une architecture *load-store* : seules load et store touchent la mémoire. ([ibid., §2.6](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf))

## Deux philosophies : CISC et RISC

Le terme RISC vient de Patterson et Ditzel, qui proposent d'examiner « the case for a Reduced Instruction Set Computer (RISC) being as cost-effective as a Complex Instruction Set Computer (CISC) », en partant de la croissance de complexité (mémoire de contrôle PDP-11/40 vs VAX-11/780). ([Patterson & Ditzel, « The Case for the Reduced Instruction Set Computer », *CAN* 8(6), 1980 — PDF](https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/risc.pdf)) Ils écrivent : « the burden on compiler writers is eased when the instruction set is simple and uniform » ; il devrait être possible « to have a very simple instruction set that can be very fast ». ([ibid.](https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/risc.pdf))

Le manuel RISC-V se place dans cette lignée : le nom représente « the fifth major RISC ISA design from UC Berkeley ». ([RISC-V manual, Introduction](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf))

**Notre interprétation** sur la persistance du x86 : l'argument System/360 l'anticipe — un ISA qui accumule assez de binaires devient difficile à abandonner, parce que le logiciel dépend du *contrat*, pas de l'implémentation. Les détails microarchitecturaux modernes (traduction en micro-ops) sont pour plus tard dans la carte.

**Essaie maintenant.** Le mini-CPU ci-dessous est un tout petit ISA : opcode 4 bits, opérande 4 bits, seize mots. Enchaîne le programme guidé et regarde fetch / decode / execute — le même contrat, assez petit pour tenir à l'écran.

{{< lab type="mini-cpu" >}}

Ensuite : [Conception du chemin de données]({{< relref "19-datapath-design" >}}).

## Sources

- Amdahl / Blaauw / Brooks — System/360 (1964) : <https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf>
- Patterson & Ditzel — Case for RISC (1980) : <https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/risc.pdf>
- RISC-V Unprivileged ISA 20240411 : <https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf>

---
title: "Du code machine à l'assembleur"
weight: 33
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 32
aliases:
  - /posts/26-from-machine-code-to-assembly/
  - /posts/31-from-machine-code-to-assembly/
  - /posts/32-from-machine-code-to-assembly/
tags: []
summary: "Le binaire brut est ce que le CPU exécute — l'assembleur est la première couche de lisibilité, encore une instruction par mnémonique"
image_prompt: "Side-by-side comparison of raw binary machine code and its assembly mnemonic equivalent, clean textbook diagram style"
video_prompt: "15-second animation: binary instructions transforming into readable assembly mnemonics, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: machine code to assembly mapping table + assembler translation flow"
---

Chaque instruction de la phase CPU — chemin de données, pipeline, ISA — existe finalement comme binaire brut : des motifs de bits que le matériel décode directement. Personne n'écrit des programmes ainsi à grande échelle. L'assembleur est la première abstraction au-dessus de ce binaire.

## Ce qu'est vraiment l'assembleur

L'assembleur donne à chaque instruction un mnémonique lisible — `ADD`, `LDA`, `JMP` — en correspondance un-pour-un avec un motif de bits de code machine. Ce n'est pas « de plus haut niveau » au sens des langages compilés plus tard dans la carte ; il n'y a pas d'abstraction au-dessus des ops matérielles. Chaque instruction assembleur mappe exactement une instruction machine. Ce qu'on gagne : la *lisibilité* et la *référence symbolique*.

Le manuel d'optimisation Intel parle encore, au niveau microarchitecture, de decodeurs qui fournissent des « decoded instruction (micro-ops) » au cœur — la couche lisible humaine reste en amont, au texte assembleur / compilateur. ([Intel Optimization Reference Manual 356477](https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf))

## Le travail de l'assembleur

Un assembleur traduit le texte assembleur en code machine — résoudre les labels en adresses, les mnémoniques en bits d'opcode, empaqueter les opérandes dans les champs d'encodage de l'ISA. Mécanique, largement un-pour-un. Rien n'est optimisé ou restructuré au sens d'un compilateur de langage de haut niveau.

## Pourquoi il devait arriver

Avant l'assembleur, programmer voulait dire entrer du binaire ou, au mieux, des opcodes hex/octal bruts — ingérable au-delà de programmes triviaux. Les labels symboliques seuls étaient transformateurs : insérer ou retirer une instruction, et on ne recalcule plus chaque saut à la main.

## Où l'assembleur compte encore

Le logiciel moderne est écrasamment écrit en langages de plus haut niveau. L'assembleur n'a pas disparu. Les ingénieurs y descendent encore pour raisonner sur exactement ce qu'un compilateur a produit (boucles chaudes, revue de sécurité, reverse engineering), ou pour écrire les couches les plus basses — boot, gestionnaires d'interruption, parties d'un noyau.

**Essaie maintenant.** Le lab mini-CPU ci-dessous : Assemblez le programme guidé, puis Step — chaque mnémonique (`LDI`, `ADD`, `STA`, `OUT`) mappe un-pour-un sur des bits d'opcode.

{{< lab type="mini-cpu" >}}

Ensuite : [Compilateurs et langages de haut niveau]({{< relref path="34-high-level-languages-fortran-cobol-lisp-c" lang="en" >}}).

## Sources

- Intel Optimization Reference Manual 356477 (front-end / micro-ops) : <https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf>

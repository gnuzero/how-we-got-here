---
title: "Compilateurs, JIT et runtimes modernes"
weight: 35
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 34
aliases:
  - /posts/28-compilers-jit-and-modern-language-runtimes/
  - /posts/33-compilers-jit-and-modern-language-runtimes/
  - /posts/34-compilers-jit-and-modern-language-runtimes/
tags: []
summary: "L'AOT compile une fois sans faits runtime ; le JIT attend les chemins chauds — et le GC déplace le coût dans le runtime"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

Les langages de haut niveau existent. Voici la machinerie qui les rend utilisables : le compilateur, qui traduit la source en quelque chose qu'un vrai CPU peut exécuter.

## Le pipeline classique (court)

Lexer → tokens. Parser → arbre de syntaxe abstrait (AST). Analyse sémantique (types, noms non déclarés). La plupart des vrais compilateurs abaissent ensuite vers une **représentation intermédiaire** (IR) — plus uniforme que la syntaxe source, encore indépendante de toute ISA cible — où travaille l'**optimiseur** : élimination de code mort, remontée d'invariants de boucle, inlining… La **génération de code** émet les instructions cibles et alloue les registres.

Backus et al. décrivent déjà, pour FORTRAN 704, un « translator or executive routine […] which effects the translation of FORTRAN language programs into 704 programs », avec pour but un code « as good […] as human coders (but without the errors) ». ([Backus et al. 1957](https://archive.computerhistory.org/resources/text/Fortran/102663113.05.01.acc.pdf))

## Ahead-of-Time vs Just-in-Time

Tout le pipeline une fois *avant* l'exécution : **AOT** — C, FORTRAN classique. **JIT** — Java, JavaScript et apparentés — commence par un interpréteur ou un compilateur de base rapide, puis *à l'exécution* trouve les chemins chauds et les recompile avec une optimisation plus lourde.

L'avantage du JIT : des informations qu'un AOT n'a jamais eues — branches observées, types d'arguments, boucles vraiment chaudes. Le coût est réel : la compilation brûle des cycles pendant l'exécution ; les premières secondes sont souvent plus lentes que le régime établi.

**Notre interprétation** de la tension : AOT privilégie un démarrage prévisible et un coût de compilation payé hors ligne ; JIT privilégie le pic de régime une fois les profils connus — les chapitres temps réel traiteront pourquoi un runtime managé avec GC est souvent en tension avec des délais durs.

## Runtimes : plus que la compilation

Les langages managés (Java, C#, et à des degrés divers JavaScript et Python) associent le compilateur à un runtime plus large — surtout la gestion automatique de la mémoire via *garbage collection*. La complexité bascule dans le runtime : effort manuel échangé contre overhead et, historiquement, des pauses moins prévisibles.

## Voir en direct

La VM ci-dessous est un Linux BusyBox minimal : pas de `gcc`. Elle peut quand même montrer les deux côtés. `hexdump -C /bin/busybox | head -2` : le fichier commence par `7f 45 4c 46` — ELF, format qu'un compilateur et un linker produisent *ahead of time*. Puis donnez le même travail à un interpréteur : une boucle `awk` qui somme 1…1 000 000 — chaque itération à l'exécution, là où un compilateur optimisant peut réduire la boucle à une constante *avant* de lancer le programme.

{{< lab type="vm-terminal" >}}

Ensuite : [Systèmes temps réel et ordonnancement déterministe]({{< relref "36-real-time-systems-and-deterministic-scheduling" >}}).

## Sources

- Backus et al. 1957 : <https://archive.computerhistory.org/resources/text/Fortran/102663113.05.01.acc.pdf>

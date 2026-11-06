---
title: "Langages de haut niveau : FORTRAN, COBOL, Lisp, C"
weight: 34
date: 2026-01-01
draft: false
phase: "4 — Software Foundations: OS, Languages & Real-Time Systems"
series_index: 33
aliases:
  - /posts/27-high-level-languages-fortran-cobol-lisp-c/
  - /posts/32-high-level-languages-fortran-cobol-lisp-c/
  - /posts/33-high-level-languages-fortran-cobol-lisp-c/
tags: []
summary: "Quatre domaines, quatre abstractions — formule, prose métier, listes symboliques, systèmes près du métal"
image_prompt: "Timeline infographic of FORTRAN, COBOL, Lisp, C with characteristic code snippets, clean historical technical infographic"
video_prompt: "20-second animation: a short algorithm expressed in FORTRAN, COBOL, Lisp, and C syntax successively, clean motion graphics"
schematics: "Diagram: language paradigm comparison + language family tree"
---

L'assembleur est une couche un-pour-un sur le code machine — mieux que le binaire brut, encore forcé de penser en instructions et registres. Les langages de haut niveau introduisent autre chose : des abstractions qui ne mappent *pas* un-pour-un sur le matériel. Exprimer *quoi* calculer ; un compilateur (chapitre suivant) figure *comment*.

## FORTRAN : traduction de formules

Le projet FORTRAN commence à l'été 1954 : « reduce by a large factor the task of preparing scientific problems for IBM's next large computer, the 704 » — spécifier une procédure numérique « using a concise language like that of mathematics » et obtenir automatiquement un programme 704 efficace. ([Backus et al., « The FORTRAN Automatic Coding System », 1957 — PDF CHM](https://archive.computerhistory.org/resources/text/Fortran/102663113.05.01.acc.pdf)) La chronologie CHM : une équipe IBM menée par John Backus développe FORTRAN ; « Some programmers were skeptical that FORTRAN could be as efficient as hand coding, but that sentiment disappeared when FORTRAN proved it could generate efficient code. » ([CHM Timeline — 1957 FORTRAN](https://www.computerhistory.org/timeline/1957/))

## COBOL : le métier, pas la science

COBOL (CODASYL, fin des années 1950) vise la paie, la comptabilité, les stocks — pas la science. CHM note le travail antérieur de Grace Hopper : le compilateur B-0 (**FLOW-MATIC**), aussi achevé en 1957, « the first English-language business data processing compiler ». ([CHM Timeline — 1957 MATH-MATIC / FLOW-MATIC](https://www.computerhistory.org/timeline/1957/)) **Notre interprétation** de l'héritage : une part importante des systèmes bancaires, d'assurance et d'État tourne encore sur du COBOL ancien — réécrire ces systèmes est assez cher et risqué pour que beaucoup maintiennent l'original.

## Lisp : un autre paradigme

McCarthy (avril 1960) : « A programming system called LISP (for LISt Processor) has been developed for the IBM 704 computer by the Artificial Intelligence group at M.I.T. » Le système aboutit à une représentation des fonctions récursives partielles sur des *S-expressions*, « independent of the IBM 704 computer, or of any other electronic computer ». ([McCarthy, « Recursive Functions of Symbolic Expressions… », *CACM*, avril 1960](https://www-formal.stanford.edu/jmc/recursive.pdf)) Code et données partagent la même structure de listes — base de décennies de calcul symbolique.

## C : programmation système, près de la machine

Ritchie : C est né « in the early 1970s as a system implementation language for the nascent Unix operating system. Derived from the typeless language BCPL, it evolved a type structure » ; la période la plus créative « occurred during 1972 ». ([Ritchie, « The Development of the C Language » — Bell Labs / Nokia](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/chist.html)) Assez haut niveau pour la productivité, assez près du matériel pour écrire un noyau entier — inhabituel alors. La portabilité d'Unix suit : porter le compilateur C, pas réécrire l'OS en assembleur de chaque cible.

## Le fil commun

Chaque langage optimise une priorité différente. Ce qu'ils partagent, c'est un compilateur qui transforme l'abstraction en code machine sans que le programmeur fasse cette traduction à la main. Ce processus — et ce que signifie concrètement « optimisation » — est le prochain chapitre.

Ensuite : [Compilateurs, JIT et runtimes]({{< relref "35-compilers-jit-and-modern-language-runtimes" >}}).

## Sources

- Backus et al. 1957 (CHM PDF) : <https://archive.computerhistory.org/resources/text/Fortran/102663113.05.01.acc.pdf>
- CHM Timeline 1957 : <https://www.computerhistory.org/timeline/1957/>
- McCarthy 1960 : <https://www-formal.stanford.edu/jmc/recursive.pdf>
- Ritchie — Development of C : <https://www.nokia.com/bell-labs/about/dennis-m-ritchie/chist.html>

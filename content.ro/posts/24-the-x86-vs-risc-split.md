---
title: "Ruptura x86 versus RISC"
weight: 24
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 23
aliases:
  - /posts/19-the-x86-vs-risc-split/
tags: []
summary: "RISC arăta mai curat pe hârtie — blocajul softului și traducerea în µop-uri au ținut x86 deasupra"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

Capitolul 11 a numit CISC și RISC ca filozofii. Aici e ce s-a întâmplat când au concurat comercial — și de ce ISA-ul „mai curat” nu a câștigat singur podeaua desktop/server.

## Argumentul RISC, dintr-un ISA care se declară în tradiție

Manifestul e articolul lui David Patterson și David Ditzel din 1980. Ei propun că tendința spre seturi de instrucțiuni tot mai complexe „is not always cost-effective, and in fact, may even do more harm than good”, și examinează „the case for a Reduced Instruction Set Computer (RISC) being as cost-effective as a Complex Instruction Set Computer (CISC)” (Patterson, D. A., Ditzel, D. R., „The Case for the Reduced Instruction Set Computer”, *ACM SIGARCH Computer Architecture News* 8(6), 1980, pp. 25–33, p. 25; copie [cs.utexas.edu](https://www.cs.utexas.edu/~fussell/courses/cs352h/papers/risc.pdf), accesat 2026-11-05). Măsura complexității pe care o dau e dimensiunea memoriei de control: la DEC, de la 256 × 56 pe PDP-11/40 la 5120 × 96 pe VAX 11/780 (ibid., p. 25). Printre cauze listează *upward compatibility*: instrucțiunile sau modurile de adresare se scot rareori dintr-o arhitectură, deci numărul și complexitatea lor cresc de-a lungul unei serii de calculatoare (ibid., p. 26). Pentru VLSI pe un singur cip, argumentul lor e că aria câștigată de un RISC poate fi folosită pentru cache-uri pe cip, tranzistoare mai mari și mai rapide sau pipelining (ibid., p. 29). Concluzia: „careful pruning of an instruction set leads to a cost-effective implementation” (ibid., p. 31).

Un ISA de azi care se declară în aceeași tradiție e **RISC-V**. Manualul spune că numele a fost ales pentru a reprezenta „the fifth major RISC ISA design from UC Berkeley” (*The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA*, versiunea 20240411, „Preface to Version 2.0”; [PDF](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf), accesat 2026-11-05) și că baza RV32I e „a load-store architecture, where only load and store instructions access memory” (ibid., §2.6). Formatele de bază sunt de lungime fixă 32 de biți, aliniate la 4 octeți; registrele sursă și destinație stau în aceleași poziții „to simplify decoding”, iar bitul de semn al imediatului e mereu bitul 31 „to speed sign-extension circuitry” (ibid., §2.2). Sunt alegeri de ISA făcute explicit pentru o implementare mai simplă.

## Argumentul compatibilității, din 1964

Pe partea cealaltă stă lecția System/360. Amdahl, Blaauw și Brooks au făcut din compatibilitatea strictă pe șase modele, pe un factor de performanță 50, un obiectiv de arhitectură, nu un accident de marketing (Amdahl, G. M., Blaauw, G. A., Brooks, F. P., Jr., „Architecture of the IBM System/360”, *IBM J. R&D*, aprilie 1964, Abstract pct. 4 și introducere; copie [ece.ucdavis.edu](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/IBM360-Amdahl_april64.pdf), accesat 2026-11-05). Odată ce un ISA adună suficient software binar, costul migrării nu e costul unui decodor mai complicat — e costul rescrierii ecosistemului. <!-- Aplicarea acestui argument la x86 e inferență de pe pagina noastră, ancorată în obiectivul de compatibilitate din Amdahl 1964; nu e un citat Intel. -->

## De ce x86 a ținut podeaua

Din sursele deschise rămân trei fapte solide:

1. Un ISA încărcat de software compatibil e greu de abandonat — lecția System/360 de mai sus (Amdahl et al., 1964, Abstract pct. 4).
2. Un ISA RISC modern, proiectat din start pentru decode simplu și load/store, există și e documentat public (manualul RISC-V, §2.2 și §2.6).
3. Implementările x86 actuale traduc intern instrucțiunile: manualul de optimizare Intel descrie „An in-order issue front end that fetches instructions and decodes them into micro-ops”, cu patru decodoare, dintre care primul tratează instrucțiuni de până la patru micro-operații (Intel, *Intel 64 and IA-32 Architectures Optimization Reference Manual*, Vol. 2, 356477-050US, aprilie 2024, §2.1, pp. 2-2 și 2-4; [PDF](https://cdrdv2-public.intel.com/821614/356477-Optimization-Reference-Manual-V2-050.pdf), accesat 2026-11-05).

<!-- NEVERIFICAT: cronologia traducerii x86 → µop-uri (de la Pentium Pro încoace) și cifre comparative de decode între generații | surse încercate: intel-opt-050.pdf (descrie doar microarhitecturile recente) -->

Olukotun et al. (1996) observă în treacăt că procesoarele superscalare dinamice recente (exemplele lor: MIPS R10000, HP PA-8000) folosesc redenumire de registre — prin tabel de mapare sau reorder buffer — și cozi de issue — adică microarhitectură agresivă **deasupra** ISA-ului (Olukotun et al., „The Case for a Single-Chip Multiprocessor”, ASPLOS VII, 1996, §2; `olukotun-1996.pdf`). Morala pe care o tragem noi (inferență, nu citat): diferența de ISA se poate îngusta în implementare; diferența de ecosistem, nu.

## Unde s-a mutat lupta

Capitolul 20 mută camera: pe mobil și embedded contează wații și modelul de licențiere — acolo intră ARM și RISC-V.

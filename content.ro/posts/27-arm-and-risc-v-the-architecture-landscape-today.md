---
title: "ARM și RISC-V: peisajul de arhitecturi azi"
weight: 27
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 26
aliases:
  - /posts/20-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/25-arm-and-risc-v-the-architecture-landscape-today/
  - /posts/26-arm-and-risc-v-the-architecture-landscape-today/
tags: []
summary: "După ce desktop-ul s-a așezat pe x86, lupta s-a mutat pe putere și pe licențiere — ARM a câștigat mobilul; RISC-V mizează pe deschidere"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

Ruptura x86/RISC (capitolul 19) a așezat în mare desktop-ul și serverul clasic. Competiția nu s-a oprit: s-a mutat. Mobilul, embedded-ul și edge-ul pun wații înaintea vârfului pe un singur fir, iar **modelul de afaceri** din jurul unui ISA contează cât encoding-ul.

## ARM: licențiezi arhitectura, nu construiești neapărat fabrica

Pagina de arhitectură Arm descrie contractul clar: „Arm’s architecture specifications are licensed by partners, who create compliant silicon chips based on them” (Arm, „Arm Architecture”, [arm.com/architecture](https://www.arm.com/architecture), accesat 2026-11-05). Arm pretinde „more than 375+ billion devices containing Arm-based chips” și că arhitectura „prevails in the mobile market, powering most smartphones”, aparând și în IoT și în aplicații de învățare automată (ibid.). Cifrele de dispozitive și cota de piață mobilă sunt **afirmații ale vânzătorului**; pe pagină le marcăm ca atare, nu ca măsurătoare independentă.

Despre ce e un ISA, Arm folosește același limbaj pe care l-am văzut la System/360: arhitectura „specifies a set of rules that dictate how the hardware works when a particular instruction is executed. It is a contract between the hardware and the software”; software-ul scris conform specificației rulează la fel pe orice procesor Arm compliant — „the foundation of the portability and compatibility promise” (ibid.). Există și oferte de acces cu „license fees due only when you tape-out” (ibid., secțiunea de oferte / DesignStart pe aceeași pagină).

<!-- NEVERIFICAT (sursele găsite sunt doar secundare: Android Authority, SemiAccurate 2013, Bootlin 2017): distincția detaliată „core license” vs „architecture license” (Apple Silicon etc.) ca taxonomie de business; pagina Arm pe care am deschis-o vorbește despre licențierea specificațiilor și despre parteneri care fac siliciu compliant, fără tabelul de tipuri de licență pe care îl folosesc uneori articolele de presă. -->

## RISC-V: ISA deschis, specificat public

Manualul RISC-V e publicat sub Creative Commons Attribution 4.0 International; versiunea 20240411 pe care o citim e un derivat al versiunilor anterioare Waterman–Lee–Patterson–Asanović, tot sub CC BY 4.0 (*The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA*, versiunea 20240411, pagina de copyright; [PDF](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf), accesat 2026-11-05). Spre deosebire de un ISA licențiat comercial, textul normativ e liber de citit, de implementat și de citat cu atribuire.

Tehnic, RV32I rămâne load/store, cu 32 de registre `x` (x0 cablat la zero), formate fixe de 32 de biți și câmpuri de registru în poziții stabile pentru decode (ibid., §2.1–2.2) — continuitatea argumentului RISC din capitolul 19, acum ca specificație pe care o poate implementa oricine.

## Ce s-a mutat, de fapt

Pe desktop, compatibilitatea binară a cântărit greu (capitolul 19, lecția System/360). Pe mobil, Arm vine cu un ISA licențiat unui ecosistem de parteneri și cu afirmația, a vânzătorului, că domină piața smartphone-urilor (Arm, ibid.). RISC-V mizează pe alt ax: costul zero al citirii specificației și libertatea de a face un nucleu fără un contract de ISA cu un singur proprietar (manualul RISC-V, copyright CC BY 4.0).

Capitolul 21 lasă hardware-ul pe masă și coboară în software-ul de sistem: de ce a apărut primul monitor rezident când CPU-ul scump stătea degeaba între pachetele de cartele.

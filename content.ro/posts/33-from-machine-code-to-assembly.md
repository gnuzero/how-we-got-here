---
title: "De la codul mașină la limbajul de asamblare"
weight: 33
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 32
aliases:
  - /posts/26-from-machine-code-to-assembly/
  - /posts/31-from-machine-code-to-assembly/
  - /posts/32-from-machine-code-to-assembly/
tags: []
summary: "Un simbol scurt pentru fiecare cuvânt binar: ce face un asamblor și de ce a contat"
image_prompt: "Side-by-side comparison of raw binary machine code and its assembly mnemonic equivalent, clean textbook diagram style"
video_prompt: "15-second animation: binary instructions transforming into readable assembly mnemonics, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: machine code to assembly mapping table + assembler translation flow"
---

Un procesor execută numere. Primele capitole ale cărții au arătat cum un cuvânt binar poate fi o dată sau o instrucțiune; acest capitol arată pasul următor: limbajul de asamblare, primul strat de text pe care oamenii l-au pus peste aceste numere.

## Două nume pentru aceeași instrucțiune

Distincția apare deja în *First Draft of a Report on the EDVAC*. Când formulează codul mașinii, von Neumann propune să dea pentru fiecare tip de ciclu minor (cuvântul de 32 de unități al mașinii) atât un „short symbol”, folosit în discuțiile verbale sau scrise despre cod și la pregătirea problemelor, cât și un „code symbol”, adică cele 32 de cifre binare care corespund ciclului (von Neumann, J., *First Draft of a Report on the EDVAC*, 1945, ediția M. D. Godfrey, §15.6, p. 42; [people.csail.mit.edu/brooks/idocs/JvN.pdf](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), accesat 2026-11-05). Simbolul scurt este, în esență, ceea ce numim astăzi mnemonic; codul binar este ceea ce execută mașina.

## Ce face un asamblor

Asamblorul traduce mnemonicele în cuvinte binare după reguli fixe. Specificația RISC-V oferă un exemplu clar, pentru că formatul instrucțiunilor e documentat bit cu bit. Instrucțiunile de tip I au câmpurile, de la bitul cel mai semnificativ, `imm[11:0] | rs1 | funct3 | rd | opcode`, iar ADDI adună valoarea imediată de 12 biți, extinsă cu semn, la registrul rs1 (RISC-V International, *The RISC-V Instruction Set Manual, Volume I: Unprivileged Architecture*, versiunea 20240411, §2.4.1, p. 26). Listarea instrucțiunilor RV32/64G dă pentru ADDI exact acest format, cu `funct3 = 000` și opcode-ul `0010011` (ibid., cap. 34, „RV32/64G Instruction Set Listings”, p. 554).

**Exemplu (calculul nostru, verificat cu un mic script Python, `(5<<20)|(0<<15)|(0<<12)|(1<<7)|0b0010011` = `0x00500093`; nu am rulat un asamblor RISC-V):** instrucțiunea `addi x1, x0, 5` pune valoarea 5 în registrul x1.

| câmp | valoare | biți |
|---|---|---|
| imm[11:0] | 5 | `000000000101` |
| rs1 | x0 | `00000` |
| funct3 | ADDI | `000` |
| rd | x1 | `00001` |
| opcode | OP-IMM | `0010011` |

Puse una după alta, cele 32 de cifre dau cuvântul hexazecimal `0x00500093`.

Asamblorul face și traduceri care nu există în hardware. Specificația spune că `ADDI rd, rs1, 0` implementează pseudo-instrucțiunea de asamblor `MV rd, rs1` (ibid., §2.4.1, p. 26), iar instrucțiunea NOP este codificată ca `ADDI x0, x0, 0` (ibid., §2.4.3, p. 27). Programatorul scrie `mv` sau `nop`; procesorul primește un ADDI.

## De ce a contat

În sistemul CTSS din 1962, asamblorul era o comandă ca oricare alta: comanda `fap` traducea un fișier cu translatorul FAP („assembler”) și adăuga pe banda utilizatorului tabela de simboluri și programul binar (Corbató, F. J. et al., „An Experimental Time-Sharing System”, *Proc. AFIPS 1962 SJCC*, vol. 21, pp. 338–339, lista de comenzi; [cseweb.ucsd.edu/classes/wi19/cse221-a/papers/corbato62.pdf](https://cseweb.ucsd.edu/classes/wi19/cse221-a/papers/corbato62.pdf), accesat 2026-11-05).

Primul Unix arată cât de departe se putea merge doar cu asamblare. Ritchie scrie că fiecare program pentru sistemul Unix original de pe PDP-7 a fost scris în limbaj de asamblare, „bare assembly language”, fără macrouri și fără editor de legături, deci fiecare program trebuia să fie complet în sine (Ritchie, D. M., „The Evolution of the Unix Time-sharing System”, 1984, „High-level languages”; [nokia.com/bell-labs/about/dennis-m-ritchie/hist.html](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html), accesat 2026-11-05). Până la terminarea unui asamblor pe PDP-7, programele erau scrise sub GECOS și aduse pe bandă perforată; după aceea, sistemul s-a putut întreține singur (ibid., „Origins”).

## Unde mai contează

Același text al lui Ritchie notează că, la momentul scrierii, „the only important Unix program still written in assembler is the assembler itself” (ibid., „High-level languages”). Ironia are și o variantă timpurie: pe PDP-7, când a apărut B, „Even the assembler was rewritten in assembler” (ibid.). Asamblarea nu a dispărut, dar s-a retras în locurile unde hardware-ul trebuie atins direct; capitolul 27 urmărește limbajele care au preluat restul.

<!-- NEVERIFICAT: exemplele EN cu x86 (cod de pornire, rutine de întrerupere) nu au sursă deschisă (Intel SDM 403); omise. -->

**Încearcă acum.** Laboratorul mini-CPU de mai jos permite asamblarea programului ghidat și rularea lui pas cu pas: fiecare mnemonic corespunde unor biți de opcode, exact ca în exemplul RISC-V de mai sus.

{{< lab type="mini-cpu" >}}

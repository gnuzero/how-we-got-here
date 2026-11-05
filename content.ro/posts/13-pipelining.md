---
title: "Pipelining"
weight: 18
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 17
tags: []
summary: "Suprapui instrucțiunile pentru debit, apoi hazardurile cer redirecționare (forwarding), așteptări (stall) și tot ce urmează"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

Capitolul 12 s-a încheiat cu o risipă: într-o cale de date cu un singur ciclu, fiecare instrucțiune plătește timpul celei mai lente. Pipelining-ul (execuția în bandă de asamblare) taie drumul în etaje și lasă fiecare etaj să lucreze la altă instrucțiune; calculul ilustrativ de mai jos arată costul și câștigul.

## Ideea, înainte de microprocesoare: Stretch, 1959

Suprapunerea instrucțiunilor nu începe cu RISC. În 1959, Erich Bloch descrie IBM Stretch, un proiect pornit ca să obțină „two orders of magnitude” de îmbunătățire a performanței față de IBM 704, „the then existing 704” (Bloch, E., „The Engineering Design of the Stretch Computer”, *Proceedings of the Eastern Joint Computer Conference*, 1959, pp. 48–58, aici p. 48; PDF scanat [bitsavers.org](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf), accesat 2026-11-05; text obținut de noi prin OCR, vezi SOURCES-B2.md). Bloch scrie că pentru asta sistemul trebuia organizat ca să profite de „every possible overlap of systems function”, de procesarea simultană a operațiilor și de anticiparea evenimentelor, oriunde se putea (ibid., p. 48).

Contrastul pe care îl face e exact cel din capitolul 12. La majoritatea calculatoarelor din ultimii opt ani, „and the 704 is a case in point”, există „a sequential flow of instructions”: după procesare și execuție, următoarea instrucțiune e cerută din memorie (ibid., pp. 49–50, Fig. 4a). La Stretch, în schimb, două cuvinte de instrucțiuni și patru operanzi pot fi aduși simultan, iar execuția se face în paralel cu aducerea (ibid., p. 50, Fig. 4b).

## Etaje suprapuse

Modelul didactic modern are cinci etaje: IF (aducerea instrucțiunii), ID (decodarea și citirea registrelor), EX (ALU), MEM (accesul la memoria de date) și WB (scrierea înapoi). Între etaje stau registre de pipeline. La fiecare front de ceas, fiecare instrucțiune avansează un etaj. <!-- NEVERIFICAT: împărțirea IF/ID/EX/MEM/WB e modelul din manualul Patterson & Hennessy, pe care nu l-am deschis; o folosim ca vocabular, fără cifre preluate. -->

| ciclu → | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| instr. 1 | IF | ID | EX | MEM | WB | | |
| instr. 2 | | IF | ID | EX | MEM | WB | |
| instr. 3 | | | IF | ID | EX | MEM | WB |

Exemplu ilustrativ (inclusiv tabelul de mai sus), continuarea calculului nostru din capitolul 12 (cifre inventate): dacă cele cinci etaje ar dura 200, 100, 150, 200 și 100 de unități, ceasul pipeline-ului e dat de cel mai lent etaj, 200, nu de suma de 750. În regim stabil, ar ieși o instrucțiune la fiecare 200 de unități în loc de 750, adică un debit (instrucțiuni terminate pe unitatea de timp) de 750/200 = 3,75 ori mai mare. Am ignorat costul registrelor de pipeline și orice blocaj, iar etajele inegale explică de ce câștigul nu e 5. Fiecare instrucțiune durează acum 5 × 200 = 1000 de unități de la intrare la ieșire, mai mult decât cele 750 de înainte. Pipelining-ul cumpără debit cu prețul latenței.

## Hazarde: unde se rupe independența

Calculul de mai sus presupune că instrucțiunile nu depind una de alta. Programele reale nu arată așa, iar Bloch descrie problemele deja în 1959.

**Hazard de date.** Bloch dă un exemplu cu trei instrucțiuni: (n) STORE acumulatorul în m, (n+1) LOAD R, (n+2) ADD m. Dacă (n+2) intră în unitatea de look-ahead cât timp STORE-ul încă așteaptă, operandul de la adresa m nu poate fi citit din memorie, pentru că urmează să fie schimbat. Unitatea trebuie să recunoască situația și să „forward” rezultatul instrucțiunii (n), când sosește, la nivelul în care stă (n+2) (Bloch, 1959, p. 51). Aceasta e redirecționarea (*forwarding*), descrisă cu acest cuvânt, între ghilimele, în 1959. Când rezultatul nu e încă disponibil nici pentru redirecționare, instrucțiunea trebuie să aștepte; în engleză, oprirea se numește *stall*. <!-- NEVERIFICAT: termenul și regula generală nu vin de la Bloch, care descrie doar interblocarea de mai jos. --> Bloch descrie un mecanism de contoare interblocate care ține în pas cele patru niveluri ale look-ahead-ului, „preventing out-of-sequence execution of instructions, even if all information for a succeeding one is available, before the previous instruction has been started” (ibid., p. 51).

**Hazard de control.** Un salt condiționat nu își știe destinația până nu e evaluat, dar etajele din față trebuie să aducă ceva între timp. Stretch face un pariu. La salturile condiționate, unitatea de instrucțiuni „makes the assumption that the branch will not be successful”, ceea ce menține fluxul de instrucțiuni continuu (Bloch, 1959, p. 50). Când se dovedește că saltul a fost luat, toate modificările făcute între timp în registrele adresabile trebuie anulate, iar look-ahead-ul funcționează „as a recovery memory” (ibid., p. 51). Lectura noastră: pariul, verificarea și anularea anticipează predicția salturilor din capitolul 14.

**Hazard structural.** Două instrucțiuni vor aceeași resursă în același ciclu, de exemplu o singură memorie pentru instrucțiuni și date. <!-- NEVERIFICAT: nu am un exemplu sursat pentru hazardul structural; îl menționăm doar ca a treia categorie din vocabularul didactic standard. -->

## Cum se vede în ISA: RISC-V

Manualul RISC-V spune că instrucțiunile de transfer al controlului din RV32I „do not have architecturally visible delay slots” (*The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA*, versiunea 20240411 (RV32I 2.1 „Ratified”), §2.5 „Control Transfer Instructions”, p. 28; [PDF](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf), accesat 2026-11-05). Altfel spus, ISA-ul nu expune un detaliu de pipeline pe care programul să trebuiască să-l respecte. Despre salturile condiționate, manualul explică de ce compară direct două registre în loc să folosească *condition codes*: „a combined compare-and-branch instruction fits into a regular pipeline”, evită starea suplimentară și permite ca salturile să fie observate și prezise mai devreme în etajele de aducere a instrucțiunilor („front-end”) (ibid., §2.5.2 „Conditional Branches”, comentariu, pp. 30–31). Tot acolo, manualul numește costul unei predicții greșite: golirea pipeline-ului („flushing pipelines on a branch mispredict”) (ibid.).

## Ce forțează costurile

Fiecare hazard costă cicluri: redirecționarea elimină o parte, așteptările plătesc restul, iar un salt prezis greșit golește pipeline-ul (manualul RISC-V, ibid.). Următoarele capitole tratează predicția salturilor (14), cache-urile (15) și execuția în afara ordinii (16).

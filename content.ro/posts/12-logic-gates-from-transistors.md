---
title: "Porți logice din tranzistori"
weight: 12
date: 2026-01-01
draft: false
phase: "2 — Fizică și dispozitive"
series_index: 11
aliases:
  - /posts/07-logic-gates-from-transistors/
tags: []
summary: "CMOS pune în pereche un nMOS și un pMOS, ca o poartă în repaus să nu lase cale de curent între alimentare și masă"
image_prompt: "Circuit schematic of a CMOS inverter with truth table, clean schematic style"
video_prompt: "20-second animation: CMOS inverter switching states, clean motion graphics"
labs: ["breadboard"]
schematics: "Diagram: CMOS inverter schematic + NAND/NOR gate transistor-level schematics"
---

Capitolul 06 ne-a lăsat cu două tipuri de MOSFET, cu canal n și cu canal p. Aici le punem împreună.

## Inversorul: cea mai mică unitate CMOS

Un inversor CMOS are un tranzistor pMOS între alimentare și ieșire și un tranzistor nMOS între ieșire și masă, cu grilele legate la aceeași intrare. Când intrarea e „1”, conduce nMOS-ul și trage ieșirea la masă („0”). Când intrarea e „0”, conduce pMOS-ul și trage ieșirea la alimentare („1”). <!-- NEVERIFICAT: descrierea topologiei de inversor de mai sus e cea standard din manuale; nu am deschis textul revendicărilor din brevetul Wanlass sau lucrarea ISSCC 1963 ca să citez schema exactă. Faptul istoric al combinării p/n e sursat mai jos. -->

Faptul istoric e documentat. Computer History Museum scrie că, într-o lucrare de conferință din 1963, C. T. Sah și Frank Wanlass de la Fairchild R&D au arătat că circuitele logice care combină tranzistori MOS cu canal p și cu canal n într-o configurație complementară „drew close to zero power in standby mode” (CHM, *The Silicon Engine*, „1963: Complementary MOS Circuit Configuration is Invented”, [link](https://www.computerhistory.org/siliconengine/complementary-mos-circuit-configuration-is-invented/), accesat 2026-11-05). Lucrarea citată de CHM este Wanlass & Sah, „Nanowatt Logic Using Field-Effect Metal-Oxide Semiconductor Triodes”, ISSCC Digest, 20 februarie 1963, pp. 32–33 (ibid., „Contemporary Documents”). <!-- NEVERIFICAT: lucrarea ISSCC 1963 nu a fost deschisă; o citez doar prin lista CHM. --> Wanlass a brevetat ideea: US 3,356,858, „Low stand-by power complementary field effect circuitry”, cu data de prioritate 18 iunie 1963 și acordat pe 5 decembrie 1967 (Google Patents, [US3356858A](https://patents.google.com/patent/US3356858A/en), accesat 2026-11-05).

## De ce rezolvă asta problema puterii

În oricare stare stabilă a inversorului, unul dintre cei doi tranzistori e blocat, deci între alimentare și masă nu există o cale de conducție continuă. Aceasta e logica din spatele formulei din titlul brevetului, *low stand-by power* (Google Patents, US3356858A, ibid.), și a observației CHM despre un consum în repaus „close to zero” (CHM 1963, ibid.). Consumul apare mai ales la comutare. <!-- NEVERIFICAT: fraza despre blocarea unui tranzistor în fiecare stare și fraza despre consumul la comutare sunt raționamentul nostru pe topologia standard, nu citate; descompunerea puterii CMOS în componentă dinamică (≈ C·V²·f) și curent de scurgere nu e citată dintr-o sursă deschisă în această sesiune. -->

Adoptarea a fost lentă, iar CHM explică de ce. CMOS a avut la început limitări de performanță (CHM 1963, subtitlul paginii). RCA a introdus în 1968 primele circuite din familia CD4000 de logică de uz general, iar primele aplicații CMOS de volum mare au fost produsele pe baterii, cum ar fi ceasurile digitale, care nu cereau viteză maximă (ibid.). Potrivit aceleiași pagini, abia până în 1978 combinația dintre litografia mai fină și procesul *silicon-gate* a făcut CMOS competitiv ca performanță cu tehnologiile bipolare și MOS convenționale. Când s-au pus sute de mii de tranzistori pe cip, CMOS a fost cea mai bună soluție pentru densitatea de putere (ibid.).

## O poartă reală, din catalog: NAND-ul TTL 74LS00

Ca să avem cifre măsurabile, luăm o poartă reală, chiar dacă nu e CMOS. Fișa tehnică Texas Instruments SN74LS00 descrie circuitele ca „quadruple, 2-input NAND gates”, adică patru porți NAND cu două intrări într-o capsulă (TI, *SNx400, SNx4LS00, and SNx4S00 Quadruple 2-Input Positive-NAND Gates*, SDLS025D, dec. 1983, rev. mai 2017, §8.1 „Overview”, [PDF](https://www.ti.com/lit/ds/symlink/sn74ls00.pdf), accesat 2026-11-05). Pentru varianta LS, tabelul *Switching Characteristics* (§6.9, la VCC = 5 V, TA = 25 °C, RL = 2 kΩ, CL = 15 pF) dă o întârziere de propagare tPLH tipic 9 ns și maximum 15 ns, iar tPHL tipic 10 ns și maximum 15 ns (ibid., §6.9).

Aceste cifre sunt condiții de test din fișa tehnică, cu o sarcină dată. Nu sunt viteza unei porți dintr-un cip modern, și nici o măsurătoare făcută de noi. Fișa precizează că intrările sunt „TTL compliant” (ibid., §1); familia LS e bipolară, nu CMOS. <!-- NEVERIFICAT: „familia LS e bipolară” nu e formulat explicit în fișa deschisă. --> Exemplul ne servește ca să numim corect mărimea, întârzierea de propagare, pe care o vom aduna în capitolele 08 și 09.

## NAND, NOR și completitudinea funcțională

NAND-ul are o proprietate pe care o poți verifica pe tabelul de adevăr: ieșirea e 0 doar când ambele intrări sunt 1.

| A | B | A NAND B |
|---|---|---|
| 0 | 0 | 1 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

Din el se construiesc toate celelalte funcții. Am verificat noi, rând cu rând, următoarele identități:

- NOT A = A NAND A
- A AND B = (A NAND B) NAND (A NAND B)
- A OR B = (A NAND A) NAND (B NAND B)

Pentru că NOT, AND și OR acoperă orice funcție booleană, NAND singur e funcțional complet. <!-- NEVERIFICAT: faptul că NOT/AND/OR acoperă orice funcție booleană e un rezultat standard de algebră booleană pe care nu l-am citat dintr-o sursă deschisă. --> Rezultatul are o sursă istorică pentru NOR. În 1913, Henry M. Sheffer definește o operație „neither-nor”, pe care o numește „rejection”, și arată că negația și disjuncția pot fi exprimate prin ea: ~p = p|p și p∨q = (p|q)|(p|q) (Sheffer, H. M., „A set of five independent postulates for Boolean algebras, with application to logical constants”, *Transactions of the AMS* 14(4), 1913, pp. 481–488, Teorema 1, pp. 487–488; [PDF ams.org](https://www.ams.org/journals/tran/1913-014-04/S0002-9947-1913-1500960-1/S0002-9947-1913-1500960-1.pdf), accesat 2026-11-05). Operația lui Sheffer este deci NOR; varianta NAND decurge prin dualitate, iar identitățile de mai sus le-am verificat noi pe tabelul de adevăr. <!-- NEVERIFICAT: atribuirea către Peirce nu e citată; n-am deschis sursa primară. -->

**Încearcă acum.** Laboratorul de mai jos se deschide pe o poartă AND: comută cele două intrări și urmărește ieșirea. NAND și NOR sunt primitivele de mai sus; AND se obține compunându-le, conform identităților verificate mai sus. Atinge poarta înainte ca următorul capitol să construiască sumatoare din ele.

{{< lab type="breadboard" height="700" >}}

## Pasul următor

Porțile sunt doar alfabetul. Capitolul 08 le compune în sumatoare și într-un ALU, iar acolo întârzierea de propagare de mai sus nu se mai oprește la o poartă: se adună de-a lungul unui lanț de porți.

---
title: "Relee și logica electromecanică"
weight: 7
date: 2026-01-01
draft: false
phase: "1 — Fundamente: de la calcul mecanic la tuburi vidate"
series_index: 6
tags: []
summary: "Releele au dovedit că logica binară funcționează — și că metalul în mișcare nu ține pasul"
image_prompt: "Technical cutaway of an electromagnetic relay showing coil, armature, and contacts in both open and closed states side by side, labeled diagram style, clean line art on white background"
video_prompt: "20-second animation: relay coil energizing, armature snapping closed, contact points making circuit, slow-motion mechanical movement with visible spark, dark industrial background"
schematics: "Diagram: relay schematic symbol + physical cutaway, plus simple relay-based AND/OR gate circuit"
---

Un releu e aproape jenant de simplu: un electromagnet, o armătură cu arc, un set de contacte. Alimentezi bobina, armătura trage, contactele se închid sau se deschid. Pentru un interval scurt din istoria calculului, asta a fost primitiva de comutare.

## De la contacte la logică booleană

Claude E. Shannon, în teza de master *A Symbolic Analysis of Relay and Switching Circuits* (MIT, semnată 10 august 1937; tipărită ca teză M.S. 1940; PDF deschis de pe [fab.cba.mit.edu](https://fab.cba.mit.edu/classes/862.19/notes/computation/Shannon-1937.pdf), accesat 2026-11-05), pune problema explicit: în circuitele de control — centrală telefonică automată, echipamente industriale — trebuie să analizezi și să *sintetizezi* rețele de contacte de relee (Shannon, 1940, Introduction, pp. 1–2). Metoda lui: fiecare circuit e un sistem de ecuații; calculul pe acele ecuații e „exactly analogous to the Calculus of Propositions used in the symbolic study of logic” (Shannon, 1940, Introduction, p. 2).

Tabelul I din teză fixează analogia (Shannon, 1940, Table I, p. 11):

| Simbol | În circuitele cu relee | În calculul propozițiilor |
|--------|------------------------|---------------------------|
| 0 | Circuitul e închis | Propoziția e falsă |
| 1 | Circuitul e deschis | Propoziția e adevărată |
| X+Y | Conexiune **serie** | Adevărat dacă X sau Y |
| XY | Conexiune **paralel** | Adevărat dacă X și Y |
| X′ | Circuit deschis când X e închis (și invers) | Negarea lui X |

Atenție la convenția lui Shannon: „0 = closed / 1 = open” e alegerea lui de *hinderance*; rezultatul important e că **seria, paralela și contactul inversor** acoperă AND / OR / NOT ale logicii propoziționale clasice (Shannon, 1940, Table I și §§ II). Orice funcție booleană pe care o construiți ulterior în siliciu (Faza 2) o puteți, în principiu, cablă aici cu contacte.

Shannon menționează centralele telefonice automate ca exemplu industrial deja plin de astfel de rețele (Shannon, 1940, Introduction, p. 1). MARICA, mai jos, a fost construită tocmai din relee electromagnetice de tip telefonic (Rosman, 1962, p. 203).

## Z3: program pe bandă, fără salt condiționat

Raúl Rojas, în *How to Make Zuse's Z3 a Universal Computer* (manuscris 5 septembrie 1997; publicat apoi în *IEEE Annals of the History of Computing* 20(3), 1998; PDF deschis de pe [inf.fu-berlin.de](https://www.inf.fu-berlin.de/inst/ag-ki/rojas_home/documents/1997/Universal_Computer.pdf), accesat 2026-11-05), fixează faptele pe care le folosim aici. Z3 a fost construită de Konrad Zuse între 1938 și 1941; putea executa doar secvențe fixe de operații aritmetice în virgulă mobilă (adunare, scădere, înmulțire, împărțire și radical) codate pe bandă perforată; „There is no conditional branching” (Rojas, 1997, Abstract și § Universal Machines, p. 1). Mantisa are precizie de 16 biți pe partea fracționară; numerele sunt normalizate (Rojas, 1997, p. 2).

Rojas arată totuși că un *singur* loop de astfel de instrucțiuni poate simula o mașină Turing cu bandă de lungime mărginită, simulând ramificarea și adresarea indirectă prin mijloace pur aritmetice — deci Z3 e, „at least in principle, as universal as today's computers which have a bounded memory size”, cu prețul umflării enorme a programului pe bandă (Rojas, 1997, Abstract). Asta e ușa de ieșire: nu „Z3 e modernă”, ci „Z3 e universală *în principiu*, cu caveatele spuse”.

<!-- NEVERIFICAT: numărul exact de relee (~2.000–2.600) și frecvența de ceas (~5–10 Hz) apar frecvent în narațiuni secundare; nu apar în Rojas 1997 pe care l-am deschis. Nu le cităm ca fapte. -->

## De ce releele sunt prea lente

Von Neumann, în *First Draft of a Report on the EDVAC* (30 iunie 1945; ediția corectată tipografic de Michael D. Godfrey, *IEEE Annals* 15(4), 1993; PDF deschis de pe [people.csail.mit.edu](https://people.csail.mit.edu/brooks/idocs/JvN.pdf), accesat 2026-11-05), compară explicit elementele tip releu cu tuburile. Timpul de reacție practic al unui releu telegrafic e „of the order of 10 milliseconds … or more”; agregatele cu tuburi vidate au fost găsite fiabile la întârzieri „as short as a microsecond” (von Neumann / Godfrey, *First Draft*, §4.3). Diferența nu e incrementală: e trei ordine de mărime. Nu poți construi un calculator modern util din comutatoare mecanice, oricât de bine proiectate.

Al doilea cost: contactele se uzează. Mii de relee înseamnă mii de puncte de uzură. Viteza și fiabilitatea lovesc aceeași constrângere: piese în mișcare.

## Sidebar: MARICA (Cluj, 1959) — calculator românesc cu relee

La Institutul de Calcul al filialei Cluj a Academiei R.P.R. a fost proiectată și (parțial) construită o mașină automată de calcul cu relee electromagnetice. M. Rosman o descrie în *Mașină automată de calcul cu relee electromagnetice*, lucrare prezentată la Colocviul de analiză numerică din 8–13 decembrie 1960, Cluj, și publicată în *Studii și cercetări matematice* (Cluj), vol. 13, fascicula anexă, 1962 (PDF scanat deschis de pe [ictp.acad.ro/scm/…](https://ictp.acad.ro/scm/journal/article/view/207/207), accesat 2026-11-05; paginația tipărită pe scan: pp. 203–210; pagina de articol ICTP indică 183–191).

Din textul deschis al lui Rosman (1962, p. 203):

- numerele se reprezintă în sistem **binar**, pe **22** de cifre;
- mașina e de tip **paralel**, cu **virgulă fixă**, cu **o adresă**;
- se prevede o viteză de circa **180** de adunări sau scăderi pe minut;
- pe lângă cele patru operații aritmetice, execută și alte operații necesare rulării automate a programelor;
- intrarea e în binar, ieșirea în zecimal;
- la construcție s-au folosit **relee electromagnetice de tip telefonic**;
- numerele binare subunitare sunt reprezentate în **cod invers** (one’s complement); transferul ciclic la adunare/scădere e făcut automat de o linie a sumatorului.

Pagina de istorie a Institutului de Calcul „Tiberiu Popoviciu” confirmă anul experimental **1959**, acronimul MARICA (*Mașina Automată cu Relee a Institutului de Calcul al Academiei*) și trimite la același articol Rosman ca descriere a sistemului ([ictp.acad.ro/marica/](https://ictp.acad.ro/marica/), accesat 2026-11-05). Rosman (1962, p. 204, secțiunea „Construcția mașinii”) împarte mașina în patru blocuri: memorie (M), dispozitiv aritmetic (D.A.), dispozitiv automat de conducere (D.A.C.) și dispozitiv de scoatere (D.S.) — o schemă pe care o puteți citi lângă mill/store din capitolul 01 și lângă CA/CC/M din *First Draft*.

## Podul spre electronică

Releele au dovedit arhitectura: reprezentare binară, porți booleene din comutatoare simple, program ca date pe un mediu separat. Ce nu au putut dovedi e că arhitectura poate rula *repede*. Rezolvarea înseamnă înlocuirea comutatorului mecanic cu ceva care își schimbă starea mișcând electroni, nu metal — tubul vidat, cu prețul puterii și al căldurii. Asta urmează.

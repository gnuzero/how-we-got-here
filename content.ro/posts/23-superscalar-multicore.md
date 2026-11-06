---
title: "Superscalar și multicore"
weight: 23
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 22
aliases:
  - /posts/17-superscalar-multicore/
  - /posts/22-superscalar-multicore/
tags: []
summary: "ILP și puterea lovesc un plafon — industria a mers pe lățime, nu pe un singur fir mai rapid"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

Execuția OoO, pipeline-urile adânci și lățimea superscalară extrag tot mai mult paralelism la nivel de instrucțiune (ILP) din **un** flux. La mijlocul anilor 1990, argumentul că asta nu e cea mai bună folosire a siliciului e deja pe masă.

## Limitele unui superscalar tot mai lat

Kunle Olukotun și colegii de la Stanford scriu în 1996 că fiecare creștere de densitate permite ceasuri mai mari și inovație microarhitecturală, iar tendința părea să fie spre CPU-uri cu issue tot mai lat și cu mai multă execuție speculativă (Olukotun, K., Nayfeh, B. A., Hammond, L., Wilson, K., Chang, K., „The Case for a Single-Chip Multiprocessor”, *Proc. ASPLOS VII*, octombrie 1996, §1 Introduction; copie locală `olukotun-1996.pdf`, accesat 2026-11-05). Ei argumentează împotriva acestei tendințe: din cauza limitărilor de circuit și a cantității limitate de ILP, modelul superscalar „will provide diminishing returns in performance for increasing issue width”; construirea unui CPU superscalar lat și complex „is not the most efficient use of silicon resources” (ibid., §1).

Comparația lor e concretă: un procesor superscalar dinamic cu issue de lățime șase, față de un multiprocesor pe cip cu **4 ×** nuclee de issue doi, pe **aceeași arie de die** (ibid., Abstract). Țin cont de latențe (inclusiv hit-ul de cache), fac floorplan-uri și alocă resursele ca ariile să fie egale, și evaluează pe aplicații întregi, floating-point și multiprogramare într-un mediu realist de sistem de operare (ibid., Abstract).

## Ce arată numerele din 1996

Rezultatele pe care le raportează:

- pe aplicații care **nu** pot fi paralelizate, superscalarul e cu **30%** mai bun decât un singur procesor din multiprocesor (ibid., Abstract);
- pe aplicații cu paralelism fin de tip thread, multiprocesorul poate folosi acel paralelism astfel încât superscalarul e cel mult cu **10%** mai bun (ibid.);
- pe paralelism grosier și pe workload-uri de multiprogramare, multiprocesorul e cu **50–100%** mai bun decât superscalarul lat (ibid.).

Comparația presupune **același** ceas pentru ambele arhitecturi (ibid., §4); autorii argumentează că nuclee mai simple ar putea atinge ceasuri mai mari (ibid., Abstract).

## De ce „lat” în loc de „mai rapid pe un fir”

Mesajul de proiect e direct: pe siliciul disponibil, un multiprocesor pe cip din procesoare mai simple oferă implementare localizată cu ceas mare pentru cod secvențial și comunicare de latență mică între procesoare pentru cod paralel (Olukotun et al., 1996, Abstract). Acolo unde un singur flux nu mai hrănește un issue de lățime șase, celelalte nuclee pot totuși lucra — **dacă** există lucru paralel de împărțit.

Un al doilea argument, de putere, apare explicit la Trevor Mudge în 2001: puterea unui cip CMOS e P = ACV²f + τAVI_short·f + VI_leak, iar primul termen (comutarea dinamică) domină (Mudge, T., „Power: A First-Class Architectural Design Constraint”, *IEEE Computer* 34(4), aprilie 2001, pp. 52–58, ec. (1), pp. 52–53; PDF [tnm.engin.umich.edu](https://tnm.engin.umich.edu/wp-content/uploads/sites/353/2017/12/2001.04.Power-a-First-Class-Architectural-Design-Constraint_Computer.pdf), accesat 2026-11-05). Pentru că tensiunea apare la pătrat, înjumătățirea ei reduce puterea dinamică la un sfert, dar frecvența maximă scade odată cu tensiunea (ibid., p. 53). De aici corolarul lui Mudge: procesarea paralelă „has the potential to cut the power in half without slowing the computation” (ibid., p. 53). <!-- NEVERIFICAT: narativa „power wall” de la mijlocul anilor 2000 legată de un produs anume (Pentium 4 etc.); Olukotun 1996 și Mudge 2001 nu o descriu ca eveniment. Capitolul 36 acoperă zidul ceasului. | surse încercate: olukotun-1996.pdf, mudge-2001.pdf -->


## Detaliu de floorplan (ce costă lățimea)

Olukotun et al. construiesc floorplan-uri pentru superscalarul cu issue șase și pentru multiprocesorul 4×2, extrapolând din MIPS R10000 (Olukotun et al., 1996, §4, Fig. 2 și Table 2). În floorplan-ul superscalarului cu issue șase, logica de issue în afara ordinii ocupă circa 120 mm², aproximativ 30% din die, față de circa 70 mm² (18%) pentru unitățile de execuție; buffer-ele de instrucțiuni cresc de la 48 la 128 de intrări (ibid., §4). La PA-8000, o mașină cu issue patru, coada de issue cu 56 de intrări ocupă deja 20% din aria die-ului (ibid., §2). E motivul cantitativ pentru care preferă mai multe nuclee moderate.

Ei subliniază și faptul că un multiprocesor pe cip păstrează comunicarea între fire pe același die, deci latență mică față de un SMP pe plăci separate (ibid., Abstract: „low latency interprocessor communication for parallel applications”).

## Legătura cu ce am construit până acum

OoO (capitolul 16) și predicția salturilor (capitolul 14) țin un singur nucleu ocupat. Olukotun et al. arată cantitativ când e mai rentabil să pui patru nuclee moderate decât unul foarte lat (ibid., Abstract). Cache-urile private pe nucleu (capitolul 15) și coerența pe bus revin imediat în discuție: multiprocesorul pe cip nu scapă de problema copiilor multiple, doar o aduce pe același die.

Ce urmează în capitolele 18–20 e peisajul de ISA pe care rulează aceste nuclee: mainframe-uri, minicalculatoare, microprocesoare, apoi ruptura x86/RISC și peisajul ARM / RISC-V.

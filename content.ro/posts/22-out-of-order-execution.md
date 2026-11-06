---
title: "Execuția în afara ordinii"
weight: 22
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 21
aliases:
  - /posts/16-out-of-order-execution/
  - /posts/21-out-of-order-execution/
tags: []
summary: "Blochezi doar ce trebuie să aștepte — ideea lui Tomasulo: execuți când ești gata, păstrezi precedențele esențiale"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

Într-un pipeline în ordine (capitolul 13), un hazard de tip load-use ține pe loc tot ce urmează, chiar dacă instrucțiunile de mai departe sunt independente și gata. Execuția în afara ordinii (*out-of-order*, OoO) răspunde: rulează ce e gata; păstrează doar precedențele pe care le cere programul.

Formularea clasică e a lui R. M. Tomasulo, pe zona de virgulă mobilă a IBM System/360 Model 91 (Tomasulo, R. M., „An Efficient Algorithm for Exploiting Multiple Arithmetic Units”, *IBM Journal of Research and Development*, vol. 11, nr. 1, ianuarie 1967, pp. 25–33; copie [courses.grainger.illinois.edu](https://courses.grainger.illinois.edu/ece511/Fa2003/papers/Tomasulo.1967.IBMJRD.pdf), accesat 2026-11-05).

## Problema: mai multe unități, un singur set de registre

După ce timpul de acces la memorie a fost redus prin buffer-e și overlap, și după ce unitatea de instrucțiuni a fost *pipelined* ca să se apropie de o instrucțiune pe ciclu, rămâne de optimizat execuția aritmetică, mai ales în virgulă mobilă (Tomasulo, 1967, Introduction, p. 25). Două obstacole familiare: operațiile individuale nu sunt destul de rapide pentru execuție pur serială, iar o unitate „universală” care face și înmulțire și adunare nu le face pe niciuna la fel de repede ca două unități specializate (ibid.).

Model 91 împarte execuția în zonă de virgulă fixă și zonă de virgulă mobilă, cu un adder și un multiplier/divider pe partea de floating-point (ibid., Introduction, p. 25). În planificare, înmulțirea pe floating-point era luată la șase cicluri, împărțirea la optsprezece și adunarea la două; o lucrare ulterioară din același număr al jurnalului arată cum s-au atins 3, 12 și 2 (ibid., p. 25, cu trimitere la Anderson, S. F. et al., *IBM J. R&D* 11(1), 1967, p. 34).

Diferența față de un simplu overlap fixed/floating e că pe floating-point există **un singur set de acumulatoare** (registrele FLR), deci programele specifică secvențe de operații dependente (ibid., Introduction, p. 25). Obiectivul, scrie Tomasulo, e „to preserve essential precedences while allowing the greatest possible overlap of independent operations” (ibid., p. 25).

## Common Data Bus și etichetarea registrelor

Soluția Model 91 se numește *common data bus* (CDB): o schemă simplă de magistrală comună de date și de etichetare (*tagging*) a registrelor, care permite execuția simultană a instrucțiunilor independente păstrând precedențele esențiale din fluxul de instrucțiuni (Tomasulo, 1967, Abstract, p. 25). CDB îmbunătățește performanța folosind eficient unitățile de execuție „without requiring specially optimized code”; hardware-ul, „by ‘looking ahead’ about eight instructions, automatically optimizes the program execution on a local basis” (ibid., Abstract). Tehnica nu e legată doar de floating-point sau de System/360: „It may be used in almost any computer having multiple execution units and one or more ‘accumulators’” (ibid.).

Unitatea de instrucțiuni mapează toate accesările la memorie într-un format pseudo register-to-register: operanzii din stocare trec prin buffer-ele floating-point (FLB) și prin buffer-ele de store (SDB), astfel încât stiva de operații floating-point (FLOS) vede doar operații între „registre” (ibid., p. 26).

## Stații de rezervare

Fără stații de rezervare, un bit *busy* pe registrul destinație blochează emiterea următoarei instrucțiuni care îl folosește ca sink, chiar când ar putea începe altceva (Tomasulo, 1967, secțiunea despre busy bits / preservation of precedence). Cu stații de rezervare, fiecare unitate de execuție primește un set de registre de control, sink și source: „Each such set is called a reservation station” (ibid., p. 29; ortografia din scan: „reservation sfation”, cu greșeală de tipar). Pe Model 91 există trei stații de adunare și două de multiply/divide (ibid., p. 29). Instrucțiunea se emite într-o stație liberă de tipul potrivit; așteaptă acolo operanzii, nu blochează FLOS-ul pe un singur registru arhitectural.

Principiul de precedență pe care îl enunță Tomasulo e dur: „No floating-point register may participate in an operation if it is the sink of another, incompleted instruction” — adică un registru nu intră într-o operație nouă cât timp e destinația uneia neterminate (ibid., p. 27, „cardinal precedence principle”).

## Tag-uri: redenumirea înainte să se numească așa

Când un operand nu e încă gata, stația nu ține valoarea, ci un **tag**: identificatorul unității (sau al buffer-ului) care o va produce pe CDB (Tomasulo, 1967, secțiunea The Common Data Bus). Când rezultatul apare pe CDB, toate stațiile care așteptau acel tag își copiază valoarea și pot începe. Efectul practic e că două iterații ale unei bucle care scriu „același” registru arhitectural pot fi independente: fiecare scriere e legată de o stație/tag diferit, nu de numele FLR din ISA (ibid., exemplul LOOP 1, p. 29).

Aceasta e esența redenumirii de registre (*register renaming*), chiar dacă Tomasulo nu folosește sintagma modernă: dependențele de nume (două scrieri succesive în R1 fără curgere de date între ele) dispar, rămân doar dependențele adevărate de date.

## Exemplu ilustrativ (calcul propriu, etichetat)

Exemplu ilustrativ, cifre inventate, ca să se vadă ideea, nu ca măsurătoare: fie secvența

1. `LOAD F0 ← Mem[A]` (rezultatul vine târziu din memorie),
2. `ADD F2 ← F0 + F1` (depinde de 1),
3. `MUL F4 ← F6 × F8` (independentă),
4. `ADD F6 ← F4 + F2` (depinde de 2 și 3).

În ordine, 3 așteaptă după 1–2 deși nu are nevoie de ele. Cu stații de rezervare, 3 poate ocupa o stație de multiply și rula de îndată ce F6 și F8 sunt gata; 2 așteaptă tag-ul de la load; 4 așteaptă tag-urile de la 2 și 3. Ordinea de start pe unități poate fi 3, apoi 2, apoi 4 — deci în afara ordinii programului — dar rezultatele ajung în registrele arhitecturale respectând precedențele pe care le-a cerut Tomasulo. <!-- Exemplu ilustrativ; nu e din Model 91. -->


## Fluxul unei instrucțiuni pe Model 91 (floating-point)

Tomasulo descrie cum FLOS decodează tipurile de instrucțiuni pe care le vede ca pseudo register-to-register (Tomasulo, 1967, pp. 26–27):

- **Load.** Buffer-ul care va primi operandul din memorie nu e încă plin la decode; FLOS setează biți de control pe buffer astfel încât, când operandul sosește, conținutul e trimis mai departe (ibid.). Load-ul folosește adder-ul „in order to minimize the buffer outgates and the FLR ingates” (ibid., p. 27).
- **Aritmetică storage-to-register.** Operandul din stocare e tratat ca la load; registrul floating-point, împreună cu operația, e trimis unității; când buffer-ul e plin, unitatea execută și trimite rezultatul la R1 (ibid.).
- **Aritmetică register-to-register.** Două registre floating-point sunt transmise pe cicluri succesive către unitatea potrivită (ibid.).
- **Store.** Tratate ca aritmetica storage-to-register, cu deosebirea că registrul e trimis într-un store data buffer, nu într-o unitate aritmetică (ibid.).

Exemplul de precedență pe care îl dă e un MD (multiply) urmat de un AD pe același sink: fără CDB, al doilea nu poate fi emis cât timp busy-bit-ul sink-ului e pe; cu CDB și tag-uri, al doilea poate fi emis cu tag-ul primului ca sursă așteptată (ibid., pp. 27–29).

## Câte unități hrănesc CDB-ul

Tomasulo numără contribuitorii la CDB: cele șase buffer-e floating-point (FLB 1–6), cele trei stații de adunare (10–12) și cele două stații multiply/divide (8–9) — unsprezece contribuitori în total, deci un tag pe patru biți e suficient pentru a-i identifica (Tomasulo, 1967, p. 30: „Since there are eleven contributors to the CDB, a four-bit [tag]”). Registre de tag există pe fiecare dintre cele patru FLR, pe câmpurile source și sink ale fiecărei stații de rezervare și pe fiecare dintre cele trei Store Data Buffer-e (ibid., p. 30); când FLOS emite o instrucțiune al cărei sink e încă busy, actualizează tag-ul fără a transmite conținutul registrului — transmite „old” tag-ul (ibid.). Un ciclu mai târziu, stația care a terminat cere CDB-ul; controlul de prioritate CDB generează tag-ul unității al cărei rezultat urmează să apară (ibid.).

## De ce contează „fără cod special optimizat”

Abstractul insistă: CDB „improves performance by efficiently utilizing the execution units without requiring specially optimized code” (Tomasulo, 1967, Abstract). Compilatorul sau programatorul nu trebuie să amestece fixed și floating ca să țină unitățile ocupate; hardware-ul, privind înainte circa opt instrucțiuni, optimizează local (ibid.). E punctul de cotitură față de overlap-ul manual din generațiile anterioare (capitolul 13, Stretch): dependențele se rezolvă în hardware, pe măsură ce operanzii apar pe magistrală.

## Dependențe adevărate versus dependențe de nume

Limbajul modern separă:

- **Dependență adevărată de date (RAW):** instrucțiunea B citește un rezultat pe care A încă nu l-a produs — trebuie așteptat (sau forwardat).
- **Dependență de nume (WAR/WAW):** A și B împart un nume de registru arhitectural fără curgere de valoare — ISA-ul are puține nume, compilatorul le reutilizează.

Tomasulo nu folosește acronimele RAW/WAR/WAW, dar mecanismul le tratează: tag-ul și stația fac ca două scrieri succesive în același FLR să fie operații pe resurse fizice diferite (Tomasulo, 1967, exemplul LOOP 1, p. 29). Literatura ulterioară numește asta redenumire: Olukotun et al. scriu direct că „The IBM 360/91 used register renaming” și descriu două implementări moderne — un tabel explicit de mapare arhitectural→fizic (R10000) sau o combinație reorder buffer / coadă de instrucțiuni (PA-8000) (Olukotun et al., 1996, §2).

## Ce nu e încă în Tomasulo 1967

Articolul din 1967 acoperă zona floating-point a Model 91, look-ahead de ordinul a opt instrucțiuni, CDB, tag-uri și stații de rezervare (Tomasulo, 1967, Abstract). Nu descrie un *reorder buffer* modern pentru excepții precise pe întregul pipeline, nici tabele explicite de mapare arhitectural→fizic ca în microprocesoarele de după anii 1990. Smith și Pleszkun definesc în 1988 o întrerupere precisă ca una la care starea salvată corespunde execuției secvențiale, și propun pentru asta „a special buffer called the reorder buffer”, care reordonează rezultatele terminate în afara ordinii „before they modify the process state”, organizat ca „circular buffer with head and tail pointers” (Smith, J. E., Pleszkun, A. R., „Implementing Precise Interrupts in Pipelined Processors”, *IEEE Transactions on Computers* 37(5), mai 1988, pp. 562–573, Abstract p. 562 și §IV p. 566; copie [american.cs.ucdavis.edu](https://american.cs.ucdavis.edu/academic/readings/papers/smithpleszkun.pdf), accesat 2026-11-05).

Olukotun et al. (1996) rezumă deja peisajul ulterior: procesoarele superscalare dinamice recente folosesc redenumire între registre arhitecturale și fizice și o coadă de issue, ca alternativă la stațiile de rezervare ale lui Tomasulo (Olukotun, K. et al., „The Case for a Single-Chip Multiprocessor”, *ASPLOS VII*, 1996, §1–2; copie locală `olukotun-1996.pdf`, accesat 2026-11-05). Capitolul 17 pornește de aici: când fereastra de ILP pe un singur flux nu mai crește rentabil, industria pune mai multe nuclee pe același cip.

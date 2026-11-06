---
title: "Sisteme în timp real și planificarea deterministă"
weight: 35
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 34
aliases:
  - /posts/29-real-time-systems-and-deterministic-scheduling/
  - /posts/34-real-time-systems-and-deterministic-scheduling/
tags: []
summary: "Debitul și echitatea nu sunt termene: timpul real dur cere o limită pe cazul cel mai rău, nu o medie bună"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

Capitolele 21–25 din această fază optimizează pentru debit, echitate sau partajare eficientă. Niciuna nu garantează *când* se termină o anume unitate de lucru. Sistemele în timp real (*real-time*) cer exact această garanție. „Rapid” și „în timp real” sunt proprietăți diferite.

## Rapid nu înseamnă determinist

Un planificator de uz general (capitolele 21–25) urmărește un timp de răspuns bun *în medie* și o împărțire corectă a procesorului. „De obicei rapid” nu este „termină întotdeauna înainte de un termen fix, fără excepții”. Efectele de cache, tratarea întreruperilor sau pauzele de colectare a memoriei (capitolul 28) pot lungi o întârziere. Pentru multe aplicații, variația ocazională nu contează. Pentru un sistem în timp real, ea poate fi tot jocul.

## Termen dur și termen blând

Articolul clasic al lui Liu și Layland definește mediul pe care îl analizează prin cinci ipoteze. Între ele: cererile sarcinilor cu termene dure (*hard deadlines*) sunt periodice, cu interval constant; termenul unei cereri este constrângerea de a termina înainte de următoarea cerere pentru aceeași sarcină; sarcinile sunt independente; timpul de rulare al fiecărei sarcini e constant; sarcinile neperiodice sunt speciale (inițializare sau recuperare) și nu au termene dure critice (Liu, C. L., Layland, J. W., „Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment”, *Journal of the ACM* 20(1), ianuarie 1973, pp. 46–61, aici §3 „The Environment”, ipotezele (A1)–(A5); copie: [cis.upenn.edu/~lee/07cis505/Lec/liu73scheduling.pdf](https://www.cis.upenn.edu/~lee/07cis505/Lec/liu73scheduling.pdf), accesat 2026-11-05).

În acest cadru, un **termen dur** înseamnă că nerespectarea lui face ca sistemul să eșueze în sensul analizei: cererea trebuie îndeplinită înainte de următoarea apariție (ibid., (A2)). Un **termen blând** (*soft*) nu e modelat de articol: în practică, nerespectarea lui degradează calitatea (un cadru video pierdut), fără a fi tratată ca eșec de certificare. Distincția de pe această pagină urmează limba engleză a cărții; cifrele și teoremele vin din Liu & Layland 1973.

## Planificarea pe priorități fixe și rate-monotonic

Algoritmii studiați sunt preemptivi și conduși de priorități: când apare o cerere de prioritate mai mare decât sarcina curentă, aceasta e întreruptă imediat (ibid., §3). Un algoritm e *static* (priorități fixe) dacă prioritățile se atribuie o dată pentru totdeauna; e *dinamic* dacă se schimbă în timp (ibid., §3).

Regula *rate-monotonic* atribuie priorități inverse proporțional cu perioada: sarcina cu perioada cea mai scurtă (deci cu rata cea mai mare) primește prioritatea cea mai mare (ibid., §4, după Teorema 1). Teorema 2 spune că, dacă există vreo atribuire fezabilă de priorități fixe pentru un set de sarcini, atunci și atribuirea rate-monotonic e fezabilă: „no other fixed priority assignment rule can schedule a task set which cannot be scheduled by the rate-monotonic priority assignment” (ibid., §4, textul care introduce Teorema 2; copia UPenn este retipografiată și nu păstrează paginația JACM).


## Instantul critic

Înainte de limita de utilizare, Liu și Layland introduc noțiunea de *critical instant* al unei sarcini: momentul în care o cerere pentru acea sarcină duce la cel mai mare timp de răspuns. Ei arată că acesta e momentul în care cererea coincide cu cereri pentru toate sarcinile de prioritate mai mare (Liu & Layland, 1973, §4, în jurul Teoremei 1). Consecința practică: dacă toate cererile lansate la instantele critice își respectă termenele, atunci atribuirea de priorități e fezabilă pentru acel set (ibid., §4). Exemplul numeric de mai jos verifică exact acest scenariu — toate cererile la \(t = 0\).

Teorema 1 din articol e lema care face legătura: timpul maxim de răspuns al unei sarcini apare când ea e cerută simultan cu toate sarcinile mai prioritare (ibid., Teorema 1). De aici vine și argumentul de optimalitate al rate-monotonic: orice atribuire fezabilă poate fi transformată, prin schimburi de priorități pe perechi adiacente, într-o atribuire rate-monotonic tot fezabilă (ibid., Teorema 2).

## Limita de utilizare: \(n(2^{1/n}-1)\)

Factorul de utilizare al procesorului e \(U = \sum_{i=1}^{m} C_i/T_i\), unde \(C_i\) e timpul de rulare și \(T_i\) perioada sarcinii \(i\) (ibid., §5). Pentru un algoritm cu priorități fixe, *cea mai mică limită superioară* a lui \(U\) e minimul lui \(U\) peste toate seturile care „utilizează pe deplin” procesorul (fezabile, dar orice creștere a unui \(C_i\) le face nefezabile) (ibid., §5).

Teorema 3: pentru două sarcini cu priorități fixe, această limită e \(U = 2(2^{1/2}-1) \approx 0{,}83\) (ibid., Teorema 3). Teorema 5 (care înlătură restricția din Teorema 4 asupra raportului perioadelor) generalizează: pentru \(m\) sarcini cu priorități fixe, limita e

\[
U = m\bigl(2^{1/m} - 1\bigr)
\]

(ibid., Teorema 5). Pentru \(m\) mare, \(U\) tinde la \(\ln 2 \approx 0{,}693\) (ibid., după Teorema 4: „for large \(m\), \(U \approx \ln 2\)”).

**Verificare numerică (calculul nostru):**

| \(m\) | \(m(2^{1/m}-1)\) |
|---|---|
| 1 | 1,0000 |
| 2 | 0,8284 |
| 3 | 0,7798 |
| 4 | 0,7568 |
| 5 | 0,7435 |
| 10 | 0,7177 |
| \(\infty\) | \(\ln 2 \approx 0{,}6931\) |

Valorile pentru \(m=2\) și \(m=3\) coincid cu aproximațiile din articol (\(\approx 0{,}83\) și \(\approx 0{,}78\)) (ibid., demonstrația Teoremei 3: „U = 2(2^{1/2} − 1) ≃ 0.83”, și textul de după Teorema 4: „For m = 3 … ≃ 0.78”).

### Exemplu ilustrativ, verificat pe mână

Trei sarcini periodice, cu priorități rate-monotonic (perioada mai scurtă → prioritate mai mare):

| Sarcină | \(T\) | \(C\) | \(C/T\) |
|---|---|---|---|
| \(\tau_1\) | 2 | 0,5 | 0,25 |
| \(\tau_2\) | 4 | 1 | 0,25 |
| \(\tau_3\) | 8 | 2 | 0,25 |

Utilizarea totală: \(U = 0{,}75\). Limita pentru \(m=3\): \(3(2^{1/3}-1) \approx 0{,}7798\). Cum \(0{,}75 < 0{,}7798\), testul suficient al limitei e trecut (calculul nostru; limita din Teorema 5).

Verificarea la *instantul critic* al lui \(\tau_3\) (toate cererile la \(t=0\)), pe intervalul \([0,8]\):

- \(\tau_1\) cere la 0, 2, 4, 6 → \(4 \times 0{,}5 = 2\);
- \(\tau_2\) cere la 0, 4 → \(2 \times 1 = 2\);
- \(\tau_3\) cere \(C_3 = 2\);

cererea totală \(2+2+2 = 6 \le 8\). Deci, pe acest interval, timpul disponibil acoperă cererea (calculul nostru, pe modelul „critical time zone” din ibid., §4–§5). Exemplul e ilustrativ: perioadele și duratele nu apar în articol.

**Cazul-limită pentru două sarcini (tot calculul nostru, după demonstrația Teoremei 3):** la \(T_1 = 2\), \(T_2 = 2\sqrt{2} \approx 2{,}828\) (raportul \(\sqrt{2}\), adică \(f = \sqrt{2}-1\)), pe frontiera dintre cele două cazuri din demonstrație obținem \(C_1 = T_2 - T_1 \approx 0{,}828\), \(C_2 = T_2 - 2C_1 \approx 1{,}172\), deci \(U = C_1/T_1 + C_2/T_2 = 2(\sqrt{2}-1) \approx 0{,}8284\), exact limita din Teorema 3.

## Deadline-driven (EDF): utilizare până la 1

Secțiunea 7 introduce algoritmul *deadline driven*: prioritatea unei sarcini e dată de termenul cererii ei curente — cea cu termenul cel mai apropiat e cea mai prioritară (ibid., §7). Este un algoritm dinamic. Teorema 7: pentru un set de \(m\) sarcini, algoritmul e fezabil dacă și numai dacă

\[
\sum_{i=1}^{m} \frac{C_i}{T_i} \le 1
\]

(ibid., Teorema 7). Deci, sub ipotezele articolului, planificarea după termenele curente (azi numită de obicei EDF, *Earliest Deadline First*) poate folosi procesorul pe deplin; prioritățile fixe rate-monotonic, nu (limita \(\ln 2\) la \(m\) mare).

## Costul comutării și combinațiile

Articolul notează că limita \(\ln 2\) e nedorită în practică, pentru că la ea se mai adaugă costul comutării între sarcini, care tot trebuie numărat (Liu & Layland, 1973, §6 „Relaxing the Utilization Bound”). Una dintre căile simple de a aduce limita la 1 e să faci perioadele armonice (\(T_m/T_i\) întreg); alta e să pui în buffer sarcinile de prioritate joasă și să le relaxezi termenele dure; „a better solution” e atribuirea dinamică de priorități — exact algoritmul deadline-driven din §7 (ibid., §6). Secțiunea 8 a articolului discută și o combinație între priorități fixe și deadline-driven; pe această pagină rămânem la cele două extreme, care acoperă legătura cu capitolul 30 (inversiunea de prioritate apare la sincronizare, în afara modelului (A3) de independență).

## De ce un alt fel de sistem de operare

Garantarea acestor proprietăți cere un sistem de operare construit în jurul cazului cel mai rău — un RTOS (*Real-Time Operating System*) — nu linia de debit/echitate din capitolele 21–25. Liu & Layland lucrează pe un singur procesor, cu preempțiune și fără dependențe între sarcini (ibid., §3). În practică apar și mutex-uri, moștenirea priorității și inversiunea de prioritate; capitolul 30 le arată pe Pathfinder.

Laboratorul mini-CPU e locul în care timpul fiecărei instrucțiuni e numărabil pe hardware simplu — predictibilitatea pe care proiectarea RTOS încearcă să o păstreze când sistemele se complică.

{{< lab type="mini-cpu" >}}

**Ieșire:** C. L. Liu și James W. Layland, „Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment” (*Journal of the ACM*, 1973) — articolul primar din spatele planificării rate-monotonic și al analizabilității clasice în timp real dur.

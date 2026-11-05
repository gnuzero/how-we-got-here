---
title: "Cache-uri"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 19
aliases:
  - /posts/15-caches/
tags: []
summary: "Localitatea face ierarhia de memorie să meargă; asociativitatea și coerența sunt prețul sincerității"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

Capitolul 10 a așezat ierarhia: registre, memorie rapidă mică, DRAM, stocare. Cache-ul e locul unde tranzacția „capacitate contra viteză” decide performanța procesorului. Premisa e empirică: programele reale au **localitate**.

## „Slave memory”: Wilkes, 1965

Maurice Wilkes numește *slave memory* o memorie rapidă care „automatically accumulates to itself words that come from a slower main memory, and keeps them available for subsequent use without it being necessary for the penalty of main memory access to be incurred again” (Wilkes, M. V., „Slave Memories and Dynamic Storage Allocation”, *IEEE Transactions on Electronic Computers*, vol. EC-14, nr. 2, aprilie 1965, pp. 270–271, Introduction; copie [cl.cam.ac.uk](https://www.cl.cam.ac.uk/teaching/2425/P56/files/wilkes1965cache.pdf), accesat 2026-11-05). Fiind doar o fracțiune din memoria principală, cuvintele nu pot rămâne acolo la nesfârșit: sistemul trebuie să aibă un algoritm cablat prin care sunt treptat rescrise (ibid.). În împrejurări favorabile, o parte din cuvinte „will survive long enough to be used on subsequent occasions and a distinct gain of speed results” (ibid.).

Wilkes dă un exemplu numeric ilustrativ: o memorie rapidă de, să zicem, 32 000 de cuvinte ca *slave* a unei memorii lente de, să zicem, un milion de cuvinte, astfel încât „in practical cases the effective access time is nearer that of the fast memory than that of the slow memory” (ibid., Summary). Pentru instrucțiuni, descrie un *slave* de 32 de cuvinte pe o memorie principală de 64K: un cuvânt din registrul *r* al memoriei principale e copiat în registrul *r* (mod 32) al *slave*-ului, iar cei 11 biți cei mai semnificativi ai adresei sunt scriși în 11 biți de etichetă (*tag*) și comparați la fiecare acces (ibid., pp. 270–271). Dacă eticheta se potrivește, cuvântul vine din *slave* și nu se mai plătește accesul la memoria mare (ibid.). Separat, pentru o schemă de time-sharing cu o memorie de lucru de 32K pe un miez de un milion de cuvinte, Wilkes adaugă doi biți de etichetă per bloc, care spun dacă blocul a fost copiat și dacă a fost modificat (ibid., p. 271).

Aceasta e ideea de cache pe care o folosim și azi: aduci pe loc ce tocmai ți-a trebuit, ții etichete care spun *ce* e acolo, și la nevoie scrii înapoi ce s-a schimbat.

## Localitate: de ce merită

<!-- NEVERIFICAT: formulările didactice „temporal locality” / „spatial locality” ca termeni standard din Patterson & Hennessy; Wilkes 1965 vorbește despre bucle de instrucțiuni și despre cuvinte folosite din nou, fără aceste etichete. Pe pagină le folosim ca vocabular, fără cifre din manual. -->
Wilkes notează deja că instrucțiunile apar adesea în bucle mici și că un *slave* de instrucțiuni poate aduce „a quite appreciable speeding up” (Wilkes, 1965, p. 270). Ideea generală e aceeași pentru date: ce ai atins recent e probabil să atingi din nou, iar vecinii din memorie vin adesea la rând. De aceea un *miss* aduce de obicei o **linie** întreagă, nu un singur octet. <!-- NEVERIFICAT: lungimea tipică de 64 de octeți e convenție modernă; nu o cităm ca fapt din Wilkes. -->

## Unde poate trăi o linie

Organizările pe care le întâlnesc inginerii se deosebesc după câte locuri posibile are o adresă în cache:

- **Direct-mapped** — un singur loc posibil pe adresă (indexul decide setul, iar setul are o singură cale). Verificarea e rapidă; conflictul apare când două adrese „fierbinți” împart același index și se dau afară una pe alta. Schema lui Wilkes cu *r* mod 32 e exact acest tip (Wilkes, 1965, p. 270).
- **Set-asociativ** — câteva căi pe set; eticheta decide care cale, dacă vreuna.
- **Complet asociativ** — orice linie poate sta oriunde; căutarea e pe toate etichetele.

<!-- NEVERIFICAT: taxonomia direct-mapped / set-associative / fully-associative ca terminologie de manual; nu am deschis un primar care o definește cu aceste trei etichete. -->

La căutare, adresa se desparte în *offset* (octetul din linie), *index* (setul) și *tag* (este linia din set cea pe care o vrem?). Wilkes folosește deja biți de etichetă pe lângă cuvântul de date (ibid., pp. 270–271).

## Coerență când sunt mai multe cache-uri

Un singur procesor cu un singur cache nu are dilema „două copii, două adevăruri”. Pe un bus partajat cu cache privat pe fiecare procesor, da. Mark Papamarcos și Janak Patel descriu problema: dacă același bloc scriibil există în mai multe cache-uri, un procesor își poate modifica copia locală independent de restul sistemului (Papamarcos, M. S., Patel, J. H., „A Low-Overhead Coherence Solution for Multiprocessors with Private Cache Memories”, *Proc. 11th Annual International Symposium on Computer Architecture*, 1984, pp. 348–354, §I; copie locală `mesi-1984.pdf`, accesat 2026-11-05).

Schema pe care o propun folosește biți de stare pe fiecare bloc din cache, fără tabele globale în memoria principală (ibid., Abstract și §II). Stările pe care le discută includ Invalid, Shared-Unmod (partajat, nemodificat), Exclusive și Modified (ibid., §II, enumerarea stărilor). La scriere într-un bloc Shared-Unmod se emite invalidare pe bus; la un Exclusive, scrierea rămâne locală și trece în Modified (ibid., §II). Sweazey și Smith (1986) numesc schema „the Illinois protocol”, defined in [Papa84], și arată că stările ei se pot mapa pe clasa lor de protocoale; numele clasei lor, „MOESI”, e derivat din inițialele stărilor (Sweazey, P., Smith, A. J., „A Class of Compatible Cache Consistency Protocols and their Support by the IEEE Futurebus”, *Proc. 13th ISCA*, 1986, pp. 414–423, Abstract p. 414 și §4.4 p. 420; copie [cs.auckland.ac.nz](https://www.cs.auckland.ac.nz/courses/compsci703s1c/resources/Sweazey.pdf), accesat 2026-11-05). Eticheta „MESI” urmează aceeași convenție de inițiale pentru cele patru stări ale protocolului Illinois. <!-- NEVERIFICAT: o sursă primară care folosește literal acronimul „MESI” pentru protocolul Illinois; nici Papamarcos & Patel 1984, nici Sweazey & Smith 1986 nu îl scriu ca atare. | surse încercate: mesi-1984.pdf, sweazey-smith-1986.pdf -->

Papamarcos și Patel evaluează schema pe un bus *time-shared* și arată că performanța e strâns legată de rata de miss și de cantitatea de partajare între procesoare (ibid., Abstract).

## Legătura cu zidul memoriei

Cache-ul nu anulează diferența de viteză dintre procesor și DRAM; o ascunde atât timp cât localitatea ține. Când nu mai ține, ești din nou pe magistrala lentă — tema capitolului 35.

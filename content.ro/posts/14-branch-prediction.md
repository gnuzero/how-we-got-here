---
title: "Predicția salturilor"
weight: 19
date: 2026-01-01
draft: false
phase: "3 — Construirea unui CPU și arhitecturile lui"
series_index: 18
tags: []
summary: "Golirea pipeline-ului e scumpă — predicția există ca să o facă rară"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

Capitolul 13 a lăsat pe masă costul unui salt greșit: etajele din față trebuie golite. Predicția salturilor (*branch prediction*) e răspunsul: ghicești direcția (și, când e cazul, ținta) destul de devreme încât golirea să fie rară.

## De ce contează

James E. Smith formulează problema în 1981: într-un sistem de înaltă performanță, instrucțiunile de salt condiționat pot rupe fluxul lin al aducerii și al execuției, pentru că un salt luat schimbă locul de unde se aduc instrucțiuni și pentru că emiterea trebuie adesea să aștepte până se cunoaște decizia (Smith, J. E., „A Study of Branch Prediction Strategies”, *Proc. 8th Annual Symposium on Computer Architecture* (ISCA '81), 1981, pp. 135–148, introducere; copie [american.cs.ucdavis.edu](https://american.cs.ucdavis.edu/academic/readings/papers/smith-branch.pdf), accesat 2026-11-05). Pentru a reduce întârzierea, se poate prezice direcția și începe aducerea, decodarea sau chiar emiterea înainte ca decizia să fie cunoscută; o predicție greșită poate însă costa mai mult decât așteptarea (ibid.).

Smith scrie și că nu există un model analitic bun pentru comportamentul salturilor, din cauza variației între aplicații, limbaje și programe individuale, deci a măsurat experimental acuratețea pe urme de instrucțiuni (ibid., Abstract, p. 135).

## Pariuri statice: Stretch, 1959

Ideea de a paria pe o direcție există înaintea tabelelor dinamice. Erich Bloch descrie, pentru IBM Stretch, că la salturile condiționate unitatea de instrucțiuni „makes the assumption that the branch will not be successful”, ceea ce menține fluxul de instrucțiuni continuu (Bloch, E., „The Engineering Design of the Stretch Computer”, *Proc. Eastern Joint Computer Conference*, 1959, p. 50; PDF [bitsavers.org](https://www.bitsavers.org/pdf/ibm/7030/Bloch_EngrDesOfStretch_1959.pdf), accesat 2026-11-05; text prin OCR, vezi SOURCES-B2.md). Când se dovedește că saltul a fost luat, modificările din registrele adresabile trebuie anulate, iar look-ahead-ul funcționează „as a recovery memory” (ibid., p. 51).

Smith numește *statice* strategiile care fac aceeași predicție de fiecare dată când întâlnesc o anumită instrucțiune de salt (Smith, 1981, p. 136). Exemplul său Strategy 1 e „Predict that all branches will be taken”; Strategy 3 e „Predict that only backward branches will be taken” (ibid., p. 136 și p. 137). Despre Strategy 1, Smith notează că dă „typically a success rate of over 50%” (ibid., p. 136).

## Istoric dinamic: ultima execuție

Strategy 2 a lui Smith e dinamică și ieftină: „Always predict that a branch will be decided as on its last execution” (Smith, 1981, p. 137; reluat în Conclusions, p. 141). Altfel spus, un bit de istorie pe salt: ce s-a întâmplat ultima oară. Smith arată și limita: o decizie anormală (de pildă ieșirea dintr-o buclă) produce **două** predicții greșite cu Strategy 2 — la decizia anormală și la următoarea (ibid., p. 137); contoarele din Strategy 7 reduc costul la una (ibid., p. 140). Smith notează că metodele dinamice au tendința să fie mai precise decât cele statice (ibid., Conclusions, p. 141).

## Contorul pe 2 biți (Strategy 7)

Propunerea pe care Smith o recomandă ca alegere practică e Strategy 7: adresezi o memorie RAM cu un hash al adresei saltului și ții acolo **contoare**, nu un singur bit. Predici că saltul e luat dacă bitul de semn al contorului e 0 și că nu e luat dacă e 1; incrementezi la „taken” și decrementezi la „not taken” (Smith, 1981, Strategy 7, p. 140). Strategy 6 e cazul special cu un singur bit de istorie; Strategy 7 o generalizează cu contoare în complement față de doi (ibid.).

Smith raportează că un contor pe **2 biți** dă adesea o acuratețe mai bună decât unul pe un bit, iar trecerea la contoare mai late de 2 biți aduce mai puțin (ibid., p. 140). Contorul la extreme (maxim sau minim) dă predicții de încredere mai mare: dacă e la maxim, ultima predicție „taken” a fost corectă, deci următoarea „taken” e un pariu de încredere ridicată (ibid., p. 140). În concluzii, dintre strategiile fezabile, Strategy 7 a fost cea mai precisă, folosește RAM în loc de memorie asociativă și se adaptează ușor la niveluri de încredere; pentru aplicațiile studiate, Smith o consideră „probably the best choice based on accuracy, cost, and flexibility” (ibid., Conclusions, p. 141).

<!-- NEVERIFICAT: diagrama FSM „strongly/weakly taken/not-taken” din manuale didactice nu apare cu aceste etichete în Smith 1981; pe pagină folosim doar mecanismul de contor pe 2 biți pe care îl descrie el. -->

## Ce urmează după ghicirea direcției

Predicția direcției nu spune *unde* sare programul când e luat. Ținta trebuie cunoscută sau reținută. Lee și Smith descriu în 1984 *branch target buffer* (BTB) ca „a small cache memory associated with the instruction fetch stage of the pipeline”, ale cărui intrări rețin adresa unei instrucțiuni executate anterior, informația pentru predicția direcției și „the most recent target address for that branch” (Lee, J. K. F., Smith, A. J., „Branch Prediction Strategies and Branch Target Buffer Design”, *IEEE Computer* 17(1), ianuarie 1984, pp. 6–22, p. 8; copie [ece.ucdavis.edu](https://www.ece.ucdavis.edu/~vojin/CLASSES/EEC272/S2005/Papers/Lee-Smith_Branch-Prediction.pdf), accesat 2026-11-05). RISC-V notează în comentariul despre salturile condiționate că un compare-and-branch combinat „fits into a regular pipeline” și permite ca salturile să fie observate și prezise mai devreme în front-end, iar costul unei predicții greșite e golirea pipeline-ului („flushing pipelines on a branch mispredict”) (*The RISC-V Instruction Set Manual, Volume I: Unprivileged ISA*, versiunea 20240411, §2.5.2, pp. 30–31; [PDF](https://github.com/riscv/riscv-isa-manual/releases/download/20240411/unpriv-isa-asciidoc.pdf), accesat 2026-11-05).

Cu cât pipeline-ul e mai adânc și mai lat (capitolele 16–17), cu atât golirea de la o predicție greșită aruncă mai multă muncă — motiv pentru care capitolele următoare revin la predicție.

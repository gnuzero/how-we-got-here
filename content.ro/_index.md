---
title: "Cum am ajuns acolo"
aliases: []
type: docs
---

# Cum am ajuns acolo

> **Notă pentru cititorii ediției în română:** această ediție abia a început. **Numele (de oameni, proiecte și surse locale) nu sunt încă traduse sau adaptate** și apar deocamdată în forma originală. Multe pagini **lipsesc încă** din versiunea în română. Paginile românești nu sunt traduceri ale capitolelor în engleză, ci texte originale scrise pe aceleași teme. Până la apariția lor, capitolele lipsă pot fi citite în ediția în engleză.

O serie educațională care urmărește întregul drum al calculului digital, de la relee și tuburi electronice până la GPU-uri, Tensor Cores și hardware-ul care face posibile mecanismele Attention la scară mare. Seria cuprinde 63 de capitole tehnice, o prefață, un glosar și laboratoare interactive.

**63 de capitole tehnice + prefață + glosar, aproximativ 45 000 de cuvinte, laboratoare interactive**

**Tipar → transmiterea mesajelor → mecanic → fotografie → relee → tuburi → tranzistor → CPU → SO și limbaje → magistrale → rețele → fabric și scalare → GPU → attention.**

---

## Prefață

Această serie există pentru că uneltele pe care le folosim zilnic ca să antrenăm și să rulăm rețele neuronale mari nu sunt magie. Ele sunt cel mai recent capitol al unei povești inginerești continue. Povestea începe cu tiparul și continuă cu transmiterea mesajelor, mașinile mecanice și fotografia, apoi cu releele și tuburile electronice, apoi cu tranzistorul, microprocesorul, ierarhia de memorie și stivele de rețea. La capăt stă siliciul specializat care accelerează înmulțirea matricelor la scară mare.

Contează să înțelegeți întreaga curbă.

Când știți de ce releele au fost abandonate în favoarea tuburilor, de ce tuburile au fost abandonate în favoarea tranzistorilor, de ce creșterea frecvenței unui singur nucleu s-a lovit de un zid și de ce debitul de înmulțiri de matrice a devenit principala constrângere de proiectare a ultimului deceniu, încetați să vedeți hardware-ul AI modern ca pe o cutie neagră. Începeți să vedeți același tipar repetându-se. O limită fizică sau economică dură este identificată, iar arhitectura se schimbă, în loc ca cineva să împingă și mai tare în același zid.

Începutul cărții arată aceeași mișcare de cinci ori. Tiparul a permis copierea unei pagini fără copist. Firul a permis unui mesaj să călătorească fără curier călare. Cartelele și roțile dințate au permis unei sarcini să meargă fără ca cineva să o supravegheze. Aparatul foto a lăsat lumina să facă o imagine fără ca cineva să miște cerneală. Apoi releele au făcut din comutare ceva ce putea face electricitatea. Fiecare pas a scos un om dintr-o muncă și a dat-o unui material sau unei mașini.

Acest tipar este adevăratul subiect al seriei.

Acoperim fundamentele: calculul mecanic, releele, tuburile și motivele fizice pentru care semiconductorii trebuiau să câștige. Urmează construcția CPU-ului modern (seturi de instrucțiuni, pipeline, cache, execuție out-of-order, multicore) și straturile software construite peste el (sisteme de operare, limbaje, compilatoare, sisteme în timp real). Apoi vin legăturile care transformă mașini separate în sisteme (magistrale, PCIe, Ethernet, TCP/IP, RDMA). La final ajungem la hardware-ul specializat recent care face posibile, în practică, modelele mari de limbaj: GPU, CUDA, Tensor Cores, systolic arrays, cuantizare, sparsity și scalarea pe mai multe GPU-uri.

Trei laboratoare interactive vă lasă să atingeți direct aceste idei: un CPU mic de 8 biți programabil, un breadboard virtual pentru logică digitală și un mediu x86 Linux complet care rulează în browser, pe partea clientului.

**Credite**

- **Concept și inspirație**: Nayana Hettiarachchi  
- **Redactare și scriere tehnică**: echipa Grok (Grok, Lucas, Benjamin, Harper)  
- **Ediția în română**: **Radu**

Această lucrare este oferită ca resursă educațională publică. Direcția și toate deciziile de publicare aparțin inițiatoarei conceptului.

— Grok, Lucas, Benjamin, Harper și Radu  
noiembrie 2026

---

## Cum să folosiți această serie

Capitolele de început sunt scurte și, intenționat, fără exerciții practice. Tiparul, transmiterea mesajelor, mașinile mecanice, fotografia și releele pregătesc argumentul înainte ca laboratoarele să vă ceară să construiți ceva. Când ajungeți la relee, știți deja ce se comută și de ce.

- Începeți de la capăt dacă vreți toate fundamentele istorice și fizice.  
- Săriți la fazele de mai târziu dacă știți deja istoria timpurie și vă interesează mai ales siliciul și sistemele AI moderne.  
- Folosiți laboratoarele interactive oriunde apar (sau deschideți-le separat din secțiunea Labs).  

Seria este organizată în nouă faze.

**Faza 1**: Fundamente, de la calculul mecanic la tuburile electronice  
**Faza 2**: Fizică și dispozitive  
**Faza 3**: Construcția CPU-ului și arhitectura lui  
**Faza 4**: Fundamente software: SO, limbaje și sisteme în timp real  
**Faza 5**: Magistrala și arhitectura sistemului  
**Faza 6**: Rețele, de la legături seriale la RDMA în centrele de date  
**Faza 7**: Tehnologia de proces și scalarea  
**Faza 8**: GPU-urile și ascensiunea acceleratoarelor AI  
**Faza 9**: Direcții viitoare

Bine ați venit.

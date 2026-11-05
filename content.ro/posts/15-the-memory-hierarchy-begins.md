---
title: "Începutul ierarhiei de memorie"
weight: 15
date: 2026-01-01
draft: false
phase: "2 — Fizică și dispozitive"
series_index: 14
aliases:
  - /posts/10-the-memory-hierarchy-begins/
tags: []
summary: "Un bit în bistabile e prea scump: SRAM cumpără viteză, DRAM cumpără densitate, iar ierarhia repetă același compromis"
image_prompt: "Side-by-side cell diagrams: 6T SRAM vs 1T1C DRAM, labeled, clean semiconductor memory textbook style"
video_prompt: "20-second animation: DRAM capacitor charging then leaking, SRAM holding state statically, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: 6T SRAM cell + 1T1C DRAM cell + memory hierarchy pyramid"
---

Capitolul 09 a construit un bit de memorie din bistabile. Funcționează, dar e scump. Capitolul acesta urmărește momentul în care proiectanții au acceptat că memoria nu poate fi în același timp mare, rapidă și ieftină și au început să o organizeze pe niveluri. Problema reapare la scară modernă în capitolul 35, „Zidul memoriei”.

## 1946: ierarhia scrisă negru pe alb

Ierarhia de memorie nu e o invenție a erei cache-ului. În *Preliminary Discussion of the Logical Design of an Electronic Computing Instrument* (IAS, 1946), Burks, Goldstine și von Neumann încep capitolul despre memorie cu un ideal: o capacitate nelimitată, în care orice cuvânt de 40 de cifre binare să fie disponibil imediat, adică într-un timp mai scurt decât o înmulțire rapidă, pe care o estimează la circa 100 de microsecunde, deci 5–50 de microsecunde pe cuvânt (Burks, Goldstine, von Neumann, IAS, 1946, §4.1; scanare IAS [ias.edu](https://www.ias.edu/sites/default/files/library/Prelim_Disc_Logical_Design.pdf), citită prin OCR, și transcriere HTML [cs.unc.edu](https://www.cs.unc.edu/~adyilie/comp265/vonNeumann.html), accesate 2026-11-05). Imediat după, constată: „It does not seem possible physically to achieve such a capacity. We are therefore forced to recognize the possibility of constructing a hierarchy of memories, each of which has greater capacity than the preceding but which is less quickly accessible” (ibid., §4.1).

Notă despre sursă: scanarea IAS a acestui raport, descărcată pentru lotul 1, e doar imagine și nu am putut extrage text din ea. Citatele de aici vin dintr-o transcriere HTML găzduită la UNC, pe care am citit-o integral (vezi SOURCES-B2.md). În transcriere, simbolul μ apare ca „m”, iar raportul își definește explicit unitatea ca „1 microsecond = 10⁻⁶ seconds” (ibid., înainte de §4).

## De ce nu din bistabile

Autorii calculează costul memoriei din elemente bistabile. O memorie de n cuvinte ar cere „about 40n such elements”, fără comutație, iar pentru câteva mii de cuvinte ar ieși „about 10⁵ flip-flops or analogous elements”, ceea ce „would, of course, be entirely impractical” (Burks et al., 1946, §4.1). De aceea au ales un tub de stocare, Selectron-ul. Fiecare tub ar fi avut o capacitate de 2¹² = 4.096 de cifre binare, iar 40 de tuburi comutate în paralel ar fi dat o memorie de 2¹² cuvinte de 40 de biți (ibid., §4.2–4.4).

Nivelurile următoare sunt descrise la fel de explicit. Pentru problemele care nu încap în 2¹² cuvinte, raportul trece la „the next stage in our storage hierarchy”: un mediu secundar, controlat de mașină, care alimentează memoria electronică cu blocuri de cuvinte. Mediul ales diferă între ediții: scanarea IAS din 1946 vorbește la §4.5 de benzi magnetice și de film, iar transcrierea UNC, care reproduce retipărirea din *Collected Works of John von Neumann*, vol. 5 (Macmillan, 1963), vorbește de sârmă magnetică (ibid., §4.5, ambele texte). Nu preluăm cifrele specifice unei singure ediții. Ultimul nivel e „dead storage”, o bibliotecă de sârme neintegrată cu mașina, care se introduce la nevoie (ibid., §4.6). Avem deci trei niveluri, fiecare mai mare și mai lent decât precedentul, cu blocuri mutate între ele.

## SRAM: rapid, stabil, dar ocupă loc

Memoria semiconductoare a intrat întâi pe nivelurile mici și rapide. Computer History Museum scrie că, până la mijlocul anilor '70, miezurile magnetice de ferită au fost tehnologia RAM dominantă, cu cel mai mic cost pe bit, iar RAM-urile bipolare au intrat pe piață pentru memorii de lucru rapide (*scratchpad*) și memorii tampon (*cache*) de înaltă performanță (CHM, *The Silicon Engine*, „1966: Semiconductor RAMs Serve High-speed Storage Needs”, [link](https://www.computerhistory.org/siliconengine/semiconductor-rams-serve-high-speed-storage-needs/), accesat 2026-11-05). Potrivit aceleiași pagini, Robert Norman a brevetat la Fairchild, în 1963, un design de RAM static semiconductor, iar în 1965 IBM a realizat SP95, un RAM de 16 biți pentru System/360 Model 95 (ibid.). Tot CHM notează că System/370 Model 145, livrat în 1971, a fost primul calculator comercial IBM cu memorie principală semiconductoare (ibid.).

O celulă SRAM ține bitul într-o pereche de inversoare legate în cruce, adică reacția din capitolul 09, plus tranzistori de acces; bitul stă acolo static, cât timp există alimentare. <!-- NEVERIFICAT: întreaga descriere a celulei SRAM nu provine din sursele deschise (pagina CHM 1966 nu descrie celula); numărul de tranzistori al celulei SRAM CMOS clasice (6T) și ordinele de mărime de arie nu provin dintr-o sursă deschisă în această sesiune. -->

## DRAM: dens, ieftin, pretențios

Densitatea a venit de la memoria dinamică. CHM descrie un drum în trepte. Primele DRAM-uri, de la Fairchild și Four Phase (1968–1969) și de la AMS, foloseau 4–6 tranzistori pe bit. Bill Regitz de la Honeywell a propus o celulă cu 3 tranzistori, pe care Joel Karp a implementat-o în procesul Intel cu canal p și poartă de siliciu; după îmbunătățiri propuse de Ted Hoff, a rezultat cipul 1103 (CHM, „1970: MOS Dynamic RAM Competes with Magnetic Core Memory on Price”, [link](https://www.computerhistory.org/siliconengine/mos-dynamic-ram-competes-with-magnetic-core-memory-on-price/), accesat 2026-11-05). Potrivit CHM, 1103, „priced at 1 cent/bit”, a înlocuit rapid din 1970 miezurile magnetice ca memorie principală (ibid.). Cifra de 1 cent/bit e prețul raportat de muzeu, nu un cost de fabricație.

Celula care a câștigat e și mai simplă. Brevetul lui Robert H. Dennard (IBM), „Field-effect transistor memory”, US 3,387,286, depus pe 14 iulie 1967 și acordat și publicat pe 4 iunie 1968 (data tipărită în antetul foilor brevetului), descrie celule formate, într-o variantă, dintr-un singur tranzistor cu efect de câmp și un singur condensator. Grila tranzistorului e legată la linia de cuvânt, sursa la linia de bit, iar drena la o armătură a condensatorului (Google Patents, [US3387286A](https://patents.google.com/patent/US3387286A/en), rezumat, accesat 2026-11-05). Același text spune că, în varianta cu condensator convențional, „the read out is destructive”: citirea golește bitul, care trebuie rescris (ibid.). CHM notează că Mostek a adoptat celula cu un tranzistor a lui Dennard la nivelul de 16K (MK4116), în 1976 (CHM 1970, ibid.).

„Pretențios” are și un al doilea sens: sarcina din condensator se pierde în timp, așa că DRAM-ul trebuie reîmprospătat (*refresh*) periodic. Brevetul lui Dennard o spune direct: „Since the charge on the capacitor does leak off, it is necessary to periodically regenerate the information stored in the memory” (US 3,387,286, descriere, [Google Patents](https://patents.google.com/patent/US3387286A/en), accesat 2026-11-05). Intervalul de refresh nu apare în sursele deschise, așa că nu dăm nicio cifră.

## Ierarhia pe care o pregătește

Paginile CHM deschise arată același compromis ca în 1946: RAM-urile semiconductoare bipolare au intrat întâi pe nivelurile mici și rapide (CHM 1966, ibid.), iar DRAM-ul 1103 a preluat memoria principală pe criteriul prețului (CHM 1970, ibid.). Fiecare nivel are mai multă capacitate și e mai lent decât precedentul, exact formula din §4.1 (Burks et al., 1946). <!-- NEVERIFICAT: regula generală „mai rapid = mai scump pe bit” nu e formulată ca atare în sursele deschise; CHM spune doar că miezurile aveau cel mai mic cost pe bit. -->

Decalajul de viteză dintre logică și DRAM e subiectul din capitolul 35, iar capitolul 15 (cache-urile) arată cum se gestionează automat primele niveluri.

**Încearcă acum.** Laboratorul de mai jos nu conține o celulă de memorie: e aceeași poartă AND de la început. Folosește-l ca să reții deosebirea din capitolul 14: la o poartă, ieșirea urmează imediat intrările; memoria apare abia când ieșirea se întoarce în intrare.

{{< lab type="breadboard" height="700" >}}

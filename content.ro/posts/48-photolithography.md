---
title: "Fotolitografia"
weight: 54
date: 2026-01-01
draft: false
phase: "8 — Noduri de proces și fabricație"
series_index: 53
tags: []
summary: "Difracția cere lungimi de undă tot mai scurte: oglinzile EUV și plasma de staniu au ținut dimensiunile în scădere"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

Capitolul 47 a arătat că fizica unui nod se citește în pitch-uri: cât de strâns sunt așezate porțile, aripioarele și liniile de metal. Capitolul acesta răspunde la întrebarea următoare: cum tipărești pe siliciu linii atât de dese și ce anume te oprește să le tipărești și mai dese. Răspunsul scurt este difracția luminii, iar răspunsul lung trece prin lasere cu excimeri, apă sub lentilă, oglinzi cu peste o sută de straturi și picături de staniu topit lovite de laser.

Termenii pe care inginerii români îi folosesc ca atare și pe care îi păstrez: **fotorezist** (*photoresist*, stratul fotosensibil), **reticul** sau **mască** (*reticle*, *mask*, șablonul cu desenul de tipărit), **scanner** (mașina de expunere), **NA** (*numerical aperture*, apertura numerică), **CD** (*critical dimension*, dimensiunea critică), **DUV** (*deep ultraviolet*), **EUV** (*extreme ultraviolet*), **multiple patterning** (expunere multiplă) și **pelicula** (*pellicle*, membrana de protecție a reticulului).

Sursele deschise integral pentru acest capitol sunt paginile tehnice ASML, toate accesate 2026-11-05: „The Rayleigh criterion” ([link](https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion)), „Light & lasers” ([link](https://www.asml.com/en/technology/lithography-principles/light-and-lasers)), „Lenses & mirrors” ([link](https://www.asml.com/en/technology/lithography-principles/lenses-and-mirrors)), „Pushing k1 further” ([link](https://www.asml.com/en/technology/lithography-principles/pushing-k1-further)), „EUV lithography systems” ([link](https://www.asml.com/en/products/euv-lithography-systems)), „TWINSCAN EXE:5000” ([link](https://www.asml.com/en/products/euv-lithography-systems/twinscan-exe-5000)), „TWINSCAN NXT:2000i” ([link](https://www.asml.com/en/products/duv-lithography-systems/twinscan-nxt2000i)) și articolul „Indistinguishable from magic: the EUV pellicle” (Kate Brunton, ASML, 14 septembrie 2022, [link](https://www.asml.com/en/company/stories/2022/the-euv-pellicle-indistinguishable-from-magic)). Le completează Smith et al., „Water immersion optical lithography for the 45-nm node”, Proc. SPIE 5040, 2003 (n_apa ≈ 1,44 la 193 nm); Born & Wolf, *Principles of Optics* (criteriul Rayleigh clasic R ≈ 0,61 λ/NA, citat și în „Angular resolution”, *Wikipedia*); capitolul *Lithography* al foii de parcurs IRDS 2022 (IEEE, [PDF](https://irds.ieee.org/images/files/pdf/2022/2022IRDS_Litho.pdf), accesat 2026-11-05) și capitolul *More Moore* al aceleiași ediții (IEEE, [PDF](https://irds.ieee.org/images/files/pdf/2022/2022IRDS_MM.pdf), accesat 2026-11-05).

O precizare onestă despre surse: aproape toate cifrele despre mașini vin aici de la ASML, adică de la vânzătorul lor. Le marchez ca **specificații sau afirmații ale producătorului**. IRDS este o sursă independentă de ASML, dar e o foaie de parcurs, adică o proiecție, nu o măsurătoare. Nu am deschis lucrări SPIE sau articole de jurnal despre sursa EUV, așa că descrierea sursei de lumină se limitează strict la ce spune ASML.

## 1. Tipărire cu lumină, apoi construcție

Ideea fotolitografiei se poate spune într-un paragraf. Pe plachetă se întinde un strat de fotorezist; lumina trece printr-un reticul care conține desenul unui strat al cipului; acolo unde lumina atinge rezistul, acesta își schimbă chimia, astfel încât zonele expuse (sau neexpuse) pot fi îndepărtate selectiv; apoi gravarea, depunerea și doparea folosesc acest desen ca să construiască structurile reale (descrierea mea generală a procesului, aceeași cu cea din capitolul englezesc; nu o atribui unei surse primare anume). ASML descrie rolul reticulului ca pe un șablon care conține planul desenului de tipărit pe plachetă (ASML, articolul despre peliculă, 2022). Partea de proiecție micșorează imaginea: sistemele EUV folosesc mai multe oglinzi multistrat care micșorează desenul reticulului de patru ori (ASML, „EUV lithography systems”, secțiunea „Optical column”), iar scannerul DUV NXT:2000i are tot o reducere de 4× (ASML, „TWINSCAN NXT:2000i”, secțiunea „Optics”).

Un cip nu se tipărește dintr-o singură expunere. ASML spune că sistemele EUV sunt folosite pentru cele mai complicate straturi ale unui cip, iar restul straturilor sunt tipărite cu diferite sisteme DUV (ASML, „EUV lithography systems”). Cele două tehnologii, spune ASML, vor fi necesare în paralel încă mulți ani (ASML, „EUV lithography systems”).

## 2. Limita: criteriul lui Rayleigh

Dacă tipărești cu lumină, nu poți tipări detalii oricât de mici, pentru că lumina difractă când trece prin deschideri apropiate de lungimea ei de undă. ASML rezumă limita prin ecuația de rezoluție pe care o numește criteriul lui Rayleigh (ASML, „The Rayleigh criterion”):

```
CD = k1 · λ / NA
```

În această ecuație, CD este dimensiunea critică, adică cea mai mică dimensiune posibilă a unui detaliu, λ este lungimea de undă a luminii folosite, NA este apertura numerică a opticii, care definește câtă lumină poate colecta aceasta, iar k1 este un coeficient care depinde de mulți factori legați de procesul de fabricație (ASML, „The Rayleigh criterion”). ASML dă și limita fizică a coeficientului: k1 = 0,25 (ASML, „The Rayleigh criterion”).

Ecuația are trei pârghii, iar ASML le enumeră pe toate: lungime de undă mai mică, apertură numerică mai mare și k1 împins cât mai aproape de limita fizică (ASML, „The Rayleigh criterion”). Tot ASML precizează că schimbarea lungimii de undă este o schimbare tehnologică majoră, care cere mașini noi, surse de lumină noi și materiale și procese noi, iar între aceste salturi progresul vine din lentile și din reducerea lui k1 (ASML, „The Rayleigh criterion”). Restul capitolului urmărește pe rând cele trei pârghii.

O notă despre termen: în optica clasică, criteriul lui Rayleigh pentru două surse punctiforme (discuri Airy) dă o rezoluție spațială de forma **R ≈ 0,61 · λ / NA** pentru microscop (echivalentul unghiular θ ≈ 1,22 · λ / D) — formulă din Born & Wolf, *Principles of Optics*, și rezumată standard în literatura de optică (vezi și „Angular resolution”, *Wikipedia*, citând Born & Wolf 1999, p. 461, și Rayleigh 1879). Forma **CD = k1 · λ / NA** pe care o folosește ASML este generalizarea litografică, cu k1 un coeficient de proces al cărui plafon fizic e 0,25 (ASML, „The Rayleigh criterion”). Nu sunt aceeași ecuație: 0,61 e pentru criteriul clasic de separare a două puncte; k1 e calibrat pe procesul de tipărire a circuitelor.

## 3. Pârghia 1: lungimea de undă

Pagina ASML despre lumină și lasere dă istoria pârghiei. Primele sisteme ASML foloseau o lampă cu vapori de mercur și lumina albastră de 436 nm, linia *g* a mercurului, cu care se puteau tipări detalii de până la 1 micron (ASML, „Light & lasers”). Trecerea la ultravioletul de 365 nm, linia *i*, a dus dimensiunile sub 1 micron, până la 220 nm (ASML, „Light & lasers”). La mijlocul anilor 1980, cererea de detalii mai mici a dus la laserele cu excimeri, care produc lumină din molecule excitate temporar formate din gaze care în mod normal nu se combină (ASML, „Light & lasers”).

Primele sisteme DUV au folosit lasere cu kripton-fluor (KrF) la 248 nm (ASML, „Light & lasers”). Generația următoare a folosit lasere cu argon-fluor (ArF) la 193 nm, care au permis tipărirea unor detalii de 38 nm (ASML, „Light & lasers”). Lumina EUV are 13,5 nm, iar ASML scrie că această lungime de undă este de peste 14 ori mai scurtă decât lumina DUV (ASML, „Light & lasers”). Verific: 193 / 13,5 ≈ 14,3 (calculul meu), deci afirmația e corectă dacă DUV înseamnă ArF la 193 nm.

| Sursă | λ | Ce spune ASML despre rezoluție |
|---|---|---|
| Mercur, linia g | 436 nm | detalii de până la 1 µm |
| Mercur, linia i | 365 nm | sub 1 µm, până la 220 nm |
| Laser KrF | 248 nm | primele sisteme KrF: 150 nm (față de 280 nm la i-line); sistemele moderne: până la 80 nm |
| Laser ArF | 193 nm | detalii de 38 nm |
| EUV (plasmă de staniu) | 13,5 nm | 13 nm (NA 0,33), 8 nm (NA 0,55) |

Toate valorile din tabel sunt din ASML, „Light & lasers”, cu excepția ultimului rând, care vine din ASML, „EUV lithography systems”. Sunt cifre ale producătorului.

## 4. Pârghia 2: apertura numerică și apa

Apertura numerică măsoară câtă lumină poate colecta și focaliza optica sistemului; o optică mai mare și mai precisă înseamnă un NA mai mare și detalii mai mici (ASML, „Lenses & mirrors”). ASML spune că sistemele sale DUV de cea mai mare rezoluție au sisteme optice înalte de peste 1,2 metri, care cântăresc peste o tonă, și ating un NA de 1,35 (ASML, „Lenses & mirrors”).

Cum poate NA să depășească 1? Răspunsul ASML: în 2003, compania a dezvoltat **litografia prin imersie**, în care lumina este proiectată printr-un strat de apă dintre lentilă și plachetă (ASML, „Lenses & mirrors”). Fără apă, scrie ASML, un NA peste 1 era imposibil, iar cu apă optica ajunge la 1,35 (ASML, „Lenses & mirrors”). Definiția optică este **NA = n · sin θ**, cu n indicele de refracție al mediului dintre lentilă și plachetă (formulare standard; vezi „Numerical aperture”, *Wikipedia*). În aer, n ≈ 1, deci NA < 1; la 193 nm, apa are n ≈ **1,44** (Smith et al., „Water immersion optical lithography for the 45-nm node”, Proc. SPIE 5040, 2003, Abstract — „The refractive index of water at 193nm (1.44)”). De aici plafonul teoretic NA ≤ n ≈ 1,44; scannerul ASML citează 1,35 ca NA de producție.

Un scanner concret: TWINSCAN NXT:2000i este, după ASML, un sistem de imersie cu două mese (*dual-stage*), cu lentilă catadioptrică de NA 1,35 la 193 nm (ASML, „TWINSCAN NXT:2000i”). ASML dă pentru el rezoluții de producție de până la 40 nm cu iluminare *C-quad* și 38 nm cu iluminare *dipole*, pe un câmp de 26 × 33 mm, cu reducere de 4× (ASML, „TWINSCAN NXT:2000i”, secțiunea „Optics”). Sunt specificații ale producătorului.

### Calcul lucrat 1: unde se află imersia ArF față de limită

Acum pot pune cifrele în ecuație. Toate calculele de mai jos sunt ale mele, făcute cu cifrele ASML citate.

- Limita teoretică pentru ArF cu imersie: CD = 0,25 × 193 nm / 1,35 = 35,7 nm (calculul meu, cu k1 = 0,25 de la ASML, „The Rayleigh criterion”, și NA = 1,35 de la ASML, „Lenses & mirrors”).
- k1 efectiv pentru rezoluția de producție a NXT:2000i: k1 = CD · NA / λ = 38 × 1,35 / 193 ≈ 0,266 pentru *dipole* și 40 × 1,35 / 193 ≈ 0,280 pentru *C-quad* (calculul meu, cu cifrele din ASML, „TWINSCAN NXT:2000i”).

Rezultatul arată că imersia ArF lucrează deja foarte aproape de limita fizică k1 = 0,25 (concluzia mea din calcul). Cu o singură expunere, nu mai e loc de câștigat mult (deducția mea).

## 5. Pârghia 3: k1 și „trucurile” de proces

ASML descrie k1 ca pe o colecție a tot ce se mai poate face în procesul de litografie pentru a crește rezoluția, iar cheia este apropierea de limita fizică (ASML, „Pushing k1 further”). Prima unealtă este controlul felului în care lumina lovește reticulul: iluminarea **off-axis** trimite lumina pe reticul sub un unghi, ca să controleze mai bine difracția pe desen (ASML, „Pushing k1 further”). A doua este modelarea fasciculului în diferite „forme de pupilă”, de la puncte simple la desene complexe de puncte, ca să crească contrastul imaginii (ASML, „Pushing k1 further”). În sistemele DUV actuale, iluminatorul FlexRay are o matrice de 4.000 de oglinzi controlabile individual care pot crea instantaneu orice formă de pupilă, iar în sistemele EUV rolul similar îl are iluminatorul FlexPupil (ASML, „Pushing k1 further”). Cele două tipuri de iluminare de la NXT:2000i, *C-quad* și *dipole*, din Secțiunea 4 sunt exemple de astfel de forme de pupilă (legătura mea între cele două pagini ASML).

A treia unealtă e software: **litografia computațională** simulează procesul de fabricație și ajută la proiectarea reticulului, astfel încât mașina să tipărească ce trebuie; tehnica se numește **OPC** (*optical proximity correction*) și e adesea combinată cu optimizarea iluminării (ASML, „Pushing k1 further”). Intuiția, formulată de mine: desenul de pe reticul nu mai seamănă exact cu ce vrei pe plachetă; e „predistorsionat” astfel încât, după difracție, imaginea de pe plachetă să iasă corectă.

## 6. Când nu ajunge o singură expunere: multiple patterning

Ce faci când ai nevoie de un pitch mai strâns decât cel pe care îl poate tipări scannerul dintr-o expunere? IRDS definește **multiple patterning** ca folosirea mai multor expuneri pentru un singur desen, ca să depășești limitele de rezoluție ale mașinii, sau folosirea mai multor pași de proces pentru a crește densitatea desenului prin depuneri și îndepărtări chimice (IRDS 2022 Lithography, §2, p. 2). Prima variantă împarte desenul în mai multe măști; a doua folosește depuneri de straturi pe marginile unui desen inițial ca să dubleze sau să cvadrupleze densitatea liniilor (explicația mea a celor două variante din definiția IRDS; denumirile SADP/SAQP nu apar în textul IRDS pe care l-am deschis, așa că nu le folosesc ca citat).

Multiple patterning are un cost. IRDS More Moore vorbește de costurile în creștere și de complexitatea procesului de multiple patterning și spune că EUV e folosit ca remediu, ca să tipărești reguli strânse în mai puțini pași de proces (IRDS 2022 More Moore, §4.1, p. 6). Iar IRDS Lithography spune că, deși nodurile de 5 nm și 3 nm vor folosi EUV și poate EUV cu expunere multiplă pentru cele mai mici pitch-uri, unele niveluri critice ar putea folosi în continuare **ArF cu imersie și expunere cvadruplă**, mai ales acolo unde rugozitatea marginilor contează și desenele se pretează la asta (IRDS 2022 Lithography, §3, p. 3). Pentru memorii, IRDS More Moore dă un exemplu concret: chiar dacă celula 3D NAND e mare, liniile de metal cer totuși un semipitch de ~20 nm, realizabil doar cu litografie 193i cu expunere dublă (IRDS 2022 More Moore, secțiunea despre 3D NAND).

### Calcul lucrat 2: de ce imersia are nevoie de expunere multiplă

Calcul ilustrativ al meu: limita de o singură expunere a imersiei ArF este, cum am văzut, un CD de ~36 nm la k1 = 0,25, adică un pitch (linie + spațiu egale) de ~72 nm. Tabelul IRDS din capitolul 47 cere pentru nodul „3nm” din 2022 un pitch M0 de 24 nm și un pitch de poartă de 48 nm (IRDS 2022 More Moore, Tabelul MM-7, p. 7). Un pitch de 24 nm este de trei ori mai mic decât pitch-ul minim de ~72 nm al unei singure expuneri ArF (calculul meu). Pe DUV, asemenea pitch-uri se pot obține doar împărțind desenul în mai multe expuneri sau pași, ceea ce IRDS confirmă calitativ când menționează expunerea cvadruplă ArF (IRDS 2022 Lithography, §3, p. 3). Convenția „pitch = 2 × CD” pentru linii și spații egale este o simplificare a mea; în procesele reale, lățimea liniei și a spațiului pot diferi.

## 7. EUV: de la 193 nm la 13,5 nm

Saltul următor de lungime de undă este EUV, la 13,5 nm, pe care ASML îl descrie ca fiind „aproape în domeniul razelor X” (ASML, „EUV lithography systems”). Lumina aceasta are trei consecințe inginerești, toate descrise de ASML.

**Totul în vid.** Lumina EUV este absorbită de orice, chiar și de aer, așa că întregul drum al luminii și tot ce interacționează cu ea, de la sursă la plachetă, trebuie să fie în vid înaintat (ASML, „EUV lithography systems”, secțiunea „Vacuum chamber”).

**Oglinzi, nu lentile.** Pentru EUV nu există lentile, pentru că majoritatea materialelor absorb lumina EUV, așa că ASML a dezvoltat un sistem optic cu oglinzi multistrat ultranetede, într-o cameră vidată (ASML, „Lenses & mirrors”). Fiecare oglindă are peste 100 de straturi de materiale alese pentru a maximiza reflexia EUV (ASML, „Lenses & mirrors”). Oglinzile sunt lustruite la o netezime mai mică decât grosimea unui atom; ASML spune că, dacă oglinda ar avea mărimea Germaniei, cel mai înalt „munte” ar avea doar 1 milimetru (ASML, „Lenses & mirrors”). Optica pentru toate sistemele ASML vine, din anii 1980 târzii, de la partenerul strategic ZEISS (ASML, „Lenses & mirrors”).

**Reticule reflectorizante.** La EUV, reticulele sunt reflectoare multistrat care folosesc interferența pentru a reflecta lumina dinspre desen (ASML, „EUV lithography systems”, secțiunea „Reticle”). Asta e diferit de reticulele DUV, prin care lumina trece (comparația mea; pagina ASML nu descrie explicit reticulele DUV).

### Sursa de lumină: picături de staniu

Nu există un laser comercial care să emită direct la 13,5 nm cu puterea necesară, așa că ASML a construit o sursă de tip **LPP** (*laser-produced plasma*, plasmă produsă cu laser) (ASML, „Light & lasers”). Descrierea ASML: picături de staniu topit, cu diametrul de aproximativ 25 de microni, sunt ejectate dintr-un generator cu 70 de metri pe secundă (ASML, „Light & lasers”). În cădere, fiecare picătură este lovită întâi de un puls laser de intensitate mică, care o aplatizează în formă de clătită, iar apoi de un puls mai puternic, care o vaporizează și creează o plasmă ce emite lumină EUV (ASML, „Light & lasers”). Pagina de produs precizează că laserul este un **laser cu CO₂** care trage două pulsuri separate asupra unei picături de staniu în mișcare rapidă (ASML, „EUV lithography systems”, secțiunea „Light source”). Procesul se repetă de 50.000 de ori pe secundă (ASML, „Light & lasers”; „EUV lithography systems” spune „până la 50.000 de ori pe secundă”).

Ce nu dau din sursele deschise: puterea sursei la punctul de focalizare intermediar, eficiența conversiei din lumina laserului în EUV și durata de viață a colectorului. Nu am deschis nicio lucrare SPIE sau specificație ASML care să le dea cu cifre verificabile aici, așa că le omit intentional.

Un calcul de ordine de mărime, al meu, doar ilustrativ: 50.000 de picături pe secundă înseamnă o picătură la fiecare 20 de microsecunde; la 70 m/s, picăturile succesive sunt la o distanță de 70 m/s × 20 µs = 1,4 mm una de alta, dacă generatorul le produce exact la frecvența de lovire (calculul meu, cu ipoteza că fiecare picătură e lovită; ASML nu spune explicit acest lucru).

IRDS adaugă o observație despre energie: consumul de energie al fabricilor de logică de vârf crește la fiecare nod, cu aproximativ 60% de la nodul N7 la N3; EUV oferă un proces mai simplu, cu mai puțini pași decât expunerea multiplă, dar cerințele de energie ale EUV fac ca folosirea lui să nu economisească energie (IRDS 2022 Lithography, §4.6, p. 8). IRDS menționează, ca direcții de cercetare, lasere cu conversie mult mai bună a electricității în lumină pentru sursele LPP și laserele cu electroni liberi (IRDS 2022 Lithography, §4.6, pp. 8–9).

## 8. NA 0,33 și NA 0,55

Primele sisteme EUV, din seria NXE, au NA 0,33, iar ASML spune că tipăresc detalii cu o rezoluție de 13 nm, inaccesibilă litografiei DUV (ASML, „EUV lithography systems”, secțiunea „NXE systems”). ASML spune că producătorii de cipuri folosesc sistemele NXE pentru a tipări straturile de bază foarte complexe ale nodurilor lor de 7 nm, 5 nm și 3 nm, iar modelul NXE:3400C susține producția în volum la nodurile de 7 și 5 nm (ASML, „EUV lithography systems”).

Generația următoare, EXE, numită **High-NA**, are NA 0,55 și, după ASML, tipărește cu o rezoluție de doar 8 nm (ASML, „EUV lithography systems”, secțiunea „EXE systems”). ASML descrie TWINSCAN EXE:5000 drept primul sistem EUV cu NA 0,55 și afirmă că rezoluția de 8 nm permite tipărirea, dintr-o singură expunere, a unor detalii de 1,7 ori mai mici și deci densități de tranzistori de 2,9 ori mai mari decât cu sistemele NXE (ASML, „TWINSCAN EXE:5000”). Tot ASML afirmă că EXE:5000 are cu 40% mai mult contrast de imagine decât sistemele NXE (ASML, „TWINSCAN EXE:5000”). Sunt afirmații ale producătorului.

Există și un cost de proiectare. Optica cu NA 0,55 este **anamorfică**: micșorează diferit pe cele două axe, ceea ce permite folosirea reticulelor de mărime tradițională, dar cere un câmp de expunere pe jumătate față de sistemele NXE cu NA 0,33 (ASML, „TWINSCAN EXE:5000”). Ca să compenseze, EXE:5000 are mese noi, mai rapide, pentru plachetă și reticul (ASML, „TWINSCAN EXE:5000”).

### Calcul lucrat 3: EUV prin ecuația lui Rayleigh

Toate calculele de mai jos sunt ale mele, cu cifrele ASML citate mai sus.

- Limita teoretică la NA 0,33: CD = 0,25 × 13,5 / 0,33 ≈ 10,2 nm (calculul meu).
- k1 efectiv pentru rezoluția NXE declarată de ASML: k1 = 13 × 0,33 / 13,5 ≈ 0,318 (calculul meu, cu 13 nm de la ASML, „EUV lithography systems”).
- Limita teoretică la NA 0,55: CD = 0,25 × 13,5 / 0,55 ≈ 6,1 nm (calculul meu).
- k1 efectiv pentru rezoluția EXE declarată: k1 = 8 × 0,55 / 13,5 ≈ 0,326 (calculul meu, cu 8 nm de la ASML, „TWINSCAN EXE:5000”).
- Raportul aperturilor: 0,55 / 0,33 ≈ 1,67; raportul rezoluțiilor declarate: 13 / 8 ≈ 1,63 (calculul meu).
- Pătratul lui 1,7 este 2,89 (calculul meu), ceea ce explică cifra ASML de „2,9 ori” densitate: densitatea crește cu pătratul micșorării liniare, dacă ambele direcții se micșorează la fel.

Trei concluzii, ale mele, din calcule. Prima: EUV lucrează la un k1 mai „relaxat” (~0,32) decât imersia ArF (~0,27), adică are mai multă rezervă față de limita fizică. A doua: aproape tot câștigul de la NXE la EXE vine din NA, cum prezice ecuația (1,67 vs 1,63). A treia: „1,7 ori mai mici” e o rotunjire a ASML a acestor rapoarte, iar „2,9 ori” e pătratul ei.

## 9. Ce spune IRDS despre calendar

IRDS confirmă tabloul general: EUV cu NA 0,33 este principalul cal de povară al fabricației de vârf, iar deși un semipitch de 12 nm este rezolvabil optic cu optica de NA 0,33, limitările rezisturilor EUV fac probabilă folosirea expunerii multiple la această dimensiune (IRDS 2022 Lithography, §3, p. 2). Tabelul LITH-2 dă, pentru nodul din 2022 (eticheta „3 nm”, notația G48M24), un semipitch minim de 12 nm, cu EUV NA 0,33 și expunere multiplă ca opțiune principală (IRDS 2022 Lithography, Tabelul LITH-2, p. 3). Pentru 2025, același tabel dă un semipitch minim de 10 nm, cu două opțiuni: EUV NA 0,33 cu expunere multiplă sau EUV NA 0,55 cu expunere unică (IRDS 2022 Lithography, Tabelul LITH-2, p. 3). Începând din 2028, tabelul trece pe semipitch de 8 nm cu EUV NA 0,55 (IRDS 2022 Lithography, Tabelul LITH-2, p. 3).

Legătura cu capitolul 47: semipitch-ul de 12 nm din 2022 corespunde pitch-ului M0 de 24 nm din tabelul More Moore, pentru că 2 × 12 = 24 (calculul meu, comparând IRDS 2022 Lithography, Tabelul LITH-2, cu IRDS 2022 More Moore, Tabelul MM-7). Iar limita teoretică de ~10 nm a NA 0,33 calculată mai sus este cu puțin sub 12 nm, ceea ce explică de ce IRDS spune că 12 nm este „rezolvabil optic” la NA 0,33, dar greu în practică (deducția mea din calculul 3 și din IRDS §3).

IRDS mai notează o problemă care nu apare în ecuația lui Rayleigh: **stochastica**. Pentru nodul „3 nm”, cu semipitch de 12 nm la linii și spații și pitch minim de 34 nm la găurile de contact, IRDS prezisese o doză de expunere de 64 mJ/cm² pentru găurile de contact (IRDS 2022 Lithography, §4.2, p. 5). IRDS citează rezultate raportate de ASML: găuri cu pitch de 40 nm tipărite la 60 mJ/cm² și linii și spații de 13 nm la 50 mJ/cm², în acord cu predicția din 2020 (IRDS 2022 Lithography, §4.2). Același §4.2 leagă defectele stochastice (găuri lipsă sau punți, linii rupte sau lipite) de **aleatoritatea evenimentelor foto-induse** din fotorezist: la doză și rezist date, un detaliu mai mic are mai puține evenimente pe volum, deci mai multe defecte; ca să ții rata de defecte constantă la CD mai mici, doza trebuie să crească (IRDS 2022 Lithography, §4.2, pp. 5–6). Lista de provocări a capitolului menționează explicit și „photon shot noise” la sursele de lumină (IRDS 2022 Lithography, §3). Intuiția pe scurt: fotonii EUV sunt energetici, deci la aceeași doză (energie/arie) ajung mai puțini fotoni decât la DUV, iar fluctuațiile lor se văd ca defecte — raționament pe baza §4.2, nu o măsurătoare proprie. ASML spune, în aceeași direcție, că contrastul mai mare al EXE:5000 reduce numărul defectelor de desen și permite reducerea dozei pe expunere, ceea ce scurtează timpul de tipărire al fiecărui strat (ASML, „TWINSCAN EXE:5000”).

## 10. Măști și pelicule, pe scurt

Particulele sunt dușmanul oricărei tipăriri: o particulă pe reticul se tipărește pe fiecare cip expus. ASML explică rolul peliculei: este o membrană poziționată în mașină chiar sub reticul, care prinde particule minuscule ce altfel s-ar lipi de reticul și ar ajunge tipărite pe plachetă, ducând la cipuri defecte (ASML, „Indistinguishable from magic: the EUV pellicle”, 2022). ASML folosea pelicule de mult timp în sistemele DUV, dar la EUV pelicula trebuia să fie mai subțire și să reziste la temperaturi mult mai mari, ca să lase să treacă lumina de 13,5 nm (ASML, 2022).

Cea mai avansată peliculă ASML descrisă în articol este o membrană de 13 nanometri grosime, care lasă să treacă lumina EUV, deși majoritatea substanțelor o absorb, și rezistă la temperaturi de până la 500 °C în vid înaintat (Brunton / ASML, „Indistinguishable from magic: the EUV pellicle”, 14.09.2022). Istoria ei, după același articol: în 2016, echipa a lansat prima generație de pelicule EUV, cu un strat central de siliciu policristalin pentru rezistență mecanică și mai multe straturi funcționale; ulterior, echipa a trecut la o membrană compozită din silicid, care s-a dovedit atât transmisivă, cât și robustă (ASML, 2022). **Nu** dau aici un procent de transmisie: articolul nu îl publică, iar comunicatele ASML cu o cifră de tip „90%” nu au fost deschise ca PDF verificabil la această verificare.

## 11. Rezumat

Ecuația lui Rayleigh, CD = k1 · λ / NA, explică aproape toată istoria acestui capitol (ASML, „The Rayleigh criterion”). Lungimea de undă a coborât de la 436 nm la 193 nm prin lămpi cu mercur și lasere cu excimeri, apoi la 13,5 nm prin plasmă de staniu (ASML, „Light & lasers”). Apertura numerică a crescut peste 1 prin imersie în apă, până la 1,35 la DUV, iar la EUV de la 0,33 la 0,55 (ASML, „Lenses & mirrors”). Coeficientul k1 a fost împins spre limita lui de 0,25 prin iluminare off-axis, forme de pupilă și OPC (ASML, „Pushing k1 further”), iar calculele mele arată că imersia ArF lucrează deja la k1 ≈ 0,27. Când nici asta nu mai ajunge, intră în joc expunerea multiplă, cu costul și complexitatea ei (IRDS 2022 Lithography, §2–3; IRDS 2022 More Moore, §4.1). Iar capitolul 49 arată ce fac inginerii cu aceste pitch-uri: construiesc tranzistori cu aripioare și foi, nu doar mai mici, ci cu altă formă.

<!--
Surse și note: vezi SOURCES-47-49.md și NOTES-47-49.md în /workspace/freebook/ro-desk/.
-->

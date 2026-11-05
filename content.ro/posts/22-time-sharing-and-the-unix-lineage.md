---
title: "Partajarea timpului și descendența Unix"
weight: 27
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 26
tags: []
summary: "Prelucrarea pe loturi ținea procesorul ocupat; partajarea timpului le-a dat mai multor utilizatori impresia că îl au fiecare: ambiția Multics, apoi simplitatea Unix"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

Un monitor de loturi (capitolul 21) ține procesorul ocupat, dar programatorul așteaptă ore între două încercări. Time-sharing-ul (partajarea timpului) răspunde la altă întrebare: cum lași mai mulți oameni să lucreze *interactiv* pe aceeași mașină scumpă, fiecare cu impresia că o are doar pentru el.

## Problema: ore de așteptare pentru o greșeală mică

Corbató, Merwin-Daggett și Daley scriau în 1962 că, cu tehnicile de monitor de loturi folosite pe majoritatea calculatoarelor mari, fiecare greșeală de program cerea de obicei câteva ore pentru eliminare, dacă nu o zi întreagă (Corbató, F. J., Merwin-Daggett, M., Daley, R. C., „An Experimental Time-Sharing System”, *Proc. AFIPS 1962 Spring Joint Computer Conference*, vol. 21, pp. 335–344, aici p. 335; copie: [cseweb.ucsd.edu/classes/wi19/cse221-a/papers/corbato62.pdf](https://cseweb.ucsd.edu/classes/wi19/cse221-a/papers/corbato62.pdf), accesat 2026-11-05). Alternativa, depanarea direct la consolă, era după ei „grossly wasteful of computer time” (ibid., p. 335). Autorii disting două sensuri ale termenului: unul orientat spre eficiența hardware-ului și cel pe care îl urmăresc ei, orientat spre eficiența *oamenilor* care folosesc calculatorul (ibid., p. 335).

## Trucul de bază: felii scurte de timp, pe rând

Tehnica de bază descrisă în articol: mai multe persoane folosesc simultan calculatorul prin console de tip mașină de scris, iar un program supervizor rulează pe rând fiecare program de utilizator pentru o rafală scurtă, un *quantum* de calcul, în cazul cel mai simplu într-un *round-robin* (ciclu circular) (Corbató et al., 1962, p. 336). Ciclul trebuie să revină destul de des încât fiecare program din memoria rapidă să primească cel puțin un quantum în fiecare interval aproximativ de reacție umană (ibid., p. 336). Autorii notează limita evidentă: cu *n* utilizatori care cer serviciu în același timp, fiecare vede în medie 1/*n* din viteza efectivă a calculatorului (ibid., p. 336).

Același articol enumeră ce trebuie să ofere hardware-ul pentru ca ideea să funcționeze (ibid., p. 336, „Hardware Problems”):

- un mod de **protecție a memoriei**, pentru că programele mai multor utilizatori aflate simultan în memorie se pot strica reciproc sau pot strica supervizorul;
- **relocare dinamică** a tuturor accesărilor la memorie, ca supervizorul să poată rula un program din locuri diferite;
- **capturarea** (*trapping*) instrucțiunilor de intrare-ieșire date de un program de utilizator, ca un utilizator să nu citească date în programul altuia;
- un **ceas care generează o întrerupere** după un interval fix, ca supervizorul să poată opri un program la sfârșitul quantumului.

Aceste patru cerințe sunt, în mic, aceleași pe care le va formaliza memoria virtuală (capitolul 24).

## CTSS: patru utilizatori pe un IBM 7090

Sistemul experimental din articol rula pe IBM 7090-ul centrului de calcul MIT, cu trei mașini de scris Flexowriter atașate și cu două modificări speciale: un ceas contabil cu întreruperi și un mod care permitea protecția memoriei, relocarea dinamică și capturarea instrucțiunilor de I/O (Corbató et al., 1962, p. 337). Partajarea se făcea între patru utilizatori: trei la mașini de scris, în prim-plan, și un al patrulea, pasiv, care rula în fundal un sistem de loturi (ibid., p. 337). Memoria principală era de 32.000 de cuvinte, iar autorii propun un algoritm de planificare pe mai multe niveluri pentru situația în care programele active nu mai încap toate în memorie (ibid., p. 340).

Pagina multicians.org despre CTSS dă o cronologie puțin diferită: o versiune care muta patru utilizatori pe bandă a fost demonstrată pe IBM 709 al MIT în noiembrie 1961, iar la conferința din 1962 software-ul „wasn't quite working on the IBM 7090” (Van Vleck, T., „The IBM 7094 and CTSS”, [multicians.org/thvv/7094.html](https://multicians.org/thvv/7094.html), accesat 2026-11-05). Aceeași pagină spune că dezvoltarea CTSS a început în 1961, condusă de Corbató, Bob Daley și Marjorie Merwin-Daggett, și că centrul de calcul a primit 7090-ul în primăvara lui 1962, înlocuind un 709 (ibid.). Cele două surse nu se contrazic direct, dar diferă ca accent: articolul descrie sistemul pe 7090, pagina retrospectivă plasează prima demonstrație pe 709.

Pagina de istorie Multics adaugă că, până în 1963, CTSS rula pe un IBM 7094 modificat, cu un al doilea banc de memorie de 32K cuvinte, cu două tamburi IBM 2301 pentru *swapping* (mutarea programelor între memorie și tambur) și cu acces de la distanță pentru până la 30 de utilizatori (Multicians, „Multics History”, §2.1.1 „CTSS”, [multicians.org/history.html](https://multicians.org/history.html), accesat 2026-11-05).

Ideea nu era a unui singur grup. Aceeași pagină atribuie propunerea de time-sharing lui Christopher Strachey, într-o lucrare la un congres UNESCO din 1959, și, independent, lui John McCarthy, într-un memoriu intern MIT din 1959 (ibid., §2.0.1 „Predecessors”).

## Multics: ambiția „utilității informatice”

Multics (*Multiplexed Information and Computing Service*) a fost un sistem de operare time-sharing pentru mainframe, început în 1965 și folosit până în 2000 (Multicians, „Multics History”, introducere). Proiectul a pornit ca efort comun al Project MAC de la MIT, al Bell Telephone Laboratories și al diviziei de calculatoare mari a General Electric, condus de profesorul Corbató (ibid., §1 „Summary of Multics”). Sistemul a fost prezentat într-o serie de lucrări la Fall Joint Computer Conference din 1965 (ibid., §1).

Printre cele nouă obiective enumerate de Corbató și Vyssotsky în 1965, după aceeași pagină: folosire comodă de la terminale aflate la distanță, funcționare continuă „analogous to power & telephone services”, un sistem de fișiere intern foarte fiabil și partajare selectivă a informației (ibid., §1.1 „Goals”). Hardware-ul oferea memorie virtuală segmentată, paginată și organizată pe inele (*rings*) de protecție, iar sistemul de operare era scris în PL/I (ibid., §1). Instalația GE-645 pe care a fost implementat Multics ocupa cam cât o casă obișnuită, costa milioane de dolari și rula la 435 KIPS (mii de instrucțiuni pe secundă) (ibid., §1.2.10 „Hardware”).

MIT a început să ofere serviciu time-sharing pe Multics în toamna lui 1969 (ibid., §1). Bell Labs s-a retras din dezvoltare în 1969, iar în 1970 GE și-a vândut divizia de calculatoare către Honeywell (ibid., §1). Ultimul sistem Multics în funcțiune, la apărarea națională canadiană din Halifax, a fost oprit la sfârșitul lui octombrie 2000 (ibid., §1).

## Unix: ce a rămas după retragerea din Multics

Dennis Ritchie descrie perioada 1968–1969 la Bell Labs ca una „somewhat unsettled”, din cauza retragerii lente a laboratoarelor din proiectul Multics și a faptului tot mai evident că Multics nu livra repede un sistem utilizabil (Ritchie, D. M., „The Evolution of the Unix Time-sharing System”, prezentat în 1979, retipărit în *AT&T Bell Laboratories Technical Journal* 63(6), partea 2, octombrie 1984, pp. 1577–1593; [nokia.com/bell-labs/about/dennis-m-ritchie/hist.html](https://www.nokia.com/bell-labs/about/dennis-m-ritchie/hist.html), secțiunea „Origins”, accesat 2026-11-05). Grupul cel mai implicat în începuturile Unix, după Ritchie: K. Thompson, Ritchie, M. D. McIlroy și J. F. Ossanna, printre ultimii de la Bell Labs care mai lucrau efectiv pe Multics (ibid., „Origins”).

În 1969, Thompson, R. H. Canaday și Ritchie au proiectat pe hârtie un sistem de fișiere; cea mai mare parte a proiectului era a lui Thompson (ibid., „Origins”). Thompson a găsit apoi un PDP-7 puțin folosit, a implementat acel sistem de fișiere, a adăugat noțiunea de proces, câteva utilitare și un interpretor de comenzi simplu (*shell*); după ce asamblorul a fost gata, sistemul se putea întreține singur (ibid., „Origins”). Numele „Unix”, un joc de cuvinte pe „Multics”, a fost sugerat de Brian Kernighan abia „well into 1970” (ibid., „Origins”).

Ritchie notează că primul articol publicat despre sistem e din 1974, dar că Unix „was born in 1969 not 1974” (ibid., „Introduction”). Articolul din 1974 al lui Ritchie și Thompson numără trei versiuni: cea mai veche, în jur de 1969–70, pe PDP-7 și PDP-9; a doua, pe PDP-11/20 fără protecție a memoriei; și cea descrisă în articol, pentru PDP-11/40 și /45 (Ritchie, D. M., Thompson, K., „The UNIX Time-Sharing System”, *Communications of the ACM* 17(7), iulie 1974, pp. 365–375, §1; copie recreată de E. A. Brewer: [people.eecs.berkeley.edu/~brewer/cs262/unix.pdf](https://people.eecs.berkeley.edu/~brewer/cs262/unix.pdf), accesat 2026-11-05).

Copia recreată de Brewer păstrează numerotarea originală a paginilor, de la 365 la 375, și antetul „Communications of the ACM, July 1974, Volume 17, Number 7” (ibid.).

### PDP-11 și departamentul de brevete

La începutul lui 1970, grupul a propus cumpărarea unui PDP-11, cu o sumă (aproximativ 65.000 de dolari) cu un ordin de mărime mai mică decât ceruse înainte, și cu un scop concret: un sistem de editare și formatare a textului (Ritchie, 1984, „The advent of the PDP-11”). Comanda a fost plasată în mai; procesorul a sosit la sfârșitul verii, dar discul abia în decembrie (ibid.). În a doua jumătate a lui 1971, sistemul a deservit trei dactilografe de la departamentul de brevete, pe o mașină fără protecție a memoriei și cu un singur disc de 0,5 MB (ibid., „The first PDP-11 system”). Articolul din 1974 dă ca dată februarie 1971 pentru momentul în care Unix pe PDP-11 a devenit operațional și numără de atunci aproximativ 40 de instalații (Ritchie și Thompson, 1974, §1).

### fork, pipe-uri și C

Ritchie scrie că separarea dintre `fork` (crearea unui proces copie) și `exec` (înlocuirea programului rulat) nu era unică pentru Unix: exista deja în sistemul time-sharing de la Berkeley, cunoscut de Thompson (Ritchie, 1984, „Process control”). Prima implementare a apelului `fork` pe PDP-7 a cerut „precisely 27 lines of assembly code” (ibid., „Process control”).

Pipe-urile (*pipes*, canale care leagă ieșirea unei comenzi de intrarea alteia) au apărut în Unix în 1972, la sugestia, „or perhaps insistence”, lui M. D. McIlroy (ibid., „Pipes”). Ritchie respinge ideea că modulele de I/O înlănțuibile din Multics ar fi fost precursorul direct: acelea trebuiau scrise special, pe când „the genius of the Unix pipeline” este că se construiește din aceleași comenzi folosite zilnic (ibid., „Pipes”).

Toate programele de pe Unix-ul original pentru PDP-7 erau scrise în limbaj de asamblare, fără macrouri (ibid., „High-level languages”). Lucrul la ce avea să devină limbajul C a început în 1971, iar în 1973 nucleul a fost rescris în C; Ritchie numește acest moment „the most important watershed” și spune că atunci a fost introdusă și multiprogramarea (ibid., „High-level languages”). Articolul din 1974 plasează rescrierea în C în vara lui 1973 (Ritchie și Thompson, 1974, §2).

### Ieftin, mic, scris în limbaj de nivel înalt

Ritchie și Thompson rezumă rezultatul astfel: Unix poate rula pe hardware care costă doar 40.000 de dolari, iar pentru software-ul principal s-au cheltuit mai puțin de doi oameni-an de muncă (Ritchie și Thompson, 1974, §1). PDP-11/45 al lor avea 144K octeți de memorie cu ferite, din care Unix ocupa 42K (ibid., §2). Abstractul enumeră ce considerau autorii neobișnuit pentru un sistem atât de mic: un sistem de fișiere ierarhic cu volume demontabile, I/O compatibil pentru fișiere, dispozitive și comunicare între procese, procese asincrone, limbaj de comandă selectabil per utilizator și peste 100 de subsisteme, inclusiv o duzină de limbaje (ibid., abstract).

## Ce urmează

Cerințele din articolul CTSS, protecția memoriei și relocarea, devin în capitolul 24 o idee generală: fiecare proces primește propriul spațiu de adrese. Capitolul 23 urmărește GNU și Linux, două proiecte care au refăcut un sistem asemănător cu Unix sub o licență liberă.

<!-- NEVERIFICAT / omis: ramificarea BSD vs. System V din structura EN nu are încă o sursă primară deschisă; secțiunea a fost lăsată deoparte. -->

**Încearcă acum.** Pornește mașina virtuală de mai jos, dă clic pe ecranul negru ca să primească tastatura, apoi rulează `uname`, `whoami` și `ls`: sunt comenzi dintr-un shell de tip Unix, nu o diagramă a unuia.

{{< lab type="vm-terminal" height="600" >}}

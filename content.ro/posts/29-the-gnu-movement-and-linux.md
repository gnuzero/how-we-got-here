---
title: "Mișcarea GNU și Linux"
weight: 29
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 28
aliases:
  - /posts/23-the-gnu-movement-and-linux/
  - /posts/28-the-gnu-movement-and-linux/
tags: []
summary: "Un sistem compatibil cu Unix, o licență care păstrează libertatea codului și un nucleu pornit ca hobby"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

Capitolul 22 se încheie cu Unix ca sistem mic, scris în C, răspândit în zeci de instalații. Capitolul acesta urmărește două proiecte care au construit, separat, un sistem asemănător cu Unix pe care oricine îl poate copia și modifica: GNU, pornit de Richard Stallman, și nucleul Linux, pornit de Linus Torvalds.

## GNU: un sistem compatibil cu Unix, dat gratuit

Manifestul GNU a fost scris de Richard Stallman în 1985 pentru a cere sprijin la dezvoltarea sistemului de operare GNU; o parte din text vine din anunțul inițial din 1983 (Stallman, R., „The GNU Manifesto”, nota introductivă de pe gnu.org; copie Wayback Machine, instantaneu 2024: [web.archive.org/web/2024id_/https://www.gnu.org/gnu/manifesto.en.html](https://web.archive.org/web/2024id_/https://www.gnu.org/gnu/manifesto.en.html), accesat 2026-11-05; pagina directă de pe gnu.org a întors 403 la fetch automat). Nota precizează că textul a fost actualizat în mici privințe până în 1987, apoi lăsat neschimbat, cu note de subsol adăugate din 1993 (ibid., nota introductivă).

În secțiunea „What's GNU? Gnu's Not Unix!”, Stallman definește GNU drept „the complete Unix-compatible software system” pe care îl scrie ca să-l poată da gratuit oricui îl poate folosi (ibid.). La data textului existau deja, după el, un editor Emacs cu Lisp pentru comenzi, un depanator la nivel de sursă, un generator de parsere compatibil cu yacc, un editor de legături și în jur de 35 de utilitare; un compilator C portabil se compilase deja pe sine, iar „an initial kernel exists but many more features are needed to emulate Unix” (ibid.).

Motivul declarat e unul moral, nu tehnic: Stallman scrie că nu poate semna cu conștiința împăcată un acord de confidențialitate sau o licență de software restrictivă și că a demisionat de la laboratorul AI al MIT ca MIT să nu aibă vreun pretext legal să-l împiedice să distribuie GNU (ibid., „Why I Must Write GNU”).

Anunțul inițial e mai vechi. Pagina gnu.org care îl păstrează spune că a fost postat de Richard Stallman pe 27 septembrie 1983 și că începutul efectiv al lucrului a fost amânat până în ianuarie 1984 (GNU Project, „Initial Announcement”, [gnu.org/gnu/initial-announcement.en.html](https://www.gnu.org/gnu/initial-announcement.en.html); copie Wayback Machine, instantaneu 24 decembrie 2020: [web.archive.org/web/20201224214943/http://www.gnu.org/gnu/initial-announcement.en.html](https://web.archive.org/web/20201224214943/http://www.gnu.org/gnu/initial-announcement.en.html), accesat 2026-11-05). Textul începe cu „Free Unix!” și promite: „Starting this Thanksgiving I am going to write a complete Unix-compatible software system called GNU (for Gnu's Not Unix), and give it away free(1) to everyone who can use it” (cu trimiterea „(1)” a originalului la o notă despre sensul lui „free”) (ibid.).

## GPL: dreptul de autor folosit ca să păstreze libertatea

Licența GNU GPL se definește singură drept „a free, copyleft license for software and other kinds of works” (Free Software Foundation, *GNU General Public License*, versiunea 3, 29 iunie 2007, Preambul; text: [gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt), copie Wayback 2026 deschisă integral, accesat 2026-11-05). Preambulul spune că „free” se referă la libertate, nu la preț, și că cine distribuie copii, gratuit sau contra cost, trebuie să transmită destinatarilor aceleași libertăți pe care le-a primit, inclusiv accesul la codul sursă (ibid., Preambul).

Mecanismul este explicat tot în preambul, în doi pași: dezvoltatorii își afirmă drepturile de autor asupra programului și apoi oferă licența, care dă permisiunea legală de copiere, distribuire și modificare (ibid., Preambul). Partea care face licența *copyleft* e în secțiunea 5(c): cine distribuie o versiune modificată trebuie să licențieze întreaga lucrare, ca întreg, sub aceeași licență, oricui intră în posesia unei copii (ibid., §5 „Conveying Modified Source Versions”, lit. c).

## Linux: nucleul care lipsea

Pe 26 august 1991 (Google Groups afișează „Monday, August 26, 1991 6:12:08 PM UTC+12”; scăzând 12 ore rezultă 06:12 UTC în aceeași zi, calculul nostru), Linus Torvalds a scris pe grupul de discuții comp.os.minix: „I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones” (Torvalds, L., mesaj în comp.os.minix, arhiva Google Groups: [groups.google.com/g/comp.os.minix/c/dlNtH7RRrGA/m/SwRavCzVE7gJ](https://groups.google.com/g/comp.os.minix/c/dlNtH7RRrGA/m/SwRavCzVE7gJ), accesat 2026-11-05). În același mesaj spune că a portat deja bash (1.08) și gcc (1.40), adică două programe GNU, că sistemul nu conține cod din Minix și că „It is NOT protable [sic] (uses 386 task switching etc)” (ibid.).

Am citit mesajul din citatul păstrat într-un răspuns ulterior din același fir, așa cum îl afișează Google Groups (ibid.).

Licența nucleului este astăzi declarată în fișierul `COPYING` din depozitul Linux: „GPL-2.0 WITH Linux-syscall-note”, adică GNU GPL versiunea 2 „only”, cu o excepție explicită pentru apelurile de sistem (Linux kernel, fișierul `COPYING`, ramura master: [github.com/torvalds/linux/blob/master/COPYING](https://github.com/torvalds/linux/blob/master/COPYING), accesat 2026-11-05). Textul GPL v2 inclus în depozit este datat „Version 2, June 1991” (ibid., `LICENSES/preferred/GPL-2.0`).

Nucleul nu a pornit sub GPL. În notele de lansare pentru Linux 0.12, Torvalds scrie: „The Linux copyright will change: I've had a couple of requests to make it compatible with the GNU copyleft, removing the "you may not distribute it for money" condition. I agree.” și anunță că, dacă nu are obiecții de la cei care au contribuit cu cod, „The GNU copyleft takes effect as of the first of February” (Torvalds, L., „Release notes for Linux v0.12”, secțiunea COPYRIGHT; [kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12), accesat 2026-11-05). <!-- NEVERIFICAT: anul și ziua lansării 0.12 (ianuarie 1992 în cronologiile obișnuite); fișierul RELNOTES nu este datat, iar data din indexul kernel.org (23-Jun-1993) e a copiei de arhivă | surse încercate: RELNOTES-0.12, indexul kernel.org Historic -->

## De ce contează combinația

Manifestul anunța deja că GNU va avea nevoie de un nucleu și că doar după terminarea nucleului și a compilatorului se va putea distribui un sistem GNU pentru dezvoltare de programe (Stallman, 1985, „What's GNU?”). Mesajul lui Torvalds arată că primele programe rulate pe noul nucleu au fost tocmai shell-ul și compilatorul GNU (Torvalds, 1991). Restul acestei povești, distribuțiile și disputa despre nume, nu are încă surse deschise de mine și rămâne în afara paginii.

**Încearcă acum.** Pornește mașina virtuală de mai jos, dă clic pe ecran, apoi încearcă `uname`, `whoami` și `ls`, de data aceasta pe un sistem Linux care rulează în browser.

{{< lab type="vm-terminal" height="600" >}}

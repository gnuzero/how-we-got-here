---
title: "Containerele și izolarea în sistemele de operare moderne"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — Fundamente software: sisteme de operare, limbaje și sisteme în timp real"
series_index: 27
tags: []
summary: "Un singur nucleu, mai multe lumi: namespace-uri pentru ce vede un proces, cgroup-uri pentru cât consumă"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

Capitolul 24 a arătat cum memoria virtuală dă fiecărui proces propriul spațiu de adrese. Un container duce aceeași idee mai departe: procesul vede și propriul arbore de procese, propria rețea, propriile puncte de montare, dar împarte în continuare un singur nucleu cu restul sistemului. Capitolul descrie cele două mecanisme Linux pe care se sprijină containerele, *namespace*-urile și *cgroup*-urile, și formatul standard care le împachetează.

## Două feluri de izolare

Prima variantă este virtualizarea completă: fiecare sistem invitat își rulează propriul nucleu peste un hipervizor. A doua variantă păstrează un singur nucleu și îi cere acestuia să arate fiecărui grup de procese o altă „lume”. Pagina de manual Linux despre namespace-uri spune explicit că aceasta este una dintre utilizările lor: „One use of namespaces is to implement containers” (Kerrisk, M. et al., *namespaces(7)*, Linux man-pages, [man7.org/linux/man-pages/man7/namespaces.7.html](https://man7.org/linux/man-pages/man7/namespaces.7.html), accesat 2026-11-05).

<!-- NEVERIFICAT: comparația de cost (timp de pornire, memorie) între mașini virtuale și containere din EN nu are sursă deschisă; omisă. Nici istoria hipervizoarelor nu are încă sursă primară în acest lot. -->

## Namespace-uri: aceeași resursă, altă vedere

Definiția din manual: un namespace „înfășoară” o resursă globală a sistemului într-o abstracție care le dă proceselor din namespace impresia că au propria instanță izolată a resursei; modificările făcute înăuntru sunt vizibile celorlalți membri ai namespace-ului, dar invizibile pentru restul proceselor (ibid., „DESCRIPTION”).

Manualul enumeră opt tipuri, fiecare cu un indicator pentru apelurile `clone(2)` și `unshare(2)` (ibid., tabelul „Namespace types”):

- **Cgroup** (`CLONE_NEWCGROUP`): rădăcina ierarhiei cgroup;
- **IPC** (`CLONE_NEWIPC`): comunicarea între procese System V și cozile de mesaje POSIX;
- **Network** (`CLONE_NEWNET`): dispozitive, stive, porturi de rețea;
- **Mount** (`CLONE_NEWNS`): punctele de montare;
- **PID** (`CLONE_NEWPID`): identificatorii de proces;
- **Time** (`CLONE_NEWTIME`): ceasurile de pornire și monotone;
- **User** (`CLONE_NEWUSER`): identificatorii de utilizator și de grup;
- **UTS** (`CLONE_NEWUTS`): numele de gazdă și numele de domeniu NIS.

Namespace-urile nu au apărut deodată. Intrările din directorul `/proc/[pid]/ns/` sunt datate în manual: `ipc`, `net` și `uts` din Linux 3.0, `mnt`, `pid` și `user` din 3.8, `cgroup` din 4.6, `time` din 5.6 (ibid., „The /proc/pid/ns/ directory”). Atenție: acestea sunt datele intrărilor din `/proc`, nu neapărat ale namespace-urilor înseși, iar manualul nu dă aici data introducerii fiecărui tip.

Crearea unui namespace nou cere de regulă capabilitatea `CAP_SYS_ADMIN`, pentru că, înăuntru, creatorul poate schimba resurse vizibile altor procese; excepția sunt namespace-urile de utilizator, care din Linux 3.8 se pot crea fără privilegii (ibid., „DESCRIPTION”).

## Cgroup-uri: cât are voie să consume

Namespace-urile decid ce *vede* un proces; cgroup-urile decid cât *consumă*. Documentația nucleului, scrisă de Tejun Heo în octombrie 2015, definește cgroup-ul ca un mecanism care organizează procesele ierarhic și distribuie resursele sistemului de-a lungul ierarhiei într-un mod controlat și configurabil (Heo, T., „Control Group v2”, documentația nucleului Linux, [docs.kernel.org/admin-guide/cgroup-v2.html](https://docs.kernel.org/admin-guide/cgroup-v2.html), accesat 2026-11-05, §„Introduction”, „What is cgroup?”). Același text separă două părți: nucleul (*core*) cgroup, care organizează ierarhic procesele, și controlerele, fiecare responsabil de obicei de distribuirea unui anumit tip de resursă (ibid.).

Istoria versiunilor, după pagina de manual *cgroups(7)*: implementarea inițială a apărut în Linux 2.6.24; din cauza problemelor primei versiuni (cgroups v1), din Linux 3.10 a început lucrul la o implementare nouă, iar cgroups v2 a devenit oficială în Linux 4.5 (Kerrisk, M. et al., *cgroups(7)*, Linux man-pages, [man7.org/linux/man-pages/man7/cgroups.7.html](https://man7.org/linux/man-pages/man7/cgroups.7.html), accesat 2026-11-05, „DESCRIPTION”).

Două fișiere de interfață arată cum arată concret o limită (Heo, „Control Group v2”, secțiunile despre controlerele CPU și Memory):

- `cpu.max` conține două valori, „$MAX $PERIOD”: grupul poate consuma cel mult $MAX în fiecare perioadă $PERIOD, iar „max” înseamnă fără limită; valoarea implicită este „max 100000”.
- `memory.max` este limita fixă de memorie, „the main mechanism to limit memory usage of a cgroup”; dacă grupul o atinge și memoria nu poate fi recuperată, în cgroup este pornit OOM killer-ul (mecanismul care oprește procese când memoria se termină).

**Exemplu ilustrativ (nerulat aici, calculul nostru):** convențiile de interfață ale aceleiași documentații spun că „The default time unit is microseconds” (Heo, „Control Group v2”, secțiunea despre convențiile fișierelor de interfață). Dacă scriem `50000 100000` în `cpu.max`, grupul poate folosi cel mult 50.000 µs (50 ms) de CPU în fiecare perioadă de 100.000 µs (100 ms), adică echivalentul a jumătate dintr-un procesor.

## Containerul ca format: specificația OCI

Ca un container să ruleze la fel cu unelte diferite, Open Container Initiative definește o specificație de rulare care „aims to specify the configuration, execution environment, and lifecycle of a container” (Open Container Initiative, *Runtime Specification*, `spec.md`, „Abstract”, ramura main: [github.com/opencontainers/runtime-spec](https://github.com/opencontainers/runtime-spec/blob/main/spec.md), accesat 2026-11-05). Unitatea de lucru este *bundle*-ul: un director care conține obligatoriu un fișier `config.json` cu configurația și, dacă proprietatea `root.path` din `config.json` este setată, sistemul de fișiere rădăcină al containerului, în directorul indicat de ea (ibid., `bundle.md`). Fișierul `config.json` declară și versiunea specificației, în câmpul `ociVersion`, în format SemVer (ibid., `config.md`).

## Compromisul

Avantajul și slăbiciunea vin din același fapt: toate containerele de pe o mașină folosesc același nucleu. Manualul namespace-urilor spune că un namespace face o resursă *globală* să pară izolată (Kerrisk et al., *namespaces(7)*), deci izolarea depinde de corectitudinea nucleului care face această separare. O mașină virtuală, în schimb, are propriul nucleu.

<!-- NEVERIFICAT: orice afirmație despre incidente de securitate concrete (evadări din containere) are nevoie de surse; omisă. -->

**Încearcă acum.** În mașina virtuală de mai jos, `ls -l /proc/self/ns` listează namespace-urile procesului curent, dacă nucleul mașinii le expune; directorul este descris în *namespaces(7)*, dar nu am verificat ieșirea pe această mașină.

{{< lab type="vm-terminal" >}}

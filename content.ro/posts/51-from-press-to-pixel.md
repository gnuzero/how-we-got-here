---
title: "De la presă la pixel"
weight: 51
date: 2026-01-02
draft: false
phase: "7 — Sisteme distribuite, Big Data și orchestrare"
series_index: 50
aliases:
  - /posts/43b-from-press-to-pixel/
  - /posts/49-from-press-to-pixel/
  - /posts/50-from-press-to-pixel/
tags: []
summary: "Când pagina și literele devin program — fotoculegerea cu laser a lui Wang Xuan în prim-plan, PostScript și CSS la final"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[De la gravura în lemn la literele mobile]({{< relref "02-woodblock-to-movable-type" >}}) a lăsat pagina ca obiect fizic: cerneală, litere, hârtie. Aici pagina devine fișier, iar cazul care a scos problema la suprafață e fotoculegerea chinezească cu laser.

## De ce scrisul chinezesc a forțat problema

Wang Xuan scria în 1999 că numărul mare de caractere chinezești i-a silit pe el și echipa lui să descrie formele literelor prin contur, ca să reducă volumul de date, și că densitatea trăsăturilor i-a făcut să adauge primii informații de ajustare pentru literele mici (Wang Xuan, „抓住机遇，实现技术跨越并占领市场”, Sina Finance, 19 noiembrie 1999; [finance.sina.com.cn/management/vision/1999-11-19/12733.html](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html), accesat 2026-11-05).

## Wang Xuan: fotoculegerea cu laser

Fișa de istorie a Federației Chineze de Calculatoare (CCF) dă cifrele: compresia formelor reduce informația unui caracter de mărimea 5 (五号) de douăsprezece ori, de la circa 10.000 de biți la o medie de circa 800 (CCF, „FZ-91B型汉字照排控制器（1991年）”, lista „一类历史记忆” 2020, secțiunea „一、概述”; [ccf.org.cn/…/722005.shtml](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml), accesat 2026-11-05). Aceeași metodă permite ca litera să fie mărită, micșorată, alungită sau turtită fără pierdere de calitate, așa că sursa dă o compresie totală de până la 500 de ori, cu circa 4 MB pentru toate cele 600.000 de matrițe de caractere (字头) (ibid.). Cifrele sunt separate în sursă: 800 de biți e forma comprimată a mărimii 5, nu rezultatul împărțirii celor 4 MB la 600.000, deci nu le înmulțim între ele (citirea noastră).

Tot CCF datează prima pagină-probă de ziar la 27 iulie 1979 și prima carte-probă, 《伍豪之剑》, la 15 septembrie 1980 (ibid.). Controlerul care reface punctele din contururi a fost numit mai târziu *Raster Image Processor* (RIP); a doua generație, cu procesorul bit-slice Am2900, a intrat în uz la tipografia agenției Xinhua la începutul lui 1985 (ibid., „二、研制过程”).

În textul din 1999, Wang spune că echipa și-a fixat propriul format de descriere a paginii în 1986, că acesta a stat la baza transmiterii paginilor de ziar la distanță în 1990–1994 și că în 1992 *Renmin Ribao* trimitea astfel paginile prin satelit în 22 de orașe (Wang Xuan, 1999, loc. cit.). Tot el scrie că în 1990 au prevăzut că PostScript va deveni standardul și că în toamna lui 1993 au lansat primul interpretor PostScript Level 2 făcut în China (ibid.). Sunt relatările lui Wang, nu verificări independente.

## Taiwan: un început paralel

Cartea aniversară a cotidianului *United Daily News* din Taipei scrie că sistemul de culegere pe calculator al ziarului a pornit la 16 septembrie 1982 (民國七十一年九月十六日) și că ziarul a fost primul cotidian în limba chineză din lume care a automatizat culegerea pe calculator (《聯合報60年：在新聞的河 淘歷史的金》, cap. 14, p. 273; [reading.udn.com/…/page273.html](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html), accesat 2026-11-05). Linia aceasta s-a dezvoltat separat de cea a fotoculegerii cu laser de pe continent (comparația noastră între cele două surse).

## Ce a devenit pagina

Odată ce literele și așezarea în pagină trăiesc în program, „presa” e un program de redare. Computer History Museum scrie că PostScript, un limbaj de programare complet care descrie pagina pentru imprimantă, a fost lansat de Adobe în 1984 (CHM, „PostScript: A Digital Printing Press”, blog; [computerhistory.org/blog/postscript-a-digital-printing-press/](https://computerhistory.org/blog/postscript-a-digital-printing-press/), accesat 2026-11-05). Pe web, aceeași treabă pentru ecran o face CSS: instantaneul W3C enumeră modulele de bază, între care modelul cutiei (*box model*) și cascada, prin care un document devine machetă (W3C, „CSS Snapshot”, [w3.org/TR/CSS/](https://www.w3.org/TR/CSS/), accesat 2026-11-05).

Ambele linii, compresia chinezească și descrierea occidentală a paginii, ajung în același loc: o pagină pe care mașina o poate redesena fără ca cineva să culeagă litere de mână (concluzia noastră).

> **Paranteză: textul de umplutură care nu înseamnă nimic**
>
> Textul de umplutură *lorem ipsum* e latină amestecată dintr-un pasaj din Cicero, *De finibus bonorum et malorum*, care începe *Neque porro quisquam est qui dolorem ipsum quia dolor sit amet…* (Cecil Adams, „What does the filler text ‘lorem ipsum’ mean?”, *The Straight Dope*; [straightdope.com/21343427/…](https://www.straightdope.com/21343427/what-does-the-filler-text-lorem-ipsum-mean), accesat 2026-11-05). Sursa a fost găsită de Richard McClintock, profesor de latină devenit director de publicații la Hampden-Sydney College (ibid.). Textul a circulat pe foile adezive Letraset, iar Aldus l-a inclus apoi în programul PageMaker (ibid.). Afirmația des repetată că un tipograf l-ar fi amestecat în anii 1500 vine de la McClintock, care i-a spus autorului că nu a mai găsit specimenul de litere în care credea că îl văzuse (ibid.).
>
> Își are locul aici pentru că arată că, odată ce literele sunt program, poți așeza pagina înainte să existe cuvintele (observația noastră).

## O pistă paralelă: secvențe care se mișcă

Tiparul îngheață o pagină; filmul îngheață o secvență și o redă.

Sulul orizontal chinezesc e un caz mai vechi de privire ghidată, pas cu pas, dar nu de cinema: Muzeul Palatului definește sulul (手卷) ca formă de montare care se desfășoară de la dreapta la stânga și dă pentru *Qingming Shanghe Tu* dimensiunile de 24,8 × 528 cm și „peste 500” de personaje (Muzeul Palatului, „清明上河图卷”, autor 杨新; [dpm.org.cn/collection/paint/228226.html](https://www.dpm.org.cn/collection/paint/228226.html), accesat 2026-11-05). British Museum datează sulul *Admonitions* în secolele V–VII, „after” Gu Kaizhi (British Museum, obiect 1903,0408,0.1; [britishmuseum.org/collection/object/A_1903-0408-0-1](https://www.britishmuseum.org/collection/object/A_1903-0408-0-1), accesat 2026-11-05; unverified by automated fetch: `curl` → 403, text citit prin WebFetch). A numi sulurile „proto-cinema” e lectura noastră, nu a muzeelor.

Primul film chinezesc e pus de obicei pe *Dingjunshan* (《定军山》), filmat în jurul anului 1905 la atelierul foto Fengtai cu actorul de operă Tan Xinpei, deși nu se cunoaște niciun document contemporan din 1905. Cheng Jihua a dat anul 1908 în 1956 și 1905 în *History of the Development of Chinese Cinema* din 1963; filmul s-a pierdut, iar o afișă larg răspândită e un fals modern. Li Zhen (2025, via Arhiva Națională de Film a Chinei) concluzionează că a existat și a fost proiectat cu mare probabilitate, dar titlul, realizatorul și anul rămân deschise (Li Zhen, „模糊史料的盖然性研判——以《定军山》相关文献研究为例”, *Dangdai Dianying*, 2025, nr. 1, republicat 11 februarie 2025; [cfa.org.cn/…](https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03), accesat 2026-11-05).

Reperele occidentale, la final. Eadweard Muybridge a fotografiat calul Sallie Gardner în mișcare pe pista de la Palo Alto la 19 iunie 1878; tiparul e păstrat la Library of Congress (Dr. Kris Belden-Adams, „Eadweard Muybridge, The Horse in Motion”, *Smarthistory*; [smarthistory.org/eadweard-muybridge-the-horse-in-motion/](https://smarthistory.org/eadweard-muybridge-the-horse-in-motion/), accesat 2026-11-05; pagina LoC [loc.gov/item/97502309/](https://www.loc.gov/item/97502309/) a returnat 403 / Cloudflare la `curl` și a expirat la WebFetch — data și titlul sunt citite din Smarthistory, care reproduce tiparul LoC). Science Museum Group datează *Roundhay Garden Scene* a lui Louis Le Prince în octombrie 1888, la Leeds, și îi dă lui Le Prince anii „1841–1890?” (Science Museum Group, „Glass copy negative of Roundhay Garden Scene”, obiect co8646638; [collection.sciencemuseumgroup.org.uk/…/co8646638/…](https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene), accesat 2026-11-05). National Science and Media Museum scrie că Le Prince „mysteriously disappeared in 1890” și că soarta lui rămâne necunoscută (Kieron Casey, „The mystery of Louis Le Prince”, National Science and Media Museum, 29 august 2013; [blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/](https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/), accesat 2026-11-05). Institutul Lumière plasează „la première commerciale” a cinematografului fraților Lumière la 28 decembrie 1895, după alte unsprezece proiecții în Franța și Belgia în același an, și brevetul aparatului la 13 februarie 1895 (Institut Lumière, „Le Cinématographe”; [institut-lumiere.org/…/cinematographe.html](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html), accesat 2026-11-05). Catalogue Lumière (proiectul de catalog al Institutului) precizează locul: „first public screening at Salon indien du Grand Café, Paris” (Catalogue Lumière, „FAQ – Movies”; [catalogue-lumiere.com/faq-movies/](https://catalogue-lumiere.com/faq-movies/), accesat 2026-11-05).
<!-- Notă dump: pagina Institut Lumière are doar titlul de secțiune „Capucines / Grand Café” fără frază explicită pe loc; locul e citat din Catalogue Lumière. LoC Muybridge: dump automat eșuat; afirmația vine din Smarthistory. -->

## Cum călătorea mesajul

Cablurile submarine au făcut din mare un fir. Science History Institute scrie că primul cablu submarin între Anglia și Franța, pus în 1850, a cedat după câteva ore, când un pescar l-a agățat și l-a rupt, că în anul următor un cablu blindat a fost pus cu succes, că încercarea atlantică din 1865 s-a rupt și că în 1866 *Great Eastern* a așezat o legătură durabilă și a recuperat cablul din 1865 (Science History Institute, „Communicating Underwater”, *Distillations*; [sciencehistory.org/stories/magazine/communicating-underwater/](https://www.sciencehistory.org/stories/magazine/communicating-underwater/), accesat 2026-11-05). Primul mesaj oficial pe cablul transatlantic a plecat din Newfoundland la 16 august 1858; cablul a încetat să funcționeze în câteva săptămâni, iar o legătură cu adevărat sigură a existat abia din 1866, cu nava *Great Eastern* (Library of Congress, „First Transatlantic Telegraph Cable”, ghidul *This Month in Business History*; [guides.loc.gov/…/first-transatlantic-telegraph-cable](https://guides.loc.gov/this-month-in-business-history/august/first-transatlantic-telegraph-cable), accesat 2026-11-05).

Asia a fost conectată devreme. Great Northern Telegraph Company a pus în 1870–1871 cablurile Vladivostok–Nagasaki, Nagasaki–Shanghai și Shanghai–Hong Kong, deschise traficului la 1 ianuarie 1872 (Bill Glover, „The Great Northern Telegraph Company”, atlantic-cable.com; [atlantic-cable.com/CableCos/GreatNorthern/](https://atlantic-cable.com/CableCos/GreatNorthern/), accesat 2026-11-05; unverified by automated fetch: `curl` → 403, text citit prin WebFetch). Aceeași pagină notează că firma a creat un cod de patru cifre pentru caracterele chinezești cele mai folosite (ibid.).

Apoi releul a părăsit fundul mării. NASA scrie că Telstar, proiectat și construit de Bell Laboratories și plătit de AT&T, a fost lansat de la Cape Canaveral la 10 iulie 1962 și că, la câteva ore după lansare, a transmis primele imagini de televiziune în direct, către Franța (NASA, „Telstar Opened Era of Global Satellite Television”; [nasa.gov/history/telstar-opened-era-of-global-satellite-television/](https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/), accesat 2026-11-05). Primul lot de 60 de sateliți Starlink a fost lansat la 23 mai 2019 (ora de pe coasta de est a SUA; 24 mai UTC); mărimea constelației se schimbă prea des ca să dăm o cifră ([Space.com](https://www.space.com/spacex-launches-60-starlink-internet-satellites.html), accesat 2026-11-05).

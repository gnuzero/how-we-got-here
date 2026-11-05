---
title: "Google හි Big Data යටිතල පහසුකම — ඔවුන් ජයග්‍රහණය කළේ ඇයි"
weight: 50
date: 2026-01-01
draft: false
phase: "7 — බෙදාහැරුණු පද්ධති, Big Data සහ Orchestration"
series_index: 49
aliases:
  - /posts/44-google-s-big-data-infrastructure-why-they-won/
tags: []
summary: "Web-පරිමාණ දත්ත failure-as-normal ගබඩාව බල කළේය, පසුව cluster එක සඟවන ක්‍රමලේඛන ආකෘතියක් — GFS, MapReduce, Bigtable"
image_prompt: "System diagram of the Google File System with chunkservers and a master node, alongside a MapReduce job splitting into map and reduce phases across a cluster, clean distributed-systems textbook diagram style"
video_prompt: "25-second animation: a large dataset being split across chunkservers in a distributed file system, then processed in parallel by a MapReduce job and recombined, clean technical animation"
schematics: "Diagram: GFS architecture (master/chunkserver) + MapReduce data flow (map→shuffle→reduce) + Bigtable sparse table model"
---

1990 ගණන්වල අග භාගය වන විට සමාගම් කිහිපයක් web search ගොඩනඟමින් සිටියහ. Google ජයග්‍රහණය කළේ ranking බුද්ධිමත්කමෙන් පමණක් නොවේ — PageRank වැදගත් විය, නමුත් කල් පවතින වාසිය යටිතල පහසුකම විය: එක් යන්ත්‍රයක් කිසිදා ප්‍රමාණවත් නොවන විට අඛණ්ඩව වෙනස් වන web එකක් ගබඩා කර සැකසිය හැකි පද්ධති.

## සීමාව: Web එක එක් පෙට්ටියක් ඉක්මවා ගියේය

"සම්පූර්ණ web එක" indexing කිරීම යනු ඕනෑම තනි disk එකකට හෝ මතකයකට වඩා විශාල දත්ත කට්ටලයක්, එක්-වරක් snapshot එකක් ලෙස නොව අඛණ්ඩව පැමිණෙන එකකි. Phase 3 *එක්* යන්ත්‍රයක් වේගවත් කළේය. මෙම ගැටලුව වෙනස්ය: ඕනෑම එකකට වඩා විශාල දෙයක් ඒවා එක්ව රඳවා සැකසන පරිදි *බොහෝ* යන්ත්‍ර සම්බන්ධීකරණය කරන්න.

## Failure සාමාන්‍යයි — එබැවින් ගබඩාව එය උපකල්පනය කළ යුතු විය

Google File System (Ghemawat, Gobioff, සහ Leung, SOSP 2003) බොහෝ filesystems තවමත් ව්‍යතිරේකයක් ලෙස සැලකූ නිර්මාණ උපකල්පනයකින් පටන් ගත්තේය: දහස් ගණනක් commodity යන්ත්‍ර සමඟ, දෘඪාංග failure යනු රුටීනයකි. ගොනු විශාල chunks වලට බෙදන්න, එක් එක් chunk එක chunkservers හරහා replicate කරන්න, සහ chunks ජීවත් වන තැන master එකකට ලුහුබැඳීමට ඉඩ දෙන්න — එවිට යන්ත්‍රයක් අහිමි වීම අර්බුදයක් ලෙස හසුරුවනු වෙනුවට ස්වයංක්‍රීයව අවශෝෂණය වේ. එය Post 42 හි fabric වැඩ දත්ත මධ්‍යස්ථානයක් ඇතුළත ගන්නා එකම *වර්ගයේ* ඔට්ටුවයි: අර්ධ failure හි සාමාන්‍ය අවස්ථාව සඳහා ඉංජිනේරු කරන්න.

## Cluster එක නැවත සොයා නොගෙන සැකසීම

ගබඩාව පමණක් ප්‍රමාණවත් නොවීය. එම පරිමාණයේ සැකසීමට සෑම ඉංජිනේරුවෙකුම distribution සහ recovery නැවත සොයා නොගන්නා ක්‍රමලේඛන ආකෘතියක් අවශ්‍ය විය. MapReduce (Dean සහ Ghemawat, OSDI 2004) හූක් දෙකක් දුන්නේය — record එකකින් key-value pairs නිකුත් කරන **map** එකක්, සහ යතුරක් බෙදා ගන්නා අගයන් aggregate කරන **reduce** එකක් — සහ *පද්ධතිය* split, parallel map, යතුර අනුව shuffle/sort, parallel reduce, සහ අසාර්ථක කාර්යයන් retry කිරීම හැසිරවීය. සීමාව භෞතික තරමටම cognitive විය: cluster එක සඟවන්න එවිට රැකියාවේ තර්කය කුඩාවට රැඳිය හැක.

## ලාභ Bytes මත ව්‍යුහය

Bigtable (Chang et al., OSDI 2006) ආශ්‍රිත අවශ්‍යතාවකට පිළිතුරු දුන්නේය: web පරිමාණයේ sparse structured ගබඩාව — URLs ලෙස rows, crawled versions හෝ metadata ලෙස columns, බොහෝ cells හිස් — යටින් GFS මත ගොඩනැගුණු. නිර්මාණය කර්මාන්තය පසුව NoSQL ලෙස හැඳින්වූ බොහෝ දේ හැඩගැස්වීය; සම්බන්ධක පටකය එකමයි: failure-ඉවසන තොග ගබඩාවක් සහ batch ක්‍රමලේඛන ආකෘතියක් පවතින විට, structured ප්‍රවේශය ඊළඟ බල කළ ස්ථරය බවට පත් වේ.

## මෙය Moat එක වූයේ ඇයි

තරඟකරුවන්ට ranking අදහස් පිටපත් කළ හැකිවිය. Commodity දෘඪාංගය මත සම්පූර්ණ web එක ගබඩා කිරීමට, සැකසීමට, සහ අඛණ්ඩව නැවත-index කිරීමට ඇති ධාරිතාව ප්‍රතිනිර්මාණය කිරීම — යන්ත්‍ර මරණය සාමාන්‍ය ලෙස සැලකීම — බොහෝ දුෂ්කර විය. Hadoop සහ පසුකාලීන "big data" stack එක Google හි අභ්‍යන්තර කේතයෙන් තොරව පවා *ප්‍රකාශිත* papers අනුගමනය කළේය: papers පෙන්වූයේ ගැටලු පන්තිය විසඳන ආකාරයයි.

Batch map/reduce බලවත් සහ දෘඩයි. ඊළඟ පෝස්ට් එක බෙදාහැරුණු දත්ත *සැකසීමෙන්* පරිණත බෙදාහැරුණු පද්ධතියක් සෑදෙන බොහෝ සේවා *යෙදවීම සහ සුව කිරීම* වෙත හැරේ.

## ගැඹුරින්: GFS, MapReduce සහ Bigtable — papers වල සංඛ්‍යා පැන්සලෙන්

ඉහත කතාව "ඇයි" යන්න කීවේය. මෙහිදී papers තුනේම ප්‍රකාශිත සංඛ්‍යා ගෙන, පැන්සලක් සහ කඩදාසියක් පමණක් භාවිතයෙන් "කෙසේද" යන්න ගොඩනඟමු. සෑම සංඛ්‍යාවකටම මූලාශ්‍රයේ පිටුව (PDF පිටුව) දක්වා ඇත; "නිදර්ශන" ලෙස සලකුණු කළ සංඛ්‍යා අප විසින් පාඩම සඳහා තෝරාගත් ඒවාය.

### 1. GFS: එක් master කෙනෙක්, chunk විශාල කැබලි

GFS cluster එකක ඇත්තේ **එක් master** (single master) සහ බොහෝ **chunkservers** ය; master සෑම chunkserver එකක් සමඟම **HeartBeat** පණිවිඩ හරහා කතා කරයි, සහ පෙරනිමියෙන් (default) සෑම chunk එකක්ම **පිටපත් තුනක්** (three replicas) ලෙස ගබඩා වේ (GFS paper, p2). ගොනුවක් **64 MB chunks** වලට කැඩේ (p3). Master එක එක් 64 MB chunk එකකට **bytes 64 ට අඩු** metadata ප්‍රමාණයක් තබා ගනී (p4).

මූලික තර්කය: master එක එකක් පමණක් නම්, එහි මතකය (RAM) මුළු පද්ධතියේම සීමාව විය හැක. chunk විශාල කිරීම එම සීමාව දුරට තල්ලු කරයි.

**විසඳූ උදාහරණය 1 (නිදර්ශන ප්‍රමාණය: 1 PiB):** 1 PiB = 2^50 bytes. 64 MiB = 2^26 bytes. chunks ගණන = 2^50 / 2^26 = 2^24 = 16,777,216. එක් chunk එකකට bytes < 64 = 2^6 නම්, chunk metadata < 2^24 × 2^6 = 2^30 bytes = **1 GiB ට අඩු**. එනම් petabyte එකක දත්ත සිතියම එක් යන්ත්‍රයක RAM එකට ගැළපේ. chunk 64 KB වූවා නම්? chunks 1000 ගුණයක් පමණ (2^34), metadata ~1 TiB — එක් master කෙනෙකුට කළ නොහැක.

**සැබෑ cluster දෙකක් (GFS paper, p11, Table 2):**

| | Cluster A | Cluster B |
|---|---|---|
| Chunkservers | 342 | 227 |
| පවතින ඉඩ / භාවිත ඉඩ | 72 TB / 55 TB | 180 TB / 155 TB |
| ගොනු | 735k | 737k |
| Chunks | 992k | 1550k |
| Chunkservers වල metadata | 13 GB | 21 GB |
| Master metadata | 48 MB | 60 MB |

Paper එකම කියන්නේ chunkservers වල metadata බොහෝමයක් **64 KB blocks** සඳහා checksums බවත්, master metadata "ගොනුවකට සාමාන්‍යයෙන් bytes 100 පමණ" බවත්ය (p11).

**විසඳූ උදාහරණය 2:** Cluster A හි master: 48 MB / 735,000 ගොනු ≈ ගොනුවකට bytes 65. Cluster B: 60 MB / 737,000 ≈ bytes 81. මේ දෙකම paper එකේ "~100" ට වඩා අඩුය — එය වට කළ (rounded) ඇස්තමේන්තුවක් ලෙස කියවන්න; ප්‍රධාන කාරණය "tens of MBs" පමණක් බවයි.

**නැවත-පිටපත් කිරීම (re-replication), p12:** Cluster B හි එක් chunkserver එකක් (chunks 15,000, 600 GB) මරා දැමූ විට, ධාවනය වන යෙදුම් ආරක්ෂා කිරීමට cloning **එකවර 91 කට** (chunkservers වලින් 40%) සීමා කර, එක් clone එකකට **උපරිම 6.25 MB/s** (50 Mbps) ලබා දුනි. සියලු chunks **මිනිත්තු 23.2** කින් ප්‍රතිස්ථාපනය විය, "effective replication rate" **440 MB/s**.

**විසඳූ උදාහරණය 3:** උපරිම සීමාව = 91 × 6.25 = 568.75 MB/s. ලැබුණු 440 MB/s ඊට අඩුය (සියලු clones සෑම මොහොතකම ධාවනය නොවේ). පරීක්ෂාව: 600 GB ÷ (23.2 × 60 s = 1392 s). GB = 1000 MB ලෙස ගතහොත් ≈ 431 MB/s; GB = 1024 MB ලෙස ගතහොත් ≈ 441 MB/s — paper එකේ 440 ට ගැළපෙන්නේ දෙවැන්නයි. ඒකක (units) අර්ථය සංඛ්‍යාව වෙනස් කරයි.

ද්විත්ව අසාර්ථකත්වයේදී chunks 266 කට ඉතිරි වූයේ එක් පිටපතක් පමණි; ඒවාට ඉහළ ප්‍රමුඛතාවය දී **මිනිත්තු 2 ක් ඇතුළත** අවම වශයෙන් 2× වෙත ගෙන එන ලදී (p12). පාඩම: "වඩාත්ම අනතුරේ ඇති" දත්ත පළමුව.

### 2. MapReduce: වචන ගණන් කිරීම අතින්

Paper එකේ පළමු උදාහරණය වචන ගණනයි: `map` එක සෑම වචනයක් `w` සඳහාම `EmitIntermediate(w, "1")` කරයි, `reduce` එක එක් වචනයකට ලැබෙන "1" සියල්ල එකතු කරයි (MapReduce paper, p2). අතරමැදි යතුරු (intermediate keys) reduce කොටස් R අතර බෙදන්නේ `hash(key) mod R` මගිනි (p4).

**විසඳූ උදාහරණය 4 (නිදර්ශන දත්ත):** ආදාන පේළි දෙක: "the cat sat" සහ "the cat ran". R = 2. අපි සරල නිදර්ශන hash එකක් ගනිමු: hash = වචනයේ අකුරු ගණන (සැබෑ පද්ධතියක මෙය මෙතරම් සරල නොවේ).

- Map ප්‍රතිදානය: (the,1) (cat,1) (sat,1) (the,1) (cat,1) (ran,1)
- කොටස: සියලු වචනවල අකුරු 3 → 3 mod 2 = 1, සියල්ල reduce 1 වෙත! reduce 0 හිස්. මෙය **නරක hash** එකක අනතුරයි: වැඩ සමව බෙදී නොයයි.
- Reduce 1: the → 1+1 = 2, cat → 2, sat → 1, ran → 1.

**Combiner:** "the" වැනි නිතර එන වචන `<the, 1>` වාර දහස් ගණනක් ජාලය හරහා යැවීම අපතේය; එබැවින් map යන්ත්‍රය මතම අර්ධ එකතුවක් කරන **combiner function** එකක් paper එක විස්තර කරයි (p6). ඉහත උදාහරණයේ, පේළි දෙකම එකම map task එකක නම්, combiner එක `(the,2)` එකක් පමණක් යවයි.

**පරිමාණය (p6, p8):** සාමාන්‍ය ධාවනයක් M = 200,000 map tasks, R = 5,000 සහ workers 2,000. පරීක්ෂණ cluster එක යන්ත්‍ර ~1800 (එකකට 2 GHz Xeon දෙකක්, 4 GB, 160 GB IDE disks දෙකක්). **grep** පරීක්ෂණය: 100-byte records 10^10 (≈ 1 TB) ක් හරහා දුර්ලභ රටාවක් (records 92,337 ක) සෙවීම, M = 15000, R = 1; workers 1764 ක් සමඟ උපරිම **30 GB/s** ඉක්මවූ අතර මුළු කාලය ~150 s.

**Stragglers සහ backup tasks (§3.6, p10):** ~1 TB sort එක backup tasks සමඟ **891 s** (p9; එවකට TeraSort හොඳම ප්‍රතිඵලය 1057 s). Backup tasks අක්‍රිය කළ විට 960 s පසු reduce tasks 5 ක් පමණක් ඉතිරි වූ නමුත් ඒවා අවසන් වූයේ තවත් 300 s පසුවය: මුළු **1283 s**, එනම් **44%** වැඩි.

**විසඳූ උදාහරණය 5:** (1283 − 891) / 891 = 392 / 891 ≈ 0.44. පාඩම: දහස් ගණන් යන්ත්‍ර ඇති විට, *මන්දගාමී එක* මුළු job එකේ කාලය තීරණය කරයි. අවසාන කොටසේ ඉතිරි tasks වෙනත් යන්ත්‍රයකද ධාවනය කර, පළමුව අවසන් වන එක ගැනීම ලාභදායීය.

Fault පරීක්ෂණයේදී workers 1746 න් 200 ක් හිතාමතා මරා දැමූ නමුත් job එක අවසන් විය (p10) — master එක ඔවුන්ගේ tasks නැවත ධාවනය කළේය.

### 3. Bigtable: sort කළ, බෙදූ සිතියමක්

Bigtable යනු `(row:string, column:string, time:int64) → string` සිතියමකි (Bigtable paper, p1). Webtable උදාහරණයේ row key එක URL එක ප්‍රතිලෝම host ආකාරයෙනි: `maps.google.com/index.html` → `com.google.maps/index.html` (p2). Rows sort කර ගබඩා වන නිසා, එකම domain එකේ පිටු එකිනෙකට ළඟින් පිහිටයි. Row key උපරිම 64KB, සාමාන්‍යයෙන් bytes 10–100 (p2).

Rows පරාස **tablets** ලෙස බෙදේ (100–200 MB පමණ), SSTable files 64KB blocks වලින් සෑදේ (p4). Tablet එකක් කොහිදැයි සොයන්නේ **මට්ටම් තුනක** ධුරාවලියකිනි (p4–p5): Chubby ගොනුව → root tablet → METADATA tablets → user tablets.

**විසඳූ උදාහරණය 6 (p5 හි ව්‍යුත්පන්නය):** METADATA row එකක් ≈ 1KB = 2^10; METADATA tablet එකක් 128 MB = 2^27. එක් METADATA tablet එකක rows = 2^27 / 2^10 = 2^17. Root (එක් tablet) → 2^17 METADATA tablets; එක් එකක් → 2^17 user tablets. මුළු user tablets = 2^17 × 2^17 = **2^34**. Tablet එකක් 128 MB = 2^27 නම්, ලිපින ගත කළ හැකි bytes = 2^34 × 2^27 = **2^61**.

### පැන්සල් අභ්‍යාස

1. 64 MB chunks සහ chunk එකකට bytes 64 සමඟ, 4 PiB සඳහා master chunk metadata කොපමණද? (නිදර්ශන)
2. Cluster A හි ගොනුවකට සාමාන්‍ය chunks ගණන කීයද? Cluster B හි?
3. Clone 91 ක්, එකකට 6.25 MB/s සමඟ, 600 GiB ප්‍රතිස්ථාපනයට **අවම** කාලය කීයද?
4. "a b a c a" (නිදර්ශන), R = 2, hash = අකුරේ ASCII අගය (a=97, b=98, c=99). සෑම reduce කොටසකටම යන යතුරු සහ ගණන්?
5. Row keys `com.cnn.www/` සහ `com.cnn.www/world` sort කළ පසු කුමක් පළමුවද, ඇයි?

**පිළිතුරු:**
1. 4 PiB / 64 MiB = 2^52 / 2^26 = 2^26 chunks; × 2^6 = 2^32 bytes = 4 GiB ට අඩු.
2. A: 992 / 735 ≈ 1.35; B: 1550 / 737 ≈ 2.10 (paper p11: B හි ගොනු විශාලතර යැයි කියයි).
3. 600 × 1024 MB / 568.75 MB/s ≈ 1080 s ≈ මිනිත්තු 18. සැබෑ කාලය (23.2) ඊට වැඩිය.
4. 97 mod 2 = 1, 98 mod 2 = 0, 99 mod 2 = 1. Reduce 0: b → 1. Reduce 1: a → 3, c → 1.
5. `com.cnn.www/` පළමුව: එය දෙවැන්නේ උපසර්ගයකි (prefix), සහ කෙටි උපසර්ගය lexicographic ලෙස පෙර එයි.

**පිටවීමේ දොර:** Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung, "The Google File System" (SOSP 2003); Jeffrey Dean and Sanjay Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters" (OSDI 2004); Fay Chang et al., "Bigtable: A Distributed Storage System for Structured Data" (OSDI 2006) — මෙම යටිතල-පහසුකම් කතාව පිටුපස ඇති ප්‍රාථමික තුන.


---
title: "Caches"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 15
tags: []
summary: "Locality මතක ධූරාවලිය ක්‍රියාත්මක කරවයි; associativity සහ coherence එය අවංකව තබා ගැනීමේ වියදම් වේ"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

Post 10 මතක ධූරාවලිය පිහිටුවිය: registers, SRAM cache, DRAM, disk — සෑම පියවරකදීම වේගය සඳහා ධාරිතාව හුවමාරු කෙරේ. Caches යනු එම හුවමාරුව සෑම CPU එකකම කාර්ය සාධනය රැගෙන යන තැනයි. පදනම සැබෑ වැඩසටහන් පිළිබඳ එක් අනුභවික කරුණකි: **locality**.

## Caches ක්‍රියා කරන්නේ ඇයිද යන්න

**Temporal locality** — මෑතදී ස්පර්ශ කළ ස්ථානයක් ඉක්මනින් නැවත ස්පර්ශ වීමට ඉඩ ඇත (loop විචල්‍ය, hot කේතය). **Spatial locality** — ආසන්න ස්ථාන ඊළඟට පැමිණීමට ඉඩ ඇත (arrays, අනුක්‍රමික fetch). Caches මෑතදී භාවිතා කළ දත්ත සමීපව තබා ගනී, සහ miss එකකදී සම්පූර්ණ *lines* (බොහෝ විට bytes 64 ක්) fetch කරයි — අසල්වැසියන් ඉක්මනින් පැමිණෙනු ඇතැයි ඔට්ටු අල්ලමින්.

Lookup එක ලිපිනයක් **offset** (line එකේ byte), **index** (කුමන set එකද), සහ **tag** (පවතින line එක ඇත්ත වශයෙන්ම අපට අවශ්‍ය එකද?) ලෙස කැඩෙයි.

## Line එකක් ජීවත් විය හැක්කේ කොහේද

**Direct-mapped** — ලිපිනයකට එක් හැකි slot එකක්. ඉක්මන් පරීක්ෂාව; hot ලිපින දෙකක් එකම index එකක් බෙදා ගෙන එකිනෙක thrash කරන විට conflict misses.

**Fully associative** — ඕනෑම line එකක්, ඕනෑම slot එකක්. Conflict misses නැත; සෑම ප්‍රවේශයක්ම සෑම tag එකක්ම සසඳයි. පරිමාණය නොවේ.

**Set-associative** — ප්‍රායෝගික මැද: index කුඩා set එකක් තෝරයි (උදාහරණයක් ලෙස ways 8 ක්); tags පරීක්ෂා වන්නේ එහි පමණි. නම්‍යතාවයෙන් බොහෝමයක්, සම්පූර්ණ ස්කෑන් එකකට වඩා බොහෝ අඩු දෘඪාංගය. ප්‍රායෝගිකව සෑම සැබෑ cache එකක්ම මෙහි වාඩි වේ.

## Multicore: නව සීමාව ලෙස Coherence

එක් core එකක්, එක් පුද්ගලික cache එකක්: හොඳයි. බොහෝ cores, එක් එක් එකට cache එකක්: core A, core B තවමත් රඳවා ගන්නා line එකක් ලියයි — ප්‍රොටෝකෝලයක් නැතිව, B සදාකාලිකව stale කියවයි. MESI (Modified, Exclusive, Shared, Invalid) සම්භාව්‍ය පිළිතුරයි: සෑම line එකකටම තත්ත්වයකින් ටැග් කරන්න, සහ සංක්‍රමණ සන්නිවේදනය කරන්න (bus snoop හෝ directory) එවිට ලිවීමක් අනෙක් පිටපත් invalidate හෝ යාවත්කාලීන කරයි.

Coherence නොමිලේ නොවේ, සහ එහි වියදම core ගණන සමඟ වර්ධනය වේ — "හුදෙක් cores එකතු කරන්න" (Post 17) ට තමන්ගේම අඩුවන ප්‍රතිලාභ ඇති එක් හේතුවක්, ILP සීමාවලින් වෙන්ව.

## ගැඹුරින්: tag, index, offset ගණනය, conflict misses සහ MESI පියවරෙන් පියවර

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** Cache ගැන සිංහලෙන් පාසල් මට්ටමේ ද්‍රව්‍ය තිබේ.
> - NIE ශ්‍රේණිය 12 ICT ගුරු මාර්ගෝපදේශයේ PDF p.90 (මුද්‍රිත p.77) මතක ධූරාවලි පිරමීඩය පෙන්වයි. එහි cache "වාරක මතකය" ලෙස හැඳින්වේ. L1, L2, L3 ගුණාත්මකව විස්තර කෙරේ: L1 වේගවත්ම සහ කුඩාම වන අතර CPU තුළ ඇත; L3 අනෙක් දෙකට වඩා මන්දගාමී නමුත් RAM ට වඩා වේගවත්ය.
> - "cache memory" ගැන සිංහල වීඩියෝ කිහිපයක් ද ඇත ([YT Y0tdLysqtEQ](https://www.youtube.com/watch?v=Y0tdLysqtEQ), [YT Ss0TU1MfGJQ](https://www.youtube.com/watch?v=Ss0TU1MfGJQ)). ඒවා හඳුනා ගත්තේ මාතෘකාවෙන් පමණි.
>
> ඒ කිසිවක් පහත දේ නොකරයි: ලිපිනයක් bits ලෙස කැඩීම, set/way ගණනය, conflict miss එකක් ඇති වන්නේ කෙසේද යන්න, write-back හෝ MESI තත්ත්ව සංක්‍රමණ. සාමාන්‍ය මතක ප්‍රවේශ කාලය (AMAT) සහ 64-byte line locality උදාහරණය Post 35 හි ඇත. මෙම කොටස UC Berkeley CS 61C සටහන්, Intel හි Software Developer's Manual සහ MIT 6.823 දේශන භාවිතා කර ඉතිරි කොටස ගණනයෙන් පෙන්වයි.

### 1. මූලික පද

- **Line / block:** Cache සහ මතකය අතර හුවමාරු වන කුඩාම ඒකකයයි (උදා. bytes 64).
- **Set:** Index එකකින් තෝරා ගන්නා lines කණ්ඩායමයි.
- **Way:** Set එකක් තුළ ඇති slot එකකි. Ways 8 ක් = "8-way set-associative".
- **Offset:** Line එක තුළ ඇති byte එකයි. **Index:** කුමන set එකද. **Tag:** ඉතිරි ඉහළ bits. ඒවා සසඳා, එම line එක ඇත්තටම අපට අවශ්‍ය එකද යන්න බලයි.
- **Valid bit:** Slot එකේ සැබෑ දත්ත තිබේද යන්න. **Dirty bit:** Line එක cache එක තුළ වෙනස් වී ඇත්ද යන්න.
- **LRU (least recently used):** Set එකේ වැඩිම කාලයක් භාවිතා නොකළ line එක ඉවත් කිරීමේ ප්‍රතිපත්තියයි.

### 2. ලිපිනය කැඩීම: සූත්‍ර

- offset bits = log₂(line size)
- sets = cache size ÷ (line size × ways)
- index bits = log₂(sets)
- tag bits = ලිපින bits − index − offset

**සැබෑ උදාහරණය (CS 61C සටහන් Apple M1 ගැන උපුටා දක්වන අගයන්):**

| | L1 | L2 |
|---|---|---|
| ප්‍රමාණය | 128 KiB | 12 MiB |
| Ways | 8 | 12 |
| Line | 64 B | 128 B |
| Lines | 131072 / 64 = **2048** | 12582912 / 128 = **98304** |
| Sets | 2048 / 8 = **256** | 98304 / 12 = **8192** |
| Offset bits | **6** | **7** |
| Index bits | **8** | **13** |

Fully associative cache එකකට index එකක් නැත. සම්පූර්ණ block ලිපිනයම tag එකයි.

**Address එකක් කැඩීම (ආදර්ශ cache: 32 KiB, 8-way, 64 B lines, 32-bit ලිපින):**
- sets = 32768 ÷ (64 × 8) = **64** → index bits **6**, offset bits **6**, tag bits 32 − 6 − 6 = **20**.
- ලිපිනය 0x12345678:
  - offset = පහළ bits 6 = 0x38 = **56**
  - index = ඊළඟ bits 6 = **25**
  - tag = ඉහළ bits 20 = **0x12345**
- ලිපිනය 0x12346678 (4096 ක් ඉහළින්): index = **25** නැවතත්. Tag = 0x12346.

**වැදගත් නිරීක්ෂණය:** මෙම cache එකෙහි sets × line = 64 × 64 = **4096 bytes** වේ. එබැවින් KiB 4 ක පරතරයකින් ඇති ලිපින සියල්ල එකම set එකට වැටේ. එවැනි "hot" ලිපින 9 ක් එකවර භාවිතා කළොත්, way 8 ක set එකක් ඒවා රඳවා ගත නොහැක. Cache එකේ ඉතිරි set 63 හිස්ව තිබුණත් misses ඇති වේ.

### 3. CS 61C walkthrough එකක් නැවත ගණනය කිරීම

CS 61C "Set-Associative Cache" සටහනේ cache එක: 32 B, 2-way, 4 B blocks, 12-bit ලිපින.
- blocks = 32/4 = 8. sets = 8/2 = **4**. index bits = **2**, offset bits = **2**, tag bits = 12 − 2 − 2 = **8**.
- "Load byte @ 0xFE2": 0xFE2 = 1111 1110 0010 → tag **0xFE**, index **00**, offset **10**.
- Cache එක සීතල (cold) නිසා **miss** වේ. 0xFE0 සිට block එකක් පූරණය කර tag 0xFE ලියයි.

### 4. Conflict misses ඇස් ඉදිරිපිට (ආදර්ශ trace)

Cache එක: 16 B, 4 B blocks (lines 4). ප්‍රවේශ අනුපිළිවෙල: 0x000, 0x010, 0x000, 0x010.

| ව්‍යුහය | sets | 0x000 | 0x010 | 0x000 | 0x010 |
|---|---|---|---|---|---|
| Direct-mapped | 4 | M (set 0) | M (set 0, ඉවත් කරයි) | M | M |
| 2-way, LRU | 2 | M (set 0) | M (set 0, way 2) | H | H |
| Fully associative | 1 | M | M | H | H |

- 0x000 සහ 0x010 යන දෙකම direct-mapped cache එකේ index 0 ට යයි. ඒවා එකිනෙක ඉවත් කරයි. Cache එකේ lines 3 ක් හිස්ව තිබියදී **misses 4/4** වේ.
- CS 61C "Cache Misses" සටහන්වල වර්ගීකරණයට අනුව: පළමු misses 2 **compulsory** වේ. ඉතිරි 2 fully associative cache එකක සිදු නොවන නිසා **conflict** misses වේ.

**LRU ද බිඳ වැටෙන විට:** 0x000, 0x010, 0x020 නැවත නැවත (A B C A B C) ගනිමු. 2-way LRU cache එකේ මේ තුනම set 0 ට වැටේ. LRU සෑම විටම ඊළඟට අවශ්‍ය වන line එකම ඉවත් කරයි: **misses 6/6**. Lines 4 ක fully associative cache එකකට M M M H H H ලැබේ.

### 5. ලිවීමේ ප්‍රතිපත්ති: write-through එදිරිව write-back

CS 61C "Fully Associative Cache" සටහන්:
- **Write-through:** Cache එකටත් මතකයටත් එකවර ලියයි. සරලය, නමුත් සෑම ලිවීමක්ම මතකයට යයි.
- **Write-back:** Cache එකට පමණක් ලියයි. Line එක ඉවත් කරන විට පමණක් මතකයට ලියයි. **Dirty bit** එකෙන් වෙනස් වූ lines පමණක් ආපසු ලිවීමට ඉඩ සලසයි.

**ආදර්ශ ගණනය:** Loop එකක් එකම 64-byte line එකේ counter එකක් 100 වරක් වැඩි කරයි.
- Write-through: මතක ලිවීම් **100**.
- Write-back: ඉවත් කරන විට **1** (dirty line එක).

Intel SDM Vol. 3A §14.3.2 ("Choosing a Memory Type", p.14-8) ද මෙම වෙනස පෙන්වයි: write-back මතකයට ලිවීම් සම්පූර්ණ lines ලෙස ("line writes") යන අතර, uncacheable මතකයට ඒවා කොටස් ලිවීම් ("partial writes") ලෙස යයි.

### 6. MESI පියවරෙන් පියවර

Intel SDM Vol. 3A, Table 14-4 ("MESI Cache Line States", p.14-9):

| තත්ත්වය | Line වලංගුද? | මතක පිටපත | වෙනත් caches වල පිටපත්? | මෙම line එකට ලිවීමක්… |
|---|---|---|---|---|
| **M** (Modified) | ඔව් | යල් පැන ගිය | නැත | system bus එකට නොයයි |
| **E** (Exclusive) | ඔව් | වලංගු | නැත | system bus එකට නොයයි |
| **S** (Shared) | ඔව් | වලංගු | සමහරවිට | processor එකට line එකේ සුවිශේෂී හිමිකම (exclusive ownership) ලබා ගැනීමට සලස්වයි |
| **I** (Invalid) | නැත | — | සමහරවිට | කෙලින්ම system bus එකට යයි |

MIT 6.823 (L14, slide 24) E තත්ත්වය එකතු කිරීමට හේතුව දක්වයි: වෙනත් කිසිවෙකු line එක රඳවා නොගන්නේ නම් කියවීමකින් එය S වෙනුවට E ලෙස ලැබේ. පසුව ලිවීමක් "නිහඬව" (silently) E → M කරයි. Bus transaction එකක් අවශ්‍ය නැත.

**Cores දෙකක් සහ එක් line X (ආදර්ශ අනුපිළිවෙලක්, ඉහත වගුවෙන් ව්‍යුත්පන්න කළ):**

| පියවර | ක්‍රියාව | Core 0 | Core 1 | Bus එකේ |
|---|---|---|---|---|
| 1 | Core 0 X කියවයි | E | I | කියවීම (වෙනත් පිටපතක් නැත) |
| 2 | Core 0 X ලියයි | M | I | කිසිවක් නැත (E → M නිහඬව) |
| 3 | Core 1 X කියවයි | S | S | Core 0 dirty දත්ත සපයයි / ආපසු ලියයි |
| 4 | Core 1 X ලියයි | I | M | Invalidate (core 1 සුවිශේෂී හිමිකම ගනී) |
| 5 | Core 0 X කියවයි | S | S | Miss. Core 1 දත්ත සපයයි |

**බොරු බෙදාගැනීම (false sharing):** MIT 6.823 L14 (slide 31) මෙසේ පෙන්වයි: coherence ක්‍රියා කරන්නේ block මට්ටමින් මිස word මට්ටමින් නොවේ. P1 word i ද P2 word k ද ලියන විට, ඒ දෙක එකම block එකේ නම් block එක අනවශ්‍ය ලෙස බොහෝ වාරයක් invalidate වේ ("ping-pong"). ඉහත වගුවේ 4–5 පියවර නැවත නැවත සිදු වේ.
- **ආදර්ශ:** bytes 8 ක counters දෙකක් එකම 64-byte line එකක ඇත. Thread දෙකක් එක් counter එකක් බැගින් වැඩි කරයි. ඒවා දත්ත බෙදා නොගත්තද, සෑම ලිවීමකටම අනෙක් core එකේ පිටපත invalidate කළ යුතු විය හැකිය.
- **විසඳුම:** එක් එක් counter එක වෙනම line එකක තබන්න (උදා. bytes 64 ට pad කරන්න).

### 7. පැන්සලෙන් අභ්‍යාසය

1. Cache එකක් 64 KiB, 4-way, 64 B lines, 32-bit ලිපින. Sets, index bits, offset bits, tag bits කීයද?
2. එම cache එකේ එකම set එකට වැටෙන ලිපින අතර පරතරය කීයද?
3. 8 B blocks සහිත 32 B direct-mapped cache එකක් (lines 4). 0x00, 0x20, 0x00, 0x20 යන ප්‍රවේශ hit ද miss ද? එම ප්‍රමාණයේම 2-way LRU cache එකක කෙසේද?
4. Write-back cache එකක් 32-byte line එකක bytes 4 ක words 8 ම එක් වරක් බැගින් ලියයි. පසුව line එක ඉවත් වේ. Write-through සමඟ මතක ලිවීම් කීයද? Write-back සමඟ කීයද?
5. Core 0 හි X තත්ත්වය **S** වේ. Core 0 X ලියයි. Core 0 සහ අනෙක් cores වල X තත්ත්වය කුමක් වේද?

(පිළිතුරු:
1. sets = 65536 / (64 × 4) = **256**. Index = **8**, offset = **6**, tag = 32 − 8 − 6 = **18**.
2. sets × line = 256 × 64 = **16384 B (16 KiB)**.
3. Direct-mapped: index bits 2, offset bits 3. 0x00 සහ 0x20 දෙකම index 0 ට යයි → **M M M M**. 2-way (sets 2): දෙකම set 0 ට යන නමුත් ways දෙකක් ඇත → **M M H H**.
4. Write-through: **8** (සෑම word ලිවීමක්ම). Write-back: **1** line ලිවීමක් (ඉවත් කරන විට, bytes 32).
5. Core 0 සුවිශේෂී හිමිකම ලබා ගනී → Core 0 **M**. අනෙක් පිටපත් **I** වේ.)

**මෙම කොටසේ මූලාශ්‍ර:**
- UC Berkeley CS 61C, *Course Notes* (Spring 2026):
  - "Cache Terminology" (Apple M1 L1 128 KiB 8-way 64 B; L2 12 MiB 12-way 128 B): <https://notes.cs61c.org/content/caches-ii/>
  - "Set-Associative Cache" (tag/index/offset; 32 B 2-way walkthrough, "Load byte @ 0xFE2"): <https://notes.cs61c.org/content/caches-ii/set-associative/>
  - "Fully Associative Cache" (LRU; write-through එදිරිව write-back; dirty bit): <https://notes.cs61c.org/content/caches-ii/fully-associative/>
  - "Cache Misses" (compulsory / capacity / conflict): <https://notes.cs61c.org/content/caches-iii/>
- Intel, *Intel® 64 and IA-32 Architectures Software Developer's Manual, Volume 3 (3A–3D)*, Order No. 325384-093US, September 2026, §14.3.2 (p.14-8), §14.4 සහ Table 14-4 "MESI Cache Line States" (Vol. 3A p.14-9): <https://www.intel.com/content/www/us/en/developer/articles/technical/intel-sdm.html>
- MIT 6.823 *Computer System Architecture*, Spring 2020, Lecture 14 "Cache Coherence" (slide 24 E තත්ත්වය; slide 31 false sharing): <https://csg.csail.mit.edu/6.823S20/Lectures/L14.pdf>
- NIE, *ශ්‍රේණිය 12 තොරතුරු හා සන්නිවේදන තාක්ෂණය ගුරු මාර්ගෝපදේශය*, PDF p.90: <https://nie.lk/pdffiles/tg/sGr12TG%20ICT.pdf>

32 KiB/8-way cache එක, ලිපින 0x12345678, 16 B trace, counter-100 loop, සහ අභ්‍යාසවල cache පරාමිති ආදර්ශ අගයන් වේ. MESI අනුපිළිවෙල Intel වගුවෙන් සහ MIT slide වලින් අප ව්‍යුත්පන්න කළ ආදර්ශයකි.

**පිටවීමේ දොර:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — මන්දගාමී ප්‍රධාන මතකය අසල ඉක්මන් slave store එකක් ලෙස cache අදහසේ මුල් ප්‍රකාශය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

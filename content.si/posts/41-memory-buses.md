---
title: "මතක බස්"
weight: 41
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 40
aliases:
  - /posts/34-memory-buses/
  - /posts/39-memory-buses/
  - /posts/40-memory-buses/
tags: []
summary: "DDR bandwidth මිලදී ගත්තේය; latency කලාතුරකින් චලනය විය — banks සහ channels රැඳීම සඟවයි"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (Posts 32–33) යනු විස්තීරණ උපාංග වෙත මාර්ගයයි. මතක බස් යනු ඇත්ත වශයෙන්ම CPU පෝෂණය කරන මාර්ගයයි — Post 10 හි DRAM — සහ එහි පරිණාමය bandwidth, latency, සහ බලය අතර ධාවන සාකච්ඡාවකි. Generation නාම නොව කතාව. එම තුන අතර බෙදීම ය.

## දෙකම Edges, වේගවත් Clock එකක් නොවේ

DDR — Double Data Rate — rising *සහ* falling edge මත transfer කරයි. එකම clock එකේදී single-data-rate නිර්මාණයකට දළ වශයෙන් දෙගුණ throughput, සංඛ්‍යාතය දෙගුණ කිරීමකින් තොරව (සහ එය සමඟ පැමිණෙන signal-integrity ගැටලු). පළමුව clock බිත්තිය ගෙවීමකින් තොරව bandwidth.

## Bandwidth නැග්ගේය; First-Bit Latency නොගියේය

සෑම DDR generation එකක්ම උපරිම bandwidth ඉහළ දැමුවේය, බොහෝ විට වේගවත් I/O මගින්. Prefetch සහ, DDR5 හි, ස්වාධීන 32-bit subchannels දෙකකට බෙදීම මොඩියුලය මත වැඩි parallelism මිලදී ගනී. ශීර්ෂක අංක සඟවන දේ: අමු ප්‍රවේශ *latency* — ඉල්ලීමේ සිට පළමු bit දක්වා — bandwidth ට වඩා බොහෝ මන්දගාමීව චලනය විය. DRAM ආරම්භ වූ පසු stream එකකට බොහෝ හොඳ වූ අතර, එය කරන තෙක් රැඳීමට පමණක් ටිකක් හොඳ විය. එය Post 35 සඳහා සැකසුමයි. වෙනස් මිනුම, වෙනස් භෞතික විද්‍යාව (charge sensing, capacitor කෝෂ).

## මන්දගාමී ප්‍රවේශයක් සැඟවීමට Parallelism

*Channel* එකක් යනු ස්වාධීන controller මාර්ගයකි — සමගාමී ඉල්ලීම් එකිනෙකා පිටුපස queue විය යුතු නැත. Channel එකක් තුළ, *ranks* සහ *banks* එක් bank එකකට අවසන් කිරීමට (හෝ refresh — Post 10) ඉඩ දෙන අතර අනෙක නව ඉල්ලීමක් ගනී. ප්‍රමාණවත් ස්වාධීන ප්‍රවේශ overlap කරන්න සහ *සමස්ත* throughput ඉහළින් රැඳේ කිසිදු තනි ප්‍රවේශයක් වේගවත් නොවුණත්. එබැවින්ම සංවිධානය පවතී: DIMM විශේෂාංග නාමාවලියක් නොව, ඊළඟ පෝස්ට් එක බිත්තියක් ලෙස නම් කරන latency සැඟවීමේ ක්‍රමයකි.

DIMM යනු භෞතික ඇසුරුමයි — සම්මත edge connector එකක් සහිත පුවරුවක chips — එබැවින් ධාරිතාව "slots කීයක්ද, කුමන ප්‍රමාණයද" වේ, බස් එකේ නැවත නිර්මාණයක් නොවේ.

ඊළඟ පෝස්ට් දෙක මෙම සාකච්ඡාව අඩු වූ විට සිදුවන දේය: මතක බිත්තිය, සහ ගණනය පැත්තේ එහි ඥාතියා, clock-speed බිත්තිය.

## ගැඹුරින්: DDR4 datasheet එකක් කියවමු — MT/s, CL, ns සහ bandwidth ගණනය

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** NIE 12 ශ්‍රේණි ICT ගුරු මාර්ගෝපදේශය (මුද්‍රිත පිටුව 75, PDF පිටුව 88) RAM වර්ග ලෙස **SRAM, DRAM, SDRAM** නම් කර ප්‍රවේශ කාලය, පිරිවැය සහ ධාරිතාව අනුව මතක වර්ග සැසඳීමට කියයි; නමුත් DDR, CAS latency, channels හෝ bandwidth ගණනය එහි නැත. "DDR4 සහ DDR5 අතර වෙනස", "Memory Channels Explained | Sinhala" වැනි පාරිභෝගික මට්ටමේ සිංහල YouTube වීඩියෝ ඇත (මාතෘකාවෙන් පමණක් හඳුනාගත්, අප නැරඹූ ඒවා නොවේ). මෙම කොටස ඊට වඩා ගැඹුරට යයි: සැබෑ Micron datasheet දෙකක අංක භාවිතයෙන්, ඉහත පෙළේ "bandwidth නැග්ගේය, latency නොගියේය" යන ප්‍රකාශය ඔබම ගණනය කර තහවුරු කරයි.

### 1. මූලික පද

- **SDRAM (synchronous DRAM):** clock එකකට සමමුහුර්තව ක්‍රියා කරන DRAM — NIE විෂය නිර්දේශයේ නම් කළ වර්ගය. DDR SDRAM එහි පරම්පරාවකි.
- **DDR (double data rate):** clock එකේ ඉහළ යන *සහ* පහළ යන දාර (edges) දෙකේම දත්ත යැවීම → clock චක්‍රයකට හුවමාරු 2ක්.
- **MT/s (megatransfers per second):** තත්පරයකට මිලියන හුවමාරු. "DDR4-3200" = 3200 MT/s — **3200 MHz clock නොවේ**.
- **tCK:** clock චක්‍ර කාලය.
- **CL (CAS latency):** column කියවීමේ විධානයේ සිට පළමු දත්තය දක්වා clock චක්‍ර ගණන.
- **tRCD:** row එකක් විවෘත කිරීමේ (activate) සිට column විධානය දක්වා අවම කාලය; **tRP:** විවෘත row එකක් වසා දැමීමට (precharge) කාලය.
- **Bank, bank group, row, column, page:** DRAM chip එකක් ඇතුළත ස්වාධීන කොටස් (banks), ඒවා කණ්ඩායම් (bank groups), එක් bank එකක කෝෂ පේළි (rows) සහ තීරු (columns); විවෘත row එකක ප්‍රමාණය *page size* යි.
- **Burst length (BL8):** එක් කියවීම් විධානයකින් අඛණ්ඩව යන හුවමාරු 8ක්.
- **Channel:** CPU එකේ මතක controller එකේ සිට මොඩියුල වෙත යන ස්වාධීන මතක මාර්ගයක්; පහත උදාහරණ මොඩියුලයේ දත්ත පළල bits 64 කි.

### 2. ns වලින් latency — CL තනිව අර්ථ විරහිතයි

Micron 8Gb DDR4 component datasheet හි Table 1 (පිටු 1–2) වේග ශ්‍රේණි ලැයිස්තුගත කරයි. සූත්‍රය: **latency (ns) = CL × tCK**, සහ tCK = 2 ÷ (MT/s) මයික්‍රො-තත්පර (clock එකකට හුවමාරු 2 නිසා).

| වේග ශ්‍රේණිය | MT/s | tCK | CL | CL × tCK |
|---|---|---|---|---|
| DDR4-1600 (පසුගාමී අනුකූලතාව) | 1600 | 1.25 ns | 11 | **13.75 ns** |
| DDR4-1866 | 1866 | 1.071 ns | 13 | **13.92 ns** |
| DDR4-2400 | 2400 | 0.833 ns | 17 | **14.16 ns** |
| DDR4-3200 | 3200 | 0.625 ns | 22 | **13.75 ns** |

DDR4-1600 සිට DDR4-3200 දක්වා **දත්ත වේගය දෙගුණ වූ නමුත් පළමු දත්තය දක්වා කාලය හරියටම එකමයි (13.75 ns)**. CL අංකය 11 සිට 22 දක්වා "නරක" වූ බව පෙනුණත්, සෑම චක්‍රයක්ම අඩකින් කෙටි නිසා නැනෝ තත්පර නොවෙනස්ව පවතී. ඉහත පෙළේ ප්‍රකාශයේ සාක්ෂිය මෙයයි: *bandwidth නැග්ගේය; first-bit latency නොගියේය*.

### 3. Bandwidth — එක් channel එකක් සඳහා

Micron 8GB DDR4 UDIMM datasheet (MTA8ATF1G64AZ, පිටුව 2) මොඩියුලය "1 Gig x 64" ලෙස විස්තර කරයි — දත්ත පළල **bits 64 = බයිට් 8**, සහ එහි මූලික උපාංගය x8 chip (MT40A1G8) නිසා 64 ÷ 8 = chips **8ක්** පැත්තෙන් පැත්තට.

**Bandwidth = MT/s × බයිට් 8:**

| මොඩියුලය | ගණනය | datasheet හි අගය |
|---|---|---|
| DDR4-2400 | 2400 × 10⁶ × 8 = 19.2 × 10⁹ | 19.2 GB/s |
| DDR4-2666 | 2666 × 10⁶ × 8 ≈ 21.3 × 10⁹ | 21.3 GB/s |
| DDR4-3200 | 3200 × 10⁶ × 8 = 25.6 × 10⁹ | 25.6 GB/s |

channels දෙකක් (dual channel) සමගාමීව භාවිතා කළොත් උපරිම අගය දෙගුණ වේ: DDR4-3200 × 2 = **51.2 GB/s** (අපේ ගණනය; channels ස්වාධීනව සමානව කාර්යබහුල නම් පමණි).

### 4. සැබෑ කියවීමක කාල රේඛාව — සහ parallelism අවශ්‍ය වන්නේ ඇයි

DDR4-3200 හි (tRCD = CL = tRP = 13.75 ns) බයිට් 64 ක burst එකක් (BL8 × බයිට් 8) කියවීම. burst එකේ කාලය = හුවමාරු 8 × (1 ÷ 3200 MT/s) = 8 × 0.3125 ns = **2.5 ns**.

| අවස්ථාව | පියවර | මුළු කාලය |
|---|---|---|
| Row hit (අවශ්‍ය row එක දැනටමත් විවෘතයි) | CL + burst | 13.75 + 2.5 = **16.25 ns** |
| Bank idle (row වසා ඇත) | tRCD + CL + burst | 13.75 + 13.75 + 2.5 = **30 ns** |
| Row conflict (වෙනත් row එකක් විවෘතයි) | tRP + tRCD + CL + burst | 13.75 × 3 + 2.5 = **43.75 ns** |

**වරකට එක් ඉල්ලීමක් පමණක්** නම් (bank idle අවස්ථාව): බයිට් 64 ÷ 30 ns ≈ **2.13 GB/s** — උපරිම 25.6 GB/s හි **8.3%** පමණි! දත්ත බස් එක කාර්යබහුල වන්නේ 30 ns න් 2.5 ns ක් පමණි.

බස් එක පිරවීමට එකවර ඉල්ලීම් කීයක් "පියාසර කළ" යුතුද? 30 ns ÷ 2.5 ns = **12** (Little's law හි සරල යෙදීමක්; tRRD, tFAW වැනි අමතර සීමා මෙහි නොසලකා හැර ඇත — ඒ නිසා මෙය පහළ සීමාවක් පමණි). මෙම ඉල්ලීම් වෙනස් **banks** වලට යා යුතුය; එක් bank එකකට එකවර එක් row එකක් පමණක් විවෘත කළ හැකි නිසා. component datasheet එක (පිටුව 1) x8 chip එකක **banks 16ක් — bank groups 4 × banks 4** ඇති බව කියයි. ඉහත පෙළේ "banks සහ channels රැඳීම සඟවයි" යන්නෙහි අංක මෙයයි.

### 5. chip එකක ධාරිතාව තහවුරු කරමු

component datasheet හි Table 2 (පිටුව 2) — x8 (1024 Meg x 8) සඳහා:

- bank groups 4 × banks 4 = banks **16**
- rows 64K (A[15:0] → 2¹⁶ = 65,536)
- columns 1K (A[9:0] → 2¹⁰ = 1,024)
- column එකකට bits **8** (x8)

16 × 65,536 × 1,024 × 8 = **8,589,934,592 bits = 8 Gib** — chip නාමයේ "8Gb" හරියටම. මොඩියුලයේ chips 8 × 8 Gb = 64 Gb = **8 GB** — මොඩියුල නාමයේ "8GB". Page size = 2^(column bits) × (DQ bits ÷ 8) = 2¹⁰ × 1 = **1 KB** (datasheet සූත්‍රය; x8 සඳහා 1KB ලෙස වගුවේම ඇත). Post 31 හි "ලිපින රැහැන් n → ස්ථාන 2ⁿ" නීතිය මෙහි row සහ column ලිපින දෙකටම යෙදේ.

**Refresh (Post 10):** datasheet එක "64ms, 8192-cycle refresh" (85°C දක්වා) ලෙස දක්වයි → refresh විධාන අතර සාමාන්‍ය පරතරය 64 ms ÷ 8192 = **7.8 µs**. සෑම 7.8 µs කට වරක් banks කෙටි කාලයකට කාර්යබහුල වේ — latency අවිනිශ්චිත වීමට තවත් හේතුවක්.

### 6. දැන්ම උත්සාහ කරන්න (මෙම පිටුවේ lab එකක් නැත)

ඔබේ පරිගණකයේ RAM stick එකේ ලේබලය හෝ ගැනුම් බිල්පත බලන්න (උදා. "DDR4-3200 CL22"). ඉහත සූත්‍ර දෙකෙන් ගණනය කරන්න: (අ) latency = CL × 2000 ÷ MT/s ns; (ආ) එක් channel bandwidth = MT/s × 8 MB/s.

### 7. පැන්සලෙන් අභ්‍යාසය

1. DDR4-2666 CL19 සඳහා tCK සහ latency ns කීයද?
2. DDR4-2400 CL16 (13.32 ns) සහ DDR4-3200 CL22 (13.75 ns): පළමු දත්තය වේගයෙන් ලැබෙන්නේ කුමකින්ද? එක් channel bandwidth අනුව කුමක් වඩා හොඳද?
3. DDR4-2400 dual-channel පද්ධතියක උපරිම bandwidth කීයද?
4. DDR4-3200 හි row conflict එකකදී, වරකට එක් ඉල්ලීමක් පමණක් නම් ලැබෙන bandwidth කීයද?
5. 85°C ට වැඩි උෂ්ණත්වයේදී datasheet එක "32ms, 8192-cycle refresh" කියයි. refresh පරතරය කීයද?

(පිළිතුරු: 1 → tCK = 2000 ÷ 2666 ≈ **0.75 ns**; 19 × 0.75 = **14.25 ns** (datasheet Table 1 හි අගයම). 2 → latency අනුව **DDR4-2400 CL16** ටිකක් වේගවත් (0.43 ns); bandwidth අනුව **DDR4-3200** (25.6 vs 19.2 GB/s). 3 → 19.2 × 2 = **38.4 GB/s**. 4 → 64 ÷ 43.75 ns ≈ **1.46 GB/s** (උපරිමයේ 5.7%). 5 → 32 ms ÷ 8192 ≈ **3.9 µs**.)

**මෙම කොටසේ මූලාශ්‍ර:** Micron, *8Gb: x4, x8, x16 DDR4 SDRAM* datasheet, Rev. M 10/17 (8gb_ddr4_dram.pdf; අප විවෘත කළ පිටපත: <https://xonstorage.z8.web.core.windows.net/pdf/1665304_MT40A1G8WE083EB_link.pdf>) — පිටුව 1 (විශේෂාංග: banks 16 = කණ්ඩායම් 4 × 4, 8n prefetch, 64ms/8192 refresh; Table 1: -062E DDR4-3200 22-22-22 = 13.75 ns), පිටුව 2 (Table 1 ඉතිරිය සහ පසුගාමී අනුකූලතා සටහන් — 1600 CL11; Table 2 ලිපිනකරණය සහ page size සූත්‍රය). Micron, *8GB (x64, SR) 288-Pin DDR4 UDIMM* (MTA8ATF1G64AZ) datasheet, Rev. G 3/21 (අප විවෘත කළ පිටපත: <https://www.yic-electronics.com/datasheet/06/MTA8ATF1G64AZ-3G2E1.pdf>) — පිටුව 1 (BL8, PC4-3200), පිටුව 2 (Table 3: 1 Gig x 64, 25.6 / 21.3 / 19.2 GB/s, මූලික උපාංගය MT40A1G8). NIE 12 ශ්‍රේණි ICT ගුරු මාර්ගෝපදේශය, මුද්‍රිත පිටුව 75: <https://nie.lk/pdffiles/tg/sGr12TG%20ICT.pdf>. කාල රේඛා සහ "ඉල්ලීම් 12" ගණනය අපේ සරල ආදර්ශයයි.


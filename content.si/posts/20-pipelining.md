---
title: "Pipelining"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 19
aliases:
  - /posts/13-pipelining/
  - /posts/18-pipelining/
  - /posts/19-pipelining/
tags: []
summary: "Throughput සඳහා උපදෙස් අතිච්ඡාදනය කරන්න — පසුව hazards මගින් forwarding, stalls, සහ ඊට පසු සියල්ල බල කෙරේ"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

තනි-චක්‍ර datapath එක (Post 12) throughput මේසය මත තබා හරියි: සෑම උපදෙස් එකක්ම මන්දගාමීම මාර්ගයට රැඳෙයි. Pipelining ක්‍රියාත්මක කිරීම අදියරවලට කපා, විවිධ උපදෙස් *එකවර* විවිධ අදියරවල රැඳෙන්නට ඉඩ දෙයි.

## අදියර පහක්, අතිච්ඡාදනය වූ

සම්භාව්‍ය RISC pipeline එකක්: **IF** (fetch), **ID** (decode / register කියවීම), **EX** (ALU), **MEM** (load/store), **WB** (write back). Pipeline registers (නැවතත් Post 9) සෑම clock එකකදී අදියර අතර ප්‍රතිඵල latch කරයි.

උපදෙස් N EX හි ඇති අතරතුර, N+1 ID හිත් N+2 IF හිත් රැඳිය හැක. Steady state එකේදී නව උපදෙස් එකක් *සම්පූර්ණ වන්නේ* සෑම චක්‍රයකම — එක් එක් එක ආරම්භයේ සිට අවසානය දක්වා තවමත් චක්‍ර පහක් ගත කළද. Latency රැඳෙයි; throughput ඉහළ යයි. එම වෙන්කිරීම මෙයින් පසු සෑම තැනකම දිස් වේ.

**දැන් මෙය උත්සාහ කරන්න.** පහත mini-CPU එක උපදෙස් එකකට වරක් Step කරන්න — එය Post 12 දෘශ්‍යමාන කළ තනි-චක්‍ර පුරුද්දයි. Pipelining ගේ ඔට්ටුව throughput ය: එකම fetch / decode / execute කොටස් උපදෙස් හරහා අතිච්ඡාදනය වීම, ටික් එකකට සම්පූර්ණ උපදෙස් එකක් නොවේ. අනුක්‍රමික Step එක දැනෙන්න, පසුව සැබෑ pipelines එතරම් සරලව රැඳිය නොහැකි වන්නේ ඇයි යන්න දැනගෙන hazard කොටස කියවන්න.

{{< lab type="mini-cpu" >}}

## Hazards: ස්වාධීනත්වය බිඳෙන තැන්

උපදෙස් කලාතුරකින් ස්වාධීන වේ.

**Data hazards** — උපදෙස් එකකට අවශ්‍ය අගයක්, තවමත් ගුවන්ගතව ඇති පෙර උපදෙස් එකක් ලිවීම අවසන් කර නැත. **Forwarding** (bypassing) ALU ප්‍රතිඵලය පසු pipeline register එකකින් සෘජුව EX වෙත යළි මාර්ගගත කරයි — register file එක මඟහරිමින් — එබැවින් යැපෙන උපදෙස් එකට බොහෝ විට stall අවශ්‍ය නොවේ. Forwarding සෑම පරතරයක්ම වසා දැමිය නොහැක: load එකකට වහාම පසුව භාවිතයක් තිබේ නම්, MEM අදියර අවසන් වන තුරු තවමත් **stall** එකක් (bubble එකක්) අවශ්‍ය වේ.

**Control hazards** — branches. Pipeline එකට taken/not-taken, හෝ ඉලක්කය, ප්‍රමාද වන තුරු නොදැනේ — නමුත් පසු උපදෙස් දැනටමත් fetch කර ඇත. Taken branch එකකදී ඒවා flush කළ යුතුය. වැරදි මාර්ගයේ ගත කළ චක්‍ර නාස්තියකි.

## එම වියදම් ඊළඟට බල කරන දේ

Misprediction flush මිල අධිකය — එබැවින්ම branch prediction (Post 14) පවතී: මුලින්ම සහ ප්‍රමාණවත් නිරවද්‍යතාවයකින් අනුමාන කරන්න, flush දුර්ලභ වන තරමට. Load-use stall එක නිසාම out-of-order execution (Post 16) පවතී: රැඳෙන උපදෙස් එක පමණක් stall කරන්න, සම්පූර්ණ pipeline එක නොවේ, සහ ඊට පසු ස්වාධීන වැඩ ධාවනය වන්නට ඉඩ දෙන්න.

## ගැඹුරින්: pipeline කාල ගණිතය, forwarding සහ load-use stall චක්‍රයෙන් චක්‍රයට

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** Pipelining ගැන සිංහලෙන් යම් තරමක ද්‍රව්‍ය තිබේ, නමුත් ඒවා නොගැඹුරුය.
> - si.wikipedia හි "CPU - නියෝග නල මාර්ග (Instruction pipeline)" ලිපිය (අක්ෂර ~2.9k) අදියර පහ නම් කරයි. ඊට අමතරව, "උපද්‍රව" (hazards) සහ "ෆෝවර්ඩින් හා ස්ටෝලින්" (forwarding and stalling) යන වචන සඳහන් කරයි.
> - Chamali නාලිකාවේ pipelining වීඩියෝවක් ද ඇත ([YT vPTmNtIi4gI](https://www.youtube.com/watch?v=vPTmNtIi4gI)). අප එය හඳුනා ගත්තේ මාතෘකාවෙන් පමණි. එය නැරඹුවේ නැත.
> - NIE A/L ICT ගුරු මාර්ගෝපදේශ (Gr12, Gr13) සහ සම්පත් පොතේ text layer එකෙහි "pipelining" යන ඉංග්‍රීසි පදය හමු නොවීය.
>
> ඒ කිසිවක පහත දේවල් නැත: කාල ගණනය, අදියර අසමතුලිතතාව (stage imbalance), චක්‍රයෙන් චක්‍රයට hazard වගුවක්, load-use stall එක ඇයි වළක්වා ගත නොහැක්කේද යන්න. මෙම කොටස UC Berkeley CS 61C පාඨමාලා සටහන් භාවිතා කර ඒවා ගණනයෙන් පෙන්වයි. Branch penalty සහ predictors Post 14 හි ද, out-of-order ක්‍රියාත්මක කිරීම Post 16 හි ද ආවරණය වේ. මෙහි ඒවා නැවත නොකියමු.

### 1. මූලික පද

- **අදියර (stage):** උපදෙසක (instruction) ක්‍රියාවලියේ එක් කොටසකි: IF, ID, EX, MEM, WB.
- **Pipeline register:** අදියර දෙකක් අතර ඇති register එකයි. සෑම clock එකකදීම එය ප්‍රතිඵල ඊළඟ අදියරට යවයි.
- **ප්‍රමාදය (latency):** එක් උපදෙසක් ආරම්භයේ සිට අවසානය දක්වා ගන්නා කාලයයි.
- **ප්‍රතිදාන වේගය (throughput):** ඒකක කාලයකදී අවසන් වන උපදෙස් ගණනයි.
- **Bubble / stall:** Pipeline එකට හිතාමතාම ඇතුළු කරන හිස් චක්‍රයකි (nop).
- **Load delay slot:** Load උපදෙසකට වහාම පසුව ඇති ස්ථානයයි.

### 2. අදියර පහේ කාල ගණනය (CS 61C අගයන්)

CS 61C සටහන් ("Pipelining Laundry" කොටස) තනි-චක්‍ර (single-cycle) processor එකක අදියර කාල මෙසේ ගනී:

| අදියර | IF | ID | EX | MEM | WB |
|---|---|---|---|---|---|
| කාලය | 200 ps | 100 ps | 200 ps | 200 ps | 100 ps |

- **තනි-චක්‍ර:** clock period = 200 + 100 + 200 + 200 + 100 = **800 ps**, එනම් 1.25 GHz.
- **Pipeline:** සියලු අදියර එකම clock එකක් බෙදා ගනී. එබැවින් period එක මන්දගාමීම අදියරට සමාන වේ: **200 ps** (5 GHz).
- **එක් උපදෙසක ප්‍රමාදය:** 5 × 200 = **1000 ps**. එය තනි-චක්‍ර 800 ps ට වඩා *වැඩිය*. ID සහ WB 100 ps වැඩක් සඳහා 200 ps බලා සිටී.

**උපදෙස් n ක් සඳහා මුළු කාලය:** k-අදියර pipeline එකක් පිරවීමට (fill) චක්‍ර k − 1 ක් යයි. ඉන්පසු සෑම චක්‍රයකම එක් උපදෙසක් අවසන් වේ:

**T_pipe = (k + n − 1) × t_cycle**

CS 61C උදාහරණය (lw උපදෙස් 10⁶):
- තනි-චක්‍ර: 10⁶ × 800 ps = **800,000,000 ps**
- Pipeline: (10⁶ + 4) × 200 ps = **200,000,800 ps**
- අනුපාතය ≈ 800/200 = **4×**. එය 5× නොවේ.

සටහන් එයට හේතු දෙකක් දෙයි: අදියර සම්පූර්ණයෙන් සමතුලිත නැත, සහ pipelining සඳහා අමතර වියදමක් (overhead) ඇත.

**Overhead එකේ බලපෑම (ආදර්ශ අගයන්):** සෑම pipeline register එකක්ම setup සහ clock-to-output සඳහා 20 ps ක් එකතු කරයි යැයි සිතමු. එවිට t_cycle = 200 + 20 = 220 ps වේ. වේගවත් වීම 800/220 ≈ **3.6×** දක්වා අඩු වේ.

එම තර්කයම ගැඹුරු pipeline වලටද අදාළය. 800 ps තර්කය අදියර 10 කට සම්පූර්ණයෙන් සමව බෙදුවොත් සෑම අදියරක්ම 80 ps වේ. 20 ps overhead එක සමඟ t_cycle = 100 ps වන අතර වේගවත් වීම **8×** වේ. එය 10× නොවේ. අදියර ගණන වැඩි වන තරමට overhead එක cycle එකෙන් විශාල කොටසක් බවට පත් වේ.

**කෙටි වැඩසටහන් සඳහා (ආදර්ශ):** n = 5 නම් තනි-චක්‍ර කාලය 5 × 800 = 4000 ps ද pipeline කාලය (5 + 4) × 200 = 1800 ps ද වේ. වේගවත් වීම ≈ **2.2×** පමණි. Fill කාලය එහි ආධිපත්‍යය දරයි.

### 3. Forwarding: stall නැති දත්ත hazard එකක්

CS 61C "Data Hazards" සටහනේ Example 3:

```
add s0, t0, t1
sub t2, s0, t0
or  t6, s0, t3
```

| උපදෙස | 1 | 2 | 3 | 4 | 5 | 6 | 7 |
|---|---|---|---|---|---|---|---|
| add | IF | ID | EX | MEM | WB | | |
| sub | | IF | ID | **EX** | MEM | WB | |
| or | | | IF | ID | **EX** | MEM | WB |

- add හි එකතුව චක්‍රය 3 හි EX අවසානයේ සූදානම්ය. නමුත් register file එකට ලියවෙන්නේ චක්‍රය 5 හි WB හිදීය.
- **MEM → EX forwarding:** චක්‍රය 4 දී අගය EX/MEM pipeline register එකෙන් කෙලින්ම sub හි ALU එකට යයි.
- **WB → EX forwarding:** චක්‍රය 5 දී අගය MEM/WB register එකෙන් or හි ALU එකට යයි.
- ප්‍රතිඵලය: **stall නැත**. උපදෙස් 3 ක් චක්‍ර 3 + 4 = **7** කින් අවසන් වේ.

Register file එක "write-then-read" ලෙස සැලසුම් කර ඇත්නම් (WB පළමු අර්ධයේ ලියයි, ID දෙවන අර්ධයේ කියවයි), චක්‍ර තුනක් ඈතින් ඇති යැපීමකට forwarding පවා අවශ්‍ය නොවේ.

### 4. Load-use: forwarding පවා බේරා ගත නොහැකි තැන

CS 61C Example 4 (Table 7):

```
add s0, t1, t2
lw  s1, 8(s0)
or  t3, s1, t5     # s1 ට වහාම අවශ්‍යයි
and t4, s1, t2
```

| උපදෙස | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|---|---|---|---|---|---|---|---|---|
| add | IF | ID | EX | MEM | WB | | | | |
| lw | | IF | ID | EX | **MEM** | WB | | | |
| or → nop | | | IF | ID | — | — | — | | |
| or | | | | IF | ID | **EX** | MEM | WB | |
| and | | | | | IF | ID | EX | MEM | WB |

- lw හි දත්ත මතකයෙන් ලැබෙන්නේ චක්‍රය 5 හි **MEM අවසානයේදීය**. or ට එය චක්‍රය 5 හි **EX ආරම්භයේදීම** අවශ්‍යය. කාලයේ පසුපසට යවන්නට forwarding එකකට නොහැක.
- ID අදියරේ ඇති hazard detection unit එක bubble එකක් ඇතුළු කරයි. or හි EX චක්‍රය 6 දක්වා කල් යයි. එවිට WB → EX forwarding ක්‍රියා කරයි.
- and හි EX චක්‍රය 7 දී වේ. lw විසින් s1 චක්‍රය 6 දී ලියන නිසා (write-then-read register file) and ට අමතර stall එකක් අවශ්‍ය නැත. එහෙත් or පසු වූ නිසා and ද එක් චක්‍රයක් පසු වේ.
- ප්‍රතිඵලය: උපදෙස් 4 ක් stall නැතිව චක්‍ර 4 + 4 = 8 කින් අවසන් විය යුතුය. Stall එක නිසා **9** ක් ගත වේ.

**CPI මත බලපෑම (ආදර්ශ අගයන්):** උපදෙස්වලින් 25% ක් loads යැයි ද, ඉන් 40% කට වහාම පසුව භාවිතයක් ඇතැයි ද සිතමු. එවිට උපදෙසකට stalls = 0.25 × 0.4 × 1 = 0.1 වේ. **CPI = 1 + 0.1 = 1.1** වේ. එනම් 10% ක කාර්ය සාධන අලාභයකි.

### 5. Compiler එකෙන් stall ඉවත් කිරීම (code scheduling)

CS 61C සටහන් `A[3] = A[0] + A[1]; A[4] = A[0] + A[2];` සඳහා සරල සම්පාදනයක් පෙන්වයි:

```
lw  t0, 0(a0)
lw  t1, 4(a0)
add t2, t0, t1     # stall 1
sw  t2, 12(a0)
lw  t3, 8(a0)
add t4, t0, t3     # stall 1
sw  t4, 16(a0)
```

`lw t3` එක දෙවන lw ට පසුව (`add t2` ට පෙර) ඉහළට ගෙන ගිය විට, load delay slot දෙකේම ස්වාධීන උපදෙස් ඇත. සටහන්වලට අනුව, forwarding සමඟ **stall නැත**.

- ගණනය: උපදෙස් 7 ක් = චක්‍ර 7 + 4 = 11 ක් stall නැතිව. පළමු අනුපිළිවෙලට stalls 2 ක් සමඟ **13** ක් වේ. නැවත පෙළගැස්වූ අනුපිළිවෙලට **11** ක් වේ.
- Post 16 හි out-of-order දෘඪාංගය මෙම නැවත පෙළගැස්වීමම ධාවන කාලයේදී (runtime) කරයි.

### 6. ව්‍යුහාත්මක hazard (structural hazard)

CS 61C "Structural Hazards" සටහන්: සම්පත් එකක් (resource) එකම චක්‍රයේ උපදෙස් දෙකකට අවශ්‍ය වූ විට එය ඇති වේ.
- RV32I pipeline එකෙහි උපදෙස් මතකය (IMEM) සහ දත්ත මතකය (DMEM) වෙනම ඒකක වේ. (ඇත්ත වශයෙන්ම ඒවා වෙනම L1 caches වේ; Post 15.)
- එක් මතක port එකක් පමණක් තිබුණේ නම්, IF හි ඇති උපදෙසක් සහ MEM හි ඇති load එකක් එකම චක්‍රයේ ගැටෙනු ඇත.
- Register file එකද කියවීම් දෙකක් සහ ලිවීමක් එකවර ඉඩ දෙන ලෙස සැලසුම් කර ඇත්තේ එබැවිනි.

### 7. පැන්සලෙන් අභ්‍යාසය

1. අදියර කාල 250, 150, 250, 200, 150 ps (ආදර්ශ අගයන්). තනි-චක්‍ර period එක කීයද? Pipeline period එක කීයද? උපදෙස් විශාල ගණනකට වේගවත් වීම කීයද? එක් pipeline register එකකට 25 ps overhead එකක් එකතු කළොත් කීයද?
2. අදියර 5 ක pipeline එකක උපදෙස් 100 ක් stall නැතිව ධාවනය වේ. චක්‍ර කීයක් ගත වේද? සඵල CPI (චක්‍ර ÷ උපදෙස්) කීයද?
3. `lw x1, 0(x2)` → `add x3, x1, x4` → `sub x5, x3, x6`. Forwarding ඇති 5-අදියර pipeline එකක stalls කීයද? මුළු චක්‍ර කීයද?
4. ඉහත අනුපිළිවෙලට ස්වාධීන `lw x7, 4(x2)` එකක් එකතු කළ යුතුය. Stall නැති වන පරිදි එය කොතැනක තැබිය යුතුද?
5. ඉහත mini-CPU lab එකේ Step පහක් කර, එක් Step එකකට එක් උපදෙසක් යන බව බලන්න. එම උපදෙස් පහ ස්වාධීන යැයි සිතමු. ඒවා 5-අදියර pipeline එකක (stall නැතිව) ධාවනය වූවා නම් චක්‍ර කීයක් ගත වේද?

(පිළිතුරු:
1. 250 + 150 + 250 + 200 + 150 = **1000 ps**. Pipeline period = **250 ps**. වේගවත් වීම ≈ 1000/250 = **4×**. Overhead සමඟ 1000/275 ≈ **3.6×**.
2. 5 + 100 − 1 = **104** චක්‍ර. CPI = 104/100 = **1.04**.
3. lw → add අතර load-use නිසා **stall 1** ක් ඇත. add → sub අතර MEM → EX forwarding ඇති නිසා stall නැත. මුළු චක්‍ර = 3 + 4 + 1 = **8**.
4. `lw x1` සහ `add` අතරට: `lw x1` → `lw x7` → `add` → `sub`. එවිට x1 දෙකක් පිටුපසින් ඇති නිසා WB → EX forwarding ප්‍රමාණවත් වේ. Stall නැත. චක්‍ර = 4 + 4 = **8**.
5. 5 + 4 = **9** චක්‍ර. (Lab එක එක් උපදෙසක් බැගින් පෙන්වයි. Pipeline එකක අතිච්ඡාදනය එහි නොපෙන්වයි.))

**මෙම කොටසේ මූලාශ්‍ර:**
- UC Berkeley CS 61C, *Course Notes* (Lisa Yan සහ CS 61C උපදේශකයින්, Spring 2026):
  - "Pipelining Laundry" (§5 අදියර කාල 200/100/200/200/100 ps; 800 ps එදිරිව 200 ps; 800,000,000 ps එදිරිව 200,000,800 ps; "Why not a 5x speedup?"): <https://notes.cs61c.org/content/pipeline/laundry/>
  - "Data Hazards" (Example 3 forwarding; Example 4 / Table 7 load-use bubble; §5.2 code scheduling): <https://notes.cs61c.org/content/pipeline-hazards/data-hazards/>
  - "Structural Hazards" (RegFile සහ IMEM/DMEM): <https://notes.cs61c.org/content/pipeline-hazards/structural-hazards/>
- si.wikipedia, "CPU - නියෝග නල මාර්ග (Instruction pipeline)": <https://si.wikipedia.org/wiki/CPU_-_නියෝග_නල_මාර්ග_(Instruction_pipeline)>

20 ps සහ 25 ps overhead, අදියර-10 බෙදීම, n = 5, 25%/40% load අනුපාත, සහ අභ්‍යාසයේ අදියර කාල ආදර්ශ අගයන් වේ.


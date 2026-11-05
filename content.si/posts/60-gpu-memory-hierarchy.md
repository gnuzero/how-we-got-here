---
title: "GPU මතක ධුරාවලිය"
weight: 60
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 59
aliases:
  - /posts/54-gpu-memory-hierarchy/
tags: []
summary: "දහස් ගණන් threads DDR ට වඩා bandwidth බල කරයි — HBM මතකය compute අසල stack කරයි"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

Post 35 මතක බිත්තිය නම් කළේය: DRAM latency compute ට පසුපසින් ගියේය, එබැවින් latency මුරණ්ඩුවෙන් රැඳුණු තැන කර්මාන්තය *bandwidth* පසුපස ගියේය. එම ප්‍රතිචාරය GPU මතකයේ තරම් ප්‍රතිවිපාක සහිත තැනක් නැත — Posts 52–53 හි සමාන්තර throughput සාම්ප්‍රදායික DDR (Post 34) පෝෂණය කළ නොහැකි ආශාවක් නිර්මාණය කරයි.

## GPU CPU-විලාස මතකයේ කුසගින්නෙන් පෙළෙන්නේ ඇයි

CPU එකක් මධ්‍යස්ථ උපදෙස් ප්‍රවාහ ගණනක් ධාවනය කරයි; caches (Post 15) බොහෝ විට working set එක අවශෝෂණය කරයි. GPU එකකට බොහෝ SM හරහා දහස් ගණන් threads එකවර මතකය අවශ්‍ය විය හැක. On-chip caching උපකාරී වේ, නමුත් aggregate bandwidth ඉල්ලුම සමාන බලයකදී CPU මතක උපපද්ධතියකට වඩා නාටකාකාර ලෙස ඉහළ ය — වෙනස් භෞතික පිළිතුරක් බල කළ සීමාව.

## HBM: Die එක අසල Stack කරන්න

High Bandwidth Memory DRAM dies සිරස්ව stack කරයි, වෙනම DIMM එකකට දිගු PCB traces වෙනුවට through-silicon vias (TSV) හරහා සම්බන්ධ වේ. ඉතා පුළුල් interface එකක් සමඟ ඒකාබද්ධව, එය සමාන DDR ට වඩා බොහෝ bandwidth ලබා දෙයි — Post 51 හි advanced packaging මිලට. HBM සහ GPU compute die එක සාමාන්‍යයෙන් සිලිකන් interposer එකක් බෙදා ගනී: chiplets සඳහා භාවිතා කළ එම packaging පවුලම, මෙහිදී ක්‍රියාකාරී dies බෙදීම වෙනුවට මතකය compute *අසල* තැබීමට යොදන ලදී.

## GPU ඇතුළත ධුරාවලිය

HBM-එදිරිව-DDR ඉක්මවා, GPU ට තමන්ගේ pyramid එකක් ඇත — Post 10 හි register–cache–main-memory හැඩය GPU-විශේෂිත මට්ටම් සමඟ ප්‍රතිධ්වනි කරමින්. එක් එක් SM හි register file යනු වේගවත්ම දේශීය ගබඩාවයි. Shared memory — SM එකේ programmer-managed scratchpad එකක් — block එකක threads ට තව දුරටත් round-trip නොකර දත්ත බෙදා ගැනීමට ඉඩ දෙයි. L2 cache එක මුළු GPU එකම ආවරණය කරයි. HBM යනු "ප්‍රධාන මතක" මට්ටමයි: CPU DRAM ට වඩා බොහෝ ඉහළ bandwidth, තවමත් on-chip ඕනෑම දෙයකට වඩා ඉහළ latency — එම latency-එදිරිව-capacity tradeoff එකම, GPU පරිමාණයේ.

## ඊළඟ දේ පෝෂණය කිරීම

මෙම ගෘහ නිර්මාණය පවතින්නේ විශාල compute ආශාවක් පෝෂණය කිරීමට ය. Peak FLOPS අර්ථයක් නැත operands පැමිණිය නොහැකි නම් සහ ප්‍රතිඵල පිටවිය නොහැකි නම්. ඊළඟ පෝස්ට් එකේ tensor cores යනු HBM හි bandwidth සැපයීමට ගොඩනැගූ compute ව්‍යුහයයි — bandwidth රාමුව ඉදිරියට ගෙන යන්න: tensor core එකක peak අර්ථවත් වන්නේ එය පවත්වා ගත හැකි මතක පද්ධතියකට එරෙහිව පමණි.

## ගැඹුරින්: GPU මතකය අංකවලින් — HBM bandwidth, coalescing සහ shared memory banks

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "HBM memory sinhala", "GPU architecture sinhala" සෙවුම්වලින් 2026 සැප්තැම්බරයේ සිංහල පැහැදිලි කිරීමක් අපට හමු නොවීය. පහත සංඛ්‍යා NVIDIA A100 whitepaper එකෙන් සහ CUDA Programming Guide (2026 සැප්තැම්බර් 10 අනුවාදය) එකෙනි; "ridge point" සහ bank ගණනය කිරීම් එම අංකවලින් අප ව්‍යුත්පන්න කළ ඒවාය.

### 1. මූලික පද

- **HBM (High Bandwidth Memory):** DRAM dies සිරස්ව stack කර, GPU එක අසල ඉතා පුළුල් interface එකකින් සම්බන්ධ කළ මතකය.
- **ගෝලීය මතකය (global memory):** GPU හි device memory (A100 හි HBM2) — සියලු threads ට පෙනේ; විශාලතම සහ මන්දගාමීම මට්ටම.
- **Shared memory:** SM එකක ඇති, block එකක threads බෙදා ගන්නා, programmer විසින් කළමනාකරණය කරන scratchpad එකක්; L1 cache එක සමඟ එකම භෞතික සම්පත භාවිතා කරයි.
- **Registers:** thread එකකට පමණක් පෙනෙන, SM එකේ ඇති වේගවත්ම ගබඩාව.
- **ගැටගැසීම (coalescing):** warp එකක threads 32 හි මතක ඉල්ලීම් හැකි තරම් අඩු මතක transactions ගණනකට ඒකාබද්ධ කිරීම.
- **Memory bank සහ bank conflict:** shared memory සමාන්තර කොටස් 32 කට (banks) බෙදා ඇත; එකම warp එකේ threads කිහිපයක් එකම bank එකේ *වෙනස්* ලිපින ඉල්ලුවොත් ඒවා අනුක්‍රමිකව සේවය කෙරේ — එය bank conflict එකකි.
- **ගණිත තීව්‍රතාව (arithmetic intensity):** මතකයෙන් ගෙන එන බයිටයකට කරන ගණිත මෙහෙයුම් (FLOP/byte).

### 2. HBM bandwidth — පළල × වේගය

A100 whitepaper හි GPU සංසන්දන වගුව (පිටු 36–37) මතක interface පළල සහ data rate දෙයි. Post 34 හි DDR4 සූත්‍රයම යොදමු: **bandwidth = (interface bits ÷ 8) × clock × 2 (DDR)**.

| GPU | Interface | Data rate | ගණනය | whitepaper අගය |
|---|---|---|---|---|
| P100 | 4096-bit HBM2 | 703 MHz DDR | 512 B × 703 × 10⁶ × 2 ≈ 720 GB/s | 720 GB/s |
| V100 | 4096-bit HBM2 | 877.5 MHz DDR | 512 B × 877.5 × 10⁶ × 2 ≈ 899 GB/s | 900 GB/s |
| A100 | 5120-bit HBM2 | 1215 MHz DDR | 640 B × 1215 × 10⁶ × 2 ≈ 1555 GB/s | 1555 GB/s |

**DDR4 සමඟ සංසන්දනය (Post 34):** DDR4-3200 channel එකක් 25.6 GB/s. A100: 1555 ÷ 25.6 ≈ **61 ගුණයක්**. එහෙත් pin එකකට වේගය බලන්න:

- DDR4-3200: pin එකකට 3.2 Gb/s, pins 64
- A100 HBM2: pin එකකට 1215 MHz × 2 = **2.43 Gb/s** — DDR4 ට වඩා *මන්දගාමී* — නමුත් pins **5120** (80 ගුණයක් පුළුල්)

HBM ජය ගන්නේ වේගවත් රැහැන්වලින් නොව, රැහැන් **අතිවිශාල ගණනකින්** — එවැනි පුළුල් සම්බන්ධතාවයක් හැකි වන්නේ ඉහත පෙළේ කී පරිදි මතකය interposer එකක් මත GPU අසලම තැබූ නිසාය. Post 31 හි "bandwidth = පළල × හුවමාරු/තත්පරය" නීතියම, වෙනත් පරිමාණයක.

### 3. A100 ඇතුළත පිරමීඩය

| මට්ටම | ප්‍රමාණය (A100) | මූලාශ්‍රය |
|---|---|---|
| Registers | SM එකකට 256 KB; GPU එකට 27,648 KB | whitepaper පිටුව 37 |
| L1 + shared memory | SM එකකට 192 KB ඒකාබද්ධ (shared memory 164 KB දක්වා වින්‍යාස කළ හැකිය) | whitepaper පිටු 21, 37 |
| L2 cache | 40,960 KB (40 MB) | whitepaper පිටුව 37 |
| HBM2 | 40 GB, 1555 GB/s | whitepaper පිටු 36–37 |

සිත්ගන්නා කරුණක්: A100 හි *registers* එකතුව (27 MB පමණ) L2 cache එකට (40 MB) ආසන්න ප්‍රමාණයකි — GPU එකක් තම threads දහස් ගණන "resident" ලෙස තබා ගැනීමට (Post 53) කොතරම් සිලිකන් වැය කරන්නේද යන්නට සාක්ෂියක්.

### 4. Ridge point: ඔබේ kernel එක මතක-සීමිතද?

A100 හි FP32 (non-Tensor) උපරිමය **19.5 TFLOPS** සහ මතක bandwidth **1555 GB/s** (whitepaper පිටු 36–37). සමතුලිත ලක්ෂ්‍යය (ridge point):

```
19,500 GFLOP/s ÷ 1,555 GB/s ≈ 12.5 FLOP/byte
```

kernel එකක ගණිත තීව්‍රතාව මීට වඩා අඩු නම් එය **මතකයෙන් සීමිතයි** — ALUs දත්ත එනතුරු රැඳේ.

**උදාහරණය — දෛශික එකතුව `c[i] = a[i] + b[i]` (float, බයිට් 4):** එක් මූලද්‍රව්‍යයකට කියවීම් 2 × 4 + ලිවීම 4 = **බයිට් 12**, ගණිතය **1 FLOP** → තීව්‍රතාව 1 ÷ 12 ≈ **0.083 FLOP/byte**.

- ලැබිය හැකි උපරිමය ≈ 1555 GB/s × 0.083 ≈ **130 GFLOP/s**
- එය 19,500 න් **0.67%** පමණි!

එබැවින් දෛශික එකතුවට වේගවත් ALUs වලින් වැඩක් නැත — එහි වේගය මුළුමනින්ම bandwidth ය. ඉහත පෙළේ "peak FLOPS අර්ථයක් නැත operands පැමිණිය නොහැකි නම්" යන්නේ අංක මෙයයි; Post 55 හි tensor cores සඳහා මෙම ගැටලුව තවත් දරුණු වේ.

### 5. Coalescing — එකම දත්ත, 8 ගුණයක වෙනසක්

CUDA Programming Guide (§2.3.4.1) ට අනුව, global memory වෙත ප්‍රවේශය **බයිට් 32 ක transactions** මගිනි. warp එකක threads 32 එක එකක් බයිට් 4 ක float එකක් කියවයි (මුළු ප්‍රයෝජනවත් දත්ත 32 × 4 = **බයිට් 128**):

| රටාව | Transactions | මාරු කළ බයිට් | භාවිතය |
|---|---|---|---|
| අනුක්‍රමික threads → අනුක්‍රමික වචන | 128 ÷ 32 = **4** | 128 | **100%** |
| threads බයිට් 32 හෝ වැඩියෙන් ඈත්ව | **32** (thread එකකට එකක්) | 32 × 32 = 1024 | 128 ÷ 1024 = **12.5%** |

දෙවන අවස්ථාවේ සඵල bandwidth ≈ 1555 × 0.125 ≈ **194 GB/s** — එකම දෘඪාංගය, එකම දත්ත ප්‍රමාණය, ලිපින රටාව නිසා පමණක් 8 ගුණයක අලාභයක්. Guide එක පවසන පරිදි: "භාවිතා කළ බයිට් ÷ මාරු කළ බයිට් අනුපාතය උපරිම කරන්න."

### 6. Shared memory banks — mod 32 ගණිතය

Guide එක (§2.3.4.2): shared memory හි **banks 32** ඇත; අනුක්‍රමික 32-bit වචන අනුක්‍රමික banks වලට යයි; එක් bank එකකට clock චක්‍රයකට bits 32. එබැවින් **bank = (වචන දර්ශකය) mod 32**.

thread t (0–31) වචනය `s × t` කියවයි නම් (s = stride):

| Stride s | Thread 0 | Thread 1 | Thread 16 | ප්‍රතිඵලය |
|---|---|---|---|---|
| 1 | bank 0 | bank 1 | bank 16 | සියල්ල වෙනස් — **conflict නැත** |
| 2 | bank 0 | bank 2 | 32 mod 32 = **bank 0** | threads 0 සහ 16 එකම bank → **2-way conflict** |
| 3 | bank 0 | bank 3 | 48 mod 32 = bank 16 | 3 සහ 32 ට පොදු සාධක නැති නිසා සියල්ල වෙනස් — **conflict නැත** |
| 32 | bank 0 | 32 mod 32 = **bank 0** | bank 0 | සියල්ලම bank 0 → **32-way conflict** (වාර 32 ක් අනුක්‍රමිකව) |

**Matrix transpose උපක්‍රමය (Guide §2.3.4.2.2):** `float tile[32][32]` හි *තීරුවක්* කියවීම යනු stride 32 — 32-way conflict. Guide එකේ විසඳුම: තීරු මානයට 1 ක් එකතු කරන්න → `float tile[32][33]`. දැන් stride = 33, සහ 33 mod 32 = **1** → සෑම thread එකක්ම වෙනස් bank එකකට. එක් "නිෂ්ඵල" තීරුවක් (32 × 4 = බයිට් 128) වැය කර, 32 ගුණයක අනුක්‍රමිකකරණයක් ඉවත් කෙරේ.

### 7. පැන්සලෙන් අභ්‍යාසය (මෙම පිටුවේ lab එකක් නැත)

1. 4096-bit HBM interface එකක් 1000 MHz DDR දී ධාවනය වේ නම් bandwidth කීයද?
2. `y[i] = a × x[i] + y[i]` (float; x සහ y කියවා y ලියයි; ගුණ කිරීම + එකතු කිරීම = FLOP 2) හි ගණිත තීව්‍රතාව කීයද? A100 හි ලැබිය හැකි උපරිම GFLOP/s?
3. warp එකක threads බයිට් 8 ක double අගයන් අනුක්‍රමිකව කියවයි. බයිට් 32 transactions කීයක් අවශ්‍යද?
4. Stride 4 සමඟ shared memory කියවීම: bank conflict කී-way ද?
5. `float tile[32][34]` හි තීරුවක් කියවීමේදී stride සහ conflict කීයද?

(පිළිතුරු: 1 → 512 B × 1000 × 10⁶ × 2 = **1024 GB/s**. 2 → බයිට් 12, FLOP 2 → **0.167 FLOP/byte**; 1555 × 0.167 ≈ **259 GFLOP/s**. 3 → 32 × 8 = 256 බයිට් ÷ 32 = **8** transactions. 4 → banks 0, 4, 8, … 28 පමණක් (8 ක්) → threads 32 ÷ 8 = **4-way**. 5 → stride 34, 34 mod 32 = 2 → **2-way** conflict (33 හොඳම තේරීමයි).)

**මෙම කොටසේ මූලාශ්‍ර:** NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture* whitepaper (<https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf>) — පිටුව 21 (SM එකකට ඒකාබද්ධ shared memory/L1 192 KB), පිටු 36–37 (P100/V100/A100 වගුව: interface පළල, data rate, 720/900/1555 GB/s, L2 40,960 KB, register file, shared memory 164 KB, FP32 19.5 TFLOPS). NVIDIA, *CUDA Programming Guide* (2026 සැප්තැම්බර් 10), "2.3 Writing SIMT Kernels" (<https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/writing-cuda-kernels.html>) — §2.3.3.2 (shared memory, L1 සමඟ එකම සම්පත), §2.3.4.1 (බයිට් 32 transactions, 100% / 12.5% උදාහරණ), §2.3.4.2 (banks 32, bits 32/චක්‍රය, stride 1/2/3), §2.3.4.2.2 (transpose හි 32-way conflict සහ +1 padding). DDR4 සංසන්දනය Post 34 හි Micron datasheets වලිනි. Ridge point සහ bank වගු අපේ ගණනය කිරීම්ය.


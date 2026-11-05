---
title: "CUDA Cores, Warps සහ Occupancy"
weight: 54
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 53
tags: []
summary: "SIMT, SM සහ warps මතට map වේ — lockstep ජය ගනී divergence දක්වා; occupancy මතක stalls සඟවයි"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

Post 52 ආවරණය කළේ GPU *ඇයි* විශාල පරිමාණ SIMT මත ඔට්ටු තබන්නේද යන්නයි. මෙම පෝස්ට් එක කොන්ක්‍රීට් සිතියමයි: Streaming Multiprocessors, warps, සහ occupancy — එම සමාන්තර දෘඪාංගය ඇත්තටම කෙතරම් සම්පූර්ණයෙන් භාවිතා වේද යන්න.

## Streaming Multiprocessor එක

GPU එකක් යනු බොහෝ Streaming Multiprocessors (SM) ය — එක එකක් බොහෝ දුරට ස්වයං-අන්තර්ගත සමාන්තර ඒකකයකි, බොහෝ සරල CUDA cores සමඟ (ALU-විලාස lanes, Phase 3 CPU core එකකට වඩා හිතාමතා බොහෝ අඩු සංකීර්ණ: out-of-order execution නැත, Post 14 වර්ගයේ සංකීර්ණ branch prediction නැත), warp scheduler එකක්, සහ resident threads අතර බෙදාගත් register file එකක්. බොහෝ දුරට ස්වාධීනව ධාවනය වන දස ගණනක් SM යනු CPU එකක සංකීර්ණ cores කිහිපයකට එරෙහිව GPU එකක aggregate parallelism හි මූලාශ්‍රයයි.

## Warps: Lockstep ඒකකය ලෙස

SM එකක threads warps වලට කාණ්ඩ කෙරේ — NVIDIA දෘඪාංගයේ, සැමවිටම threads 32 (AMD wavefronts ඓතිහාසිකව 64 භාවිතා කළේය). Warp එකක් යනු Post 52 හි SIMT බලාත්මක කෙරෙන granularity ය: සියලු 32 *එකම* උපදෙස *එකම* cycle එකේ ධාවනය කරයි, එක එකක් තමන්ගේ දත්ත මත. එය "එක් බෙදාගත් control unit එකක්, බොහෝ lanes" හි දෘඪාංග ස්වරූපයයි.

## Branch Divergence: Lockstep මිල අය කරන තැන

*එක් warp එකක් ඇතුළත* threads විවිධ branches ගන්නා විට, දෘඪාංගය මාර්ග දෙකම අනුක්‍රමිකව ධාවනය කර inactive භාගය mask කරයි. එක් එක් thread ට එකක් පමණක් අවශ්‍ය වුවද warp එකට මාර්ග දෙකම තරම් කාලය ගනී — non-divergent අවස්ථාව ලාභ කරන එම lockstep එකේම සෘජු බද්දක්. එබැවින් warp එකක threads එකම මාර්ගයේ තබා ගැනීම සැබෑ optimization එකකි, විලාස මනාපයක් නොවේ.

## Occupancy: සූදානම් වැඩ සමඟ Latency සැඟවීම

SM එකකට සීමිත registers සහ shared memory ඇත; සෑම resident warp එකක්ම කොටසක් පරිභෝජනය කරයි. Occupancy යනු දෘඪාංගය සහාය විය හැකි දේට සාපේක්ෂව කොපමණ warps resident සහ eligible ද යන්නයි. ඉහළ occupancy මතක latency සැඟවීමට උපකාරී වේ (නැවතත් Post 35): එක් warp එකක් මන්දගාමී access එකක stall වන අතරතුර, scheduler එක සූදානම් warp එකකට මාරු වී lanes කාර්යබහුලව තබා ගනී.

එය "maximize කර නවත්වන්න" නොවේ. Thread එකකට වැඩි registers හෝ shared memory භාවිතා කරන kernel එකක් අඩු warps ධාවනය කළත්, එම සම්පත් අනවශ්‍ය වැඩ හෝ මතක ගමනාගමනය කපනවා නම් තවමත් වේගයෙන් අවසන් විය හැක. Occupancy එදිරිව per-thread සම්පත් යනු සැබෑ tradeoff එකකි — kernels සැබෑ සිලිකන් හමු වන විට පෙනෙන එකක්, වියුක්තව පමණක් තර්ක කරන විට පමණක් නොවේ.

## ගැඹුරින්: Warps සහ occupancy ගණනය — A100 SM එකක සීමා සමඟ

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "GPU architecture sinhala", "CUDA warp sinhala" සෙවුම්වලින් 2026 සැප්තැම්බරයේ ලැබුණේ ඉංග්‍රීසි වීඩියෝ සහ පාරිභෝගික මට්ටමේ "CUDA cores" වීඩියෝවක් පමණි; warps හෝ occupancy ගණනය සිංහලෙන් පැහැදිලි කළ මූලාශ්‍රයක් අපට හමු නොවීය. පහත සීමා NVIDIA හි CUDA Programming Guide (2026 සැප්තැම්බර් 10 යාවත්කාලීන කළ අනුවාදය) සහ A100 whitepaper එකෙනි. divergence සහ latency උදාහරණවල අංක ආදර්ශ පමණි.

### 1. මූලික පද

- **Thread (නූල):** kernel එකක එක් ක්‍රියාත්මක කිරීමක්; එක එකකට තමන්ගේ registers සහ දත්ත ඇත.
- **Thread block:** එකම SM එකක එකට ධාවනය වන, shared memory බෙදා ගන්නා threads කණ්ඩායමක් (උපරිම threads 1024).
- **Grid:** එක් kernel launch එකක සියලු blocks.
- **Warp:** threads **32** ක lockstep කණ්ඩායම; lanes 0–31 ලෙස අංක කෙරේ.
- **SIMT (Single-Instruction Multiple-Threads):** warp එකක සියලු threads එකම උපදෙස ක්‍රියාත්මක කරයි, එක එකක් තමන්ගේ දත්ත මත.
- **Warp divergence:** warp එකක threads වෙනස් branches ගන්නා විට, එක් මාර්ගයක් ධාවනය වන අතරතුර අනෙක් threads "mask" කෙරේ.
- **Occupancy:** CUDA Programming Guide ට අනුව — **සක්‍රිය warps ගණන ÷ SM එකට සහාය දිය හැකි උපරිම සක්‍රිය warps ගණන**.

### 2. A100 SM එකක සීමා

A100 whitepaper හි Table 5 (පිටුව 43 — compute capability 8.0) සහ CUDA Programming Guide හි compute capability වගු (Tables 30–31):

| සීමාව (SM එකකට) | අගය |
|---|---|
| Warp එකකට threads | 32 |
| උපරිම resident warps | 64 |
| උපරිම resident threads | 2048 (= 64 × 32) |
| උපරිම resident thread blocks | 32 |
| 32-bit registers | 65,536 (64 K) |
| Thread එකකට උපරිම registers | 255 |
| Shared memory (වින්‍යාස කළ හැකි උපරිමය) | 164 KB |
| FP32 CUDA cores | 64 |

A100 GPU එකේ SMs **108** ක් ඇත (whitepaper පිටුව 19): 108 × 64 = **6,912** FP32 CUDA cores. එහෙත් resident threads: 108 × 2,048 = **221,184** — එනම් core එකකට threads **32** ක් "සූදානමින්" සිටිය හැකිය. එතරම් threads තබා ගන්නේ ඇයි? එක් warp එකක් මතකය සඳහා රැඳී සිටින අතර අනෙක් ඒවාට වැඩ කිරීමට (ඉහත පෙළේ "latency සැඟවීම").

### 3. Threads → warps: 32 හි ගුණාකාර භාවිතා කරන්න

Block එකක warps ගණන = ⌈threads ÷ 32⌉:

| Block ප්‍රමාණය | Warps | භාවිතා වන lanes | භාවිතය |
|---|---|---|---|
| 256 | 8 | 256 / 256 | 100% |
| 100 | 4 | 100 / 128 | **78%** (අවසන් warp එකේ lanes 4 ක් පමණක් සක්‍රියයි: 100 − 96 = 4) |
| 33 | 2 | 33 / 64 | **52%** |

CUDA Programming Guide ද මෙය කියයි: block එකක threads ගණන 32 හි ගුණාකාරයක් නොවේ නම්, අවසන් warp එකේ සමහර lanes මුළු ක්‍රියාත්මක කිරීම පුරාම භාවිතා නොවේ.

### 4. Divergence හි මිල (ආදර්ශ අංක)

කේතයේ `if (x > 0) { A } else { B }` ඇත; A සහ B එක එකක් උපදෙස් 10 බැගිනි.

- **Warp එකේ සියලු 32 එකම මාර්ගය ගනී:** උපදෙස් කාල පෙති **10** — කාර්යක්ෂමතාව 100%.
- **16 ක් A, 16 ක් B:** warp එක A (B threads mask කර) සහ පසුව B (A threads mask කර) ධාවනය කරයි → කාල පෙති **20**, සෑම පෙත්තකම lanes අඩක් පමණක් → ප්‍රයෝජනවත් වැඩ 32 × 10 = 320 thread-උපදෙස්, වියදම 32 × 20 = 640 lane-පෙති → **50%**.
- **31 ක් A, 1 ක් B:** එක් thread එකක් නිසා තවමත් කාල පෙති **20** — කාර්යක්ෂමතාව (31 × 10 + 1 × 10) ÷ 640 = **50%**.

පාඩම: divergence හි මිල තීරණය වන්නේ *කී දෙනෙක්* වෙනස් මාර්ගයක ගියාද යන්නෙන් නොව, warp එක තුළ මාර්ග *කීයක්* ඇත්ද යන්නෙනි.

### 5. Occupancy ගණනය — පියවරෙන් පියවර

සීමා හතරකින් **කුඩාම** එක ජය ගනී: (අ) threads, (ආ) blocks, (ඇ) registers, (ඈ) shared memory.

**CUDA Programming Guide හි උදාහරණ දෙක (2048 threads / 32 blocks සීමා ඇති SM එකක්):**

1. Block එකකට threads 768: 2048 ÷ 768 = 2.67 → blocks **2** → (768 × 2) ÷ 2048 = **75%**.
2. Block එකකට threads 32: threads සීමාවට අනුව blocks 64 ක් විය හැකි වුවත් blocks සීමාව **32** → 32 × 32 = 1024 → 1024 ÷ 2048 = **50%**.

**Registers සමඟ (A100 අගයන්; අපේ සරල කළ ගණනය):** Block එකකට threads 256, thread එකකට registers 64.

1. Block එකකට registers: 256 × 64 = **16,384**
2. Registers අනුව blocks: 65,536 ÷ 16,384 = **4**
3. Threads අනුව blocks: 2048 ÷ 256 = 8; blocks සීමාව 32
4. කුඩාම = **4** → 4 × 256 = 1024 threads → **50%**

Registers 32 ට අඩු කළොත්: 256 × 32 = 8,192 → 65,536 ÷ 8,192 = 8 blocks → 2048 threads → **100%**. Guide එක සඳහන් කරන පරිදි `--maxrregcount` මගින් registers සීමා කළ හැකි නමුත් එවිට registers "local memory" වෙත spill වී කාර්ය සාධනය වෙනස් විය හැකිය — ඉහත පෙළේ "occupancy එදිරිව per-thread සම්පත්" වෙළඳාම අංකවලින්.

**Shared memory සමඟ:** Block එකක් 48 KB shared memory භාවිතා කරයි නම්, 164 KB ÷ 48 KB = 3.4 → blocks **3** → 3 × 256 = 768 threads → **37.5%**.

(සරල කිරීම පිළිබඳ සටහන: මෙහි kernel අගයන් — threads 256, registers 64/32, shared memory 48 KB — උදාහරණ පමණි. සැබෑ A100 එක registers වෙන් කරන්නේ warp එකකට 256 බැගින් වූ ඒකකවලින් වන අතර, block එකකට shared memory 1 KB ක් පද්ධතිය සඳහා වෙන් කෙරේ (එබැවින් block එකකට උපරිමය 163 KB). ඉහත උදාහරණවල ප්‍රතිඵල මෙයින් වෙනස් නොවේ, නමුත් උදා. thread එකකට registers 33 ක් warp එකකට 1,056 සිට 1,280 දක්වා — එනම් thread එකකට 40 ක් ලෙස — වට වේ. සැබෑ kernel එකක් සඳහා CUDA occupancy API (`cudaOccupancyMaxActiveBlocksPerMultiprocessor`) හෝ Nsight Compute භාවිතා කරන්න.)

### 6. Latency සැඟවීමට warps කීයක් අවශ්‍යද? (ආදර්ශ අංක)

(අංක **ආදර්ශ පමණි**.) මතක කියවීමකට clock චක්‍ර 400 ක් ගත වේ යැයි ද, සෑම warp එකකටම ඊළඟ කියවීමට පෙර ගණනය කිරීමට චක්‍ර 20 ක වැඩ ඇතැයි ද සිතමු. එක් warp එකක් රැඳී සිටින චක්‍ර 400 තුළ scheduler එක කාර්යබහුලව තබා ගැනීමට, වෙනත් warps 400 ÷ 20 = **20** ක් පමණ සූදානමින් සිටිය යුතුය. සීමාව 64 ක් නම්, එය 20 ÷ 64 ≈ **31%** occupancy කට ආසන්නයි — ඉහළ occupancy "සැමවිටම වඩා හොඳයි" නොවන්නේ ඇයිද යන්නට තවත් හේතුවක්: ප්‍රමාණවත් warps ඇති විට, ඊට වැඩි ගණනක් එකතු කිරීමෙන් ලැබෙන ලාභය අඩුය.

### 7. පැන්සලෙන් අභ්‍යාසය (මෙම පිටුවේ lab එකක් නැත)

1. Threads 200 ක block එකක warps කීයද? අවසන් warp එකේ සක්‍රිය lanes කීයද?
2. A100: block එකකට threads 512, thread එකකට registers 40. Occupancy කීයද?
3. A100: block එකකට threads 128, registers/shared memory සීමා නැත. Occupancy?
4. Warp එකක threads 8 ක් `if` මාර්ගයේ (උපදෙස් 6) සහ 24 ක් `else` මාර්ගයේ (උපදෙස් 6). Warp එකට කාල පෙති කීයද?
5. SMs 108 ක් ඇති A100 එකක එකවර resident විය හැකි උපරිම warps කීයද?

(පිළිතුරු: 1 → ⌈200 ÷ 32⌉ = **7**; 200 − 192 = **8**. 2 → registers/block = 512 × 40 = 20,480 → 65,536 ÷ 20,480 = 3.2 → 3 blocks; threads අනුව 2048 ÷ 512 = 4 → කුඩාම **3** → 1536 ÷ 2048 = **75%**. 3 → 2048 ÷ 128 = 16 blocks (≤ 32) → 2048 threads → **100%**. 4 → මාර්ග දෙකම ධාවනය වේ → 6 + 6 = **12**. 5 → 108 × 64 = **6,912** warps (= threads 221,184).)

**මෙම කොටසේ මූලාශ්‍ර:** NVIDIA, *CUDA Programming Guide* (2026 සැප්තැම්බර් 10 යාවත්කාලීන කළ): §1.2.2.2 "Warps and SIMT" (<https://docs.nvidia.com/cuda/cuda-programming-guide/01-introduction/programming-model.html>) — warp = threads 32, lanes 0–31, divergence mask කිරීම, 32 හි ගුණාකාර; §2.3.7 "Kernel Launch and Occupancy" (<https://docs.nvidia.com/cuda/cuda-programming-guide/02-basics/writing-cuda-kernels.html>) — occupancy අර්ථ දැක්වීම, 768-thread (75%) සහ 32-thread (50%) උදාහරණ, `--maxrregcount` සහ spilling; Compute Capabilities, Tables 30–31 (<https://docs.nvidia.com/cuda/cuda-programming-guide/05-appendices/compute-capabilities.html>) — compute capability 8.0: threads 2048, warps 64, registers 64 K, thread එකකට 255, shared memory 164 KB. NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture* whitepaper — පිටුව 19 (SMs 108, SM එකකට FP32 cores 64, 6912), පිටුව 43 (Table 5, compute capability 8.0 සීමා). registers/shared memory occupancy ගණනය සරල කළ ඒවාය; divergence සහ latency අංක ආදර්ශ පමණි.


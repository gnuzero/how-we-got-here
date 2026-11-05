---
title: "Tensor Cores"
weight: 61
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 60
aliases:
  - /posts/55-tensor-cores/
tags: []
summary: "Matrix multiply-accumulate ප්‍රමුඛ AI op එක බවට පත් විය — එබැවින් දෘඪාංගය එය first-class primitive එකක් කළේය"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

Post 53 ආවරණය කළේ CUDA cores — පුළුල් සමාන්තර වැඩ පරාසයක් සඳහා සාමාන්‍ය-අරමුණු SIMT lanes. Tensor cores පටු ය: එක් මෙහෙයුමක් සඳහා කැප වූ දෘඪාංගය — matrix multiply-accumulate — නවීන neural-network compute පාලනය කරයි. එම op එකට විශේෂීකරණය කරන්න, එවිට සාමාන්‍ය CUDA cores මත පමණක් එම වැඩ කිරීමට වඩා ජය ගනී.

## Matrix Multiply ඇයි

Fully connected layers, convolutions (matmul ලෙස ප්‍රතිසංස්කරණය කළ), සහ transformers හි attention සියල්ලම, ඒවායේ හදවතේදී, matrices වල multiply-accumulate වෙත අඩු වේ — පද්ධති කාර්ය සාධනය එහි කාර්යක්ෂමතාව පාලනය කරන පරිමාණයක. එම සාන්ද්‍රණය අරමුණු-නිර්මිත සිලිකන් වටී කරයි.

## Tensor Core එකක් කරන්නේ කුමක්ද

Tensor core එකක් කුඩා ස්ථිර-ප්‍රමාණ matrix multiply-accumulate එකක් — උදාහරණයක් ලෙස 4×4 matrices දෙකක් තුන්වැන්නකට — දිගු වෙනම multiply සහ add උපදෙස් අනුක්‍රමයක් සාමාන්‍ය CUDA cores හරහා නොව එක් දෘඪාංග මෙහෙයුමක් ලෙස fuse කරයි. Fusion උපයෝගී අංක ගණිතයට සාපේක්ෂව per-op overhead (fetch, decode, operand routing) කපයි. විශාල ගුණිත tiled වේ: උප-කොටස් අනුක්‍රමයෙන් පෝෂණය කරන්න, partials accumulate කරන්න — කාර්යක්ෂම deep-learning kernels තමන්ගේ ශිල්පයක් කරන සම්බන්ධීකරණ වැඩ.

## Precision සිලිකන් සමඟ බැඳී ඇත

Tensor cores බොහෝ විට පහළ precisions (FP16, BF16, INT8, වැඩි වැඩියෙන් FP8) හි වඩාත් කාර්යක්ෂමව ධාවනය වේ. පටු අංක ගණිතයට op එකකට අඩු ප්‍රදේශය සහ බලය අවශ්‍ය ය, එබැවින් දෙන ලද අයවැයකට වැඩි MAC throughput ඇසුරුම් කළ හැක. Post 59 මෙය සම්පූර්ණයෙන් ආපසු එයි: precision අඩු කිරීම පිරිසිදු මෘදුකාංග තේරීමක් නොවේ — යටින් ඇති MAC දෘඪාංගය එක් එක් ආකෘතියේ කෙතරම් කාර්යක්ෂමව ධාවනය වේද යන්න සමඟ බැඳී ඇත.

## එකම පිළිතුර නොවේ

Tensor cores යනු තවමත් සාමාන්‍ය GPU එකක් ඇතුළත NVIDIA ගේ පිළිතුරයි. Phase 10 systolic arrays ආවරණය කරයි — වඩාත්ම කැපී පෙනෙන ලෙස Google ගේ TPU — එම matmul ඉලක්කයටම ගොඩනැගූ, දෘඪාංග මට්ටමේ වෙනස් ලෙස සංවිධානය වූ. එකම සීමාව; වෙනස් ගෘහ නිර්මාණය.

## ගැඹුරින්: Tensor core එකක් අංකවලින් — 4×4×4, TFLOPS ගණනය සහ FP32 accumulation

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "tensor cores sinhala" සෙවුමෙන් 2026 සැප්තැම්බරයේ ලැබුණේ ඉංග්‍රීසි වීඩියෝ පමණි; tensor core එකක ක්‍රියාකාරිත්වය හෝ TFLOPS ගණනය සිංහලෙන් පැහැදිලි කළ මූලාශ්‍රයක් අපට හමු නොවීය. පහත සංඛ්‍යා NVIDIA හි Volta (V100) සහ Ampere (A100) whitepapers දෙකෙනි. "ගණිත තීව්‍රතාව" ගණනය කිරීම් එම අංකවලින් අප ව්‍යුත්පන්න කළ ඒවාය.

### 1. මූලික පද

- **FMA (fused multiply-add):** `a × b + c` එකම පියවරකින් — ගණිත මෙහෙයුම් (FLOP) **2** ක් ලෙස ගණන් කෙරේ (V100 whitepaper: FMA 512 = "තනි floating point මෙහෙයුම් 1024").
- **MMA (matrix multiply-accumulate):** `D = A × B + C` — matrices සඳහා FMA.
- **M×N×K:** (M×K) matrix එකක් (K×N) එකකින් ගුණ කිරීම; FMA ගණන = M × N × K.
- **TFLOPS:** තත්පරයකට ට්‍රිලියන (10¹²) floating point මෙහෙයුම්.
- **Boost clock:** whitepapers හි උපරිම TFLOPS ගණනය කිරීමට භාවිතා කරන clock සංඛ්‍යාතය.
- **Mixed precision (මිශ්‍ර නිරවද්‍යතාව):** ගුණ කිරීමේ ආදාන අඩු නිරවද්‍යතාවකින් (FP16), එකතු කිරීම (accumulation) ඉහළ නිරවද්‍යතාවකින් (FP32).
- **Tiling:** විශාල matrix එකක් කුඩා කොටස් (tiles) වලට බෙදා, එක් එක් tile එක නැවත නැවත භාවිතා කිරීම.

### 2. එක් tensor core එකක් එක් clock එකකදී කරන දේ

**Volta V100 (whitepaper, මුද්‍රිත පිටු 14–15):** සෑම tensor core එකක්ම 4×4 matrices මත `D = A × B + C` ක්‍රියාත්මක කරයි; A සහ B FP16, C සහ D FP16 හෝ FP32. එය clock එකකට FMA **64** — එනම් එක් **4×4×4** ගුණ කිරීමක්.

ඇයි 64? 4×4 ප්‍රතිදානයේ මූලද්‍රව්‍ය 16 ක් ඇත; සෑම එකක්ම dot product එකකි: `D[i][j] = A[i][0]·B[0][j] + A[i][1]·B[1][j] + A[i][2]·B[2][j] + A[i][3]·B[3][j] + C[i][j]` — FMA **4** ක්. 16 × 4 = **64** = 4 × 4 × 4.

**Ampere A100 (whitepaper, පිටු 20, 24):** සෑම tensor core එකක්ම clock එකකට FP16 FMA **256** — එක් **8×4×8** ගුණ කිරීමක් (8 × 4 × 8 = 256). SM එකකට tensor cores 4 × 256 = FMA **1024** / clock (V100 හි SM එකකට 8 × 64 = 512 මෙන් දෙගුණයක්).

### 3. Whitepaper TFLOPS ඔබම ගණනය කරන්න

**TFLOPS = tensor cores ගණන × (FMA / core / clock) × 2 × boost clock**

| GPU | Tensor cores | FMA/core/clock | Boost clock | ගණනය | Whitepaper |
|---|---|---|---|---|---|
| V100 | 640 | 64 | 1530 MHz | 640 × 64 × 2 × 1.53 × 10⁹ ≈ **125.3 × 10¹²** | 125 TFLOPS |
| A100 | 432 | 256 | 1410 MHz | 432 × 256 × 2 × 1.41 × 10⁹ ≈ **311.9 × 10¹²** | 312 TFLOPS |

(V100: tensor cores 640 = SMs 80 × 8, boost clock 1530 MHz — V100 whitepaper මුද්‍රිත පිටුව 10; A100: tensor cores 432 = SMs 108 × 4, boost clock 1410 MHz — A100 whitepaper පිටු 24, 36.)

**CUDA cores සමඟ සංසන්දනය:** V100 හි සාමාන්‍ය FP32 උපරිමය 15.7 TFLOPS. 125 ÷ 15.7 ≈ **8 ගුණයක්** — එකම chip එකේ, matmul එකට විශේෂීකරණය කළ සිලිකන් මගින්. A100 whitepaper ට අනුව A100 හි 312 TFLOPS යනු V100 හි FP32 throughput මෙන් **20 ගුණයක්** (312 ÷ 15.7 ≈ 19.9).

### 4. මතක බිත්තිය නැවතත්: tensor cores පෝෂණය කිරීම

Post 54 හි ridge point සූත්‍රය A100 tensor cores සඳහා:

```
312,000 GFLOP/s ÷ 1,555 GB/s ≈ 200 FLOP/byte
```

FP32 CUDA cores සඳහා එය 12.5 ක් පමණි (Post 54). tensor cores වලට HBM මෙන් **16 ගුණයක** "ආහාර කාර්යක්ෂමතාවක්" අවශ්‍යයි.

**Matrix ගුණ කිරීම එය සපයන්නේ කෙසේද? (සරල, පරමාදර්ශී ආදර්ශයක්):** N × N FP16 matrices (බයිට් 2) දෙකක් ගුණ කර ප්‍රතිඵලය ලිවීම:

- FLOP: 2 × N³ (FMA N³)
- අවම මතක ගමනාගමනය: matrices 3 × N² × බයිට් 2 = **6N²** (සෑම matrix එකක්ම එක් වරක් පමණක් කියවා/ලියයි නම්)
- ගණිත තීව්‍රතාව: 2N³ ÷ 6N² = **N ÷ 3 FLOP/byte**

| N | N ÷ 3 | A100 (ridge ≈ 200) |
|---|---|---|
| 64 | 21 | මතක-සීමිත |
| 600 | 200 | සමතුලිත ලක්ෂ්‍යය |
| 4096 | 1365 | ගණනය-සීමිත — tensor cores කාර්යබහුල කළ හැකිය |

N විශාල වන තරමට සෑම බයිටයක්ම වැඩි වාර ගණනක් නැවත භාවිතා වේ — Post 54 හි දෛශික එකතුවට (0.083 FLOP/byte) නොහැකි දෙය. එහෙත් "එක් වරක් පමණක් කියවීම" සිදු වන්නේ tiles, shared memory සහ registers හරහා දත්ත නැවත භාවිතා කළහොත් පමණි — ඉහත පෙළේ "tiling යනු ශිල්පයක්" යන්නෙහි අර්ථය මෙයයි. එක් 4×4×4 මෙහෙයුමකදී පවා: A හි මූලද්‍රව්‍ය 16 සහ B හි 16 පූරණය කර FMA 64 ක් කරයි — සෑම ආදාන මූලද්‍රව්‍යයක්ම **4 වරක්** භාවිතා වේ.

### 5. FP32 accumulation අවශ්‍ය වන්නේ ඇයි

V100 whitepaper (මුද්‍රිත පිටුව 15): tensor cores FP16 ආදාන සමඟ **FP32 accumulation** භාවිතා කරයි — FP16 ගුණිතය සම්පූර්ණ නිරවද්‍යතාවකින් තබා, FP32 එකතු කිරීමකින් අනෙක් අතරමැදි ගුණිත සමඟ එකතු කෙරේ.

හේතුව පෙන්වන සරල පරීක්ෂණයක් (Python/NumPy `float16` සමඟ අප ධාවනය කළ): FP16 (IEEE binary16) හි ගබඩා කළ mantissa bits **10** ක් පමණක් ඇත, එබැවින් 2048 ට ඉහළදී අනුක්‍රමික පූර්ණ සංඛ්‍යා වෙන් කළ නොහැකිය:

- FP16 හි: 2048 + 1 = **2048** (1 නැති වේ!)
- 1 ක් 4096 වරක් FP16 accumulator එකකට එකතු කළ විට: ප්‍රතිඵලය **2048** (නිවැරදි පිළිතුර 4096)
- එම එකතු කිරීම් FP32 accumulator එකක: **4096** ✓

Neural network එකක dot product එකකට පද දහස් ගණනක් එකතු විය හැකි නිසා, accumulator එක පටු නම් කුඩා පද "ගිලී" යයි. ගුණ කිරීම් (බහුතරය සිලිකන්) FP16 හි තබා, එකතු කිරීම FP32 හි තැබීම — ඉහත පෙළේ "precision සිලිකන් සමඟ බැඳී ඇත" යන්නේ ප්‍රායෝගික ස්වරූපයයි (Post 59 මෙය ගැඹුරින් ආවරණය කරයි).

### 6. පැන්සලෙන් අභ්‍යාසය (මෙම පිටුවේ lab එකක් නැත)

1. අතින් ගණනය කරන්න: A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]], C = [[1, 1], [1, 1]]. D = A × B + C කීයද? FMA කීයක් අවශ්‍ය වූයේද?
2. 16×16×16 matrix ගුණ කිරීමකට FMA කීයද? V100 tensor core එකකට clocks කීයක්ද? A100 tensor core එකකට?
3. Tensor cores 528 ක්, core එකකට FMA 512 / clock, boost clock 1.8 GHz ඇති කල්පිත GPU එකක උපරිම TFLOPS කීයද?
4. N = 300 FP16 matrix ගුණ කිරීමක පරමාදර්ශී ගණිත තීව්‍රතාව කීයද? A100 මත එය මතක-සීමිතද?
5. FP16 accumulator එකකට 2048 සිට 0.5 බැගින් 10 වරක් එකතු කළොත් ප්‍රතිඵලය කුමක් වේද?

(පිළිතුරු: 1 → A × B = [[1·5 + 2·7, 1·6 + 2·8], [3·5 + 4·7, 3·6 + 4·8]] = [[19, 22], [43, 50]]; + C → **[[20, 23], [44, 51]]**; FMA 2 × 2 × 2 = **8**. 2 → 16³ = **4096** FMA; V100: 4096 ÷ 64 = **64** clocks; A100: 4096 ÷ 256 = **16** clocks. 3 → 528 × 512 × 2 × 1.8 × 10⁹ ≈ **973 TFLOPS** (කල්පිත අංක). 4 → 300 ÷ 3 = **100 FLOP/byte** < 200 → **ඔව්, මතක-සීමිතයි** (පරමාදර්ශී ආදර්ශයට අනුව). 5 → **2048** — 2048 දී FP16 අගයන් අතර පරතරය 2 ක් නිසා 0.5 සෑම වරකම රවුම් වී නැති වේ.)

**මෙම කොටසේ මූලාශ්‍ර:** NVIDIA, *NVIDIA Tesla V100 GPU Architecture* whitepaper, WP-08608-001_v1.1 (<https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf>) — මුද්‍රිත පිටුව 10 (Table 1: SMs 80, tensor cores 640, boost clock 1530 MHz, FP32 15.7 TFLOPS), මුද්‍රිත පිටුව 14 (SM එකකට tensor cores 8, core එකකට FMA 64 / clock, 125 Tensor TFLOPS), මුද්‍රිත පිටුව 15 (4×4 `D = A×B + C`, FP16 ආදාන, FP32 accumulation, 4×4×4). NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture* whitepaper — පිටුව 15 (312 TFLOPS FP16 Tensor), පිටුව 20 (core එකකට FMA 256, SM එකකට 1024), පිටුව 24 (8×4×8, tensor cores 432, V100 FP32 මෙන් 20×), පිටු 36–37 (boost clock 1410 MHz, 1555 GB/s). FP16 accumulation පරීක්ෂණය NumPy `float16` සමඟ අප ධාවනය කළ එකකි; ගණිත තීව්‍රතා ආදර්ශය පරමාදර්ශී (එක් වරක් කියවීම) උපකල්පනයකි.


---
title: "Quantization සහ Mixed Precision"
weight: 66
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 65
aliases:
  - /posts/59-quantization-mixed-precision/
  - /posts/65-quantization-mixed-precision/
tags: []
summary: "MAC එකකට අඩු bits යනු එකම බල අයවැයේ වැඩි MAC — නිරවද්‍යතාවට තවමත් අවශ්‍ය තැන precision මිශ්‍ර කරන්න"
image_prompt: "Comparison infographic of FP32, FP16, BF16, FP8, and INT8 bit-field layouts, clean numerical format diagram style"
video_prompt: "15-second animation: a number's bit representation shrinking from FP32 to INT8, clean data-viz motion graphics"
schematics: "Diagram: bit-field layout comparison + dynamic range comparison chart"
---

Post 55 සම්බන්ධතාව ධජය ඔසවා තැබුවේය: tensor-core සහ systolic-array කාර්යක්ෂමතාව ඒවා ධාවනය වන සංඛ්‍යාත්මක precision මත රඳා පවතී. මෙම පෝස්ට් එක පහළ precision මධ්‍යම ලීවරයක් බවට පත් වූයේ ඇයිද — සහ එය ලබා ගැනීමට හුවමාරු කරන දේ කුමක්ද යන්නයි.

## මෙහි Precision අදහස් කරන්නේ කුමක්ද

ආකෘති ස්ථිර bit අයවැයක් සමඟ range එදිරිව precision හුවමාරු කරයි. FP32 (sign, exponent bits 8, mantissa 23) සාම්ප්‍රදායික විද්‍යාත්මක පෙරනිමියයි. FP16 සහ BF16 භාගයක් bits භාවිතා කරයි — BF16 FP32 ගේ exponent range තබා ගෙන mantissa මත අඩුවෙන් වියදම් කරයි, සියුම් ධාන්‍යයට වඩා dynamic range වෙනුවෙන්. FP8 තව දුරටත් යයි; INT8 floating point අත්හැර ස්ථිර integers එකතුව අවශ්‍ය range වෙත ආපසු scale factor එකක් භාවිතා කරයි.

## අඩු Bits, වැඩි Throughput

Posts 6–7 ස්ථාපිත කළේ පරිපථ ප්‍රදේශය ඔබ ගණනය කරන දේ සමඟ පරිමාණය වන බවයි. FP32 MAC එකකට FP16 හෝ INT8 ට වඩා වැඩි ට්‍රාන්සිස්ටර සහ බලය අවශ්‍ය ය. ස්ථිර ප්‍රදේශය සහ බල අයවැයක් ලබා දුන් විට (Post 36 හි බිත්තිය තවමත් accelerators බඳියි), පහළ precision එම envelope එකටම වැඩි සමාන්තර MAC throughput ඇසුරුම් කරයි. එය භෞතික හේතුවකි — ඇල්ගොරිතමික තේරීමක් පමණක් නොවේ — ටෙන්සර් cores සහ systolic arrays බොහෝ විට නිශ්චිත පහළ-precision ආකෘති වටා නිර්මාණය වන්නේ ඇයිද යන්න.

## හුවමාරු කරන දේ

අඩු කළ precision යනු රළු අගයන් සහ දිගු දාම හරහා වැඩි rounding දෝෂයයි. අනුභවිකව, බොහෝ neural networks එය හොඳින් ඉවසයි — විශේෂයෙන් inference සඳහා, සහ training හි විශාල කොටස් සඳහා සැලකිල්ලෙන් — එය කලින් පැහැදිලි නොවීය; එය පෙන්විය යුතු විය.

## මිශ්‍ර, Blanket Low නොවේ

Mixed-precision training සහ inference බර matmuls සඳහා පහළ precision (බොහෝ විට FP16 හෝ BF16) භාවිතා කරයි — දෘඪාංග throughput ලාභ ලැබෙන තැන — සහ සංඛ්‍යාත්මකව සංවේදී වැඩ සඳහා ඉහළ precision (බොහෝ විට FP32) තබා ගනී — rounding සංයුක්ත වන accumulations වැනි. සම්පූර්ණ precision එය තබා ගැනීම උපයන තැනට පමණි: එබැවින් යෙදුම *mixed* ය, හුදෙක් *low* නොවේ.

## ඊළඟ ලීවරය

Precision එක් එක් මෙහෙයුම ලාභ කරයි. ඊළඟ පෝස්ට් එකේ sparsity අරමුණු කරන්නේ දන්නා ශුන්‍යයක් කිසිවක් දායක නොවන විට සමහර මෙහෙයුම් සම්පූර්ණයෙන්ම මඟහැරීමයි.

## ගැඹුරින්: FP16, BF16 සහ INT8 bits මට්ටමින්

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** මෙම මාතෘකාව ගැන සිංහලෙන් ඇති ද්‍රව්‍ය:
> - YouTube හි IEEE 754 සහ floating point නිරූපණය ගැන සිංහල වීඩියෝ ([-Noe0-nmS3U](https://www.youtube.com/watch?v=-Noe0-nmS3U), [ufd6bHkZC9I](https://www.youtube.com/watch?v=ufd6bHkZC9I)) සහ LoRA/QLoRA ගැන එකක් ([aQ_-GN9pw78](https://www.youtube.com/watch?v=aQ_-GN9pw78), Adomic). මේවා හඳුනාගත්තේ මාතෘකාවෙන් පමණි.
> - ජාතික අධ්‍යාපන ආයතනයේ 12 ශ්‍රේණිය ICT ගුරු මාර්ගෝපදේශය නිඛිල නිරූපණ (sign-magnitude, අනුපූරක) දක්වයි (PDF p.102–104). එහෙත් අප පරීක්ෂා කළ පාසල් පොත්වල floating point කොටසක් අපට හමු නොවීය.
>
> ඒවායේ නැති දේ: FP16 සහ BF16 හි සීමා, loss scaling, INT8 quantization හි scale සහ zero-point, සහ මේ සියල්ල මතකයට හා දෘඪාංගයට බලපාන හැටි. මෙම කොටස ඒවා අංකවලින් ගණනය කරයි.

### 1. මූලික පද

- **චල ලක්ෂ්‍ය සංඛ්‍යාව (floating-point number):** ලකුණ (sign) × 1.mantissa × 2^(exponent − bias).
- **Exponent (exponent):** පරාසය (range) තීරණය කරයි. **Mantissa / භාගය (mantissa, fraction):** නිරවද්‍යතාව (precision) තීරණය කරයි.
- **Subnormal (subnormal, denormal):** ඉතා කුඩා අගයන් සඳහා සැඟවුණු 1 නැතිව ලියන විශේෂ ආකාරය.
- **Loss scaling (loss scaling):** FP16 හි කුඩා gradients ශුන්‍ය නොවීමට loss අගය නියතයකින් ගුණ කිරීම.
- **ප්‍රමාණකරණය (quantization):** තාත්වික අගයන් කුඩා නිඛිල කට්ටලයකට සිතියම්ගත කිරීම.
- **Scale (S) සහ zero-point (Z):** r = S × (q − Z) සූත්‍රයේ නියත දෙක (Jacob et al., §2.1).

### 2. ආකෘති තුන එකට

| ආකෘතිය | ලකුණ | Exponent | Mantissa | උපරිම අගය | 1 අසල පරතරය |
|---|---|---|---|---|---|
| FP32 | 1 | 8 | 23 | ≈ 3.40 × 10³⁸ | 2⁻²³ ≈ 1.2 × 10⁻⁷ |
| FP16 | 1 | 5 | 10 | **65,504** | 2⁻¹⁰ ≈ 0.000977 |
| BF16 | 1 | 8 | 7 | ≈ 3.39 × 10³⁸ | 2⁻⁷ ≈ 0.0078 |

(BF16 bits: Google Cloud බ්ලොග් ලිපිය. FP16 උපරිමය 65,504: Micikevicius et al., §3.2. අනෙක් අගයන් අපි numpy වලින් ගණනය කළෙමු.)

**FP16 උපරිමය ව්‍යුත්පන්න කිරීම:** exponent bits 5, bias 15. විශාලතම සාමාන්‍ය exponent = 30 − 15 = 15. Mantissa සියල්ල 1 → 1 + (1 − 2⁻¹⁰). එබැවින් (2 − 2⁻¹⁰) × 2¹⁵ = 65,536 − 32 = **65,504**.

**FP16 කුඩාම අගයන්:** කුඩාම සාමාන්‍ය අගය 2⁻¹⁴ ≈ 6.10 × 10⁻⁵. කුඩාම subnormal 2⁻²⁴ ≈ 5.96 × 10⁻⁸.

### 3. අතින් encode කිරීම: −6.5 FP16 ලෙස

1. 6.5 = 110.1 (ද්විමය) = 1.101 × 2².
2. ලකුණ = 1 (සෘණ).
3. Exponent = 2 + 15 = 17 = **10001**.
4. Mantissa = දශම ලක්ෂ්‍යයට පසු bits: 101, ඉතිරිය 0 → **1010000000**.
5. 1 10001 1010000000 = 1100 0110 1000 0000 = **0xC680**. (numpy මගින් පරීක්ෂා කළා.)

### 4. FP16 සහ BF16 හි වෙනස අංකවලින්

| අගය | FP16 | BF16 |
|---|---|---|
| 0.1 | 0.0999755859375 (0x2E66) | 0.10009765625 (0x3DCD) |
| 100,000 | **inf** (65,504 ඉක්මවයි) | 99,840 (0x47C3) |

FP16 නිරවද්‍යයි, නමුත් පරාසය කුඩාය. BF16 නිරවද්‍යතාව අඩුය, නමුත් FP32 හා සමාන පරාසයක් ඇත. Google ලිපිය කියන්නේ neural networks mantissa ප්‍රමාණයට වඩා exponent ප්‍රමාණයට බොහෝ සංවේදී බවත්, BF16 FP32 සඳහා "drop-in replacement" එකකට ආසන්න බවත්ය.

**FP32 accumulation අවශ්‍ය ඇයි:** FP16 හි 2048 අසල පරතරය 2 කි. එබැවින් FP16 හි **2048 + 1 = 2048**. 1 අහිමි වේ (numpy මගින් පරීක්ෂා කළා). දිගු එකතුවක කුඩා අගයන් දහස් ගණනක් මෙසේ නැති විය හැක. Micikevicius et al. (§3.3) FP16 ගුණ කිරීම් FP32 එකතුවකට එකතු කිරීම නිර්දේශ කරයි. Google ලිපිය පවසන්නේ TPU MXU එකේද ගුණ කිරීම BF16 වලින් සහ එකතු කිරීම FP32 වලින් කරන බවයි.

### 5. Loss scaling: ශුන්‍ය වන gradient එකක් බේරා ගැනීම

Micikevicius et al. (§3.1): FP16 හි විශාලත්වය 2⁻²⁴ ට අඩු ඕනෑම අගයක් ශුන්‍ය වේ. ඔවුන්ගේ Mandarin කථන හඳුනාගැනීමේ ආකෘතියේ weight gradients වලින් **~5%** ක පමණ exponent −24 ට අඩු විය (Figure 2b). §3.2 මෙයට විසඳුම ලෙස loss scaling ඉදිරිපත් කරයි.

**ආදර්ශ ගණනය:** gradient එකක් 1 × 10⁻⁸ යැයි සිතමු.
- FP16 ට හරවූ විට: 1 × 10⁻⁸ < 2⁻²⁵ ≈ 2.98 × 10⁻⁸ (කුඩාම subnormal එකෙන් අඩක්) → **0**. තොරතුරු නැති විය.
- Loss එක 1024 න් ගුණ කළ විට (chain rule නිසා gradient එකද 1024 න් ගුණ වේ): 1.024 × 10⁻⁵ → FP16 හි **1.0252 × 10⁻⁵** (subnormal, නමුත් ශුන්‍ය නොවේ).
- Weight update එකට පෙර FP32 හි 1024 න් බෙදූ විට: ≈ **1.0012 × 10⁻⁸**. දෝෂය ~0.1%.

ලිපියට අනුව ඔවුන් 8 සිට 32K දක්වා scaling factors භාවිත කළහ (බොහෝ ජාලවලට කිසිවක් අවශ්‍ය නොවීය). Factor එකක් වැඩි වුවත් හානියක් නැත්තේ overflow නොවන තාක් පමණි: උපරිම gradient × factor අගය 65,504 ට අඩු විය යුතුය.

### 6. INT8 quantization: scale සහ zero-point

Jacob et al. (CVPR 2018, §2.1, සමීකරණය 1): **r = S (q − Z)**. S ධන තාත්වික අගයකි. Z, q හි වර්ගයේම (උදා. uint8) නිඛිලයකි. මෙම සැලසුම නිසා r = 0 හරියටම නිරූපණය කළ හැක (q = Z).

**ආදර්ශ උදාහරණය:** බර (weights) −1.0 සිට 1.5 දක්වා. uint8 = 0 සිට 255.
- S = (1.5 − (−1.0)) ÷ 255 = 2.5 ÷ 255 ≈ **0.0098039**.
- Z = round(1.0 ÷ S) = round(102.0) = **102**. පරීක්ෂාව: −1.0 → 0, 1.5 → 255.
- r = 0.73 quantize කිරීම: q = round(0.73 ÷ S) + Z = round(74.46) + 102 = **176**.
- ආපසු: S × (176 − 102) = 74 × 0.0098039 ≈ **0.72549**. දෝෂය ≈ 0.0045. එය S/2 ≈ 0.0049 ට අඩුය (වටැකීමේ උපරිම දෝෂය).

### 7. මතකය සහ ගුණක ප්‍රමාණය

**බර පමණක් (ආදර්ශ, පරාමිති බිලියන 7, GB = 10⁹ bytes):** FP32: 7 × 4 = **28 GB**. FP16/BF16: **14 GB**. INT8: **7 GB**. 4-bit: **3.5 GB**.

**ගුණකයේ ප්‍රමාණය:** Google ලිපිය කියන්නේ දෘඪාංග ගුණකයක භෞතික ප්‍රමාණය mantissa පළලේ වර්ගය සමඟ පරිමාණය වන බවයි. එම නිසා BF16 ගුණක FP16 ගුණකයකින් අඩක් පමණ ද, FP32 ගුණකයකට වඩා අට ගුණයකින් කුඩා ද වේ. සැඟවුණු 1 ද ගණන් කර අපේ වර්ග ගණනය: FP32 24² = 576, FP16 11² = 121, BF16 8² = 64. 64/121 ≈ **0.53** (අඩක් පමණ). 576/64 = **9** (ලිපිය "අට ගුණයක්" ලෙස වට කර කියයි).

### 8. පැන්සලෙන් අභ්‍යාසය

1. +0.75 FP16 bits වලින් ලියන්න (hex).
2. FP16 හි 1024 අසල පරතරය කීයද? 1024 + 0.5 FP16 හි කුමක් වේද?
3. Gradient 2 × 10⁻⁸ ක් FP16 හි ඍජුවම තැබූ විට කුමක් වේද? 4096 න් scale කළ පසු?
4. පරාසය 0.0 සිට 6.0 (ReLU6 වැනි), uint8. S සහ Z කීයද? r = 2.0 හි q කීයද?
5. පරාමිති බිලියන 70 ක ආකෘතියක 4-bit බර සඳහා GB කීයද?
6. FP16 වෙනුවට BF16 තෝරා ගැනීමෙන් loss scaling අවශ්‍ය නොවන්නේ ඇයි?

(පිළිතුරු:
1. 0.75 = 1.1 × 2⁻¹. Exponent −1 + 15 = 14 = 01110. Mantissa 1000000000. 0 01110 1000000000 = **0x3A00**.
2. 1024 = 2¹⁰. පරතරය = 2¹⁰ × 2⁻¹⁰ = **1**. 1024.5 හරියටම 1024 සහ 1025 අතර මැදයි. round-to-nearest-even නිසා **1024** (mantissa ඉරට්ටේ).
3. 2 × 10⁻⁸ < 2.98 × 10⁻⁸ → **0**. × 4096 = 8.19 × 10⁻⁵ → 2⁻¹⁴ ≈ 6.10 × 10⁻⁵ ට වඩා විශාල නිසා සාමාන්‍ය FP16 අගයකි. **ශුන්‍ය නොවේ**.
4. S = 6.0 ÷ 255 ≈ **0.02353**. Z = round(0 ÷ S) = **0**. q = round(2.0 ÷ 0.02353) = round(85.0) = **85**.
5. 70 × 10⁹ × 0.5 byte = **35 GB**.
6. BF16 හි exponent bits 8 ක් ඇත, FP32 හි මෙන්. එබැවින් කුඩා gradients (උදා. 10⁻⁸) සාමාන්‍ය අගයන් ලෙසම නිරූපණය වේ. Google ලිපිය කියන්නේ FP16 ට සාමාන්‍යයෙන් loss scaling වැනි විශේෂ ප්‍රතිකාර අවශ්‍ය වන බවත් BF16 ට ඒවා අවශ්‍ය නොවන බවත්ය.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Paulius Micikevicius et al., "Mixed Precision Training", ICLR 2018. arXiv කතුවරුන්ගේ පිටපත: https://arxiv.org/abs/1710.03740. §3.1 (FP32 master copy; 2⁻²⁴; Mandarin ආකෘතියේ ~5% gradients, Figure 2b), §3.2 (loss scaling; factors 8–32K; 65,504), §3.3 (FP32 accumulation).
- Benoit Jacob et al., "Quantization and Training of Neural Networks for Efficient Integer-Arithmetic-Only Inference", CVPR 2018. CVF open access (නිල): https://openaccess.thecvf.com/content_cvpr_2018/papers/Jacob_Quantization_and_Training_CVPR_2018_paper.pdf. §2.1, සමීකරණය (1), "zero-point", r = 0 හරියටම නිරූපණය.
- Shibo Wang සහ Pankaj Kanwar, "BFloat16: The secret to high performance on Cloud TPUs", Google Cloud බ්ලොග්, 2019 අගෝස්තු 23: https://cloud.google.com/blog/products/ai-machine-learning/bfloat16-the-secret-to-high-performance-on-cloud-tpus ("Bfloat16 semantics", "Choosing bfloat16").
- ජාතික අධ්‍යාපන ආයතනය, *12 ශ්‍රේණිය ICT ගුරු මාර්ගෝපදේශය*, PDF p.102–104 (නිඛිල නිරූපණ).

FP16/BF16 අගයන් (0.1, 100,000, 2048 + 1, −6.5 = 0xC680, 1.0252 × 10⁻⁵) අපි numpy 2.2 වලින් ගණනය කළ ඒවාය. පරාමිති බිලියන 7, gradient 10⁻⁸, −1.0…1.5 පරාසය සහ ගුණක වර්ග ගණනය ආදර්ශ (illustrative) අංක වේ.


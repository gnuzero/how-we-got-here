---
title: "දෘඪාංගයේ Sparsity"
weight: 67
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 66
aliases:
  - /posts/60-sparsity-in-hardware/
  - /posts/66-sparsity-in-hardware/
tags: []
summary: "දන්නා-ශුන්‍ය MAC මඟහරින්න — නමුත් ඝන MAC දෘඪාංගයට ලාභ වන්නේ ව්‍යුහගත රටා පමණි"
image_prompt: "Diagram of a dense weight matrix vs a 2:4 structured-sparse weight matrix, clean AI accelerator diagram style"
video_prompt: "20-second animation: a dense matrix pruned to a structured 2:4 sparse pattern, hardware skipping zeroed entries, clean technical animation"
schematics: "Diagram: 2:4 structured sparsity pattern + sparse tensor core compute flow"
---

Post 59 අඩු කළ precision හරහා එක් එක් මෙහෙයුම ලාභ කළේය. Sparsity යනු අනුපූරක ලීවරයයි: කිසිවක් දායක නොවන මෙහෙයුම් මඟහරින්න — operand එකක් දැනටමත් ශුන්‍ය වන ගුණන.

## ජාල බොහෝ විට Sparse වන්නේ ඇයි

පුහුණු කළ ජාලවල බොහෝ විට ශුන්‍යයට ආසන්න බර බොහෝ ඇත — training dynamics වලින්, හෝ කුඩා නිරවද්‍යතා පිරිවැයකට කුඩා, ලාභ ආකෘතියක් සඳහා වැඩි බර නිශ්චිත ශුන්‍යයට තල්ලු කරන හිතාමතා pruning වලින්. ශුන්‍යය වාර ඕනෑම දෙයක් no-op එකකි; එම MAC මඟහැරීම නවීන ආකෘති ධාවනය වන පරිමාණයේ සැබෑ කාලය සහ ශක්තිය ඉතිරි කරයි.

## Unstructured එදිරිව Structured

**Unstructured** sparsity ශුන්‍ය අත්තනෝමතිකව විසිරුවයි. ඝන matmul දෘඪාංගය (tensor cores, systolic arrays) ගොඩනැගෙන්නේ නිත්‍ය වැඩ සඳහා ය; අත්තනෝමතික ශුන්‍ය මඟහැරීමට ඉතිරිකිරීම් මකා දැමිය හැකි control සංකීර්ණතාව අවශ්‍ය වේ.

**Structured** sparsity දෘඪාංග-මිතුරු රටාවක් බල කරයි — පොදුවේ 2:4: බර හතරක සෑම කණ්ඩායමකම, නිශ්චිතව දෙකක් ශුන්‍ය ය (පිහිටීම් වෙනස් විය හැක; *ගණන* ස්ථිර ය). අනාවැකි කළ හැකි ව්‍යුහය යනු විශේෂිත දෘඪාංගයට මධ්‍යස්ථ, නිත්‍ය control තර්කය සමඟ මඟහැරිය හැකි දේයි.

## ප්‍රතිලාභය — සහ පරතරය

Structured-sparsity සහාය සහිත දෘඪාංගයට, 2:4 බර matrices මත, ඝනට එරෙහිව 2× දක්වා math throughput ප්‍රචාරණය කළ හැක. සැබෑ GEMM බොහෝ විට ~1.3–1.8× ආසන්නයට ගොඩබසී; end-to-end ජාල ~1.3–1.5× ආසන්නයට, kernels, මතකය, සහ නිරවද්‍යතාව ආරක්ෂා කරන prune/retrain මගින් සීමා වේ. තවමත් Post 57 තේමාව: කුමන ගණනය කිරීම ව්‍යුහාත්මකව අනවශ්‍යදැයි දන්නා විට, එය මඟහැරීමට සිලිකන් ගොඩනැගිය හැක — න්‍යාය සහ නිෂ්පාදනය වෙන්ව රැඳුණත්.

## Precision සමඟ සංයුක්ත කරන්න

Sparsity සහ අඩු කළ precision විකල්ප නොවේ. නවීන accelerators බොහෝ විට දෙකම භාවිතා කරයි: පහළ-precision, ව්‍යුහගතව sparse MAC — ලාභ ops *සහ* අඩු ගණනක් — එකම ස්ථිර ප්‍රදේශය සහ බල අයවැය ඇතුළත.

## ගැඹුරින්: 2:4 රටාව බිට් මට්ටමෙන් — metadata, ගබඩා ගණිතය සහ 2× සීමාව

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "sparsity neural network sinhala" සහ "pruning neural network sinhala" සෙවුම්වලට ලැබුණේ පොදු neural network හැඳින්වීම් පමණි (උදා. CodePRO LK නාලිකාවේ වීඩියෝ; අප හඳුනාගත්තේ මාතෘකාවෙන් පමණි, නැරඹුවේ නැත). ඒවායේ මාතෘකාවල pruning, sparse matrix ගබඩා කිරීම හෝ 2:4 structured sparsity සඳහන් නොවේ. එබැවින් මෙම කොටස NVIDIA A100 whitepaper සහ NVIDIA පර්යේෂකයන්ගේ arXiv ලිපිය භාවිතා කර, ගණනය බිට් මට්ටමෙන් ගොඩනඟයි.

### 1. මූලික පද

- **Sparsity:** matrix එකක ශුන්‍ය (zero) අගයන්ගේ භාගයයි. 50% sparsity යනු අගයන්ගෙන් අඩක් ශුන්‍ය වීමයි.
- **Pruning:** කුඩා බර (weights) හිතාමතාම ශුන්‍ය කිරීමයි.
- **Unstructured sparsity:** ශුන්‍ය ඕනෑම තැනක තිබිය හැකි ආකාරයයි.
- **Structured (2:4) sparsity:** අගයන් 4 ක සෑම කණ්ඩායමකම ශුන්‍ය නොවන (non-zero) අගයන් උපරිම 2 ක් පමණක් ඇති රටාවයි.
- **Metadata:** සම්පීඩිත (compressed) matrix එකක ශුන්‍ය නොවන අගයක් මුලින් තිබූ ස්ථානය සටහන් කරන අතිරේක බිට් වේ.
- **CSR (Compressed Sparse Row):** unstructured sparse matrices සඳහා පොදු ආකෘතියයි. එක් එක් ශුන්‍ය නොවන අගය සමඟ එහි column index එක ද, පේළි ආරම්භ ස්ථාන ද ගබඩා කරයි.
- **GEMM:** general matrix multiply, එනම් Post 57 හි ප්‍රධාන ගණනයයි.

### 2. NVIDIA A100: නිල ප්‍රකාශ

NVIDIA A100 whitepaper (2020) කියන්නේ:
- 2:4 නිර්වචනය "allows two non-zero values in every four-entry vector" (p.31) යන්නයි.
- එමගින් බර සම්පීඩනය කර දත්ත ප්‍රමාණය සහ bandwidth "2x" කින් අඩු වේ.
- Sparse Tensor Core ශුන්‍ය මඟහැරීමෙන් math throughput දෙගුණ කරයි (pp.31–32).
- 16×8×16 MMA එකක් dense ලෙස N cycles ගන්නා අතර, sparse ලෙස **N/2** cycles ගනී (p.32).

වගුව 2 (p.23) අනුව A100 හි උපරිම අගයන්:

| ආකෘතිය | Dense | 2:4 sparse සමඟ |
|---|---|---|
| FP16 / BF16 Tensor Core | 312 TFLOPS | 624 TFLOPS |
| TF32 Tensor Core | 156 TFLOPS | 312 TFLOPS |
| INT8 Tensor Core | 624 TOPS | 1,248 TOPS |

NVIDIA හි ක්‍රමවේදය මෙසේය (p.32):
1. පළමුව dense ලෙස පුහුණු කරයි.
2. ඉන්පසු 2:4 රටාවට prune කරයි.
3. ඉතිරි බර නැවත fine-tune කරයි.

මෙමගින් inference නිරවද්‍යතාවේ "virtually no loss" (ප්‍රායෝගිකව අලාභයක් නැති) බව වාර්තා වේ.

### 3. වැඩ කළ උදාහරණය: එක් පේළියක් prune කර සම්පීඩනය කිරීම

Mishra සහ තවත් අය (NVIDIA), *Accelerating Sparse Deep Neural Networks* (arXiv:2104.08378, 2021), Fig. 6 හි පළමු පේළිය:

`1.3  1.9  0.2  1.2 | 4.2  3.5  7.2  0.6`

**පියවර 1: prune කිරීම.** සරලම නීතිය: "removes the two smallest weights in each group of four" (එක් එක් හතරේ කණ්ඩායමේ කුඩාම බර දෙක ඉවත් කරයි, §4.1).
- කණ්ඩායම 1: 1.3, 1.9 තබා ගනී (0.2, 1.2 ඉවත් වේ).
- කණ්ඩායම 2: 4.2, 7.2 තබා ගනී (3.5, 0.6 ඉවත් වේ).

**පියවර 2: ගබඩා කිරීම.**
- අගයන්: `[1.3, 1.9, 4.2, 7.2]`
- metadata (කණ්ඩායම තුළ ස්ථානය, බිට් 2 බැගින්): `[[0, 1], [0, 2]]` = `00 01 | 00 10`

ලිපිය පවසන පරිදි ස්ථානයක් කේතනය කිරීමට බිට් 2 ක් භාවිතා වේ (§3.1). matmul කිරීමේදී දෙවන matrix එකේ අදාළ අගයන් ගැනීමට මෙම metadata අවශ්‍ය වේ.

**පියවර 3: අලාභය.** පේළියේ මුළු විශාලත්වය (magnitude) 20.1 සිට **14.6** දක්වා අඩු වේ. සම්පූර්ණ 4×8 උදාහරණ matrix එකේ මුළු විශාලත්වය 117.5 කි. prune කිරීමෙන් පසු ලිපියේ සඳහන් පරිදි එය **83.7** කි. columns මුලින් නැවත සකස් කළහොත් (permute) එය **102.9** දක්වා ආරක්ෂා වේ (Fig. 6). 117.5 අපි ගණනය කළ එකතුවයි.

### 4. ගබඩා ගණිතය

**කණ්ඩායමකට බිට්** (Mishra §3.1):
- **FP16:** dense = 4 × 16 = 64 bits. 2:4 = 2 × 16 + 2 × 2 = 36 bits. ඉතිරිය 28/64 ≈ **44%** යි.
- **INT8:** dense = 4 × 8 = 32 bits. 2:4 = 2 × 8 + 2 × 2 = 20 bits. ඉතිරිය 12/32 ≈ **38%** යි.
- metadata overhead එක FP16 සඳහා 2/16 = **12.5%** ක් සහ INT8 සඳහා 2/8 = **25%** කි.
- CSR සඳහා, 8-bit අගයකට 16-bit column index එකක් අවශ්‍ය වුවහොත් overhead එක **200%** දක්වා යා හැකි බව ලිපිය කියයි.

**ආදර්ශ ගණනය: 1024 × 1024 FP16 matrix, 50% ශුන්‍ය.**

CSR සඳහා අපි 16-bit column indices සහ 32-bit row pointers උපකල්පනය කරමු.

| ආකෘතිය | ගණනය | bytes | dense හා සසඳන විට |
|---|---|---|---|
| Dense | 1,048,576 × 2 | 2,097,152 | 100% |
| CSR (unstructured) | 524,288 × (2 + 2) + 1,025 × 4 | 2,101,252 | **≈100%** (ඉතිරියක් නැත!) |
| 2:4 | 524,288 × 2 + 524,288 × 2 bits ÷ 8 | 1,179,648 | **56.25%** |

- 50% sparsity දී CSR කිසිවක් ඉතිරි නොකරයි. එක් එක් අගයක index එක අගය තරම්ම විශාල වීම එයට හේතුවයි.
- CSR ප්‍රයෝජනවත් වන්නේ sparsity ඉහළ වූ විට පමණි. 90% ශුන්‍ය නම් 104,857 × 4 + 4,100 ≈ 423,528 bytes, එනම් **≈20%** කි.
- 2:4 රටාව මධ්‍යස්ථ (50%) sparsity වලදී පවා ඉතිරියක් දෙයි. එමෙන්ම එහි ප්‍රවේශ රටාව සෑම කොටසකම එක සමානය. ලිපියට අනුව එය "no indirection required" (වක්‍ර ලිපින යොමු කිරීම් අවශ්‍ය නැති) ආකාරයකි (§3.1).

### 5. "2× දක්වා" සහ සැබෑ ලාභය

Mishra ලිපියේ Fig. 3 (A100, INT8, M = N = 10240) අනුව, විශාල GEMMs "nearly a 2× speedup" (2× ට ආසන්න වේගවත් වීමක්) ලබා ගනී. කුඩා GEMMs ඊට අඩු අගයක් ලබයි. ලිපියට අනුව එයට හේතුව arithmetic intensity සහ GEMM මානයන්ය (§3.2).

**Amdahl සමඟ (ආදර්ශ ගණනය):** ජාලයක කාලයෙන් p කොටසක් පමණක් sparse GEMMs වල ගත වී, එය 2× කින් වේගවත් වුවහොත් මුළු වේගවත් වීම = 1 / ((1 − p) + p/2) වේ.
- p = 0.7 → 1 / (0.3 + 0.35) ≈ **1.54×**
- p = 0.6 → 1 / (0.4 + 0.3) ≈ **1.43×**

post එකේ "end-to-end ජාල ~1.3–1.5×" යන්න මෙම ගණිතය සමඟ ගැළපේ. GEMM නොවන කොටස් (activation, normalization, මතක චලනය) වේගවත් නොවේ. p අගයන් අපේ ආදර්ශ අගයන් වේ. Post 56 හි Amdahl සූත්‍රය බලන්න.

### 6. පැන්සලෙන් අභ්‍යාසය

1. `0.5 −3.1 2.0 0.1` කණ්ඩායම 2:4 ට prune කරන්න (විශාලත්වය අනුව). ගබඩා වන අගයන් සහ metadata මොනවාද?
2. BF16 (bits 16) කණ්ඩායම් 1,000 ක් dense ලෙස සහ 2:4 ලෙස කොපමණ bytes ගනීද?
3. A100 TF32 dense 156 TFLOPS නම්, 2:4 සමඟ උපරිමය කීයද?
4. p = 0.8 නම් (ඉතිරිය නොවෙනස්ව) මුළු වේගවත් වීම කීයද?
5. 16-bit අගයන් සහ 16-bit indices සහිත CSR (row pointers නොසලකා) dense ට වඩා කුඩා වන්නේ sparsity කීයට වඩා වැඩි වූ විටද?

(පිළිතුරු:
1. −3.1 සහ 2.0 ඉතිරි වේ. අගයන් `[−3.1, 2.0]`, metadata `[1, 2]` = `01 10`.
2. dense = 1,000 × 64 bits = **8,000 bytes**; 2:4 = 1,000 × 36 bits = **4,500 bytes**.
3. **312 TFLOPS** (A100 වගුව 2 හි ඇති අගයයි).
4. 1 / (0.2 + 0.4) ≈ **1.67×**.
5. ශුන්‍ය නොවන එක් අගයකට bits 32 ක් (dense හි 16 ට දෙගුණයක්) ගබඩා වේ. එබැවින් ශුන්‍ය නොවන භාගය 50% ට අඩු විය යුතුය. එනම් sparsity **50% ට වඩා** වැඩි විය යුතුය.)

**මෙම කොටසේ මූලාශ්‍ර:**
- NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture* whitepaper, 2020. p.23 (වගුව 2) සහ pp.31–32 ("A100 Introduces Fine-Grained Structured Sparsity") භාවිත කළෙමු: <https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf>
- A. Mishra, J. Albericio Latorre, J. Pool, D. Stosic, D. Stosic, G. Venkatesh, C. Yu, P. Micikevicius, *Accelerating Sparse Deep Neural Networks*, arXiv:2104.08378v1, 2021 අප්‍රේල් 16. §3.1, §3.2 (Fig. 3), §4.1 (Figs. 5–6) භාවිත කළෙමු: <https://arxiv.org/abs/2104.08378>

1024 × 1024 matrix, CSR index පළල සහ p අගයන් ආදර්ශ අගයන් වේ.


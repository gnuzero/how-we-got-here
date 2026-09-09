---
title: "දෘඪාංගයේ Sparsity"
weight: 61
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 60
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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

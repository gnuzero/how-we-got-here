---
title: "Matrix Multiply චිප නිර්මාණය හැඩගැස්වූයේ ඇයි"
weight: 58
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 57
tags: []
summary: "AI compute පරිමාණයේ matmul වෙත අඩු වේ — එම හැඩයට සිලිකන් විශේෂීකරණය කරන්න"
image_prompt: "Infographic showing a neural network layer's forward pass as a matrix multiply mapped onto specialized hardware, clean AI hardware explainer style"
video_prompt: "20-second animation: a neural network layer computation as a matrix multiply through specialized MAC units, clean technical animation"
schematics: "Diagram: neural network layer as matrix multiply + general ALU vs specialized MAC array comparison"
---

මෙම අවසාන අදියර නවීන AI workloads සඳහා ගොඩනැගූ දෘඪාංගයයි. චිප නිර්මාණය මෙතරම් දැඩිව මෙම දෙසට නැමුණේ ඇයිද යන්න පැහැදිලි වන්නේ "AI workload" එකක් අංක ගණිත මට්ටමේ ඇත්තටම අඩු වන්නේ කුමක්දැයි කී විට ය — වාක්‍යාංශය යෝජනා කරනවාට වඩා පටු සහ යාන්ත්‍රික ය.

## Layer එකක් ගණනය කරන්නේ කුමක්ද

Fully connected layer එකක forward pass යනු matrix multiplication එකකි: activations වාර බර, පසුව ලාභ elementwise nonlinearity එකක්. Convolutions matmul ලෙස ප්‍රතිසංස්කරණය වේ (im2col). Attention — බොහෝ විශාල භාෂා ආකෘති පිටුපස transformers හි හදවත — එලෙසම එහි ගණනය කිරීමේ හදවතේ matrix multiplies ය: query-key scores, පසුව බර තැබූ values. මෙය ඉගැන්වීමේ සරල කිරීමක් නොවේ. නවීන deep learning හි, training සහ inference දෙකෙහිම, අමු cycles වල අතිමහත් බහුතරය matrix multiply-accumulate ය — විශාල පරිමාණය, නිරන්තරයෙන් පුනරාවර්තනය වේ.

## දෘඪාංගය අනුගමනය කළේ ඇයි

Phase 3 CPU core එකක් ගොඩනැගෙන්නේ අත්තනෝමතික අනුක්‍රමික කේතය සඳහා ය — branches, විවිධ මතක ප්‍රවේශය, අනපේක්ෂිත control flow. එම සාමාන්‍යත්වය එක් නිත්‍ය මෙහෙයුමකින් පාලනය වන workload එකකට අවශ්‍ය නොවන යන්ත්‍රණය (prediction, out-of-order, සංකීර්ණ caches) මත ප්‍රදේශය සහ බලය වියදම් කරයි.

Matmul AI compute හි ප්‍රමුඛ කොටස ලෙස හඳුනා ගත් පසු, ඒ සඳහා විශේෂීකරණය වටී විය: සාමාන්‍ය-අරමුණු යන්ත්‍රණය මඟහැර එහි අයවැය MAC throughput මත වියදම් කරන සිලිකන්. Tensor cores (Post 55) එම අදහස තවමත් සාමාන්‍ය GPU එකක් ඇතුළත කාවද්දයි. ඊළඟ පෝස්ට් එක තව දුරටත් යයි — systolic array — එම අවබෝධය වටා මුළු ගෘහ නිර්මාණයම විශේෂීකරණය කරමින්.

## නැවත නැවත එන රටාව

මෙය Post 17 හි superscalar-to-multicore හැරීම සහ Post 49 හි planar-to-FinFET-to-GAA පරිණාමය වැනි *වර්ගයේ* කතාවකි, දැන් මුළු-චිප ගෘහ නිර්මාණයේ: workload එකක හැඩය හොඳින් තේරුම් ගෙන ප්‍රමාණවත් තරම් ප්‍රමුඛ වූ පසු, එම හැඩය සඳහා විශේෂිත දෘඪාංගය එය බොහෝ අවස්ථා අතර එකක් ලෙස සලකන සාමාන්‍ය-අරමුණු දෘඪාංගයට වඩා ජය ගනී. Matmul හි ප්‍රාධාන්‍යය නිසා මෙම අදියරේ බොහෝ දේ අරමුණු-නිර්මිත සිලිකන් වේ — වැඩිදුර CPU, හෝ පවා සාමාන්‍ය GPU, වැඩිදියුණුව පමණක් නොවේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

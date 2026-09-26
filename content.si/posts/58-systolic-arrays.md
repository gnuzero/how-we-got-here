---
title: "Systolic Arrays"
weight: 59
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 58
tags: []
summary: "දත්ත MAC ජාලයක් හරහා ස්පන්දනය වේ — මුළු චිපයම matmul සඳහා විශේෂීකරණය කරන්න (TPU)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

Post 55 ආවරණය කළේ tensor cores — තවමත් සාමාන්‍ය GPU එකක් ඇතුළත විශේෂිත matmul දෘඪාංගය. Systolic arrays විශේෂීකරණය තව දුරටත් තල්ලු කරයි: matrix multiplication සඳහා සරල processing elements ජාලයක් හරහා දත්ත ප්‍රවාහය කිරීම වටා සංවිධානය වූ ගෘහ නිර්මාණයක්. Google ගේ TPU (Tensor Processing Unit) වඩාත්ම කැපී පෙනෙන නිකුත් කළ උදාහරණයයි. අදහසම පැරණි ය: **H. T. Kung** සහ **Charles E. Leiserson** 1970 ගණන්වල අගභාගයේ VLSI සඳහා systolic arrays නම් කර විධිමත් කළහ.

## දත්ත ගලයි; ගණනය කිරීම මඟ දිගේ සිදු වේ

Systolic array එකක් යනු සරල processing elements වල 2D ජාලයකි, එක එකක් multiply-accumulate එකක්, දත්ත සම්බන්ධීකරණය වූ රිද්මයකින් චලනය වන පරිදි සකස් කර ඇත. එක් එක් PE දත්ත පැමිණෙන විට MAC එකක් කරයි. Weight-stationary නිර්මාණයකදී (Google ගේ TPU MXU හි මෙන්), බර පෙර-පූරණය කර තබා ගනිමින් activations හරහා ගලා යන අතර partial sums අසල්වැසියන් වෙත ප්‍රචාරණය වේ — operands දෙකම නිදහසේ සැරිසරනවාට වඩා systolic "හෘද ස්පන්දනයක්." නම හිතාමතා හදවතේ ස්පන්දනය ප්‍රතිධ්වනි කරයි: දත්ත මධ්‍යම බෙදාගත් control මාර්ගයක් හරහා fetch කරනවාට වඩා රැළි වශයෙන් චලනය වේ.

## Weight-Stationary Dataflow

බර *ස්ථාවර* තබා ගන්න — එක් එක් PE වෙත එක් වරක් පූරණය කර — activations පසුකර ගලා යන අතරතුර තබා ඇති බරට එරෙහිව ගුණ කර, partial sums ජාලය හරහා accumulate වේ. පූරණය වූ පසු, සෑම MAC එකකදීම බර නැවත fetch කිරීම අවශ්‍ය නොවේ. Posts 35 සහ 54 හි මතක-bandwidth පීඩනය ලබා දුන් විට, එය වැදගත් ය: නැවත භාවිතා වන අගයන් compute ස්ථානයේ තබා දත්ත චලනය කපන්න — systolic නිර්මාණය පිළිතුරු දීමට ගොඩනැගූ එම සීමාවම.

## GPU Tensor Cores එදිරිව Systolic Chip එකක්

Tensor cores තවමත් සාමාන්‍ය SIMT ගෘහ නිර්මාණයක් (Posts 52–53) ඇතුළත වාඩි වේ — matmul ඉක්මවා බොහෝ සමාන්තර workloads ධාවනය කළ හැක. TPU වැනි systolic-array චිපයක් පටු ඔට්ටුවක් තබයි: කාර්යක්ෂම matrix multiplication වටා *මුළු* චිපයම සංවිධානය කරන්න, එම හැඩයට නොගැලපෙන වැඩ සඳහා අඩු නම්‍යතාව සමඟ. කිසිවක් දැඩි ලෙස වඩා හොඳ නොවේ — matmul-ප්‍රමුඛ භාර මත කාර්යක්ෂමතාව එදිරිව පුළුල් සමාන්තර මිශ්‍රණයක් මත නම්‍යතාව.

## විශේෂිත හදවත ලෙස MXU

Google ගේ TPU හි, Matrix Multiply Unit (MXU) යනු matmul throughput බහුතරය රැගෙන යන systolic array ය — control, මතක interfaces, සහ non-matmul ඉතිරිය සඳහා vector units අසල. විශේෂිත හදවත එකතුව සහායක තර්කය යනු මෙම අදියරේ accelerators හරහා නැවත නැවත එන රටාවයි.

**පිටවීමේ දොර:** H. T. Kung and Charles E. Leiserson, "Systolic Arrays (for VLSI)" (*Sparse Matrix Proceedings 1978*, SIAM, 1979) — matrix ගණනය කිරීම සඳහා රිද්මික MAC arrays පිළිබඳ සම්භාව්‍ය ප්‍රකාශනය; සමීපව සම්බන්ධ ස්වරූපයක් Mead and Conway ගේ *Introduction to VLSI Systems* (1980) හිද පෙනේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

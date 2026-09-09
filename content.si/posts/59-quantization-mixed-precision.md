---
title: "Quantization සහ Mixed Precision"
weight: 60
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 59
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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

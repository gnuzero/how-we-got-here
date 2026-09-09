---
title: "Tensor Cores"
weight: 55
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 55
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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "Datacenter පරිමාණයේ Interconnect"
weight: 62
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 61
tags: []
summary: "දහස් ගණන් GPU — topology සහ all-reduce ඕනෑම චිපයක peak FLOPS තරම්ම වැදගත් ය"
image_prompt: "System diagram of a multi-rack AI training cluster showing a fat-tree network topology, clean datacenter network architecture diagram style"
video_prompt: "25-second animation: a datacenter-scale fat-tree topology with an all-reduce operation propagating gradient data, clean technical animation"
schematics: "Diagram: rail-optimized fat-tree topology + all-reduce ring/tree communication pattern"
---

Post 56 servers කිහිපයක් ඇතුළත සහ හරහා multi-GPU scaling ආවරණය කළේය — NVLink, NVSwitch, GPUDirect RDMA. විශාල පරිමාණ training තවත් අනුපිළිවෙලකි: සිය ගණන් සිට දහස් ගණන් servers හරහා දහස් සිට දස දහස් ගණන් GPU. ඒවා වයර් කරන ආකාරය ඕනෑම තනි GPU එකක specs තරම්ම වැදගත් ය.

## Naive Wiring පරිමාණය නොවේ

සෑම server එකක්ම අනෙක් සෑම එකකටම සම්බන්ධ කිරීම සම්බන්ධතා quadratic වර්ධනය කරයි — දහස් ගණන් nodes වලට බොහෝ කලින්ම අසාධාරණ ය. සැබෑ clusters hierarchical switching භාවිතා කරයි; තෝරා ගත් ව්‍යුහය ලබා ගත හැකි bandwidth සහ බර training ගමනාගමනය යටතේ එම bandwidth *කෙතරම් සමානව* රැඳෙන්නේද යන්න දෙකම තීරණය කරයි.

## Fat-Tree, Training සඳහා සුසර කළ

Fat-tree switches ස්ථර කරයි — servers හි leaf switches, leaves සම්බන්ධ කරන spine switches — ඉහළ (ආදර්ශයෙන් non-oversubscribed) bisection bandwidth ඉලක්ක කරමින්; සැබෑ AI clusters තවමත් oversubscribe කරනවා හෝ rail-optimized විචල්‍යයන් භාවිතා කරනවා විය හැක. මෙය Post 42 හි datacenter networking අදහස දහස්-ගණන්-GPU පාලනයේ ය.

Rail-optimized නිර්මාණ තවදුරටත් විශාල training jobs ඇත්තටම ජනනය කරන සන්නිවේදන රටා වටා සුසර කරයි — සාමාන්‍ය datacenter ගමනාගමනය නොවේ. Training ගමනාගමනය වෙනස් ය; ඒ සඳහා ගොඩනැගූ topology එකක් සාමාන්‍ය එකකට වඩා ජය ගත හැක.

## All-Reduce බඳින රටාවයි

Data-parallel training (Post 46) සෑම පියවරකදීම සහභාගී සෑම GPU එකක්ම හරහා gradients සමමුහුර්ත කළ යුතු ය — එක් එක් batch slice එකෙන් දේශීය gradients, පසුව ඊළඟ පියවරට පෙර ඒකාබද්ධ කිරීම (සාමාන්‍යයෙන් සාමාන්‍යය). එම all-reduce සම්පූර්ණ training ධාවනයක් මත නිරන්තරයෙන් ධාවනය වේ. එහි කාර්යක්ෂමතාව අමු bandwidth *සහ* topology මත රඳා පවතී: ring හෝ tree ඇල්ගොරිතම භෞතික wiring දැනේ, න්‍යායික aggregate peak පමණක් නොවේ.

## Topology Spec Sheets ට වඩා ජය ගත හැක

නරක ලෙස නිර්මාණය කළ හෝ oversubscribed fabric එකක් මත විශිෂ්ට GPU, සැලකිල්ලෙන් rail-optimized ජාලයක් මත මධ්‍යස්ථ GPU වලට පරාජය විය හැක — මක්නිසාද යත් all-reduce බාධකය බවට පත් වන නිසා, ඕනෑම චිපයක peak FLOPS නොවේ. නැවතත් මාලා තේමාව: සංරචක specs (ට්‍රාන්සිස්ටර ගණන, clock, peak FLOPS) කතාවේ කොටසක් පමණි. කොටස් සම්බන්ධ වන ආකාරය — චිපයක buses (Phase 5) සිට training cluster එකක topology දක්වා — බොහෝ විට සැබෑ ලබා ගත් කාර්ය සාධනය තීරණය කරයි.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

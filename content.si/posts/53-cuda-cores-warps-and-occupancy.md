---
title: "CUDA Cores, Warps සහ Occupancy"
weight: 53
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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

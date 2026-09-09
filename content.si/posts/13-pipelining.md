---
title: "Pipelining"
weight: 14
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 13
tags: []
summary: "Throughput සඳහා උපදෙස් අතිච්ඡාදනය කරන්න — පසුව hazards මගින් forwarding, stalls, සහ ඊට පසු සියල්ල බල කෙරේ"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

තනි-චක්‍ර datapath එක (Post 12) throughput මේසය මත තබා හරියි: සෑම උපදෙස් එකක්ම මන්දගාමීම මාර්ගයට රැඳෙයි. Pipelining ක්‍රියාත්මක කිරීම අදියරවලට කපා, විවිධ උපදෙස් *එකවර* විවිධ අදියරවල රැඳෙන්නට ඉඩ දෙයි.

## අදියර පහක්, අතිච්ඡාදනය වූ

සම්භාව්‍ය RISC pipeline එකක්: **IF** (fetch), **ID** (decode / register කියවීම), **EX** (ALU), **MEM** (load/store), **WB** (write back). Pipeline registers (නැවතත් Post 9) සෑම clock එකකදී අදියර අතර ප්‍රතිඵල latch කරයි.

උපදෙස් N EX හි ඇති අතරතුර, N+1 ID හිත් N+2 IF හිත් රැඳිය හැක. Steady state එකේදී නව උපදෙස් එකක් *සම්පූර්ණ වන්නේ* සෑම චක්‍රයකම — එක් එක් එක ආරම්භයේ සිට අවසානය දක්වා තවමත් චක්‍ර පහක් ගත කළද. Latency රැඳෙයි; throughput ඉහළ යයි. එම වෙන්කිරීම මෙයින් පසු සෑම තැනකම දිස් වේ.

**දැන් මෙය උත්සාහ කරන්න.** පහත mini-CPU එක උපදෙස් එකකට වරක් Step කරන්න — එය Post 12 දෘශ්‍යමාන කළ තනි-චක්‍ර පුරුද්දයි. Pipelining ගේ ඔට්ටුව throughput ය: එකම fetch / decode / execute කොටස් උපදෙස් හරහා අතිච්ඡාදනය වීම, ටික් එකකට සම්පූර්ණ උපදෙස් එකක් නොවේ. අනුක්‍රමික Step එක දැනෙන්න, පසුව සැබෑ pipelines එතරම් සරලව රැඳිය නොහැකි වන්නේ ඇයි යන්න දැනගෙන hazard කොටස කියවන්න.

{{< lab type="mini-cpu" >}}

## Hazards: ස්වාධීනත්වය බිඳෙන තැන්

උපදෙස් කලාතුරකින් ස්වාධීන වේ.

**Data hazards** — උපදෙස් එකකට අවශ්‍ය අගයක්, තවමත් ගුවන්ගතව ඇති පෙර උපදෙස් එකක් ලිවීම අවසන් කර නැත. **Forwarding** (bypassing) ALU ප්‍රතිඵලය පසු pipeline register එකකින් සෘජුව EX වෙත යළි මාර්ගගත කරයි — register file එක මඟහරිමින් — එබැවින් යැපෙන උපදෙස් එකට බොහෝ විට stall අවශ්‍ය නොවේ. Forwarding සෑම පරතරයක්ම වසා දැමිය නොහැක: load එකකට වහාම පසුව භාවිතයක් තිබේ නම්, MEM අදියර අවසන් වන තුරු තවමත් **stall** එකක් (bubble එකක්) අවශ්‍ය වේ.

**Control hazards** — branches. Pipeline එකට taken/not-taken, හෝ ඉලක්කය, ප්‍රමාද වන තුරු නොදැනේ — නමුත් පසු උපදෙස් දැනටමත් fetch කර ඇත. Taken branch එකකදී ඒවා flush කළ යුතුය. වැරදි මාර්ගයේ ගත කළ චක්‍ර නාස්තියකි.

## එම වියදම් ඊළඟට බල කරන දේ

Misprediction flush මිල අධිකය — එබැවින්ම branch prediction (Post 14) පවතී: මුලින්ම සහ ප්‍රමාණවත් නිරවද්‍යතාවයකින් අනුමාන කරන්න, flush දුර්ලභ වන තරමට. Load-use stall එක නිසාම out-of-order execution (Post 16) පවතී: රැඳෙන උපදෙස් එක පමණක් stall කරන්න, සම්පූර්ණ pipeline එක නොවේ, සහ ඊට පසු ස්වාධීන වැඩ ධාවනය වන්නට ඉඩ දෙන්න.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

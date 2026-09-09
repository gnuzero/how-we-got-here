---
title: "GPU මතක ධුරාවලිය"
weight: 55
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 54
tags: []
summary: "දහස් ගණන් threads DDR ට වඩා bandwidth බල කරයි — HBM මතකය compute අසල stack කරයි"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

Post 35 මතක බිත්තිය නම් කළේය: DRAM latency compute ට පසුපසින් ගියේය, එබැවින් latency මුරණ්ඩුවෙන් රැඳුණු තැන කර්මාන්තය *bandwidth* පසුපස ගියේය. එම ප්‍රතිචාරය GPU මතකයේ තරම් ප්‍රතිවිපාක සහිත තැනක් නැත — Posts 52–53 හි සමාන්තර throughput සාම්ප්‍රදායික DDR (Post 34) පෝෂණය කළ නොහැකි ආශාවක් නිර්මාණය කරයි.

## GPU CPU-විලාස මතකයේ කුසගින්නෙන් පෙළෙන්නේ ඇයි

CPU එකක් මධ්‍යස්ථ උපදෙස් ප්‍රවාහ ගණනක් ධාවනය කරයි; caches (Post 15) බොහෝ විට working set එක අවශෝෂණය කරයි. GPU එකකට බොහෝ SM හරහා දහස් ගණන් threads එකවර මතකය අවශ්‍ය විය හැක. On-chip caching උපකාරී වේ, නමුත් aggregate bandwidth ඉල්ලුම සමාන බලයකදී CPU මතක උපපද්ධතියකට වඩා නාටකාකාර ලෙස ඉහළ ය — වෙනස් භෞතික පිළිතුරක් බල කළ සීමාව.

## HBM: Die එක අසල Stack කරන්න

High Bandwidth Memory DRAM dies සිරස්ව stack කරයි, වෙනම DIMM එකකට දිගු PCB traces වෙනුවට through-silicon vias (TSV) හරහා සම්බන්ධ වේ. ඉතා පුළුල් interface එකක් සමඟ ඒකාබද්ධව, එය සමාන DDR ට වඩා බොහෝ bandwidth ලබා දෙයි — Post 51 හි advanced packaging මිලට. HBM සහ GPU compute die එක සාමාන්‍යයෙන් සිලිකන් interposer එකක් බෙදා ගනී: chiplets සඳහා භාවිතා කළ එම packaging පවුලම, මෙහිදී ක්‍රියාකාරී dies බෙදීම වෙනුවට මතකය compute *අසල* තැබීමට යොදන ලදී.

## GPU ඇතුළත ධුරාවලිය

HBM-එදිරිව-DDR ඉක්මවා, GPU ට තමන්ගේ pyramid එකක් ඇත — Post 10 හි register–cache–main-memory හැඩය GPU-විශේෂිත මට්ටම් සමඟ ප්‍රතිධ්වනි කරමින්. එක් එක් SM හි register file යනු වේගවත්ම දේශීය ගබඩාවයි. Shared memory — SM එකේ programmer-managed scratchpad එකක් — block එකක threads ට තව දුරටත් round-trip නොකර දත්ත බෙදා ගැනීමට ඉඩ දෙයි. L2 cache එක මුළු GPU එකම ආවරණය කරයි. HBM යනු "ප්‍රධාන මතක" මට්ටමයි: CPU DRAM ට වඩා බොහෝ ඉහළ bandwidth, තවමත් on-chip ඕනෑම දෙයකට වඩා ඉහළ latency — එම latency-එදිරිව-capacity tradeoff එකම, GPU පරිමාණයේ.

## ඊළඟ දේ පෝෂණය කිරීම

මෙම ගෘහ නිර්මාණය පවතින්නේ විශාල compute ආශාවක් පෝෂණය කිරීමට ය. Peak FLOPS අර්ථයක් නැත operands පැමිණිය නොහැකි නම් සහ ප්‍රතිඵල පිටවිය නොහැකි නම්. ඊළඟ පෝස්ට් එකේ tensor cores යනු HBM හි bandwidth සැපයීමට ගොඩනැගූ compute ව්‍යුහයයි — bandwidth රාමුව ඉදිරියට ගෙන යන්න: tensor core එකක peak අර්ථවත් වන්නේ එය පවත්වා ගත හැකි මතක පද්ධතියකට එරෙහිව පමණි.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

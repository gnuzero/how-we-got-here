---
title: "ARM සහ RISC-V: අද ගෘහ නිර්මාණ භූ දර්ශනය"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 20
tags: []
summary: "Desktop x86 මත පදිංචි වූ පසු, සටන බලය සහ licensing වෙත ගියේය — ARM mobile ජයග්‍රහණය කළේය; RISC-V විවෘත බව මත ඔට්ටු අල්ලයි"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

x86-එදිරිව-RISC සටන (Post 19) 1990 ගණන්වල අග භාගය වන විට desktop සහ server බොහෝ දුරට පදිංචි කළේය. තරඟය අවසන් නොවීය — එය ගමන් කළේය. Mobile, embedded, සහ edge තනි-ත්‍රෙඩ් උච්චයට වඩා watts ගැන වැඩි සැලකිල්ලක් දක්වයි, සහ ISA එකක් වටා ඇති ව්‍යාපාර ආකෘතිය කේතනය තරම්ම වැදගත් බව පෙනී ගියේය.

## ARM: ISA එක License කරන්න, Fab එක ගොඩනඟන්න එපා

ARM Holdings ISA එක නිර්මාණය කර එය license කරයි — නිෂ්පාදනයට සූදානම් cores, හෝ සමාගමකට තමන්ගේම ARM-අනුකූල core එකක් නිර්මාණය කිරීමට ඉඩ දෙන architecture licenses (Apple ගේ සිලිකන් අන්තිමයේ කැපී පෙනෙන උදාහරණයයි). ආකෘතිය ARM fab එකක් ධාවනය නොකර ISA එක නිෂ්පාදකයන් බොහෝ දෙනෙකු හරහා පැතිරවීය.

තාක්ෂණිකව, ARM mobile යුගයට ඇතුළු වූයේ දැනටමත් බල කාර්යක්ෂමතාව සඳහා සුසර කර තිබියදීය — RISC-පෙළපතේ සරල decode එක, පළමු වරට විශාල පරිමාණයෙන් performance-per-watt ගැන සැලකිලිමත් වූ වෙළඳපොළක් හමුවීම. එය වාසනාව නොවීය; එය දශක ගණනක එම නිර්මාණ විනය බැටරි-බලිත උපාංග හමුවීමයි.

## RISC-V: License කළ එකක් වෙනුවට විවෘත

RISC-V (2010 පමණ UC Berkeley හි ආරම්භ වූ කාර්යය, Krste Asanović, David Patterson, සහ සගයන් නම් කළ මෙහෙයවන්නන් අතර) තවත් ඈතට යයි: ISA එක විවෘත සහ royalty-free වේ. පාලනය කරන vendor එකක් සමඟ සාකච්ඡා නොකර core එකක් ක්‍රියාත්මක කරන්න. ගැඹුරු අභිරුචිකරණය හෝ ශුන්‍ය ISA licensing පිරිවැය අරමුණ වන තැන්වල එය වඩාත්ම වැදගත් වේ — embedded පද්ධති, සහ අවසර ඉල්ලීමකින් තොරව RISC-V පදනමක් මත අභිරුචි උපදෙස් අවශ්‍ය accelerators.

## එකම පාඩම, එක් තට්ටුවක් ගැඹුරට

දළ සිතියම: x86 තවමත් අනුකූලතා අවස්ථිතිය මත desktop සහ server වලින් බොහෝමයක් අයිති කර ගනී. ARM mobile අයිති කර ගනී, සැබෑ server සහ laptop ඇතුළුවීම් සමඟ (අභිරුචි cloud ARM; Apple Silicon). RISC-V වාණිජව මුල් අවධියේය, royalty-free නම්‍යතාවය පරිණත මෘදුකාංග තොගයක් පරාජය කරන තැන්වල වේගයෙන්ම වර්ධනය වේ.

Post 19 හි රටාව නැවතත්: කොටසක ජයග්‍රාහකයා හුදකලාව හොඳම ISA එක නොවේ — එය එම කොටස මිලදී ගන්නා දෙයට ආර්ථිකය ගැලපෙන එකයි. ARM mobile ජයග්‍රහණය කළේ watts සහ දුරකථන සාදන්නන්ට යටින් අභිරුචිකරණය කළ හැකි licensing ආකෘතියක් මතය. RISC-V නොමිලේ සහ විවෘත යන්න වර්ධනය වන අවස්ථා කට්ටලයක් සඳහා එයටත් වඩා ජය ගනී යැයි ඔට්ටු අල්ලයි. එය x86 හෝ ARM පරිමාණයට ළඟා වේද යන්න තවමත් විවෘතය.

{{< lab type="mini-cpu" >}}

**පිටවීමේ දොර:** The RISC-V Instruction Set Manual (riscv.org) — මෙම පෝස්ට් එක නම් කරන විවෘත ISA එක සඳහා ජීවමාන ප්‍රාථමික පිරිවිතරය; unprivileged ISA වෙළුමෙන් පටන් ගන්න.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

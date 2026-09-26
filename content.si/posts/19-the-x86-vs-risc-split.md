---
title: "x86 එදිරිව RISC බෙදීම"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 19
tags: []
summary: "RISC කඩදාසියේ පිරිසිදු විය — software lock-in සහ µop පරිවර්තනය x86 ඉහළින් තබා ගත්තේය"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

Post 11 CISC සහ RISC දර්ශන ලෙස නම් කළේය. මෙම පෝස්ට් එක ඒවා වාණිජව තරඟ කළ විට සිදු වූ දෙයයි — සහ "පිරිසිදු" ISA එක හුදෙක් ජය නොගත්තේ ඇයිද යන්නයි.

## RISC තර්කය

1980 ගණන්වල මුල් භාගය: CISC සංකීර්ණතාවට ප්‍රතිචාරයක් ලෙස RISC — SPARC දෙසට Berkeley කාර්යය, MIPS දෙසට Stanford, POWER/PowerPC වෙත පෝෂණය වූ IBM කාර්යය. තර්කය අනුභවික විය: සංකීර්ණ CISC ops සම්පාදිත කේතයේ බොහෝ විට කලාතුරකින් භාවිතා වූ අතර, ඒවාට අවශ්‍ය decode දෘඪාංගය සිලිකන් දැවූ අතර මෙම අදියර දැනටමත් ආවරණය කළ pipelines සංකීර්ණ කළේය. ISA එක සරල, ස්ථිර-දිග, ඒකාකාර උපදෙස් දක්වා ඉවත් කරන්න; සිලිකන් registers, වේගවත් pipelines, වඩා හොඳ caches මත වියදම් කරන්න.

MIPS, SPARC, සහ PowerPC සියල්ල වෙළඳපොළට නිකුත් විය. කාලයක් ඒවා පිරිසිදු ගණනය කිරීමේ benchmarks වලදී x86 පරාජය කළේය, විශේෂයෙන් workstations සහ servers වල.

## x86 බිම තබා ගත්තේ ඇයි

x86 හි වාසිය කිසි දිනෙක අලංකාරත්වය නොවීය — එය IBM PC අනුකූලතාව මත දැනටමත් රැඳී සිටි මෘදුකාංගය විය. එය desktop ප්‍රමිතිය බවට පත් වූ පසු, විශාල ස්ථාපිත පදනමක් ධාවනය වූයේ x86 මත පමණි. පසුගාමී අනුකූලතාව වැටක් බවට පත් විය: නව චිපවලට පැරණි binaries ධාවනය කළ යුතු වූ නිසා, ISA එක පිරිසිදුව RISC-විලාසයෙන් නැවත නිර්මාණය කළ නොහැකි විය — වර්තයෙන් වර්තය දීර්ඝ කළ හැකි පමණි, Intel සහ පසුව AMD මතුපිට නොතකා ක්‍රියාත්මක කිරීම වේගවත් කරන අතරතුර.

සැබෑ විසඳුම: නවීන x86 CISC ops out-of-order core එක තුළ සෘජුව ක්‍රියාත්මක නොකරයි. Decoder එකක් සෑම x86 උපදෙස් එකක්ම එක් හෝ වැඩි ස්ථිර-ආකෘති අභ්‍යන්තර micro-operations (µops) වෙත පරිවර්තනය කරයි — RISC-වැනි — සහ ඒවා Post 16 හි reservation stations, ROB, සහ execution units හරහා ගලා යයි. පිටත: CISC-අනුකූල. ඇතුළත: පරිවර්තන තට්ටුවක් යටතේ RISC-විලාස pipeline එකක්.

## තබා ගත යුතු රටාව

ජයග්‍රාහී ISAs කලාතුරකින් තාක්ෂණික ගුණයෙන් පමණක් ජය ගනී. අනුකූලතාව, පරිසර පද්ධති lock-in, සහ නිෂ්පාදන පරිමාණය නිතරම පිරිසිදු කඩදාසි ගෘහ නිර්මාණය පරාජය කරයි. එම ගතිකයම ඊළඟට ARM ගේ licensing ආකෘතිය එදිරිව RISC-V ගේ විවෘත ISA සමඟ දිස් වේ — උපදෙස් කට්ටලයක් වටා ඇති ව්‍යාපාර ආකෘතිය කේතනය තරම්ම වැදගත් විය හැක.

{{< lab type="mini-cpu" >}}

**පිටවීමේ දොර:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — මෙම වාණිජ සටනේ RISC පැත්තේ ප්‍රකාශනය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

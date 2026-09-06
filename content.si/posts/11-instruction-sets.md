---
title: "උපදෙස් කට්ටල"
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 11
tags: []
summary: "ISA යනු මෘදුකාංග–දෘඪාංග ගිවිසුමයි; CISC සහ RISC එම ගිවිසුම පෙනෙන්නට ඇති ආකාරයට පිළිතුරු දෙකකි"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

Instruction Set Architecture (ISA) යනු මෘදුකාංග සහ දෘඪාංග අතර ගිවිසුමයි: කුමන ක්‍රියාකාරකම් පවතීද, ඒවා bits වල කේතනය වන්නේ කෙසේද, සහ එම bits අර්ථ දක්වන්නේ කුමක්ද. එය *පිරිවිතරයකි*, චිපයක් නොවේ. x86, ARM, සහ RISC-V යනු ISAs වේ — විවිධ චිප බොහොමයක් එකම එක ක්‍රියාත්මක කර තවමත් එකම binaries ධාවනය කළ හැක.

එම වෙන්කිරීම — ගෘහ නිර්මාණය (මෘදුකාංග දකින දේ) එදිරිව microarchitecture (සිලිකන් ගොඩනැගෙන ආකාරය) — මෙම අදියරේ කොඳු නාරටියයි. Pipelines, caches, සහ out-of-order cores සියල්ල ජීවත් වන්නේ ISA *යට* ය. මෘදුකාංගයට දැන ගැනීමට අවශ්‍ය නැත.

## දර්ශන දෙකක්: CISC සහ RISC

CISC (Complex Instruction Set Computing) — x86 පිටුපස ඇති පෙළපත — එක් එක් උපදෙස් තුළ බොහෝ දේ ඇසුරුම් කරයි: විචල්‍ය දිග, පොහොසත් addressing modes, මතකය සෘජුව ස්පර්ශ කළ හැකි අංක ගණිතය. වැඩසටහනකට අඩු උපදෙස්; දුෂ්කර decoder එකක්.

RISC (Reduced Instruction Set Computing) අනෙක් දිශාවට යයි: ස්ථිර-දිග උපදෙස්, දැඩි load/store ආකෘතියක් (ALU ක්‍රියාකාරකම් registers මත පමණි), ඒකාකාර ක්ෂේත්‍ර. වැඩසටහනකට වැඩි උපදෙස්; එක් එක් එක fetch සහ decode කිරීමට පුරෝකථනය කළ හැකි තරම් සරලය, අදියරෙන් අදියර. එම ඒකාකාරත්වය නිසාම pipelining (Post 13) පළමුව RISC මත කළමනාකරණය කළ හැකි විය — ස්ථිර-පළල උපදෙස් එකක් decode කිරීම ආරම්භ කරන තුරු දිග නොදන්නා CISC උපදෙස් එකකට වඩා බොහෝ පහසුවෙන් අදියරගත කළ හැක.

නිශ්චිතව: සාමාන්‍ය RISC උපදෙස් එකක් bits 32 ක් වන අතර ක්ෂේත්‍ර ස්ථිර තැන්වල ඇත. x86 උපදෙස් එකක් byte 1 සිට 15 දක්වා දිගු විය හැක, විකල්ප prefixes සමඟ — ඝන සහ බලවත්, ඉහළ throughput එකකින් decode කිරීමට මිල අධිකය.

**දැන් මෙය උත්සාහ කරන්න.** පහත mini-CPU යනු කුඩා ISA එකකි: 4-bit opcode, 4-bit operand, මතක වචන දහසයක්. මඟ පෙන්වන උපදෙස් 8 ක වැඩසටහන පියවරෙන් පියවර කර fetch / decode / execute A සහ මතකය චලනය කරන ආකාරය බලන්න — මෙම පෝස්ට් එක දැන්ම නම් කළ එම ගිවිසුමම, එක් තිරයක රඳවා ගත හැකි තරම් කුඩාය.

{{< lab type="mini-cpu" >}}

## x86 කෙසේ හෝ පැවතියේ ඇයි

RISC පයිප්ලයින් කිරීමට සරල නම්, x86 තවමත් desktop සහ server ආධිපත්‍යය දරන්නේ ඇයි? අනුකූලතාව සහ දශක ගණනක ඉංජිනේරු ආයෝජනය — අමු අලංකාරත්වය නොවේ. නවීන x86 චිප CISC උපදෙස් *පරිවර්තනය* කර සරල, RISC-විලාස අභ්‍යන්තර micro-ops වෙත, ඉන්පසු ඒවා CISC ඉදිරි කෙළවරක් පිටුපස RISC-විලාස core එකක ධාවනය කරයි (Post 19). වාදය ලේබල් යෝජනා කරන තරම් පිරිසිදු ද්විමයක් නොවේ.

ඊළඟට: සැබෑ datapath එකක් ගොඩනඟන්න — ISA එකක් ක්‍රියාත්මක වන භෞතික ව්‍යුහය.

**පිටවීමේ දොර:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — මෙම බෙදීමේ RISC පැත්ත ආරම්භ කළ සම්භාව්‍ය තර්කය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

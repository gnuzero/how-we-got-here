---
title: "Out-of-Order Execution"
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 16
tags: []
summary: "රැඳිය යුතු දේ පමණක් stall කරන්න — Tomasulo ගේ අදහස: සූදානම් වූ විට ක්‍රියාත්මක කරන්න, අනුපිළිවෙලින් commit කරන්න"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

Post 13 හි load-use hazard එක in-order pipeline එකක් රැඳෙන එක් උපදෙස් එකක් *පසුපසින්* stall කරයි — පසු උපදෙස් ස්වාධීන සහ සූදානම් වුවද. Out-of-order execution එම සීමාවට පිළිතුරු දෙයි: operands සූදානම් වූ සෑම විටම ස්වාධීන වැඩ ධාවනය කරන්න; වැඩසටහන් අනුපිළිවෙල බලාත්මක කරන්නේ ගෘහ නිර්මාණයට අවශ්‍ය තැන්වල පමණි.

## ව්‍යාජ Dependencies සහ Register Renaming

සෑම "dependency" එකක්ම සැබෑ නොවේ. උපදෙස් A R1 ලියයි සහ පසු උපදෙස් Bද අදාළ නොවන ප්‍රතිඵලයක් සඳහා R1 ලියයි නම්, ඒවා අතර අගයක් ගලන්නේ නැත — ISA එකට හුදෙක් අඩු ගෘහ නිර්මාණ register *නම්* ඇත, සහ සම්පාදකය එකක් නැවත භාවිතා කළේය. එය name (ව්‍යාජ) dependency එකකි, සැබෑ data dependency එකක් නොවේ.

Register renaming CPU එකට ISA එක හෙළිදරව් කරනවාට වඩා බොහෝ *physical* registers ලබා දෙයි, සහ decode වේලාවේ සෑම ලිවීමක්ම නව physical register එකකට සිතියම් කරයි. A ගේ "R1" P17 වේ; B ගේ පසු "R1" P42 වේ. ව්‍යාජ ගැටුමක් නැත; දෙකම ඉදිරියට යා හැක.

## සූදානම් වූ විට Issue කරන්න, අනුපිළිවෙලින් Commit කරන්න

Rename කළ උපදෙස් සැබෑ operands පැමිණෙන තුරු **reservation stations** වල රැඳෙයි (අගයෙන් හෝ තවමත් ගුවන්ගතව ඇති producer එකකින් tag එකකින්). Operands සූදානම් වූ මොහොතේ, උපදෙස් එකක් execution unit එකකට issue කළ හැක — මුල් වැඩසටහන් අනුපිළිවෙල නොසලකා. එය out-of-order කොටසයි.

ගෘහ නිර්මාණ බලපෑම් තවමත් in-order ලෙස පෙනිය යුතුය: දෘශ්‍ය registers, මතකය, exceptions. **Reorder buffer (ROB)** සෑම ගුවන්ගත උපදෙස් එකක්ම වැඩසටහන් අනුපිළිවෙලින් ලුහුබඳියි සහ ප්‍රතිඵල *retire* කරන්නේ එම අනුපිළිවෙලින් පමණක් ගෘහ නිර්මාණ තත්ත්වයට — ක්‍රියාත්මක කිරීම විවිධ වේලාවල අවසන් වුවද.

## Tomasulo ගේ මධ්‍යම අදහස

"සූදානම් වූ විට ක්‍රියාත්මක කරන්න, දැඩි ලෙස අනුපිළිවෙලින් commit කරන්න" — බොහෝ විට Robert Tomasulo ගේ IBM System/360 Model 91 floating-point unit සඳහා වූ ඇල්ගොරිතමයට (1967 දී ප්‍රකාශිත) ආරෝපණය කෙරෙන රටාව — එතැන් සිට ප්‍රායෝගිකව සෑම ඉහළ-කාර්ය සාධන out-of-order CPU එකකම සංකල්පීය හරයයි. එය මිල අධිකද වේ: renaming tables, reservation stations, සහ ROB එකට ප්‍රදේශය සහ බලය වැය වේ. එම යන්ත්‍රෝපකරණ තවත් එකතු කිරීමට අඩුවන ප්‍රතිලාභ ඇත — ඊළඟ පෝස්ට් එක හිසෙන් හැපෙන බිත්තිය.

{{< lab type="mini-cpu" >}}

**පිටවීමේ දොර:** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — නවීන out-of-order issue සහ rename පිටුපස ප්‍රාථමික පත්‍රය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

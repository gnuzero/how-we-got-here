---
title: "'7nm' යනුවෙන් ඇත්තටම අදහස් වන්නේ කුමක්ද"
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 47
tags: []
summary: "Node නම් එක් භෞතික දිගක් ලුහුබැඳීම නැවැත්තුවේය — density සහ pitch භෞතික විද්‍යාවයි; ලේබලය පරම්පරාවකි"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

මෙම මාලාවේ පෙර සෑම සිලිකන් උපාංගයක්ම — MOSFET (Post 6), CMOS (Post 7), මතක කෝෂ (Post 10) — fabrication නිරවද්‍යතාව කුමක් කළ හැකිද යන්න තීරණය කරන පරිමාණයක ජීවත් වේ. "7nm" හෝ "5nm" වැනි ලේබල් ට්‍රාන්සිස්ටරයේ එක් මැනිය හැකි දිගක් මෙන් සලකනු ලැබේ. ඒවා බොහෝ කලක සිට එසේ නොවේ.

## නම දිගක් වූ විට

ඓතිහාසිකව process-node නම සැබෑ මානයක් ලුහුබැඳියේය — දළ වශයෙන් planar MOSFET එකක අවම gate length (Post 6). "90nm process" යනු උපාංගයේ පෙන්විය හැකි දෙයකි. එම ලිපිහරහාව planar යුගය හරහා රැඳුණේය, පසුව කැඩුණේය.

## එක් අංකයක් ප්‍රමාණවත් නොවූයේ ඇයි

FinFET සහ පසුකාලීන Gate-All-Around ව්‍යුහ (Posts 48–49) gate length බර උසුලන මාන කිහිපයකින් එකක් පමණක් කළේය. Fin height, fin pitch, gate pitch, සහ interconnect pitch සියල්ල ස්වාධීනව වැදගත් වේ — සහ විවිධ foundries (TSMC, Samsung, Intel) ඒවා වෙනස් ලෙස හුවමාරු කරයි. "7nm" process දෙකක් එකම ලේබලය යටතේ එකම භෞතික විද්‍යාව නොවේ.

## ලේබලය දැන් කුමක්ද

නවීන node නම බොහෝ දුරට පරම්පරා සලකුණකි — "අපේ ඊළඟ ඝනත්වයෙන් වැඩි, වඩා කාර්යක්ෂම පරම්පරාව" — foundry-හරහා භෞතික පිරිවිතරයක් නොවේ. අර්ථවත් සංසන්දනය ස්වාධීනව මැනිය හැකි ප්‍රමාණ භාවිතා කරයි: fin pitch, gate pitch, වර්ග මිලිමීටරයකට ට්‍රාන්සිස්ටර. ඒවා බොහෝ විට එක් foundry එකක "7nm" අනෙකකට වඩා ඝන බව පෙන්වයි, මන්ද branding ඕනෑම තනි දිගකින් විසන්ධි වී ඇති නිසාය.

## පරතරය වැදගත් වන්නේ ඇයි

"TSMC හි 5nm එදිරිව Samsung හි 5nm" තන්තු ගැලපෙන නිසා apples-to-apples නොවේ. නම්කරණ පරතරය පවතින්නේ නිර්මාණ අවකාශය එක-මාන නොවීම නිසාය — planar gate length 3D ජ්‍යාමිතියට සහ multi-pitch හුවමාරුවලට මග පෑදුවේය. එය ඊළඟ පෝස්ට් සඳහා සැකසුමයි: එම ව්‍යුහ තවමත් මුද්‍රණය කළ හැකි lithography (Post 48), සහ තනි දිගක් යල් පැන ගිය ට්‍රාන්සිස්ටර ජ්‍යාමිති මාරු (Post 49).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

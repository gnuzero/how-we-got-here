---
title: "මතක බිත්තිය"
weight: 36
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 35
tags: []
summary: "CPU වේගය සහ DRAM latency දශක ගණනක් අපසරනය විය — caches පරතරය සඟවයි; ඒවා එය වසා නොදමයි"
image_prompt: "Graph infographic showing CPU speed and DRAM speed diverging from 1980 to today, clean data-visualization diagram style"
video_prompt: "20-second animation: two trend lines diverging over decades, the gap highlighted and growing, clean data-viz motion graphics"
schematics: "Diagram: CPU vs DRAM performance divergence graph + memory latency vs bandwidth breakdown"
---

Post 34 බෙදීමකින් වසා දැමුවේය: DDR bandwidth පරිමාණය විය; DRAM *latency* නොවීය. Zoom out කරන්න සහ එම බෙදීම දශක ගණනක් පුළුල් වන පද්ධති-මට්ටමේ පරතරයකි.

## අපසරනය වන ඝාතීයයන්

Wm. A. Wulf සහ Sally A. McKee එය 1995 දී නම් කළහ. Processor වේගය සහ DRAM වේගය දෙකම ඝාතීයව වැඩිදියුණු වේ, නමුත් ඝාතයන් වෙනස් ය — සහ අපසරනය වන ඝාතීයයන්ගේ වෙනස ඝාතීයව වර්ධනය වේ. CPU කාර්ය සාධනය (Phase 3 හි clocks සහ ගෘහ නිර්මාණය) දුව ගියේය; DRAM latency බොහෝ කුඩා සාධකයකින් වැඩිදියුණු විය. ඔවුන් ප්‍රතිඵලය **මතක බිත්තිය** ලෙස හැඳින්වූහ: වඩා හොඳ ඉංජිනේරුකරණය නිහඬව අවශෝෂණය කරන කරදරයක් නොව, ව්‍යුහාත්මක සීමාවකි.

## Bandwidth චලනය වූ අතර Latency නොගියේ ඇයි

අධීක්ෂණයක් නොවේ — භෞතික විද්‍යාව. DRAM ප්‍රවේශ latency ආධිපත්‍යය දරන්නේ capacitor එකක කුඩා ආරෝපණයක් (Post 10 හි 1T1C කෝෂය) 1 සහ 0 වෙන් කිරීමට ප්‍රමාණවත් විශ්වාසනීයව sensing කිරීමෙනි. එම sensing ට්‍රාන්සිස්ටර switching මෙන් පහළට පරිමාණය නොවේ. Bandwidth එම සීමාව පරාජය නොකර *ඉහළ දැමිය* හැක: පුළුල් prefetch, banks වැඩි, channels වැඩි, double-data-rate transfer. කෙටි පළමු ප්‍රවේශයකින් තොරව throughput. එබැවින්ම DDR generations (Post 34) bandwidth විකුණුවේය. Latency මුරණ්ඩුවෙන් රැඳී ඇත.

## පරතරයට වැය වන දේ

එක් miss එකක් මත චක්‍ර සිය ගණනක් රැඳෙන core එකක් ගණනය නොකරයි. Cache ධූරාවලිය (Post 15) සුවිශේෂතාවක් නොවේ; එය බිත්තිය මත කර්මාන්තයේ ප්‍රධාන කඩදාසියයි — working set එක SRAM හි තබා ගන්න එවිට CPU කලාතුරකින් පූර්ණ DRAM latency ගෙවයි. Out-of-order execution (Post 16) ඉතිරියෙන් සමහරක් සඟවයි, ස්වාධීන වැඩ miss එකක් සමඟ overlap කරමින්. කිසිවක් පරතරය වසා නොදමයි. දෙකම cache-හිතකාමී හෝ ප්‍රමාණවත් ස්වාධීන වැඩ ඇති වැඩසටහන් සඳහා එය සඟවයි.

දුර්වල locality — විශාල අහඹු ව්‍යුහ, සමහර graphs, සමහර databases — තවමත් බිත්තිය සම්පූර්ණයෙන් ගෙවයි. එය *bandwidth* (ධාරිතාව පමණක් නොව) ප්‍රථම-පන්තියේ නිර්මාණ ඉලක්කයක් බවට පත් වූයේ ඇයි යන්නෙන් විශාල කොටසකි, සහ GPU මතක ධූරාවලි සහ HBM (Phase 9) first-bit රැඳීම කලාතුරකින් චලනය නොවුණත් bytes චලනය කිරීමට පිරිවැය සහ සංකීර්ණත්වය වියදම් කරන්නේ ඇයි. ඊළඟ: ඥාති බිත්තියක්, ගණනය පැත්තේ, ආසන්න වශයෙන් එකම ඓතිහාසික මොහොතේ.

**පිටවීමේ දොර:** Wm. A. Wulf සහ Sally A. McKee, "Hitting the Memory Wall: Implications of the Obvious" (*ACM SIGARCH Computer Architecture News*, 1995) — බිත්තිය නම් කර පරතරය මූලික යමක් වෙනස් නොවුණොත් ආධිපත්‍යය දරනු ඇති බව පෙන්වූ කෙටි සටහන.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

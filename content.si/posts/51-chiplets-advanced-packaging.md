---
title: "Chiplets සහ Advanced Packaging"
weight: 52
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 51
tags: []
summary: "Yield die ප්‍රදේශය සමඟ පහළ යයි — chiplets වලට බෙදා advanced packaging සමඟ bandwidth ආපසු මිලදී ගන්න"
image_prompt: "Cutaway diagram comparing a monolithic die vs a chiplet package with interposer, clean semiconductor packaging illustration style"
video_prompt: "20-second animation: a monolithic die splitting into chiplets connected via an interposer, yield improving, clean explainer motion graphics"
schematics: "Diagram: monolithic die vs chiplet+interposer cross-section + yield-vs-die-size curve"
---

Post 49 රටාවක් නැවත ප්‍රකාශ කළේය: එක් ජ්‍යාමිතියක් ඇතුළත පරිමාණය බිත්තියකට ගැටෙන විට, ව්‍යුහය වෙනස් කරන්න. Chiplets එම රටාව ට්‍රාන්සිස්ටරයට එක් මට්ටමක් ඉහළින් යොදයි — නව උපාංග භෞතික විද්‍යාවක් නොව, monolithic dies yield කිරීමට නොහැකි තරම් විශාල වූ පසු සම්පූර්ණ චිපයක් එකලස් වන ආකාරයට නව පිළිතුරකි.

## Monolithic Dies සහ Yield බිත්තිය

සාම්ප්‍රදායික චිපයක් එක් සිලිකන් කැබැල්ලකි: cores, memory controllers, I/O එකට fabrication කෙරේ. ඕනෑම තැනක fatal defect එකක් මුළු die එකම නාස්ති කරයි, සහ එවැනි defect එකක අවස්ථාව ප්‍රදේශය සමඟ වර්ධනය වේ — විශාල dies, වඩා විශාල, වඩා හැකියා සහිත චිපයක් ගෘහ නිර්මාණයෙන් අපේක්ෂිත වුවද, නරක ලෙස yield වේ. එය ආර්ථික/භෞතික සීමාවකි, branding තේරීමක් නොවේ: ඕනෑම තනි die එකක් සීමාවකින් තොරව වර්ධනය වීමෙන් වළකින්න.

## සිලිකන් බෙදන්න, ක්‍රියාකාරිත්වය තබා ගන්න

Chiplets එක් විශාල die එකක් වන්නට තිබූ දේ කුඩා, වෙන වෙනම fabrication කළ dies වලට කපයි, එක් එක් එක ක්‍රියාකාරිත්වයක් හිමිකර ගෙන, පසුව ඒවා ඉහළ-ඝනත්ව interconnects (interposer හෝ advanced substrate) සමඟ එක් package එකක් ඇතුළත නැවත සම්බන්ධ කරයි. Defect එකක් මරන්නේ එම කුඩා chiplet එක පමණි; කුඩා dies එකම මුළු ක්‍රියාකාරිත්වය සඳහා වඩා හොඳින් yield වේ. ඔබට එක් package එකක process nodes මිශ්‍ර කළ හැක — I/O සඳහා පැරණි, ලාභ සිලිකන්; compute ඝනත්වය උපයන තැනට පමණක් leading-edge — තනි-process monolith එකකට ලබා දිය නොහැකි නම්‍යතාව.

## Packaging වයර් එක ආපසු මිලදී ගත යුතුය

Disaggregation ක්‍රියාත්මක වන්නේ inter-chiplet bandwidth සහ latency on-die සබැඳිවලට තරම් සමීපව රැඳෙන්නේ නම් පමණි. Silicon interposers සහ 3D stacking එම ඝනත්වය සැපයීමට පවතී — එම සංඥාම සම්ප්‍රදායික PCB එකක් හරහා එළියට මාර්ගගත කිරීමට බොහෝ ඔබ්බෙන්. එම packaging පියවර නොමැතිව, yield ජයග්‍රහණය නව interconnect බිත්තියකින් ගෙවිය යුතු වනු ඇත.

## එකම Packaging, ඊළඟ අදියරේ මතකය

එම advanced-packaging පවුලම Phase 9 හි HBM සක්‍රීය කරයි: මතක dies stack කරන්න, ඒවා ඉහළ-ඝනත්ව interposer එකක් හරහා compute die එකකට සම්බන්ධ කරන්න, සහ භෞතිකව වෙනම සිලිකන් bandwidth දෘෂ්ටි කෝණයකින් ආසන්න වශයෙන් එක් කැබැල්ලක් ලෙස සලකන්න. Chiplet compute සහ HBM මතකය එක් සීමාවක අවස්ථා දෙකකි — වෙනම dies අතර ප්‍රමාණවත් bandwidth ලබා ගන්න එවිට බෙදීම කාර්ය සාධන දඬුවම නොවේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

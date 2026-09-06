---
title: "Superscalar සහ Multicore"
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 17
tags: []
summary: "ILP සහ බලය බිත්තිවලට හැපුණේය — එබැවින් කර්මාන්තය ත්‍රෙඩ් එකකට වේගවත් වීම වෙනුවට පුළුල් විය"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

Out-of-order issue, ගැඹුරු pipelines, පුළුල් superscalar පළල — මෙම අදියරේ මෙතෙක් සියල්ල *එක්* උපදෙස් ප්‍රවාහයකින් වැඩි Instruction-Level Parallelism (ILP) උපුටා ගනියි. 2000 දශකයේ මැද වන විට එම ප්‍රවේශය උපාය වෙනස් කිරීමට තරම් තදින් උඩුකුරුවකට හැපුණේය.

## එකවර බිත්ති දෙකක්

සැබෑ වැඩසටහන් අසීමිත ස්වාධීන වැඩ ලබා නොදෙයි. Branches, සැබෑ data dependencies, සහ මතක latency තනි ප්‍රවාහයකින් කොපමණ උපදෙස් සමාන්තරව ධාවනය විය හැකිද යන්න සීමා කරයි. විශාල ROBs, වැඩි reservation stations, පුළුල් issue: වර්ධනය වන ප්‍රදේශය සහ බලය සඳහා අඩුවන ප්‍රතිලාභ. එය ගෘහ නිර්මාණ බිත්තියකි.

ඒ අතරම, dynamic බලය ආසන්න වශයෙන් capacitance, සංඛ්‍යාතය, සහ වෝල්ටීයතාවයේ වර්ගය සමඟ පරිමාණය වේ (P ≈ CV²f). ILP හි අඩුවන ලාභයට වන්දි ගෙවීමට clocks ඉහළට තල්ලු කිරීම තාපයට හැපුණේය — Post 36 විස්තරාත්මකව ආවරණය කරන clock-speed බිත්තිය. ස්වාධීන උඩුකුරු දෙකක්, 2000 දශකයේ මැද, කිසිවකට පිරිසිදු තනි විසඳුමක් නැත.

## වේගවත් වීම වෙනුවට පුළුල් වීම

හැරීම: එක් core එකක් චක්‍රයකට වැඩි දේ කරන්නට නවත්වන්න; එකම die එක මත, එක් එක් එකට තමන්ගේ ප්‍රවාහයක් සමඟ, තරමක් සරල cores කිහිපයක් තබන්න. Core එකක සංකීර්ණතාව සහ clocks සමතල කරන අතරතුර චිප throughput තවදුරටත් ඉහළ යා හැක — *එම* cores වලට භාර දිය හැකි සමාන්තර වැඩ තිබේ නම්.

"වේගවත්" අර්ථය වෙනස් විය. තනි-ත්‍රෙඩ් වැඩසටහනක් cores අටක් එදිරිව හතරක් මත ස්වයංක්‍රීයව ජය නොගනී; එය තවමත් ආසන්න වශයෙන් එකම clock එකකින් එක් core එකක ධාවනය වේ. Multicore ලාභය දිස් වන්නේ බහු ත්‍රෙඩ් සඳහා ලියන ලද (හෝ සම්පාදනය කළ) workloads සඳහා පමණි. ILP යුගය සෑම පරම්පරාවකදීම තනි-ත්‍රෙඩ් වේගවත් වීම් "නොමිලේ" ලබා දුන්නේය; මෙම යුගය සමාන්තර-දැනුවත් මෘදුකාංග ඉල්ලයි.

## හැරීම පෙන්වන තැන්

එකම බලය — එක් සංකීර්ණ ඒකකයක් වෙනුවට බොහෝ සරල ඒකක — තවත් ඈතට ගෙන ගිය GPUs (Phase 9) පිටුපස ඇති දර්ශනයයි. සමාන්තර වැඩ නිවැරදිව සම්බන්ධීකරණය කිරීම තත්‍ය කාල පද්ධති (Phase 4) සහ බෙදාහැරුණු පද්ධති (Phase 7) තුළ ප්‍රධාන පන්තියේ ගැටලුවක් වන්නේ ඇයිද යන්නටද එය හේතුවකි: එක් ත්‍රෙඩ් එකක් වේගවත් කිරීමට ඊළඟ චිපය බලා සිටීම තවදුරටත් ප්‍රධාන වර්ධන මාර්ගය නොවේ.

**පිටවීමේ දොර:** Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson, and Kunyung Chang, "The Case for a Single-Chip Multiprocessor" (ASPLOS 1996) — ILP ප්‍රතිලාභ සමතල වන විට එක් die එකක cores කිහිපයක් තැබීමට මුල්, පැහැදිලි තර්කයක්.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

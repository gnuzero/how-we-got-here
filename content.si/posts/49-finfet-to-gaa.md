---
title: "FinFET සිට GAA දක්වා"
weight: 50
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 49
tags: []
summary: "Short-channel leakage planar shrink මැරුවේය — gate එක ඔතන්න (FinFET), පසුව එය සියලු අතට ඔතන්න (GAA)"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

Post 6 planar MOSFET එක හඳුන්වා දුන්නේය — gate, source, drain සිලිකන් මත පැතලි. එම ජ්‍යාමිතිය දශක ගණනක් සේවය කළේය. ට්‍රාන්සිස්ටර හැකිලුණු විට (Post 48 හි lithography), planar නිර්මාණය තවදුරටත් හැකිලීම පමණක් නිවැරදි කළ නොහැකි බිත්තියකට ගැටුණේය: gate එක channel එකේ විශ්වාසනීය පාලනය අහිමි විය.

## Short-Channel Effects

Planar channel length හැකිලෙන විට, channel ඉහත gate එකට (Post 6 හි විද්‍යුත්-ක්ෂේත්‍ර පාලනය) සමානුපාතිකව අඩු අධිකාරියක් ඇත, සහ උපාංගය off විය යුතු විට ධාරාව කාන්දු වේ. එය භෞතික විද්‍යාවයි, process bug එකක් නොවේ. යම් ලක්ෂ්‍යයකට පසු, *planar* ට්‍රාන්සිස්ටරයක් හැකිලීම පිරිසිදු switching ලබා දීම නවත්වයි — එබැවින් තවදුරටත් planar scaling වටිනා නොවේ.

## FinFET: පාලනයේ පැති තුනක්

FinFET වෙනස් කරන්නේ ජ්‍යාමිතියයි, ප්‍රමාණය පමණක් නොවේ: channel එක තුනී සිරස් fin එකකට ඔසවා gate එක පැති තුනක් වටා ඔතන්න (ඉහළ සහ බිත්ති දෙකම). එකම channel length එකේදී channel හි වැඩි කොටසක් gate බලපෑම යටතේ රැඳේ, එය planar shrink මරා දැමූ short-channel leakage මර්දනය කරයි.

කර්මාන්තය 2010 ගණන්වල මුල් භාගයේ පරිමාණයෙන් FinFET වෙත ගියේය (Intel හි 22 nm Ivy Bridge පරම්පරාව, 2011–2012, මුල් ඉහළ-පරිමාණ සන්ධිස්ථානයකි). Post 17 හි multicore හැරීම clock-speed බිත්තියට (Post 36) පසුව එකම රටාවයි: ප්‍රවේශයක් සැබෑ භෞතික උඩුකුරු සීමාවකට ගැටෙන විට, ව්‍යුහය වෙනස් කරන්න — පැරණි හැඩය තදින් තල්ලු කිරීම පමණක් නොකරන්න.

## Gate-All-Around: පැති හතරක්

පැති-තුන ඔතීම electrostatic උපරිමය නොවේ. Gate-all-around (GAA) — තිරස් nanosheet හෝ nanowire channels — gate එකට channel එක පැති හතරම වටා වට කිරීමට ඉඩ දෙයි. Leading-edge nodes (Post 47) FinFET එකම ප්‍රායෝගික සීමාවලට ළඟා වන විට එහිට යයි: එකම planar→FinFET චලනය, එක් ජ්‍යාමිතියකට පසුව.

## නැවත නැවත එන රටාව

Planar → FinFET → GAA යනු මෙම මාලාවේ පරිමාණ පාඩම උපාංග ආකාරයෙනි. විද්‍යුත් බිත්ති (මෙහි short-channel effects), තාප බිත්ති (Post 36), latency බිත්ති (Post 35) සියල්ල අවසානයේ ගෘහ නිර්මාණය බල කරයි, එකම නිර්මාණයේ දැඩි උත්සාහය පමණක් නොවේ. Chiplets (Post 51) එම රටාව එක් මට්ටමක් ඉහළට යොදයි — ට්‍රාන්සිස්ටරයට නොව, සම්පූර්ණ චිප එකලස් වන ආකාරයට.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

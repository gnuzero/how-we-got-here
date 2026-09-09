---
title: "Photolithography"
weight: 49
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 48
tags: []
summary: "Diffraction කෙටි තරංග ආයාම බල කරයි — EUV හි mirrors සහ tin plasma feature sizes චලනය කර තැබූ දේය"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

නවීන චිපයක සෑම ට්‍රාන්සිස්ටරයක්ම — බිලියන ගණනක්, Post 47 හි node ලේබල් අවංකව නම් කළ නොහැකි තරම් ඝන — සිලිකන් මත *pattern* කළ යුතුය. Photolithography යනු එම patterning ය, සහ EUV (extreme ultraviolet) වෙත තල්ලුව අර්ධසන්නායක කර්මාන්තය යටතේ ඇති දුෂ්කරතම ඉංජිනේරු දාමයකි.

## ආලෝකයෙන් මුද්‍රණය කරන්න, පසුව ගොඩනඟන්න

Wafer එක photoresist එකකින් ආලේප කරන්න; patterned mask එකක් හරහා ආලෝකය බබළන්න; ආලෝකය වැදුණු තැන resist එක රසායනිකව වෙනස් කරන්න එවිට එය තෝරාගෙන ඉවත් කළ හැක හෝ තබා ගත හැක. Etch, deposit, සහ dope ට්‍රාන්සිස්ටර ව්‍යුහ තැබීමට එම pattern භාවිතා කරයි. මුලින් එය නිරවද්‍ය ඡායාරූප මුද්‍රණයකි — diffraction සාමාන්‍යයෙන් ඉඩ නොදෙන resolution එකක.

## Diffraction කෙටි තරංග ආයාම බල කරයි

ඔබට විසඳිය හැකි feature එක කෙතරම් කුඩාද යන්න තරංග ආයාමයට බැඳී ඇත: කෙටි ආලෝකය, සිහින් pattern. එම භෞතික උඩුකුරු සීමාව නිසාය කර්මාන්තය දශක ගණනක් වර්ණාවලිය පහළට ඇවිද්දේ — ultraviolet, පසුව deep ultraviolet (DUV, ආසන්න වශයෙන් 193 nm), පසුව extreme ultraviolet (EUV, ආසන්න වශයෙන් 13.5 nm) — එක් එක් පියවර Post 47 හි හැකිලෙන ලේබල් ඉඟි කරන සිහින් features මිලදී ගනිමින්.

## EUV අසාමාන්‍ය ලෙස දුෂ්කර වූයේ ඇයි

EUV තරංග ආයාමවලදී, සාමාන්‍ය උපක්‍රම අසමත් වේ. **ආලෝකය ජනනය කිරීම** යනු උණු කළ tin බිංදු තත්පරයට දහස් ගණනක් වාරයක් ඉහළ-බල laser එකකින් පහර දීමයි එවිට ප්‍රතිඵල plasma භාවිතා කළ හැකි EUV විමෝචනය කරයි. **එය අවධානය කිරීම** glass lenses භාවිතා කළ නොහැක — EUV ප්‍රායෝගිකව සියලු සම්ප්‍රදායික optics සහ වාතය විසින් අවශෝෂණය කෙරේ — එබැවින් මාර්ගය near-vacuum තුළ multilayer mirrors වේ. නිෂ්පාදන EUV scanner එකක් කිසිදා ගොඩනැගූ සංකීර්ණතම නිෂ්පාදන මෙවලම් අතර වේ; වාණිජව, ASML එම නිෂ්පාදන මෙවලම්වල එකම සැපයුම්කරුවා වී ඇත.

එම තරංග-ආයාම පියවර නොමැතිව, ඊළඟ පෝස්ට් එකේ සිහින් FinFET සහ Gate-All-Around ව්‍යුහ පිළිගත හැකි yield සහ පිරිවැයකින් නිෂ්පාදනය කළ නොහැකි වනු ඇත. Diffraction සීමාව පැනවීය; tin plasma සහ mirrors බල කළ ගෘහ නිර්මාණය විය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

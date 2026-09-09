---
title: "යුද්ධකාලීන Crypto"
weight: 66
date: 2026-01-01
draft: false
phase: "Crypto සහ යුද්ධකාලීන පරිගණකකරණය"
series_index: 66
tags: []
summary: "Enigma, Bletchley, සහ Colossus — සයිෆර් කඩා දැමීම ඉලෙක්ට්‍රොනික පරිගණකකරණය බල කළේ ඇයි"
image_prompt: "Clean historical-technical diagram: Enigma rotors beside a Colossus rack of vacuum tubes at Bletchley, connective arrows from cipher traffic to electronic counting, muted wartime-engineering style"
video_prompt: "20-second animation: Enigma rotors stepping, intercept traffic flooding in, electromechanical Bombe searching, then Colossus tubes counting at electronic speed, clean technical motion graphics"
schematics: "Diagram: Enigma rotor stepping → Bombe search → Colossus electronic counting, bridging Posts 02–03"
---

Posts 01–02 ගියර් සහ relays ස්වයංක්‍රීය ගණනය කිරීම හැකි බව ඔප්පු කළ ආකාරය පෙන්වයි. යුද්ධය එම හැකියාව *හදිසි* කළේය: සයිෆර් ගමනාගමනය ඕනෑම මානව කාමරයකට කියවිය හැකිවාට වඩා වේගයෙන් පැමිණියේය, සහ ඉදිරියට යාමට හැකි යන්ත්‍ර පරිගණකකරණය විද්‍යුත් යාන්ත්‍රිකයෙන් ඉලෙක්ට්‍රොනිකයට ඇද ගත්තේය.

මෙය Post 03 හි රික්තක-නල යන්ත්‍ර සහ **රහස්‍යතාව workload එකක් ලෙස** අතර සම්බන්ධක පටකයකි — යුද්ධයේ දෙවන ඉතිහාසයක් නොවේ.

## Enigma චලනය වන ඉලක්කයක් විය

ජර්මානු Enigma පවුල මෙහෙයුම් ගමනාගමනය ඔබ ටයිප් කරන විට පියවර ගන්නා rotors සමඟ සංකේතනය කළේය, එබැවින් එක් එක් අකුර සමඟ substitution වෙනස් විය. එක් පණිවිඩයක් කඩා දැමීම ඊළඟ දවස නොමිලේ මිලදී ගත්තේ නැත. යුද්ධයට පෙර, පෝලන්ත Cipher Bureau ගණිතඥයන් — Marian Rejewski, Jerzy Różycki සහ Henryk Zygalski සමඟ — සීමිත intercepts සහ ලේඛන වලින් Enigma හි අභ්‍යන්තර wiring ප්‍රතිනිර්මාණය කර, පසුව එම පදනම බ්‍රිතාන්‍ය සහ ප්‍රංශය සමඟ බෙදා ගත්හ. පිටවීමේ දොර: Rejewski ගේම ගිණුම් සහ කෞතුකාගාර හා සංරක්ෂණාගාර තබා ඇති පෝලන්ත–සහායක හුවමාරු ඉතිහාස — Wikipedia paraphrase එකක් නොවේ.

Bletchley Park හි, Alan Turing (Hut 8) සහ සගයන් එම ගණිත කඩා දැමීම කාර්මික සෙවීමක් බවට පත් කළහ: බ්‍රිතාන්‍ය Bombe (ප්‍රධාන නිර්මාණ වැඩිදියුණු අතර Gordon Welchman ගේ diagonal board සමඟ) Enigma settings විද්‍යුත් යාන්ත්‍රික හැකියා-අවකාශ සෙවීමක් ලෙස ධාවනය කළේය. Relays සහ drums *දඩයම්* කළ හැකි විය. පසුකාලීන teleprinter සයිෆර් ඉල්ලූ වේගයෙන් ciphertext ගණන් කළ නොහැකි විය.

## Colossus: Workload එක ලෝහය ඉක්මවා ගිය විට

Lorenz teleprinter සයිෆර් ("Tunny") වෙනස් ගැටලුවක් නිපදවුවේය: ඉලෙක්ට්‍රොනික වේගයේ සංඛ්‍යාන ප්‍රහාරයක් අවශ්‍ය දිගු ප්‍රවාහ. Max Newman එම ප්‍රහාරය වටා Newmanry සංවිධානය කළේය. දැනටමත් දුරකථන මාරුවේ රික්තක නල විශ්වාස කළ Post Office ඉංජිනේරුවෙකු වූ Tommy Flowers **Colossus** ගොඩනැගුවේය (පළමු යන්ත්‍රය 1943 දෙසැම්බර්හි මෙහෙයුම්; 1944 දී Mark II) — කඩදාසි පටි කියවමින් කඩා දැමිය හැකි settings වෙත ගණන් කරන නල රාක්ක.

මිථ්‍යාව නොව සීමාව නම් කරන්න: Colossus විශේෂ-අරමුණු cryptanalytic ඉලෙක්ට්‍රොනිකයක් විය, සාමාන්‍ය stored-program පරිගණකයක් නොවේ. එය *බල කළ* දේ නම් විශාල නල ගණනක් එම workload එකේ ඕනෑම relay farm එකකට වඩා ජය ගන්නා ප්‍රමාණවත්-විශ්වසනීය යන්ත්‍රයකට වයර් කළ හැකි බවට ඔප්පුවයි. එය Post 03 විවෘත කරන එම භෞතික ඔට්ටුවම ය — ස්විචයේ චලනය වන සම්බන්ධතා නැත — සාමයකාලීන පර්යේෂණ විවේකය වෙනුවට යුද්ධකාලීන පීඩනය යටතේ.

පිටවීමේ දොර: [The National Museum of Computing](https://www.tnmoc.org/) (Colossus rebuild සහ ප්‍රාථමික ද්‍රව්‍ය); ශාස්ත්‍රීය Colossus සාහිත්‍යයේ Tommy Flowers සහ Max Newman (උදා. Copeland ගේ සංස්කරණය කළ ඉතිහාස); Enigma/Bombe සඳහා Bletchley Park ගේම සංරක්ෂණ මාර්ගෝපදේශ. සත්‍යවාදීතාව: මෙහි සත්‍යාපිත සිංහල ප්‍රාථමික මූලාශ්‍රයක් ඉදිරිපත් නොකෙරේ — ඉංග්‍රීසි/ප්‍රාථමික ඉතිහාසවලට ගෞරවය.

## ට්‍රාන්සිස්ටර තර්කයට පෙර මෙය අයත් වන්නේ ඇයි

කශේරුකාව ඉදිරියට කියවන්න:

- **Post 02** — relays ද්විමය තර්කය ඔප්පු කරන අතර චලනය වන ලෝහ ඉතා මන්දගාමී බවද ඔප්පු කරයි.
- **මෙම පෝස්ට් එක** — සැබෑ workload එකක් (සයිෆර් සෙවීම සහ ප්‍රවාහ ගණන් කිරීම) "ඉතා මන්දගාමී" මෙහෙයුම්මය වශයෙන් පිළිගත නොහැකි කරයි.
- **Post 03** — නල යාන්ත්‍රික චලනය ඉවත් කරයි; ENIAC-පරිමාණ යන්ත්‍ර විවිධ වැඩසටහන් යටතේ ඉලෙක්ට්‍රොනික ස්විචය උරුම කර ගනී.
- **Post 04** — නල පසුව *තමන්ගේ* සීලිං එකට ගැටේ (තාපය, බලය, අසාර්ථකත්වය), එබැවින් ට්‍රාන්සිස්ටරය සිදු විය යුතු විය.

යුද්ධකාලීන crypto පරිගණකකරණය සොයා ගත්තේ නැත. එය ශතවර්ෂයේ දුෂ්කරතම තොරතුරු ගැටලුවලින් එකක් සඳහා විද්‍යුත් යාන්ත්‍රිකයෙන් ඉලෙක්ට්‍රොනිකයට පනින්න *විකල්ප නොවන* කළේය — සහ වැඩ කළ නම් කළ මිනිසුන්ගේ මංපෙතක් ඉතිරි කළේය. විකල්ප පැත්ත මාර්ගයකි; ප්‍රධාන ගමන Post 03 හි දිගටම යයි.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

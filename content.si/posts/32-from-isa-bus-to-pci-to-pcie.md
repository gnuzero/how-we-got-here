---
title: "ISA Bus සිට PCI දක්වා PCIe දක්වා"
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 32
tags: []
summary: "Skew පුළුල් parallel බස් එක මැරුවේය; point-to-point serial යනු අප පැන ගත් ආකාරයයි"
image_prompt: "Timeline infographic: ISA → PCI → PCIe evolution with bandwidth numbers, clean historical technical infographic style"
video_prompt: "20-second animation: parallel bus wires struggling with skew, morphing into serial PCIe lanes, clean motion graphics"
schematics: "Diagram: parallel bus signal skew illustration + PCIe differential signaling diagram"
---

Post 31 හි උඩුකුරු සීමාව: සෑම උපාංගයක්ම එකම රැහැන් සඳහා තරඟ කරයි. ISA, පසුව PCI, පසුව PCIe යනු එම උඩුකුරු සීමාව වටා ඇති ඉංජිනේරුකරණයයි — බස් නාමාවලියක් නොව, සීමා අනුක්‍රමයකි. අවසානයේ පුදුමය: *serial* යාම (රැහැන් අඩු) parallel ලෙස රැඳී සිටීම (රැහැන් වැඩි) පරාජය කළේය.

## Parallel සහජ බුද්ධිය, සහ එය කැඩෙන තැන

ISA (Industry Standard Architecture) පුළුල් parallel බස් එකක් විය: දත්ත රේඛා බොහෝ, එකිනෙකට bit එකක්, එකට clock කරන ලදී. රැහැන් වැඩි නම් bandwidth වැඩි විය යුතුය. මධ්‍යස්ථ clocks වලදී එසේ වේ.

සෑම රැහැනකටම තරමක් වෙනස් දිග සහ capacitance ඇත, එබැවින් bits එකම මොහොතේ නොපැමිණේ — **skew**. මන්දගාමී clock එකකදී විචලනය කාල සීමාවේ කුඩා කොටසක් වන අතර වැදගත් නොවේ. Clock එක ඉහළ දමන්න, කාල සීමාව හකුළන්න, සහ එම ස්ථිර skew එක timing margin කන තෙක් receiver එකට එක් edge එකකදී සෑම bit එකක්ම sample කළ නොහැක. එය භෞතික උඩුකුරු සීමාවකි, මඟ හැරුණු උපක්‍රමයක් නොවේ. පුළුල් parallel බස් එකක් අනන්තව තද කළ නොහැක.

## PCI Headroom මිලදී ගත්තේය, Escape නොවේ

PCI (Peripheral Component Interconnect, 1992) ISA ට වඩා වේගවත් විය — වඩා හොඳ arbitration, plug-and-play configuration, වඩා ප්‍රායෝගික bandwidth. එය තවමත් හවුල් parallel බස් එකක් විය, clocks ඉහළ යන විට තවමත් skew ට යටත් විය. Headroom, නව ගෘහ නිර්මාණයක් නොවේ.

## PCIe හවුල් රැහැන් අත්හැරියේය

PCI Express (2003) topology වෙනස් කළේය. එක් හවුල් parallel බස් එකක් වෙනුවට, සෑම උපාංගයකටම switch එකකට කැප වූ point-to-point serial සබැඳියක් (lane එකක්, හෝ lanes කට්ටලයක්) ලැබේ. දිශාවකට lane එකකට එක් differential pair එකක්: රැහැන් දුසිමක් හරහා lockstep තබා ගත යුතු කිසිවක් නැත, එබැවින් per-lane clocks ඕනෑම parallel බස් එකකට බොහෝ ඈතට නැගිය හැක. Lanes බැඳේ (x1, x4, x8, x16) වැඩි අවශ්‍ය උපාංග සඳහා — GPU එකක් x16 ගනී එය x1 හි NIC එකකට වඩා බොහෝ දුරට වැඩි චලනය කරන නිසා. අසම්බන්ධ උපාංග තවදුරටත් රැහැන් බෙදා නොගනී, එබැවින් ඒවා තවදුරටත් එකිනෙකාගේ arbitration මත රැඳී නොසිටී.

භෞතික රැහැන් අඩු. ළඟා විය හැකි bandwidth ඉහළ. හවුල්-බස් උඩුකුරු සීමාව නැති වී ඇත. Post 33 යනු එම serial සබැඳි transfer එකක් ව්‍යුහගත කරන්නේ කෙසේද යන්නයි එවිට යන්ත්‍රයේ ඉතිරියට තවමත් කියවීමක් හෝ ලිවීමක් *අර්ථ* කළ හැක.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

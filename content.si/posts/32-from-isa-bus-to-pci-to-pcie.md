---
title: "ISA Bus සිට PCI දක්වා PCIe දක්වා"
weight: 33
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

## ගැඹුරින්: Skew අයවැය, pin එකකට bandwidth සහ කේතන බද්ද — PCI සිට PCIe දක්වා අංකවලින්

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** සිංහලෙන් ඇත්තේ පාරිභෝගික මට්ටමේ වීඩියෝ කිහිපයකි. උදාහරණ ලෙස "PCIe SLOTS, PCI Lanes ගැන සරලව" (Anytiplk) සහ motherboard slots පිළිබඳ පාඩම් දැක්විය හැකිය (අප හඳුනාගත්තේ මාතෘකාවෙන් පමණි, නැරඹුවේ නැත). ඒවා කියන්නේ කුමන slot එකට කුමන card එක දැමිය යුතුද යන්නයි. parallel බස් එකක් skew නිසා නතර වන්නේ ඇයි, PCI සිට PCIe දක්වා bandwidth ගණනය කරන්නේ කෙසේද යන්න එහි නැත. ISA→PCI→PCIe පිළිබඳ සිංහල විකිපීඩියා ලිපියක්ද නැත. එබැවින් මෙම කොටස PCIe නිර්මාණය කළ Intel ඉංජිනේරුවාගේ 2002 පත්‍රිකාවෙන් සහ PCI-SIG හි නිල පිළිතුරුවලින් (FAQ) අංක ගෙන මුල සිට ගණනය කරයි.

### 1. මූලික පද

- **Parallel බස් එක (parallel bus):** bits කිහිපයක් එකවර, වෙනම රැහැන් කිහිපයක් ඔස්සේ යවන බස් එකකි. සියලු රැහැන් එකම clock එකකින් පාලනය වේ.
- **Multi-drop බස් එක:** එකම රැහැන් කට්ටලයට උපාංග කිහිපයක් සම්බන්ධ කර, ඒවා හවුලේ භාවිතා කරන බස් එකකි.
- **සංඥා පමාවේ වෙනස (skew):** එකම clock edge එකේදී යැවූ bits, විවිධ රැහැන් ඔස්සේ වෙනස් කාලවලදී පැමිණීම.
- **Point-to-point සබැඳිය:** උපාංග *දෙකක්* පමණක් සම්බන්ධ කරන කැප වූ රැහැන් කට්ටලයකි.
- **Differential pair:** එක් bit ප්‍රවාහයක් සඳහා ප්‍රතිවිරුද්ධ සංඥා දෙකක් රැගෙන යන රැහැන් දෙකකි. ග්‍රාහකය කියවන්නේ ඒවා අතර වෙනසයි.
- **Lane:** PCIe හි මූලික ඒකකයයි. යැවීමට (transmit) pair එකක් සහ ලැබීමට (receive) pair එකක් ලෙස රැහැන් **4** කින් සමන්විත වේ.
- **GT/s (gigatransfers per second):** රැහැනේ තත්පරයකට සිදු වන සංඥා වෙනස්වීම් (symbols) ගණනයි. කේතන බද්ද අඩු කිරීමට පෙර අගයයි.
- **කේතනය (encoding) — 8b/10b සහ 128b/130b:** දත්ත bits කට්ටලයක් මඳක් දිගු bit රටාවකට හරවා යැවීමයි. එමගින් ග්‍රාහකයට bit ප්‍රවාහයෙන්ම clock එක නැවත ලබා ගත හැකිය.

### 2. Skew අයවැය: clock එක වේගවත් වන විට කුමක් සිදු වේද

Parallel බස් එකක ග්‍රාහකය සෑම bit එකක්ම එකම clock edge එකකදී sample කළ යුතුය. clock කාලය T = 1/f නම්, සියලු රැහැන්වල bits එම කාලය තුළම ස්ථාවර විය යුතුය. රැහැන් අතර skew එක සාමාන්‍යයෙන් රැහැන් දිග සහ capacitance වල වෙනස නිසා ඇති වන අතර, clock එක වේගවත් කළත් එය **අඩු නොවේ**.

**ගණනය කළ උදාහරණය (ආදර්ශ අංක):** රැහැන් අතර ස්ථිර skew එක **1 ns** යැයි උපකල්පනය කරමු.

| Clock | කාලය T = 1/f | skew එක T හි කොටසක් ලෙස |
|---|---|---|
| 33 MHz (PCI) | 30 ns | 3.3% |
| 66 MHz | 15 ns | 6.7% |
| 133 MHz (PCI-X) | 7.5 ns | 13.3% |
| 500 MHz | 2 ns | 50% |
| 1 GHz | 1 ns | **100%** (sample කිරීමට කාලයක් ඉතිරි නැත) |

skew එක ns 1 හිම රැඳී තිබියදී clock එක දෙගුණ කළ විට, ඉතිරි වන ආන්තිකය (margin) වේගයෙන් නැති වේ. Intel හි Ajay V. Bhatt 2002 දී ලියූ "Creating a Third Generation I/O Interconnect" පත්‍රිකාවේ (පිටුව 1) මෙම කරුණම සඳහන් වේ. එහි අනුව 1990 ගණන්වල PCI "multi-drop, parallel" බස් එකක් වූ අතර එය කාර්ය සාධනයේ ප්‍රායෝගික සීමාවට ආසන්නව තිබුණි. එහි "synchronously clocked data transfer is signal skew limited" විය. එනම් එකම clock එකකට සමමුහුර්තව දත්ත යැවීම skew නිසා සීමා විය. ලාභ FR4 පරිපථ පුවරු සඳහා රැහැන් මාර්ග නීතිද සීමාවේ තිබුණි.

**Serial lane එක මෙය මඟ හරින්නේ කෙසේද:** PCIe lane එකක clock එක වෙනම රැහැනකින් යවන්නේ නැත. Bhatt පත්‍රිකාවේ (පිටුව 4) පරිදි clock එක 8b/10b කේතනය මගින් දත්ත ප්‍රවාහය තුළම තැන්පත් කර ඇත ("embedded"). එබැවින් සෑම lane එකක්ම තමන්ගේම කාලය තමාම නැවත ලබා ගනී. රැහැන් දුසිමක් එකම මොහොතට පෙළගැස්විය යුතු නැත. lanes කිහිපයක් එකට බැඳුණු විට ඒවා අතර වෙනස පසුව ග්‍රාහකයේදී පෙළගස්වනු ලැබේ.

### 3. PCI බස් එකේ bandwidth සහ එය හවුලේ බෙදීම

PCI: දත්ත පළල bits 32 = බයිට් 4, clock 33 MHz → 4 × 33 = **133 MB/s** (උච්ච අගය).

මෙම 133 MB/s බස් එකේ ඇති **සියලු** උපාංග අතර බෙදී යයි. **ආදර්ශ උදාහරණය:** එකවර දත්ත යවන card 4 ක් ඇත්නම්, එකකට සාමාන්‍යයෙන් ලැබෙන්නේ 133 ÷ 4 ≈ **33 MB/s** පමණි. arbitration වියදම නිසා සැබෑ අගය ඊටත් අඩුය. PCIe හි සෑම උපාංගයකටම තමන්ගේම lane(s) ඇත. එබැවින් x1 card හතරක් තිබුණත්, එක් එක් card එකට PCIe 1.x දී දිශාවකට ~250 MB/s බැගින් ලැබේ (§4).

### 4. කේතන බද්ද: GT/s සිට MB/s දක්වා

PCI-SIG හි නිල FAQ පිළිතුර ("How does the PCIe 3.0 8.0 GT/s 'double' the PCIe 2.0 5.0 GT/s bit rate?") අනුව:

- 8b/10b යනු දත්ත bits 8 ක් bits 10 ක් ලෙස යැවීමයි. එයින් **20%** බද්දක් ඇති වේ.
- 128b/130b යනු bits 128 ක් bits 130 ක් ලෙස යැවීමයි. එහි බද්ද 2/130 ≈ **1.5%** පමණි.

**සූත්‍රය:** lane එකක දිශාවකට බයිට් ප්‍රමාණය = GT/s × (කේතන කාර්යක්ෂමතාව) ÷ 8.

| පරම්පරාව | GT/s | කේතනය | lane එකක දිශාවකට | x16, එක් දිශාවකට | x16, දෙදිශාවම (PCI-SIG වගුව) |
|---|---|---|---|---|---|
| PCIe 1.x | 2.5 | 8b/10b | 2.5 × 0.8 ÷ 8 = **250 MB/s** | 4 GB/s | ~8 GB/s |
| PCIe 2.x | 5.0 | 8b/10b | 5 × 0.8 ÷ 8 = **500 MB/s** | 8 GB/s | ~16 GB/s |
| PCIe 3.0 | 8.0 | 128b/130b | 8 × 128/130 ÷ 8 = **984.6 MB/s** ≈ 1 GB/s | 15.75 GB/s | ~32 GB/s |

PCI-SIG ම පෙන්වා දෙන උපක්‍රමය මෙයයි. 8b/10b රඳවා ගත්තා නම්, 3.0 හි bandwidth දෙගුණ කිරීමට **10 GT/s** අවශ්‍ය වේ (10 × 0.8 = 8 Gb/s). කේතනය වෙනස් කිරීමෙන් එම ප්‍රතිඵලයම 8 GT/s දී ලැබුණි. PCI-SIG ට අනුව එයින් PHY සංකීර්ණත්වය, die ප්‍රමාණය සහ බලය යන දඬුවම් මඟ හැරුණි.

**සටහන (මූලාශ්‍ර අතර වෙනසක්):** Bhatt පත්‍රිකාවේ පෙළ (පිටුව 4) 2.5 Gb/s lane එකක් "200MB/s" ලෙස දක්වයි. එහෙත් එම පත්‍රිකාවේම Figure 14 හි ගණනය ගැළපෙන්නේ 250 MB/s සමඟය (§5). අපි PCI-SIG හි 250 MB/s භාවිතා කරමු.

### 5. Pin එකකට bandwidth: සැබෑ වාසිය

Bhatt පත්‍රිකාවේ Figure 14 (පිටුව 8) bandwidth එක pins වලින් බෙදයි. එහි "pins" යනු දත්ත, ලිපින, පාලන, බලය සහ භූගත (ground) pins සියල්ලයි. පත්‍රිකාවේ අගයන් නැවත ගණනය කරමු:

| බස් එක | උච්ච bandwidth | Pins | MB/s ÷ pin |
|---|---|---|---|
| PCI (32b × 33 MHz) | 133 MB/s | 84 | 133 ÷ 84 = **1.58** |
| PCI-X (64b × 133 MHz) | 8 × 133 = 1064 MB/s | 150 | **7.09** |
| AGP4X (32b × 4 × 66 MHz) | 4 × 264 = 1056 MB/s | 108 | **9.78** (පත්‍රිකාවේ 9.85) |
| 3GIO/PCIe (lanes 8, 2.5 Gb/s) | 8 × 250 × 2 දිශා = 4000 MB/s | 40 | **100** |

PCIe x8 සබැඳියක සංඥා රැහැන් 8 × 4 = 32 ක් ඇත. ඉතිරි 8 බලය/භූගත pins ලෙස ගණන් ගත් විට එකතුව 40 වේ. එබැවින් PCIe හි pin එකක් PCI හි pin එකක් මෙන් 100 ÷ 1.58 ≈ **63** ගුණයක් දත්ත රැගෙන යයි. පෝස්ට් එකේ "භෞතික රැහැන් අඩු, bandwidth ඉහළ" යන්නෙහි අංකමය අර්ථය එයයි. (AGP අගයේ කුඩා වෙනස 66 MHz යනු නිවැරදිව 66.67 MHz වීම නිසා විය හැකිය.)

Bhatt 2002 දී 2.5 Gb/s ආරම්භක වේගය සිලිකන් තාක්ෂණය සමඟ **10 Gb/s** දක්වා වැඩි වේ යැයි පුරෝකථනය කළේය. ඔහු එය "the practical maximum for signals in copper" ලෙස හැඳින්වීය (පිටුව 4). පසු පරම්පරා ගැන Post 33 බලන්න.

### 6. පැන්සලෙන් අභ්‍යාසය

1. 64-bit, 66 MHz PCI බස් එකක උච්ච bandwidth කීයද?
2. skew 1 ns ස්ථිරව පවතී නම්, skew එක clock කාලයෙන් 25% ට වඩා අඩු වීමට ඉඩ දෙන උපරිම clock සංඛ්‍යාතය කීයද?
3. PCIe 2.x x4 සබැඳියක එක් දිශාවක bandwidth කීයද? PCIe 3.0 x4 එකක?
4. 8 GT/s lane එකක් 8b/10b සමඟ භාවිතා කළා නම් දිශාවකට කොපමණ ලැබෙනු ඇත්ද? 128b/130b සමඟ ලැබෙන අගයට වඩා කොපමණ ප්‍රතිශතයකින් අඩුද?
5. PCIe x1 lane එකකට සංඥා රැහැන් කීයක් තිබේද? PCI බස් එකේ pins 84 ට සාපේක්ෂව එය කීයෙන් කොටසක්ද (බලය/භූගත pins නොසලකා)?

(පිළිතුරු: 1 → බයිට් 8 × 66 MHz = **528 MB/s** (≈533, 66.67 MHz ගත්තොත්). 2 → T ≥ 1 ns ÷ 0.25 = 4 ns → f ≤ **250 MHz**. 3 → 4 × 500 = **2 GB/s**; 4 × 984.6 ≈ **3.94 GB/s**. 4 → 8 × 0.8 ÷ 8 = **800 MB/s**. (984.6 − 800) ÷ 984.6 ≈ **18.8%** අඩුය. 5 → රැහැන් **4** (pairs 2). 4 ÷ 84 ≈ **1/21**.)

**මෙම කොටසේ මූලාශ්‍ර:** Ajay V. Bhatt (Intel), "Creating a Third Generation I/O Interconnect", 2002. Intel හි නිල developer.intel.com පිටපතේ archive.org සටහන: <http://web.archive.org/web/20061016041753/http://developer.intel.com/technology/pciexpress/downloads/3rdGenWhitePaper.pdf>. භාවිත කළ පිටු:
- පිටුව 1: multi-drop parallel, "signal skew limited"
- පිටුව 4: 8b/10b තැන්පත් clock, 2.5 Gb/s/direction, "200MB/s", 10 Gb/s "practical maximum"
- පිටුව 7–8: Figure 14, bandwidth per pin

PCI-SIG, FAQ "How does the PCIe 3.0 8.0 GT/s 'double' the PCIe 2.0 5.0 GT/s bit rate?": <https://pcisig.com/how-does-pcie-30-8gts-double-pcie-20-5gts-bit-rate>. Skew වගුව සහ PCI බෙදාගැනීමේ උදාහරණය ආදර්ශ ගණනය කිරීම් වේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "FinFET සිට GAA දක්වා"
weight: 56
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 55
aliases:
  - /posts/49-finfet-to-gaa/
  - /posts/55-finfet-to-gaa/
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

## ගැඹුරින්: Gate එක ඔතන තරමට — fin ජ්‍යාමිතිය, sub-threshold slope සහ nanosheet පළල

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** ට්‍රාන්සිස්ටර සහ MOSFET මූලික කරුණු මෙම පොතේම සිංහලෙන් ඇත (Posts 05–06 බලන්න). එහෙත් FinFET, tri-gate හෝ gate-all-around (GAA) nanosheet ට්‍රාන්සිස්ටර ගැන සිංහල විකිපීඩියා ලිපියක්, පාඩමක් හෝ වීඩියෝවක් අපට හමු නොවීය ("FinFET sinhala", "transistor 3nm GAA sinhala" සෙවුම්වලට අදාළ ප්‍රතිඵල නොලැබුණි). එබැවින් මෙම කොටස Intel, Samsung සහ IBM හි නිල ප්‍රකාශනවල අංක භාවිතා කර, ජ්‍යාමිතියෙන් මුල සිට ගණනය කරයි.

### 1. මූලික පද

- **නාලිකාව (channel):** ට්‍රාන්සිස්ටරයේ source සහ drain අතර ධාරාව ගලන සිලිකන් කොටසයි.
- **Gate දිග (gate length):** නාලිකාවේ දිග ඔස්සේ gate එකේ දිගයි.
- **කෙටි-නාලිකා ආචරණ (short-channel effects):** gate දිග ඉතා කෙටි වූ විට drain එකේ විභවය නාලිකාව පාලනය කිරීමට පටන් ගැනීමයි. එවිට gate එක "off" වූ විටත් ධාරාව කාන්දු (leak) වේ.
- **Sub-threshold slope (S):** ට්‍රාන්සිස්ටරය "off" කලාපයේ ඇති විට, ධාරාව 10 ගුණයකින් වෙනස් කිරීමට gate voltage එක කොපමණ වෙනස් කළ යුතුද යන්නයි (mV/decade). S කුඩා නම් ("steeper"), ට්‍රාන්සිස්ටරය වඩා හොඳින් "off" වේ.
- **සම්පූර්ණයෙන් ක්ෂය වූ (fully depleted):** නාලිකාව ඉතා තුනී නිසා gate එකේ ක්ෂේත්‍රය සම්පූර්ණ සිලිකන් පරිමාව පුරා පාලනය කරන තත්ත්වයයි.
- **Fin:** සිරස්ව නැගී සිටින සිලිකන් "වරලකි". gate එක එහි පැති තුනම ආවරණය කරයි.
- **Nanosheet:** තිරස්ව තට්ටු කර ඇති තුනී සිලිකන් පත්‍රයකි. gate එක එහි පැති හතරම වට කරයි (GAA).
- **ඵලදායී පළල (effective width, W_eff):** gate එක ස්පර්ශ කරන නාලිකා පෘෂ්ඨයේ මුළු පළලයි. ධාරාව දළ වශයෙන් එයට සමානුපාතික වේ.

### 2. Intel 22 nm tri-gate: නිල අංක

Intel 2011 මැයි මස නිකුත් කළ "Intel's Revolutionary 22 nm Transistor Technology" ඉදිරිපත් කිරීමේ (Mark Bohr සහ Kaizad Mistry) කරුණු:
- Tri-gate ට්‍රාන්සිස්ටර සිරස් fin එකක **පැති තුනේ** නාලිකා සාදයි. එමගින් "fully depleted" ක්‍රියාකාරිත්වය ලැබේ (slide 5).
- වැඩි ධාවන ශක්තියක් (drive strength) සඳහා **fins කිහිපයක්** එකට සම්බන්ධ කළ හැකිය (slides 6–7).
- වඩා බෑවුම් (steeper) sub-threshold slope එකක් නිසා කාන්දු ධාරාව අඩු වේ. නැතහොත් threshold voltage එක අඩු කර, අඩු වෝල්ටීයතාවකින් ක්‍රියා කළ හැකිය (slides 16–17).
- 32 nm planar හා සසඳන විට, අඩු වෝල්ටීයතාවේදී gate delay එක **37%** කින් වේගවත්ය. ඉහළ වෝල්ටීයතාවේදී **18%** කින් වේගවත්ය (slide 20).
- එම කාර්ය සාධනයේදී වෝල්ට් **0.2** ක් අඩුවෙන් ක්‍රියා කළ හැකි නිසා ක්‍රියාකාරී බලය **50% කට වඩා** අඩු වේ (slide 21).
- ක්‍රියාවලි පිරිවැය එකතුව **2–3%** පමණි. extremely-thin SOI විකල්පය **~10%** ක් එකතු කරයි (slides 13–14).

**Post 36 සූත්‍රය සමඟ (ආදර්ශ ගණනය):** P ≈ C·V²·f. V = 1.0 V සිට 0.8 V දක්වා අඩු කළ විට V² = 0.64 වේ. එනම් වෝල්ටීයතාවෙන් පමණක් **36%** ක අඩු වීමක් ලැබේ. එහෙත් −0.2 V හි බලපෑම ආරම්භක වෝල්ටීයතාව මත රඳා පවතී: V = 0.7 V සිට 0.5 V දක්වා නම් (0.5 ÷ 0.7)² ≈ 0.51, එනම් **49%** ක අඩු වීමකි. ආරම්භක අගය අඩු වන තරමට −0.2 V හි බලපෑම වැඩිය. Intel slide එක දක්වන්නේ −0.2 V සහ ">50%" පමණි. ආරම්භක වෝල්ටීයතාව හෝ >50% හි සාධක බෙදීම එහි නැත. එබැවින් මෙම slide එකෙන් පමණක් ඉතිරිය කුමන සාධකයකින්දැයි නිගමනය කළ නොහැක. 1.0/0.8 V සහ 0.7/0.5 V අපේ ආදර්ශ අගයන් වේ.

### 3. Fin ජ්‍යාමිතිය: එකම බිම් ප්‍රමාණයේ වැඩි පළලක්

planar ට්‍රාන්සිස්ටරයක W_eff = බිම් පළල වේ. fin එකක gate එක පැති දෙකක් (උස H) සහ මුදුන (පළල W_fin) ආවරණය කරයි:

**W_eff (fin එකට) = 2·H + W_fin**

Kaizad Mistry ගේ Intel Technology and Manufacturing Day 2017 ඉදිරිපත් කිරීමෙන්:
- 10 nm fin pitch = **34 nm**, fin උස = **53 nm** (slide 10).
- 10 nm fins 14 nm ට වඩා "~25% taller and ~25% more closely spaced" (slide 9).
- 14 nm fin pitch = **42 nm** (slide 6).

එයින් 14 nm fin උස ≈ 53 ÷ 1.25 ≈ **42 nm** ලෙස අපි ව්‍යුත්පන්න කරමු. fin පළල Intel slides වල නැත. එබැවින් අපි **W_fin = 7 nm** ආදර්ශ අගයක් ලෙස ගනිමු.

| ක්‍රියාවලිය | fin pitch | H | W_eff = 2H + 7 | pitch එකට W_eff (planar = 1) |
|---|---|---|---|---|
| 14 nm | 42 nm | ≈42 nm | 91 nm | 91 ÷ 42 ≈ **2.2×** |
| 10 nm | 34 nm | 53 nm | 113 nm | 113 ÷ 34 ≈ **3.3×** |

fins උස් වූ සහ ළං වූ විට, එකම බිම් ප්‍රමාණයෙන් වැඩි ධාරාවක් ලැබේ. fin එක තුළ gate එක පැති තුනකින් පාලනය කරන නිසා කාන්දුවද අඩුය.

**Fin ගණනේ ප්‍රමාණකරණය:** fins සංඛ්‍යාව පූර්ණ සංඛ්‍යාවක් විය යුතුය (1, 2, 3 …). 10 nm හි fins 2 ක් = 226 nm, fins 3 ක් = 339 nm වේ. ඒ අතර අගයක් ("fins 2.5") තෝරා ගත නොහැක. නිර්මාණකරුවන්ට ධාරාව සියුම්ව සුසර කළ නොහැකි විය.

### 4. Nanosheet: පැති හතර සහ සුසර කළ හැකි පළල

GAA nanosheet එකක gate එක පත්‍රයේ පැති හතරම වට කරයි. පත්‍රයක පළල W සහ ඝනකම t නම්:

**W_eff (පත්‍රයට) = 2·(W + t)**. පත්‍ර N ක් තට්ටු කළ විට එය N ගුණයක් වේ.

**ආදර්ශ ගණනය** (ඝනකම t = 5 nm, තට්ටු N = 3; මේවා අපේ ආදර්ශ අගයන්):

| පත්‍ර පළල W | W_eff = 3 × 2(W + 5) |
|---|---|
| 20 nm | **150 nm** |
| 30 nm | **210 nm** |
| 40 nm | **270 nm** |

- පළල සන්තතික (continuous) ලෙස තෝරා ගත හැකිය. fins වල මෙන් පූර්ණ සංඛ්‍යා පියවරවලට සීමා නොවේ.
- Samsung හි 2022 ජූනි 30 නිවේදනය මෙයම කියයි. එහි "nanosheets with wider channels" භාවිතා කරන බවත්, "adjust the channel width of the nanosheet" කළ හැකි බවත්, එමගින් බලය සහ කාර්ය සාධනය සුසර කළ හැකි බවත් සඳහන් වේ.

### 5. Sub-threshold slope: "off" වීම කොතරම් හොඳද

"off" කලාපයේ ධාරාව, gate voltage එකෙහි S mV වෙනසකට 10 ගුණයකින් වෙනස් වේ. threshold voltage එකේ සිට 0 V දක්වා **300 mV** ක් ඇත්නම්, "on" සිට "off" දක්වා ධාරාව අඩු වන්නේ 10^(300/S) ගුණයකිනි.

**ආදර්ශ ගණනය (S අගයන් ආදර්ශ):**
- S = 100 mV/decade: 10^(300/100) = 10³ = **1,000×**.
- S = 70 mV/decade: 10^(300/70) ≈ **19,300×**.
- එනම් එම වෝල්ටීයතාවේදී කාන්දු ධාරාව ≈ **19** ගුණයකින් අඩුය.
- නැතහොත් එම කාන්දුවම පවත්වා ගෙන threshold voltage එක අඩු කර, වෝල්ටීයතාව අඩු කළ හැකිය. Intel slide 17 හි "lower threshold voltage … operate at lower voltage" යන්නෙහි අර්ථය මෙයයි.

gate එක නාලිකාව වඩාත් සම්පූර්ණයෙන් වට කරන තරමට (පැති 1 → 3 → 4), drain එකේ බලපෑම අඩු වී S බෑවුම් වේ.

### 6. GAA: නිල ප්‍රතිඵල

- **Samsung** (2022 ජූනි 30): පළමු පරම්පරාවේ 3 nm GAA (MBCFET) ක්‍රියාවලිය, 5 nm හා සසඳන විට:
  - බලය 45% දක්වා අඩු වේ
  - කාර්ය සාධනය 23% කින් වැඩි වේ
  - ප්‍රදේශය 16% කින් අඩු වේ

  දෙවන පරම්පරාව බලය 50% කින් අඩු කිරීමට, කාර්ය සාධනය 30% කින් වැඩි කිරීමට සහ ප්‍රදේශය 35% කින් අඩු කිරීමට නියමිතය.
- **IBM** (2021 මැයි 6): 2 nm nanosheet තාක්ෂණය නියපොත්තක ප්‍රමාණයේ ඉඩක ට්‍රාන්සිස්ටර **බිලියන 50** ක් තැබිය හැකි බව කියයි.
  - එවකට වඩාත්ම දියුණු 7 nm චිප හා සසඳන විට කාර්ය සාධනය **45%** කින් වැඩි වීම, **නැතහොත්** ශක්ති භාවිතය **75%** කින් අඩු වීම *පුරෝකථනය* ("projected") කරයි. IBM හි පාද සටහනට අනුව මේවා මනින ලද අගයන් නොව "projected industry standard scaling roadmap" මත පදනම් වූ ඇස්තමේන්තු වේ.
  - IBM Research බ්ලොගයට අනුව gate දිග **12 nm** වේ.

**ගණනය:** ප්‍රදේශය 16% කින් අඩු වීම යනු ඝනත්වය 1 ÷ 0.84 ≈ **1.19×** වීමයි. 35% නම් 1 ÷ 0.65 ≈ **1.54×** වේ. IBM "නියපොත්ත" ප්‍රමාණය mm² වලින් දක්වා නැත. අපි එය 150 mm² යැයි *උපකල්පනය* කළහොත්, ඝනත්වය 50 × 10⁹ ÷ 150 ≈ **333 MTr/mm²** වේ. මෙය ආදර්ශ ගණනයක් පමණි. Post 47 හි "ස්වාධීනව මැනිය හැකි ප්‍රමාණ" (වර්ග මිලිමීටරයකට ට්‍රාන්සිස්ටර) සාකච්ඡාව සමඟ සසඳන්න.

### 7. පැන්සලෙන් අභ්‍යාසය

1. fin උස 60 nm, පළල 6 nm නම් fin එකක W_eff කීයද? fins 3 ක් නම්?
2. පළල 25 nm, ඝනකම 5 nm nanosheets 4 ක W_eff කීයද?
3. S = 80 mV/decade සහ threshold සිට 0 V දක්වා 320 mV නම්, ධාරාව කී ගුණයකින් අඩු වේද?
4. P ≈ CV²f අනුව වෝල්ටීයතාව 0.9 V සිට 0.7 V දක්වා අඩු කළ විට ගතික බලය කොපමණ ප්‍රතිශතයකින් අඩු වේද (C සහ f නොවෙනස්ව)?
5. ප්‍රදේශය 35% කින් අඩු වූ ක්‍රියාවලියක, පෙර 1000 mm² ට ගැළපුණු පරිපථය දැන් කොපමණ ප්‍රදේශයක් ගනීද?

(පිළිතුරු:
1. 2 × 60 + 6 = **126 nm**. fins 3 ක් = **378 nm**.
2. 4 × 2 × (25 + 5) = **240 nm**.
3. 10^(320/80) = 10⁴ = **10,000×**.
4. (0.7/0.9)² = 0.605 → ≈ **39.5%** අඩු වේ.
5. 1000 × 0.65 = **650 mm²**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Mark Bohr සහ Kaizad Mistry, *Intel's Revolutionary 22 nm Transistor Technology*, Intel ඉදිරිපත් කිරීම, 2011 මැයි (Intel හි download.intel.com නිල පිටපත). slides 5–7, 13–14, 16–17, 20–21 භාවිත කළෙමු. <https://download.intel.com/newsroom/kits/22nm/pdfs/22nm-Details_Presentation.pdf>
- Kaizad Mistry, *10 nm Technology Leadership*, Intel Technology and Manufacturing Day, 2017 මාර්තු 28. Intel newsroom නිල URL එකේ archive.org පිටපත. slides 6, 9, 10 භාවිත කළෙමු. <http://web.archive.org/web/20221007074404/http://newsroom.intel.com/newsroom/wp-content/uploads/sites/11/2017/03/Kaizad-Mistry-2017-Manufacturing.pdf>
- Samsung Global Newsroom, "Samsung Begins Chip Production Using 3nm Process Technology With GAA Architecture", 2022 ජූනි 30: <https://news.samsung.com/global/samsung-begins-chip-production-using-3nm-process-technology-with-gaa-architecture>
- IBM Newsroom, "IBM Unveils World's First 2 Nanometer Chip Technology, Opening a New Frontier for Semiconductors", 2021 මැයි 6: <https://newsroom.ibm.com/2021-05-06-IBM-Unveils-Worlds-First-2-Nanometer-Chip-Technology,-Opening-a-New-Frontier-for-Semiconductors>
- IBM Research බ්ලොගය, "Introducing the world's first 2 nm node chip", 2021 මැයි 6: <https://research.ibm.com/blog/2-nm-chip>

fin පළල (7 nm), nanosheet මාන, S අගයන්, 1.0/0.8 V සහ 0.7/0.5 V, සහ 150 mm² ආදර්ශ අගයන් වේ. 14 nm fin උස ≈ 42 nm යනු Intel slides වලින් අප කළ ව්‍යුත්පන්නයකි (53 ÷ 1.25), Intel ප්‍රකාශ කළ අගයක් නොවේ.


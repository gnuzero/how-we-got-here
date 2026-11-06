---
title: "Photolithography"
weight: 55
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 54
aliases:
  - /posts/48-photolithography/
  - /posts/54-photolithography/
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

## ගැඹුරින්: Rayleigh සමීකරණය — λ, NA සහ k1 අංකවලින්

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** ASML සහ චිප තාක්ෂණය පිළිබඳ ජනප්‍රිය සිංහල YouTube වීඩියෝවක් ඇත ("…ASML තාක්ෂනය (Explained)", Tech With Wicky — මාතෘකාවෙන් පමණක් හඳුනාගත්, අප නැරඹූ එකක් නොවේ); නමුත් විභේදන (resolution) සමීකරණය, numerical aperture හෝ multi-patterning ගණනය කරන සිංහල පැහැදිලි කිරීමක් අපට හමු නොවීය. පහත සංඛ්‍යා ASML හි තාක්ෂණ සහ නිෂ්පාදන පිටුවලිනි; "k1 අගය" වැනි ව්‍යුත්පන්න අංක අපේ ගණනය කිරීම්ය.

### 1. මූලික පද

- **අවධි මානය (critical dimension, CD):** lithography මගින් මුද්‍රණය කළ හැකි කුඩාම feature ප්‍රමාණය.
- **තරංග ආයාමය (wavelength, λ):** භාවිතා කරන ආලෝකයේ තරංග ආයාමය — DUV ArF සඳහා 193 nm, EUV සඳහා 13.5 nm.
- **සංඛ්‍යාත්මක විවරය (numerical aperture, NA):** optics පද්ධතියකට ආලෝකය එකතු කර නාභිගත කිරීමට ඇති හැකියාවේ මිනුම; විශාල NA = වඩා තියුණු රූපය.
- **k1 සාධකය:** resist, mask, ආලෝකකරණය වැනි නිෂ්පාදන ක්‍රියාවලිය මත රඳා පවතින සංගුණකය; ASML ට අනුව භෞතික සීමාව **k1 = 0.25**.
- **ගිල්වීමේ lithography (immersion lithography):** කාචය සහ wafer අතර ජලය දමා NA එක 1 ට වඩා ඉහළ නැංවීම (ASML NXT:2100i හි NA 1.35).
- **Reticle (mask):** මුද්‍රණය කළ යුතු රටාව ඇති තහඩුව.
- **බහු-රටා කිරීම (multi-patterning):** එක් exposure එකකින් මුද්‍රණය කළ නොහැකි තරම් ළඟ රේඛා, exposures/ක්‍රියාවලි පියවර කිහිපයකට බෙදා සෑදීම (උදා. Post 47 හි Intel 10 nm සඳහා භාවිතා කළ Self-Aligned Quad Patterning).

### 2. සමීකරණය

ASML හි "Rayleigh criterion" පිටුව:

```
CD = k1 × λ / NA
```

CD කුඩා කිරීමට "knobs" තුනක් ඇත: **λ අඩු කිරීම** (නව ආලෝක ප්‍රභවයක් — විශාලතම පිම්ම, නමුත් නව යන්ත්‍ර, ද්‍රව්‍ය සහ ක්‍රියාවලි අවශ්‍යයි), **NA වැඩි කිරීම** (විශාල optics), සහ **k1 අඩු කිරීම** (ක්‍රියාවලි උපක්‍රම සහ computational lithography) — 0.25 සීමාව දක්වා.

### 3. සැබෑ යන්ත්‍ර තුනකින් k1 ආපසු ගණනය කරමු

සමීකරණය නැවත සකස් කළ විට **k1 = CD × NA ÷ λ**:

| පද්ධතිය | λ | NA | CD (ASML) | k1 (අපේ ගණනය) |
|---|---|---|---|---|
| DUV immersion, NXT:2100i | 193 nm | 1.35 | ≤ 38 nm | 38 × 1.35 ÷ 193 ≈ **0.27** |
| EUV, NXE (0.33 NA) | 13.5 nm | 0.33 | 13 nm | 13 × 0.33 ÷ 13.5 ≈ **0.32** |
| High NA EUV, EXE:5000 | 13.5 nm | 0.55 | 8 nm | 8 × 0.55 ÷ 13.5 ≈ **0.33** |

**නිරීක්ෂණ:**

1. DUV දැනටමත් භෞතික සීමාව 0.25 ට ඉතා ආසන්නයි (0.27). k1 = 0.25 දක්වා තල්ලු කළත්: 0.25 × 193 ÷ 1.35 ≈ **35.7 nm** — 38 nm සිට ලැබෙන්නේ 6% ක ලාභයක් පමණි. ASML ලියන පරිදි DUV හි "knobs හැරවීමට ඉතිරිව ඇත්තේ ස්වල්පයකි".
2. EUV හි ලාභය එන්නේ λ ගෙනි: 193 ÷ 13.5 ≈ **14.3 ගුණයක්** කෙටි තරංග ආයාමයක්. NA 1.35 සිට 0.33 දක්වා *අඩු* වුවත් (කැඩපත් optics වල සීමා), CD 38 සිට 13 nm දක්වා අඩු විය.
3. High NA හි ලාභය එන්නේ NA ගෙනි: 0.55 ÷ 0.33 ≈ **1.67**. k1 = 0.32 ම තබා ගත්තොත් CD = 0.32 × 13.5 ÷ 0.55 ≈ **7.8 nm** — ASML හි "8 nm" ට ගැළපේ.

**ඝනත්වයට පරිවර්තනය:** ASML ට අනුව High NA මගින් ට්‍රාන්සිස්ටර **1.7 ගුණයක් කුඩා** ලෙස මුද්‍රණය කළ හැකි අතර ඝනත්වය **2.9 ගුණයක්** වේ. මාන දෙකේම 1.7 ගුණයක් නිසා 1.7² ≈ 2.89 (Post 47 හි "0.7 නීතිය" මෙන්ම වර්ගඵල තර්කය). 13 ÷ 8 = 1.625 ලෙස හරියටම ගණනය කළොත් 1.625² ≈ 2.64 — ASML හි සංඛ්‍යා වටකළ අගයන් බව සලකන්න.

### 4. Multi-patterning අවශ්‍ය වන්නේ ඇයි — Post 47 හි 36 nm pitch

Pitch = රේඛා පළල + රේඛා අතර පරතරය. රේඛාවද පරතරයද දෙකම අවම වශයෙන් CD තරම් විය යුතු නම්, එක් exposure එකකින් මුද්‍රණය කළ හැකි අවම pitch ≈ **2 × CD** (සරල ආදර්ශයක්):

| පද්ධතිය | අවම pitch ≈ 2 × CD | Intel 10 nm ලෝහ pitch 36 nm සඳහා |
|---|---|---|
| DUV (38 nm) | 76 nm | 76 ÷ 36 ≈ 2.1 — pitch එක දෙකට බෙදීම (double patterning) පවා ප්‍රමාණවත් නැත → **හතරට බෙදීම** |
| EUV 0.33 NA (13 nm) | 26 nm | 26 < 36 → **එක් exposure එකක්** ප්‍රමාණවත් |

Intel 10 nm "ලොව පළමු Self-Aligned Quad Patterning" භාවිතා කළේ එබැවිනි (Mistry 2017, slide 6). ASML හි High NA ලිපිය කියන පරිදි එවැනි ක්‍රම "නිෂ්පාදන කාලය වැඩි කරන අතර දෝෂ ඇතුළු වීමට අමතර අවස්ථා" සපයයි — Post 50 හි අස්වැන්න (yield) සහ පිරිවැය තර්කයට මෙය සෘජුව සම්බන්ධයි.

### 5. ෆෝටෝනයක ශක්තිය — EUV "අසාමාන්‍ය" වන්නේ ඇයි

ෆෝටෝනයක ශක්තිය E = hc ÷ λ, සහ hc ≈ 1240 eV·nm (භෞතික විද්‍යාවේ නියතයක්; ගණනය අපේ):

- 193 nm: 1240 ÷ 193 ≈ **6.4 eV**
- 13.5 nm: 1240 ÷ 13.5 ≈ **91.8 eV** — 14 ගුණයකට වඩා

එක් EUV ෆෝටෝනයක් DUV එකකට වඩා 14 ගුණයක පමණ ශක්තියක් රැගෙන යයි — එය "ටිකක් කෙටි ආලෝකයක්" නොව ද්‍රව්‍ය සමඟ බෙහෙවින් වෙනස් ලෙස අන්තර්ක්‍රියා කරන විකිරණයකි. ඉහත පෙළේ සඳහන් පරිදි EUV වීදුරු සහ වාතය විසින් අවශෝෂණය කෙරෙන නිසා මාර්ගය near-vacuum තුළ mirrors වලින් සෑදිය යුතුය.

### 6. High NA හි මිල: අර්ධ ප්‍රමාණ field එකක්

ASML ට අනුව EXE පද්ධතිය රටාව එක් දිශාවකට 4x සහ අනෙක් දිශාවට 8x කුඩා කරන (anamorphic) optics භාවිතා කරයි; ප්‍රතිඵලය — exposure field එක NXE එකේ **අඩක්**, එබැවින් wafer එකකට **exposures දෙගුණයක්**. එයට වන්දි ලෙස wafer stage එක 8g (NXE මෙන් දෙගුණයක්) සහ reticle stage එක 32g ත්වරණයකින් චලනය වේ.

- NXT:2100i (DUV): පැයකට wafers 295 → wafer එකකට 3600 ÷ 295 ≈ **12.2 s**
- EXE:5000 (High NA): පැයකට wafers 185 කට වඩා → wafer එකකට ≈ **19.5 s** හෝ ඊට අඩු

### 7. පැන්සලෙන් අභ්‍යාසය (මෙම පිටුවේ lab එකක් නැත)

1. λ = 193 nm, NA = 1.35, k1 = 0.30 නම් CD කීයද?
2. EUV (λ = 13.5 nm, NA = 0.33) භෞතික සීමාව k1 = 0.25 දී CD කීයද? High NA (0.55) සඳහා?
3. යම් ක්‍රියාවලියක් CD 13 nm සිට 8 nm දක්වා අඩු කරයි. මාන දෙකේම පරිමාණය කළොත් ඝනත්වය කී ගුණයක්ද?
4. සරල "pitch ≈ 2 × CD" ආදර්ශයෙන්, 28 nm ලෝහ pitch එකක් (අ) DUV 38 nm, (ආ) EUV 13 nm සමඟ එක් exposure එකකින් මුද්‍රණය කළ හැකිද?
5. 248 nm (KrF) ආලෝකයේ ෆෝටෝන ශක්තිය eV කීයද?

(පිළිතුරු: 1 → 0.30 × 193 ÷ 1.35 ≈ **42.9 nm**. 2 → 0.25 × 13.5 ÷ 0.33 ≈ **10.2 nm**; 0.25 × 13.5 ÷ 0.55 ≈ **6.1 nm**. 3 → (13 ÷ 8)² ≈ **2.64×**. 4 → (අ) 76 nm > 28 nm → **නැත** (pitch 76 ÷ 28 ≈ 2.7 ගුණයකින් බෙදිය යුතුය); (ආ) 26 nm ≤ 28 nm → **ඔව්** (එහෙත් සීමාවේම). 5 → 1240 ÷ 248 = **5.0 eV**.)

**මෙම කොටසේ මූලාශ්‍ර:** ASML, "The Rayleigh criterion for resolution" (<https://www.asml.com/en/technology/lithography-principles/rayleigh-criterion>) — CD = k1·λ/NA සහ k1 = 0.25 භෞතික සීමාව. ASML, "TWINSCAN NXT:2100i" නිෂ්පාදන පිටුව (<https://www.asml.com/en/products/duv-lithography-systems/twinscan-nxt2100i>) — ArF 193 nm, 1.35 NA, විභේදනය ≤ 38 nm, පැයකට wafers 295. Christine Middleton, "5 things you should know about High NA EUV lithography", ASML, 2024 ජනවාරි 25 (<https://www.asml.com/en/company/stories/2024/5-things-high-na-euv>) — 13.5 nm එදිරිව 193 nm, NXE CD 13 nm, NA 0.33 → 0.55, EXE CD 8 nm, 1.7× කුඩා / 2.9× ඝනත්වය, anamorphic 4x/8x, අර්ධ field, 8g/32g stages, පැයකට wafers 185+, multi-patterning පිරිවැය. Intel 10 nm SAQP සහ 36 nm ලෝහ pitch: Kaizad Mistry, Intel Technology and Manufacturing Day 2017, slide 6. k1 අගයන්, "pitch ≈ 2 × CD" ආදර්ශය සහ ෆෝටෝන ශක්ති අපේ ගණනය කිරීම්ය.


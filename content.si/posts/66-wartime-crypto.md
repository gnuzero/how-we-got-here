---
title: "යුද්ධකාලීන Crypto"
weight: 67
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

Lorenz teleprinter සයිෆර් ("Tunny") වෙනස් ගැටලුවක් නිපදවුවේය: ඉලෙක්ට්‍රොනික වේගයේ සංඛ්‍යාන ප්‍රහාරයක් අවශ්‍ය දිගු ප්‍රවාහ. Max Newman එම ප්‍රහාරය වටා Newmanry සංවිධානය කළේය. දැනටමත් දුරකථන මාරුවේ රික්තක නල විශ්වාස කළ Post Office ඉංජිනේරුවෙකු වූ Tommy Flowers **Colossus** ගොඩනැගුවේය (පළමු යන්ත්‍රය 1944 ජනවාරියේ Bletchley Park වෙත භාර දුන් අතර 1944 පෙබරවාරි 5 දින පළමු පණිවිඩයට පහර දුන්නේය; Mark II 1944 ජූනි සිට — පහත 5 වන කොටසේ දින වගුව බලන්න) — කඩදාසි පටි කියවමින් කඩා දැමිය හැකි settings වෙත ගණන් කරන නල රාක්ක.

මිථ්‍යාව නොව සීමාව නම් කරන්න: Colossus විශේෂ-අරමුණු cryptanalytic ඉලෙක්ට්‍රොනිකයක් විය, සාමාන්‍ය stored-program පරිගණකයක් නොවේ. එය *බල කළ* දේ නම් විශාල නල ගණනක් එම workload එකේ ඕනෑම relay farm එකකට වඩා ජය ගන්නා ප්‍රමාණවත්-විශ්වසනීය යන්ත්‍රයකට වයර් කළ හැකි බවට ඔප්පුවයි. එය Post 03 විවෘත කරන එම භෞතික ඔට්ටුවම ය — ස්විචයේ චලනය වන සම්බන්ධතා නැත — සාමයකාලීන පර්යේෂණ විවේකය වෙනුවට යුද්ධකාලීන පීඩනය යටතේ.

පිටවීමේ දොර: [The National Museum of Computing](https://www.tnmoc.org/) (Colossus rebuild සහ ප්‍රාථමික ද්‍රව්‍ය); ශාස්ත්‍රීය Colossus සාහිත්‍යයේ Tommy Flowers සහ Max Newman (උදා. Copeland ගේ සංස්කරණය කළ ඉතිහාස); Enigma/Bombe සඳහා Bletchley Park ගේම සංරක්ෂණ මාර්ගෝපදේශ. සත්‍යවාදීතාව: මෙහි සත්‍යාපිත සිංහල ප්‍රාථමික මූලාශ්‍රයක් ඉදිරිපත් නොකෙරේ — ඉංග්‍රීසි/ප්‍රාථමික ඉතිහාසවලට ගෞරවය.

## ට්‍රාන්සිස්ටර තර්කයට පෙර මෙය අයත් වන්නේ ඇයි

කශේරුකාව ඉදිරියට කියවන්න:

- **Post 02** — relays ද්විමය තර්කය ඔප්පු කරන අතර චලනය වන ලෝහ ඉතා මන්දගාමී බවද ඔප්පු කරයි.
- **මෙම පෝස්ට් එක** — සැබෑ workload එකක් (සයිෆර් සෙවීම සහ ප්‍රවාහ ගණන් කිරීම) "ඉතා මන්දගාමී" මෙහෙයුම්මය වශයෙන් පිළිගත නොහැකි කරයි.
- **Post 03** — නල යාන්ත්‍රික චලනය ඉවත් කරයි; ENIAC-පරිමාණ යන්ත්‍ර විවිධ වැඩසටහන් යටතේ ඉලෙක්ට්‍රොනික ස්විචය උරුම කර ගනී.
- **Post 04** — නල පසුව *තමන්ගේ* සීලිං එකට ගැටේ (තාපය, බලය, අසාර්ථකත්වය), එබැවින් ට්‍රාන්සිස්ටරය සිදු විය යුතු විය.

යුද්ධකාලීන crypto පරිගණකකරණය සොයා ගත්තේ නැත. එය ශතවර්ෂයේ දුෂ්කරතම තොරතුරු ගැටලුවලින් එකක් සඳහා විද්‍යුත් යාන්ත්‍රිකයෙන් ඉලෙක්ට්‍රොනිකයට පනින්න *විකල්ප නොවන* කළේය — සහ වැඩ කළ නම් කළ මිනිසුන්ගේ මංපෙතක් ඉතිරි කළේය. විකල්ප පැත්ත මාර්ගයකි; ප්‍රධාන ගමන Post 03 හි දිගටම යයි.

## ගැඹුරින්: Enigma හි යතුරු අවකාශය, crib එකක් තැබීම සහ Colossus හි ගණන් කිරීම

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** මෙම මාතෘකාව ගැන සිංහලෙන් ඇති ද්‍රව්‍ය:
> - si.wikipedia හි "[ඇලන් ටියුරින්](https://si.wikipedia.org/wiki/ඇලන්_ටියුරින්)" ලිපිය (අක්ෂර ~14.5k). එය Government Code and Cypher School, Enigma, පෝලන්ත "bomba" ක්‍රමය Turing වැඩිදියුණු කිරීම සහ Bletchley ගැන කෙටියෙන් කියයි. "[පරිගණක විද්‍යාව](https://si.wikipedia.org/wiki/පරිගණක_විද්‍යාව)" ලිපියේ එනිග්මා ගැන එක් සඳහනක් ඇත. "[සීසර් කේතාංකය](https://si.wikipedia.org/wiki/සීසර්_කේතාංකය)" සරල ආදේශක කේතාංකයක් පැහැදිලි කරයි.
> - YouTube හි Enigma ගැන සිංහල වීඩියෝ දෙකක් ([_nx4MJcqiuo](https://www.youtube.com/watch?v=_nx4MJcqiuo), Science Vista Hub; [5J_DQE7uaKQ](https://www.youtube.com/watch?v=5J_DQE7uaKQ)). මේවා හඳුනාගත්තේ මාතෘකාවෙන් පමණි.
> - Colossus හෝ Lorenz ("Tunny") ගැන සිංහල ද්‍රව්‍යයක් අපට හමු නොවීය.
>
> ඒවායේ නැති දේ: Enigma හි settings ගණන ගණනය කරන හැටි, "අකුරක් කිසිදා තමාටම සංකේතනය නොවේ" යන දුර්වලතාව crib එකක් තැබීමට උදව් කරන හැටි, Lorenz හි XOR ගණිතය, සහ Colossus හි වේගය අංකවලින්.

### 1. මූලික පද

- **කේතාංකය / සයිෆරය (cipher):** පණිවිඩයක් අකුරෙන් අකුර වෙනස් කරන ක්‍රමය. **Plaintext (plaintext)** = මුල් පෙළ. **Ciphertext (ciphertext)** = සංකේතිත පෙළ.
- **Rotor (rotor, wheel):** එක් එක් අකුර ඔබන විට කැරකෙන, ඇතුළත රැහැන් ඇති රෝදය.
- **Plugboard / Steckerbrett (plugboard):** අකුරු යුගල කේබල් වලින් මාරු කරන පුවරුව.
- **Reflector / Umkehrwalze (reflector):** ධාරාව rotors හරහා ආපසු යවන ස්ථිර රෝදය.
- **Crib (crib):** ciphertext එකක ඇතැයි අනුමාන කරන plaintext කොටසක්.
- **XOR (exclusive or):** bit දෙකක් වෙනස් නම් 1, සමාන නම් 0.
- **Depth (depth):** එකම යතුරු ප්‍රවාහයෙන් (key stream) සංකේතනය කළ පණිවිඩ දෙකක්.

### 2. Enigma හි settings ගණන (සම්මත හමුදා/ගුවන් හමුදා Enigma)

Alan Stripp ගේ NOVA ලිපිය (1999) සහ Bletchley Park දෙන අංක ගෙන අපි ගණනය කරමු:

**(අ) රෝද අනුපිළිවෙළ:** rotors 5 කින් 3 ක් තෝරා අනුපිළිවෙළට තැබීම: 5 × 4 × 3 = **60** (Stripp: "60 possible wheel orders"). Bletchley Park ට අනුව තෝරා ගැනීමට rotors 5 ක් ලැබුණේ 1938 දීය.

**(ආ) Rotor ස්ථාන:** එක් rotor එකකට ස්ථාන 26 → 26 × 26 × 26 = **17,576**. (Stripp මෙම අංකය "ring-settings" ලෙස හඳුන්වයි.)

**(ඇ) Plugboard, කේබල් 10:** Bletchley Park ට අනුව සම්මත ක්‍රියා පටිපාටිය කේබල් 10 කි. එවිට අකුරු 20 ක් යුගල 10 කට බැඳේ, 6 ක් නොබැඳී පවතී.
- අකුරු 26 පෙළට තැබිය හැකි ක්‍රම: 26!.
- නොබැඳුණු අකුරු 6 අතර අනුපිළිවෙළ වැදගත් නැත: ÷ 6!.
- යුගල 10 අතර අනුපිළිවෙළ වැදගත් නැත: ÷ 10!.
- එක් එක් යුගලය ඇතුළත (A–B = B–A): ÷ 2¹⁰.
- **26! ÷ (6! × 10! × 2¹⁰) = 150,738,274,937,250** (අපේ ගණනය). Bletchley Park මෙය වට කර 150,738,274,900,000 ලෙස දක්වයි. Stripp: "over 150 million million".

**(ඈ) එකතුව:** 60 × 17,576 × 150,738,274,937,250 = **158,962,555,217,826,360,000 ≈ 1.59 × 10²⁰**. Stripp: "about 159 million million million".

Bletchley Park Enigma I සඳහා **103,325,660,891,587,134,000,000** "possible encryptions" ලෙස දක්වයි. එය අපේ එකතුව මෙන් හරියටම **650** (= 26 × 25) ගුණයකි. Bletchley Park ව්‍යුත්පන්නය නොදක්වයි. එය rings ද ඇතුළත් කළ අගයක් බව පෙනුණත් අපි එය තහවුරු කළේ නැත.

**ඇයි බලහත්කාරයෙන් (brute force) සෙවිය නොහැක්කේ (ආදර්ශ):** තත්පරයකට settings මිලියනයක් පරීක්ෂා කළ හැකි යන්ත්‍රයකට වුවද 1.59 × 10²⁰ ÷ 10⁶ = 1.59 × 10¹⁴ s ≈ වසර මිලියන **5** කි. එබැවින් Bombe එකට තර්කනයෙන් plugboard කොටස කපා හැරීමට crib එකක් අවශ්‍ය විය. Plugboard ඉවත් කළ විට ඉතිරි වන්නේ 60 × 17,576 = **1,054,560** කි.

### 3. දුර්වලතාව: කිසිදා තමාටම නොවේ

Stripp ට අනුව ඕනෑම setting එකකදී B ඔබන විට T දැල්වේ නම් T ඔබන විට B දැල්වේ, සහ **B ඔබන විට කිසිදා B නොදැල්වේ**. ධාරාව reflector එකෙන් ආපසු හැරී වෙනත් මාර්ගයකින් එන නිසා මෙය සිදු වේ. එකම යන්ත්‍ර ස්ථානයට ආපසු එන්නේ ඔබීම් 16,900 (26 × 25 × 26) කට පසුව බැවින් පණිවිඩ අකුරු 250 කට සීමා කළ බවද Stripp කියයි.

**Crib එකක් තැබීම (ආදර්ශ):** ciphertext `QWERTZUWRTTQ` (අකුරු 12). එහි කොතැනක හෝ `WETTER` (ජර්මානු "කාලගුණය") ඇතැයි අනුමාන කරමු. ස්ථාන 7 ක් (0–6) ඇත. crib අකුරක් එම ස්ථානයේම ciphertext අකුරට සමාන නම් එම ස්ථානය **නොහැකිය**:

| ආරම්භය | Ciphertext කොටස | ගැටුම | ප්‍රතිඵලය |
|---|---|---|---|
| 0 | QWERTZ | නැත | හැකිය |
| 1 | WERTZU | W, E, T | නොහැකිය |
| 2 | ERTZUW | T | නොහැකිය |
| 3 | RTZUWR | R | නොහැකිය |
| 4 | TZUWRT | නැත | හැකිය |
| 5 | ZUWRTT | නැත | හැකිය |
| 6 | UWRTTQ | T | නොහැකිය |

ස්ථාන 7 න් 4 ක් ඉවත් විය. ඉතිරි **0, 4, 5** සඳහා පමණක් Bombe menu එකක් සකස් කිරීම වටී.

### 4. Lorenz ("Tunny"): XOR සහ depth

Bletchley Park ට අනුව Lorenz SZ42 හි cipher රෝද **12** ක් ඇති අතර, එක් එක් රෝදයක සැකසිය හැකි pins **23 සිට 61** දක්වා ඇත. Teleprinter අකුරක් bits 5 කි. යන්ත්‍රය යතුරු අකුරක් (key) නිපදවා plaintext අකුර සමඟ XOR කරයි.

**ආදර්ශ bits:** P = 10110, K = 01100.
- C = P ⊕ K = **11010**.
- ආපසු: C ⊕ K = 11010 ⊕ 01100 = **10110** = P. එකම යන්ත්‍රය සංකේතනය සහ විකේතනය දෙකම කරයි.

**Depth:** දෙවන පණිවිඩයක් P₂ = 00111 එකම K සමඟ: C₂ = 01011.
- C₁ ⊕ C₂ = 11010 ⊕ 01011 = **10001**.
- P₁ ⊕ P₂ = 10110 ⊕ 00111 = **10001**. යතුර අවලංගු වී ගියේය (K ⊕ K = 0). එවිට යතුර නොදැන plaintext දෙක ගැන තර්ක කළ හැක.

### 5. Colossus: වේගය සහ අංක (මූලාශ්‍රය අනුව)

**දින (මූලාශ්‍රය අනුව):**

| සිදුවීම | දිනය | මූලාශ්‍රය |
|---|---|---|
| Mk 1 Bletchley Park වෙත පැමිණීම | 1944 ජනවාරි 18 | Bletchley Park |
| එම භාර දීම | "1943 දෙසැම්බර් අග / 1944 ජනවාරි", 1944 පෙබරවාරි මුල වැඩ කරයි | TNMOC Colossus පිටුව |
| Mk 1 Bletchley හි මෙහෙයුම් | 1944 පෙබරවාරි 5 | TNMOC (2019 නිවේදනය) |
| Mk 2 | මැයි මාසයේ පැමිණ, 1944 ජූනි 1 අර්ධ මෙහෙයුම් | TNMOC (2019 නිවේදනය) |

**නල (valves) ගණන මූලාශ්‍රයෙන් මූලාශ්‍රයට සහ Mark අනුව වෙනස් වේ:**

| මූලාශ්‍රය | Mk 1 | Mk 2 |
|---|---|---|
| TNMOC Colossus පිටුව | — | "2500 valves" (Mark සඳහන් නැත) |
| Centre for Computing History | 1,500 | 2,500 |
| BBC News (2014) | 1,600 ("first prototype") | 2,400 |

**කියවීමේ වේගය:** Centre for Computing History ට අනුව Colossus කඩදාසි පටිය තත්පරයකට අකුරු **5,000** ක් කියවීය.

**ආදර්ශ ගණනය:** අකුරු 10,000 ක පණිවිඩ පටියක් (ආදර්ශ) එක් වරක් කියවීමට 10,000 ÷ 5,000 = **තත්පර 2**. රෝද settings 1,000 ක් (ආදර්ශ) සඳහා පටිය 1,000 වරක් කියවීම: 2,000 s ≈ **මිනිත්තු 33**. TNMOC ට අනුව යුද්ධය අවසන් වන විට Colossus යන්ත්‍ර 10 ක ආධාරයෙන් පුද්ගලයන් 550 ක් ඉහළ මට්ටමේ ජර්මානු සන්නිවේදන අකුරු මිලියන **63** ක් විකේතනය කර තිබුණි.

### 6. පැන්සලෙන් අභ්‍යාසය

1. Navy Enigma හි rotors **8** කින් 3 ක් තෝරයි. රෝද අනුපිළිවෙළ කීයද?
2. කේබල් **1** ක් පමණක් ඇති plugboard එකක යුගල ගණන කීයද? සූත්‍රයෙන් සහ සරල ක්‍රමයෙන්.
3. Ciphertext `XWETTAREQLMN` හි crib `WETTER` තැබිය හැකි ස්ථාන මොනවාද?
4. P = 01011, K = 11001. C කුමක්ද? C ⊕ K පරීක්ෂා කරන්න.
5. අකුරු 250 ක පණිවිඩයක් 16,900 ක කාල සීමාවෙන් කොපමණ ප්‍රතිශතයක්ද?
6. අකුරු 20,000 ක පටියක් තත්පරයකට අකුරු 5,000 බැගින් settings 500 කට කියවීමට කොපමණ කාලයක් ගතවේද?

(පිළිතුරු:
1. 8 × 7 × 6 = **336**.
2. 26! ÷ (24! × 1! × 2¹) = 26 × 25 ÷ 2 = **325**. සරලව: අකුරු 26 න් 2 ක් තෝරන ක්‍රම = C(26, 2) = 325.
3. ආරම්භ 0–6 පරීක්ෂා කරන්න: 0 (T), 1 (W, E, T, T, R), 2 (T), 3 (E), 6 (E) ගැටුම් ඇත. හැකි ස්ථාන **4 සහ 5** පමණි.
4. C = 01011 ⊕ 11001 = **10010**. C ⊕ K = 10010 ⊕ 11001 = 01011 = P.
5. 250 ÷ 16,900 ≈ **1.5%**.
6. 20,000 ÷ 5,000 = 4 s. 4 × 500 = 2,000 s ≈ **මිනිත්තු 33**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Alan Stripp, "How the Enigma Works", NOVA (PBS), 1999 නොවැම්බර් 9: https://www.pbs.org/wgbh/nova/article/how-enigma-works/ (රෝද අනුපිළිවෙළ 60, 17,576, "over 150 million million", "about 159 million million million", 16,900 කාල සීමාව, අකුරු 250, "keying B can never give B").
- Bletchley Park, "Enigmas of Bletchley Park": https://www.bletchleypark.org.uk/our-story/enigmas-of-bletchley-park/ (Enigma I: 103,325,660,891,587,134,000,000; කේබල් 10, 150,738,274,900,000; 1938 දී rotors 5; fixed reflector).
- Bletchley Park, "75 years since Colossus arrived at Bletchley": https://www.bletchleypark.org.uk/our-story/75-years-since-colossus-arrived-at-bletchley/ (1944 ජනවාරි 18; SZ42 රෝද 12, pins 23–61).
- The National Museum of Computing, "Colossus": https://www.tnmoc.org/colossus (භාර දීම "late December 1943 / January 1944", 1944 පෙබරවාරි මුල වැඩ; "2500 valves"; අකුරු මිලියන 63, පුද්ගලයන් 550, යන්ත්‍ර 10). TNMOC, "Celebration of the 75th anniversary of Colossus", 2019 මැයි 29: https://www.tnmoc.org/news-releases/2019/5/29/celebration-of-the-75th-anniversary-of-colossus (1944 පෙබරවාරි 5; Mk II 1944 ජූනි 1).
- Centre for Computing History, "The Colossus Mark 1 computer is delivered to Bletchley Park": https://www.computinghistory.org.uk/det/6014/The-Colossus-Mark-1-computer-is-delivered-to-Bletchley-Park/ (Mk 1 නල 1,500; Mk 2 නල 2,500, 1944 ජූනි 1; අකුරු 5,000/s).
- BBC News, "Veterans gather for Colossus 70th anniversary", 2014: https://www.bbc.co.uk/news/technology-26033681 (Mk 1 නල 1,600; Mk 2 නල 2,400; 1944 පෙබරවාරි 5 පළමු වරට පණිවිඩ බිඳීමට භාවිත කිරීම).

Plugboard සූත්‍රය, 1.59 × 10²⁰ එකතුව සහ 650 අනුපාතය අපේ ගණනය කිරීම් වේ. වසර මිලියන 5, crib ciphertext, XOR bits, අකුරු 10,000 පටිය සහ settings 1,000 ආදර්ශ (illustrative) අංක වේ.


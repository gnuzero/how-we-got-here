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

## ගැඹුරින්: Yield ගණිතය, AMD හි 0.59× සහ UCIe වයරයේ මිල

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** chiplets, die yield හෝ advanced packaging (interposer, UCIe) ගැන සිංහල ලිපියක්, පාඩමක් හෝ වීඩියෝවක් අපට හමු නොවීය ("chiplet sinhala", "AMD chiplet design sinhala" සෙවුම්). එබැවින් මෙම කොටස Karlsruhe Institute of Technology (KIT) හි දේශන සටහන්, AMD හි Hot Chips 29 ඉදිරිපත් කිරීම සහ UCIe Consortium හි නිල ඉදිරිපත් කිරීම යන මූලාශ්‍රවලින් ගණිතය පියවරෙන් පියවර ගොඩනඟයි.

### 1. මූලික පද

- **Yield:** wafer එකක නිපදවූ dies අතරින් හොඳින් ක්‍රියා කරන dies වල භාගයයි.
- **දෝෂ ඝනත්වය (defect density, d හෝ D₀):** වර්ග ඒකකයකට සාමාන්‍ය දෝෂ ගණනයි (උදා. cm² එකකට දෝෂ).
- **Poisson ආකෘතිය (Poisson model):** දෝෂ wafer එක පුරා අහඹු ලෙස, ඒකාකාරව විසිරී ඇතැයි උපකල්පනය කරන yield ආකෘතියයි.
- **පොකුරු වීම (clustering, α):** දෝෂ එක තැනක ගොනු වීමයි. එවිට සමහර dies වල දෝෂ කිහිපයක් ඇති අතර, අනෙක් dies පිරිසිදුව ඉතිරි වේ.
- **Known-good-die (KGD):** package එකට එකලස් කිරීමට පෙර පරීක්ෂා කර, හොඳ බව තහවුරු කළ die එකකි.
- **Shoreline bandwidth:** die දාරයේ මිලිමීටරයකින් යැවිය හැකි දත්ත ප්‍රමාණයයි (GB/s/mm).
- **Bump pitch:** die එක package එකට සම්බන්ධ කරන ලෝහ "bumps" අතර පරතරයයි (µm).

### 2. Yield සමීකරණය

KIT හි *Testing Digital Systems I* දේශනය 3 (M. Tahoori, 2010) පහත සමීකරණ දක්වයි:

- **Negative binomial:** Y = (1 + A·d/α)^(−α)
- **පොකුරු නොවූ දෝෂ (α = ∞, Poisson):** Y = e^(−A·d)
- එහි උදාහරණ: A·d = 1.0 නම්, α = 0.5 සමඟ Y = 0.58, Poisson සමඟ Y = 0.37. Poisson අගය "too pessimistic" (අධික ලෙස අශුභවාදී) බව එහි සඳහන් වේ (slide 24).
- එම දෝෂ ගණනම පොකුරු වූ විට wafer yield එක 12/22 = 0.55 සිට 17/22 = 0.77 දක්වා ඉහළ යන බව රූපයකින් පෙන්වයි (slide 20).

**ප්‍රධාන අදහස:** A (ප්‍රදේශය) **ඝාතයේ (exponent)** ඇත. die ප්‍රදේශය දෙගුණ කළ විට yield එක අඩු වන්නේ දෙගුණයකින් නොවේ. Poisson ආකෘතියේදී yield එක **වර්ග** වේ (Y → Y², මන්ද e^(−2A·d) = (e^(−A·d))²). Negative binomial ආකෘතියේදී අඩු වීම ඊට වඩා මෘදුය. උදා. α = 0.5, A·d = 1 → Y = 0.58, A·d = 2 → Y = (1 + 4)^(−0.5) ≈ 0.45 (0.58² ≈ 0.34 නොවේ).

### 3. වැඩ කළ උදාහරණය: AMD EPYC (2017)

AMD හි Hot Chips 29 ඉදිරිපත් කිරීම (Lepak සහ තවත් අය, 2017), slide 11:
- EPYC යනු **213 mm²** dies 4 කි. එනම් package එකකට සිලිකන් **852 mm²** කි.
- උපකල්පිත monolithic EPYC එකක් **~777 mm²** වනු ඇත. die-to-die Infinity Fabric PHYs සහ අනුපිටපත් logic ඉවත් වන බැවිනි.
- එබැවින් MCM (multi-chip module) ප්‍රදේශ overhead එක ≈ **10%** කි.
- එහෙත් cores 32 ක die පිරිවැය: monolithic = **1.0×**, MCM = **0.59×**.
- 0.59× අගය "AMD internal yield model using historical defect density data for mature technologies" මත පදනම් වේ (slide 24 පාදසටහන).

AMD හි ආකෘතිය ප්‍රකාශයට පත් කර නැත. එහෙත් සරල Poisson ආකෘතියකින් එම දිශාව නැවත ගණනය කළ හැකිය. **d = 0.1 cm⁻² = 0.001 mm⁻²** යන්න අපේ ආදර්ශ අගයයි.

| | ප්‍රදේශය | Y = e^(−A·d) | හොඳ ඒකකයකට සිලිකන් (A ÷ Y) |
|---|---|---|---|
| Monolithic | 777 mm² | e^(−0.777) ≈ **0.46** | 777 ÷ 0.46 ≈ **1,690 mm²** |
| Chiplet එකක් | 213 mm² | e^(−0.213) ≈ **0.81** | — |
| පරීක්ෂිත chiplets 4 | 4 × 213 | එක් එක් die එක 0.81 | 852 ÷ 0.81 ≈ **1,054 mm²** |

අනුපාතය 1,054 ÷ 1,690 ≈ **0.62×** වේ. මෙහි wafer දාර අලාභ, පරීක්ෂණ සහ package පිරිවැය ඇතුළත් නැත. **0.59× යනු AMD හි අභ්‍යන්තර (ප්‍රකාශයට පත් නොකළ) ආකෘතියේ ප්‍රතිඵලයයි. අපේ 0.62× එය තහවුරු කිරීමක් නොවේ; අපි පෙන්වන්නේ දිශාව පමණි.** අගයන් දෙක ආසන්න වීම බොහෝ දුරට අප තෝරාගත් d නිසාය: d = 0.05 cm⁻² නම් අනුපාතය ≈ 0.83×, d = 0.2 cm⁻² නම් ≈ 0.36× වේ. එහෙත් මෙම d අගයන් තුනේදීම chiplets ලාභදායී වේ. අපේ ආදර්ශයේ (d = 0.1) සිලිකන් **10% ක් වැඩිපුර** භාවිතා කළත්, හොඳ ඒකකයක පිරිවැය **~40%** කින් අඩු වේ.

**KGD නොමැති නම් (වැදගත් උගුල):** chiplets 4 පරීක්ෂා නොකර එකලස් කළහොත් package yield එක = 0.81⁴ = e^(−0.852) ≈ **0.43** වේ. එය **852 mm²** monolithic die එකක yield එකට හරියටම සමානය! chiplet වාසිය ලැබෙන්නේ නරක dies package කිරීමට **පෙර** ඉවත් කළහොත් පමණි. yield ජයග්‍රහණය පැමිණෙන්නේ "කුඩා dies" නිසාම නොව, "කුඩා dies තනි තනිව තෝරා ගත හැකි" නිසාය.

### 4. Packaging: වයරයේ මිල (UCIe 1.0)

UCIe Consortium හි 2022 මාර්තු 2 නිල ඉදිරිපත් කිරීමේ "UCIe 1.0: Characteristics and Key Metrics" වගුව (PDF p.7):

| | Standard package | Advanced package |
|---|---|---|
| දත්ත අනුපාතය | 4–32 GT/s | 4–32 GT/s |
| පළල (cluster එකකට) | lanes 16 | lanes 64 |
| Bump pitch | 100–130 µm | 25–55 µm |
| ළඟා වීම (reach) | ≤ 25 mm | ≤ 2 mm |
| Shoreline B/W | 28–224 GB/s/mm | 165–1317 GB/s/mm |
| බල කාර්යක්ෂමතා ඉලක්කය | 0.5 pJ/b | 0.25 pJ/b |
| ප්‍රමාදය (Tx + Rx) | < 2 ns | < 2 ns |

**ගණනය 1: bumps ඝනත්වය.** වර්ග mm එකක bumps ගණන 1/pitch² අනුව වෙනස් වේ. UCIe වගුවේ ඇස්තමේන්තුවේ pitches (Standard 110 µm, Advanced 45 µm) ගත් විට, (110 ÷ 45)² ≈ **6×** bumps ලැබේ.

**ගණනය 2: advanced module එකක් 32 GT/s දී.** lanes 64 × 32 Gb/s ÷ 8 = **256 GB/s** (එක් දිශාවකට).

**ගණනය 3 (ආදර්ශ ඉල්ලුමක්):** chiplets දෙකක් අතර **1 TB/s** (= 1,000 GB/s) අවශ්‍ය යැයි සිතමු.
- **දාර දිග:**
  - Advanced: 1,000 ÷ 1,317 ≈ **0.76 mm**
  - Standard: 1,000 ÷ 224 ≈ **4.5 mm**
- **බලය:** 1 TB/s = 8 × 10¹² bit/s.
  - Advanced: × 0.25 pJ = **2 W**
  - Standard: × 0.5 pJ = **4 W**

Post එකේ "Packaging වයර් එක ආපසු මිලදී ගත යුතුය" යන්න අංකවලින් මෙයයි. advanced package එකක් (silicon interposer හෝ bridge) එකම දත්ත ප්‍රවාහය දාරයේ කුඩා කොටසකින්, අඩු ශක්තියකින් ගෙන යයි. එහෙත් reach එක ≤ 2 mm බැවින් chiplets ඉතා ළඟින් තැබිය යුතුය.

### 5. පැන්සලෙන් අභ්‍යාසය

1. A·d = 0.5 නම් Poisson yield කීයද? α = 0.5 සමඟ negative binomial yield කීයද?
2. d = 0.001 mm⁻² (ආදර්ශ) නම්, 400 mm² monolithic die එකක yield කීයද? 100 mm² chiplet එකක yield කීයද? හොඳ ඒකකයකට සිලිකන් ප්‍රමාණය දෙකේම (KGD සහිතව) ගණනය කරන්න.
3. ඉහත chiplets 4 පරීක්ෂා නොකර එකලස් කළහොත් package yield කීයද?
4. UCIe standard module එකක් (lanes 16) 32 GT/s දී එක් දිශාවකට කොපමණ bandwidth දෙයිද?
5. 500 GB/s සඳහා 0.5 pJ/b දී බලය කීයද?

(පිළිතුරු:
1. e^(−0.5) ≈ **0.61**; (1 + 0.5/0.5)^(−0.5) = 2^(−0.5) ≈ **0.71**.
2. e^(−0.4) ≈ **0.67** → 400 ÷ 0.67 ≈ **597 mm²**; e^(−0.1) ≈ **0.90** → 400 ÷ 0.90 ≈ **442 mm²** (≈ 0.74×).
3. 0.90⁴ = e^(−0.4) ≈ **0.67**. monolithic එකට සමානය; වාසියක් නැත.
4. 16 × 32 ÷ 8 = **64 GB/s**.
5. 4 × 10¹² bit/s × 0.5 pJ = **2 W**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- M. Tahoori, *Testing Digital Systems I, Lecture 3: Quality Models and Yield Analysis*, Karlsruhe Institute of Technology, 2010. slides 20, 23–24 (PDF pp. 10, 12) භාවිත කළෙමු. <https://cdnc.itec.kit.edu/downloads/03_Quality_models_and_Yield_analysis.pdf>
- K. Lepak, G. Talbot, S. White, N. Beck, S. Naffziger (AMD), *The Next Generation AMD Enterprise Server Product Architecture*, Hot Chips 29, 2017. slides 11 සහ 24 (පාදසටහන) භාවිත කළෙමු. Hot Chips නිල ලේඛනාගාරය: <https://old.hotchips.org/wp-content/uploads/hc_archives/hc29/HC29.22-Tuesday-Pub/HC29.22.90-Server-Pub/HC29.22.921-EPYC-Lepak-AMD-v2.pdf>
- UCIe Promoters, *Universal Chiplet Interconnect Express (UCIe): Building an open ecosystem of chiplets for on-package innovations*, 2022 මාර්තු 2. PDF p.7 භාවිත කළෙමු. uciexpress.org නිල පිටපත: <https://www.uciexpress.org/_files/ugd/0c1418_03880d62ef644eb8adf2838225488272.pdf>

දෝෂ ඝනත්වය 0.1 cm⁻² සහ 1 TB/s ඉල්ලුම ආදර්ශ අගයන් වේ. වගු අගයන් ඉහත මූලාශ්‍රවලින් ගත් ඒවාය.


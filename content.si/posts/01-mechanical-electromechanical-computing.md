---
title: "යාන්ත්‍රික සහ විද්‍යුත් යාන්ත්‍රික පරිගණකකරණය"
date: 2026-01-01
draft: false
phase: "1 — පදනම්: යාන්ත්‍රික සිට රික්තක-නල පරිගණකකරණය දක්වා"
series_index: 1
tags: []
summary: "ගියර් වැඩසටහනේ අදහස බල කළේය; ඝර්ෂණය විදුලිය බල කළේය"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

පරිගණකකරණය විදුලිය සමඟ ආරම්භ නොවීය. එය ආරම්භ වූයේ ගියර් සමඟිනි.

## Babbage ගේ එන්ජින්

1822 දී Charles Babbage විසින් Difference Engine යෝජනා කළේය — අන්තර්ලිප්ත ගියර් සහ තීරු රෝද හරහා පමණක්, සීමිත අන්තරයන්ගේ ක්‍රමය (method of finite differences) භාවිතයෙන් බහුපද ශ්‍රිත ගණනය කළ හැකි යාන්ත්‍රික ගණක යන්ත්‍රයකි. විදුලියක් නැත. සෑම තීරුවක්ම ඉලක්කමක් විය; "1" ගෙන යාම භෞතික සිදුවීමක් විය: ගියර් දතක් අසල්වැසියා අල්ලා කරකැවීම.

ඔහු සම්පූර්ණ පරිමාණ Difference Engine එකක් කිසි විටෙකත් අවසන් කළේ නැත — අරමුදල් සහ නිෂ්පාදන ඉවසීම් දෙකම ඔහුට එරෙහි විය — නමුත් ඔහුගේ අනුගාමී ව්‍යාපෘතිය වන Analytical Engine සැබෑ පූර්වජයා ය. එයට "store" (මතකය) සහ "mill" (අංක ගණිත ඒකකය) තිබූ අතර, එය ක්‍රමලේඛනය කළ හැකි විය. උපදෙස් පැමිණියේ පන්ච් කාඩ් වලින් — කර්මාන්තශාලා බිමේ දැනටමත් තිබූ කාර්මික යන්ත්‍රයකින් ණයට ගත් අදහසකි.

## Jacquard රෙදි යන්ත්‍රය

එම යන්ත්‍රය වූයේ Jacquard රෙදි යන්ත්‍රයයි. Joseph-Marie Jacquard ගේ 1800 දශකයේ මුල් drawloom එකක් shuttle එකේ සෑම ගමනකදීම කුමන නූල් ඔසවන්නේද යන්න තීරණය කිරීමට පන්ච් කාඩ් දාමයක් භාවිතා කළේය: සිදුරක් → ඔසවන්න, සිදුරක් නැත → අවහිර කරන්න. කාඩ් වෙනස් කරන්න, රටාව වෙනස් වේ. රෙදි යන්ත්‍රයට "සේද brocade" යනු කුමක්දැයි දැනුණේ නැත; එය ඔසවන්න/නොඔසවන්න තීරණවල ස්ථිර, භෞතිකව කේතනය කළ අනුක්‍රමයක් ක්‍රියාත්මක කළේය.

එය Babbage අනුගමනය කළ වියුක්තීකරණයයි: වැඩසටහනක් යනු ඒවා ක්‍රියාත්මක කරන යන්ත්‍රයෙන් වෙන් වූ උපදෙස් අනුක්‍රමයකි. Ada Lovelace එම වෙන්කිරීමෙන් අදහස් වූ දේ දුටුවාය — නිවැරදි කාඩ් නිර්මාණය කළහොත් යන්ත්‍රයට සංඛ්‍යා පමණක් නොව *ඕනෑම* සංකේත හැසිරවිය හැක. Menabrea ගේ Analytical Engine පත්‍රිකාව පිළිබඳ ඇගේ සටහන් තුළ බොහෝ විට පළමු ප්‍රකාශිත පරිගණක වැඩසටහන ලෙස හඳුන්වන දේ ඇතුළත් ය (Bernoulli සංඛ්‍යා).

**පිටවීමේ දොර:** Ada Lovelace ගේ Analytical Engine පිළිබඳ *Notes* (Menabrea ගේ පරිවර්තනය මත) — Bernoulli-සංඛ්‍යා සටහන සහ "ඕනෑම සංකේත" තර්කය සඳහා ප්‍රාථමික පෙළ.

## මෙය ඊට පසු සියල්ලටම වැදගත් වන්නේ ඇයි

උපදෙස් කට්ටි, ගබඩා කළ වැඩසටහන්, පාලනය datapath එකෙන් වෙන් කිරීම — සියල්ලටම මෙහි මුල් ඇත. මාධ්‍යය සම්පූර්ණයෙන්ම වෙනස් වේ (relays, නල, ට්‍රාන්සිස්ටර); තාර්කික හැඩය වෙනස් නොවේ: උපදෙස් අනුක්‍රමයක්, ක්‍රියාත්මක ඒකකයක්, පියවර අතර තත්ත්වය රඳවන ගබඩාවක්.

යාන්ත්‍රික පරිගණකකරණයට *නොහැකි* වූයේ පරිමාණයයි. ගියර් දාමවල ඝර්ෂණය, backlash සහ ඉවසීම් එකතුව ඇත; නිරවද්‍යතාවයේ සෑම අමතර ඉලක්කමක්ම යන්ත්‍රය විශ්වාසනීයව තැනීම දුෂ්කර කළේය. එම උඩුකුරු සීමාව — අදහස් නොමැතිකම නොව — පරිගණකකරණය විද්‍යුත් මාරු කිරීම කරා තල්ලු කළේය. ඊළඟට: relays, සහ ගෘහ නිර්මාණ ශිල්පය WWII වෙත ගෙන ගිය විද්‍යුත් යාන්ත්‍රික තර්කය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

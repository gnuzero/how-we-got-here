---
title: "Moore's Law"
date: 2026-01-01
draft: false
phase: "8 — ක්‍රියාවලි නෝඩ් සහ Fabrication"
series_index: 50
tags: []
summary: "Moore ගේ නිරීක්ෂණය ආර්ථික සංරචක ගණන විය — ට්‍රාන්සිස්ටර ගණන තවමත් නැගේ; clocks සහ cost-per-transistor වෙනස් කතා කියයි"
image_prompt: "Graph infographic: transistor count, clock speed, and cost-per-transistor over time, clean data visualization style"
video_prompt: "15-second animation: three trend lines animating over a timeline from 1970 to 2026, clean data-viz motion graphics"
schematics: "Diagram: three-panel graph — transistor count, clock frequency, cost-per-transistor over time"
---

"Moore's Law" නිරන්තරයෙන් මළ යැයි ප්‍රකාශ කෙරේ, නැවත ජීවිතයට ගෙන එනු ලැබේ, සහ කථිකයාට අවශ්‍ය ඕනෑම දෙයක් අදහස් කිරීමට දිගු කෙරේ. පසුගිය පෝස්ට්වල fabrication දුෂ්කර වී ඇති ආකාරය දුටු පසු, Gordon Moore නිරීක්ෂණය කළේ කුමක්ද — සහ ඇසුරුම් කළ ප්‍රවණතා කුමන ඒවා සැබවින්ම වෙනස් සීමාවන්ද — නිශ්චිතව කීම වටී.

## Moore ඇත්තටම ලිව්වේ කුමක්ද

Gordon Moore ගේ 1965 *Electronics* ලිපිය නිරීක්ෂණය කළේ සංරචක *ගණන* ය: එක් integrated circuit එකක ආර්ථිකව තැබිය හැකි සංරචක ගණන දළ වශයෙන් වාර්ෂික වේගයකින් දෙගුණ වෙමින් තිබුණි (1975 පමණ දළ වශයෙන් සෑම වසර දෙකකට වරක් ලෙස සංශෝධනය විය). එම හිමිකම්පත *නොවන* දේ සලකන්න: එය clock speed නීතියක් නොවේ, තනි-ත්‍රෙඩ් කාර්ය සාධනය පිළිබඳ පොරොන්දුවක් නොවේ, සහ "ආර්ථිකව" යන වචනය ඉක්මවා cost per transistor පිළිබඳ වෙනම ප්‍රමේයයක් නොවේ. ජනප්‍රිය භාවිතය බොහෝ විට එම මෙට්‍රික එක් slogan එකක් යටතේ ඇසුරුම් කරයි; යටින් ඇති ධාවක වෙනස් ය.

## ට්‍රාන්සිස්ටර ගණන: තවමත් නැගේ

Moore රාමු කළ ආකාරයෙන් මනින ලද — චිපයකට සංරචක (අද: ට්‍රාන්සිස්ටර) — ප්‍රවණතාව දශක ගණනක් රැඳුණේය සහ තවමත් නැගේ, Posts 48 සහ 49 හි lithography සහ ට්‍රාන්සිස්ටර-ව්‍යුහ ප්‍රගති මගින් ධාවනය වෙමින්. නවීන ඉහළ-අන්ත චිප ට්‍රාන්සිස්ටර බිලියන ගණනක් රඳවා ගනී — පසුගිය දශක පහකට පෙර Intel හි 4004 (Post 18) හි දළ වශයෙන් 2,300 ට එරෙහිව.

## Clock Speed: වෙනස් බිත්තියක්

Clock සංඛ්‍යාතය දශක ගණනක් ට්‍රාන්සිස්ටර ගණන සමඟ නැග්ගේය, පසුව 2005 පමණ සමතලා විය — ට්‍රාන්සිස්ටර scaling නැවතුණු නිසා නොව, Post 36 හි බල/තාප බිත්තිය නිසා. එය "Moore's Law හි මරණය" ලෙස හැඳින්වීම මෙට්‍රික දෙකක් එකට මිශ්‍ර කරයි. Clock සමතලය හරහා ගණන නැගීම දිගටම ගියේය; කර්මාන්තය නව ට්‍රාන්සිස්ටර වැඩි cores සහ විශේෂිත on-chip ක්‍රියාකාරිත්වය (Post 17) සඳහා වියදම් කළේය, එක් core එකක සංඛ්‍යාතය තවදුරටත් තල්ලු කිරීමට නොවේ.

## Cost Per Transistor: ඝර්ෂණය පෙනෙන තැන

Moore ගේ රාමුවේ ආර්ථික භාගය — ඝනත්වය නැගුණු විට ලාභ සංරචක — මෑත leading-edge ඝර්ෂණය පැහැදිලිතම තැනයි. EUV මෙවලම් (Post 48) අසාමාන්‍ය ලෙස මිල අධිකයි; එක් එක් node පරම්පරාවට වඩා සංකීර්ණ process පියවර අවශ්‍ය වේ. දශක ගණනක්, wafer එකකට වැඩි ට්‍රාන්සිස්ටර absolute චිප පිරිවැය රැඳුණත් හෝ මධ්‍යස්ථව නැගුණත් cost per transistor පහළට ගෙන ගියේය. නවතම nodes වලදී එම සම්බන්ධතාව දුර්වල වී ඇත: ඝනත්වය තවමත් නැගේ; cost-per-transistor වැඩිදියුණුව ඓතිහාසික අනුපාතවල ස්වයංක්‍රීය නොවේ.

## මෙට්‍රික තුනක්, slogan එකක්

ට්‍රාන්සිස්ටර ගණන: තවමත් පරිමාණය වේ. Clock speed: දන්නා තාප හේතු නිසා 2000 ගණන්වල මැද සිට සමතලයි. Cost per transistor: බොහෝ nodes වල absolute වශයෙන් තවමත් වැඩිදියුණු වෙමින්, leading edge හි ලේඛනගත ඝර්ෂණය සමඟ. ඒවා එක් "නීතියක්" ලෙස සැලකීම කුමන සීමාව තවමත් අස්වැන්න දෙයිද සහ කුමන එක මෙම අදියර නම් කරමින් සිටින ගෘහ නිර්මාණ හැරීම් බල කළේද යන්න සඟවයි.

**පිටවීමේ දොර:** Gordon E. Moore, "Cramming more components onto integrated circuits" (*Electronics*, April 19, 1965) — පසුව Moore's Law යන අන්වර්ථ නාමය ලැබුණු ආර්ථික සංරචක-ගණන් නිරීක්ෂණයේ ප්‍රාථමික ප්‍රකාශනය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

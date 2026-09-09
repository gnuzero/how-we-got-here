---
title: "එය යන්නේ කොහේටද"
weight: 62
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 62
tags: []
summary: "එම රටාවම ඉදිරියට — chiplets, package එකට සමීප optics, මතකයට සමීප compute"
image_prompt: "Forward-looking infographic showing chiplet AI accelerators, silicon photonics, and in-memory compute, clean speculative technical illustration style"
video_prompt: "20-second animation: optical interconnect, chiplet assembly, and in-memory compute shown in three panels, clean forward-looking motion graphics"
schematics: "Diagram: silicon photonics transceiver + chiplet AI accelerator package + processing-in-memory block diagram"
---

මෙම මාලාව ආරම්භ වූයේ ගියර් සහ relays සමඟ ය — යාන්ත්‍රික සහ විද්‍යුත් යාන්ත්‍රික පරිගණකකරණය, නවීන මිනුමෙන් ප්‍රාථමික, නමුත් පසුව සෑම නැවතුමක්ම පිරිපහදු කළ එම තාර්කික හැඩයම (උපදෙස්, ක්‍රියාත්මක කිරීම, තත්ත්වය). එය වසා දමන්නේ පසුපසට නොව ඉදිරියට බලමින්: AI දෘඪාංගය ක්‍රියාශීලීව ගමන් කරන දිශා තුනක්, එක එකක් මෙම මාලාවේ දැනටමත් ඇති අදහස්වල දිගුවක්. සොයා ගත් roadmap එකක් නැත — කශේරුකාව දැනටමත් ඉගැන්වූ ප්‍රතිචාර *වර්ගය* පමණි.

## Chiplet AI Accelerators

Post 51 chiplets yield පිළිතුරක් ලෙස ආවරණය කළේය; Post 54 compute අසල bandwidth සඳහා HBM packaging ආවරණය කළේය. ස්වාභාවික සංයෝගය දෙකම ය: බෙදාහැරුණු compute chiplets — සමහර විට වෙනස් ලෙස විශේෂීකරණය වූ — එකතුව stacked HBM, එක් package එකක් ඇතුළත ඉහළ-ඝනත්ව interposer හෝ advanced-substrate සබැඳි මගින් බැඳුණු. Yield සහ විශේෂීකරණය සඳහා බෙදන්න; බෙදීම නව interconnect බිත්තියක් නොවන පරිදි packaging වියදම් කරන්න. එම රටාවම, AI සිලිකන් වෙත යොදන ලදී.

## Package එකට සමීප Optics

කෙටි in-rack සබැඳි තවමත් බොහෝ විට තඹ ය. Rack-to-rack සහ බොහෝ leaf–spine AI fabrics දැනටමත් pluggable transceivers සමඟ optical fiber භාවිතා කරයි. විද්‍යුත් SerDes තවමත් reach, බලය, සහ ඝනත්ව සීමාවන්ට මුහුණ දෙයි. Silicon photonics සහ co-packaged optics E/O පරිවර්තනය switch හෝ GPU package එකට තල්ලු කරයි — දිගු විද්‍යුත් traces එකතුව විවික්ත pluggables ට එරෙහිව SerDes/DSP බලය සහ reach පිරිවැය කපමින්. "පළමු වරට ආලෝකය හඳුන්වා දීම" නොවේ, නමුත් Posts 56 සහ 61 කී පරිදි GPU සහ racks අතර bandwidth වැඩි වැඩියෙන් බඳින තැනට පරිවර්තනය ගෙන යාම.

## Processing-in-Memory

Post 35 හි මතක බිත්තිය HBM (54) සහ weight-stationary systolic dataflow (58) හරහා ප්‍රතිධ්වනි විය — චලනය අවම කරන්න, හෝ එය පුළුල් කරන්න. Processing-in-memory තව දුරටත් යයි: චලනයේ කොටසක් කිසිදා සිදු නොවන පරිදි මතක අරාව *ඇතුළත*ම සමහර compute කරන්න. පුළුල්ව යෙදවූ තාක්ෂණයක් ලෙස මුල් ය; තවමත් බිත්තිය එහි මූලයේදීම පහර දීමට සැබෑ උත්සාහයක් — ඒ වටා ධුරාවලි විස්තර කිරීම පමණක් නොවේ.

## අඛණ්ඩ නූල

එක් එක් දිශාව නැවතත් මාලා රටාවයි: බඳින සීමාව නිශ්චිතව නම් කරන්න, පසුව තදින්ම තල්ලු කිරීම පමණක් නොව ව්‍යුහය වෙනස් කරන්න. යාන්ත්‍රික මාරුව බැඳුණු විට relays වෙනුවට tubes ආවේය; බලය සහ විශ්වසනීයත්වය බැඳුණු විට tubes වෙනුවට ට්‍රාන්සිස්ටර; clock බිත්තිය බැඳුණු විට තනි-core scaling වෙනුවට multicore; yield බැඳුණු විට monolithic dies වෙනුවට chiplets. මතක චලනය — compute throughput පමණක් නොවේ — විශාලතම AI workloads සඳහා බඳින අතර, එබැවින් packaging, package එකට සමීප optics, සහ මතකයට සමීප compute ජීවමාන පිළිතුරු ය.

රිලේ සිට අවධානය දක්වා: තාක්ෂණය සෑම පියවරකදීම පාහේ හඳුනා ගත නොහැකි තරම් වෙනස් විය. ඉංජිනේරු තර්කය — සැබෑ සීමාව හඳුනා ගන්න, පසුව ගෘහ නිර්මාණය වෙනස් කරන්න — වෙනස් වී නැත, සහ එය වෙනස් වනු ඇතැයි බලවත් හේතුවක් නැත.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

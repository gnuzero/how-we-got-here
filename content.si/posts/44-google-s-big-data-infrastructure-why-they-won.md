---
title: "Google හි Big Data යටිතල පහසුකම — ඔවුන් ජයග්‍රහණය කළේ ඇයි"
weight: 45
date: 2026-01-01
draft: false
phase: "7 — බෙදාහැරුණු පද්ධති, Big Data සහ Orchestration"
series_index: 44
tags: []
summary: "Web-පරිමාණ දත්ත failure-as-normal ගබඩාව බල කළේය, පසුව cluster එක සඟවන ක්‍රමලේඛන ආකෘතියක් — GFS, MapReduce, Bigtable"
image_prompt: "System diagram of the Google File System with chunkservers and a master node, alongside a MapReduce job splitting into map and reduce phases across a cluster, clean distributed-systems textbook diagram style"
video_prompt: "25-second animation: a large dataset being split across chunkservers in a distributed file system, then processed in parallel by a MapReduce job and recombined, clean technical animation"
schematics: "Diagram: GFS architecture (master/chunkserver) + MapReduce data flow (map→shuffle→reduce) + Bigtable sparse table model"
---

1990 ගණන්වල අග භාගය වන විට සමාගම් කිහිපයක් web search ගොඩනඟමින් සිටියහ. Google ජයග්‍රහණය කළේ ranking බුද්ධිමත්කමෙන් පමණක් නොවේ — PageRank වැදගත් විය, නමුත් කල් පවතින වාසිය යටිතල පහසුකම විය: එක් යන්ත්‍රයක් කිසිදා ප්‍රමාණවත් නොවන විට අඛණ්ඩව වෙනස් වන web එකක් ගබඩා කර සැකසිය හැකි පද්ධති.

## සීමාව: Web එක එක් පෙට්ටියක් ඉක්මවා ගියේය

"සම්පූර්ණ web එක" indexing කිරීම යනු ඕනෑම තනි disk එකකට හෝ මතකයකට වඩා විශාල දත්ත කට්ටලයක්, එක්-වරක් snapshot එකක් ලෙස නොව අඛණ්ඩව පැමිණෙන එකකි. Phase 3 *එක්* යන්ත්‍රයක් වේගවත් කළේය. මෙම ගැටලුව වෙනස්ය: ඕනෑම එකකට වඩා විශාල දෙයක් ඒවා එක්ව රඳවා සැකසන පරිදි *බොහෝ* යන්ත්‍ර සම්බන්ධීකරණය කරන්න.

## Failure සාමාන්‍යයි — එබැවින් ගබඩාව එය උපකල්පනය කළ යුතු විය

Google File System (Ghemawat, Gobioff, සහ Leung, SOSP 2003) බොහෝ filesystems තවමත් ව්‍යතිරේකයක් ලෙස සැලකූ නිර්මාණ උපකල්පනයකින් පටන් ගත්තේය: දහස් ගණනක් commodity යන්ත්‍ර සමඟ, දෘඪාංග failure යනු රුටීනයකි. ගොනු විශාල chunks වලට බෙදන්න, එක් එක් chunk එක chunkservers හරහා replicate කරන්න, සහ chunks ජීවත් වන තැන master එකකට ලුහුබැඳීමට ඉඩ දෙන්න — එවිට යන්ත්‍රයක් අහිමි වීම අර්බුදයක් ලෙස හසුරුවනු වෙනුවට ස්වයංක්‍රීයව අවශෝෂණය වේ. එය Post 42 හි fabric වැඩ දත්ත මධ්‍යස්ථානයක් ඇතුළත ගන්නා එකම *වර්ගයේ* ඔට්ටුවයි: අර්ධ failure හි සාමාන්‍ය අවස්ථාව සඳහා ඉංජිනේරු කරන්න.

## Cluster එක නැවත සොයා නොගෙන සැකසීම

ගබඩාව පමණක් ප්‍රමාණවත් නොවීය. එම පරිමාණයේ සැකසීමට සෑම ඉංජිනේරුවෙකුම distribution සහ recovery නැවත සොයා නොගන්නා ක්‍රමලේඛන ආකෘතියක් අවශ්‍ය විය. MapReduce (Dean සහ Ghemawat, OSDI 2004) හූක් දෙකක් දුන්නේය — record එකකින් key-value pairs නිකුත් කරන **map** එකක්, සහ යතුරක් බෙදා ගන්නා අගයන් aggregate කරන **reduce** එකක් — සහ *පද්ධතිය* split, parallel map, යතුර අනුව shuffle/sort, parallel reduce, සහ අසාර්ථක කාර්යයන් retry කිරීම හැසිරවීය. සීමාව භෞතික තරමටම cognitive විය: cluster එක සඟවන්න එවිට රැකියාවේ තර්කය කුඩාවට රැඳිය හැක.

## ලාභ Bytes මත ව්‍යුහය

Bigtable (Chang et al., OSDI 2006) ආශ්‍රිත අවශ්‍යතාවකට පිළිතුරු දුන්නේය: web පරිමාණයේ sparse structured ගබඩාව — URLs ලෙස rows, crawled versions හෝ metadata ලෙස columns, බොහෝ cells හිස් — යටින් GFS මත ගොඩනැගුණු. නිර්මාණය කර්මාන්තය පසුව NoSQL ලෙස හැඳින්වූ බොහෝ දේ හැඩගැස්වීය; සම්බන්ධක පටකය එකමයි: failure-ඉවසන තොග ගබඩාවක් සහ batch ක්‍රමලේඛන ආකෘතියක් පවතින විට, structured ප්‍රවේශය ඊළඟ බල කළ ස්ථරය බවට පත් වේ.

## මෙය Moat එක වූයේ ඇයි

තරඟකරුවන්ට ranking අදහස් පිටපත් කළ හැකිවිය. Commodity දෘඪාංගය මත සම්පූර්ණ web එක ගබඩා කිරීමට, සැකසීමට, සහ අඛණ්ඩව නැවත-index කිරීමට ඇති ධාරිතාව ප්‍රතිනිර්මාණය කිරීම — යන්ත්‍ර මරණය සාමාන්‍ය ලෙස සැලකීම — බොහෝ දුෂ්කර විය. Hadoop සහ පසුකාලීන "big data" stack එක Google හි අභ්‍යන්තර කේතයෙන් තොරව පවා *ප්‍රකාශිත* papers අනුගමනය කළේය: papers පෙන්වූයේ ගැටලු පන්තිය විසඳන ආකාරයයි.

Batch map/reduce බලවත් සහ දෘඩයි. ඊළඟ පෝස්ට් එක බෙදාහැරුණු දත්ත *සැකසීමෙන්* පරිණත බෙදාහැරුණු පද්ධතියක් සෑදෙන බොහෝ සේවා *යෙදවීම සහ සුව කිරීම* වෙත හැරේ.

**පිටවීමේ දොර:** Sanjay Ghemawat, Howard Gobioff, and Shun-Tak Leung, "The Google File System" (SOSP 2003); Jeffrey Dean and Sanjay Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters" (OSDI 2004); Fay Chang et al., "Bigtable: A Distributed Storage System for Structured Data" (OSDI 2006) — මෙම යටිතල-පහසුකම් කතාව පිටුපස ඇති ප්‍රාථමික තුන.


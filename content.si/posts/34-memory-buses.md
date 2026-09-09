---
title: "මතක බස්"
weight: 35
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 34
tags: []
summary: "DDR bandwidth මිලදී ගත්තේය; latency කලාතුරකින් චලනය විය — banks සහ channels රැඳීම සඟවයි"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (Posts 32–33) යනු විස්තීරණ උපාංග වෙත මාර්ගයයි. මතක බස් යනු ඇත්ත වශයෙන්ම CPU පෝෂණය කරන මාර්ගයයි — Post 10 හි DRAM — සහ එහි පරිණාමය bandwidth, latency, සහ බලය අතර ධාවන සාකච්ඡාවකි. Generation නාම නොව කතාව. එම තුන අතර බෙදීම ය.

## දෙකම Edges, වේගවත් Clock එකක් නොවේ

DDR — Double Data Rate — rising *සහ* falling edge මත transfer කරයි. එකම clock එකේදී single-data-rate නිර්මාණයකට දළ වශයෙන් දෙගුණ throughput, සංඛ්‍යාතය දෙගුණ කිරීමකින් තොරව (සහ එය සමඟ පැමිණෙන signal-integrity ගැටලු). පළමුව clock බිත්තිය ගෙවීමකින් තොරව bandwidth.

## Bandwidth නැග්ගේය; First-Bit Latency නොගියේය

සෑම DDR generation එකක්ම උපරිම bandwidth ඉහළ දැමුවේය, බොහෝ විට වේගවත් I/O මගින්. Prefetch සහ, DDR5 හි, ස්වාධීන 32-bit subchannels දෙකකට බෙදීම මොඩියුලය මත වැඩි parallelism මිලදී ගනී. ශීර්ෂක අංක සඟවන දේ: අමු ප්‍රවේශ *latency* — ඉල්ලීමේ සිට පළමු bit දක්වා — bandwidth ට වඩා බොහෝ මන්දගාමීව චලනය විය. DRAM ආරම්භ වූ පසු stream එකකට බොහෝ හොඳ වූ අතර, එය කරන තෙක් රැඳීමට පමණක් ටිකක් හොඳ විය. එය Post 35 සඳහා සැකසුමයි. වෙනස් මිනුම, වෙනස් භෞතික විද්‍යාව (charge sensing, capacitor කෝෂ).

## මන්දගාමී ප්‍රවේශයක් සැඟවීමට Parallelism

*Channel* එකක් යනු ස්වාධීන controller මාර්ගයකි — සමගාමී ඉල්ලීම් එකිනෙකා පිටුපස queue විය යුතු නැත. Channel එකක් තුළ, *ranks* සහ *banks* එක් bank එකකට අවසන් කිරීමට (හෝ refresh — Post 10) ඉඩ දෙන අතර අනෙක නව ඉල්ලීමක් ගනී. ප්‍රමාණවත් ස්වාධීන ප්‍රවේශ overlap කරන්න සහ *සමස්ත* throughput ඉහළින් රැඳේ කිසිදු තනි ප්‍රවේශයක් වේගවත් නොවුණත්. එබැවින්ම සංවිධානය පවතී: DIMM විශේෂාංග නාමාවලියක් නොව, ඊළඟ පෝස්ට් එක බිත්තියක් ලෙස නම් කරන latency සැඟවීමේ ක්‍රමයකි.

DIMM යනු භෞතික ඇසුරුමයි — සම්මත edge connector එකක් සහිත පුවරුවක chips — එබැවින් ධාරිතාව "slots කීයක්ද, කුමන ප්‍රමාණයද" වේ, බස් එකේ නැවත නිර්මාණයක් නොවේ.

ඊළඟ පෝස්ට් දෙක මෙම සාකච්ඡාව අඩු වූ විට සිදුවන දේය: මතක බිත්තිය, සහ ගණනය පැත්තේ එහි ඥාතියා, clock-speed බිත්තිය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

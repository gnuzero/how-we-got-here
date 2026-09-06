---
title: "Caches"
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 15
tags: []
summary: "Locality මතක ධූරාවලිය ක්‍රියාත්මක කරවයි; associativity සහ coherence එය අවංකව තබා ගැනීමේ වියදම් වේ"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

Post 10 මතක ධූරාවලිය පිහිටුවිය: registers, SRAM cache, DRAM, disk — සෑම පියවරකදීම වේගය සඳහා ධාරිතාව හුවමාරු කෙරේ. Caches යනු එම හුවමාරුව සෑම CPU එකකම කාර්ය සාධනය රැගෙන යන තැනයි. පදනම සැබෑ වැඩසටහන් පිළිබඳ එක් අනුභවික කරුණකි: **locality**.

## Caches ක්‍රියා කරන්නේ ඇයිද යන්න

**Temporal locality** — මෑතදී ස්පර්ශ කළ ස්ථානයක් ඉක්මනින් නැවත ස්පර්ශ වීමට ඉඩ ඇත (loop විචල්‍ය, hot කේතය). **Spatial locality** — ආසන්න ස්ථාන ඊළඟට පැමිණීමට ඉඩ ඇත (arrays, අනුක්‍රමික fetch). Caches මෑතදී භාවිතා කළ දත්ත සමීපව තබා ගනී, සහ miss එකකදී සම්පූර්ණ *lines* (බොහෝ විට bytes 64 ක්) fetch කරයි — අසල්වැසියන් ඉක්මනින් පැමිණෙනු ඇතැයි ඔට්ටු අල්ලමින්.

Lookup එක ලිපිනයක් **offset** (line එකේ byte), **index** (කුමන set එකද), සහ **tag** (පවතින line එක ඇත්ත වශයෙන්ම අපට අවශ්‍ය එකද?) ලෙස කැඩෙයි.

## Line එකක් ජීවත් විය හැක්කේ කොහේද

**Direct-mapped** — ලිපිනයකට එක් හැකි slot එකක්. ඉක්මන් පරීක්ෂාව; hot ලිපින දෙකක් එකම index එකක් බෙදා ගෙන එකිනෙක thrash කරන විට conflict misses.

**Fully associative** — ඕනෑම line එකක්, ඕනෑම slot එකක්. Conflict misses නැත; සෑම ප්‍රවේශයක්ම සෑම tag එකක්ම සසඳයි. පරිමාණය නොවේ.

**Set-associative** — ප්‍රායෝගික මැද: index කුඩා set එකක් තෝරයි (උදාහරණයක් ලෙස ways 8 ක්); tags පරීක්ෂා වන්නේ එහි පමණි. නම්‍යතාවයෙන් බොහෝමයක්, සම්පූර්ණ ස්කෑන් එකකට වඩා බොහෝ අඩු දෘඪාංගය. ප්‍රායෝගිකව සෑම සැබෑ cache එකක්ම මෙහි වාඩි වේ.

## Multicore: නව සීමාව ලෙස Coherence

එක් core එකක්, එක් පුද්ගලික cache එකක්: හොඳයි. බොහෝ cores, එක් එක් එකට cache එකක්: core A, core B තවමත් රඳවා ගන්නා line එකක් ලියයි — ප්‍රොටෝකෝලයක් නැතිව, B සදාකාලිකව stale කියවයි. MESI (Modified, Exclusive, Shared, Invalid) සම්භාව්‍ය පිළිතුරයි: සෑම line එකකටම තත්ත්වයකින් ටැග් කරන්න, සහ සංක්‍රමණ සන්නිවේදනය කරන්න (bus snoop හෝ directory) එවිට ලිවීමක් අනෙක් පිටපත් invalidate හෝ යාවත්කාලීන කරයි.

Coherence නොමිලේ නොවේ, සහ එහි වියදම core ගණන සමඟ වර්ධනය වේ — "හුදෙක් cores එකතු කරන්න" (Post 17) ට තමන්ගේම අඩුවන ප්‍රතිලාභ ඇති එක් හේතුවක්, ILP සීමාවලින් වෙන්ව.

**පිටවීමේ දොර:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — මන්දගාමී ප්‍රධාන මතකය අසල ඉක්මන් slave store එකක් ලෙස cache අදහසේ මුල් ප්‍රකාශය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

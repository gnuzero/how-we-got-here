---
title: "අතථ්‍ය මතකය සහ බහුකාර්යතාව"
weight: 29
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 28
tags: []
summary: "Time-sharing හුදකලාව අවශ්‍ය කරයි — අතථ්‍ය මතකය සෑම process එකකටම යන්ත්‍රය අයිති කර ගත් මායාව දෙයි"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

Time-sharing (Post 22) සඳහා බහු processes එක් යන්ත්‍රයක — පෙනෙන පරිදි එකවර — ධාවනය වීම අවශ්‍යය. ක්ෂණික ගැටළුව: සෑම process එකකටම ඕනෑම භෞතික ලිපිනයක් නිදහසේ කියවීමට සහ ලිවීමට හැකි නම්, එක් දෝෂ සහිත හෝ අනිෂ්ට වැඩසටහනකට අනෙකක දත්ත, හෝ OS එකම, දූෂණය කළ හැක. අතථ්‍ය මතකය සෑම process එකකටම සම්පූර්ණ address space එක අයිති කර ගත් *මායාව* දීමෙන් එය වළක්වයි, OS යටින් ඇති සත්‍යය කළමනාකරණය කරන අතරතුර.

## මූලික මායාව

සෑම process එකක්ම පූර්ණ අතථ්‍ය ලිපින අවකාශයක් දකියි — 64-bit පද්ධතියක, භෞතික RAM ට වඩා බොහෝ විශාල. එය අතථ්‍ය ලිපිනයක් යොමු කරන විට, දෘඪාංගය (Memory Management Unit, හෝ MMU) OS පවත්වාගෙන යන page table එකක් හරහා භෞතික ලිපිනයකට පරිවර්තනය කරයි. Processes දෙකකටම "අතථ්‍ය ලිපිනය 0x1000" යොමු කර වෙනස් භෞතික frames දෙකකට පහර දිය හැක — එකකටත් අනෙකේ මතකය දැකිය නොහැක, එක් එක් process එක ඇතුළතින් එය සාමාන්‍ය, සුවිශේෂී හිමිකාරත්වයක් ලෙස පෙනුණත්.

## Pages, Faults, Swap

මතකය ස්ථිර-ප්‍රමාණ pages වලට බෙදා ඇත (බොහෝ ගෘහ නිර්මාණ මත සාමාන්‍යයෙන් 4 KB; විශාල "huge pages" ද පවතී). Page table එක අතථ්‍ය pages භෞතික frames වෙත map කරයි. විවේචනාත්මකව, සෑම අතථ්‍ය page එකකටම *සෑම වේලාවකම* frame එකක් අවශ්‍ය නොවේ — එය "not present" ලෙස සලකුණු කරන්න, සහ යොමුවක් page fault එකක් ලෙස OS වෙත trap වේ. OS එකට disk වෙතින් page එක පූරණය කළ හැක (කේතය සහ දත්ත lazy ලෙස ගෙන ඒම), හෝ එය සැබෑ දෝෂයක් ලෙස සැලකිය හැක (කිසිදා ලබා නොදුන් මතකයට ප්‍රවේශ වීම — segmentation fault එකකට පොදු මාර්ගයකි).

එම යාන්ත්‍රණයම swapping සක්‍රිය කරයි: මතක පීඩනය යටතේ, සීතල page එකක් disk වෙත ලියන්න, එය not-present ලෙස සලකුණු කරන්න, frame එක නිදහස් කරන්න. පද්ධතිය භෞතිකව ඇති ප්‍රමාණයට වඩා වැඩි RAM ඇති සේ හැසිරේ — එම page එක නැවත ස්පර්ශ වුවහොත් disk-වේග පිරිවැයකින්. බහුල RAM නිසා බර swapping එකල මෙන් සුලභ නොවේ; යාන්ත්‍රණය මූලිකවම පවතී.

## ආරක්ෂාව ලෙස හුදකලාව

බහුකාර්යතාව සක්‍රිය කිරීමට ඔබ්බෙන්, පරිවර්තනය ආරක්ෂක මායිමකි. Process එකකට අනෙක් process එකක භෞතික මතකය ලිපිනගත කිරීමට *යාන්ත්‍රණයක්* නැත — එහි page table එකේ වලංගු අතථ්‍ය ලිපිනයක් එහි map නොවේ. එක් හොඳින් හැසිරෙන, sandboxed process එකක මතක දූෂණය (මූලධර්මය අනුව) එයට අදාළ නොවන process එකක් කියවීමට හෝ දූෂණය කිරීමට ඉඩ නොදෙයි; හුදකලාව දෘඪාංග-පරීක්ෂිත ලිපින පරිවර්තනයයි, සම්මුතිය නොවේ.

## මෙය ගෙන යන්නේ කොහේද

අතථ්‍ය මතකය සෑම process එකකටම තමන්ගේම හුදකලා ලිපින අවකාශයක් දෙයි — ශක්තිමත් සහතිකයක්, සහ බරක්: තමන්ගේම kernel ව්‍යුහ, තමන්ගේම page tables, ඒවා අතර පූර්ණ context-switch පිරිවැය. Containers (ඊළඟ පෝස්ට් එක) අසයි: tenant එකකට සම්පූර්ණයෙන්ම වෙනම kernel එකක් සඳහා ගෙවීමකින් තොරව, processes වලට අවශ්‍ය ප්‍රායෝගික හුදකලාවෙන් *බොහෝමය* ලබා ගත හැකිද?

{{< lab type="vm-terminal" >}}


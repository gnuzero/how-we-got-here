---
title: "PCIe ගැඹුරු ගවේෂණය"
weight: 34
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 33
tags: []
summary: "අභිප්‍රාය TLPs මත ගමන් කරයි; විශ්වාසනීයත්වය සහ signaling පහළින් — හවුල් බස් එක ප්‍රතිස්ථාපනය කළ stack එක"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

Post 32 ආවරණය කළේ PCIe *ඇයි* serial සහ point-to-point ගියේද යන්නයි. මෙම පෝස්ට් එක එම සබැඳි මත transfer එකක් *කෙසේ* ව්‍යුහගත වේද යන්නයි — fabric එක කතා කළ යුතු දෘඪාංගයක් ගොඩනඟන්නේ නම් වැදගත් වන තට්ටුව, මෙම මාලාව නැවත පැමිණෙන Nitefury-පාදක GPU මතක කාර්යය ඇතුළුව.

## අභිප්‍රාය, විශ්වාසනීයත්වය, ඉලෙක්ට්‍රෝන

තට්ටු තුනක්, රැකියා තුනක්. **Transaction Layer** යනු කියවීමක්, ලිවීමක්, හෝ completion එකක් උපත ලබන සහ මිය යන තැනයි — මෘදුකාංගය සිතන තට්ටුව. **Data Link Layer** බෙදාහැරීම විශ්වාසනීය කරයි: sequence numbers, CRC, packet එකක් දූෂිත වූ විට retransmission. **Physical Layer** රැහැනයි: differential pairs, stream එක recoverable ලෙස තබා ගන්නා encoding, තඹ මත serialization. එසේ බෙදන්නේ අභිරුචි නිර්මාණයකට ඉලෙක්ට්‍රෝන නැවත සොයා නොගෙන *අභිප්‍රාය* ප්‍රකාශ කළ හැකි වන පරිදිය.

## Packet එක ගිවිසුමයි

ඒකකය Transaction Layer Packet ය. TLP එකක් වර්ගය නම් කරයි (මතක කියවීම හෝ ලිවීම, I/O, configuration), ලිපිනය, දිග, සහ — ලිවීමක් මත — payload. Link layer එක එය sequence සහ CRC සමඟ එතුම් කරයි; ඈත පැත්ත පරීක්ෂා කර අවශ්‍ය නම් retry කරයි. ඉහළින්, එය විශ්වාසනීය කියවීමක් හෝ ලිවීමක් ලෙස පෙනේ. විශ්වාසනීයත්වය මැජික් නොවේ. එය එම එතුම් කිරීමයි.

## Lanes පළල පරිමාණය කරයි; Generations අනුපාතය පරිමාණය කරයි

Lane එකක් යනු එක් එක් දිශාවට එක් differential pair එකකි — කුඩාම සබැඳිය. Bandwidth ගුණ කිරීමට lanes බැඳන්න (x1…x16). සෑම generation එකක්ම දළ වශයෙන් per-lane අනුපාතය දෙගුණ කරයි (ඉහළ signaling, තද encoding). එකම x16 slot එක, Gen 5 එදිරිව Gen 3: අමතර රැහැන් නැතිව දළ වශයෙන් 4× unidirectional bandwidth (~64 GB/s එදිරිව ~16 GB/s). Post 32 හි serial ඔට්ටුව එම නැගීම හැකි කළ දෙයයි.

## අභිරුචි Fabric එකක් සැලකිලිමත් වන්නේ ඇයි

FPGA මතක-fabric කාඩ් එකකට මෙම stack එකේ ජීවත් විය යුතුය: root complex සහ අනෙක් endpoints පිළිගන්නා TLPs සාදන්න, සහ ස්ථාපිත IP ට link විශ්වාසනීයත්වය සහ physical layer හසුරුවන්නට ඉඩ දෙන්න. GPUDirect-විලාසයේ peer-to-peer (Post 37) යනු එම අදහස තවත් ඈතට ගෙන යාමයි — endpoints දෙකක් අතර ලිපිනගත TLPs, දත්ත මාර්ගයෙන් CPU එළියට.

**පිටවීමේ දොර:** The PCI Express Base Specification (PCI-SIG) — මෙම පෝස්ට් එක නම් කරන lanes, TLPs, සහ ස්ථරීය stack එක සඳහා ජීවමාන ප්‍රාථමිකය; එය අනුවාදගත ය (Base Spec, ශීත කළ පත්‍රිකාවක් නොවේ).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

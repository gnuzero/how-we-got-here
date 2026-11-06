---
title: "PCIe ගැඹුරු ගවේෂණය"
weight: 39
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 38
aliases:
  - /posts/33-pcie-deep-dive/
  - /posts/38-pcie-deep-dive/
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

## ගැඹුරින්: TLP එකක බර කිරා බැලීම — packet වියදම, ACK, credits සහ සැබෑ throughput

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** PCIe lanes ගැන සිංහලෙන් ඇත්තේ පාරිභෝගික මට්ටමේ වීඩියෝවකි: "PCIe SLOTS, PCI Lanes ගැන සරලව" (Anytiplk, බැලීම් ~1.1k; අප හඳුනාගත්තේ මාතෘකාවෙන් පමණි, නැරඹුවේ නැත). Transaction Layer Packets, ACK/NAK, flow-control credits හෝ throughput ගණනය කිරීම ගැන සිංහල ලිපියක් හෝ පාඩමක් අපට හමු නොවීය. එබැවින් මෙම කොටස PCIe නිල පිරිවිතරය පවත්වාගෙන යන PCI-SIG හි ප්‍රකාශන සහ AMD (Xilinx) හි නිල white paper එකේ ගණනය කළ උදාහරණ මත පදනම් වේ.

### 1. මූලික පද

- **ස්ථර තුන (layers):**
  - ගනුදෙනු ස්ථරය (transaction layer): "මෙම ලිපිනයට බයිට් 128 ලියන්න" වැනි අභිප්‍රාය ගොඩනඟයි.
  - දත්ත සබැඳි ස්ථරය (data link layer): packet එක වැරදි නැතිව ළඟා වූ බව තහවුරු කරයි.
  - භෞතික ස්ථරය (physical layer): bits රැහැන් මත තබයි.
- **TLP (Transaction Layer Packet):** දත්ත රැගෙන යන packet එකයි. එයට ශීර්ෂයක් (header) සහ payload එකක් ඇත.
- **DLLP (Data Link Layer Packet):** සබැඳිය කළමනාකරණය කරන කුඩා packet එකකි (උදා. ACK). බයිට් 8 කි.
- **ACK/NAK සහ replay buffer:** යවන්නා සෑම TLP එකක්ම ACK (පිළිගැනීම) එකක් ලැබෙන තුරු replay buffer එකක තබා ගනී. NAK (ප්‍රතික්ෂේප කිරීම) ලැබුණොත් එය නැවත යවයි.
- **ප්‍රවාහ පාලන credit (flow control credit):** ග්‍රාහකයේ buffer එකේ ඉඩ කොපමණ ඇත්දැයි යවන්නාට දැන්වීමයි. credit නැත්නම් යැවිය නොහැක.
- **Posted සහ non-posted:**
  - posted: ලිවීමකට (write) පිළිතුරක් බලාපොරොත්තු නොවේ.
  - non-posted: කියවීමකට (read) දත්ත සහිත "completion" පිළිතුරක් අවශ්‍ය වේ.
- **MPS (Maximum Payload Size):** TLP එකක උපරිම payload ප්‍රමාණයයි.
- **RCB (Read Completion Boundary):** කියවීම් පිළිතුරු කැබලිවලට කඩන සීමාවයි (සාමාන්‍යයෙන් බයිට් 64).

### 2. TLP එකක ව්‍යුහය සහ එහි වියදම

AMD/Xilinx white paper WP350 "Understanding Performance of PCI Express Systems" හි (v1.2, 2014, පිටුව 3, Figure 1) Gen 2 TLP එකක ව්‍යුහය:

| කොටස | ස්ථරය | බයිට් |
|---|---|---|
| Start | භෞතික | 1 |
| Sequence අංකය | දත්ත සබැඳි | 2 |
| Header | ගනුදෙනු | 12 (32-bit ලිපින) හෝ 16 (64-bit) |
| Payload | ගනුදෙනු | 0–4096 |
| ECRC (විකල්ප) | ගනුදෙනු | 4 |
| LCRC | දත්ත සබැඳි | 4 |
| End | භෞතික | 1 |

**වියදම ගණනය කරමු:**
- 32-bit ලිපින, ECRC නැත: 1 + 2 + 12 + 4 + 1 = **බයිට් 20**.
- 64-bit ලිපින සහ ECRC ඇත: 1 + 2 + 16 + 4 + 4 + 1 = **බයිට් 28**.
- Gen 3 හි Start කොටස බයිට් 4 ක් වන අතර End නැත (Figure 2).

WP350 (පිටුව 4) අනුව TLP වියදම බයිට් **20 සිට 30** දක්වා වෙනස් වේ. එය Gen 2/Gen 3 වීම, ලිපින පළල සහ ECRC භාවිතය මත රඳා පවතී.

### 3. Packet කාර්යක්ෂමතාව: payload එක ලොකු වන විට

WP350 (පිටුව 8, Equation 2, Table 3) අනුව:

**Packet කාර්යක්ෂමතාව = MPS ÷ (MPS + වියදම)**

| MPS (බයිට්) | ගණනය (වියදම 20) | කාර්යක්ෂමතාව |
|---|---|---|
| 128 | 128 ÷ 148 | **86%** |
| 256 | 256 ÷ 276 | **92%** |
| 512 | 512 ÷ 532 | **96%** |
| 1024 | 1024 ÷ 1044 | **98%** |

- වාසිය අඩු වෙමින් යයි: 128 → 256 දී +6%, 512 → 1024 දී +2% පමණි.
- කියවීම් පිළිතුරු RCB = 64 නිසා කැබලිවලට කැඩුණු විට 64 ÷ 84 = **76%** පමණි (පිටුව 9).
- **අපේ ආදර්ශ උදාහරණය:** එක් register එකකට බයිට් 4 ක් ලිවීම 4 ÷ 24 ≈ **17%** කි. කුඩා ලිවීම් බොහොමයක් යවන ධාවකයක් (driver) link එකේ bandwidth වලින් වැඩි කොටසක් ශීර්ෂවලට වැය කරයි.

### 4. ලිවීමේ throughput: WP350 හි උදාහරණ 1 සහ 2 පියවරෙන් පියවර

WP350 (පිටුව 12) මෙම උපකල්පන භාවිතා කරයි:
- Gen 1 x8 සබැඳියකි.
- 2.5 Gb/s lane එකක් 8b/10b සමඟ **ns 4 කට බයිට් 1** ක් යවයි. lanes 8 ක් නිසා **ns 4 කට බයිට් 8** කි (bytes lanes හරහා බෙදා යවනු ලැබේ).
- TLP 5 කට ACK DLLP 1 කි. TLP 4 කට flow-control update DLLP 1 කි.

**උදාහරණය 1: ලිවීම් 200 ක්, එක් එක් බයිට් 128 (MPS 128)**
- TLP එකක කාලය = (128 + 20) ÷ 8 × 4 ns = **74 ns**. DLLP එකක කාලය = 8 ÷ 8 × 4 = **4 ns**.
- ACK = 200 ÷ 5 = 40. FC = 200 ÷ 4 = 50.
- මුළු කාලය = 200 × 74 + 40 × 4 + 50 × 4 = 14,800 + 160 + 200 = **15,160 ns**.
- දත්ත = 200 × 128 = බයිට් 25,600. Throughput = 25,600 ÷ 15,160 ns = **1.689 GB/s**.
- න්‍යායික 2 GB/s (8 × 250 MB/s) න් **84%** කි.

**උදාහරණය 2: එම බයිට් 25,600 ම ලිවීම් 50 කින්, එක් එක් බයිට් 512**
- TLP එකක කාලය = 532 ÷ 8 × 4 = **266 ns**.
- ACK 10 ක් සහ FC 13 ක් ඇත.
- මුළු කාලය = 50 × 266 + 10 × 4 + 13 × 4 = **13,392 ns**. Throughput = **1.912 GB/s** (න්‍යායික අගයෙන් 96%).

MPS 4 ගුණයක් කළත් throughput වැඩි වූයේ 13% කින් පමණි. §3 හි අඩු වන ප්‍රතිලාභය මෙයින් පෙනේ.

### 5. කියවීම: ප්‍රමාදය (latency) bandwidth එක කන හැටි

**WP350 උදාහරණය 3 (පිටුව 14):** බයිට් 4096 ක් Gen 1 x8 සබැඳියක් ඔස්සේ කියවයි. උපරිම කියවීම් ඉල්ලීම බයිට් 256 කි. RCB බයිට් 64 කි. ඉල්ලීමක් ලැබී පිළිතුර සෑදීමට **300 ns** ගත වේ.

- කියවීම් ඉල්ලීම් = 4096 ÷ 256 = **16**. එක් ඉල්ලීමක් = 20 ÷ 8 × 4 = 10 ns.
- Completions = 4096 ÷ 64 = **64**. එකක් = (64 + 20) ÷ 8 × 4 = 42 ns.
- මුළු කාලය = 16 × 10 + 16 × 300 + 64 × 42 + 16 × 4 + 20 × 4 = 160 + 4800 + 2688 + 64 + 80 = **7,792 ns**.
- Throughput = 4096 ÷ 7,792 ns ≈ **0.526 GB/s**. WP350 මෙය 523 MB/s ලෙස දක්වයි; අපේ නැවත ගණනයෙන් ලැබෙන්නේ 526 කි.

කාලයෙන් 4800 ÷ 7792 = **62%** ක් වැය වන්නේ ඉල්ලීම් එකින් එක 300 ns බැගින් බලා සිටීමටයි. WP350 පවසන පරිදි මෙහි උපකල්පනය මතක පාලකය කියවීම් නල මාර්ගගත (pipeline) නොකරන බවයි.

**අපේ ආදර්ශ ගණනය:** ඉල්ලීම් එකවර යවා පළමු 300 ns පමණක් පෙනෙන සේ සැඟවුවහොත්, කාලය 160 + 2688 + 144 + 300 = 3,292 ns වේ. එවිට throughput ≈ **1.24 GB/s** වේ. එය දෙගුණයකටත් වඩා වැඩිය. Post 34 හි DRAM "requests in flight" අදහසම මෙහිද වලංගු වේ.

### 6. පරම්පරා: වේගය දෙගුණ කරමින්

| පරම්පරාව | Raw අනුපාතය | කේතනය / ක්‍රමය | මූලාශ්‍රය |
|---|---|---|---|
| 1.x / 2.x | 2.5 / 5.0 GT/s | 8b/10b | PCI-SIG 3.0 FAQ |
| 3.0 | 8.0 GT/s | 128b/130b | PCI-SIG 3.0 FAQ |
| 4.0 | 16.0 GT/s | 128b/130b | PCI-SIG 4.0 FAQ (වේගය); කේතනය: PCI-SIG webinar, slide 4 |
| 5.0 | 32.0 GT/s; x16 එකක් 128 GB/s | 128b/130b | PCI-SIG 6.0 FAQ (වේගය); කේතනය: PCI-SIG webinar, slide 4 සහ Das Sharma blog |
| 6.0 | 64.0 GT/s; x16 එකක් 256 GB/s (දෙදිශාවම) | PAM4 + FEC + Flit | PCI-SIG 6.0 පිටුව සහ FAQ |

**PAM4 (Pulse Amplitude Modulation, මට්ටම් 4):** PCI-SIG බ්ලොග් ලිපියට (Debendra Das Sharma, 2022 ජනවාරි 11) අනුව, PAM4 එක් symbol එකකට voltage මට්ටම් 4 ක් භාවිතා කර **bits 2** ක් යවයි. එහි clock එක PCIe 5.0 හි "16G Nyquist" සංඛ්‍යාතයේම පවතී. එහෙත් bit දෝෂ අනුපාතය ඉහළ යන නිසා දෝෂ නිවැරදි කිරීමක් (Forward Error Correction, FEC) අවශ්‍ය වේ.

**Flit ගණනය:** බ්ලොගයට අනුව bytes 256 ක flit එකක් මෙසේ බෙදී ඇත:
- TLP සඳහා 236
- DLP සඳහා 6
- CRC සඳහා 8
- FEC සඳහා 6

TLP බයිට් වල කොටස 236 ÷ 256 = **92.2%**. x16, 64 GT/s: 64 × 16 ÷ 8 = එක් දිශාවකට 128 GB/s raw; දෙදිශාවම **256 GB/s**. මෙය PCI-SIG අගයට ගැළපේ.

### 7. පැන්සලෙන් අභ්‍යාසය

1. 64-bit ලිපින සහිත, ECRC නැති Gen 2 TLP එකක වියදම කීයද? MPS 256 සමඟ කාර්යක්ෂමතාව කීයද?
2. WP350 උපකල්පන සමඟ (Gen 1 x8, TLP 5 කට ACK 1, TLP 4 කට FC 1), බයිට් 256 ලිවීම් 100 ක throughput කීයද?
3. Gen 1 x4 සබැඳියක ns 4 කට බයිට් කීයක් යැවිය හැකිද? බයිට් 128 TLP එකක් (වියදම 20) යැවීමට කොපමණ කාලයක් ගතවේද?
4. උදාහරණය 3 හි ඉල්ලීමක් සඳහා කාලය 300 ns වෙනුවට 100 ns වූයේ නම් throughput කීයද?
5. PCIe 4.0 x16 සබැඳියක (128b/130b) එක් දිශාවක bandwidth ආසන්න වශයෙන් කීයද?

(පිළිතුරු:
1. 1 + 2 + 16 + 4 + 1 = **බයිට් 24**. 256 ÷ 280 ≈ **91.4%**.
2. TLP එකක් = 276 ÷ 8 × 4 = 138 ns. ACK 20, FC 25. කාලය = 13,800 + 80 + 100 = 13,980 ns. දත්ත = 25,600 → **≈1.83 GB/s**.
3. **බයිට් 4**. 148 ÷ 4 × 4 ns = **148 ns**.
4. 160 + 1600 + 2688 + 64 + 80 = 4,592 ns → 4096 ÷ 4592 ≈ **0.89 GB/s**.
5. 16 × 128/130 ÷ 8 ≈ lane එකකට 1.97 GB/s. × 16 ≈ **31.5 GB/s**.)

**මෙම කොටසේ මූලාශ්‍ර:** AMD (Xilinx), *Understanding Performance of PCI Express Systems*, White Paper WP350 v1.2, 2014 ඔක්තෝබර් 28 (docs.amd.com නිල පිටපත): <https://docs.amd.com/api/khub/documents/4uw~7uS2eK5x7lKbNdxWlw/content>. භාවිත කළ පිටු:
- පිටුව 3: Figure 1–2, TLP ව්‍යුහය
- පිටුව 4: වියදම බයිට් 20–30
- පිටුව 8: Equation 2 සහ Table 3
- පිටුව 9: RCB, 76%
- පිටුව 12: උදාහරණ 1–2
- පිටුව 14: උදාහරණ 3

PCI-SIG නිල පිටු:
- FAQ "How does the PCIe 3.0 8.0 GT/s 'double' the PCIe 2.0 5.0 GT/s bit rate?": <https://pcisig.com/how-does-pcie-30-8gts-double-pcie-20-5gts-bit-rate>
- PCIe 4.0 FAQ: <https://pcisig.com/faq?field_category_value%5B%5D=pci_express_4.0> (16 GT/s. මෙම FAQ කේතනය නම් නොකරයි.)
- S. Kocsis සහ M. Mazumder, "The Journey to CopprLink™ and Beyond: An Exploration of PCIe® Cabling Solutions", PCI-SIG Educational Webinar Series (PDF, 2024), slide 4: 1.0–5.0 කේතනය, NRZ සහ Nyquist සංඛ්‍යාත වගුව (4.0 සහ 5.0 = 128b/130b): <https://pcisig.com/sites/default/files/2026-01/PCI-SIG%20Cabling%20Webinar_FINAL.pdf>
- PCIe 6.0 FAQ: <https://pcisig.com/faq?field_category_value%5B%5D=pci_express_6.0>
- "PCI Express 6.0 Specification": <https://pcisig.com/pci-express-6.0-specification>
- D. Das Sharma, "The Evolution of the PCI Express Specification: On its Sixth Generation, Third Decade and Still Going Strong", PCI-SIG blog, 2022 ජනවාරි 11: <https://pcisig.com/blog/evolution-pci-express-specification-its-sixth-generation-third-decade-and-still-going-strong>

කුඩා ලිවීමේ සහ නල මාර්ගගත කියවීමේ අංක අපේ ආදර්ශ ගණනය කිරීම් වේ.

**පිටවීමේ දොර:** The PCI Express Base Specification (PCI-SIG) — මෙම පෝස්ට් එක නම් කරන lanes, TLPs, සහ ස්ථරීය stack එක සඳහා ජීවමාන ප්‍රාථමිකය; එය අනුවාදගත ය (Base Spec, ශීත කළ පත්‍රිකාවක් නොවේ).


---
title: "පරිමාණයේ Interconnects"
weight: 38
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 37
tags: []
summary: "ගණනය chips බොහෝ වූ පසු, ඒවා අතර මාර්ගය ඊළඟ බිත්තියයි — කැප වූ සබැඳි, පිටපත් අඩු"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation — ties to BridgeStack fabric work"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

මෙතෙක් මෙම අදියර එක් යන්ත්‍රයක් *ඇතුළත* කොටස් සම්බන්ධ කළේය — CPU සිට මතකය දක්වා, CPU සිට උපාංග දක්වා. වැඩ බරකට GPUs කිහිපයක්, හෝ යන්ත්‍ර කිහිපයක් අවශ්‍ය වූ පසු, ප්‍රශ්නය වෙනස් වේ: එම ඒකකවලට *එකිනෙකා* සමඟ වේගවත්ව කතා කළ හැකිද එවිට අමතර සන්නිවේදනය අමතර ගණනය නොකනු ඇතිද?

## පෙරනිමි මාර්ගය බද්දයි

Peer මාර්ගයක් නැතිව, GPU A පද්ධති මතකය හරහා ලියයි සහ GPU B එය නැවත කියවයි — අමතර hops, අමතර latency, පිටපත් මත වියදම් වන PCIe bandwidth. PCIe පමණක් මතවත්, GPUDirect P2P ට host staging නොමැතිව GPU↔GPU DMA කළ හැක (තවමත් PCIe අනුපාතවල). ඉතිරි සීමාව bandwidth සහ topology ය: හවුල් විස්තීරණ fabric එකක් කිසිදා many-GPU mesh එකක් ලෙස නිර්මාණය නොවීය.

## කැප වූ සබැඳි, Coherent මතකය, පිටපත් අඩු

NVIDIA ගේ NVLink යනු අරමුණින්-ගොඩනැගූ GPU-to-GPU interconnect එකකි — transfer එකෙන් CPU සහ පද්ධති මතකය එළියට. NVSwitch එකකට node එකක සෑම GPU එකක්ම අනෙක් සෑම එකකින්ම ළඟා විය හැකි කළ හැක, PCIe-සහ-CPU මාර්ගයට බොහෝ ඉහළින් bandwidth එකක. නිතර, විශාල හුවමාරු සඳහා — Phases 7 සහ 10 හි විශාල-පරිමාණ training නැවත පැමිණෙන රටාව — එම සෘජු මාර්ගය ප්‍රථම-අනුපිළිවෙලයි, සීරුමාරුවක් නොවේ.

CXL (Compute Express Link) අසල්වැසි සීමාවකට පිළිතුරු දෙයි: එක් die එකකට ඔබ්බෙන් cache-coherent ප්‍රවේශය, සහ, තවත් ඈතට, තනි socket එකකට solder නොකළ pooled මතකය. ධාරිතාව එය ගොඩබැසුණු DIMM slot එකට ශීත කරනවා වෙනුවට ගණනය nodes අතර ගමන් කළ හැක — DDR (Post 34) හෝ අමු PCIe ඔබට නොදෙන නම්‍යතාවයකි.

GPUDirect RDMA ට NIC එකකට GPU මතකය සෘජුව කියවීමට හෝ ලිවීමට ඉඩ දෙයි. එය නැතිව, ජාලයක් හරහා GPU-to-GPU transfer එකක් යනු GPU → පද්ධති මතකය → NIC → ඈත පද්ධති මතකය → ඈත GPU — latency සහ මතක bandwidth වැය වන පිටපත්. එය GPU → ජාලය → GPU දක්වා හකුළන්න, RDMA (Post 42) ගබඩාවේ සහ පණිවිඩකරණයේ ජය ගන්නා එකම හේතුවට: පිටපත් අඩු, චලනය babysit කරන CPU අඩු.

## එකම ගැටලුව, විවෘත දෘඪාංගය

මෙය මාලාව නිතර පෙන්වන අභිරුචි GPU මතක fabric යටතේ සංකල්පීය පදනමයි: සාමාන්‍ය-අරමුණු CPU එකක් මාර්ගයේ නොමැතිව දුරස්ථ GPU මතකය ලිපිනගත කරන්න. NVLink සහ GPUDirect එය එක් vendor එකක stack එක ඇතුළත විසඳයි. විවෘත, PCIe-පාදක විකල්පයකට එම අකාර්යක්ෂමතාවම ඉවත් කළ යුතුය — එබැවින්ම Posts 32–33 හි TLP-මට්ටමේ peer මාර්ගය, සහ මෙම පෝස්ට් එකේ "කැප වූ සබැඳිය පවතින්නේ ඇයි," එකම කතාවයි.

## ගැඹුරින්: GPU අතර මාර්ගය අංකවලින් — NVLink සබැඳි, පිටපත් බද්ද, switch සහ CXL

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** NVLink, NVSwitch, GPUDirect හෝ CXL ගැන සිංහල විකිපීඩියා ලිපියක්, සිංහල පාඩමක් හෝ සිංහල වීඩියෝවක් අපට හමු නොවීය ("NVLink sinhala" සෙවුමට අදාළ ප්‍රතිඵල නොලැබුණි). "multi GPU sinhala" සෙවුමෙන් ලැබුණේ graphics card මිලදී ගැනීමේ වීඩියෝ පමණි. එබැවින් මෙම කොටස NVIDIA හි නිල GPU ගෘහ නිර්මාණ white papers සහ CXL Consortium හි නිල white papers වලින් අංක ගෙන මුල සිට ගණනය කරයි.

### 1. මූලික පද

- **Peer-to-peer (P2P):** GPU එකක් අනෙක් GPU එකේ මතකයට CPU හෝ පද්ධති මතකය හරහා නොගොස් කෙලින්ම ලිවීම හෝ කියවීමයි.
- **සංඥා යුගලය (signal pair / differential pair):** එක් bit ප්‍රවාහයක් රැගෙන යන රැහැන් දෙකයි. NVIDIA white papers වල එය "lane" ලෙසද හැඳින්වේ.
- **සබැඳිය (link):** දිශා දෙකටම යුගල කට්ටල දෙකක් ඇති NVLink ඒකකයයි.
- **NVSwitch:** බොහෝ GPU වල NVLink සබැඳි එකට සම්බන්ධ කරන switch චිපයකි.
- **Cache සහසම්බන්ධතාව (cache coherence):** එකම මතක ලිපිනයේ පිටපත් කිහිපයක් විවිධ caches වල තිබුණත් සියල්ලන්ටම එකම අගය පෙනීමයි.
- **මතක එකතු කිරීම (memory pooling):** මතකය එක් server එකකට ස්ථිරව සවි නොකර, අවශ්‍ය server එකට වෙන් කර දීමයි.

### 2. NVLink සබැඳියක් ඇතුළත

| GPU | යුගලයක වේගය | එක් දිශාවකට යුගල | සබැඳියක් එක් දිශාවකට | සබැඳි ගණන | GPU එකකට මුළු (දෙදිශාවම) |
|---|---|---|---|---|---|
| P100 (NVLink 1) | 20 Gb/s | 8 | 8 × 20 ÷ 8 = **20 GB/s** | 4 | 4 × 40 = **160 GB/s** |
| V100 (NVLink 2) | 25.78 Gb/s | 8 | ≈ **25 GB/s** | 6 | **300 GB/s** |
| A100 (NVLink 3) | 50 Gb/s | 4 | 4 × 50 ÷ 8 = **25 GB/s** | 12 | **600 GB/s** |

**මූලාශ්‍ර:**
- P100: Pascal white paper, පිටුව 20.
- V100: Volta white paper, මුද්‍රිත පිටුව 3.
- A100: A100 white paper, පිටුව 52.

**නිරීක්ෂණය:** A100 හි සබැඳියක් V100 හි සබැඳියක් තරම්ම bandwidth ලබා දෙයි (දිශාවකට 25 GB/s). එහෙත් එය භාවිතා කරන්නේ සංඥා **භාගයක්** පමණි (දිශාවකට යුගල 4, 8 වෙනුවට). යුගලයක වේගය දෙගුණ වූ නිසා, එම සංඥා ගණනින්ම සබැඳි දෙගුණයක් (6 → 12) ලබා දිය හැකි විය. Post 32 හි "pin එකකට bandwidth" තර්කයම මෙහිද වලංගු වේ.

**සංසන්දනය:** A100 white paper (පිටුව 17) අනුව PCIe Gen 4 x16 එකක් **31.5 GB/s** ලබා දෙයි (PCIe 3.0 හි 15.75 ට එරෙහිව). A100 හි NVLink සබැඳි 12 ම එක් දිශාවකට 12 × 25 = 300 GB/s ලබා දෙයි. එය PCIe Gen 4 x16 මෙන් 300 ÷ 31.5 ≈ **9.5** ගුණයකි.

### 3. පිටපත් බද්ද: 10 GB එක් GPU එකකින් තවත් එකකට

**ආදර්ශ ගණනය:** ඉහත නිල අනුපාත භාවිතා කරමු. සියලු වියදම් (latency, software) නොසලකා හරින අතර, එක් දිශාවක උපරිම අනුපාතය ලැබේ යැයි උපකල්පනය කරමු.

| මාර්ගය | පියවර | කාලය |
|---|---|---|
| Host staging (PCIe Gen 4) | GPU A → පද්ධති මතකය, පසුව පද්ධති මතකය → GPU B | 10 ÷ 31.5 × 2 ≈ **0.63 s** |
| PCIe P2P (GPUDirect P2P) | GPU A → GPU B, PCIe හරහා එක් වරක් | 10 ÷ 31.5 ≈ **0.32 s** |
| NVLink (A100, සබැඳි 12) | GPU A → GPU B | 10 ÷ 300 ≈ **0.033 s** |

- Staging මාර්ගය NVLink ට වඩා ≈ **19** ගුණයක් මන්දගාමී වේ.
- ඊට අමතරව එය පද්ධති මතකයේ bandwidth දෙවරක් (ලිවීමට සහ කියවීමට) වැය කරයි.
- පිටපත් කාලය අතරතුර CPU එකට DMA සැකසීමේ වැඩද පැවරේ.

පෝස්ට් එකේ "පෙරනිමි මාර්ගය බද්දයි" යන්නෙහි අර්ථය මෙයයි.

### 4. GPU 8 ක් සම්බන්ධ කිරීම: සෘජු mesh එකක් එදිරිව switch එකක්

සෑම GPU යුගලයක්ම කෙලින්ම සම්බන්ධ කිරීමට සබැඳි n(n − 1) ÷ 2 ක් අවශ්‍ය වේ. n = 8 නම් එය **28** කි. සෑම GPU එකකටම අසල්වැසියන් 7 දෙනෙකු සිටී.

- A100 එකකට සබැඳි 12 ක් ඇත. 12 ÷ 7 පූර්ණ සංඛ්‍යාවක් නොවන නිසා, සමහර යුගලවලට සබැඳි 2 ක් ලැබෙන අතර අනෙක්වාට 1 ක් පමණි.
- එවිට GPU යුගල අතර bandwidth අසමාන වේ. හොඳම යුගලයට දිශාවකට 50 GB/s ලැබෙන අතර අනෙක්වාට 25 GB/s පමණි.
- Volta white paper එකේ (මුද්‍රිත පිටුව 20, Figure 12) DGX-1 with V100 සඳහා "hybrid cube mesh" සැකැස්මක් පෙන්වයි. එය සෘජු සබැඳි සීමිත වූ විට භාවිතා කළ ආකාරයකි.

**Switch විසඳුම:** A100 white paper එකේ (පිටුව 70) DGX A100 හි A100 GPU **8** ක් NVSwitch **6** ක් හරහා සම්බන්ධ වේ. මුළු bandwidth **4.8 TB/s දෙදිශාවම** (2.4 TB/s full-duplex) වේ. ගණනය කරමු: 8 × 600 GB/s = 4800 GB/s = 4.8 TB/s. එනම් සෑම GPU එකකටම තමන්ගේ සබැඳි 12 ම switch එකට යොදා, **ඕනෑම** අනෙක් GPU එකකට දිශාවකට 300 GB/s දක්වා යැවිය හැකිය. Topology එක සමමිතික වන නිසා වැඩ බෙදන විට කුමන GPU යුගලද යන්න ගැන සිතිය යුතු නැත.

### 5. CXL: PCIe රැහැන් මත සහසම්බන්ධ මතකය

CXL Consortium හි white paper එකේ (Debendra Das Sharma, CXL 1.0 සමයේ) කරුණු:

- CXL ක්‍රියා කරන්නේ **PCIe 5.0 භෞතික ස්ථරය** මතය. CXL 1.0 **32 GT/s** දී දිශාවකට **64 GB/s** ලබා දෙයි (x16).
  - ගණනය: 32 × 16 × 128/130 ÷ 8 ≈ 63 GB/s ≈ 64.
- සබැඳිය PCIe Gen 1 වේගයෙන් පුහුණුව (link training) ආරම්භ කර, අනෙක් පාර්ශ්වයට හැකි නම් CXL ලෙස සාකච්ඡා කරයි.
- CXL ප්‍රොටෝකෝල තුනක් PHY මට්ටමේදී මිශ්‍ර (multiplex) කරයි:
  - **CXL.io:** PCIe මත පදනම් වූවකි. උපාංග සොයා ගැනීම, වින්‍යාසය සහ DMA සඳහා භාවිතා වේ. **සෑම උපාංගයකටම අනිවාර්ය** වේ.
  - **CXL.cache:** උපාංගයකට host මතකය cache කිරීමට ඉඩ දෙයි. සහසම්බන්ධතාව host ප්‍රොසෙසරය snoop පණිවිඩ මගින් කළමනාකරණය කරයි.
  - **CXL.memory:** host එකට උපාංගයට සවි කළ මතකය සාමාන්‍ය load/store මගින් භාවිතා කිරීමට ඉඩ දෙයි.

**කුමන උපාංගයට කුමක්ද** (white paper එකේ උදාහරණ):

| උපාංගය | ප්‍රොටෝකෝල |
|---|---|
| තමන්ගේ මතකයක් නැති accelerator | CXL.io + CXL.cache |
| මතකය සහිත accelerator | තුනම |
| මතක ප්‍රසාරණ උපාංගය | CXL.io + CXL.memory |

CXL 2.0 white paper එකට (Das Sharma සහ Tavallaei, 2020 නොවැම්බර්) අනුව CXL 2.0 switch එකක් හරහා **pooling** හැකි වේ. එක් "Type-3" multiple logical device එකකට domains (servers) **16** ක් දක්වා ළඟා විය හැකිය. එමගින් සෑම server එකකටම උපරිම අවශ්‍යතාවයට මතකය සවි කිරීමෙන් (overprovisioning) වැළකිය හැකිය.

**ආදර්ශ ගණනය:** servers 8 ක් ගනිමු. එක් එක් එකට සාමාන්‍යයෙන් 256 GB ක් අවශ්‍ය වන අතර, සමහර විට 512 GB දක්වා අවශ්‍ය වේ. එහෙත් එකවර උපරිමයේ සිටින්නේ servers **2** ක් පමණක් යැයි උපකල්පනය කරමු.

- Pooling නැතිව: 8 × 512 = **4096 GB** සවි කළ යුතුය.
- Pooling සමඟ: 8 × 256 + 2 × 256 (උපරිමය සඳහා හවුල් මතකය) = **2560 GB**.
- ඉතිරිය: (4096 − 2560) ÷ 4096 = **37.5%**.

### 6. පැන්සලෙන් අභ්‍යාසය

1. NVLink 1 සබැඳියක යුගලයක වේගය 20 Gb/s සහ දිශාවකට යුගල 8 නම්, සබැඳියක දෙදිශාවේම bandwidth කීයද? P100 හි සබැඳි 4 ම එකට කීයද?
2. A100 සබැඳියක දිශාවකට යුගල 4 ක් තිබේ. සබැඳි 12 ක සංඥා රැහැන් (රැහැන් 2 = යුගලය 1) මුළු ගණන කීයද?
3. GPU 4 ක් සෘජුව සම්පූර්ණ mesh එකකින් සම්බන්ධ කිරීමට සබැඳි කීයක් අවශ්‍යද? GPU 16 ක් සඳහා?
4. 40 GB දත්ත PCIe Gen 4 x16 host staging මගින් සහ A100 NVLink (දිශාවකට 300 GB/s) මගින් යැවීමට ගතවන කාලය ගණනය කරන්න (වියදම් නොසලකා).
5. CXL x8 සබැඳියක් 32 GT/s (128b/130b) දී දිශාවකට ආසන්න වශයෙන් bandwidth කීයද?

(පිළිතුරු:
1. දිශාවකට 8 × 20 ÷ 8 = 20 GB/s, දෙදිශාවම **40 GB/s**. සබැඳි 4 ක් **160 GB/s**. මෙය Pascal white paper එකට ගැළපේ.
2. සබැඳියකට යුගල 4 × 2 දිශා = 8. × 12 = යුගල 96 = රැහැන් **192**.
3. 4 × 3 ÷ 2 = **6**. 16 × 15 ÷ 2 = **120**.
4. Staging: 40 ÷ 31.5 × 2 ≈ **2.54 s**. NVLink: 40 ÷ 300 ≈ **0.13 s**.
5. 32 × 8 × 128/130 ÷ 8 ≈ **31.5 GB/s**.)

**මෙම කොටසේ මූලාශ්‍ර:** NVIDIA නිල white papers (images.nvidia.com):
- *NVIDIA Tesla P100* (Pascal GP100), WP-08019-001_v01.1, පිටුව 20 (NVHS, 20 Gb/s, සබැඳි 4, 160 GB/s): <https://images.nvidia.com/content/pdf/tesla/whitepaper/pascal-architecture-whitepaper.pdf>
- *NVIDIA Tesla V100 GPU Architecture*, WP-08608-001_v1.1: <https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf>
  - මුද්‍රිත පිටුව 3: සබැඳි 6, 300 GB/s
  - මුද්‍රිත පිටුව 19–20: NVLink 2, Figure 12
- *NVIDIA A100 Tensor Core GPU Architecture*: <https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf>
  - පිටුව 17: PCIe Gen 4, 31.5 GB/s
  - පිටුව 52: 50 Gbit/s, යුගල 4, සබැඳි 12, 600 GB/s
  - පිටුව 70: DGX A100, NVSwitch 6, 4.8 TB/s

CXL Consortium (computeexpresslink.org):
- D. Das Sharma, "Compute Express Link" white paper (CXL 1.0): <https://computeexpresslink.org/wp-content/uploads/2023/12/0c1418_d9878707bbb7427786b70c3c91d5fbd1.pdf>
- D. Das Sharma සහ S. Tavallaei, "Compute Express Link 2.0 White Paper", 2020 නොවැම්බර්: <https://computeexpresslink.org/wp-content/uploads/2023/12/CXL2.0_White_Paper_November-2020_FINAL.pdf>

පිටපත් කාල වගුව සහ pooling ඉතිරිය ආදර්ශ ගණනය කිරීම් වේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

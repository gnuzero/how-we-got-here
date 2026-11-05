---
title: "Datacenter පරිමාණයේ Interconnect"
weight: 67
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 66
aliases:
  - /posts/61-interconnect-at-datacenter-scale/
tags: []
summary: "දහස් ගණන් GPU — topology සහ all-reduce ඕනෑම චිපයක peak FLOPS තරම්ම වැදගත් ය"
image_prompt: "System diagram of a multi-rack AI training cluster showing a fat-tree network topology, clean datacenter network architecture diagram style"
video_prompt: "25-second animation: a datacenter-scale fat-tree topology with an all-reduce operation propagating gradient data, clean technical animation"
schematics: "Diagram: rail-optimized fat-tree topology + all-reduce ring/tree communication pattern"
---

Post 56 servers කිහිපයක් ඇතුළත සහ හරහා multi-GPU scaling ආවරණය කළේය — NVLink, NVSwitch, GPUDirect RDMA. විශාල පරිමාණ training තවත් අනුපිළිවෙලකි: සිය ගණන් සිට දහස් ගණන් servers හරහා දහස් සිට දස දහස් ගණන් GPU. ඒවා වයර් කරන ආකාරය ඕනෑම තනි GPU එකක specs තරම්ම වැදගත් ය.

## Naive Wiring පරිමාණය නොවේ

සෑම server එකක්ම අනෙක් සෑම එකකටම සම්බන්ධ කිරීම සම්බන්ධතා quadratic වර්ධනය කරයි — දහස් ගණන් nodes වලට බොහෝ කලින්ම අසාධාරණ ය. සැබෑ clusters hierarchical switching භාවිතා කරයි; තෝරා ගත් ව්‍යුහය ලබා ගත හැකි bandwidth සහ බර training ගමනාගමනය යටතේ එම bandwidth *කෙතරම් සමානව* රැඳෙන්නේද යන්න දෙකම තීරණය කරයි.

## Fat-Tree, Training සඳහා සුසර කළ

Fat-tree switches ස්ථර කරයි — servers හි leaf switches, leaves සම්බන්ධ කරන spine switches — ඉහළ (ආදර්ශයෙන් non-oversubscribed) bisection bandwidth ඉලක්ක කරමින්; සැබෑ AI clusters තවමත් oversubscribe කරනවා හෝ rail-optimized විචල්‍යයන් භාවිතා කරනවා විය හැක. මෙය Post 42 හි datacenter networking අදහස දහස්-ගණන්-GPU පාලනයේ ය.

Rail-optimized නිර්මාණ තවදුරටත් විශාල training jobs ඇත්තටම ජනනය කරන සන්නිවේදන රටා වටා සුසර කරයි — සාමාන්‍ය datacenter ගමනාගමනය නොවේ. Training ගමනාගමනය වෙනස් ය; ඒ සඳහා ගොඩනැගූ topology එකක් සාමාන්‍ය එකකට වඩා ජය ගත හැක.

## All-Reduce බඳින රටාවයි

Data-parallel training (Post 46) සෑම පියවරකදීම සහභාගී සෑම GPU එකක්ම හරහා gradients සමමුහුර්ත කළ යුතු ය — එක් එක් batch slice එකෙන් දේශීය gradients, පසුව ඊළඟ පියවරට පෙර ඒකාබද්ධ කිරීම (සාමාන්‍යයෙන් සාමාන්‍යය). එම all-reduce සම්පූර්ණ training ධාවනයක් මත නිරන්තරයෙන් ධාවනය වේ. එහි කාර්යක්ෂමතාව අමු bandwidth *සහ* topology මත රඳා පවතී: ring හෝ tree ඇල්ගොරිතම භෞතික wiring දැනේ, න්‍යායික aggregate peak පමණක් නොවේ.

## Topology Spec Sheets ට වඩා ජය ගත හැක

නරක ලෙස නිර්මාණය කළ හෝ oversubscribed fabric එකක් මත විශිෂ්ට GPU, සැලකිල්ලෙන් rail-optimized ජාලයක් මත මධ්‍යස්ථ GPU වලට පරාජය විය හැක — මක්නිසාද යත් all-reduce බාධකය බවට පත් වන නිසා, ඕනෑම චිපයක peak FLOPS නොවේ. නැවතත් මාලා තේමාව: සංරචක specs (ට්‍රාන්සිස්ටර ගණන, clock, peak FLOPS) කතාවේ කොටසක් පමණි. කොටස් සම්බන්ධ වන ආකාරය — චිපයක buses (Phase 5) සිට training cluster එකක topology දක්වා — බොහෝ විට සැබෑ ලබා ගත් කාර්ය සාධනය තීරණය කරයි.

## ගැඹුරින්: Ring all-reduce පියවරෙන් පියවර, α–β ආකෘතිය සහ rails

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "GPU cluster AI training sinhala" සහ "data center network sinhala" සෙවුම්වලට අදාළ සිංහල පාඩමක් හමු නොවීය. all-reduce ඇල්ගොරිතම, rail-optimized ජාල හෝ GPU cluster topology ගැන සිංහල ලිපියක් හෝ වීඩියෝවක් අපට හමු නොවීය. එබැවින් මෙම කොටස Florida State University පර්යේෂකයන්ගේ ලිපියක්, NVIDIA හි NCCL බ්ලොගය සහ NVIDIA DGX SuperPOD reference architecture භාවිතා කර, ගණනය අතින් ගොඩනඟයි.

### 1. මූලික පද

- **Rank:** සාමූහික මෙහෙයුමකට සහභාගී වන එක් GPU එකක් (හෝ ක්‍රියාවලියක්) වේ.
- **Reduce-scatter:** සියලු ranks වල දත්ත එකතු කර, එකතුවේ වෙනස් කොටසක් (segment) එක් එක් rank එකට ලබා දීමයි.
- **All-gather:** එක් එක් rank එකේ කොටස අනෙක් සියලු ranks වලට බෙදා හැරීමයි.
- **ප්‍රමාද පදය (latency term, α):** පණිවිඩයක් යැවීමේ ස්ථාවර ආරම්භක පිරිවැයයි. එය ප්‍රමාණයෙන් ස්වාධීනය.
- **Bandwidth පදය (β):** byte එකකට ගතවන කාලයයි. එය 1/B ට සමානය.
- **Rail:** සෑම server එකකම "k වන GPU" (සහ එහි NIC එක) එකම leaf switch කාණ්ඩයකට සම්බන්ධ කරන පෙළයි.
- **Leaf / spine:** fat-tree ජාලයේ පහළ සහ ඉහළ switch ස්ථරයි (Post 42 හි k-ary fat-tree බලන්න).

### 2. Ring all-reduce: GPU 4 ක් සමඟ අතින්

Patarasuk සහ Yuan, *Bandwidth Optimal All-reduce Algorithms for Clusters of Workstations* (Florida State University; *J. Parallel Distrib. Comput.*, 2009), §4 හි ඇල්ගොරිතමය:
1. දත්ත කොටස් N කට බෙදනු ලැබේ.
2. **Reduce-scatter** වටයේ N − 1 පුනරාවර්තනවලදී, p_i යන rank එක SEG_(i−j) mod N කොටස p_(i+1) වෙත යවයි. ලබන්නා එය තමාගේ කොටසට එකතු කරයි.
3. ඉන්පසු **all-gather** වටයේ තවත් N − 1 පුනරාවර්තනවලදී අවසන් කොටස් ring එක වටා බෙදා හරිනු ලැබේ.

**ආදර්ශ දත්ත** (GPU එකකට කොටස් 4 ක්):

| | SEG0 | SEG1 | SEG2 | SEG3 |
|---|---|---|---|---|
| p0 | 1 | 2 | 3 | 4 |
| p1 | 10 | 20 | 30 | 40 |
| p2 | 100 | 200 | 300 | 400 |
| p3 | 1000 | 2000 | 3000 | 4000 |

අපේක්ෂිත එකතුව: `[1111, 2222, 3333, 4444]`.

**Reduce-scatter** (එක් එක් පුනරාවර්තනයේ යැවීම් 4 ම එකවර සිදු වේ):
- **පුනරාවර්තනය 1:**
  - p0 → p1 : SEG3 = 4 යවයි (p1 හි SEG3 = 44)
  - p1 → p2 : SEG0 = 10 යවයි (p2 හි SEG0 = 110)
  - p2 → p3 : SEG1 = 200 යවයි (p3 හි SEG1 = 2200)
  - p3 → p0 : SEG2 = 3000 යවයි (p0 හි SEG2 = 3003)
- **පුනරාවර්තනය 2:**
  - p0 → p1 : 3003 යවයි (p1 හි SEG2 = 3033)
  - p1 → p2 : 44 යවයි (p2 හි SEG3 = 444)
  - p2 → p3 : 110 යවයි (p3 හි SEG0 = 1110)
  - p3 → p0 : 2200 යවයි (p0 හි SEG1 = 2202)
- **පුනරාවර්තනය 3:**
  - p0 → p1 : 2202 යවයි (p1 හි SEG1 = **2222**)
  - p1 → p2 : 3033 යවයි (p2 හි SEG2 = **3333**)
  - p2 → p3 : 444 යවයි (p3 හි SEG3 = **4444**)
  - p3 → p0 : 1110 යවයි (p0 හි SEG0 = **1111**)

දැන් p_i සතුව සම්පූර්ණ SEG_i ඇත. ලිපියේ ප්‍රතිඵලය ද මෙයයි.

**All-gather:** තවත් පුනරාවර්තන 3 ක් සිදු වේ. පළමුව p0 1111 යවයි, p1 2222 යවයි, p2 3333 යවයි, p3 4444 යවයි. පුනරාවර්තන 3 න් පසු සියලු GPUs සතුව `[1111, 2222, 3333, 4444]` ඇත.

**ගණනය:**
- එක් GPU එකක් යවන්නේ පුනරාවර්තන 2 × (N − 1) = 6 කදී S/N = S/4 බැගිනි. එනම් මුළු 6S/4 = **1.5S** කි.
- සාමාන්‍යයෙන් එය 2(N − 1)/N × S වේ. Post 56 හි nccl-tests සාධකය මෙයයි.
- ලිපියේ Lemma 3–5 ඔප්පු කරන්නේ ඕනෑම all-reduce ඇල්ගොරිතමයකදී අවම වශයෙන් එක් ක්‍රියාවලියක් මෙතරම් දත්ත යැවිය යුතු බවයි. එබැවින් ring එක bandwidth අතින් ප්‍රශස්ත (bandwidth optimal) වේ (Theorem 1).
- ලිපිය අඩුපාඩුවද පිළිගනී: "the number of communication rounds is proportional to the number of processes" (සන්නිවේදන වට ගණන ක්‍රියාවලි ගණනට සමානුපාතික වේ, §1).

### 3. α–β ආකෘතිය: ring එදිරිව tree

Patarasuk–Yuan ලිපිය T(m) = β·m රේඛීය ආකෘතිය භාවිතා කරන අතර, ආරම්භක පිරිවැය නොසලකයි (§2.2). α එකතු කළ විට අපේ **සරල ආකෘතිය** මෙසේය:

- **Ring:** T ≈ 2(N − 1)·α + 2(N − 1)/N · S/B
- **Tree:** T ≈ 2·⌈log₂N⌉·α + 2(N − 1)/N · S/B

NVIDIA හි NCCL 2.4 බ්ලොගයට (Sylvain Jeaugey, 2019) අනුව:
- double binary trees "full bandwidth and a logarithmic latency" (සම්පූර්ණ bandwidth සහ ලඝුගණක ප්‍රමාදය) ලබා දෙයි.
- rings වල "latency scales linearly with the number of GPUs" (ප්‍රමාදය GPU ගණන සමඟ රේඛීයව වැඩි වේ).
- NVIDIA එය Summit supercomputer ඇතුළු විශාල යන්ත්‍ර කිහිපයක GPUs **24,576** දක්වා පරීක්ෂා කළේය. ring හා සසඳන විට trees මගින් ප්‍රමාදය (latency) වැඩි දියුණු වූ අතර, එම වෙනස පරිමාණය සමඟ වැඩි වී GPUs 24k දී **180× දක්වා** විය ("up to 180x improvement at 24k GPUs").

**ආදර්ශ ගණනය** (α = 5 µs සහ B = 50 GB/s ආදර්ශ අගයන් වේ):

| N | S | Ring | Tree |
|---|---|---|---|
| 8 | 1 MB | 0.105 ms | 0.065 ms |
| 1024 | 1 MB | **10.27 ms** | **0.14 ms** |
| 1024 | 1 GB | 50.2 ms | 40.1 ms |

- කුඩා පණිවිඩ සහ විශාල N සඳහා ring එකේ α පදය (2 × 1023 × 5 µs ≈ 10.2 ms) ආධිපත්‍යය දරයි.
- විශාල පණිවිඩ සඳහා දෙකම bandwidth පදයට (≈ 40 ms) ළඟා වේ.
- NCCL "automatically switches back to rings" (වැඩි bandwidth දෙන විට ස්වයංක්‍රීයව rings වෙත මාරු වන) බව බ්ලොගය කියයි.

### 4. Rails: DGX SuperPOD හි නිල නිර්මාණය

NVIDIA DGX SuperPOD (DGX H100) reference architecture:
- **Compute fabric:** "Rail-optimized, full fat-tree network with eight NDR400 connections per system" (පද්ධතියකට NDR400 සම්බන්ධතා අටක් සහිත, rail-optimized, සම්පූර්ණ fat-tree ජාලයකි).
- එය "balanced, full-fat tree" (සමතුලිත, සම්පූර්ණ fat-tree) එකකි.
- NDR InfiniBand හි උපරිම වේගය දිශාවකට **400 Gbps** වේ.
- **SU (scalable unit):** DGX H100 පද්ධති 32 කි. "Traffic per rail … is always one hop away from the other 31 nodes in a SU" (එක් rail එකක ගමනාගමනය, SU එකේ අනෙක් nodes 31 ට සැමවිටම එක් hop එකක් දුරින් පවතී). rails අතර ගමනාගමනය spine හරහා යයි.
- **වගුව 4:**
  - SU 1 = nodes 31, GPUs 248, leaf switches 8, spine switches 4.
  - SU 4 = nodes 127, GPUs 1016, leaf switches 32, spine switches 16.
- DGX H100 හි NVLink bandwidth එක GPU එකකට **900 GBps** වේ. NVIDIA හි Hopper Architecture In-Depth බ්ලොගයට අනුව එය NVLink සබැඳි 18 × දිශාවකට 25 GB/s = දිශාවකට 450 GB/s, දෙදිශාවේ **එකතුව** 900 GB/s වේ.
- වගුව 4 හි පාද සටහනට අනුව SU එකක nodes 31 ක් (32 නොවේ) ඇත්තේ UFM (Unified Fabric Manager) සඳහා DGX පද්ධතියක් ඉවත් කළ නිසාය. එලෙසම SU 4 = 4 × 32 − 1 = 127.

**වැඩ කළ උදාහරණය: hierarchical all-reduce** (NCCL බ්ලොගය "hierarchical, 2D ring" ක්‍රමයක් **නම් කරයි** පමණි, එහි පියවර විස්තර නොකරයි. පහත පියවර තුන, එනම් node තුළ reduce-scatter → nodes අතර all-reduce → node තුළ all-gather, සම්මත hierarchical ක්‍රමය පිළිබඳ **අපේ විස්තරයයි**).

**ආදර්ශ උපකල්පන:**
- gradient S = 2 GB, nodes 16, node එකකට GPU 8 යි.
- NVLink දිශාවකට **450 GB/s** (900 GBps යනු දෙදිශාවේ එකතුවයි; Hopper බ්ලොගය, ඉහත බලන්න). ගණනයේදී අපි සම්පූර්ණ 450 GB/s ලැබේ යැයි උපකල්පනය කරමු.
- NDR400 = **50 GB/s** (දිශාවකට).

**පියවර:**

1. **Node තුළ reduce-scatter:** 7/8 × 2 GB ÷ 450 GB/s ≈ **3.9 ms**. දැන් සෑම GPU එකක් සතුව 250 MB කොටසක් ඇත.
2. **Nodes අතර all-reduce (rail එකක් දිගේ):** k වන GPU එක අනෙක් nodes වල k වන GPU සමඟ, තමාගේම NIC එක හරහා 2 × 15/16 × 0.25 GB ÷ 50 GB/s ≈ **9.4 ms** ගනී. rails 8 ම එකවර වැඩ කරයි.
3. **Node තුළ all-gather:** ≈ **3.9 ms**.

**මුළු කාලය ≈ 17.2 ms.**

- **Node එකකට NIC එකක් පමණක් නම්:** පියවර 2 හිදී සම්පූර්ණ 2 GB එකම 50 GB/s සබැඳියෙන් යා යුතුය. එවිට 2 × 15/16 × 2 ÷ 50 = **75 ms** ගත වේ. එනම් 8 ගුණයකින් මන්දගාමී වේ.
- **Spine හරහා 2:1 oversubscription එකක් නම් (ආදර්ශ):** පියවර 2 හි bandwidth 25 GB/s දක්වා අඩු වී, එම පියවර **18.75 ms** දක්වා දෙගුණ වේ.

post එකේ "topology spec sheets ට වඩා ජය ගත හැක" යන්නෙහි අංකමය තේරුම මෙයයි. rail එකකට NIC එකක් තිබීම, rail එක තුළ එක් hop එකක් සහ oversubscription නොමැති fabric එකක් යන තුනම එකතු වී ඉහත 17 ms සහ 75+ ms අතර වෙනස තීරණය කරයි.

### 5. පැන්සලෙන් අභ්‍යාසය

1. N = 3, p0 = [1, 2, 3], p1 = [10, 20, 30], p2 = [100, 200, 300] සඳහා ring reduce-scatter හි පුනරාවර්තන 2 ලියන්න. අවසානයේ එක් එක් rank එක සතුව ඇත්තේ කුමන කොටසද?
2. N = 8 දී S = 800 MB නම්, එක් GPU එකක් all-reduce එකකදී යවන මුළු දත්ත ප්‍රමාණය කීයද?
3. α = 10 µs නම් N = 512 ring එකක ප්‍රමාද පදය කීයද? tree එකක (2⌈log₂N⌉α) කීයද?
4. nodes 32 × GPU 8, S = 4 GB, NVLink 450 GB/s, NIC 50 GB/s (rail එකකට එකක්) සඳහා hierarchical all-reduce කාලය ගණනය කරන්න.

(පිළිතුරු:
1. පුනරාවර්තනය 1: p0 → p1 SEG2 = 3 (p1: 33), p1 → p2 SEG0 = 10 (p2: 110), p2 → p0 SEG1 = 200 (p0: 202). පුනරාවර්තනය 2: p0 → p1 SEG1 = 202 (p1: **222**), p1 → p2 SEG2 = 33 (p2: **333**), p2 → p0 SEG0 = 110 (p0: **111**). p0 සතුව SEG0, p1 සතුව SEG1, p2 සතුව SEG2 වේ.
2. 2 × 7/8 × 800 = **1,400 MB**.
3. 2 × 511 × 10 µs = **10.22 ms**; 2 × 9 × 10 µs = **0.18 ms**.
4. 7/8 × 4 ÷ 450 ≈ 7.8 ms (දෙවරක් = 15.6 ms). කොටස 0.5 GB නිසා 2 × 31/32 × 0.5 ÷ 50 ≈ 19.4 ms. මුළු කාලය ≈ **35 ms**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Pitch Patarasuk සහ Xin Yuan, "Bandwidth Optimal All-reduce Algorithms for Clusters of Workstations", *Journal of Parallel and Distributed Computing* 69(2):117–124, 2009 පෙබරවාරි, DOI 10.1016/j.jpdc.2008.09.002. Florida State University හි කතුවරයාගේ ආයතනික පිටපත. §1, §2.2, §3 (Lemmas 3–5), §4 (Fig. 1, Theorem 1) භාවිත කළෙමු: <https://www.cs.fsu.edu/~xyuan/paper/09jpdc.pdf>
- Sylvain Jeaugey (NVIDIA), "Massively Scale Your Deep Learning Training with NCCL 2.4", NVIDIA Technical Blog, 2019 පෙබරවාරි 4: <https://developer.nvidia.com/blog/massively-scale-deep-learning-training-nccl-2-4/>
- NVIDIA, *DGX SuperPOD Reference Architecture (DGX H100)*, "Key Components" සහ "Network Fabrics" (වගුව 4) කොටස්:
  - <https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-h100/latest/dgx-superpod-components.html>
  - <https://docs.nvidia.com/dgx-superpod/reference-architecture-scalable-infrastructure-h100/latest/network-fabrics.html>
- NVIDIA, "NVIDIA Hopper Architecture In-Depth", NVIDIA Technical Blog, 2022 මාර්තු 22 (NVLink සබැඳි 18, දිශාවකට 25 GB/s, මුළු 900 GB/s): <https://developer.nvidia.com/blog/nvidia-hopper-architecture-in-depth/>

α, B, gradient ප්‍රමාණ, node ගණන සහ 2:1 oversubscription ආදර්ශ අගයන් වේ. 900 GBps දෙදිශාවේ එකතුවක් බව දැන් NVIDIA මූලාශ්‍රයකින් තහවුරුය.


---
title: "Multi-GPU Scaling"
weight: 57
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 56
tags: []
summary: "එක් GPU එකක් සීමිත ය — GPU අතර interconnect ඊළඟ බිත්තිය බවට පත් වේ"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean technical animation"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

එක් GPU එකකට සීමිත compute සහ සීමිත HBM (Post 54) ඇත. අද විශාලතම ආකෘතිවලට බොහෝ GPU අවශ්‍ය ය — එක් server එකක, පසුව cluster එකක් හරහා — සහ එම GPU එකිනෙකා සමඟ කතා කරන ආකාරය බොහෝ විට ඕනෑම තනි GPU එකක peak specs තරම්ම සැබෑ throughput තීරණය කරයි.

## වැඩ බෙදීම නොමිලේ නොවේ

Post 46 ආවරණය කළේ data-parallel සහ model-parallel බෙදීම් *ඇයි* බොහෝ විට අවශ්‍යද යන්නයි. කාර්යක්ෂමතාව රඳා පවතින්නේ GPU දත්ත හුවමාරු කරන වේගය මත ය. සන්නිවේදනය එක් එක් GPU හි compute ට සාපේක්ෂව මන්දගාමී නම්, peers එකිනෙකා බලා සිටිමින් stall වේ — නැවතත් මතක බිත්තිය (Post 35), දැන් CPU-to-DRAM වෙනුවට GPU-to-GPU සබැඳිවලට යොදන ලදී.

## එක් Server එකක් ඇතුළත සෘජු මාර්ග

Post 37 NVLink හඳුන්වා දුන්නේ CPU-මධ්‍යස්ථ PCIe මාර්ගය මඟහරින ඉහළ-bandwidth GPU-to-GPU interconnect එකක් ලෙස. Server එකක් ඇතුළත, NVSwitch එය all-to-all බවට පත් කරයි: සෑම GPU එකක්ම අනෙක් සෑම එකකටම PCIe සහ host හරහා නොව NVLink bandwidth එකේ ළඟා වේ. නිරන්තරයෙන් විශාල gradients හුවමාරු කරන workloads සඳහා, එම සෘජු මාර්ගය බොහෝ විට ඕනෑම හුදකලා peak-FLOPS අංකයකට වඩා ලබා ගත් training throughput තීරණය කරයි.

## එක් පෙට්ටියක් ඉක්මවා

විශාල training බොහෝ servers හරහා විහිදේ. Post 42 හි RDMA අදහස් ආපසු එයි: GPUDirect RDMA ජාල adapter එකකට host DRAM හරහා අමතර copies නොමැතිව servers හරහා GPU මතකය කියවීමට හෝ ලිවීමට ඉඩ දෙයි — එම "hops අවම කරන්න, සෘජු bandwidth උපරිම කරන්න" ඔට්ටුවම, දැන් cluster පරිමාණයේ.

## මෙම මාලාව නැවත නැවත නම් කරන දර්ශනය

සෘජු GPU-to-GPU මාර්ග, අනවශ්‍ය hops අඩුව, interconnect first-class සීමාවක් ලෙස — මෙම මාලාව යොමු කර ඇති අභිරුචි GPU මතක fabric පිටුපස ඇති එම දර්ශනයම: එක් වෙළෙන්දෙකුගේ stack එකක් ඇතුළත proprietary GPU fabrics කරන දේට විවෘත, PCIe-පදනම් ප්‍රවේශයක්. Phase 10 නූල ඇත්තටම datacenter පරිමාණයේ නැවත ගනී — එක් පෙට්ටියක GPU කිහිපයක් නොව, training cluster එකක් හරහා දහස් ගණනක්, aggregate theoretical compute සම්බන්ධීකරණයට නැති නොවන පරිදි වයර් කරන ලද.

## ගැඹුරින්: Amdahl, Gustafson සහ gradient සමමුහුර්තකරණයේ කාල ගණිතය

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "multi GPU sinhala" සහ "SLI crossfire sinhala" සෙවුම්වලට ලැබුණේ ක්‍රීඩා පරිගණක සඳහා graphics card තෝරා ගැනීම ගැන සිංහල වීඩියෝ පමණි (උදා. "Practically everything" නාලිකාව; අප හඳුනාගත්තේ මාතෘකාවෙන් පමණි, නැරඹුවේ නැත). AI training සඳහා GPU කිහිපයක් පරිමාණය කිරීම, all-reduce හෝ Amdahl නියමය ගැන සිංහල පාඩමක් අපට හමු නොවීය. එබැවින් මෙම කොටස John Gustafson ගේ 1988 ලිපිය, NVIDIA හි nccl-tests ලේඛනය සහ A100 whitepaper භාවිතා කර, ගණනය මුල සිට ගොඩනඟයි.

### 1. මූලික පද

- **දත්ත-සමාන්තර පුහුණුව (data-parallel training):** සෑම GPU එකකම ආකෘතියේ සම්පූර්ණ පිටපතක් ඇත. එක් එක් GPU එක batch එකේ වෙනස් කොටසක් සකසයි.
- **Gradient:** එක් පියවරකදී සෑම පරාමිතියක්ම (parameter) වෙනස් කළ යුතු දිශාවයි. පරාමිති ගණනට සමාන සංඛ්‍යා ප්‍රමාණයකි.
- **All-reduce:** සෑම GPU එකකම ඇති gradients එකතු කර, එම එකතුව සෑම GPU එකකටම ලබා දෙන සාමූහික මෙහෙයුමයි (collective operation).
- **දැඩි පරිමාණය (strong scaling):** ගැටලුවේ ප්‍රමාණය නියතව තබා GPU වැඩි කිරීමයි. මෙහිදී ඉලක්කය වේගවත් වීමයි.
- **දුර්වල/පරිමාණිත පරිමාණය (weak/scaled scaling):** GPU එකකට වැඩ ප්‍රමාණය නියතව තබා GPU වැඩි කිරීමයි. මෙහිදී මුළු ගැටලුව විශාල වේ.
- **පරිමාණ කාර්යක්ෂමතාව (scaling efficiency):** ලැබුණු වේගවත් වීම ÷ GPU ගණනයි.
- **අතිච්ඡාදනය (overlap):** gradient සන්නිවේදනය, ඉතිරි ගණනය කිරීම් සමඟ එකවර සිදු කිරීමයි.

### 2. Amdahl සහ Gustafson

Gustafson ගේ "Reevaluating Amdahl's Law" (Communications of the ACM, 1988) ලිපිය සූත්‍ර දෙකම දක්වයි. s = අනුක්‍රමික (serial) කොටස සහ N = සකසන ඒකක ගණන නම්:

- **Amdahl (ස්ථාවර ප්‍රමාණය):** Speedup = 1 / (s + (1 − s)/N). N අනන්තය කරා යන විට උපරිමය 1/s වේ.
- **Gustafson–Barsis (පරිමාණිත):** Scaled speedup = N + (1 − N)·s′

Gustafson වාර්තා කළේ, s = 0.4–0.8% වූ Sandia යෙදුම් තුනක් සඳහා processors **1024** ක hypercube එකක **1021**, **1020** සහ **1016** වේගවත් වීම් ලබා ගත් බවයි. ඔහුගේ තර්කය මෙයයි: "in practice, the problem size scales with the number of processors" (ප්‍රායෝගිකව, ගැටලුවේ ප්‍රමාණය processors ගණන සමඟ වර්ධනය වේ).

**අපේ පරීක්ෂාව:** Gustafson සූත්‍රයෙන් s′ = 0.4% → 1024 − 1023 × 0.004 ≈ **1020**, s′ = 0.8% → 1024 − 1023 × 0.008 ≈ **1016**. එහෙත් Amdahl සූත්‍රයෙන් s = 0.4% → 1 / (0.004 + 0.996/1024) ≈ **201** පමණි. එබැවින් 1021/1020/1016 යනු පරිමාණිත (scaled) වේගවත් වීම් මිස ස්ථාවර ප්‍රමාණයේ වේගවත් වීම් නොවේ. (1021 ගැළපෙන්නේ s′ ≈ 3/1023 ≈ 0.3% ට ය. එබැවින් ලිපියේ 0.4–0.8% පරාසය ආසන්න අගයක් ලෙස සැලකිය යුතුය.)

**වැඩ කළ උදාහරණය (s = 0.05 ආදර්ශ අගයකි):**

| | N = 8 | N = 1024 |
|---|---|---|
| Amdahl | 1 / (0.05 + 0.95/8) ≈ **5.93** | ≈ **19.6** (උපරිමය 20) |
| Gustafson | 8 − 7 × 0.05 = **7.65** | 1024 − 1023 × 0.05 ≈ **973** |

Training භාෂාවෙන් කිවහොත්:
- **ස්ථාවර global batch** එකක් GPU අතර බෙදීම Amdahl ලෝකයයි.
- **GPU එකකට ස්ථාවර batch** එකක් තබා GPU එකතු කිරීම (global batch එක වර්ධනය වේ) Gustafson ලෝකයයි.

එහෙත් training වල "s" ලෙස ප්‍රධාන වශයෙන් ක්‍රියා කරන්නේ gradient සමමුහුර්තකරණයයි. එය ගණනය කරමු.

### 3. All-reduce සඳහා අවම කාලය

NVIDIA හි nccl-tests *PERFORMANCE.md* ලේඛනයට අනුව, n GPUs (ranks) සහ සෑම GPU එකකටම පිටතට B bandwidth ඇත්නම්, S bytes all-reduce එකක් සඳහා හොඳම කාලය:

**t = (S / B) × 2(n − 1)/n**

- එක් එක් මූලද්‍රව්‍යයට එකතු කිරීම් n − 1 ක් සහ පැවරුම් n ක් අවශ්‍ය වේ. එබැවින් දත්ත හුවමාරු 2(n − 1) ක් සිදු වේ.
- එය ring, tree හෝ වෙනත් ඕනෑම send/receive ඇල්ගොරිතමයකට පොදුය.
- මෙම 2(n − 1)/n සාධකය යොදා nccl-tests "bus bandwidth" (busbw) වාර්තා කරයි. එවිට මිනුම දෘඪාංගයේ උපරිමය සමඟ සෘජුව සැසඳිය හැකිය.

| n | 2(n − 1)/n |
|---|---|
| 2 | 1.00 |
| 8 | 1.75 |
| 1024 | ≈ 2.00 |

**වැදගත් නිරීක්ෂණය:** GPU ගණන වැඩි කළත් එක් GPU එකක් යවන දත්ත ප්‍රමාණය ≈ 2S දක්වා පමණක් වර්ධනය වේ. ring ඇල්ගොරිතමය එය කරන්නේ කෙසේද යන්න Post 61 හි පියවරෙන් පියවර ව්‍යුත්පන්න කෙරේ.

### 4. වැඩ කළ උදාහරණය: එකම server එකේ NVLink එදිරිව PCIe

NVIDIA A100 whitepaper (p.17) අනුව:
- A100 හි NVLink මුළු bandwidth එක **600 GB/s** වේ (දිශාවකට 300 GB/s).
- PCIe Gen 4 x16 **31.5 GB/s** වේ (දිශාවකට).

**ආදර්ශ ආකෘතිය:**
- පරාමිති බිලියන 1 යි. FP16 gradients (bytes 2) නිසා S = **2 GB**.
- GPU n = 8 යි.
- එක් පියවරක ගණනය කිරීම් **100 ms** වේ.

| සබැඳිය | t = (2 GB / B) × 1.75 | අතිච්ඡාදනය නැතිව කාර්යක්ෂමතාව | GPU 8 න් වේගවත් වීම |
|---|---|---|---|
| NVLink (300 GB/s) | ≈ **11.7 ms** | 100 / 111.7 ≈ **90%** | ≈ **7.2×** |
| PCIe Gen 4 (31.5 GB/s) | ≈ **111 ms** | 100 / 211 ≈ **47%** | ≈ **3.8×** |

- මේවා **න්‍යායික අවම** අගයන් වේ. සැබෑ busbw මීට අඩුය. PCIe හිදී host/root complex හවුල් වීම නිසා තත්ත්වය වඩාත් නරක විය හැකිය.
- **සම්පූර්ණ අතිච්ඡාදනයක්** ඇත්නම් පියවර කාලය = max(ගණනය, සන්නිවේදනය) වේ. NVLink හිදී 100 ms (≈100%) වන අතර, PCIe හිදී 111 ms (≈90%) වේ.
- post එක කියන "GPU එකිනෙකා බලා සිටිමින් stall වේ" යන්නෙහි සංඛ්‍යාත්මක තේරුම මෙයයි. PCIe මත, GPU 8 න් අඩක් පමණ කාලය සන්නිවේදනය බලා සිටී.

### 5. පෙට්ටියෙන් පිටත: GPUDirect RDMA

NVIDIA හි *GPUDirect RDMA* ලේඛනය (docs.nvidia.com, "Overview" සහ "Supported Systems") මෙසේ කියයි:
- මෙම තාක්ෂණය Kepler-පන්තියේ GPUs සහ CUDA 5.0 සමඟ හඳුන්වා දෙන ලදී.
- එය "standard features of PCI Express" භාවිතා කර GPU එක සහ ජාල අතුරුමුහුණතක් (network interface) වැනි තෙවන-පාර්ශ්ව උපාංගයක් අතර සෘජු මාර්ගයක් සපයයි.
- උපාංග දෙකම එකම upstream PCIe root complex එක බෙදා ගත යුතුය.
- මාර්ගයේ PCIe switches පමණක් ඇති විට කාර්ය සාධනය හොඳම වේ. CPU/IOH එකක් හරහා යන විට මන්දගාමී වේ. QPI/HT සබැඳියක් හරහා යන විට "extremely performance-limited" විය හැකිය.

එබැවින් GPU servers වල NIC එක GPU එකට ආසන්න PCIe switch එකක තැබීම සාමාන්‍ය නිර්මාණයකි. Post 42 හි RDMA "copy මඟහැරීම" මෙහිදී host DRAM මඟහැරීම බවට පත් වේ.

### 6. පැන්සලෙන් අභ්‍යාසය

1. s = 0.1 නම්, N = 4 සඳහා Amdahl speedup කීයද? N = 16 සඳහා Gustafson scaled speedup කීයද?
2. පරාමිති මිලියන 500, FP32 gradients (bytes 4), n = 4, B = 50 GB/s නම් අවම all-reduce කාලය කීයද?
3. ගණනය 90 ms, සන්නිවේදනය 30 ms නම්, අතිච්ඡාදනය නැතිව සහ සම්පූර්ණ අතිච්ඡාදනය සහිතව කාර්යක්ෂමතාව කීයද?
4. n = 16 සඳහා 2(n − 1)/n සාධකය කීයද?

(පිළිතුරු:
1. 1 / (0.1 + 0.9/4) ≈ **3.08**; 16 − 15 × 0.1 = **14.5**.
2. S = 2 GB → (2/50) × 1.5 = **60 ms**.
3. 90/120 = **75%**; max(90, 30) = 90 → **100%**.
4. 30/16 = **1.875**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- John L. Gustafson, "Reevaluating Amdahl's Law", *Communications of the ACM* 31(5), 1988. කතුවරයාගේ වෙබ් අඩවියේ පිටපත: <http://www.johngustafson.net/pubs/pub13/amdahl.htm>
- NVIDIA, *nccl-tests: Performance reported by NCCL tests* (doc/PERFORMANCE.md, "AllReduce" සහ "Summary" කොටස්): <https://github.com/NVIDIA/nccl-tests/blob/master/doc/PERFORMANCE.md>
- NVIDIA, *NVIDIA A100 Tensor Core GPU Architecture* whitepaper, 2020, p.17 (NVLink 600 GB/s; PCIe Gen 4 31.5 GB/s): <https://images.nvidia.com/aem-dam/en-zz/Solutions/data-center/nvidia-ampere-architecture-whitepaper.pdf>
- NVIDIA, *GPUDirect RDMA* (CUDA ලේඛනය, §1 Overview, §3.4 Supported Systems): <https://docs.nvidia.com/cuda/gpudirect-rdma/index.html>

s = 0.05, පරාමිති බිලියන 1, ගණනය 100 ms සහ අභ්‍යාසවල අගයන් ආදර්ශ අගයන් වේ.


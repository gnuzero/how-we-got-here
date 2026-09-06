---
title: "Multi-GPU Scaling"
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 56
tags: []
summary: "එක් GPU එකක් සීමිත ය — GPU අතර interconnect ඊළඟ බිත්තිය බවට පත් වේ"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean animation — direct tie-in to BridgeStack GPU memory fabric"
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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

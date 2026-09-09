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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

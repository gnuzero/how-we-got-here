---
title: "දත්ත මධ්‍යස්ථාන ජාලකරණය සහ RDMA"
weight: 43
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 42
tags: []
summary: "එක් පාලිත fabric එකක් ඇතුළත, kernel පිටපත් බද්ද වේ — RDMA සහ topology වයර් එක ආපසු මිලදී ගනී"
image_prompt: "System diagram comparing a traditional TCP/IP data path against an RDMA kernel-bypass data path, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data copied multiple times through the kernel vs a direct RDMA transfer bypassing the CPU, clean comparative animation — ties to BridgeStack GPU memory fabric"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP kernel-bypass comparison + RDMA verbs data path + fat-tree datacenter topology"
---

TCP/IP (Post 41) විවිධාකාර, විශ්වාසනීය නොවන, ගෝලීය ජාලයක් සඳහා නිවැරදි backbone එකයි. එක් දත්ත මධ්‍යස්ථානයක් ඇතුළත — එක් හිමිකරුවෙක්, කෙටි දුරවල්, ඉංජිනේරු කළ fabric එකක් — එම kernel-මැදිහත් මාර්ගයම සෑම microsecond එකක්ම සහ bandwidth හි සෑම byte එකක්ම වියදම් කරන workloads සඳහා overhead ලෙස පෙනෙන්නට පටන් ගනී.

## Overhead එක පැමිණෙන්නේ කොහෙන්ද

සාම්ප්‍රදායික TCP/IP send එකක් application දත්ත kernel buffer එකකට පිටපත් කරයි, stack එක ධාවනය කරයි, සහ NIC එකට transmit කිරීමට ඉඩ දෙයි — receive මත පිළිබිඹු වේ. එක් එක් පියවර CPU cycles වැය කරයි, සහ latency සඳහා ඊටත් නරක, මතක ස්ථාන අතර සැබෑ *පිටපත්*. සාමාන්‍ය web ගමනාගමනයට හොඳයි. තත්පරයකට බොහෝ වාරයක් gradients හුවමාරු කරන HPC හෝ බෙදාහැරුණු ML training සඳහා මිල අධිකයි.

## RDMA: දත්ත මාර්ගයෙන් Kernel සහ CPU එළියට

RDMA (Remote Direct Memory Access) එක් යන්ත්‍රයකට තවත් යන්ත්‍රයක මතකය receiver ගේ CPU හෝ kernel එක transfer එක babysit නොකර කියවීමට හෝ ලිවීමට ඉඩ දෙයි. RDMA-හැකි adapter එක ජාලය හරහා bytes මතකයේ-සිට-මතකයට ගෙන යයි. Post 37 හි GPUDirect RDMA හි එකම අදහස — පිටපත් අඩු, CPU ගණනය සඳහා නිදහස් — සම්පූර්ණ යන්ත්‍ර අතර යොදන ලද, node එකක GPUs අතර පමණක් නොව.

## Fat-Tree: දහස් ගණනක් සමානව වයර් කිරීම

යන්ත්‍ර දහස් ගණනකදී, topology තීරණය කරන්නේ bandwidth සැබෑද නැතහොත් ප්‍රචාරණය පමණක්ද යන්නයි. Fat-tree එකක් switches සකසන්නේ ධාරිතාව ධුරාවලිය ඉහළට පුරෝකථනය කළ හැකි ලෙස පරිමාණය වන පරිදිය, බර යටතේ පමණක් පෙනෙන bottleneck සබැඳි සඟවනවා වෙනුවට. විශාල training clusters (Phase 10) එම හිතාමතා සැලසුම සමඟ වයර් කෙරේ — ad-hoc පහසුවක් නොවේ.

## මෙම මාලාවේ Fabric වැඩ සමඟ එකම දර්ශනය

අනවශ්‍ය පිටපත් ඉවත් කරන්න; අවශ්‍ය නොවන තැන kernel එක bypass කරන්න; topology ඉඩ දෙන තරමට සෘජුව දත්ත ගෙන යාමට දෘඪාංගයට ඉඩ දෙන්න. Post 37 එය GPU nodes ඇතුළත සහ හරහා යොදුවේය; මෙම පෝස්ට් එක එය යන්ත්‍ර-සිට-යන්ත්‍ර ජාලකරණයට යොදයි. එක්ව ඒවා Phase 7 හි බෙදාහැරුණු පද්ධති වෙත භාර දෙයි — web ට පෙර අන්තර්ජාලයේම මුල් find-and-talk පද්ධතිවලින් පටන් ගනිමින්.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

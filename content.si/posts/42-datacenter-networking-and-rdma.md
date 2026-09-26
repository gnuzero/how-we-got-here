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

## ගැඹුරින්: පිටපත් බද්ද, RDMA මෙහෙයුම් සහ fat-tree ගණිතය

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** RDMA, kernel bypass හෝ fat-tree topology ගැන සිංහල විකිපීඩියා ලිපියක්, සිංහල පාඩමක් හෝ වීඩියෝවක් අපට හමු නොවීය. "RDMA sinhala", "data center network sinhala", "fat tree topology sinhala" සෙවුම්වලට අදාළ සිංහල ප්‍රතිඵල නොලැබුණි. NIE A/L ICT ගුරු මාර්ගෝපදේශයේ ජාල topology (bus, star, ring ආදිය) ඇතත් දත්ත මධ්‍යස්ථාන fabric ගැන කිසිවක් නැත. එබැවින් මෙම කොටස IETF RFC ලේඛන දෙකක් සහ fat-tree ගෘහ නිර්මාණය හඳුන්වා දුන් SIGCOMM 2008 පත්‍රිකාව මත පදනම් වේ.

### 1. මූලික පද

- **Kernel සහ පද්ධති ඇමතුම (system call):** යෙදුමකට ජාල කාඩ්පතක් කෙලින්ම ස්පර්ශ කළ නොහැක. එයට kernel එකෙන් ඉල්ලිය යුතුය. සෑම ඉල්ලීමක්ම පද්ධති ඇමතුමකි.
- **පිටපත (copy):** දත්ත මතකයේ එක් ස්ථානයකින් කියවා තවත් ස්ථානයකට ලිවීමයි. එයට මතක bandwidth වැය වේ.
- **පිටපත් වැළැක්වීම (copy avoidance / zero-copy):** ජාල කාඩ්පත දත්ත කෙලින්ම යෙදුමේ buffer එකට තැබීමයි.
- **RDMA (Remote Direct Memory Access):** RFC 5040 හි නිර්වචනයට අනුව, දුරස්ථ පද්ධතියක මතකයට ප්‍රවේශ වන ක්‍රමයකි. එහිදී දත්ත යා යුතු දුරස්ථ ස්ථානය දේශීය පද්ධතියම නියම කරයි. දුරස්ථ පද්ධතියේ RDMA හැකි NIC එකක් (RNIC) ඇති විට, එම ප්‍රවේශය "without interrupting the processing of the CPU(s)" සිදු වේ.
- **STag (Steering Tag):** දුරස්ථ පාර්ශ්වයට ලිවීමට/කියවීමට ඉඩ දෙන buffer එකක හඳුනාගැනීමේ අංකයයි.
- **Bisection bandwidth:** ජාලය සමාන කොටස් දෙකකට කැපූ විට, එම කැපුම හරහා යා හැකි මුළු bandwidth එකයි.
- **Oversubscription (අධි-දායකත්ව අනුපාතය):** hosts වලට ඉල්ලිය හැකි bandwidth එක සහ ජාලයට සැබවින්ම ලබා දිය හැකි bandwidth එක අතර අනුපාතයයි.

### 2. පිටපත් සිදු වන්නේ කොහේද — RFC 4297

IETF හි RFC 4297 "RDMA over IP Problem Statement" (2005 දෙසැම්බර්, §2, පිටු 3–4) මෙසේ කියයි:
- හොඳින් ක්‍රියාත්මක කළ පද්ධතියක පිටපත් දෙකක් සිදු වේ: ජාල අතුරුමුහුණත → kernel buffer, සහ kernel → යෙදුම් buffer.
- ඒ සෑම එකක්ම මතක බස් එක **දෙවරක්** (කියවීමට සහ ලිවීමට) තරණය කරයි.
- 1989 Clark සහ සගයන්ගේ මිනුම්වලට අනුව TCP ක්‍රියාවලි වියදමෙන් **64%** ක් දත්ත ස්පර්ශ කරන මෙහෙයුම් නිසා ඇති විය. **48%** ක් පිටපත් කිරීම නිසාම විය.
- බයිට් 1500 Ethernet packets සමඟ කළ තවත් අධ්‍යයනයක මුළු සැකසීමේ කාලයෙන් **20%** ක් පිටපත් කිරීමට ගියේය.
- කුඩා පණිවිඩවලදී (බයිට් 128 ට අඩු) වැඩිපුර බලපාන්නේ packet එකකට වන වියදමයි (per-packet overhead).

### 3. මතක bandwidth ගණනය: ජාලය මතකයට වඩා වේගවත් වූ විට

RFC 4297 (§3, පිටුව 7) 2001 උදාහරණයක් දෙයි:
- 1.2 GHz Athlon යන්ත්‍රයක් දත්ත ලැබීමේදී ඒවා මතකය තුළ **3** වතාවක් ගෙන යයි: NIC එක මතකයට තැබීම (1), සහ CPU එක පිටපත් කිරීමේදී කියවීම සහ ලිවීම (2).
- මතක bandwidth **1 GB/s** නම්, හැසිරවිය හැකි ජාල bandwidth එක 1 ÷ 3 GB/s ≈ 0.333 GB/s × 8 = **2.67 Gb/s** පමණි. එයත් යන්ත්‍රය වෙනත් කිසිවක් නොකරන විට පමණි.
- එවකට server එකකට 1 Gb/s සබැඳි දෙකක් (2 Gb/s) සාමාන්‍ය විය. 2.67 Gb/s යනු 100% භාවිතයේ සෛද්ධාන්තික උපරිමයයි. එය කළ නොහැකිය, තවද එවිට යන්ත්‍රය වෙන කිසිවක් කළ නොහැකිය. එබැවින් RFC 4297 නිගමනය කරන්නේ 2001 දී යන්ත්‍රයට සන්නිවේදන ඉල්ලුමට "basically could not keep up" (මූලික වශයෙන් ගැළපිය **නොහැකි** විය) යනුවෙනි.

**එම ගණනය zero-copy සමඟ (ආදර්ශ):** RDMA සමඟ NIC එක දත්ත කෙලින්ම යෙදුම් buffer එකට තබයි. එවිට මතක තරණ **1** ක් පමණි. එම 1 GB/s මතකයෙන්ම 1 × 8 = **8 Gb/s** ක් හැසිරවිය හැකිය. එය තුන් ගුණයකි.

**අද දිනට ආදර්ශ පරිමාණය:** 100 Gb/s NIC එකක් = 12.5 GB/s.

| මාර්ගය | මතක තරණ | අවශ්‍ය මතක bandwidth |
|---|---|---|
| සාම්ප්‍රදායික (පිටපත් 2) | 3 | 3 × 12.5 = **37.5 GB/s** |
| RDMA (zero-copy) | 1 | **12.5 GB/s** |

DDR4-3200 නාලිකාවක් 3200 MT/s × බයිට් 8 = 25.6 GB/s ලබා දෙයි (Post 34 ද බලන්න). 37.5 ÷ 25.6 ≈ 1.46. එනම් පිටපත් සහිත මාර්ගයට DDR4 නාලිකා **එකහමාරක් පමණ** ජාලය සඳහා පමණක් වැය වේ.

### 4. RDMA මෙහෙයුම් තුන (RFC 5040, §2, පිටු 12–14)

- **RDMA Write:** දේශීය buffer එකක අන්තර්ගතය දුරස්ථ buffer එකකට යවයි. පණිවිඩය විස්තර කරන්නේ ගමනාන්ත (Data Sink) buffer එක පමණි.
- **RDMA Read:** දේශීය පාර්ශ්වය දුරස්ථ buffer එකක දත්ත ඉල්ලයි. එය එක් Read Request පණිවිඩයකින් සහ එක් Read Response පණිවිඩයකින් සමන්විත වේ.
- **Send:** දත්ත දුරස්ථ පාර්ශ්වයේ "untagged" buffer එකකට යවයි. ලැබෙන තැන තීරණය කරන්නේ ග්‍රාහකයයි.

**පියවරෙන් පියවර: A සිට B ට 1 MB ක් RDMA Write මගින් යැවීම**
1. B තමන්ගේ buffer එක ලියාපදිංචි කර, STag, offset සහ දිග (1 MB) A ට දන්වයි ("Tagged Buffer", RFC 5040).
2. A තම RNIC එකට "මෙම 1 MB, B හි මෙම STag + offset වෙත" යැයි කියයි.
3. B හි RNIC එක ලැබෙන දත්ත කෙලින්ම එම buffer එකට ලියයි. B හි kernel එකට පිටපතක් නැත. B හි CPU එකට බාධාවක් නැත.
4. B ට දැනගැනීමට අවශ්‍ය නම්, A ට පසුව කුඩා Send පණිවිඩයක් යැවිය හැකිය.

### 5. Fat-tree: switches සහ hosts ගණන් කිරීම

Al-Fares, Loukissas සහ Vahdat ගේ "A Scalable, Commodity Data Center Network Architecture" (SIGCOMM 2008, §2.2) පත්‍රිකාවේ **k-ary fat-tree** එක මෙසේය:
- ports k ඇති එකම වර්ගයේ switches පමණක් භාවිතා කරයි.
- **pods k** කි. සෑම pod එකකම edge switches k/2 සහ aggregation switches k/2 ක් ඇත.
- සෑම edge switch එකක්ම hosts k/2 කට සහ aggregation switches k/2 කට සම්බන්ධ වේ.
- core switches **(k/2)²** කි. සෑම core switch එකකටම සෑම pod එකකටම port එක බැගින් ඇත.
- මුළු hosts **k³/4**.

| k | Hosts k³/4 | Switches k² + (k/2)² | pod දෙකක් අතර කෙටිම මාර්ග (k/2)² |
|---|---|---|---|
| 4 | 16 | 16 + 4 = 20 | 4 |
| 8 | 128 | 64 + 16 = 80 | 16 |
| 48 | **27,648** | 2304 + 576 = **2,880** | 576 |

පත්‍රිකාව port 48 GigE switches භාවිතා කර hosts **27,648** කට සම්පූර්ණ bandwidth ලබා දිය හැකි බව පෙන්වයි (§1, §2.2). pod දෙකක් අතර කෙටිම මාර්ග (k/2)² ක් ඇති බවද එය කියයි (§3.1). එම මාර්ග හරහා ගමනාගමනය බෙදා හැරීම bandwidth ලබා ගැනීමේ රහසයි.

**Oversubscription (§2.1.2):**
- පත්‍රිකාව oversubscription අර්ථ දක්වන්නේ hosts අතර ලබා ගත හැකි නරකම-අවස්ථාවේ මුළු bandwidth එක සහ topology එකේ bisection bandwidth එක අතර අනුපාතය ලෙසයි.
- 1:1 යනු සියලු hosts වලට තම අතුරුමුහුණතේ පූර්ණ වේගයෙන් එකවර කතා කළ හැකි බවයි.
- **5:1** යනු සමහර රටාවලදී host bandwidth එකෙන් **20%** ක් පමණක් ලැබෙන බවයි.
- සාමාන්‍ය නිර්මාණ 1 Gb/s මත **2.5:1 (400 Mbps)** සිට **8:1 (125 Mbps)** දක්වා oversubscribe කර ඇත.

**ආදර්ශ උදාහරණය:** port 48 ක edge switch එකක ports 40 ක් hosts වලට සහ 8 ක් ඉහළට (එකම වේගයෙන්) යොදා ඇත්නම්, oversubscription = 40 : 8 = **5:1** වේ. fat-tree එකේ ports 24 පහළට සහ 24 ඉහළට යන නිසා එය **1:1** වේ.

**පිරිවැය (Table 1, §2.1.4):** 2008 දී port 48 GigE fat-tree එකකින් hosts 27,648 ක් 1:1 දී host එකකට **$0.3K** පමණ පිරිවැයකින් සම්බන්ධ කළ හැකි විය. සාම්ප්‍රදායික 10 GigE ධුරාවලියකින් hosts 20,480 ක් සඳහා host එකකට $1.8K විය.

### 6. දැන්ම උත්සාහ කරන්න (මෙම පිටුවේ vm-terminal lab එක)

පිටපත් සහ පද්ධති ඇමතුම් වල වියදම ඔබේම ඇසින් දකින්න. ඉහත ඇති VM එකේ මෙම විධාන දෙක ක්‍රියාත්මක කරන්න. දෙකම දළ වශයෙන් MB 100 ක් ගෙන යයි:

```
time dd if=/dev/zero of=/dev/null bs=512 count=200000
time dd if=/dev/zero of=/dev/null bs=64k count=1600
```

- පළමු විධානය බයිට් 512 × 200,000 = **102,400,000** බයිට් ගෙන යයි. එයට කියවීම්/ලිවීම් පද්ධති ඇමතුම් යුගල **200,000** ක් ගතවේ.
- දෙවැන්න 65,536 × 1,600 = **104,857,600** බයිට් ගෙන යයි. එයට යුගල **1,600** ක් පමණි.
- මෙම BusyBox dd එක `records in` / `records out` පමණක් පෙන්වයි; ගතවූ කාලය හෝ අනුපාතය නොපෙන්වයි. එබැවින් විධානවලට ඉදිරියෙන් ඇති `time` මඟින් `real` කාලය පෙන්වයි. අපේ ධාවනයේ පළමු විධානයට තත්පර **1.12** ක් ද, දෙවැන්නට තත්පර **0.06** ක් ද ගත විය. බ්‍රව්සරයේ අනුකරණය කළ (emulated) යන්ත්‍රයක් නිසා ඔබේ කාල සැබෑ යන්ත්‍රයකට වඩා බොහෝ වැඩි වනු ඇත. එහෙත් **කුඩා block එක මන්දගාමී** විය යුතුය. වෙනසට හේතුව දත්ත ප්‍රමාණය නොව ඇමතුම් ගණනයි. RFC 4297 හි "කුඩා පණිවිඩවලට packet එකකට වන වියදම ආධිපත්‍යය දරයි" යන්නම මෙයයි. RDMA ඇමතුමකට වන kernel වියදමද ඉවත් කරයි.

### 7. පැන්සලෙන් අභ්‍යාසය

1. k = 16 fat-tree එකක hosts, core switches සහ මුළු switches ගණන කීයද?
2. 10 Gb/s hosts සමඟ 4:1 oversubscription එකක, නරකම අවස්ථාවේ host එකකට ලැබෙන bandwidth එක කීයද?
3. මතක bandwidth 4 GB/s ඇති යන්ත්‍රයක, පිටපත් දෙකක් සහිතව (තරණ 3) හැසිරවිය හැකි උපරිම ජාල අනුපාතය Gb/s වලින් කීයද? zero-copy සමඟ?
4. RDMA Read එකකට පණිවිඩ කීයක් අවශ්‍යද? RDMA Write එකක් විස්තර කරන්නේ කුමන buffer එකද?
5. port 64 switch එකක ports 48 ක් පහළට සහ 16 ක් ඉහළට යොදා ඇත්නම් oversubscription අනුපාතය කීයද?

(පිළිතුරු:
1. 16³ ÷ 4 = **1,024** hosts. core (8)² = **64**. මුළු 16² + 64 = **320**.
2. 10 ÷ 4 = **2.5 Gb/s**.
3. 4 ÷ 3 × 8 ≈ **10.7 Gb/s**. zero-copy: 4 × 8 = **32 Gb/s**.
4. පණිවිඩ **2** (Read Request සහ Read Response). RDMA Write විස්තර කරන්නේ **ගමනාන්ත (Data Sink)** buffer එක පමණි.
5. 48 : 16 = **3:1**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- A. Romanow සහ සගයන්, *RDMA over IP Problem Statement*, RFC 4297, IETF, 2005 දෙසැම්බර්, §2 (පිටු 3–4) සහ §3 (පිටුව 7): <https://www.rfc-editor.org/rfc/rfc4297.txt>
- R. Recio සහ සගයන්, *A Remote Direct Memory Access Protocol Specification*, RFC 5040, IETF, 2007 ඔක්තෝබර්, §2 නිර්වචන (පිටු 12–14): <https://www.rfc-editor.org/rfc/rfc5040.txt>
- M. Al-Fares, A. Loukissas සහ A. Vahdat, "A Scalable, Commodity Data Center Network Architecture", *Proc. ACM SIGCOMM 2008*, §1, §2.1.2, §2.1.4 (Table 1), §2.2, §3.1. කතුවරයාගේ ආයතනික පිටපත: <https://cseweb.ucsd.edu/~vahdat/papers/sigcomm08.pdf>

අපි lab image එක (BusyBox v1.28.4) boot කර මෙම `time dd` විධාන දෙකම ධාවනය කළෙමු: `/dev/zero` සහ `/dev/null` ඇත, දෙකම සාර්ථකව අවසන් වේ. 100 Gb/s වගුව සහ edge switch උදාහරණය ආදර්ශ ගණනය කිරීම් වේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via the lab shortcode (lab type="...") if labs field is set
-->

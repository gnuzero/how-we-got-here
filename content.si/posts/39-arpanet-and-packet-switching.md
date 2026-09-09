---
title: "ARPANET සහ Packet Switching"
weight: 39
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 39
tags: []
summary: "Bursty පරිගණක ගමනාගමනය circuit switching බිඳ දැමුවේය — ARPANET packets සහ හවුල් සබැඳි ක්‍රියා කළ හැකි බව ඔප්පු කළේය"
image_prompt: "Historical network topology map of early ARPANET nodes connected via IMPs, clean historical network diagram style"
video_prompt: "20-second animation: a message broken into packets, routed hop-by-hop, reassembled at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: early ARPANET topology map + packet switching vs circuit switching comparison"
---

Post 38 හි ශ්‍රේණි සබැඳි සම්බන්ධ කරන්නේ හරියටම endpoints දෙකක් පමණයි. ARPANET, 1969 දී ARPA (පසුව DARPA) යටතේ සජීවී වී, වෙනත් දෙයක් ඔප්පු කිරීමට යෙදුණේය: සෑම යුගලයක් අතර කැප වූ circuit එකක් නොමැතිව බොහෝ යන්ත්‍ර බොහෝ අනෙක්වලට ළඟා වීම, දත්ත hop by hop ස්වාධීනව route වන packets වලට බිඳ දැමීමෙන්.

## Circuit Switching එදිරිව Packet Switching

Post 38 යාත්‍රා කළ දුරකථන ජාලය භාවිතා කළේ circuit switching: කතාබහ *සම්පූර්ණය* සඳහා අඛණ්ඩ end-to-end මාර්ගයක් වෙන් කරන්න — කවුරුත් කතා කරනවාද නැද්ද කියා නොබලා. අඛණ්ඩ හඬට හොඳයි; පරිගණක ගමනාගමනයට නරක ගැළපුමකි, එය bursty ය — ක්‍රියාකාරී transfer එකක්, පසුව reserved circuit එකක් භාවිතා නොවී රැඳෙන idle කාල පරාස.

Packet switching ප්‍රතිවිරුද්ධ ඔට්ටුව ගනී. දත්ත packets වලට බිඳ දමන්න, එක් එක් එකක ගමනාන්ත address එකක් රැගෙන යයි; එක් එක් ස්වාධීනව route කරන්න; භෞතික සබැඳි බොහෝ කතාබස් අතර බෙදා ගන්න. සම්පූර්ණ session එකක් සඳහා මාර්ගයක් වෙන් නොකෙරේ — විවිධ transfers වලින් packets අන්තර්ලීන වේ, විවිධ මාර්ග ගත හැක, සහ ගමනාන්තයේ නැවත එකතු වේ. Paul Baran ගේ RAND හි බෙදාහැරුණු, පැවැත්විය හැකි සන්නිවේදන පිළිබඳ වැඩ සහ Leonard Kleinrock ගේ packet ජාලවල queueing විශ්ලේෂණය බුද්ධිමය පසුබිම ලබා දුන්නේය; ARPA හි Lawrence Roberts ඔට්ටුව අරමුදල් සහිත පර්යේෂණ ජාලයක් බවට පත් කළේය.

## IMPs: මුල් Routers

ARPANET හි hops වූයේ Interface Message Processors (IMPs) — එක් එක් අඩවියේ කැප වූ minicomputers (Phase 3 හි minicomputer යුගය, වයර් එකට යොදන ලද) දේශීය host එකෙන් packets පිළිගෙන, ඊළඟ hop එක තෝරා, ඉදිරියට යවයි. සංකල්පීයව, නවීන router එකක් තවමත් කරන්නේ එයයි. පළමු nodes හතර — UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah — පසු ප්‍රමිතිවලට සාපේක්ෂව කුඩා විය. Packet switching කඩදාසියේ පමණක් නොව ප්‍රායෝගිකව ක්‍රියා කළ බව පෙන්වීමට ඒවා ප්‍රමාණවත් විය.

## මෙය සැබෑ ඔට්ටුවක් වූයේ ඇයි

Circuit switching තුළ ගිලී සිටි telecom ඉංජිනේරුවන් බොහෝ විට reserved මාර්ග නැති ජාලයකට දත්ත විශ්වාසනීයව ලබා දිය හැකිදැයි සැක කළහ. ARPANET හි සාර්ථකත්වය සැබෑ සැකයකට එරෙහි ගෘහ නිර්මාණයක ආයතනික සනාථ කිරීමක් විය — සියල්ලෝම දැනටමත් එකඟ වූ නොවැළැක්විය හැකි "ඊළඟ පියවරක්" නොවේ.

## මෙය සැකසූ දේ

ARPANET හිම host-to-host protocols තවමත් TCP/IP නොවීය (Post 41). ගෘහ නිර්මාණ ජයග්‍රහණය — කැප වූ circuits වෙනුවට packets — මෙම අදියරේ පසු සෑම ජාලයක්ම ගොඩනඟන පදනමයි, නවීන අන්තර්ජාලය හරහා, Post 42 හි දත්ත මධ්‍යස්ථාන fabrics දක්වා, සහ Phase 10 හි training-cluster interconnects දක්වා. ඊළඟට, දේශීය: TCP/IP විවිධ ජාල එක අන්තර්ජාලයකට බැඳීමට පෙර ගොඩනැගිලි Ethernet මත ප්‍රමිතිගත වූ ආකාරය (Post 40).

**පිටවීමේ දොර:** Paul Baran, *On Distributed Communications* (RAND Corporation, 1964) — Kleinrock ගේ queueing වැඩ සහ Roberts ගේ ARPA වැඩසටහන සමඟ, ARPANET ට circuit switching ට එරෙහිව ඔට්ටු තැබිය හැකි වූ බවට පදනම වන සම්භාව්‍ය බෙදාහැරුණු/packet තර්කය.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

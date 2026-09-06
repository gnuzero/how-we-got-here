---
title: "TCP/IP සහ නවීන අන්තර්ජාල Stack එක"
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 41
tags: []
summary: "විවිධාකාර විශ්වාසනීය නොවන සබැඳි ස්ථරීය සහතික බල කළේය — IP route කරයි; TCP විශ්වාසනීය stream එකක් නැවත ගොඩනගයි"
image_prompt: "Layered protocol stack diagram with a packet gaining headers at each layer, clean networking textbook diagram style"
video_prompt: "25-second animation: data flowing down through TCP/IP layers gaining headers, then unwrapped at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model with encapsulation + TCP three-way handshake diagram"
---

ARPANET (Post 39) packet switching ඔප්පු කළේය. Ethernet (Post 40) දේශීය වයර් එක ප්‍රමිතිගත කළේය. එකක්වත් තනිවම *විවිධ* ජාල — විවිධ මාධ්‍ය, විවිධ addressing — යන්ත්‍ර දෙකකට භාවිතා කළ හැකි එක අන්තර්ජාලයකට මැසීම කෙසේදැයි නොකියයි. Vint Cerf සහ Bob Kahn ගේ TCP/IP suite එය විසඳුවේය; එය තවමත් නවීන අන්තර්ජාලය ධාවනය වන පදනමයි.

## ස්ථරීය ආකෘතිය

TCP/IP කනස්සල්ල බෙදන්නේ PCIe හි stack එක මෙන් (Post 33), අන්තර්ජාලකරණ පරිමාණයක. **Link** දේශීය hop එක හසුරුවයි — Ethernet, Wi-Fi, fiber. **Internet (IP)** එම සබැඳි *හරහා* සාමාන්‍ය addressing සහ routing දෙයි; IP packet එකකට එය රැගෙන යන මාධ්‍යය කුමක්දැයි ගණන් නැත. **Transport (TCP හෝ UDP)** IP මත විශ්වාසනීය අනුපිළිවෙලින් ලබා දීම (TCP) හෝ අවම-overhead best-effort (UDP) ඉදිරිපත් කරයි. **Application** යනු HTTP, DNS, SMTP සහ ඒවාට සමාන ඒවා වාඩි වන තැනයි, ගැළපෙන transport එක තෝරා ගනිමින්.

## Encapsulation

පහළට ගමන් කරන දත්ත එක් එක් ස්ථරයේ header එකක් ලබා ගනී — TCP/UDP යටතේ application bytes, එම segment එක IP යටතේ, එම packet එක link header එකක් යටතේ (සහ බොහෝ විට trailer එකක්). ඈත අගේ ක්‍රියාවලිය ප්‍රතිවර්තනය වේ: එක් එක් ස්ථරය තම header එක ඉවත් කර, දැන් කියවූ දේ (ports, addresses) භාවිතා කර ඉතිරිය ඉහළට භාර දෙයි.

## විශ්වාසනීය නොවන Substrate එකක් මත TCP

IP පැහැදිලිව best-effort ය — ලබා දීමේ පොරොන්දුවක් නැත, අනුපිළිවෙල පොරොන්දුවක් නැත, drops අවසර ඇත. TCP sequence numbers සහ acknowledgments සමඟ (සහ ACKs නොපැමිණෙන විට retransmission) මත විශ්වාසනීය අනුපිළිවෙලින් byte stream එකක් ගොඩනගයි — PCIe හි data-link ස්ථරයේ එකම විශ්වාසනීයතා *වර්ගය* (Post 33), එක් කැප වූ සබැඳියක් වෙනුවට සම්පූර්ණ විශ්වාසනීය නොවන අන්තර්ජාලයක් හරහා දිගු කරන ලද.

සම්බන්ධතාවයක් ආරම්භ වන්නේ three-way handshake එකකින්: SYN (client sequence number එකක් යෝජනා කරයි), SYN-ACK (server පිළිගෙන තමන්ගේම යෝජනා කරයි), අවසාන ACK. ඉන් පසුව පමණක් application දත්ත ගලා යයි — දෙපැත්තම පළමුව සමමුහුර්ත තත්ත්වය බෙදා ගන්නා සුළු හිතාමතා පිරිවැයක්.

## මෙම නිර්මාණය ජය ගත්තේ ඇයි

බර උසුලන උපකල්පනය වූයේ යටින් ඇති ජාලය විවිධාකාර සහ විශ්වාසනීය නොවන බවයි, එබැවින් සහතික සෑම භෞතික සබැඳියකම නොව ඉහළ ස්ථරයකට අයත් වේ. එය දශක ගණනක් තිස්සේ එක් භෞතික ප්‍රමිතියකට කිසිදා එකඟ නොවූ සංවිධාන විසින් විවිධ තාක්ෂණවලින් මැසූ ගෝලීය අන්තර්ජාලයකට ගැළපුණේය — එබැවින්ම TCP/IP තවමත් අත්‍යවශ්‍යයෙන් සම්පූර්ණ නවීන අන්තර්ජාලය යටතේ වාඩි වේ, ඊළඟ දත්ත මධ්‍යස්ථාන ජාල ඇතුළුව.

**පිටවීමේ දොර:** [RFC 791](https://www.rfc-editor.org/rfc/rfc791) (Internet Protocol) සහ [RFC 793](https://www.rfc-editor.org/rfc/rfc793) (Transmission Control Protocol) — මෙම stack එකේ addressing/routing සහ විශ්වාසනීය-transport අර්ධ සඳහා ප්‍රාථමික පිරිවිතර (Cerf/Kahn පෙළපත; මෙම 1981 සැප්තැම්බර් පෙළ සඳහා RFC editor ලෙස Postel).

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

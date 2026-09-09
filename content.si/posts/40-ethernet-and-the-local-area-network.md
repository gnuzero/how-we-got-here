---
title: "Ethernet සහ Local Area Network"
weight: 41
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 40
tags: []
summary: "හවුල් කේබලයක්, මධ්‍යම arbiter නැත — CSMA/CD LAN collision සීමාව විසඳුවේය; switches පසුව එය ඉවත් කළේය"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET (Post 39) දුරස්ථ අඩවි අතර wide-area packet switching විසඳුවේය. එක් ගොඩනැගිල්ලක් ඇතුළත, මීටර් දුසිම් කිහිපයක කේබලයක් සඳහා IMP-විලාස routing වැරදි මෙවලමයි. Ethernet, 1973 දී Xerox PARC හි Robert Metcalfe සහ David Boggs විසින් ආරම්භ කරන ලද, ප්‍රමුඛ දේශීය පිළිතුර බවට පත් විය.

## හවුල්-මාධ්‍ය ගැටලුව

මුල් Ethernet එකම හවුල් කේබලයක් මත stations බොහෝ තැබුවේය — bus topology එකක්, Post 31 යන්ත්‍රයක් ඇතුළත මුහුණ දුන් එකම *වර්ගයේ* contention එක, දැන් LAN එකක. සෑම station එකකටම transmit කළ හැක; සෑම station එකක්ම සෑම transmission එකක්ම අසයි. එකවර transmitters දෙකක් දෙකම දූෂණය කරයි.

## CSMA/CD: Listen, Transmit, Detect, Back Off

Ethernet හි පිළිතුර CSMA/CD ය. **Carrier Sense:** පළමුව අසන්න; මාධ්‍යය idle ලෙස පෙනේ නම් පමණක් transmit කරන්න. **Multiple Access:** ඕනෑම station එකකට උත්සාහ කළ හැක — මධ්‍යම grant එකක් නැත, පද්ධති buses මත request/grant මෙන් නොව (Post 31). **Collision Detection:** යවන අතරේ අසමින් සිටින්න; collision එකක් පෙනේ නම්, නවත්වන්න, *අහඹු* backoff එකක් රැඳී, නැවත උත්සාහ කරන්න.

Randomization යනු බර උසුලන උපක්‍රමයයි. ස්ථිර සමාන backoffs සදහටම collide වනු ඇත. විවිධ අහඹු රැඳීම් එක් station එකකට අනෙක නැවත උත්සාහ කිරීමට පෙර සාර්ථක වීමට ඉඩ දෙයි — arbiter එකක් නොමැතිව විමධ්‍යගත contention.

## Frame එක

Ethernet දත්ත frames වලින් රැගෙන යයි: source සහ destination MAC addresses (දෘඪාංග addresses, Post 41 හි IP addresses ට පහළින්), ඉහළ protocol එක සඳහා type field එකක්, payload එකක්, සහ CRC එකක් — PCIe හි data-link පරීක්ෂා මෙන්ම එකම විශ්වාසනීයතා *වර්ගය* (Post 33), වෙනස් මාධ්‍යයක් මත.

## හවුල් Bus එකේ සිට Switched Star දක්වා

නවීන wired Ethernet බොහෝමය හවුල් කේබලය අත්හැර, එක් එක් station එකට තමන්ගේම point-to-point සබැඳියක් දෙන switches වෙත ගියේය — පැරණි parallel buses ට සාපේක්ෂව PCIe කළ එකම shared-to-point-to-point පලා යාම (Post 32). නිවැරදි switch එකක, සම්භාව්‍ය CSMA/CD collisions බොහෝමය අතුරුදහන් වේ: එක් එක් සබැඳියට අග දෙකක් ඇත. අදහස් තවමත් ඓතිහාසිකව වැදගත්ය, සහ මුල් Wi-Fi — තවමත් හවුල් radio මාධ්‍යයක් — එකම collision සීමාව විසඳන්නට සිදු විය.

## මෙය ගෙන යන්නේ කොහේද

දේශීය Ethernet සහ wide-area packet routing තවමත් හිඩැසක් තබයි: විවිධ යටින් ඇති තාක්ෂණ එක අන්තර්ජාලයකට බැඳෙන *සාමාන්‍ය* addressing සහ routing ක්‍රමයක්. එය TCP/IP ය — ඊළඟ.

**පිටවීමේ දොර:** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — හවුල්-මාධ්‍ය LAN සහ CSMA/CD නිර්මාණය ප්‍රකාශ කළ ප්‍රාථමික පත්‍රිකාව.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

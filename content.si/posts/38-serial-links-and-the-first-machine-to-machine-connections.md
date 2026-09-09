---
title: "ශ්‍රේණි සබැඳි සහ පළමු යන්ත්‍ර-සිට-යන්ත්‍ර සම්බන්ධතා"
weight: 38
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 38
tags: []
summary: "Point-to-point ශ්‍රේණි සබැඳි සම්බන්ධ කරන්නේ අග දෙකක් පමණයි — packet switching බල කළ සීමාව"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

Phase 5 හි සෑම bus එකක්ම එක් යන්ත්‍රයක් *ඇතුළත* රැඳේ. ජාලකරණය ආරම්භ වන්නේ වෙන වෙනම යන්ත්‍ර කතා කළ යුතු වූ විටයි — සහ packet-switched ජාල තිබුණේ නැති කල, එයින් අදහස් වූයේ ශ්‍රේණි සබැඳියකි: එක් bit stream එකක්, point to point, routing නැත, "මෙම වයර් එකේ අනෙක් කෙළවරේ ඇති දේ" ට ඔබ්බෙන් address එකක් නැත.

## RS-232: මූලික ශ්‍රේණි සබැඳිය

RS-232 (EIA, 1960) උපාංග දෙකක් අතර voltage මට්ටම් සහ asynchronous ශ්‍රේණි සම්මුතීන් ස්ථිර කළේය — දෙකම කලින් baud rate එකට එකඟ වේ, මන්ද දත්ත සමඟ clock එකක් නොයයි. Addressing නැත, routing නැත, අග තෝරා ගත් සරල parity ට ඔබ්බෙන් error correction නැත. උපාංග දෙකක් පමණයි, එකවරට එක් bit එකක්.

එය ප්‍රමාණවත් විය. Terminals එය භාවිතා කළේ mainframes සහ minicomputers වෙත ළඟා වීමට (Phase 3 හි පෙළපත). ඉහළ ජාලකරණ stack එකකට රඳා නොපවතින නාලිකාවක් අවශ්‍ය වූ විට, එය තවමත් routers සහ embedded උපකරණ වෙත යන dead-simple console මාර්ගයයි.

## Modem එක: Analog වයර් මත Digital

දුර-දිග කතාව දුරකථන ජාලය මත යා යුතු විය — analog, narrowband, හඬ සඳහා ගොඩනැගූ. Modem එකක් digital bit stream එකක් දුරකථන රේඛාවට රැගෙන යා හැකි analog carrier එකක් මත modulate කරයි, සහ ඈත අගේ එය නැවත bits වෙත demodulate කරයි. මුල් අනුපාත තත්පරයට bits සිය ගණනක් වූ අතර, පසුව කිලෝබිට් දස ගණනක් — නවීන මිනුමකින් මන්දගාමීය, නමුත් එකම කාමරයේ නොමැති යන්ත්‍රයකට ළඟා වීමට ප්‍රායෝගික එකම මාර්ගය, දැනටමත් බොහෝ තැන්වලට ගිය යටිතල පහසුකම් මත.

## මෙයින් ඊළඟ ගෘහ නිර්මාණය බල කරන්නේ ඇයි

Point-to-point ශ්‍රේණි සබැඳියක් — සෘජු RS-232 හෝ modem-over-phone — සම්බන්ධ කරන්නේ හරියටම endpoints *දෙකක්* පමණයි. බහු-node ජාලයක් නැත, වයර් එකේ නොමැති ගමනාන්තයක් සඳහා routing තීරණයක් නැත. සෑම යුගලයක් අතර කැප වූ යුගලයක් නොමැතිව එකිනෙකාට ළඟා වන යන්ත්‍ර බොහෝ ගණනකට පරිමාණය කිරීමට වෙනස් ඔට්ටුවක් අවශ්‍යයි: දත්ත packets වලට බිඳ දමන්න, hop by hop route කරන්න, සබැඳි බෙදා ගන්න. ARPANET ඔප්පු කිරීමට යෙදුණේ එයයි — ඊළඟ පෝස්ට් එක.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

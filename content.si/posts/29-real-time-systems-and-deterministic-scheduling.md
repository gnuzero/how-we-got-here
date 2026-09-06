---
title: "තත්‍ය කාල පද්ධති සහ නිශ්චයාත්මක Scheduling"
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 29
tags: []
summary: "Throughput සහ සාධාරණත්වය deadlines නොවේ — දැඩි තත්‍ය කාලයට සාමාන්‍ය වේගය නොව බැඳුණු නරකම-අවස්ථා කාලය අවශ්‍යය"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

Phase 4 හි මෙතෙක් සියල්ල — batch, time-sharing, අතථ්‍ය මතකය, containers — throughput, සාධාරණත්වය, හෝ කාර්යක්ෂම බෙදාගැනීම සඳහා ප්‍රශස්තකරණය කරයි. ඒවායින් කිසිවක් දී ඇති කාර්ය කොටසක් *කවදාද* අවසන් වේද යන්න දැඩිව සහතික නොකරයි. තත්‍ය කාල පද්ධති එම සහතිකය ගැන සැලකිලිමත් වේ. "වේගවත්" යනු "තත්‍ය කාල" ට වඩා වෙනස් ගුණයකි — මිනිසුන් නිරන්තරයෙන් පැටලෙන වෙනස්කමකි.

## වේගවත් යනු නිශ්චයාත්මක නොවේ

සාමාන්‍ය-අරමුණු scheduler එකක් (Posts 21–25) හොඳ *සාමාන්‍ය-අවස්ථා* ප්‍රතිචාරශීලීත්වය සහ සාධාරණ බෙදාගැනීම සඳහා ප්‍රශස්තකරණය කරයි — සාමාන්‍ය අවස්ථාවේදී බොහෝ විට තරමක් වේගවත්ය. "සාමාන්‍යයෙන් වේගවත්" යනු "සෑම විටම නිශ්චිත deadline එකක් ඇතුළත අවසන් වේ, ව්‍යතිරේක නැත" නොවේ. Cache බලපෑම්, interrupt හැසිරවීම, හෝ garbage-collection pauses (Post 28) ප්‍රමාදයක් දිගු කළ හැක. බොහෝ apps සඳහා, ඉඳහිට විචලනය වැදගත් නොවේ. තත්‍ය කාල පද්ධතියක් සඳහා, එය සම්පූර්ණ ක්‍රීඩාව විය හැක.

## දැඩි එදිරිව මෘදු

**දැඩි** deadline එකක්: එය මග හැරීම සම්පූර්ණ පද්ධති අසාර්ථකත්වයකි — පහත වැටුණු කාර්ය සාධනය නොවේ. ගුවන්-පාලන ස්ථායීකරණය, airbag යෙදවීම — සෑම විටම, කවුළුව ඇතුළත, නැතහොත් අසාර්ථකත්වය විනාශකාරී විය හැක.

**මෘදු** deadline එකක්: එය මග හැරීම ගුණාත්මකභාවය පහත හෙළයි නමුත් සෘජු අසාර්ථකත්වයක් නොවේ — බර යටතේ මඟ හැරුණු වීඩියෝ frame එකක් අප්‍රසන්නය, සහතික අර්බුදයක් නොවේ. Deadlines වෙත ළඟා වීමට ශක්තිමත් ප්‍රායෝගික ප්‍රවණතාවයක්; දෘඪාංග-බලාත්මක සහතිකයක් නොවේ.

## Rate-Monotonic Scheduling

දැඩි තත්‍ය කාලය සඳහා එක් සම්භාව්‍ය ප්‍රවේශයක්: rate-monotonic scheduling — එක් එක් ආවර්තිත කාර්යයට එය කොපමණ නිතර ධාවනය විය යුතුද යන්නෙන් ස්ථිර priority එකක් පවරන්න; කෙටි කාල පරිච්ඡේදය → ඉහළ priority. ආවර්තිත කාර්ය කට්ටලවල හොඳින් අර්ථ දක්වන ලද පන්තියක් සඳහා ස්ථිර-priority ඇල්ගොරිතම අතර ඔප්පු කළ හැකි ලෙස ප්‍රශස්තය: එම workload සඳහා *කිසියම්* ස්ථිර-priority පැවරුමකට සෑම deadline එකක්ම සපුරාලිය හැකි නම්, rate-monotonic ද එසේ කරයි. ගණිතමය schedulability බැඳීමක් — දැඩි තත්‍ය කාල පද්ධති සහතික කිරීමට අවශ්‍ය ආකාරයේ විධිමත් ගුණයම.

## වෙනස් වර්ගයේ OS එකක් ඇයි

මෙම සහතික සපුරාලීමට බැඳුණු නරකම-අවස්ථා කාලය වටා නිර්මාණය කළ OS එකක් අවශ්‍යය — Real-Time Operating System (RTOS) — Posts 21–25 හි throughput/සාධාරණත්ව පෙළපත නොවේ. Interrupt latency බැඳුණු සහ දන්නා විය යුතුය. මතක allocation සාමාන්‍යයෙන් සාමාන්‍ය-අරමුණු GC වැනි පුරෝකථනය කළ නොහැකි-latency යාන්ත්‍රණ මත රඳා නොපවතී. Mutex එකකටත් ප්‍රවේශම් සහගත නිර්මාණය අවශ්‍යය (priority inheritance) එවිට අඩු-priority කාර්යයකට ඉහළ-priority එකක් අසීමිත කාලයක් අවහිර කළ නොහැක — priority inversion, සම්භාව්‍ය තත්‍ය කාල අන්තරායක්.

මෙම කාචය හරහා mini-CPU lab එක නැවත බලන්න: සරල දෘඪාංගය මත, සෑම උපදෙසක කාලය නිශ්චයාත්මක සහ ගණන් කළ හැකිය — පද්ධති වඩාත් සංකීර්ණ වන විට RTOS නිර්මාණය සුරැකීමට සටන් කරන පුරෝකථනය කළ හැකි බව. ඊළඟ පෝස්ට් එක මෙම මූලධර්ම avionics, කාර්මික පාලනය, සහ සහතික බර දරන embedded යෙදවුම් වෙත ගෙන යයි.

{{< lab type="mini-cpu" >}}

**පිටවීමේ දොර:** C. L. Liu and James W. Layland, "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment" (*Journal of the ACM*, 1973) — rate-monotonic scheduling සහ සම්භාව්‍ය දැඩි-තත්‍ය-කාල schedulability පිටුපස ප්‍රාථමික පත්‍රිකාව.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

---
title: "ප්‍රායෝගිකව තත්‍ය කාල පද්ධති"
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 30
tags: []
summary: "ස්ථිර අයවැයක් මත sense–compute–actuate — Phase 3 හි වේග උපක්‍රම කාල සතුරන් බවට පත් වන avionics සහ කාර්මික පාලනය"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

Post 29 න්‍යාය ආවරණය කළේය: දැඩි එදිරිව මෘදු deadlines, rate-monotonic scheduling, "වේගවත්" සහ "තත්‍ය කාල" වෙනස් වන්නේ ඇයි. මෙම පෝස්ට් එක එම සහතික යෙදවන තැනයි — සහ ඒවා සඳහා ගොඩනැගීම ප්‍රායෝගිකව පෙනෙන ආකාරය.

## Avionics: මග හැරුණු Deadline එක විනාශයක් ලෙස

ගුවන් පාලනය හොඳ හේතුවක් නිසා ප්‍රතිමූර්තික දැඩි-තත්‍ය-කාල උදාහරණයයි. Fly-by-wire ස්ථායීතා-වැඩිදියුණු කිරීමේ ලූපයක් sensors කියවයි, පාලන-පෘෂ්ඨ සීරුමාරු ගණනය කරයි, සහ ස්ථිර, තද චක්‍රයක් මත actuator විධාන නිකුත් කරයි. Deadline එක මග හරින්න සහ පාලන ප්‍රතිචාරය අස්ථායී විය හැක, සමහර විට ඉතා කෙටි කවුළුවක් ඇතුළත. Avionics මෘදුකාංග DO-178C වැනි ප්‍රමිතිවලට ගොඩනැගේ ඒවා දැඩි කාල විශ්ලේෂණය ඉල්ලා සිටී — "සාමාන්‍යයෙන් deadlines සපුරයි" නොව, සහතික කළ මෙහෙයුම් තත්ත්ව යටතේ එය *සෑම විටම* කරන බවට සාක්ෂි (අරමුණු සහතික මට්ටම අනුව පරිමාණය වේ; කොඳු නාරටිය නරකම-අවස්ථා විනයයි, සාමාන්‍ය-අවස්ථා බලාපොරොත්තුව නොවේ).

## කාර්මික ස්වයංක්‍රීයකරණය: සම්බන්ධීකෘත අඛණ්ඩ පාලනය

නිෂ්පාදන රේඛාවක් — රොබෝ අත්, conveyor කාලය, ගුණාත්මක-පාලන sensors — එකම වසා දැමූ-ලූප රටාව ධාවනය කරයි: sense, compute, actuate, නැවත නැවත, බොහෝ විට මිලි තත්පර චක්‍රයක් මත. මෙහි deadline එකක් මග හැරීම සහ අසාර්ථකත්වය සාමාන්‍යයෙන් avionics හි මෙන් විනාශකාරී නොවේ, නමුත් තවමත් බරපතලය — චලනය වන කොටසකට සාපේක්ෂව ප්‍රමාද වූ පිහිටුම් විධානයක් ඝට්ටනයක්, මඟ හැරුණු කැබැල්ලක්, හෝ මිල අධික උපකරණවලට හානියක් අදහස් කළ හැක.

## හවුල් ගෘහ නිර්මාණය: වසා දැමූ-ලූප පාලනය

වසම් දෙකම නම් කිරීමට වටිනා රටාවක් බෙදා ගනී: **sense** (sensors වෙතින් වත්මන් තත්ත්වය), **compute** (නිවැරදි ප්‍රතිචාරය — බොහෝ විට PID හෝ සමාන පාලන-න්‍යාය ඇල්ගොරිතමයක්), **actuate** (මෝටර් සංඥාව, පෘෂ්ඨ වික්ෂේපණය), ස්ථිර කාල පරිච්ඡේදයක් මත නැවත නැවත. තත්‍ය කාල සහතිකය *සම්පූර්ණ* ලූපය අවසානයේ සිට අවසානය දක්වා ආවරණය කරයි — sensor latency, ගණනය, සහ actuation සියල්ල එකම අයවැයට එරෙහිව ගණන් කෙරේ. දිලිසෙන පාලන ඇල්ගොරිතමයක් තවමත් අසාර්ථක වේ එම ලූපයේ වෙනත් තැනක sensor I/O හෝ actuator සන්නිවේදනය පුරෝකථනය කළ නොහැකි ප්‍රමාදයක් එන්නත් කළහොත්.

## සාමාන්‍ය-අරමුණු දෘඪාංගය බොහෝ විට ප්‍රමාණවත් නැත්තේ ඇයි

තත්‍ය කාල පද්ධති නිතරම සාමාන්‍ය-අරමුණු OS එකක් යටතේ සාමාන්‍ය-අරමුණු CPUs වෙනුවට කැප වූ microcontrollers මත ධාවනය වේ. සරල, වඩාත් පුරෝකථනය කළ හැකි ගෘහ නිර්මාණය — බොහෝ විට caches නැත, out-of-order execution නැත, speculative branch prediction නැත — කාලය *අඩු* පුරෝකථනය කළ හැකි කරන Phase 3 තාක්ෂණ හරියටම හිතාමතාම අත්හැරීම. Phase 3 කාර්ය සාධන ජයග්‍රහණයක් ලෙස සලකන දේ හරියටම දැඩි-තත්‍ය-කාල පද්ධතියක් *වටා* නිර්මාණය කළ යුතු, හෝ වළක්වා ගත යුතු දෙයයි.

## Labs දෙකක්, වෙනස්කමක් එකක්

මෙය හිතාමතාම අන්තර්ක්‍රියාකාරී labs දෙකම සමඟ ටැග් කළ එකම පෝස්ට් එකයි: mini-CPU යනු සරල දෘඪාංගය මත නිශ්චයාත්මක, ගණන් කළ හැකි උපදෙස් කාලය ස්පර්ශ කළ හැකි තැනයි — සරලත්වය සහතික කිරීමට උපකාර කරන්නේ ඇයි. VM terminal එක පූර්ණ සාමාන්‍ය-අරමුණු OS තොගයක් ධාවනය කරයි — දැඩි-තත්‍ය-කාල පද්ධතියක් ඉවත් කිරීමට ගොඩනැගූ scheduling සහ කාල විචලනය දැකීමට ප්‍රයෝජනවත්ය.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

**පිටවීමේ දොර:** RTCA DO-178C, *Software Considerations in Airborne Systems and Equipment Certification* — මෙම පෝස්ට් එක නම් කරන ප්‍රාථමික සිවිල්-avionics මෘදුකාංග සහතික ප්‍රමිතිය (සහතික අරමුණු Design Assurance Level අනුව පරිමාණය වේ).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

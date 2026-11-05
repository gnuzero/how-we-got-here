---
title: "Containers සහ නවීන OS හුදකලාව"
weight: 26
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 25
tags: []
summary: "පූර්ණ VMs බර පිරිවැයකින් ශක්තිමත් හුදකලාව මිලදී ගනී — namespaces සහ cgroups එක් kernel එකක් බෙදා ගෙන අනෙක් සියල්ල පාහේ හුදකලා කරයි"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

අතථ්‍ය මතකය (Post 24) processes එකිනෙකාගේ මතකයෙන් හුදකලා කරයි. එය ඒවා එකම filesystem, process-ID අවකාශය, හෝ ජාල වින්‍යාසය බෙදා ගැනීමෙන් හුදකලා නොකරයි — සාම්ප්‍රදායික Unix process එකකට තවමත් අමු RAM ට ඔබ්බෙන් බොහෝ ආකාරවලින් අනෙක්වා දැක ඇතැම් විට බාධා කළ හැක. Containers එම මතුපිටෙන් වැඩි කොටසක් හරහා හුදකලාව විස්තාරණය කරයි, පූර්ණ දෘඪාංග අතථ්‍යකරණය දක්වා නොගොස්.

## පූර්ණ අතථ්‍යකරණය: ශක්තිමත්, බර

සාම්ප්‍රදායික VM එකක් සම්පූර්ණ guest OS එකක් ධාවනය කරයි — තමන්ගේම kernel, තමන්ගේම drivers — අතථ්‍යකරණය කළ (හෝ, දෘඪාංග සහාය සමඟ, near-native) CPU, මතකය, ගබඩාව, සහ ජාලකරණය ඉදිරිපත් කරන hypervisor එකක් මත. අතිශය ශක්තිමත් හුදකලාව: බරපතල hypervisor දෝෂයක් හැර guest එකකට host හි processes හෝ අනෙක් guests දැකිය නොහැක. පිරිවැය සැබෑය — එක් එක් VM තමන්ගේම kernel boot කරයි, එම kernel හි මතක පියවර රැගෙන යයි, සහ සාමාන්‍යයෙන් host මත ධාවනය වීමට වඩා සමහර දෘඪාංග වෙත මන්දගාමී ප්‍රවේශයක් ගෙවයි.

## Kernel එක බෙදා ගන්න, දසුන හුදකලා කරන්න

Containers අනෙක් හුවමාරුව ගනී: host එකක සෑම container එකක්ම *එකම* kernel එක බෙදා ගනී — instance එකකට guest OS boot එකක් නැත — kernel එක එක් එක් container හි දසුන වෙනම පෙනෙන පරිදි හුදකලාව සපයන අතරතුර. Linux විශේෂාංග දෙකක් වැඩෙන් බොහෝමය කරයි. **Namespaces** process එකක නිශ්චිත සම්පත් පිළිබඳ දසුන හුදකලා කරයි — PID namespace එකක් container එකකට තමන්ගේම process ගස පමණක් දැකීමට සලසයි (ඇතුළත process 1 host මත PID 1 නොවේ); network namespace එකක් පුද්ගලික interfaces සහ routing දෙයි; mount namespace එකක් පුද්ගලික filesystem දසුනක් දෙයි. **Cgroups** (control groups) CPU, මතකය, සහ I/O සීමා කර ගිණුම් කරයි එවිට එක් container එකකට එකම host මත අනෙක්වා කුසගින්නෙන් මැරීමට නොහැක.

පෙළපත buzzword එකට වඩා පැරණිය: chroot (process එකක පෙනෙන filesystem root වෙනස් කිරීම, 1980 ගණන්වල මුල් භාගය) දශක ගණනකට පෙර සීමිත filesystem හුදකලාවක් විය; cgroups සහ නවීන namespaces එම අදහස process එකක ලෝකයෙන් වැඩි කොටසක් හරහා සාමාන්‍යකරණය කරයි.

## පරිමාණයේදී හුවමාරුව ජයග්‍රහණය කළේ ඇයි

Containers host kernel එක බෙදා ගන්නා නිසා, ඒවා සාමාන්‍යයෙන් තත්පරයක කොටසකින් ආරම්භ වේ (kernel boot නැත) සහ instance එකකට බොහෝ කුඩා පියවරක් රැගෙන යයි — අනුපිටපත් kernel image එකක් හෝ kernel-මට්ටමේ caches නැත. එම කාර්යක්ෂමතාව නිසාම ඒවා නවීන cloud යටිතල පහසුකම් සඳහා පෙරනිමි ඇසුරුම් සහ යෙදවුම් ඒකකය බවට පත් විය: එකම දෘඪාංගය මත VMs ට වඩා බොහෝ containers, බෙදා හරින ලද පද්ධති (Phase 7) සැබවින්ම ධාවනය වන පරිමාණයේදී වැදගත් වේ.

හුවමාරුව: හවුල් kernel යනු ප්‍රමාණවත් තරම් බරපතල kernel අවදානමක්, මූලධර්මය අනුව, වෙනම-kernel අතථ්‍යකරණය යටතේ ව්‍යුහාත්මකව දුෂ්කර වන ආකාරයකින් container හුදකලාව බිඳිය හැකි බවයි. බොහෝ නිෂ්පාදන පද්ධති එය හිතාමතාම පිළිගනී, සමහර විට උඩින් වැඩි sandboxing තට්ටු කරයි. Post 45 හි Kubernetes සාකච්ඡාව මෙතැනින් පටන් ගනී: ඔබට සැහැල්ලු, වේගයෙන් ආරම්භ වන හුදකලා ඒකකයක් ඇති විට, ඊළඟ ගැටළුව ඒවා දහස් ගණනක් fleet එකක් හරහා සංවිධානය කිරීමයි.

{{< lab type="vm-terminal" >}}


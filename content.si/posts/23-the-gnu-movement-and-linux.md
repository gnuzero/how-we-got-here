---
title: "GNU ව්‍යාපාරය සහ Linux"
weight: 24
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 23
tags: []
summary: "Unix වසා දැමුණේය; Stallman නිදහස් userland ගොඩනැගුවේය; Torvalds kernel හිඩැස පිරවුවේය — GPL එකතුව විවෘතව තැබුවේය"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

1980 ගණන්වල මුල් භාගය වන විට, Unix (Post 22) තාක්ෂණිකව විශිෂ්ට වූ අතර වැඩි වැඩියෙන් හිමිකාර විය — AT&T වාණිජ පාලනය තහවුරු කරමින්, ශාස්ත්‍රීය සහ රසික ප්‍රවේශය තද වෙමින්. Richard Stallman ගේ ප්‍රතිචාරය, 1983 දී ආරම්භ වූයේ, මූලිකව තාක්ෂණික නිවැරදි කිරීමක් නොවීය. එය දෘෂ්ටිවාදී සහ නීතිමය විය: සම්පූර්ණයෙන්ම නිදහස් (නිදහස ලෙස, මිල පමණක් නොව) Unix ප්‍රතිස්ථාපනයක් ශුන්‍යයෙන් ගොඩනඟන්න, සහ එය එසේම තබා ගැනීමට නිර්මාණය කළ බලපත්‍රයකින් එයට සහාය වන්න.

## GNU: Kernel එකක් නොමැති Userland

GNU — "GNU's Not Unix" — සෑම සංරචකයක්ම නිදහස් මෘදුකාංග වන සම්පූර්ණ, Unix-අනුකූල මෙහෙයුම් පද්ධතියක් ගොඩනැගීමට පටන් ගත්තේය: භාවිතා කළ හැකි, වෙනස් කළ හැකි, සහ නැවත බෙදාහැරිය හැකි, ඔබේම වෙනස්කම් නැවත බෙදාහැරීම ඇතුළුව. ඊළඟ දශකය තුළ ව්‍යාපෘතිය අත්‍යවශ්‍ය යටිතල පහසුකම් නිෂ්පාදනය කළේය: GCC (තවමත් වඩාත්ම පුළුල්ව භාවිතා වන compilers අතරින් එකක් — Post 28), Bash, GNU coreutils, Emacs, සහ තවත් බොහෝ දේ.

GNU හට වසර ගණනක් තිස්සේ තිබුණේ නැති දෙය වූයේ ක්‍රියාකාරී kernel එකකි. එහි සැලසුම් කළ kernel එක, GNU Hurd, බරපතල තාක්ෂණික දුෂ්කරතාවලට මුහුණ දුන් අතර පුළුල් ප්‍රායෝගික භාවිතයට කිසිදා ළඟා නොවීය. සම්පූර්ණ userland; සැබෑ දෘඪාංගය සඳහා යටින් kernel එකක් නැත.

## GPL: Copyright පිටතට හරවන ලදී

Stallman ගේ අනෙක් ප්‍රධාන දායකත්වය GNU General Public License (GPL) විය — හිතාමතාම ගුණයක් සහිත "copyleft" බලපත්‍රයක්: ඔබ GPL-බලපත්‍රිත කේතය ඇතුළත් මෘදුකාංග බෙදාහරින්නේ නම්, ඔබේ වෙනස් කළ මූලාශ්‍රය එම කොන්දේසි යටතේම ලබා ගත හැකි කළ යුතුය. සාමාන්‍යයෙන් නැවත බෙදාහැරීම *සීමා කිරීමට* මෙවලමක් වන Copyright, සෑම ව්‍යුත්පන්නයක් හරහාම නිදහස ප්‍රචාරණය වන බව සහතික කිරීමට භාවිතා කෙරේ — පහළට යන වාණිජ fork එකකින් නිශ්ශබ්දව වසා දැමීමට වඩා.

## Linux හිඩැස පුරවයි

1991 දී, ෆින්ලන්ත ශිෂ්‍ය Linus Torvalds තමන්ගේම PC එක සඳහා පුද්ගලික ව්‍යාපෘතියක් ලෙස kernel එකක් ආරම්භ කළේය. ඔහු එය එම වසරේම තමන්ගේම සීමාකාරී අනාගත-වාණිජ නොවන බලපත්‍රයක් යටතේ නිකුත් කළේය, පසුව — විවේචනාත්මකව — 1992 මුල් භාගයේදී එය GPL යටතේ නැවත බලපත්‍ර කළේය. එම එකතුව අතුරුදහන් වූ කැබැල්ල විය: GNU හට ප්‍රායෝගික kernel එකක් නොමැති පරිණත userland තිබුණි; Linux යනු අත්‍යවශ්‍යයෙන්ම userland නොමැති ක්‍රියාකාරී kernel එකකි. එක්ව, Linux kernel එක මත GNU utilities සම්පූර්ණ, නිදහසේ බලපත්‍රිත, Unix-අනුකූල පද්ධතියක් සැදුවේය — සාමාන්‍යයෙන් "Linux" ලෙස හැඳින්වේ, නමුත් "GNU/Linux" යනු එකතුව සඳහා වඩාත් ඓතිහාසිකව නිවැරදි නමයි (Stallman ගේ ඉඳහිට ප්‍රසිද්ධ කලකිරීමට).

**දැන් මෙය උත්සාහ කරන්න.** පහත VM එක boot කරන්න, තිරය ක්ලික් කරන්න, පසුව `uname`, `whoami`, සහ `ls` උත්සාහ කරන්න — ඔබ එම එකතුවේ GNU/Linux පැත්තේ සිටී, ඔබේ බ්‍රවුසරය තුළ.

{{< lab type="vm-terminal" height="600" >}}

## මෙම එකතුව ජයග්‍රහණය කළේ ඇයි

GPL හි ව්‍යුහය මගින් සමාගම්වලට යටින් ඇති වේදිකාව නිශ්ශබ්දව වසා නොදමා Linux වටා වාණිජ නිෂ්පාදන ගොඩනැගිය හැකි විය — kernel වෙනස්කම් එම කොන්දේසි යටතේම මූලාශ්‍රය ලෙස ලබා ගත හැකිව තිබිය යුතු විය. එය තිරසාර විශ්වාසයක් ගොඩනැගුවේය, සහ අවසානයේ තිරසාර *ආයතනික* දායකත්වයක්: සමාගම්වලට තනි තරඟකරුවෙකු විසින් අල්ලා ගැනීමට වඩා වේදිකාව විවෘතව පවතිනු ඇතැයි විශ්වාස කළ හැකි විය. නිදහස්, වාණිජ භාවිතයට විවෘත, එසේම තබා ගැනීමට නීතිමය ව්‍යුහගත — Linux servers, cloud යටිතල පහසුකම්, Android, සහ නවීන අන්තර්ජාලයේ backbone බොහෝමය යටතේ ප්‍රමුඛ kernel එක බවට පත් වූයේ ඇයි යන්නෙන් විශාල කොටසක්, එක් ශිෂ්‍යයෙකුගේ පුද්ගලික ව්‍යාපෘතියකට බොහෝ ඈතින්.

## ගැඹුරින්: නිදහස් මෘදුකාංගයේ යාන්ත්‍රණය — නිදහස් හතර, GPL හි කොන්දේසි සහ kernel එකක් userland එකකට හමු වූ හැටි

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** මෙම මාතෘකාව ගැන සිංහලෙන් ඇති ද්‍රව්‍ය:
> - si.wikipedia හි "[ලිනක්ස්](https://si.wikipedia.org/wiki/ලිනක්ස්)", "[ලිනක්ස් ක'නලය](https://si.wikipedia.org/wiki/ලිනක්ස්_ක'නලය)", "[වින්ඩෝස් හා ග්නූ ලිනක්ස් අතර වෙනස්කම්](https://si.wikipedia.org/wiki/වින්ඩෝස්_හා_ග්නූ_ලිනක්ස්_අතර_වෙනස්කම්)" සහ "[නිදහස් හා විවෘත මූලාශ්‍ර මෘදුකාංග](https://si.wikipedia.org/wiki/නිදහස්_හා_විවෘත_මූලාශ්‍ර_මෘදුකාංග)" ලිපි. ග්නූ ව්‍යාපෘතිය Stallman විසින් මෙහෙයවූ බවත්, GPL යටතේ සීමා කිරීම් තහනම් බවත් ඒවා සඳහන් කරයි.
>
> ඒවායේ නැති දේ: GPL ඇත්තටම ඉල්ලන්නේ *කුමක්ද* (කවදා මූලාශ්‍රය දිය යුතුද, කවදා අවශ්‍ය නැද්ද), Linux හි මුල් බලපත්‍රය කුමක්ද සහ එය වෙනස් වූයේ කෙසේද, සහ "kernel" සහ "userland" අතර රේඛාව ඔබේම ඇසින් බලන හැටි. මෙම කොටස ඒවා පියවරෙන් පියවර පෙන්වයි.

### 1. මූලික පද

- **මූලාශ්‍ර කේතය (source code):** මිනිසුන් ලියන, කියවිය හැකි වැඩසටහන් පෙළ.
- **Binary / object code (object code):** compiler එකක් නිපදවන, යන්ත්‍රයට ධාවනය කළ හැකි bytes. එයින් වැඩසටහන වෙනස් කිරීම ප්‍රායෝගිකව ඉතා අපහසුය.
- **බලපත්‍රය (license):** කතුහිමිකරු (copyright holder) අන් අයට දෙන අවසරය සහ එහි කොන්දේසි.
- **Copyleft (copyleft):** "වෙනස් කළ පිටපත් බෙදා හරින්නේ නම් ඒවාද එම නිදහසම සහිතව බෙදා හැරිය යුතුය" යන කොන්දේසිය කතුහිමිකම හරහා බලාත්මක කිරීම.
- **Kernel (kernel):** දෘඪාංගය, මතකය, ක්‍රියාවලි සහ ගොනු පද්ධතිය පාලනය කරන මෙහෙයුම් පද්ධතියේ හරය.
- **Userland (userland):** kernel එකට ඉහළින් ධාවනය වන shell, `ls` වැනි මෙවලම්, C පුස්තකාලය (C library) සහ compiler.

### 2. "නිදහස්" යන්නෙහි නිශ්චිත අර්ථය: නිදහස් හතර

GNU ව්‍යාපෘතියේ "[What is Free Software?](https://www.gnu.org/philosophy/free-sw.html)" පිටුව නිදහස් මෘදුකාංගය අර්ථ දක්වන්නේ මිලෙන් නොව නිදහස් හතරකින් ය. ඒවා අංක කර ඇත්තේ 0 සිට ය:

| අංකය | නිදහස (පිටුවේ අර්ථයෙන්, අපේ සාරාංශය) |
|---|---|
| 0 | ඕනෑම අරමුණක් සඳහා වැඩසටහන ධාවනය කිරීමේ නිදහස |
| 1 | වැඩසටහන ක්‍රියා කරන හැටි අධ්‍යයනය කර ඔබට අවශ්‍ය ලෙස වෙනස් කිරීමේ නිදහස. මේ සඳහා මූලාශ්‍ර කේතයට ප්‍රවේශය පූර්ව කොන්දේසියකි |
| 2 | අන් අයට උදව් කිරීමට පිටපත් නැවත බෙදා හැරීමේ නිදහස |
| 3 | ඔබ වෙනස් කළ පිටපත් අන් අයට බෙදා හැරීමේ නිදහස |

නිදහස 1 සහ 3 මූලාශ්‍ර කේතය නොමැතිව අර්ථශූන්‍ය වේ. Binary එකක් පමණක් ලැබුණොත් එය ධාවනය කළ හැකිය (0), පිටපත් කළ හැකිය (2), නමුත් ඔබට එය වෙනස් කළ නොහැක. GPL ගොඩනැගී ඇත්තේ මෙම හිඩැස වසා දැමීමටයි.

ඉතිහාසය, GNU හි මූලාශ්‍රවලින්ම:
- Stallman ගේ මුල් නිවේදනය දිනය **1983 සැප්තැම්බර් 27** ය. එහි "Starting this Thanksgiving I am going to write a complete Unix-compatible software system called GNU" යනුවෙන් ඇත ([gnu.org initial announcement](https://www.gnu.org/gnu/initial-announcement.html)).
- GNU Manifesto ලියා ඇත්තේ **1985** දී ය ([gnu.org manifesto](https://www.gnu.org/gnu/manifesto.html)).

### 3. GPL හි යාන්ත්‍රණය: බෙදා හරින විට පමණක් ක්‍රියාත්මක වන කොන්දේසිය

GPL අනුවාද 2 (1991; Linux kernel එක යටතේ ඇත්තේ මෙම අනුවාදයයි) හි [පෙළ](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt) කියවූ විට, කොන්දේසි ක්‍රියාත්මක වන්නේ කුමන ක්‍රියා සඳහාද යන්න පැහැදිලිය:

- **§0:** පිටපත් කිරීම, බෙදා හැරීම සහ වෙනස් කිරීම හැර වෙනත් ක්‍රියා බලපත්‍රයෙන් ආවරණය නොවේ. වැඩසටහන ධාවනය කිරීම සීමා කර නැත.
- **§2(b):** වැඩසටහන හෝ එයින් ව්‍යුත්පන්න වූ කෘතියක් (work based on the Program) ඔබ බෙදා හරින්නේ නම්, එය මුළුමනින්ම මෙම බලපත්‍රයේ කොන්දේසි යටතේ, තුන්වන පාර්ශ්ව සියල්ලන්ටම ගාස්තුවකින් තොරව බලපත්‍ර කළ යුතුය.
- **§3:** Object code හෝ executable ආකාරයෙන් බෙදා හරින්නේ නම්, (a) සම්පූර්ණ machine-readable මූලාශ්‍රය සමඟ දිය යුතුය, හෝ (b) **අවම වශයෙන් වසර තුනක්** වලංගු ලිඛිත පොරොන්දුවක් (written offer) දිය යුතුය. (c) යටතේ වාණිජ නොවන බෙදා හැරීමකදී ඔබට ලැබුණු පොරොන්දුව ඉදිරියට දිය හැකිය.

මෙහි තර්කය: කතුහිමිකම සාමාන්‍යයෙන් පිටපත් කිරීම *තහනම්* කරයි. GPL කියන්නේ "ඔබට බෙදා හැරීමට අවසර ඇත්තේ මෙම කොන්දේසි පිළිපදින්නේ නම් පමණි" යනුවෙනි. කොන්දේසි කඩ කළොත් බෙදා හැරීමේ අවසරයම නැති වේ. එනිසා නිදහස ඊළඟ පිටපතටත් ගලා යයි.

**වැඩ කළ උදාහරණය: පහත අවස්ථා හතරේදී මූලාශ්‍රය දීමේ බැඳීමක් තිබේද?** (සියල්ල GPLv2 කේතය ගැන; නීති උපදෙස් නොවේ, බලපත්‍ර පෙළේ තර්කය පමණි.)

| අවස්ථාව | බෙදා හරිනවාද? | ප්‍රතිඵලය |
|---|---|---|
| A. ඔබ GPL වැඩසටහනක් ඔබේම පරිගණකයේ වෙනස් කර ඔබ පමණක් භාවිත කරයි | නැත | §2 සහ §3 කොන්දේසි ක්‍රියාත්මක නොවේ; බැඳීමක් නැත |
| B. ඔබ වෙනස් කළ binary එක පාරිභෝගිකයින්ට විකුණයි | ඔව් | §3: මූලාශ්‍රය සමඟ, හෝ වසර 3 ක ලිඛිත පොරොන්දුවක් සමඟ. මිල අය කිරීම තහනම් නැත (§1: "You may charge a fee for the physical act of transferring a copy") |
| C. ඔබ නොවෙනස් GPL binary එකක් USB එකක දමා මිතුරෙකුට දෙයි | ඔව් | §3 තවමත් අදාළයි: මූලාශ්‍රය හෝ පොරොන්දුව |
| D. ඔබ GPL කේතයේ කොටසක් ඔබේ වසා දැමූ (proprietary) වැඩසටහනකට ඇතුළු කර binary එක බෙදා හරියි | ඔව් | §2(b): මුළු ව්‍යුත්පන්න කෘතියම GPL යටතේ දිය යුතුය. එසේ කිරීමට අකමැති නම් එය බෙදා හැරිය නොහැක |

D අවස්ථාව ප්‍රධාන පෙළේ "Why This Combination Won" කොටස කියන දෙයයි: සමාගමකට Linux වෙනස් කර නිෂ්පාදනයක් විකිණිය හැකිය, නමුත් එම වෙනස්කම් වසා දැමිය නොහැක.

### 4. Linux හි බලපත්‍රය: 0.01 සිට 0.12 දක්වා

kernel.org හි තවමත් ඇති මුල්ම නිකුතු සටහන් කියවමු.

**[RELNOTES-0.01](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.01)** ("Copyrights etc" කොටස): kernel එක "(C) 1991 Linus Torvalds" ය. නැවත බෙදා හැරීමට කොන්දේසි තුනකි: සම්පූර්ණ මූලාශ්‍රය ලබා ගත හැකි විය යුතුය, කතුහිමි දැන්වීම් නොවෙනස්ව තිබිය යුතුය, සහ "You may not distibute this for a fee, not even "handling" costs" (මුල් අක්ෂර වින්‍යාසය එලෙසමයි). ඊට පසු එය මෙසේ කියයි: "Sadly, a kernel by itself gets you nowhere. To get a working system you need a shell, compilers, a library etc." සහ "Most of the tools used with linux are GNU software and are under the GNU copyleft." එම නිකුතුවම gcc මගින් compile කළ යුතු බවත් (Torvalds භාවිත කළේ 1.40), test කිරීමට `bash` binary එකක් ඇතුළත් බවත් සටහන කියයි.

**[RELNOTES-0.12](https://www.kernel.org/pub/linux/kernel/Historic/old-versions/RELNOTES-0.12)** ("COPYRIGHT" කොටස): "The Linux copyright will change", "removing the "you may not distribute it for money" condition", සහ "The GNU copyleft takes effect as of the first of February". නිකුතු සටහන්වල වර්ෂය මුද්‍රණය කර නැත. Wikipedia හි "History of Linux" ලිපිය මෙම සටහන් **1992 ජනවාරි 5** දිනැති ලෙස උපුටා දක්වමින්, GPL බලාත්මක වූයේ **1992 පෙබරවාරි 1** සිට බව කියයි. Torvalds ද 2000 දී LKML හි ලියා ඇත්තේ kernel එකේ බලපත්‍රය "has been there since 0.12 or so" ලෙසයි.

| | 0.01 | 0.12 සිට |
|---|---|---|
| මූලාශ්‍රය ලබා දිය යුතුද | ඔව් | ඔව් (GPL §3) |
| මුදලට බෙදා හැරිය හැකිද | **නැත**, handling ගාස්තුවක්වත් නැත | **ඔව්** (GPL §1) |
| ව්‍යුත්පන්න කෘති | පැහැදිලි නීතියක් නැත | GPL යටතේම (§2(b)) |

මුදල් කොන්දේසිය ඉවත් කිරීම වැදගත් වූයේ ඇයි? 0.01 කොන්දේසිය යටතේ CD එකක් හෝ තැටි කට්ටලයක් පිටපත් කිරීමේ පිරිවැය අය කර Linux බෙදා හරින්නෙකුට එය නීත්‍යනුකූලව කළ නොහැකි විය. GPL යටතේ මිලට විකිණීමට ඉඩ ඇත. නමුත් මිලදී ගන්නාට මූලාශ්‍රය සහ එම නිදහස හතරම ලැබේ. එය පසු කාලීන වාණිජ බෙදාහැරීම්වලට (distributions) දොර විවර කළ එක් නීතිමය පියවරකි.

### 5. Kernel සහ userland ඔබේම ඇසින්: මෙම පිටුවේ VM එක

ඉහත VM එක boot කර (තිරය click කර) මෙම විධාන ටයිප් කරන්න:

```
uname -s -r -m
uname -o
cat /proc/version
ls -l /bin/ls /bin/sh
busybox | head -2
ls /lib | head -3
```

අපි මෙම lab එකේම image එක (`linux4.iso`) boot කර ලැබූ ප්‍රතිදානය (serial console හරහා):

```
Linux 4.16.13 i686
GNU/Linux
Linux version 4.16.13 (fabian@nyu) (gcc version 7.3.0 (Buildroot 2018.08-git-00153-g8ac477681f)) ...
/bin/ls -> busybox
/bin/sh -> busybox
BusyBox v1.28.4 (2018-06-02 20:33:24 EST) multi-call binary.
ld-uClibc-1.0.30.so
```

මෙය කියවන හැටි:
- **Kernel එක Linux ය** (4.16.13). එය GNU compiler එකක් වන gcc 7.3.0 මගින් compile කර ඇත.
- **Userland එක GNU නොවේ.** `ls` සහ `sh` යන දෙකම BusyBox නම් එක් binary එකකට symbolic links ය. C පුස්තකාලය glibc (GNU) නොව uClibc ය. `gcc` සහ `bash` ද මෙහි නැත (`which gcc bash` කිසිවක් නොපෙන්වයි).
- එසේ වුවද `uname -o` මුද්‍රණය කරන්නේ "GNU/Linux" යි. එය kernel එකෙන් එන්නේ නැත: BusyBox හි `uname` මෙම පෙළ compile කරන විටම සවි කළ සැකසුමකින් (`CONFIG_UNAME_OSNAME`, පෙරනිමි අගය "GNU/Linux") මුද්‍රණය කරයි. එය userland එක GNU ද යන්න පරීක්ෂා කිරීමක් නොවේ (BusyBox 1.28.4 මූලාශ්‍රය, `coreutils/uname.c`).

එබැවින් මෙම VM එක ප්‍රධාන පෙළේ "GNU/Linux" නාම විවාදයට රසවත් ප්‍රතිවිරුද්ධ උදාහරණයකි: Linux kernel එකට GNU userland අනිවාර්ය නොවේ. කුඩා embedded පද්ධතිවල බොහෝවිට ඇත්තේ මෙවැනි Linux + BusyBox එකතුවකි. 1991 දී එසේ නොවීය: 0.01 නිකුතු සටහනටම අනුව Linux ධාවනය කිරීමට gcc සහ bash අවශ්‍ය විය.

### 6. GNU Hurd ගැන එක් වචනයක්

GNU හි සැලසුම් කළ kernel එක Hurd ය. GNU හි "[Linux and the GNU System](https://www.gnu.org/gnu/linux-and-gnu.html)" ලිපිය (Stallman) මෙසේ කියයි: "By the early 90s we had put together the whole system aside from the kernel." Hurd ධාවනය වන්නේ Mach මත ය. "GNU Hurd started working reliably in 2001", නමුත් සාමාන්‍ය භාවිතයට සූදානම් වීමට තවම බොහෝ දුර ඇති බව එම ලිපියම පිළිගනී. "GNU/Linux" නම ඉල්ලා සිටීමට එම ලිපිය දෙන හේතුවද මෙයයි. මෙය GNU පාර්ශ්වයේ අදහසයි. Torvalds ගේ පාර්ශ්වය "Linux" නම භාවිත කරයි. ප්‍රධාන පෙළ දෙකම සඳහන් කරයි.

### 7. පැන්සලෙන් අභ්‍යාසය

1. GPL නිදහස් හතරෙන් මූලාශ්‍ර කේතය අවශ්‍ය වන්නේ කුමන ඒවාටද? ඇයි?
2. සමාගමක් GPLv2 Linux kernel එකක් වෙනස් කර router එකක firmware ලෙස විකුණයි. මූලාශ්‍රය router පෙට්ටියේ නැත. GPLv2 §3 යටතේ ඔවුන්ට ඇති විකල්පය කුමක්ද?
3. 0.01 බලපත්‍රය යටතේ, Linux තැටි 10 ක් එක තැටියකට රුපියල් 100 ක පිරිවැය අය කර බෙදා හැරීමට ඉඩ තිබුණාද? 0.12 සිට?
4. VM එකේ `ls -l /bin/cat /bin/grep` ටයිප් කරන්න. ඒවා GNU coreutils/grep ද?
5. ඔබ GPL පුස්තකාලයක් භාවිත කරන වැඩසටහනක් ලියා කිසිවෙකුට නොදී ඔබේම සේවාදායකයේ (server) පමණක් ධාවනය කරයි. GPLv2 ට අනුව මූලාශ්‍රය දිය යුතුද?

(පිළිතුරු:
1. **1 සහ 3** (අධ්‍යයනය/වෙනස් කිරීම, වෙනස් කළ පිටපත් බෙදා හැරීම). Binary එකක් වෙනස් කිරීම ප්‍රායෝගික නොවන නිසා.
2. පෙට්ටිය සමඟ අවම වශයෙන් **වසර 3 ක ලිඛිත පොරොන්දුවක්** දී, ඉල්ලන ඕනෑම තුන්වන පාර්ශ්වයකට භෞතික පිරිවැයට වඩා වැඩි නොවන ගාස්තුවකට මූලාශ්‍රය ලබා දීම (§3(b)). නැතිනම් මූලාශ්‍රය සමඟම බෙදා හැරීම (§3(a)).
3. 0.01: **නැත** ("not even handling costs"). 0.12 සිට: **ඔව්**, ලබන්නාට මූලාශ්‍රය සහ GPL අයිතීන් ලැබෙන තාක් කල්.
4. **නැත.** මෙම image එකේ දෙකම **BusyBox** වෙත යොමු වේ (`/bin/cat -> busybox`, `/bin/grep -> busybox`; image එකේ පරීක්ෂා කළා).
5. **නැත.** GPLv2 කොන්දේසි ක්‍රියාත්මක වන්නේ පිටපත් කිරීම/බෙදා හැරීමේදී පමණි (§0, §3). (සේවාදායක භාවිතය ආවරණය කිරීමට වෙනම බලපත්‍ර ඇත. ඒවා මෙම පිටුවේ විෂය නොවේ.))

**මෙම කොටසේ මූලාශ්‍ර:**
- Free Software Foundation, "What is Free Software?": https://www.gnu.org/philosophy/free-sw.html (නිදහස් 0–3).
- Richard Stallman, GNU initial announcement, 27 September 1983: https://www.gnu.org/gnu/initial-announcement.html ; GNU Manifesto (1985): https://www.gnu.org/gnu/manifesto.html ; "Linux and the GNU System": https://www.gnu.org/gnu/linux-and-gnu.html
- GNU General Public License, version 2 (June 1991): https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt (§0, §1, §2(b), §3(a)–(c)).
- Linus Torvalds, RELNOTES-0.01 සහ RELNOTES-0.12, kernel.org Historic archive: https://www.kernel.org/pub/linux/kernel/Historic/old-versions/
- 0.12 දිනය සඳහා (ද්විතීයික): Wikipedia, "History of Linux": https://en.wikipedia.org/wiki/History_of_Linux ; Linus Torvalds, "Linux-2.4.0-test8", LKML, 2000 සැප්තැම්බර් 8.
- BusyBox 1.28.4, `coreutils/uname.c` (`CONFIG_UNAME_OSNAME`): https://git.busybox.net/busybox/tree/coreutils/uname.c?h=1_28_4
- මෙම පිටුවේ vm-terminal lab image එක (`static/labs/vm-terminal/assets/linux4.iso`, BusyBox 1.28.4, Linux 4.16.13, uClibc 1.0.30): §5 ප්‍රතිදානය එම image එක v86 හි boot කර serial console එකෙන් ලබා ගත් එකකි. බ්‍රවුසරයේ lab එක VGA තිරය භාවිත කරයි. විධාන එකමය, නමුත් prompt එකේ පෙනුම වෙනස් විය හැකිය.
- §3 හි අවස්ථා හතර සහ §4 හි වගුව අප සකස් කළ ආදර්ශ (illustrative) විශ්ලේෂණ වේ.

**පිටවීමේ දොර:** The GNU General Public License (Free Software Foundation) — copyleft බලාත්මක කළ ප්‍රාථමික නීතිමය පෙළ; ව්‍යාපෘතියේ ප්‍රකාශිත අරමුණ සඳහා Stallman ගේ GNU Manifesto (1985) සමඟ කියවන්න.


---
title: "GNU ව්‍යාපාරය සහ Linux"
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

**පිටවීමේ දොර:** The GNU General Public License (Free Software Foundation) — copyleft බලාත්මක කළ ප්‍රාථමික නීතිමය පෙළ; ව්‍යාපෘතියේ ප්‍රකාශිත අරමුණ සඳහා Stallman ගේ GNU Manifesto (1985) සමඟ කියවන්න.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

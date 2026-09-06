---
title: "Time-Sharing සහ Unix පෙළපත"
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 22
tags: []
summary: "Batch CPU කාර්යබහුලව තැබුවේය; time-sharing බහු පරිශීලකයන්ට එය අයිති කර ගත් මායාව දුන්නේය — Multics අභිලාෂය, පසුව Unix සරලත්වය"
image_prompt: "Family-tree infographic: Multics branching into Unix, then BSD/System V leading to Linux/macOS, clean genealogy diagram style"
video_prompt: "20-second animation: multiple terminal sessions sharing one mainframe's CPU timeline, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: Unix family tree + time-sharing scheduling timeline"
---

Batch processing (Post 21) throughput විසඳුවේය — මිල අධික CPU රැකියා අතර කාර්යබහුලව තබන්න. එය අන්තර්ක්‍රියාකාරීත්වය සඳහා කිසිවක් නොකළේය. 1960 ගණන්වල මුල් සිට මැද භාගය දක්වා මතු වූ Time-sharing වෙනස් සීමාවක් විසඳුවේය: බහු පරිශීලකයන්ට *එකවර* අන්තර්ක්‍රියා කිරීමට ඉඩ දෙන්න, එක් එක් කෙනාට යන්ත්‍රය තනිවම ඇති මායාව සමඟ.

## මූලික උපක්‍රමය: වේගවත් මාරුවීම

CPU එකක් මිනිස් ප්‍රතිචාර කාලයට සාපේක්ෂව වේගවත්ය. බහු පරිශීලකයන්ගේ processes තත්පරයකට බොහෝ වාරයක් අතර මාරු වන්න — එක් එක් කෙනාට කුඩා කැබැල්ලක් ලැබේ — සහ කිසිවෙකුට හිඩැස් නොදැනේ. Post 9 හි clocked logic එකේ මෘදුකාංග-scheduling සමානකය: විවික්ත, වේගවත් මාරුවීම *අඛණ්ඩ* ලෙස පෙනේ, එක් තනි core එකක ඕනෑම මොහොතක එක් process එකක් පමණක් ධාවනය වුවත්.

Multics (MULTiplexed Information and Computing Service), 1964 සිට සැලසුම් කර 1965 දී ප්‍රසිද්ධියේ විස්තර කළ ඒකාබද්ධ MIT / Bell Labs / GE ව්‍යාපෘතියක්, අතිශය අභිලාෂකාමී විය — hierarchical file systems, dynamic linking, දශක ගණනකට පසුවත් වෙනත් තැන්වල සම්මත වූ fine-grained access control. එය බොහෝ ගිණුම් අනුව එකල දෘඪාංගයට over-engineered වූ අතර වාණිජව අරගල කළේය.

## Multics සිට Unix දක්වා

Bell Labs 1969 දී Multics වෙතින් ඉවත් විය. එහි වැඩ කළ Ken Thompson සහ Dennis Ritchie බොහෝ කුඩා පරිමාණයකින් නැවත නැවත ක්‍රියා කළහ — හිතාමතාම සරලව, බොහෝ අඩු බලවත් දෘඪාංගය මත (මුලින් spare PDP-7 එකක්). ප්‍රතිඵලය Unix විය: composable අදහස් කුඩා කට්ටලයක් වටා ගොඩනැගූ time-sharing OS එකක් — "සියල්ලක්ම file එකකි," pipes මගින් සම්බන්ධ වූ කුඩා තනි-අරමුණු වැඩසටහන්, සහ C භාෂාවෙන් නැවත ලිවීමෙන් පසු portable නිර්මාණයක් (Post 27 එම භාෂාව ආවරණය කරයි, බොහෝ දුරට එම මිනිසුන්ම විසින්).

Portability වැදගත් විය. Unix බොහෝ සමකාලීනයන් මෙන් එක් නිෂ්පාදකයෙකුගේ පෙට්ටියකට අගුළු දමා නොතිබූ නිසා, සුළු porting උත්සාහයකින් vendors හරහා පැතිරිය හැකි විය — තනි නිෂ්පාදන රේඛාවකට බැඳුණු පද්ධතිවලට වඩා ව්‍යුහාත්මක වාසියක්.

**දැන් මෙය උත්සාහ කරන්න.** පහත VM එක boot කරන්න, යතුරුපුවරු අවධානය සඳහා කළු තිරය ක්ලික් කරන්න, පසුව `uname`, `whoami`, සහ `ls` ධාවනය කරන්න — එකක රූප සටහනක් නොව, ජීවමාන Unix-පෙළපත් shell එකක්.

{{< lab type="vm-terminal" height="600" >}}

## බෙදීම: BSD සහ System V

Unix හි licensing ඉතිහාසය දඟලන සුළුය (AT&T හි antitrust-සම්බන්ධ සීමා මගින් දිගු කාලයක් Unix නිදහසේ වාණිජකරණය කිරීමට නොහැකි වූ අතර, එය පරස්පර විරෝධී ලෙස පුළුල් ශාස්ත්‍රීය බෙදාහැරීම දිරිමත් කළේය). එය අවසානයේ ප්‍රධාන පෙළපත් දෙකකට බෙදුණේය: BSD (Berkeley Software Distribution), Phase 6 හි TCP/IP stack බොහෝමය ඇතුළුව සැලකිය යුතු නව කාර්යය සමඟ, සහ AT&T හි වාණිජ System V රේඛාව. දෙකම වසර ගණනක් හරස්-පරාගණය විය. නවීන පද්ධති තවමත් එක් ශාඛාවකට හෝ අනෙකට නිර්මාණ තීරණ අනුගමනය කරයි — macOS හි kernel එකට ගැඹුරු BSD පෙළපතක් ඇත; බොහෝ enterprise Unix වඩාත් සෘජුව System V වෙතින් පැවත ආවේය.

## මෙය ගෙන යන්නේ කොහේද

Unix හි අදහස් — සහ අවසානයේ Unix-ව්‍යුත්පන්න හෝ Unix-ආනුභාවිත කේතය — Linux සහ macOS යන දෙකෙහිම සෘජු පූර්වජයාය, ඒවා දෙක අතර අද servers, workstations, සහ වැඩි වැඩියෙන් mobile සහ embedded උපාංගවලින් අතිමහත් බහුතරය ධාවනය කරයි. "AT&T හි හිමිකාර Unix" සිට "අන්තර්ජාලයේ බොහෝමය ධාවනය කරන නිදහස්, විවෘතව සංවර්ධිත Linux" දක්වා යාමට වෙනම දෘෂ්ටිවාදී සහ නීතිමය ව්‍යාපාරයක් අවශ්‍ය විය — GNU ව්‍යාපෘතිය — ඊළඟ පෝස්ට් එක ආවරණය කරයි. ඒ දෙක අවසානයේ එක් ප්‍රමුඛ තොගයකට ඒකාබද්ධ වුවත්, Unix හි තාක්ෂණික පෙළපතෙන් වෙනස් කතාවකි.

**පිටවීමේ දොර:** Dennis M. Ritchie and Ken Thompson, "The UNIX Time-Sharing System" (*Communications of the ACM*, 1974) — Unix හි නිර්මාණය පිළිබඳ සම්භාව්‍ය ප්‍රාථමික ප්‍රකාශය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

---
title: "Mainframes සිට Minicomputers සිට Microprocessors දක්වා"
weight: 18
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 18
tags: []
summary: "පරිගණකයක් ලැබෙන්නේ කාටද යන යුග තුනක් — ආයතනික, දෙපාර්තමේන්තු, පසුව සෑම කෙනෙකුටම එක් චිපයක්"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC (Phase 1) වර්ග අඩි 1,800 ක් පමණ අල්ලාගෙන ටොන් 30 ක් පමණ බර විය. දුරකථන CPU එකක් ඇඟිල්ලේ අගින් එයට වඩා බොහෝ ගුණයකින් ඉක්මවයි. එම කඩා වැටීම එක් පැනීමක් නොවීය — යුග තුනක්, එක් එක් එක වෙනස් ලෙස පිළිතුරු දෙමින්: *පරිගණකයක් ලැබෙන්නේ කාටද, සහ කොපමණ පවතීද?*

## Mainframes: එක් යන්ත්‍රයක්, බෙදාගත්

1950–60 ගණන්: විශ්වවිද්‍යාල, සමාගම්, රජයන් සඳහා කාමර පුරා පිරුණු යන්ත්‍ර — batch processing (Post 21) හරහා බෙදාගත්. IBM ගේ System/360 (1964) පරිමාණයෙන් ඔබ්බට වැදගත් විය: කාර්ය සාධන පරාසයක් හරහා අනුකූල යන්ත්‍ර *පවුලක්*, එකම මෘදුකාංගය. ISA එක (Post 11) යටතේ ඇති පෙට්ටියෙන් හිතාමතා වෙන් කිරීම, එවිට පාරිභෝගිකයෙකුගේ කේතය දෘඪාංග උත්ශ්‍රේණියකින් පැවතුණේය. Gene Amdahl, Gerrit Blaauw, සහ Fred Brooks එම ගෘහ නිර්මාණය මෙහෙයවූහ.

## Minicomputers: දෙපාර්තමේන්තුවකට එකක් මිලදී ගත හැක

1970 ගණන්: DEC ගේ PDP-11 (1970) සහ ආශ්‍රිතයන් යන්ත්‍රය සම්පූර්ණ ආයතනයකට නොව දෙපාර්තමේන්තුවකට මිලදී ගෙන, මධ්‍යම කාර්යාංශයක් නොමැතිව ධාවනය කළ හැකි තරමට කුඩා කළේය. දිගු ආයු කාලයක් හරහා PDP-11s ආසන්න වශයෙන් 600,000 ක් අලෙවි විය. ISA එකේ orthogonal addressing සහ පිරිසිදු කේතනය පසුකාලීන නිර්මාණයට හැඩගැස්වූ අතර, C (Post 27) හි පුරුදු ඇතුළුව — එය Unix (Post 22) සමඟ බොහෝ දුරට PDP-11 දෘඪාංගය මත වැඩුණේය.

## Microprocessors: එක් Die එකක CPU එක

අඛණ්ඩතා බිඳීම: විවික්ත කොටස්වල රාක්ක රැහැන් කිරීම වෙනුවට සම්පූර්ණ CPU එක එක් integrated circuit එකක නිෂ්පාදනය කරන්න. Intel ගේ 4004 (1971), කැල්කියුලේටරයක් සඳහා ගොඩනැගූ, සාමාන්‍යයෙන් පළමු වාණිජ තනි-චිප CPU එක ලෙස සැලකේ — 4-bit, ට්‍රාන්සිස්ටර ආසන්න වශයෙන් 2,300 ක්, උපරිමයෙන් ආසන්න වශයෙන් 740 kHz. ඕනෑම නවීන මිනුමකින් දුර්වලය; ඊළඟ පෝස්ට් එකේ 8080, Z80, සහ x86 පෙළපතේ සෘජු මුතුන් මිත්තා.

## කඩා වැටීම සංයුක්ත වූයේ ඇයි

සෑම පියවරක්ම Phase 8 හි නිෂ්පාදන ඝනත්වය අනුගමනය කරයි: වැඩි ට්‍රාන්සිස්ටර, අඩු ප්‍රදේශය, අඩු පිරිවැය. Mainframes backplanes මත දහස් ගණන් සංරචක විය; microprocessors එම ව්‍යුහය සිලිකන් මත සම්පීඩනය කළේය. පරිගණකකරණය ආයතනික සම්පතකින් දෙපාර්තමේන්තු මෙවලමකට පසුව පුද්ගලික (පසුව embedded) උපාංගයකට ගමන් කළේය — Phase 8 නවීන process node එකක් ඇත්ත වශයෙන්ම අදහස් කරන්නේ කුමක්ද යන්නට අනුගමනය කරන එම පරිමාණ වක්‍රයම.

{{< lab type="mini-cpu" >}}

**පිටවීමේ දොර:** G. M. Amdahl, G. A. Blaauw, and F. P. Brooks Jr., "Architecture of the IBM System/360" (*IBM Journal of Research and Development*, 1964) — අනුකූල යන්ත්‍ර පවුලක් සහ ISA/ක්‍රියාත්මක කිරීම බෙදීම පිළිබඳ ප්‍රාථමික ප්‍රකාශය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

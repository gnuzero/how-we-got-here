---
title: "Clock Speed බිත්තිය"
date: 2026-01-01
draft: false
phase: "5 — බස් සහ පද්ධති ගෘහ නිර්මාණය"
series_index: 36
tags: []
summary: "සංඛ්‍යාතය තාපයට ගැටුණේය — එබැවින් කර්මාන්තය වේගවත් clocks වෙනුවට පුළුල් විය (cores, පසුව fabrics)"
image_prompt: "Graph infographic: CPU clock frequency climbing then flattening around 2005, power density curve rising toward a thermal ceiling, clean data-visualization diagram style"
video_prompt: "20-second animation: a CPU die heating up as frequency is pushed higher, hitting a thermal ceiling, then splitting into multicore, clean technical animation"
schematics: "Diagram: clock frequency vs year graph + power density (P=CV²f) scaling curve + single-core-vs-multicore comparison"
---

Post 35 මතක-පැත්තේ බිත්තිය විය: DRAM latency CPU සමඟ ඉදිරියට යාමට අසමත් වීම. මෙය ආසන්න වශයෙන් එකම මොහොතේ ගොඩබැසුණු ගණනය-පැත්තේ බිත්තියයි. එකට — එකක පමණක් නොව — ඒවා කර්මාන්තය multicore (Post 17) වෙතත්, පසුව Post 37 හි fabrics වෙතත් හැරුණේ ඇයි යන්නයි.

## නැමුණු වක්‍රය

Clock සංඛ්‍යාතය 1980 ගණන්වල සිට 2000 ගණන්වල මුල් භාගය දක්වා නැග්ගේය, පසුව 2004–2005 පමණ සමතලා විය. Desktop කොටස් GHz 4 කට ආසන්න විය; පටු ව්‍යතිරේක සමඟ, ප්‍රධාන ප්‍රවාහ clocks නැගීම නැවැත්තුවේය transistor ගණන් (Moore's Law, Phase 8) තවමත් නැගුණත්. දශක ගණනක් එම දෙක එකට ගමන් කළේය. පසුව නොකළේය.

## P ≈ CV²f, සහ Voltage පදය

CMOS හි ගතික බලය දළ වශයෙන් capacitance × voltage වර්ග × සංඛ්‍යාතයයි. සංඛ්‍යාතය පමණක් බලයේ රේඛීය ය — අපහසුය, මාරාන්තික නොවේ. ස්ථිර process එකකදී, වේගවත් clock එකකට බොහෝ විට විශ්වාසනීයව රැඳී සිටීමට ඉහළ supply අවශ්‍ය විය, සහ voltage *වර්ග* වේ. සංඛ්‍යාතය සහ voltage එකට නැගීම සංයුක්ත වේ. 2000 ගණන්වල මැද බිත්තිය Dennard scaling බිඳ වැටීම සහ තවත් voltage කැපීම් සීමා කරන leakage ද විය. තාපය, මඟ හැරුණු පරිපථ උපක්‍රමයක් නොවේ.

## තාප උඩුකුරු සීමාවක්, Skew වගේම වර්ගය

තාපය බවට පත් වන බලය die එකෙන් ඉවත් විය යුතුය නැතහොත් chip එක throttle කරයි (නිර්මාණය අනුව) හෝ, නරක අතට, අසාර්ථක වේ. 2000 ගණන්වල මැද වන විට, ප්‍රධාන ප්‍රවාහ වායු සිසිලනය දැනටමත් එහි ප්‍රයෝජනවත් සීමාවට ආසන්න විය. Clocks — සහ ඒවා සමඟ පැමිණි voltage — තවත් තද කිරීම යනු ආර්ථික සිසිලනයට ඉවත් කළ නොහැකි බල ඝනත්වයන් අදහස් කිරීමයි. Post 32 හි parallel-බස් skew එකම වර්ගය: භෞතික උඩුකුරු සීමාවක්, ඔබ වටා මාර්ගගත කරන නිර්මාණ අකාර්යක්ෂමතාවක් නොවේ.

## වේගවත් වෙනුවට පුළුල්

අඩුවන ILP (Post 17) *සහ* එක් core එකක දැඩි බල උඩුකුරු සීමාවක්: එක් core එකක් වේගවත් කිරීම නවත්වන්න; die එක මත කිහිපයක් තබන්න, එක් එක් එක මධ්‍යස්ථ, වඩා කාර්යක්ෂම clock එකක. සමස්ත throughput තවමත් නැගිය හැක. කිසිදු තනි core එකකට සංඛ්‍යාතය නැවැත්තුණු තාප රේඛාව තරණය කිරීමට අවශ්‍ය නැත.

## බිත්ති දෙකක්, හැරීමක් එකක්

මතක බිත්තිය යනු DRAM latency ගණනයට පරාජය වීමයි. Clock-speed බිත්තිය යනු ගණනයම තාපයට ගැටීමයි. වෙනස් භෞතික විද්‍යාව, එකම දශකය. එකට ඒවා "එක් core එකක් වේගවත් කරන්න" වර්ධන කතාව ලෙස අවසන් කර "cores වැඩි — සහ, වැඩි වැඩියෙන්, විශේෂිත parallel දෘඪාංගයට වැඩ ගෙන යන්න, පසුව සාමාන්‍ය-අරමුණු CPU එකක් හරහා නැවත නොගොස් එම ඒකක සම්බන්ධ කරන්න" බල කළේය. එම අවසාන වගන්තිය Post 37 ය, සහ පසුව GPUs (Phase 9) සහ accelerators (Phase 10).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

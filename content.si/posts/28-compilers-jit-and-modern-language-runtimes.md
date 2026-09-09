---
title: "Compilers, JIT, සහ නවීන භාෂා Runtimes"
weight: 29
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 28
tags: []
summary: "AOT runtime කරුණු නොමැතිව එක් වරක් compile කරයි; JIT hot paths සඳහා බලා සිටී — සහ garbage collection පිරිවැය runtime වෙත මාරු කරයි"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

Post 27 ඉහළ-මට්ටමේ භාෂා *ඇයි* පවතීද යන්න ආවරණය කළේය. මෙම පෝස්ට් එක ඒවා භාවිතා කළ හැකි කරන යන්ත්‍රයයි: compiler එක, මූලාශ්‍රය සැබෑ CPU එකකට (Phase 3) ක්‍රියාත්මක කළ හැකි දෙයකට පරිවර්තනය කරයි.

## සම්භාව්‍ය Pipeline එක (කෙටියෙන්)

Lexer → tokens. Parser → Abstract Syntax Tree. Semantic analysis ව්‍යාකරණයට පමණක් හඳුනා ගත නොහැකි දේ අල්ලා ගනී (types, නොප්‍රකාශිත නම්). බොහෝ සැබෑ compilers පසුව Intermediate Representation (IR) එකකට පහත් කරයි — මූලාශ්‍ර syntax ට වඩා ඒකාකාර, තවමත් ඕනෑම ඉලක්ක ISA එකකින් ස්වාධීන — **optimizer** එක ක්‍රියා කරන තැන: dead-code elimination, loop-invariant hoisting, inlining, සහ හැසිරීම සුරකිමින් නාස්ති වැඩ කපන තවත් දුසිම් ගණනක පරිවර්තන. **Code generation** ඉලක්ක උපදෙස් නිකුත් කර register allocation කරයි (කුමන අගයන් දුර්ලභ භෞතික registers වල ජීවත් වේද එදිරිව මතකයට spilling).

එය කොඳු නාරටියයි. සෑම pass එකකම විශ්වකෝෂය අරමුණ නොවේ — සීමාව මෙයයි: මූලාශ්‍ර abstractions ධාවනය නොවේ; යමක් ඒවා පහත් කළ යුතුය, සහ එම යම ක්‍රියාත්මක වීමට *පෙර* හෝ *අතරතුර* ධාවනය විය හැක.

## Ahead-of-Time එදිරිව Just-in-Time

වැඩසටහන කිසිදා ක්‍රියාත්මක වීමට පෙර සම්පූර්ණ pipeline එක එක් වරක් ධාවනය කරන්න: Ahead-of-Time (AOT) — C සහ සාම්ප්‍රදායික FORTRAN. Just-in-Time (JIT) — Java, JavaScript, සහ ඥාතීන් — interpreter එකකින් හෝ වේගවත් baseline compiler එකකින් පටන් ගනී, පසුව *runtime දී* hot paths සොයා බර ප්‍රශස්තකරණය සමඟ ඒවා නැවත compile කරයි.

JIT හි වාසිය AOT compiler එකකට කිසිදා නොතිබූ තොරතුරුය: නිරීක්ෂිත branches, argument types, සැබෑ hot loops — එම දත්ත නොමැතිව උපකල්පනය කිරීමට අනාරක්ෂිත ප්‍රශස්තකරණ. පිරිවැය සැබෑය: compilation ක්‍රියාත්මක වීමේදී cycles පුළුස්සයි, සහ පළමු තත්පර බොහෝ විට steady state ට වඩා මන්දගාමීව ධාවනය වේ — සම්භාව්‍ය warm-up.

## Runtimes: Compilation ට වඩා වැඩි දෙයක්

Managed භාෂා (Java, C#, සහ විවිධ මට්ටම්වලට JavaScript සහ Python) compiler එක පුළුල් runtime එකක් සමඟ යුගල කරයි — වඩාත්ම ප්‍රතිවිපාක සහිතව garbage collection හරහා ස්වයංක්‍රීය මතක කළමනාකරණය, ක්‍රමලේඛකයන්ට සෑම allocation එකක ජීවිත කාලය නිරීක්ෂණයෙන් නිදහස් කරයි (C හි ප්‍රධාන දෝෂ මූලාශ්‍රයක්). සංකීර්ණත්වය runtime වෙත මාරු වේ: අතින් උත්සාහය overhead සහ, ඓතිහාසිකව, අඩු පුරෝකථනය කළ හැකි pauses සඳහා හුවමාරු කෙරේ. එම ආතතිය හරියටම Posts 29–30 "තත්‍ය කාල" සහ "garbage-collected managed runtime" නිතර විරුද්ධ ලෙස සලකන්නේ ඇයි.

## එය ජීවමානව බලන්න

පහත VM terminal එක compile කිරීමට සැබෑ ස්ථානයකි: කුඩා C වැඩසටහනක් මත `gcc` උත්සාහ කර `-S` සමඟ assembly පරීක්ෂා කරන්න — මෙම පෝස්ට් එකේ abstractions නිශ්චිත යන්ත්‍ර උපදෙස් බවට පත් වේ.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

---
title: "ඉහළ-මට්ටමේ භාෂා: FORTRAN, COBOL, Lisp, C"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 27
tags: []
summary: "වසම් හතරක් abstractions හතරක් බල කළේය — සූත්‍ර, ව්‍යාපාර ගද්‍ය, සංකේතාත්මක ලැයිස්තු, ලෝහයට සමීප පද්ධති"
image_prompt: "Timeline infographic of FORTRAN, COBOL, Lisp, C with characteristic code snippets, clean historical technical infographic"
video_prompt: "20-second animation: a short algorithm expressed in FORTRAN, COBOL, Lisp, and C syntax successively, clean motion graphics"
schematics: "Diagram: language paradigm comparison + language family tree"
---

Assembly (Post 26) යනු යන්ත්‍ර කේතය උඩ එකට-එක තට්ටුවකි — අමු binary ට වඩා හොඳය, තවමත් ක්‍රමලේඛකයාට උපදෙස්, registers, සහ අතින් layout ගැන සිතීමට බල කරයි. ඉහළ-මට්ටමේ භාෂා වෙනස් දෙයක් හඳුන්වා දුන්නේය: දෘඪාංගයට එකට-එක map නොවන abstractions. *කුමක්* ගණනය කළ යුතුද යන්න ප්‍රකාශ කරන්න; compiler එකක් (Post 28) *කෙසේද* යන්න සොයා ගනී.

## FORTRAN: Formula Translation

FORTRAN (1957, IBM) විද්‍යාත්මක සහ ඉංජිනේරු ගණනය සඳහා ගොඩනැගුණේය — නමෙහි අර්ථය "Formula Translation" ය. පැහැදිලි register allocation සමඟ අංක ගණිත උපදෙස් අනුපිළිවෙලකට වඩා `X = A * B + C` ලියන්න. ඒ සඳහා සැබෑ compiler බුද්ධිය අවශ්‍ය විය. මුල් සැකය වූයේ compiled කේතයට අතින් ලියන ලද assembly සමඟ තරඟ කළ නොහැකි බවයි; FORTRAN හි compiler එකට ආක්‍රමණශීලී ප්‍රශස්තකරණය හරහා එය වැරදි බව ඔප්පු කිරීමට සිදු විය, සහ බොහෝ දුරට එසේ කළේය.

## COBOL: විද්‍යාව නොව ව්‍යාපාරය

COBOL (1959–60, CODASYL) වෙනස් වසමක් ඉලක්ක කළේය: වැටුප්, ගිණුම්කරණය, තොග — විද්‍යාව නොව ව්‍යාපාර දත්ත සැකසුම. Grace Hopper තමන් විසින්ම COBOL නොලිව්වේය, නමුත් ඇගේ පෙර FLOW-MATIC ප්‍රාථමික බලපෑමක් වූ අතර, එම බලපෑම සහ ඇගේ අනුග්‍රහය සඳහා ඇය බොහෝ විට "COBOL හි මව" ලෙස ගෞරවයට පාත්‍ර වේ. නිර්මාණ තේරීම: විස්තීර්ණ, ඉංග්‍රීසි-වැනි syntax (`ADD SALARY TO TOTAL-PAY`), ක්‍රමලේඛක නොවන විශ්ලේෂකයන් සහ විගණකයන්ට කියවිය හැකි වීමට අදහස් කළේය. Legacy අතිමහත් සහ තවමත් අවතක්සේරු කර ඇත: මූලික බැංකුකරණය, රක්ෂණය, සහ රජයේ පද්ධතිවලින් සැලකිය යුතු කොටසක් තවමත් දශක ගණනකට පෙර ලියන ලද COBOL ධාවනය කරයි — මෙහෙවර-විවේචනාත්මක මූල්‍ය පද්ධති නැවත ලිවීම මිල අධික සහ අවදානම් සහිත තරමට බොහෝ සංවිධාන මුල් එක පවත්වාගෙන යයි.

## Lisp: වෙනස් ආකෘතියක්

Lisp (1958, John McCarthy) FORTRAN සහ COBOL හි imperative විලාසය සම්පූර්ණයෙන්ම අත්හැරියේය — පළමු-පන්ති අගයන් ලෙස functions, සහ කේතය සහ දත්ත එකම ලැයිස්තු ව්‍යුහය බෙදා ගන්නා අවම ඒකාකාර syntax එකක්. විලාසය පමණක් නොවේ: runtime දී අනෙක් වැඩසටහන් ගොඩනඟා ක්‍රියාත්මක කරන වැඩසටහන් දශක ගණනක AI සහ සංකේතාත්මක ගණනයට පදනම් වූ අතර, අද ප්‍රධාන ධාරාවේ භාෂාවල functional විශේෂාංගවලට තවමත් බලපායි.

## C: පද්ධති ක්‍රමලේඛනය, යන්ත්‍රයට සමීප

C (1972, Dennis Ritchie, Unix සමඟ සංවර්ධනය විය — Post 22) තවත් හුවමාරුවක් ගත්තේය: assembly උඩ සැබෑ ඵලදායිතාව සඳහා තරම් ඉහළ-මට්ටමේ, සම්පූර්ණ OS kernel එකක් එයින් ලිවිය හැකි තරම් දෘඪාංගයට සමීප — එකල අසාමාන්‍යය. Pointer arithmetic, අවම runtime, යන්ත්‍ර ops වෙත පුරෝකථනය කළ හැකි mapping Unix portable කළේය: එක් එක් ඉලක්කයේ assembly වලින් OS නැවත නොලියා, නව යන්ත්‍රයකට C compiler එක port කරන්න.

## පොදු නූල

එක් එක් භාෂාව වෙනස් ප්‍රමුඛතාවක් සඳහා ප්‍රශස්තකරණය කළේය — FORTRAN සංඛ්‍යාත්මක ප්‍රකාශනය සඳහා, COBOL ව්‍යාපාර කියවිය හැකි බව සඳහා, Lisp සංකේතාත්මක abstraction සඳහා, C පද්ධති-මට්ටමේ පාලනය සඳහා — සහ එක් එක් එක තවමත් අද නිර්මාණය හැඩගස්වයි. ඔවුන් බෙදා ගන්නා දේ, සහ ඒවායින් ඕනෑම එකක් භාවිතා කළ හැකි කරන දේ, යනු ක්‍රමලේඛකයා එම පරිවර්තනය අතින් නොකර abstraction එක කාර්යක්ෂම යන්ත්‍ර කේතයට හරවන compiler එකකි. එම ක්‍රියාවලිය — සහ "ප්‍රශස්තකරණය" නිශ්චිතව කුමක්ද යන්න — ඊළඟ පෝස්ට් එකයි.

**පිටවීමේ දොර:** Dennis M. Ritchie, "The Development of the C Language" (HOPL-II / ACM) — Unix අසල C හි නිර්මාණය පිළිබඳ ප්‍රාථමික ගිණුම; Lisp හි ආරම්භක ප්‍රකාශය සඳහා, සංකේතාත්මක ප්‍රකාශනවල recursive functions පිළිබඳ John McCarthy ගේ මුල් CACM පත්‍රිකා බලන්න.


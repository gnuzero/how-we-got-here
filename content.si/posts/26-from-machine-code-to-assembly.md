---
title: "යන්ත්‍ර කේතයේ සිට Assembly දක්වා"
date: 2026-01-01
draft: false
phase: "4 — මෘදුකාංග පදනම්: OS, භාෂා සහ තත්‍ය කාල පද්ධති"
series_index: 26
tags: []
summary: "අමු binary යනු CPU ධාවනය කරන දෙයයි — assembly පළමු කියවිය හැකි තට්ටුවයි, තවමත් mnemonic එකකට එක් උපදෙසක්"
image_prompt: "Side-by-side comparison of raw binary machine code and its assembly mnemonic equivalent, clean textbook diagram style"
video_prompt: "15-second animation: binary instructions transforming into readable assembly mnemonics, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: machine code to assembly mapping table + assembler translation flow"
---

Phase 3 හි සෑම උපදෙසක්ම — datapath, pipeline, ISA — අවසානයේ අමු binary ලෙස පවතී: දෘඪාංගය සෘජුව decode කරන bit රටා. කිසිවෙකු පරිමාණයෙන් එසේ වැඩසටහන් ලියන්නේ නැත. Assembly යනු එම binary උඩ ඇති පළමු abstraction එකයි. එය මිලදී ගන්නා දේ — සහ එය *වෙනස් නොකරන* දේ — තේරුම් ගැනීම මෘදුකාංග ඉතිහාසයේ පහළට යන සියල්ලටම වැදගත්ය.

## Assembly සැබවින්ම කුමක්ද

Assembly සෑම උපදෙසකටම මිනිසාට කියවිය හැකි mnemonic එකක් දෙයි — `ADD`, `LDA`, `JMP` — යන්ත්‍ර-කේත bit රටාවකට එකට-එක අනුරූප වේ. එය Post 27 හි භාෂා මෙන් "ඉහළ-මට්ටමේ" නොවේ; යටින් ඇති දෘඪාංග ops උඩ abstraction එකක් නැත. සෑම assembly උපදෙසක්ම හරියටම එක් යන්ත්‍ර උපදෙසකට map වේ. ඔබට ලැබෙන්නේ *කියවිය හැකි බව* සහ *සංකේතාත්මක යොමුව*යි: opcode `0101` මතක තබා ගැනීමට වඩා `LDI` ලියන්න; ලේබලයක් ලියා assembler එකට jump offset ගණනය කිරීමට ඉඩ දෙන්න, byte ලිපින අතින් නැවත ගණනය කිරීමට වඩා.

## Assembler එකේ රැකියාව

Assembler එකක් assembly පෙළ යන්ත්‍ර කේතයට පරිවර්තනය කරයි — ලේබල ලිපින වෙත විසඳා, mnemonics opcode bits වෙත, operands ISA හි කේතන ක්ෂේත්‍රවලට ඇසුරුම් කර (Post 11). යාන්ත්‍රික, බොහෝ දුරට එකට-එක. ගැඹුරු අර්ථයකින් කිසිවක් ප්‍රශස්තකරණය හෝ නැවත ව්‍යුහගත නොවේ — පූර්ණ compiler එකක් (Post 28) ඉහළ-මට්ටමේ භාෂාවක් සමඟ කරන දෙයට වඩා වෙනස්ය.

## එය සිදු විය යුතු වූයේ ඇයි

Assembly ට පෙර, ක්‍රමලේඛනය යනු binary ඇතුළත් කිරීම, හෝ හොඳම අවස්ථාවේ අමු hex හෝ octal opcodes — සුළු වැඩසටහන්වලට ඔබ්බෙන් කළමනාකරණය කළ නොහැකි, පරිමාණයෙන් debug කිරීමට හෝ වෙනස් කිරීමට පාහේ අසම්භව්‍ය. සංකේතාත්මක ලේබල පමණක්ම පරිවර්තනීය විය: උපදෙසක් ඇතුළත් කරන්න හෝ ඉවත් කරන්න, සහ ඔබ තවදුරටත් සෑම jump එකක්ම අතින් නැවත ගණනය නොකරයි — assembler එක ගණිතය කරයි.

## Assembly තවමත් වැදගත් වන්නේ කොහේද

නවීන මෘදුකාංග අතිමහත් ලෙස ඉහළ-මට්ටමේ භාෂාවලින් ලියා Post 28 හි pipeline හරහා compile කෙරේ. Assembly අතුරුදහන් වී නැත. ඉංජිනේරුවන් තවමත් compiler එකක් නිෂ්පාදනය කළ දේ හරියටම තර්ක කිරීමට එයට බැස යයි (hot loops, ආරක්ෂක සමාලෝචනය, reverse engineering), හෝ පහළම තට්ටු ලිවීමට — boot කේතය, interrupt handlers, kernel එකක කොටස් — උපදෙස්-මට්ටමේ පාලනය අවශ්‍ය වන අතර ඉහළ abstractions එය සැඟවීමට හෝ වැළැක්වීමට ඉඩ ඇති තැන්වල.

පහත mini-CPU lab එක මාලාවේ වඩාත්ම සෘජු අත්දැකීම් සම්බන්ධතාවයයි: එහි assembler එක හරියටම විස්තර කළ පරිදි ක්‍රියා කරයි — mnemonics opcode bits මතට එකට-එක, ඊට වඩා abstract කිසිවක් නැත.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

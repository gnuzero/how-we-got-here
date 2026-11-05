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

## ගැඹුරින්: compiler එකක් ඔබ වෙනුවෙන් කරන වැඩය — එක් ප්‍රකාශනයක් අතින් compile කිරීම, FORTRAN හි අභියෝගය, Lisp හි list සහ C හි pointer

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** si.wikipedia හි FORTRAN, COBOL හෝ Lisp ගැන ලිපියක් අපගේ සෙවීමේදී හමු නොවීය.
>
> සිංහලෙන් අපට හමු නොවූ දේ: "උසස් මට්ටමේ" (high-level) ප්‍රකාශනයක් යන්ත්‍ර උපදෙස් බවට පත් වන්නේ කෙසේද, FORTRAN කණ්ඩායමට කාර්යක්ෂමතාව ජීවන මරණ ප්‍රශ්නයක් වූයේ ඇයි, Lisp හි "code සහ data එකම list ව්‍යුහය" යන්නෙහි තේරුම, සහ C හි pointer එකක් byte ලිපිනයක් වීමේ වැදගත්කම. මෙම කොටස ඒවා අතින් ගණනය කරයි.

### 1. මූලික පද

- **උසස් මට්ටමේ භාෂාව (high-level language):** යන්ත්‍රයේ උපදෙස් සහ registers වෙනුවට ගණිතමය ප්‍රකාශන, විචල්‍ය (variables) සහ loops ලිවීමට ඉඩ දෙන භාෂාව.
- **Compiler (compiler):** එවැනි වැඩසටහනක් යන්ත්‍ර කේතයට පරිවර්තනය කරන වැඩසටහන.
- **ප්‍රකාශනය (expression):** `X = A * B + C` වැනි ගණනය.
- **Code generation (code generation):** compiler එක ප්‍රකාශනයකට උපදෙස් අනුපිළිවෙලක් තෝරන අදියර.
- **S-expression (symbolic expression):** Lisp හි මූලික දත්ත ආකාරය; පරමාණුවක් (atom) හෝ යුගලයක් (pair).
- **Pointer (pointer):** මතක ලිපිනයක් අගය ලෙස දරන විචල්‍යය.

### 2. එක් FORTRAN පේළියක් අතින් compile කිරීම

FORTRAN ලියන්නාට `X = A * B + C` පමණක් ලිවිය හැකිය. මෙම පිටුවේ lab එකක් නැති නිසා අපි Post 11 හි mini-CPU lab එක භාවිත කරමු. එහි ගුණ කිරීමේ (multiply) උපදෙසක් **නැත**. ඇත්තේ LDA, ADD, SUB, STA, LDI, JMP, JC, JZ, OUT, HLT පමණි. එබැවින් compiler එකකට `A * B` "A, B වාරයක් එකතු කිරීම" ලෙස loop එකක් බවට හැරවිය යුතුය.

ආදර්ශ (illustrative) අගයන්: A = 3, B = 4, C = 5. අපේක්ෂිත X = 3 × 4 + 5 = **17**.

මතක සැලැස්ම (compiler එක විචල්‍යවලට ලිපින තෝරයි):

| ලිපිනය | අර්ථය | ආරම්භක අගය |
|---|---|---|
| 12 | X (C = 5 න් ආරම්භ කර A එකතු කරමින්) | 5 |
| 13 | A | 3 |
| 14 | B (ඉතිරි වාර ගණන) | 4 |
| 15 | නියතය 1 | 1 |

වැඩසටහන (lab එකේ assembler එකට ලේබල නැති නිසා ලිපින අංකවලින් පමණි; `NOP n` යනු "අගය n මතකයේ තබන්න" යන්නයි):

```
LDA 12    ; 0: A = X
ADD 13    ; 1: A = X + A
STA 12    ; 2: X = A
LDA 14    ; 3: A = B
SUB 15    ; 4: A = B - 1   (0 වූ විට Zero = 1)
STA 14    ; 5: B = A       (STA flags වෙනස් නොකරයි)
JZ 8      ; 6: B = 0 නම් අවසානයට
JMP 0     ; 7: නැතිනම් නැවත
LDA 12    ; 8: A = X
OUT       ; 9: පෙන්වන්න
HLT       ; 10
NOP       ; 11: භාවිත නොවේ
NOP 5     ; 12: X = C = 5
NOP 3     ; 13: A = 3
NOP 4     ; 14: B = 4
NOP 1     ; 15: නියතය 1
```

Assemble කළ විට bytes: `1C 2D 4C 1E 3F 4E 88 60 1C E0 F0 00 05 03 04 01`. Output **17**, steps **34**. (අපි මෙය lab එකේ මූලාශ්‍ර කේතයම ධාවනය කර පරීක්ෂා කළෙමු.)

Steps ගණන් කරමු: loop එකේ එක් වටයක් උපදෙස් 8 කි (0–7). අවසාන වටයේ JZ පනින නිසා `JMP 0` ධාවනය නොවේ: 7. අවසානය 8, 9, 10: 3. එබැවින් B = 4 සඳහා 8 + 8 + 8 + 7 + 3 = **34**, සාමාන්‍යයෙන් **8B + 2**.

**කුඩා උගුලක්:** ධාවනයෙන් පසු **Reset** පමණක් ඔබා නැවත Run කළොත් කුමක් වේද? Lab එකේ Reset registers පමණක් හිස් කරයි. මතකය එලෙසම පවතී (lab මූලාශ්‍රයේ `reset()`). දැන් mem[12] = 17, mem[14] = 0. B = 0 − 1 = 255 (bits 8 වට වීම) වී loop එක **256** වාරයක් යයි. Output යළිත් 17 ය (17 + 3 × 256 = 785, 785 mod 256 = 17), නමුත් steps **2,050** කි. පිළිතුර "හරි" ලෙස පෙනුනද, වැඩසටහන කලින් අගයන් මත රඳා පවතී. Compiler එකක් විචල්‍ය ආරම්භ කිරීම (initialization) ගැන සැලකිලිමත් විය යුත්තේ මේ නිසාය. නැවත ආරම්භ කිරීමට **Assemble** නැවත ඔබන්න.

### 3. FORTRAN කණ්ඩායමේ සැබෑ ප්‍රශ්නය: කාර්යක්ෂමතාව

John Backus ගේ "The History of FORTRAN I, II, and III" (ACM SIGPLAN Notices, 1978) කියවූ විට, ඉහත ආකාරයේ පරිවර්තනය *කළ හැකිද* යන්න ප්‍රශ්නය නොවීය. ප්‍රශ්නය වූයේ එය *අතින් ලියූ කේතය තරම් වේගවත්ද* යන්නයි:

- Backus ගේ යෝජනාව Cuthbert Hurd අනුමත කළේ IBM 704 සඳහා "practical automatic programming system" එකක් ලෙස **1953 දෙසැම්බර්** හෝ 1954 ජනවාරියේ ය (පිටු 167–168).
- එම පිටුවේම: භාෂාව බහුලව භාවිත වනු ඇත්තේ එය "almost as efficient as hand coded" වැඩසටහන් නිපදවිය හැකි බව පෙන්විය හැකි නම් පමණක් බව කණ්ඩායම විශ්වාස කළේය (පිටුව 167).
- 704 භාවිත කරන්නන්ගේ හැම ස්ථානයකටම පද්ධතිය බෙදා හැරීමට තරම් දෝෂ රහිත බව ඔවුන්ට හැඟුණේ "Sometime in early April 1957" ය. Programmer's Reference Manual එකේ දිනය 1956 ඔක්තෝබර් 15 ය. එය පිටු 51 ක් පමණි (පිටුව 173).
- Array එකක subscripts **තුනකට** සීමා කිරීම ගැන: Backus ලියන්නේ "the fact that the 704 had only three index registers was not a factor" යනුවෙනි (පිටුව 171). හේතුව: ප්‍රශස්ත (optimal) කේතය සඳහා compiler එකට විශ්ලේෂණය කළ යුතු අවස්ථා ගණන subscripts ගණන සමඟ "increased exponentially" විය. එය "a prime factor" විය. එනම් සීමාව දෘඪාංගය පිටපත් කිරීමක් නොව compiler එකේ කාර්යක්ෂමතාව ආරක්ෂා කිරීමකි. Compiler එක "one pass" විය, එනම් මූලාශ්‍ර වැඩසටහන "saw … only once" (පිටුව 171).

ඉහත අපේ mini-CPU උදාහරණයෙන් මෙහි අර්ථය පෙනේ: එකම `A * B` සඳහා compiler එක තෝරන උපදෙස් අනුපිළිවෙල වේගය තීරණය කරයි. Mini-CPU හි B = 4 ට steps 34 ක් ගියේ ගුණ කිරීමේ උපදෙසක් නැති නිසාය. Compiler එකක් යන්ත්‍රය දන්නා දක්ෂ programmer කෙනෙකු තරම් හොඳ තේරීම් නොකරන්නේ නම්, එහි කේතය මන්දගාමී වන අතර භාෂාව භාවිත නොවේ. Backus ගේ කණ්ඩායම බිය වූයේ එයටයි.

### 4. Lisp: code සහ data එකම ව්‍යුහය

John McCarthy ගේ "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I" (CACM, 1960; කතුවරයාගේ වෙබ් පිටපත) මූලික කාර්යයන් (functions) පහක් අර්ථ දක්වයි (§c, පිටු 10–11):

| Function | අර්ථය | උදාහරණය (පත්‍රිකාවෙන්) |
|---|---|---|
| `atom[x]` | x පරමාණුවක් නම් T, නැතිනම් F | `atom[X] = T`, `atom[(X · A)] = F` |
| `eq[x; y]` | පරමාණු දෙක එකම සංකේතය නම් T | `eq[X; X] = T`, `eq[X; A] = F` |
| `car[x]` | යුගලයේ පළමු කොටස | `car[(X · A)] = X` |
| `cdr[x]` | යුගලයේ දෙවන කොටස | `cdr[(X · A)] = A` |
| `cons[x; y]` | නව යුගලයක් සෑදීම | `cons[X; A] = (X · A)` |

List එකක් යනු යුගල දාමයකි: පත්‍රිකාවට අනුව `(m1, ···, mn)` යනු `(m1 · (··· (mn · NIL) ···))` සඳහා කෙටි ලිවීමකි (පිටුව 10). එබැවින් `(A, B, C)` = `(A · (B · (C · NIL)))`.

**වැඩ කළ උදාහරණය 1:** `car[cdr[(A, B, C)]]`
1. `cdr[(A · (B · (C · NIL)))]` = `(B · (C · NIL))` = `(B, C)`
2. `car[(B, C)]` = **B**

**වැඩ කළ උදාහරණය 2 (පත්‍රිකාවේම, පිටුව 12):** `ff[x]` යනු S-expression එකේ පළමු පරමාණුවයි:

`ff[x] = [atom[x] → x; T → ff[car[x]]]`

`ff[((A · B) · C)]` → atom නොවේ → `ff[car[((A · B) · C)]]` = `ff[(A · B)]` → atom නොවේ → `ff[car[(A · B)]]` = `ff[A]` → atom → **A**.

වැදගත් කරුණ: `ff` හි අර්ථ දැක්වීම *කොන්දේසි සහ තමාවම ඇමතීම* (recursion) පමණි. Loop එකක්, ලිපිනයක්, register එකක් නැත. McCarthy එම පත්‍රිකාවේම පෙන්වන්නේ Lisp ප්‍රකාශනද S-expressions ලෙස නිරූපණය කර, ඒවා ධාවනය කරන `eval` function එකක් Lisp වලින්ම ලිවිය හැකි බවයි. "Code සහ data එකම ව්‍යුහය" යන්නෙහි තේරුම එයයි. පත්‍රිකාවේ උදාහරණය: `apply[(LAMBDA, (X, Y), (CONS, (CAR, X), Y)); ((A, B), (C, D))] = (A, C, D)` (එම පිටපතේ පිටුව 16). මෙහි function එකද `(LAMBDA, …)` නම් list එකකි.

### 5. C: pointer එකක් byte ලිපිනයක් වූ හැටි

Dennis Ritchie ගේ "The Development of the C Language" (Bell Labs වෙබ් පිටපත) C ට පෙර තිබූ B සහ BCPL ගැන මෙසේ කියයි: ඒවා ධාවනය වූ යන්ත්‍ර "word-addressed" ය. B හි තනි දත්ත වර්ගය වූ "cell" යන්ත්‍ර word එකට සමාන විය. PDP-11 byte-addressed ය. B හි නීති pointer එකක් "an index in an array of words" ලෙස අර්ථ දැක්වූ නිසා "Each pointer reference generated a run-time scale conversion" විය ("The Problems of B").

C හි විසඳුම: pointer එකක අගය byte ලිපිනයමයි. නමුත් ඉන් පසු "to compute iarray[i] or ipointer+i implied scaling the addend i by the size of the object referred to." එනම් පරිමාණ කිරීම (scaling) compile වන විට, වර්ගය (type) දැනගෙනම compiler එක කරයි.

**වැඩ කළ උදාහරණය (ආදර්ශ අංක):** `int` එකක් bytes 2 ක් යැයි ද, `iarray` ලිපිනය 1000 යැයි ද සිතමු.
- `iarray[0]` → 1000
- `iarray[3]` → 1000 + 3 × 2 = **1006**
- `char` array එකක් 1000 දී ආරම්භ නම් `carray[3]` → 1000 + 3 × 1 = **1003**

Programmer ලියන්නේ `[3]` පමණි. "× 2" හෝ "× 1" තෝරන්නේ compiler එකයි. ධාවන කාලයේ (run time) අමතර පරිවර්තනයක් නැත. Ritchie ට අනුව 1973 මුල් භාගය වන විට නවීන C හි මූලිකාංග සම්පූර්ණ විය. Unix kernel එක PDP-11 සඳහා C වලින් නැවත ලියූයේ එම වසරේ ගිම්හානයේ ය ("Portability" කොටස).

### 6. COBOL ගැන

COBOL ගැන මෙම කොටස අමතර කරුණු එකතු නොකරයි. මෙම වටයේදී අපි COBOL හි මුල් ලේඛනයක් විවෘත කළේ නැත. ප්‍රධාන පෙළේ COBOL කොටස එලෙසම පවතී.

### 7. පැන්සලෙන් අභ්‍යාසය

1. §2 වැඩසටහනේ A = 2, B = 6, C = 1 ලෙස වෙනස් කරන්න (ලිපින 12, 13, 14 හි `NOP` අගයන්). Output සහ steps කීයද?
2. B = 0 ලෙස (`NOP 0` ලිපිනය 14 හි) Assemble කළොත් loop එක කීවරක් ධාවනය වේද? Output කුමක්ද?
3. `cdr[cdr[(A, B, C)]]` සහ `car[cons[X; (Y, Z)]]` ගණනය කරන්න.
4. 4-byte `int` array එකක් 2000 දී ආරම්භ වේ. `ipointer = iarray + 5` හි byte ලිපිනය කුමක්ද?
5. FORTRAN කණ්ඩායමේ ප්‍රධාන අවදානම ලෙස Backus දකින්නේ කුමක්ද? එක් වාක්‍යයකින්.

(පිළිතුරු:
1. X = 2 × 6 + 1 = **13**. Steps = 8 × 6 + 2 = **50**. (Lab මූලාශ්‍රය මත පරීක්ෂා කළා: bytes `... 01 02 06 01`, Output 13, steps 50.)
2. 0 − 1 = 255, එබැවින් **256** වාරයක්. X = 5 + 3 × 256 = 773 → 773 mod 256 = **5**. Steps 8 × 256 + 2 = **2,050**.
3. `cdr[(B, C)]` = **(C)** = `(C · NIL)`. `cons[X; (Y, Z)]` = `(X, Y, Z)`, එහි car = **X**.
4. 2000 + 5 × 4 = **2020**.
5. Compiler එක අතින් ලියූ කේතය තරම් කාර්යක්ෂම කේතයක් නිපදවිය නොහැකි නම් කිසිවෙකු FORTRAN භාවිත නොකරනු ඇත (පිටුව 167).)

**මෙම කොටසේ මූලාශ්‍ර:**
- John Backus, "The History of FORTRAN I, II, and III", *ACM SIGPLAN Notices* 13(8), 1978, pp. 165–180. Software Preservation Group (Computer History Museum) පිටපත: https://www.softwarepreservation.org/projects/FORTRAN/paper/p165-backus.pdf (පිටු 167, 171, 173).
- John McCarthy, "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I", *CACM* 3(4), 1960. කතුවරයාගේ වෙබ් පිටපත: https://www-formal.stanford.edu/jmc/recursive.pdf (එම පිටපතේ පිටු 10–12, 16).
- Dennis M. Ritchie, "The Development of the C Language" (HOPL-II, 1993). Bell Labs වෙබ් පිටපත: https://www.bell-labs.com/usr/dmr/www/chist.html ("The Problems of B", "Portability" කොටස්).
- මෙම පොතේ mini-CPU lab එකේ මූලාශ්‍ර කේතය (`static/labs/mini-cpu/index.html`): opcode වගුව, ගුණ කිරීමේ උපදෙසක් නැත, Reset මතකය හිස් නොකරයි. §2 සහ අභ්‍යාස 1–2 හි වැඩසටහන් එම කේතයම ධාවනය කර පරීක්ෂා කළෙමු.
- §2 හි A, B, C සහ §5 හි ලිපින ආදර්ශ (illustrative) අංක වේ.

**පිටවීමේ දොර:** Dennis M. Ritchie, "The Development of the C Language" (HOPL-II / ACM) — Unix අසල C හි නිර්මාණය පිළිබඳ ප්‍රාථමික ගිණුම; Lisp හි ආරම්භක ප්‍රකාශය සඳහා, සංකේතාත්මක ප්‍රකාශනවල recursive functions පිළිබඳ John McCarthy ගේ මුල් CACM පත්‍රිකා බලන්න.


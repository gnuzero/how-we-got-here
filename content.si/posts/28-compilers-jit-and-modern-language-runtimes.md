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

## ගැඹුරින්: පෙළේ සිට bytecode දක්වා, සහ JIT එකක් වාසිදායක වන්නේ කවදාද

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** මෙම මාතෘකාව ගැන සිංහලෙන් ඇති ද්‍රව්‍ය:
> - අධ්‍යාපන ප්‍රකාශන දෙපාර්තමේන්තුවේ ශ්‍රේණිය 11 තොරතුරු හා සන්නිවේදන තාක්ෂණය පෙළපොත, §1.11.5 "භාෂා පරිවර්තක වැඩසටහන්" (මුද්‍රිත පිටු 52–53, PDF p.62–63). එය අර්ථ වින්‍යාසකය (interpreter) සහ සම්පාදකය (compiler) වෙන්කර දක්වයි: interpreter එක ප්‍රකාශයෙන් ප්‍රකාශය පරිවර්තනය කර ධාවනය කරයි, compiler එක මුළු වැඩසටහනම එක් වරක් පරිවර්තනය කරයි.
> - ජාතික අධ්‍යාපන ආයතනයේ 13 ශ්‍රේණිය ICT ගුරු මාර්ගෝපදේශය (PDF p.83) "ක්‍රමලේඛ පරිවර්තක" යටතේ interpreters, compilers, මිශ්‍ර ප්‍රවේශය (hybrid approach) සහ linkers ලැයිස්තුගත කරයි.
> - si.wikipedia හි "ඉන්ටප්‍රිට'" කෙටි ලිපිය (අක්ෂර ~0.8k).
> - YouTube හි compiler එදිරිව interpreter ගැන සිංහල වීඩියෝ ([6O3jzwPkmQ4](https://www.youtube.com/watch?v=6O3jzwPkmQ4), [wh23KXVDPkY](https://www.youtube.com/watch?v=wh23KXVDPkY), CodePRO LK). මේවා හඳුනාගත්තේ මාතෘකාවෙන් පමණි.
>
> ඒවායේ නැති දේ: compiler එකක් ඇතුළත පියවර (tokens, ගස, optimization), bytecode, JIT, සහ JIT එකක් වාසිදායක වන්නේ කවදාද යන්න. මෙම කොටස ඒවා අංකවලින් පෙන්වයි.

### 1. මූලික පද

- **ස්කෑන් කිරීම / lexing (scanning, lexical analysis):** අක්ෂර පේළිය "වචන" වලට, එනම් **tokens (tokens)** වලට කැඩීම.
- **Parse කිරීම (parsing):** tokens වලින් **වියුක්ත වාක්‍ය ගස (abstract syntax tree, AST)** සෑදීම.
- **අතරමැදි නිරූපණය (intermediate representation, IR):** මූලාශ්‍ර භාෂාවටවත් ඉලක්ක CPU එකටවත් තදින් බැඳී නැති අතරමැදි ආකාරය.
- **නියත නැමීම (constant folding):** සැමවිටම එකම අගය දෙන ප්‍රකාශනයක් compile කරන විටම ගණනය කර ප්‍රතිඵලය තැබීම.
- **Bytecode (bytecode):** සැබෑ CPU එකක් නොව කල්පිත යන්ත්‍රයක් සඳහා වන උපදෙස්. එයට එම නම ලැබුණේ බොහෝවිට එක් උපදෙසක් byte එකක් වන නිසාය (Nystrom, §2.1.6).
- **Dispatch (dispatch):** interpreter එක ඊළඟ bytecode උපදෙස කියවා ඊට අදාළ කේතයට පැනීම.
- **JIT (just-in-time compilation):** වැඩසටහන ධාවනය වන අතරතුර, පරිශීලකයාගේ යන්ත්‍රයේදීම, native කේතයට compile කිරීම.

### 2. එක් පේළියක් compiler එක හරහා

Robert Nystrom ගේ *Crafting Interpreters* (පරිච්ඡේදය 2, "A Map of the Territory") පියවර මෙසේ දක්වයි: scanning → parsing → static analysis → IR → optimization → code generation. `y = 2 * 3 + x` පේළිය ගනිමු:

**පියවර 1, tokens:** `y` `=` `2` `*` `3` `+` `x` → tokens **7**. හිස්තැන් tokens නොවේ. Scanner එක ඒවා ඉවත් කරයි (§2.1.1).

**පියවර 2, ගස:** `*` ට `+` ට වඩා ඉහළ ප්‍රමුඛතාවක් ඇත. එබැවින් ගස: `y = ((2 * 3) + x)`.

**පියවර 3, stack bytecode (optimization නැතිව):**

| # | උපදෙස | Stack එක පසුව (x = 4) |
|---|---|---|
| 1 | PUSH 2 | 2 |
| 2 | PUSH 3 | 2, 3 |
| 3 | MUL | 6 |
| 4 | LOAD x | 6, 4 |
| 5 | ADD | 10 |
| 6 | STORE y | (හිස්), y = 10 |

**පියවර 4, constant folding:** `2 * 3` සැමවිටම 6 කි. Compiler එකට එය කලින්ම ගණනය කළ හැක (Nystrom §2.1.5 හි උදාහරණය `pennyArea` ය): `PUSH 6, LOAD x, ADD, STORE y`, එනම් උපදෙස් **4** කි.

- මෙම පේළිය ලූපයක් තුළ වාර 1,000,000 ක් ධාවනය වේ නම්, interpreter එකට dispatches 6,000,000 වෙනුවට **4,000,000** ක් පමණි. ඉතිරි වන්නේ **2,000,000** කි (ආදර්ශ ගණනය).

**සැබෑ compiler එකක් මෙය කරයිද?** අපි box එකේ CPython 3.13.5 හි `dis` මොඩියුලයෙන් `y = 2*3 + x` බැලුවෙමු:

```
LOAD_CONST   1 (6)
LOAD_FAST    0 (x)
BINARY_OP    0 (+)
STORE_FAST   1 (y)
```

CPython දැනටමත් `2*3` → `6` ලෙස නමා ඇත. එහි ඇත්තේ අපේ නැමූ අනුවාදයේ ආකාරයේම උපදෙස් හතරකි. (Python ලේඛනය අනතුරු අඟවන පරිදි bytecode යනු CPython හි ක්‍රියාත්මක කිරීමේ විස්තරයකි. Python අනුවාදයෙන් අනුවාදයට එය වෙනස් විය හැක.)

### 3. Interpreter එකක් ඇයි මන්දගාමීද, සහ JIT එකක් එය මඟ හරින හැටි

V8 කණ්ඩායමේ Sparkplug ලිපිය (2021) මෙසේ කියයි: interpreters වලට ඉවත් කළ නොහැකි වියදම් ඇත, උදාහරණ ලෙස bytecode decode කිරීම සහ ඊළඟ bytecode එකට dispatch කිරීම. Dispatch වේගවත් වීමට CPU එකේ branch prediction (Post 14) සාර්ථක විය යුතුය. Sparkplug මෙම වියදම් "පෙර-compile" කරයි. V8 හි අදියර (tiers):

| අදියර | කුමක්ද | සටහන (V8 බ්ලොග්) |
|---|---|---|
| Ignition | bytecode interpreter | register-based interpreter |
| Sparkplug | optimize නොකරන compiler | bytecode වලින් compile කරයි (JS මූලාශ්‍රයෙන් නොවේ), IR නැත, bytecode මත එක් රේඛීය pass එකක්. V8 v9.1 / Chrome 91 සමඟ නිකුත් කළේය |
| TurboFan | optimize කරන compiler | ප්‍රශස්ත කේතය. එහෙත් object shape feedback ස්ථාවර වන තුරු පටන් ගත නොහැක |

ලිපිය වාර්තා කරන ප්‍රතිඵල: Speedometer ලකුණු **5–10%** කින් සහ බ්‍රව්සින් benchmarks වල V8 main-thread කාලය **5–15%** පමණ කින් වැඩිදියුණු විය.

**JIT එක වාසිදායක වන්නේ කවදාද (ආදර්ශ අංක):** function එකක් interpreter එකේ ඇමතුමකට 100 ns ගනී. Compile කළ පසු 10 ns. Compile කිරීමට 1 ms (= 1,000,000 ns) වැය වේ. ඇමතුම් n කට පසු:

- ඉතිරිය = n × (100 − 10) = 90n ns.
- 90n > 1,000,000 → **n > 11,111** (දළ වශයෙන්).
- ඇමතුම් 5,000 ක් පමණක් නම්: ඉතිරිය 5,000 × 90 = 450,000 ns = 0.45 ms. එය compile වියදම (1 ms) ට අඩුය. JIT කිරීමෙන් **0.55 ms** ක අලාභයක්.

JIT එකක් "hot" කේතය එනතුරු බලා සිටින්නේ එබැවිනි. Oracle හි Java SE 8 `java` විධාන ලේඛනය කියන්නේ: `-XX:CompileThreshold` හි පෙරනිමිය server JVM හි interpreted ඇමතුම් **10,000** ක් (කාර්යක්ෂම compilation සඳහා තොරතුරු රැස් කිරීමට), client JVM හි **1,500** කි. එහෙත් tiered compilation සක්‍රිය විට (එය පෙරනිමියෙන් සක්‍රියයි) මෙම විකල්පය නොසලකා හරිනු ලැබේ. අපේ 11,111 ආදර්ශ අංකයක් පමණි. එය HotSpot අංකය නොවේ.

### 4. දැන්ම උත්සාහ කරන්න: කුඩා bytecode interpreter එකක් (මෙම පිටුවේ vm-terminal lab එක)

සටහන: ඉහත "එය ජීවමානව බලන්න" කොටසේ `gcc` යෝජනා කළත්, මෙම lab එකේ VM image එකේ (BusyBox v1.28.4) **gcc හෝ වෙනත් C compiler එකක් නැත**. අපි `command -v gcc cc tcc` පරීක්ෂා කළෙමු. Python ද නැත. එහෙත් `awk` ඇත. එබැවින් §2 හි stack bytecode එක ධාවනය කරන කුඩා interpreter එකක් awk වලින් ලියමු. පහත පේළි VM shell එකට ටයිප් කරන්න (හෝ පිටපත් කරන්න):

```sh
awk 'BEGIN{p="PUSH 2 PUSH 3 MUL LOAD x ADD STORE y"; x=4; n=split(p,c," "); sp=0; d=0; i=1
while(i<=n){op=c[i]; d++
 if(op=="PUSH"){s[++sp]=c[i+1]; i+=2}
 else if(op=="LOAD"){s[++sp]=x; i+=2}
 else if(op=="MUL"){s[sp-1]=s[sp-1]*s[sp]; sp--; i++}
 else if(op=="ADD"){s[sp-1]=s[sp-1]+s[sp]; sp--; i++}
 else if(op=="STORE"){y=s[sp--]; i+=2}}
print "y =", y, " dispatches =", d}'
```

ප්‍රතිදානය: `y = 10  dispatches = 6`. දැන් `PUSH 2 PUSH 3 MUL` වෙනුවට `PUSH 6` දමා නැවත ධාවනය කරන්න: `y = 10  dispatches = 4`. `while` ලූපය සහ `if … else if` දාමය interpreter එකේ "dispatch" එකයි. සෑම උපදෙසක් සඳහාම එය නැවත නැවත ධාවනය වේ. JIT එකක් ඉවත් කරන්නේ මෙම කොටසයි. (අපි මෙම විධාන දෙකම lab image එකේ BusyBox awk මත පරීක්ෂා කළෙමු.)

### 5. පැන්සලෙන් අභ්‍යාසය

1. `z = (a + 4) * 2` හි tokens කීයද?
2. එම පේළියට optimize නොකළ stack bytecode ලියන්න. Constant folding මෙහි උදව් වේද?
3. `w = 60 * 60 * 24` නමන්න. නැමීමට පෙර සහ පසු bytecode උපදෙස් ගණන කීයද?
4. Interpreter එකේ ඇමතුමකට 50 ns, compile කළ පසු 5 ns, compile වියදම 0.9 ms (ආදර්ශ). JIT එක වාසිදායක වීමට අවම ඇමතුම් ගණන කීයද?
5. Sparkplug මෙතරම් වේගයෙන් compile කරන හේතු දෙකක් දෙන්න.
6. Java SE 8 ලේඛනයට අනුව tiered compilation සක්‍රිය විට `-XX:CompileThreshold=5000` ට කුමක් වේද?

(පිළිතුරු:
1. `z` `=` `(` `a` `+` `4` `)` `*` `2` → **9**.
2. `LOAD a, PUSH 4, ADD, PUSH 2, MUL, STORE z` (උපදෙස් 6). `a` නොදන්නා නිසා නැමිය හැකි නියත උප-ප්‍රකාශනයක් **නැත**.
3. 60 × 60 × 24 = **86,400**. පෙර: `PUSH 60, PUSH 60, MUL, PUSH 24, MUL, STORE w` = **6**. පසු: `PUSH 86400, STORE w` = **2**.
4. 0.9 ms = 900,000 ns. 900,000 ÷ (50 − 5) = **20,000** ඇමතුම්.
5. එය JS මූලාශ්‍රයෙන් නොව දැනටමත් සකස් කළ bytecode වලින් compile කරයි. IR එකක් නොසාදා bytecode මත එක් රේඛීය pass එකකින් කෙලින්ම machine code නිකුත් කරයි. (ලිපිය තවත් හේතුවක් ද දෙයි: බොහෝ වැඩ "builtins" වෙත යොමු කරයි.)
6. එය **නොසලකා හරිනු ලැබේ**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Robert Nystrom, *Crafting Interpreters*, පරිච්ඡේදය 2 "A Map of the Territory" (කතුවරයාගේ නොමිලේ වෙබ් සංස්කරණය): https://craftinginterpreters.com/a-map-of-the-territory.html. §2.1.1 Scanning, §2.1.2 Parsing, §2.1.4 IR, §2.1.5 Optimization (constant folding), §2.1.6 Code generation (bytecode), §2.2.4 Just-in-time compilation, §2.3 Compilers and Interpreters.
- Leszek Swirski, "Sparkplug — a non-optimizing JavaScript compiler", V8 බ්ලොග්, 2021 මැයි 27: https://v8.dev/blog/sparkplug ("A fast compiler", "Defer to builtins", "Performance" කොටස්).
- Oracle, *Java Platform, Standard Edition Tools Reference*, `java` (Java SE 8), `-XX:CompileThreshold` සහ `-XX:-TieredCompilation` ඇතුළත් කිරීම්: https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html
- Python 3.13 ලේඛනය, "dis — Disassembler for Python bytecode" (CPython implementation detail සටහන): https://docs.python.org/3.13/library/dis.html
- අධ්‍යාපන ප්‍රකාශන දෙපාර්තමේන්තුව, *තොරතුරු හා සන්නිවේදන තාක්ෂණය, ශ්‍රේණිය 11*, §1.11.5 (මුද්‍රිත පිටු 52–53). ජාතික අධ්‍යාපන ආයතනය, *13 ශ්‍රේණිය ICT ගුරු මාර්ගෝපදේශය* (PDF p.83).

Dispatches 6,000,000 / 4,000,000 සහ JIT break-even ගණනය (100 ns, 10 ns, 1 ms) ආදර්ශ (illustrative) අංක වේ. CPython `dis` ප්‍රතිදානය සහ awk ප්‍රතිදානය අප ධාවනය කර ලබාගත් ඒවාය.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

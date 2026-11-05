---
title: "උපදෙස් කට්ටල"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 15
aliases:
  - /posts/11-instruction-sets/
tags: []
summary: "ISA යනු මෘදුකාංග–දෘඪාංග ගිවිසුමයි; CISC සහ RISC එම ගිවිසුම පෙනෙන්නට ඇති ආකාරයට පිළිතුරු දෙකකි"
image_prompt: "Infographic comparing CISC vs RISC instruction encoding, clean technical diagram style"
video_prompt: "15-second animation: an instruction fetched and decoded into opcode/operand fields, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: instruction encoding formats + ISA layers stack"
---

Instruction Set Architecture (ISA) යනු මෘදුකාංග සහ දෘඪාංග අතර ගිවිසුමයි: කුමන ක්‍රියාකාරකම් පවතීද, ඒවා bits වල කේතනය වන්නේ කෙසේද, සහ එම bits අර්ථ දක්වන්නේ කුමක්ද. එය *පිරිවිතරයකි*, චිපයක් නොවේ. x86, ARM, සහ RISC-V යනු ISAs වේ — විවිධ චිප බොහොමයක් එකම එක ක්‍රියාත්මක කර තවමත් එකම binaries ධාවනය කළ හැක.

එම වෙන්කිරීම — ගෘහ නිර්මාණය (මෘදුකාංග දකින දේ) එදිරිව microarchitecture (සිලිකන් ගොඩනැගෙන ආකාරය) — මෙම අදියරේ කොඳු නාරටියයි. Pipelines, caches, සහ out-of-order cores සියල්ල ජීවත් වන්නේ ISA *යට* ය. මෘදුකාංගයට දැන ගැනීමට අවශ්‍ය නැත.

## දර්ශන දෙකක්: CISC සහ RISC

CISC (Complex Instruction Set Computing) — x86 පිටුපස ඇති පෙළපත — එක් එක් උපදෙස් තුළ බොහෝ දේ ඇසුරුම් කරයි: විචල්‍ය දිග, පොහොසත් addressing modes, මතකය සෘජුව ස්පර්ශ කළ හැකි අංක ගණිතය. වැඩසටහනකට අඩු උපදෙස්; දුෂ්කර decoder එකක්.

RISC (Reduced Instruction Set Computing) අනෙක් දිශාවට යයි: ස්ථිර-දිග උපදෙස්, දැඩි load/store ආකෘතියක් (ALU ක්‍රියාකාරකම් registers මත පමණි), ඒකාකාර ක්ෂේත්‍ර. වැඩසටහනකට වැඩි උපදෙස්; එක් එක් එක fetch සහ decode කිරීමට පුරෝකථනය කළ හැකි තරම් සරලය, අදියරෙන් අදියර. එම ඒකාකාරත්වය නිසාම pipelining (Post 13) පළමුව RISC මත කළමනාකරණය කළ හැකි විය — ස්ථිර-පළල උපදෙස් එකක් decode කිරීම ආරම්භ කරන තුරු දිග නොදන්නා CISC උපදෙස් එකකට වඩා බොහෝ පහසුවෙන් අදියරගත කළ හැක.

නිශ්චිතව: සාමාන්‍ය RISC උපදෙස් එකක් bits 32 ක් වන අතර ක්ෂේත්‍ර ස්ථිර තැන්වල ඇත. x86 උපදෙස් එකක් byte 1 සිට 15 දක්වා දිගු විය හැක, විකල්ප prefixes සමඟ — ඝන සහ බලවත්, ඉහළ throughput එකකින් decode කිරීමට මිල අධිකය.

**දැන් මෙය උත්සාහ කරන්න.** පහත mini-CPU යනු කුඩා ISA එකකි: 4-bit opcode, 4-bit operand, මතක වචන දහසයක්. මඟ පෙන්වන උපදෙස් 8 ක වැඩසටහන පියවරෙන් පියවර කර fetch / decode / execute A සහ මතකය චලනය කරන ආකාරය බලන්න — මෙම පෝස්ට් එක දැන්ම නම් කළ එම ගිවිසුමම, එක් තිරයක රඳවා ගත හැකි තරම් කුඩාය.

{{< lab type="mini-cpu" >}}

## x86 කෙසේ හෝ පැවතියේ ඇයි

RISC පයිප්ලයින් කිරීමට සරල නම්, x86 තවමත් desktop සහ server ආධිපත්‍යය දරන්නේ ඇයි? අනුකූලතාව සහ දශක ගණනක ඉංජිනේරු ආයෝජනය — අමු අලංකාරත්වය නොවේ. නවීන x86 චිප CISC උපදෙස් *පරිවර්තනය* කර සරල, RISC-විලාස අභ්‍යන්තර micro-ops වෙත, ඉන්පසු ඒවා CISC ඉදිරි කෙළවරක් පිටුපස RISC-විලාස core එකක ධාවනය කරයි (Post 19). වාදය ලේබල් යෝජනා කරන තරම් පිරිසිදු ද්විමයක් නොවේ.

ඊළඟට: සැබෑ datapath එකක් ගොඩනඟන්න — ISA එකක් ක්‍රියාත්මක වන භෞතික ව්‍යුහය.

## ගැඹුරින්: උපදෙසක් bits බවට — operand ආකෘති, කේතන අයවැය සහ x86 විචල්‍ය දිග

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** උපදෙස් ක්‍රියාත්මක වන *චක්‍රය* සිංහලෙන් හොඳින් ආවරණය වේ. නමුත් උපදෙසක *කේතනය* ආවරණය වී නැත.
> - NIE 12 ශ්‍රේණිය ICT ගුරු මාර්ගෝපදේශය ([PDF](https://nie.lk/pdffiles/tg/sGr12TG%20ICT.pdf)) PDF p.86 (මුද්‍රිත p.73) ආහරණ-ක්‍රියාකරවුම් චක්‍රය (fetch-execute cycle) පැහැදිලි කරයි. අධ්‍යාපන ප්‍රකාශන දෙපාර්තමේන්තුවේ 11 ශ්‍රේණිය ICT පෙළපොත ([PDF](http://www.edupub.gov.lk/Administrator/Sinhala/11/ict%20g11%20S/ict%2011%20S.pdf)) PDF p.55 (මුද්‍රිත p.45) යන්ත්‍ර භාෂාව, එසෙම්බ්ලි භාෂාව සහ එසෙම්බ්ලරය හඳුන්වා දෙයි.
> - si.wikipedia හි "[CPU හි ක්‍රියාකාරීත්වය](https://si.wikipedia.org/wiki/CPU_හි_ක්‍රියාකාරීත්වය)" (අක්ෂර ~4.5k) කැඳවීම, විකේතනය, ක්‍රියාත්මක කිරීම සහ නැවත ලිවීම විස්තර කරයි. එය opcode සහ operands අර්ථ දක්වයි. MIPS32 විකේතන රූපයක්ද ඇත.
> - **වීඩියෝ:** Dharshana Karunarathna, "IT 1206 Section 5.0 CPU Organization and Instruction Set Architecture (ISA)" ([YT DmZ3YBD1H6Y](https://www.youtube.com/watch?v=DmZ3YBD1H6Y), 38:30, විශ්වවිද්‍යාල දේශනයක්); AnonExploit, "Assembly Tutorial in Sinhala" ([YT U8WQO_kxWl4](https://www.youtube.com/watch?v=U8WQO_kxWl4), 18:55). අප වීඩියෝ හඳුනා ගත්තේ මාතෘකාවෙන් පමණි.
>
> ඒවා "opcode එකක් සහ operands ඇත" යන්න දක්වා යයි. කිසිවක් bits ගණන් කරන්නේ නැත: operand කීයක් තිබිය යුතුද, ක්ෂේත්‍රවලට bits කීයක් යනවාද, සහ x86 byte එකින් එක විකේතනය කරන්නේ කෙසේද. මෙම කොටස ඒවා අතින් කරයි. RISC-V (RV32I) ක්ෂේත්‍ර අතින් කේතනය කිරීම Post 20 හි ද, CPU කාල සමීකරණය සහ Patterson–Ditzel විවාදය Post 19 හි ද ඇත.

### 1. මූලික පද

- **මෙහෙයුම් කේතය (opcode):** කුමන මෙහෙයුමද යන්න කියන bits කොටස.
- **ඔපරන්ඩය (operand):** මෙහෙයුම ක්‍රියා කරන දත්තය හෝ එය ඇති තැන (register, මතක ලිපිනය).
- **ක්ෂණික අගය (immediate):** උපදෙස තුළම කේතනය කළ නියත අගයක්.
- **සමුච්චකය (accumulator):** අංක ගණිත ප්‍රතිඵල රඳවන, උපදෙසේ නම් නොකළ (implicit) register එකක්.
- **Operand ආකෘතිය (operand model):** ALU උපදෙසක පැහැදිලිව නම් කරන operand ගණන.
- **පූරණ-ගබඩා ගෘහ නිර්මාණය (load-store architecture):** ALU උපදෙස් registers මත පමණක් ක්‍රියා කරන, මතකයට යන්නේ load සහ store පමණක් වන ISA එකක්.
- **කේත ඝනත්වය (code density):** එකම වැඩය සඳහා වැඩසටහන ගන්නා bytes ගණන. අඩු නම් ඝනත්වය වැඩිය.
- **කුඩා-අග පළමුව (little-endian):** බහු-byte සංඛ්‍යාවක අඩුම වැදගත් byte එක මුලින්ම ගබඩා කිරීම.

### 2. Mini-CPU එක අතින් විකේතනය කිරීම

ඉහත lab එකේ මූලාශ්‍ර කේතය අනුව, එක් උපදෙසක් **bits 8** කි: ඉහළ bits 4 opcode එකයි, පහළ bits 4 operand එකයි. Opcode වගුව:

| Opcode | උපදෙස | අර්ථය |
|---|---|---|
| 0 | NOP | කිසිවක් නැත |
| 1 | LDA a | A ← mem[a] |
| 2 | ADD a | A ← A + mem[a] |
| 3 | SUB a | A ← A − mem[a] |
| 4 | STA a | mem[a] ← A |
| 5 | LDI n | A ← n (ක්ෂණික) |
| 6 | JMP a | PC ← a |
| 7 | JC a | carry නම් PC ← a |
| 8 | JZ a | zero නම් PC ← a |
| E (14) | OUT | ප්‍රතිදානය ← A |
| F (15) | HLT | නවතින්න |

Lab එකේ පෙරනිමි වැඩසටහන, bytes ලෙස:

| ලිපිනය | උපදෙස | ද්විමය | Hex |
|---|---|---|---|
| 0 | LDI 5 | 0101 0101 | 55 |
| 1 | STA 14 | 0100 1110 | 4E |
| 2 | LDI 8 | 0101 1000 | 58 |
| 3 | ADD 14 | 0010 1110 | 2E |
| 4 | STA 15 | 0100 1111 | 4F |
| 5 | LDA 15 | 0001 1111 | 1F |
| 6 | OUT | 1110 0000 | E0 |
| 7 | HLT | 1111 0000 | F0 |

ප්‍රතිදානය 5 + 8 = **13**.

**කේතනයෙන් එන සීමා:**
- Opcode bits 4 → උපරිම උපදෙස් 2⁴ = **16**. මෙහි භාවිතා වන්නේ 11 කි.
- Operand bits 4 → ලිපින 16 ක් පමණි. මතකය වචන **16** ක් වන්නේ එබැවිනි.
- LDI හට රැගෙන යා හැක්කේ 0–15 අගයක් පමණි. A register එක bits 8 (0–255) වුවද, 200 වැනි අගයක් එක් LDI එකකින් පූරණය කළ නොහැක.

කේතනය යනු අයවැයකි. එක් ක්ෂේත්‍රයකට bit එකක් දුන් විට තවත් ක්ෂේත්‍රයකින් bit එකක් අහිමි වේ.

### 3. Operand ආකෘති හතර

Pennsylvania විශ්වවිද්‍යාලයේ CIS 501 පාඨමාලාව (Martin සහ Roth, slide 33) ALU උපදෙසක පැහැදිලි operand ගණන අනුව ISAs වර්ග කරයි:

| පැහැදිලි operands | ආකෘතිය | `add` හි අර්ථය | උදාහරණය (slide) |
|---|---|---|---|
| 0 | දෘඪාංග stack | ඉහළ අගයන් දෙක එකතු කර stack එකට | — |
| 1 | එක් සමුච්චකයක් | ACC = ACC + [R1] | (මෙම mini-CPU) |
| 2 | සමුච්චක කිහිපයක් | [R1] = [R1] + [R2] | x86 |
| 3 | සාමාන්‍ය-අරමුණු | [R1] = [R2] + [R3] | MIPS |

**ආදර්ශ උදාහරණය: C = A + B** (අප ලියූ ව්‍යාජ-එසෙම්බ්ලි):

| ආකෘතිය | උපදෙස් | ගණන |
|---|---|---|
| Stack | push A; push B; add; pop C | 4 |
| සමුච්චකය | load A; add B; store C | 3 |
| Register-මතකය | load R1, A; add R1, B; store R1, C | 3 |
| Load-store | load R1, A; load R2, B; add R3, R1, R2; store R3, C | 4 |

Mini-CPU එකේ (A = mem[12], B = mem[13], C = mem[14] යැයි සිතමු): `LDA 12; ADD 13; STA 14` = bytes **1C 2D 4E**. බයිට් තුනකි.

Slide 35 මිනුම් තුනක් දෙයි: ස්ථිතික කේත ප්‍රමාණය (implicit operands වාසිදායකයි, stack), දත්ත මතක ගමනාගමනය සහ CPI (කෙටි, ස්ථාවර ප්‍රමාද, load-store වාසිදායකයි). එය කියන්නේ අද CPI සහ මතක ගමනාගමනය වඩා වැදගත් බවත්, නව ISAs බොහොමයක් load-store හෝ මිශ්‍ර බවත්ය.

### 4. ස්ථිර දිග අයවැය

Registers R ක් නම් register ක්ෂේත්‍රයකට bits log₂R අවශ්‍යය: 8 → 3, 16 → 4, 32 → 5.

**ආදර්ශ ගණනය:** Bits 32 ක උපදෙසක, registers 32 ක් සහ register ක්ෂේත්‍ර තුනක් (ඉලක්කය සහ ප්‍රභව දෙක) නම්, 3 × 5 = **15** bits registers වලට යයි. Opcode සහ අනෙකුත් දේ සඳහා ඉතිරි වන්නේ 32 − 15 = **17** කි. Register ක්ෂේත්‍ර දෙකක් සහ ක්ෂණික අගයක් නම්, ක්ෂණික අගයේ පළල සහ opcode පළල එකිනෙකට එරෙහිව තරඟ කරයි. RV32I එම අයවැය බෙදන හැටි Post 20 හි ඇත.

CIS 501 (slide 22) සාරාංශය: ස්ථිර දිග (සාමාන්‍යයෙන් bits 32) ක්‍රියාත්මක කිරීම සරල කරයි (ඊළඟ PC බොහෝ විට PC + 4). නමුත් register එකකට 1 ක් එකතු කිරීමට පවා bits 32 ක් වැය වේ. විචල්‍ය දිග කේත ඝනත්වය දෙයි ("x86 can do increment in one 8-bit instruction"). නමුත් fetch කිරීම දුෂ්කරය: ඊළඟ උපදෙස ආරම්භ වන්නේ කොතැනින්ද? අතරමැදි විසඳුම: දිග දෙකක් (MIPS16, ARM Thumb).

### 5. x86 byte එකින් එක

Intel ගේ Software Developer's Manual (SDM) වෙළුම 2, §2.1 (Figure 2-1) අනුව x86 උපදෙසක කොටස් මෙසේය. සියල්ල අත්‍යවශ්‍ය නොවේ:

| කොටස | Bytes |
|---|---|
| Prefixes (විකල්ප) | එකකට 1 බැගින් |
| Opcode | 1, 2 හෝ 3 |
| ModR/M (අවශ්‍ය නම්) | 1 |
| SIB (අවශ්‍ය නම්) | 1 |
| Displacement | 0, 1, 2 හෝ 4 |
| Immediate | 0, 1, 2 හෝ 4 |

§2.3.11 අනුව උපදෙසක උපරිම දිග **bytes 15** කි. (CIS 501 slide 22 "1 to 16 bytes" ලෙස කියයි. නිල සීමාව Intel SDM හි 15 යි.)

**ModR/M byte එක** (§2.1.3): `mod` (bits 2) | `reg` (bits 3) | `r/m` (bits 3). mod සහ r/m එක්ව අගයන් 32 ක් දෙයි: registers 8 ක් සහ ලිපින ක්‍රම 24 ක්. mod = 11 යනු "r/m ද register එකකි" යන්නයි. Register අංක (Table 2-2): EAX = 000, ECX = 001, EDX = 010, EBX = 011, ESP = 100, EBP = 101, ESI = 110, EDI = 111.

**විකේතන උදාහරණ** (32-bit මාදිලිය. GNU `as` 2.44 සහ `objdump` මඟින් තහවුරු කළා):

1. **`01 D8`** = `add eax, ebx` (bytes 2).
   - Opcode 01 = "ADD r/m32, r32" (SDM, ADD පිටුව).
   - D8 = **11 011 000**: mod 11 (register), reg 011 = EBX, r/m 000 = EAX. එබැවින් EAX ← EAX + EBX.
2. **`03 43 08`** = `add eax, [ebx+8]` (bytes 3).
   - Opcode 03 = "ADD r32, r/m32".
   - 43 = **01 000 011**: mod 01 (8-bit displacement එකක් පසුව එයි), reg 000 = EAX, r/m 011 = [EBX]. Displacement = 08.
3. **`05 78 56 34 12`** = `add eax, 0x12345678` (bytes 5).
   - Opcode 05 = "ADD EAX, imm32". ModR/M නැත. ක්ෂණික අගය little-endian නිසා 78 56 34 12 ලෙස ආපසු පෙළට ඇත.
4. **`83 84 B3 00 01 00 00 05`** = `add dword ptr [ebx+esi*4+0x100], 5` (bytes 8).
   - 83 = "ADD r/m32, imm8" (reg ක්ෂේත්‍රය /0 = ADD).
   - 84 = **10 000 100**: mod 10 (32-bit displacement), reg 000 (/0), r/m 100 → SIB byte එකක් එයි.
   - SIB B3 = **10 110 011**: scale 10 (×4), index 110 = ESI, base 011 = EBX.
   - Displacement 00 01 00 00 = 0x100. ක්ෂණික අගය 05.
5. **`40`** = `inc eax`, **byte 1** (32-bit මාදිලියේ). නමුත් §2.2.1.2 අනුව 64-bit මාදිලියේ 40H–4FH යනු REX prefixes වේ. එහිදී `inc eax` = `FF C0` (bytes 2). 64-bit `mov rax, 0x1122334455667788` = `48 B8` + bytes 8 = **bytes 10**.

Decoder එකට ඊළඟ උපදෙස ආරම්භ වන තැන දැන ගැනීමට පෙර prefixes, opcode, ModR/M සහ SIB කියවිය යුතුය. RISC-V වැනි ස්ථිර-දිග ISA එකක එය සැමවිටම bytes 4 කට පසුවය.

### 6. කේත ප්‍රමාණය සසඳමු

GNU `as` 2.44 මඟින් (x86 32-bit සහ RV32I) එකලස් කළ bytes:

| වැඩය | x86 (32-bit මාදිලිය) | RV32I |
|---|---|---|
| register දෙකක් එකතු කිරීම | `01 D8`: **2** | `add a0,a0,a1`: **4** |
| register එකට 1 එකතු කිරීම | `40`: **1** | `addi a0,a0,1`: **4** (C දිගුවෙන් `c.addi`: 2) |
| bits 32 නියතයක් එකතු/පූරණය | `05` + imm32: **5** | `lui` + `addi`: **8** |
| C = A + B, base register එකක් හරහා | `mov`/`add`/`mov`: 2 + 3 + 3 = **8** | `lw`/`lw`/`add`/`sw`: **16** |
| C = A + B, නිරපේක්ෂ ලිපින | 5 + 6 + 5 = **16** | (ලිපිනය register එකකට ගත යුතුය) |

x86 කේතය ඝනය. RISC-V කේතය විකේතනයට සරලය. ඉහත පිටුව කියන "ඝන සහ බලවත්, decode කිරීමට මිල අධික" යන්නෙහි අංක මේවාය.

**ටර්මිනලයෙන් උත්සාහ කරන්න.** Post 22 හි vm-terminal lab එකේ (BusyBox shell) mini-CPU bytes opcode සහ operand ලෙස බෙදන්න:

```sh
for b in 0x55 0x4E 0x58 0x2E 0x4F 0x1F 0xE0 0xF0; do
  echo "$b op=$((b >> 4)) arg=$((b & 15))"
done
```

අපේක්ෂිත ප්‍රතිදානය `0x55 op=5 arg=5` සිට `0xF0 op=15 arg=0` දක්වා (lab image හි BusyBox v1.28.4 මත පරීක්ෂා කළා). `printf '\001\330' | od -An -tx1` මඟින් x86 `add eax, ebx` හි bytes දෙක `01 d8` ලෙස පෙනේ.

### 7. පැන්සලෙන් අභ්‍යාසය

1. Mini-CPU bytes 0x13, 0x6F, 0x8A විකේතනය කරන්න.
2. Mini-CPU සඳහා කේතනය කරන්න: LDI 9, STA 7, SUB 2.
3. Mini-CPU opcode bits 3 සහ operand bits 5 ලෙස වෙනස් කළොත් උපදෙස් කීයක් සහ ලිපින කීයක් තිබිය හැකිද? වත්මන් උපදෙස් 11 ම ගැළපේද?
4. Bits 32 උපදෙසක registers 64 ක් සහ register ක්ෂේත්‍ර තුනක් නම් registers වලට bits කීයද? ඉතිරිය කීයද?
5. x86 `01 C3` විකේතනය කරන්න.
6. x86 `05 10 00 00 00` විකේතනය කරන්න. දිග කීයද?

(පිළිතුරු:
1. 0x13 = 0001 0011 = **LDA 3**. 0x6F = 0110 1111 = **JMP 15**. 0x8A = 1000 1010 = **JZ 10**.
2. LDI 9 = **0x59**. STA 7 = **0x47**. SUB 2 = **0x32**.
3. උපදෙස් 2³ = **8**, ලිපින 2⁵ = **32**. 11 > 8 නිසා **නොගැළපේ**.
4. log₂64 = 6. 3 × 6 = **18**. ඉතිරිය 32 − 18 = **14**.
5. 01 = ADD r/m32, r32. C3 = 11 000 011: mod 11, reg 000 = EAX, r/m 011 = EBX. එබැවින් **`add ebx, eax`** (EBX ← EBX + EAX). objdump ද එසේම පෙන්වයි.
6. 05 = ADD EAX, imm32. 10 00 00 00 little-endian = 0x10. **`add eax, 16`**, bytes **5**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Intel, *Intel 64 and IA-32 Architectures Software Developer's Manual*, වෙළුම 2 (2A–2D), order no. 325383-093, සැප්තැම්බර් 2026: §2.1 සහ Figure 2-1 (p.2-1), §2.1.3 ModR/M සහ SIB (p.2-3), Table 2-2 (p.2-6), §2.2.1.2 REX 40H–4FH, §2.3.11 bytes 15 (p.2-20), ADD පිටුව (PDF p.132): <https://cdrdv2.intel.com/v1/dl/getContent/671110>
- M. Martin, A. Roth, CIS 501 "Instruction Set Architectures" slides, University of Pennsylvania, Fall 2009: slide 22 (දිග සහ ආකෘතිය), 33 (operand ආකෘති), 35 (වාසි සහ අවාසි): <https://acg.cis.upenn.edu/milom/cis501-Fall09/lectures/03_isa.pdf>
- Mini-CPU lab මූලාශ්‍ර කේතය (මෙම පොතේ `static/labs/mini-cpu/index.html`): opcode වගුව සහ පෙරනිමි වැඩසටහන.
- NIE, 12 ශ්‍රේණිය ICT ගුරු මාර්ගෝපදේශය, PDF p.86. අධ්‍යාපන ප්‍රකාශන දෙපාර්තමේන්තුව, 11 ශ්‍රේණිය ICT පෙළපොත, PDF p.55.

C = A + B ව්‍යාජ-එසෙම්බ්ලි, mem[12–14] ලිපින, registers 32/64 අයවැය සහ අභ්‍යාසවල bytes ආදර්ශ අගයන් වේ. x86 සහ RV32I bytes අප GNU binutils 2.44 මඟින් එකලස් කර තහවුරු කළ අගයන් වේ.

**පිටවීමේ දොර:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — මෙම බෙදීමේ RISC පැත්ත ආරම්භ කළ සම්භාව්‍ය තර්කය.


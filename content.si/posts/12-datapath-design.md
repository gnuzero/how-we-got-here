---
title: "Datapath නිර්මාණය"
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 12
tags: []
summary: "තනි-චක්‍ර datapath එකක් කොටස් දෘශ්‍යමාන කරයි — සහ එහි clock එක අවම-නරකම අවස්ථාවට ප්‍රමාණය කරන්නේ ඇයි පෙන්වයි"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

ISA එකක් (Post 11) ගිවිසුමකි. Datapath එකක් එය ඉටු කරන දෘඪාංගයයි. සරලම අනුවාදය — *තනි-චක්‍ර* (single-cycle) datapath එකක් — clock ටික් එකකට සම්පූර්ණ උපදෙස් එකක් අවසන් කරයි: fetch, decode, execute, write-back, අවසන්. සැබෑ CPU අද මේ ආකාරයෙන් ගොඩනඟන්නේ නැත. එසේ වුවද Phase 2 හි කොටස් සම්බන්ධ වන ආකාරය දැකීමට එය තවමත් පැහැදිලිම මාර්ගයයි.

## එක් උපදෙස් එකක්, එක් Clock එකක්

කොටස්: ඊළඟ උපදෙස් ලිපිනය රඳවන **program counter** එකක් (Post 9 හි flip-flops); එම PC මගින් සුචිගත **instruction memory** එකක්; operands සහ ප්‍රතිඵල සඳහා **register file** එකක්; ක්‍රියාකාරකම සඳහා **ALU** එකක් (Post 8); loads සහ stores සඳහා **data memory** එකක්; සහ opcode කියවා සෑම mux සහ enable එකක්ම ධාවනය කරන **control unit** එකක්.

ADD ගන්න. PC එක instruction memory සුචිගත කරයි. Control unit එක register-register ADD එකක් දකියි. මූලාශ්‍ර registers දෙකක් ALU වෙත පෝෂණය වේ; ALU ප්‍රතිඵලය ගමනාන්තයට ලියයි; PC ඉදිරියට යයි. Fetch, decode, register කියවීම, ALU, write-back, PC යාවත්කාලීනය — සියල්ල *එක්* clock කාල සීමාවක් ඇතුළත.

## Pipelining බල කරන සීමාව

එම clock කාල සීමාව *මන්දගාමීම* උපදෙස් එකේ සම්පූර්ණ මාර්ගයට ප්‍රමාණවත් තරම් දිගු විය යුතුය — දත්ත මතකය කිසි විටෙකත් ස්පර්ශ නොකරන උපදෙස් පවා. එබැවින් සෑම ADD එකක්ම අවම-නරකම අවස්ථාවේ වේගයෙන් ධාවනය වේ. Throughput බිම මත වාඩි වේ.

Pipelining එම සීමාවට පිළිතුරු දෙයි: දිගු මාර්ගය අදියරවලට කපන්න, එක් එක් අදියර *එහි* අවම-නරකම අවස්ථාවට clock කරන්න, සහ විවිධ උපදෙස් එකවර විවිධ අදියරවල රැඳෙන්නට ඉඩ දෙන්න. එකම ISA. තත්පරයකට බොහෝ වැඩ අවසන් වේ. එය ඊළඟ පෝස්ට් එකයි — සහ සම්භාව්‍ය microarchitecture හි මධ්‍යම අදහසයි.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

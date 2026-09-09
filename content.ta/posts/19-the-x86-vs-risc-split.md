---
title: "x86 vs RISC பிளவு"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 19
tags: []
summary: "RISC காகிதத்தில் சுத்தமானது — மென்பொருள் lock-in மற்றும் µop மொழிபெயர்ப்பு x86-ஐ மேலே வைத்தன"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

பதிவு 11 CISC மற்றும் RISC-ஐ தத்துவங்களாகப் பெயரிட்டது. இந்தப் பதிவு அவை வணிகரீதியாகப் போட்டியிட்டபோது என்ன நடந்தது — மற்றும் ஏன் "சுத்தமான" ISA வெறுமனே வெல்லவில்லை.

## RISC வாதம்

1980களின் ஆரம்பம்: CISC சிக்கலுக்கு எதிர்வினையாக RISC — Berkeley வேலை SPARC நோக்கி, Stanford MIPS நோக்கி, POWER/PowerPC-க்கு உணவளித்த IBM வேலை. கூற்று அனுபவபூர்வமானது: சிக்கலான CISC ops தொகுக்கப்பட்ட குறியீட்டில் அடிக்கடி அரிதாகவே பயன்படுத்தப்பட்டன, அவை தேவைப்பட்ட decode வன்பொருள் சிலிகானை எரித்து இந்தக் கட்டம் ஏற்கனவே உள்ளடக்கிய pipeline-களைச் சிக்கலாக்கியது. ISA-ஐ எளிய, நிலைத்த-நீள, சீரான அறிவுறுத்தல்களுக்குச் சுருக்குங்கள்; சிலிகானைப் பதிவேடுகள், வேகமான pipeline-கள், சிறந்த cache-களுக்குச் செலவழிக்கவும்.

MIPS, SPARC, மற்றும் PowerPC அனைத்தும் கப்பல் ஏறின. ஒரு காலத்திற்கு அவை தூய compute benchmark-களில் x86-ஐ வென்றன, குறிப்பாக workstations மற்றும் சேவையகங்களில்.

## x86 ஏன் தரையை வைத்திருந்தது

x86-இன் விளிம்பு ஒருபோதும் நேர்த்தி அல்ல — அது ஏற்கனவே IBM PC இணக்கத்தன்மையில் அமர்ந்திருந்த மென்பொருள். அது desktop தரநிலையாக மாறியதும், மிகப்பெரிய நிறுவப்பட்ட அடித்தளம் x86-இல் மட்டுமே ஓடியது. பின்னோக்கு இணக்கத்தன்மை ஒரு அகழி ஆனது: புதிய சிப்கள் பழைய binaries-ஐ ஓட்ட வேண்டும், எனவே ISA-வை RISC-பாணியில் சுத்தமாக மறுவடிவமைக்க முடியவில்லை — wart-க்கு wart நீட்டிக்க மட்டுமே, Intel மற்றும் பின்னர் AMD மேற்பரப்பு இருந்தாலும் *implementation*-ஐ வேகமாக்கியபோது.

உண்மையான தீர்வு: நவீன x86 CISC ops-ஐ out-of-order core-இல் நேரடியாகச் செயல்படுத்துவதில்லை. ஒரு decoder ஒவ்வொரு x86 அறிவுறுத்தலையும் ஒன்று அல்லது அதற்கு மேற்பட்ட நிலைத்த-வடிவ உள் micro-operations (µops) ஆக மொழிபெயர்க்கிறது — RISC-போன்றவை — மற்றும் *அவை* பதிவு 16-இன் reservation stations, ROB, மற்றும் execution units வழியாக ஓடுகின்றன. வெளியே: CISC-இணக்கமானது. உள்ளே: மொழிபெயர்ப்பு அடுக்கின் கீழ் RISC-பாணி pipeline.

## வைத்திருக்க வேண்டிய முறை

வெல்லும் ISA-கள் அரிதாகவே தொழில்நுட்பத் தகுதியால் மட்டும் வெல்கின்றன. இணக்கத்தன்மை, ecosystem lock-in, மற்றும் உற்பத்தி அளவு வழக்கமாகச் சுத்தமான காகிதக் கட்டமைப்பை வெல்கின்றன. அதே இயக்கம் அடுத்து ARM-இன் licensing மாதிரிக்கு எதிராக RISC-V-இன் திறந்த ISA-வுடன் தோன்றுகிறது — ஒரு அறிவுறுத்தல் தொகுப்பைச் சுற்றிய *வணிக மாதிரி* குறியாக்கத்தைப் போலவே முக்கியமாக இருக்கலாம்.

{{< lab type="mini-cpu" >}}

**Door out:** David A. Patterson and David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — இந்த வணிகப் போராட்டத்தின் RISC பக்கத்தின் அறிக்கை.

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (RISC / CISC அறிமுகம் — µop மொழிபெயர்ப்பு / வணிக வரலாறு அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

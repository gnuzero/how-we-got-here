---
title: "Machine Code-இலிருந்து Assembly வரை"
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 26
tags: []
summary: "CPU ஓட்டுவது raw binary — assembly முதல் வாசிப்புத்திறன் அடுக்கு, இன்னும் mnemonic ஒன்றுக்கு ஒரு அறிவுறுத்தல்"
image_prompt: "Side-by-side comparison of raw binary machine code and its assembly mnemonic equivalent, clean textbook diagram style"
video_prompt: "15-second animation: binary instructions transforming into readable assembly mnemonics, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: machine code to assembly mapping table + assembler translation flow"
---

Phase 3-இன் ஒவ்வொரு அறிவுறுத்தலும் — datapath, pipeline, ISA — இறுதியில் raw binary ஆக உள்ளது: வன்பொருள் நேரடியாக decode செய்யும் பிட் வடிவங்கள். யாரும் அளவில் அவ்வாறு நிரல்களை எழுதுவதில்லை. Assembly அந்த binary மேல் முதல் abstraction. அது வாங்குவது — மற்றும் *மாற்றாதது* — மென்பொருள் வரலாற்றில் கீழ்நிலை எல்லாவற்றிற்கும் முக்கியம்.

## Assembly உண்மையில் என்ன

Assembly ஒவ்வொரு அறிவுறுத்தலுக்கும் மனிதர் வாசிக்கக்கூடிய mnemonic கொடுக்கிறது — `ADD`, `LDA`, `JMP` — machine-code பிட் வடிவத்துடன் ஒன்றுக்கு ஒன்று பொருந்தும். பதிவு 27-இன் மொழிகள் போல் அது "உயர்நிலை" அல்ல; அடிப்படை வன்பொருள் ops மேல் abstraction இல்லை. ஒவ்வொரு assembly அறிவுறுத்தலும் சரியாக ஒரே machine அறிவுறுத்தலுக்கு வரைபடமாகிறது. நீங்கள் பெறுவது *வாசிப்புத்திறன்* மற்றும் *குறியீட்டு குறிப்பு*: opcode `0101`-ஐ நினைவில் வைப்பதற்குப் பதிலாக `LDI` எழுதுங்கள்; label எழுதி assembler jump offset கணக்கிடட்டும் — byte முகவரிகளைக் கையால் மீண்டும் கணக்கிடாமல்.

## Assembler-இன் வேலை

Assembler assembly உரையை machine code-ஆக மொழிபெயர்க்கிறது — labels-ஐ முகவரிகளாகத் தீர்த்தல், mnemonics-ஐ opcode பிட்களாக, operands-ஐ ISA-இன் encoding புலங்களில் பொதித்தல் (பதிவு 11). இயந்திரவியல், பெரும்பாலும் ஒன்றுக்கு ஒன்று. ஆழமான அர்த்தத்தில் எதுவும் மேம்படுத்தப்படவோ மறுகட்டமைக்கப்படவோ இல்லை — முழு compiler (பதிவு 28) உயர்நிலை மொழியுடன் செய்வதைப் போல் அல்ல.

## இது ஏன் நடக்க வேண்டியிருந்தது

Assembly-க்கு முன், நிரலாக்கம் binary அல்லது சிறந்த நிலையில் raw hex அல்லது octal opcodes உள்ளீடு செய்வதாக இருந்தது — அற்ப நிரல்களுக்கு அப்பால் கையாள முடியாதது, அளவில் debug அல்லது மாற்ற கிட்டத்தட்ட இயலாதது. குறியீட்டு labels மட்டும் மாற்றும் தன்மை கொண்டவை: ஒரு அறிவுறுத்தலைச் செருகுங்கள் அல்லது அகற்றுங்கள், ஒவ்வொரு jump-ஐயும் கையால் மீண்டும் கணக்கிட வேண்டாம் — assembler கணிதத்தைச் செய்கிறது.

## Assembly இன்னும் எங்கே முக்கியம்

நவீன மென்பொருள் மிகைப் பெரும்பாலும் உயர்நிலை மொழிகளில் எழுதப்பட்டு பதிவு 28-இன் pipeline வழியாகத் தொகுக்கப்படுகிறது. Assembly மறைந்துவிடவில்லை. பொறியாளர்கள் இன்னும் compiler சரியாக என்ன உருவாக்கியது என்பதைப் புரிந்துகொள்ள அதற்கு இறங்குகிறார்கள் (hot loops, பாதுகாப்பு ஆய்வு, reverse engineering), அல்லது மிகக் குறைந்த அடுக்குகளை எழுத — boot குறியீடு, interrupt handlers, kernel-இன் பாகங்கள் — அறிவுறுத்தல்-நிலை கட்டுப்பாடு தேவைப்படும் இடத்தில் உயர் abstractions மறைக்கும் அல்லது தடுக்கும்.

**இப்போது முயல்க.** கீழே உள்ள mini-CPU lab தொடரில் மிக நேரடி hands-on இணைப்பு: வழிகாட்டும் நிரலை Assemble செய்து, பிறகு Step — ஒவ்வொரு mnemonic-உம் (`LDI`, `ADD`, `STA`, `OUT`) opcode பிட்களுக்கு ஒன்றுக்கு ஒன்று வரைபடமாகிறது, இந்தப் பதிவு விவரிப்பது போலவே. அதை விட abstraction இல்லை.

{{< lab type="mini-cpu" >}}

## மேலும் படிக்க

- தமிழ் இணையக் கல்விக்கழகம் (Tamil Virtual Academy), பாடம் 5.4: கணினிமொழி மென்பொருள் (எந்திரமொழி, சில்லுமொழி / assembly, சில்லுமொழி பெயர்ப்பி / assembler — அறிமுகம்)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

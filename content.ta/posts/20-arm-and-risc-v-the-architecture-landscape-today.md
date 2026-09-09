---
title: "ARM மற்றும் RISC-V: இன்றைய கட்டமைப்பு நிலப்பரப்பு"
weight: 21
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 20
tags: []
summary: "Desktop x86-இல் அமர்ந்த பிறகு, போர் மின்சாரம் மற்றும் licensing-க்கு நகர்ந்தது — ARM மொபைலை வென்றது; RISC-V திறந்ததில் பந்தயம் கட்டுகிறது"
image_prompt: "Modern infographic comparing ARM licensing vs RISC-V open ISA, with market segment icons, clean contemporary tech-diagram style"
video_prompt: "20-second animation: ARM core and RISC-V core side by side, licensing differences shown, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ARM licensing tiers vs RISC-V open ISA model + market share chart"
---

x86-எதிர்-RISC போர் (பதிவு 19) 1990களின் பிற்பகுதியில் desktop மற்றும் சேவையகத்தை பெரும்பாலும் தீர்த்தது. போட்டி முடியவில்லை — அது நகர்ந்தது. Mobile, embedded, மற்றும் edge single-thread உச்சத்தை விட watts-ஐ அதிகம் கவனிக்கின்றன, மற்றும் ஒரு ISA-வைச் சுற்றிய *வணிக மாதிரி* குறியாக்கத்தைப் போலவே முக்கியம் என்று மாறியது.

## ARM: ISA-ஐ License செய்யுங்கள், Fab கட்டாதீர்கள்

ARM Holdings ISA-ஐ வடிவமைத்து license செய்கிறது — fabricate செய்யத் தயாரான cores, அல்லது ஒரு நிறுவனம் தன் சொந்த ARM-இணக்க core-ஐ வடிவமைக்க அனுமதிக்கும் architecture licenses (Apple-இன் சிலிகான் பிந்தையதின் முதன்மை எடுத்துக்காட்டு). மாதிரி ARM ஒரு fab ஓட்டாமல் பல உற்பத்தியாளர்களிடம் ISA-ஐப் பரப்பியது.

தொழில்நுட்பரீதியாக, ARM மொபைல் காலத்திற்குள் ஏற்கனவே மின்சாரத் திறனுக்குச் சரிசெய்யப்பட்டு நுழைந்தது — RISC-வம்சாவளி எளிய decode முதன்முறையாகப் பெருமளவில் performance-per-watt-ஐக் கவனித்த சந்தையைச் சந்தித்தது. அது அதிர்ஷ்டம் அல்ல; பேட்டரி இயக்கப்படும் சாதனங்களைச் சந்தித்த அந்த வடிவமைப்பு ஒழுக்கத்தின் பல தசாப்தங்கள்.

## RISC-V: License-க்குப் பதிலாக திறந்தது

RISC-V (சுமார் 2010-இல் UC Berkeley-இல் தொடங்கிய வேலை, Krste Asanović, David Patterson, மற்றும் சக பணியாளர்கள் பெயரிடப்பட்ட இயக்கிகளில்) மேலும் செல்கிறது: ISA திறந்ததும் royalty-இல்லாததும். கட்டுப்படுத்தும் vendor-உடன் பேச்சுவார்த்தை இல்லாமல் ஒரு core-ஐச் செயல்படுத்துங்கள். ஆழமான தனிப்பயனாக்கம் அல்லது பூஜ்ய ISA licensing செலவு முக்கியமாகும் இடத்தில் அது மிகவும் முக்கியம் — embedded அமைப்புகள், மற்றும் அனுமதி கேட்காமல் RISC-V அடிப்படையில் தனிப்பயன் அறிவுறுத்தல்களை விரும்பும் accelerators.

## அதே பாடம், ஒரு அடுக்கு ஆழமாக

தோராய வரைபடம்: x86 இன்னும் இணக்கத்தன்மை inertia-வில் desktop மற்றும் சேவையகத்தின் பெரும்பகுதியை வைத்திருக்கிறது. ARM மொபைலை வைத்திருக்கிறது, உண்மையான சேவையக மற்றும் laptop நுழைவுகளுடன் (தனிப்பயன் cloud ARM; Apple Silicon). RISC-V வணிகரீதியாக முந்தையது, royalty-இல்லாத நெகிழ்வுத்தன்மை முதிர்ந்த மென்பொருள் stack-ஐ வெல்லும் இடத்தில் வேகமாக வளர்கிறது.

பதிவு 19-இன் முறை மீண்டும்: ஒரு பிரிவில் வெற்றியாளர் தனியாக "சிறந்த" ISA அல்ல — அந்தப் பிரிவு வாங்குவதற்குப் பொருந்தும் பொருளாதாரம் கொண்டது. ARM மொபைலை watts-*மற்றும்* தொலைபேசி தயாரிப்பாளர்கள் கீழ் தனிப்பயனாக்கக்கூடிய licensing மாதிரியில் வென்றது. RISC-V "இலவசமும் திறந்ததும்" வளரும் வழக்குகளுக்கு அதையும் வெல்லும் என்று பந்தயம் கட்டுகிறது. அது x86 அல்லது ARM அளவை அடைகிறதா என்பது இன்னும் திறந்தது.

{{< lab type="mini-cpu" >}}

**Door out:** The RISC-V Instruction Set Manual (riscv.org) — இந்தப் பதிவு பெயரிடும் திறந்த ISA-க்கான வாழும் முதன்மை விவரக்குறிப்பு; unprivileged ISA தொகுதியுடன் தொடங்குங்கள்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

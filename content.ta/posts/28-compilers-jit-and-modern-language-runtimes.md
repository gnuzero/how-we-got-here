---
title: "Compilers, JIT, மற்றும் நவீன மொழி Runtimes"
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 28
tags: []
summary: "AOT runtime உண்மைகள் இல்லாமல் ஒருமுறை தொகுக்கிறது; JIT hot paths-க்காகக் காத்திருக்கிறது — garbage collection செலவை runtime-க்குள் மாற்றுகிறது"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

பதிவு 27 உயர்நிலை மொழிகள் *ஏன்* உள்ளன என்பதை உள்ளடக்கியது. இந்தப் பதிவு அவற்றைப் பயன்படுத்தக்கூடியதாக்கும் இயந்திரம்: compiler, மூலத்தை உண்மையான CPU (Phase 3) இயக்கக்கூடிய ஒன்றாக மொழிபெயர்ப்பது.

## செவ்வியல் Pipeline (சுருக்கம்)

Lexer → tokens. Parser → Abstract Syntax Tree. Semantic analysis இலக்கணம் மட்டும் பிடிக்க முடியாதவற்றைப் பிடிக்கிறது (types, அறிவிக்கப்படாத பெயர்கள்). பெரும்பாலான உண்மையான compilers பிறகு Intermediate Representation (IR)-க்குத் தாழ்த்துகின்றன — மூல தொடரியலை விட ஒரேமாதிரியானது, இன்னும் எந்த இலக்கு ISA-விலிருந்தும் சுயாதீனம் — அங்கு **optimizer** வேலை செய்கிறது: dead-code elimination, loop-invariant hoisting, inlining, மற்றும் நடத்தையைப் பாதுகாத்து வீணான வேலையை வெட்டும் டஜன் கணக்கான பிற மாற்றங்கள். **Code generation** இலக்கு அறிவுறுத்தல்களை வெளியிட்டு register allocation செய்கிறது (எந்த மதிப்புகள் குறைவான physical பதிவேடுகளில் வாழ்கின்றன எதிராக நினைவகத்திற்கு spilling).

அதுதான் முதுகெலும்பு. ஒவ்வொரு pass-இன் கலைக்களஞ்சியம் புள்ளி அல்ல — கட்டுப்பாடு: மூல abstractions ஓடாது; ஏதோ ஒன்று அவற்றைத் தாழ்த்த வேண்டும், மற்றும் அது இயக்கத்திற்கு *முன்* அல்லது *போது* ஓடலாம்.

## Ahead-of-Time எதிர் Just-in-Time

நிரல் எப்போதும் இயங்குவதற்கு முன் முழு pipeline-ஐ ஒருமுறை ஓட்டுங்கள்: Ahead-of-Time (AOT) — C மற்றும் பாரம்பரிய FORTRAN. Just-in-Time (JIT) — Java, JavaScript, மற்றும் உறவினர்கள் — interpreter அல்லது வேகமான baseline compiler-உடன் தொடங்கி, பிறகு *runtime-இல்* hot paths கண்டுபிடித்து கனமான optimization-உடன் மீண்டும் தொகுக்கிறது.

JIT-இன் நன்மை AOT compiler-க்கு ஒருபோதும் இல்லாத தகவல்: கவனிக்கப்பட்ட branches, argument types, உண்மையான hot loops — அந்தத் தரவு இல்லாமல் கருத பாதுகாப்பற்ற optimizations. செலவு உண்மையானது: compilation இயக்கத்தின் போது சுழற்சிகளை எரிக்கிறது, மற்றும் முதல் வினாடிகள் அடிக்கடி steady state-ஐ விட மெதுவாக ஓடுகின்றன — செவ்வியல் warm-up.

## Runtimes: Compilation-ஐ விட அதிகம்

Managed மொழிகள் (Java, C#, மற்றும் பல்வேறு அளவுகளில் JavaScript மற்றும் Python) compiler-ஐ பரந்த runtime-உடன் இணைக்கின்றன — மிக முக்கியமாக garbage collection வழியாகத் தானியங்கி நினைவக மேலாண்மை, நிரலாளர்களை ஒவ்வொரு allocation-இன் lifetime கண்காணிப்பிலிருந்து விடுவிக்கிறது (C-இல் முக்கிய பிழை மூலம்). சிக்கல் runtime-க்குள் மாறுகிறது: கையேடு முயற்சி overhead-க்கு மற்றும், வரலாற்றுரீதியாக, குறைந்த கணிக்கக்கூடிய இடைநிறுத்தங்களுக்கு வர்த்தகம். அந்தப் பதற்றம்தான் பதிவுகள் 29–30 "real-time" மற்றும் "garbage-collected managed runtime"-ஐ அடிக்கடி முரண்பாடாகக் கருதக் காரணம்.

## நேரடியாகப் பாருங்கள்

கீழே உள்ள VM terminal தொகுக்க உண்மையான இடம்: சிறிய C நிரலில் `gcc` முயன்று `-S`-உடன் assembly ஆய்வு செய்யுங்கள் — இந்தப் பதிவின் abstractions உறுதியான machine அறிவுறுத்தல்களாக மாறுவது.

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ் இணையக் கல்விக்கழகம் (Tamil Virtual Academy), பாடம் 5.4: கணினிமொழி மென்பொருள் (நிரல் பெயர்ப்பி / compiler, ஆணை பெயர்ப்பி / interpreter — JIT / GC ஆழமாக அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

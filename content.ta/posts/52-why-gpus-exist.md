---
title: "GPU-கள் ஏன் உள்ளன"
date: 2026-01-01
draft: false
phase: "9 — GPU-கள் மற்றும் Parallel Compute"
series_index: 52
tags: []
summary: "Graphics வெட்கமற்ற parallel workload கொடுத்தது — SIMT வன்பொருள் பின்தொடர்ந்தது; பொதுக் கணினி அதே வடிவத்தைக் கண்டது"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

Phase 3-இன் ஒவ்வொரு CPU-வும் அறிவுறுத்தல்கள் போதிய அளவு சுயாதீனமும் கணிக்க முடியாததும் என அனுமானிக்கிறது — branch prediction, out-of-order execution, ஆழமான caches, எல்லாம் *ஏதேனும்* வரிசைமுறைக் குறியீட்டை வேகமாக ஓட்ட. GPU-கள் வேறு அனுமானத்தில் தொடங்குகின்றன, அவற்றின் அசல் workload-இல் வேரூன்றியது: ஒரே செயல்பாடு ஒரே நேரத்தில் மிகப் பெரிய எண்ணிக்கையிலான தரவுப் புள்ளிகளுக்குச் சுயாதீனமாகப் பயன்படுத்தப்படுவது.

## Graphics Parallelism-ஐ வெளிப்படையாக்கியது

ஒரு 3D காட்சியை render செய்வது என்பது மில்லியன் கணக்கான vertices-ஐ மாற்றி மில்லியன் கணக்கான pixels-ஐ shade செய்வது — ஒவ்வொன்றிற்கும் அதே கணிதம், pixel (100, 200) மற்றும் pixel (100, 201) இடையே அர்த்தமுள்ள சார்பு இல்லை. போதிய lanes இருந்தால், எல்லாம் ஒரே நேரத்தில் ஓடும்.

அது Phase 3 கட்டப்பட்ட வடிவத்திலிருந்து வேறுபட்டது. ஒரு CPU இப்படித் *தோன்றாத* குறியீட்டிலிருந்து மறைந்த parallelism பிரித்தெடுக்கும். Graphics-க்கு அந்த இயந்திரம் தேவையில்லை: parallelism மறைந்ததல்ல — தொடக்கத்திலிருந்தே வெளிப்படையும் மிகப் பெரியதும்.

## SIMD / SIMT: ஒரு அறிவுறுத்தல், பல Lanes

SIMD ஒரே அறிவுறுத்தலை ஒரே நேரத்தில் பல தரவு உறுப்புகளுக்குப் பயன்படுத்துகிறது. GPU-கள் நெருக்கமான தொடர்புள்ள மாதிரியைச் செயல்படுத்துகின்றன — SIMT: பல parallel threads, ஒவ்வொன்றும் தன் தரவில் (தன் pixel, தன் vertex), வன்பொருள் அவற்றின் குழுக்களை எளிய lanes குறுக்கே lockstep-இல் இயக்கும்.

பலன் நேரடியானது: ஒரு குழுவின் ஒவ்வொரு lane-உம் *அதே* அறிவுறுத்தலை அதே தருணத்தில் ஓட்டும், எனவே ஒரு CPU ஒரு core-க்கு pipeline இயந்திரத்தை நகலெடுக்கும் விதத்தில் நீங்கள் ஒவ்வொரு lane-க்கும் fetch, decode மற்றும் control நகலெடுக்க வேண்டாம். ஒரு பகிரப்பட்ட கட்டுப்பாட்டு அலகு பல lanes-ஐ இயக்கும் — வெட்கமற்ற parallel, same-operation-many-data வேலைக்குப் பரப்பு மற்றும் ஆற்றல் வெற்றி, கணிக்க முடியாத வரிசைமுறைக் குறியீட்டிற்கு மோசமான பொருத்தம். அதனால்தான் CPU-களும் GPU-களும் பரிமாற்றத்தக்கவை அல்ல, மற்றும் உண்மையான அமைப்புகள் பொதுவாக இரண்டையும் கொண்டிருக்கும்.

## Graphics-இலிருந்து பொதுக் கணினிக்கு

தொழிலை மறுவடிவமைத்த உணர்வு: அதே SIMT வடிவம் முக்கோணங்களை விட மிகப் பரந்த வகுப்பிற்குப் பொருந்தும், கணிதம் மிகப் பெரிய அளவில் parallel மற்றும் வழக்கமானதாக இருக்கும்போதெல்லாம். Neural-network பயிற்சி மற்றும் inference கிட்டத்தட்ட முழுவதும் அந்த வகை matrix மற்றும் vector வேலையிலிருந்து கட்டப்பட்டுள்ளன — அதனால்தான் rendering-க்காகப் பிறந்த வன்பொருள் மேலாதிக்க AI compute substrate ஆனது, மற்றும் இந்த phase-இன் மீதி graphics-ஐப் பற்றியல்லாமல் அந்த parallel கட்டமைப்பை நிரலாக்கி உணவளிப்பதைப் பற்றியது.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

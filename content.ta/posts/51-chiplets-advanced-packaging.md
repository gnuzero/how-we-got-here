---
title: "Chiplets மற்றும் Advanced Packaging"
date: 2026-01-01
draft: false
phase: "8 — செயல்முறை நோட்கள் மற்றும் உற்பத்தி"
series_index: 51
tags: []
summary: "Yield die பரப்புடன் வீழ்கிறது — chiplets-ஆகப் பிரித்து advanced packaging-ஆல் bandwidth மீண்டும் வாங்குங்கள்"
image_prompt: "Cutaway diagram comparing a monolithic die vs a chiplet package with interposer, clean semiconductor packaging illustration style"
video_prompt: "20-second animation: a monolithic die splitting into chiplets connected via an interposer, yield improving, clean explainer motion graphics"
schematics: "Diagram: monolithic die vs chiplet+interposer cross-section + yield-vs-die-size curve"
---

பதிவு 49 ஒரு pattern-ஐ மீண்டும் கூறியது: ஒரு geometry-க்குள் scaling சுவரைத் தாக்கும்போது, அமைப்பை மாற்றுங்கள். Chiplets அந்த pattern-ஐ டிரான்சிஸ்டரிலிருந்து ஒரு நிலை மேலே பயன்படுத்துகின்றன — புதிய சாதன இயற்பியல் அல்ல, monolithic dies yield செய்ய மிகப் பெரிதாகும்போது முழு chip எப்படித் தொகுக்கப்படுகிறது என்பதற்கான புதிய பதில்.

## Monolithic Dies மற்றும் Yield சுவர்

பாரம்பரிய chip ஒற்றை சிலிகான் துண்டு: cores, memory controllers, I/O ஒன்றாகத் தயாரிக்கப்பட்டவை. எங்கேயும் எந்த fatal defect முழு die-ஐயும் அழிக்கிறது, மற்றும் அத்தகைய defect-இன் வாய்ப்புப் பரப்புடன் வளர்கிறது — பெரிய, திறமையான chip கட்டமைப்புரீதியாக விரும்பத்தக்கதாக இருந்தாலும் பெரிய dies மோசமாக yield செய்கின்றன. அது பொருளாதார/இயற்பியல் கட்டுப்பாடு, branding தேர்வு அல்ல: எந்த ஒற்றை die-ஐயும் வரம்பின்றி வளர விடாதீர்கள்.

## சிலிகானைப் பிரியுங்கள், செயல்பாட்டை வைத்திருங்கள்

Chiplets ஒரு பெரிய die ஆகியிருப்பதைச் சிறிய, தனியாகத் தயாரிக்கப்பட்ட dies-ஆக வெட்டுகின்றன, ஒவ்வொன்றும் ஒரு செயல்பாட்டைச் சொந்தமாக வைத்திருக்கும், பிறகு அவற்றை ஒரு package-க்குள் high-density interconnects (interposer அல்லது advanced substrate) உடன் மீண்டும் இணைக்கின்றன. ஒரு defect அந்தச் சிறிய chiplet-ஐ மட்டும் கொல்கிறது; சிறிய dies அதே மொத்த செயல்பாட்டிற்குச் சிறப்பாக yield செய்கின்றன. ஒரு package-இல் process nodes-ஐக் கலக்கவும் முடியும் — I/O-க்குப் பழைய, மலிவான சிலிகான்; compute அடர்த்தி சம்பாதிக்கும் இடத்தில் மட்டும் leading-edge — ஒற்றை-process monolith கொடுக்க முடியாத நெகிழ்வு.

## Packaging கம்பியை மீண்டும் வாங்க வேண்டும்

Disaggregation inter-chiplet bandwidth மற்றும் latency on-die links-க்குப் போதுமான அருகில் இருந்தால் மட்டுமே வேலை செய்கிறது. Silicon interposers மற்றும் 3D stacking அந்த அடர்த்தியை வழங்க உள்ளன — அதே சமிக்ஞைகளை வழக்கமான PCB வழியாக வெளியே வழிசெலுத்துவதை விட வெகு தூரம். அந்த packaging படி இல்லாமல், yield வெற்றி புதிய interconnect சுவரில் செலுத்தப்படும்.

## அதே Packaging, அடுத்த Phase-இன் நினைவகம்

அதே advanced-packaging குடும்பம் Phase 9-இல் HBM-ஐச் சாத்தியமாக்குகிறது: memory dies அடுக்கி, அவற்றை high-density interposer வழியாக compute die-உடன் இணைத்து, உடல்ரீதியாகத் தனி சிலிகானை bandwidth பார்வையில் கிட்டத்தட்ட ஒரே துண்டாகக் கருதுங்கள். Chiplet compute மற்றும் HBM memory ஒரே கட்டுப்பாட்டின் இரண்டு நிகழ்வுகள் — பிரிவு செயல்திறன் அபராதமாக இருப்பதை நிறுத்தும் அளவுக்குத் தனி dies இடையே போதிய bandwidth பெறுங்கள்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

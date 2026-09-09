---
title: "Photolithography"
weight: 49
date: 2026-01-01
draft: false
phase: "8 — செயல்முறை நோட்கள் மற்றும் உற்பத்தி"
series_index: 48
tags: []
summary: "Diffraction குறுகிய அலைநீளங்களைக் கட்டாயப்படுத்துகிறது — EUV-இன் mirrors மற்றும் tin plasma தான் feature அளவுகளை நகர்த்தின"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

நவீன chip-இல் ஒவ்வொரு டிரான்சிஸ்டரும் — பில்லியன் கணக்கானவை, பதிவு 47-இன் node லேபிள்கள் நேர்மையாகப் பெயரிட முடியாத அளவுக்கு அடர்த்தியானவை — சிலிகானில் *pattern* செய்யப்பட வேண்டும். Photolithography அந்தப் patterning, மற்றும் EUV (extreme ultraviolet) நோக்கிய தள்ளுதல் குறைக்கடத்தித் தொழிலின் கீழ் மிகக் கடினமான பொறியியல் சங்கிலிகளில் ஒன்று.

## ஒளியால் அச்சிடுங்கள், பிறகு கட்டுங்கள்

Wafer-ஐ photoresist-ஆல் பூசுங்கள்; patterned mask வழியாக ஒளி பிரகாசிக்கச் செய்யுங்கள்; ஒளி படும் இடத்தில் resist-ஐ வேதியியலாக மாற்றி அதைத் தேர்ந்தெடுத்து அகற்ற அல்லது வைத்திருக்க முடியும். Etch, deposit, மற்றும் dope அந்தப் pattern-ஐப் பயன்படுத்தி டிரான்சிஸ்டர் அமைப்புகளை வைக்கின்றன. வேரில் அது துல்லியமான புகைப்பட அச்சிடல் — diffraction casually அனுமதிக்காத தெளிவில்.

## Diffraction குறுகிய அலைநீளங்களைக் கட்டாயப்படுத்துகிறது

நீங்கள் எவ்வளவு சிறிய feature resolve செய்ய முடியும் என்பது அலைநீளத்துடன் பிணைந்தது: குறுகிய ஒளி, நுண்ணிய pattern. அந்த இயற்பியல் உச்சவரம்புதான் தொழில் பத்தாண்டுகளாக நிறமாலையில் கீழே நடந்ததற்குக் காரணம் — ultraviolet, பிறகு deep ultraviolet (DUV, சுமார் 193 nm), பிறகு extreme ultraviolet (EUV, சுமார் 13.5 nm) — ஒவ்வொரு படியும் பதிவு 47-இன் சுருங்கும் லேபிள்கள் சுட்டிக்காட்டும் நுண்ணிய features-ஐ வாங்கியது.

## EUV ஏன் விதிவிலக்காகக் கடினமாக இருந்தது

EUV அலைநீளங்களில், சாதாரண தந்திரங்கள் தோல்வியுறும். **ஒளியை உருவாக்குவது** என்பது molten tin துளிகளை வினாடிக்குப் பல்லாயிரம் முறை உயர்-சக்தி laser-ஆல் அடிப்பதைக் குறிக்கிறது, அதனால் உருவாகும் plasma பயன்படக்கூடிய EUV வெளியிடுகிறது. **அதைக் கவனம் செலுத்துவது** கண்ணாடி lenses பயன்படுத்த முடியாது — EUV கிட்டத்தட்ட அனைத்து வழக்கமான optics மற்றும் காற்றால் உறிஞ்சப்படுகிறது — எனவே பாதை near-vacuum-இல் multilayer mirrors. ஒரு production EUV scanner எப்போதும் கட்டப்பட்ட மிகச் சிக்கலான உற்பத்திக் கருவிகளில் ஒன்று; வணிகரீதியாக, ASML அந்த production tools-இன் ஒரே சப்ளையராக இருந்துள்ளார்.

அந்த அலைநீளப் படி இல்லாமல், அடுத்த பதிவின் நுண்ணிய FinFET மற்றும் Gate-All-Around அமைப்புகள் ஏற்கத்தக்க yield மற்றும் செலவில் உற்பத்தி செய்ய முடியாது. Diffraction கட்டுப்பாட்டை அமைத்தது; tin plasma மற்றும் mirrors கட்டாய architecture ஆயின.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

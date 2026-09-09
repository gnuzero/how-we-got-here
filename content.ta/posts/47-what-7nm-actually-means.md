---
title: "'7nm' உண்மையில் என்ன அர்த்தம்"
weight: 47
date: 2026-01-01
draft: false
phase: "8 — செயல்முறை நோட்கள் மற்றும் உற்பத்தி"
series_index: 47
tags: []
summary: "Node பெயர்கள் ஒற்றை இயற்பியல் நீளத்தைப் பின்தொடர்வதை நிறுத்தின — அடர்த்தி மற்றும் pitch தான் இயற்பியல்; லேபிள் ஒரு தலைமுறை"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

இந்தத் தொடரில் முந்தைய ஒவ்வொரு சிலிகான் சாதனமும் — MOSFET (பதிவு 6), CMOS (பதிவு 7), memory cells (பதிவு 10) — உற்பத்தித் துல்லியம் என்ன சாத்தியம் எனத் தீர்மானிக்கும் அளவில் வாழ்கிறது. "7nm" அல்லது "5nm" போன்ற லேபிள்கள் டிரான்சிஸ்டரில் ஒற்றை அளவிடக்கூடிய நீளம் போல் கருதப்படுகின்றன. அவை நீண்ட காலமாக அப்படி இல்லை.

## பெயர் ஒரு நீளமாக இருந்தபோது

வரலாற்றுரீதியாக process-node பெயர் உண்மையான பரிமாணத்தைப் பின்தொடர்ந்தது — தோராயமாக planar MOSFET-இன் குறைந்தபட்ச gate length (பதிவு 6). ஒரு "90nm process" சாதனத்தில் சுட்டிக்காட்டக்கூடிய ஒன்றைக் குறித்தது. அந்தப் பொருத்தம் planar காலம் வரை நிலைத்தது, பிறகு உடைந்தது.

## ஏன் ஒற்றை எண் போதாமல் போனது

FinFET மற்றும் பிந்தைய Gate-All-Around அமைப்புகள் (பதிவுகள் 48–49) gate length-ஐப் பல சுமை தாங்கும் பரிமாணங்களில் ஒன்றாக மட்டும் ஆக்கின. Fin height, fin pitch, gate pitch, மற்றும் interconnect pitch அனைத்தும் சுயாதீனமாக முக்கியம் — மற்றும் வெவ்வேறு foundries (TSMC, Samsung, Intel) அவற்றை வெவ்வேறுபட வர்த்தகம் செய்கின்றன. இரண்டு "7nm" processes அதே லேபிளின் கீழ் அதே இயற்பியல் அல்ல.

## லேபிள் இப்போது என்ன

நவீன node பெயர் பெரும்பாலும் தலைமுறைக் குறி — "எங்கள் அடுத்த அடர்த்தியான, திறமையான தலைமுறை" — foundry-குறுக்கே இயற்பியல் விவரக்குறிப்பு அல்ல. அர்த்தமுள்ள ஒப்பீடு சுயாதீனமாக அளவிடக்கூடிய அளவுகளைப் பயன்படுத்துகிறது: fin pitch, gate pitch, சதுர மில்லிமீட்டருக்கு டிரான்சிஸ்டர்கள். அவை அடிக்கடி ஒரு foundry-இன் "7nm" மற்றொன்றை விட அடர்த்தியாகக் காட்டுகின்றன, ஏனெனில் branding எந்த ஒற்றை நீளத்திலிருந்தும் பிரிந்தது.

## இடைவெளி ஏன் முக்கியம்

"TSMC-இன் 5nm vs Samsung-இன் 5nm" சரங்கள் பொருந்துவதால் apples-to-apples அல்ல. பெயரிடல் இடைவெளி உள்ளது ஏனெனில் வடிவமைப்பு இடம் ஒருபரிமாணமாக இருப்பதை நிறுத்தியது — planar gate length 3D geometry மற்றும் multi-pitch tradeoffs-க்கு வழிவிட்டது. அது அடுத்த பதிவுகளுக்கான அமைப்பு: அந்த அமைப்புகளை இன்னும் அச்சிடக் கூடிய lithography (பதிவு 48), மற்றும் ஒற்றை நீளத்தை வழக்கற்று ஆக்கிய டிரான்சிஸ்டர் geometry மாற்றங்கள் (பதிவு 49).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

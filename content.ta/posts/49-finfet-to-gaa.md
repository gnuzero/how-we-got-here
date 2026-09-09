---
title: "FinFET முதல் GAA வரை"
weight: 50
date: 2026-01-01
draft: false
phase: "8 — செயல்முறை நோட்கள் மற்றும் உற்பத்தி"
series_index: 49
tags: []
summary: "Short-channel leakage planar shrink-ஐக் கொன்றது — gate-ஐ மூடுங்கள் (FinFET), பிறகு எல்லாப் பக்கமும் மூடுங்கள் (GAA)"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

பதிவு 6 planar MOSFET-ஐ அறிமுகப்படுத்தியது — gate, source, drain சிலிகானில் தட்டையாக. அந்த geometry பத்தாண்டுகளுக்குச் சேவை செய்தது. டிரான்சிஸ்டர்கள் சுருங்கியபோது (பதிவு 48-இல் lithography), planar வடிவமைப்பு மேலும் shrink மட்டும் சரிசெய்ய முடியாத சுவரைத் தாக்கியது: gate channel மீது நம்பகமான கட்டுப்பாட்டை இழந்தது.

## Short-Channel Effects

Planar channel length சுருங்கும்போது, channel மேலே உள்ள gate (பதிவு 6-இன் மின்-புலக் கட்டுப்பாடு) விகிதாசாரமாகக் குறைந்த அதிகாரம் கொண்டது, மற்றும் சாதனம் அணைந்திருக்க வேண்டியபோது மின்னோட்டம் கசிகிறது. அது இயற்பியல், process bug அல்ல. ஒரு புள்ளிக்குப் பிறகு, *planar* டிரான்சிஸ்டரைச் சுருக்குவது சுத்தமான switching கொடுப்பதை நிறுத்துகிறது — எனவே மேலும் planar scaling மதிப்புக்குரியதாக இருப்பதை நிறுத்துகிறது.

## FinFET: மூன்று பக்கக் கட்டுப்பாடு

FinFET அளவை மட்டும் அல்ல, geometry-ஐ மாற்றுகிறது: channel-ஐ மெல்லிய செங்குத்து fin-ஆக உயர்த்தி gate-ஐ மூன்று பக்கங்களிலும் (மேலே மற்றும் இரு சுவர்களிலும்) மூடுங்கள். அதே channel length-இல் channel-இன் அதிகப் பகுதி gate செல்வாக்கின் கீழ் அமர்கிறது, இது planar shrink-ஐக் கொன்ற short-channel leakage-ஐ அடக்குகிறது.

தொழில் 2010களின் ஆரம்பத்தில் FinFET-க்கு அளவில் நகர்ந்தது (Intel-இன் 22 nm Ivy Bridge தலைமுறை, 2011–2012, ஆரம்ப உயர்-அளவு மைல்கல்). பதிவு 36-இன் clock-speed சுவருக்குப் பிறகு பதிவு 17-இன் multicore நகர்வின் அதே pattern: ஒரு அணுகுமுறை உண்மையான இயற்பியல் உச்சவரம்பைத் தாக்கும்போது, அமைப்பை மாற்றுங்கள் — பழைய வடிவத்தை மட்டும் கடினமாகத் தள்ளாதீர்கள்.

## Gate-All-Around: நான்கு பக்கங்கள்

மூன்று-பக்க wrap மின்நிலை உச்சபட்சம் அல்ல. Gate-all-around (GAA) — கிடைமட்ட nanosheet அல்லது nanowire channels — gate channel-ஐ நான்கு பக்கங்களிலும் சுற்ற அனுமதிக்கிறது. Leading-edge nodes (பதிவு 47) FinFET தானே நடைமுறை வரம்புகளை அணுகும்போது அங்கே நகர்கின்றன: அதே planar→FinFET நகர்வு, ஒரு geometry பின்னர்.

## மீண்டும் வரும் Pattern

Planar → FinFET → GAA இந்தத் தொடரின் scaling பாடம் சாதன வடிவில். மின்சுவர்கள் (இங்கே short-channel effects), வெப்பச் சுவர்கள் (பதிவு 36), latency சுவர்கள் (பதிவு 35) அனைத்தும் இறுதியில் architecture-ஐக் கட்டாயப்படுத்துகின்றன, அதே வடிவமைப்பில் கடினமான முயற்சி மட்டும் அல்ல. Chiplets (பதிவு 51) அந்த pattern-ஐ ஒரு நிலை மேலே பயன்படுத்துகின்றன — டிரான்சிஸ்டருக்கு அல்ல, முழு chips எப்படித் தொகுக்கப்படுகின்றன என்பதற்கு.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "அது எங்கே போகிறது"
weight: 63
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 62
tags: []
summary: "முன்னோக்கி அதே pattern — chiplets, package-க்கு அருகில் optics, நினைவகத்திற்கு அருகில் compute"
image_prompt: "Forward-looking infographic showing chiplet AI accelerators, silicon photonics, and in-memory compute, clean speculative technical illustration style"
video_prompt: "20-second animation: optical interconnect, chiplet assembly, and in-memory compute shown in three panels, clean forward-looking motion graphics"
schematics: "Diagram: silicon photonics transceiver + chiplet AI accelerator package + processing-in-memory block diagram"
---

இந்தத் தொடர் gears மற்றும் relays-உடன் திறந்தது — இயந்திர மற்றும் மின்னியந்திர கணினி, நவீன அளவீட்டில் பழமையானது, ஆனால் பின்னர் ஒவ்வொரு நிறுத்தமும் சுத்திகரித்த அதே தர்க்க வடிவம் (அறிவுறுத்தல்கள், செயல்படுத்தல், நிலை). அது முன்னோக்கிப் பார்த்து மூடுகிறது, பின்னோக்கி அல்ல: AI வன்பொருள் தீவிரமாக நகரும் மூன்று திசைகள், ஒவ்வொன்றும் இந்தத் தொடரில் ஏற்கனவே உள்ள கருத்துக்களின் நீட்டிப்பு. கண்டுபிடிக்கப்பட்ட roadmap இல்லை — spine ஏற்கனவே கற்பித்த *வகை* பதில் மட்டும்.

## Chiplet AI Accelerators

பதிவு 51 chiplets-ஐ yield பதிலாக உள்ளடக்கியது; பதிவு 54 compute அருகில் bandwidth-க்கு HBM packaging உள்ளடக்கியது. இயற்கை இணைப்பு இரண்டும்: பிரிக்கப்பட்ட compute chiplets — சில நேரங்களில் வேறுபட்ட சிறப்பு — மற்றும் அடுக்கப்பட்ட HBM, ஒரு package-க்குள் high-density interposer அல்லது advanced-substrate இணைப்புகளால் கட்டப்பட்டவை. Yield மற்றும் சிறப்புப்படுத்தலுக்குப் பிரிக்கவும்; பிரிவு புதிய interconnect சுவராகாமல் இருக்க packaging செலவிடவும். அதே pattern, AI சிலிகானுக்குப் பயன்படுத்தப்பட்டது.

## Package-க்கு அருகில் Optics

குறுகிய in-rack இணைப்புகள் இன்னும் அடிக்கடி செம்பு. Rack-to-rack மற்றும் பல leaf–spine AI fabrics ஏற்கனவே pluggable transceivers-உடன் optical fiber பயன்படுத்தும். Electrical SerDes இன்னும் அடைவு, ஆற்றல் மற்றும் அடர்த்தி வரம்புகளை எதிர்கொள்ளும். Silicon photonics மற்றும் co-packaged optics E/O மாற்றத்தை switch அல்லது GPU package மீது தள்ளும் — நீண்ட மின் traces மற்றும் discrete pluggables-க்கு எதிராக SerDes/DSP ஆற்றல் மற்றும் அடைவு செலவுகளை வெட்டும். "முதல் முறையாக ஒளியை அறிமுகப்படுத்துவது" அல்ல, ஆனால் பதிவுகள் 56 மற்றும் 61 GPU-கள் மற்றும் racks இடையே bandwidth அதிகரித்துக் கட்டுப்படுத்துவதாகச் சொன்ன இடத்திற்கு மாற்றத்தை நகர்த்துவது.

## Processing-in-Memory

பதிவு 35-இன் memory wall HBM (54) மற்றும் weight-stationary systolic dataflow (58) வழியாக எதிரொலித்தது — இயக்கத்தைக் குறைக்கவும், அல்லது அகலமாக்கவும். Processing-in-memory மேலும் செல்கிறது: சில compute-ஐ நினைவக அணி *க்குள்* செய்யுங்கள், இதனால் இயக்கத்தின் ஒரு பகுதி ஒருபோதும் நடக்காது. பரவலாகப் பயன்படுத்தப்படும் தொழில்நுட்பமாக ஆரம்பம்; இன்னும் சுவரை அதன் வேரில் தாக்கும் உண்மையான முயற்சி — அதைச் சுற்றி hierarchy-களை மட்டும் விரிவாக்காமல்.

## தொடர்ச்சியான நூல்

ஒவ்வொரு திசையும் தொடர் pattern மீண்டும்: பிணைப்புக் கட்டுப்பாட்டைத் துல்லியமாகப் பெயரிடுங்கள், பிறகு கடினமாகத் தள்ளுவது மட்டும் அல்லாமல் அமைப்பை மாற்றுங்கள். இயந்திர மாறுதல் கட்டுப்படுத்தியபோது relays குழாய்களுக்கு வழிவிட்டன; ஆற்றல் மற்றும் நம்பகத்தன்மை கட்டுப்படுத்தியபோது குழாய்கள் டிரான்சிஸ்டர்களுக்கு; clock சுவர் கட்டுப்படுத்தியபோது single-core scaling multicore-க்கு; yield கட்டுப்படுத்தியபோது monolithic dies chiplets-க்கு. நினைவக இயக்கம் — compute throughput மட்டும் அல்ல — மிகப் பெரிய AI workloads-க்குக் கட்டுப்படுத்துகிறது, அதனால்தான் packaging, package அருகில் optics மற்றும் நினைவகத்திற்கு அருகில் compute நேரடி பதில்கள்.

ரிலேக்களிலிருந்து attention வரை: தொழில்நுட்பம் ஒவ்வொரு படியிலும் அங்கீகாரத்திற்கு அப்பால் மாறியது. பொறியியல் தர்க்கம் — உண்மையான கட்டுப்பாட்டை அடையாளம் காணுங்கள், பிறகு கட்டமைப்பை மாற்றுங்கள் — மாறவில்லை, மற்றும் அது மாறும் என எதிர்பார்க்க வலுவான காரணம் இல்லை.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

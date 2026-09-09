---
title: "ISA Bus-இலிருந்து PCI-க்கு, PCIe-க்கு"
weight: 33
date: 2026-01-01
draft: false
phase: "5 — பஸ் மற்றும் அமைப்புக் கட்டமைப்பு"
series_index: 32
tags: []
summary: "Skew அகலமான parallel bus-ஐக் கொன்றது; point-to-point serial தப்பித்தல் எப்படி"
image_prompt: "Timeline infographic: ISA → PCI → PCIe evolution with bandwidth numbers, clean historical technical infographic style"
video_prompt: "20-second animation: parallel bus wires struggling with skew, morphing into serial PCIe lanes, clean motion graphics"
schematics: "Diagram: parallel bus signal skew illustration + PCIe differential signaling diagram"
---

பதிவு 31-இன் கூரை: ஒவ்வொரு சாதனமும் அதே கம்பிகளுக்குப் போட்டியிடுகிறது. ISA, பிறகு PCI, பிறகு PCIe — அந்தக் கூரையைச் சுற்றிய பொறியியல், buses-இன் பட்டியல் அல்ல, கட்டுப்பாடுகளின் வரிசை. முடிவில் ஆச்சரியம்: *serial*-க்குச் செல்வது (குறைந்த கம்பிகள்) parallel-இல் இருப்பதை (அதிக கம்பிகள்) வென்றது.

## Parallel உள்ளுணர்வு, மற்றும் அது எங்கே உடைகிறது

ISA (Industry Standard Architecture) அகலமான parallel bus ஆக இருந்தது: பல data கோடுகள், ஒவ்வொன்றும் ஒரு bit, ஒன்றாக clock செய்யப்பட்டவை. அதிக கம்பிகள் அதிக bandwidth என்று பொருள். மிதமான clocks-இல், அது உண்மை.

ஒவ்வொரு கம்பிக்கும் சற்றே வேறு நீளமும் capacitance-ம் உள்ளன, எனவே bits ஒரே கணத்தில் வருவதில்லை — **skew**. மெதுவான clock-இல் அந்த மாறுபாடு காலத்தின் சிறிய பின்னம், பிரச்சனையல்ல. Clock-ஐ உயர்த்துங்கள், காலத்தைச் சுருக்கினால், அதே நிலையான skew timing margin-ஐத் தின்று, receiver ஒரே edge-இல் ஒவ்வொரு bit-ஐயும் sample செய்ய முடியாது. அது இயற்பியல் கூரை, தவறவிட்ட தந்திரம் அல்ல. அகலமான parallel bus-ஐ காலவரையின்றி உயர்த்த முடியாது.

## PCI Headroom வாங்கியது, தப்பித்தல் அல்ல

PCI (Peripheral Component Interconnect, 1992) ISA-வை விட வேகமானது — சிறந்த arbitration, plug-and-play configuration, அதிக நடைமுறை bandwidth. அது இன்னும் பகிரப்பட்ட parallel bus, clocks உயரும்போது இன்னும் skew-க்கு உட்பட்டது. Headroom, புதிய கட்டமைப்பு அல்ல.

## PCIe பகிரப்பட்ட கம்பிகளை விட்டுச் சென்றது

PCI Express (2003) topology-ஐ மாற்றியது. ஒரே பகிரப்பட்ட parallel bus-க்குப் பதிலாக, ஒவ்வொரு சாதனமும் ஒரு switch-க்கு அர்ப்பணிக்கப்பட்ட point-to-point serial இணைப்பைப் (ஒரு lane, அல்லது lanes-இன் கட்டு) பெறுகிறது. திசைக்கு ஒரு differential pair ஒரு lane-க்கு: டஜன் கம்பிகளுக்குக் குறுக்கே lockstep-இல் வைக்க எதுவும் இல்லை, எனவே per-lane clocks எந்த parallel bus-ஐயும் மிஞ்சி உயரலாம். Lanes பிணைக்கின்றன (x1, x4, x8, x16) அதிகம் தேவைப்படும் சாதனங்களுக்கு — ஒரு GPU x16 எடுக்கிறது ஏனெனில் அது x1-இல் ஒரு NIC நகர்த்துவதை விட மிக அதிகம் நகர்த்துகிறது. தொடர்பற்ற சாதனங்கள் இனி கம்பிகளைப் பகிர்வதில்லை, எனவே ஒன்றையொன்றின் arbitration-க்குக் காத்திருப்பதில்லை.

குறைந்த இயற்பியல் கம்பிகள். உயர்ந்த அடையக்கூடிய bandwidth. Shared-bus கூரை போய்விட்டது. பதிவு 33 அந்த serial இணைப்புகள் ஒரு பரிமாற்றத்தை எப்படி அமைக்கின்றன என்பது — இயந்திரத்தின் மீதி இன்னும் ஒரு read அல்லது write-ஐ *பொருள்* கொள்ள முடியும்படி.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

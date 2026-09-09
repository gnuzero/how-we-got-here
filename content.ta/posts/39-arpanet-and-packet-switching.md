---
title: "ARPANET மற்றும் Packet Switching"
weight: 39
date: 2026-01-01
draft: false
phase: "6 — வலையமைப்பு பரிணாமம்"
series_index: 39
tags: []
summary: "Bursty கணினி போக்குவரத்து circuit switching-ஐ உடைத்தது — ARPANET packets மற்றும் பகிரப்பட்ட இணைப்புகள் வேலை செய்யும் என நிரூபித்தது"
image_prompt: "Historical network topology map of early ARPANET nodes connected via IMPs, clean historical network diagram style"
video_prompt: "20-second animation: a message broken into packets, routed hop-by-hop, reassembled at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: early ARPANET topology map + packet switching vs circuit switching comparison"
---

பதிவு 38-இன் serial இணைப்புகள் சரியாக இரண்டு endpoints-ஐ இணைக்கின்றன. ARPANET, 1969-இல் ARPA (பின்னர் DARPA) கீழ் நேரடி, வேறு ஒன்றை நிரூபிக்கப் புறப்பட்டது: ஒவ்வொரு இணையிடையேயும் அர்ப்பணிக்கப்பட்ட circuit இல்லாமல் பல இயந்திரங்கள் பலவற்றை அடைவது, தரவை சுயாதீனமாக hop by hop route செய்யும் packets-ஆக உடைப்பதன் மூலம்.

## Circuit Switching எதிர் Packet Switching

பதிவு 38 ஏறிய தொலைபேசி வலையமைப்பு circuit switching பயன்படுத்தியது: *முழு* அழைப்புக்கும் தொடர்ச்சியான end-to-end பாதையை ஒதுக்குங்கள், யாரும் பேசினாலும் இல்லாவிட்டாலும். தொடர்ச்சியான குரலுக்கு நல்லது; கணினி போக்குவரத்துக்கு மோசமான பொருத்தம் — அது bursty: செயலில் பரிமாற்றம், பிறகு ஒதுக்கப்பட்ட circuit பயன்படுத்தப்படாமல் அமர்ந்திருக்கும் இடைவெளிகள்.

Packet switching எதிர் பந்தயம். தரவை packets-ஆக உடைக்கவும், ஒவ்வொன்றும் இலக்கு முகவரியைச் சுமக்கட்டும்; ஒவ்வொன்றையும் சுயாதீனமாக route செய்யவும்; பல உரையாடல்களுக்கு இடையே இயற்பியல் இணைப்புகளைப் பகிரவும். முழு session-க்கும் பாதை ஒதுக்கப்படாது — வெவ்வேறு பரிமாற்றங்களின் packets இடைசெல்கின்றன, வெவ்வேறு வழிகளை எடுக்கலாம், மற்றும் இலக்கில் மீண்டும் இணைகின்றன. Paul Baran-இன் RAND பணி — விநியோகிக்கப்பட்ட, உயிர்வாழும் தகவல்தொடர்புகள் — மற்றும் Leonard Kleinrock-இன் packet வலையமைப்புகளின் queueing பகுப்பாய்வு அறிவுசார் அடித்தளம் அளித்தன; ARPA-வில் Lawrence Roberts அந்தப் பந்தயத்தை நிதியளிக்கப்பட்ட ஆராய்ச்சி வலையமைப்பாக மாற்றினார்.

## IMPs: அசல் Routers

ARPANET-இன் hops Interface Message Processors (IMPs) — ஒவ்வொரு தளத்திலும் அர்ப்பணிக்கப்பட்ட minicomputers (Phase 3-இன் minicomputer காலம், கம்பிக்குப் பயன்படுத்தப்பட்டது) உள்ளூர் host-இலிருந்து packets ஏற்று, அடுத்த hop-ஐத் தேர்ந்தெடுத்து, முன்னனுப்பும். கருத்தியலாக, நவீன router இன்னும் செய்வது அதுதான். முதல் நான்கு nodes — UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah — பின்னைய தரங்களால் சிறியவை. Packet switching காகிதத்தில் மட்டும் அல்ல, நடைமுறையில் வேலை செய்கிறது எனக் காட்ட அவை போதுமானவை.

## இது ஏன் உண்மையான பந்தயம்

Circuit switching-இல் மூழ்கிய telecom பொறியாளர்கள் அடிக்கடி ஒதுக்கப்பட்ட பாதைகள் இல்லாத வலையமைப்பு தரவை நம்பகமாக வழங்கவே முடியுமா என சந்தேகித்தனர். ARPANET-இன் வெற்றி என்பது உண்மையான சந்தேகத்திற்கு எதிரான ஒரு கட்டமைப்பின் நிறுவன உறுதிப்படுத்தல் — எல்லோரும் ஏற்கனவே ஒப்புக்கொண்ட தவிர்க்க முடியாத "அடுத்த படி" அல்ல.

## இது எதை அமைத்தது

ARPANET-இன் சொந்த host-to-host நெறிமுறைகள் இன்னும் TCP/IP அல்ல (பதிவு 41). கட்டமைப்பு வெற்றி — அர்ப்பணிக்கப்பட்ட circuits-க்குப் பதிலாக packets — இந்த phase-இன் பின்னைய ஒவ்வொரு வலையமைப்பும் கட்டும் அடித்தளம், நவீன இணையம் வழியாக, பதிவு 42-இன் datacenter fabrics வரை, மற்றும் Phase 10-இன் training-cluster interconnects வரை. அடுத்து, உள்ளூர்: TCP/IP பன்முக nets-ஐ ஒரே internetwork-ஆகக் கட்டுவதற்கு முன் கட்டிடங்கள் எப்படி Ethernet-இல் தரநிலையானது (பதிவு 40).

**Door out:** Paul Baran, *On Distributed Communications* (RAND Corporation, 1964) — Kleinrock-இன் queueing பணியும் Roberts-இன் ARPA திட்டமும் சேர்ந்து, ARPANET ஏன் circuit switching-க்கு எதிராகப் பந்தயம் கட்ட முடிந்தது என்பதற்கு அடிகோலும் செவ்வியல் distributed/packet வாதம்.

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 10: கணினி வலையமைப்பு ஓர் அறிமுகம் (ARPANET 1969 நான்கு nodes; Paul Baran / Leonard Kleinrock packet switching; வரலாற்று அட்டவணை — IMP-ஆழ அல்ல)
- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 11: வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள் (ARPANET / Internet அறிமுகம்)
- மு. சிவலிங்கம், *நெட்வொர்க் தொழில்நுட்பம்* (பாரதி பகத் பதிப்பகம்; பிணைய அடுக்குகள் / switching அறிமுகம்)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

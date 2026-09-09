---
title: "Ethernet மற்றும் Local Area Network"
weight: 41
date: 2026-01-01
draft: false
phase: "6 — வலையமைப்பு பரிணாமம்"
series_index: 40
tags: []
summary: "பகிரப்பட்ட கம்பி, மைய arbiter இல்லை — CSMA/CD LAN collision கட்டுப்பாட்டைத் தீர்த்தது; switches பின்னர் அதை அகற்றின"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET (பதிவு 39) தொலைதூர தளங்களுக்கு இடையே wide-area packet switching-ஐத் தீர்த்தது. ஒரு கட்டிடத்திற்குள், சில டஜன் மீட்டர் கம்பிக்கு IMP-பாணி routing தவறான கருவி. Ethernet, 1973-இல் Xerox PARC-இல் Robert Metcalfe மற்றும் David Boggs ஆல் தொடங்கப்பட்டது, ஆதிக்க உள்ளூர் பதிலாக ஆனது.

## பகிரப்பட்ட-ஊடகப் பிரச்சனை

ஆரம்ப Ethernet பல stations-ஐ ஒரே பகிரப்பட்ட கம்பியில் வைத்தது — ஒரு bus topology, பதிவு 31 இயந்திரத்திற்குள் எதிர்கொண்ட அதே *வகை* போட்டி, இப்போது LAN-இல். ஒவ்வொரு station-ம் transmit செய்யலாம்; ஒவ்வொரு station-ம் ஒவ்வொரு பரிமாற்றத்தையும் கேட்கும். ஒரே நேரத்தில் இரண்டு transmitters இரண்டையும் சிதைக்கும்.

## CSMA/CD: கேளுங்கள், Transmit செய்யுங்கள், கண்டறியுங்கள், Back Off

Ethernet-இன் பதில் CSMA/CD. **Carrier Sense:** முதலில் கேளுங்கள்; ஊடகம் idle தோன்றினால் மட்டும் transmit செய்யுங்கள். **Multiple Access:** எந்த station-ம் முயலலாம் — system buses-இல் request/grant போல் மைய grant இல்லை (பதிவு 31). **Collision Detection:** அனுப்பும்போது தொடர்ந்து கேளுங்கள்; collision தோன்றினால் நிறுத்துங்கள், *சீரற்ற* backoff காத்திருங்கள், மீண்டும் முயலுங்கள்.

Randomization தான் சுமை தாங்கும் தந்திரம். நிலையான ஒரே backoff-கள் என்றென்றும் மோதிக்கொள்ளும். வெவ்வேறு சீரற்ற காத்திருப்புகள் மற்றொன்று மீண்டும் முயலும் முன் ஒரு station வெற்றி பெற அனுமதிக்கின்றன — arbiter இல்லாத decentralized போட்டி.

## Frame

Ethernet தரவை frames-இல் சுமக்கும்: மூலம் மற்றும் இலக்கு MAC முகவரிகள் (வன்பொருள் முகவரிகள், பதிவு 41-இன் IP முகவரிகளுக்குக் கீழே), உயர் நெறிமுறைக்கான type புலம், payload, மற்றும் CRC — பதிவு 33-இன் PCIe data-link சோதனைகளின் அதே நம்பகத்தன்மை *வகை*, வேறு ஊடகத்தில்.

## பகிரப்பட்ட Bus-இலிருந்து Switched Star வரை

நவீன wired Ethernet பெரும்பாலும் பகிரப்பட்ட கம்பியை விட்டு, ஒவ்வொரு station-க்கும் சொந்த point-to-point இணைப்பைத் தரும் switches-க்குச் சென்றது — பழைய parallel buses-க்கு எதிராக PCIe செய்த அதே shared-to-point-to-point தப்பித்தல் (பதிவு 32). சரியான switch-இல், செவ்வியல் CSMA/CD collisions பெரும்பாலும் மறைகின்றன: ஒவ்வொரு இணைப்புக்கும் இரண்டு முனைகள். கருத்துகள் இன்னும் வரலாற்றுரீதியாக முக்கியம், மற்றும் ஆரம்ப Wi-Fi — இன்னும் பகிரப்பட்ட radio ஊடகம் — அதே collision கட்டுப்பாட்டைத் தீர்க்க வேண்டியிருந்தது.

## இது எங்கே போகிறது

உள்ளூர் Ethernet மற்றும் wide-area packet routing இன்னும் ஒரு இடைவெளியை விடுகின்றன: வெவ்வேறு அடிப்படைத் தொழில்நுட்பங்களை ஒரே internetwork-ஆகக் கட்டும் *உலகளாவிய* முகவரி மற்றும் routing திட்டம். அது TCP/IP — அடுத்து.

**Door out:** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — பகிரப்பட்ட-ஊடக LAN மற்றும் CSMA/CD வடிவமைப்பைக் கூறிய முதன்மை ஆய்வுக்கட்டுரை.

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 10: கணினி வலையமைப்பு ஓர் அறிமுகம் (Xerox PARC / Robert Metcalfe–David Boggs Ethernet 1973–1976 வரலாறு; LAN அறிமுகம்)
- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 11: வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள் (Ethernet 802.3 data-link நெறிமுறையாக; WLAN 802.11)
- மு. சிவலிங்கம், *நெட்வொர்க் தொழில்நுட்பம்* (பாரதி பகத் பதிப்பகம்; LAN / Ethernet / data-link அடுக்கு)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

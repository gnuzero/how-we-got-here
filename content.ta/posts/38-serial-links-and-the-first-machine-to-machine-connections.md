---
title: "Serial இணைப்புகள் மற்றும் முதல் இயந்திரத்திலிருந்து-இயந்திரத் தொடர்புகள்"
weight: 39
date: 2026-01-01
draft: false
phase: "6 — வலையமைப்பு பரிணாமம்"
series_index: 38
tags: []
summary: "Point-to-point serial இணைப்பு சரியாக இரண்டு முனைகளை இணைக்கும் — packet switching-ஐ கட்டாயப்படுத்திய கூரை"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

Phase 5-இன் ஒவ்வொரு bus-ம் *ஒரே* இயந்திரத்திற்குள் தங்கும். வலையமைப்பு தொடங்குவது தனி இயந்திரங்கள் பேச வேண்டியபோது — மற்றும் packet-switched வலையமைப்புகள் இருப்பதற்கு முன், அது serial இணைப்பைக் குறித்தது: ஒரு bit stream, point to point, routing இல்லை, "இந்தக் கம்பியின் மறுமுனையில் உள்ளது" என்பதற்கு அப்பால் முகவரி இல்லை.

## RS-232: அடிப்படை Serial இணைப்பு

RS-232 (EIA, 1960) இரண்டு சாதனங்களுக்கிடையே மின்னழுத்த நிலைகளையும் asynchronous serial மரபுகளையும் நிர்ணயித்தது — இரு முனைகளும் முன்கூட்டியே baud rate-இல் ஒப்புக்கொள்கின்றன, ஏனெனில் data உடன் clock வராது. Addressing இல்லை, routing இல்லை, முனைகள் தேர்ந்தெடுத்த எளிய parity-க்கு அப்பால் error correction இல்லை. வெறும் இரண்டு சாதனங்கள், ஒரு நேரத்தில் ஒரு bit.

அது போதுமானதாக இருந்தது. Terminals அதை mainframes மற்றும் minicomputers-ஐ அடையப் பயன்படுத்தின (Phase 3-இன் வம்சாவளி). உயர் வலையமைப்பு stack-ஐச் சார்ந்திராத ஒரு சேனல் தேவைப்படும்போது, routers மற்றும் embedded கருவிகளுக்குள் இன்னும் dead-simple console பாதையாக அது உள்ளது.

## Modem: Analog கம்பி மீது Digital

நீண்ட தூரப் பேச்சு தொலைபேசி வலையமைப்பை ஏற வேண்டியிருந்தது — analog, narrowband, குரலுக்காகக் கட்டப்பட்டது. ஒரு modem digital bit stream-ஐ தொலைபேசிக் கோடு சுமக்கக்கூடிய analog carrier மீது modulate செய்கிறது, மற்றும் தொலை முனையில் அதை மீண்டும் bits-ஆக demodulate செய்கிறது. ஆரம்ப வீதங்கள் வினாடிக்கு நூற்றுக்கணக்கான bits, பின்னர் பல்லாயிரக்கணக்கான kilobits — நவீன அளவில் மெதுவானது, ஆனால் அதே அறையில் இல்லாத ஒரு இயந்திரத்தை அடைய நடைமுறை ஒரே வழி, ஏற்கனவே கிட்டத்தட்ட எல்லா இடங்களுக்கும் சென்ற உள்கட்டமைப்பு மீது.

## இது ஏன் அடுத்த கட்டமைப்பைக் கட்டாயப்படுத்துகிறது

ஒரு point-to-point serial இணைப்பு — நேரடி RS-232 அல்லது modem-over-phone — சரியாக *இரண்டு* endpoints-ஐ இணைக்கும். Multi-node வலையமைப்பு இல்லை, கம்பியில் இல்லாத இலக்குக்கான routing முடிவு இல்லை. ஒவ்வொரு இணையிடையேயும் அர்ப்பணிக்கப்பட்ட ஜோடி இல்லாமல் பல இயந்திரங்கள் ஒன்றையொன்று அடைய அளவிட வேறு பந்தயம் தேவை: தரவை packets-ஆக உடைக்கவும், hop by hop route செய்யவும், இணைப்புகளைப் பகிரவும். ARPANET நிரூபிக்கப் புறப்பட்டது அதுதான் — அடுத்த பதிவு.

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 10: கணினி வலையமைப்பு ஓர் அறிமுகம் (வலையமைப்பு வரலாற்று அட்டவணை / dial-up telephone அறிமுகம் — RS-232 electrical spec அல்ல)
- மு. சிவலிங்கம், *நெட்வொர்க் தொழில்நுட்பம்* (பாரதி பகத் பதிப்பகம்; physical / data-link அடுக்கு அறிமுகம்)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

---
title: "Memory Buses"
weight: 34
date: 2026-01-01
draft: false
phase: "5 — பஸ் மற்றும் அமைப்புக் கட்டமைப்பு"
series_index: 34
tags: []
summary: "DDR bandwidth வாங்கியது; latency அரிதாக நகர்ந்தது — banks மற்றும் channels காத்திருப்பை மறைக்கின்றன"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (பதிவுகள் 32–33) விரிவாக்கச் சாதனங்களுக்கான பாதை. Memory bus உண்மையில் CPU-க்கு உணவளிக்கும் பாதை — பதிவு 10-இன் DRAM — மற்றும் அதன் பரிணாமம் bandwidth, latency, மற்றும் மின்சாரம் இடையேயான தொடர் பேச்சுவார்த்தை. Generation பெயர்கள் கதை அல்ல. அந்த மூன்றிற்கும் இடையேயான பிரிவுதான்.

## இரு Edges, வேகமான Clock அல்ல

DDR — Double Data Rate — உயரும் *மற்றும்* விழும் edge-இல் பரிமாற்றுகிறது. அதே clock-இல் single-data-rate வடிவமைப்பின் தோராயமாக இருமடங்கு throughput, அதிர்வெண்ணை இரட்டிப்பாக்காமல் (மற்றும் அதனுடன் வரும் signal-integrity பிரச்சனைகள் இல்லாமல்). முதலில் clock சுவருக்குச் செலுத்தாமல் bandwidth.

## Bandwidth ஏறியது; First-Bit Latency ஏறவில்லை

ஒவ்வொரு DDR generation-ம் உச்ச bandwidth-ஐ உயர்த்தியது, பெரும்பாலும் வேகமான I/O மூலம். Prefetch மற்றும், DDR5-இல், இரண்டு சுதந்திரமான 32-bit subchannels-ஆகப் பிரிவு module-இல் அதிக parallelism வாங்குகிறது. தலைப்பு எண்கள் மறைப்பது: மூல அணுகல் *latency* — request-இலிருந்து முதல் bit வரை — bandwidth-ஐ விட மிக மெதுவாக நகர்ந்தது. DRAM தொடங்கியவுடன் ஒரு stream-இல் மிகச் சிறந்தது, தொடங்குவதற்கு முன் காத்திருப்பில் சற்று மட்டும் சிறந்தது. அது பதிவு 35-இன் அமைப்பு. வேறு அளவீடு, வேறு இயற்பியல் (charge sensing, capacitor கலங்கள்).

## மெதுவான அணுகலை மறைக்க Parallelism

ஒரு *channel* சுதந்திரமான controller பாதை — இணை request-கள் ஒன்றையொன்று பின்னால் வரிசையில் நிற்கத் தேவையில்லை. ஒரு channel-க்குள், *ranks* மற்றும் *banks* ஒரு bank முடிக்க (அல்லது refresh — பதிவு 10) அனுமதிக்கின்றன மற்றொன்று புதிய request எடுக்கும்போது. போதுமான சுதந்திரமான அணுகல்களை மேற்பொருத்துங்கள், *aggregate* throughput உயர்ந்தே இருக்கும் எந்த ஒரு அணுகலும் வேகமாகாதபோதும். அதனால்தான் அமைப்பு உள்ளது: DIMM அம்சங்களின் பட்டியல் அல்ல, அடுத்த பதிவு சுவராகப் பெயரிடும் latency-ஐ மறைக்கும் வழி.

ஒரு DIMM இயற்பியல் தொகுப்பு — நிலையான edge connector-உடன் ஒரு பலகையில் chips — எனவே கொள்ளளவு "எத்தனை slots, என்ன அளவு," bus-இன் மறுவடிவமைப்பு அல்ல.

அடுத்த இரண்டு பதிவுகள் இந்தப் பேச்சுவார்த்தை குறைந்தால் என்ன நடக்கிறது: memory wall, மற்றும் compute பக்கத்தில் அதன் உறவினர், clock-speed wall.

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (நினைவகச் சாதனங்கள்: DRAM அறிமுகம்; DDR generation / channel–rank–bank அமைப்பு அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "PCIe Deep Dive"
date: 2026-01-01
draft: false
phase: "5 — பஸ் மற்றும் அமைப்புக் கட்டமைப்பு"
series_index: 33
tags: []
summary: "நோக்கம் TLP-களில் சவாரி செய்கிறது; நம்பகத்தன்மையும் signaling-ம் கீழே அமர்கின்றன — பகிரப்பட்ட bus-ஐ மாற்றிய stack"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

பதிவு 32 PCIe ஏன் serial மற்றும் point-to-point ஆனது என்பதை உள்ளடக்கியது. இந்தப் பதிவு அந்த இணைப்புகளில் ஒரு பரிமாற்றம் *எப்படி* அமைக்கப்படுகிறது — fabric-ஐப் பேச வேண்டிய வன்பொருளைக் கட்டுபவர்களுக்கு முக்கியமான அடுக்கு, இந்தத் தொடர் மீண்டும் வரும் Nitefury-அடிப்படையிலான GPU நினைவக வேலை உட்பட.

## நோக்கம், நம்பகத்தன்மை, எலக்ட்ரான்கள்

மூன்று அடுக்குகள், மூன்று வேலைகள். **Transaction Layer** ஒரு read, ஒரு write, அல்லது ஒரு completion பிறந்து இறக்கும் இடம் — மென்பொருள் சிந்திக்கும் அடுக்கு. **Data Link Layer** வழங்கலை நம்பகமாக்குகிறது: sequence எண்கள், CRC, ஒரு packet சிதைந்தால் retransmission. **Physical Layer** கம்பி: differential pairs, stream மீட்கக்கூடியதாக இருக்க encoding, செம்பின் மீது serialization. அவ்வாறு பிரிக்கப்பட்டது ஒரு தனிப்பயன் வடிவமைப்பு எலக்ட்ரான்களை மீண்டும் கண்டுபிடிக்காமல் *நோக்கத்தை* வெளிப்படுத்த முடியும்படி.

## Packet தான் ஒப்பந்தம்

அலகு Transaction Layer Packet. ஒரு TLP வகையைப் (memory read அல்லது write, I/O, configuration) பெயரிடுகிறது, முகவரி, நீளம், மற்றும் — write-இல் — payload. Link layer அதை sequence மற்றும் CRC-உடன் மூடுகிறது; தொலைவு பக்கம் சரிபார்த்து தேவைப்பட்டால் retry செய்கிறது. மேலிருந்து, அது நம்பகமான read அல்லது write போல் தெரிகிறது. நம்பகத்தன்மை மந்திரம் அல்ல. அது அந்த மூடல்.

## Lanes அகலத்தை அளவிடுகின்றன; Generations வீதத்தை அளவிடுகின்றன

ஒரு lane ஒவ்வொரு திசையிலும் ஒரு differential pair — சிறிய இணைப்பு. Bandwidth பெருக்க lanes-ஐப் பிணையுங்கள் (x1…x16). ஒவ்வொரு generation-ம் per-lane வீதத்தை தோராயமாக இரட்டிப்பாக்குகிறது (உயர்ந்த signaling, இறுக்கமான encoding). அதே x16 slot, Gen 5 எதிர் Gen 3: சுமார் 4× unidirectional bandwidth (~64 GB/s vs ~16 GB/s) கூடுதல் கம்பிகள் இல்லாமல். பதிவு 32-இன் serial பந்தயம் அந்த ஏற்றத்தைச் சாத்தியமாக்கியது.

## தனிப்பயன் Fabric ஏன் கவலைப்படுகிறது

ஒரு FPGA நினைவக-fabric அட்டை இந்த stack-இல் வாழ வேண்டும்: root complex மற்றும் பிற endpoints ஏற்கும் TLP-களை உருவாக்கவும், மற்றும் நிறுவப்பட்ட IP link நம்பகத்தன்மையையும் physical layer-ஐயும் கையாள அனுமதிக்கவும். GPUDirect-பாணி peer-to-peer (பதிவு 37) அதே யோசனை மேலும் எடுக்கப்பட்டது — இரண்டு endpoints இடையே முகவரியிடப்பட்ட TLP-கள், data path-இலிருந்து CPU வெளியே.

**Door out:** The PCI Express Base Specification (PCI-SIG) — இந்தப் பதிவு பெயரிடும் lanes, TLP-கள், மற்றும் அடுக்கு stack-க்கு வாழும் முதன்மை (பதிப்பு செய்யப்பட்டது; Base Spec, உறைந்த paper அல்ல).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

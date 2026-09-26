---
title: "Interconnects at Scale"
weight: 38
date: 2026-01-01
draft: false
phase: "5 — பஸ் மற்றும் அமைப்புக் கட்டமைப்பு"
series_index: 37
tags: []
summary: "Compute பல chips ஆனதும், அவற்றுக்கிடையேயான பாதை அடுத்த சுவர் — அர்ப்பணிக்கப்பட்ட இணைப்புகள், குறைந்த நகல்கள்"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

இந்த phase இதுவரை *ஒரு* இயந்திரத்திற்குள் பாகங்களை இணைத்தது — CPU-க்கு நினைவகம், CPU-க்கு சாதனங்கள். ஒரு workload பல GPU-களை, அல்லது பல இயந்திரங்களைத் தேவைப்பட்டால், கேள்வி மாறுகிறது: அந்த அலகுகள் *ஒன்றையொன்று* கூடுதல் தொடர்பு கூடுதல் compute-ஐத் தின்னாத அளவுக்கு வேகமாகப் பேச முடியுமா?

## இயல்புநிலை பாதை வரி

Peer பாதை இல்லாமல், GPU A system memory வழியாக எழுதுகிறது மற்றும் GPU B அதை மீண்டும் படிக்கிறது — கூடுதல் hops, கூடுதல் latency, நகல்களில் செலவழிக்கப்பட்ட PCIe bandwidth. PCIe மட்டும் இருந்தாலும், GPUDirect P2P host staging இல்லாமல் GPU↔GPU DMA செய்ய முடியும் (இன்னும் PCIe வீதங்களில்). மீதமுள்ள கட்டுப்பாடு bandwidth மற்றும் topology: பகிரப்பட்ட விரிவாக்க fabric பல-GPU mesh-ஆக ஒருபோதும் வடிவமைக்கப்படவில்லை.

## அர்ப்பணிக்கப்பட்ட இணைப்புகள், Coherent நினைவகம், குறைந்த நகல்கள்

NVIDIA-இன் NVLink நோக்கத்திற்காகக் கட்டப்பட்ட GPU-to-GPU interconnect — பரிமாற்றத்திலிருந்து CPU மற்றும் system memory வெளியே. ஒரு NVSwitch ஒரு node-இல் ஒவ்வொரு GPU-ஐயும் மற்ற ஒவ்வொன்றிலிருந்தும் அடையக்கூடியதாக்கலாம், PCIe-மற்றும்-CPU பாதையை விட மிக அதிக bandwidth-இல். அடிக்கடி, பெரிய பரிமாற்றங்கள் — பெரிய அளவிலான training Phases 7 மற்றும் 10-இல் திரும்பும் முறை — அந்த நேரடிப் பாதை முதல்-வரிசை, சிறு சரிசெய்தல் அல்ல.

CXL (Compute Express Link) அண்டை கட்டுப்பாட்டிற்குப் பதிலளிக்கிறது: ஒரு die-க்கு அப்பால் cache-coherent அணுகல், மற்றும், மேலும் வெளியே, ஒரு socket-க்கு soldering செய்யப்படாத pooled நினைவகம். கொள்ளளவு compute nodes இடையே நகரலாம் எந்த DIMM slot-இல் இறங்கியதோ அதற்கு உறைந்திருக்காமல் — DDR (பதிவு 34) அல்லது மூல PCIe கொடுக்காத நெகிழ்வுத்தன்மை.

GPUDirect RDMA ஒரு NIC-ஐ GPU நினைவகத்தை நேரடியாகப் படிக்க அல்லது எழுத அனுமதிக்கிறது. அது இல்லாமல், network குறுக்கே GPU-to-GPU பரிமாற்றம் GPU → system memory → NIC → தொலை system memory → தொலை GPU — latency மற்றும் நினைவக bandwidth செலவாகும் நகல்கள். அதை GPU → network → GPU ஆகச் சுருக்குங்கள், RDMA (பதிவு 42) storage மற்றும் messaging-இல் வெல்வதற்கான அதே காரணத்திற்கு: குறைந்த நகல்கள், நகர்வை babysit செய்யும் குறைந்த CPU.

## அதே பிரச்சனை, திறந்த வன்பொருள்

இது தொடர் சுட்டிக்காட்டும் தனிப்பயன் GPU நினைவக fabric கீழ் உள்ள கருத்து அடித்தளம்: பொது நோக்க CPU பாதையில் இல்லாமல் தொலை GPU நினைவகத்தை முகவரியிடக்கூடியதாக்குங்கள். NVLink மற்றும் GPUDirect அதை ஒரு vendor-இன் stack-க்குள் தீர்க்கின்றன. ஒரு திறந்த, PCIe-அடிப்படையிலான மாற்று அதே திறமையின்மையை அகற்ற வேண்டும் — அதனால்தான் பதிவுகள் 32–33-இன் TLP-நிலை peer பாதையும், இந்தப் பதிவின் "அர்ப்பணிக்கப்பட்ட இணைப்பு ஏன் உள்ளது" என்பதும் அதே கதை.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

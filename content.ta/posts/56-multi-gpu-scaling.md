---
title: "Multi-GPU Scaling"
date: 2026-01-01
draft: false
phase: "9 — GPU-கள் மற்றும் Parallel Compute"
series_index: 56
tags: []
summary: "ஒரு GPU வரையறுக்கப்பட்டது — GPU-களுக்கு இடையேயான interconnect அடுத்த சுவர் ஆகிறது"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean animation — direct tie-in to BridgeStack GPU memory fabric"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

ஒற்றை GPU-க்கு வரையறுக்கப்பட்ட compute மற்றும் வரையறுக்கப்பட்ட HBM (பதிவு 54) உண்டு. இன்றைய மிகப் பெரிய மாதிரிகளுக்குப் பல GPU-கள் தேவை — ஒரு server-இல், பிறகு ஒரு cluster குறுக்கே — மற்றும் அந்த GPU-கள் ஒருவருக்கொருவர் எப்படிப் பேசுகின்றன என்பது எந்த ஒற்றை GPU-வின் peak specs போலவே உண்மையான throughput-ஐ அடிக்கடி தீர்மானிக்கும்.

## வேலையைப் பிரிப்பது இலவசம் அல்ல

பதிவு 46 data-parallel மற்றும் model-parallel பிரிவுகள் ஏன் அடிக்கடி அவசியம் என்பதை உள்ளடக்கியது. திறன் GPU-கள் தரவை எவ்வளவு வேகமாகப் பரிமாறிக்கொள்கின்றன என்பதைப் பொறுத்தது. ஒவ்வொரு GPU-வின் compute-க்கு ஒப்பீட்டில் தொடர்பு மெதுவாக இருந்தால், peers ஒருவருக்கொருவர் காத்திருந்து stall ஆகும் — memory wall (பதிவு 35) மீண்டும், CPU-to-DRAM-க்குப் பதிலாக GPU-to-GPU இணைப்புகளுக்குப் பயன்படுத்தப்பட்டது.

## ஒரு Server-க்குள் நேரடி பாதைகள்

பதிவு 37 NVLink-ஐ CPU-மத்தியஸ்த PCIe பாதையைத் தவிர்க்கும் உயர்-bandwidth GPU-to-GPU interconnect-ஆக அறிமுகப்படுத்தியது. ஒரு server-க்குள், NVSwitch அதை all-to-all ஆக்குகிறது: ஒவ்வொரு GPU-வும் மற்ற ஒவ்வொன்றையும் PCIe மற்றும் host வழியாக அல்லாமல் NVLink bandwidth-இல் அடையும். பெரிய gradients-ஐ தொடர்ந்து பரிமாறும் workloads-க்கு, அந்த நேரடி பாதை தனிமைப்படுத்தப்பட்ட peak-FLOPS எண்ணை விட அடையப்பட்ட பயிற்சி throughput-ஐ அடிக்கடி தீர்மானிக்கும்.

## ஒரு Box-க்கு அப்பால்

பெரிய பயிற்சி பல servers குறுக்கே நீளும். பதிவு 42-இன் RDMA கருத்துக்கள் திரும்பும்: GPUDirect RDMA ஒரு network adapter-ஐ host DRAM வழியாக கூடுதல் நகல்கள் இல்லாமல் servers குறுக்கே GPU நினைவகத்தைப் படிக்க அல்லது எழுத அனுமதிக்கும் — அதே "hops குறைக்கவும், நேரடி bandwidth அதிகரிக்கவும்" பந்தயம், இப்போது cluster அளவில்.

## இந்தத் தொடர் தொடர்ந்து பெயரிடும் தத்துவம்

நேரடி GPU-to-GPU பாதைகள், தேவையற்ற hops குறைவு, interconnect முதல்-தர கட்டுப்பாடாக — இந்தத் தொடர் குறிப்பிட்ட தனிப்பயன் GPU memory fabric பின்னால் உள்ள அதே தத்துவம்: ஒரு vendor-இன் stack-க்குள் proprietary GPU fabrics செய்வதற்குத் திறந்த, PCIe-அடிப்படையிலான அணுகுமுறை. Phase 10 நூலை உண்மையான datacenter அளவில் எடுக்கும் — ஒரு box-இல் சில GPU-கள் அல்ல, ஆனால் ஒரு பயிற்சி cluster குறுக்கே ஆயிரக்கணக்கானவை, மொத்த தத்துவார்த்த compute ஒருங்கிணைப்பில் இழக்காதபடி கம்பி இணைக்கப்பட்டவை.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

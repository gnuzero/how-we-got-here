---
title: "GPU Memory Hierarchy"
weight: 54
date: 2026-01-01
draft: false
phase: "9 — GPU-கள் மற்றும் Parallel Compute"
series_index: 54
tags: []
summary: "ஆயிரக்கணக்கான threads DDR-க்கு மேல் bandwidth கட்டாயப்படுத்துகின்றன — HBM நினைவகத்தை compute அருகில் அடுக்கும்"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

பதிவு 35 memory wall-ஐப் பெயரிட்டது: DRAM latency compute-ஐப் பின்தங்கினது, எனவே latency பிடிவாதமாக இருந்த இடத்தில் தொழில் *bandwidth*-ஐத் துரத்தியது. அந்தப் பதில் GPU நினைவகத்தை விட எங்கும் விளைவுமிக்கதல்ல — பதிவுகள் 52–53-இன் parallel throughput வழக்கமான DDR (பதிவு 34) உணவளிக்க முடியாத பசியை உருவாக்குகிறது.

## GPU-கள் ஏன் CPU-பாணி நினைவகத்தில் பட்டினி கிடக்கின்றன

ஒரு CPU மிதமான எண்ணிக்கையிலான அறிவுறுத்தல் ஓடைகளை ஓட்டும்; caches (பதிவு 15) அடிக்கடி working set-ஐ உறிஞ்சும். ஒரு GPU பல SM-கள் குறுக்கே ஆயிரக்கணக்கான threads ஒரே நேரத்தில் நினைவகம் வேண்டும். On-chip caching உதவும், ஆனால் மொத்த bandwidth தேவை ஒத்த ஆற்றலில் ஒரு CPU நினைவக அமைப்பை விட நாடகரீதியாக உயர்ந்தது — வேறுபட்ட இயற்பியல் பதிலைக் கட்டாயப்படுத்திய கட்டுப்பாடு.

## HBM: Die அருகில் அடுக்குங்கள்

High Bandwidth Memory DRAM dies-ஐச் செங்குத்தாக அடுக்கி, தனியான DIMM-க்கு நீண்ட PCB traces-க்குப் பதிலாக through-silicon vias (TSV-கள்) வழியாக இணைக்கிறது. மிக அகலமான இடைமுகத்துடன் இணைந்து, அது சமமான DDR-ஐ விட வெகு அதிக bandwidth வழங்கும் — பதிவு 51-இன் advanced packaging-இல் செலுத்தப்பட்டது. HBM மற்றும் GPU compute die பொதுவாக ஒரு silicon interposer பகிரும்: chiplets-க்குப் பயன்படுத்தப்பட்ட அதே packaging குடும்பம், இங்கே செயல்பாட்டு dies-ஐப் பிரிக்காமல் நினைவகத்தை compute *அருகில்* வைக்கப் பயன்படுத்தப்பட்டது.

## GPU-க்குள்ளேயே Hierarchy

HBM-vs-DDR-க்கு அப்பால், GPU-க்குத் தன் சொந்த பிரமிடு உண்டு, பதிவு 10-இன் register–cache–main-memory வடிவத்தை GPU-குறிப்பிட்ட அடுக்குகளுடன் எதிரொலிக்கும். ஒவ்வொரு SM-இன் register file வேகமான உள்ளூர் சேமிப்பு. Shared memory — SM-இல் நிரலாளர்-நிர்வகிக்கும் scratchpad — ஒரு block-இல் threads தரவை மேலும் தொலைவுக்குச் சுற்றிச் செல்லாமல் பகிர அனுமதிக்கும். ஒரு L2 cache முழு GPU-வையும் உள்ளடக்கும். HBM "main memory" அடுக்கு: CPU DRAM-ஐ விட மிக உயர் bandwidth, on-chip எதையும் விட இன்னும் உயர் latency — அதே latency-vs-capacity tradeoff, GPU அளவில்.

## அடுத்து வருவதை உணவளித்தல்

இந்தக் கட்டமைப்பு மிகப் பெரிய compute பசியை உணவளிக்கவே உள்ளது. Peak FLOPS, operands வரவும் முடிவுகள் வெளியேறவும் முடியாவிட்டால் ஒன்றுமில்லை. அடுத்த பதிவின் tensor cores HBM-இன் bandwidth வழங்கக் கட்டப்பட்ட compute கட்டமைப்பு — bandwidth framing-ஐ முன்னோக்கிச் சுமந்து செல்லுங்கள்: ஒரு tensor core-இன் peak, அதைத் தாங்கக்கூடிய நினைவக அமைப்புக்கு எதிராக மட்டுமே அர்த்தம் கொள்ளும்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

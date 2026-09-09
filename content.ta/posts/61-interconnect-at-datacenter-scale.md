---
title: "Datacenter அளவில் Interconnect"
weight: 62
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 61
tags: []
summary: "ஆயிரக்கணக்கான GPU-கள் — topology மற்றும் all-reduce எந்த chip-இன் peak FLOPS போலவே முக்கியம்"
image_prompt: "System diagram of a multi-rack AI training cluster showing a fat-tree network topology, clean datacenter network architecture diagram style"
video_prompt: "25-second animation: a datacenter-scale fat-tree topology with an all-reduce operation propagating gradient data, clean technical animation"
schematics: "Diagram: rail-optimized fat-tree topology + all-reduce ring/tree communication pattern"
---

பதிவு 56 சில servers-க்குள் மற்றும் குறுக்கே multi-GPU scaling-ஐ உள்ளடக்கியது — NVLink, NVSwitch, GPUDirect RDMA. பெரிய அளவிலான பயிற்சி மற்றொரு அளவு வரிசை: நூற்றுக்கணக்கான முதல் ஆயிரக்கணக்கான servers குறுக்கே ஆயிரக்கணக்கான முதல் பத்தாயிரக்கணக்கான GPU-கள். அவற்றை எப்படிக் கம்பி இணைக்கிறீர்கள் என்பது எந்தத் தனி GPU-வின் specs போலவே முக்கியம்.

## Naive Wiring அளவிடாது

ஒவ்வொரு server-ஐயும் மற்ற ஒவ்வொன்றுடன் இணைப்பது இணைப்புகளை இருபடி வளர்க்கும் — ஆயிரக்கணக்கான nodes-க்கு முன்பே அபத்தம். உண்மையான clusters படிநிலை switching பயன்படுத்தும்; தேர்ந்தெடுக்கப்பட்ட அமைப்பு அடையக்கூடிய bandwidth மற்றும் கனமான பயிற்சி போக்கின் கீழ் அந்த bandwidth எவ்வளவு *சமமாக* நிற்கிறது என்பதையும் தீர்மானிக்கும்.

## Fat-Tree, பயிற்சிக்குச் சரிசெய்யப்பட்டது

ஒரு fat-tree switches-ஐ அடுக்கும் — servers-இல் leaf switches, leaves-ஐ இணைக்கும் spine switches — உயர் (இலட்சியமாக non-oversubscribed) bisection bandwidth இலக்கு; உண்மையான AI clusters இன்னும் oversubscribe செய்யலாம் அல்லது rail-optimized மாறுபாடுகள் பயன்படுத்தலாம். இது பதிவு 42-இன் datacenter வலையமைப்புக் கருத்து ஆயிரக்கணக்கான-GPU ஆட்சியில்.

Rail-optimized வடிவமைப்புகள் பெரிய பயிற்சி வேலைகள் உண்மையில் உருவாக்கும் தொடர்பு patterns-ஐச் சுற்றி மேலும் சரிசெய்யும் — பொதுவான datacenter போக்கு அல்ல. பயிற்சி போக்கு வேறு; அதற்காகக் கட்டப்பட்ட topology பொதுவான ஒன்றை வெல்லலாம்.

## All-Reduce கட்டுப்படுத்தும் Pattern

Data-parallel பயிற்சி (பதிவு 46) ஒவ்வொரு படிநிலையிலும் பங்கேற்கும் ஒவ்வொரு GPU குறுக்கே gradients ஒத்திசைக்க வேண்டும் — ஒவ்வொரு batch slice-இலிருந்து உள்ளூர் gradients, பிறகு அடுத்த படிக்கு முன் இணைக்கவும் (பொதுவாக சராசரி). அந்த all-reduce முழுப் பயிற்சி ஓட்டம் முழுவதும் தொடர்ந்து ஓடும். அதன் திறன் மூல bandwidth *மற்றும்* topology-ஐப் பொறுத்தது: ring அல்லது tree அல்காரிதங்கள் தத்துவார்த்த மொத்த peak மட்டும் அல்ல, இயற்பியல் கம்பியை உணரும்.

## Topology Spec Sheets-ஐ வெல்லலாம்

மோசமாக வடிவமைக்கப்பட்ட அல்லது oversubscribed fabric-இல் சிறந்த GPU-கள் கவனமாக rail-optimized வலையமைப்பில் மிதமான GPU-களுக்குத் தோற்கலாம் — ஏனெனில் all-reduce bottleneck ஆகிறது, எந்த chip-இன் peak FLOPS அல்ல. தொடர் தீம் மீண்டும்: கூறு specs (டிரான்சிஸ்டர் எண்ணிக்கை, clock, peak FLOPS) கதையின் ஒரு பகுதி மட்டும். பாகங்கள் எப்படி இணைக்கப்படுகின்றன — ஒரு chip-இன் buses (Phase 5) முதல் ஒரு பயிற்சி cluster-இன் topology வரை — அடிக்கடி உண்மையில் அடையப்பட்ட செயல்திறனைத் தீர்மானிக்கும்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

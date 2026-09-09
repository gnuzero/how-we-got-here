---
title: "CUDA Cores, Warps மற்றும் Occupancy"
weight: 54
date: 2026-01-01
draft: false
phase: "9 — GPU-கள் மற்றும் Parallel Compute"
series_index: 53
tags: []
summary: "SIMT, SM-கள் மற்றும் warps மீது வரைபடமாகிறது — divergence வரை lockstep வெல்லும்; occupancy memory stall-களை மறைக்கும்"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

பதிவு 52 GPU-கள் ஏன் மிகப் பெரிய parallel SIMT மீது பந்தயம் கட்டுகின்றன என்பதை உள்ளடக்கியது. இந்தப் பதிவு உறுதியான வரைபடம்: Streaming Multiprocessors, warps மற்றும் occupancy — அந்த parallel வன்பொருள் உண்மையில் எவ்வளவு முழுமையாகப் பயன்படுத்தப்படுகிறது.

## Streaming Multiprocessor

ஒரு GPU பல Streaming Multiprocessors (SM-கள்) — ஒவ்வொன்றும் பெரும்பாலும் தன்னிறைவான parallel அலகு, பல எளிய CUDA cores (ALU-பாணி lanes, Phase 3 CPU core-ஐ விட வேண்டுமென்றே மிகக் குறைந்த சிக்கலானவை: out-of-order execution இல்லை, பதிவு 14 வகை refined branch prediction இல்லை), ஒரு warp scheduler, மற்றும் resident threads பகிரும் register file. பெரும்பாலும் சுயாதீனமாக ஓடும் பத்துக்கணக்கான SM-கள் ஒரு GPU-வின் மொத்த parallelism-இன் மூலம் — ஒரு CPU-வின் சில சிக்கலான cores-க்கு எதிராக.

## Warps: Lockstep அலகாக

ஒரு SM-இல் threads warps-ஆகக் குழுவாக்கப்படும் — NVIDIA வன்பொருளில் எப்போதும் 32 threads (AMD wavefronts வரலாற்றில் 64 பயன்படுத்தியது). ஒரு warp பதிவு 52-இன் SIMT அமல்படுத்தப்படும் நுணுக்கம்: எல்லா 32-உம் *அதே* அறிவுறுத்தலை *அதே* cycle-இல் இயக்கும், ஒவ்வொன்றும் தன் தரவில். அதுதான் "ஒரு பகிரப்பட்ட கட்டுப்பாட்டு அலகு, பல lanes" என்பதன் வன்பொருள் வடிவம்.

## Branch Divergence: Lockstep செலவாகும் இடம்

ஒரு warp-*க்குள்* threads வெவ்வேறு branches எடுக்கும்போது, வன்பொருள் இரு பாதைகளையும் வரிசையாக இயக்கி செயலற்ற பாதியை mask செய்யும். ஒவ்வொரு thread-க்கும் ஒன்று மட்டுமே தேவைப்பட்டாலும் warp இரு பாதைகளின் நீளம் எடுக்கும் — non-divergent வழக்கை மலிவாக்கும் அதே lockstep-இன் நேரடி வரி. ஒரு warp-இல் threads-ஐ அதே பாதையில் வைத்திருப்பது எனவே உண்மையான மேம்படுத்தல், பாணி விருப்பம் அல்ல.

## Occupancy: தயாரான வேலையால் Latency மறைத்தல்

ஒரு SM-க்கு வரையறுக்கப்பட்ட registers மற்றும் shared memory உண்டு; ஒவ்வொரு resident warp-உம் ஒரு பங்கை நுகரும். Occupancy என்பது வன்பொருள் ஆதரிக்கக்கூடியதற்கு ஒப்பீட்டில் எத்தனை warps resident மற்றும் தகுதியானவை. உயர் occupancy memory latency மறைக்க உதவும் (பதிவு 35 மீண்டும்): ஒரு warp மெதுவான அணுகலில் stall ஆகும்போது, scheduler தயாரான warp-க்கு மாறி lanes-ஐ வேலையில் வைக்கும்.

அது "அதிகரித்து நிறுத்துங்கள்" அல்ல. ஒரு thread-க்கு அதிக registers அல்லது shared memory பயன்படுத்தும் kernel குறைவான warps ஓட்டினாலும், அந்த வளங்கள் தேவையற்ற வேலை அல்லது memory போக்கை வெட்டினால் வேகமாக முடியலாம். Occupancy மற்றும் per-thread வளங்கள் உண்மையான tradeoff — சுருக்கத்தில் மட்டும் அல்ல, kernels உண்மையான சிலிகானைச் சந்திக்கும்போது தோன்றும் ஒன்று.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

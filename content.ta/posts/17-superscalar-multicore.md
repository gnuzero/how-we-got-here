---
title: "Superscalar & Multicore"
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 17
tags: []
summary: "ILP மற்றும் மின்சாரம் சுவர்களை மோதின — எனவே தொழில் ஒரு thread-க்கு வேகத்திற்குப் பதிலாக அகலத்திற்குச் சென்றது"
image_prompt: "Comparison infographic: single-core deep pipeline vs multicore chip layout, clean technical style"
video_prompt: "20-second animation: a single core hitting a power wall, transitioning to multicore, clean motion graphics"
schematics: "Diagram: ILP vs clock-speed diminishing returns graph + multicore die floorplan"
---

Out-of-order issue, ஆழமான pipeline-கள், அகலமான superscalar அகலம் — இந்தக் கட்டத்தில் இதுவரை உள்ள அனைத்தும் *ஒரு* அறிவுறுத்தல் ஓடையிலிருந்து அதிக Instruction-Level Parallelism (ILP) பிரித்தெடுக்கிறது. 2000-களின் நடுவில் அந்த அணுகுமுறை உத்தியை மாற்றும் அளவுக்குக் கடினமாக ஒரு கூரையை மோதியது.

## ஒரே நேரத்தில் இரண்டு சுவர்கள்

உண்மையான நிரல்கள் வரம்பற்ற சுதந்திரமான வேலையை வழங்குவதில்லை. கிளைகள், உண்மையான data dependencies, மற்றும் நினைவக latency ஒரே ஓடையிலிருந்து எத்தனை அறிவுறுத்தல்கள் இணையாக ஓட முடியும் என்பதை வரம்பிடுகின்றன. பெரிய ROB-கள், அதிக reservation stations, அகலமான issue: வளரும் பரப்பு மற்றும் மின்சாரத்திற்குக் குறைந்துவரும் வருவாய். அது ஒரு கட்டமைப்புச் சுவர்.

அதே நேரத்தில், dynamic மின்சாரம் தோராயமாக capacitance, அதிர்வெண், மற்றும் மின்னழுத்தத்தின் வர்க்கத்துடன் அளவிடுகிறது (P ≈ CV²f). ILP-இன் குறைந்துவரும் ஆதாயங்களுக்கு ஈடுசெய்ய clocks-ஐ உயர்த்துவது வெப்பத்தை மோதியது — பதிவு 36 விரிவாக உள்ளடக்கும் clock-speed சுவர். இரண்டு சுதந்திரமான கூரைகள், 2000-களின் நடுவில், எதுவுக்கும் சுத்தமான தனித் தீர்வு இல்லை.

## வேகத்திற்குப் பதிலாக அகலம்

திருப்பம்: ஒரு core ஒரு சுழற்சிக்கு அதிகம் செய்யச் செய்வதை நிறுத்துங்கள்; அதே die-இல் பல, சற்று எளிமையான cores வையுங்கள், ஒவ்வொன்றும் தன் சொந்த ஓடையுடன். Chip throughput ஏறத் தொடரலாம், per-core சிக்கலும் clocks-ம் நிலைபெறும்போது — அந்த cores-க்குக் கொடுக்க இணையான வேலை இருந்தால்.

"வேகமானது" பொருள் மாறியது. ஒரு single-threaded நிரல் நான்கு cores-க்கு எதிராக எட்டு cores-இல் தானாக வெல்வதில்லை; அது இன்னும் ஒரு core-இல் தோராயமாக அதே clock-இல் ஓடுகிறது. Multicore ஆதாயம் பல threads-க்கு எழுதப்பட்ட (அல்லது தொகுக்கப்பட்ட) workloads-க்கு மட்டுமே தோன்றுகிறது. ILP காலம் பெரும்பாலும் ஒவ்வொரு தலைமுறையும் single-thread வேக உயர்வுகளை "இலவசமாக" கொடுத்தது; இந்தக் காலம் parallel-அறிந்த மென்பொருளைக் கோருகிறது.

## திருப்பம் எங்கு சுட்டுகிறது

அதே விசை — ஒரு சிக்கலான ஒன்றுக்குப் பதிலாக பல எளிமையான அலகுகள் — GPU-களுக்குப் (Phase 9) பின்னால் உள்ள தத்துவம் மேலும் எடுக்கப்பட்டது. Parallel வேலையைச் சரியாக ஒருங்கிணைப்பது ஏன் real-time அமைப்புகளில் (Phase 4) மற்றும் விநியோகிக்கப்பட்ட அமைப்புகளில் (Phase 7) முதன்மைப் பிரச்சனையாகிறது என்பதற்குக் காரணமும் இது: அடுத்த சிப் ஒரு thread-ஐ வேகமாக்கும் வரை காத்திருப்பது இனி முக்கிய வளர்ச்சிப் பாதை அல்ல.

**Door out:** Kunle Olukotun, Basem A. Nayfeh, Lance Hammond, Ken Wilson, and Kunyung Chang, "The Case for a Single-Chip Multiprocessor" (ASPLOS 1996) — ILP வருவாய் தட்டையாகும்போது ஒரு die-இல் பல cores வைப்பதற்கான ஆரம்ப, வெளிப்படையான வாதம்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

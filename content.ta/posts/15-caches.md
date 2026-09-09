---
title: "Caches"
weight: 15
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 15
tags: []
summary: "Locality நினைவகப் படிநிலையை வேலை செய்ய வைக்கிறது; associativity மற்றும் coherence அதை நேர்மையாக வைக்கும் செலவுகள்"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

பதிவு 10 நினைவகப் படிநிலையை அமைத்தது: பதிவேடுகள், SRAM cache, DRAM, வட்டு — ஒவ்வொரு படியிலும் கொள்ளளவு வேகத்திற்கு வர்த்தகம் செய்யப்படுகிறது. Cache-கள் அந்த வர்த்தகம் ஒவ்வொரு CPU-இன் செயல்திறனையும் சுமக்கும் இடம். முன்நிபந்தனை உண்மையான நிரல்களைப் பற்றிய ஒரு அனுபவ உண்மை: **locality**.

## Cache-கள் ஏன் வேலை செய்கின்றன

**Temporal locality** — சற்று முன் தொட்ட இடம் விரைவில் மீண்டும் தொடப்பட வாய்ப்பு (loop மாறிகள், hot குறியீடு). **Spatial locality** — அருகிலுள்ள இடங்கள் அடுத்ததாக வாய்ப்பு (arrays, sequential fetch). Cache-கள் சமீபத்தில் பயன்படுத்தப்பட்ட தரவை அருகில் வைக்கின்றன, மற்றும் miss-இல் முழு *line*-களையும் (அடிக்கடி 64 பைட்கள்) fetch செய்கின்றன, அண்டைகள் விரைவில் வரும் என்று பந்தயம் கட்டி.

Lookup ஒரு முகவரியை **offset** (line-இல் பைட்), **index** (எந்த set), மற்றும் **tag** (இருக்கும் line நாம் விரும்புவதுதானா?) ஆகப் பிரிக்கிறது.

## ஒரு Line எங்கே வாழ முடியும்

**Direct-mapped** — முகவரிக்கு ஒரு சாத்தியமான slot. வேகமான சரிபார்ப்பு; இரண்டு hot முகவரிகள் ஒரு index-ஐப் பகிர்ந்து ஒன்றையொன்று thrash செய்யும்போது conflict miss-கள்.

**Fully associative** — எந்த line, எந்த slot. Conflict miss இல்லை; ஒவ்வொரு அணுகலும் ஒவ்வொரு tag-ஐ ஒப்பிடுகிறது. அளவிடாது.

**Set-associative** — நடைமுறை நடு: index ஒரு சிறிய set-ஐத் தேர்ந்தெடுக்கிறது (எடுத்துக்காட்டாக 8 ways); tag-கள் அங்கே மட்டும் சரிபார்க்கப்படுகின்றன. பெரும்பாலான நெகிழ்வுத்தன்மை, முழு scan-ஐ விட மிகக் குறைந்த வன்பொருள். கிட்டத்தட்ட ஒவ்வொரு உண்மையான cache-ம் இங்கே அமர்கிறது.

## Multicore: புதிய கட்டுப்பாடாக Coherence

ஒரு core, ஒரு தனியார் cache: நன்றாக. பல cores, ஒவ்வொன்றும் ஒரு cache: core A ஒரு line-ஐ எழுதும்போது core B இன்னும் வைத்திருக்கிறது — நெறிமுறை இல்லாமல், B என்றென்றும் stale-ஐப் படிக்கும். MESI (Modified, Exclusive, Shared, Invalid) செவ்வியல் பதில்: ஒவ்வொரு line-ஐயும் ஒரு நிலையுடன் குறிக்கவும், மற்றும் மாற்றங்களைத் தொடர்பு கொள்ளவும் (bus snoop அல்லது directory) எழுத்து வேறிடங்களில் உள்ள நகல்களை invalidate அல்லது update செய்யும்படி.

Coherence இலவசம் அல்ல, மற்றும் அதன் செலவு core எண்ணிக்கையுடன் வளர்கிறது — "வெறும் cores சேர்க்குங்கள்" (பதிவு 17) தன் சொந்தக் குறைந்துவரும் வருவாயைக் கொண்டதற்கு ஒரு காரணம், ILP வரம்புகளிலிருந்து தனியானது.

**Door out:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — மெதுவான முதன்மை நினைவகத்திற்கு அருகில் வேகமான slave store-ஆக cache யோசனையின் ஆரம்பக் கூற்று.

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (கேச் நினைவகம் — அறிமுக வகைகள், associativity / MESI அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

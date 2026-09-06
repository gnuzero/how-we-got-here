---
title: "The Clock Speed Wall"
date: 2026-01-01
draft: false
phase: "5 — பஸ் மற்றும் அமைப்புக் கட்டமைப்பு"
series_index: 36
tags: []
summary: "அதிர்வெண் வெப்பத்தை மோதியது — எனவே தொழில் அகலத்திற்குச் சென்றது (cores, பிறகு fabrics) வேகமான clocks-க்குப் பதிலாக"
image_prompt: "Graph infographic: CPU clock frequency climbing then flattening around 2005, power density curve rising toward a thermal ceiling, clean data-visualization diagram style"
video_prompt: "20-second animation: a CPU die heating up as frequency is pushed higher, hitting a thermal ceiling, then splitting into multicore, clean technical animation"
schematics: "Diagram: clock frequency vs year graph + power density (P=CV²f) scaling curve + single-core-vs-multicore comparison"
---

பதிவு 35 நினைவகப் பக்கச் சுவர்: DRAM latency CPU-ஐத் தொடரத் தவறியது. இது கிட்டத்தட்ட அதே தருணத்தில் இறங்கிய compute-பக்கச் சுவர். ஒன்றாக — ஒன்று மட்டும் அல்ல — அவை தொழில் ஏன் multicore-க்கு (பதிவு 17) மற்றும், பின்னர், பதிவு 37-இன் fabrics-க்குத் திரும்பியது என்பதற்குக் காரணம்.

## வளைந்த வளைவு

Clock அதிர்வெண் 1980-களிலிருந்து 2000-களின் ஆரம்பம் வரை ஏறியது, பிறகு சுமார் 2004–2005-இல் தட்டையானது. Desktop பாகங்கள் 4 GHz அருகில் இருந்தன; குறுகிய விதிவிலக்குகளுடன், mainstream clocks உயர்வதை நிறுத்தின transistor எண்ணிக்கைகள் (Moore's Law, Phase 8) தொடர்ந்து ஏறும்போதும். பத்தாண்டுகளாக அந்த இரண்டும் ஒன்றாக நகர்ந்தன. பிறகு நகரவில்லை.

## P ≈ CV²f, மற்றும் மின்னழுத்தக் காரணி

CMOS-இல் dynamic மின்சாரம் தோராயமாக capacitance × மின்னழுத்தத்தின் வர்க்கம் × அதிர்வெண். அதிர்வெண் மட்டும் மின்சாரத்தில் நேரியல் — சங்கடமானது, கொல்லும் அல்ல. நிலையான process-இல், வேகமான clock அடிக்கடி நம்பகமாக இருக்க உயர்ந்த supply தேவைப்பட்டது, மற்றும் மின்னழுத்தம் *வர்க்கம்*. அதிர்வெண்ணும் மின்னழுத்தமும் ஒன்றாக உயர்வது கூட்டுகிறது. 2000-களின் நடுச் சுவர் Dennard scaling உடைந்ததும் leakage மேலும் மின்னழுத்தக் குறைப்புகளை வரம்பிட்டதும். வெப்பம், தவறவிட்ட சுற்றுத் தந்திரம் அல்ல.

## வெப்பக் கூரை, Skew போன்ற வகை

வெப்பமாக மாறும் மின்சாரம் die-ஐ விட்டு வெளியேற வேண்டும் அல்லது chip throttle செய்கிறது (வடிவமைப்பால்) அல்லது, மோசமாக, தோல்வியடைகிறது. 2000-களின் நடுவில், mainstream காற்றுக் குளிர்ச்சி ஏற்கனவே தன் பயனுள்ள வரம்பிற்கு அருகில் இருந்தது. Clocks-ஐ — மற்றும் அவற்றுடன் வந்த மின்னழுத்தத்தை — மேலும் தள்ளுவது பொருளாதாரக் குளிர்ச்சி அகற்ற முடியாத மின்சார அடர்த்திகளைக் குறித்தது. பதிவு 32-இன் parallel-bus skew போன்ற வகை: இயற்பியல் கூரை, சுற்றி வழி நடத்தும் வடிவமைப்பு திறமையின்மை அல்ல.

## வேகத்திற்குப் பதிலாக அகலம்

குறைந்துவரும் ILP (பதிவு 17) *மற்றும்* ஒரு core-இல் கடின மின்சாரக் கூரை: ஒரு core-ஐ வேகமாக்குவதை நிறுத்துங்கள்; die-இல் பலவற்றை வையுங்கள், ஒவ்வொன்றும் மிதமான, அதிக திறன்மிக்க clock-இல். Aggregate throughput இன்னும் ஏறலாம். எந்த ஒரு core-ம் அதிர்வெண்ணை நிறுத்திய வெப்பக் கோட்டைக் கடக்கத் தேவையில்லை.

## இரண்டு சுவர்கள், ஒரு திருப்பம்

Memory wall என்பது DRAM latency compute-ஐ இழப்பது. Clock-speed wall என்பது compute தானே வெப்பத்தை மோதுவது. வேறு இயற்பியல், அதே பத்தாண்டு. ஒன்றாக அவை "ஒரு core-ஐ வேகமாக்குங்கள்" வளர்ச்சிக் கதையாக முடித்து "அதிக cores — மற்றும், அதிகரித்து, வேலையைச் சிறப்பு parallel வன்பொருளுக்கு நகர்த்துங்கள், பிறகு அந்த அலகுகளை பொது நோக்க CPU வழியாகத் திரும்பாமல் இணைக்கவும்" என்பதைக் கட்டாயப்படுத்தின. அந்தக் கடைசி வாக்கியம் பதிவு 37, மற்றும் பின்னர் GPU-கள் (Phase 9) மற்றும் accelerators (Phase 10).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

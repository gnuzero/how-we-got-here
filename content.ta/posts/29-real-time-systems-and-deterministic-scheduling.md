---
title: "Real-Time அமைப்புகள் மற்றும் Deterministic Scheduling"
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 29
tags: []
summary: "Throughput மற்றும் நியாயம் காலக்கெடு அல்ல — hard real-time-க்கு சராசரி வேகம் அல்ல, வரம்புடைய மோசமான-வழக்கு நேரம் தேவை"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

Phase 4-இல் இதுவரை உள்ள எல்லாம் — batch, time-sharing, virtual memory, containers — throughput, நியாயம், அல்லது திறமையான பகிர்வுக்கு optimize செய்கிறது. கொடுக்கப்பட்ட வேலை *எப்போது* முடிகிறது என்பதற்கு எதுவும் கடின உத்தரவாதம் கொடுக்கவில்லை. Real-time அமைப்புகள் அந்த உத்தரவாதத்தைக் கவனிக்கின்றன. "வேகமானது" "real-time"-இலிருந்து வேறு பண்பு — மக்களைத் தொடர்ந்து தவறாக வழிநடத்தும் வேறுபாடு.

## வேகமானது Deterministic அல்ல

பொது நோக்க scheduler (பதிவுகள் 21–25) நல்ல *சராசரி-வழக்கு* பதிலளிப்புத்திறன் மற்றும் நியாயமான பகிர்வுக்கு optimize செய்கிறது — பொதுவான வழக்கில் வழக்கமாக மிக வேகமானது. "வழக்கமாக வேகமானது" "குறிப்பிட்ட காலக்கெடுவுக்குள் எப்போதும் முடிகிறது, விதிவிலக்கு இல்லை" அல்ல. Cache விளைவுகள், interrupt கையாளல், அல்லது garbage-collection இடைநிறுத்தங்கள் (பதிவு 28) தாமதத்தை நீட்டிக்கலாம். பெரும்பாலான பயன்பாடுகளுக்கு அவ்வப்போதைய மாறுபாடு முக்கியமல்ல. Real-time அமைப்புக்கு, அது முழு விளையாட்டாக இருக்கலாம்.

## Hard எதிர் Soft

**Hard** காலக்கெடு: தவறுவது முழு அமைப்புத் தோல்வி — தரங்குறைந்த செயல்திறன் அல்ல. விமானக் கட்டுப்பாட்டு நிலைப்படுத்தல், airbag வெளிப்பாடு — ஒவ்வொரு முறையும், சாளரத்திற்குள், அல்லது தோல்வி பேரழிவாக இருக்கலாம்.

**Soft** காலக்கெடு: தவறுவது தரத்தைக் குறைக்கிறது ஆனால் வெளிப்படையான தோல்வி அல்ல — சுமையின் கீழ் விடப்பட்ட வீடியோ frame விரும்பத்தகாதது, சான்றிதழ் நெருக்கடி அல்ல. காலக்கெடுவைத் தாக்க வலுவான நடைமுறைப் போக்கு; வன்பொருள்-அமல்படுத்தப்பட்ட உத்தரவாதம் அல்ல.

## Rate-Monotonic Scheduling

Hard real-time-க்கு ஒரு செவ்வியல் அணுகுமுறை: rate-monotonic scheduling — ஒவ்வொரு காலமுறை task-க்கும் அது எவ்வளவு அடிக்கடி ஓட வேண்டும் என்பதிலிருந்து நிலையான முன்னுரிமை ஒதுக்குங்கள்; குறுகிய காலம் → உயர் முன்னுரிமை. காலமுறை task தொகுப்புகளின் நன்கு வரையறுக்கப்பட்ட வகுப்பிற்கு நிலையான-முன்னுரிமை வழிமுறைகளிடையே நிரூபிக்கப்பட்டபடி உகந்தது: அந்த workload-க்கு *ஏதேனும்* நிலையான-முன்னுரிமை ஒதுக்கீடு ஒவ்வொரு காலக்கெடுவையும் தாக்க முடிந்தால், rate-monotonic-ம் தாக்கும். கணித schedulability வரம்பு — hard real-time அமைப்புகள் சான்றளிக்கத் தேவையான சரியான வகையான முறையான பண்பு.

## ஏன் வேறு வகையான OS

இந்த உத்தரவாதங்களைச் சந்திக்க வரம்புடைய மோசமான-வழக்கு நேரத்தைச் சுற்றி வடிவமைக்கப்பட்ட OS தேவை — Real-Time Operating System (RTOS) — பதிவுகள் 21–25-இன் throughput/நியாய வம்சாவளி அல்ல. Interrupt latency வரம்புடையதும் அறியப்பட்டதும் இருக்க வேண்டும். நினைவக ஒதுக்கீடு பொதுவாக பொது நோக்க GC போன்ற கணிக்க முடியாத-latency பொறிமுறைகளை நம்ப முடியாது. Mutex கூட கவனமாக வடிவமைக்கப்பட வேண்டும் (priority inheritance) குறைந்த-முன்னுரிமை task உயர்-முன்னுரிமை ஒன்றை வரம்பில்லாத நேரம் தடுக்காதபடி — priority inversion, செவ்வியல் real-time ஆபத்து.

இந்த லென்ஸ் வழியாக mini-CPU lab-ஐ மீண்டும் பாருங்கள்: எளிய வன்பொருளில், ஒவ்வொரு அறிவுறுத்தலின் நேரமும் deterministic மற்றும் எண்ணக்கூடியது — அமைப்புகள் சிக்கலாக வளரும்போது RTOS வடிவமைப்பு பாதுகாக்கப் போராடும் கணிக்கக்கூடிய தன்மை. அடுத்த பதிவு இந்தக் கொள்கைகளை avionics, தொழில்துறை கட்டுப்பாடு, மற்றும் உத்தரவாதங்கள் சுமைதாங்கும் embedded deployments-க்குள் கொண்டு செல்கிறது.

{{< lab type="mini-cpu" >}}

**Door out:** C. L. Liu and James W. Layland, "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment" (*Journal of the ACM*, 1973) — rate-monotonic scheduling மற்றும் செவ்வியல் hard-real-time schedulability பின்னால் உள்ள முதன்மைக் கட்டுரை.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

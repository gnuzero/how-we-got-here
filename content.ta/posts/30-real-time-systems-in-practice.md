---
title: "நடைமுறையில் Real-Time அமைப்புகள்"
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 30
tags: []
summary: "நிலையான பட்ஜெட்டில் sense–compute–actuate — Phase 3-இன் வேகத் தந்திரங்கள் நேர எதிரிகளாகும் avionics மற்றும் தொழில்துறை கட்டுப்பாடு"
image_prompt: "Illustration of a real-time control loop in an industrial/avionics context, clean industrial-engineering diagram style"
video_prompt: "20-second animation: sensor-to-actuator control loop executing within a fixed time budget, clean technical animation"
labs: ["mini-cpu", "vm-terminal"]
schematics: "Diagram: closed-loop control system block diagram with real-time timing budget annotated"
---

பதிவு 29 கோட்பாட்டை உள்ளடக்கியது: hard எதிர் soft காலக்கெடுகள், rate-monotonic scheduling, ஏன் "வேகமானது" மற்றும் "real-time" வேறுபடுகின்றன. இந்தப் பதிவு அந்த உத்தரவாதங்கள் எங்கே பயன்படுத்தப்படுகின்றன — மற்றும் அவற்றுக்காகக் கட்டுவது நடைமுறையில் எப்படித் தெரிகிறது.

## Avionics: தவறிய காலக்கெடு பேரழிவாக

விமானக் கட்டுப்பாடு நல்ல காரணத்திற்காக canonical hard-real-time எடுத்துக்காட்டு. Fly-by-wire நிலைப்பு-அதிகரிப்பு loop உணரிகளைப் படிக்கிறது, கட்டுப்பாட்டு-மேற்பரப்பு சரிசெய்தல்களைக் கணிக்கிறது, மற்றும் நிலையான, இறுக்கமான சுழற்சியில் actuator கட்டளைகளை வழங்குகிறது. காலக்கெடுவைத் தவறினால் கட்டுப்பாட்டு பதில் நிலையற்றதாக மாறலாம், சில நேரம் மிகக் குறுகிய சாளரத்திற்குள். Avionics மென்பொருள் DO-178C போன்ற தரநிலைகளுக்குக் கட்டப்படுகிறது, கடுமையான நேர ஆய்வைக் கோருகிறது — "வழக்கமாக காலக்கெடுகளைச் சந்திக்கிறது" அல்ல, சான்றளிக்கப்பட்ட இயக்க நிலைமைகளின் கீழ் *எப்போதும்* சந்திக்கிறது என்ற சான்று (நோக்கங்கள் assurance நிலையால் அளவிடுகின்றன; முதுகெலும்பு மோசமான-வழக்கு ஒழுக்கம், சராசரி-வழக்கு நம்பிக்கை அல்ல).

## தொழில்துறை தானியங்கி: ஒருங்கிணைந்த தொடர்ச்சியான கட்டுப்பாடு

உற்பத்தி வரிசை — ரோபோ ஆயுதங்கள், கன்வேயர் நேரம், தரக் கட்டுப்பாட்டு உணரிகள் — அதே மூடிய-loop முறையை ஓட்டுகிறது: sense, compute, actuate, மீண்டும், அடிக்கடி மில்லிவினாடி சுழற்சியில். இங்கே காலக்கெடுவைத் தவறுவது வழக்கமாக avionics-ஐ விடக் குறைந்த பேரழிவு, ஆனால் இன்னும் கடுமையானது — நகரும் பகுதிக்கு ஒப்பீட்டளவில் தாமதமான நிலைக் கட்டளை மோதல், விழுந்த துண்டு, அல்லது விலையுயர்ந்த உபகரணத்திற்குச் சேதத்தைக் குறிக்கலாம்.

## பகிரப்பட்ட கட்டமைப்பு: Closed-Loop Control

இரு துறைகளும் பெயரிடத் தகுதியான முறையைப் பகிர்கின்றன: **sense** (உணரிகளிலிருந்து தற்போதைய நிலை), **compute** (சரியான பதில் — அடிக்கடி PID அல்லது ஒத்த கட்டுப்பாட்டு-கோட்பாடு வழிமுறை), **actuate** (மோட்டார் சிக்னல், மேற்பரப்பு விலகல்), நிலையான காலத்தில் மீண்டும். Real-time உத்தரவாதம் *முழு* loop-ஐ முடிவிலிருந்து முடிவு வரை உள்ளடக்குகிறது — உணரி latency, கணிப்பு, மற்றும் actuation அனைத்தும் அதே பட்ஜெட்டுக்கு எதிராக எண்ணப்படுகின்றன. ஜொலிக்கும் கட்டுப்பாட்டு வழிமுறை இன்னும் தோல்வியடைகிறது உணரி I/O அல்லது actuator தொடர்பு அந்த loop-இன் வேறு இடத்தில் கணிக்க முடியாத தாமதத்தைச் செலுத்தினால்.

## பொது நோக்க வன்பொருள் ஏன் அடிக்கடி போதாது

Real-time அமைப்புகள் அடிக்கடி பொது நோக்க OS கீழ் பொது நோக்க CPU-களுக்குப் பதிலாக அர்ப்பணிக்கப்பட்ட microcontrollers-இல் ஓடுகின்றன. எளிமையான, அதிக கணிக்கக்கூடிய கட்டமைப்பு — அடிக்கடி caches இல்லை, out-of-order execution இல்லை, speculative branch prediction இல்லை — நேரத்தை *குறைவாக* கணிக்கக்கூடியதாக்கும் சரியான Phase 3 நுட்பங்களை வேண்டுமென்றே விட்டுவிடுகிறது. Phase 3 செயல்திறன் வெற்றியாகக் கருதுவது hard-real-time அமைப்பு *சுற்றி* வடிவமைக்க வேண்டியது, அல்லது தவிர்க்க வேண்டியது.

## இரண்டு Labs, ஒரு வேறுபாடு

இது இரு ஊடாடும் labs-உடன் குறிக்கப்பட்ட ஒரே பதிவு, வேண்டுமென்றே: mini-CPU எளிய வன்பொருளில் deterministic, எண்ணக்கூடிய அறிவுறுத்தல் நேரம் தொடக்கூடிய இடம் — எளிமை ஏன் சான்றளிக்கக்கூடிய தன்மைக்கு உதவுகிறது. VM terminal முழு பொது நோக்க OS stack ஓட்டுகிறது — hard-real-time அமைப்பு அகற்றக் கட்டப்பட்ட scheduling மற்றும் நேர மாறுபாட்டைப் பார்க்கப் பயனுள்ளது.

{{< lab type="mini-cpu" >}}

{{< lab type="vm-terminal" >}}

**Door out:** RTCA DO-178C, *Software Considerations in Airborne Systems and Equipment Certification* — இந்தப் பதிவு பெயரிடும் முதன்மை சிவில்-avionics மென்பொருள் assurance தரநிலை (assurance நோக்கங்கள் Design Assurance Level-ஆல் அளவிடுகின்றன).

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

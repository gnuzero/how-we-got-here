---
title: "Branch Prediction"
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 14
tags: []
summary: "Pipeline flush-கள் விலை உயர்ந்தவை — அவற்றை அரிதாக்க prediction உள்ளது"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

தவறாக ஊகிக்கப்பட்ட கிளை தவறான பாதையில் fetch செய்யப்பட்ட அனைத்தையும் flush செய்கிறது. ஆழமான pipeline-இல் அது பத்து சுழற்சிகளுக்கு மேல் செலவாகலாம். பதிவு 13 அந்தச் செலவை மேசையில் விட்டது; இந்தப் பதிவு பதில்: திசை (மற்றும் இலக்கு) முன்கூட்டியே ஊகித்து flush அரிதாகும்படி செய்யுங்கள்.

## Static ஊகலி போதாது

Static விதிகள் — எப்போதும் not-taken, அல்லது "பின்நோக்கு கிளைகள் (loops) taken" — வன்பொருள் செலவு இல்லை, ஆனால் நிறைய உண்மையான குறியீட்டைத் தவறவிடுகின்றன. கிளை நடத்தை நிலைத்த விதி காண முடியாத வரலாற்றைச் சார்ந்தது.

Dynamic predictors இயக்க நேரத்தில் முடிவுகளைக் கண்காணிக்கின்றன. 100 முறை ஓடும் ஒரு loop தன் பின்நோக்கு கிளையை 99 முறை எடுக்கிறது; "கடந்த முறை taken" என்று நினைவில் வைக்கும் predictor கிட்டத்தட்ட ஒவ்வொரு iteration-ஐயும் சரியாகப் பெறுகிறது.

## 2-Bit Saturating Counter

செவ்வியல் கட்டுமானத் தொகுதி: நான்கு நிலைகள் — strongly/weakly not-taken, weakly/strongly taken. ஒவ்வொரு தீர்க்கப்பட்ட முடிவும் counter-ஐ உண்மையில் நடந்ததை நோக்கி ஒரு படி தள்ளுகிறது (முனைகளில் saturating). Prediction மேல் பிட்.

ஏன் ஒரு பிட் அல்ல? 1-பிட் "கடைசி முடிவு" ஒரே anomaly-க்குப் பிறகு புரளுகிறது — பிறகு அடுத்த *சாதாரண* iteration-ஐயும் தவறாக ஊகிக்கிறது. இரண்டு பிட்களுக்குப் புரள இரண்டு தொடர்ச்சியான anomalies தேவை, எனவே ஒரு loop-இன் இறுதி not-taken வெளியேற்றம் அடுத்த loop ஓட்டத்தை விஷமாக்காது.

## அடுத்து எங்கே Fetch செய்வது

திசை பாதி மட்டுமே. Taken கிளைக்கு, கிளை முழுமையாக டிகோட் ஆகும் முன் fetch-க்கு ஒரு *இலக்கும்* தேவை. Branch Target Buffer (BTB) ஒரு சிறிய cache, அறிவுறுத்தல் முகவரியால் அட்டவணைப்படுத்தப்பட்டது, கடைசி தீர்க்கப்பட்ட இலக்கை நினைவில் வைக்கிறது. Hit-இல், fetch அடுத்த சுழற்சியில் speculative-ஆகத் தாவ முடியும்.

உண்மையான predictors counter அட்டவணைகளை (அடிக்கடி global history-உடன்) மற்றும் ஒரு BTB-ஐ இணைக்கின்றன; உயர்நிலை சிப்கள் மேலும் செல்கின்றன. 2-பிட் counter இன்னும் கருத்தியல் மையம் — மற்றும் mini-CPU lab-இல் கையால் பார்க்கும் அளவு சிறியது: ஒரு loop-இன் கிளையைப் படி எடுத்து ஒவ்வொரு iteration-இலும் prediction நிலை புதுப்பிப்பதைப் பாருங்கள்.

{{< lab type="mini-cpu" >}}

**Door out:** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — dynamic branch prediction-இன் ஆரம்ப முறையான சிகிச்சை, பாடநூலாக மாறிய saturating-counter யோசனைகள் உட்பட.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

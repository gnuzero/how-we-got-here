---
title: "Pipelining"
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 13
tags: []
summary: "Throughput-க்கு அறிவுறுத்தல்களை மேலெழுதல் — பின்னர் hazards forwarding, stall, மற்றும் அடுத்து வரும் அனைத்தையும் கட்டாயப்படுத்துகின்றன"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

Single-cycle datapath (பதிவு 12) throughput-ஐ மேசையில் விட்டுவிடுகிறது: ஒவ்வொரு அறிவுறுத்தலும் மிக மெதுவான சாத்தியமான பாதைக்காகக் காத்திருக்கிறது. Pipelining செயல்பாட்டை நிலைகளாகப் பிரித்து, பல அறிவுறுத்தல்கள் வெவ்வேறு நிலைகளை *ஒரே நேரத்தில்* ஆக்கிரமிக்க விடுகிறது.

## ஐந்து நிலைகள், மேலெழுதப்பட்டவை

ஒரு செவ்வியல் RISC pipeline: **IF** (fetch), **ID** (decode / பதிவேட்டுப் படிப்பு), **EX** (ALU), **MEM** (load/store), **WB** (write back). Pipeline பதிவேடுகள் (மீண்டும் பதிவு 9) ஒவ்வொரு clock-இலும் நிலைகளுக்கு இடையே முடிவுகளைப் பூட்டுகின்றன.

அறிவுறுத்தல் N EX-இல் இருக்கும்போது, N+1 ID-இலும் N+2 IF-இலும் இருக்க முடியும். Steady state-இல் ஒவ்வொரு சுழற்சியும் ஒரு புதிய அறிவுறுத்தல் *முடிக்கப்படுகிறது* — ஒவ்வொன்றும் தொடக்கம் முதல் முடிவு வரை இன்னும் ஐந்து சுழற்சிகள் எடுத்தாலும். Latency நிலைத்திருக்கிறது; throughput உயர்கிறது. அந்த வேறுபாடு இதற்குப் பிறகு எல்லா இடத்திலும் தோன்றுகிறது.

## Hazards: சுதந்திரம் உடையும் இடம்

அறிவுறுத்தல்கள் அரிதாகவே சுதந்திரமானவை.

**Data hazards** — ஒரு அறிவுறுத்தலுக்கு முந்தைய, இன்னும் பறக்கும் அறிவுறுத்தல் எழுதி முடிக்காத ஒரு மதிப்பு தேவை. **Forwarding** (bypassing) ALU முடிவைப் பிந்தைய pipeline பதிவேட்டிலிருந்து நேரடியாக EX-க்குள் திருப்புகிறது, register file-ஐத் தவிர்த்து, எனவே சார்ந்த அறிவுறுத்தலுக்கு அடிக்கடி stall தேவையில்லை. Forwarding ஒவ்வொரு இடைவெளியையும் மூட முடியாது: ஒரு load-ஐ உடனே ஒரு use தொடரும்போது MEM நிலை முடியும் வரை இன்னும் ஒரு **stall** (bubble) தேவை.

**Control hazards** — கிளைகள். Pipeline taken/not-taken, அல்லது இலக்கை, தாமதமாகவே அறிகிறது — ஆனால் தொடரும் அறிவுறுத்தல்கள் ஏற்கனவே fetch செய்யப்பட்டுவிட்டன. Taken கிளையில் அவற்றை flush செய்ய வேண்டும். தவறான பாதையில் செலவழிக்கப்பட்ட சுழற்சிகள் வீணாகின்றன.

## அந்தச் செலவுகள் அடுத்து எதைக் கட்டாயப்படுத்துகின்றன

Misprediction flush-கள் விலை உயர்ந்தவை — அதனால்தான் branch prediction (பதிவு 14) உள்ளது: முன்கூட்டியே, flush அரிதாகும் அளவுக்குத் துல்லியமாக ஊகிக்க. Load-use stall-தான் out-of-order execution (பதிவு 16) உள்ளதற்குக் காரணம்: காத்திருக்கும் அறிவுறுத்தலை மட்டும் stall செய்து, முழு pipeline-ஐ அல்ல, மற்றும் அதற்குப் பின்னால் உள்ள சுதந்திரமான வேலையை ஓட விடுங்கள்.

{{< lab type="mini-cpu" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

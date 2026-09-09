---
title: "Quantization மற்றும் Mixed Precision"
weight: 59
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 59
tags: []
summary: "ஒரு MAC-க்குக் குறைந்த bits அதே ஆற்றல் பட்ஜெட்டில் அதிக MAC-கள் — துல்லியம் இன்னும் தேவைப்படும் இடத்தில் precision கலக்குங்கள்"
image_prompt: "Comparison infographic of FP32, FP16, BF16, FP8, and INT8 bit-field layouts, clean numerical format diagram style"
video_prompt: "15-second animation: a number's bit representation shrinking from FP32 to INT8, clean data-viz motion graphics"
schematics: "Diagram: bit-field layout comparison + dynamic range comparison chart"
---

பதிவு 55 இணைப்பைக் குறித்தது: tensor-core மற்றும் systolic-array திறன் அவை ஓட்டும் எண் precision-ஐப் பொறுத்தது. இந்தப் பதிவு குறைந்த precision ஏன் மைய நெம்புகோலாகியது — மற்றும் அதைப் பெற என்ன பரிமாறப்படுகிறது.

## இங்கே Precision என்றால் என்ன

வடிவங்கள் நிலையான bit பட்ஜெட்டுடன் வரம்பு மற்றும் precision-ஐப் பரிமாறிக்கொள்ளும். FP32 (sign, 8 exponent bits, 23 mantissa) பாரம்பரிய அறிவியல் இயல்புநிலை. FP16 மற்றும் BF16 பாதி bits பயன்படுத்தும் — BF16 FP32-இன் exponent வரம்பை வைத்து mantissa-இல் குறைவாகச் செலவிடும், நுண்ணிய தானியத்தை விட dynamic range-க்குச் சாதகம். FP8 மேலும் செல்கிறது; INT8 floating point-ஐக் கைவிட்டு நிலையான integers மற்றும் தேவையான வரம்புக்குத் திரும்பும் scale factor பயன்படுத்தும்.

## குறைந்த Bits, அதிக Throughput

பதிவுகள் 6–7 நீங்கள் கணிப்பதற்கு ஏற்ப circuit பரப்பு அளவிடுவதை நிறுவின. ஒரு FP32 MAC-க்கு FP16 அல்லது INT8-ஐ விட அதிக டிரான்சிஸ்டர்கள் மற்றும் ஆற்றல் தேவை. நிலையான பரப்பு மற்றும் ஆற்றல் பட்ஜெட் கொடுக்கப்பட்டால் (பதிவு 36-இன் சுவர் இன்னும் accelerators-ஐக் கட்டுப்படுத்தும்), குறைந்த precision அதே உறைக்குள் அதிக parallel MAC throughput அடுக்கும். அது இயற்பியல் காரணம் — அல்காரிதத் தேர்வு மட்டும் அல்ல — tensor cores மற்றும் systolic arrays அடிக்கடி குறிப்பிட்ட குறைந்த-precision வடிவங்களைச் சுற்றி வடிவமைக்கப்படுவதற்கு.

## என்ன பரிமாறப்படுகிறது

குறைக்கப்பட்ட precision என்பது கரடுமுரடான மதிப்புகள் மற்றும் நீண்ட சங்கிலிகள் குறுக்கே அதிக rounding பிழை. அனுபவரீதியாக, பல neural networks அதை நன்றாகத் தாங்கும் — குறிப்பாக inference-க்கு, மற்றும் பயிற்சியின் பெரிய பகுதிகளுக்கு கவனத்துடன் — முன்கூட்டியே தெளிவாக இல்லை; காட்டப்பட வேண்டியது.

## Blanket Low அல்ல, Mixed

Mixed-precision பயிற்சி மற்றும் inference வன்பொருள் throughput லாபம் பெறும் கனமான matmuls-க்குக் குறைந்த precision (அடிக்கடி FP16 அல்லது BF16) பயன்படுத்தி, எண்ரீதியாக உணர்திறன் வேலைக்கு — rounding குவியும் accumulations போன்றவை — உயர் precision (அடிக்கடி FP32) வைத்திருக்கும். அதன் வைப்பு சம்பாதிக்கும் இடத்தில் மட்டும் முழு precision: அதனால்தான் சொல் *mixed*, வெறுமனே *low* அல்ல.

## அடுத்த நெம்புகோல்

Precision ஒவ்வொரு செயல்பாட்டையும் மலிவாக்கும். அடுத்த பதிவின் sparsity அறியப்பட்ட பூஜ்யம் ஒன்றும் பங்களிக்காதபோது சில செயல்பாடுகளை முழுவதும் தவிர்க்க இலக்கு வைக்கும்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "Matrix Multiply Chip வடிவமைப்பை ஏன் மறுவடிவமைத்தது"
weight: 57
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 57
tags: []
summary: "AI compute அளவில் matmul-க்குக் குறைகிறது — அந்த வடிவத்திற்குச் சிலிகானைச் சிறப்புப்படுத்துங்கள்"
image_prompt: "Infographic showing a neural network layer's forward pass as a matrix multiply mapped onto specialized hardware, clean AI hardware explainer style"
video_prompt: "20-second animation: a neural network layer computation as a matrix multiply through specialized MAC units, clean technical animation"
schematics: "Diagram: neural network layer as matrix multiply + general ALU vs specialized MAC array comparison"
---

இந்த இறுதி phase நவீன AI workloads-க்குக் கட்டப்பட்ட வன்பொருள். Chip வடிவமைப்பு ஏன் இவ்வளவு கடுமையாக இந்த வழியில் வளைந்தது என்பது, ஒரு "AI workload" எண்கணித மட்டத்தில் உண்மையில் எதற்குக் குறைகிறது எனச் சொன்னவுடன் தெளிவாகும் — சொற்றொடர் பரிந்துரைப்பதை விடக் குறுகியதும் இயந்திரரீதியானதும்.

## ஒரு Layer என்ன கணிக்கிறது

ஒரு fully connected layer-இன் forward pass ஒரு matrix multiplication: activations × weights, பிறகு மலிவான elementwise nonlinearity. Convolutions matmul-ஆக மறுவடிவமைக்கப்படும் (im2col). Attention — பெரும்பாலான பெரிய மொழி மாதிரிகளின் பின்னால் உள்ள transformers-இன் மையம் — அதன் கணினி இதயத்தில் அதேபோல் matrix multiplies: query-key scores, பிறகு எடையிடப்பட்ட values. இது கற்பித்தல் எளிமைப்படுத்தல் அல்ல. நவீன deep learning-இல், பயிற்சி மற்றும் inference, மூல cycles-இன் மிகப் பெரும்பான்மை matrix multiply-accumulate — மிகப் பெரிய அளவு, முடிவில்லாமல் மீண்டும்.

## வன்பொருள் ஏன் பின்தொடர்ந்தது

ஒரு Phase 3 CPU core ஏதேனும் வரிசைமுறைக் குறியீட்டிற்காகக் கட்டப்பட்டது — branches, பல்வேறு memory அணுகல், கணிக்க முடியாத கட்டுப்பாட்டு ஓட்டம். அந்தப் பொதுமை ஒரு வழக்கமான செயல்பாட்டால் ஆதிக்கம் செய்யப்படும் workload-க்குத் தேவையில்லாத இயந்திரத்தில் (prediction, out-of-order, refined caches) பரப்பு மற்றும் ஆற்றல் செலவாகும்.

ஒருமுறை matmul AI compute-இன் மேலாதிக்கப் பங்காக அங்கீகரிக்கப்பட்டதும், அதற்குச் சிறப்புப்படுத்துவது மதிப்புள்ளதாகியது: பொது-நோக்கு இயந்திரத்தைத் தவிர்த்து தன் பட்ஜெட்டை MAC throughput-இல் செலவிடும் சிலிகான். Tensor cores (பதிவு 55) அந்தக் கருத்தை இன்னும் பொதுவான GPU-க்குள் பதிக்கின்றன. அடுத்த பதிவு மேலும் செல்கிறது — systolic array — அதே உணர்வைச் சுற்றி முழுக் கட்டமைப்பையும் சிறப்புப்படுத்துவது.

## மீண்டும் வரும் Pattern

இது பதிவு 17-இன் superscalar-to-multicore pivot மற்றும் பதிவு 49-இன் planar-to-FinFET-to-GAA பரிணாமம் போன்ற *வகை* கதை, இப்போது முழு-chip கட்டமைப்பில்: ஒரு workload-இன் வடிவம் நன்றாகப் புரிந்துகொள்ளப்பட்டு போதிய அளவு மேலாதிக்கமாக இருந்தவுடன், அந்த வடிவத்திற்கான சிறப்பு வன்பொருள் அதைப் பல வழக்குகளில் ஒன்றாகக் கருதும் பொது-நோக்கு வன்பொருளை வெல்லும். Matmul-இன் மேலாதிக்கம் இந்த phase-இன் இவ்வளவு நோக்கத்துடன் கட்டப்பட்ட சிலிகான் ஏன் — incremental CPU அல்லது பொது GPU மேம்பாடு மட்டும் அல்ல.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "Tensor Cores"
weight: 55
date: 2026-01-01
draft: false
phase: "9 — GPU-கள் மற்றும் Parallel Compute"
series_index: 55
tags: []
summary: "Matrix multiply-accumulate மேலாதிக்க AI op ஆனது — எனவே வன்பொருள் அதை முதல்-தர primitive ஆக்கியது"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

பதிவு 53 CUDA cores-ஐ உள்ளடக்கியது — பரந்த வரம்பு parallel வேலைக்குப் பொது-நோக்கு SIMT lanes. Tensor cores குறுகியவை: ஒரு செயல்பாட்டிற்கான அர்ப்பணிக்கப்பட்ட வன்பொருள் — matrix multiply-accumulate — நவீன neural-network compute-ஐ ஆதிக்கம் செலுத்துவது. அந்த op-க்குச் சிறப்புப்படுத்துங்கள், பொது CUDA cores மட்டும் அதே வேலையைச் செய்வதை விட வெல்லுங்கள்.

## ஏன் Matrix Multiply

Fully connected layers, convolutions (matmul-ஆக மறுவடிவமைக்கப்பட்டவை), மற்றும் transformers-இல் attention அனைத்தும், அவற்றின் மையத்தில், matrices-இன் multiply-accumulate-க்குக் குறைகின்றன — அதன் திறன் அமைப்பு செயல்திறனை ஆதிக்கம் செய்யும் அளவில். அந்த செறிவு நோக்கத்துடன் கட்டப்பட்ட சிலிகானை மதிப்புள்ளதாக்குகிறது.

## ஒரு Tensor Core என்ன செய்கிறது

ஒரு tensor core சிறிய நிலையான-அளவு matrix multiply-accumulate-ஐ — எடுத்துக்காட்டாக இரு 4×4 matrices-ஐ மூன்றாவதாக — பொது CUDA cores வழியாகத் தனி multiply மற்றும் add அறிவுறுத்தல்களின் நீண்ட வரிசைக்குப் பதிலாக ஒரு வன்பொருள் செயல்பாடாக இணைக்கிறது. Fusion பயனுள்ள arithmetic-க்கு ஒப்பீட்டில் per-op overhead (fetch, decode, operand routing) வெட்டும். பெரிய products tiled: துணை-தொகுதிகளை வரிசையாக உணவளித்து, partials குவிக்க — திறமையான deep-learning kernels-ஐத் தன் சொந்த கலையாக்கும் ஒருங்கிணைப்பு வேலை.

## Precision சிலிகானுடன் இணைக்கப்பட்டுள்ளது

Tensor cores அடிக்கடி குறைந்த precisions-இல் (FP16, BF16, INT8, அதிகரித்து FP8) மிகத் திறமையாக ஓடும். குறுகிய arithmetic ஒரு op-க்குக் குறைந்த பரப்பு மற்றும் ஆற்றல் தேவை, எனவே கொடுக்கப்பட்ட பட்ஜெட் அதிக MAC throughput அடுக்கும். பதிவு 59 இதை முழுமையாகத் திரும்பும்: precision குறைப்பு தூய மென்பொருள் தேர்வு அல்ல — ஒவ்வொரு வடிவத்திலும் அடிப்படை MAC வன்பொருள் எவ்வளவு திறமையாக ஓடுகிறது என்பதோடு இணைக்கப்பட்டுள்ளது.

## ஒரே பதில் அல்ல

Tensor cores இல்லையெனில் பொதுவான GPU-க்குள் NVIDIA-வின் பதில். Phase 10 systolic arrays-ஐ உள்ளடக்கும் — Google-இன் TPU மிகத் தெளிவானது — அதே matmul இலக்கிற்காகக் கட்டப்பட்டவை, வன்பொருள் மட்டத்தில் வேறுபட்ட அமைப்பு. அதே கட்டுப்பாடு; வேறு கட்டமைப்பு.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

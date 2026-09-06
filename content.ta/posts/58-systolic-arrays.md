---
title: "Systolic Arrays"
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 58
tags: []
summary: "தரவு ஒரு MAC கட்டம் வழியாகத் துடிக்கும் — முழு chip-ஐயும் matmul-க்குச் சிறப்புப்படுத்துங்கள் (TPU-கள்)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

பதிவு 55 tensor cores-ஐ உள்ளடக்கியது — இல்லையெனில் பொதுவான GPU-க்குள் சிறப்பு matmul வன்பொருள். Systolic arrays சிறப்புப்படுத்தலை மேலும் தள்ளும்: matrix multiplication-க்கு எளிய processing elements-இன் கட்டம் வழியாகத் தரவை ஓட அமைக்கப்பட்ட கட்டமைப்பு. Google-இன் TPU (Tensor Processing Unit) மிகத் தெளிவான shipping எடுத்துக்காட்டு. கருத்து தானே பழையது: **H. T. Kung** மற்றும் **Charles E. Leiserson** 1970-களின் பிற்பகுதியில் VLSI-க்கு systolic arrays-ஐப் பெயரிட்டு முறைப்படுத்தினர்.

## தரவு ஓடும்; கணினி வழியில் நடக்கும்

ஒரு systolic array எளிய processing elements-இன் 2D கட்டம், ஒவ்வொன்றும் ஒரு multiply-accumulate, தரவு ஒருங்கிணைந்த தாளத்தில் நகரும்படி அமைக்கப்பட்டது. ஒவ்வொரு PE-உம் தரவு வரும்போது ஒரு MAC செய்யும். Weight-stationary வடிவமைப்பில் (Google-இன் TPU MXU போல), weights முன் ஏற்றப்பட்டு வைக்கப்படும்போது activations குறுக்கே ஓடி partial sums அண்டைகளுக்குப் பரவும் — systolic "இதயத் துடிப்பு," இரு operands-உம் சுதந்திரமாக அலையாது. பெயர் வேண்டுமென்றே இதயத்தின் துடிப்பை எதிரொலிக்கிறது: தரவு மையப் பகிரப்பட்ட கட்டுப்பாட்டு பாதை வழியாக fetch செய்யப்படுவதற்குப் பதிலாக அலைகளாக நகரும்.

## Weight-Stationary Dataflow

Weights-ஐ *stationary*-ஆக வைத்திருங்கள் — ஒவ்வொரு PE-இலும் ஒருமுறை ஏற்றி — activations கடந்து ஓடும்போது வைக்கப்பட்ட weight-க்கு எதிராக multiply செய்து, partial sums கட்டம் வழியாகக் குவியும். ஏற்றப்பட்டதும், weights ஒவ்வொரு MAC-க்கும் மீண்டும் fetch செய்யப்பட வேண்டாம். பதிவுகள் 35 மற்றும் 54-இன் memory-bandwidth அழுத்தம் கொடுக்கப்பட்டால், அது முக்கியம்: மீண்டும் பயன்படுத்தப்படும் மதிப்புகளை compute இடத்தில் வைத்து தரவு இயக்கத்தை வெட்டுங்கள் — systolic வடிவமைப்பு பதிலளிக்கக் கட்டப்பட்ட அதே கட்டுப்பாடு.

## GPU Tensor Cores vs ஒரு Systolic Chip

Tensor cores இன்னும் பொதுவான SIMT கட்டமைப்புக்குள் (பதிவுகள் 52–53) அமர்கின்றன, matmul-க்கு அப்பால் பல parallel workloads ஓட்டக்கூடியவை. TPU போன்ற systolic-array chip குறுகிய பந்தயம் கட்டும்: திறமையான matrix multiplication-ஐச் சுற்றி *முழு* chip-ஐயும் அமைக்கவும், அந்த வடிவத்திற்குப் பொருந்தாத வேலைக்குக் குறைந்த நெகிழ்வு. எதுவும் கண்டிப்பாகச் சிறந்ததல்ல — matmul-ஆதிக்க loads-இல் திறன் மற்றும் பரந்த parallel கலவையில் நெகிழ்வு.

## சிறப்பு இதயமாக MXU

Google-இன் TPU-வில், Matrix Multiply Unit (MXU) matmul throughput-இன் பெரும்பகுதியைச் சுமக்கும் systolic array, non-matmul மீதிக்குக் கட்டுப்பாடு, memory இடைமுகங்கள் மற்றும் vector அலகுகளுக்கு அருகில். சிறப்பு மையம் மற்றும் ஆதரவு தர்க்கம் இந்த phase-இன் accelerators குறுக்கே மீண்டும் வரும் pattern.

**Door out:** H. T. Kung மற்றும் Charles E. Leiserson, "Systolic Arrays (for VLSI)" (*Sparse Matrix Proceedings 1978*, SIAM, 1979) — matrix கணினிக்கான தாள MAC arrays-இன் செவ்வியல் கூற்று; தொடர்புள்ள வடிவம் Mead மற்றும் Conway-இன் *Introduction to VLSI Systems* (1980)-இலும் தோன்றும்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

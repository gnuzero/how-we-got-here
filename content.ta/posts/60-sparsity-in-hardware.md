---
title: "வன்பொருளில் Sparsity"
weight: 60
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 60
tags: []
summary: "அறியப்பட்ட-பூஜ்ய MAC-களைத் தவிருங்கள் — ஆனால் அடர்த்தியான MAC வன்பொருள் சுரண்ட மலிவானவை structured patterns மட்டும்"
image_prompt: "Diagram of a dense weight matrix vs a 2:4 structured-sparse weight matrix, clean AI accelerator diagram style"
video_prompt: "20-second animation: a dense matrix pruned to a structured 2:4 sparse pattern, hardware skipping zeroed entries, clean technical animation"
schematics: "Diagram: 2:4 structured sparsity pattern + sparse tensor core compute flow"
---

பதிவு 59 குறைக்கப்பட்ட precision வழியாக ஒவ்வொரு செயல்பாட்டையும் மலிவாக்கியது. Sparsity நிரப்பு நெம்புகோல்: ஒன்றும் பங்களிக்காத செயல்பாடுகளைத் தவிருங்கள் — ஒரு operand ஏற்கனவே பூஜ்யமாக இருக்கும் பெருக்கல்கள்.

## Networks ஏன் அடிக்கடி Sparse

பயிற்சி பெற்ற networks-க்கு அடிக்கடி பூஜ்யத்திற்கு அருகில் பல weights உண்டு — பயிற்சி இயக்கவியலிலிருந்து, அல்லது சிறிய துல்லியச் செலவில் சிறிய, மலிவான மாதிரிக்கு அதிக weights-ஐத் துல்லிய பூஜ்யத்திற்குத் தள்ளும் வேண்டுமென்ற pruning-இலிருந்து. பூஜ்யம் × எதுவும் no-op; அந்த MAC-ஐத் தவிர்ப்பது நவீன மாதிரிகள் ஓடும் அளவில் உண்மையான நேரமும் ஆற்றலும் சேமிக்கும்.

## Unstructured vs Structured

**Unstructured** sparsity பூஜ்யங்களை ஏதேனும் சிதறடிக்கும். Dense matmul வன்பொருள் (tensor cores, systolic arrays) வழக்கமான வேலைக்குக் கட்டப்பட்டது; ஏதேனும் பூஜ்யங்களைத் தவிர்க்க சேமிப்பை அழிக்கக்கூடிய கட்டுப்பாட்டு சிக்கல் தேவை.

**Structured** sparsity வன்பொருள்-நட்பு pattern கட்டாயப்படுத்தும் — பொதுவாக 2:4: நான்கு weights-இன் ஒவ்வொரு குழுவிலும் சரியாக இரண்டு பூஜ்யம் (நிலைகள் மாறலாம்; *எண்ணிக்கை* நிலையானது). கணிக்கக்கூடிய அமைப்புதான் சிறப்பு வன்பொருள் மிதமான, வழக்கமான கட்டுப்பாட்டு தர்க்கத்துடன் தவிர்க்கக்கூடியது.

## பலன் — மற்றும் இடைவெளி

Structured-sparsity ஆதரவுள்ள வன்பொருள், 2:4 weight matrices-இல், dense-க்கு எதிராக 2× வரை math throughput விளம்பரப்படுத்தலாம். உண்மையான GEMM-கள் அடிக்கடி ~1.3–1.8× அருகில் இறங்கும்; end-to-end networks ~1.3–1.5× அருகில், kernels, நினைவகம் மற்றும் துல்லியம்-பாதுகாக்கும் prune/retrain ஆல் வரம்பிடப்பட்டவை. இன்னும் பதிவு 57 தீம்: எந்தக் கணினி கட்டமைப்புரீதியாகத் தேவையற்றது எனத் தெரிந்தவுடன், அதைத் தவிர்க்க சிலிகான் கட்டப்படலாம் — கோட்பாடும் உற்பத்தியும் தனியாக இருந்தாலும்.

## Precision-உடன் இணைக்கவும்

Sparsity மற்றும் குறைக்கப்பட்ட precision மாற்றுகள் அல்ல. நவீன accelerators அடிக்கடி இரண்டையும் சுரண்டும்: குறைந்த-precision, structurally sparse MAC-கள் — மலிவான ops *மற்றும்* குறைவானவை — அதே நிலையான பரப்பு மற்றும் ஆற்றல் பட்ஜெட்டிற்குள்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "Machine Learning மென்பொருள் Stack"
date: 2026-01-01
draft: false
phase: "7 — விநியோகிக்கப்பட்ட அமைப்புகள், Big Data மற்றும் Orchestration"
series_index: 46
tags: []
summary: "ஒரு model-க்கும் சிலிகானுக்கும் இடையே tensors-ஐ விநியோகிக்கப்பட்ட training-ஆக மாற்றும் stack அமர்கிறது — மற்றும் interconnect சுவரைத் தாக்குகிறது"
image_prompt: "Layered infographic showing the ML software stack from Python/NumPy up through frameworks (PyTorch/TensorFlow) to distributed training orchestration to hardware, clean AI-software diagram style"
video_prompt: "20-second animation: a training job's computation graph being built in a framework, then compiled down and distributed across multiple GPUs, clean technical animation"
schematics: "Diagram: ML software stack (framework→compiler/graph→runtime→hardware) + data-parallel vs model-parallel training diagram"
---

Phases 9 மற்றும் 10 நவீன AI compute-இன் வன்பொருளை உள்ளடக்குகின்றன — GPUs, tensor cores, interconnects. பெரும்பாலான ML பொறியாளர்கள் அந்தச் சிலிகானை நேரடியாக நிரலாக்க மாட்டார்கள். "இங்கே ஒரு network architecture" மற்றும் "இங்கே உண்மையான சாதனங்களில் matrix multiplies" இடையே ஒரு மென்பொருள் stack அமர்கிறது, மற்றும் அந்த stack தான் இந்தத் தொடரின் விநியோகிக்கப்பட்ட-அமைப்புகள் நூல் உண்மையில் *பயன்படுத்தப்படும்* விதம்.

## முதலில் Arrays

நடைமுறைத் தரை பலபரிமாண arrays (tensors) மற்றும் vectorized ops — Python உலகில் NumPy-வகுப்பு எண் கணினி. கனமான தூக்குதல் Python-*இலிருந்து* அழைக்கப்படும் compiled routines-இல் ஓடுகிறது; interpreter loop கணிதத்திற்கு bottleneck அல்ல.

## Frameworks: Gradients மற்றும் வன்பொருள் ஒரே ஒப்பந்தமாக

Deep-learning frameworks (ஆதிக்க உதாரணங்களாக PyTorch மற்றும் TensorFlow) arrays மீது training தேவைப்படுவதைச் சேர்க்கின்றன. **Automatic differentiation** ஒரு computation graph கட்டி, ஒவ்வொரு architecture-க்கும் மனிதன் calculus மீண்டும் பெறாமல் gradients உருவாக்குகிறது — gradient descent-ஐ ஆராய்ச்சி வேகத்தில் நடைமுறைப்படுத்தும் கட்டுப்பாடு. ஒரு **வன்பொருள் abstraction** அதே model code CPU, CUDA வழியாக NVIDIA GPU (Phase 9), அல்லது பிற accelerators-ஐ இலக்காக வைக்க அனுமதிக்கிறது — tensor ops-ஐ optimized kernels-க்குத் தாழ்த்தி — பதிவு 11-இன் ISA/microarchitecture பிரிவின் அதே *வகை* ஒப்பந்தம், ஒரு மென்பொருள் அடுக்கு உயர்வில்.

## Graph-ஐத் தாழ்த்துதல்

Framework ops-க்கும் device kernels-க்கும் இடையே ஒரு compiler அடுக்கு அதிகமாக அமர்கிறது: operators-ஐ fuse செய்யுங்கள், memory போக்குவரத்தை வெட்டுங்கள், ஒரு intermediate representation-ஐ இலக்கு நோக்கித் தாழ்த்துங்கள். அது பதிவு 28-இன் compiler கருத்து tensor graphs-க்குப் பயன்படுத்தப்பட்டது, பொது imperative code-க்கு அல்ல — optimize செய்து தாழ்த்துங்கள், ஒவ்வொரு முறையும் மீண்டும் lex செய்யாதீர்கள்.

## Distribution கம்பியைத் தாக்குகிறது

ஒரு GPU-வின் நினைவகம் (Phase 9-இன் HBM) அடிக்கடி நவீன பெரிய model-ஐ வைக்க முடியாது, தனியாக train செய்வதை விடுங்கள். **Data parallelism** model-ஐ replicate செய்து, batch-ஐப் பிரித்து, gradients ஒத்திசைக்கிறது (all-reduce — Phase 10 / பதிவுகள் 37 மற்றும் 42). **Model parallelism** model எங்கும் ஒருமுறை பொருந்தாதபோது அதைச் சாதனங்கள் குறுக்கே பிரிக்கிறது. உண்மையான training இரண்டையும் கலக்கிறது. Throughput பிறகு அடிக்கடி எந்த ஒற்றை GPU தனியாக multiply செய்யும் வேகத்தால் அல்ல — GPUs gradients மற்றும் activations எவ்வளவு வேகமாகப் பரிமாறுகின்றன என்பதால் வரையறுக்கப்படுகிறது. முந்தைய பதிவுகளின் interconnect சுவர் training சுவராகத் திரும்புகிறது.

## இந்த Phase-இன் Loop-ஐ மூடுதல்

நவீன ML training neural-network உடையுடன் அணியப்பட்ட ஒரு விநியோகிக்கப்பட்ட-அமைப்புகள் பிரச்சனை: பல compute அலகுகளை ஒருங்கிணைக்கவும், பகுதி failure-ஐ உறிஞ்சவும் (GFS, Kubernetes), பெரும் intermediate தரவைத் திறமையாக நகர்த்தவும். அந்த மென்பொருள் பாதி இல்லாத வன்பொருள் — அல்லது சிலிகான் மற்றும் fabric இல்லாத மென்பொருள் — Phase 9 மற்றும் 10 முடிக்கும் கதையின் பாதி மட்டும்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

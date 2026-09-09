---
title: "Containers மற்றும் நவீன OS Isolation"
weight: 25
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 25
tags: []
summary: "முழு VM-கள் வலுவான isolation-ஐ கனமான செலவில் வாங்குகின்றன — namespaces மற்றும் cgroups ஒரே kernel பகிர்ந்து மற்ற எல்லாவற்றையும் கிட்டத்தட்ட தனிமைப்படுத்துகின்றன"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

Virtual memory (பதிவு 24) process-களை ஒருவருக்கொருவர் நினைவகத்திலிருந்து தனிமைப்படுத்துகிறது. அதே filesystem, process-ID இடம், அல்லது network கட்டமைப்பைப் பகிர்வதிலிருந்து அவற்றைத் தனிமைப்படுத்தாது — பாரம்பரிய Unix process இன்னும் raw RAM-க்கு அப்பால் பல வழிகளில் மற்றவற்றைப் பார்த்து சில நேரம் தலையிட முடியும். Containers isolation-ஐ அந்த மேற்பரப்பின் அதிக பகுதிக்கு நீட்டிக்கின்றன, முழு வன்பொருள் virtualization வரை செல்லாமல்.

## முழு Virtualization: வலுவானது, கனமானது

பாரம்பரிய VM முழுமையான guest OS — சொந்த kernel, சொந்த drivers — hypervisor மீது ஓட்டுகிறது, அது virtualized (அல்லது வன்பொருள் உதவியுடன், near-native) CPU, நினைவகம், சேமிப்பு, மற்றும் networking வழங்குகிறது. மிக வலுவான isolation: guest host-இன் process-களையோ மற்ற guests-ஐயோ பார்க்க முடியாது, கடுமையான hypervisor பிழை இல்லாவிட்டால். செலவு உண்மையானது — ஒவ்வொரு VM-ம் தன் kernel-ஐ boot செய்கிறது, அந்த kernel-இன் நினைவக அடிச்சுவட்டைச் சுமக்கிறது, மற்றும் பொதுவாக host-இல் ஓடுவதை விட சில வன்பொருளுக்கு மெதுவான அணுகலைச் செலுத்துகிறது.

## Kernel பகிருங்கள், View தனிமைப்படுத்துங்கள்

Containers மற்ற வர்த்தகத்தை எடுக்கின்றன: host-இல் ஒவ்வொரு container-ம் *அதே* kernel-ஐப் பகிர்கிறது — instance ஒன்றுக்கு guest OS boot இல்லை — அதே நேரத்தில் kernel isolation வழங்குகிறது, ஒவ்வொரு container-இன் view தனித்தனியாகத் தெரியும்படி. இரண்டு Linux அம்சங்கள் பெரும்பாலான வேலையைச் செய்கின்றன. **Namespaces** process-இன் குறிப்பிட்ட வளங்களின் view-ஐத் தனிமைப்படுத்துகின்றன — PID namespace container-ஐ தன் சொந்த process மரத்தை மட்டும் பார்க்க வைக்கிறது (உள்ளே process 1 host-இல் PID 1 அல்ல); network namespace தனிப்பட்ட இடைமுகங்கள் மற்றும் routing கொடுக்கிறது; mount namespace தனிப்பட்ட filesystem view கொடுக்கிறது. **Cgroups** (control groups) CPU, நினைவகம், மற்றும் I/O-ஐ வரம்பு மற்றும் கணக்கு வைக்கின்றன, ஒரே host-இல் ஒரு container மற்றவற்றைப் பட்டினி போடாதபடி.

வம்சாவளி buzzword-ஐ விடப் பழையது: chroot (process-இன் தோற்ற filesystem root-ஐ மாற்றுதல், 1980களின் ஆரம்பம்) தசாப்தங்களுக்கு முன் வரையறுக்கப்பட்ட filesystem isolation; cgroups மற்றும் நவீன namespaces அந்தக் கருத்தை process-இன் உலகின் அதிக பகுதிக்கு பொதுமைப்படுத்துகின்றன.

## வர்த்தகம் ஏன் அளவில் வென்றது

Containers host kernel பகிர்வதால், அவை பொதுவாக வினாடியின் பின்னத்தில் தொடங்குகின்றன (kernel boot இல்லை) மற்றும் instance ஒன்றுக்கு மிகச் சிறிய அடிச்சுவட்டைச் சுமக்கின்றன — நகல் kernel image அல்லது kernel-நிலை caches இல்லை. அந்தத் திறன் அவை நவீன cloud உள்கட்டமைப்பின் இயல்புநிலை packaging மற்றும் deployment அலகாக மாறியதற்குக் காரணம்: அதே வன்பொருளில் VM-களை விட மிக அதிக containers, இது விநியோகிக்கப்பட்ட அமைப்புகள் (Phase 7) உண்மையில் ஓடும் அளவில் முக்கியம்.

வர்த்தகம்: பகிரப்பட்ட kernel என்றால் போதுமான கடுமையான kernel vulnerability கொள்கையளவில் container isolation-ஐ உடைக்கலாம் — தனி-kernel virtualization-இன் கீழ் கட்டமைப்புரீதியாகக் கடினமான வழி. பெரும்பாலான production அமைப்புகள் அதை வேண்டுமென்றே ஏற்கின்றன, சில நேரம் மேலே அதிக sandboxing அடுக்கி. பதிவு 45-இன் Kubernetes விவாதம் இங்கிருந்து தொடர்கிறது: இலகுவான, வேகமாகத் தொடங்கும் isolation அலகு இருந்தால், அடுத்த பிரச்சினை கப்பற்படை முழுவதும் ஆயிரக்கணக்கானவற்றை orchestrate செய்வது.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

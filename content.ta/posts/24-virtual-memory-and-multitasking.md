---
title: "Virtual Memory மற்றும் Multitasking"
weight: 24
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 24
tags: []
summary: "Time-sharing-க்கு isolation தேவை — virtual memory ஒவ்வொரு process-க்கும் இயந்திரத்தைச் சொந்தமாக்கிய மாயையைக் கொடுக்கிறது"
image_prompt: "Diagram of virtual address space mapping to physical memory via a page table, clean OS textbook diagram style"
video_prompt: "20-second animation: a virtual address translated through a page table, page fault triggering a swap, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: page table translation + multiple process address spaces sharing physical memory"
---

Time-sharing (பதிவு 22) பல process-கள் ஒரே இயந்திரத்தில் — தோற்றத்தில் ஒரே நேரத்தில் — ஓட வேண்டும். உடனடி பிரச்சினை: ஒவ்வொரு process-ம் எந்த physical முகவரியையும் சுதந்திரமாகப் படித்து எழுத முடிந்தால், ஒரு பிழை அல்லது தீங்கிழைக்கும் நிரல் மற்றொன்றின் தரவை, அல்லது OS தன்னைக் கெடுக்கலாம். Virtual memory ஒவ்வொரு process-க்கும் முழு address space-ஐச் *சொந்தமாக்கிய* மாயையைக் கொடுத்து அதைத் தடுக்கிறது, OS கீழே உண்மையை நிர்வகிக்கும்போது.

## மைய மாயை

ஒவ்வொரு process-ம் முழு virtual address space-ஐப் பார்க்கிறது — 64-பிட் அமைப்பில், physical RAM-ஐ விட மிகப் பெரியது. அது ஒரு virtual முகவரியைக் குறிப்பிடும்போது, வன்பொருள் (Memory Management Unit, அல்லது MMU) OS பராமரிக்கும் page table வழியாக physical முகவரிக்கு மொழிபெயர்க்கிறது. இரண்டு process-களும் "virtual முகவரி 0x1000"-ஐக் குறிப்பிட்டு இரண்டு வெவ்வேறு physical frame-களைத் தாக்கலாம் — ஒன்று மற்றொன்றின் நினைவகத்தைப் பார்க்க முடியாது, ஒவ்வொரு process-இன் உள்ளேயிருந்தும் சாதாரண, தனிப்பட்ட உரிமை போல் தெரிந்தாலும்.

## Pages, Faults, Swap

நினைவகம் நிலையான அளவு pages-ஆகப் பிரிக்கப்படுகிறது (பல கட்டமைப்புகளில் பொதுவாக 4 KB; பெரிய "huge pages" உள்ளன). Page table virtual pages-ஐ physical frames-க்கு வரைபடமாக்குகிறது. முக்கியமாக, ஒவ்வொரு virtual page-க்கும் *எல்லா நேரத்திலும்* frame தேவையில்லை — "not present" எனக் குறிக்கவும், குறிப்பு page fault ஆக OS-க்குள் trap ஆகும். OS பக்கத்தை disk-இலிருந்து ஏற்றலாம் (குறியீடு மற்றும் தரவின் lazy கொண்டுவருதல்), அல்லது உண்மையான பிழையாகக் கருதலாம் (ஒருபோதும் வழங்கப்படாத நினைவகத்தை அணுகுதல் — segmentation fault-க்கு ஒரு பொதுவான பாதை).

அதே பொறிமுறை swapping-ஐ இயக்குகிறது: நினைவக அழுத்தத்தின் கீழ், குளிர்ந்த page-ஐ disk-இல் எழுதி, not-present எனக் குறித்து, frame-ஐ விடுவிக்கவும். அமைப்பு physically இருப்பதை விட அதிக RAM இருப்பது போல் நடந்துகொள்கிறது — அந்த page மீண்டும் தொடப்பட்டால் disk-வேகம் செலவில். ஏராளமான RAM கனமான swapping-ஐ முன்பு இருந்ததை விடக் குறைவாக ஆக்குகிறது; பொறிமுறை அடிப்படையாகவே இருக்கிறது.

## Isolation பாதுகாப்பாக

Multitasking-ஐ இயக்குவதற்கு அப்பால், மொழிபெயர்ப்பு ஒரு பாதுகாப்பு எல்லை. ஒரு process-க்கு மற்றொரு process-இன் physical நினைவகத்தை முகவரியிட *பொறிமுறை* இல்லை — அதன் page table-இல் அங்கே வரைபடமாகும் செல்லுபடியான virtual முகவரி இல்லை. நன்கு நடந்துகொள்ளும், sandboxed process ஒன்றில் நினைவகக் கெடுதல் (கொள்கையளவில்) தொடர்பில்லாத process-ஐப் படிக்கவோ கெடுக்கவோ விடாது; isolation வன்பொருள்-சரிபார்க்கப்பட்ட முகவரி மொழிபெயர்ப்பு, மரபு அல்ல.

## இது எங்கே போகிறது

Virtual memory ஒவ்வொரு process-க்கும் தனிப்பட்ட address space கொடுக்கிறது — வலுவான உத்தரவாதம், மற்றும் கனமான ஒன்று: சொந்த kernel கட்டமைப்புகள், சொந்த page tables, அவற்றுக்கிடையே முழு context-switch செலவு. Containers (அடுத்த பதிவு) கேட்கின்றன: ஒவ்வொரு tenant-க்கும் முழு தனி kernel செலுத்தாமல், process-களுக்குத் தேவையான *பெரும்பாலான* நடைமுறை isolation-ஐப் பெற முடியுமா?

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 4: இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள் (நினைவக மேலாண்மை அறிமுகம் — page table / MMU / swap அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

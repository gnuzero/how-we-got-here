---
title: "Out-of-Order Execution"
weight: 16
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 16
tags: []
summary: "காத்திருக்க வேண்டியதை மட்டும் stall செய்யுங்கள் — Tomasulo-வின் யோசனை: தயாரானபோது execute, வரிசையில் commit"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

பதிவு 13-இன் load-use hazard ஒரு in-order pipeline-ஐ *ஒரு* காத்திருக்கும் அறிவுறுத்தலுக்குப் பின்னால் stall செய்கிறது — பிந்தைய அறிவுறுத்தல்கள் சுதந்திரமாகவும் தயாராகவும் இருந்தாலும். Out-of-order execution அந்தக் கட்டுப்பாட்டிற்குப் பதிலளிக்கிறது: operands தயாரானபோதெல்லாம் சுதந்திரமான வேலையை ஓட்டுங்கள்; கட்டமைப்பு தேவைப்படும் இடங்களில் மட்டும் நிரல் வரிசையை அமலாக்குங்கள்.

## False Dependencies மற்றும் Register Renaming

ஒவ்வொரு "dependency"-ம் உண்மையானதல்ல. அறிவுறுத்தல் A R1-ஐ எழுதி, பின்னர் அறிவுறுத்தல் B தொடர்பில்லாத முடிவுக்கு R1-ஐயும் எழுதினால், அவற்றுக்கிடையே மதிப்பு ஓடாது — ISA-க்கு வெறும் சில architectural பதிவேட்டு *பெயர்கள்* உள்ளன, மற்றும் compiler ஒன்றை மீண்டும் பயன்படுத்தியது. அது name (false) dependency, உண்மையான data dependency அல்ல.

Register renaming CPU-க்கு ISA வெளிப்படுத்தும் அளவை விட அதிக *physical* பதிவேடுகளைக் கொடுத்து, ஒவ்வொரு எழுத்தையும் decode-இல் புதிய physical பதிவேட்டிற்கு மேப் செய்கிறது. A-இன் "R1" P17 ஆகிறது; B-இன் பிந்தைய "R1" P42 ஆகிறது. False conflict இல்லை; இரண்டும் முன்னேற முடியும்.

## தயாரானபோது Issue, வரிசையில் Commit

Renamed அறிவுறுத்தல்கள் உண்மையான operands வரும் வரை **reservation stations**-இல் காத்திருக்கின்றன (மதிப்பால் அல்லது இன்னும் பறக்கும் producer-இன் tag-ஆல்). Operands தயாரான தருணம், அறிவுறுத்தல் ஒரு execution unit-க்கு issue ஆக முடியும் — அசல் நிரல் வரிசையைப் பொருட்படுத்தாமல். அதுதான் out-of-order பகுதி.

Architectural விளைவுகள் இன்னும் in-order-ஆகத் தெரிய வேண்டும்: தெரியும் பதிவேடுகள், நினைவகம், exceptions. **Reorder buffer (ROB)** ஒவ்வொரு in-flight அறிவுறுத்தலையும் நிரல் வரிசையில் கண்காணித்து, execution வேறு நேரங்களில் முடிந்தாலும், அந்த வரிசையில் மட்டுமே முடிவுகளை architectural நிலைக்கு *retire* செய்கிறது.

## Tomasulo-வின் மைய யோசனை

"தயாரானபோதெல்லாம் execute, கண்டிப்பாக வரிசையில் commit" — IBM System/360 Model 91 floating-point unit-க்கான Robert Tomasulo-வின் algorithm-க்கு (1967-இல் வெளியிடப்பட்டது) அடிக்கடி வரவு வைக்கப்படும் முறை — அதன்பிறகு கிட்டத்தட்ட ஒவ்வொரு உயர்-செயல்திறன் out-of-order CPU-இன் கருத்தியல் மையம். அது விலை உயர்ந்ததும்: renaming அட்டவணைகள், reservation stations, மற்றும் ROB பரப்பு மற்றும் மின்சாரம் செலவாகும். அந்த இயந்திரத்தை மேலும் சேர்ப்பது குறைந்துவரும் வருவாயைக் கொடுக்கிறது — அடுத்த பதிவு நேருக்கு நேர் மோதும் சுவர்.

{{< lab type="mini-cpu" >}}

**Door out:** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — நவீன out-of-order issue மற்றும் rename-க்குப் பின்னால் உள்ள முதன்மை ஆய்வுக்கட்டுரை.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

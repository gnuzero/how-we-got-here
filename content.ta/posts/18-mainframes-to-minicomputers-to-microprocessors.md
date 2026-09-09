---
title: "Mainframes முதல் Minicomputers முதல் Microprocessors வரை"
weight: 19
date: 2026-01-01
draft: false
phase: "3 — CPU மற்றும் அதன் கட்டமைப்புகளைக் கட்டுதல்"
series_index: 18
tags: []
summary: "கணினி யாருக்குக் கிடைக்கும் மூன்று காலங்கள் — நிறுவனம், துறை, பிறகு அனைவருக்கும் ஒரு சிப்"
image_prompt: "Timeline infographic showing mainframe, minicomputer, and microprocessor at matching scale, clean historical infographic style"
video_prompt: "20-second animation: a room-sized mainframe shrinking through generations down to a single chip, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: mainframe/minicomputer/microprocessor size/cost timeline + IBM S/360 vs PDP-11 vs Intel 4004 comparison"
---

ENIAC (Phase 1) சுமார் 1,800 சதுர அடி ஆக்கிரமித்து சுமார் 30 டன் எடை கொண்டது. ஒரு தொலைபேசி CPU அதை ஒரு விரல் நுனியில் பல மடங்கு செயல்திறனால் வெல்கிறது. அந்தச் சுருக்கம் ஒரு தாவல் அல்ல — மூன்று காலங்கள், ஒவ்வொன்றும் வேறுவிதமாகப் பதிலளித்தது: *கணினி யாருக்குக் கிடைக்கும், மற்றும் எத்தனை உள்ளன?*

## Mainframes: ஒரு இயந்திரம், பகிரப்பட்டது

1950கள்–60கள்: பல்கலைக்கழகங்கள், நிறுவனங்கள், அரசுகளுக்கான அறை நிரப்பும் இயந்திரங்கள் — batch processing வழியாகப் பகிரப்பட்டவை (பதிவு 21). IBM-இன் System/360 (1964) அளவைத் தாண்டி முக்கியம்: ஒரு செயல்திறன் வரம்பில் இணக்கமான இயந்திரங்களின் *குடும்பம்*, அதே மென்பொருள். ISA-ஐ (பதிவு 11) கீழிருக்கும் பெட்டியிலிருந்து வேண்டுமென்றே பிரித்தல், வாடிக்கையாளரின் குறியீடு வன்பொருள் மேம்பாட்டைத் தாங்கும்படி. Gene Amdahl, Gerrit Blaauw, மற்றும் Fred Brooks அந்தக் கட்டமைப்பை இயக்கினர்.

## Minicomputers: ஒரு துறை ஒன்றை வாங்க முடியும்

1970கள்: DEC-இன் PDP-11 (1970) மற்றும் உறவினர்கள் இயந்திரத்தை ஒரு துறை — முழு நிறுவனம் அல்ல — வாங்கி மைய அலுவலகம் இல்லாமல் ஓட்டக்கூடிய ஒன்றாகச் சுருக்கின. நீண்ட ஆயுளில் சுமார் 600,000 PDP-11-கள் விற்றன. ISA-இன் orthogonal முகவரி மற்றும் சுத்தமான குறியாக்கம் பிந்தைய வடிவமைப்பை வடிவமைத்தது, C-இல் உள்ள பழக்கங்கள் உட்பட (பதிவு 27), அது Unix-உடன் (பதிவு 22) பெரும்பாலும் PDP-11 வன்பொருளில் வளர்ந்தது.

## Microprocessors: ஒரு Die-இல் CPU

தொடர்ச்சியின்மை: முழு CPU-ஐயும் தனித்த பாகங்களின் racks இணைப்பதற்குப் பதிலாக ஒரு ஒருங்கிணைந்த சுற்றில் உற்பத்தி செய்யுங்கள். Intel-இன் 4004 (1971), ஒரு கணிப்பானுக்காகக் கட்டப்பட்டது, வழக்கமாக முதல் வணிக single-chip CPU-ஆக வரவு வைக்கப்படுகிறது — 4-பிட், சுமார் 2,300 டிரான்சிஸ்டர்கள், சுமார் 740 kHz வரை. எந்த நவீன அளவிலும் பலவீனமானது; அடுத்த பதிவில் உள்ள 8080, Z80, மற்றும் x86 வரிசையின் நேரடி முன்னோடி.

## சுருக்கம் ஏன் கூட்டு விளைவாக அமைந்தது

ஒவ்வொரு படியும் Phase 8-இன் fabrication அடர்த்தியைப் பின்தொடர்கிறது: அதிக டிரான்சிஸ்டர்கள், குறைந்த பரப்பு, குறைந்த செலவு. Mainframes backplane-களில் ஆயிரக்கணக்கான கூறுகள்; microprocessors அந்த அமைப்பை சிலிகானில் சுருக்கின. கணினி நிறுவன வளத்திலிருந்து துறைக் கருவிக்கு தனிப்பட்ட (பின்னர் embedded) சாதனத்திற்கு நகர்ந்தது — Phase 8 ஒரு நவீன process node உண்மையில் என்ன பொருள் என்பதற்குள் பின்தொடரும் அதே அளவிடல் வளைவு.

{{< lab type="mini-cpu" >}}

**Door out:** G. M. Amdahl, G. A. Blaauw, and F. P. Brooks Jr., "Architecture of the IBM System/360" (*IBM Journal of Research and Development*, 1964) — இணக்கமான இயந்திரக் குடும்பம் மற்றும் ISA/implementation பிரிப்பின் முதன்மைக் கூற்று.

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 3: கணினி அமைப்பு (மையச் செயலகம், நுண்செயலி — அறிமுகம்)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

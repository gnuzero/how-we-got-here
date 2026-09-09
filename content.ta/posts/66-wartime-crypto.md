---
title: "போர்க்கால Crypto"
weight: 66
date: 2026-09-06
draft: false
phase: "Crypto மற்றும் போர்க்கால கணினி"
series_index: 66
tags: []
summary: "Enigma, Bletchley மற்றும் Colossus — cipher-களை உடைப்பது ஏன் மின்னணுக் கணினியைக் கட்டாயப்படுத்தியது"
image_prompt: "Clean historical-technical diagram: Enigma rotors beside a Colossus rack of vacuum tubes at Bletchley, connective arrows from cipher traffic to electronic counting, muted wartime-engineering style"
video_prompt: "20-second animation: Enigma rotors stepping, intercept traffic flooding in, electromechanical Bombe searching, then Colossus tubes counting at electronic speed, clean technical motion graphics"
schematics: "Diagram: Enigma rotor stepping → Bombe search → Colossus electronic counting, bridging Posts 02–03"
---

பதிவுகள் 01–02 gears மற்றும் relays தானியங்கிக் கணினி சாத்தியம் என நிரூபித்ததைக் காட்டுகின்றன. போர் அந்தச் சாத்தியத்தை *அவசரமாக்கியது*: cipher போக்கு எந்த மனித அறையும் படிக்கக்கூடியதை விட வேகமாக வந்தது, மற்றும் தொடரக்கூடிய இயந்திரங்கள் கணினியை மின்னியந்திரத்திலிருந்து மின்னணுவியலுக்கு இழுத்தன.

இது **workload-ஆக இரகசியம்** மற்றும் பதிவு 03-இன் வெற்றிடக் குழாய் இயந்திரங்களுக்கு இடையேயான இணைப்புத் திசு — போரின் இரண்டாவது வரலாறு அல்ல.

## Enigma நகரும் இலக்கு

ஜெர்மன் Enigma குடும்பம் நீங்கள் தட்டச்சு செய்யும்போது படிப்படியாக நகரும் rotors-உடன் செயல்பாட்டுப் போக்கை மறையாக்கியது, எனவே மாற்று ஒவ்வொரு எழுத்திலும் மாறியது. ஒரு செய்தியை உடைப்பது அடுத்த நாளுக்கு இலவசமாக வாங்கவில்லை. போருக்கு முன், போலந்து Cipher Bureau கணிதவியலாளர்கள் — Marian Rejewski, Jerzy Różycki மற்றும் Henryk Zygalski உடன் — வரையறுக்கப்பட்ட இடைமறிப்புகள் மற்றும் ஆவணங்களிலிருந்து Enigma-வின் உள் wiring-ஐ மறுகட்டமைத்து, அந்த அடித்தளத்தை பிரிட்டிஷ் மற்றும் பிரெஞ்சுக்குப் பகிர்ந்தனர். Door out: Rejewski-இன் சொந்தக் கணக்குகள் மற்றும் அருங்காட்சியகங்கள்/காப்பகங்கள் வைத்திருக்கும் போலந்து–நட்பு நாடு பரிமாற்ற வரலாறுகள், Wikipedia paraphrase அல்ல.

Bletchley Park-இல், Alan Turing (Hut 8) மற்றும் சகாக்கள் அந்தக் கணித உடைப்பைத் தொழில்துறைத் தேடலாக மாற்றினர்: பிரிட்டிஷ் Bombe (முக்கிய வடிவமைப்பு மேம்பாடுகளில் Gordon Welchman-இன் diagonal board உடன்) Enigma அமைப்புகளை மின்னியந்திர சாத்திய-வெளித் தேடலாக ஓட்டியது. Relays மற்றும் drums *வேட்டையாட* முடிந்தது. பின்னர் teleprinter cipher-கள் கோரிய வேகத்தில் ciphertext எண்ண முடியவில்லை.

## Colossus: Workload உலோகத்தைத் தாண்டியபோது

Lorenz teleprinter cipher-கள் ("Tunny") வேறு பிரச்சினையை உருவாக்கின: மின்னணு வேகத்தில் புள்ளியியல் தாக்குதல் தேவைப்படும் நீண்ட ஓடைகள். Max Newman அந்தத் தாக்குதலைச் சுற்றி Newmanry-ஐ ஒழுங்குபடுத்தினார். Tommy Flowers, தொலைபேசி மாறுதலில் ஏற்கனவே வெற்றிடக் குழாய்களை நம்பிய Post Office பொறியாளர், **Colossus**-ஐக் கட்டினார் (முதல் இயந்திரம் டிசம்பர் 1943இல் செயல்பாடு; Mark II 1944இல்) — காகித நாடா படித்து உடைக்கக்கூடிய அமைப்புகளை நோக்கி எண்ணும் குழாய்களின் racks.

கட்டுப்பாட்டைப் பெயரிடுங்கள், புராணத்தை அல்ல: Colossus சிறப்பு-நோக்கு cryptanalytic மின்னணுவியல், பொது stored-program கணினி அல்ல. அது *கட்டாயப்படுத்தியது* பெரிய எண்ணிக்கையிலான குழாய்களை அந்த workload-இல் எந்த relay பண்ணையையும் வெல்லும் போதிய நம்பக இயந்திரமாகக் கம்பி இணைக்க முடியும் என்பதன் நிரூபணம். அது பதிவு 03 unpack செய்யும் அதே இயற்பியல் பந்தயம் — சுவிட்சில் நகரும் தொடர்புகள் இல்லை — அமைதிக்கால ஆராய்ச்சி ஓய்வுக்குப் பதிலாகப் போர்க்கால அழுத்தத்தின் கீழ்.

Door out: [The National Museum of Computing](https://www.tnmoc.org/) (Colossus rebuild மற்றும் முதன்மைப் பொருள்); அறிவார்ந்த Colossus இலக்கியத்தில் Tommy Flowers மற்றும் Max Newman (எ.கா. Copeland-இன் தொகுக்கப்பட்ட வரலாறுகள்); Enigma/Bombe-க்கு Bletchley Park-இன் சொந்தக் காப்பக வழிகாட்டிகள்.

## Transistor வாதத்திற்கு முன் இது ஏன் சேர்கிறது

Spine-ஐ முன்னோக்கிப் படியுங்கள்:

- **பதிவு 02** — relays இரும தர்க்கத்தை நிரூபிக்கின்றன மற்றும் நகரும் உலோகம் மிக மெதுவானதும் என நிரூபிக்கின்றன.
- **இந்தப் பதிவு** — உண்மையான workload (cipher தேடல் மற்றும் ஓடை எண்ணல்) "மிக மெதுவானது" செயல்பாட்டளவில் ஏற்றுக்கொள்ள முடியாததாக்குகிறது.
- **பதிவு 03** — குழாய்கள் இயந்திர இயக்கத்தை அகற்றுகின்றன; ENIAC-அளவு இயந்திரங்கள் வெவ்வேறு நிரல்களின் கீழ் மின்னணுச் சுவிட்சைப் பெறுகின்றன.
- **பதிவு 04** — குழாய்கள் பிறகு *தன்* கூரையைத் தாக்கும் (வெப்பம், ஆற்றல், தோல்வி), அதனால்தான் டிரான்சிஸ்டர் நடக்க வேண்டியிருந்தது.

போர்க்கால crypto கணினியைக் கண்டுபிடிக்கவில்லை. அது நூற்றாண்டின் கடினமான தகவல் பிரச்சினைகளில் ஒன்றுக்கு மின்னியந்திரத்திலிருந்து மின்னணுவியலுக்குத் தாவலை *விருப்பமல்லாததாக்கியது* — மற்றும் வேலையைச் செய்த பெயரிடப்பட்ட மக்களின் பாதையை விட்டுச் சென்றது. விருப்பப் பக்கப் பாதை; முக்கிய பயணம் பதிவு 03-இல் தொடர்கிறது.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

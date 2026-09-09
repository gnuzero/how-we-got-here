---
title: "கம்பிக்கு யார் முடிவெடுக்கிறார்கள்"
weight: 64
date: 2026-09-06
draft: false
phase: "ஆளுமை / இணையக் குடியியல்"
series_index: 64
tags: []
summary: "பன்முக வலையமைப்புகள் இடைசெயல்பட எண்கள், பெயர்கள் மற்றும் encodings-ஐ யார் பெயரிடுகிறார்கள்"
image_prompt: "Clean diagram of shared registries — protocol numbers, IP addresses, domain names, Unicode code points — flowing into one interoperable packet path, internet-governance infographic style"
video_prompt: "20-second animation: a packet gaining meaning only after number, name, and encoding registries agree, clean technical motion graphics"
schematics: "Diagram: numbers (IANA) / addresses (RIRs) / names (DNS+ICANN) / encodings (Unicode) as four shared coordination layers above TCP/IP"
---

ARPANET (பதிவு 39) மற்றும் TCP/IP (பதிவு 41) packets எப்படி நகரும் என்பதைத் தீர்த்தன. அவை தனியாக அமைதியான கேள்விக்குப் பதிலளிக்கவில்லை: *bits என்ன அர்த்தம் எனச் சொல்ல யார் அனுமதி பெறுகிறார்கள்?* Port 80, ஒரு IPv4 prefix, `.com`, ก-க்கான code point — தொலை இயக்குநர்கள் அதே அடையாளங்களை அதே வழியில் கருதாவிட்டால் எதுவும் வேலை செய்யாது. இணையத்தின் ஆளுமைக் கதை அந்த ஒப்பந்தத்தின் கதை: வலையமைப்புக்கு மேல் ஒரு பாராளுமன்றம் அல்ல, ஆனால் **எண்கள்**, **பெயர்கள்** மற்றும் **encodings**-க்கான பகிரப்பட்ட பதிவேடுகளின் தொகுப்பு.

## நிறுவனங்களுக்கு முன் ஆவணங்கள்

முதல் ஒருங்கிணைப்புக் கருவி ஒரு ஆவணத் தொடர். ஏப்ரல் 1969இல், Steve Crocker [RFC 1](https://www.rfc-editor.org/rfc/rfc1)-ஐ வெளியிட்டார் — *Host Software* — ARPANET ஆராய்ச்சி சமூகத்திற்கான பணிக் குறிப்புகளாக. தொனி முக்கியம்: "Request for Comments," "ஆணை" அல்ல. Jon Postel கிட்டத்தட்ட மூன்று பத்தாண்டுகள் தொடரைத் தொகுத்து, முறைசாரா மெமோக்களை இணையம் உண்மையில் எப்படி வேலை செய்கிறது என்பதன் நீடித்த பொதுப் பதிவாக மாற்றினார். Door out: [RFC Editor history](https://www.rfc-editor.org/history/).

ஆராய்ச்சி சமூகம் நடைபாதைக் கூட்டங்களை வளர்ந்ததும், Internet Engineering Task Force (IETF)-ஐ வளர்த்தது. சுமை தாங்கும் சொற்றொடர் Dave Clark-இன்: *rough consensus and running code* — தரநிலைகள் வாக்களிப்பால் அல்ல, shipping ஆல் தங்கள் வைப்பைச் சம்பாதிக்கின்றன. IETF இணையத்தைச் சொந்தமாக வைத்திருக்கவில்லை; இயக்குநர்கள் பயன்படுத்தும் ஒன்றாக நெறிமுறைகளை வாதிடும் செயல்முறையைச் சொந்தமாக வைத்திருக்கிறது. Door out: [ietf.org](https://www.ietf.org/).

## எண்கள்: யாராவது அடையாளங்களை வழங்க வேண்டும்

Packets protocol numbers, port numbers, address blocks, ASN மதிப்புகள், media types சுமக்கின்றன — இரு குழுக்கள் வெவ்வேறு அர்த்தங்களுக்கு அதே ஒன்றை அச்சிட்டால் மதிப்பில்லாத அடையாளங்கள். ஆண்டுகளாக அந்தப் பதிவேடு ஒரே இடத்தில் வாழ்ந்தது: Internet Assigned Numbers Authority (IANA), UCLA மற்றும் பின்னர் USC/ISI-இல் ஆராய்ச்சி ஒப்பந்தங்களின் கீழ் Jon Postel (நீண்டகால தொடர்புப் புள்ளியாக Joyce Reynolds உடன்) நடைமுறை சேவையாக இயக்கியது. IANA ஒரு *வகையின்* விதை: implementations இருதரப்பு பேச்சுவார்த்தை இல்லாமல் இடைசெயல்பட protocol parameters-க்கான நடுநிலைப் பதிவேடு.

வலையமைப்பு ஒரு நபரின் நோட்புக்கைத் தாண்டி அளவிட்டதும், எண் வளங்கள் *வகை* ஆல் பிரிந்தன. Protocol parameters IANA-வுடன் இருந்தன. IP address இடம் Regional Internet Registries நோக்கி நகர்ந்தது — வட அமெரிக்காவின் பெரும்பகுதிக்கு ARIN (1997) Nayana கொடுத்த விதைப் பெயர்; RIPE NCC, APNIC, LACNIC மற்றும் AFRINIC மற்ற பிராந்தியங்களுக்கு அதே *வகை*, சிலவற்றின் கீழ் அந்தப் பிராந்தியம் தேர்ந்தெடுத்த மாதிரியில் national அல்லது local Internet registries (NIR-கள்). Pattern தான் புள்ளி: அரிய, தனித்துவ அடையாளங்களுக்கு எல்லோரும் சுட்டிக்காட்டக்கூடிய ஒரு பாதுகாவலர் தேவை. Door out: [iana.org](https://www.iana.org/), [arin.net](https://www.arin.net/).

## பெயர்கள்: மனிதர்களுக்குச் சொற்கள் தேவை; இயந்திரங்களுக்குத் தனித்துவம் தேவை

Paul Mockapetris-இன் DNS விவரக்குறிப்புகள் ([RFC 1034](https://www.rfc-editor.org/rfc/rfc1034), [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)) படிநிலைப் பெயர்களை முகவரி fabric மீது விநியோகிக்கப்பட்ட lookup அமைப்பாக மாற்றின. பெயர்கள் மூல எண்கள் இல்லாத வகையில் அரசியல்: மக்கள் சொற்கள் மீது வாதிடுகின்றனர். Jon Postel-இன் [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591) ஆரம்ப domain கொள்கையைப் பொறுப்பாண்மையாக வரைந்தது.

1990-களின் பிற்பகுதியில் அமெரிக்க அரசு அந்த ஒருங்கிணைப்புச் செயல்பாடுகளை ஒற்றை ஆராய்ச்சி ஒப்பந்தத்திலிருந்து வெளியேற்ற விரும்பியது. ICANN (Internet Corporation for Assigned Names and Numbers) 1998இல் உருவானது — இடைக்காலத் தலைவர் Esther Dyson — IANA அந்தக் குடைக்குக் கீழ் செயல்பாட்டுப் பதிவேடுகளாகத் தொடர, பெயர்கள் மற்றும் எண்கள் கொள்கைக்கான நிறுவன இருக்கையை வைத்திருக்க. ICANN-ஐ மற்றொரு *வகையின்* விதையாகப் படியுங்கள்: பகிரப்பட்ட namespace-இன் நிலைத்தன்மை மற்றும் தனித்துவமே வேலை, applications இடையே வெற்றியாளர்களைத் தேர்ந்தெடுப்பது அல்ல. Door out: [icann.org](https://www.icann.org/).

## Encodings: Payload அதே Glyph அர்த்தம் கொள்ள வேண்டும்

இரு முனைகளும் ஒரு byte வரிசை *என்ன* என உடன்படாதபோது இடைசெயல்பாடு அமைதியாகத் தோல்வியடையும். Unicode Consortium (1991இல் நிறுவப்பட்டது; ஒற்றை character set தேவைப்பட்ட நிறுவனங்கள் குறுக்கே Joe Becker, Mark Davis மற்றும் பிறரின் ஆரம்ப வேலை) சுருக்க எழுத்துகளிலிருந்து code points-க்குப் பகிரப்பட்ட மேப்பிங்கைப் பராமரிக்கிறது — ஒவ்வொரு application-உம் தன் alphabet அட்டவணையைக் கண்டுபிடிக்காமல் தமிழ், Latin மற்றும் emoji ஒரே கம்பியைப் பகிரக் காரணம். UTF-8 பிறகு அந்த repertoire-க்கு மேலாதிக்க *on-the-wire* encoding ஆனது. Door out: [unicode.org](https://www.unicode.org/), [Unicode Standard](https://www.unicode.org/standard/standard.html).

## அதே வகையின் உறவினர்கள்

சில peers ஒரு வாக்கியம் சம்பாதிக்கின்றன — அதே *வகை* பகிரப்பட்ட அர்த்தம், தரநிலை-அமைப்பு சுற்றுலா அல்ல:

- **W3C மற்றும் WHATWG** — Tim Berners-Lee World Wide Web Consortium-ஐ (1994) web platform தரநிலைகளைப் பராமரிக்க நிறுவினார்; browser vendors வேகமான iteration பாதை தேவைப்பட்டபோது WHATWG பின்னர் living HTML/DOM specs சுமந்தது. அதே *வகை*: browser-இல் ஒரு ஆவணம் மற்றும் API என்ன அர்த்தம் என வரையறுக்க யார் அனுமதி.
- **IEEE** — IEEE 802 ஏன் Ethernet (பதிவு 40) மற்றும் Wi-Fi link அடுக்கில் proprietary தீவு பேச்சுவழக்குகள் அல்ல.
- **ISO மற்றும் peers** — கொள்முதல், பாதுகாப்பு அல்லது தேசிய அமைப்புகள் கோரும் இடத்தில் முறைசார்ந்த சர்வதேச தரநிலைகள் RFC உலகத்திற்கு அருகில் அமர்கின்றன; இணையம் பெரும்பாலும் முதலில் RFCs-இல் shipping செய்து பின்னர் இசைவுபடுத்தியது.

## இது ஏன் பயணத்தில் சேர்கிறது

பதிவுகள் 39–41 பொறியியல் பந்தயம்: packets, அடுக்குகள், நம்பகமற்ற substrate. இந்தப் பதிவு அவற்றின் கீழ் குடியியல் பந்தயம்: **பகிரப்பட்ட அர்த்தம் உள்கட்டமைப்பு**. யாராவது (மற்றும் சில செயல்முறை) எண்கள், பெயர்கள் மற்றும் encodings முடிவெடுக்காவிட்டால், ஒவ்வொரு புதிய வலையமைப்பும் தனிப்பட்ட மொழி. மேலேயுள்ள கதவுகள் முதன்மை மூலங்கள் — RFCs, பதிவேடுகள், consortium பக்கங்கள்.

இங்கிருந்து விருப்பப் பக்கப் பாதைகள்: அந்தப் பகிரப்பட்ட கம்பியில் மக்கள் எப்படி *கண்டுபிடித்தார்கள்* மற்றும் *பேசினார்கள்* (பதிவு 43), அல்லது போர்க்கால crypto இரகசியங்களை வைத்திருக்கக்கூடிய இயந்திரங்களை எப்படிக் கட்டாயப்படுத்தியது (பதிவு 66). முக்கிய spine packets → அமைப்புகள் → சிலிகான் → attention ஆகவே இருக்கும்; இது நீங்கள் எடுக்கலாம் அல்லது தவிர்க்கலாம் என்ற lens-ஐ விரிவாக்கும் துடிப்பு.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

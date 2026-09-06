---
title: "TCP/IP மற்றும் நவீன இணைய Stack"
date: 2026-01-01
draft: false
phase: "6 — வலையமைப்பு பரிணாமம்"
series_index: 41
tags: []
summary: "பன்முக நம்பகமற்ற இணைப்புகள் அடுக்கு உத்தரவாதங்களைக் கட்டாயப்படுத்தின — IP route செய்கிறது; TCP நம்பக stream-ஐ மீண்டும் கட்டுகிறது"
image_prompt: "Layered protocol stack diagram with a packet gaining headers at each layer, clean networking textbook diagram style"
video_prompt: "25-second animation: data flowing down through TCP/IP layers gaining headers, then unwrapped at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model with encapsulation + TCP three-way handshake diagram"
---

ARPANET (பதிவு 39) packet switching-ஐ நிரூபித்தது. Ethernet (பதிவு 40) உள்ளூர் கம்பியைத் தரநிலைப்படுத்தியது. எதுவும் தனியாக *வெவ்வேறு* வலையமைப்புகளை — வெவ்வேறு ஊடகங்கள், வெவ்வேறு முகவரி — எந்த இரண்டு இயந்திரங்களும் பயன்படுத்தக்கூடிய ஒரே internetwork-ஆக எப்படித் தைக்க வேண்டும் எனச் சொல்லாது. Vint Cerf மற்றும் Bob Kahn-இன் TCP/IP suite அதைத் தீர்த்தது; நவீன இணையம் இன்னும் ஓடும் அடித்தளம் அது.

## அடுக்கு மாதிரி

TCP/IP கவலைகளை PCIe-இன் stack பிரிக்கும் விதத்தில் பிரிக்கிறது (பதிவு 33), internetworking அளவில். **Link** உள்ளூர் hop-ஐக் கையாளும் — Ethernet, Wi-Fi, fiber. **Internet (IP)** அந்த இணைப்புகளுக்கு *குறுக்கே* உலகளாவிய முகவரி மற்றும் routing தரும்; ஒரு IP packet அதைச் சுமக்கும் ஊடகம் என்னவெனப் பொருட்படுத்தாது. **Transport (TCP அல்லது UDP)** IP மீது நம்பக வரிசைப்படுத்தப்பட்ட வழங்கல் (TCP) அல்லது குறைந்த-overhead best-effort (UDP) வழங்குகிறது. **Application** HTTP, DNS, SMTP மற்றும் உறவினர்கள் அமர்வது, பொருத்தமான transport-ஐத் தேர்ந்தெடுத்து.

## Encapsulation

கீழே நகரும் தரவு ஒவ்வொரு அடுக்கிலும் ஒரு header பெறுகிறது — application bytes TCP/UDP கீழ், அந்த segment IP கீழ், அந்த packet ஒரு link header (மற்றும் அடிக்கடி trailer) கீழ். தொலை முனையில் செயல்முறை தலைகீழ்: ஒவ்வொரு அடுக்கும் தன் header-ஐ உரித்து, அது படித்ததை (ports, முகவரிகள்) பயன்படுத்தி மீதியை மேலே ஒப்படைக்கும்.

## நம்பகமற்ற Substrate மீது TCP

IP வெளிப்படையாக best-effort — வழங்கல் வாக்குறுதி இல்லை, வரிசை வாக்குறுதி இல்லை, drops அனுமதிக்கப்பட்டவை. TCP sequence numbers மற்றும் acknowledgments (மற்றும் ACK-கள் வராதபோது retransmission) மூலம் மீது ஒரு நம்பக வரிசைப்படுத்தப்பட்ட byte stream கட்டுகிறது — பதிவு 33-இன் PCIe data-link அடுக்கின் அதே நம்பகத்தன்மை *வகை*, ஒரே அர்ப்பணிக்கப்பட்ட இணைப்புக்குப் பதிலாக முழு நம்பகமற்ற internetwork குறுக்கே நீட்டப்பட்டது.

ஒரு connection மூன்று-வழி handshake-ஆல் தொடங்குகிறது: SYN (client ஒரு sequence number முன்மொழிகிறது), SYN-ACK (server ஒப்புக்கொண்டு தன் சொந்தத்தை முன்மொழிகிறது), இறுதி ACK. அதற்குப் பிறகுதான் application தரவு ஓடும் — இரு பக்கங்களும் முதலில் ஒத்திசைக்கப்பட்ட நிலையைப் பகிரும் சிறிய வேண்டுமென்ற செலவு.

## இந்த வடிவமைப்பு ஏன் வென்றது

சுமை தாங்கும் கருதுகோள் அடிப்படை வலையமைப்பு பன்முகமும் நம்பகமற்றதும், எனவே உத்தரவாதங்கள் ஒவ்வொரு இயற்பியல் இணைப்பிலும் அல்லாமல் உயர் அடுக்கில் இருக்க வேண்டும். அது பத்தாண்டுகளாக வெவ்வேறு தொழில்நுட்பங்களிலிருந்து, ஒரு இயற்பியல் தரநிலையில் ஒருபோதும் ஒப்புக்கொள்ளாத நிறுவனங்களால் தைக்கப்பட்ட உலகளாவிய internetwork-க்குப் பொருந்தியது — அதனால்தான் TCP/IP இன்னும் கிட்டத்தட்ட முழு நவீன இணையத்திற்கும் கீழே அமர்ந்திருக்கிறது, அடுத்த datacenter வலையமைப்புகள் உட்பட.

**Door out:** [RFC 791](https://www.rfc-editor.org/rfc/rfc791) (Internet Protocol) மற்றும் [RFC 793](https://www.rfc-editor.org/rfc/rfc793) (Transmission Control Protocol) — இந்த stack-இன் முகவரி/routing மற்றும் நம்பக-transport பாதிகளுக்கான முதன்மை விவரக்குறிப்புகள் (Cerf/Kahn வம்சாவளி; இந்த செப்டம்பர் 1981 உரைகளுக்கு RFC editor ஆக Postel).

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 11: வலையமைப்பு எடுத்துக்காட்டுகள் மற்றும் நெறிமுறைகள் (TCP/IP நான்கு அடுக்குகள்; IP best-effort; TCP நம்பக connection-oriented; UDP; Ethernet 802.3)
- மு. சிவலிங்கம், *நெட்வொர்க் தொழில்நுட்பம்* (பாரதி பகத் பதிப்பகம்; TCP/IP அடுக்குகள், IPv4/IPv6, application நெறிமுறைகள் — three-way handshake ஆழம் பள்ளிப் பாடத்திற்கு அப்பால்)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

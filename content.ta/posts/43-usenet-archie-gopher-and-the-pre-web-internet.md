---
title: "Usenet, Archie, Gopher மற்றும் Pre-Web இணையம்"
date: 2026-01-01
draft: false
phase: "7 — விநியோகிக்கப்பட்ட அமைப்புகள், Big Data மற்றும் Orchestration"
series_index: 43
tags: []
summary: "கண்டுபிடி, பிறகு பேசு — Usenet, Archie, Gopher, IRC, மற்றும் இரண்டையும் தொகுத்த consumer portals"
image_prompt: "Historical illustration of a Usenet hierarchy, Archie prompt, Gopher menu, IRC channel list, and a Yahoo-style portal homepage as one arc, clean vintage internet-history infographic style"
video_prompt: "25-second animation: a Usenet post propagating, an Archie query, a Gopher drill-down, IRC messages in a channel, then a portal homepage bundling directory + chat + mail, clean historical technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: find (Archie/Gopher) + talk (Usenet/IRC) converging into consumer portals, then into the open web"
---

TCP/IP (பதிவு 41) இணையத்திற்கு உலகளாவிய முகவரி மற்றும் transport அடித்தளம் கொடுத்தது. அதன் *மீது* ஓடியது, World Wide Web ஆதிக்க இடைமுகமாக மாறுவதற்கு முன் ஏறக்குறைய இரண்டு பத்தாண்டுகளுக்கு, இரண்டு முகங்களுடன் ஒரு வளைவு: ஏதோ ஒன்றை **கண்டுபிடி**, பிறகு யாரோ ஒருவரிடம் **பேசு**. விநியோகிக்கப்பட்ட விவாதம், ஆரம்ப தேடல், மெனு-இயக்க உலாவல், real-time அரட்டை, மற்றும் இறுதியில் consumer portals ஒவ்வொன்றும் அந்த வளைவின் ஒரு துண்டை அந்த நேரத்தில் கிடைத்த தொழில்நுட்பத்தால் தீர்த்தன.

## Usenet: விநியோகிக்கப்பட்ட விவாதம், மைய Server இல்லை

Usenet (Duke-இல் Tom Truscott மற்றும் Jim Ellis, 1979-இல் கருத்தரிக்கப்பட்டது, 1980-இல் பொது) நவீன web-ஐ ஒரு பத்தாண்டுக்கு மேல் முந்தியது. அனைத்து விவாதத்தையும் மைய server host செய்யாது. பங்கேற்கும் servers செய்திகளை store-and-forward பரிமாறும் — முதலில் UUCP dial-up மீது, பின்னர் NNTP (1986) வழியாக TCP/IP மீது — எனவே ஒரு server தன் peers-இலிருந்து posts ஏற்று, சேமித்து, முன்னனுப்பும். ஒரு post ஒற்றை மைய கட்டுப்பாட்டுப் புள்ளி இல்லாமல் பரவுகிறது.

Hierarchical newsgroups (`comp.lang.c`, `rec.arts.movies`, …) மைய moderator மரம் திணிக்காமல் விவாதம் தலைப்பால் தானே ஒழுங்கமைக்க அனுமதிக்கின்றன. அந்த வடிவமைப்பு அதை மாற்றிய பெரும்பாலானவற்றின் வேறு தத்துவம் — பதிவு 44 உள்ளடக்கும் distributed-systems கருத்துகளுக்கு ஆவியில் நெருக்கமானது, தரவுச் செயலாக்கத்திற்குப் பதிலாக மனிதப் பேச்சுக்குப் பயன்படுத்தப்பட்டது.

## Archie: முதல் தேடல் கருவி

நவீன search engine போன்ற எதற்கும் முன், குறிப்பிட்ட கோப்பைக் கண்டுபிடிப்பது எந்த host அதை வைத்திருக்கிறது என அறிவதைக் குறித்தது. Archie (1990, McGill; Alan Emtage, Bill Heelan மற்றும் Peter Deutsch உடன்) குறுகிய வெட்டை எடுத்தது: அறியப்பட்ட FTP servers-ஐ அவ்வப்போது poll செய்து, பொது filename-களை index செய்து, பயனர்கள் index-ஐத் தேட அனுமதிக்க. உள்ளடக்கங்கள் வரம்புக்கு வெளியே — பெயர்கள் மட்டும் — ஆனால் server ஊகிப்பதைத் தாண்டிய பெரிய படி அது.

## Gopher: Web-க்கு முன் மெனு-இயக்க உலாவல்

Gopher (1991, University of Minnesota; Mark McCahill மற்றும் சக ஊழியர்கள்) hierarchical, மெனு-இயக்க வழிசெலுத்தல் வழங்கியது: ஆவணங்கள், துணைமெனுக்கள், பிற Gopher servers-க்கான இணைப்புகள், free-form hyperlinks-க்குப் பதிலாக எண்ணால் தேர்ந்தெடுக்கப்பட்டவை. Web-ஐ விட அதிகக் கட்டுப்படுத்தப்பட்டது — மற்றும் 1990களின் ஆரம்பத்தில் சுருக்கமான காலத்திற்கு, இணையத்தின் தகவல் இடம் எப்படி ஒழுங்கமைக்கப்படும் என்பதற்குத் தீவிர போட்டியாளர்.

## IRC: Peer Talk in Real Time

Usenet *பரவிய* பேச்சு. IRC *இப்போது நடந்த* பேச்சு. ஆகஸ்ட் 1988-இல், University of Oulu-வில் Jarkko Oikarinen OuluBox BBS-இல் பல-பயனர் உரையாடலை மேம்படுத்த Internet Relay Chat கட்டினார் — பகுதியாக Bitnet Relay மற்றும் Jyrki Kuoppala, Jukka Pihl ஆகியோரின் உள்ளூர் கருவிகளால் ஈர்க்கப்பட்டு — பிறகு நண்பர்கள் வேறு இடங்களில் `ircd` ஓட்டியபோது servers Finland-ஐ North America-வுடன் இணைப்பதைப் பார்த்தார். Channels, nicknames, மற்றும் servers-இன் federated mesh ஒற்றை corporate host இல்லாமல் இணையத்திற்கு நேரடி அறை கொடுத்தன. நெறிமுறை பின்னர் RFC 1459-இல் இறங்கியது (Oikarinen மற்றும் Darren Reed, 1993).

**Door out:** [RFC 1459](https://www.rfc-editor.org/rfc/rfc1459) — முதன்மை IRC நெறிமுறை விவரக்குறிப்பு.

## Consumer Portals: கண்டுபிடித்தலையும் பேச்சையும் தொகுத்தல்

1990களின் நடுவில், மேலே உள்ள திறந்த கருவிகள் இன்னும் நீங்கள் client-ஐ எங்கு சுட்டிக்காட்ட வேண்டும் என அறிவீர்கள் எனக் கருதின. Consumer portals வேறு பந்தயம் விற்றன: directory கண்டுபிடித்தல், செய்திகள், mail, மற்றும் chat-ஐ *தொகுக்கும்* ஒரு homepage, புதியவர் வளைவைத் தானே அமைக்கத் தேவையில்லை.

Yahoo அந்த *வகையின்* விதை. 1994-இல், Stanford பட்டதாரி மாணவர்கள் Jerry Yang மற்றும் David Filo "Jerry and David's Guide to the World Wide Web"-ஐத் தொடங்கினர் — மனித-வரையறுக்கப்பட்ட hierarchical directory — அதை Yahoo! என மறுபெயரிட்டு, directory மீது search, mail, மற்றும் பிற sticky சேவைகளை அடுக்கிய portal-ஆக வளர்த்தனர். உறவினர்களைத் தருவித்து நிறுத்துங்கள்: AOL-இன் walled garden, Excite, Lycos, மற்றும் ஒத்த முன் கதவுகள் அதே *வகை* — வெகுஜன பார்வையாளருக்கு find-then-talk தொகுத்த கவன மையங்கள் — இரண்டாவது நிறுவனக் கலைக்களஞ்சியம் அல்ல. Door out: portal காலத்தை மேலே உள்ள நெறிமுறைகள் மீது அமர்ந்த தயாரிப்பு வரலாறாகக் கருதுங்கள், அவற்றுக்கு மாற்றாக அல்ல.

## திறந்த Web ஏன் மெனுக்களையும் Hubs-ஐயும் முந்தியது

Web-இன் மைய நகர்வு — நிலையான மெனு படிநிலை அல்லது ஒரு portal-இன் taxonomy-க்குப் பூட்டப்படாமல், *எந்த* பிற ஆவணத்தையும், எங்கும் சுட்டிக்காட்டக்கூடிய hyperlinks உடன் HTML — Gopher மெனுக்கள் அல்லது curated directory-ஐ விட நெகிழ்வான find மாதிரி. Netscape Navigator (1994), முன்னாள் NCSA Mosaic developers நிறுவிய நிறுவனத்திலிருந்து வணிக ஆதரவு மற்றும் விரைவு iteration உடன், அந்த மாதிரியை ஆராய்ச்சிக் கருவியிலிருந்து mainstream பயன்பாட்டுக்குத் தள்ளியது. Portals வளைவைத் தொகுத்துக் கொண்டே இருந்தன; திறந்த hyperlink graph (மற்றும் பின்னர், அடுத்த பதிவில் crawler-அளவு தேடல்) *கண்டுபிடி* பாதியை வென்று கொண்டே இருந்தது.

Gopher mainstream பயன்பாட்டிலிருந்து மறைந்தது. Usenet மற்றும் IRC முழுவதும் மறையவில்லை — பெரும்பாலான மக்களின் முதல் கதவாக இருப்பதை நிறுத்தின. Archie-இன் filename index ஒரு *வகையின்* விதை, பதிவு 44 முழு decentralized web-ஐ index செய்வதாக அளவிடும்.

## இது ஏன் இந்தத் தொடரில் சேர்கிறது

கண்டுபிடித்தலும் பேச்சும் பக்க trivia அல்ல. Usenet-இன் decentralized பரவல், Archie-இன் index-over-distributed-hosts பிரச்சனை, IRC-இன் federated நேரடி அறைகள், மற்றும் அனைத்தையும் productize செய்யும் portal பந்தயம் அடுத்த பதிவுகள் பெரிய அளவில் கேட்கும் அதே *வகை* கேள்விகளாக மீண்டும் தோன்றும்: மைய catalog இல்லாத இடத்தை எப்படித் தேடுவீர்கள், மற்றும் கம்பி பகிரப்பட்ட பிறகு மக்கள் எப்படி உரையாடலில் இருப்பார்கள்?

{{< lab type="vm-terminal" >}}

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *12ஆம் வகுப்பு கணினி பயன்பாடுகள்*, பாடம் 10–11 (இணைய வரலாறு / TCP/IP அறிமுகம்; FTP போன்ற application நெறிமுறைகள் — Usenet/Archie/Gopher/IRC வரலாற்று ஆழம் அல்ல)
- மு. சிவலிங்கம், *நெட்வொர்க் தொழில்நுட்பம்* (பாரதி பகத் பதிப்பகம்; FTP, SMTP, DNS, HTTP application அடுக்கு — pre-web find/talk வரலாறு அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

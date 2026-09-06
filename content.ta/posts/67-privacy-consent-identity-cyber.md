---
title: "தனியுரிமை, ஒப்புதல், அடையாளம், Cyber"
date: 2026-09-06
draft: false
phase: "தனியுரிமை / அடையாளம் / ஒப்புதல்"
series_index: 67
tags: []
summary: "திறந்த வலையமைப்பில் தனியுரிமை, ஒப்புதல், அடையாளம் மற்றும் cybersecurity — கொள்கை கையேடு அல்ல, பொறியியல் பரிணாமம்"
image_prompt: "Clean layered diagram: isolation boundaries, cryptographic keys, identity credentials, and adversarial threat arrows on one stack, modern security-engineering infographic style"
video_prompt: "20-second animation: a shared wire gaining encryption, then authentication, then scoped consent tokens, while an attacker path is blocked at each layer, clean technical motion graphics"
schematics: "Diagram: isolation (OS) → crypto on the wire → identity/auth → consent scopes → adversarial ops as one engineering arc"
---

போர்க்கால crypto (பதிவு 66) அர்ப்பணிக்கப்பட்ட இயந்திர அறையுள்ள அரசு எதிரியை எதிர்த்த இரகசியம். திறந்த இணையம் வேறு பொறியியல் பிரச்சினையை எழுப்புகிறது: *பல* தரப்பினர் கம்பி, host-கள் மற்றும் platform-களைப் பகிர்கின்றனர் — அவர்களில் சிலர் விரோதமானவர்கள், ஆர்வமுள்ளவர்கள், அல்லது பயனரை விட வெறுமனே பெரியவர்கள். தனியுரிமை, ஒப்புதல், அடையாளம் மற்றும் cybersecurity அந்தப் பிரச்சினை குறியீட்டிலும் நெறிமுறைகளிலும் பரிணமித்ததன் பெயர்கள். இது கொள்கை கையேடு அல்ல.

## Isolation முதலில் வந்தது

"தனியுரிமை தயாரிப்பு"-க்கு முன், **பாதுகாப்பு** இருந்தது. Jerome Saltzer மற்றும் Michael Schroeder-இன் 1975 கணக்கெடுப்பு, [*The Protection of Information in Computer Systems*](https://web.mit.edu/Saltzer/www/publications/protection/), இன்னும் பொறியியல் சட்டமாகப் படிக்கும் வடிவமைப்புக் கொள்கைகளை வரைந்தது: least privilege, complete mediation, fail-safe defaults, economy of mechanism. Virtual memory (பதிவு 24) மற்றும் containers (பதிவு 25) அதே பந்தயத்தின் பிந்தைய நிகழ்வுகள் — வன்பொருளும் kernel-உம் அமல்படுத்தும் எல்லையை வரையுங்கள், அதனால் ஒரு நிரல் மற்றொன்றை எளிதாகப் படிக்க முடியாது.

Door out: Saltzer & Schroeder (1975).

## பொது வலையமைப்பில் Crypto

பகிரப்பட்ட வலையமைப்புகள் பழைய courier-key மாதிரியைச் சரிவிழ்த்தன. Whitfield Diffie மற்றும் Martin Hellman-இன் 1976 கட்டுரை [*New Directions in Cryptography*](https://ee.stanford.edu/~hellman/publications/24.pdf) public-key உடன்படிக்கையை ஆராய்ச்சிப் பொருளாக்கியது: இடைமறிப்பாளர்கள் பரிமாற்றத்தைக் கேட்கும்போதும் இரு தரப்பினர் பகிரப்பட்ட இரகசியத்தை நிறுவ முடியும். Ronald Rivest, Adi Shamir மற்றும் Leonard Adleman RSA-உடன் (1977/78) தொடர்ந்தனர் — செய்தியுடன் பயணிக்கக்கூடிய பொது மறையாக்கம் மற்றும் கையொப்பங்கள். இன்றைய வலையில் TLS அந்த வரியின் நிறுவப்பட்ட வழித்தோன்றல் (நெறிமுறை திருத்தங்களின் நீண்ட தடத்துடன்), தனி ஒழுக்க வகை அல்ல.

Door out: Diffie–Hellman (1976); RSA கட்டுரை; [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) (TLS 1.3) நவீன கதவாக.

## அடையாளம் ஒரு நெறிமுறைப் பிரச்சினை

வலையமைப்பில் "நீங்கள் யார்?" ஒரு மனநிலை அல்ல — அது authentication மற்றும் authorization இயந்திரம். கடவுச்சொற்கள் ஆரம்ப மலிவு authenticator மற்றும் இன்னும் breach மேற்பரப்பு. Needham மற்றும் Schroeder-இன் authentication வேலை, Kerberos (MIT Project Athena; Steve Miller, Clifford Neuman மற்றும் சகாக்கள்), மற்றும் பின்னர் public-key சான்றிதழ்கள் அடையாளத்தை இயந்திரங்கள் சரிபார்க்கக்கூடிய *சரிபார்க்கக்கூடிய உரிமைகோரல்களாக* மாற்றின. OAuth மற்றும் OpenID Connect (IETF / OpenID Foundation specs) பிறகு "நீங்கள் யார் என நிரூபியுங்கள்"-ஐ "இந்த app-க்குக் குறுகிய திறனை வழங்குங்கள்"-இலிருந்து பிரித்தன — ஒப்புதல் scoped token ஆக, தெளிவற்ற வாக்குறுதி அல்ல.

பெயரிடப்பட்ட கட்டுப்பாடு: பாதுகாக்கும் சொத்தை விட verifier, credential அல்லது recovery பாதை பலவீனமாக இருக்கும்போது அடையாள அமைப்புகள் பொறியியலாகத் தோல்வியடைகின்றன. Door out: MIT-இன் Kerberos வரலாறுகள்; [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) (OAuth 2.0).

## அதிகாரத்திற்கான இடைமுகமாக ஒப்புதல்

ஒரு அமைப்பு எல்லையைக் கடந்து செயல்பட அனுமதி தேவைப்படும் இடமெல்லாம் stack-இல் ஒப்புதல் தோன்றுகிறது: உலாவிகளில் cookie jars மற்றும் same-origin policy (web platform-இன் isolation கதை), சாதனங்களில் அனுமதி அறிவிப்புகள், மற்றும் platform-களில் scoped API tokens. பொறியியல் கேள்வி எப்போதும் ஒன்றுதான் — *என்ன திறன் வழங்கப்பட்டது, யாருக்கு, எவ்வளவு காலம், மற்றும் அதை ரத்து செய்ய முடியுமா?* — UI நகல் "Accept" என்றாலும் header `Authorization` என்றாலும். பதிவு 64-இன் ஆளுமை அடுக்கு பெயர்களும் எண்களும் முடிவெடுக்கிறது; இந்த அடுக்கு *உங்கள் சார்பாக அவற்றை யார் பயன்படுத்தலாம்* என முடிவெடுக்கிறது.

## Cybersecurity: விரோத அமைப்புகள் பொறியியல்

வலையமைப்பு, supply chain, மற்றும் சில நேரம் இயக்குநர் விரோதமானவர்கள் என நீங்கள் கருதும்போது நடப்பதுதான் cybersecurity. அது மேலே உள்ள எல்லாவற்றையும் மீண்டும் பயன்படுத்துகிறது — isolation, crypto, அடையாளம் — தாக்குபவர் மாதிரியின் கீழ்: malware, phishing, side channels, பாதிக்கப்படக்கூடிய dependencies, அளவில் misconfiguration. துறையின் இணைப்புத் திசு பயம் அல்ல; அது feedback. பாதிப்புகள் பெயரிடப்படுகின்றன (CVE), patched ஆகின்றன, மற்றும் regress-tested ஆகின்றன; துஷ்பிரயோகம் rate limits, sandboxing மற்றும் monitoring-ஆல் எதிர்கொள்ளப்படுகிறது. Dorothy Denning-இன் ஆரம்ப intrusion-detection வேலை மற்றும் பிந்தைய CERT ஒருங்கிணைப்பு மாதிரி ஒரு *வகையின்* விதைகள்: தாக்குதல்களை அமைப்பை மறுவடிவமைக்கும் சமிக்ஞைகளாக நடத்துங்கள்.

Door out: CVE நிரல் ஆவணம்; Saltzer/Schroeder-ஐ அடித்தளமாக மேற்கோள் காட்டும் செவ்வியல் security-engineering நூல்கள்.

## இது ஏன் பயணத்தில் தாமதமாகச் சேர்கிறது

OS isolation, வலையமைப்புகள், விநியோகிக்கப்பட்ட அமைப்புகள் மற்றும் AI உள்கட்டமைப்பைப் புத்தகம் கட்டிய பிறகே platform-இல் தனியுரிமையை நேர்மையாகப் பேச முடியும். அந்த அத்தியாயங்கள் substrate. இது மேலே சவாரி செய்யும் விரோத மற்றும் ஒப்புதல்-வடிவ கட்டுப்பாடுகளைப் பெயரிடுகிறது — அதனால் பதிவு 69-இன் platform தொகுப்பு தனியுரிமைப் பொறியியலை முதல்-தர அடுக்காக நடத்த முடியும், பிற்சேர்க்கையாக அல்ல.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

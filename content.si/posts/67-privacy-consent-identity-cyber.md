---
title: "රහස්‍යතාව, එකඟතාව, අනන්‍යතාව, Cyber"
weight: 67
date: 2026-01-01
draft: false
phase: "රහස්‍යතාව / අනන්‍යතාව / එකඟතාව"
series_index: 67
tags: []
summary: "විවෘත ජාලයක් මත ඉංජිනේරු පරිණාමයක් ලෙස රහස්‍යතාව, එකඟතාව, අනන්‍යතාව, සහ cybersecurity — ප්‍රතිපත්ති පත්‍රිකාවක් නොවේ"
image_prompt: "Clean layered diagram: isolation boundaries, cryptographic keys, identity credentials, and adversarial threat arrows on one stack, modern security-engineering infographic style"
video_prompt: "20-second animation: a shared wire gaining encryption, then authentication, then scoped consent tokens, while an attacker path is blocked at each layer, clean technical motion graphics"
schematics: "Diagram: isolation (OS) → crypto on the wire → identity/auth → consent scopes → adversarial ops as one engineering arc"
---

යුද්ධකාලීන crypto (Post 66) කැපවූ යන්ත්‍ර කාමරයක් ඇති රාජ්‍ය විරුද්ධකරුවකුට එරෙහි රහස්‍යභාවය විය. විවෘත අන්තර්ජාලය වෙනස් ඉංජිනේරු ගැටලුවක් ඉදිරිපත් කරයි: *බොහෝ* පාර්ශ්ව වයර් එක, hosts, සහ platforms බෙදා ගනී — සහ ඒවායින් සමහරක් සතුරු, කුතුහලයෙන් යුතු, හෝ පරිශීලකයාට වඩා විශාල ය. රහස්‍යතාව, එකඟතාව, අනන්‍යතාව, සහ cybersecurity යනු එම ගැටලුව code සහ protocols තුළ පරිණාමය වූ ආකාරයට දෙන නම් ය. මෙය ප්‍රතිපත්ති පත්‍රිකාවක් නොවේ.

## Isolation පළමුව ආවේය

"privacy product" එකකට පෙර, **ආරක්ෂාව (protection)** තිබුණේය. Jerome Saltzer සහ Michael Schroeder ගේ 1975 survey, [*The Protection of Information in Computer Systems*](https://web.mit.edu/Saltzer/www/publications/protection/), තවමත් ඉංජිනේරු නීතියක් ලෙස කියවෙන නිර්මාණ මූලධර්ම රාමු කළේය: least privilege, complete mediation, fail-safe defaults, economy of mechanism. Virtual memory (Post 24) සහ containers (Post 25) එම ඔට්ටුවේම පසුකාලීන අවස්ථා ය — දෘඪාංගය සහ kernel එක බලාත්මක කරන සීමාවක් අඳින්න, එසේ නම් එක් වැඩසටහනකට අනෙකක් සුළුසේ කියවිය නොහැක.

පිටවීමේ දොර: Saltzer & Schroeder (1975).

## පොදු ජාලයක් මත Crypto

බෙදාගත් ජාල courier-key ආකෘතිය කඩා දැමුවේය. Whitfield Diffie සහ Martin Hellman ගේ 1976 පත්‍රිකාව [*New Directions in Cryptography*](https://ee.stanford.edu/~hellman/publications/24.pdf) public-key agreement පර්යේෂණ වස්තුවක් කළේය: eavesdroppers හුවමාරුව අසන අතරතුර පාර්ශ්ව දෙකකට බෙදාගත් රහසක් ස්ථාපිත කළ හැක. Ronald Rivest, Adi Shamir, සහ Leonard Adleman RSA (1977/78) සමඟ අනුගමනය කළහ — පණිවිඩය සමඟ ගමන් කළ හැකි public encryption සහ signatures. අද වෙබ් එකේ TLS යනු එම පෙළපතේ යෙදවූ පරම්පරාවයි (දිගු protocol සංශෝධන මාවතක් සමඟ), වෙනම සදාචාර කාණ්ඩයක් නොවේ.

පිටවීමේ දොර: Diffie–Hellman (1976); RSA පත්‍රිකාව; නවීන දොරක් ලෙස [RFC 8446](https://www.rfc-editor.org/rfc/rfc8446) (TLS 1.3).

## අනන්‍යතාව Protocol ගැටලුවකි

ජාලයක "ඔබ කවුද?" vibe එකක් නොවේ — එය authentication සහ authorization යන්ත්‍රෝපකරණයකි. Passwords මුල් ලාභ authenticator වූ අතර තවමත් breach මතුපිටකි. Needham සහ Schroeder ගේ authentication වැඩ, Kerberos (MIT Project Athena; Steve Miller, Clifford Neuman, සහ සගයන්), සහ පසුකාලීන public-key certificates අනන්‍යතාව යන්ත්‍ර පරීක්ෂා කළ හැකි *සත්‍යාපනය කළ හැකි claims* බවට පත් කළේය. OAuth සහ OpenID Connect (IETF / OpenID Foundation specs) පසුව "ඔබ කවුදැයි ඔප්පු කරන්න" සහ "මෙම app එකට පටු හැකියාවක් ලබා දෙන්න" වෙන් කළේය — එකඟතාව අපැහැදිලි පොරොන්දුවක් නොව scoped token එකක් ලෙස.

නම් කළ සීමාව: verifier එක, credential එක, හෝ recovery මාර්ගය ඔවුන් ආරක්ෂා කරන දේට වඩා දුර්වල වන විට අනන්‍යතා පද්ධති ඉංජිනේරු වශයෙන් අසාර්ථක වේ. පිටවීමේ දොර: MIT වෙතින් Kerberos ඉතිහාස; [RFC 6749](https://www.rfc-editor.org/rfc/rfc6749) (OAuth 2.0).

## බලයට Interface එකක් ලෙස එකඟතාව

පද්ධතියකට සීමාවක් හරහා ක්‍රියා කිරීමට අවසර අවශ්‍ය තැන තැන එකඟතාව stack එකේ පෙනේ: browsers තුළ cookie jars සහ same-origin policy (වෙබ් වේදිකාවේ isolation කතාව), උපාංග මත permission prompts, සහ platforms මත scoped API tokens. ඉංජිනේරු ප්‍රශ්නය සැමවිටම එකම ය — *කුමන හැකියාව, කාට, කොපමණ කාලයකට ලබා දුන්නේද, සහ එය අවලංගු කළ හැකිද?* — UI copy එක "Accept" කියනවාද හෝ header එක `Authorization` කියනවාද යන්න නොසලකා. Post 64 ගේ governance ස්ථරය නම් සහ අංක තීරණය කරයි; මෙම ස්ථරය තීරණය කරන්නේ *ඔබ වෙනුවෙන් ඒවා භාවිතා කළ හැක්කේ කාටද* යන්නයි.

## Cybersecurity: විරුද්ධකාරී පද්ධති ඉංජිනේරුකරණය

Cybersecurity යනු ජාලය, supply chain, සහ සමහර විට ක්‍රියාකරු සතුරු යැයි උපකල්පනය කරන විට සිදු වන දෙයයි. එය ඉහත සියල්ල — isolation, crypto, අනන්‍යතාව — attacker model එකක් යටතේ නැවත භාවිතා කරයි: malware, phishing, side channels, vulnerable dependencies, පරිමාණයේ misconfiguration. විනයේ සම්බන්ධක පටකය බිය නොවේ; එය ප්‍රතිපෝෂණයයි. Vulnerabilities නම් කෙරේ (CVE), patch කෙරේ, සහ regress-test කෙරේ; අපයෝජනයට rate limits, sandboxing, සහ monitoring සමඟ මුහුණ දෙයි. Dorothy Denning ගේ මුල් intrusion-detection වැඩ සහ පසුකාලීන CERT සම්බන්ධීකරණ ආකෘතිය *වර්ගයක* බීජ ය: ප්‍රහාර පද්ධතිය නැවත හැඩගස්වන සංඥා ලෙස සලකන්න.

පිටවීමේ දොර: CVE program ලේඛන; Saltzer/Schroeder පදනම ලෙස උපුටා දක්වන සම්භාව්‍ය security-engineering පාඨ.

## මෙය ගමනේ ප්‍රමාදයේ අයත් වන්නේ ඇයි

පොත OS isolation, ජාල, බෙදාහැරුණු පද්ධති, සහ AI infra ගොඩනඟා තිබෙන තුරු platform එකක රහස්‍යතාව ගැන අවංකව කතා කළ නොහැක. එම පරිච්ඡේද substrate එකයි. මෙය ඉහළින් ගමන් කරන විරුද්ධකාරී සහ එකඟතාව-හැඩැති සීමා නම් කරයි — එසේ නම් Post 69 ගේ platform සංස්ලේෂණයට privacy engineering පළමු පන්තියේ ස්ථරයක් ලෙස සැලකිය හැක, appendix එකක් ලෙස නොවේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

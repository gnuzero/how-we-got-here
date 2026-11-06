---
title: "රහස්‍යතාව, එකඟතාව, අනන්‍යතාව, Cyber"
weight: 74
date: 2026-01-01
draft: false
phase: "රහස්‍යතාව / අනන්‍යතාව / එකඟතාව"
series_index: 73
aliases:
  - /posts/67-privacy-consent-identity-cyber/
  - /posts/73-privacy-consent-identity-cyber/
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

## ගැඹුරින්: මූලධර්ම අටේ සිට RSA, Diffie–Hellman, TLS 1.3 සහ OAuth දක්වා — පැන්සලෙන්

ඉහත කොටස් චාපය (arc) නම් කළේය. මෙහිදී ප්‍රාථමික මූලාශ්‍රවලම ඇති උදාහරණ සහ නීති ගෙන, අතින් ගණනය කළ හැකි ප්‍රමාණයට කුඩා කර බලමු. "නිදර්ශන" ලෙස සලකුණු කළ සංඛ්‍යා පාඩම සඳහා අප තෝරාගත් ඒවාය — සැබෑ පද්ධතිවල අංක සිය ගණන් ඉලක්කම් දිගය.

### 1. Saltzer සහ Schroeder ගේ සැලසුම් මූලධර්ම අට (1975)

"The Protection of Information in Computer Systems" (Saltzer & Schroeder; MIT හි කතුවරුන්ගේ web පිටපත, "Basic Principles" කොටස) මූලධර්ම අටක් ලැයිස්තු කරයි:

1. **යාන්ත්‍රණයේ අරපිරිමැස්ම (Economy of mechanism):** සැලසුම හැකි තරම් සරල හා කුඩා කරන්න.
2. **ආරක්ෂිත පෙරනිමි (Fail-safe defaults):** ප්‍රවේශ තීරණ *බැහැර කිරීම* මත නොව *අවසරය* මත පදනම් කරන්න.
3. **සම්පූර්ණ මැදිහත්වීම (Complete mediation):** සෑම වස්තුවකටම කරන සෑම ප්‍රවේශයක්ම අධිකාරිය සඳහා පරීක්ෂා කළ යුතුය.
4. **විවෘත සැලසුම (Open design):** සැලසුම රහසක් නොවිය යුතුය; ආරක්ෂාව රඳා පැවතිය යුත්තේ යතුරු හෝ මුරපද මතය.
5. **වරප්‍රසාද වෙන් කිරීම (Separation of privilege):** හැකි තැන, යතුරු *දෙකක්* අවශ්‍ය යාන්ත්‍රණයක් එකකට වඩා ශක්තිමත්ය.
6. **අවම වරප්‍රසාදය (Least privilege):** සෑම වැඩසටහනක්ම සහ පරිශීලකයෙක්ම කාර්යයට අවශ්‍ය අවම වරප්‍රසාද කට්ටලයෙන් ක්‍රියා කළ යුතුය.
7. **අවම පොදු යාන්ත්‍රණය (Least common mechanism):** පරිශීලකයන් කිහිප දෙනෙකුට පොදු යාන්ත්‍රණ අවම කරන්න — එක් එක් පොදු යාන්ත්‍රණය පරිශීලකයන් අතර තොරතුරු මාර්ගයක් විය හැක.
8. **මනෝවිද්‍යාත්මක පිළිගැනීම (Psychological acceptability):** මිනිසුන් එය නිවැරදිව, ස්වයංක්‍රීයව භාවිත කරන තරමට අතුරුමුහුණත පහසු විය යුතුය.

ඊට අමතරව paper එක පරිගණකවලට "අසම්පූර්ණව පමණක්" ගැළපෙන මූලධර්ම දෙකක් කියයි; ඉන් එකක් **වැඩ සාධකය (work factor)**: ප්‍රහාරකයාගේ සම්පත් සමඟ යාන්ත්‍රණය මඟහැරීමේ පිරිවැය සසඳන්න. Paper එකේම උදාහරණය: අකුරු හතරේ මුරපද සියල්ල උත්සාහ කිරීමට අවශ්‍ය අත්හදා බැලීම් 26^4 = 456,976; terminal එකක අතින් නම් ප්‍රමාණවත් විය හැකි නමුත්, තත්පරයකට මුරපද මිලියනයක් උත්සාහ කළ හැකි පරිගණකයකට එය සුළු බාධාවකි.

**විසඳූ උදාහරණය 1:** 456,976 ÷ 1,000,000 ≈ **තත්පර 0.46**. (නිදර්ශන) අකුරු 8 කට: 26^8 = 208,827,064,576 ≈ තත්පර 208,827 ≈ **දින 2.4**. දිග එකතු කිරීම වැඩ සාධකය ඝාතීයව (exponentially) වැඩි කරයි.

### 2. Diffie–Hellman: රහසක් නොයවා රහසක් බෙදා ගැනීම (1976)

Diffie සහ Hellman ගේ "New Directions in Cryptography" (IEEE Transactions on Information Theory, IT-22, no. 6, නොවැම්බර් 1976; Stanford හි කතුවරයාගේ පිටපත, PDF p6) ක්‍රමය: ප්‍රථමක (prime) q සහ ප්‍රාථමික මූලද්‍රව්‍යයක් (primitive element) α පොදුය. සෑම පරිශීලකයෙක්ම රහස් අංකයක් X තෝරා, **Y = α^X mod q** පොදු ගොනුවක තබයි. i සහ j ට පොදු යතුර K = α^(Xi·Xj) mod q: i එය ගණනය කරන්නේ Yj^Xi ලෙස, j එය Yi^Xj ලෙස. ප්‍රහාරකයාට ඇත්තේ Yi සහ Yj පමණි; X සොයා ගැනීමට **discrete logarithm** ගණනය කිරීමට සිදු වේ — paper එක ආරක්ෂාව එම දුෂ්කරතාව මත රඳා පවතී යැයි කියයි.

**විසඳූ උදාහරණය 2 (නිදර්ශන — ඉතා කුඩා අංක):** q = 23, α = 5 (5 යනු mod 23 හි primitive element එකකි: 5^1 … 5^22 මගින් 1–22 සියල්ල ලැබේ). Alice X = 6, Bob X = 15.

- Alice: 5^6 = 15625; 15625 mod 23 = **8** → පොදු Y = 8.
- Bob: 5^15 mod 23 = **19** → පොදු Y = 19.
- Alice: 19^6 mod 23 = **2**. Bob: 8^15 mod 23 = **2**. දෙදෙනාටම K = 2, එය කිසිදා රැහැනේ ගියේ නැත.

පැන්සල් උපක්‍රමය: 19^6 = (19^2)^3; 19^2 = 361 = 15·23 + 16 → 16; 16^3 = 4096 = 178·23 + 2 → **2**. සෑම පියවරකදීම mod කරන්න, අංක කුඩාව පවතී.

### 3. RSA: paper එකේම කුඩා උදාහරණය

Rivest, Shamir සහ Adleman ගේ "A Method for Obtaining Digital Signatures and Public-Key Cryptosystems" (*Communications of the ACM* 21(2):120–126, February 1978, doi:10.1145/359340.359342; Rivest ගේ MIT පිටුවේ කතුවරුන්ගේ පිටපත — ලැබුණේ 1977 අප්‍රේල් 4, සංශෝධනය 1977 සැප්තැම්බර් 1; §VIII "A Small Example", PDF p10):

- p = 47, q = 59, n = 47 · 59 = **2773**.
- φ(n) = 46 · 58 = **2668**.
- රහස් d = **157**; පොදු e = **17** (Euclid ක්‍රමයෙන්, 17 · 157 ≡ 1 mod 2668).
- අකුරු: හිස්තැන = 00, A = 01, B = 02, …, Z = 26; block එකකට අකුරු දෙකක්.
- පණිවිඩය "ITS ALL GREEK TO ME" → `0920 1900 0112 1200 0718 0505 1100 2015 0013 0500`.
- පළමු block එක M = 920: 920^17 mod 2773 = **948**.

**විසඳූ උදාහරණය 3 (පරීක්ෂාව):** 17 · 157 = 2669 = 2668 + 1 ✓. Decrypt: 948^157 mod 2773 = **920** ✓ (අප python මගින් පරීක්ෂා කළෙමු). "IT" → I = 09, T = 20 → 0920.

පැන්සලෙන් 920^17: 17 = 10001 (ද්විමය) නිසා paper එක වර්ග කිරීම් හතරක් සහ ගුණ කිරීමක් භාවිත කරයි: M^17 = ((((M^2)^2)^2)^2) · M. ගුණ කිරීම් 5 ක් පමණි — 16 ක් නොවේ. සැබෑ RSA හි e සහ d bits දහස් ගණනක් වුවද, එම "square-and-multiply" ක්‍රමය නිසා ගණනය වේගවත්ය.

### 4. TLS 1.3: වෙනස්කම් දෙකක් (RFC 8446, අගෝස්තු 2018)

RFC 8446 §1.2 "Major Differences from TLS 1.2" හි ලැයිස්තුවෙන් දෙකක්:

- **Static RSA සහ Diffie–Hellman cipher suites ඉවත් කර ඇත;** සියලු public-key key exchange ක්‍රම දැන් **forward secrecy** සපයයි.
- **ServerHello ට පසු සියලු handshake පණිවිඩ encrypt වේ.**

**Forward secrecy** යනු: server එකේ දිගුකාලීන යතුර පසුව සොරා ගත්තද, පෙර සැසිවල (sessions) යතුරු ලබා ගත නොහැකි වීමයි. ඉහත DH උදාහරණය සිතන්න: සැසියකට වරක් නව X අංක (ephemeral) භාවිත කර විසි කළහොත්, පසුව සොරකම් කිරීමට කිසිවක් ඉතිරි නොවේ. Static RSA key transport හිදී, සැසි රහස server එකේ RSA යතුරෙන් encrypt වී රැහැනේ යයි — එම යතුර පසුව කාන්දු වූවොත්, පටිගත කළ පැරණි සැසි සියල්ල විවෘත වේ.

### 5. OAuth 2.0: භූමිකා හතර සහ authorization code (RFC 6749, ඔක්තෝබර් 2012)

RFC 6749 භූමිකා හතරක් නම් කරයි: **resource owner** (ඔබ), **client** (යෙදුම), **authorization server**, සහ **resource server** (API එක). ප්‍රධාන අදහස නම් එකඟතාවයි: client එකට ඔබේ මුරපදය ලැබෙන්නේ නැත; ඒ වෙනුවට සීමිත **scope** සහ කල් ඉකුත්වන **access token** එකක් ලැබේ.

Authorization code grant (§4.1) හිදී browser එක client එකට කෙටිකාලීන **code** එකක් ගෙන එයි; client එක එය authorization server සමඟ token එකකට හුවමාරු කරයි. §4.1.2 අනුව code එක නිකුත් කළ විගස ඉක්මනින් කල් ඉකුත් විය යුතු අතර **උපරිම මිනිත්තු 10** ක ආයු කාලයක් නිර්දේශිතය (RECOMMENDED); client එක code එක එක් වරකට වඩා භාවිත නොකළ යුතුය.

**විසඳූ උදාහරණය 4 (නිදර්ශන):** photo-printing යෙදුමකට ඔබේ ඡායාරූප කියවීමට පමණක් අවසර දෙයි. Saltzer මූලධර්ම සමඟ ගැළපීම: scope එක "කියවීම පමණක්" = **least privilege**; scope එකේ නැති ඕනෑම දෙයක් පෙරනිමියෙන් තහනම් = **fail-safe defaults**; සෑම API ඉල්ලීමකදීම token පරීක්ෂාව = **complete mediation**.

### පැන්සල් අභ්‍යාස

1. අකුරු 6 ක කුඩා අකුරු මුරපද සියල්ල, තත්පරයට මිලියනයක් බැගින් උත්සාහ කිරීමට කොපමණ කාලයක්ද? (නිදර්ශන)
2. q = 23, α = 5, Alice X = 3, Bob X = 7 (නිදර්ශන). පොදු අගයන් සහ බෙදාගත් K සොයන්න.
3. RSA උදාහරණයේ n = 2773 සමඟ, block එකකට අකුරු *තුනක්* (උදා. "ZZZ" = 262626) දැමිය නොහැක්කේ ඇයි?
4. 17 · 157 mod 2668 ගණනය කර e සහ d එකිනෙකෙහි ප්‍රතිලෝම බව පෙන්වන්න.
5. TLS 1.3 හි static RSA key exchange ඉවත් කිරීම forward secrecy ට අදාළ වන්නේ කෙසේද? වාක්‍ය දෙකකින්.

**පිළිතුරු:**
1. 26^6 = 308,915,776 → ≈ තත්පර 309 ≈ **මිනිත්තු 5.1**.
2. Alice: 5^3 = 125 mod 23 = **10**. Bob: 5^7 mod 23 = **17**. Alice: 17^3 mod 23 = **14**; Bob: 10^7 mod 23 = **14**. K = 14.
3. RSA ක්‍රියා කරන්නේ M < n සඳහාය; 262626 > 2773, එබැවින් block එක n ට වඩා කුඩා විය යුතුය. අකුරු දෙකක උපරිමය 2626 < 2773 ✓.
4. 17 · 157 = 2669; 2669 − 2668 = **1** ✓.
5. Static RSA හිදී සැසි රහස දිගුකාලීන යතුරෙන් ආරක්ෂා වන නිසා එම යතුර කාන්දු වූ විට පැරණි සැසි විවෘත වේ. සැසියකට නව (ephemeral) DH යතුරු භාවිත කිරීමෙන්, සැසිය අවසන් වූ පසු එම රහස නැවත ගණනය කිරීමට කිසිවක් ඉතිරි නොවේ.

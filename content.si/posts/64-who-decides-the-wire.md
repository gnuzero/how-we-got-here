---
title: "වයර් එක තීරණය කරන්නේ කවුද"
weight: 65
date: 2026-01-01
draft: false
phase: "Governance / අන්තර්ජාල පුරවැසිභාවය"
series_index: 64
tags: []
summary: "විවිධ ජාල අන්තර් ක්‍රියා කිරීමට අංක, නම්, සහ encodings නම් කරන්නේ කවුද"
image_prompt: "Clean diagram of shared registries — protocol numbers, IP addresses, domain names, Unicode code points — flowing into one interoperable packet path, internet-governance infographic style"
video_prompt: "20-second animation: a packet gaining meaning only after number, name, and encoding registries agree, clean technical motion graphics"
schematics: "Diagram: numbers (IANA) / addresses (RIRs) / names (DNS+ICANN) / encodings (Unicode) as four shared coordination layers above TCP/IP"
---

ARPANET (Post 39) සහ TCP/IP (Post 41) packets ගමන් කරන ආකාරය විසඳුවේය. ඒවා තනිවම නිහඬ ප්‍රශ්නයකට පිළිතුරු දුන්නේ නැත: *bits අදහස් කරන්නේ කුමක්දැයි කීමට අයිතිය ඇත්තේ කාටද?* Port 80, IPv4 prefix එකක්, `.com`, ก සඳහා code point එක — දුරස්ථ ක්‍රියාකරුවන් එකම හඳුනාගැනීම් එකම ආකාරයෙන් සලකන්නේ නම් මිස ඒවායින් කිසිවක් ක්‍රියා නොකරයි. අන්තර්ජාලයේ governance කතාව එම එකඟතාවේ කතාවයි: ජාලය මත පාර්ලිමේන්තුවක් නොව, **අංක**, **නම්**, සහ **encodings** සඳහා බෙදාගත් ledgers කට්ටලයක්.

## ආයතනවලට පෙර ලේඛන

පළමු සම්බන්ධීකරණ මෙවලම ලේඛන මාලාවක් විය. 1969 අප්‍රේල්හි, Steve Crocker [RFC 1](https://www.rfc-editor.org/rfc/rfc1) — *Host Software* — ARPANET පර්යේෂණ ප්‍රජාව සඳහා වැඩ සටහන් ලෙස ප්‍රකාශයට පත් කළේය. ස්වරය වැදගත් විය: "Request for Comments," "නියෝගයක්" නොවේ. Jon Postel දශක තුනකට ආසන්න කාලයක් මාලාව සංස්කරණය කර, අනියම් මතක සටහන් අන්තර්ජාලය ඇත්තටම ක්‍රියා කරන ආකාරයේ කල් පවතින ප්‍රසිද්ධ වාර්තාවක් බවට පත් කළේය. පිටවීමේ දොර: [RFC Editor history](https://www.rfc-editor.org/history/).

පර්යේෂණ ප්‍රජාව කොරිඩෝ රැස්වීම් ඉක්මවා වර්ධනය වූ විට, එය Internet Engineering Task Force (IETF) වර්ධනය කළේය. බර දරන වාක්‍යාංශය Dave Clark ගේ ය: *rough consensus and running code* — ප්‍රමිති ඡන්දයෙන් නොව නිකුත් කිරීමෙන් තමන්ගේ තැන උපයයි. IETF අන්තර්ජාලය හිමි නොකරයි; එය ක්‍රියාකරුවන් යෙදවීමට ඇති දෙයක් බවට protocols තර්ක කිරීමේ ක්‍රියාවලියක් හිමි කර ගනී. පිටවීමේ දොර: [ietf.org](https://www.ietf.org/).

## අංක: කවුරුහරි හඳුනාගැනීම් බෙදා දිය යුතුය

Packets protocol අංක, port අංක, address blocks, ASN අගයන්, media types රැගෙන යයි — කණ්ඩායම් දෙකක් විවිධ අර්ථ සඳහා එකම එකක් mint කරන්නේ නම් වටිනාකමක් නැති හඳුනාගැනීම්. වසර ගණනක් එම ledger එක එක් තැනක ජීවත් විය: Internet Assigned Numbers Authority (IANA), UCLA සහ පසුව USC/ISI හි පර්යේෂණ ගිවිසුම් යටතේ Jon Postel විසින් (Joyce Reynolds දිගුකාලීන සම්බන්ධතා ලක්ෂ්‍යයක් ලෙස) ප්‍රායෝගික සේවාවක් ලෙස ධාවනය කරන ලදී. IANA යනු *වර්ගයක* බීජයකි: implementations ට ද්විපාර්ශ්වික සාකච්ඡාවකින් තොරව අන්තර් ක්‍රියා කිරීමට protocol parameters සඳහා මධ්‍යස්ථ registry එකක්.

ජාලය එක් පුද්ගලයෙකුගේ සටහන් පොත ඉක්මවා පරිමාණය වූ විට, අංක සම්පත් *වර්ගය* අනුව බෙදුණේය. Protocol parameters IANA සමඟ රැඳුණේය. IP address space Regional Internet Registries දෙසට ගමන් කළේය — උතුරු ඇමරිකාවේ බොහෝ කොටස සඳහා ARIN (1997) බීජ නාමයයි; RIPE NCC, APNIC, LACNIC, සහ AFRINIC අනෙක් කලාප සඳහා එම *වර්ගයම* වන අතර, කලාපය එම ආකෘතිය තෝරා ගත් තැන ඒවා යටතේ ජාතික හෝ දේශීය Internet registries (NIR) වාඩි වේ. රටාවම කරුණ ය: දුර්ලභ, අනන්‍ය හඳුනාගැනීම්වලට සෑම කෙනෙකුටම පෙන්විය හැකි භාරකරුවෙකු අවශ්‍ය ය. පිටවීමේ දොර: [iana.org](https://www.iana.org/), [arin.net](https://www.arin.net/).

## නම්: මිනිසුන්ට වචන අවශ්‍ය ය; යන්ත්‍රවලට අනන්‍යතාව අවශ්‍ය ය

Paul Mockapetris ගේ DNS පිරිවිතර ([RFC 1034](https://www.rfc-editor.org/rfc/rfc1034), [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)) hierarchical නම් address fabric එක මත බෙදාහැරුණු lookup පද්ධතියක් බවට පත් කළේය. නම් අමු අංක නොවන ආකාරයකින් දේශපාලනික ය: මිනිසුන් වචන ගැන තර්ක කරයි. Jon Postel ගේ [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591) මුල් domain ප්‍රතිපත්තිය භාරකාරත්වය ලෙස රාමු කළේය.

1990 ගණන්වල අගභාගය වන විට එක්සත් ජනපද රජයට එම සම්බන්ධීකරණ කාර්යයන් තනි පර්යේෂණ ගිවිසුමකින් පිටතට ගැනීමට අවශ්‍ය විය. ICANN (Internet Corporation for Assigned Names and Numbers) 1998 දී පිහිටුවන ලදී — අන්තරීම කථානායක Esther Dyson — IANA එම කුඩාකුඩු යටතේ මෙහෙයුම් registries ලෙස දිගටම යන අතරතුර නම් සහ අංක ප්‍රතිපත්තිය සඳහා ආයතනික ආසනය තබා ගැනීමට. ICANN තවත් *වර්ගයක* බීජයක් ලෙස කියවන්න: බෙදාගත් namespace එකේ ස්ථායිතාව සහ අනන්‍යතාව එහි රැකියාව වන multi-stakeholder ආයතනයක්, යෙදුම් අතර ජයග්‍රාහකයන් තෝරා ගැනීම නොවේ. පිටවීමේ දොර: [icann.org](https://www.icann.org/).

## Encodings: Payload එකට එකම Glyph අදහස් කළ යුතුය

අන්තර් ක්‍රියාකාරිත්වය නිහඬව අසාර්ථක වන්නේ අන්ත දෙක byte අනුක්‍රමයක් *කුමක්ද* යන්න ගැන එකඟ නොවන විට ය. Unicode Consortium (1991 දී පිහිටුවන ලදී; තනි character set එකක් අවශ්‍ය සමාගම් හරහා Joe Becker, Mark Davis, සහ අනෙකුන්ගේ මුල් වැඩ) අමූර්ත අක්ෂර සිට code points දක්වා බෙදාගත් mapping එක පවත්වා ගනී — තායි, Latin, සහ emoji එක් එක් යෙදුමට තමන්ගේ අක්ෂර වගුව සොයා ගැනීමකින් තොරව එකම වයර් එකක් බෙදා ගත හැකි හේතුව. UTF-8 පසුව එම repertoire සඳහා ප්‍රමුඛ *on-the-wire* encoding බවට පත් විය. පිටවීමේ දොර: [unicode.org](https://www.unicode.org/), [Unicode Standard](https://www.unicode.org/standard/standard.html).

## එම වර්ගයේම Kin

පේළි කිහිපයක් වාක්‍යයක් උපයයි — එම *වර්ගයේම* බෙදාගත් අර්ථය, ප්‍රමිති-ආයතන සංචාරයක් නොවේ:

- **W3C සහ WHATWG** — Tim Berners-Lee World Wide Web Consortium (1994) වෙබ් වේදිකා ප්‍රමිති භාරකාරත්වයට පිහිටුවා ගත්තේය; browser vendors ට වේගවත් iteration මාර්ගයක් අවශ්‍ය වූ විට WHATWG පසුව ජීවමාන HTML/DOM specs රැගෙන ගියේය. එම *වර්ගයම*: browser එකේ ලේඛනයක් සහ API එකක් අදහස් කරන්නේ කුමක්දැයි අර්ථ දැක්වීමට අයිතිය ඇත්තේ කාටද.
- **IEEE** — IEEE 802 නිසා Ethernet (Post 40) සහ Wi-Fi link layer එකේ proprietary දූපත් උපභාෂා නොවේ.
- **ISO සහ peers** — මිලදී ගැනීම්, ආරක්ෂාව, හෝ ජාතික ආයතන ඒවා ඉල්ලන තැන නිල ජාත්‍යන්තර ප්‍රමිති RFC ලෝකය අසල වාඩි වේ; අන්තර්ජාලය බොහෝ දුරට පළමුව RFCs මත නිකුත් වී පසුව සමගි විය.

## මෙය ගමනට අයත් වන්නේ ඇයි

Posts 39–41 ඉංජිනේරු ඔට්ටුවයි: packets, ස්ථර, විශ්වාස කළ නොහැකි පදනම. මෙම පෝස්ට් එක ඒවා යටතේ ඇති පුරවැසිභාව ඔට්ටුවයි: **බෙදාගත් අර්ථය යනු යටිතල පහසුකමකි**. අංක, නම්, සහ encodings තීරණය කරන කෙනෙකු (සහ ක්‍රියාවලියක්) නොමැතිව, සෑම නව ජාලයක්ම පුද්ගලික භාෂාවකි. ඉහත දොරවල් ප්‍රාථමික මූලාශ්‍ර ය — RFCs, registries, consortium පිටු.

මෙතැන් සිට විකල්ප පැත්ත මාර්ග: එම බෙදාගත් වයර් එකේ මිනිසුන් දේවල් *සොයා ගත්* සහ *කතා කළ* ආකාරය (Post 43), හෝ යුද්ධකාලීන crypto රහස් තබා ගත හැකි යන්ත්‍ර බල කළ ආකාරය (Post 66). ප්‍රධාන කශේරුකාව packets → පද්ධති → සිලිකන් → අවධානය මත රැඳේ; මෙය ඔබට ගත හැකි හෝ මඟහැරිය හැකි කාචය පුළුල් කරන බීට් එකකි.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

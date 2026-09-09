---
title: "Usenet, Archie, Gopher සහ Web ට පෙර අන්තර්ජාලය"
weight: 43
date: 2026-01-01
draft: false
phase: "7 — බෙදාහැරුණු පද්ධති, Big Data සහ Orchestration"
series_index: 43
tags: []
summary: "Find, පසුව talk — Usenet, Archie, Gopher, IRC, සහ දෙකම ඇසුරුම් කළ පාරිභෝගික portals"
image_prompt: "Historical illustration of a Usenet hierarchy, Archie prompt, Gopher menu, IRC channel list, and a Yahoo-style portal homepage as one arc, clean vintage internet-history infographic style"
video_prompt: "25-second animation: a Usenet post propagating, an Archie query, a Gopher drill-down, IRC messages in a channel, then a portal homepage bundling directory + chat + mail, clean historical technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: find (Archie/Gopher) + talk (Usenet/IRC) converging into consumer portals, then into the open web"
---

TCP/IP (Post 41) අන්තර්ජාලයට සාමාන්‍ය addressing සහ transport පදනමක් දුන්නේය. World Wide Web ප්‍රමුඛ අතුරුමුහුණත බවට පත් වීමට පෙර දශක දෙකකට ආසන්න කාලයක් එය *මත* ධාවනය වූයේ මුහුණු දෙකක් සහිත එක චාපයකි: යමක් **find** කරන්න, පසුව කාගෙන් හෝ **talk** කරන්න. බෙදාහැරුණු සාකච්ඡාව, මුල් සෙවීම, menu-ධාවිත browsing, තත්‍ය-කාල chat, සහ අවසානයේ පාරිභෝගික portals එක් එක් එක එකල තිබූ තාක්ෂණයෙන් එම චාපයේ කොටසක් විසඳුවේය.

## Usenet: බෙදාහැරුණු සාකච්ඡාව, මධ්‍යම Server නැත

Usenet (Duke හි Tom Truscott සහ Jim Ellis, 1979 දී සංකල්පගත, 1980 දී ප්‍රසිද්ධ) නවීන web ට වඩා දශකයකට වැඩි කාලයකින් පෙරදායි. මධ්‍යම server එකක් සියලු සාකච්ඡාව සත්කාරකත්වය නොකරයි. සහභාගී servers store-and-forward මගින් පණිවිඩ හුවමාරු කරයි — පළමුව UUCP dial-up මත, පසුව NNTP (1986) මගින් TCP/IP මත — එවිට server එකක් තම peers වෙතින් posts ලබා ගෙන, ගබඩා කර, ඉදිරියට යවයි. Post එකක් තනි මධ්‍යම පාලන ලක්ෂ්‍යයක් නොමැතිව ප්‍රචාරණය වේ.

Hierarchical newsgroups (`comp.lang.c`, `rec.arts.movies`, …) මධ්‍යම moderator කෙනෙකු ගස පැනවීමකින් තොරව මාතෘකා අනුව සාකච්ඡාව ස්වයං-සංවිධානය වීමට ඉඩ දෙයි. එම නිර්මාණය එය ප්‍රතිස්ථාපනය කළ බොහෝ දේට වඩා වෙනස් දර්ශනයකි — දත්ත සැකසීමට නොව මානව කතාවට යොදන ලද, Post 44 ආවරණය කරන බෙදාහැරුණු-පද්ධති අදහස්වලට ආත්මයෙන් සමීපයි.

## Archie: පළමු සෙවුම් මෙවලම

නවීන search engine එකකට සමාන යමක් තිබීමට පෙර, නිශ්චිත ගොනුවක් සොයා ගැනීම යනු එය තබා ඇති host එක කුමක්දැයි දැන ගැනීමයි. Archie (1990, McGill; Alan Emtage, Bill Heelan සහ Peter Deutsch සමඟ) තවත් පටු කැපුමක් ගත්තේය: දන්නා FTP servers ආවර්තිතාවයෙන් poll කරන්න, ප්‍රසිද්ධ filenames index කරන්න, පරිශීලකයන්ට index එක සෙවීමට ඉඩ දෙන්න. අන්තර්ගතය විෂය පථයෙන් පිටත විය — නම් පමණයි — නමුත් එය තවමත් server එක අනුමාන කිරීමට ඔබ්බෙන් විශාල පියවරකි.

## Gopher: Web ට පෙර Menu-ධාවිත Browsing

Gopher (1991, University of Minnesota; Mark McCahill සහ සගයන්) hierarchical, menu-ධාවිත navigation ඉදිරිපත් කළේය: ලේඛන, උප-menus, අනෙක් Gopher servers වෙත සබැඳි, නිදහස්-ආකාර hyperlinks වෙනුවට අංකයෙන් තෝරා ගනු ලැබේ. Web ට වඩා සීමිතයි — සහ 1990 ගණන්වල මුල් කාලයේ කෙටි කාලයකට, අන්තර්ජාලයේ තොරතුරු අවකාශය සංවිධානය වන ආකාරය සඳහා බැරෑරුම් තරඟකරුවෙකි.

## IRC: තත්‍ය කාලයේ Peer Talk

Usenet වූයේ *ප්‍රචාරණය වූ* කතාවයි. IRC වූයේ *දැන් සිදු වන* කතාවයි. 1988 අගෝස්තුවේ, University of Oulu හි Jarkko Oikarinen, OuluBox BBS මත බහු-පරිශීලක සංවාදය වැඩිදියුණු කිරීමට Internet Relay Chat ගොඩනැගුවේය — කොටසකින් Bitnet Relay සහ Jyrki Kuoppala සහ Jukka Pihl ගේ දේශීය මෙවලම්වලින් ආනුභාව ලබා — පසුව මිතුරන් වෙනත් තැන්වල `ircd` ධාවනය කරන විට servers ෆින්ලන්තය උතුරු ඇමරිකාවට සම්බන්ධ කරන බව නිරීක්ෂණය කළේය. Channels, nicknames, සහ servers වල federated mesh එකක් අන්තර්ජාලයට තනි ව්‍යාපාරික host එකක් නොමැතිව සජීවී කාමරයක් දුන්නේය. Protocol එක පසුව RFC 1459 (Oikarinen සහ Darren Reed, 1993) තුළ ගොඩබැසුණේය.

**පිටවීමේ දොර:** [RFC 1459](https://www.rfc-editor.org/rfc/rfc1459) — ප්‍රාථමික IRC protocol පිරිවිතරය.

## පාරිභෝගික Portals: Find සහ Talk ඇසුරුම් කිරීම

1990 ගණන්වල මැද වන විට, ඉහත විවෘත මෙවලම් තවමත් උපකල්පනය කළේ ඔබට client එකක් කොහේට යොමු කළ යුතුදැයි දන්නා බවයි. පාරිභෝගික portals වෙනස් ඔට්ටුවක් විකුණුවේය: නවකයෙකුට චාපය තමන් විසින්ම එකලස් කිරීමට අවශ්‍ය නොවන පරිදි directory finding, පුවත්, mail, සහ chat *බැඳුණු* එක් homepage එකක්.

Yahoo යනු එම *වර්ගයේ* බීජයයි. 1994 දී, Stanford අධ්‍යයන ශිෂ්‍යයන් Jerry Yang සහ David Filo "Jerry and David's Guide to the World Wide Web" ආරම්භ කළහ — මිනිසුන් විසින් curated hierarchical directory එකක් — එය Yahoo! ලෙස නම් කළහ, සහ directory එක මත සෙවීම, mail, සහ අනෙක් sticky සේවා ස්ථර කළ portal එකක් බවට වර්ධනය කළහ. Kin ව්‍යුත්පන්න කර නවත්වන්න: AOL ගේ walled garden, Excite, Lycos, සහ සමාන ඉදිරි දොරටු එකම *කාණ්ඩය* විය — සමූහ ප්‍රේක්ෂකයන් සඳහා find-then-talk ඇසුරුම් කළ අවධානය hubs — දෙවන සමාගම් විශ්වකෝෂයක් නොවේ. පිටවීමේ දොර: portal යුගය ඉහත protocols මත වාඩි වන නිෂ්පාදන ඉතිහාසයක් ලෙස සලකන්න, ඒවාට ප්‍රතිස්ථාපනයක් ලෙස නොවේ.

## විවෘත Web එක Menus සහ Hubs ඉක්මවා ගියේ ඇයි

Web හි මූලික චලනය — ස්ථිර menu ධුරාවලියකට හෝ එක් portal එකක taxonomy එකකට අගුළු දමා නොමැතිව, *ඕනෑම* අනෙක් ලේඛනයකට, ඕනෑම තැනකට යොමු විය හැකි hyperlinks සහිත HTML — Gopher menus හෝ curated directory එකකට වඩා නම්‍ය find ආකෘතියකි. Netscape Navigator (1994), වාණිජ ආධාර සහ වේගවත් iteration සමඟ හිටපු NCSA Mosaic සංවර්ධකයන් විසින් ආරම්භ කළ සමාගමකින්, එම ආකෘතිය පර්යේෂණ මෙවලමකින් ප්‍රධාන ධාරා භාවිතයට තල්ලු කළේය. Portals චාපය ඇසුරුම් කරමින් සිටියේය; විවෘත hyperlink ග්‍රාෆ් එක (සහ පසුව, ඊළඟ පෝස්ට් එකේ crawler-පරිමාණ සෙවීම) *find* අර්ධය ජය ගනිමින් සිටියේය.

Gopher ප්‍රධාන ධාරා භාවිතයෙන් මැකී ගියේය. Usenet සහ IRC කිසිදා සම්පූර්ණයෙන්ම අතුරුදහන් නොවීය — ඒවා බොහෝ දෙනාගේ පළමු දොර වීම නැවැත්තුවේය. Archie ගේ filename index එක Post 44 මුළු විමධ්‍යගත web එකක් indexing කිරීමට පරිමාණය කරන *වර්ගයක* බීජයකි.

## මෙය මෙම මාලාවට අයත් වන්නේ ඇයි

Find සහ talk පැත්තකින් ඇති trivia නොවේ. Usenet හි විමධ්‍යගත ප්‍රචාරණය, Archie ගේ index-over-distributed-hosts ගැටලුව, IRC හි federated සජීවී කාමර, සහ එය සියල්ල නිෂ්පාදනකරණය කිරීමට portal ඔට්ටුව ඊළඟ පෝස්ට් විශාල පරිමාණයකින් අසන එකම *කාණ්ඩයේ* ප්‍රශ්න ලෙස නැවත මතු වේ: මධ්‍යම catalog එකක් නැති අවකාශයක් ඔබ සොයන්නේ කෙසේද, සහ වයර් එක බෙදා ගත් පසු මිනිසුන් සංවාදයේ රැඳෙන්නේ කෙසේද?

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

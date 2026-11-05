---
title: "Usenet, Archie, Gopher සහ Web ට පෙර අන්තර්ජාලය"
weight: 48
date: 2026-01-01
draft: false
phase: "7 — බෙදාහැරුණු පද්ධති, Big Data සහ Orchestration"
series_index: 47
aliases:
  - /posts/43-usenet-archie-gopher-and-the-pre-web-internet/
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

## ගැඹුරින්: Web ට පෙර protocols bytes මට්ටමින් — Usenet ප්‍රචාරණය, NNTP සංවාදය සහ Gopher menu පේළිය

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** "අන්තර්ජාලයේ ඉතිහාසය" ගැන සිංහල YouTube වීඩියෝ කිහිපයක් ඇත. උදාහරණ ලෙස Wishma Charika (ICT SL, බැලීම් ~7k), Samitha Dilshan (A/L, O/L ICT) සහ "History of the Internet (in Sinhala)" (Learn with CSD Tech) දැක්විය හැකිය. ඒවා හඳුනාගත්තේ මාතෘකාවෙන් පමණි, නැරඹුවේ නැත. ඒවායේ මාතෘකාවල Usenet, Archie හෝ Gopher නම් සඳහන් නොවේ. එම protocols ක්‍රියා කළේ කෙසේද යන්න ගැන සිංහල ලිපියක් හෝ පාඩමක් අපට හමු නොවීය. Usenet, Gopher සඳහා සිංහල විකිපීඩියා ලිපිද නැත. එබැවින් මෙම කොටස එම protocols අර්ථ දක්වන මුල් RFC ලේඛන කෙලින්ම කියවා මුල සිට පැහැදිලි කරයි.

### 1. මූලික පද

- **ප්‍රොටෝකෝලය (protocol):** පරිගණක දෙකක් එකිනෙකා සමඟ කතා කරන විට යවන පණිවිඩවල ආකෘතිය සහ අනුපිළිවෙල පිළිබඳ එකඟතාවයි.
- **පණිවිඩ හඳුනාගැනීම (Message-ID):** Usenet ලිපියකට දෙන අද්විතීය නාමයයි. උදා: `<1234@ucbvax.Berkeley.edu>`.
- **Path ශීර්ෂය:** ලිපිය පසු කළ servers ලැයිස්තුවයි. `!` ලකුණින් වෙන් කර ඇත.
- **Flooding (ගංවතුර ප්‍රචාරණය):** ලැබුණු දෙය සියලු අසල්වැසියන්ට යැවීමයි. එම දෙය දැනටමත් ලැබී ඇත්නම් එය ඉවත දමයි.
- **Selector string:** Gopher client එකක් server එකට යවන, අයිතමයක් හඳුනාගන්නා පෙළයි.
- **CR LF:** පේළියක් අවසන් කරන bytes දෙකයි. carriage return (13, `\r`) සහ line feed (10, `\n`).

### 2. Usenet: Path සහ Message-ID මගින් ගංවතුර පාලනය

RFC 1036 ("Standard for Interchange of USENET Messages", 1987 දෙසැම්බර්) කියන්නේ:

- **Message-ID** එකක් ලිපියකට අද්විතීය නාමයකි. එම Message-ID ඇති පෙර ලිපියක ආයු කාලය තුළ එය නැවත භාවිතා නොකළ යුතුය. අවම වශයෙන් **අවුරුදු දෙකක්** නැවත භාවිතා නොකරන ලෙස නිර්දේශ කරයි (පිටුව 5).
- ලිපියක් ලැබෙන සෑම host එකක්ම තමන්ගේ නම **Path** එකේ ඉදිරියට එකතු කරයි. `A!X!Y!Z` path එකක් ඇති ලිපියක් A වෙතින් B ට ආ විට, B එය `B!A!X!Y!Z` කරයි (පිටු 6–7). A ගේ නම Path එකේ ඇති නිසා, B එම ලිපිය නැවත A ට නොයවයි.
- **ihave/sendme** (පිටු 12–13): A, B ට "ihave <Message-ID>" යවයි. B ට එය නැත්නම් පමණක් "sendme" ලෙස පිළිතුරු දෙයි. ඉන්පසුව A ලිපිය යවයි. RFC එකම පවසන පරිදි, UUCP හි ලිපිය යැවීම ආරම්භ කිරීමේ වියදම ඉහළ නිසා කෙටි ලිපියක් සඳහා ihave යැවීමත් ලිපියම යැවීම තරම්ම වියදම් විය හැකිය. එබැවින් Message-ID කිහිපයක් එකට බැච් කිරීම යෝජනා කරයි.

**ගණනය කළ උදාහරණය (ආදර්ශ):** servers 4 ක් (A, B, C, D) සියල්ල එකිනෙකට සම්බන්ධ (mesh) යැයි සිතමු. A ලිපියක් පළ කරයි.

1. A → B, C, D: සම්පූර්ණ ලිපි යැවීම් **3**.
2. B හි Path `B!A` වේ. එබැවින් B එය C සහ D ට යවයි. C, B සහ D ට යවයි. D, B සහ C ට යවයි. තවත් යැවීම් **6** කි. ඒ සියල්ල ලැබෙන තැන දැනටමත් ඇති නිසා Message-ID බලා ඉවත දමයි.
3. එකතුව යැවීම් 9 කි. ඉන් 6 ක්, එනම් **67%** ක් නාස්තියකි.

ලිපිය **3 KB** ක් සහ ihave/පිළිතුරු යුගලයක් **බයිට් 80** ක් පමණ නම් (ආදර්ශ අගයන්):
- ihave නැතිව නාස්තිය 6 × 3 KB = **18 KB**.
- ihave සමඟ 6 × 80 = **බයිට් 480** පමණි. සම්පූර්ණ ලිපි යැවෙන්නේ 3 ක් පමණි.

### 3. NNTP: එම අදහසම TCP මත සංවාදයක් ලෙස

RFC 977 ("Network News Transfer Protocol", 1986 පෙබරවාරි) Usenet සඳහා TCP මත ප්‍රශ්න-පිළිතුරු සංවාදයක් අර්ථ දක්වයි. සෑම පිළිතුරක්ම **ඉලක්කම් 3 ක කේතයකින්** ආරම්භ වේ.

- **GROUP** විධානයට පිළිතුර `211 n f l s` වේ (§3.2.2, පිටුව 11). n = ලිපි ගණනේ ඇස්තමේන්තුව, f = පළමු ලිපි අංකය, l = අවසාන ලිපි අංකය, s = කණ්ඩායමේ නම.
- **IHAVE** (§3.4, පිටු 12–13) හි පිළිතුරු:
  - 335: "ලිපිය එවන්න"
  - 235: "ලිපිය හොඳින් ලැබුණි"
  - 435: "ලිපිය අවශ්‍ය නැත, එවන්න එපා"

RFC 977 §4.6 හි (පිටු 23–24) server දෙකක් අතර සැබෑ සංවාදයක් මෙසේය:

```
C: IHAVE <4105@ucbvax.ARPA>
S: 435 Already seen that one, where you been?
C: IHAVE <4106@ucbvax.ARPA>
S: 335 News to me!  <CRLF.CRLF> to end.
C: (ලිපිය යවයි)
C: .
S: 235 Article transferred successfully.  Thanks.
```

**කේතයේ පළමු ඉලක්කම කියවීම:** 2xx = සාර්ථකයි, 3xx = ඉදිරියට යන්න (තවත් දත්ත එවන්න), 4xx = මෙම විධානය සාර්ථක නොවීය. ඉහත උදාහරණයේ §2 හි "sendme" තීරණය **එකම පේළියකට** හැකිළී ඇත. 435 යනු අපේ ගණනයේ නාස්තිය වැළැක්වූ පිළිතුරයි.

**GROUP උදාහරණය (ආදර්ශ අංක):** `211 1200 3000 4199 comp.lang.c` යන්නෙන් කියවෙන්නේ කණ්ඩායමේ ලිපි **1200** ක් පමණ ඇති බවත්, ලිපි අංක 3000 සිට 4199 දක්වා ඇති බවත්ය. 4199 − 3000 + 1 = 1200. පරාසය සහ ගණන ගැළපේ. මකා දැමූ ලිපි ඇත්නම් n පරාසයට වඩා අඩු විය හැකිය.

### 4. Gopher: තනි පේළියක ඇති සියල්ල

RFC 1436 ("The Internet Gopher Protocol", University of Minnesota, 1993 මාර්තු) අනුව:

- Gopher servers **port 70** මත සවන් දෙයි (පිටුව 1).
- Client එක සම්බන්ධ වී **selector string** එකක් සහ CR LF යවයි. හිස් පේළියක් (CR LF පමණක්) යනු "ඔබ සතු දේ ලැයිස්තුගත කරන්න" යන්නයි.
- Server එක පේළි ලැයිස්තුවක් එවා, **තනිව ඇති තිත (.)** පේළියකින් අවසන් කර සම්බන්ධතාව වසයි (පිටුව 4).
- සම්බන්ධතාව අතර කිසිදු තත්ත්වයක් (state) මතක තබා නොගනී.

Menu පේළියක ව්‍යුහය (පිටුව 4): **[වර්ග අක්ෂරය][පෙන්වන නම] TAB [selector] TAB [host] TAB [port] CR LF**

RFC එකේම උදාහරණ පේළියක් (TAB ⇥ ලෙස):

`1Microcomputer News & Prices⇥Prices/⇥pserver.bookstore.umn.edu⇥70`

| ක්ෂේත්‍රය | අගය | අර්ථය |
|---|---|---|
| වර්ගය | `1` | directory එකක් |
| පෙන්වන නම | Microcomputer News & Prices | පරිශීලකයාට පෙනෙන පෙළ |
| Selector | `Prices/` | server එකට ආපසු යැවිය යුතු පෙළ |
| Host / port | pserver.bookstore.umn.edu / 70 | සම්බන්ධ විය යුතු තැන |

**වර්ග අක්ෂර** (§3.8, පිටුව 10): 0 = ගොනුවකි, 1 = directory එකකි, 2 = CSO දුරකථන නාමාවලියකි, 3 = දෝෂයකි, 7 = සෙවුම් (Index-Search) server එකකි, 8 = telnet සැසියකි, 9 = binary ගොනුවකි.

**ගණනය කළ උදාහරණය:** පරිශීලකයා ඉහත පේළිය තෝරා ගනී.
- Client එක pserver.bookstore.umn.edu හි port 70 ට සම්බන්ධ වී `Prices/` + CR LF යවයි.
- එය බයිට් 7 + 2 = **බයිට් 9** කි. සම්පූර්ණ "ඉල්ලීම" එපමණයි.
- ඊළඟ ඉල්ලීම *වෙනත්* server එකකට විය හැකිය. menu එකකින් තවත් ආයතනයක menu එකකට පැනීමට ඉඩ දුන්නේ මෙම host/port ක්ෂේත්‍ර දෙකයි. පෝස්ට් එකේ "menu-ධාවිත browsing" යන්නෙහි තාක්ෂණික හරය එයයි.
- එහෙත් සම්බන්ධක (links) තිබිය හැක්කේ **menu පේළිවල පමණි**. ලේඛනයක පෙළ ඇතුළත links නැත. පසුව Web එක ඉක්මවා ගිය සීමාව එයයි.

### 5. දැන්ම උත්සාහ කරන්න (මෙම පිටුවේ vm-terminal lab එක)

ඉහත ඇති VM එකේ Gopher පේළියක් සහ ඉල්ලීමක් bytes ලෙස බලන්න:

```
printf '1Microcomputer News & Prices\tPrices/\tpserver.bookstore.umn.edu\t70\r\n' | tr '\t' '|'
printf 'Prices/\r\n' | od -c
printf 'Prices/\r\n' | wc -c
```

- පළමු විධානය TAB අක්ෂර `|` බවට හරවා ක්ෂේත්‍ර හතර පෙන්වයි.
- දෙවැන්න අවසානයේ `\r  \n` පෙන්වයි. එනම් CR LF bytes දෙකයි.
- තුන්වැන්න **9** පෙන්වයි. එය §4 හි ගණනයට ගැළපේ.

(මෙම lab එකේ VM එක අන්තර්ජාලයට සම්බන්ධ නැත. එබැවින් අපි සැබෑ Gopher server එකකට සම්බන්ධ නොවී bytes පමණක් සාදා බලමු.)

### 6. පැන්සලෙන් අභ්‍යාසය

1. `C!B!A` path එකක් ඇති ලිපියක් C වෙතින් D ට ලැබේ. D එය කුමන path එකකින් ගබඩා කරයිද? D එය යැවීමෙන් වළකින්නේ කුමන host වලටද?
2. servers 5 ක සම්පූර්ණ mesh එකක ලිපියක් පළ කළ විට, §2 හි ආදර්ශ ක්‍රමයට අනුව සම්පූර්ණ ලිපි යැවීම් කීයක් සිදු වේද? ඉන් නාස්තිය කීයද?
3. NNTP server එකක් IHAVE එකකට 435 ලෙස පිළිතුරු දෙයි. client එක කුමක් කළ යුතුද? 335 නම්?
4. `0About internet Gopher⇥Stuff:About us⇥rawBits.micro.umn.edu⇥70` පේළියේ වර්ගය සහ selector එක කුමක්ද? එය ලබා ගැනීමට යවන bytes ගණන කීයද?
5. `211 57 1 80 alt.test` පිළිතුරෙහි පරාසයේ ඇති අංක ගණනට වඩා ලිපි ගණන අඩු වන්නේ ඇයි විය හැකිද?

(පිළිතුරු:
1. `D!C!B!A`. Path එකේ ඇති **C, B, A** වෙත යවන්නේ නැත.
2. පළමු වටයේ A → අනෙක් 4 = 4. ඉන්පසු B, C, D, E එක් එක් කෙනා Path එකේ නැති අනෙක් 3 දෙනාට යවයි: 4 × 3 = 12. එකතුව **16**. නාස්තිය **12** (75%).
3. 435: ලිපිය **නොයවා** ඊළඟ එකට යන්න. 335: ලිපිය යවා, තනි `.` පේළියකින් අවසන් කර, 235 (හෝ 436) බලාපොරොත්තු වන්න.
4. වර්ගය **0** (ගොනුවකි). selector එක `Stuff:About us`. යවන bytes = 14 + 2 = **16**.
5. 1 සිට 80 දක්වා අංක 80 ක් ඇත. එහෙත් සමහර ලිපි කල් ඉකුත් වී හෝ මකා දමා තිබිය හැකිය. RFC 977 පවසන පරිදි n යනු ඇස්තමේන්තුවකි.)

**මෙම කොටසේ මූලාශ්‍ර (සියල්ල rfc-editor.org හි නිල පිටපත්):**
- M. Horton සහ R. Adams, *Standard for Interchange of USENET Messages*, RFC 1036, 1987 දෙසැම්බර්: පිටුව 5 (Message-ID), පිටු 6–7 (Path), පිටු 12–13 (ihave/sendme). <https://www.rfc-editor.org/rfc/rfc1036.txt>
- B. Kantor සහ P. Lapsley, *Network News Transfer Protocol*, RFC 977, 1986 පෙබරවාරි: §3.2.2 (පිටුව 11), §3.4 (පිටු 12–13), §4.6 උදාහරණය (පිටු 23–24). <https://www.rfc-editor.org/rfc/rfc977.txt>
- F. Anklesaria සහ සගයන් (University of Minnesota), *The Internet Gopher Protocol*, RFC 1436, 1993 මාර්තු: පිටුව 1 (port 70), පිටුව 4 (උදාහරණ සංවාදය), §3.8 පිටුව 10 (වර්ග අක්ෂර). <https://www.rfc-editor.org/rfc/rfc1436.txt>

printf, tr, od සහ wc විධාන lab එකේ BusyBox v1.28.4 image එකේ ඇති බව පරීක්ෂා කරන ලදී. mesh සහ bytes ගණනය, සහ GROUP අංක ආදර්ශ වේ.


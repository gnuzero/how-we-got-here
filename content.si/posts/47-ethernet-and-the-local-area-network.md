---
title: "Ethernet සහ Local Area Network"
weight: 47
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 46
aliases:
  - /posts/40-ethernet-and-the-local-area-network/
  - /posts/45-ethernet-and-the-local-area-network/
  - /posts/46-ethernet-and-the-local-area-network/
tags: []
summary: "හවුල් කේබලයක්, මධ්‍යම arbiter නැත — CSMA/CD LAN collision සීමාව විසඳුවේය; switches පසුව එය ඉවත් කළේය"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET (Post 39) දුරස්ථ අඩවි අතර wide-area packet switching විසඳුවේය. එක් ගොඩනැගිල්ලක් ඇතුළත, මීටර් දුසිම් කිහිපයක කේබලයක් සඳහා IMP-විලාස routing වැරදි මෙවලමයි. Ethernet, 1973 දී Xerox PARC හි Robert Metcalfe සහ David Boggs විසින් ආරම්භ කරන ලද, ප්‍රමුඛ දේශීය පිළිතුර බවට පත් විය.

## හවුල්-මාධ්‍ය ගැටලුව

මුල් Ethernet එකම හවුල් කේබලයක් මත stations බොහෝ තැබුවේය — bus topology එකක්, Post 31 යන්ත්‍රයක් ඇතුළත මුහුණ දුන් එකම *වර්ගයේ* contention එක, දැන් LAN එකක. සෑම station එකකටම transmit කළ හැක; සෑම station එකක්ම සෑම transmission එකක්ම අසයි. එකවර transmitters දෙකක් දෙකම දූෂණය කරයි.

## CSMA/CD: Listen, Transmit, Detect, Back Off

Ethernet හි පිළිතුර CSMA/CD ය. **Carrier Sense:** පළමුව අසන්න; මාධ්‍යය idle ලෙස පෙනේ නම් පමණක් transmit කරන්න. **Multiple Access:** ඕනෑම station එකකට උත්සාහ කළ හැක — මධ්‍යම grant එකක් නැත, පද්ධති buses මත request/grant මෙන් නොව (Post 31). **Collision Detection:** යවන අතරේ අසමින් සිටින්න; collision එකක් පෙනේ නම්, නවත්වන්න, *අහඹු* backoff එකක් රැඳී, නැවත උත්සාහ කරන්න.

Randomization යනු බර උසුලන උපක්‍රමයයි. ස්ථිර සමාන backoffs සදහටම collide වනු ඇත. විවිධ අහඹු රැඳීම් එක් station එකකට අනෙක නැවත උත්සාහ කිරීමට පෙර සාර්ථක වීමට ඉඩ දෙයි — arbiter එකක් නොමැතිව විමධ්‍යගත contention.

## Frame එක

Ethernet දත්ත frames වලින් රැගෙන යයි: source සහ destination MAC addresses (දෘඪාංග addresses, Post 41 හි IP addresses ට පහළින්), ඉහළ protocol එක සඳහා type field එකක්, payload එකක්, සහ CRC එකක් — PCIe හි data-link පරීක්ෂා මෙන්ම එකම විශ්වාසනීයතා *වර්ගය* (Post 33), වෙනස් මාධ්‍යයක් මත.

## හවුල් Bus එකේ සිට Switched Star දක්වා

නවීන wired Ethernet බොහෝමය හවුල් කේබලය අත්හැර, එක් එක් station එකට තමන්ගේම point-to-point සබැඳියක් දෙන switches වෙත ගියේය — පැරණි parallel buses ට සාපේක්ෂව PCIe කළ එකම shared-to-point-to-point පලා යාම (Post 32). නිවැරදි switch එකක, සම්භාව්‍ය CSMA/CD collisions බොහෝමය අතුරුදහන් වේ: එක් එක් සබැඳියට අග දෙකක් ඇත. අදහස් තවමත් ඓතිහාසිකව වැදගත්ය, සහ මුල් Wi-Fi — තවමත් හවුල් radio මාධ්‍යයක් — එකම collision සීමාව විසඳන්නට සිදු විය.

## මෙය ගෙන යන්නේ කොහේද

දේශීය Ethernet සහ wide-area packet routing තවමත් හිඩැසක් තබයි: විවිධ යටින් ඇති තාක්ෂණ එක අන්තර්ජාලයකට බැඳෙන *සාමාන්‍ය* addressing සහ routing ක්‍රමයක්. එය TCP/IP ය — ඊළඟ.

## ගැඹුරින්: හවුල් කේබලයක පෙරළිය අතින් — backoff, Metcalfe සහ Boggs ගේ කාර්යක්ෂමතා ආකෘතිය, frame සීමා සහ CRC

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** si.wikipedia හි "පෙදෙසි ජාලවල දත්ත හුවමාරුව" ලිපිය (අක්ෂර ~6.6k) switching සහ collision domain ගැන කතා කරයි. CSMA/CD backoff ගණනය, Ethernet කාර්යක්ෂමතාව, හෝ CRC අතින් ගණනය කිරීම එහි නැත. මෙම කොටස ඒවා මුල් ලේඛනවලින් ගණනය කරයි.

### 1. මූලික පද

- **හවුල් මාධ්‍යය (shared medium):** සියලු ස්ථාන (stations) එකම කේබලයට සම්බන්ධ වී සිටීම. Metcalfe සහ Boggs එය "Ether" ලෙස හැඳින්වූහ.
- **ගැටුම (collision):** ස්ථාන දෙකක් එකවර යැවීම නිසා සංඥා මිශ්‍ර වීම.
- **CSMA/CD (carrier sense multiple access with collision detection):** යැවීමට පෙර සවන් දීම, යවන අතර ගැටුම් හඳුනා ගැනීම, ගැටුමක් වූ විට නැවැත්වීම.
- **Slot (slot):** ගැටුමක් හඳුනා ගැනීමට අවශ්‍ය අවම කාලය; කේබලයේ එක් කෙළවරක සිට අනෙක් කෙළවරට ගොස් ආපසු එන කාලය.
- **Binary exponential backoff (ද්විමය ඝාතීය පසුබැසීම):** නැවත නැවත ගැටුම් වන විට, බලා සිටින කාලයේ මධ්‍යන්‍යය දෙගුණ කිරීම.
- **CRC (cyclic redundancy check):** frame එකේ අගට එකතු කරන, දෝෂ හඳුනා ගැනීමේ අංකය.
- **MAC ලිපිනය (MAC address):** ජාල අතුරුමුහුණතක (network interface) ලිපිනය. මුල් කොටස නිෂ්පාදකයාගේ **OUI (organizationally unique identifier)** වේ.

### 2. මුල් Ethernet: CSL 75-7 වාර්තාවෙන් අංක

Robert M. Metcalfe සහ David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (Xerox PARC CSL 75-7, 1975 නොවැම්බර්; CACM 1976 ලෙස ප්‍රකාශිතයි). අප කියවූ CSL වාර්තාවේ:

- සාරාංශය: "an operating Ethernet of 100 nodes along a kilometer of coaxial cable".
- §4 (මුද්‍රිත පිටුව 16): කිලෝමීටර 1, **3 Mb/s**, ස්ථාන 256 දක්වා. ගමනාන්ත (destination) සහ මූලාශ්‍ර (source) ලිපින bits **8** බැගින්.
- 16-bit CRC (පිටුව 18).
- §4.4 (පිටුව 20): "Binary Exponential Backoff" — ගැටුම් සිදුවන විට නැවත යැවීමේ ප්‍රමාදයේ මධ්‍යන්‍යය දෙගුණ වේ. Slot එක Ether එකේ end-to-end round trip කාලයයි.

**වැඩ කළ උදාහරණය (ආදර්ශ ප්‍රචාරණ වේගය):** සංඥාව කේබලයේ 2 × 10⁸ m/s වලින් යයි යැයි සිතමු. කිලෝමීටර 1 → 1000 / (2 × 10⁸) = **5 µs** එක් පැත්තකට, round trip = **10 µs**. 3 Mb/s හි, 10 µs = bits **30**. එනම් කෙටිම packet එක bits 30 ට වඩා කෙටි නම්, යවන්නා යැවීම අවසන් කළ පසුව ගැටුම ආපසු පැමිණිය හැකිය. එවිට එය හඳුනා ගත නොහැකිය. CSMA/CD ට **අවම frame ප්‍රමාණයක්** අවශ්‍ය වන්නේ මේ නිසාය.

### 3. Backoff අතින් (ආදර්ශ ආකෘතිය)

සරල කළ ආදර්ශ (illustrative) ආකෘතියක්: k වන ගැටුමෙන් පසු, එක් එක් ස්ථානය 0 සිට 2^k − 1 දක්වා slots අතරින් අහඹු (random) එකක් තෝරා බලා සිටී. (මෙය මධ්‍යන්‍යය දෙගුණ වීමේ එක් ආකාරයකි. මුල් Ethernet හි නිශ්චිත නීතිය මෙයම යැයි අපි නොකියමු.)

ස්ථාන **දෙකක්** පමණක් ගැටෙයි නම්, ඒවා යළි ගැටෙන්නේ එකම slot එක තෝරා ගත් විට පමණි:

| ගැටුම් k | තේරීම් | යළි ගැටීමේ සම්භාවිතාව 1 / 2^k |
|---|---|---|
| 1 | {0, 1} | 1/2 = 0.5 |
| 2 | {0, …, 3} | 1/4 = 0.25 |
| 3 | {0, …, 7} | 1/8 = 0.125 |
| 4 | {0, …, 15} | 1/16 = 0.0625 |

පළමු 4 වාරයේම ගැටීමේ සම්භාවිතාව = ½ × ¼ × ⅛ × 1/16 = 1/1024 ≈ **0.001**. ගැටුම් වැඩි වන විට, කාලය දෙගුණ වීමෙන් ගැටුම් ඉක්මනින් විසඳේ. කිසිදු මධ්‍යම පාලකයෙකු (central controller) අවශ්‍ය නැත.

### 4. Metcalfe සහ Boggs ගේ කාර්යක්ෂමතා ආකෘතිය

වාර්තාව (මුද්‍රිත පිටු 26–27) Q ස්ථාන සියල්ලම සැමවිටම යැවීමට සූදානම්ව සිටින "heavy load" අවස්ථාවක් ආකෘතිගත කරයි:

- A = (1 − 1/Q)^(Q−1) — එක් slot එකක හරියටම එක් ස්ථානයක් යැවීමේ සම්භාවිතාව
- W = (1 − A) / A — සාර්ථක වීමට පෙර නාස්ති වන සාමාන්‍ය slots ගණන
- E = (P/C) / ((P/C) + W·T) — කාර්යක්ෂමතාව; P = packet bits, C = bit අනුපාතය, T = slot කාලය

**වැඩ කළ උදාහරණය:** Q = 2 → A = ½, W = 1. P = 4096 bits, C = 3 Mb/s → P/C = 1365.3 µs.
- T = 16 µs නම්: E = 1365.3 / (1365.3 + 16) = **0.9884**.

Q විශාල වන විට A → 1/e ≈ 0.3679, W → e − 1 ≈ 1.718. කෙටි packets (P = 48 bits, P/C = 16 µs) සමඟ, E = 16 / (16 + 1.718 × 16) ≈ **0.37**. **පාඩම:** විශාල packets සමඟ Ethernet කාර්යක්ෂම වේ (Q = 256, P = 4096: 0.9803); කුඩා packets සමඟ ගැටුම් කාලය ප්‍රමුඛ වේ.

**මූලාශ්‍රයේ නොගැළපීමක්:** පිටුව 28 හි පෙළ කියන්නේ "we use a C of 3 megabits per second and an T of 8 microseconds" ලෙසයි. නමුත් පිටුව 29 හි වගුවේ අගයන් (උදා. P = 4096, Q = 2 → 0.9884; P = 48, Q = 2 → 0.5000; P = 512, Q = 256 → 0.8616) ගැළපෙන්නේ **T = 16 µs** සමඟය. T = 8 µs නම් P = 48, Q = 2 → 0.6667 විය යුතුය. අපි වගුවේ අගයන් T = 16 µs සමඟ නැවත ගණනය කර තහවුරු කළෙමු.

### 5. පසුකාලීන Ethernet frame එකේ සීමා (RFC 894)

RFC 894 (1984 අප්‍රේල්), "A Standard for the Transmission of IP Datagrams over Ethernet Networks":
- 10 Mb/s Ethernet, ලිපින bits **48**; IP සඳහා type field අගය **0800** (hex).
- "The minimum length of the data field of a packet sent over an Ethernet is **46 octets**." අවශ්‍ය නම් බිංදු (zero octets) වලින් පුරවයි (padding).
- IP datagram එකක උපරිම දිග **1500 octets**.

**මූලාශ්‍රයේ දෝෂයක්:** RFC 894 හි එම ඡේදය "The minimum length of the data field of a packet sent over an Ethernet is 1500 octets, thus the maximum length of an IP datagram … is 1500 octets" ලෙස කියයි. සන්දර්භය අනුව එහි පළමු "minimum" යන්න "maximum" විය යුතුය.

එසේම, RFC 894 සටහන් කරන්නේ පැරණි "Experimental Ethernet" (3 Mb/s, 8-bit ලිපින) වෙනස් බවයි. එය ඉහත §2 හි CSL 75-7 අංක සමඟ ගැළපේ.

### 6. VM terminal: ඔබේ "Ethernet කාඩ්පත"

පිටුවේ VM image එකේ අපි ධාවනය කළ විධාන:

```
ip link show eth0
cat /sys/class/net/eth0/operstate
ip link set eth0 up
ip link show eth0
```

අපට ලැබුණු දේ:
- අතුරුමුහුණත emulate කළ **ne2k-pci** (RealTek RTL-8029) කාඩ්පතකි (`dmesg`).
- `mtu 1500` — ඉහත RFC 894 උපරිම අගයම.
- Boot වූ විට `operstate` = **down**. `ip link set eth0 up` පසු state එක `UP` / `LOWER_UP` වේ. `operstate` = `unknown`.
- MAC ලිපිනය boot එකින් boot එකට වෙනස් වුවද, අපට ලැබුණු සෑම වතාවකම එය **00:22:15** න් ආරම්භ විය. IEEE ලියාපදිංචි අධිකාරියේ (IEEE Registration Authority) OUI ලැයිස්තුව අනුව `00-22-15` = **ASUSTek COMPUTER INC.** එනම් එම පළමු bytes 3 "නිෂ්පාදකයා" හඳුනා ගනී; අවසාන bytes 3 කාඩ්පත හඳුනා ගනී.

VM එකට ජාලයක් සම්බන්ධ කර නැත. ඔබට frames යැවිය නොහැකි නමුත් 48-bit ලිපිනය සහ MTU ඔබේම ඇසින් බැලිය හැකිය.

### 7. CRC අතින්: 3-bit උදාහරණයක්

සැබෑ Ethernet 32-bit CRC එකක් භාවිත කරයි. ක්‍රමය කුඩා ආදර්ශ (illustrative) generator එකකින් අතින් බලමු: generator **1011** (x³ + x + 1), message **1101**.

1. Message එකට බිංදු 3 ක් එකතු කරන්න: `1101000`.
2. Generator එකෙන් XOR මගින් "බෙදන්න" (carry නැත):
   - `1101000` XOR `1011000` → `0110000`
   - `0110000` XOR `0101100` → `0011100`
   - `0011100` XOR `0010110` → `0001010`
   - `0001010` XOR `0001011` → `0000001`
3. ඉතිරිය (remainder) = **001**. යවන frame එක = `1101` + `001` = **1101001**.

ලබන්නා `1101001` එම generator එකෙන් බෙදූ විට ඉතිරිය **000** → දෝෂ නැත. Bit එකක් මාරු වී `1111001` ලැබුණොත් ඉතිරිය **110** → දෝෂය හඳුනා ගනී.

### 8. පැන්සලෙන් අභ්‍යාසය

1. කේබලය කිලෝමීටර 2.5 ක් නම් (ප්‍රචාරණය 2 × 10⁸ m/s, ආදර්ශ), 10 Mb/s හි round trip කාලය bits කීයකට සමානද?
2. §3 ආකෘතියේ k = 5 ගැටුමකින් පසු ස්ථාන දෙක යළි ගැටීමේ සම්භාවිතාව කීයද?
3. Q = 2, P = 1024 bits, C = 3 Mb/s, T = 16 µs සඳහා E ගණනය කර පිටුව 29 හි වගුව සමඟ සසඳන්න.
4. IP datagram එකක් octets 20 ක් පමණි. Ethernet data field එකට padding octets කීයක් අවශ්‍යද?
5. Message `1001`, generator `1011` සඳහා CRC-3 ඉතිරිය සොයන්න.

(පිළිතුරු:
1. 2 × 2500 / (2 × 10⁸) = 25 µs. 25 µs × 10⁷ bit/s = **250 bits**.
2. 1 / 2⁵ = **1/32 ≈ 0.031**.
3. P/C = 341.3 µs. E = 341.3 / (341.3 + 16) = **0.9552** — වගුවේ P = 1024, Q = 2 අගයම.
4. 46 − 20 = **26** octets.
5. `1001000` → XOR `1011000` = `0010000` → XOR `0010110` = `0000110` → ඉතිරිය **110**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- R. M. Metcalfe සහ D. R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks", Xerox PARC CSL 75-7, 1975 නොවැම්බර්. අප කියවූයේ MIT පාඨමාලා පිටපත (නිල නොවන): https://web.mit.edu/6.1800/www/readings/papers/ethernet.pdf (මුද්‍රිත පිටු 16, 18, 20, 26–29). CACM 19(7), 1976 ලෙස ප්‍රකාශිත අනුවාදය අපට විවෘත කළ නොහැකි විය (ACM Digital Library අවහිර විය).
- RFC 894, C. Hornig, 1984 අප්‍රේල්: https://www.rfc-editor.org/rfc/rfc894.txt
- IEEE Registration Authority, OUI ලැයිස්තුව: https://standards-oui.ieee.org/oui/oui.txt
- මෙම පොතේ VM terminal image එක: §6 හි ප්‍රතිදාන අපි ධාවනය කර ලබා ගත්තෙමු.
- §2 හි ප්‍රචාරණ වේගය, §3 හි backoff ආකෘතිය සහ §7 හි CRC generator ආදර්ශ (illustrative) වේ.

**පිටවීමේ දොර:** Robert M. Metcalfe and David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — හවුල්-මාධ්‍ය LAN සහ CSMA/CD නිර්මාණය ප්‍රකාශ කළ ප්‍රාථමික පත්‍රිකාව.

{{< lab type="vm-terminal" >}}


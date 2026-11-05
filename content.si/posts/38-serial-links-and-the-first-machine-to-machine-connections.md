---
title: "ශ්‍රේණි සබැඳි සහ පළමු යන්ත්‍ර-සිට-යන්ත්‍ර සම්බන්ධතා"
weight: 39
date: 2026-01-01
draft: false
phase: "6 — ජාලකරණය: ශ්‍රේණි සබැඳි සිට දත්ත මධ්‍යස්ථාන RDMA දක්වා"
series_index: 38
tags: []
summary: "Point-to-point ශ්‍රේණි සබැඳි සම්බන්ධ කරන්නේ අග දෙකක් පමණයි — packet switching බල කළ සීමාව"
image_prompt: "Technical illustration of an RS-232 connection and a modem modulating digital data onto an analog phone line, clean vintage telecom diagram style"
video_prompt: "20-second animation: a digital bit stream modulated onto an analog carrier by a modem, then demodulated, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: RS-232 signal levels + modem modulation/demodulation diagram"
---

Phase 5 හි සෑම bus එකක්ම එක් යන්ත්‍රයක් *ඇතුළත* රැඳේ. ජාලකරණය ආරම්භ වන්නේ වෙන වෙනම යන්ත්‍ර කතා කළ යුතු වූ විටයි — සහ packet-switched ජාල තිබුණේ නැති කල, එයින් අදහස් වූයේ ශ්‍රේණි සබැඳියකි: එක් bit stream එකක්, point to point, routing නැත, "මෙම වයර් එකේ අනෙක් කෙළවරේ ඇති දේ" ට ඔබ්බෙන් address එකක් නැත.

## RS-232: මූලික ශ්‍රේණි සබැඳිය

RS-232 (EIA, 1960) උපාංග දෙකක් අතර voltage මට්ටම් සහ asynchronous ශ්‍රේණි සම්මුතීන් ස්ථිර කළේය — දෙකම කලින් baud rate එකට එකඟ වේ, මන්ද දත්ත සමඟ clock එකක් නොයයි. Addressing නැත, routing නැත, අග තෝරා ගත් සරල parity ට ඔබ්බෙන් error correction නැත. උපාංග දෙකක් පමණයි, එකවරට එක් bit එකක්.

එය ප්‍රමාණවත් විය. Terminals එය භාවිතා කළේ mainframes සහ minicomputers වෙත ළඟා වීමට (Phase 3 හි පෙළපත). ඉහළ ජාලකරණ stack එකකට රඳා නොපවතින නාලිකාවක් අවශ්‍ය වූ විට, එය තවමත් routers සහ embedded උපකරණ වෙත යන dead-simple console මාර්ගයයි.

## Modem එක: Analog වයර් මත Digital

දුර-දිග කතාව දුරකථන ජාලය මත යා යුතු විය — analog, narrowband, හඬ සඳහා ගොඩනැගූ. Modem එකක් digital bit stream එකක් දුරකථන රේඛාවට රැගෙන යා හැකි analog carrier එකක් මත modulate කරයි, සහ ඈත අගේ එය නැවත bits වෙත demodulate කරයි. මුල් අනුපාත තත්පරයට bits සිය ගණනක් වූ අතර, පසුව කිලෝබිට් දස ගණනක් — නවීන මිනුමකින් මන්දගාමීය, නමුත් එකම කාමරයේ නොමැති යන්ත්‍රයකට ළඟා වීමට ප්‍රායෝගික එකම මාර්ගය, දැනටමත් බොහෝ තැන්වලට ගිය යටිතල පහසුකම් මත.

## මෙයින් ඊළඟ ගෘහ නිර්මාණය බල කරන්නේ ඇයි

Point-to-point ශ්‍රේණි සබැඳියක් — සෘජු RS-232 හෝ modem-over-phone — සම්බන්ධ කරන්නේ හරියටම endpoints *දෙකක්* පමණයි. බහු-node ජාලයක් නැත, වයර් එකේ නොමැති ගමනාන්තයක් සඳහා routing තීරණයක් නැත. සෑම යුගලයක් අතර කැප වූ යුගලයක් නොමැතිව එකිනෙකාට ළඟා වන යන්ත්‍ර බොහෝ ගණනකට පරිමාණය කිරීමට වෙනස් ඔට්ටුවක් අවශ්‍යයි: දත්ත packets වලට බිඳ දමන්න, hop by hop route කරන්න, සබැඳි බෙදා ගන්න. ARPANET ඔප්පු කිරීමට යෙදුණේ එයයි — ඊළඟ පෝස්ට් එක.

{{< lab type="vm-terminal" >}}

## ගැඹුරින්: වයරයක් මත එක් අක්ෂරයක් — UART frame එක අතින්, RS-232 වෝල්ටීයතා, 300 bit/s modem සහ Shannon සීමාව

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** si.wikipedia හි "මොඩමය" ලිපිය අක්ෂර ~350 ක කෙටි ලිපියකි (stub). RS-232, UART framing හෝ නාලිකා ධාරිතාව (channel capacity) ගැන සිංහල ලිපියක් අපට හමු නොවීය. මෙම කොටස bit එකෙන් bit එක ගණනය කරයි.

### 1. මූලික පද

- **ශ්‍රේණිගත සබැඳිය (serial link):** bits එකින් එක, එකම වයරයක් දිගේ යැවීම.
- **UART (universal asynchronous receiver-transmitter):** byte එකක් bits පෙළක් බවට හරවා යවන සහ නැවත byte එකක් බවට හරවන චිපය.
- **අසමමුහුර්ත (asynchronous):** යවන්නා සහ ලබන්නා අතර පොදු clock වයරයක් නැත. එක් එක් අක්ෂරය "start bit" එකකින් ආරම්භ වේ.
- **Baud (baud):** තත්පරයකට සංකේත (symbols) ගණන. සරල RS-232 හි එක් සංකේතයක් = එක් bit එකක්.
- **8N1:** data bits 8, parity (parity) නැත, stop bit 1.
- **LSB-first (least significant bit first):** byte එකේ කුඩාම bit එක පළමුව යැවීම.
- **නාලිකා ධාරිතාව (channel capacity):** ශබ්දය (noise) ඇති නාලිකාවක දෝෂ නැතිව යැවිය හැකි උපරිම bit අනුපාතය.

### 2. වැඩ කළ උදාහරණය: 'H' අක්ෂරය 8N1 frame එකක

'H' = ASCII 72 = hex 0x48 = binary **0100 1000**.

UART එක idle වන විට රේඛාව **1** (mark) මට්ටමේ තබයි. ඉන්පසු:

| bit අංකය | අර්ථය | අගය |
|---|---|---|
| 0 | start bit | 0 |
| 1 | d0 (LSB) | 0 |
| 2 | d1 | 0 |
| 3 | d2 | 0 |
| 4 | d3 | 1 |
| 5 | d4 | 0 |
| 6 | d5 | 0 |
| 7 | d6 | 1 |
| 8 | d7 (MSB) | 0 |
| 9 | stop bit | 1 |

රේඛාවේ පෙළ: `0 0001 0010 1`. Byte එක "පසුපසට" යන බව පෙනේ: 0100 1000 → 0001 0010.

**කාලය (9600 baud):** එක් bit එකක් = 1 / 9600 = **104.17 µs**. Frame එකකට bits 10 → 1.0417 ms. එබැවින් තත්පරයට අක්ෂර **960** ක් පමණි, 9600 / 8 = 1200 නොවේ. Start සහ stop bits නිසා 20% ක් "අමතර" වැය වේ.

**ලබන්නා කරන දේ:** 1 → 0 වෙනස (start bit හි ආරම්භය) දුටු පසු bit කාලයෙන් භාගයක් (52 µs) බලා සිට start bit එක තවමත් 0 දැයි පරීක්ෂා කරයි. ඉන්පසු 104.17 µs වරක් බැගින් bits 8 කියවයි. ඒ නිසා clock දෙක සම්පූර්ණයෙන් සමාන නොවුණත්, frame එකක් තුළ පමණක් ගැළපීම ප්‍රමාණවත්ය. <!-- UNVERIFIED: mid-bit sampling at half a bit time after the start edge | no UART datasheet (e.g. 16550A) opened this round -->

### 3. RS-232 වෝල්ටීයතා: 1 යනු සෘණ

Texas Instruments ගේ application report "Interface Circuits for TIA/EIA-232-F" (SLLA037A, PDF පිටුව 8) අනුව:

- Driver: logic **0** = **+5 සිට +15 V**, logic **1** = **−5 සිට −15 V**.
- Receiver: +3 සිට +15 V = 0, −3 සිට −15 V = 1. ±3 V අතර කලාපය නිර්වචනය නොවේ.
- උපරිම data rate **20 kbit/s**, load 3–7 kΩ, receiver ±25 V දක්වා ඉවසයි.

එබැවින් ඉහත idle "1" රේඛාව ඇත්තටම **සෘණ** වෝල්ටීයතාවයකි, start bit එක ධන වෝල්ටීයතාවයකි. Driver (අවම 5 V) සහ receiver (අවම 3 V) සීමා අතර **2 V** වෙනස ශබ්ද ආන්තිකය (noise margin) වේ: කේබලය දිගේ 2 V දක්වා ශබ්දයක් හෝ පරිහානියක් ඉවසිය හැකිය.

### 4. Modem: 300 bit/s සහ එය අර්ථවත් වූ ආකාරය

ITU-T නිර්දේශය **V.21** හි මාතෘකාව: "300 bits per second duplex modem standardized for use in the general switched telephone network". (ITU-T හි නිල පිටුව.)

වැඩ කළ උදාහරණය: 300 bit/s, 8N1 → තත්පරයට අක්ෂර 30. 80 × 24 = 1,920 අක්ෂර තිරයක් පිරවීමට 1,920 / 30 = **64 s**. මිනිසෙකුගේ කියවීමේ වේගයට මෙය ප්‍රමාණවත් වූ නමුත් පින්තූරයක් යැවීමට නොවේ.

### 5. සීමාව: Shannon ධාරිතාව

Claude E. Shannon, "A Mathematical Theory of Communication" (1948), ප්‍රමේයය 17 (Theorem 17): කලාප පළල (bandwidth) W, සංඥා බලය P, white ශබ්ද බලය N නම්,

**C = W log₂((P + N) / N)** bits per second.

ආදර්ශ (illustrative) ගණනය: දුරකථන රේඛාවක ප්‍රයෝජනවත් කලාප පළල 3,100 Hz සහ signal-to-noise අනුපාතය 30 dB (එනම් P/N = 1,000) යැයි සිතමු:

C = 3100 × log₂(1001) ≈ 3100 × 9.967 ≈ **30,898 bit/s**.

මෙම ආදර්ශ අංක සමඟ 300 bit/s V.21 සීමාවට වඩා 100 ගුණයක් පහළින් පිහිටයි. පසුකාලීන modem සංකීර්ණ modulation මගින් මෙම සීමාව වෙත ළඟා වූයේ මේ නිසාය. Shannon ගේ ප්‍රමේයය කියන්නේ කිසිදු modem එකකට C ඉක්මවිය නොහැකි බවයි.

### 6. VM terminal: Linux හි serial port එක

මෙම පිටුවේ VM image එකේ (Linux 4.16.13, BusyBox) අපි මෙම විධාන **serial console** (`/dev/ttyS0`) හරහා ධාවනය කළෙමු:

```
dmesg | grep ttyS
cat /proc/tty/driver/serial
stty -F /dev/ttyS0
echo Hi | hexdump -C
```

අපට ලැබුණු ප්‍රතිඵල:
- `dmesg`: `ttyS0 at I/O 0x3f8 (irq = 4, base_baud = 115200) is a 16550A` — emulate කළ 16550A UART චිපයක්.
- `/proc/tty/driver/serial`: port 0 සඳහා `uart:16550A`, port `3F8`, `irq 4`.
- `stty -F /dev/ttyS0`: `speed 9600 baud`.
- `echo Hi | hexdump -C`: `48 69 0a` — 'H' = 0x48 (§2), 'i' = 0x69, newline = 0x0a.

පිටුවේ VM terminal එක browser එකේ ධාවනය වන්නේ VGA console (`/dev/tty1`) මතය, serial port එක මත නොවේ. එබැවින් ඔබට `dmesg`, `/proc` සහ `hexdump` විධාන එලෙසම ක්‍රියා කළ යුතුය. `stty -F /dev/ttyS0` ද device එක ඇති නිසා ක්‍රියා කළ යුතුය. <!-- UNVERIFIED: that stty -F /dev/ttyS0 behaves the same when run from the browser lab's tty1 session | we ran it only over the serial console in node v86 -->

### 7. පැන්සලෙන් අභ්‍යාසය

1. 'U' (ASCII 85 = 0x55) 8N1 frame එකේ bits 10 ලියන්න. එය විශේෂ වන්නේ ඇයි?
2. 115,200 baud හි, 8N1, එක් bit එකක කාලය සහ තත්පරයකට අක්ෂර ගණන කීයද?
3. 7E1 (data 7, even parity, stop 1) frame එකක bits කීයද? 'H' සඳහා parity bit එක කුමක්ද? (7-bit 'H' = 100 1000.)
4. Receiver එකක් +4 V දකී. එය 0 ද 1 ද? +2 V නම්?
5. කලාප පළල 3,000 Hz, P/N = 255 නම් Shannon C කීයද?

(පිළිතුරු:
1. 0x55 = 0101 0101. LSB-first: 1010 1010. Frame: `0 1010 1010 1` — 0 සහ 1 මාරුවෙන් මාරුවට. Baud අනුපාතය මැනීමට හෝ ගැළපීමට ප්‍රයෝජනවත් රටාවකි.
2. 1 / 115200 = **8.68 µs**. 115200 / 10 = **11,520** අක්ෂර/s.
3. 1 + 7 + 1 + 1 = **10** bits. 'H' හි 1 bits 2 ක් (ඉරට්ටේ) → even parity bit = **0**.
4. +4 V → **0** (+3 සිට +15 V). +2 V → **නිර්වචනය නොවේ.**
5. 3000 × log₂(256) = 3000 × 8 = **24,000 bit/s**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- Texas Instruments, "Interface Circuits for TIA/EIA-232-F" (SLLA037A), PDF පිටුව 8: https://www.ti.com/lit/an/slla037a/slla037a.pdf
- ITU-T Recommendation V.21 නිල පිටුව: https://www.itu.int/rec/T-REC-V.21/en
- C. E. Shannon, "A Mathematical Theory of Communication", *Bell System Technical Journal* 27, 1948, ප්‍රමේයය 17 (අප කියවූ Harvard ගණිත දෙපාර්තමේන්තු පිටපතේ PDF පිටුව 43): https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf (නිල නොවන පිටපත).
- මෙම පොතේ VM terminal image එක: §6 හි ප්‍රතිදාන අපි ධාවනය කර ලබා ගත්තෙමු.
- §5 හි කලාප පළල සහ SNR ආදර්ශ (illustrative) අංක වේ.

---
title: "ට්‍රාන්සිස්ටරය: BJT සිට MOSFET දක්වා"
weight: 13
date: 2026-01-01
draft: false
phase: "2 — භෞතික විද්‍යාව සහ උපාංග"
series_index: 12
aliases:
  - /posts/06-the-transistor-bjt-to-mosfet/
  - /posts/11-the-transistor-bjt-to-mosfet/
  - /posts/12-the-transistor-bjt-to-mosfet/
tags: []
summary: "MOSFET කර්මාන්ත ප්‍රමිතිය බවට පත් වූයේ ඇයි"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

"ට්‍රාන්සිස්ටර" යනුවෙන් හඳුන්වන උපාංග පවුල් දෙකක් ඇති අතර ඒවා සැබෑවටම වෙනස් මූලධර්ම මත ක්‍රියා කරයි. දෙකම තේරුම් ගැනීම — සහ සෑම පාහේ ඩිජිටල් තර්කය සඳහා එකක් අනෙක ප්‍රතිස්ථාපනය කළේ ඇයි — මෙම මාලාවේ පහළට යන සියල්ලටම වැදගත් වේ.

## BJT: ධාරාව ධාරාව පාලනය කරයි

Bipolar Junction Transistor එකකට doped කලාප තුනක් ඇත — NPN උපාංගයක් සඳහා එය N-type emitter, P-type base, N-type collector — පිටුපසට-පිටුපසට junctions දෙකක් සාදමින්. මූලික යාන්ත්‍රණය මෙයයි: තුනී base කලාපයට එන්නත් කරන කුඩා ධාරාවක් collector සිට emitter දක්වා ගලන බොහෝ විශාල ධාරාවක් පාලනය කරයි. Base ධාරාව ඵලදායී ලෙස majority carriers base හරහා විසරණය වී collector වෙත ඇදී යාමට "දොර විවෘත කරයි."

එහි වැදගත් වචනය *ධාරාව* ය. BJT එකක් ධාරා-පාලිතය — එය "on" (saturated) තත්ත්වයේ තබා ගැනීමට ඔබට අඛණ්ඩව base ධාරාව සැපයීමට අවශ්‍ය වේ. ඒ සඳහා සැබෑ පිරිවැයක් ඇත: BJT පදනම් පරිපථයක් සක්‍රියව මාරු නොවන විටද තත්ත්වය රඳවා ගැනීමට static ධාරාවක් ගත හැකි අතර, පරිමාණයේදී එය බරපතල බල ගැටලුවක් බවට පත් වේ.

## MOSFET: වෝල්ටීයතාව ධාරාව පාලනය කරයි

MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor) සම්පූර්ණයෙන්ම වෙනස් ලෙස ක්‍රියා කරයි. Gate electrode එකක් ඇත, තුනී පරිවාරක ඔක්සයිඩ් ස්ථරයකින් සිලිකන් body එකෙන් වෙන් කර ඇත (Post 5 හි එම ස්ථායී SiO₂). Gate එකට වෝල්ටීයතාව යෙදීමෙන් gate *හරහා* ධාරාව තල්ලු නොවේ — ඔක්සයිඩ් එය අවහිර කරයි — ඒ වෙනුවට එය විද්‍යුත් ක්ෂේත්‍රයක් නිර්මාණය කරන අතර එය යටින් ඇති සිලිකන්හි වාහක ආකර්ෂණය හෝ විකර්ෂණය කර, source සහ drain අතර සන්නායක channel එකක් සාදයි (හෝ නොසාදයි).

NMOS උපාංගයක් සඳහා, ධන gate වෝල්ටීයතාව යෙදීමෙන් gate යට මතුපිටට ඉලෙක්ට්‍රෝන ආකර්ෂණය වී "inversion layer" එකක් සාදයි — මුලින් P-type body සිලිකන් වූ තැන තුනී N-type channel එකක්. එම channel සෑදුණු පසු, drain සිට source දක්වා ධාරාව ගලන්නට හැක. Gate වෝල්ටීයතාව ඉවත් කරන්න, channel අතුරුදහන් වේ, ධාරාව නවතී.

BJT එකකින් තීරණාත්මක වෙනස: **MOSFET හි gate එක ප්‍රායෝගිකව steady-state ධාරාවක් නොගනී.** එය channel පාලනය කරන විද්‍යුත් ක්ෂේත්‍රයකි, junction පාලනය කරන විසරණ ධාරාවක් නොවේ. Gate capacitor ආරෝපණය වූ පසු, MOSFET එකක් "on" තබා ගැනීමේ පිරිවැය පාහේ ශුන්‍යය.

## MOSFET ජයග්‍රහණය කළේ ඇයි

එම ආසන්න-ශුන්‍ය static gate ධාරාවම සම්පූර්ණ කතාවයි. චිපයකට BJT කිහිප දහසක් ඇසුරුම් කළහොත් idle බල විසුරුම පමණක් සැබෑ තාප ගැටලුවක් බවට පත් වේ — 1970 ගණන්වල bipolar තර්ක පවුල් සඳහා මෙය සැබෑ බාධකයක් විය. MOSFET, සහ විශේෂයෙන් ඒවායින් ගොඩනැගුණු CMOS වින්‍යාසය (Post 7), අර්ථවත් ධාරාව ගන්නේ ප්‍රධාන වශයෙන් *මාරු වන අතරතුර*, තත්ත්වය රඳවා ගන්නා අතරතුර නොවේ. චිපය දිය නොවී තනි die එකක ට්‍රාන්සිස්ටර ගණන දහස් ගණනක සිට බිලියන ගණනක් දක්වා පරිමාණය වීමට ඉඩ දුන් ගුණය එයයි — Phase 8 හි process-node පෝස්ට්වල නිශ්චිතව දිගහැරෙන පරිමාණ කතාවකි.

BJT අතුරුදහන් නොවීය — අනුපාතයට වඩා අමු ධාරා-ධාවන ශක්තිය හෝ ඇනලොග් රේඛීයතාව වැදගත් වන තැන තවමත් භාවිතා වේ. නමුත් ඕනෑම බරපතල පරිමාණයක ඩිජිටල් තර්කය සඳහා, MOSFET හි අඩු static බලය එය එකම ශක්‍ය තේරීම කළ අතර, ඊළඟ පෝස්ට් එකේ සෑම තර්ක ද්වාරයක්ම (logic gate) ගොඩනැගෙන්නේ එම උපාංගයෙනි.


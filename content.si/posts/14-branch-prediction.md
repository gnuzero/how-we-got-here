---
title: "Branch Prediction"
date: 2026-01-01
draft: false
phase: "3 — CPU ගොඩනැගීම සහ එහි ගෘහ නිර්මාණ"
series_index: 14
tags: []
summary: "Pipeline flush මිල අධිකය — ඒවා දුර්ලභ කිරීමට prediction පවතී"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

වැරදි ලෙස අනාවැකි කළ branch එකක් වැරදි මාර්ගය දිගේ fetch කළ සියල්ල flush කරයි. ගැඹුරු pipeline එකකදී එය චක්‍ර දහයකට වඩා වැඩි මිලක් විය හැක. Post 13 එම වියදම මේසය මත තබා හැරියේය; මෙම පෝස්ට් එක ඊට පිළිතුරයි: දිශාව (සහ ඉලක්කය) මුලින්ම අනුමාන කරන්න, flush දුර්ලභ වන තරමට.

## Static අනුමාන ප්‍රමාණවත් නැත

Static නීති — සැමවිටම not-taken, හෝ "පසුපසට යන branches (loops) taken වේ" — දෘඪාංග වියදමක් නැති නමුත් සැබෑ කේතයේ බොහෝ දේ මඟහරියි. Branch හැසිරීම ස්ථිර නීතියකට නොපෙනෙන ඉතිහාසය මත රඳා පවතී.

Dynamic predictors runtime හි ප්‍රතිඵල ලුහුබඳියි. වාර 100 ක් ධාවනය වන loop එකක් එහි පසුපස branch එක වාර 99 ක් taken කරයි; "පෙර වර taken විය" මතක තබා ගන්නා predictor එකක් සෑම පුනරාවර්තනයක්ම පාහේ නිවැරදිව ගනී.

## 2-Bit Saturating Counter එක

සම්භාව්‍ය ගොඩනැගුම් ඒකකය: තත්ත්ව හතරක් — strongly/weakly not-taken, weakly/strongly taken. විසඳුණු සෑම ප්‍රතිඵලයක්ම counter එක සැබෑවට සිදු වූ දෙය දෙසට එක් පියවරක් තල්ලු කරයි (අන්තයන්හි saturating වේ). Prediction යනු ඉහළම bit එකයි.

ඇයි එක් bit එකක් නොවේද? 1-bit "අවසාන ප්‍රතිඵලය" තනි අසාමාන්‍යතාවකින් පෙරළේ — පසුව ඊළඟ *සාමාන්‍ය* පුනරාවර්තනයද වැරදිව අනාවැකි කරයි. Bits දෙකකට පෙරළීමට අනුක්‍රමික අසාමාන්‍යතා දෙකක් අවශ්‍ය වේ, එබැවින් loop එකේ අවසාන not-taken පිටවීම ඊළඟ loop ධාවනය විෂ කරන්නේ නැත.

## ඊළඟට Fetch කළ යුත්තේ කොහේද

දිශාව අඩක් පමණි. Taken branch එකකට, branch සම්පූර්ණයෙන් decode වීමට පෙර fetch එකට *ඉලක්කයක්*ද අවශ්‍යය. Branch Target Buffer (BTB) යනු කුඩා cache එකකි, උපදෙස් ලිපිනයෙන් සුචිගත, අවසාන විසඳුණු ඉලක්කය මතක තබා ගනී. Hit එකකදී, fetch ඊළඟ චක්‍රයේ speculative ලෙස පැනිය හැක.

සැබෑ predictors counter tables (බොහෝ විට global history සමඟ) සහ BTB එකතු කරයි; ඉහළ-පෙළ චිප ඊටත් ඔබ්බට යයි. 2-bit counter එක තවමත් සංකල්පීය හරයයි — සහ mini-CPU lab එකේ අතින් නිරීක්ෂණය කිරීමට කුඩා තරම්: loop එකක branch පියවරෙන් පියවර කර සෑම පුනරාවර්තනයකදීම prediction තත්ත්වය යාවත්කාලීන වන ආකාරය බලන්න.

{{< lab type="mini-cpu" >}}

**පිටවීමේ දොර:** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — dynamic branch prediction පිළිබඳ මුල් ක්‍රමානුකූල සැලකිල්ල, පසුව පෙළපොත් බවට පත් වූ saturating-counter අදහස් ඇතුළුව.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

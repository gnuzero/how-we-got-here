---
title: "අවධානය පමණක් ප්‍රමාණවත්ය"
weight: 63
date: 2026-01-01
draft: false
phase: "10 — නවීන AI දෘඪාංග"
series_index: 63
tags: []
summary: "Self-attention කශේරුකාව වසා දැමුවේය — මාලාව ගොඩනැගූ matmul දෘඪාංගයට map වන සමාන්තර අනුක්‍රම ආකෘතිකරණය"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

මෙම මාලාවේ මාතෘකාව *රිලේ සිට අවධානය දක්වා* ය. මෙතෙක් ආ සෑම දෙයක්ම විශාල පරිමාණ matrix multiplication ප්‍රායෝගික කළ දිගු භෞතික සහ ගෘහ නිර්මාණ මාර්ගයයි. මෙම පරිච්ඡේදය එම මාර්ගය මඟින් හැකි වූ ඇල්ගොරිතමික ගමනාන්තයයි.

2017 දී **Vaswani et al.** "Attention Is All You Need" ප්‍රකාශයට පත් කළහ. එම පත්‍රිකාව Transformer හඳුන්වා දුන් අතර *self-attention* අනුක්‍රම ආකෘතිකරණය සඳහා ප්‍රාථමික යාන්ත්‍රණය කළේය — RNN සහ LSTM වල අනුක්‍රමික පුනරාවර්තනය වෙනුවට සෑම පිහිටීමක්ම එකවර බලාගත හැකි සම්පූර්ණයෙන් සමාන්තර කළ හැකි මෙහෙයුමක් ඉදිරිපත් කරමින්.

## Self-Attention කරන්නේ කුමක්ද

Token embeddings ලබා දුන් විට, self-attention සෑම පිහිටීමක් සඳහාම සියලු පිහිටීම්වල values වල බර තැබූ සංයෝජනයක් ගණනය කරයි. බර ලැබෙන්නේ *query* එකක් (වත්මන් පිහිටීම) සහ *keys* (සෑම පිහිටීමක්ම) අතර සමානතාවයෙනි. අනුකෘති ස්වරූපයෙන්:

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\), සහ \(V\) යනු ආදානයේ රේඛීය ප්‍රක්ෂේපණයි.
- \(\sqrt{d_k}\) මඟින් පරිමාණය කිරීම මානය විශාල විට softmax සංතෘප්ත වීම වළක්වයි.
- ප්‍රතිඵලය සමාන දිගක අනුක්‍රමයකි — සෑම පිහිටීමක්ම දත්ත-නිර්භර ආකාරයෙන් අනෙක් සෑම එකකින්ම රැස් කළේය.

Op එක matmuls එකතුව softmax නිසා, එය පෙර පරිච්ඡේදවල දෘඪාංගයට map වේ: ඉහළ-throughput MAC ඒකක, විශාල on-chip මතක, activations සහ බර චලනය කරන interconnects.

## Multi-Head Attention

එක් head එකක් එක් වර්ගයේ සම්බන්ධතාවක් ඉගෙන ගැනීමට නැඹුරු වේ. Multi-head attention කිහිපයක් සමාන්තරව ධාවනය කරයි (විවිධ ඉගෙන ගත් ප්‍රක්ෂේපණ) සහ concatenate කරයි — එකම layer එක තුළ syntactic, semantic, positional, දිගු- සහ කෙටි-පරාස.

මුල් Transformer heads 8 ක් භාවිතා කළේය. නවීන LLM සාමාන්‍යයෙන් layer එකකට query heads දස ගණන් සිට අඩු සිය ගණන් දක්වා භාවිතා කරයි (උදා. GPT-3: 96; Llama 3 405B: 128) layers දස ගණන් සිට ~100+ දක්වා හරහා (Llama 3 405B: 126) — දෙකෙන් එකක් නිතිපතා "සිය ගණන්" නොවේ.

## එය ප්‍රමුඛ වූයේ ඇයි

1. **සමාන්තරතාව** — RNN මෙන් නොව, සෑම පිහිටීමක්ම එකවර ධාවනය විය හැක. Training throughput අනුක්‍රම දිග සහ දෘඪාංග matmul ධාරිතාව සමඟ පරිමාණය වේ, අනුක්‍රමික පියවර සමඟ නොවේ.
2. **දිගු-පරාස රඳා පැවැත්ම** — මූලධර්මයෙන් ඕනෑම token එකක් අනෙක් ඕනෑම එකකට සෘජුවම attend කරයි, quadratic attention matrix සහ ප්‍රායෝගික context windows මගින් සීමා වේ.
3. **දෘඪාංග සම්බන්ධතාව** — ප්‍රමුඛ වැඩ ඝන matrix multiplication ය — ටෙන්සර් cores, systolic arrays, සහ නවීන GPU මතක ධුරාවලි ප්‍රශස්ත කළ දේම (Posts 55–58).

සම්පූර්ණ attention හි quadratic පිරිවැය තවමත් සැබෑ ය — එබැවින් sparse, linear, sliding-window, සහ අනෙක් ආසන්න කිරීම්. මූලික අවබෝධය තවමත් රැඳේ: සරල, සමාන්තර කළ හැකි attention යාන්ත්‍රණයක් පුනරාවර්තනය ප්‍රතිස්ථාපනය කළ හැකි විය.

## චාපය වසා දැමීම

Boolean තර්කය ක්‍රියාත්මක කළ විද්‍යුත් චුම්බක relays සිට, tubes, ට්‍රාන්සිස්ටර, pipelines, caches, GPU, සහ ටෙන්සර් cores හරහා, දෘඪාංග ගමනාගමනය මාරුව, ගබඩාව, සහ අංක ගණිතය වේගවත්, ඝන, සහ වඩා කාර්යක්ෂම කළේය. Attention යනු අනුක්‍රම ආකෘතිකරණය සඳහා එම දෘඪාංගයෙන් වර්තමානයේ වඩාත්ම වටිනාකම උපුටා ගන්නා ඇල්ගොරිතමික ව්‍යුහයයි.

භෞතික සීමාවන් වෙනස් වෙමින් පවතී (මතක bandwidth, op එකකට ශක්තිය, interconnect latency). ඉංජිනේරු ප්‍රතිචාරය මෙම මාලාවේ ආරම්භයේ සිටම එම රටාවයි: බඳින සීමාව නිශ්චිතව නම් කරන්න, පසුව එකම බිත්තියට එරෙහිව තදින්ම තල්ලු කිරීම පමණක් නොව ගෘහ නිර්මාණය වෙනස් කරන්න.

එය රිලේ සිට අවධානය දක්වා අඛණ්ඩ නූලයි.

**පිටවීමේ දොර:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, and Illia Polosukhin, "Attention Is All You Need" (NeurIPS 2017) — Transformer හඳුන්වා දුන් සහ self-attention ප්‍රමුඛ අනුක්‍රම-ආකෘතිකරණ යාන්ත්‍රණය කළ ප්‍රාථමික පත්‍රිකාව.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

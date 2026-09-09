---
title: "Attention Is All You Need"
weight: 63
date: 2026-01-01
draft: false
phase: "10 — நவீன AI வன்பொருள்"
series_index: 63
tags: ["attention", "transformers", "neural networks"]
summary: "Self-attention spine-ஐ மூடியது — பயணம் கட்டிய matmul வன்பொருள் மீது வரைபடமாகும் parallel வரிசை மாதிரியாக்கம்"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

இந்தத் தொடரின் தலைப்பு *ரிலேயிலிருந்து Attention வரை*. இதுவரை வந்த அனைத்தும், பெரிய அளவிலான matrix multiplication-ஐ நடைமுறைக்குக் கொண்டுவந்த நீண்ட இயற்பியல் மற்றும் கட்டமைப்புப் பாதை. இந்த அத்தியாயம் அந்தப் பாதை சாத்தியமாக்கிய அல்காரித இலக்கு.

2017இல், **Vaswani et al.** "Attention Is All You Need"-ஐ வெளியிட்டனர். அந்தக் கட்டுரை Transformer-ஐ அறிமுகப்படுத்தி *self-attention*-ஐ வரிசைகளை மாதிரியாக்குவதற்கான முதன்மைப் பொறிமுறையாக ஆக்கியது — RNN மற்றும் LSTM-இன் வரிசைமுறை மீள்நிகழ்வை, ஒவ்வொரு நிலையையும் ஒரே நேரத்தில் பார்க்கக்கூடிய முழுமையாக இணைச்செயலாக்கக்கூடிய செயல்பாட்டால் மாற்றியது.

## Self-Attention என்ன செய்கிறது

டோக்கன் உட்பொதிப்புகள் கொடுக்கப்பட்டால், self-attention ஒவ்வொரு நிலைக்கும் எல்லா நிலைகளிலும் உள்ள மதிப்புகளின் எடையிடப்பட்ட சேர்க்கையைக் கணிக்கிறது. எடைகள் ஒரு *query* (தற்போதைய நிலை) மற்றும் *keys* (ஒவ்வொரு நிலை) இடையேயான ஒற்றுமையிலிருந்து வரும். மேட்ரிக்ஸ் வடிவில்:

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\), மற்றும் \(V\) உள்ளீட்டின் நேரியல் திட்டங்கள்.
- \(\sqrt{d_k}\) ஆல் அளவிடுவது பரிமாணம் பெரியதாக இருக்கும்போது softmax நிறைவுறுவதைத் தடுக்கிறது.
- முடிவு அதே நீளத்தின் வரிசை; ஒவ்வொரு நிலையும் தரவு-சார்ந்த வழியில் மற்ற எல்லாவற்றிலிருந்தும் சேகரித்தது.

Op matmuls மற்றும் ஒரு softmax ஆதலால், முந்தைய அத்தியாயங்களின் வன்பொருள் மீது வரைபடமாகிறது: உயர்-throughput MAC அலகுகள், பெரிய on-chip நினைவகங்கள், activations மற்றும் weights நகர்த்தும் interconnects.

## Multi-Head Attention

ஒரு head ஒரு வகையான உறவைக் கற்றுக்கொள்ளும் போக்குடையது. Multi-head attention பலவற்றை இணைச்செயலாக இயக்குகிறது (வேறுபட்ட கற்றுக்கொள்ளப்பட்ட திட்டங்கள்) மற்றும் இணைக்கிறது — அதே அடுக்கில் தொடரியல், பொருண்மை, நிலைசார்ந்த, நீண்ட- மற்றும் குறுகிய-தூரம்.

அசல் Transformer 8 heads பயன்படுத்தியது. நவீன LLM-கள் பொதுவாக ஒரு அடுக்குக்குப் பத்து முதல் குறைந்த நூற்றுக்கணக்கான query heads (எ.கா. GPT-3: 96; Llama 3 405B: 128) பத்து முதல் ~100+ அடுக்குகள் வரை (Llama 3 405B: 126) — இருபக்கமும் வழக்கமாக "நூற்றுக்கணக்கானவை" அல்ல.

## அது ஏன் மேலாதிக்கமானது

1. **இணைச்செயலாக்கம்** — RNN-களைப் போலல்லாமல், ஒவ்வொரு நிலையும் ஒரே நேரத்தில் ஓடலாம். பயிற்சி throughput வரிசை நீளம் மற்றும் வன்பொருள் matmul திறனுடன் அளவிடப்படுகிறது, வரிசைமுறை படிகளால் அல்ல.
2. **நீண்ட-தூர சார்பு** — கொள்கையளவில் எந்த டோக்கனும் வேறு எதற்கும் நேரடியாகக் கவனம் செலுத்தலாம், இருபடி attention மேட்ரிக்ஸ் மற்றும் நடைமுறை context windows ஆல் வரம்பிடப்பட்டது.
3. **வன்பொருள் இணக்கம்** — மேலாதிக்க வேலை அடர்த்தியான matrix multiplication — tensor cores, systolic arrays மற்றும் நவீன GPU நினைவக படிநிலைகள் உகந்ததாக்கப்பட்டது சரியாக (பதிவுகள் 55–58).

முழு attention-இன் இருபடிச் செலவு இன்னும் உண்மை — எனவே sparse, linear, sliding-window மற்றும் பிற தோராயங்கள். மைய உள்ளுணர்வு இன்னும் நிற்கிறது: எளிய, இணைச்செயலாக்கக்கூடிய attention பொறிமுறை மீள்நிகழ்வை மாற்ற முடியும்.

## வளைவை மூடுதல்

Boolean தர்க்கத்தைச் செயல்படுத்திய மின்காந்த ரிலேக்களிலிருந்து, குழாய்கள், டிரான்சிஸ்டர்கள், pipelines, caches, GPU-கள் மற்றும் tensor cores வழியாக, வன்பொருள் பாதை மாறுதல், சேமிப்பு மற்றும் கணிதத்தை வேகமாகவும், அடர்த்தியாகவும், திறமையாகவும் ஆக்கியது. Attention என்பது வரிசை மாதிரியாக்கத்திற்காக அந்த வன்பொருளிலிருந்து தற்போது அதிக மதிப்பைப் பிரித்தெடுக்கும் அல்காரித கட்டமைப்பு.

இயற்பியல் கட்டுப்பாடுகள் தொடர்ந்து மாறுகின்றன (நினைவக bandwidth, ஒரு op-க்கு ஆற்றல், interconnect latency). பொறியியல் பதில் இந்தத் தொடரின் தொடக்கத்திலிருந்தே அதே pattern: பிணைப்புக் கட்டுப்பாட்டைத் துல்லியமாகப் பெயரிடுங்கள், பிறகு அதே சுவருக்கு எதிராகக் கடினமாகத் தள்ளுவது மட்டும் அல்லாமல் கட்டமைப்பை மாற்றுங்கள்.

அதுவே ரிலேக்களிலிருந்து attention வரையிலான தொடர்ச்சியான நூல்.

**Door out:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, மற்றும் Illia Polosukhin, "Attention Is All You Need" (NeurIPS 2017) — Transformer-ஐ அறிமுகப்படுத்தி self-attention-ஐ மேலாதிக்க வரிசை-மாதிரியாக்கப் பொறிமுறையாக ஆக்கிய முதன்மைக் கட்டுரை.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

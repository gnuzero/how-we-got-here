---
title: "CUDA Cores, Warps மற்றும் Occupancy"
weight: 59
date: 2026-01-01
draft: false
phase: "9 — GPU-கள் மற்றும் Parallel Compute"
series_index: 58
aliases:
  - /posts/53-cuda-cores-warps-and-occupancy/
tags: []
summary: "SIMT, SM-கள் மற்றும் warps மீது வரைபடமாகிறது — divergence வரை lockstep வெல்லும்; occupancy memory stall-களை மறைக்கும்"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

பதிவு 52 GPU-கள் ஏன் மிகப் பெரிய parallel SIMT மீது பந்தயம் கட்டுகின்றன என்பதை உள்ளடக்கியது. இந்தப் பதிவு உறுதியான வரைபடம்: Streaming Multiprocessors, warps மற்றும் occupancy — அந்த parallel வன்பொருள் உண்மையில் எவ்வளவு முழுமையாகப் பயன்படுத்தப்படுகிறது.

> **தமிழ் இடைவெளிக் குறிப்பு:** CUDA, SIMT/warps, occupancy பற்றித் தமிழில் எழுத்து விளக்கமோ காணொளியோ கிட்டத்தட்ட இல்லை. இங்கே ஒரு உண்மையான GPU-வின் (NVIDIA Tesla V100, 2017) SM எண்களை — NVIDIA-வின் Volta whitepaper-இலிருந்து சரிபார்த்தவை — வைத்து thread எண்ணிடல், divergence, occupancy ஆகியவற்றைக் கணக்கிடுகிறோம். பிற எண்கள் "எடுத்துக்காட்டு மதிப்பு".

## முதலில் சொற்கள்

- **SM (Streaming Multiprocessor):** GPU-வின் அடிப்படைக் கட்டுமானத் தொகுதி; தனக்கென scheduler-கள், register file, கணக்கு அலகுகள், shared memory கொண்டது.
- **CUDA core:** NVIDIA-வின் பெயர் — ஒரு எளிய கணக்கு lane (எ.கா. ஒரு FP32 கூட்டல்/பெருக்கல் அலகு). CPU "core" போன்ற முழுமையான செயலி அல்ல.
- **Warp (வார்ப்):** lockstep-ஆக ஒரே அறிவுறுத்தலை ஓட்டும் 32 thread-களின் குழு (NVIDIA). AMD-இல் இதற்கு இணையானது "wavefront" (வரலாற்று ரீதியாக 64).
- **Thread block (இழைத் தொகுதி):** ஒரே SM-இல் ஒன்றாக ஓடி, shared memory-ஐப் பகிரக்கூடிய thread-களின் குழு.
- **Grid (வலை):** ஒரு kernel-க்காகத் தொடங்கப்படும் எல்லா block-களின் தொகுப்பு.
- **Register file (பதிவேட்டுக் கோப்பு):** SM-இல் உள்ள எல்லா thread-களின் register-களும் சேமிக்கப்படும் பெரிய, வேகமான நினைவகம்.
- **Shared memory (பகிர் நினைவகம்):** ஒரு block-இன் thread-கள் பகிரும், நிரலாளர் கட்டுப்படுத்தும் சிறிய on-chip நினைவகம்.
- **Divergence (பிரிதல்):** ஒரு warp-க்குள் thread-கள் வெவ்வேறு branch-களை எடுப்பது.
- **Occupancy (நிறைவு விகிதம்):** ஒரு SM-இல் உண்மையில் குடியிருக்கும் warp-கள் ÷ அது அதிகபட்சம் தாங்கக்கூடிய warp-கள்.

## Streaming Multiprocessor

ஒரு GPU பல Streaming Multiprocessors (SM-கள்) — ஒவ்வொன்றும் பெரும்பாலும் தன்னிறைவான parallel அலகு, பல எளிய CUDA cores (ALU-பாணி lanes, Phase 3 CPU core-ஐ விட வேண்டுமென்றே மிகக் குறைந்த சிக்கலானவை: out-of-order execution இல்லை, பதிவு 14 வகை refined branch prediction இல்லை), ஒரு warp scheduler, மற்றும் resident threads பகிரும் register file. பெரும்பாலும் சுயாதீனமாக ஓடும் பத்துக்கணக்கான SM-கள் ஒரு GPU-வின் மொத்த parallelism-இன் மூலம் — ஒரு CPU-வின் சில சிக்கலான cores-க்கு எதிராக.

## Warps: Lockstep அலகாக

ஒரு SM-இல் threads warps-ஆகக் குழுவாக்கப்படும் — NVIDIA வன்பொருளில் எப்போதும் 32 threads (AMD wavefronts வரலாற்றில் 64 பயன்படுத்தியது). ஒரு warp பதிவு 52-இன் SIMT அமல்படுத்தப்படும் நுணுக்கம்: எல்லா 32-உம் *அதே* அறிவுறுத்தலை *அதே* cycle-இல் இயக்கும், ஒவ்வொன்றும் தன் தரவில். அதுதான் "ஒரு பகிரப்பட்ட கட்டுப்பாட்டு அலகு, பல lanes" என்பதன் வன்பொருள் வடிவம்.

## Branch Divergence: Lockstep செலவாகும் இடம்

ஒரு warp-*க்குள்* threads வெவ்வேறு branches எடுக்கும்போது, வன்பொருள் இரு பாதைகளையும் வரிசையாக இயக்கி செயலற்ற பாதியை mask செய்யும். ஒவ்வொரு thread-க்கும் ஒன்று மட்டுமே தேவைப்பட்டாலும் warp இரு பாதைகளின் நீளம் எடுக்கும் — non-divergent வழக்கை மலிவாக்கும் அதே lockstep-இன் நேரடி வரி. ஒரு warp-இல் threads-ஐ அதே பாதையில் வைத்திருப்பது எனவே உண்மையான மேம்படுத்தல், பாணி விருப்பம் அல்ல.

## Occupancy: தயாரான வேலையால் Latency மறைத்தல்

ஒரு SM-க்கு வரையறுக்கப்பட்ட registers மற்றும் shared memory உண்டு; ஒவ்வொரு resident warp-உம் ஒரு பங்கை நுகரும். Occupancy என்பது வன்பொருள் ஆதரிக்கக்கூடியதற்கு ஒப்பீட்டில் எத்தனை warps resident மற்றும் தகுதியானவை. உயர் occupancy memory latency மறைக்க உதவும் (பதிவு 35 மீண்டும்): ஒரு warp மெதுவான அணுகலில் stall ஆகும்போது, scheduler தயாரான warp-க்கு மாறி lanes-ஐ வேலையில் வைக்கும்.

அது "அதிகரித்து நிறுத்துங்கள்" அல்ல. ஒரு thread-க்கு அதிக registers அல்லது shared memory பயன்படுத்தும் kernel குறைவான warps ஓட்டினாலும், அந்த வளங்கள் தேவையற்ற வேலை அல்லது memory போக்கை வெட்டினால் வேகமாக முடியலாம். Occupancy மற்றும் per-thread வளங்கள் உண்மையான tradeoff — சுருக்கத்தில் மட்டும் அல்ல, kernels உண்மையான சிலிகானைச் சந்திக்கும்போது தோன்றும் ஒன்று.

## ஒரு உண்மையான SM: V100-இன் எண்கள்

NVIDIA Volta whitepaper-இன்படி Tesla V100:

| அளவு | மதிப்பு |
|---|---|
| SM-கள் | 80 |
| ஒரு SM-இல் FP32 core-கள் | 64 (மொத்தம் 5,120) |
| ஒரு SM-இன் பிரிவுகள் (processing blocks) | 4 — ஒவ்வொன்றிலும் 16 FP32 core-கள், ஒரு warp scheduler, 64 KB register file |
| ஒரு warp-இல் thread-கள் | 32 |
| ஒரு SM-இல் அதிகபட்ச warp-கள் | 64 (= 2,048 thread-கள்) |
| ஒரு SM-இல் 32-bit register-கள் | 65,536 (= 256 KB) |
| ஒரு thread-க்கு அதிகபட்ச register-கள் | 255 |
| ஒரு SM-இல் அதிகபட்ச block-கள் | 32 |
| Shared memory ஒரு SM-க்கு | 96 KB வரை (அமைக்கக்கூடியது) |

ஒரு எண்ணைக் கவனியுங்கள்: 256 KB register file **ஒவ்வொரு SM-க்கும்**. 80 SM-களில் அது 20 MB — பல CPU-களின் முழு L2 cache-ஐ விட அதிகம், register-களுக்கு மட்டும். ஏன்? ஒரு warp நினைவகத்துக்காகக் காத்திருக்கும்போது வேறு warp-க்கு மாற, **எல்லா** குடியிருக்கும் warp-களின் register-களும் ஒரே நேரத்தில் chip-இல் இருக்க வேண்டும். CPU-வின் context switch (பதிவு 24) register-களை நினைவகத்தில் சேமித்து மீட்கிறது; GPU அதைச் செய்வதில்லை — ஒரு cycle-இல் warp மாற்றம் "இலவசம்", ஏனெனில் எதையும் நகர்த்த வேண்டியதில்லை.

## Thread-கள் தங்கள் இடத்தை எப்படி அறிகின்றன

CUDA-வில் ஒவ்வொரு thread-உம் தன் block எண் (blockIdx), block-க்குள் தன் எண் (threadIdx), block-இன் அளவு (blockDim) ஆகியவற்றைப் பார்க்க முடியும். ஒரு நீண்ட array-இல் அதன் இடம்:

**i = blockIdx.x × blockDim.x + threadIdx.x**

**எடுத்துக்காட்டு:** blockDim = 256, blockIdx = 3, threadIdx = 17 → i = 3 × 256 + 17 = **785**.

அதே thread எந்த warp-இல்? Block-க்குள் thread-கள் 32-ஆகத் தொடர்ச்சியாகப் பிரிக்கப்படுகின்றன:
- warp எண் = threadIdx ÷ 32 (முழு எண் வகுத்தல்); lane = threadIdx mod 32
- threadIdx = 17 → warp 0, lane 17
- threadIdx = 200 → 200 ÷ 32 = 6 மீதி 8 → warp 6, lane 8
- 256 thread block = 256 ÷ 32 = **8 warp-கள்**

**N = 10,00,000 உறுப்புகளுக்கு எத்தனை block?** ⌈1,000,000 ÷ 256⌉ = 3,907 block-கள் → 3,907 × 256 = 1,000,192 thread-கள். 192 thread-களுக்கு வேலை இல்லை; அதனால் kernel-இல் `if (i < N)` என்ற காவல் வரி அவசியம்.

**Block அளவு ஏன் 32-இன் மடங்காக இருக்க வேண்டும்?** 100 thread block → ⌈100 ÷ 32⌉ = 4 warp-கள் = 128 lane இடங்கள். 28 lane-கள் ஒவ்வொரு அறிவுறுத்தலிலும் வீணாகின்றன: 28 ÷ 128 ≈ **21.9%** இழப்பு, எந்தக் கணக்கும் இல்லாமலே.

## Branch divergence, எண்களில்

ஒரு kernel-இல் இப்படி ஒரு branch (அறிவுறுத்தல் எண்ணிக்கைகள் எடுத்துக்காட்டு மதிப்புகள்):

```
if (நிபந்தனை)  { பாதை A — 10 அறிவுறுத்தல்கள் }
else           { பாதை B — 20 அறிவுறுத்தல்கள் }
```

**வழக்கு 1 — நிபந்தனை = "threadIdx இரட்டைப்படை எண்":** ஒவ்வொரு warp-இலும் 16 thread-கள் A, 16 thread-கள் B. Warp இரண்டு பாதைகளையும் ஒன்றன்பின் ஒன்றாக ஓட்டுகிறது; ஒவ்வொரு பாதையின்போதும் மற்ற பாதி "mask" செய்யப்பட்டு சும்மா இருக்கிறது.
1. Warp எடுக்கும் நேரம் = 10 + 20 = 30 அறிவுறுத்தல் படிகள்
2. கிடைக்கும் lane-படிகள் = 32 × 30 = 960
3. பயனுள்ள lane-படிகள் = 16 × 10 + 16 × 20 = 160 + 320 = 480
4. செயல்திறன் = 480 ÷ 960 = **50%**

**வழக்கு 2 — நிபந்தனை = "(threadIdx ÷ 32) இரட்டைப்படை எண்":** இப்போது ஒரு warp-இன் 32 thread-களும் ஒரே பாதை. A-வை எடுக்கும் warp 10 படிகள், B-யை எடுக்கும் warp 20 படிகள் — எதுவும் mask செய்யப்படவில்லை. செயல்திறன் **100%**. வேலை அதே; எந்த thread-கள் எந்தப் பாதையை எடுக்கின்றன என்ற **அமைப்பு** மட்டும் மாறியது.

(Volta-விலிருந்து NVIDIA "independent thread scheduling" சேர்த்தது: பிரிந்த பாதைகளின் அறிவுறுத்தல்களை நேரத்தில் இடைக்கலக்கலாம். ஆனால் whitepaper-ஏ சொல்வதுபோல், எந்த ஒரு clock cycle-இலும் ஒரு warp-இன் செயலில் உள்ள thread-களுக்கு ஒரே அறிவுறுத்தல்தான் ஓடுகிறது — அதனால் மேலே உள்ள 50% கணக்கு அடிப்படையில் மாறுவதில்லை.)

## Occupancy: register-கள் எப்படி warp எண்ணிக்கையை வரம்பிடுகின்றன

V100 SM-இல் 65,536 register-கள், அதிகபட்சம் 64 warp-கள் (2,048 thread-கள்). ஒரு kernel-இன் ஒவ்வொரு thread-உம் R register-களைப் பயன்படுத்தினால், குடியிருக்கக்கூடிய thread-கள் ≤ 65,536 ÷ R. (உண்மையான வன்பொருள் register-களைச் சிறு தொகுப்புகளாக ஒதுக்குவதால் எண்கள் சற்றுக் குறையலாம்; இங்கே அதைப் புறக்கணிக்கிறோம்.)

| R (register/thread) | 65,536 ÷ R | Warp-கள் (≤ 64) | Occupancy |
|---|---|---|---|
| 32 | 2,048 | 64 | 100% |
| 64 | 1,024 | 32 | 50% |
| 128 | 512 | 16 | 25% |
| 255 | 257 → 256 (முழு warp-களாக) | 8 | 12.5% |

Shared memory-உம் இதே போல வரம்பிடுகிறது: ஒரு block 48 KB shared memory பயன்படுத்தினால், 96 KB SM-இல் 96 ÷ 48 = 2 block-கள் மட்டுமே குடியிருக்க முடியும்.

## எத்தனை warp-கள் "போதும்"? Little's law கணக்கு

ஒரு warp scheduler ஒவ்வொரு cycle-இலும் ஏதாவது ஒரு warp-இலிருந்து ஒரு அறிவுறுத்தலை வெளியிட விரும்புகிறது. ஒரு warp நினைவகத்திலிருந்து load செய்தால், பதில் வர L cycle-கள் ஆகும்; அதற்கு முன் அந்த warp, load முடிவைச் சாராத I அறிவுறுத்தல்களை மட்டுமே வெளியிட முடியும். Scheduler சும்மா இருக்காமல் இருக்க, அந்த L cycle-களை மற்ற warp-கள் நிரப்ப வேண்டும்:

**ஒரு scheduler-க்குத் தேவையான warp-கள் ≈ L ÷ I**

**எடுத்துக்காட்டு மதிப்புகள் 1:** L = 400 cycle, I = 8 → 400 ÷ 8 = **50 warp-கள் ஒரு scheduler-க்கு**. V100 SM-இல் 4 scheduler-கள், மொத்தம் 64 warp-கள் → ஒரு scheduler-க்கு 16 மட்டுமே. 100% occupancy-இலும் போதாது! தீர்வு occupancy அல்ல — I-ஐ உயர்த்துவது (ஒரு thread பல சுயாதீன load-களை முன்கூட்டியே வெளியிடுவது) அல்லது L-ஐக் குறைப்பது (தரவை shared memory/cache-இல் வைத்திருப்பது).

**எடுத்துக்காட்டு மதிப்புகள் 2:** L = 200 cycle, I = 20 → 200 ÷ 20 = 10 warp-கள் ஒரு scheduler-க்கு → SM முழுவதற்கும் 40 warp-கள் → 40 ÷ 64 = **62.5% occupancy போதும்**. இதற்கு மேல் warp-களைச் சேர்ப்பது வேகத்தைக் கூட்டாது. அதனால் ஒவ்வொரு thread-க்கும் அதிக register கொடுத்து (மேலே உள்ள அட்டவணையில் R = 32-இலிருந்து 48 வரை, 65,536 ÷ 48 ≈ 1,365 → 42 warp-கள்) நினைவகப் போக்குவரத்தைக் குறைத்தால், குறைந்த occupancy-இலும் kernel வேகமாக முடியலாம். ஆங்கிலப் பதிவு சொல்லும் "maximize and stop அல்ல" என்பதன் எண் வடிவம் இதுதான்.

## காகிதப் பயிற்சிகள் (விடைகளுடன்)

(பயிற்சிகளில் புதிதாக வரும் உள்ளீட்டு எண்கள், மூலத்துடன் குறிக்கப்பட்டவை தவிர, எடுத்துக்காட்டு மதிப்புகள்.)

1. blockDim = 128, blockIdx = 10, threadIdx = 77. i என்ன? எந்த warp, எந்த lane?
   *விடை:* i = 10 × 128 + 77 = 1,357. Warp 77 ÷ 32 = 2, lane 77 mod 32 = 13.
2. ஒரு warp-இல் 8 thread-கள் பாதை A (12 அறிவுறுத்தல்), 24 thread-கள் பாதை B (4 அறிவுறுத்தல்). SIMT செயல்திறன்?
   *விடை:* நேரம் 16 படிகள் → 32 × 16 = 512 lane-படிகள். பயனுள்ளவை 8 × 12 + 24 × 4 = 96 + 96 = 192. 192 ÷ 512 = 37.5%.
3. V100 SM-இல் ஒரு kernel ஒரு thread-க்கு 80 register பயன்படுத்துகிறது. அதிகபட்ச occupancy (தொகுப்பு ஒதுக்கீட்டைப் புறக்கணித்து)?
   *விடை:* 65,536 ÷ 80 = 819 thread-கள் → முழு warp-களாக 25 warp-கள் (800 thread-கள்) → 25 ÷ 64 ≈ 39%.

## சொற்கள்

| தமிழ் | English |
|---|---|
| பல்செயலி ஓட்டத் தொகுதி | Streaming Multiprocessor (SM) |
| வார்ப் / அலைமுகப்பு | warp / wavefront |
| இழை / இழைத் தொகுதி / வலை | thread / thread block / grid |
| தடம் | lane |
| பதிவேட்டுக் கோப்பு | register file |
| பகிர் நினைவகம் | shared memory |
| வார்ப் நிரல்படுத்தி | warp scheduler |
| கிளைப் பிரிதல் | branch divergence |
| மறைத்தல் (mask) | masking |
| நிறைவு விகிதம் | occupancy |
| தாமத மறைப்பு | latency hiding |
| காவல் நிபந்தனை | bounds check / guard |
| சுயாதீன இழை நிரல்படுத்தல் | independent thread scheduling |


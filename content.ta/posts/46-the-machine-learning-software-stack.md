---
title: "Machine Learning மென்பொருள் Stack"
weight: 52
date: 2026-01-01
draft: false
phase: "7 — விநியோகிக்கப்பட்ட அமைப்புகள், Big Data மற்றும் Orchestration"
series_index: 51
tags: []
summary: "ஒரு model-க்கும் சிலிகானுக்கும் இடையே tensors-ஐ விநியோகிக்கப்பட்ட training-ஆக மாற்றும் stack அமர்கிறது — மற்றும் interconnect சுவரைத் தாக்குகிறது"
image_prompt: "Layered infographic showing the ML software stack from Python/NumPy up through frameworks (PyTorch/TensorFlow) to distributed training orchestration to hardware, clean AI-software diagram style"
video_prompt: "20-second animation: a training job's computation graph being built in a framework, then compiled down and distributed across multiple GPUs, clean technical animation"
schematics: "Diagram: ML software stack (framework→compiler/graph→runtime→hardware) + data-parallel vs model-parallel training diagram"
---

Phases 9 மற்றும் 10 நவீன AI compute-இன் வன்பொருளை உள்ளடக்குகின்றன — GPUs, tensor cores, interconnects. பெரும்பாலான ML பொறியாளர்கள் அந்தச் சிலிகானை நேரடியாக நிரலாக்க மாட்டார்கள். "இங்கே ஒரு network architecture" மற்றும் "இங்கே உண்மையான சாதனங்களில் matrix multiplies" இடையே ஒரு மென்பொருள் stack அமர்கிறது, மற்றும் அந்த stack தான் இந்தத் தொடரின் விநியோகிக்கப்பட்ட-அமைப்புகள் நூல் உண்மையில் *பயன்படுத்தப்படும்* விதம்.

> **தமிழ் இடைவெளிக் குறிப்பு:** PyTorch/TensorFlow, தானியங்கி வகையீடு (backpropagation) பற்றித் தமிழ் எழுத்து விளக்கம் கிடைக்கவில்லை; காணொளிச் சான்று YouTube தேடல் முடிவுகள் மட்டும் — காணொளிகள் பார்க்கப்படவில்லை. கீழே உள்ள Python loop / NumPy நேரங்களும் autograd எண்களும் எங்கள் பணிக் கணினியில் (Python 3.13.5, NumPy 2.5.2, PyTorch 2.14.0 CPU) உண்மையில் ஓட்டியவை. All-reduce சூத்திரம் 2(n−1)/n NVIDIA nccl-tests ஆவணத்திலிருந்து (doc/PERFORMANCE.md) சரிபார்க்கப்பட்டது. Model அளவுகள், GPU நினைவகம், link வேகம் போன்றவை "எடுத்துக்காட்டு மதிப்புகள்". இந்தப் பதிவுக்கு lab இல்லை; காகிதப் பயிற்சிகள் கீழே.

## முதலில் சொற்கள்

- **Tensor (பலபரிமாண அணி):** எண்களின் n-பரிமாண அணி — vector (1), matrix (2), அதற்கு மேல்.
- **Vectorized op (அணி முழுவதற்குமான செயல்):** ஒவ்வொரு உறுப்புக்கும் Python loop எழுதாமல், முழு அணிக்கும் ஒரே அழைப்பு; உள்ளே compiled குறியீடு ஓடுகிறது.
- **Gradient (சரிவு):** ஒவ்வொரு parameter-ஐயும் சிறிது மாற்றினால் loss எவ்வளவு மாறும் என்ற வகைக்கெழுக்களின் தொகுப்பு.
- **Automatic differentiation / autograd (தானியங்கி வகையீடு):** கணக்கீட்டு வரைபடத்தை (computation graph) பதிவுசெய்து, chain rule-ஐ இயந்திரமே பின்னோக்கிப் பயன்படுத்தி gradient கணிப்பது.
- **Kernel:** GPU அல்லது CPU-இல் ஓடும் ஒரு optimized routine — எ.கா. ஒரு matrix multiply.
- **Operator fusion (செயல் இணைப்பு):** பல சிறு ops-ஐ ஒரே kernel-ஆக்கி, இடைநிலை முடிவுகளை நினைவகத்துக்கு எழுதித் திரும்பப் படிப்பதைத் தவிர்ப்பது.
- **Data / model parallelism (தரவு / model இணைச்செயலாக்கம்):** batch-ஐப் பிரித்தல் / model-ஐயே சாதனங்களுக்கிடையே பிரித்தல்.
- **All-reduce:** ஒவ்வொரு சாதனமும் தன் அணியைக் கொடுக்க, எல்லோருக்கும் கூட்டுத்தொகை திரும்பக் கிடைக்கும் கூட்டுச் செயல்.

## முதலில் Arrays

நடைமுறைத் தரை பலபரிமாண arrays (tensors) மற்றும் vectorized ops — Python உலகில் NumPy-வகுப்பு எண் கணினி. கனமான தூக்குதல் Python-*இலிருந்து* அழைக்கப்படும் compiled routines-இல் ஓடுகிறது; interpreter loop கணிதத்திற்கு bottleneck அல்ல.

## Loop எதிர் vectorized — எங்கள் கணினியில் அளந்தது

ஒரு கோடி (10⁷) float எண்களின் வர்க்கங்களின் கூட்டுத்தொகை, மூன்று விதமாக (ஒவ்வொன்றும் பல முறை ஓட்டி, சிறந்த நேரம்; இரண்டு சுற்றுகள்):

| முறை | குறியீடு | நேரம் |
|---|---|---|
| Python loop | `sum(x*x for x in xs)` | ≈ 0.18 s |
| NumPy, இரு படி | `(a*a).sum()` | ≈ 16–18 ms |
| NumPy, ஒரே routine | `np.dot(a, a)` | ≈ 1.5–3.8 ms |

Loop-இலிருந்து `(a*a).sum()` சுமார் 10 மடங்கு வேகம்; `np.dot` 50–120 மடங்கு (பகிரப்பட்ட கணினி என்பதால் நேரங்கள் அலைகின்றன). கணிதம் ஒன்றே — வேறுபாடு, ஒவ்வொரு உறுப்புக்கும் interpreter ஒரு சுற்று ஓடுகிறதா, அல்லது compiled routine முழு அணியையும் ஒரே அழைப்பில் முடிக்கிறதா என்பதுதான்.

சரிபார்ப்பு: சரியான விடை (N−1)·N·(2N−1)/6 = 333,333,283,333,335,000,000 ≈ 3.33333283333335 × 10²⁰. Loop-உம் `(a*a).sum()`-உம் இதையே காட்டின; `np.dot` 3.333332833333422 × 10²⁰ — தசமப் புள்ளிக்குப் பின் 13-ஆவது இலக்கத்தில் (14-ஆவது முக்கிய இலக்கம்) வேறுபாடு, ஏனெனில் float கூட்டல்களின் வரிசை மாறினால் rounding மாறுகிறது.

## Frameworks: Gradients மற்றும் வன்பொருள் ஒரே ஒப்பந்தமாக

Deep-learning frameworks (ஆதிக்க உதாரணங்களாக PyTorch மற்றும் TensorFlow) arrays மீது training தேவைப்படுவதைச் சேர்க்கின்றன. **Automatic differentiation** ஒரு computation graph கட்டி, ஒவ்வொரு architecture-க்கும் மனிதன் calculus மீண்டும் வருவிக்காமல் gradients உருவாக்குகிறது — gradient descent-ஐ ஆராய்ச்சி வேகத்தில் நடைமுறைப்படுத்தும் கட்டுப்பாடு. ஒரு **வன்பொருள் abstraction** அதே model code CPU, CUDA வழியாக NVIDIA GPU (Phase 9), அல்லது பிற accelerators-ஐ இலக்காக வைக்க அனுமதிக்கிறது — tensor ops-ஐ optimized kernels-க்குத் தாழ்த்தி — பதிவு 11-இன் ISA/microarchitecture பிரிவின் அதே *வகை* ஒப்பந்தம், ஒரு மென்பொருள் அடுக்கு உயர்வில்.

## Autograd கையால் — ஒரு parameter, ஒரு படி

Model: ŷ = w·x. Loss: f(w) = (w·x − y)². தரவு x = 3, y = 6; தொடக்கம் w = 1; learning rate 0.01 (எடுத்துக்காட்டு மதிப்புகள்).

Framework முன்னோக்கிச் செல்லும்போது ஒவ்வொரு இடைநிலையையும் பதிவுசெய்கிறது; பின்னோக்கி chain rule-ஐப் பெருக்குகிறது:

| படி | முன்னோக்கு (மதிப்பு) | பின்னோக்கு (உள்ளூர் வகைக்கெழு) |
|---|---|---|
| u = w·x | 1 × 3 = 3 | ∂u/∂w = x = 3 |
| r = u − y | 3 − 6 = −3 | ∂r/∂u = 1 |
| f = r² | (−3)² = 9 | ∂f/∂r = 2r = −6 |

∂f/∂w = (−6) × 1 × 3 = **−18**.

Gradient descent படி: w ← w − 0.01 × (−18) = 1 + 0.18 = **1.18**. புதிய loss: (1.18 × 3 − 6)² = (3.54 − 6)² = (−2.46)² = **6.0516** — 9-இலிருந்து குறைந்தது.

PyTorch-இல் அதே கணக்கு (`w = torch.tensor(1.0, requires_grad=True)`, `f = (w*x - y)**2`, `f.backward()`) எங்கள் கணினியில் f = 9.0, `w.grad` = −18.0, படிக்குப் பின் w = 1.1799999 (float32 rounding), புதிய f ≈ 6.0516 என்று தந்தது. கோடிக்கணக்கான parameters-க்கும் இதே பதிவு-பின்னோக்கு முறைதான்; மனிதன் ஒவ்வொரு architecture-க்கும் வகைக்கெழுவை மீண்டும் வருவிக்கத் தேவையில்லை.

## Graph-ஐத் தாழ்த்துதல்

Framework ops-க்கும் device kernels-க்கும் இடையே ஒரு compiler அடுக்கு அதிகமாக அமர்கிறது: operators-ஐ fuse செய்யுங்கள், memory போக்குவரத்தை வெட்டுங்கள், ஒரு intermediate representation-ஐ இலக்கு நோக்கித் தாழ்த்துங்கள். அது பதிவு 28-இன் compiler கருத்து tensor graphs-க்குப் பயன்படுத்தப்பட்டது, பொது imperative code-க்கு அல்ல — optimize செய்து தாழ்த்துங்கள், ஒவ்வொரு முறையும் மீண்டும் lex செய்யாதீர்கள்.

## Fusion ஏன் நினைவகப் போக்குவரத்தைக் குறைக்கிறது

மேலே உள்ள அளவீட்டிலேயே ஒரு சிறு உதாரணம் இருக்கிறது. 10⁷ float64 = 80 MB.

| முறை | படிகள் | நினைவகப் போக்குவரத்து (தோராயம்) |
|---|---|---|
| `(a*a).sum()` | `a*a` → 80 MB தற்காலிக அணி எழுதப்படுகிறது; பிறகு `sum` அதைப் படிக்கிறது | 80 (a படி) + 80 (temp எழுது) + 80 (temp படி) = 240 MB |
| `np.dot(a, a)` | ஒரே routine: பெருக்கி, உடனே கூட்டுகிறது; temp இல்லை | a-வை ஒருமுறை படித்தல் ≈ 80 MB |

போக்குவரத்து சுமார் 3 மடங்கு குறைவு. (`np.dot` optimized BLAS routine என்பதால் அளந்த வேக வேறுபாடு இதைவிட அதிகம்; போக்குவரத்து மட்டும் காரணம் அல்ல.)

GPU-வில் ML compiler செய்வதும் இதே யோசனை. எ.கா. ஒரு layer-இன் வெளியீட்டுக்கு bias கூட்டி ReLU போடுதல், 100 M fp16 உறுப்புகள் = 200 MB (எடுத்துக்காட்டு மதிப்புகள்):

| | Kernel-கள் | போக்குவரத்து |
|---|---|---|
| இணைக்காமல் | bias-add (படி 200 + எழுது 200), ReLU (படி 200 + எழுது 200) | 800 MB |
| இணைத்து | ஒரே kernel (படி 200 + எழுது 200) | 400 MB |

கணக்குகள் அதே; நினைவகத்தில் பாதி பயணம் மட்டும். Element-wise ops பெரும்பாலும் கணக்கால் அல்ல, நினைவக அலைவரிசையால் கட்டுப்படுவதால் இது நேரடியாக நேரமாக மாறுகிறது.

## Distribution கம்பியைத் தாக்குகிறது

ஒரு GPU-வின் நினைவகம் (Phase 9-இன் HBM) அடிக்கடி நவீன பெரிய model-ஐ வைக்க முடியாது, தனியாக train செய்வதை விடுங்கள். **Data parallelism** model-ஐ replicate செய்து, batch-ஐப் பிரித்து, gradients ஒத்திசைக்கிறது (all-reduce — Phase 10 / பதிவுகள் 37 மற்றும் 42). **Model parallelism** model எங்கும் ஒருமுறை பொருந்தாதபோது அதைச் சாதனங்கள் குறுக்கே பிரிக்கிறது. உண்மையான training இரண்டையும் கலக்கிறது. Throughput பிறகு அடிக்கடி எந்த ஒற்றை GPU தனியாக multiply செய்யும் வேகத்தால் அல்ல — GPUs gradients மற்றும் activations எவ்வளவு வேகமாகப் பரிமாறுகின்றன என்பதால் வரையறுக்கப்படுகிறது. முந்தைய பதிவுகளின் interconnect சுவர் training சுவராகத் திரும்புகிறது.

## நினைவகம் மற்றும் all-reduce — எண்களில்

**Model நினைவகம் (எடுத்துக்காட்டு மதிப்புகள்):** parameters × ஒரு parameter-க்கான bytes. fp16/bf16 = 2 bytes, fp32 = 4 bytes.

| Model | எடைகள் மட்டும் (bf16) | 80 GB GPU-வில்? |
|---|---|---|
| 7 B parameters | 7 × 10⁹ × 2 = 14 GB | பொருந்தும் (எடைகளுக்கு மட்டும்) |
| 70 B parameters | 70 × 10⁹ × 2 = 140 GB | இல்லை: 140 ÷ 80 = 1.75 → குறைந்தது 2 GPU-கள் (model parallelism) |

Training-இல் எடைகளுடன் gradients, optimizer நிலைகள், activations சேர்வதால் தேவை இதைவிடப் பல மடங்கு — அதனால்தான் "ஒரு GPU-வில் பொருந்தாது" என்பது சாதாரணம்.

**Data parallelism-இன் கம்பிச் செலவு.** ஒவ்வொரு படியிலும் ஒவ்வொரு GPU-வும் S bytes gradients-ஐ all-reduce செய்கிறது. nccl-tests ஆவணத்தின் கணக்கு: ஒவ்வொரு உறுப்புக்கும் n−1 கூட்டல்கள், n ஒதுக்கீடுகள் → 2(n−1) பரிமாற்றங்கள்; n link-கள் தலா B அலைவரிசையுடன் பகிர்வதால் சிறந்த நேரம்

t = (S ÷ B) × 2(n−1)/n.

(Ring வடிவில் இது reduce-scatter (n−1)/n + all-gather (n−1)/n.) அந்த ஆவணத்தின்படி, point-to-point send/receive பயன்படுத்தும் ring, tree எந்த algorithm-க்கும் இது பொருந்தும்.

| n (GPU-கள்) | 2(n−1)/n |
|---|---|
| 2 | 1 |
| 4 | 1.5 |
| 8 | 1.75 |
| 64 | 1.96875 |

காரணி 2-ஐ நெருங்குகிறது, ஆனால் தாண்டுவதில்லை — GPU எண்ணிக்கை வளர்ந்தாலும் ஒவ்வொரு GPU அனுப்பும் அளவு ஏறக்குறைய 2S-இல் நிற்கிறது.

உதாரணம் (எடுத்துக்காட்டு மதிப்புகள்): 7 B model, bf16 gradients S = 14 GB, n = 8, B = 100 GB/s:
t ≥ 14 ÷ 100 × 1.75 = **0.245 s** ஒவ்வொரு படிக்கும். ஒரு படியின் கணக்கு 0.5 s என்றால், தொடர்புக்கே அதன் பாதியளவு நேரம் — "interconnect சுவர்" இங்கே ஒரு எண்ணாகிறது.

## இந்த Phase-இன் Loop-ஐ மூடுதல்

நவீன ML training neural-network உடையுடன் அணியப்பட்ட ஒரு விநியோகிக்கப்பட்ட-அமைப்புகள் பிரச்சனை: பல compute அலகுகளை ஒருங்கிணைக்கவும், பகுதி failure-ஐ உறிஞ்சவும் (GFS, Kubernetes), பெரும் intermediate தரவைத் திறமையாக நகர்த்தவும். அந்த மென்பொருள் பாதி இல்லாத வன்பொருள் — அல்லது சிலிகான் மற்றும் fabric இல்லாத மென்பொருள் — Phase 9 மற்றும் 10 முடிக்கும் கதையின் பாதி மட்டும்.

## காகிதப் பயிற்சிகள் (விடைகளுடன்)

1. **f(w) = (w·x − y)², x = 2, y = 10, w = 1, learning rate 0.01. f, ∂f/∂w, ஒரு படிக்குப் பின் w, புதிய f?**
   விடை: w·x − y = 2 − 10 = −8; f = **64**. ∂f/∂w = 2 × (−8) × 2 = **−32**. w = 1 − 0.01 × (−32) = **1.32**. புதிய f = (2.64 − 10)² = (−7.36)² = **54.1696**.

2. **3 B parameters கொண்ட model-இன் எடைகள் bf16-இல் எவ்வளவு? fp32-இல்? (எடுத்துக்காட்டு மதிப்பு)**
   விடை: 3 × 10⁹ × 2 = **6 GB**; × 4 = **12 GB**.

3. **16 GPU-கள், S = 2 GB, B = 50 GB/s. All-reduce-இன் குறைந்தபட்ச நேரம்?**
   விடை: 2(16−1)/16 = 1.875; t = 2 ÷ 50 × 1.875 = 0.075 s = **75 ms**.

4. **50 M fp32 உறுப்புகள் (200 MB) மீது 4 element-wise ops. ஒவ்வொன்றும் தனி kernel என்றால் போக்குவரத்து? ஒரே kernel-ஆக இணைத்தால்?**
   விடை: தனியாக: 4 × (200 படி + 200 எழுது) = **1,600 MB**. இணைத்து: 200 + 200 = **400 MB** — 4 மடங்கு குறைவு.

5. **Global batch 1,024 மாதிரிகள். Data parallelism-இல் 8 GPU-களில் ஒவ்வொன்றுக்கும் எத்தனை? 64-இல்?**
   விடை: 1,024 ÷ 8 = **128**; 1,024 ÷ 64 = **16**. GPU-க்கான கணக்கு குறைகிறது, ஆனால் ஒவ்வொரு GPU-வும் all-reduce செய்யும் gradient அளவு (முழு model) அப்படியே — அதனால் தொடர்பின் பங்கு பெரிதாகிறது.

## சொற்கள்

| தமிழ் | English |
|---|---|
| பலபரிமாண அணி | tensor / multidimensional array |
| அணி முழுவதற்குமான செயல் | vectorized operation |
| சரிவு | gradient |
| தானியங்கி வகையீடு | automatic differentiation (autograd) |
| கணக்கீட்டு வரைபடம் | computation graph |
| பின்னோக்குப் பரவல் | backpropagation |
| கற்றல் வீதம் | learning rate |
| செயல் இணைப்பு | operator fusion |
| இடைநிலை வடிவம் | intermediate representation (IR) |
| நினைவகப் போக்குவரத்து | memory traffic |
| தரவு இணைச்செயலாக்கம் | data parallelism |
| model இணைச்செயலாக்கம் | model parallelism |
| கூட்டுச் செயல் | collective operation |
| அலைவரிசை | bandwidth |


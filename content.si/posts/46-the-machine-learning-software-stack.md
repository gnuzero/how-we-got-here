---
title: "යන්ත්‍ර ඉගෙනුම් මෘදුකාංග Stack එක"
weight: 47
date: 2026-01-01
draft: false
phase: "7 — බෙදාහැරුණු පද්ධති, Big Data සහ Orchestration"
series_index: 46
tags: []
summary: "Model එකක් සහ සිලිකන් අතර tensors බෙදාහැරුණු training බවට පත් කරන stack එකක් වාඩි වේ — සහ interconnect බිත්තියට හැපේ"
image_prompt: "Layered infographic showing the ML software stack from Python/NumPy up through frameworks (PyTorch/TensorFlow) to distributed training orchestration to hardware, clean AI-software diagram style"
video_prompt: "20-second animation: a training job's computation graph being built in a framework, then compiled down and distributed across multiple GPUs, clean technical animation"
schematics: "Diagram: ML software stack (framework→compiler/graph→runtime→hardware) + data-parallel vs model-parallel training diagram"
---

Phases 9 සහ 10 නවීන AI ගණනයේ දෘඪාංගය ආවරණය කරයි — GPUs, tensor cores, interconnects. බොහෝ ML ඉංජිනේරුවන් කිසිදා එම සිලිකන් සෘජුව ක්‍රමලේඛනය නොකරයි. "මෙන්න network architecture එකක්" සහ "මෙන්න සැබෑ උපාංග මත matrix multiplies" අතර මෘදුකාංග stack එකක් වාඩි වී ඇත, සහ එම stack එක මෙම මාලාවේ බෙදාහැරුණු-පද්ධති නූල *භාවිතා* වන ආකාරයයි.

## පළමුව Arrays

ප්‍රායෝගික බිම multidimensional arrays (tensors) සහ vectorized ops — Python ලෝකයේ NumPy-පන්තියේ සංඛ්‍යාත්මක පරිගණනය. බර ඔසවීම Python *වෙතින් කැඳවන* compiled routines වල ධාවනය වේ; interpreter loop එක ගණිතය සඳහා bottleneck එක නොවේ.

## Frameworks: Gradients සහ දෘඪාංගය එක් ගිවිසුමක් ලෙස

Deep-learning frameworks (ප්‍රමුඛ උදාහරණ ලෙස PyTorch සහ TensorFlow) arrays මත training ට අවශ්‍ය දේ එකතු කරයි. **Automatic differentiation** computation graph එකක් ගොඩනඟා සෑම architecture එකක් සඳහාම මිනිසෙකු calculus නැවත ව්‍යුත්පන්න නොකර gradients නිපදවයි — gradient descent පර්යේෂණ වේගයෙන් ප්‍රායෝගික කරන සීමාව. **දෘඪාංග abstraction** එකක් එකම model කේතයට CPU, CUDA හරහා NVIDIA GPU (Phase 9), හෝ tensor ops optimized kernels වෙත පහත් කිරීමෙන් අනෙක් accelerators ඉලක්ක කිරීමට ඉඩ දෙයි — Post 11 හි ISA/microarchitecture බෙදීමේ එකම *වර්ගයේ* ගිවිසුම, එක් මෘදුකාංග ස්ථරයක් ඉහළින්.

## Graph එක පහත් කිරීම

Framework ops සහ device kernels අතර compiler ස්ථරයක් වැඩි වැඩියෙන් වාඩි වේ: operators fuse කරන්න, මතක ගමනාගමනය කපන්න, intermediate representation එකක් ඉලක්කය දෙසට පහත් කරන්න. එය සාමාන්‍ය imperative කේතයට නොව tensor graphs වලට යොදන ලද Post 28 හි compiler අදහසයි — optimize කර පහත් කරන්න, සෑම වරක්ම නැවත-lex නොකරන්න.

## Distribution වයර් එකට ගැටේ

එක් GPU එකක මතකය (Phase 9 හි HBM) බොහෝ විට නවීන විශාල model එකක් රඳවා ගත නොහැක, එය තනිවම train කිරීම ගැන කියන්නටවත් නැත. **Data parallelism** model එක replicate කරයි, batch එක බෙදයි, සහ gradients සමමුහුර්ත කරයි (all-reduce — Phase 10 / Posts 37 සහ 42). **Model parallelism** එය කොතැනකවත් එකවර නොගැලපෙන විට model එකම උපාංග හරහා බෙදයි. සැබෑ training දෙකම මිශ්‍ර කරයි. Throughput එවිට බොහෝ විට සීමා වන්නේ GPUs gradients සහ activations හුවමාරු කරන වේගයෙනි — ඕනෑම තනි GPU එකක් හුදකලාවෙන් multiply කරන වේගයෙන් නොවේ. පෙර පෝස්ට්වලින් interconnect බිත්තිය training බිත්තිය ලෙස නැවත පැමිණේ.

## මෙම අදියරේ Loop එක වසා දැමීම

නවීන ML training යනු neural-network ඇඳුමක් ඇඳගත් බෙදාහැරුණු-පද්ධති ගැටලුවකි: බොහෝ ගණනය ඒකක සම්බන්ධීකරණය කරන්න, අර්ධ failure අවශෝෂණය කරන්න (GFS, Kubernetes), විශාල අතරමැදි දත්ත කාර්යක්ෂමව ගෙන යන්න. එම මෘදුකාංග භාගය නොමැති දෘඪාංගය — හෝ සිලිකන් සහ fabric නොමැති මෘදුකාංගය — Phase 9 සහ 10 අවසන් කරන කතාවේ භාගයක් පමණි.

## ගැඹුරින්: framework එකක් gradient ගණනය කරන හැටි — ස්වයංක්‍රීය අවකලනය, graph fusion සහ gradient ගමනාගමනය

> **සිංහල මූලාශ්‍ර පිළිබඳ සටහන:** Neural networks, backpropagation සහ gradient descent ගැන සිංහලෙන් හොඳ ද්‍රව්‍ය ප්‍රමාණයක් දැන් තිබේ.
> - **ලිඛිත:** Ashan Priyadarshana ගේ Medium ලිපි මාලාව "ANN සිංහලෙන්". එහි තුන්වන ලිපිය "[Backpropagation — ANN සිංහලෙන්](https://ashanpriyadarshana.medium.com/backpropagation-ann-sinhalen-a10fa9986aba)" (2018 මාර්තු 6) chain rule භාවිතයෙන් output සහ hidden නියුරෝනවල delta අගයන් ව්‍යුත්පන්න කරයි. si.wikipedia හි "[ගැඹුරු ඉගෙනීම](https://si.wikipedia.org/wiki/ගැඹුරු_ඉගෙනීම)" ලිපිය (අක්ෂර ~2.3k) කෙටි හැඳින්වීමකි. NIE A/L ICT සම්පත් පොතේ ([PDF](https://nie.lk/pdffiles/other/sOMAL%20ICT%20Resource%20book.pdf)) PDF p.167 "යන්ත්‍ර ඉගෙනීම" සහ "ස්නායුක ජාල" පද අර්ථ දක්වයි.
> - **වීඩියෝ:** CodePRO LK මාලාව (neural network [YT mntQcINLmoA](https://www.youtube.com/watch?v=mntQcINLmoA), perceptron [YT 1NhhuHuCO9Y](https://www.youtube.com/watch?v=1NhhuHuCO9Y), gradient descent [YT D93YSyprG1s](https://www.youtube.com/watch?v=D93YSyprG1s) සහ [YT dGVdGJlhjCw](https://www.youtube.com/watch?v=dGVdGJlhjCw), stochastic GD [YT A4aStcsk9aQ](https://www.youtube.com/watch?v=A4aStcsk9aQ)); AI with Thakshila මාලාව (Ep1, පැය 2:44 [YT BCK9BA3erfU](https://www.youtube.com/watch?v=BCK9BA3erfU); Ep20 backpropagation [YT LopFW8nObek](https://www.youtube.com/watch?v=LopFW8nObek)); Aaivu ([YT Cck_oubQykE](https://www.youtube.com/watch?v=Cck_oubQykE)); Wizard LK ([YT pRJTw1A5EBg](https://www.youtube.com/watch?v=pRJTw1A5EBg), gradient descent සමඟ linear regression, මිනිත්තු 42). PyTorch සහ TensorFlow සිංහල tutorials ද ඇත (Haritha Weerathunga, [YT fjyc3zLgpMw](https://www.youtube.com/watch?v=fjyc3zLgpMw), "Torch Tensors"; CodePRO LK, [YT 7QxmVxmJevE](https://www.youtube.com/watch?v=7QxmVxmJevE)). අප වීඩියෝ හඳුනා ගත්තේ මාතෘකාවෙන් පමණි. නැරඹුවේ නැත.
>
> ඒවා *ගණිතය* උගන්වයි. නමුත් මෙම පිටුවේ මාතෘකාව වන *stack එක* ගැන අපට කිසිවක් හමු නොවීය: framework එකක් මිනිසෙකු calculus නොකර gradient සොයන්නේ කෙසේද (ස්වයංක්‍රීය අවකලනය), forward සහ reverse ක්‍රම අතර වියදම් වෙනස, compiler එකක් operations "fuse" කරන්නේ ඇයි, සහ gradient bytes කීයක් GPUs අතර ගමන් කළ යුතුද. මෙම කොටස ඒවා අංකවලින් පෙන්වයි. Matrix ගුණ කිරීම Post 57 හි ද, all-reduce කාලය Post 56 සහ 61 හි ද, මතක bandwidth Post 54 හි ද ඇත.

### 1. මූලික පද

- **Tensor:** බහු-මාන array එකකි (දෛශිකය 1-D, matrix 2-D, …).
- **ගණන ප්‍රස්තාරය (computation graph):** එක් එක් මෙහෙයුම node එකක් වන, දත්ත ගලන දිශාවට ඊතල ඇති ප්‍රස්තාරයයි.
- **ස්වයංක්‍රීය අවකලනය (automatic differentiation, AD):** වැඩසටහනක මූලික මෙහෙයුම් එකින් එක chain rule මඟින් අවකලනය කර, නිශ්චිත (සංකේතාත්මක සූත්‍රයක් හෝ ආසන්න අගයක් නොවන) derivative අගයක් ලබා දීම.
- **Forward mode:** Derivative අගයන් ගණනය ඉදිරියට ගෙන යයි. එක් ආදානයක් සඳහා එක් වටයක් අවශ්‍ය වේ.
- **Reverse mode:** මුලින් ඉදිරි ගණනය කර, ඉන්පසු ප්‍රතිදානයේ සිට ආපසු යයි. Backpropagation යනු reverse mode හි විශේෂ අවස්ථාවකි.
- **Adjoint (v̄):** "අවසන් ප්‍රතිදානය මෙම අතරමැදි අගයට කොතරම් සංවේදීද" යන්න, එනම් ∂y/∂v.
- **Kernel:** GPU එකක ධාවනය වන එක් සම්පාදිත ශ්‍රිතයකි.
- **මෙහෙයුම් ඒකාබද්ධ කිරීම (operator fusion):** Kernels කිහිපයක් එකකට එකතු කර, අතරමැදි ප්‍රතිඵල මතකයට ලිවීම වැළැක්වීම.

### 2. Perceptron සිට gradient දක්වා (කෙටියෙන්)

Michael Nielsen ගේ පොතේ පළමු පරිච්ඡේදය perceptron එකකින් NAND ද්වාරයක් සාදයි: ආදාන දෙකකට බර (weights) −2 බැගින්, සහ bias 3.

| x₁ x₂ | (−2)x₁ + (−2)x₂ + 3 | ප්‍රතිදානය |
|---|---|---|
| 0 0 | 3 | 1 |
| 0 1 | 1 | 1 |
| 1 0 | 1 | 1 |
| 1 1 | −1 | 0 |

NAND ද්වාර වලින් ඕනෑම තාර්කික පරිපථයක් සෑදිය හැකි නිසා (Post 08), perceptron ජාල වලටද එය කළ හැක. ගැටලුව: perceptron එකේ ප්‍රතිදානය 0 සිට 1 ට *පනී*. බරක් ඉතා සුළු ප්‍රමාණයකින් වෙනස් කළොත් ප්‍රතිදානය එක්කෝ වෙනස් නොවේ, නැත්නම් සම්පූර්ණයෙන්ම පෙරළේ. එබැවින් "කුමන දිශාවට වෙනස් කළ යුතුද" යන්න derivative එකකින් කිව නොහැක. Sigmoid වැනි සුමට ශ්‍රිත ඒ නිසා භාවිතා වේ. එවිට gradient descent යෙදිය හැක.

Nielsen ගේ සමීකරණය (10): **Δv = −η∇C**. මෙහි η යනු ඉගෙනුම් අනුපාතය (learning rate) ය. එවිට ΔC ≈ −η‖∇C‖² ≤ 0 වේ. එනම් පියවර කුඩා නම්, පිරිවැය (cost) සෑම විටම අඩු වේ.

### 3. එක් නියුරෝනයක් හරහා backpropagation (CS231n අගයන්)

Stanford CS231n සටහන් "Backpropagation, Intuitions" මෙම sigmoid නියුරෝනය ගනී: w = [2, −3, −3] (අවසාන එක bias), x = [−1, −2].

**ඉදිරි ගමන (forward pass):**
- dot = 2 × (−1) + (−3) × (−2) + (−3) = −2 + 6 − 3 = **1**
- f = 1/(1 + e⁻¹) ≈ **0.731**

**ආපසු ගමන (backward pass):** sigmoid හි derivative එක f(1 − f) = 0.731 × 0.269 ≈ **0.197** වේ. Chain rule අනුව:
- ∂f/∂w₀ = x₀ × 0.197 = **−0.197**, ∂f/∂w₁ = x₁ × 0.197 = **−0.393**, ∂f/∂w₂ = 1 × 0.197 = **0.197**
- ∂f/∂x₀ = w₀ × 0.197 = **0.393**, ∂f/∂x₁ = w₁ × 0.197 = **−0.590**

**එක් gradient descent පියවරක් (ආදර්ශ):** f අඩු කිරීමට අවශ්‍ය යැයි සිතමු (f යනු පිරිවැය යැයි සලකමු), η = 0.5:
- w ← w − 0.5 × ∂f/∂w = [2.098, −2.803, −3.098]
- නව dot = 0.410, නව f ≈ **0.601** (0.731 සිට අඩු විය)

මෙම ගණනය අතින් කිරීම පහසුය. නමුත් පරාමිතීන් බිලියනයක් ඇති model එකක් සඳහා කවුරුවත් derivatives අතින් ලියන්නේ නැත. Framework එක එය ස්වයංක්‍රීයව කරයි.

### 4. ස්වයංක්‍රීය අවකලනය: evaluation trace එකක්

Baydin සහ සගයන් (JMLR 2018) මෙම ශ්‍රිතය ගනී:

**y = f(x₁, x₂) = ln(x₁) + x₁x₂ − sin(x₂)**, (x₁, x₂) = (2, 5) හිදී.

වැඩසටහන මූලික පියවරවලට කැඩේ (Table 2, PDF p.10):

| අතරමැදි අගය | ගණනය | අගය |
|---|---|---|
| v₋₁ = x₁ | | 2 |
| v₀ = x₂ | | 5 |
| v₁ = ln v₋₁ | ln 2 | 0.693 |
| v₂ = v₋₁ × v₀ | 2 × 5 | 10 |
| v₃ = sin v₀ | sin 5 | −0.959 |
| v₄ = v₁ + v₂ | 0.693 + 10 | 10.693 |
| v₅ = v₄ − v₃ | 10.693 + 0.959 | **11.652** |

**Forward mode (Table 2):** ẋ₁ = 1, ẋ₂ = 0 ලෙස සකසා, සෑම පේළියක් සමඟම derivative එකද ගෙන යයි: v̇₁ = 1/2, v̇₂ = 1 × 5 + 0 × 2 = 5, v̇₃ = 0, v̇₄ = 5.5, v̇₅ = **5.5** = ∂y/∂x₁. ∂y/∂x₂ සඳහා ẋ₁ = 0, ẋ₂ = 1 ලෙස **දෙවන වටයක්** අවශ්‍ය වේ.

**Reverse mode (Table 3, PDF p.13):** ඉදිරි ගණනයෙන් පසු, ȳ = v̄₅ = 1 සිට ආපසු යයි:
- v̄₄ = 1, v̄₃ = −1
- v̄₂ = v̄₄ × 1 = 1, v̄₁ = v̄₄ × 1 = 1
- v̄₀ ට v₃ හරහා: v̄₃ × cos 5 = −1 × 0.284 = **−0.284**
- v̄₋₁ ට v₂ හරහා: v̄₂ × v₀ = **5**
- v̄₀ ට v₂ හරහා එකතු කරයි: −0.284 + v̄₂ × v₋₁ = −0.284 + 2 = **1.716** = ∂y/∂x₂
- v̄₋₁ ට v₁ හරහා එකතු කරයි: 5 + v̄₁/v₋₁ = 5 + 0.5 = **5.5** = ∂y/∂x₁

**එක්** ආපසු ගමනකින් derivatives **දෙකම** ලැබුණි. පරීක්ෂාව: ∂y/∂x₁ = 1/x₁ + x₂ = 0.5 + 5 = 5.5 ✓ සහ ∂y/∂x₂ = x₁ − cos x₂ = 2 − 0.284 = 1.716 ✓.

### 5. Deep learning reverse mode භාවිතා කරන්නේ ඇයි

Baydin et al. (PDF p.13): f : ℝⁿ → ℝᵐ සඳහා, ops(f) යනු ශ්‍රිතය එක් වරක් ගණනය කිරීමේ මෙහෙයුම් ගණන නම්:
- Forward mode මඟින් සම්පූර්ණ Jacobian එකට: **n × c × ops(f)**
- Reverse mode මඟින්: **m × c × ops(f)**
- මෙහි c < 6 වන අතර සාමාන්‍යයෙන් 2–3 අතර වේ.

Neural network training දී ප්‍රතිදානය **එක්** අංකයකි (loss, m = 1). ආදාන යනු සියලු පරාමිතීන් ය (n විශාල ය).

**ආදර්ශ ගණනය:** පරාමිතීන් n = 10⁹ නම්, forward mode සඳහා ඉදිරි ගණන වට බිලියනයක් පමණ අවශ්‍ය වේ. Reverse mode සඳහා ඉදිරි ගණනයක වියදම මෙන් 2–3 ගුණයක් පමණි.

මිල: reverse mode ඉදිරි ගමනේ අතරමැදි අගයන් *ගබඩා* කළ යුතුය (Baydin: නරකම අවස්ථාවේදී මෙහෙයුම් ගණනට සමානුපාතික ලෙස). PyTorch ලේඛන ද එයම කියයි: autograd යනු "reverse automatic differentiation system" එකකි. එය ක්‍රියාත්මක වන අතරේ මෙහෙයුම් directed acyclic graph එකක සටහන් කරයි (leaves = ආදාන tensors, roots = ප්‍රතිදාන). උදාහරණයක් ලෙස x ↦ x² ශ්‍රිතය gradient ගණනය සඳහා x ගබඩා කරයි. Training දී GPU මතකය activations වලින් පිරෙන්නේ එබැවිනි.

### 6. Graph එක පහත් කිරීම: fusion මතක ගමනාගමනය කපන හැටි

XLA ලේඛනයේ උදාහරණය: `tf.reduce_sum(x + y * z)`. XLA නැතිව kernels **තුනක්** ධාවනය වේ: ගුණ කිරීම, එකතු කිරීම, reduction. XLA ඒවා **එක** kernel එකකට fuse කරයි. `y*z` සහ `x+y*z` අතරමැදි අගයන් මතකයට ලියන්නේ නැත. ඒවා registers තුළම තබා ගනී. ලේඛනය කියන පරිදි: "Fusion is XLA's single most important optimization", මන්ද accelerators මත මතක bandwidth බොහෝ විට හිඟම සම්පත වන නිසා.

**Bytes ගණනය කරමු (ආදර්ශ: N = 10⁶ FP32 අගයන්, එකක් bytes 4):**

| Kernel | කියවීම | ලිවීම | එකතුව |
|---|---|---|---|
| t₁ = y × z | y, z: 8 MB | t₁: 4 MB | 12 MB |
| t₂ = x + t₁ | x, t₁: 8 MB | t₂: 4 MB | 12 MB |
| s = sum(t₂) | t₂: 4 MB | 1 අගයක් | 4 MB |
| **Fuse නොකළ විට** | | | **28 MB** |
| **Fuse කළ විට** | x, y, z: 12 MB | 1 අගයක් | **12 MB** |

එකම ගණිතය, මතක ගමනාගමනය 28/12 ≈ **2.3 ගුණයකින්** අඩු වේ. මෙම මෙහෙයුම් bytes එකකට FLOPs ඉතා අඩු නිසා (Post 54 හි ridge point එකට බොහෝ පහළින්), ධාවන කාලයද ආසන්න වශයෙන් එම අනුපාතයෙන් අඩු විය හැක.

### 7. Distribution: gradients කීයක් ගමන් කළ යුතුද?

Data parallelism දී සෑම GPU එකකටම model එකේ සම්පූර්ණ පිටපතක් ඇත. සෑම පියවරකම, සෑම පරාමිතියකම gradient එක සියලු GPUs අතර සාමාන්‍යය ගත යුතුය.

**ආදර්ශ ගණනය:** පරාමිතීන් 10⁹, FP32 gradients (bytes 4) → පියවරකට gradient දත්ත **4 GB**. Post 56 හි ring all-reduce සූත්‍රය අනුව, සෑම GPU එකක්ම ආසන්න වශයෙන් 2(n − 1)/n × S යවයි. GPUs n = 8 නම්: 2 × 7/8 × 4 GB = **7 GB** එක් GPU එකකින්, *සෑම* පියවරකම. ඉහත පිටුවේ "interconnect බිත්තිය" යන්නෙහි අර්ථය මෙයයි. එහි කාලය Post 56 හි ගණනය කර ඇත.

### 8. පැන්සලෙන් අභ්‍යාසය

1. Nielsen ගේ NAND perceptron එකට (බර −2, −2, bias 3) ආදාන 1 0 දුන් විට ඇතුළත එකතුව සහ ප්‍රතිදානය කීයද?
2. f(x, y, z) = (x + y) × z, x = 1, y = 2, z = 3 (ආදර්ශ). f, ∂f/∂x, ∂f/∂y, ∂f/∂z සොයන්න.
3. Baydin ශ්‍රිතය y = ln(x₁) + x₁x₂ − sin(x₂), (x₁, x₂) = (1, 0) හිදී. y, ∂y/∂x₁, ∂y/∂x₂ කීයද?
4. ශ්‍රිතයක් ℝ¹⁰⁰⁰ → ℝ වේ. සම්පූර්ණ gradient එක සඳහා forward mode වට කීයක් අවශ්‍යද? Reverse mode වට කීයක්ද?
5. z = relu(x + y), N = 10⁶ FP32 (ආදර්ශ). Kernels දෙකක් ලෙස (add, relu) සහ fuse කළ එක kernel එකක් ලෙස මතක ගමනාගමනය කීයද?
6. පරාමිතීන් 7 × 10⁹ ක model එකක (ආදර්ශ) FP16 gradients (bytes 2) පියවරකට bytes කීයක්ද?

(පිළිතුරු:
1. (−2)(1) + (−2)(0) + 3 = **1** > 0, එබැවින් ප්‍රතිදානය **1**.
2. q = x + y = 3, f = 3 × 3 = **9**. ∂f/∂z = q = **3**. ∂f/∂q = z = 3, සහ add ද්වාරය gradient එක වෙනස් නොකර යවයි: ∂f/∂x = ∂f/∂y = **3**.
3. y = ln 1 + 0 − sin 0 = **0**. ∂y/∂x₁ = 1/x₁ + x₂ = **1**. ∂y/∂x₂ = x₁ − cos x₂ = 1 − 1 = **0**.
4. Forward: **1000** (එක් ආදානයකට එකක්). Reverse: **1** (ප්‍රතිදානය එකක් නිසා).
5. Fuse නොකළ විට: add = 8 + 4 = 12 MB, relu = 4 + 4 = 8 MB, එකතුව **20 MB**. Fuse කළ විට: 8 + 4 = **12 MB**. අනුපාතය ≈ 1.7.
6. 7 × 10⁹ × 2 = **14 × 10⁹ bytes (14 GB)**.)

**මෙම කොටසේ මූලාශ්‍ර:**
- A. G. Baydin, B. A. Pearlmutter, A. A. Radul, J. M. Siskind, "Automatic Differentiation in Machine Learning: a Survey", *JMLR* 18(153), 2018 (JMLR නිල PDF): Table 2 (PDF p.10), Table 3 සහ n·c·ops / m·c·ops, c < 6 (PDF p.13): <https://www.jmlr.org/papers/volume18/17-468/17-468.pdf>
- Stanford CS231n, "Backpropagation, Intuitions" (පාඨමාලා සටහන්; (x + y)z උදාහරණය සහ w = [2, −3, −3] sigmoid නියුරෝනය): <https://cs231n.github.io/optimization-2/>
- M. Nielsen, *Neural Networks and Deep Learning*, පරිච්ඡේදය 1 (කතුවරයාගේ වෙබ් අඩවිය; NAND perceptron, සමීකරණය (10)): <http://neuralnetworksanddeeplearning.com/chap1.html>
- PyTorch ලේඛන, "Autograd mechanics" ("How autograd encodes the history", "Saved tensors"): <https://docs.pytorch.org/docs/stable/notes/autograd.html>
- OpenXLA, "XLA: Optimizing Compiler for Machine Learning" (`reduce_sum(x + y * z)` fusion උදාහරණය): <https://openxla.org/xla/tf2xla>
- A. Priyadarshana, "Backpropagation — ANN සිංහලෙන්", Medium, 2018: <https://ashanpriyadarshana.medium.com/backpropagation-ann-sinhalen-a10fa9986aba>

η = 0.5 පියවර, 10⁹ සහ 7 × 10⁹ පරාමිතීන්, N = 10⁶, 28/12 MB සහ 7 GB ගණනය, සහ අභ්‍යාස 2, 3, 5 හි ආදාන ආදර්ශ අගයන් හෝ අප ගණනය කළ අගයන් වේ.


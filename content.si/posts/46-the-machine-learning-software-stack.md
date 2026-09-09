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

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

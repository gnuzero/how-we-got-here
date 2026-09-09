---
title: "GPU පවතින්නේ ඇයි"
weight: 53
date: 2026-01-01
draft: false
phase: "9 — GPU සහ Parallel Compute"
series_index: 52
tags: []
summary: "Graphics එකෙන් embarrassingly parallel workload එකක් ආවේය — SIMT දෘඪාංගය අනුගමනය කළේය, පසුව සාමාන්‍ය compute එකටත් එම හැඩය හමු විය"
image_prompt: "Diagram of the graphics rendering pipeline alongside a SIMD execution diagram, clean GPU architecture textbook style"
video_prompt: "20-second animation: a single instruction broadcast across many parallel ALU lanes, contrasted with a CPU, clean split-screen animation"
schematics: "Diagram: graphics pipeline stages + SIMD/SIMT execution model diagram"
---

Phase 3 හි සෑම CPU එකක්ම උපකල්පනය කරන්නේ උපදෙස් ප්‍රමාණවත් තරම් ස්වාධීන සහ අනපේක්ෂිත බවයි — එබැවින් යන්ත්‍රණය සාමාන්‍ය-අරමුණු විය යුතුය: branch prediction, out-of-order execution, ගැඹුරු caches, *අත්තනෝමතික* අනුක්‍රමික කේතය වේගයෙන් ධාවනය කිරීමට. GPU ආරම්භ වන්නේ වෙනස් උපකල්පනයකින් — ඒවායේ මුල් workload එකෙන් මුල් බැස ගත්: එකම මෙහෙයුම විශාල දත්ත ලක්ෂ්‍ය ගණනකට ස්වාධීනව එකවර යෙදීම.

## Graphics Parallelism පැහැදිලි කළේය

3D scene එකක් render කිරීම යනු මිලියන ගණනක් vertices පරිවර්තනය කිරීම සහ මිලියන ගණනක් pixels shade කිරීමයි — එක එකකට එකම ගණිතය, pixel (100, 200) සහ pixel (100, 201) අතර අර්ථවත් රඳා පැවැත්මක් නැත. ප්‍රමාණවත් lanes තිබේ නම්, ඒ සියල්ල එකවර ධාවනය වේ.

එය Phase 3 ගොඩනැගූ හැඩයට වඩා වෙනස් ය. CPU එකක් මෙවැනි නොපෙනෙන parallelism කේතයෙන් උපුටා ගනී. Graphics ට එම යන්ත්‍රණය අවශ්‍ය නැත: parallelism සැඟවී නැත — ආරම්භයේ සිටම පැහැදිලි සහ විශාල ය.

## SIMD / SIMT: එක් උපදෙසක්, බොහෝ Lanes

SIMD එක උපදෙසක් බොහෝ දත්ත මූලද්‍රව්‍ය හරහා එකවර යොදයි. GPU ඉතා සමීප ආකෘතියක් ක්‍රියාත්මක කරයි — SIMT: බොහෝ සමාන්තර threads, එක එකක් තමන්ගේ දත්ත මත (තමන්ගේ pixel, තමන්ගේ vertex), දෘඪාංගය සරල lanes හරහා ඒවා කණ්ඩායම් වශයෙන් lockstep ධාවනය කරයි.

ප්‍රතිලාභය සෘජු ය: කණ්ඩායමක සෑම lane එකක්ම *එකම* උපදෙස එකම මොහොතේ ධාවනය කරයි, එබැවින් CPU එකක් core එකකට pipeline යන්ත්‍රණය අනුපිටපත් කරන ආකාරයෙන් lane එකකට fetch, decode, සහ control අනුපිටපත් නොකරයි. එක් බෙදාගත් control unit එකක් බොහෝ lanes ධාවනය කරයි — embarrassingly parallel, එකම-මෙහෙයුම-බොහෝ-දත්ත වැඩ සඳහා ප්‍රදේශය සහ බල ජයග්‍රහණයක්, අනපේක්ෂිත අනුක්‍රමික කේතයට නරක ගැලපීමක්. එබැවින් CPU සහ GPU හුවමාරු කළ නොහැකි ය, සහ සැබෑ පද්ධති සාමාන්‍යයෙන් දෙකම තබා ගනී.

## Graphics සිට සාමාන්‍ය Compute දක්වා

කර්මාන්තය හැඩගැස්වූ අවබෝධය: එම SIMT හැඩයම triangles ඉක්මවා බොහෝ පුළුල් පන්තියකට ගැලපේ — ගණිතය විශාල පරිමාණයෙන් සමාන්තර සහ නිත්‍ය වන විට. Neural-network training සහ inference බොහෝ දුරට එම වර්ගයේ matrix සහ vector වැඩෙන් ගොඩනැගේ — එබැවින් rendering සඳහා උපන් දෘඪාංගය ප්‍රමුඛ AI compute පදනම බවට පත් වූයේය, සහ මෙම අදියරේ ඉතිරිය එම සමාන්තර ගෘහ නිර්මාණය ක්‍රමලේඛනය කිරීම සහ පෝෂණය කිරීම ගැන ය, graphics ගැන විශේෂයෙන් නොවේ.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

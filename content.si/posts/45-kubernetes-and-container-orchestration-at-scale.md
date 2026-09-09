---
title: "Kubernetes සහ පරිමාණයේ Container Orchestration"
weight: 46
date: 2026-01-01
draft: false
phase: "7 — බෙදාහැරුණු පද්ධති, Big Data සහ Orchestration"
series_index: 45
tags: []
summary: "දහස් ගණනක් containers රුටීන ලෙස අසාර්ථක වීම declarative අපේක්ෂිත තත්ත්වයක් සහ අඛණ්ඩ reconciliation loop එකක් බල කරයි"
image_prompt: "System diagram of a Kubernetes cluster showing control plane, nodes, pods, and services, clean cloud-native architecture diagram style"
video_prompt: "25-second animation: a pod failing and Kubernetes automatically rescheduling it onto a healthy node, clean technical animation showing the reconciliation loop"
schematics: "Diagram: Kubernetes control plane architecture (API server/scheduler/controller manager/etcd) + pod scheduling and reconciliation loop"
---

Post 25 containers ආවරණය කළේය — host kernel එකක් බෙදා ගන්නා සැහැල්ලු හුදකලාව. එක් යන්ත්‍රයක එක් container එකක් අතින් කළමනාකරණය කළ හැකිය. යන්ත්‍ර සිය ගණනක් හරහා දහස් ගණනක්, පෙට්ටි සහ processes රුටීන ලෙස අසාර්ථක වන (Post 44 හි GFS හි එකම "failure සාමාන්‍යයි" ඔට්ටුව), වෙනස් මෙහෙයුම් ගැටලුවකි. Kubernetes යනු එම සීමාවට Google හි විවෘත පිළිතුරයි, දැනටමත් එය ජීවත් වී තිබූ අභ්‍යන්තර cluster managers වලින් පෙරනය කරන ලද.

## අතින් තැබීම පරිමාණය නොවේ

කුමන යන්ත්‍රය කුමන process එක ධාවනය කරන්නේද තෝරා ගැනීම, crashes නැවත ආරම්භ කිරීම, ගමනාගමනය සෞඛ්‍යසම්පන්න instances වෙත මාර්ගගත කිරීම, outage එකක් නොමැතිව rolling updates — containers කිහිපයක් සඳහා කළ හැකිය; නිෂ්පාදන fleets සඳහා නොවේ. බල කළ චලනය නම් තැබීම සහ recovery අඛණ්ඩව කළමනාකරණය කරන මෘදුකාංගයයි එවිට මිනිසෙකුට සෑම failure එකක්ම දැකීමට අවශ්‍ය නැත.

## පියවරෙන්-පියවර විධාන නොව, අපේක්ෂිත තත්ත්වය

බර උසුලන අදහස declarative, imperative නොවේ. Operator කෙනෙක් අවසාන තත්ත්වය ප්‍රකාශ කරයි — "මෙම සේවාවේ replicas පහක්, මෙම සීමා සමඟ" — සහ control plane එක සැබෑ cluster තත්ත්වය එම ආශාව රැඳෙන තාක් එයට ගැලපෙන්නට ක්‍රියා කරයි. Drift (crash එකක්, මළ node එකක්, ඉල්ලූ ප්‍රමාණයට වඩා අඩු සෞඛ්‍යසම්පන්න replicas) මුලින්ම මිනිසෙකුට alert එකක් නොවේ; එය replacement එකක් schedule කර loop එක නිවැරදි කරන නොගැලපීමකි.

එම reconciliation loop එක self-healing යාන්ත්‍රණයයි. Control plane හි නම් කළ කොටස් — සෑම තත්ත්ව වෙනසක්ම සඳහා දොරටුව ලෙස API server, අපේක්ෂිත සහ සැබෑ හි consistent store ලෙස etcd, නව වැඩ තබන scheduler එකක්, drift වර්ග තමන් සතු කර ගන්නා controllers — එම loop එකට සේවය කිරීමට පවතී. ඒවා feature catalog එකක් නොවේ; අඛණ්ඩ නිවැරදි කිරීම ක්‍රියාත්මක වන ආකාරයයි.

## පෙළපත: Borg → Omega → Open Source

Google මෙම ගැටලු පන්තිය අභ්‍යන්තරව දශකයකට වඩා කාලයක් ධාවනය කර තිබුණි (Borg; පසුව Omega හි shared-state scheduling අත්හදා බැලීම්) Kubernetes පාඩම්වල විවෘත, API-කේන්ද්‍රිත අනුවාදය ලෙස නැව්ගත කිරීමට පෙර. විවෘත පද්ධතිය වැදගත් වූයේ සීමාව කර්මාන්ත-පුරා වූ නිසාය: containers යෙදවුම් ඒකකය වූ පසු, යමක් fleet එකක් හරහා අපේක්ෂිත තත්ත්වය හිමිකර ගත යුතුය.

## ML Clusters ට ඇයි වැදගත්

එම loop එක දැන් ධාවනය වන්නේ web සේවා පමණක් නොව බෙදාහැරුණු training සහ inference — බොහෝ GPU යන්ත්‍ර හරහා විහිදෙන, රුටීන දෘඪාංග failure මත නැවත ආරම්භ විය යුතු, සහ ලබා ගත හැකි ධාරිතාව සමඟ පරිමාණය වන රැකියා. එය Post 46 හි මෘදුකාංග stack එකට සහ Phase 9–10 හි දෘඪාංගයට භාර දෙයි: සිලිකන් පමණක් training fleet එකක් තබන්නේ හෝ සුව කරන්නේ නැත.

**පිටවීමේ දොර:** Abhishek Verma et al., "Large-scale cluster management at Google with Borg" (EuroSys 2015) — Kubernetes බැස එන අභ්‍යන්තර පද්ධතියේ ප්‍රාථමික වාර්තාව; Brendan Burns et al., "Borg, Omega, and Kubernetes" (*ACM Queue*, 2016) — Borg, Omega, සහ විවෘත control plane එක එකට බඳින කෙටි පෙළපත් paper එක.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

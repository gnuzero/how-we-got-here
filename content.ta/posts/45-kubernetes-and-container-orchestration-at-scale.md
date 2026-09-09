---
title: "Kubernetes மற்றும் Container Orchestration அளவில்"
weight: 45
date: 2026-01-01
draft: false
phase: "7 — விநியோகிக்கப்பட்ட அமைப்புகள், Big Data மற்றும் Orchestration"
series_index: 45
tags: []
summary: "ஆயிரக்கணக்கான containers வழக்கமாகத் தோல்வியுறும்போது declarative desired state மற்றும் தொடர்ச்சியான reconciliation loop கட்டாயம்"
image_prompt: "System diagram of a Kubernetes cluster showing control plane, nodes, pods, and services, clean cloud-native architecture diagram style"
video_prompt: "25-second animation: a pod failing and Kubernetes automatically rescheduling it onto a healthy node, clean technical animation showing the reconciliation loop"
schematics: "Diagram: Kubernetes control plane architecture (API server/scheduler/controller manager/etcd) + pod scheduling and reconciliation loop"
---

பதிவு 25 containers — host kernel பகிரும் lightweight isolation — உள்ளடக்கியது. ஒரு இயந்திரத்தில் ஒரு container கையால் நிர்வகிக்கக்கூடியது. நூற்றுக்கணக்கான இயந்திரங்கள் குறுக்கே ஆயிரக்கணக்கானவை, boxes மற்றும் processes வழக்கமாகத் தோல்வியுறும்போது (பதிவு 44-இல் GFS-இன் அதே "failure சாதாரணம்" பந்தயம்), அது வேறு செயல்பாட்டுப் பிரச்சனை. Kubernetes அந்தக் கட்டுப்பாட்டிற்கு Google-இன் திறந்த பதில் — ஏற்கனவே அதை வாழ்ந்த உள் cluster managers-இலிருந்து வடிகட்டப்பட்டது.

## Manual Placement அளவிடாது

எந்த இயந்திரம் எந்த process ஓட்டும் எனத் தேர்வு செய்தல், crashes மீண்டும் தொடங்குதல், healthy instances-க்கு போக்குவரத்து வழிசெலுத்துதல், outage இல்லாமல் rolling updates — ஒரு சில containers-க்கு சாத்தியம்; production fleets-க்கு அல்ல. கட்டாய நகர்வு: placement மற்றும் recovery-ஐத் தொடர்ந்து நிர்வகிக்கும் மென்பொருள், மனிதன் ஒவ்வொரு failure-ஐயும் கவனிக்க வேண்டியதில்லை.

## Desired State, படிப்படியான Commands அல்ல

சுமை தாங்கும் கருத்து declarative, imperative அல்ல. ஒரு operator இறுதி நிலையை அறிவிக்கிறார் — "இந்தச் சேவையின் ஐந்து replicas, இந்த limits உடன்" — மற்றும் control plane அந்த desire இருக்கும் வரை உண்மையான cluster நிலையை அதற்குப் பொருத்த முயல்கிறது. Drift (ஒரு crash, ஒரு இறந்த node, கேட்டதை விடக் குறைந்த healthy replicas) முதலில் மனிதனுக்கான alert அல்ல; அது loop replacement schedule செய்து சரிசெய்யும் பொருத்தமின்மை.

அந்த reconciliation loop தான் self-healing பொறிமுறை. Control plane-இன் பெயரிடப்பட்ட துண்டுகள் — ஒவ்வொரு நிலை மாற்றத்திற்கும் gate ஆக API server, desired மற்றும் actual-இன் consistent store ஆக etcd, புதிய வேலையை வைக்கும் scheduler, குறிப்பிட்ட வகை drift-ஐச் சொந்தமாக வைத்திருக்கும் controllers — அந்த loop-க்குச் சேவை செய்யவே உள்ளன. அவை feature catalog அல்ல; தொடர்ச்சியான திருத்தம் எப்படிச் செயல்படுத்தப்படுகிறது என்பது அவை.

## Lineage: Borg → Omega → திறந்த மூலம்

Google இந்த வகைப் பிரச்சனையை உள்நாட்டில் ஒரு பத்தாண்டுக்கு மேல் ஓட்டியிருந்தது (Borg; பிறகு Omega-வின் shared-state scheduling சோதனைகள்) Kubernetes-ஐப் பாடங்களின் திறந்த, API-மையப் பதிப்பாக அனுப்புவதற்கு முன். திறந்த அமைப்பு முக்கியம் ஏனெனில் கட்டுப்பாடு தொழில்-முழுவதும் இருந்தது: containers deploy-இன் அலகாக இருந்தவுடன், ஏதோ ஒன்று fleet குறுக்கே desired state-ஐச் சொந்தமாக வைத்திருக்க வேண்டும்.

## ML Clusters ஏன் கவலைப்படுகின்றன

அதே loop இப்போது web சேவைகள் மட்டும் அல்ல, விநியோகிக்கப்பட்ட training மற்றும் inference-ஐயும் ஓட்டுகிறது — பல GPU இயந்திரங்கள் குறுக்கே பரவும் jobs, வழக்கமான வன்பொருள் failure-இல் மீண்டும் தொடங்க வேண்டும், மற்றும் கிடைக்கும் கொள்ளளவுடன் அளவிட வேண்டும். அது பதிவு 46-இன் மென்பொருள் stack-க்கும் Phase 9–10-இன் வன்பொருளுக்கும் ஒப்படைக்கிறது: சிலிகான் மட்டும் ஒரு training fleet-ஐ வைக்கவோ குணப்படுத்தவோ செய்யாது.

**Door out:** Abhishek Verma et al., "Large-scale cluster management at Google with Borg" (EuroSys 2015) — Kubernetes இறங்கும் உள் அமைப்பின் முதன்மை கணக்கு; Brendan Burns et al., "Borg, Omega, and Kubernetes" (*ACM Queue*, 2016) — Borg, Omega, மற்றும் திறந்த control plane-ஐ இணைக்கும் குறுகிய lineage paper.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

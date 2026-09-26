---
title: "Kubernetes மற்றும் Container Orchestration அளவில்"
weight: 46
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

> **தமிழ் இடைவெளிக் குறிப்பு:** Kubernetes பற்றித் தமிழ் எழுத்து விளக்கம் மெலிதானது; காணொளிச் சான்று YouTube தேடல் முடிவுகள் மட்டும் — காணொளிகள் பார்க்கப்படவில்லை. கீழே உள்ள Deployment manifest எங்கள் பணிக் கணினியில் `kubectl` 1.32.3 (`--dry-run=client`, cluster இல்லாமல்) உண்மையில் உருவாக்கியது; Borg பற்றிய எண்ணும் (median cell சுமார் 10 k இயந்திரங்கள்) failure domain-களில் task-களைப் பரப்புதலும் ஆங்கிலப் பதிவு "Door out"-இல் பெயரிடும் Verma et al., EuroSys 2015 கட்டுரையிலிருந்து சரிபார்க்கப்பட்டவை. Node அளவுகள், CPU கோரிக்கைகள், நேரங்கள் "எடுத்துக்காட்டு மதிப்புகள்". இந்தப் பதிவுக்கு lab இல்லை; காகிதப் பயிற்சிகள் கீழே.

## முதலில் சொற்கள்

- **Container orchestration (container ஒருங்கிணைப்பு):** பல இயந்திரங்களில் ஆயிரக்கணக்கான container-களை வைத்தல், மீட்டல், புதுப்பித்தலை மென்பொருளே செய்வது.
- **Declarative (அறிவிப்பு பாணி):** "எப்படி" என்ற படிகளுக்குப் பதிலாக "என்ன இறுதி நிலை வேண்டும்" என்று சொல்வது.
- **Desired / actual state (விரும்பிய / உண்மை நிலை):** operator அறிவித்த நிலை / cluster-இல் இப்போது உள்ள நிலை.
- **Reconciliation loop (ஒத்திசைவுச் சுழல்):** இரண்டையும் தொடர்ந்து ஒப்பிட்டு, வேறுபாட்டைச் சரிசெய்யும் கட்டுப்பாட்டுச் சுழல்.
- **Pod / node / replica:** Kubernetes-இன் அடிப்படை ஓட்ட அலகு (ஒன்று அல்லது பல container-கள்) / ஒரு இயந்திரம் / அதே pod-இன் ஒரு நகல்.
- **Control plane (கட்டுப்பாட்டுத் தளம்):** API server, etcd, scheduler, controllers — cluster-ஐ நிர்வகிக்கும் பகுதிகள்.
- **Scheduler (இடமளிப்பான்):** புதிய pod-ஐ எந்த node-இல் வைப்பது என்று தீர்மானிக்கும் பகுதி.
- **Failure domain (தோல்விப் பகுதி):** ஒரே காரணத்தால் சேர்ந்து விழக்கூடிய இயந்திரத் தொகுப்பு — ஒரு rack, ஒரு மின் பகுதி.

## Manual Placement அளவிடாது

எந்த இயந்திரம் எந்த process ஓட்டும் எனத் தேர்வு செய்தல், crashes மீண்டும் தொடங்குதல், healthy instances-க்கு போக்குவரத்து வழிசெலுத்துதல், outage இல்லாமல் rolling updates — ஒரு சில containers-க்கு சாத்தியம்; production fleets-க்கு அல்ல. கட்டாய நகர்வு: placement மற்றும் recovery-ஐத் தொடர்ந்து நிர்வகிக்கும் மென்பொருள், மனிதன் ஒவ்வொரு failure-ஐயும் கவனிக்க வேண்டியதில்லை.

## Desired State, படிப்படியான Commands அல்ல

சுமை தாங்கும் கருத்து declarative, imperative அல்ல. ஒரு operator இறுதி நிலையை அறிவிக்கிறார் — "இந்தச் சேவையின் ஐந்து replicas, இந்த limits உடன்" — மற்றும் control plane அந்த desire இருக்கும் வரை உண்மையான cluster நிலையை அதற்குப் பொருத்த முயல்கிறது. Drift (ஒரு crash, ஒரு இறந்த node, கேட்டதை விடக் குறைந்த healthy replicas) முதலில் மனிதனுக்கான alert அல்ல; அது loop replacement schedule செய்து சரிசெய்யும் பொருத்தமின்மை.

## "ஐந்து replicas" — உண்மையான manifest

`kubectl create deployment web --image=nginx --replicas=5 --dry-run=client -o yaml` எங்கள் பணிக் கணினியில் தந்தது (முக்கிய வரிகள்):

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 5
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - image: nginx
        name: nginx
```

இதில் "முதலில் இந்த இயந்திரத்தில் தொடங்கு, பிறகு அதில்" என்ற கட்டளை எதுவும் இல்லை — `replicas: 5` என்ற விருப்பம் மட்டும். எந்த node, எப்போது மீண்டும் தொடங்குவது — control plane-இன் வேலை.

அந்த reconciliation loop தான் self-healing பொறிமுறை. Control plane-இன் பெயரிடப்பட்ட துண்டுகள் — ஒவ்வொரு நிலை மாற்றத்திற்கும் gate ஆக API server, desired மற்றும் actual-இன் consistent store ஆக etcd, புதிய வேலையை வைக்கும் scheduler, குறிப்பிட்ட வகை drift-ஐச் சொந்தமாக வைத்திருக்கும் controllers — அந்த loop-க்குச் சேவை செய்யவே உள்ளன. அவை feature catalog அல்ல; தொடர்ச்சியான திருத்தம் எப்படிச் செயல்படுத்தப்படுகிறது என்பது அவை.

## ஒத்திசைவுச் சுழல், ஒரு காலவரிசையில்

விரும்பிய நிலை: 5 replicas. மூன்று node-கள் A, B, C. (நேரங்களும் நிகழ்வுகளும் எடுத்துக்காட்டு மதிப்புகள்.)

| நேரம் | நிகழ்வு | உண்மை நிலை | விரும்பியது − உண்மை | சுழலின் செயல் |
|---|---|---|---|---|
| 0 s | நிலையான நிலை: A-இல் 2, B-இல் 2, C-இல் 1 | 5 | 0 | எதுவும் இல்லை |
| 10 s | Node B இறக்கிறது | 3 | 2 | 2 புதிய pod-களை உருவாக்கு |
| 12 s | Scheduler: A-இல் 1, C-இல் 1 | 3 (+2 தொடங்குகின்றன) | 2 | காத்திரு |
| 20 s | புதிய pod-கள் தயார் | 5 | 0 | எதுவும் இல்லை |
| 60 s | Operator `replicas: 3` என்று மாற்றுகிறார் | 5 | −2 | 2 pod-களை நிறுத்து |

எந்த வரியிலும் மனிதன் "B இறந்தது" என்று கவனிக்கவில்லை; அவர் செய்தது விருப்பத்தை மாற்றியது மட்டும் (60 s).

## இடமளிப்பின் கணக்கு: விருப்பம் எப்போதும் நிறைவேறாது

எடுத்துக்காட்டு மதிப்புகள்: மூன்று node-கள், ஒவ்வொன்றிலும் 4 CPU; ஒவ்வொரு pod-உம் 1.5 CPU கோருகிறது.

- ஒரு node-இல் எத்தனை pod? 2 × 1.5 = 3.0 ≤ 4 சரி; 3 × 1.5 = 4.5 > 4 முடியாது → **2**.
- மூன்று node-கள்: 3 × 2 = 6 இடங்கள்; 5 replicas பொருந்தும்.
- ஒரு node இறந்தால்: 2 × 2 = 4 இடங்கள்; 5-இல் **4 ஓடும், 1 காத்திருக்கும் (Pending)**, புதிய கொள்ளளவு வரும் வரை.

சுழல் திறமையானது, மந்திரம் அல்ல: இல்லாத CPU-ஐ அது உருவாக்காது; வேறுபாட்டை வெளிப்படையாகக் காட்டிக்கொண்டே இருக்கும்.

## Lineage: Borg → Omega → திறந்த மூலம்

Google இந்த வகைப் பிரச்சனையை உள்நாட்டில் ஒரு பத்தாண்டுக்கு மேல் ஓட்டியிருந்தது (Borg; பிறகு Omega-வின் shared-state scheduling சோதனைகள்) Kubernetes-ஐப் பாடங்களின் திறந்த, API-மையப் பதிப்பாக அனுப்புவதற்கு முன். திறந்த அமைப்பு முக்கியம் ஏனெனில் கட்டுப்பாடு தொழில்-முழுவதும் இருந்தது: containers deploy-இன் அலகாக இருந்தவுடன், ஏதோ ஒன்று fleet குறுக்கே desired state-ஐச் சொந்தமாக வைத்திருக்க வேண்டும்.

Borg கட்டுரை: Google-இன் median cell சுமார் **10 k இயந்திரங்கள்** (சோதனை cell-கள் நீங்கலாக); ஒரு job-இன் task-களை இயந்திரங்கள், rack-கள், மின் பகுதிகள் போன்ற failure domain-களில் பரப்பி ஒன்றாக விழும் தோல்விகளைக் குறைக்கிறது; வெளியேற்றப்பட்ட task-களைத் தேவையானால் வேறு இயந்திரத்தில் தானாக மீண்டும் இடமளிக்கிறது. பரப்புதலின் கணக்கு (எடுத்துக்காட்டு மதிப்புகள்): 5 replicas, 3 rack-கள்.

| இடமளிப்பு | ஒரு rack முழுவதும் விழுந்தால் மிக மோசமான இழப்பு | மீதம் |
|---|---|---|
| எல்லாம் ஒரே rack-இல் | 5 | 0 — சேவை நின்றது |
| பரப்பி (2, 2, 1) | 2 | 3 (60%) — சேவை தொடர்கிறது |

## ML Clusters ஏன் கவலைப்படுகின்றன

அதே loop இப்போது web சேவைகள் மட்டும் அல்ல, விநியோகிக்கப்பட்ட training மற்றும் inference-ஐயும் ஓட்டுகிறது — பல GPU இயந்திரங்கள் குறுக்கே பரவும் jobs, வழக்கமான வன்பொருள் failure-இல் மீண்டும் தொடங்க வேண்டும், மற்றும் கிடைக்கும் கொள்ளளவுடன் அளவிட வேண்டும். அது பதிவு 46-இன் மென்பொருள் stack-க்கும் Phase 9–10-இன் வன்பொருளுக்கும் ஒப்படைக்கிறது: சிலிகான் மட்டும் ஒரு training fleet-ஐ வைக்கவோ குணப்படுத்தவோ செய்யாது.

## காகிதப் பயிற்சிகள் (விடைகளுடன்)

1. **விரும்பியது 8 replicas, ஓடுவது 5, 1 நிறுத்தப்பட்டுக்கொண்டிருக்கிறது. சுழல் எத்தனை புதிய pod-களை உருவாக்க வேண்டும்?**
   விடை: நிறுத்தப்படுவதைக் கணக்கில் எடுக்காமல் ஓடுவது 5; 8 − 5 = **3**.

2. **Node-கள் தலா 8 CPU; pod ஒவ்வொன்றும் 3 CPU கோருகிறது (எடுத்துக்காட்டு மதிப்புகள்). 4 node-களில் அதிகபட்சம் எத்தனை pod-கள்? ஒரு node இறந்தால்?**
   விடை: ஒரு node-க்கு ⌊8 ÷ 3⌋ = 2 (6 CPU; 2 CPU வீணாகிறது); 4 × 2 = **8**; ஒன்று இறந்தால் 3 × 2 = **6**.

3. **12 replicas, 4 rack-கள், சமமாகப் பரப்பப்பட்டவை. ஒரு rack விழுந்தால் எத்தனை மீதம்? எத்தனை சதவீதம்?**
   விடை: ஒரு rack-க்கு 3; 12 − 3 = **9**, அதாவது **75%**.

4. **Imperative கட்டளை "node B-இல் ஒரு pod தொடங்கு" எதிர் declarative "5 replicas". B இறந்தால் ஒவ்வொன்றுக்கும் என்ன ஆகும்?**
   விடை: Imperative: கட்டளை ஒருமுறை நிறைவேறியது; B இறந்தால் pod போய்விடும், யாராவது கவனித்து மீண்டும் கட்டளையிட வேண்டும். Declarative: விருப்பம் இன்னும் "5" என்பதால் சுழல் வேறுபாட்டைக் கண்டு மாற்று pod-ஐ வேறு node-இல் தானாக உருவாக்கும்.

5. **ஒரு ML training job 64 GPU இயந்திரங்களில். ஒவ்வொரு இயந்திரமும் சராசரியாக 1,000 நாட்களுக்கு ஒருமுறை தோல்வியுறுகிறது (எடுத்துக்காட்டு மதிப்பு). 30 நாள் பயிற்சியில் எத்தனை இயந்திரத் தோல்விகள் எதிர்பார்க்கலாம்?**
   விடை: 64 × 30 ÷ 1,000 = **1.92** — சுமார் இரண்டு. அதனால்தான் training fleet-க்கும் தானியங்கி மீட்பு தேவை.

**Door out:** Abhishek Verma et al., "Large-scale cluster management at Google with Borg" (EuroSys 2015) — Kubernetes இறங்கும் உள் அமைப்பின் முதன்மை கணக்கு; Brendan Burns et al., "Borg, Omega, and Kubernetes" (*ACM Queue*, 2016) — Borg, Omega, மற்றும் திறந்த control plane-ஐ இணைக்கும் குறுகிய lineage paper.

## சொற்கள்

| தமிழ் | English |
|---|---|
| container ஒருங்கிணைப்பு | container orchestration |
| அறிவிப்பு பாணி / கட்டளை பாணி | declarative / imperative |
| விரும்பிய நிலை / உண்மை நிலை | desired state / actual state |
| ஒத்திசைவுச் சுழல் | reconciliation loop |
| விலகல் | drift |
| தானே குணமாதல் | self-healing |
| கட்டுப்பாட்டுத் தளம் | control plane |
| இடமளிப்பான் | scheduler |
| கட்டுப்படுத்தி | controller |
| வள கோரிக்கை / வரம்பு | resource request / limit |
| தோல்விப் பகுதி | failure domain |
| படிப்படியான புதுப்பிப்பு | rolling update |
| இயந்திரத் தொகுப்பு | fleet / cluster |

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

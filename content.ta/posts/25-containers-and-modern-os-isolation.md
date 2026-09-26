---
title: "Containers மற்றும் நவீன OS Isolation"
weight: 26
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 25
tags: []
summary: "முழு VM-கள் வலுவான isolation-ஐ கனமான செலவில் வாங்குகின்றன — namespaces மற்றும் cgroups ஒரே kernel பகிர்ந்து மற்ற எல்லாவற்றையும் கிட்டத்தட்ட தனிமைப்படுத்துகின்றன"
image_prompt: "Layered diagram comparing full virtualization vs container isolation, clean modern infrastructure diagram style"
video_prompt: "20-second animation: a hypervisor stack morphing into a container stack sharing one kernel, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: VM vs container stack comparison + Linux namespaces/cgroups diagram"
---

Virtual memory (பதிவு 24) process-களை ஒருவருக்கொருவர் நினைவகத்திலிருந்து தனிமைப்படுத்துகிறது. அதே filesystem, process-ID இடம், அல்லது network கட்டமைப்பைப் பகிர்வதிலிருந்து அவற்றைத் தனிமைப்படுத்தாது — பாரம்பரிய Unix process இன்னும் raw RAM-க்கு அப்பால் பல வழிகளில் மற்றவற்றைப் பார்த்து சில நேரம் தலையிட முடியும். Containers isolation-ஐ அந்த மேற்பரப்பின் அதிக பகுதிக்கு நீட்டிக்கின்றன, முழு வன்பொருள் virtualization வரை செல்லாமல்.

"Container", "Docker" என்ற சொற்களுக்குத் தமிழில் அறிமுகக் காணொளிகள் சில உள்ளன; ஆனால் அவற்றின் அடியில் உள்ள Linux பொறிமுறைகளான namespaces, குறிப்பாக **cgroups** பற்றித் தமிழில் எழுத்து விளக்கமோ காணொளியோ இந்தத் தணிக்கையில் கிடைக்கவில்லை. இந்தப் பக்கம் அவற்றை அடிப்படையிலிருந்து விளக்கி, கீழே உள்ள lab-இல் ஒரு cgroup-ஐ நீங்களே உருவாக்கிப் பார்க்க வழிகாட்டுகிறது.

## முழு Virtualization: வலுவானது, கனமானது

பாரம்பரிய VM முழுமையான guest OS — சொந்த kernel, சொந்த drivers — hypervisor மீது ஓட்டுகிறது, அது virtualized (அல்லது வன்பொருள் உதவியுடன், near-native) CPU, நினைவகம், சேமிப்பு, மற்றும் networking வழங்குகிறது. மிக வலுவான isolation: guest host-இன் process-களையோ மற்ற guests-ஐயோ பார்க்க முடியாது, கடுமையான hypervisor பிழை இல்லாவிட்டால். செலவு உண்மையானது — ஒவ்வொரு VM-ம் தன் kernel-ஐ boot செய்கிறது, அந்த kernel-இன் நினைவக அடிச்சுவட்டைச் சுமக்கிறது, மற்றும் பொதுவாக host-இல் ஓடுவதை விட சில வன்பொருளுக்கு மெதுவான அணுகலைச் செலுத்துகிறது.

## Kernel பகிருங்கள், View தனிமைப்படுத்துங்கள்

Containers மற்ற வர்த்தகத்தை எடுக்கின்றன: host-இல் ஒவ்வொரு container-ம் *அதே* kernel-ஐப் பகிர்கிறது — instance ஒன்றுக்கு guest OS boot இல்லை — அதே நேரத்தில் kernel isolation வழங்குகிறது, ஒவ்வொரு container-இன் view தனித்தனியாகத் தெரியும்படி. இரண்டு Linux அம்சங்கள் பெரும்பாலான வேலையைச் செய்கின்றன. **Namespaces** process-இன் குறிப்பிட்ட வளங்களின் view-ஐத் தனிமைப்படுத்துகின்றன — PID namespace container-ஐ தன் சொந்த process மரத்தை மட்டும் பார்க்க வைக்கிறது (உள்ளே process 1 host-இல் PID 1 அல்ல); network namespace தனிப்பட்ட இடைமுகங்கள் மற்றும் routing கொடுக்கிறது; mount namespace தனிப்பட்ட filesystem view கொடுக்கிறது. **Cgroups** (control groups) CPU, நினைவகம், மற்றும் I/O-ஐ வரம்பு மற்றும் கணக்கு வைக்கின்றன, ஒரே host-இல் ஒரு container மற்றவற்றைப் பட்டினி போடாதபடி.

வம்சாவளி buzzword-ஐ விடப் பழையது: chroot (process-இன் தோற்ற filesystem root-ஐ மாற்றுதல், 1980களின் ஆரம்பம்) தசாப்தங்களுக்கு முன் வரையறுக்கப்பட்ட filesystem isolation; cgroups மற்றும் நவீன namespaces அந்தக் கருத்தை process-இன் உலகின் அதிக பகுதிக்கு பொதுமைப்படுத்துகின்றன.

## Namespaces: ஒவ்வொரு வகையும் எதைத் தனிமைப்படுத்துகிறது

**Namespace** (பெயர்வெளி) என்பது ஒரு process-க்கு ஒரு வகை வளத்தின் *தனிப் பார்வை*யைக் கொடுக்கும் kernel பொறிமுறை. ஒரே namespace-இல் உள்ள process-கள் ஒரே பார்வையைப் பகிர்கின்றன; வேறு namespace-இல் உள்ளவை வேறு உலகத்தைப் பார்க்கின்றன. ஒவ்வொரு process-உம் ஒவ்வொரு வகையிலும் சரியாக ஒரு namespace-இல் இருக்கிறது.

| Namespace | எதைத் தனிமைப்படுத்துகிறது | Container-க்குள் விளைவு |
|---|---|---|
| mnt | mount-களின் பட்டியல் (எந்த filesystem எங்கே இணைக்கப்பட்டுள்ளது) | சொந்த `/` — host-இன் கோப்புகள் தெரியாது |
| pid | process ID எண்கள் | உள்ளே முதல் process PID 1; host-இல் அதற்கு வேறு எண் |
| net | network இடைமுகங்கள், IP முகவரிகள், routing அட்டவணை, ports | சொந்த `eth0`, சொந்த port 80 |
| uts | hostname | சொந்தப் பெயர் |
| ipc | System V IPC, POSIX message queues | பிற container-களின் பகிர்ந்த நினைவகத்தைத் தொட முடியாது |
| user | user/group ID எண்கள் | உள்ளே "root" (UID 0), host-இல் சாதாரணப் பயனர் |
| cgroup | cgroup படிநிலையின் பார்வை | தன் cgroup-ஐ வேராகப் பார்க்கிறது |

**PID namespace எடுத்துக்காட்டு** (எடுத்துக்காட்டு மதிப்புகள்): host-இல் ஒரு container-இன் முதல் process PID 4321. Container-க்குள் அதே process தன்னை PID 1 என்று பார்க்கிறது; அது தொடங்கும் அடுத்த process உள்ளே PID 2, host-இல் 4322 போன்ற ஏதோ ஒரு எண். Container-க்குள் `ps` ஓட்டினால் அதன் சொந்த மரம் மட்டுமே தெரியும்; host-இல் `ps` ஓட்டினால் எல்லாம் தெரியும். ஒரே process-க்கு இரண்டு எண்கள் — namespace ஒரு *மொழிபெயர்ப்பு அடுக்கு*, பதிவு 24-இன் page table ஒரு virtual முகவரியை மொழிபெயர்ப்பது போல.

கவனிக்க வேண்டியது: namespace *பார்வையை* மட்டுமே பிரிக்கிறது, *அளவை* அல்ல. தனி PID namespace-இல் உள்ள container இன்னும் எல்லா CPU-வையும் நினைவகத்தையும் விழுங்க முடியும். அளவைக் கட்டுப்படுத்துவது cgroups-இன் வேலை.

## Cgroups: வரம்பும் கணக்கும்

**Cgroup** (control group, கட்டுப்பாட்டுக் குழு) என்பது process-களின் ஒரு குழு; kernel அந்தக் குழு முழுவதற்குமாக வளப் பயன்பாட்டை அளக்கிறது, வரம்பிடுகிறது. ஒவ்வொரு வகை வளத்தையும் ஒரு **controller** (கட்டுப்படுத்தி) கையாள்கிறது: `cpu`, `memory`, `io`, `pids` போன்றவை.

சிறு வரலாறு: இந்த வேலை Google-இல் Paul Menage, Rohit Seth ஆகியோரால் "process containers" என்ற பெயரில் தொடங்கியது; "containers" என்ற சொல் மிகப் பொதுவானது என்பதால் "control groups" எனப் பெயர் மாற்றப்பட்டு Linux 2.6.24-இல் (2008 ஜனவரி) சேர்க்கப்பட்டது. ஒவ்வொரு controller-க்கும் தனிப் படிநிலை என்ற முதல் வடிவம் (v1) சிக்கலானதால், ஒரே படிநிலை கொண்ட **cgroup v2** வடிவமைக்கப்பட்டு Linux 4.5-இல் (2016) அதிகாரப்பூர்வமானது.

இடைமுகம் வியக்கத்தக்க அளவு எளியது — அது ஒரு **filesystem**:

- ஒரு அடைவு (directory) = ஒரு cgroup. `mkdir` செய்தால் புதிய குழு.
- ஒரு process-ஐக் குழுவில் சேர்க்க, அதன் PID-ஐ அந்த அடைவின் `cgroup.procs` கோப்பில் எழுதுங்கள்.
- வரம்புகள் = அதே அடைவில் உள்ள கோப்புகளில் எண்களை எழுதுவது (`cpu.weight`, `cpu.max`, `memory.max`, `pids.max`).
- அளவீடுகள் = கோப்புகளைப் படிப்பது (`cpu.stat`, `memory.current`).

**CPU பங்கு: weight கணக்கு.** `cpu.weight` ஒப்பீட்டு எடை (இயல்பு 100). கீழே உள்ள எடைகள், quota-கள், வரம்புகள் எடுத்துக்காட்டு மதிப்புகள். CPU-க்குப் போட்டி இருக்கும்போது, ஒவ்வொரு குழுவும் பெறுவது = தன் எடை / போட்டியிடும் குழுக்களின் மொத்த எடை.

- A = 100, B = 400, இரண்டும் முழு வேலையில்: A = 100 / 500 = **20%**, B = 400 / 500 = **80%**.
- A = 100, B = 100, C = 200: 25%, 25%, 50%.
- B சும்மா இருந்தால் A **100%** பெறுகிறது — weight ஒரு வரம்பு அல்ல, போட்டியின்போது மட்டுமான பங்கீடு (work-conserving).

**CPU வரம்பு: quota கணக்கு.** `cpu.max`-இல் இரண்டு எண்கள்: "அனுமதி காலம்" — ஒவ்வொரு காலத்திலும் (period) குழு அதிகபட்சம் எத்தனை மைக்ரோவிநாடி ஓடலாம்.

- `20000 100000` → ஒவ்வொரு 100 ms-இலும் 20 ms = ஒரு CPU-வின் **20%**, மற்ற CPU-கள் சும்மா இருந்தாலும்.
- `200000 100000` → ஒவ்வொரு 100 ms-இலும் 200 ms = **2 முழு CPU-கள்** (பல core இயந்திரத்தில்).

Weight "நியாயமான பங்கு"; max "கடினக் கூரை". Cloud-இல் ஒரு container-க்கு "0.5 vCPU" என்று நீங்கள் கேட்பது அடியில் பெரும்பாலும் இத்தகைய quota-தான்.

**நினைவக வரம்பு.** `memory.max` = 2 GiB என்றால், குழுவின் process-கள் அதைத் தாண்ட முயலும்போது kernel முதலில் அந்தக் குழுவின் பக்கங்களையே மீட்க (reclaim) முயல்கிறது; முடியாவிட்டால் அந்தக் குழுவுக்குள் மட்டும் ஒரு process-ஐக் கொல்கிறது (OOM kill). எடுத்துக்காட்டு மதிப்புகள்: 8 GiB host-இல் மூன்று container-கள், ஒவ்வொன்றும் 2 GiB வரம்பு → ஒன்று நினைவகக் கசிவில் சிக்கினாலும் மற்ற இரண்டுக்கும் host-க்கும் குறைந்தது 4 GiB பாதுகாப்பாக இருக்கிறது.

**Process எண்ணிக்கை வரம்பு.** `pids.max` = 100 என்றால், ஒரு "fork bomb" (தன்னையே முடிவில்லாமல் நகலெடுக்கும் நிரல்) அந்தக் குழுவுக்குள் 100 process-களில் நின்றுவிடும்; host முழுவதையும் முடக்காது.

**ஒரு "container" = இவற்றின் சேர்க்கை.** Docker போன்ற கருவி ஒரு container-ஐத் தொடங்கும்போது செய்வது சுருக்கமாக: புதிய namespaces-இல் (mnt, pid, net, uts, ipc, சில நேரம் user) ஒரு process-ஐ உருவாக்குகிறது, அதன் `/`-ஆக ஒரு image-இன் கோப்புகளை mount செய்கிறது, அதை ஒரு புதிய cgroup-இல் வைத்து வரம்புகளை எழுதுகிறது. தனி kernel இல்லை, boot இல்லை — அதனால்தான் விநாடியின் பின்னத்தில் தொடக்கம்.

## வர்த்தகம் ஏன் அளவில் வென்றது

Containers host kernel பகிர்வதால், அவை பொதுவாக வினாடியின் பின்னத்தில் தொடங்குகின்றன (kernel boot இல்லை) மற்றும் instance ஒன்றுக்கு மிகச் சிறிய அடிச்சுவட்டைச் சுமக்கின்றன — நகல் kernel image அல்லது kernel-நிலை caches இல்லை. அந்தத் திறன் அவை நவீன cloud உள்கட்டமைப்பின் இயல்புநிலை packaging மற்றும் deployment அலகாக மாறியதற்குக் காரணம்: அதே வன்பொருளில் VM-களை விட மிக அதிக containers, இது விநியோகிக்கப்பட்ட அமைப்புகள் (Phase 7) உண்மையில் ஓடும் அளவில் முக்கியம்.

வர்த்தகம்: பகிரப்பட்ட kernel என்றால் போதுமான கடுமையான kernel vulnerability கொள்கையளவில் container isolation-ஐ உடைக்கலாம் — தனி-kernel virtualization-இன் கீழ் கட்டமைப்புரீதியாகக் கடினமான வழி. பெரும்பாலான production அமைப்புகள் அதை வேண்டுமென்றே ஏற்கின்றன, சில நேரம் மேலே அதிக sandboxing அடுக்கி. பதிவு 45-இன் Kubernetes விவாதம் இங்கிருந்து தொடர்கிறது: இலகுவான, வேகமாகத் தொடங்கும் isolation அலகு இருந்தால், அடுத்த பிரச்சினை கப்பற்படை முழுவதும் ஆயிரக்கணக்கானவற்றை orchestrate செய்வது.

**இப்போது முயல்க: ஒரு cgroup-ஐ நீங்களே கட்டுங்கள்.** கீழே உள்ள lab-இன் Linux (kernel 4.16) cgroup v2-ஐ ஆதரிக்கிறது. **Boot VM** அழுத்தி, prompt வந்ததும் திரையைக் கிளிக் செய்து, கீழே உள்ளவற்றை ஒவ்வொன்றாகத் தட்டச்சு செய்யுங்கள் (நீங்கள் ஏற்கனவே root). காட்டப்படும் வெளியீடுகள் இதே lab image-இல் ஓட்டிப் பெற்றவை; எண்கள் ஒவ்வொரு ஓட்டத்திலும் சற்று மாறும்.

1. **எந்த controller-கள் உள்ளன?** `cat /proc/cgroups` → `cpuset`, `cpu`, `cpuacct`, `freezer` — நான்கும் `enabled 1`. (இந்தச் சிறிய kernel-இல் memory, pids controller-கள் இல்லை.)
2. **Namespaces-ஐப் பாருங்கள்:** `ls -l /proc/self/ns` → `mnt:[4026531840]`, `pid:[4026531836]`, `net:[…]` போன்ற வரிகள். அடைப்புக்குள் உள்ள எண் அந்த namespace-இன் அடையாளம். `ls -l /proc/1/ns`-உடன் ஒப்பிடுங்கள் — அதே எண்கள்: இங்கே எல்லா process-களும் ஒரே namespaces-இல் (container இல்லை). (இந்த VM-இல் புதிய namespace உருவாக்கும் `unshare` கருவி இல்லை; எனவே இங்கே cgroups-ஐ மட்டும் கட்டுகிறோம்.)
3. **cgroup v2-ஐ mount செய்யுங்கள்:** `mount -t cgroup2 none /sys/fs/cgroup`, பிறகு `cat /sys/fs/cgroup/cgroup.controllers` → `cpu`.
4. **cpu controller-ஐக் குழந்தைகளுக்கு இயக்கி, இரண்டு குழுக்கள் உருவாக்குங்கள்:**
   ```
   echo +cpu > /sys/fs/cgroup/cgroup.subtree_control
   mkdir /sys/fs/cgroup/a /sys/fs/cgroup/b
   cat /sys/fs/cgroup/a/cpu.weight
   echo 400 > /sys/fs/cgroup/b/cpu.weight
   ```
   `cat` → `100` (இயல்பு எடை). இப்போது a = 100, b = 400.
5. **இரண்டு "பேராசை" process-களை ஒவ்வொரு குழுவிலும் வையுங்கள்** (ஒவ்வொன்றும் CPU-வை முழுவதும் தின்னும் முடிவில்லா loop; `$!` = கடைசியாகப் பின்னணியில் தொடங்கிய process-இன் PID):
   ```
   while :; do :; done &
   echo $! > /sys/fs/cgroup/a/cgroup.procs
   while :; do :; done &
   echo $! > /sys/fs/cgroup/b/cgroup.procs
   ```
6. **அளவிடுங்கள்:** `grep usage_usec /sys/fs/cgroup/a/cpu.stat /sys/fs/cgroup/b/cpu.stat`, பிறகு `sleep 10`, பிறகு அதே `grep` மீண்டும். எங்கள் ஓட்டத்தில்:

   | குழு | முன் (µs) | பின் (µs) | வேறுபாடு (µs) |
   |---|---|---|---|
   | a (100) | 612,713 | 2,755,558 | 2,142,845 |
   | b (400) | 632,616 | 9,213,209 | 8,580,593 |

   விகிதம் 8,580,593 / 2,142,845 ≈ **4.0**; பங்குகள் 2.14 / 10.72 ≈ 20% மற்றும் 8.58 / 10.72 ≈ 80% — மேலே உள்ள weight கணக்கு அப்படியே. (இந்த VM-க்கு ஒரே CPU; `nproc` → `1`.)
7. **இரண்டையும் நிறுத்துங்கள்:** `kill %1 %2`.
8. **ஒரு குழுவை உறைய வையுங்கள் (freezer, cgroup v1 வடிவம்):**
   ```
   mkdir /tmp/fz
   mount -t cgroup -o freezer freezer /tmp/fz
   mkdir /tmp/fz/box
   (i=0; while true; do i=$((i+1)); echo $i > /tmp/count; sleep 1; done) &
   echo $! > /tmp/fz/box/tasks
   echo FROZEN > /tmp/fz/box/freezer.state
   cat /tmp/count; sleep 3; cat /tmp/count
   echo THAWED > /tmp/fz/box/freezer.state
   sleep 3; cat /tmp/count
   ```
   உறைந்திருக்கும்போது இரண்டு `cat`-உம் ஒரே எண்ணைக் காட்டுகின்றன (எங்களுக்கு `1`, `1`); THAWED-க்குப் பின் எண்ணி மீண்டும் ஏறுகிறது (`5`). Process கொல்லப்படவில்லை — குழு முழுவதும் நிறுத்தி வைக்கப்பட்டது. Container-களை "pause" செய்வது இப்படித்தான். (v1-இல் PID-களை `tasks` கோப்பில் எழுதுகிறோம்; v2-இல் `cgroup.procs`.)

இந்த lab-இன் kernel-இல் `cpu.max` கோப்பு இல்லை (CPU quota அம்சம் இந்த build-இல் சேர்க்கப்படவில்லை), எனவே மேலே உள்ள quota கணக்கை இங்கே நேரடியாகச் சோதிக்க முடியாது; weight சோதனை அதே கொள்கையைக் காட்டுகிறது.

{{< lab type="vm-terminal" >}}

## சொற்கள்

| தமிழ் | English |
|---|---|
| பெயர்வெளி | namespace |
| கட்டுப்பாட்டுக் குழு | control group (cgroup) |
| கட்டுப்படுத்தி | controller |
| படிநிலை | hierarchy |
| ஒப்பீட்டு எடை | weight (cpu.weight) |
| ஒதுக்கீட்டுக் கூரை | quota (cpu.max) |
| நினைவக மீட்பு | memory reclaim |
| நினைவகம் தீர்ந்த கொலை | OOM kill |
| உறைய வைத்தல் / உருக்குதல் | freeze / thaw |

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via the lab shortcode (lab type="...") if labs field is set
-->

---
title: "GNU இயக்கம் மற்றும் Linux"
weight: 23
date: 2026-01-01
draft: false
phase: "4 — மென்பொருள் அடித்தளங்கள்: OS, மொழிகள் மற்றும் Real-Time அமைப்புகள்"
series_index: 23
tags: []
summary: "Unix மூடியது; Stallman இலவச userland கட்டினார்; Torvalds kernel இடைவெளியை நிரப்பினார் — GPL சேர்க்கையைத் திறந்ததாக வைத்தது"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

1980களின் ஆரம்பத்தில், Unix (பதிவு 22) தொழில்நுட்பரீதியாகச் சிறந்ததாகவும் அதிகரித்து proprietary-ஆகவும் இருந்தது — AT&T வணிகக் கட்டுப்பாட்டை உறுதிப்படுத்தி, கல்வி மற்றும் பொழுதுபோக்கு அணுகல் இறுக்கமடைந்தது. Richard Stallman-இன் பதில், 1983-இல் தொடங்கி, முதன்மையாகத் தொழில்நுட்பத் தீர்வு அல்ல. அது கருத்தியல் மற்றும் சட்டம்: முழுமையாக இலவச (சுதந்திரம் என்ற அர்த்தத்தில், விலை மட்டும் அல்ல) Unix மாற்றீட்டை புதிதாகக் கட்டுங்கள், மற்றும் அதை அவ்வாறே வைத்திருக்க வடிவமைக்கப்பட்ட license-ஆல் ஆதரியுங்கள்.

## GNU: Kernel இல்லாத Userland

GNU — "GNU's Not Unix" — ஒவ்வொரு கூறும் இலவச மென்பொருளாக இருக்கும் முழுமையான, Unix-இணக்க operating system கட்ட அமைந்தது: பயன்படுத்தக்கூடியது, மாற்றக்கூடியது, மறுவிநியோகம் செய்யக்கூடியது, உங்கள் சொந்த மாற்றங்களின் மறுவிநியோகம் உட்பட. அடுத்த தசாப்தத்தில் திட்டம் அத்தியாவசிய உள்கட்டமைப்பை உருவாக்கியது: GCC (இன்னும் மிகப் பரவலாகப் பயன்படுத்தப்படும் compilers ஒன்று — பதிவு 28), Bash, GNU coreutils, Emacs, மற்றும் மேலும் பல.

GNU ஆண்டுகளாக இல்லாதது: வேலை செய்யும் kernel. அதன் திட்டமிட்ட kernel, GNU Hurd, கடுமையான தொழில்நுட்பச் சிக்கல்களில் சிக்கி பரந்த நடைமுறைப் பயன்பாட்டை எட்டாதது. முழுமையான userland; உண்மையான வன்பொருளுக்குக் கீழே kernel இல்லை.

## GPL: Copyright வெளிநோக்கித் திருப்பப்பட்டது

Stallman-இன் மற்றொரு முக்கிய பங்களிப்பு GNU General Public License (GPL) — வேண்டுமென்றே ஒரு பண்பு கொண்ட "copyleft" license: GPL-licensed குறியீட்டை உள்ளடக்கிய மென்பொருளை நீங்கள் விநியோகித்தால், உங்கள் மாற்றப்பட்ட மூலத்தை அதே நிபந்தனைகளின் கீழ் கிடைக்கச் செய்ய வேண்டும். பொதுவாக மறுவிநியோகத்தை *கட்டுப்படுத்தும்* கருவியான copyright, ஒவ்வொரு derivative வழியாகவும் சுதந்திரம் பரவுவதை உறுதிப்படுத்தப் பயன்படுத்தப்பட்டது — கீழ்நிலை வணிக fork அமைதியாக மூடுவதற்குப் பதிலாக.

## Linux இடைவெளியை நிரப்புகிறது

1991-இல், பின்லாந்து மாணவர் Linus Torvalds தன் சொந்த PC-க்கான தனிப்பட்ட திட்டமாக ஒரு kernel தொடங்கினார். அந்த ஆண்டு தன் சொந்த கட்டுப்படுத்தும் non-commercial license-இன் கீழ் வெளியிட்டார், பிறகு — முக்கியமாக — 1992 ஆரம்பத்தில் GPL-இன் கீழ் மறுlicense செய்தார். அந்தச் சேர்க்கை காணாமல் போன துண்டு: GNU-க்கு முதிர்ந்த userland இருந்தது, நடைமுறை kernel இல்லை; Linux செயல்படும் kernel, அடிப்படையில் userland இல்லை. சேர்ந்து, Linux kernel மீது GNU utilities முழுமையான, இலவசமாக license செய்யப்பட்ட, Unix-இணக்க அமைப்பை உருவாக்கின — பொதுவாக "Linux" என்று அழைக்கப்படுகிறது, இருப்பினும் "GNU/Linux" சேர்க்கைக்கு வரலாற்றுரீதியாகத் துல்லியமான பெயர் (Stallman-இன் அவ்வப்போதைய பொது விரக்திக்கு).

**இப்போது முயல்க.** கீழே உள்ள VM-ஐ boot செய்து, திரையைக் கிளிக் செய்து, பிறகு `uname`, `whoami`, மற்றும் `ls` முயல்க — உங்கள் உலாவியில் அந்தச் சேர்க்கையின் GNU/Linux பக்கத்தில் இருக்கிறீர்கள்.

{{< lab type="vm-terminal" height="600" >}}

## இந்தச் சேர்க்கை ஏன் வென்றது

GPL-இன் கட்டமைப்பு நிறுவனங்கள் அடிப்படை தளத்தை அமைதியாக மூடாமல் Linux சுற்றி வணிகத் தயாரிப்புகளைக் கட்ட அனுமதித்தது — kernel மாற்றங்கள் அதே நிபந்தனைகளின் கீழ் மூலமாகக் கிடைக்க வேண்டும். அது நீடித்த நம்பிக்கையையும், இறுதியில் நீடித்த *நிறுவன* பங்களிப்பையும் கட்டியது: ஒரு போட்டியாளரால் பிடிக்கப்படுவதற்குப் பதிலாகத் தளம் திறந்தே இருக்கும் என்று நிறுவனங்கள் நம்பலாம். இலவசம், வணிகப் பயன்பாட்டிற்குத் திறந்தது, அவ்வாறே இருக்க சட்டரீதியாகக் கட்டமைக்கப்பட்டது — Linux சேவையகங்கள், cloud உள்கட்டமைப்பு, Android, மற்றும் நவீன இணையத்தின் முதுகெலும்பின் பெரும்பகுதிக்குக் கீழே ஆதிக்க kernel ஆனதின் பெரும் பகுதி, ஒரு மாணவரின் தனிப்பட்ட திட்டத்தைத் தாண்டி.

**Door out:** The GNU General Public License (Free Software Foundation) — copyleft-ஐ அமல்படுத்திய முதன்மை சட்ட உரை; திட்டத்தின் கூறப்பட்ட இலக்குக்கு Stallman-இன் GNU Manifesto (1985) உடன் படியுங்கள்.

## மேலும் படிக்க

- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 4: இயக்க அமைப்பின் கோட்பாட்டு கருத்துக்கள் (Ubuntu GNU/Linux விநியோகமாக அறிமுகம்)
- தமிழ்நாடு அரசு, *11ஆம் வகுப்பு கணினி அறிவியல்*, அலகு 5: வழக்கமான இயக்க அமைப்புடன் பணிபுரிதல் (Linux / Linus Torvalds / திறந்த மூலம் — GPL வரலாறு அல்ல)

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

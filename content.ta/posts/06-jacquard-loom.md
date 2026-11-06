---
title: "Jacquard தறி"
weight: 6
date: 2026-01-01
draft: false
phase: "1 — அடித்தளங்கள்: இயந்திரத்திலிருந்து வெற்றிடக் குழாய் கணினி வரை"
series_index: 5
aliases:
  - /posts/01b-jacquard-loom/
  - /posts/04-jacquard-loom/
tags: []
summary: "பஞ்ச் கார்டுகள் நிரலை, அதை இயக்கும் இயந்திரத்திலிருந்து பிரித்தன"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

பஞ்ச் கார்டு கட்டுப்பாட்டை Babbage கண்டுபிடிக்கவில்லை. அவர் அதைக் கடன் வாங்கினார்.

> **தமிழ் இடைவெளிக் குறிப்பு:** Jacquard தறி / பஞ்ச் கார்டுகள் பற்றித் தமிழில் பெயர் குறிப்பிடக்கூடிய எழுத்து விளக்கம் எங்களுக்குக் கிடைக்கவில்லை; எனவே "மேலும் படிக்க" பகுதி இல்லை. தமிழ் வாசகர்களுக்கு நெருக்கமான எடுத்துக்காட்டு: பட்டுப் புடவை நெசவின் கைத்தறி வடிவ அட்டைகள் (பார்க்க: [பட்டுக்கான வடிவ அட்டைகள்]({{< relref "04-take-silk-cards.md" >}})). தேதிகளும் இயக்க விவரமும் Computer History Museum-இன் "[1801: Punched cards control Jacquard loom](https://www.computerhistory.org/storageengine/punched-cards-control-jacquard-loom/)", Manchester Science and Industry Museum-இன் "[The story of the Jacquard loom](https://www.scienceandindustrymuseum.org.uk/objects-and-stories/jacquard-loom)" ஆகியவற்றிலிருந்து சரிபார்க்கப்பட்டவை; Lovelace மேற்கோள்கள் fourmilab.ch-இல் உள்ள அவரது *Notes*-இன் முழு உரையிலிருந்து.

## முதலில் சொற்கள்

- **பாவு / ஊடை (warp / weft):** தறியில் நீளவாக்கில் இழுத்துக் கட்டப்பட்ட இழைகள் பாவு; அவற்றின் குறுக்கே ஷட்டில் கொண்டு செல்லும் இழை ஊடை.
- **ஷட்டில் (shuttle):** ஊடை இழையைப் பாவு இழைகளுக்கு இடையே குறுக்காகக் கொண்டு செல்லும் கருவி.
- **கொக்கி (hook):** ஒரு பாவு இழையை (அல்லது இழைக் குழுவை) மேலே தூக்கும் பாகம்.
- **அட்டைச் சங்கிலி (card chain):** ஒன்றோடொன்று கட்டப்பட்ட பஞ்ச் கார்டுகள்; ஒவ்வொரு ஷட்டில் வீச்சுக்கும் ஓர் அட்டை.
- **நிரல் (program):** இயந்திரத்திலிருந்து தனியாக வைக்கப்பட்ட அறிவுறுத்தல்களின் வரிசை.

## துளை → தூக்கு, துளையில்லை → தடு

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="Saint-Étienne, Musée d'art et d'industrie-இல் உள்ள குறுகிய Jacquard தறி" loading="lazy" width="1280">
<figcaption>Jacquard தறி, Musée d'art et d'industrie, Saint-Étienne. படம்: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

Jacquard-க்கு முன், வடிவத் துணி நெய்ய ஒரு உதவியாளர் ("draw boy") drawloom முறையில் தறியின் மேல் அமர்ந்து, ஒவ்வொரு வீச்சுக்கும் எந்தப் பாவு இழைகளைத் தூக்க வேண்டும் என்று கையால் இழுக்க வேண்டியிருந்தது — மெதுவான, சோர்வான வேலை. Joseph-Marie Jacquard-இன் பொறி ஒரு தறியே அல்ல; drawloom-இன் draw boy பணியை ஏற்கும் **தறி இணைப்பு** (loom attachment). அவர் 1801-இல் Lyon-இல் அதைக் காட்டினார் (CHM). Manchester Science and Industry Museum காப்புரிமையை 1804 என்கிறது; Musée des Arts et Métiers 23 திசம்பர் 1801 காப்புரிமையைப் பதிவு செய்கிறது. தறியின் மேல் பொருத்தப்பட்ட அவரது பொறி, ஒன்றோடொன்று கட்டப்பட்ட பஞ்ச் கார்டுகளின் சங்கிலியைப் படித்தது.

<!-- UNVERIFIED: Jacquard patent year | SI Museum "patented … in 1804"; Musée des Arts et Métiers model note: brevet 23 Dec 1801; napoleon.org same 1801 brevet + 1804 gold medal. We state both museum dates. -->

ஒவ்வொரு வீச்சுக்கும் ஒரு அட்டை ஊசிகளின் வரிசைக்கு எதிராகத் தள்ளப்படுகிறது. துளை இருக்கும் இடத்தில் ஊசி கடந்து செல்கிறது, அதன் கொக்கி பாவு இழையைத் **தூக்குகிறது**. துளை இல்லாத இடத்தில் ஊசி அட்டையில் மோதி நின்றுவிடுகிறது; அந்த இழை **தூக்கப்படுவதில்லை**. பிறகு ஷட்டில், தூக்கிய இழைகளுக்குக் கீழாகவும் மற்றவற்றுக்கு மேலாகவும் ஊடையைக் கொண்டு செல்கிறது. அடுத்த அட்டை, அடுத்த வரிசை.

அட்டைகளை மாற்றினால் வடிவம் மாறுகிறது. தறிக்கு "பட்டு brocade" என்றால் என்னவென்று தெரியாது; உடல் ரீதியாகக் குறியிடப்பட்ட, நிலையான "தூக்கு / தூக்காதே" முடிவுகளின் வரிசையை அது செயல்படுத்துகிறது, அவ்வளவே.

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="Manchester, Museum of Science and Industry-இல் Jacquard தறியின் பஞ்ச் கார்டுகளின் அண்மைப் படம்" loading="lazy" width="249">
<figcaption>Jacquard தறியில் பஞ்ச் கார்டுகள் (Museum of Science and Industry, Manchester). படம்: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, பொதுக் களம் (public domain).</figcaption>
</figure>

### செய்து காட்டும் எடுத்துக்காட்டு (எடுத்துக்காட்டு மதிப்புகள்)

8 பாவு இழைகள் கொண்ட ஒரு சிறு தறி என்று வைத்துக்கொள்வோம். ஒவ்வோர் அட்டையிலும் 8 இடங்கள்; ● = துளை (தூக்கு), ○ = துளையில்லை (தடு).

| அட்டை | இழை 1–8 | தூக்கப்படும் இழைகள் |
|---|---|---|
| 1 | ●○○○○○○● | 1, 8 |
| 2 | ○●○○○○●○ | 2, 7 |
| 3 | ○○●○○●○○ | 3, 6 |
| 4 | ○○○●●○○○ | 4, 5 |

நான்கு அட்டைகளையும் வரிசையாக ஓட்டினால், துணியில் ஒரு "V" போன்ற சாய்வு வடிவம் வருகிறது. அட்டைச் சங்கிலியைத் தலைகீழாக (4, 3, 2, 1) ஓட்டினால் அது "Λ" ஆகிறது. தறி மாறவில்லை; நெசவாளரின் கைகளும் மாறவில்லை. மாறியது அட்டைகள் மட்டுமே.

## Babbage எடுத்துக்கொண்ட கருத்து

பகுப்புப் பொறிக்கு Babbage எடுத்துக்கொண்ட abstraction இதுதான்: **நிரல் என்பது அறிவுறுத்தல்களின் வரிசை; அதை இயக்கும் இயந்திரத்திலிருந்து அது தனி.** CHM-உம் Science Museum-உம் இதை நேரடியாகவே சொல்கின்றன: பகுப்புப் பொறி பஞ்ச் கார்டுகளால் நிரலிடப்பட்டது — Jacquard தறியிலிருந்து கடன் வாங்கிய யோசனை.

Ada Lovelace அந்தப் பிரிப்பு எதைக் குறிக்கிறது என்று கண்டார். Luigi Menabrea பகுப்புப் பொறி பற்றி எழுதிய கட்டுரையை அவர் மொழிபெயர்த்து, அதனுடன் நீண்ட *Notes* சேர்த்து 1843-இல் வெளியிட்டார். சரியான அட்டைகளை வடிவமைத்தால், இயந்திரம் எண்களை மட்டுமல்ல, *எந்தக்* குறியீடுகளையும் கையாளலாம் என்பது அவரது வாதம் — அவரது சொற்களில், அது "எண்ணைத் தவிர வேறு பொருட்களின் மீதும் செயல்படலாம்" ("might act upon other things besides number"). தறியோடு அவர் வரைந்த ஒப்புமை இந்தப் பக்கத்தின் சுருக்கம்: "Jacquard தறி பூக்களையும் இலைகளையும் நெய்வதுபோல, பகுப்புப் பொறி இயற்கணித வடிவங்களை நெய்கிறது" ("the Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves"). அவரது Note G-இல் Bernoulli எண்களைக் கணக்கிடுவதற்கான படிமுறை உள்ளது — இது பெரும்பாலும் வெளியிடப்பட்ட முதல் கணினி நிரல் என்று அழைக்கப்படுகிறது.

**வெளியே செல்லும் கதவு:** Menabrea கட்டுரைக்கான Ada Lovelace-இன் *Notes* (மொழிபெயர்ப்புடன்) — Bernoulli எண் வரைவுக்கும் "எந்தக் குறியீடுகளும்" வாதத்துக்கும் முதன்மை உரை: [fourmilab.ch/babbage/sketch.html](https://www.fourmilab.ch/babbage/sketch.html).

அடுத்து: இந்த இயந்திர அத்தியாயம் ஏன் பின்வரும் அனைத்தையும் இன்னும் வடிவமைக்கிறது — பல்சக்கரங்கள் மட்டும் ஏன் அளவில் வளர முடியவில்லை.

## காகிதப் பயிற்சிகள் (விடைகளுடன்)

1. 6 இழைத் தறியில் அட்டை ●●○○●● என்றால் எந்த இழைகள் தூக்கப்படும்?
   **விடை:** 1, 2, 5, 6.
2. மேலே உள்ள 4 அட்டை எடுத்துக்காட்டில், அட்டை 2-ஐ மட்டும் ●●○○○○●● ஆக மாற்றினால் தறியில் எதை மாற்ற வேண்டும்?
   **விடை:** எதையும் இல்லை. அட்டையை மட்டுமே மாற்றுகிறோம் — நிரல் இயந்திரத்திலிருந்து தனி.
3. Jacquard தறியில் "நிரல்", "இயந்திரம்", "விளைவு" எவை?
   **விடை:** அட்டைச் சங்கிலி; தறியும் அதன் கொக்கிப் பொறியும்; நெய்த வடிவம்.

## சொற்கள்

| தமிழ் | English |
|---|---|
| தறி | loom |
| பாவு / ஊடை | warp / weft |
| ஷட்டில் | shuttle |
| கொக்கி | hook |
| அட்டைச் சங்கிலி | card chain |
| வடிவத் துணி | patterned cloth / brocade |
| நிரல் | program |
| குறியீடு | symbol |

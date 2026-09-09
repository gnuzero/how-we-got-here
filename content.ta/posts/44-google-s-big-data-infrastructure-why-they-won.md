---
title: "Google-இன் Big Data Infrastructure — அவர்கள் ஏன் வென்றார்கள்"
weight: 44
date: 2026-01-01
draft: false
phase: "7 — விநியோகிக்கப்பட்ட அமைப்புகள், Big Data மற்றும் Orchestration"
series_index: 44
tags: []
summary: "Web-அளவு தரவு failure-as-normal சேமிப்பைக் கட்டாயப்படுத்தியது, பிறகு cluster-ஐ மறைத்த நிரலாக்க மாதிரி — GFS, MapReduce, Bigtable"
image_prompt: "System diagram of the Google File System with chunkservers and a master node, alongside a MapReduce job splitting into map and reduce phases across a cluster, clean distributed-systems textbook diagram style"
video_prompt: "25-second animation: a large dataset being split across chunkservers in a distributed file system, then processed in parallel by a MapReduce job and recombined, clean technical animation"
schematics: "Diagram: GFS architecture (master/chunkserver) + MapReduce data flow (map→shuffle→reduce) + Bigtable sparse table model"
---

1990களின் இறுதியில் பல நிறுவனங்கள் web தேடலைக் கட்டின. Google ranking நுணுக்கத்தால் மட்டும் வெல்லவில்லை — PageRank முக்கியம், ஆனால் நீடித்த நன்மை infrastructure: ஒரு இயந்திரம் ஒருபோதும் போதாதபோது தொடர்ந்து மாறும் web-ஐச் சேமித்துச் செயலாக்க முடியும் அமைப்புகள்.

## கட்டுப்பாடு: Web ஒற்றை Box-ஐ விஞ்சினது

"முழு web"-ஐ index செய்வது என்பது எந்த ஒற்றை disk அல்லது memory-ஐயும் விடப் பெரிய dataset — ஒருமுறை எடுக்கப்பட்ட snapshot அல்ல, தொடர்ந்து வருவது. Phase 3 *ஒரு* இயந்திரத்தை வேகமாக்கியது. இந்தப் பிரச்சனை வேறு: *பல* இயந்திரங்களை ஒருங்கிணைத்து, எந்த ஒன்றிற்கும் மிகப் பெரிய ஒன்றை அவை கூட்டாக வைத்துச் செயலாக்கச் செய்யுங்கள்.

## Failure சாதாரணம் — எனவே Storage அதைக் கருத வேண்டியிருந்தது

Google File System (Ghemawat, Gobioff, மற்றும் Leung, SOSP 2003) பெரும்பாலான filesystems இன்னும் விதிவிலக்காகக் கருதிய வடிவமைப்பு அனுமானத்திலிருந்து தொடங்கியது: ஆயிரக்கணக்கான commodity இயந்திரங்களுடன், வன்பொருள் failure வழக்கம். கோப்புகளைப் பெரிய chunks-ஆகப் பிரிங்கள், ஒவ்வொரு chunk-ஐயும் chunkservers குறுக்கே replicate செய்யுங்கள், மற்றும் chunks எங்கே வாழ்கின்றன என master கண்காணிக்கட்டும் — எனவே ஒரு இயந்திரத்தை இழப்பது தானாக உறிஞ்சப்படுகிறது, நெருக்கடியாகக் கையாளப்படுவதில்லை. அது பதிவு 42-இன் fabric பணி datacenter-க்குள் செய்யும் அதே *வகை* பந்தயம்: பகுதி failure-இன் பொதுவான வழக்கிற்குப் பொறியியல் செய்யுங்கள்.

## Cluster-ஐ மீண்டும் கண்டுபிடிக்காமல் செயலாக்கம்

சேமிப்பு மட்டும் போதாது. அந்த அளவில் செயலாக்கத்திற்கு ஒவ்வொரு பொறியாளரும் distribution மற்றும் recovery-ஐ மீண்டும் கண்டுபிடிக்காதபடி ஒரு நிரலாக்க மாதிரி தேவைப்பட்டது. MapReduce (Dean மற்றும் Ghemawat, OSDI 2004) இரண்டு hooks கொடுத்தது — ஒரு record-இலிருந்து key-value pairs வெளியிடும் **map**, மற்றும் ஒரு key பகிரும் values-ஐத் தொகுக்கும் **reduce** — மற்றும் *அமைப்பு* split, parallel map, key-ஆல் shuffle/sort, parallel reduce, மற்றும் தோல்வியுற்ற tasks-இன் retry-ஐக் கையாண்டது. கட்டுப்பாடு உடல் அளவுக்கு அறிவார்ந்ததும்: cluster-ஐ மறைத்து வேலையின் தர்க்கம் சிறியதாக இருக்கட்டும்.

## மலிவான Bytes மீது அமைப்பு

Bigtable (Chang et al., OSDI 2006) தொடர்புடைய தேவைக்குப் பதிலளித்தது: web அளவில் sparse structured storage — rows URLs ஆக, columns crawled versions அல்லது metadata ஆக, பெரும்பாலான cells காலி — அடியில் GFS மீது கட்டப்பட்டது. வடிவமைப்பு தொழில் பின்னர் NoSQL என அழைத்ததில் பெரும்பகுதியை வடிவமைத்தது; இணைப்புத் திசு ஒன்றுதான்: failure-tolerant bulk storage மற்றும் batch நிரலாக்க மாதிரி இருந்தவுடன், structured அணுகல் அடுத்த கட்டாய அடுக்கு ஆகிறது.

## இது ஏன் Moat ஆனது

போட்டியாளர்கள் ranking கருத்துகளை நகலெடுக்க முடியும். Commodity வன்பொருளில் முழு web-ஐச் சேமித்து, செயலாக்கி, தொடர்ந்து மீண்டும் index செய்யும் திறனை — இயந்திர இறப்பை சாதாரணமாகக் கருதி — பிரதிபண்ணுவது மிகக் கடினம். Hadoop மற்றும் பிந்தைய "big data" stack Google-இன் உள் code இல்லாமலே *வெளியிடப்பட்ட* papers-ஐப் பின்தொடர்ந்தன: papers அந்த வகைப் பிரச்சனையை எப்படித் தீர்ப்பது எனக் காட்டின.

Batch map/reduce சக்திவாய்ந்ததும் கடினமானதும். அடுத்த பதிவு *செயலாக்கும்* விநியோகிக்கப்பட்ட தரவிலிருந்து, முதிர்ந்த விநியோகிக்கப்பட்ட அமைப்பு ஆன பல சேவைகளை *deploy செய்து குணப்படுத்துவதற்கு* திரும்புகிறது.

**Door out:** Sanjay Ghemawat, Howard Gobioff, மற்றும் Shun-Tak Leung, "The Google File System" (SOSP 2003); Jeffrey Dean மற்றும் Sanjay Ghemawat, "MapReduce: Simplified Data Processing on Large Clusters" (OSDI 2004); Fay Chang et al., "Bigtable: A Distributed Storage System for Structured Data" (OSDI 2006) — இந்த infrastructure கதையின் பின்னால் உள்ள மூன்று முதன்மைகள்.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

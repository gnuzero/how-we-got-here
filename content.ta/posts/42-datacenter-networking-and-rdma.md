---
title: "Datacenter Networking மற்றும் RDMA"
weight: 42
date: 2026-01-01
draft: false
phase: "6 — வலையமைப்பு பரிணாமம்"
series_index: 42
tags: []
summary: "ஒரு கட்டுப்படுத்தப்பட்ட fabric-க்குள், kernel நகல்கள் வரியாகும் — RDMA மற்றும் topology கம்பியை மீண்டும் வாங்கும்"
image_prompt: "System diagram comparing a traditional TCP/IP data path against an RDMA kernel-bypass data path, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data copied multiple times through the kernel vs a direct RDMA transfer bypassing the CPU, clean comparative animation — ties to BridgeStack GPU memory fabric"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP kernel-bypass comparison + RDMA verbs data path + fat-tree datacenter topology"
---

TCP/IP (பதிவு 41) பன்முக, நம்பகமற்ற, உலகளாவிய வலையமைப்புக்குச் சரியான முதுகெலும்பு. ஒரு datacenter-க்குள் — ஒரு உரிமையாளர், குறுகிய தூரங்கள், பொறியியல் செய்யப்பட்ட fabric — அதே kernel-மத்தியஸ்த பாதை ஒவ்வொரு மைக்ரோவினாடியையும் ஒவ்வொரு byte bandwidth-ஐயும் செலவிடும் workloads-க்கு overhead போல் தோன்றத் தொடங்குகிறது.

## Overhead எங்கிருந்து வருகிறது

பாரம்பரிய TCP/IP send application தரவை kernel buffer-க்கு நகலெடுக்கிறது, stack-ஐ ஓட்டுகிறது, மற்றும் NIC transmit செய்ய அனுமதிக்கிறது — receive-இல் கண்ணாடி. ஒவ்வொரு படியும் CPU சுழற்சிகளைச் செலவழிக்கிறது, மற்றும் latency-க்கு மோசமாக, நினைவக இடங்களுக்கு இடையே உண்மையான *நகல்கள்*. சாதாரண web போக்குவரத்துக்கு நல்லது. வினாடிக்குப் பல முறை gradients பரிமாறும் HPC அல்லது distributed ML training-க்கு விலை உயர்ந்தது.

## RDMA: Data Path-இலிருந்து Kernel மற்றும் CPU வெளியே

RDMA (Remote Direct Memory Access) ஒரு இயந்திரம் மற்றொன்றின் நினைவகத்தை receiver-இன் CPU அல்லது kernel பரிமாற்றத்தை babysit செய்யாமல் படிக்க அல்லது எழுத அனுமதிக்கிறது. RDMA-திறன் adapter bytes-ஐ வலையமைப்பு குறுக்கே memory-to-memory நகர்த்துகிறது. பதிவு 37-இன் GPUDirect RDMA-இன் அதே கருத்து — குறைந்த நகல்கள், compute-க்கு விடுவிக்கப்பட்ட CPU — ஒரு node-இல் GPU-களுக்கு இடையே மட்டும் அல்ல, முழு இயந்திரங்களுக்கு இடையே பயன்படுத்தப்பட்டது.

## Fat-Tree: ஆயிரக்கணக்கை சமமாக வயரிங் செய்தல்

ஆயிரக்கணக்கான இயந்திரங்களில், topology bandwidth உண்மையா அல்லது விளம்பரப்படுத்தப்பட்டதா என்பதைத் தீர்மானிக்கிறது. ஒரு fat-tree switches-ஐ அமைக்கிறது, சுமைக்குக் கீழே மட்டும் தோன்றும் bottleneck இணைப்புகளை மறைக்காமல், படிநிலையில் மேலே கொள்ளளவு முன்னறிவிக்கக்கூடியபடி அளவிடும். பெரிய training clusters (Phase 10) அந்த வேண்டுமென்ற சிந்தனையுடன் வயர் செய்யப்படுகின்றன — ad-hoc வசதி அல்ல.

## இந்தத் தொடரின் Fabric பணியின் அதே தத்துவம்

தேவையற்ற நகல்களை அகற்றுங்கள்; தேவையில்லாத இடத்தில் kernel-ஐ bypass செய்யுங்கள்; topology அனுமதிக்கும் அளவுக்கு நேரடியாக வன்பொருள் தரவை நகர்த்தட்டும். பதிவு 37 அதை GPU nodes-க்குள்ளும் குறுக்கேயும் பயன்படுத்தியது; இந்தப் பதிவு அதை இயந்திரத்திலிருந்து-இயந்திர வலையமைப்புக்குப் பயன்படுத்துகிறது. ஒன்றாக அவை Phase 7-இன் விநியோகிக்கப்பட்ட அமைப்புகளுக்கு ஒப்படைக்கின்றன — pre-web இணையத்தின் சொந்த ஆரம்ப find-and-talk அமைப்புகளுடன் தொடங்கி.

{{< lab type="vm-terminal" >}}

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

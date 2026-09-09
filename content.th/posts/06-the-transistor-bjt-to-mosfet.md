---
title: "ทรานซิสเตอร์: จาก BJT สู่ MOSFET"
weight: 7
date: 2026-01-01
draft: false
phase: "2 — ฟิสิกส์และอุปกรณ์"
series_index: 6
tags: []
summary: "BJT ที่ควบคุมด้วยกระแสเผาพลังงานว่าง; MOSFET ที่ควบคุมด้วยแรงดันทำให้ความหนาแน่นเป็นไปได้"
image_prompt: "Side-by-side cross-section diagrams of BJT and MOSFET, labeled, clean semiconductor engineering textbook style"
video_prompt: "25-second animation: MOSFET cross-section with gate voltage rising, inversion layer forming, clean technical animation"
schematics: "Diagram: BJT cross-section + MOSFET cross-section labeled, I-V characteristic curve"
---

สองตระกูลอุปกรณ์ต่างเรียกว่า "ทรานซิสเตอร์" พวกมันสลับด้วยฟิสิกส์ต่างกัน — และมีเพียงตระกูลเดียวที่ขยายไปถึงทรานซิสเตอร์พันล้านตัวบนไดสมัยใหม่ได้

## BJT: กระแสควบคุมกระแส

Bipolar junction transistor (NPN: emitter แบบ N, base แบบ P, collector แบบ N) ใช้กระแส base *เล็กน้อย* ควบคุมกระแส collector–emitter ที่ใหญ่กว่า เพื่อค้างมันให้อยู่ในสถานะเปิด คุณต้องจ่ายกระแส base ต่อไป ที่ระดับชิปต้นทุนว่างนั้นสะสม: ตระกูลตรรกะไบโพลาร์ในทศวรรษ 1970 ชนกำแพงความร้อนจริงจาก dissipation สถิตเพียงอย่างเดียว แม้เกตไม่ได้สลับอยู่

## MOSFET: แรงดันควบคุมช่องทาง

MOSFET วางเกตโลหะ (หรือโพลีซิลิคอน) ทับซิลิคอน แยกด้วยออกไซด์บาง — SiO₂ ที่เสถียรจากบทที่ 5 แรงดันเกตไม่ได้ผลักกระแส *ผ่าน* เกต; ออกไซด์บล็อก DC มันสร้างสนามที่ก่อหรือลบช่องทางนำไฟฟ้าระหว่าง source กับ drain สำหรับ NMOS แรงดันเกตบวกดึงอิเล็กตรอนเข้า inversion layer ในตัว P-type; กระแสไหล ลดแรงดันเกต ช่องทางหาย กระแสหยุด

**เกตแทบไม่ดึงกระแสในสถานะคงที่** เมื่อตัวเก็บประจุเกตชาร์จเต็มแล้ว การค้างอุปกรณ์ให้อยู่ในสถานะเปิดแทบไม่เสียอะไร นั่นตรงข้ามกับกระแส base ต่อเนื่องของ BJT

## เหตุใด MOSFET จึงชนะสำหรับตรรกะดิจิทัล

กระแสเกตสถิตที่เกือบศูนย์คือเรื่องราวทั้งหมด CMOS (บทที่ 7) สร้างบนมันเพื่อให้กระแสที่มีนัยสำคัญไหลหลัก ๆ *ขณะสลับ* ไม่ใช่ขณะค้างสถานะ นั่นคือสิ่งที่ให้จำนวนทรานซิสเตอร์ไต่จากพันเป็นพันล้านโดยไม่ทำให้ไดละลาย — ส่วนโค้งการขยายขนาดที่เฟส 8 รับกลับที่ความละเอียดโหนดกระบวนการ

BJT ไม่ได้หายไป: ยังสำคัญที่ซึ่งการขับกระแสหรือความเป็นเชิงเส้นแบบแอนะล็อกชนะความหนาแน่น สำหรับตรรกะดิจิทัลในระดับจริงจัง ฟิสิกส์พลังงานว่างของ MOSFET ทำให้มันเป็นทางเดียวที่ใช้ได้ — และทุกเกตในบทถัดไปสร้างจากมัน

**ประตูออก:** งาน silicon MOSFET ปี 1960 ของ D. Kahng และ M. M. Atalla (Bell Labs / IRE–AIEE Solid-State Device Research Conference) — อุปกรณ์ field-effect เชิงปฏิบัติที่ทำให้การควบคุมด้วยแรงดันผ่านเกตออกไซด์กลายเป็นมาตรฐานดิจิทัล

## อ่านเพิ่ม / อ้างอิง
- ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*
- เพื่อชาติ สุขเรือน, *การวิเคราะห์วงจรทรานซิสเตอร์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

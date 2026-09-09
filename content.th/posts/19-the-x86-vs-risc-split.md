---
title: "การแยกทางของ x86 กับ RISC"
weight: 20
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 19
tags: []
summary: "RISC สะอาดกว่าบนกระดาษ — การล็อกอินซอฟต์แวร์และการแปล µop คง x86 ไว้บนยอด"
image_prompt: "Family-tree infographic branching CISC/RISC research into x86, MIPS, SPARC, PowerPC lineages, clean genealogy diagram style"
video_prompt: "20-second animation: a decision-tree splitting into CISC and RISC branches, clean motion graphics"
labs: ["mini-cpu"]
schematics: "Diagram: ISA family tree + instruction complexity comparison table"
---

บทที่ 11 ตั้งชื่อ CISC และ RISC เป็นปรัชญา บทนี้คือสิ่งที่เกิดขึ้นเมื่อพวกมันแข่งเชิงพาณิชย์ — และเหตุใด ISA ที่ "สะอาดกว่า" จึงไม่ได้ชนะอย่างตรงไปตรงมา

## ข้อโต้แย้งของ RISC

ต้นทศวรรษ 1980: RISC เป็นปฏิกิริยาต่อความซับซ้อนของ CISC — งานที่ Berkeley ไปทาง SPARC, Stanford ไปทาง MIPS, งานของ IBM ที่ป้อน POWER/PowerPC ข้ออ้างเป็นเชิงประจักษ์: ops ของ CISC ที่ซับซ้อนมักแทบไม่ถูกใช้ในโค้ดที่คอมไพล์แล้ว ขณะที่ฮาร์ดแวร์ดีโค้ดที่ต้องรองรับพวกมันเสียซิลิคอนและทำให้ไปป์ไลน์ที่เฟสนี้กล่าวแล้วซับซ้อน ตัด ISA ให้เหลือคำสั่งเรียบง่าย ความยาวคงที่ สม่ำเสมอ; ใช้ซิลิคอนนั้นกับรีจิสเตอร์ ไปป์ไลน์ที่เร็วกว่า แคชที่ดีกว่าแทน

MIPS, SPARC และ PowerPC ล้วนวางจำหน่าย ช่วงหนึ่งพวกมันชนะ x86 บนเบนช์มาร์กเชิงคำนวณดิบ โดยเฉพาะเวิร์กสเตชันและเซิร์ฟเวอร์

## เหตุใด x86 จึงครองพื้น

ข้อได้เปรียบของ x86 ไม่เคยใช่ความสง่างาม — มันคือซอฟต์แวร์ที่นั่งอยู่บนความเข้ากันได้กับ IBM PC แล้ว เมื่อนั้นกลายเป็นมาตรฐานเดสก์ท็อป มีฐานติดตั้งมหาศาลที่รันได้เฉพาะบน x86 ความเข้ากันได้ย้อนหลังกลายเป็นคูน้ำ: ชิปใหม่ต้องรันไบนารีเก่า ดังนั้น ISA จึงออกแบบใหม่แบบ RISC อย่างสะอาดไม่ได้ — ขยายได้เท่านั้น ทีละ wart ขณะที่ Intel และต่อมา AMD ทำให้ *implementation* เร็วแม้พื้นผิวจะซับซ้อน

การคลี่คลายจริง: x86 สมัยใหม่ไม่ได้ประมวลผล ops ของ CISC โดยตรงในคอร์นอกลำดับ ดีโค้ดเดอร์แปลแต่ละคำสั่ง x86 เป็นหนึ่งหรือหลายไมโคร-ออปภายในรูปแบบคงที่ (µops) — แบบ RISC — และ *พวกนั้น* ไหลผ่าน reservation stations, ROB และหน่วยประมวลผลจากบทที่ 16 ภายนอก: เข้ากันได้กับ CISC ภายใน: ไปป์ไลน์แบบ RISC ใต้ชั้นแปล

## รูปแบบที่ต้องเก็บไว้

ISA ที่ชนะแทบไม่เคยชนะด้วยคุณค่าทางเทคนิคเพียงอย่างเดียว ความเข้ากันได้ การล็อกอินระบบนิเวศ และขนาดการผลิตมักชนะสถาปัตยกรรมที่สะอาดกว่าบนกระดาษ พลวัตเดียวกันปรากฏถัดไปกับโมเดลไลเซนส์ของ ARM เทียบกับ ISA เปิดของ RISC-V — *โมเดลธุรกิจ* รอบชุดคำสั่งสำคัญได้เท่ากับการเข้ารหัส

{{< lab type="mini-cpu" >}}

**ประตูออก:** David A. Patterson และ David R. Ditzel, "The Case for the Reduced Instruction Set Computer" (*Computer Architecture News*, 1980) — แถลงการณ์ด้าน RISC ของการต่อสู้เชิงพาณิชย์นี้

## อ่านเพิ่ม / อ้างอิง
- จันทนา จันทราพรชัย, *สถาปัตยกรรมคอมพิวเตอร์และการออกแบบ*
- ผศ.ดร. ปัทมา ลงกานี, *สถาปัตยกรรมคอมพิวเตอร์*
- รศ.ดร.เกริก ภิรมย์โสภา, *สถาปัตยกรรมคอมพิวเตอร์ การออกแบบและวิเคราะห์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

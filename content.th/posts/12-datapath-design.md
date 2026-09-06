---
title: "การออกแบบ Datapath"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 12
tags: []
summary: "พาทัวร์ CPU แบบ single-cycle"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

ISA (บทที่ 11) คือสเปก Datapath คือฮาร์ดแวร์ทางกายภาพที่ทำให้มันเกิดขึ้น เวอร์ชันที่เรียบง่ายที่สุด — single-cycle datapath — ดำเนินคำสั่งหนึ่งคำสั่งครบต่อหนึ่งรอบคล็อก ตั้งแต่ต้นจนจบ โดยไม่มีไปป์ไลน์ CPU จริงวันนี้ไม่ได้สร้างแบบนี้ แต่เป็นวิธีที่ชัดเจนที่สุดที่จะเห็นว่าชิ้นส่วนจากเฟสก่อนเชื่อมกันอย่างไร

## องค์ประกอบหลัก

**Program Counter (PC):** รีจิสเตอร์ (flip-flop จากบทที่ 9) ที่เก็บที่อยู่ของคำสั่งปัจจุบัน **Instruction Memory:** อ่านอย่างเดียวจากมุมมองของ datapath ถูกดัชนีด้วย PC คืนบิตคำสั่งดิบ **Register File:** แถวรีจิสเตอร์ขนาดเล็ก เร็ว (สร้างจากเซลล์ตระกูล SRAM เดียวกับที่กล่าวถึงแคชในบทที่ 10 จัดต่างกัน) ที่คำสั่งที่ดีโค้ดแล้วอ่านตัวถูกดำเนินการจาก และเขียนผลกลับไป **ALU:** หน่วยเลขคณิต/ตรรกะจากบทที่ 8 ทำการดำเนินการที่คำสั่งระบุ **Data Memory:** สำหรับคำสั่ง load/store เส้นทางไปหน่วยความจำหลัก **Control Unit:** ดีโค้ด opcode และสร้างสัญญาณควบคุมทุกตัว — ALU ทำการดำเนินการใด จะเขียน register file หรือไม่ นี่เป็นการเข้าถึงหน่วยความจำหรือไม่ เป็นต้น

## ตามคำสั่งผ่านไป

เอา ADD ง่าย ๆ รอบเริ่ม: PC ดัชนี instruction memory และบิตคำสั่งออกมา Control unit ดีโค้ด opcode และตัดสินว่านี่คือ ADD ในรูปแบบ register-register Register file ถูกอ่านโดยใช้ฟิลด์รีจิสเตอร์ต้นทางสองฟิลด์ ค่านั้นเข้า ALU ซึ่ง control unit ตั้งค่าไว้สำหรับการบวก ผลของ ALU ไปยังอินพุต write-data ของ register file และฟิลด์รีจิสเตอร์ปลายทางเลือกที่ที่จะเขียน พร้อมกันนั้น PC ถูกเพิ่ม (หรือ สำหรับ branch คำนวณต่างกัน) เพื่อชี้ไปคำสั่งถัดไป Fetch, decode, อ่านรีจิสเตอร์ การดำเนินการ ALU เขียนรีจิสเตอร์ และการอัปเดต PC ทั้งหมดเกิดภายใน *หนึ่ง* รอบคล็อก

## เหตุใด "Single-Cycle" เป็นเครื่องมือสอน ไม่ใช่การออกแบบจริง

สังเกตข้อจำกัด: คาบคล็อกต้องยาวพอสำหรับเส้นทางเต็มของคำสั่งที่ *ช้าที่สุด* ที่เป็นไปได้ผ่านทุกขั้น — แม้สำหรับคำสั่งที่ไม่ต้องการทุกขั้น ADD จากรีจิสเตอร์ไปรีจิสเตอร์ง่าย ๆ ไม่เคยแตะ data memory แต่คาบคล็อกยังต้องรองรับคำสั่งที่แตะ ดังนั้นทุกคำสั่งจึงรันด้วยความเร็วของกรณีแย่สุด ซึ่งเสียปริมาณงานที่อาจได้

นั่นคือปัญหาที่ไปป์ไลน์แก้พอดี: แทนที่จะมีคาบคล็อกยาวหนึ่งคาบที่ขนาดตามกรณีแย่สุด แยกการดำเนินการเป็นขั้น แต่ละขั้นขนาดตามกรณีแย่สุด *ของตัวเอง* และให้คำสั่งต่างกันครองขั้นต่างกันพร้อมกัน นั่นคือหัวข้อของบทถัดไป — และอาจเป็นแนวคิดสำคัญที่สุดแนวคิดเดียวในไมโครสถาปัตยกรรม CPU คลาสสิก

{{< lab type="mini-cpu" >}}

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

---
title: "ไปป์ไลน์"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 13
tags: []
summary: "Hazards, stalls, forwarding"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

Datapath แบบ single-cycle จากบทก่อนทิ้งปริมาณงานไว้บนโต๊ะมาก — ทุกคำสั่ง ไม่ว่าจะง่ายแค่ไหน ใช้เวลานานเท่าคำสั่งที่ช้าที่สุดที่เป็นไปได้ เพราะ datapath ทั้งก้อนเป็นบล็อกเชิงผสมใหญ่ก้อนเดียวที่คล็อกหนึ่งครั้งต่อคำสั่ง ไปป์ไลน์แก้สิ่งนี้ด้วยการแยกการดำเนินการเป็นขั้น และให้คำสั่งหลายคำสั่งครองขั้นต่างกัน *พร้อมกัน*

## ไปป์ไลน์ 5 ขั้นคลาสสิก

ไปป์ไลน์ RISC มาตรฐาน: **IF** (Instruction Fetch), **ID** (Instruction Decode / อ่านรีจิสเตอร์), **EX** (Execute — การดำเนินการ ALU), **MEM** (เข้าถึงหน่วยความจำ สำหรับ load/store), **WB** (Write Back กลับไปยัง register file) แต่ละขั้นแยกจากขั้นถัดไปด้วยรีจิสเตอร์ไปป์ไลน์ (flip-flop จากบทที่ 9 อีกครั้ง) ที่ latch ผลกลางที่ขอบคล็อกทุกขอบ

ชัยชนะด้านปริมาณงาน: ขณะที่คำสั่ง N อยู่ใน EX คำสั่ง N+1 อยู่ใน ID ได้ และคำสั่ง N+2 อยู่ใน IF คำสั่งห้าคำสั่งบินพร้อมกัน ห่างกันหนึ่งรอบคล็อก ในสถานะคงที่ คำสั่งใหม่ *เสร็จ* ทุกรอบ แม้คำสั่งแต่ละคำสั่งยังใช้ห้าขั้นตั้งแต่ต้นจนจบ — ความต่างระหว่าง latency กับ throughput ที่ปรากฏบ่อยในสถาปัตยกรรมคอมพิวเตอร์

## Hazards: ที่ซึ่งภาพสะอาดพัง

สิ่งนี้ทำงานสะอาดได้ก็ต่อเมื่อคำสั่งเป็นอิสระจากกันจริง ๆ โดยปกติแล้วไม่ใช่

**Data hazards** เกิดเมื่อคำสั่งต้องการค่าที่คำสั่ง *ก่อนหน้า* ซึ่งยังบินอยู่ยังคำนวณไม่เสร็จ หากคำสั่ง 1 คำนวณค่าใน EX และคำสั่ง 2 ต้องการค่านั้นเป็นอินพุตของ EX *ของตัวเอง* หนึ่งรอบถัดไป ไปป์ไลน์ที่ไร้เดียงสาจะอ่านค่ารีจิสเตอร์ที่ล้าสมัย **Forwarding** (หรือ "bypassing") แก้กรณีทั่วไป: ส่งผล ALU โดยตรงจากรีจิสเตอร์ไปป์ไลน์ EX/MEM กลับเข้า mux อินพุตของขั้น EX ข้าม register file เพื่อให้คำสั่งที่พึ่งพาได้ค่าถูกต้องทันเวลา — ไม่ต้อง stall Forwarding แก้ไม่ได้ทุกกรณี Load ตามด้วยคำสั่งที่ต้องการค่าที่โหลดทันทีสร้าง load-use hazard ที่ forwarding อย่างเดียวปิดช่องว่างไม่ทัน ดังนั้นไปป์ไลน์ต้อง **stall** (แทรก bubble — หนึ่งรอบหรือมากกว่าที่คำสั่งนั้นรอ)

**Control hazards** มาจาก branch ไปป์ไลน์ยังไม่รู้ว่า branch จะถูก taken หรือไม่ หรือไปที่ไหน จนค่อนข้างช้าในขั้นของมันเอง — แต่ถึงตอนนั้นคำสั่ง *ถัดไป* หลายคำสั่งถูกดึงมาแล้วภายใต้สมมติฐานว่าไม่มี branch หาก branch ถูก taken คำสั่งที่ดึงมาแบบ speculative เหล่านั้นต้องถูกทิ้ง (pipeline "flush") เสียรอบที่ใช้ดึงและดีโค้ดบางส่วน

## เหตุใดสิ่งนี้สำคัญต่อท้ายน้ำ

การทำนาย branch ผิดแพงพอดีเพราะต้นทุน flush นั้น — ซึ่งคือเหตุผลที่มีการทำนาย branch (บทถัดไป): เดาผลให้แม่นพอ เร็วพอ ให้ flush กลายเป็นเรื่องหายากแทนที่จะเป็นประจำ Load-use stall เช่นกันเป็นแรงจูงใจตรงต่อการประมวลผลนอกลำดับ (บทที่ 16): แทนที่จะ stall ไปป์ไลน์ *ทั้งก้อน* เพื่อคำสั่งเดียว ให้คำสั่งอิสระที่อยู่หลังรันได้ และ stall เฉพาะคำสั่งที่รอค่าที่ยังไม่พร้อม

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

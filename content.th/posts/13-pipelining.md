---
title: "ไปป์ไลน์"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 13
tags: []
summary: "ทับซ้อนคำสั่งเพื่อปริมาณงาน — แล้ว hazards บังคับ forwarding, stall และทุกอย่างที่ตามมา"
image_prompt: "Pipeline diagram showing 5 instructions through IF/ID/EX/MEM/WB stages, classic pipeline diagram style"
video_prompt: "25-second animation: instructions flowing through a 5-stage pipeline, hazard and forwarding shown, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: 5-stage pipeline timing chart + forwarding paths + hazard detection unit"
---

Datapath แบบ single-cycle (บทที่ 12) ทิ้งปริมาณงานไว้บนโต๊ะ: ทุกคำสั่งรอเส้นทางที่ช้าที่สุดที่เป็นไปได้ ไปป์ไลน์แยกการดำเนินการเป็นขั้น และให้คำสั่งหลายคำสั่งครองขั้นต่างกัน *พร้อมกัน*

## ห้าขั้น ทับซ้อนกัน

ไปป์ไลน์ RISC คลาสสิก: **IF** (fetch), **ID** (decode / อ่านรีจิสเตอร์), **EX** (ALU), **MEM** (load/store), **WB** (write back) รีจิสเตอร์ไปป์ไลน์ (บทที่ 9 อีกครั้ง) latch ผลระหว่างขั้นทุกคล็อก

ขณะที่คำสั่ง N อยู่ใน EX, N+1 อยู่ใน ID ได้ และ N+2 อยู่ใน IF ในสถานะคงที่ คำสั่งใหม่ *เสร็จ* ทุกรอบ — แม้แต่ละคำสั่งยังใช้ห้าขั้นตั้งแต่ต้นจนจบ Latency คงที่; throughput ขึ้น ความต่างนั้นปรากฏทุกที่หลังจากนี้

**ลองตอนนี้.** กด Step ใน mini-CPU ด้านล่างทีละคำสั่ง — นั่นคือนิสัย single-cycle ที่บทที่ 12 ทำให้เห็น ข้ออ้างของไปป์ไลน์คือ throughput: ชิ้นส่วน fetch / decode / execute ชุดเดียวกันทับซ้อนข้ามคำสั่ง ไม่ใช่หนึ่งคำสั่งทั้งก้อนต่อหนึ่งติ๊ก รู้สึกถึง Step แบบลำดับ แล้วอ่านหัวข้อ hazard โดยรู้ว่าเหตุใดไปป์ไลน์จริงจึงอยู่แบบนั้นไม่ได้

{{< lab type="mini-cpu" >}}

## Hazards: ที่ซึ่งความเป็นอิสระพัง

คำสั่งแทบไม่เป็นอิสระจากกันจริง ๆ

**Data hazards** — คำสั่งต้องการค่าที่คำสั่งก่อนหน้า ซึ่งยังบินอยู่ยังเขียนไม่เสร็จ **Forwarding** (bypassing) ส่งผล ALU ตรงจากรีจิสเตอร์ไปป์ไลน์ภายหลังกลับเข้า EX ข้าม register file เพื่อให้คำสั่งที่พึ่งพามักไม่ต้อง stall Forwarding ปิดช่องว่างไม่ได้ทุกกรณี: load ตามด้วยการใช้ทันทียังต้อง **stall** (bubble) จนขั้น MEM เสร็จ

**Control hazards** — branch ไปป์ไลน์ยังไม่รู้ taken/not-taken หรือเป้าหมาย จนค่อนข้างช้า — แต่คำสั่งถัดไปถูกดึงมาแล้ว เมื่อ branch ถูก taken พวกนั้นต้องถูก flush รอบที่ใช้ไปบนเส้นทางผิดคือของเสีย

## สิ่งที่ต้นทุนเหล่านั้นบังคับต่อไป

การทำนายผิดแล้ว flush แพง — นั่นคือเหตุผลที่มีการทำนาย branch (บทที่ 14): เดาให้เร็วและแม่นพอให้ flush กลายเป็นเรื่องหายาก Load-use stall คือเหตุผลที่มีการประมวลผลนอกลำดับ (บทที่ 16): stall เฉพาะคำสั่งที่รอ ไม่ใช่ไปป์ไลน์ทั้งก้อน และให้งานอิสระที่อยู่หลังรันได้

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

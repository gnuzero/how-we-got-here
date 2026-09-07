---
title: "จาก FinFET ถึง GAA"
date: 2026-01-01
draft: false
phase: "8 — โหนดกระบวนการและการผลิต"
series_index: 49
tags: []
summary: "การรั่ว short-channel ฆ่าการหด planar — พันเกต (FinFET) แล้วพันรอบทั้งหมด (GAA)"
image_prompt: "3D cutaway comparison of planar MOSFET, FinFET, and GAA nanosheet transistor structures, clean semiconductor device diagram style"
video_prompt: "20-second animation: transistor structure morphing from planar to fin to fully-wrapped nanosheet gate, clean technical animation"
schematics: "Diagram: planar vs FinFET vs GAA cross-sections with gate control area highlighted"
---

บทที่ 6 แนะนำ planar MOSFET — เกต ซอร์ส เดรน แบนบนซิลิคอน เรขาคณิตนั้นรับใช้หลายทศวรรษ เมื่อทรานซิสเตอร์หด (lithography ในบทที่ 48) การออกแบบ planar ชนกำแพงที่การหดอย่างเดียวแก้ไม่ได้: เกตสูญเสียการควบคุมช่องทางอย่างเชื่อถือได้

## ผล Short-Channel

เมื่อความยาวช่องทาง planar หด เกตเหนือช่องทาง (การควบคุมสนามไฟฟ้าของบทที่ 6) มีอำนาจเป็นสัดส่วนน้อยลง และกระแสรั่วเมื่ออุปกรณ์ควรปิด นั่นคือฟิสิกส์ ไม่ใช่บั๊กกระบวนการ พ้นจุดหนึ่ง การหดทรานซิสเตอร์ *planar* หยุดส่งการสวิตช์ที่สะอาด — ดังนั้นการสเกล planar ต่อไม่คุ้ม

## FinFET: การควบคุมสามด้าน

FinFET เปลี่ยนเรขาคณิต ไม่ใช่แค่ขนาด: ยกช่องทางเป็น fin บางแนวตั้งและพันเกตรอบสามด้าน (ด้านบนและผนังทั้งสอง) ช่องทางมากขึ้นอยู่ใต้อิทธิพลเกตที่ความยาวช่องทางเดียวกัน ซึ่งกดการรั่ว short-channel ที่กำลังฆ่าการหด planar

อุตสาหกรรมย้ายไป FinFET ในปริมาณต้นทศวรรษ 2010 (รุ่น Ivy Bridge 22 nm ของ Intel ปี 2011–2012 เป็นหลักไมล์ปริมาณสูงยุคแรก) แบบแผนกเดียวกับการหัน multicore ในบทที่ 17 หลังกำแพงความเร็วคล็อก (บทที่ 36): เมื่อแนวทางชนเพดานฟิสิกส์จริง เปลี่ยนโครงสร้าง — อย่าแค่ผลักรูปร่างเก่าแรงขึ้น

## Gate-All-Around: สี่ด้าน

การพันสามด้านไม่ใช่สูงสุดเชิงไฟฟ้าสถิต Gate-all-around (GAA) — ช่องทาง nanosheet หรือ nanowire แนวนอน — ให้เกตโอบช่องทางครบทั้งสี่ด้าน โหนดชั้นนำ (บทที่ 47) กำลังย้ายไปที่นั่นเมื่อ FinFET เองเข้าใกล้ขีดจำกัดเชิงปฏิบัติ: การเคลื่อน planar→FinFET ชุดเดียวกัน เรขาคณิตถัดไปหนึ่งขั้น

## แบบแผนที่เกิดซ้ำ

Planar → FinFET → GAA คือบทเรียนการสเกลของชุดนี้ในรูปอุปกรณ์ กำแพงไฟฟ้า (ผล short-channel ที่นี่) กำแพงความร้อน (บทที่ 36) กำแพง latency (บทที่ 35) ในที่สุดบังคับสถาปัตยกรรม ไม่ใช่แค่ความพยายามหนักขึ้นที่การออกแบบเดิม Chiplets (บทที่ 51) ใช้แบบแผนนั้นระดับสูงขึ้นหนึ่งขั้น — ไม่ใช่กับทรานซิสเตอร์ แต่กับวิธีที่ชิปทั้งก้อนถูกประกอบ

## อ่านเพิ่ม / อ้างอิง
- ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

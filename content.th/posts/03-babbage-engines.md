---
title: "เครื่องจักรของแบบเบจ"
weight: 3
date: 2026-01-01
draft: false
phase: "1 — รากฐาน: จากการคำนวณเชิงกลไกสู่หลอดสุญญากาศ"
series_index: 2
aliases:
  - /posts/01a-babbage-engines/
tags: []
summary: "เครื่องผลต่างและเครื่องวิเคราะห์ — หน่วยเก็บ หน่วยประมวล และโปรแกรมบนบัตร"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Babbage difference engine gear train (carry mechanism detail); Analytical Engine store vs mill"
---

การคำนวณไม่ได้เริ่มจากไฟฟ้า มันเริ่มจากเฟือง

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="เครื่องผลต่างหมายเลข 2 ของชาร์ลส์ แบบเบจ ที่พิพิธภัณฑ์วิทยาศาสตร์ ลอนดอน" loading="lazy" width="1280">
<figcaption>เครื่องผลต่างหมายเลข 2 (Difference Engine No. 2) (พิพิธภัณฑ์วิทยาศาสตร์ ลอนดอน) ภาพ: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

ใน ค.ศ. 1822 ชาร์ลส์ แบบเบจ (Charles Babbage) เสนอเครื่องผลต่าง (Difference Engine) — เครื่องคำนวณเชิงกลสำหรับฟังก์ชันพหุนาม (polynomial function) โดยใช้ระเบียบวิธีผลต่างจำกัด (method of finite differences) ทั้งหมดผ่านเฟืองที่ขบกันและล้อแนวตั้ง (column wheel) ไม่มีไฟฟ้า แต่ละแนวคือหนึ่งหลัก การทด "1" เป็นเหตุการณ์ทางกายภาพ: ฟันเฟืองซี่หนึ่งเกี่ยวและหมุนเฟืองข้างเคียง

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Babbage_Difference_Engine_%28Counter_detail_-_rear_side%29.jpg" alt="ภาพใกล้แขนทดระหว่างแนวหลักบนเครื่องผลต่างหมายเลข 2" loading="lazy" width="1280">
<figcaption>แขนทด (carry arm) ระหว่างแนวหลักบนเครื่องผลต่างหมายเลข 2 เครื่องที่ 2 (Serial #2) (พิพิธภัณฑ์ประวัติศาสตร์คอมพิวเตอร์ Computer History Museum) ภาพ: <a href="https://commons.wikimedia.org/wiki/File:Babbage_Difference_Engine_(Counter_detail_-_rear_side).jpg">Jitze Couperus</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

**ลองเดี๋ยวนี้** เดินแล็บทีละขั้นจาก Y=9, Δ₁=7 ล้อหลักหน่วยหมุนเลย 9 ฟันซี่หนึ่งเกี่ยวหลักสิบ 9+7 กลายเป็น 16 นั่นคือผลต่างจำกัดกำลังคำนวณ x² — ระเบียบวิธีที่เครื่องนี้ถูกสร้างมาเพื่อ

{{< lab type="difference-engine" height="720" >}}

สร้างขึ้นสำหรับหนังสือเล่มนี้ [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) เป็นแบบจำลองแนวหลักเพื่อการสอน ไม่ใช่การสร้างเครื่องหมายเลข 2 ขึ้นใหม่ทั้งเครื่อง

เขาไม่เคยสร้างเครื่องผลต่างขนาดเต็มเสร็จ เงินทุนต่อสู้กับเขา เกณฑ์ความคลาดเคลื่อนในการผลิต (manufacturing tolerance) ของยุคนั้นก็เช่นกัน ความแม่นยำที่เพิ่มขึ้นทุกหลักหมายถึงโอกาสอีกครั้งที่แรงเสียดทาน ระยะคลอน (backlash) และความคลาดเคลื่อนสะสม (stack-up) จะทำลายผลลัพธ์

เครื่องรุ่นต่อมาของเขา คือเครื่องวิเคราะห์ (Analytical Engine) เป็นบรรพบุรุษที่แท้จริงของคอมพิวเตอร์สมัยใหม่ มันมี "หน่วยเก็บ" (store — หน่วยความจำ) และ "หน่วยประมวล" (mill — หน่วยคำนวณเลขคณิต) และโปรแกรมได้ คำสั่งมาจากบัตรเจาะรู (punched card) — แนวคิดที่ยืมมาจากเครื่องจักรอุตสาหกรรมที่มีอยู่แล้วในโรงงาน

ตัวจำลอง (emulator) ที่โฮสต์ไว้ด้านล่างคือ Fourmilab Analytical Engine ของ John Walker เดินบัตรทีละใบ แล้วดูแนวของหน่วยประมวลและหน่วยเก็บเปลี่ยนไป เป็นสาธารณสมบัติ (public domain) เราโฮสต์สำเนาไว้และคงลิงก์ต้นทางไว้

{{< lab type="analytical-engine" height="780" >}}

ต้นทาง: [Fourmilab / John Walker](https://www.fourmilab.ch/babbage/) — [ไฟล์ zip ซอร์สโค้ด](https://www.fourmilab.ch/babbage/release/aemsource.zip) (สาธารณสมบัติ) แผนที่: [Difference Engine](https://en.wikipedia.org/wiki/Difference_Engine), [Analytical Engine](https://en.wikipedia.org/wiki/Analytical_Engine)

การยืมนั้นคือจุดหมายถัดไป: กี่ทอแบบฌักการ์ (Jacquard loom) และการแยกโปรแกรมออกจากเครื่อง

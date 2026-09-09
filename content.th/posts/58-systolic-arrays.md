---
title: "Systolic Array"
weight: 59
date: 2026-01-01
draft: false
phase: "10 — ฮาร์ดแวร์ AI สมัยใหม่"
series_index: 58
tags: []
summary: "ข้อมูลเต้นผ่านกริด MAC — เฉพาะทางชิปทั้งก้อนสำหรับ matmul (TPU)"
image_prompt: "Diagram of a systolic array showing data and weights flowing through a 2D grid of processing elements, clean TPU architecture textbook style"
video_prompt: "25-second animation: data and weight values flowing through a systolic array grid in a rhythmic wave, clean technical animation"
schematics: "Diagram: systolic array data flow + TPU MXU block diagram"
---

บทที่ 55 ครอบคลุม tensor core — ฮาร์ดแวร์ matmul เฉพาะทางภายใน GPU ที่ยังอเนกประสงค์ Systolic array ผลักการเฉพาะทางต่อ: สถาปัตยกรรมที่จัดรอบการสตรีมข้อมูลผ่านกริดของ processing element ง่าย ๆ เพื่อการคูณเมทริกซ์ TPU (Tensor Processing Unit) ของ Google คือตัวอย่างที่ ship เด่นที่สุด ไอเดียเองเก่ากว่า: **H. T. Kung** และ **Charles E. Leiserson** ตั้งชื่อและ formalize systolic array สำหรับ VLSI ในปลายทศวรรษ 1970

## ข้อมูลไหล; การคำนวณเกิดระหว่างทาง

Systolic array คือกริด 2 มิติของ processing element ง่าย ๆ แต่ละตัวเป็น multiply-accumulate จัดให้ข้อมูลเคลื่อนเป็นจังหวะประสาน แต่ละ PE ทำ MAC เมื่อข้อมูลมาถึง ในออกแบบ weight-stationary (อย่างใน MXU ของ TPU ของ Google) น้ำหนักถูกโหลดล่วงหน้าและถือไว้ ขณะที่ activation สตรีมข้ามและผลย่อยแพร่ไปเพื่อนบ้าน — "heartbeat" แบบ systolic ไม่ใช่ทั้งสอง operand ไหลอิสระ ชื่อจงใจสะท้อนจังหวะหัวใจ: ข้อมูลเคลื่อนเป็นคลื่น แทนการถูกดึงผ่านเส้นทางควบคุมกลางที่แชร์

## Dataflow แบบ Weight-Stationary

ถือน้ำหนักให้ *นิ่ง* — โหลดเข้าแต่ละ PE ครั้งเดียว — ขณะที่ activation สตรีมผ่าน ถูกคูณกับน้ำหนักที่ถือไว้ ผลย่อยสะสมผ่านกริด เมื่อโหลดแล้ว น้ำหนักไม่ต้องถูกดึงใหม่ทุก MAC เมื่อเผชิญความกดดันแบนด์วิดท์หน่วยความจำของบทที่ 35 และ 54 สิ่งนั้นสำคัญ: ถือค่าที่ถูกใช้ซ้ำไว้ที่ไซต์คำนวณและตัดการเคลื่อนข้อมูล — ข้อจำกัดเดียวกันที่การออกแบบ systolic ถูกสร้างมาตอบ

## Tensor Core ของ GPU กับชิป Systolic

Tensor core นั่งในสถาปัตยกรรม SIMT ที่ยังอเนกประสงค์ (บทที่ 52–53) ซึ่งรันงานขนานกว้างเกิน matmul ได้ ชิป systolic array อย่าง TPU เดิมพันแคบกว่า: จัดชิป *ทั้งก้อน* รอบการคูณเมทริกซ์ที่มีประสิทธิภาพ โดยความยืดหยุ่นน้อยกว่าสำหรับงานที่ไม่พอดีรูปทรงนั้น ไม่มีฝ่ายดีเด็ดขาด — ประสิทธิภาพบนโหลดที่ matmul ครอง กับความยืดหยุ่นบนส่วนผสมขนานที่กว้างกว่า

## MXU ในฐานะหัวใจเฉพาะทาง

ใน TPU ของ Google Matrix Multiply Unit (MXU) คือ systolic array ที่รับปริมาณงาน matmul ส่วนใหญ่ ข้างควบคุม อินเทอร์เฟซหน่วยความจำ และหน่วยเวกเตอร์สำหรับส่วนที่เหลือที่ไม่ใช่ matmul แกนเฉพาะทางบวก logic สนับสนุนคือแบบแผนที่เกิดซ้ำข้ามตัวเร่งในเฟสนี้

**ประตูออก:** H. T. Kung และ Charles E. Leiserson, "Systolic Arrays (for VLSI)" (*Sparse Matrix Proceedings 1978*, SIAM, 1979) — คำแถลงคลาสสิกของอาร์เรย์ MAC เป็นจังหวะสำหรับการคำนวณเมทริกซ์; รูปที่เกี่ยวข้องใกล้ยังปรากฏใน *Introduction to VLSI Systems* ของ Mead และ Conway (1980)

## อ่านเพิ่ม / อ้างอิง
- จันทนา จันทราพรชัย, *สถาปัตยกรรมคอมพิวเตอร์และการออกแบบ*
- ผศ.ดร. ปัทมา ลงกานี, *สถาปัตยกรรมคอมพิวเตอร์*
- รศ.ดร.เกริก ภิรมย์โสภา, *สถาปัตยกรรมคอมพิวเตอร์ การออกแบบและวิเคราะห์*
- ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

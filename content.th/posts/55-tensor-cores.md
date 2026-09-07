---
title: "Tensor Core"
date: 2026-01-01
draft: false
phase: "9 — GPU และการคำนวณขนาน"
series_index: 55
tags: []
summary: "Matrix multiply-accumulate กลายเป็น op ครองของ AI — ฮาร์ดแวร์จึงทำให้เป็น primitive ชั้นหนึ่ง"
image_prompt: "Diagram of a tensor core performing a 4x4 matrix multiply-accumulate in a single cycle, clean AI hardware diagram style"
video_prompt: "20-second animation: two matrices fed into a tensor core and multiplied-accumulated, clean technical animation"
schematics: "Diagram: tensor core MAC array + matrix multiply data flow diagram"
---

บทที่ 53 ครอบคลุม CUDA core — เลน SIMT อเนกประสงค์สำหรับงานขนานกว้าง Tensor core แคบกว่า: ฮาร์ดแวร์เฉพาะสำหรับปฏิบัติการเดียว — matrix multiply-accumulate — ที่ครอง compute ของโครงข่ายประสาทสมัยใหม่ เฉพาะทางสำหรับ op นั้นแล้วเอาชนะการทำงานเดียวกันบน CUDA core อเนกประสงค์เพียงอย่างเดียว

## เหตุใดการคูณเมทริกซ์

ชั้น fully connected, convolution (ที่ reformulate เป็น matmul) และ attention ใน transformer ทั้งหมดลดลงที่แก่น เป็นการคูณสะสมของเมทริกซ์ — ที่สเกลที่ประสิทธิภาพของมันครองสมรรถนะระบบ ความเข้มข้นนั้นทำให้ซิลิคอนเฉพาะทางคุ้ม

## Tensor Core ทำอะไร

Tensor core fuse การคูณสะสมเมทริกซ์ขนาดคงที่เล็ก — เช่น เมทริกซ์ 4×4 สองตัวเข้าตัวที่สาม — เป็นปฏิบัติการฮาร์ดแวร์เดียว แทนลำดับคำสั่งคูณและบวกแยกยาวผ่าน CUDA core อเนกประสงค์ การ fuse ตัด overhead ต่อ op (ดึง decode เดิน operand) เทียบกับเลขคณิตที่มีประโยชน์ ผลคูณใหญ่กว่าถูกไทล์: ป้อนบล็อกย่อยตามลำดับ สะสมผลย่อย — งานประสานที่ทำให้เคอร์เนล deep learning ที่มีประสิทธิภาพเป็นฝีมือของตัวเอง

## ความละเอียดผูกลึกกับซิลิคอน

Tensor core มักรันมีประสิทธิภาพที่สุดที่ความละเอียดต่ำกว่า (FP16, BF16, INT8 และ FP8 ที่เพิ่มขึ้น) เลขคณิตแคบกว่าต้องการพื้นที่และพลังงานต่อ op น้อยกว่า จึงบรรจุปริมาณงาน MAC ได้มากกว่าที่งบเดียวกัน บทที่ 59 กลับมาเต็ม: การลดความละเอียดไม่ใช่ทางเลือกซอฟต์แวร์ล้วน — มันผูกลึกกับว่าฮาร์ดแวร์ MAC ข้างใต้รันที่แต่ละฟอร์แมตได้มีประสิทธิภาพเพียงใด

## ไม่ใช่คำตอบเดียว

Tensor core คือคำตอบของ NVIDIA ภายใน GPU ที่ยังอเนกประสงค์ เฟส 10 ครอบคลุม systolic array — TPU ของ Google ที่เด่นที่สุด — สร้างเพื่อเป้าหมาย matmul เดียวกัน จัดที่ระดับฮาร์ดแวร์ต่าง ข้อจำกัดเดียวกัน; สถาปัตยกรรมต่าง

## อ่านเพิ่ม / อ้างอิง
- จันทนา จันทราพรชัย, *สถาปัตยกรรมคอมพิวเตอร์และการออกแบบ*
- ผศ.ดร. ปัทมา ลงกานี, *สถาปัตยกรรมคอมพิวเตอร์*
- รศ.ดร.เกริก ภิรมย์โสภา, *สถาปัตยกรรมคอมพิวเตอร์ การออกแบบและวิเคราะห์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

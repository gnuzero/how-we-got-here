---
title: "การประมวลผลนอกลำดับ"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 16
tags: []
summary: "Stall เฉพาะสิ่งที่ต้องรอ — แนวคิดของ Tomasulo: ประมวลผลเมื่อพร้อม commit ตามลำดับ"
image_prompt: "Block diagram of an out-of-order pipeline with reservation stations and reorder buffer, clean superscalar diagram style"
video_prompt: "25-second animation: instructions executing out of order then retiring in order, clean animated pipeline diagram"
labs: ["mini-cpu"]
schematics: "Diagram: register renaming table + reorder buffer + Tomasulo's algorithm block diagram"
---

Load-use hazard ในบทที่ 13 stall ไปป์ไลน์แบบ in-order *หลัง* คำสั่งที่รอหนึ่งคำสั่ง — แม้คำสั่งถัดไปจะเป็นอิสระและพร้อม การประมวลผลนอกลำดับตอบข้อจำกัดนั้น: รันงานอิสระเมื่อตัวถูกดำเนินการพร้อม; บังคับลำดับโปรแกรมเฉพาะที่สถาปัตยกรรมต้องการ

## การพึ่งพาเทียมและ Register Renaming

ไม่ใช่ทุก "การพึ่งพา" จะเป็นของจริง หากคำสั่ง A เขียน R1 และภายหลังคำสั่ง B ก็เขียน R1 สำหรับผลที่ไม่เกี่ยวข้อง ไม่มีค่าไหลระหว่างพวกมัน — ISA แค่มี *ชื่อ* รีจิสเตอร์สถาปัตยกรรมน้อย และคอมไพเลอร์นำชื่อกลับมาใช้ นั่นคือการพึ่งพาชื่อ (เทียม) ไม่ใช่การพึ่งพาข้อมูลจริง

Register renaming ให้ CPU มีรีจิสเตอร์ *กายภาพ* มากกว่าที่ ISA เปิดเผย และแมปทุกการเขียนไปยังรีจิสเตอร์กายภาพใหม่ตอนดีโค้ด "R1" ของ A กลายเป็น P17; "R1" ภายหลังของ B กลายเป็น P42 ไม่มีความขัดแย้งเทียม; ทั้งคู่เดินหน้าได้

## Issue เมื่อพร้อม Commit ตามลำดับ

คำสั่งที่ rename แล้วรอใน **reservation stations** จนตัวถูกดำเนินการจริงมาถึง (ตามค่า หรือตามแท็กจากผู้ผลิตที่ยังบินอยู่) ทันทีที่ตัวถูกดำเนินการพร้อม คำสั่งสามารถ issue ไปยังหน่วยประมวลผลได้ — โดยไม่สนใจลำดับโปรแกรมเดิม นั่นคือส่วนนอกลำดับ

ผลสถาปัตยกรรมยังต้องดูตามลำดับ: รีจิสเตอร์ที่มองเห็นได้ หน่วยความจำ exception **Reorder buffer (ROB)** ติดตามทุกคำสั่งที่บินอยู่ตามลำดับโปรแกรม และ *retire* ผลไปยังสถานะสถาปัตยกรรมตามลำดับนั้นเท่านั้น แม้การประมวลผลจะเสร็จคนละเวลา

## แก่นแนวคิดของ Tomasulo

"ประมวลผลเมื่อพร้อม commit ตามลำดับอย่างเคร่งครัด" — รูปแบบที่มักให้เครดิตกับอัลกอริทึมของ Robert Tomasulo สำหรับหน่วย floating-point ของ IBM System/360 Model 91 (เผยแพร่ปี 1967) — คือแก่นเชิงแนวคิดของ CPU นอกลำดับประสิทธิภาพสูงเกือบทุกตัวตั้งแต่นั้น มันก็แพงเช่นกัน: ตาราง renaming, reservation stations และ ROB เสียพื้นที่และพลังงาน การเพิ่มเครื่องจักรนั้นมีผลตอบแทนลดลง — กำแพงที่บทถัดไปชนตรง ๆ

{{< lab type="mini-cpu" >}}

**ประตูออก:** R. M. Tomasulo, "An Efficient Algorithm for Exploiting Multiple Arithmetic Units" (*IBM Journal of Research and Development*, 1967) — เปเปอร์ปฐมภูมิเบื้องหลัง issue และ rename แบบนอกลำดับสมัยใหม่

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

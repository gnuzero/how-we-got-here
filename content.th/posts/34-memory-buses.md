---
title: "บัสหน่วยความจำ"
weight: 35
date: 2026-01-01
draft: false
phase: "5 — บัสและสถาปัตยกรรมระบบ"
series_index: 34
tags: []
summary: "DDR ซื้อแบนด์วิดท์; latency แทบไม่ขยับ — bank และ channel ซ่อนการรอ"
image_prompt: "Comparison chart of DDR generations, clean technical infographic style, alongside a DIMM pinout diagram"
video_prompt: "20-second animation: DRAM burst transfer, comparing burst length across DDR generations, clean technical animation"
schematics: "Diagram: DDR generation comparison table + memory channel/rank/bank organization diagram"
---

PCIe (บทที่ 32–33) คือเส้นทางไปอุปกรณ์ขยาย บัสหน่วยความจำคือเส้นทางที่เลี้ยง CPU จริง — DRAM จากบทที่ 10 — และวิวัฒนาการของมันคือการเจรจาต่อเนื่องระหว่างแบนด์วิดท์ latency และพลังงาน ชื่อรุ่นไม่ใช่เรื่องราว การแยกสามอย่างนั้นต่างหาก

## ทั้งสองขอบ ไม่ใช่คล็อกเร็วขึ้น

DDR — Double Data Rate — ถ่ายโอนทั้งขอบขาขึ้น *และ* ขาลง Throughput ประมาณสองเท่าของการออกแบบ single-data-rate ที่คล็อกเดียวกัน โดยไม่ต้องเพิ่มความถี่ (และความท้าทายความสมบูรณ์ของสัญญาณที่ตามมา) แบนด์วิดท์โดยไม่จ่ายกำแพงคล็อกก่อน

## แบนด์วิดท์ปีน; Latency ของบิตแรกไม่

แต่ละรุ่น DDR ยกแบนด์วิดท์พีค ส่วนใหญ่ด้วย I/O ที่เร็วขึ้น Prefetch และใน DDR5 การแยกเป็นสอง subchannel 32 บิตอิสระ ซื้อ parallelism บนโมดูลมากขึ้น สิ่งที่ตัวเลขพาดหัวซ่อน: *latency* การเข้าถึงดิบ — จากคำขอถึงบิตแรก — เคลื่อนช้ากว่าแบนด์วิดท์มาก DRAM เก่งขึ้นมากที่กระแสเมื่อมันเริ่มแล้ว และดีขึ้นเพียงเล็กน้อยที่การรอก่อนเริ่ม นั่นคือฉากตั้งของบทที่ 35 เมตริกต่างกัน ฟิสิกส์ต่างกัน (การ sense ประจุ เซลล์ตัวเก็บประจุ)

## Parallelism เพื่อซ่อนการเข้าถึงช้า

*channel* คือเส้นทางคอนโทรลเลอร์อิสระ — คำขอพร้อมกันไม่ต้องต่อคิวหลังกัน ภายใน channel *rank* และ *bank* ให้ bank หนึ่งจบ (หรือ refresh — บทที่ 10) ขณะที่อีกอันรับคำขอใหม่ ทับซ้อนการเข้าถึงอิสระพอ และ *throughput รวม* คงสูงได้แม้ไม่มี access ใดเร็วขึ้น นั่นคือเหตุผลที่โครงสร้างนี้มีอยู่: ไม่ใช่แคตตาล็อกฟีเจอร์ DIMM แต่ทางซ่อน latency ที่บทถัดไปตั้งชื่อว่ากำแพง

DIMM คือแพ็กเกจกายภาพ — ชิปบนแผงพร้อมตัวเชื่อมขอบมาตรฐาน — ดังนั้นความจุคือ "กี่สล็อต ขนาดเท่าไร" ไม่ใช่การออกแบบบัสใหม่

สองบทถัดไปคือสิ่งที่เกิดเมื่อการเจรจานี้ไม่พอ: memory wall และลูกพี่ลูกน้องฝั่ง compute อย่าง clock-speed wall

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

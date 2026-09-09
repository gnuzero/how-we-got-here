---
title: "CUDA Core, Warp และ Occupancy"
weight: 54
date: 2026-01-01
draft: false
phase: "9 — GPU และการคำนวณขนาน"
series_index: 53
tags: []
summary: "SIMT แมปลง SM และ warp — lockstep ชนะจนกว่า divergence; occupancy ซ่อน memory stall"
image_prompt: "Block diagram of a GPU Streaming Multiprocessor showing CUDA cores, warp scheduler, register file, clean GPU microarchitecture diagram style"
video_prompt: "20-second animation: a warp of 32 threads executing in lockstep, branch divergence shown, clean technical animation"
schematics: "Diagram: SM block diagram + warp scheduling timeline + occupancy calculation illustration"
---

บทที่ 52 ครอบคลุมว่า *เหตุใด* GPU จึงเดิมพัน SIMT ขนานมหาศาล บทนี้คือแผนที่รูปธรรม: Streaming Multiprocessor, warp และ occupancy — ว่าฮาร์ดแวร์ขนานนั้นถูกใช้จริงเต็มแค่ไหน

## Streaming Multiprocessor

GPU คือ Streaming Multiprocessor (SM) จำนวนมาก — แต่ละตัวเป็นหน่วยขนานที่ค่อนข้างครบในตัว มี CUDA core ง่าย ๆ หลายเลน (เลนแบบ ALU จงใจซับซ้อนกว่าคอร์ CPU เฟส 3 น้อยมาก: ไม่มีการรันนอกลำดับ ไม่มีการทำนายสาขาซับซ้อนแบบบทที่ 14) มี warp scheduler และ register file ที่แชร์โดยเธรดที่พักอยู่ SM หลายสิบตัวรันค่อนข้างอิสระคือแหล่งความขนานรวมของ GPU เทียบกับคอร์ซับซ้อนกำมือของ CPU

## Warp: lockstep เป็นหน่วย

เธรดบน SM ถูกจัดเป็น warp — บนฮาร์ดแวร์ NVIDIA เสมอ 32 เธรด (wavefront ของ AMD ในอดีตใช้ 64) Warp คือความละเอียดที่ SIMT ของบทที่ 52 ถูกบังคับใช้: ทั้ง 32 รันคำสั่ง *เดียวกัน* ในรอบ *เดียวกัน* แต่ละเส้นบนข้อมูลของตัวเอง นั่นคือรูปฮาร์ดแวร์ของ "หน่วยควบคุมที่แชร์หนึ่งหน่วย หลายเลน"

## Branch Divergence: ที่ที่ lockstep มีราคา

เมื่อเธรด *ภายใน warp เดียว* ไปสาขาต่างกัน ฮาร์ดแวร์รันทั้งสองเส้นทางตามลำดับและ mask ครึ่งที่ไม่ได้ใช้งาน Warp ใช้เวลานานเท่าทั้งสองเส้นทาง แม้แต่ละเธรดต้องการเพียงเส้นทางเดียว — ภาษีตรงของ lockstep เดียวกันที่ทำให้กรณีไม่ divergent ถูก การให้เธรดใน warp อยู่บนเส้นทางเดียวกันจึงเป็นการ optimize จริง ไม่ใช่แค่สไตล์

## Occupancy: ซ่อน latency ด้วยงานที่พร้อม

SM มี register และ shared memory จำกัด; ทุก warp ที่พักกินส่วนหนึ่ง Occupancy คือว่ามีกี่ warp ที่พักและมีสิทธิ์รัน เทียบกับที่ฮาร์ดแวร์รองรับได้ Occupancy สูงช่วยซ่อน latency ของหน่วยความจำ (บทที่ 35 อีกครั้ง): ขณะที่ warp หนึ่งค้างรอการเข้าถึงช้า scheduler สลับไป warp ที่พร้อมและเก็บเลนให้ไม่ว่าง

มันไม่ใช่ "ทำให้สูงสุดแล้วจบ" เคอร์เนลที่ใช้ register หรือ shared memory ต่อเธรดมากกว่าอาจรัน warp น้อยกว่าแล้วยังจบเร็วกว่า หากทรัพยากรนั้นตัดงานซ้ำหรือทราฟฟิกหน่วยความจำ Occupancy กับทรัพยากรต่อเธรดคือ tradeoff จริง — ที่โผล่เมื่อเคอร์เนลเจอซิลิคอนจริง ไม่ใช่เมื่อให้เหตุผลในนามธรรมอย่างเดียว

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

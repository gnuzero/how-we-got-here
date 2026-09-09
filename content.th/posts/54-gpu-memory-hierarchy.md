---
title: "ลำดับชั้นหน่วยความจำ GPU"
weight: 54
date: 2026-01-01
draft: false
phase: "9 — GPU และการคำนวณขนาน"
series_index: 54
tags: []
summary: "เธรดนับพันบังคับแบนด์วิดท์เหนือ DDR — HBM ซ้อนหน่วยความจำข้าง compute"
image_prompt: "Cutaway diagram of HBM stacked memory with TSVs connecting to a GPU die via an interposer, clean packaging + memory diagram style"
video_prompt: "20-second animation: data flowing up through TSVs in a stacked HBM die, clean technical animation showing massive bandwidth"
schematics: "Diagram: HBM stack cross-section with TSVs + GPU memory hierarchy"
---

บทที่ 35 ตั้งชื่อ memory wall: latency ของ DRAM ตาม compute ไม่ทัน อุตสาหกรรมจึงไล่ *แบนด์วิดท์* ในที่ที่ latency ดื้อ ไม่มีที่ไหนที่การตอบนั้นมีผลมากกว่าหน่วยความจำ GPU — ปริมาณงานขนานของบทที่ 52–53 สร้างความอยากที่ DDR ทั่วไป (บทที่ 34) ป้อนไม่ได้

## เหตุใด GPU จึงอดบนหน่วยความจำแบบ CPU

CPU รันสตรีมคำสั่งจำนวนพอประมาณ; แคช (บทที่ 15) มักดูดซับ working set GPU อาจมีเธรดนับพันข้ามหลาย SM ที่ต้องการหน่วยความจำพร้อมกัน การแคชบนชิปช่วย แต่ความต้องการแบนด์วิดท์รวมสูงกว่าระบบหน่วยความจำของ CPU ที่พลังงานใกล้เคียงมาก — ข้อจำกัดที่บังคับคำตอบทางกายภาพต่าง

## HBM: ซ้อนข้างได

High Bandwidth Memory ซ้อนได DRAM ในแนวตั้ง เชื่อมผ่าน through-silicon via (TSV) แทนรอย PCB ยาวไปยัง DIMM แยก รวมกับอินเทอร์เฟซกว้างมาก ให้แบนด์วิดท์สูงกว่า DDR เทียบเท่ามาก — จ่ายด้วยการบรรจุขั้นสูงของบทที่ 51 HBM กับไดคำนวณ GPU โดยปกติแชร์ silicon interposer: ตระกูลการบรรจุเดียวกับ chiplets นำไปใช้ที่นี่เพื่อวางหน่วยความจำ *ข้าง* compute แทนการแยกไดเชิงหน้าที่

## ลำดับชั้นภายใน GPU

นอกจาก HBM-กับ-DDR GPU มีพีระมิดของตัวเอง สะท้อนรูปทรง register–cache–main-memory ของบทที่ 10 ด้วยชั้นเฉพาะ GPU Register file ของแต่ละ SM คือที่เก็บท้องถิ่นเร็วที่สุด Shared memory — scratchpad ที่โปรแกรมเมอร์จัดการบน SM — ให้เธรดในบล็อกแชร์ข้อมูลโดยไม่ต้องวนไกล L2 cache ครอบ GPU ทั้งก้อน HBM คือชั้น "หน่วยความจำหลัก": แบนด์วิดท์สูงกว่า DRAM ของ CPU มาก ยังมี latency สูงกว่าอะไรบนชิป — tradeoff ระหว่าง latency กับความจุเดิม ที่สเกล GPU

## ป้อนสิ่งที่มาถัดไป

สถาปัตยกรรมนี้มีอยู่เพื่อเลี้ยงความอยาก compute มหาศาล Peak FLOPS ไร้ความหมายหาก operand มาไม่ทันและผลออกไม่ได้ Tensor core ในบทถัดไปคือโครงสร้าง compute ที่แบนด์วิดท์ของ HBM ถูกสร้างมาป้อน — พากรอบแบนด์วิดท์ไปด้วย: peak ของ tensor core มีความหมายเฉพาะเมื่อเทียบกับระบบหน่วยความจำที่ค้ำจุนมันได้

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

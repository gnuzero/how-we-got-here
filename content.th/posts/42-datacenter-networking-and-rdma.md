---
title: "เครือข่ายศูนย์ข้อมูลและ RDMA"
weight: 42
date: 2026-01-01
draft: false
phase: "6 — วิวัฒนาการเครือข่าย"
series_index: 42
tags: []
summary: "ในผ้าใบที่ควบคุมได้ การคัดลอกผ่านเคอร์เนลคือภาษี — RDMA และทอโพโลยีซื้อสายกลับ"
image_prompt: "System diagram comparing a traditional TCP/IP data path against an RDMA kernel-bypass data path, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data copied multiple times through the kernel vs a direct RDMA transfer bypassing the CPU, clean comparative animation — ties to BridgeStack GPU memory fabric"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP kernel-bypass comparison + RDMA verbs data path + fat-tree datacenter topology"
---

TCP/IP (บทที่ 41) เป็นกระดูกสันหลังที่ถูกสำหรับเครือข่ายโลกที่ต่างชนิด ไม่เชื่อถือได้ และกระจาย ภายในศูนย์ข้อมูลเดียว — เจ้าของเดียว ระยะสั้น ผ้าใบที่ออกแบบไว้ — เส้นทางผ่านเคอร์เนลชุดเดียวกันเริ่มดูเหมือน overhead สำหรับ workload ที่ใช้ทุกไมโครวินาทีและทุกไบต์ของแบนด์วิดท์

## Overhead มาจากไหน

การส่ง TCP/IP แบบดั้งเดิมคัดลอกข้อมูลแอปเข้าบัฟเฟอร์เคอร์เนล รันสแตก แล้วให้ NIC ส่ง — สะท้อนที่ฝั่งรับ แต่ละขั้นใช้อรอบ CPU และ ที่แย่กว่าสำหรับ latency คือการ *คัดลอก* จริงระหว่างตำแหน่งหน่วยความจำ พอใช้ได้สำหรับทราฟฟิกเว็บทั่วไป แพงสำหรับ HPC หรือการฝึก ML แบบกระจายที่แลก gradient หลายครั้งต่อวินาที

## RDMA: เอาเคอร์เนลและ CPU ออกจากเส้นทางข้อมูล

RDMA (Remote Direct Memory Access) ให้เครื่องหนึ่งอ่านหรือเขียนหน่วยความจำของอีกเครื่องโดยไม่ต้องให้ CPU หรือเคอร์เนลของฝั่งรับเฝ้าการถ่ายโอน อะแดปเตอร์ที่รองรับ RDMA เคลื่อนไบต์หน่วยความจำ-ถึง-หน่วยความจำข้ามเครือข่าย แนวคิดเดียวกับ GPUDirect RDMA ในบทที่ 37 — คัดลอกน้อยลง CPU ว่างสำหรับคำนวณ — นำไปใช้ระหว่างเครื่องทั้งเครื่อง ไม่ใช่แค่ระหว่าง GPU บนโหนด

## Fat-Tree: เดินสายเครื่องนับพันอย่างสม่ำเสมอ

ที่เครื่องนับพัน ทอโพโลยีตัดสินว่าแบนด์วิดท์จริงหรือแค่โฆษณา Fat-tree จัดสวิตช์ให้ความจุสเกลได้คาดการณ์ขึ้นลำดับชั้น แทนการซ่อนลิงก์คอขวดที่โผล่เฉพาะใต้โหลด คลัสเตอร์ฝึกขนาดใหญ่ (เฟส 10) ถูกเดินสายด้วยความตั้งใจนั้นโดยเจตนา — ไม่ใช่ความสะดวกเฉพาะกิจ

## ปรัชญาเดียวกับงานผ้าใบในชุดนี้

ลบการคัดลอกที่ไม่จำเป็น; ข้ามเคอร์เนลเมื่อไม่จำเป็น; ให้ฮาร์ดแวร์เคลื่อนข้อมูลตรงเท่าที่ทอโพโลยีอนุญาต บทที่ 37 ใช้สิ่งนั้นภายในและข้ามโหนด GPU; บทนี้ใช้กับการสื่อสารเครื่อง-ถึง-เครื่อง รวมกันแล้วส่งต่อสู่ระบบกระจายของเฟส 7 — เริ่มด้วยระบบหา-แล้ว-พูดยุคก่อนเว็บของอินเทอร์เน็ตเอง

{{< lab type="vm-terminal" >}}

## อ่านเพิ่ม / อ้างอิง
- โอภาส เอี่ยมสิริวงศ์, *เครือข่ายคอมพิวเตอร์และการสื่อสาร*
- จตุชัย แพงจันทร์ และ อนุโชต วุฒิพรพงษ์, *เจาะระบบ Network*
- ภัทรสินี ภัทรโกศล, *เครือข่ายคอมพิวเตอร์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

---
title: "Kubernetes และการจัดการคอนเทนเนอร์ที่สเกล"
weight: 46
date: 2026-01-01
draft: false
phase: "7 — ระบบกระจาย บิ๊กดาต้า และออร์เคสตรา"
series_index: 45
tags: []
summary: "คอนเทนเนอร์นับพันที่ล้มเป็นประจำบังคับสถานะที่ต้องการแบบประกาศและลูป reconciliation ต่อเนื่อง"
image_prompt: "System diagram of a Kubernetes cluster showing control plane, nodes, pods, and services, clean cloud-native architecture diagram style"
video_prompt: "25-second animation: a pod failing and Kubernetes automatically rescheduling it onto a healthy node, clean technical animation showing the reconciliation loop"
schematics: "Diagram: Kubernetes control plane architecture (API server/scheduler/controller manager/etcd) + pod scheduling and reconciliation loop"
---

บทที่ 25 ครอบคลุมคอนเทนเนอร์ — isolation เบาที่แชร์เคอร์เนลโฮสต์ คอนเทนเนอร์เดียวบนเครื่องเดียวจัดการด้วยมือได้ คอนเทนเนอร์นับพันข้ามเครื่องนับร้อย โดยกล่องและโปรเซสล้มเป็นประจำ (เดิมพัน "ความล้มเหลวเป็นปกติ" เดียวกับ GFS ในบทที่ 44) เป็นปัญหาปฏิบัติการต่าง Kubernetes คือคำตอบเปิดของ Google ต่อข้อจำกัดนั้น สกัดจากตัวจัดการคลัสเตอร์ภายในที่เคยอยู่กับมันแล้ว

## การจัดวางด้วยมือไม่สเกล

เลือกเครื่องไหนรันโปรเซสไหน รีสตาร์ทเมื่อพัง นำทางทราฟฟิกไปอินสแตนซ์สุขภาพดี rollout อัปเดตโดยไม่ออกออฟ — ทำได้สำหรับคอนเทนเนอร์หยิบมือ; ไม่ได้สำหรับกองเรือโปรดักชัน การเคลื่อนที่ถูกบังคับคือซอฟต์แวร์ที่จัดการการจัดวางและการกู้ต่อเนื่อง เพื่อไม่ให้มนุษย์ต้องสังเกตทุกความล้มเหลว

## สถานะที่ต้องการ ไม่ใช่คำสั่งทีละขั้น

ไอเดียรับน้ำหนักคือ declarative ไม่ใช่ imperative ผู้ปฏิบัติการประกาศสถานะปลายทาง — "ห้าเรพลิกาของบริการนี้ พร้อม limit เหล่านี้" — และ control plane ทำงานให้สถานะจริงของคลัสเตอร์ตรงกับความปรารถนานั้นตราบที่ความปรารถนายังอยู่ Drift (พัง โหนดตาย เรพลิกาสุขภาพดีน้อยกว่าที่ขอ) ไม่ใช่การแจ้งเตือนให้มนุษย์ก่อน; มันคือความไม่ตรงที่ลูปแก้ด้วยการจัดตารางตัวแทน

ลูป reconciliation นั้นคือกลไก self-healing ชิ้นที่มีชื่อของ control plane — API server เป็นประตูทุกการเปลี่ยนสถานะ etcd เป็นที่เก็บสอดคล้องของที่ต้องการและจริง scheduler ที่วางงานใหม่ controllers ที่เป็นเจ้าของ drift ชนิดใดชนิดหนึ่ง — มีอยู่เพื่อรับใช้ลูปนั้น พวกมันไม่ใช่แคตตาล็อกฟีเจอร์; พวกมันคือวิธีที่การแก้ต่อเนื่องถูก implement

## สายเลือด: Borg → Omega → โอเพนซอร์ส

Google รันปัญหาประเภทนี้ภายในมากว่าทศวรรษแล้ว (Borg; แล้วการทดลอง scheduling แบบ shared-state ของ Omega) ก่อนส่ง Kubernetes เป็นเวอร์ชันเปิดที่ศูนย์กลาง API ของบทเรียน ระบบเปิดสำคัญเพราะข้อจำกัดเป็นของทั้งอุตสาหกรรม: เมื่อคอนเทนเนอร์เป็นหน่วย deploy ต้องมีอะไรสักอย่างเป็นเจ้าของสถานะที่ต้องการข้ามกองเรือ

## เหตุใดคลัสเตอร์ ML สนใจ

ลูปเดียวกันตอนนี้รันไม่แค่เว็บเซอร์วิส แต่การฝึกและ inference แบบกระจาย — งานที่ขยายข้ามเครื่อง GPU หลายเครื่อง ต้องรีสตาร์ทเมื่อฮาร์ดแวร์ล้มเป็นประจำ และสเกลตามความจุที่มี นั่นส่งต่อไปยังสแตกซอฟต์แวร์ในบทที่ 46 และฮาร์ดแวร์ของเฟส 9–10: ซิลิคอนอย่างเดียวไม่จัดวางหรือซ่อมกองเรือฝึก

**ประตูออก:** Abhishek Verma et al., "Large-scale cluster management at Google with Borg" (EuroSys 2015) — บัญชีหลักของระบบภายในที่ Kubernetes สืบเชื้อสาย; Brendan Burns et al., "Borg, Omega, and Kubernetes" (*ACM Queue*, 2016) — เปเปอร์สายเลือดสั้นที่ผูก Borg, Omega และ control plane เปิดเข้าด้วยกัน

## อ่านเพิ่ม / อ้างอิง
- อาณัติ รัตนถิรกุล, *Docker พื้นฐานสู่การใช้งานจริง*
- ณัฐโชติ พรหมฤทธิ์, *Practical DevOps and Cloud Engineering*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "อินเตอร์คอนเนกต์ในระดับสเกล"
weight: 37
date: 2026-01-01
draft: false
phase: "5 — บัสและสถาปัตยกรรมระบบ"
series_index: 37
tags: []
summary: "เมื่อ compute เป็นหลายชิป เส้นทางระหว่างพวกมันคือกำแพงถัดไป — ลิงก์เฉพาะ คัดลอกน้อยลง"
image_prompt: "System diagram comparing PCIe-connected GPUs vs NVLink direct GPU-to-GPU mesh, clean datacenter architecture diagram style"
video_prompt: "25-second animation: data moving GPU-to-CPU-to-GPU over PCIe vs directly over NVLink, clean technical animation — ties to BridgeStack fabric work"
schematics: "Diagram: NVLink mesh topology + CXL memory pooling + GPUDirect RDMA data path"
---

เฟสนี้จนถึงตอนนี้เชื่อมส่วนประกอบ *ภายใน* เครื่องเดียว — CPU กับหน่วยความจำ CPU กับอุปกรณ์ เมื่อ workload ต้องการหลาย GPU หรือหลายเครื่อง คำถามเปลี่ยน: หน่วยเหล่านั้นคุยกัน *เอง* เร็วพอที่การสื่อสารเพิ่มจะไม่กิน compute เพิ่มหรือไม่?

## เส้นทางปริยายคือภาษี

หากไม่มีเส้นทาง peer GPU A เขียนผ่านหน่วยความจำระบบ และ GPU B อ่านกลับ — ฮอปเพิ่ม latency เพิ่ม แบนด์วิดท์ PCIe เผาไปกับการคัดลอก แม้บน PCIe อย่างเดียว GPUDirect P2P ก็ DMA GPU↔GPU ได้โดยไม่ต้อง stage ที่โฮสต์ (ยังที่อัตรา PCIe) ข้อจำกัดที่เหลือคือแบนด์วิดท์และทอโพโลยี: fabric ขยายร่วมไม่เคยออกแบบเป็น mesh หลาย GPU

## ลิงก์เฉพาะ หน่วยความจำที่สอดคล้อง คัดลอกน้อยลง

NVLink ของ NVIDIA เป็นอินเตอร์คอนเนกต์ GPU-ถึง-GPU ที่สร้างเพื่องานนี้ — CPU และหน่วยความจำระบบอยู่นอกการถ่ายโอน NVSwitch ทำให้ทุก GPU ในโหนดถึงทุกอันอื่นได้ ที่แบนด์วิดท์สูงกว่าเส้นทาง PCIe-และ-CPU มาก สำหรับการแลกเปลี่ยนขนาดใหญ่บ่อย — รูปแบบที่การฝึกระดับใหญ่กลับมาในเฟส 7 และ 10 — เส้นทางตรงนั้นเป็นอันดับหนึ่ง ไม่ใช่การปรับแต่ง

CXL (Compute Express Link) ตอบข้อจำกัดข้างเคียง: การเข้าถึงที่สอดคล้องแคชข้ามไดย์เดียว และต่อไป หน่วยความจำแบบพูลที่ไม่ได้ติดกับซ็อกเก็ตเดียว ความจุย้ายระหว่างโหนดคำนวณได้แทนการแช่แข็งกับสล็อต DIMM ที่มันลง — ความยืดหยุ่นที่ DDR (บทที่ 34) หรือ PCIe ดิบไม่ให้

GPUDirect RDMA ให้ NIC อ่านหรือเขียนหน่วยความจำ GPU โดยตรง หากไม่มี การถ่ายโอน GPU-ถึง-GPU ข้ามเครือข่ายคือ GPU → หน่วยความจำระบบ → NIC → หน่วยความจำระบบไกล → GPU ไกล — การคัดลอกที่กิน latency และแบนด์วิดท์หน่วยความจำ ยุบเหลือ GPU → เครือข่าย → GPU ด้วยเหตุผลเดียวกับที่ RDMA (บทที่ 42) ชนะในที่เก็บและข้อความ: คัดลอกน้อยลง CPU น้อยลงคอยเฝ้าการย้าย

## ปัญหาเดียวกัน ฮาร์ดแวร์เปิด

นี่คือรากฐานแนวคิดใต้ GPU memory fabric กำหนดเองที่ชุดบทความชี้ไปเรื่อย ๆ: ทำให้หน่วยความจำ GPU ระยะไกล address ได้โดยไม่มี CPU อเนกประสงค์ในเส้นทาง NVLink และ GPUDirect แก้ภายในสแต็กของผู้ขายรายเดียว ทางเลือกเปิดบน PCIe ต้องลบ inefficiency เดียวกัน — นั่นคือเหตุผลที่เส้นทาง peer ระดับ TLP ในบทที่ 32–33 และ "เหตุใดลิงก์เฉพาะจึงมีอยู่" ในบทนี้ เป็นเรื่องเดียวกัน

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

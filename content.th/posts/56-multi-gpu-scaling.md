---
title: "การขยายหลาย GPU"
weight: 57
date: 2026-01-01
draft: false
phase: "9 — GPU และการคำนวณขนาน"
series_index: 56
tags: []
summary: "GPU เดียวมีขอบเขต — อินเตอร์คอนเนกต์ระหว่าง GPU กลายเป็นกำแพงถัดไป"
image_prompt: "System diagram of an 8-GPU NVLink-connected node with NVSwitch, clean datacenter GPU cluster diagram style"
video_prompt: "25-second animation: data moving between 8 GPUs through an NVSwitch mesh vs a PCIe-only bottleneck, clean technical animation"
schematics: "Diagram: NVSwitch all-to-all topology + PCIe tree topology bottleneck comparison"
---

GPU เดียวมี compute และ HBM จำกัด (บทที่ 54) โมเดลใหญ่ที่สุดวันนี้ต้องการหลาย GPU — ในเซิร์ฟเวอร์เดียว แล้วข้ามคลัสเตอร์ — และวิธีที่ GPU เหล่านั้นคุยกันมักตัดสินปริมาณงานจริงไม่น้อยกว่า peak ของ GPU ตัวใดตัวหนึ่ง

## การแบ่งงานไม่ฟรี

บทที่ 46 ครอบคลุมว่า *เหตุใด* การแบ่ง data-parallel และ model-parallel จึงมักจำเป็น ประสิทธิภาพขึ้นกับว่า GPU แลกข้อมูลกันเร็วเพียงใด หากการสื่อสารช้าเทียบกับ compute ของแต่ละ GPU เพื่อนจะค้างรอกัน — memory wall (บทที่ 35) อีกครั้ง นำไปใช้กับลิงก์ GPU-ถึง-GPU แทน CPU-ถึง-DRAM

## เส้นทางตรงภายในเซิร์ฟเวอร์เดียว

บทที่ 37 แนะนำ NVLink เป็นอินเตอร์คอนเนกต์ GPU-ถึง-GPU แบนด์วิดท์สูงที่ข้ามเส้นทาง PCIe ผ่าน CPU ภายในเซิร์ฟเวอร์ NVSwitch ทำให้เป็น all-to-all: ทุก GPU ถึงทุกตัวอื่นที่แบนด์วิดท์ของ NVLink แทนผ่าน PCIe และโฮสต์ สำหรับ workload ที่แลก gradient ใหญ่ตลอด เส้นทางตรงนั้นมักกำหนดปริมาณงานฝึกที่ได้มากกว่าตัวเลข peak-FLOPS แยกเดี่ยวใด ๆ

## เกินหนึ่งกล่อง

การฝึกขนาดใหญ่ครอบหลายเซิร์ฟเวอร์ แนวคิด RDMA ของบทที่ 42 กลับมา: GPUDirect RDMA ให้ตัวปรับเครือข่ายอ่านหรือเขียนหน่วยความจำ GPU ข้ามเซิร์ฟเวอร์โดยไม่ต้องคัดลอกผ่าน DRAM โฮสต์เพิ่ม — เดิมพัน "ลดฮอป ทำให้แบนด์วิดท์ตรงสูงสุด" เดียวกัน ตอนนี้ที่สเกลคลัสเตอร์

## ปรัชญาที่ชุดนี้ตั้งชื่อซ้ำ

เส้นทาง GPU-ถึง-GPU ตรง ฮอปที่ไม่จำเป็นน้อยลง อินเตอร์คอนเนกต์เป็นข้อจำกัดชั้นหนึ่ง — ปรัชญาเดียวกันเบื้องหลัง fabric หน่วยความจำ GPU เฉพาะที่ชุดนี้กล่าวถึง: แนวทางเปิดบน PCIe สู่สิ่งที่ fabric กรรมสิทธิ์ทำภายในสแตกของผู้ขายหนึ่งราย เฟส 10 รับเส้นด้ายที่สเกลศูนย์ข้อมูลจริง — ไม่ใช่ GPU กำมือในกล่องเดียว แต่หลายพันข้ามคลัสเตอร์ฝึก เดินสายให้ compute รวมทางทฤษฎีไม่หายไปกับการประสาน

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

---
title: "เจาะลึก PCIe"
weight: 34
date: 2026-01-01
draft: false
phase: "5 — บัสและสถาปัตยกรรมระบบ"
series_index: 33
tags: []
summary: "เจตนานั่งบน TLP; ความเชื่อถือได้และการส่งสัญญาณอยู่ข้างล่าง — สแต็กที่แทนบัสร่วม"
image_prompt: "Technical diagram of the PCIe protocol stack with TLP structure broken down field by field, clean protocol-diagram style"
video_prompt: "25-second animation: a PCIe TLP assembled at the transaction layer, wrapped, then serialized across lanes, clean layered animation"
schematics: "Diagram: PCIe layered protocol stack + TLP header breakdown + differential pair lane diagram — relevant to Nitefury fabric project"
---

บทที่ 32 ครอบคลุม *เหตุใด* PCIe จึงไปอนุกรมและจุดต่อจุด บทนี้คือ *ว่า* การถ่ายโอนถูกจัดโครงสร้างบนลิงก์เหล่านั้นอย่างไร — ชั้นที่สำคัญหากคุณสร้างฮาร์ดแวร์ที่ต้องพูด fabric รวมถึงงาน GPU memory บน Nitefury ที่ชุดบทความนี้กลับมาหา

## เจตนา ความเชื่อถือได้ อิเล็กตรอน

สามชั้น สามงาน **Transaction Layer** คือที่ที่การอ่าน การเขียน หรือ completion เกิดและจบ — ชั้นที่ซอฟต์แวร์คิด **Data Link Layer** ทำให้การส่งมอบเชื่อถือได้: หมายเลขลำดับ CRC การส่งซ้ำหากแพ็กเก็ตเสีย **Physical Layer** คือสาย: คู่ดิฟเฟอเรนเชียล การเข้ารหัสให้กระแสกู้คืนได้ การ serialize ลงทองแดง แยกแบบนั้นเพื่อให้ออกแบบกำหนดเองแสดง *เจตนา* โดยไม่ต้องประดิษฐ์อิเล็กตรอนใหม่

## แพ็กเก็ตคือสัญญา

หน่วยคือ Transaction Layer Packet TLP ตั้งชื่อประเภท (อ่าน/เขียนหน่วยความจำ I/O การตั้งค่า) ที่อยู่ ความยาว และ — ในการเขียน — payload Link layer ห่อด้วยลำดับและ CRC; ฝั่งไกลตรวจและ retry หากจำเป็น จากข้างบน มันดูเหมือนการอ่านหรือเขียนที่เชื่อถือได้ ความเชื่อถือได้ไม่ใช่เวทมนตร์ มันคือการห่อนั้น

## Lane สเกลความกว้าง; รุ่นสเกลอัตรา

Lane คือคู่ดิฟเฟอเรนเชียลหนึ่งคู่ต่อทาง — ลิงก์ขั้นต่ำ รวม lane (x1…x16) เพื่อคูณแบนด์วิดท์ แต่ละรุ่นประมาณสองเท่าอัตราต่อ lane (ส่งสัญญาณสูงขึ้น การเข้ารหัสแน่นขึ้น) สล็อต x16 เดียวกัน Gen 5 เทียบ Gen 3: แบนด์วิดท์ทิศทางเดียวประมาณ 4× (~64 GB/s เทียบ ~16 GB/s) โดยไม่เพิ่มสาย การเดิมพันอนุกรมจากบทที่ 32 คือสิ่งที่ทำให้การปีนนั้นเป็นไปได้

## เหตุใด fabric กำหนดเองจึงสนใจ

การ์ด memory fabric บน FPGA ต้องอยู่บนสแต็กนี้: สร้าง TLP ที่ root complex และ endpoint อื่นยอมรับ และให้ IP ที่เป็นที่ยอมรับจัดการความเชื่อถือได้ของลิงก์กับ physical layer Peer-to-peer แบบ GPUDirect (บทที่ 37) คือไอเดียเดียวกันที่พาไปต่อ — TLP ที่ระบุที่อยู่ระหว่างสอง endpoint โดย CPU อยู่นอกเส้นทางข้อมูล

**ประตูออก:** The PCI Express Base Specification (PCI-SIG) — เอกสารปฐมภูมิที่มีชีวิตสำหรับ lane, TLP และสแต็กชั้นที่บทนี้ตั้งชื่อ; มีรุ่น (Base Spec ไม่ใช่เปเปอร์แช่แข็ง)

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

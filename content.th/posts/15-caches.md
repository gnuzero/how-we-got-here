---
title: "แคช"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 15
tags: []
summary: "Locality ทำให้ลำดับชั้นหน่วยความจำใช้ได้; associativity และ coherence คือต้นทุนของการทำให้มันซื่อสัตย์"
image_prompt: "Diagram of cache organization: direct-mapped, set-associative, fully-associative, clean memory-system textbook style"
video_prompt: "20-second animation: a memory address split into tag/index/offset, hit vs miss shown, clean technical animation"
schematics: "Diagram: cache address breakdown + set-associative structure + MESI coherence diagram"
---

บทที่ 10 วางลำดับชั้นหน่วยความจำไว้แล้ว: รีจิสเตอร์, แคช SRAM, DRAM, ดิสก์ — แลกความจุกับความเร็วทุกขั้น แคชคือจุดที่การแลกเปลี่ยนนั้นแบกรับประสิทธิภาพของ CPU ทุกตัว สมมติฐานวางบนข้อเท็จจริงเชิงประจักษ์เกี่ยวกับโปรแกรมจริงข้อเดียว: **locality**

## เหตุใดแคชจึงใช้ได้เลย

**Temporal locality** — ตำแหน่งที่เพิ่งแตะมีแนวโน้มจะถูกแตะอีกในไม่ช้า (ตัวแปรลูป โค้ดร้อน) **Spatial locality** — ตำแหน่งใกล้เคียงมีแนวโน้มถัดไป (อาร์เรย์ การดึงตามลำดับ) แคชเก็บข้อมูลที่ใช้ล่าสุดไว้ใกล้ และดึง *line* ทั้งก้อน (มัก 64 ไบต์) เมื่อ miss เดิมพันว่าเพื่อนบ้านจะมาถึงในไม่ช้า

การค้นแยกที่อยู่เป็น **offset** (ไบต์ใน line), **index** (set ไหน), และ **tag** (line ที่มีอยู่คือตัวที่เราต้องการจริงหรือไม่?)

## Line อยู่ได้ที่ไหน

**Direct-mapped** — หนึ่งสล็อตที่เป็นไปได้ต่อที่อยู่ ตรวจเร็ว; conflict miss เมื่อที่อยู่ร้อนสองตำแหน่งแชร์ index แล้วไล่กัน

**Fully associative** — line ใด สล็อตใดก็ได้ ไม่มี conflict miss; ทุกครั้งต้องเทียบทุก tag ไม่ขยายขนาดได้

**Set-associative** — จุดกลางเชิงปฏิบัติ: index เลือก set เล็ก (เช่น 8 ways); ตรวจ tag เฉพาะที่นั่น ความยืดหยุ่นส่วนใหญ่ ฮาร์ดแวร์น้อยกว่าการสแกนเต็มมาก แคชจริงเกือบทุกตัวอยู่ตรงนี้

## Multicore: Coherence เป็นข้อจำกัดใหม่

คอร์เดียว แคชส่วนตัวหนึ่ง: ใช้ได้ หลายคอร์ แต่ละตัวมีแคช: คอร์ A เขียน line ที่คอร์ B ยังถือ — หากไม่มีโปรโตคอล B อ่านค่าเก่าตลอดไป MESI (Modified, Exclusive, Shared, Invalid) คือคำตอบคลาสสิก: แท็กทุก line ด้วยสถานะ และสื่อสารการเปลี่ยน (bus snoop หรือ directory) เพื่อให้การเขียน invalidate หรืออัปเดตสำเนาที่อื่น

Coherence ไม่ฟรี และต้นทุนโตตามจำนวนคอร์ — เหตุผลหนึ่งที่ "แค่เพิ่มคอร์" (บทที่ 17) มีผลตอบแทนลดลงของตัวเอง แยกจากขีดจำกัด ILP

**ประตูออก:** M. V. Wilkes, "Slave Memories and Dynamic Storage Allocation" (*IEEE Transactions on Electronic Computers*, 1965) — คำแถลงยุคแรกของแนวคิดแคชในฐานะ slave store ที่เร็วข้างหน่วยความจำหลักที่ช้ากว่า

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

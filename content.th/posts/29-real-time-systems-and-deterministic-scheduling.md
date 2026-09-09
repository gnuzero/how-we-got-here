---
title: "ระบบเรียลไทม์และการจัดตารางแบบกำหนดได้"
weight: 30
date: 2026-01-01
draft: false
phase: "4 — รากฐานซอฟต์แวร์: OS, ภาษา และระบบเรียลไทม์"
series_index: 29
tags: []
summary: "ปริมาณงานและความยุติธรรมไม่ใช่กำหนดเวลา — hard real-time ต้องการจังหวะกรณีแย่สุดที่ถูกขอบเขต ไม่ใช่ความเร็วเฉลี่ย"
image_prompt: "Diagram comparing general-purpose OS scheduler vs RTOS scheduler, clean embedded-systems diagram style"
video_prompt: "20-second animation: two task schedules compared, general-purpose vs RTOS guaranteed deadline, clean comparative animation"
labs: ["mini-cpu"]
schematics: "Diagram: rate-monotonic scheduling timeline + hard vs soft real-time comparison"
---

ทุกอย่างในเฟส 4 จนถึงตอนนี้ — batch, time-sharing, หน่วยความจำเสมือน, คอนเทนเนอร์ — optimize เพื่อปริมาณงาน ความยุติธรรม หรือการแชร์อย่างมีประสิทธิภาพ ไม่มีอย่างใดรับประกันแข็งว่า *เมื่อไหร่* งานชิ้นหนึ่งจะเสร็จ ระบบเรียลไทม์สนใจการรับประกันนั้น "เร็ว" เป็นคุณสมบัติต่างจาก "เรียลไทม์" — ความต่างที่ทำให้คนสะดุดตลอด

## เร็วไม่ใช่กำหนดได้

Scheduler ทั่วไป (บทที่ 21–25) optimize เพื่อการตอบสนอง *กรณีเฉลี่ย* ที่ดีและการแชร์อย่างยุติธรรม — มักเร็วในกรณีทั่วไป "มักเร็ว" ไม่ใช่ "เสร็จเสมอภายในกำหนดที่ระบุ โดยไม่มีข้อยกเว้น" ผลของแคช การจัดการ interrupt หรือ pause จาก garbage collection (บทที่ 28) สามารถยืดดีเลย์ได้ สำหรับแอปส่วนใหญ่ ความแปรปรวนเป็นครั้งคราวไม่สำคัญ สำหรับระบบเรียลไทม์ มันอาจเป็นเกมทั้งก้อน

## Hard เทียบ Soft

กำหนด **hard**: พลาดแล้วคือความล้มเหลวของระบบทั้งก้อน — ไม่ใช่ประสิทธิภาพที่ลดลง การรักษาเสถียรภาพการควบคุมการบิน การปล่อยถุงลมนิรภัย — ทุกครั้ง ภายในหน้าต่าง หรือความล้มเหลวอาจหายนะ

กำหนด **soft**: พลาดแล้วคุณภาพลดลง แต่ไม่ใช่ความล้มเหลวทันที — เฟรมวิดีโอหล่นภายใต้โหลดไม่น่าอภิรมย์ ไม่ใช่วิกฤตการรับรอง แนวโน้มปฏิบัติแข็งที่จะชนกำหนด; ไม่ใช่การรับประกันที่ฮาร์ดแวร์บังคับ

## Rate-Monotonic Scheduling

แนวทางคลาสสิกหนึ่งต่อ hard real-time: rate-monotonic scheduling — มอบลำดับความสำคัญคงที่ให้แต่ละงานแบบคาบจากความถี่ที่ต้องรัน; คาบสั้นกว่า → ลำดับความสำคัญสูงกว่า พิสูจน์ได้ว่าเหมาะสมที่สุดในบรรดาอัลกอริทึมลำดับความสำคัญคงที่สำหรับคลาสงานคาบที่นิยามดี: หากการมอบลำดับความสำคัญคงที่ *ใด* สามารถชนทุกกำหนดสำหรับโหลดนั้น rate-monotonic จะทำได้ด้วย ขอบเขต schedulability ทางคณิตศาสตร์ — พอดีชนิดคุณสมบัติรูปนัยที่ระบบ hard real-time ต้องรับรองเทียบ

## เหตุใดจึงเป็น OS คนละชนิด

การรับประกันเหล่านี้ต้องการ OS ที่ออกแบบรอบจังหวะกรณีแย่สุดที่ถูกขอบเขต — Real-Time Operating System (RTOS) — ไม่ใช่สายเลือดปริมาณงาน/ความยุติธรรมของบทที่ 21–25 Interrupt latency ต้องถูกขอบเขตและรู้ได้ การจัดสรรหน่วยความจำโดยทั่วไปพึ่งกลไก latency ที่คาดเดาไม่ได้แบบ GC ทั่วไปไม่ได้ แม้ mutex ยังต้องการออกแบบระวัง (priority inheritance) เพื่อไม่ให้งานลำดับความสำคัญต่ำบล็อกงานลำดับความสำคัญสูงเป็นเวลาไม่จำกัด — priority inversion หลุมเรียลไทม์คลาสสิก

กลับไปที่แล็บ mini-CPU ด้วยเลนส์นี้: บนฮาร์ดแวร์ง่าย จังหวะของทุกคำสั่งกำหนดได้และนับได้ — ความคาดเดาได้ที่การออกแบบ RTOS สู้เพื่อรักษาเมื่อระบบซับซ้อนขึ้น บทถัดไปนำหลักการเหล่านี้เข้าสู่อากาศยาน การควบคุมอุตสาหกรรม และการดีพลอยต์ฝังตัวที่การรับประกันแบกน้ำหนักจริง

{{< lab type="mini-cpu" >}}

**ประตูออก:** C. L. Liu และ James W. Layland, "Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment" (*Journal of the ACM*, 1973) — เอกสารปฐมภูมิเบื้องหลัง rate-monotonic scheduling และ schedulability แบบ hard-real-time คลาสสิก

## อ่านเพิ่ม / อ้างอิง
- วโรดม ตู้จินดา, *ระบบควบคุมฝังตัว*
- วิรุฬห์ ศรีบริรักษ์, *Embedded Android Development*
- ดอนสัน ปงผาบ, *ไมโครคอนโทรลเลอร์และการประยุกต์ใช้งาน 1*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

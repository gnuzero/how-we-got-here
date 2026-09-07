---
title: "การออกแบบ Datapath"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 12
tags: []
summary: "Datapath แบบ single-cycle ทำให้ชิ้นส่วนมองเห็นได้ — และแสดงเหตุใดคล็อกของมันจึงถูกขนาดตามกรณีแย่สุด"
image_prompt: "Block diagram of a single-cycle RISC datapath, classic computer architecture textbook style"
video_prompt: "30-second animation: an instruction flowing through a single-cycle datapath, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: full single-cycle datapath block diagram with control unit and muxes labeled"
---

ISA (บทที่ 11) คือสัญญา Datapath คือฮาร์ดแวร์ที่ทำให้มันเกิดขึ้น เวอร์ชันที่เรียบง่ายที่สุด — datapath แบบ *single-cycle* — จบคำสั่งทั้งคำสั่งต่อหนึ่งติ๊กคล็อก: fetch, decode, execute, write-back เสร็จ CPU จริงวันนี้ไม่ได้สร้างแบบนี้ แต่มันยังเป็นวิธีที่ชัดเจนที่สุดที่จะเห็นว่าชิ้นส่วนของเฟส 2 เชื่อมกันอย่างไร

## หนึ่งคำสั่ง หนึ่งคล็อก

ชิ้นส่วน: **program counter** (flip-flop จากบทที่ 9) ที่เก็บที่อยู่คำสั่งถัดไป; **instruction memory** ที่ถูกดัชนีด้วย PC นั้น; **register file** สำหรับตัวถูกดำเนินการและผล; **ALU** (บทที่ 8) สำหรับการดำเนินการ; **data memory** สำหรับ load และ store; และ **control unit** ที่อ่าน opcode แล้วขับทุก mux และ enable

เอา ADD PC ดัชนี instruction memory Control unit เห็น ADD แบบ register-register รีจิสเตอร์ต้นทางสองตัวป้อน ALU; ผลของ ALU เขียนปลายทาง; PC ก้าวไป Fetch, decode, อ่านรีจิสเตอร์, ALU, write-back, อัปเดต PC — ทั้งหมดภายใน *หนึ่ง* คาบคล็อก

## ข้อจำกัดที่บังคับไปป์ไลน์

คาบคล็อกนั้นต้องยาวพอสำหรับเส้นทางเต็มของคำสั่งที่ *ช้าที่สุด* — แม้คำสั่งที่ไม่เคยแตะ data memory ดังนั้นทุก ADD จึงรันด้วยความเร็วของกรณีแย่สุด ปริมาณงานนั่งพื้น

ไปป์ไลน์ตอบข้อจำกัดนั้น: ตัดเส้นทางยาวเป็นขั้น คล็อกแต่ละขั้นตามกรณีแย่สุด *ของมัน* และให้คำสั่งต่างกันครองขั้นต่างกันพร้อมกัน ISA เดิม งานเสร็จต่อวินาทีมากขึ้นมาก นั่นคือบทถัดไป — และแนวคิดกลางของไมโครสถาปัตยกรรมคลาสสิก

{{< lab type="mini-cpu" >}}

## อ่านเพิ่ม / อ้างอิง
- จันทนา จันทราพรชัย, *สถาปัตยกรรมคอมพิวเตอร์และการออกแบบ*
- ผศ.ดร. ปัทมา ลงกานี, *สถาปัตยกรรมคอมพิวเตอร์*
- รศ.ดร.เกริก ภิรมย์โสภา, *สถาปัตยกรรมคอมพิวเตอร์ การออกแบบและวิเคราะห์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

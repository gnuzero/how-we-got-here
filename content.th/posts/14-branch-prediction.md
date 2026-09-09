---
title: "การทำนาย Branch"
weight: 14
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 14
tags: []
summary: "Pipeline flush แพง — การทำนายมีอยู่เพื่อทำให้มันหายาก"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

Branch ที่ทำนายผิด flush ทุกอย่างที่ดึงไปตามเส้นทางผิด บนไปป์ไลน์ลึก ต้นทุนนั้นเกินสิบรอบได้ง่าย บทที่ 13 ทิ้งต้นทุนนั้นไว้บนโต๊ะ; บทนี้คือคำตอบ: เดาทิศทาง (และเป้าหมาย) ให้เร็วพอให้ flush กลายเป็นเรื่องหายาก

## การเดาแบบ Static ไม่พอ

กฎ static — ไม่ taken เสมอ หรือ "branch ย้อนกลับ (ลูป) มักถูก taken" — ไม่เสียฮาร์ดแวร์ และพลาดโค้ดจริงจำนวนมาก พฤติกรรม branch ขึ้นกับประวัติที่กฎตายตัวมองไม่เห็น

Predictor แบบ dynamic ติดตามผลตอนรันไทม์ ลูปที่รัน 100 ครั้ง taken branch ย้อนกลับ 99 ครั้ง; predictor ที่จำได้ว่า "taken ครั้งที่แล้ว" ถูกเกือบทุก iteration

## ตัวนับ Saturating 2 บิต

บล็อกพื้นฐานคลาสสิก: สี่สถานะ — strongly/weakly not-taken, weakly/strongly taken แต่ละผลที่ resolve ขยับตัวนับหนึ่งขั้นไปทางที่เกิดขึ้นจริง (อิ่มตัวที่ปลาย) การทำนายคือบิตบน

เหตุใดไม่ใช้หนึ่งบิต? "ผลครั้งล่าสุด" 1 บิตพลิกหลังความผิดปกติครั้งเดียว — แล้วทำนายผิดบน iteration *ปกติ* ครั้งถัดไปด้วย สองบิตต้องการความผิดปกติสองครั้งติดกันจึงจะพลิก ดังนั้น exit แบบ not-taken สุดท้ายของลูปจึงไม่ทำลายรอบลูปรอบถัดไป

## จะดึงต่อไปที่ไหน

ทิศทางเป็นเพียงครึ่งหนึ่ง สำหรับ branch ที่ taken การดึงยังต้องการ *เป้าหมาย* ก่อนที่ branch จะถูกดีโค้ดเต็ม Branch Target Buffer (BTB) คือแคชเล็ก ถูกดัชนีด้วยที่อยู่คำสั่ง ที่จำเป้าหมายที่ resolve ครั้งล่าสุด เมื่อ hit การดึงสามารถกระโดดแบบ speculative ได้ในรอบถัดไป

Predictor จริงรวมตารางตัวนับ (มักกับประวัติ global) กับ BTB; ชิประดับสูงไปไกลกว่านั้น ตัวนับ 2 บิตยังเป็นแก่นเชิงแนวคิด — และเล็กพอที่จะไล่ด้วยมือในแล็บ mini-CPU: เดินทีละขั้นผ่าน branch ของลูป แล้วดูสถานะการทำนายอัปเดตทุก iteration

{{< lab type="mini-cpu" >}}

**ประตูออก:** James E. Smith, "A Study of Branch Prediction Strategies" (ISCA 1981) — การวิเคราะห์เชิงระบบยุคแรกของการทำนาย branch แบบ dynamic รวมแนวคิด saturating-counter ที่กลายเป็นตำรา

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

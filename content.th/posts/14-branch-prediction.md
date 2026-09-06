---
title: "การทำนาย Branch"
date: 2026-01-01
draft: false
phase: "3 — การสร้าง CPU และสถาปัตยกรรมของมัน"
series_index: 14
tags: []
summary: "เหตุใดจึงสำคัญ และทำงานอย่างไร"
image_prompt: "Diagram of a 2-bit saturating counter branch predictor state machine, clean state-machine diagram style"
video_prompt: "20-second animation: branch predictor transitioning between states, pipeline flush on misprediction, clean technical animation"
labs: ["mini-cpu"]
schematics: "Diagram: 2-bit saturating counter FSM + branch target buffer block diagram"
---

Pipeline flush จาก branch ที่ทำนายผิดแพง — ทุกคำสั่งที่ดึงไปตามเส้นทางผิดต้องถูกทิ้ง และไปป์ไลน์ต้องรีสตาร์ทจากเป้าหมายที่ถูกต้อง บนไปป์ไลน์ลึก การทำนายผิดครั้งเดียวเสียรอบได้มากกว่าสิบรอบ การทำนาย branch มีอยู่เพื่อทำให้สิ่งนั้นหายากแทนที่จะเป็นประจำ

## การทำนายแบบ Static กับ Dynamic

แนวทางที่เรียบง่ายที่สุดคือ static: ทำนาย "not taken" เสมอ หรือใช้ฮิวริสติกอย่าง "branch ย้อนกลับ (ลูป) มักถูก taken; branch ไปข้างหน้ามักไม่" สิ่งนี้ไม่เสียฮาร์ดแวร์อะไร แต่ค่อนข้างไม่แม่นสำหรับโค้ดจริง ที่พฤติกรรม branch มักขึ้นกับประวัติโปรแกรมในทางที่กฎตายตัวจับไม่ได้

การทำนายแบบ dynamic ติดตามผล branch *จริง* ตอนรันไทม์ และใช้ประวัติล่าสุดทำนายพฤติกรรมอนาคต แม่นกว่ามาก เพราะ branch จริงมักสัมพันธ์กับอดีตของตัวเอง ลูปที่รัน 100 ครั้ง taken branch ย้อนกลับ 99 ครั้งและ fall through ครั้งเดียว; predictor แบบ dynamic ที่จำได้ว่า "branch นี้ถูก taken ครั้งที่แล้ว" จะถูกเกือบทุก iteration ของลูปนั้น

## ตัวนับ Saturating 2 บิต

บล็อกพื้นฐานคลาสสิกคือเครื่องสถานะเล็กต่อ branch: ตัวนับ 2 บิตสี่สถานะ — strongly not taken, weakly not taken, weakly taken, strongly taken ทุกครั้งที่ branch resolve ตัวนับขยับหนึ่งขั้นไปทางทิศที่เกิดขึ้นจริง (อิ่มตัวที่ปลายแทนที่จะวน) การทำนายคือบิตบนของตัวนับพอดี

เหตุใดสิ่งนี้ชนะ predictor "ผลครั้งล่าสุด" 1 บิตธรรมดา: predictor 1 บิตพลิกหลังผลผิดปกติ *ครั้งเดียว* แม้ branch จะปกติสม่ำเสมอ — ทำให้ทำนายผิดบน iteration ปกติครั้งถัดไปด้วย เวอร์ชัน 2 บิตต้องการผลผิดปกติ *สองครั้งติดกัน* จึงจะพลิก ซึ่งดูดซับข้อยกเว้นครั้งเดียว (เช่น iteration สุดท้ายของลูปที่ไม่ taken) โดยไม่ทำลายการทำนายที่สม่ำเสมอ

## Branch Target Buffer

การทำนาย *ทิศทาง* (taken / not taken) เป็นเพียงครึ่งหนึ่งของปัญหา สำหรับ branch ที่ taken ไปป์ไลน์ยังต้องรู้ *จะดึงต่อไปที่ไหน* ก่อนที่ branch จะถูกดีโค้ดเต็ม A Branch Target Buffer (BTB) คือแคชเล็ก ถูกดัชนีด้วยที่อยู่คำสั่ง ที่จำเป้าหมายที่ branch นั้น resolve ไปครั้งล่าสุด เมื่อ BTB hit การดึงสามารถกระโดดแบบ speculative ไปยังเป้าหมายที่ทำนายได้ในรอบถัดไป แทนที่จะรอให้ branch ถูกดีโค้ดและคำนวณเป้าหมายแบบช้า

## สิ่งนี้อยู่ที่ไหนในฮาร์ดแวร์จริง

Predictor จริงรวมทั้งสองโครงสร้าง — ตารางตัวนับ 2 บิตที่ดัชนีด้วยที่อยู่ branch (บางครั้งรวมประวัติ branch แบบ global เพื่อความแม่นยิ่งขึ้น) บวก BTB สำหรับการทำนายเป้าหมาย — และ CPU ระดับสูงสมัยใหม่ผลักต่อไปด้วย predictor แนวคิดโครงข่ายประสาทที่ฝึกบนประวัติยาว ตัวนับ 2 บิตยังคงเป็นแก่นเชิงแนวคิด และ implement ได้ตรงเป็นเครื่องสถานะเล็ก: คุ้มที่จะไล่ด้วยมือในแล็บ mini-CPU ที่แนบกับบทนี้ เดินทีละขั้นผ่านคำสั่ง branch ของลูปเล็ก ๆ และดูสถานะการทำนายอัปเดตทุก iteration

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

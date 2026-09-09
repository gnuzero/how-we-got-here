---
title: "จากเกตสู่ตรรกะเชิงผสม"
weight: 8
date: 2026-01-01
draft: false
phase: "2 — ฟิสิกส์และอุปกรณ์"
series_index: 8
tags: []
summary: "ประกอบเกตเป็นอแดเดอร์และ ALU — แล้วชนดีเลย์ carry-ripple ที่บังคับโครงสร้างที่ดีกว่า"
image_prompt: "Block diagram of a 1-bit full adder with truth table, clean digital logic textbook style"
video_prompt: "20-second animation: full adder circuit computing a sum with carry propagation, clean technical animation"
labs: ["breadboard"]
schematics: "Diagram: full adder gate-level schematic + 4-bit ripple carry adder + 2-bit ALU block diagram"
---

เกตตัวเดียวแทบไร้ประโยชน์ด้วยตัวเอง พฤติกรรมที่มีประโยชน์เริ่มเมื่อคุณประกอบพวกมัน — และโครงสร้างแรกมาตรฐานคืออแดเดอร์: จุดที่เกตกลายเป็น "สิ่งที่ทำเลขคณิตภายใน CPU"

## จาก Half Adder สู่ Full Adder

สองบิต A และ B: ผลบวกคือ XOR, carry คือ AND Half adder นั้นรับ carry-*in* จากบิตที่มีนัยสำคัญน้อยกว่าไม่ได้ Full adder รับ A, B และ Cin แล้วผลิต Sum กับ Cout — Sum = A XOR B XOR Cin; Cout จาก majority ของสามอินพุต ต่อ Cout ของขั้นหนึ่งเข้า Cin ของขั้นถัดไป แล้วบวกความกว้างใดก็ได้ ทีละตำแหน่งบิต

**ลองตอนนี้.** แล็บด้านล่างยังเปิดที่เกต AND — นั่นคือ carry ของ half adder สลับอินพุตทั้งสองเป็นสูงแล้วดูเอาต์พุตขึ้นสูง; เกตตัวเดียวนี้คือข้อจำกัดที่จะระลอกเมื่อคุณต่ออแดเดอร์เป็นห่วงโซ่ในหัวข้อถัดไป

{{< lab type="breadboard" height="700" >}}

## Ripple-Carry: ง่าย ช้าด้วยเหตุผล

Full adder สี่ตัวเรียงกันคือ ripple-carry adder 4 บิต Carry ของบิต 3 จะถูกต้องไม่ได้จนกว่าของบิต 2 จะนิ่ง ซึ่งรอของบิต 1 ซึ่งรอของบิต 0 Carry *ระลอก* ที่ 4 บิตใช้ได้; ที่ 64 บิต ห่วงโซ่นั้นกำหนดว่า ALU ทั้งก้อนคล็อกเร็วได้แค่ไหน ข้อจำกัดดีเลย์นั้นพอดีคือเหตุผลที่ CPU จริงเพิ่ม carry-lookahead (และญาติ): เกตมากขึ้น เส้นทางกรณีแย่สุดสั้นลง รูปแบบเดียวกับที่เหลือของหนังสือเล่มนี้ — คอขวดทางกายภาพบังคับสถาปัตยกรรมถัดไป

## จากอแดเดอร์สู่ ALU ง่าย ๆ

ใส่มัลติเพล็กเซอร์หน้าฮาร์ดแวร์อแดเดอร์ชุดเดียวกัน: บิตควบคุมเลือกบวก ลบ (บวกพร้อมตัวถูกดำเนินการกลับบิตบวก Cin — นำอแดเดอร์กลับมาใช้) AND, OR บล็อกเดียว หลายเส้นทางเชิงผสม เล็กเชิงแนวคิด; เชิงปฏิบัติคือช่วงแรกที่ "เกต" กลายเป็นเลขคณิตของ CPU

ทุกอย่างจนถึงตอนนี้เป็นเชิงผสม — เอาต์พุตขึ้นกับอินพุตปัจจุบันเท่านั้น ลำดับการดำเนินการต้องการสถานะที่คงอยู่ข้ามเวลา นั่นคือบทถัดไป

## อ่านเพิ่ม / อ้างอิง
- ทรงยศ นาคอริยกุล, *การวิเคราะห์และออกแบบวงจรดิจิทัล*
- ศิริพร เดชะศิลารักษ์, *เอกสารประกอบการสอนการออกแบบวงจรดิจิตอลและวงจรตรรกะ*
- ธีรวัฒน์ ประกอบผล, *ดิจิตอลลอจิก*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

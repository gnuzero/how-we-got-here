---
title: "การคำนวณเชิงกลไกและไฟฟ้ากลไก"
weight: 2
date: 2026-01-01
draft: false
phase: "1 — รากฐาน: จากการคำนวณเชิงกลไกสู่หลอดสุญญากาศ"
series_index: 1
tags: []
summary: "เฟืองบังคับแนวคิดโปรแกรม; แรงเสียดทานบังคับไฟฟ้า"
image_prompt: "Cutaway technical illustration of Babbage's Analytical Engine, brass gears and column wheels, engineering-diagram style, labeled parts, cross-hatched shading, 19th century technical drawing aesthetic, white background"
video_prompt: "30-second animation: mechanical gear train advancing digit by digit on a Babbage-style calculating engine, camera slowly panning across interlocking brass gears, showing carry propagation mechanically, muted sepia tones"
schematics: "Diagram: Jacquard loom punch card mechanism + Babbage difference engine gear train (carry mechanism detail)"
---

การคำนวณไม่ได้เริ่มต้นด้วยไฟฟ้า มันเริ่มต้นด้วยเฟือง

## เครื่องของ Babbage

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d4/London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2%2C_pt._1_%282290036668%29.jpg" alt="Difference Engine No. 2 ของ Charles Babbage ที่ Science Museum ลอนดอน" loading="lazy" width="1280">
<figcaption>Difference Engine No. 2 (Science Museum, London). ภาพ: <a href="https://commons.wikimedia.org/wiki/File:London_Science_Museum_by_Marcin_Wichary_-_Difference_Engine_No._2,_pt._1_(2290036668).jpg">Marcin Wichary</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>.</figcaption>
</figure>

ในปี 1822 Charles Babbage เสนอ Difference Engine — เครื่องคำนวณเชิงกลไกสำหรับฟังก์ชันพหุนาม ใช้วิธีผลต่างอันดับจำกัด ทั้งหมดผ่านเฟืองที่เกี่ยวกันและล้อคอลัมน์ ไม่มีไฟฟ้า แต่ละคอลัมน์คือหนึ่งหลัก; การทด "1" เป็นเหตุการณ์ทางกายภาพ: ฟันเฟืองเกี่ยวแล้วหมุนเพื่อนบ้าน

เขาไม่เคยสร้าง Difference Engine ขนาดเต็มจนเสร็จ — ทั้งเงินทุนและความคลาดเคลื่อนในการผลิตต่างขัดขวาง — แต่ผลงานตามมาอย่าง Analytical Engine คือบรรพบุรุษที่แท้จริง มันมี "store" (หน่วยความจำ) และ "mill" (หน่วยเลขคณิต) และโปรแกรมได้ คำสั่งมาจากบัตรเจาะ ยืมจากเครื่องจักรอุตสาหกรรมที่มีอยู่แล้วบนพื้นโรงงาน

## กี่ Jacquard

เครื่องจักรนั้นคือกี่ Jacquard Drawloom ต้นทศวรรษ 1800 ของ Joseph-Marie Jacquard ใช้โซ่บัตรเจาะตัดสินว่าเส้นด้ายเส้นใดยกในแต่ละรอบของกระสวย: มีรู → ยก ไม่มีรู → ปิดกั้น เปลี่ยนบัตร เปลี่ยนลาย กี่ไม่ได้ "รู้" ว่าซิลค์บรอเคดหมายความว่าอะไร; มันดำเนินลำดับการตัดสินใจยก/ไม่ยกที่เข้ารหัสทางกายภาพอย่างตายตัว

นั่นคือ abstraction ที่ Babbage นำมาใช้: โปรแกรมคือลำดับคำสั่ง แยกจากเครื่องที่รัน Ada Lovelace เห็นว่าการแยกนั้นหมายความว่าอะไร — เครื่องจัดการสัญลักษณ์ *ใดก็ได้* ไม่ใช่แค่ตัวเลข หากคุณออกแบบบัตรให้ถูกต้อง บันทึกของเธอบนเปเปอร์ Analytical Engine ของ Menabrea รวมสิ่งที่มักถูกเรียกว่าโปรแกรมคอมพิวเตอร์ที่ตีพิมพ์ชุดแรก (จำนวน Bernoulli)

**ประตูออก:** *Notes* ของ Ada Lovelace บน Analytical Engine (บนคำแปลของ Menabrea) — ข้อความปฐมภูมิสำหรับสเก็ตช์จำนวน Bernoulli และข้อโต้แย้ง "สัญลักษณ์ใดก็ได้"

## เหตุใดจึงสำคัญต่อทุกสิ่งที่ตามมา

ชุดคำสั่ง โปรแกรมที่เก็บไว้ การแยกการควบคุมจาก datapath — ทั้งหมดมีรากที่นี่ สื่อเปลี่ยนสิ้นเชิง (รีเลย์ หลอด ทรานซิสเตอร์); รูปร่างเชิงตรรกะไม่เปลี่ยน: ลำดับคำสั่ง หน่วยประมวลผล คลังที่เก็บสถานะระหว่างขั้นตอน

สิ่งที่การคำนวณเชิงกลไก *ทำไม่ได้* คือขยายขนาด ชุดเฟืองมีแรงเสียดทาน backlash และการสะสมความคลาดเคลื่อน; ทุกหลักความแม่นยำที่เพิ่มทำให้เครื่องสร้างให้เชื่อถือได้ยากขึ้น เพดานนั้น — ไม่ใช่การขาดแนวคิด — คือสิ่งที่ผลักการคำนวณไปสู่การสลับด้วยไฟฟ้า ต่อไป: รีเลย์ และตรรกะไฟฟ้ากลไกที่พาสถาปัตยกรรมเข้าสู่สงครามโลกครั้งที่สอง

<!--
ASSET CHECKLIST
[x] Hero: CC BY 2.0 Commons hotlink (Marcin Wichary / Difference Engine No. 2) — not hosted
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

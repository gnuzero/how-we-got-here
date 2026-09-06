---
title: "การคำนวณเชิงกลไกและไฟฟ้ากลไก"
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

การคำนวณไม่ได้เริ่มด้วยไฟฟ้า มันเริ่มด้วยเฟือง

## เครื่องของ Babbage

ปี 1822 Charles Babbage เสนอ Difference Engine — เครื่องคำนวณเชิงกลไกสำหรับฟังก์ชันพหุนาม ใช้วิธีผลต่างอันดับจำกัด (method of finite differences) ทั้งหมดผ่านเฟืองเกี่ยวกันและล้อคอลัมน์ ไม่มีไฟฟ้า แต่ละคอลัมน์คือหนึ่งหลัก; การทด "1" เป็นเหตุการณ์ทางกายภาพ: ฟันเฟืองเกี่ยวแล้วหมุนเพื่อนบ้าน

เขาไม่เคยสร้าง Difference Engine ขนาดเต็มจนเสร็จ — ทั้งเงินทุนและความคลาดเคลื่อนการผลิตต่างขัดขวาง — แต่ผลงานตามมาอย่าง Analytical Engine คือบรรพบุรุษที่แท้จริง มันมี "store" (หน่วยความจำ) และ "mill" (หน่วยเลขคณิต) และโปรแกรมได้ คำสั่งมาจากบัตรเจาะ ยืมมาจากเครื่องจักรอุตสาหกรรมที่มีอยู่แล้วบนพื้นโรงงาน

## กี่ Jacquard

เครื่องจักรนั้นคือกี่ Jacquard กี่ดึงต้นศตวรรษ 1800 ของ Joseph-Marie Jacquard ใช้โซ่บัตรเจาะตัดสินว่าเส้นด้ายเส้นใดถูกยกในแต่ละรอบกระสวย: มีรู → ยก ไม่มีรู → ปิดกั้น เปลี่ยนบัตร เปลี่ยนลาย กี่ไม่รู้ว่า "ซิลค์บรอเคด" คืออะไร; มันดำเนินลำดับการตัดสินใจยก/ไม่ยกที่เข้ารหัสทางกายภาพอย่างตายตัว

นั่นคือ abstraction ที่ Babbage นำมาใช้: โปรแกรมคือลำดับคำสั่ง แยกจากเครื่องที่รัน Ada Lovelace เห็นว่าการแยกนั้นหมายความว่าอะไร — เครื่องจัดการสัญลักษณ์ *ใดก็ได้* ไม่ใช่แค่ตัวเลข หากคุณออกแบบบัตรให้ถูก บันทึกของเธอบนงานแปล Menabrea เรื่อง Analytical Engine รวมสิ่งที่มักเรียกว่าโปรแกรมคอมพิวเตอร์ที่ตีพิมพ์ชุดแรก (จำนวน Bernoulli)

**ประตูออก:** *Notes* ของ Ada Lovelace บน Analytical Engine (บนงานแปลของ Menabrea) — ข้อความปฐมภูมิสำหรับร่างจำนวน Bernoulli และการโต้แย้ง "สัญลักษณ์ใดก็ได้"

## เหตุใดจึงสำคัญต่อทุกสิ่งที่ตามมา

ชุดคำสั่ง โปรแกรมที่เก็บไว้ การแยกการควบคุมจาก datapath — ทั้งหมดมีรากที่นี่ สื่อเปลี่ยนสิ้นเชิง (รีเลย์ หลอด ทรานซิสเตอร์); รูปร่างเชิงตรรกะไม่เปลี่ยน: ลำดับคำสั่ง หน่วยประมวลผล คลังที่เก็บสถานะระหว่างขั้น

สิ่งที่การคำนวณเชิงกลไก *ทำไม่ได้* คือขยายขนาด ชุดเฟืองมีแรงเสียดทาน backlash และการสะสมความคลาดเคลื่อน; ทุกหลักความแม่นยำที่เพิ่มทำให้เครื่องสร้างให้เชื่อถือได้ยากขึ้น เพดานนั้น — ไม่ใช่การขาดแนวคิด — คือสิ่งที่ผลักการคำนวณไปสู่การสลับด้วยไฟฟ้า ต่อไป: รีเลย์ และตรรกะไฟฟ้ากลไกที่พาสถาปัตยกรรมเข้าสู่สงครามโลกครั้งที่สอง

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

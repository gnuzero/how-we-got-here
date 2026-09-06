---
title: "Attention Is All You Need"
date: 2026-01-01
draft: false
phase: "10 — ฮาร์ดแวร์ AI สมัยใหม่"
series_index: 63
tags: ["attention", "transformers", "neural networks"]
summary: "Self-attention ปิดแกน — การจำลองลำดับแบบขนานที่แมปเข้ากับฮาร์ดแวร์คูณเมทริกซ์ที่เส้นทางนี้สร้างไว้"
image_prompt: "Clean technical diagram of multi-head self-attention: queries, keys, values flowing into scaled dot-product attention, multiple heads, residual connections, modern AI architecture illustration style, white background"
video_prompt: "25-second animation: tokens attending to each other via query-key-value, attention weights lighting up, multi-head parallel paths merging, clean modern technical style"
schematics: "Diagram: Scaled Dot-Product Attention + Multi-Head Attention block + full Transformer encoder layer"
---

ชื่อชุดนี้คือ *จากรีเลย์สู่ Attention* ทุกอย่างจนถึงจุดนี้คือเส้นทางทางกายภาพและสถาปัตยกรรมอันยาวไกลที่ทำให้การคูณเมทริกซ์ขนาดใหญ่เป็นไปได้จริง บทนี้คือจุดหมายเชิงอัลกอริทึมที่เส้นทางนั้นเปิดทางให้

ปี 2017 **Vaswani et al.** ตีพิมพ์ "Attention Is All You Need" งานนี้แนะนำ Transformer และทำให้ *self-attention* เป็นกลไกหลักในการจำลองลำดับ — แทนที่การเกิดซ้ำแบบลำดับของ RNN และ LSTM ด้วยปฏิบัติการที่ขนานได้อย่างเต็มที่ ซึ่งมองทุกตำแหน่งพร้อมกันได้

## Self-Attention ทำอะไร

เมื่อได้ token embedding แล้ว self-attention คำนวณสำหรับทุกตำแหน่งผลรวมแบบถ่วงน้ำหนักของค่าที่ทุกตำแหน่ง น้ำหนักมาจากความคล้ายระหว่าง *query* (ตำแหน่งปัจจุบัน) กับ *keys* (ทุกตำแหน่ง) ในรูปเมทริกซ์:

\[
\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^\top}{\sqrt{d_k}}\right)V
\]

- \(Q\), \(K\) และ \(V\) คือการฉายเชิงเส้นของอินพุต
- การหารด้วย \(\sqrt{d_k}\) ช่วยไม่ให้ softmax อิ่มตัวเมื่อมิติใหญ่
- ผลลัพธ์คือลำดับยาวเท่าเดิม ที่แต่ละตำแหน่งรวบรวมจากตำแหน่งอื่นทั้งหมดในแบบที่ขึ้นกับข้อมูล

เพราะปฏิบัติการคือ matmul บวก softmax มันแมปเข้ากับฮาร์ดแวร์ของบทก่อน: หน่วย MAC ปริมาณงานสูง หน่วยความจำบนชิปขนาดใหญ่ อินเตอร์คอนเนกต์ที่เคลื่อน activation และน้ำหนัก

## Multi-Head Attention

หัวเดียวมักเรียนรู้ความสัมพันธ์ชนิดเดียว Multi-head attention รันหลายหัวขนาน (การฉายที่เรียนรู้ต่างกัน) แล้วต่อผลลัพธ์ — เชิงวากยสัมพันธ์ เชิงความหมาย เชิงตำแหน่ง ระยะไกลและระยะใกล้ในชั้นเดียวกัน

Transformer ต้นฉบับใช้ 8 หัว LLM สมัยใหม่มักใช้หลายสิบถึงหลักร้อยต่ำของ query head ต่อชั้น (เช่น GPT-3: 96; Llama 3 405B: 128) ข้ามหลายสิบถึงราว 100+ ชั้น (Llama 3 405B: 126) — ไม่ใช่ "หลายร้อย" ของทั้งสองอย่างเป็นประจำ

## เหตุใดจึงครองสนาม

1. **ความขนาน** — ต่างจาก RNN ทุกตำแหน่งรันพร้อมกันได้ ปริมาณงานเทรนปรับตามความยาวลำดับและความจุ matmul ของฮาร์ดแวร์ ไม่ใช่ขั้นตอนตามลำดับ
2. **การพึ่งพาระยะไกล** — โดยหลักการโทเคนใดใส่ใจโทเคนอื่นได้โดยตรง จำกัดด้วยเมทริกซ์ attention กำลังสองและ context window ในทางปฏิบัติ
3. **ความเข้ากันได้กับฮาร์ดแวร์** — งานหลักคือการคูณเมทริกซ์หนาแน่น — พอดีกับสิ่งที่ tensor core, systolic array และลำดับชั้นหน่วยความจำ GPU สมัยใหม่ถูกปรับให้เหมาะสม (บทที่ 55–58)

ต้นทุนกำลังสองของ full attention ยังจริง — จึงมี sparse, linear, sliding-window และ approximation อื่น ข้อสังเกตหลักยังยืน: กลไก attention ที่เรียบง่ายและขนานได้สามารถแทนที่การเกิดซ้ำได้

## ปิดเส้นโค้ง

จากรีเลย์แม่เหล็กไฟฟ้าที่ทำให้ตรรกะบูลีนเป็นจริง ผ่านหลอด ทรานซิสเตอร์ ไปป์ไลน์ แคช GPU และ tensor core เส้นทางฮาร์ดแวร์ทำให้การสลับ การเก็บ และการคำนวณเลขคณิตเร็วขึ้น หนาแน่นขึ้น และมีประสิทธิภาพมากขึ้น Attention คือโครงสร้างเชิงอัลกอริทึมที่ปัจจุบันดึงคุณค่าจากฮาร์ดแวร์นั้นได้มากที่สุดสำหรับการจำลองลำดับ

ข้อจำกัดทางกายภาพยังเปลี่ยน (แบนด์วิดท์หน่วยความจำ พลังงานต่อปฏิบัติการ ความหน่วงอินเตอร์คอนเนกต์) การตอบสนองทางวิศวกรรมยังเป็นรูปแบบเดียวกันตั้งแต่ต้นชุดนี้: ตั้งชื่อข้อจำกัดที่ผูกมัดให้แม่นยำ แล้วเปลี่ยนสถาปัตยกรรม แทนที่จะเพียงผลักแรงกว่าเดิมกับกำแพงเดิม

นั่นคือเส้นด้ายต่อเนื่องจากรีเลย์สู่ attention

**ประตูออก:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser และ Illia Polosukhin, "Attention Is All You Need" (NeurIPS 2017) — งานปฐมภูมิที่แนะนำ Transformer และทำให้ self-attention เป็นกลไกจำลองลำดับที่ครองสนาม

## อ่านเพิ่ม / อ้างอิง
- สุพจน์ เฮงพระพรหม, *การเรียนรู้ของเครื่อง MACHINE LEARNING*
- นวลวรรณ สุนทรภิษัช, *การเรียนรู้ของเครื่อง Machine Learning*
- รศ.ดร.วฤษาย์ ร่มสายหยุด, *การเรียนรู้ของเครื่องสำหรับการวิเคราะห์ข้อมูลเชิงทำนายและการประยุกต์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

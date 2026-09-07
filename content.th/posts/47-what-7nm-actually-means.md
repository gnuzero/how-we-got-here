---
title: "'7nm' หมายถึงอะไรจริง ๆ"
date: 2026-01-01
draft: false
phase: "8 — โหนดกระบวนการและการผลิต"
series_index: 47
tags: []
summary: "ชื่อโหนดหยุดติดตามความยาวกายภาพเดี่ยว — ความหนาแน่นและ pitch คือฟิสิกส์; ป้ายคือรุ่น"
image_prompt: "Infographic debunking the '7nm = physical measurement' myth, showing fin pitch/gate pitch numbers vs marketing node names, clean technical infographic style"
video_prompt: "15-second animation: a magnifying glass zooming into a transistor cross-section revealing the naming gap, clean explainer motion graphics"
schematics: "Diagram: node name vs actual fin pitch/gate pitch comparison table across TSMC/Samsung/Intel"
---

ทุกอุปกรณ์ซิลิคอนก่อนหน้าในชุดนี้ — MOSFET (บทที่ 6), CMOS (บทที่ 7), เซลล์หน่วยความจำ (บทที่ 10) — อยู่ที่สเกลที่ความแม่นยำของการผลิตตัดสินว่าอะไรเป็นไปได้ ป้ายอย่าง "7nm" หรือ "5nm" ถูกถือราวกับเป็นความยาววัดได้เดี่ยวบนทรานซิสเตอร์ พวกมันไม่ใช่แบบนั้นมานานแล้ว

## เมื่อชื่อเป็นความยาว

ในอดีตชื่อโหนดกระบวนการติดตามมิติจริง — โดยประมาณความยาวเกตต่ำสุดของ planar MOSFET (บทที่ 6) "กระบวนการ 90nm" หมายถึงสิ่งที่ชี้บนอุปกรณ์ได้ ความสอดคล้องนั้นถือได้ตลอดยุค planar แล้วพัง

## เหตุใดตัวเลขเดียวไม่พออีกต่อไป

โครงสร้าง FinFET และ Gate-All-Around ภายหลัง (บทที่ 48–49) ทำให้ความยาวเกตเป็นเพียงหนึ่งในหลายมิติรับน้ำหนัก ความสูง fin, fin pitch, gate pitch และ interconnect pitch สำคัญแยกกัน — และโรงหล่อต่างกัน (TSMC, Samsung, Intel) แลกต่างกัน กระบวนการ "7nm" สองกระบวนการไม่ใช่ฟิสิกส์เดียวกันใต้ป้ายเดียวกัน

## ป้ายคืออะไรตอนนี้

ชื่อโหนดสมัยใหม่ส่วนใหญ่เป็นเครื่องหมายรุ่น — "รุ่นถัดไปของเราที่หนาแน่นและมีประสิทธิภาพกว่า" — ไม่ใช่สเปกกายภาพข้ามโรงหล่อ การเปรียบเทียบที่มีความหมายใช้ปริมาณที่วัดได้อิสระ: fin pitch, gate pitch, ทรานซิสเตอร์ต่อตารางมิลลิเมตร สิ่งเหล่านั้นมักแสดงว่า "7nm" ของโรงหล่อหนึ่งหนาแน่นกว่าของอีกโรงหล่อ เพราะการตั้งชื่อแยกจากความยาวเดี่ยวใด ๆ

## เหตุใดช่องว่างจึงสำคัญ

"5nm ของ TSMC เทียบ 5nm ของ Samsung" ไม่ใช่แอปเปิลต่อแอปเปิลเพียงเพราะสตริงตรง ช่องว่างการตั้งชื่อมีเพราะพื้นที่ออกแบบหยุดเป็นหนึ่งมิติ — ความยาวเกต planar ยอมให้เรขาคณิต 3D และการแลกหลาย pitch นั่นคือการตั้งฉากสำหรับบทถัดไป: lithography ที่ยังพิมพ์โครงสร้างเหล่านั้นได้ (บทที่ 48) และการเปลี่ยนเรขาคณิตทรานซิสเตอร์ที่ทำให้ความยาวเดี่ยวล้าสมัย (บทที่ 49)

## อ่านเพิ่ม / อ้างอิง
- ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

---
title: "คอมไพเลอร์, JIT และรันไทม์ภาษาสมัยใหม่"
weight: 28
date: 2026-01-01
draft: false
phase: "4 — รากฐานซอฟต์แวร์: OS, ภาษา และระบบเรียลไทม์"
series_index: 28
tags: []
summary: "AOT คอมไพล์ครั้งเดียวโดยไม่มีข้อเท็จจริงรันไทม์; JIT รอ hot path — และ garbage collection ย้ายต้นทุนเข้าไปในรันไทม์"
image_prompt: "Pipeline diagram of a compiler with a JIT feedback loop shown alongside, clean compiler-textbook diagram style"
video_prompt: "25-second animation: source flowing through compiler stages, JIT recompiling a hot path, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: compiler pipeline block diagram + JIT vs AOT comparison"
---

บทที่ 27 ครอบคลุม *เหตุใด* ภาษาระดับสูงจึงมีอยู่ บทนี้คือเครื่องจักรที่ทำให้ใช้ได้: คอมไพเลอร์ ที่แปลซอร์สเป็นสิ่งที่ CPU จริง (เฟส 3) รันได้

## ไปป์ไลน์คลาสสิก (สั้น)

Lexer → โทเคน Parser → Abstract Syntax Tree การวิเคราะห์เชิงความหมายจับสิ่งที่ไวยากรณ์อย่างเดียวจับไม่ได้ (ชนิด ชื่อที่ยังไม่ประกาศ) คอมไพเลอร์จริงส่วนใหญ่แล้วลดลงเป็น Intermediate Representation (IR) — สม่ำเสมอกว่าไวยากรณ์ซอร์ส ยังอิสระจาก ISA เป้าหมายใด — ที่ซึ่ง **optimizer** ทำงาน: กำจัดโค้ดตาย ยกสิ่งที่ไม่แปรในลูป inlining และการแปลงอื่นอีกหลายสิบที่รักษาพฤติกรรมขณะตัดงานเปล่า **Code generation** ปล่อยคำสั่งเป้าหมายและจัดสรรรีจิสเตอร์ (ค่าใดอยู่รีจิสเตอร์กายภาพที่หายาก เทียบกับการ spill ไปหน่วยความจำ)

นั่นคือกระดูกสันหลัง สารานุกรมของทุก pass ไม่ใช่จุด — ข้อจำกัดคือ: abstraction ของซอร์สรันไม่ได้; ต้องมีอะไรลดพวกมัน และสิ่งนั้นรันได้ *ก่อน* การดำเนินการ หรือ *ระหว่าง* มัน

## Ahead-of-Time เทียบ Just-in-Time

รันไปป์ไลน์ทั้งก้อนครั้งเดียวก่อนโปรแกรมรันเลย: Ahead-of-Time (AOT) — C และ FORTRAN แบบดั้งเดิม Just-in-Time (JIT) — Java, JavaScript และเครือญาติ — เริ่มด้วย interpreter หรือคอมไพเลอร์ baseline เร็ว แล้ว *ตอนรันไทม์* หา hot path และคอมไพล์ใหม่ด้วยการ optimize หนักกว่า

ข้อได้เปรียบของ JIT คือข้อมูลที่คอมไพเลอร์ AOT ไม่มี: branch ที่สังเกต ชนิดของอาร์กิวเมนต์ ลูปร้อนจริง — การ optimize ที่ไม่ปลอดภัยที่จะสมมติโดยไม่มีข้อมูลนั้น ต้นทุนจริง: การคอมไพล์เผารอบระหว่างการรัน และวินาทีแรกมักช้ากว่าสถานะคงที่ — warm-up แบบคลาสสิก

## รันไทม์: มากกว่าการคอมไพล์

ภาษาที่จัดการ (Java, C# และ JavaScript กับ Python ในระดับต่างกัน) จับคู่คอมไพเลอร์กับรันไทม์กว้างกว่า — ที่สำคัญที่สุดคือการจัดการหน่วยความจำอัตโนมัติผ่าน garbage collection ปลดโปรแกรมเมอร์จากการติดตามอายุของทุกการจัดสรร (แหล่งบั๊กใหญ่ใน C) ความซับซ้อนย้ายเข้าไปในรันไทม์: ความพยายามด้วยมือแลกกับโอเวอร์เฮด และในประวัติ pause ที่คาดเดายากกว่า ความตึงเครียดนั้นพอดีคือเหตุผลที่บทที่ 29–30 ถือ "เรียลไทม์" กับ "รันไทม์ที่จัดการพร้อม GC" เป็นสิ่งที่มักขัดกัน

## ดูสด

เทอร์มินัล VM ด้านล่างคือที่คอมไพล์จริง: ลอง `gcc` กับโปรแกรม C เล็ก ๆ แล้วตรวจ assembly ด้วย `-S` — abstraction จากบทนี้กลายเป็นคำสั่งเครื่องที่จับต้องได้

{{< lab type="vm-terminal" >}}

## อ่านเพิ่ม / อ้างอิง
- จารุโลจน์ จงสถิตย์วัฒนา, *หลักการและการประมวลผลภาษาโปรแกรม*
- เกียรติกูล เจียรนัยธนะกิจ, *ทฤษฎีการคำนวณ*
- อรพิน ประวัติบริสุทธิ์, *คู่มือเขียนโปรแกรมด้วยภาษา C ฉบับสมบูรณ์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

---
title: "กี่ทอแบบฌักการ์"
weight: 4
date: 2026-01-01
draft: false
phase: "1 — รากฐาน: จากการคำนวณเชิงกลไกสู่หลอดสุญญากาศ"
series_index: 3
aliases:
  - /posts/01b-jacquard-loom/
tags: []
summary: "บัตรเจาะรูทำให้โปรแกรมแยกออกจากเครื่องที่รันมัน"
image_prompt: "Technical illustration of Jacquard loom punched-card mechanism controlling thread lift, engineering-diagram style, labeled hooks and cards, 19th century industrial drawing aesthetic, white background"
video_prompt: "20-second animation: punched cards advancing, hooks lifting threads hole-by-hole, pattern changing when the card chain changes, muted industrial tones"
schematics: "Diagram: Jacquard loom punch card mechanism (hole → lift, no hole → block)"
---

แบบเบจไม่ได้ประดิษฐ์การควบคุมด้วยบัตรเจาะรู เขายืมมา

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/02_Metier_jacquard_etroit.jpg" alt="กี่ทอแบบฌักการ์ขนาดแคบ ที่ Musée d'art et d'industrie เมืองแซ็งเตเตียน" loading="lazy" width="1280">
<figcaption>กี่ทอแบบฌักการ์ Musée d'art et d'industrie เมืองแซ็งเตเตียน (Saint-Étienne) ภาพ: <a href="https://commons.wikimedia.org/wiki/File:02_Metier_jacquard_etroit.jpg">Hélène Rival</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption>
</figure>

กลไกติดกี่ของโฌแซฟ-มารี ฌักการ์ (Joseph-Marie Jacquard) (จดสิทธิบัตร ค.ศ. 1804) เข้ามาทำหน้าที่แทนคนดึงด้าย (draw boy) ของกี่ทอแบบดึงเส้นด้าย (drawloom): มันใช้สายบัตรเจาะรูต่อกันเพื่อกำหนดว่าเส้นด้ายใดจะยกขึ้นในการพุ่งกระสวยแต่ละครั้ง: มีรู → ยก ไม่มีรู → กั้น เปลี่ยนบัตร ลายก็เปลี่ยน กี่ไม่รู้จัก "ผ้ายกดอกไหม" (silk brocade) มันเพียงทำตามลำดับการตัดสินใจยก/ไม่ยกที่ตายตัวและเข้ารหัสไว้ทางกายภาพ

<figure>
<img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Jacquard.loom.cards.jpg" alt="ภาพใกล้บัตรเจาะรูของกี่ทอแบบฌักการ์ ที่ Museum of Science and Industry เมืองแมนเชสเตอร์" loading="lazy" width="249">
<figcaption>บัตรเจาะรูบนกี่ทอแบบฌักการ์ (Museum of Science and Industry เมืองแมนเชสเตอร์) ภาพ: <a href="https://commons.wikimedia.org/wiki/File:Jacquard.loom.cards.jpg">George H. Williams</a>, สาธารณสมบัติ (public domain)</figcaption>
</figure>

นั่นคือนามธรรม (abstraction) ที่แบบเบจนำมาใช้กับเครื่องวิเคราะห์: โปรแกรมคือลำดับของคำสั่ง ที่แยกออกจากเครื่องที่รันมัน

เอดา เลิฟเลซ (Ada Lovelace) มองเห็นว่าการแยกนั้นหมายถึงอะไร เครื่องสามารถจัดการสัญลักษณ์ *ใด ๆ* — ไม่ใช่แค่ตัวเลข — หากคุณออกแบบบัตรที่ถูกต้อง บันทึกของเธอต่อบทความของ Menabrea เรื่องเครื่องวิเคราะห์ มีสิ่งที่มักถูกเรียกว่าโปรแกรมคอมพิวเตอร์ชิ้นแรกที่ตีพิมพ์ (จำนวนแบร์นูลลี — Bernoulli numbers)

**ประตูออก:** *บันทึก* (*Notes*) ของเอดา เลิฟเลซ เรื่องเครื่องวิเคราะห์ (ต่อคำแปลบทความของ Menabrea) — ตัวบทปฐมภูมิของร่างการคำนวณจำนวนแบร์นูลลีและข้อโต้แย้งเรื่อง "สัญลักษณ์ใด ๆ" แผนที่: [Jacquard machine](https://en.wikipedia.org/wiki/Jacquard_machine)

ถัดไป: ทำไมบทเชิงกลนี้ยังคงกำหนดรูปทุกสิ่งที่ตามมา — และทำไมเฟืองเพียงอย่างเดียวจึงขยายขนาดไม่ได้

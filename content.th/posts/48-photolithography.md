---
title: "Photolithography"
weight: 49
date: 2026-01-01
draft: false
phase: "8 — โหนดกระบวนการและการผลิต"
series_index: 48
tags: []
summary: "Diffraction บังคับความยาวคลื่นสั้นลง — กระจกและพลาสมาดีบุกของ EUV คือสิ่งที่ให้ขนาดฟีเจอร์ยังเดินต่อ"
image_prompt: "Cutaway diagram of an EUV lithography system showing plasma source, mirrors, mask, wafer, clean fab equipment illustration style"
video_prompt: "25-second animation: EUV light generated and reflected through mirrors onto a wafer, clean technical animation"
schematics: "Diagram: EUV light path through mirror system + DUV vs EUV wavelength/resolution comparison"
---

ทุกทรานซิสเตอร์บนชิปสมัยใหม่ — นับพันล้าน หนาแน่นกว่าที่ป้ายโหนดในบทที่ 47 จะตั้งชื่ออย่างตรงไปตรงมาได้ — ต้องถูก *pattern* ลงบนซิลิคอน Photolithography คือการ pattern นั้น และการผลักไป EUV (extreme ultraviolet) เป็นหนึ่งในห่วงโซ่วิศวกรรมที่ยากที่สุดใต้อุตสาหกรรมเซมิคอนดักเตอร์

## พิมพ์ด้วยแสง แล้วสร้าง

เคลือบเวเฟอร์ด้วย photoresist; ส่องแสงผ่านมาสก์ที่มีแพทเทิร์น; เปลี่ยน resist ทางเคมีที่แสงตกเพื่อให้ลบหรือเก็บเลือกได้ Etch, deposit และ dope ใช้แพทเทิร์นนั้นวางโครงสร้างทรานซิสเตอร์ ที่รากคือการพิมพ์ภาพถ่ายที่แม่นยำ — ที่ความละเอียดซึ่ง diffraction จะไม่อนุญาตง่าย ๆ

## Diffraction บังคับความยาวคลื่นสั้นลง

ฟีเจอร์เล็กแค่ไหนที่ resolve ได้ผูกกับความยาวคลื่น: แสงสั้นกว่า แพทเทิร์นละเอียดกว่า เพดานฟิสิกส์นั้นคือเหตุผลที่อุตสาหกรรมใช้เวลาหลายทศวรรษเดินลงสเปกตรัม — ultraviolet แล้ว deep ultraviolet (DUV ประมาณ 193 nm) แล้ว extreme ultraviolet (EUV ประมาณ 13.5 nm) — แต่ละขั้นซื้อฟีเจอร์ละเอียดกว่าที่ป้ายหดของบทที่ 47 พยักหน้าหา

## เหตุใด EUV จึงยากผิดปกติ

ที่ความยาวคลื่น EUV กลเม็ดธรรมดาพัง **การสร้างแสง** หมายถึงยิงหยดดีบุกหลอมด้วยเลเซอร์กำลังสูงหลายหมื่นครั้งต่อวินาที เพื่อให้พลาสมาที่ได้ปล่อย EUV ที่ใช้ได้ **การโฟกัส** ใช้เลนส์แก้วไม่ได้ — EUV ถูกดูดซับโดยออปติกแบบเดิมเกือบทั้งหมดและโดยอากาศ — ดังนั้นเส้นทางคือกระจกหลายชั้นในสุญญากาศใกล้ EUV scanner ระดับโปรดักชันเป็นหนึ่งในเครื่องมือการผลิตที่ซับซ้อนที่สุดที่เคยสร้าง; ในเชิงพาณิชย์ ASML เป็นผู้จัดหาเดียวของเครื่องมือโปรดักชันเหล่านั้น

โดยไม่มีขั้นความยาวคลื่นนั้น โครงสร้าง FinFET และ Gate-All-Around ที่ละเอียดกว่าในบทถัดไปจะผลิตด้วย yield และต้นทุนที่ยอมรับไม่ได้ Diffraction ตั้งข้อจำกัด; พลาสมาดีบุกและกระจกเป็นสถาปัตยกรรมที่ถูกบังคับ

## อ่านเพิ่ม / อ้างอิง
- ทรงพล กาญจนชูชัย, *อุปกรณ์สารกึ่งตัวนำ*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

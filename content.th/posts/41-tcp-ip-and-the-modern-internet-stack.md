---
title: "TCP/IP และสแตกอินเทอร์เน็ตสมัยใหม่"
date: 2026-01-01
draft: false
phase: "6 — วิวัฒนาการเครือข่าย"
series_index: 41
tags: []
summary: "โปรโตคอลอินเทอร์เน็ตซ้อนกันอย่างไรและเหตุใด — ชั้น, flag day, แอปบนพื้นผิวที่ไม่เชื่อถือได้ — ไม่ใช่แคตตาล็อก"
image_prompt: "Layered protocol stack diagram with a packet gaining headers at each layer, clean networking textbook diagram style"
video_prompt: "25-second animation: data flowing down through TCP/IP layers gaining headers, then unwrapped at destination, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: TCP/IP four-layer model with encapsulation + TCP three-way handshake diagram"
---

ARPANET (บทที่ 39) พิสูจน์ packet switching Ethernet (บทที่ 40) ทำให้สายท้องถิ่นเป็นมาตรฐาน ไม่มีอย่างใดเพียงอย่างเดียวที่บอกวิธีเย็บเครือข่าย *ต่างกัน* — สื่อต่างกัน addressing ต่างกัน — ให้เป็นอินเตอร์เน็ตเวิร์กเดียวที่เครื่องสองเครื่องใด ๆ ใช้ได้ ชุด TCP/IP ของ Vint Cerf และ Bob Kahn แก้ปัญหานั้น; มันยังเป็นรากฐานที่อินเทอร์เน็ตสมัยใหม่รันอยู่

## แบบจำลองแบบชั้น

TCP/IP แยกข้อกังวลแบบที่สแตกของ PCIe ทำ (บทที่ 33) ในระดับอินเตอร์เน็ตเวิร์ก **Link** จัดการฮอปท้องถิ่น — Ethernet, Wi-Fi, ไฟเบอร์ **Internet (IP)** ให้ addressing และ routing สากล *ข้าม* ลิงก์เหล่านั้น; แพ็กเก็ต IP ไม่สนใจว่าสื่ออะไรพา **Transport (TCP หรือ UDP)** ให้การส่งมอบที่เชื่อถือได้มีลำดับ (TCP) หรือ best-effort overhead ต่ำ (UDP) ทับ IP **Application** คือที่ HTTP, DNS, SMTP และเครือญาติอยู่ เลือก transport ที่เหมาะ

## Encapsulation

ข้อมูลที่เคลื่อนลงได้ header ในแต่ละชั้น — ไบต์แอปใต้ TCP/UDP, segment นั้นใต้ IP, แพ็กเก็ตนั้นใต้ link header (และมัก trailer) ที่ปลายทางกระบวนการย้อนกลับ: แต่ละชั้นลอก header ของตัวเองและใช้สิ่งที่เพิ่งอ่าน (พอร์ต, ที่อยู่) เพื่อส่งส่วนที่เหลือขึ้น

## TCP บนพื้นผิวที่ไม่เชื่อถือได้

IP เป็น best-effort อย่างชัด — ไม่มีสัญญาการส่งมอบ ไม่มีสัญญาลำดับ ทิ้งได้ TCP สร้างกระแสไบต์ที่เชื่อถือได้มีลำดับทับด้วยหมายเลขลำดับและการยืนยัน (และการส่งซ้ำเมื่อ ACK ไม่มา) — *ชนิด* ความเชื่อถือได้เดียวกับ data-link ของ PCIe (บทที่ 33) ยืดข้ามอินเตอร์เน็ตเวิร์กที่ไม่เชื่อถือได้ทั้งก้อนแทนลิงก์เฉพาะเส้น

การเชื่อมต่อเริ่มด้วย three-way handshake: SYN (ไคลเอนต์เสนอหมายเลขลำดับ), SYN-ACK (เซิร์ฟเวอร์ยืนยันและเสนอของตัวเอง), ACK สุดท้าย แล้วข้อมูลแอปจึงไหล — ต้นทุนเล็กน้อยโดยเจตนาเพื่อให้ทั้งสองฝั่งมีสถานะซิงค์ก่อน

## จากโปรโตคอลของเครือข่ายเดียวสู่สแตก

ARPANET เดิมพูดโปรโตคอล host-to-host ของตัวเอง (NCP) ไม่ใช่ TCP/IP เดิมพันของ Cerf และ Kahn ใหญ่กว่า: *สแตกโปรโตคอล* ที่อินเตอร์เน็ตเครือข่ายแพ็กเก็ต *หลาย* เครือข่ายได้ เพื่อให้ transport กับสายท้องถิ่นวิวัฒนาการแยกกัน การตัดจริงบน ARPANET เองคือ "flag day" 1 มกราคม 1983 เมื่อ NCP ถูกปิดและ TCP/IP กลายเป็นบังคับ — การตัดแข็งที่หายากซึ่งทำให้เรื่องแบบชั้นเป็นปฏิบัติการ ไม่ใช่แค่สถาปัตยกรรม

โปรโตคอลแอปแล้วซ้อน *เพราะ* พื้นผิวนี้มีอยู่ DNS (ประตูในบทที่ 64: [RFC 1034](https://www.rfc-editor.org/rfc/rfc1034) / [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)) ทำให้ชื่อใช้ได้ในระดับใหญ่; เมลและเว็บ (SMTP, HTTP และเครือญาติ) ขี่ TCP ในฐานะไคลเอนต์ของกระแสที่เชื่อถือได้ แทนการประดิษฐ์ addressing และการส่งซ้ำใหม่ รูปแบบคือจุดสำคัญ: แต่ละชั้นซื้อข้อจำกัดหนึ่งอย่างเพื่อให้ชั้นบนสมมติได้ นั่นคือเรื่องของการซ้อน ไม่ใช่แคตตาล็อกทุก RFC

## เหตุใดการออกแบบนี้ชนะ

สมมติฐานรับน้ำหนักคือเครือข่ายพื้นฐานต่างชนิดและไม่เชื่อถือได้ ดังนั้นการรับประกันอยู่ชั้นสูงกว่า แทนที่จะอยู่ในทุกลิงก์กายภาพ นั่นเข้ากับอินเตอร์เน็ตเวิร์กโลกที่เย็บมานานหลายทศวรรษจากเทคโนโลยีต่างกันโดยองค์กรที่ไม่เคยตกลงมาตรฐานกายภาพเดียว — ซึ่งคือเหตุผลที่ TCP/IP ยังนั่งใต้เกือบทั้งอินเทอร์เน็ตสมัยใหม่ รวมเครือข่ายศูนย์ข้อมูลถัดไป

**ประตูออก:** [RFC 791](https://www.rfc-editor.org/rfc/rfc791) (Internet Protocol) และ [RFC 793](https://www.rfc-editor.org/rfc/rfc793) (Transmission Control Protocol) — สเปกหลักสำหรับครึ่ง addressing/routing และครึ่ง reliable-transport ของสแตกนี้ (สายเลือด Cerf/Kahn; Postel เป็นบรรณาธิการ RFC ของข้อความกันยายน 1981 เหล่านี้)

{{< lab type="vm-terminal" >}}

## อ่านเพิ่ม / อ้างอิง
- โอภาส เอี่ยมสิริวงศ์, *เครือข่ายคอมพิวเตอร์และการสื่อสาร*
- สุวัฒน์ ปุณณชัยยะ และคณะ, *เปิดโลก TCP/IP และโปรโตคอลของอินเตอร์เน็ต*
- ภัทรสินี ภัทรโกศล, *เครือข่ายคอมพิวเตอร์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

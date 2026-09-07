---
title: "Ethernet และเครือข่ายท้องถิ่น"
date: 2026-01-01
draft: false
phase: "6 — วิวัฒนาการเครือข่าย"
series_index: 40
tags: []
summary: "สายร่วม ไม่มีผู้ตัดสินศูนย์กลาง — CSMA/CD แก้ข้อจำกัดการชนของ LAN; สวิตช์ภายหลังลบมัน"
image_prompt: "Diagram of a classic Ethernet bus topology showing a collision event and CSMA/CD backoff, clean networking textbook diagram style"
video_prompt: "20-second animation: two stations colliding on shared Ethernet, backing off randomly, clean technical animation"
labs: ["vm-terminal"]
schematics: "Diagram: CSMA/CD collision detection and backoff timing + Ethernet frame structure"
---

ARPANET (บทที่ 39) แก้การสลับแพ็กเก็ตระยะไกลระหว่างไซต์ห่าง ในอาคารเดียว การ routing แบบ IMP สำหรับสายไม่กี่สิบเมตรคือเครื่องมือผิด Ethernet ที่เริ่มที่ Xerox PARC ปี 1973 โดย Robert Metcalfe และ David Boggs กลายเป็นคำตอบท้องถิ่นที่ครอง

## ปัญหาสื่อร่วม

Ethernet ยุคแรกวางหลายสถานีบนสายร่วมหนึ่งเส้น — ทอโพโลยีบัส *ชนิด* ความแย่งเดียวกับที่บทที่ 31 เผชิญในเครื่อง ตอนนี้บน LAN ทุกสถานีส่งได้; ทุกสถานีได้ยินทุกการส่ง สองตัวส่งพร้อมกันแล้วทั้งสองเสีย

## CSMA/CD: ฟัง ส่ง ตรวจ ถอย

คำตอบของ Ethernet คือ CSMA/CD **Carrier Sense:** ฟังก่อน; ส่งเฉพาะเมื่อสื่อดูว่าง **Multiple Access:** สถานีใดก็ได้ลอง — ไม่มี grant ศูนย์กลาง ต่างจาก request/grant บนบัสระบบ (บทที่ 31) **Collision Detection:** ฟังต่อขณะส่ง; หากมีการชน หยุด รอ backoff *สุ่ม* แล้วลองใหม่

การสุ่มคือกลเม็ดที่รับน้ำหนัก Backoff คงที่เหมือนกันจะชนตลอด การรอสุ่มต่างกันให้สถานีหนึ่งสำเร็จก่อนอีกตัวลองใหม่ — ความแย่งแบบกระจายโดยไม่มีผู้ตัดสิน

## เฟรม

Ethernet พกข้อมูลในเฟรม: ที่อยู่ MAC ต้นทางและปลายทาง (ที่อยู่ฮาร์ดแวร์ ต่ำกว่ที่อยู่ IP ในบทที่ 41) ฟิลด์ type สำหรับโปรโตคอลชั้นสูง payload และ CRC — *ชนิด* ความเชื่อถือได้เดียวกับการตรวจ data-link ของ PCIe (บทที่ 33) บนสื่อต่างกัน

## จากบัสร่วมสู่ดาวแบบสวิตช์

Ethernet มีสายสมัยใหม่ส่วนใหญ่ทิ้งสายร่วมไปหาสวิตช์ที่ให้แต่ละสถานีมีลิงก์จุดต่อจุดของตัวเอง — ทางหนีจากร่วมสู่จุดต่อจุดเดียวกับที่ PCIe ทำเทียบกับบัสขนานเก่า (บทที่ 32) บนสวิตช์ที่เหมาะสม การชน CSMA/CD คลาสสิกหายเกือบหมด: แต่ละลิงก์มีสองปลาย ไอเดียยังสำคัญทางประวัติศาสตร์ และ Wi-Fi ยุคแรก — ยังเป็นสื่อวิทยุร่วม — ต้องแก้ข้อจำกัดการชนเดียวกัน

## สิ่งนี้นำไปที่ใด

Ethernet ท้องถิ่นบวกการกำหนดเส้นทางแพ็กเก็ตระยะไกลยังทิ้งช่องว่าง: แบบแผน addressing และ routing *สากล* ที่มัดเทคโนโลยีพื้นฐานต่างกันเข้าเป็นอินเตอร์เน็ตเวิร์กเดียว นั่นคือ TCP/IP — ถัดไป

**ประตูออก:** Robert M. Metcalfe และ David R. Boggs, "Ethernet: Distributed Packet Switching for Local Computer Networks" (*Communications of the ACM*, 1976) — เปเปอร์ปฐมภูมิที่ระบุ LAN สื่อร่วมและการออกแบบ CSMA/CD

{{< lab type="vm-terminal" >}}

## อ่านเพิ่ม / อ้างอิง
- โอภาส เอี่ยมสิริวงศ์, *เครือข่ายคอมพิวเตอร์และการสื่อสาร*
- จตุชัย แพงจันทร์ และ อนุโชต วุฒิพรพงษ์, *เจาะระบบ Network*
- ภัทรสินี ภัทรโกศล, *เครือข่ายคอมพิวเตอร์*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

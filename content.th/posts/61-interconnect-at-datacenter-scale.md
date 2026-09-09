---
title: "อินเตอร์คอนเนกต์ในระดับศูนย์ข้อมูล"
weight: 62
date: 2026-01-01
draft: false
phase: "10 — ฮาร์ดแวร์ AI สมัยใหม่"
series_index: 61
tags: []
summary: "GPU นับพัน — ทอโพโลยีและ all-reduce สำคัญเท่า FLOPS สูงสุดของชิปใดตัวเดียว"
image_prompt: "System diagram of a multi-rack AI training cluster showing a fat-tree network topology, clean datacenter network architecture diagram style"
video_prompt: "25-second animation: a datacenter-scale fat-tree topology with an all-reduce operation propagating gradient data, clean technical animation"
schematics: "Diagram: rail-optimized fat-tree topology + all-reduce ring/tree communication pattern"
---

บทที่ 56 ครอบคลุมการขยายหลาย GPU ภายในและข้ามเซิร์ฟเวอร์จำนวนน้อย — NVLink, NVSwitch, GPUDirect RDMA การฝึกขนาดใหญ่เป็นอีกอันดับ: GPU นับพันถึงหลายหมื่นข้ามเซิร์ฟเวอร์นับร้อยถึงนับพัน วิธีเดินสายสำคัญเท่าสเปกของ GPU ตัวใดตัวหนึ่ง

## การเดินสายตรง ๆ ไม่สเกล

การต่อทุกเซิร์ฟเวอร์กับทุกเซิร์ฟเวอร์อื่นโตแบบกำลังสอง — เหลวไหลนานก่อนถึงโหนดนับพัน คลัสเตอร์จริงใช้สวิตช์แบบลำดับชั้น; โครงสร้างที่เลือกตัดสินทั้งแบนด์วิดท์ที่ทำได้ และว่าแบนด์วิดท์นั้นกระจาย *สม่ำเสมอ* เพียงใดใต้ทราฟฟิกฝึกหนัก

## Fat-Tree จูนเพื่อการฝึก

Fat-tree จัดสวิตช์เป็นชั้น — leaf ที่เซิร์ฟเวอร์ spine ต่อ leaf — มุ่งแบนด์วิดท์แบ่งครึ่งสูง (ในอุดมคติไม่ oversubscribe); คลัสเตอร์ AI จริงอาจยัง oversubscribe หรือใช้ตัวแปรจูนราง นี่คือไอเดียเครือข่ายศูนย์ข้อมูลของบทที่ 42 ที่ระบอบ GPU นับพัน

การออกแบบจูนรางจูนเพิ่มรอบแบบแผนการสื่อสารที่งานฝึกใหญ่สร้างจริง — ไม่ใช่ทราฟฟิกศูนย์ข้อมูลทั่วไป ทราฟฟิกฝึกต่าง; ทอโพโลยีที่สร้างเพื่อมันเอาชนะแบบทั่วไปได้

## All-Reduce คือแบบแผนที่ผูกมัด

การฝึก data-parallel (บทที่ 46) ต้องซิงค์ gradient ข้ามทุก GPU ที่ร่วมในทุกขั้น — gradient ท้องถิ่นจากชิ้นแบตช์ แล้วรวม (โดยปกติเฉลี่ย) ก่อนขั้นถัดไป All-reduce นั้นรันตลอดรอบฝึกเต็ม ประสิทธิภาพขึ้นกับแบนด์วิดท์ดิบ *และ* ทอโพโลยี: อัลกอริทึมแบบวงแหวนหรือต้นไม้รู้สึกการเดินสายกายภาพ ไม่ใช่เพียงยอดรวมทางทฤษฎี

## ทอโพโลยีเอาชนะสเปกชีตได้

GPU ยอดเยี่ยมบน fabric ออกแบบไม่ดีหรือ oversubscribe แพ้ GPU เรียบกว่าบนเครือข่ายจูนรางอย่างระมัดระวังได้ — เพราะ all-reduce กลายเป็นคอขวด ไม่ใช่ FLOPS สูงสุดของชิปใดตัวเดียว ธีมของชุดนี้อีกครั้ง: สเปกชิ้นส่วน (จำนวนทรานซิสเตอร์ ความเร็วคล็อก FLOPS สูงสุด) บอกเพียงส่วนของเรื่อง วิธีที่ชิ้นส่วนถูกเชื่อม — จากบัสในชิป (เฟส 5) ถึงทอโพโลยีของคลัสเตอร์ฝึก — มักตัดสินประสิทธิภาพที่ได้จริง

## อ่านเพิ่ม / อ้างอิง
- โอภาส เอี่ยมสิริวงศ์, *เครือข่ายคอมพิวเตอร์และการสื่อสาร*
- จตุชัย แพงจันทร์ และ อนุโชต วุฒิพรพงษ์, *เจาะระบบ Network*
- ภัทรสินี ภัทรโกศล, *เครือข่ายคอมพิวเตอร์*
- จันทนา จันทราพรชัย, *สถาปัตยกรรมคอมพิวเตอร์และการออกแบบ*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)

-->

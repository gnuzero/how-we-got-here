---
title: "สแตกซอฟต์แวร์ Machine Learning"
weight: 46
date: 2026-01-01
draft: false
phase: "7 — ระบบกระจาย บิ๊กดาต้า และออร์เคสตรา"
series_index: 46
tags: []
summary: "ระหว่างโมเดลกับซิลิคอนมีสแตกที่เปลี่ยนเทนเซอร์เป็นการฝึกแบบกระจาย — แล้วชนกำแพงอินเตอร์คอนเนกต์"
image_prompt: "Layered infographic showing the ML software stack from Python/NumPy up through frameworks (PyTorch/TensorFlow) to distributed training orchestration to hardware, clean AI-software diagram style"
video_prompt: "20-second animation: a training job's computation graph being built in a framework, then compiled down and distributed across multiple GPUs, clean technical animation"
schematics: "Diagram: ML software stack (framework→compiler/graph→runtime→hardware) + data-parallel vs model-parallel training diagram"
---

เฟส 9 และ 10 ครอบคลุมฮาร์ดแวร์ของการคำนวณ AI สมัยใหม่ — GPU, tensor core, อินเตอร์คอนเนกต์ วิศวกร ML ส่วนใหญ่ไม่โปรแกรมซิลิคอนนั้นตรง สแตกซอฟต์แวร์นั่งระหว่าง "นี่คือสถาปัตยกรรมโครงข่าย" กับ "นี่คือการคูณเมทริกซ์บนอุปกรณ์จริง" และสแตกนั้นคือวิธีที่เส้นระบบกระจายของชุดนี้ถูก *ใช้* จริง

## อาร์เรย์ก่อน

พื้นเชิงปฏิบัติคืออาร์เรย์หลายมิติ (เทนเซอร์) และ ops แบบ vectorized — การคำนวณเชิงตัวเลขระดับ NumPy ในโลก Python งานหนักรันในรูทีนที่ compile แล้วถูกเรียก *จาก* Python; ลูป interpreter ไม่ใช่คอขวดของคณิต

## เฟรมเวิร์ก: Gradient และฮาร์ดแวร์เป็นสัญญาเดียว

เฟรมเวิร์ก deep learning (PyTorch และ TensorFlow เป็นตัวอย่างที่ครอง) เพิ่มสิ่งที่การฝึกต้องการทับอาร์เรย์ **Automatic differentiation** สร้างกราฟการคำนวณและผลิต gradient โดยไม่ต้องให้มนุษย์ derive แคลคูลัสใหม่ทุกสถาปัตยกรรม — ข้อจำกัดที่ทำให้ gradient descent ใช้ได้จริงที่จังหวะวิจัย **Hardware abstraction** ให้โค้ดโมเดลเดียวกันเล็ง CPU, GPU ของ NVIDIA ผ่าน CUDA (เฟส 9) หรือตัวเร่งอื่น โดยลด tensor ops เป็นเคอร์เนลที่ optimize — *ชนิด* สัญญาเดียวกับการแยก ISA/microarchitecture ในบทที่ 11 ชั้นซอฟต์แวร์สูงขึ้นหนึ่งขั้น

## การลดกราฟ

ชั้นคอมไพเลอร์ยิ่งนั่งระหว่าง ops ของเฟรมเวิร์กกับเคอร์เนลอุปกรณ์: fuse operator ตัดทราฟฟิกหน่วยความจำ ลด intermediate representation ไปยังเป้าหมาย นั่นคือไอเดียคอมไพเลอร์ของบทที่ 28 นำไปใช้กับกราฟเทนเซอร์แทนโค้ด imperative อเนกประสงค์ — optimize และลด ไม่ต้อง lex ใหม่ทุกครั้ง

## การกระจายชนสาย

หน่วยความจำของ GPU เดียว (HBM ของเฟส 9) มักถือโมเดลใหญ่สมัยใหม่ไม่พอ แล้วยังฝึกเพียงลำพัง **Data parallelism** replicate โมเดล แบ่งแบตช์ และซิงค์ gradient (all-reduce — เฟส 10 / บทที่ 37 และ 42) **Model parallelism** แบ่งโมเดลเองข้ามอุปกรณ์เมื่อพอดีที่ไหนก็ไม่ได้ การฝึกจริงผสมทั้งสอง Throughput แล้วมักถูกจำกัดโดยความเร็วที่ GPU แลก gradient และ activation — ไม่ใช่โดยความเร็วที่ GPU เดียวคูณแยกเดี่ยว กำแพงอินเตอร์คอนเนกต์จากบทก่อนกลับมาเป็นกำแพงการฝึก

## ปิดลูปของเฟสนี้

การฝึก ML สมัยใหม่เป็นปัญหาระบบกระจายที่สวมชุดโครงข่ายประสาท: ประสานหน่วยคำนวณหลายหน่วย ดูดซับความล้มเหลวบางส่วน (GFS, Kubernetes) เคลื่อนข้อมูลกลางมหาศาลอย่างมีประสิทธิภาพ ฮาร์ดแวร์โดยไม่มีครึ่งซอฟต์แวร์นั้น — หรือซอฟต์แวร์โดยไม่มีซิลิคอนและผ้าใบ — เป็นเพียงครึ่งเรื่องที่เฟส 9 และ 10 ปิด

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

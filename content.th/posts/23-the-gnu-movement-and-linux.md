---
title: "ขบวนการ GNU และ Linux"
weight: 23
date: 2026-01-01
draft: false
phase: "4 — รากฐานซอฟต์แวร์: OS, ภาษา และระบบเรียลไทม์"
series_index: 23
tags: []
summary: "Unix ปิด; Stallman สร้าง userland เสรี; Torvalds อุดช่องเคอร์เนล — GPL คงการรวมนั้นให้เปิด"
image_prompt: "Illustration of the GNU logo alongside Tux the penguin, with a layered diagram showing GNU userland tools sitting atop the Linux kernel, clean open-source movement infographic style"
video_prompt: "20-second animation: modular software blocks (GNU coreutils, compilers, shells) assembling on top of a kernel block labeled Linux, forming a complete OS stack, clean motion graphics"
labs: ["vm-terminal"]
schematics: "Diagram: GNU/Linux stack (kernel/GNU userland/applications) + free software licensing spectrum (BSD/MIT/GPL)"
---

ต้นทศวรรษ 1980 Unix (บทที่ 22) ยอดเยี่ยมทางเทคนิคและกลายเป็นกรรมสิทธิ์มากขึ้น — AT&T อ้างการควบคุมเชิงพาณิชย์ การเข้าถึงเชิงวิชาการและงานอดิเรกหดลง คำตอบของ Richard Stallman เริ่มปี 1983 ไม่ใช่การแก้ทางเทคนิคเป็นหลัก มันเป็นเชิงอุดมการณ์และกฎหมาย: สร้างสิ่งทดแทน Unix ที่เสรีอย่างสมบูรณ์ (เสรีภาพ ไม่ใช่แค่ราคา) จากศูนย์ และหนุนด้วยไลเซนส์ที่ออกแบบให้คงอยู่อย่างนั้น

## GNU: Userland โดยไม่มีเคอร์เนล

GNU — "GNU's Not Unix" — ตั้งเป้าสร้างระบบปฏิบัติการที่เข้ากันได้กับ Unix ทั้งชุดที่ทุกชิ้นเป็นซอฟต์แวร์เสรี: ใช้ได้ แก้ได้ และแจกจ่ายได้ รวมการแจกจ่ายการแก้ของคุณเอง ในทศวรรษถัดมาโครงการผลิตโครงสร้างพื้นฐานสำคัญ: GCC (ยังเป็นหนึ่งในคอมไพเลอร์ที่ใช้กว้างที่สุด — บทที่ 28), Bash, GNU coreutils, Emacs และอื่น ๆ อีกมาก

สิ่งที่ GNU ไม่มีเป็นปี ๆ คือเคอร์เนลที่ใช้งานได้ เคอร์เนลที่วางแผนไว้ GNU Hurd เจอปัญหาเทคนิคร้ายแรงและไม่เคยถึงการใช้งานจริงในวงกว้าง Userland ครบ; ไม่มีเคอร์เนลใต้สำหรับฮาร์ดแวร์จริง

## GPL: Copyright ที่หันออกด้านนอก

ผลงานหลักอีกชิ้นของ Stallman คือ GNU General Public License (GPL) — ไลเซนส์ "copyleft" ที่มีคุณสมบัติตั้งใจ: หากคุณแจกจ่ายซอฟต์แวร์ที่รวมโค้ดภายใต้ GPL คุณต้องเปิดซอร์สที่แก้ภายใต้เงื่อนไขเดียวกัน Copyright ซึ่งปกติเป็นเครื่องมือ *จำกัด* การแจกจ่าย ถูกใช้เพื่อรับประกันว่าเสรีภาพแพร่ผ่านอนุพันธ์ทุกชิ้น — แทนที่จะถูกปิดเงียบโดย fork เชิงพาณิชย์ท้ายน้ำ

## Linux อุดช่องว่าง

ปี 1991 นักศึกษาฟินแลนด์ Linus Torvalds เริ่มเคอร์เนลเป็นโปรเจกต์ส่วนตัวสำหรับ PC ของตัวเอง เขาปล่อยในปีนั้นภายใต้ไลเซนส์ห้ามเชิงพาณิชย์ของตัวเอง แล้ว — สำคัญ — เปลี่ยนไลเซนส์เป็น GPL ต้นปี 1992 การรวมนั้นคือชิ้นที่ขาด: GNU มี userland สุกโดยไม่มีเคอร์เนลที่ใช้ได้จริง; Linux เป็นเคอร์เนลที่ทำงานได้โดยแทบไม่มี userland ด้วยกัน ทูล GNU บนเคอร์เนล Linux คือระบบที่เข้ากันได้กับ Unix ครบ ไลเซนส์เสรี — มักเรียก "Linux" แม้ "GNU/Linux" จะแม่นยำทางประวัติศาสตร์กว่าสำหรับการรวมนั้น (จนทำให้ Stallman หงุดหงิดต่อสาธารณะเป็นครั้งคราว)

**ลองตอนนี้.** บูต VM ด้านล่าง คลิกหน้าจอ แล้วลอง `uname`, `whoami` และ `ls` — คุณอยู่ฝั่ง GNU/Linux ของการรวมนั้น ในเบราว์เซอร์

{{< lab type="vm-terminal" height="600" >}}

## เหตุใดการรวมนี้จึงชนะ

โครงสร้างของ GPL หมายความว่าบริษัทสร้างผลิตภัณฑ์เชิงพาณิชย์รอบ Linux ได้โดยไม่ปิดแพลตฟอร์มข้างใต้เงียบ ๆ — การแก้เคอร์เนลต้องยังเปิดเป็นซอร์สภายใต้เงื่อนไขเดิม สิ่งนั้นสร้างความเชื่อถือที่ยั่งยืน และในที่สุด *การมีส่วนร่วมจากองค์กร*: บริษัทพึ่งได้ว่าแพลตฟอร์มจะเปิดอยู่แทนที่จะถูกจับโดยคู่แข่งรายเดียว เสรี เปิดต่อการใช้เชิงพาณิชย์ โครงสร้างทางกฎหมายให้คงอยู่อย่างนั้น — ส่วนใหญ่ของเหตุผลที่ Linux กลายเป็นเคอร์เนลครองใต้เซิร์ฟเวอร์ โครงสร้างพื้นฐานคลาวด์ Android และกระดูกสันหลังของอินเทอร์เน็ตสมัยใหม่ส่วนใหญ่ ไกลเกินโปรเจกต์ส่วนตัวของนักศึกษาคนหนึ่ง

**ประตูออก:** The GNU General Public License (Free Software Foundation) — ข้อความกฎหมายปฐมภูมิที่ทำให้ copyleft บังคับใช้ได้; อ่านคู่กับ GNU Manifesto ของ Stallman (1985) สำหรับเป้าหมายที่โครงการประกาศ

## อ่านเพิ่ม / อ้างอิง
- ยรรยง เต็งอำนวย, *ระบบปฏิบัติการ*
- ชูเกียรติ วรสุชีพ, *ระบบปฏิบัติการคอมพิวเตอร์ยุคใหม่*
- พิรพร หมุนสนิท และคณะ, *ระบบปฏิบัติการ*
- วิรุฬห์ ศรีบริรักษ์, *Embedded Android Development*

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
[ ] Lab(s) embedded via {{< lab type="..." >}} shortcode if labs field is set
-->

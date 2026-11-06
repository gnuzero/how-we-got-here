---
title: "จากแท่นพิมพ์สู่พิกเซล"
weight: 51
date: 2026-01-02
draft: false
phase: "7 — ระบบกระจาย บิ๊กดาต้า และออร์เคสตรา"
series_index: 50
aliases:
  - /posts/43b-from-press-to-pixel/
  - /posts/49-from-press-to-pixel/
  - /posts/50-from-press-to-pixel/
tags: []
summary: "เมื่อหน้ากระดาษและตัวพิมพ์กลายเป็นซอฟต์แวร์ — ระบบเรียงพิมพ์ด้วยแสงเลเซอร์ของหวังเสวียนนำหน้า PostScript และ CSS ฝั่งตะวันตกอยู่ท้ายสุด"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[จากแม่พิมพ์ไม้สู่ตัวพิมพ์เรียง]({{< relref "02-woodblock-to-movable-type.md" >}}) ทิ้งหน้ากระดาษไว้ในฐานะวัตถุจับต้องได้: หมึก ตัวพิมพ์ กระดาษ หน้านี้คือจุดที่หน้ากระดาษกลายเป็นไฟล์ และระบบเรียงพิมพ์ด้วยแสงเลเซอร์ (laser phototypesetting) สำหรับอักษรจีนคือกรณีที่บังคับให้ปัญหานี้ต้องถูกแก้อย่างเปิดเผย

## ทำไมอักษรจีนจึงบีบให้ต้องแก้ปัญหา

ฟอนต์อักษรละตินต้องการตัวพิมพ์เพียงไม่กี่สิบแบบ แต่หนังสือพิมพ์จีนต้องใช้ตัวอักษรหลายหมื่นตัว แต่ละตัวต้องมีหลายขนาดและหลายแบบ ถ้าเก็บทุกตัวเป็นตารางจุดหนาแน่น (bitmap) ทั้งชุดจะใหญ่เกินกว่าที่คอมพิวเตอร์ปลายทศวรรษ 1970 จะรับได้ หวังเสวียน (Wang Xuan) เขียนไว้ภายหลังว่าจำนวนตัวอักษรมหาศาลบังคับให้ทีมของเขาต้องบรรยายรูปอักษรด้วยเส้นขอบ (outline) เพื่อลดปริมาณข้อมูล ([Wang Xuan, 1999, on Sina](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))<!-- UNVERIFIED: Wang Xuan's team adopted outline glyph description earlier than Western peers | Sina 1999 piece (checked for the outline/character-count claim only; the "earlier than the West" comparison not confirmed) -->

## หวังเสวียน: การเรียงพิมพ์ด้วยแสงเลเซอร์

บันทึกประวัติศาสตร์คอมพิวเตอร์ของสมาคมคอมพิวเตอร์จีน (China Computer Federation, CCF) ให้ตัวเลขทางวิศวกรรมไว้ สำหรับตัวอักษรขนาดห้า (五号) ข้อมูลลดจากราว 10,000 บิต เหลือเฉลี่ยราว 800 บิต คือเล็กลงราว 12 เท่า วิธีเดียวกันยังทำให้ขยาย ย่อ ยืด หรือแบนรูปอักษรได้โดยไม่เสียคุณภาพ การประหยัดโดยรวมจึงสูงถึงราว 500 เท่า และหน่วยเก็บข้อมูลราว 4 MB บรรจุแม่แบบตัวอักษร (字头) ได้ราว 600,000 ตัว ตัวเลขเหล่านี้เป็นคนละชุดกันในแหล่งข้อมูล 800 บิตคือขนาดหลังบีบอัดของตัวขนาดห้า ไม่ใช่ผลหาร 4 MB ด้วย 600,000 จึงไม่ควรนำมาคูณกัน หน้าหนังสือพิมพ์ตัวอย่างหน้าแรกออกมาเมื่อ 27 กรกฎาคม 1979 และหนังสือเล่มแรกที่เรียงด้วยระบบนี้ คือ 《伍豪之剑》 ลงวันที่ 15 กันยายน 1980 ([CCF Computing History, Huaguang / Founder system](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml))

ในบทความปี 1999 ชิ้นเดียวกัน หวังเสวียนเล่าว่าทีมกำหนดรูปแบบภาษาบรรยายหน้า (page-description format) ของตนเองในปี 1986 และรูปแบบนั้นใช้ส่งหน้าหนังสือพิมพ์ไปยังโรงพิมพ์ปลายทางระหว่างปี 1990 ถึง 1994 พอถึงปี 1990 พวกเขาคาดว่า PostScript จะกลายเป็นมาตรฐาน และในฤดูใบไม้ร่วงปี 1993 ก็ออกสิ่งที่เขาเรียกว่าตัวแปลภาษา (interpreter) PostScript Level 2 ตัวแรกของจีน ทั้งหมดนี้เป็นคำบอกเล่าของหวังเสวียนเอง ([Wang Xuan, 1999](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## ไต้หวัน: อีกหนึ่ง "ครั้งแรก" ที่เดินคู่ขนาน

หนังสือพิมพ์เหลียนเหอเป้า (United Daily News) ในไทเปเริ่มใช้ระบบเรียงพิมพ์ด้วยคอมพิวเตอร์เมื่อ 16 กันยายน 1982 (ปีหมินกั๋วที่ 71) หนังสือพิมพ์ระบุว่าตนเป็นหนังสือพิมพ์ภาษาจีนฉบับแรกที่เรียงพิมพ์ด้วยคอมพิวเตอร์ ระบบนี้เติบโตแยกจากสายการพัฒนาเรียงพิมพ์ด้วยเลเซอร์ของจีนแผ่นดินใหญ่ ([United Daily News anniversary book](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html))

## หน้ากระดาษกลายเป็นอะไร

เมื่อตัวพิมพ์และการจัดหน้าอยู่ในซอฟต์แวร์ "แท่นพิมพ์" ก็กลายเป็นตัวเรนเดอร์ (renderer) Adobe ออก PostScript ในปี 1984 เป็นภาษาที่บรรยายหน้ากระดาษให้เครื่องพิมพ์ ([CHM, PostScript](https://computerhistory.org/blog/postscript-a-digital-printing-press/)) บนเว็บ CSS ทำงานเดียวกันสำหรับหน้าจอ ตัวเลือก (selector) โมเดลกล่อง (box model) และการไล่ลำดับกฎ (cascade) กำหนดว่าเอกสารจะกลายเป็นเลย์เอาต์อย่างไร โดยแยกถ้อยคำออกจากรูปลักษณ์ ([W3C CSS Snapshot](https://www.w3.org/TR/CSS/))

ทั้งสองสาย ทั้งการบีบอัดอักษรจีนและภาษาบรรยายหน้าแบบตะวันตก ไปจบที่จุดเดียวกัน คือหน้ากระดาษที่เครื่องวาดซ้ำได้โดยไม่ต้องมีใครเรียงตัวพิมพ์ด้วยมือ

> **เกร็ด: ข้อความแทนที่ที่ไม่มีความหมาย**
>
> ข้อความเติมช่องที่นักออกแบบเรียกว่า *lorem ipsum* คือภาษาละตินที่ถูกตัดต่อสลับมาจาก *De finibus bonorum et malorum* ของซิเซโร (Cicero) ข้อความต้นฉบับขึ้นต้นว่า *Neque porro quisquam est qui dolorem ipsum quia dolor sit amet…* ริชาร์ด แมคคลินทอค (Richard McClintock) ศาสตราจารย์ภาษาละตินที่ต่อมาเป็นผู้อำนวยการฝ่ายสิ่งพิมพ์ของ Hampden-Sydney College เป็นผู้ค้นพบที่มา เขาสืบย้อนข้อความนี้ได้ไกลสุดถึงแผ่นลอกตัวอักษร Letraset จากนั้น Aldus PageMaker ก็ใส่ข้อความนี้มาในซอฟต์แวร์ที่ออกจำหน่าย (released) เรื่องเล่าที่ว่าช่างพิมพ์ในคริสต์ศตวรรษที่ 16 เป็นผู้สลับข้อความนี้เป็นเพียงการคาดเดาของแมคคลินทอค ไม่ใช่บันทึกทางประวัติศาสตร์ ([The Straight Dope](https://www.straightdope.com/21343427/what-does-the-filler-text-lorem-ipsum-mean))
>
> มันอยู่ในหน้านี้เพราะแสดงให้เห็นว่า เมื่อตัวพิมพ์เป็นซอฟต์แวร์ เราจัดหน้าได้ก่อนที่ถ้อยคำจะมีอยู่จริงเสียอีก

## เส้นทางคู่ขนาน: ลำดับภาพที่เคลื่อนไหว

การพิมพ์ตรึงหน้ากระดาษไว้ ภาพยนตร์ตรึงลำดับภาพไว้แล้วเล่นซ้ำ

ภาพม้วนแนวนอน (handscroll) ของจีนเป็นตัวอย่างที่เก่ากว่าของการชมทีละช่วงตามที่ผู้วาดนำทาง แม้จะไม่ใช่ภาพยนตร์ พิพิธภัณฑ์พระราชวังกู้กงอธิบายว่าภาพม้วนแนวนอนกางชมจากขวาไปซ้าย และค่อย ๆ คลี่ออก *ชิงหมิงซั่งเหอถู* (Qingming Shanghe Tu) ในคลังของพิพิธภัณฑ์มีขนาด 24.8 × 528 ซม. และมีผู้คนกว่า 500 คน ([Palace Museum](https://www.dpm.org.cn/collection/paint/228226.html)) บริติชมิวเซียม (British Museum) ระบุอายุภาพม้วน *Admonitions* ของตนไว้ที่คริสต์ศตวรรษที่ 5–7 และระบุว่าเป็นงาน "ตามแบบกู้ไข่จือ (after Gu Kaizhi)" ([British Museum](https://www.britishmuseum.org/collection/object/A_1903-0408-0-1)) การเรียกภาพม้วนว่า "ต้นแบบภาพยนตร์" เป็นการตีความของเรา ไม่ใช่ของพิพิธภัณฑ์

ภาพยนตร์จีนเรื่องแรกมักถูกกล่าวถึงว่าคือ *ติ้งจวินซาน* (定军山, Dingjunshan) ถ่ายโดยห้องภาพเฟิงไท่ (丰泰照相馆) มีนักแสดงงิ้วถานซินเผย (谭鑫培, Tan Xinpei) แสดงนำ มักกล่าวกันว่าถ่ายราวปี 1905 แต่ไม่มีบันทึกร่วมสมัยของปี 1905 ที่เป็นที่รู้จัก เฉิงจี้หัว (程季华, Cheng Jihua) ระบุปี 1908 ในงานปี 1956 และระบุปี 1905 ในงานปี 1963 ตัวภาพยนตร์สูญหายไปแล้ว และใบโปรแกรมการแสดงที่เป็นข่าวและถูกถกเถียงกันในปี 2022 ถูกชี้ว่าไม่ใช่ของแท้ เพราะใช้แบบตัวอักษรที่ตรงกับฟอนต์คอมพิวเตอร์สมัยใหม่ บทความปี 2025 ของหลี่เจิ้น (李镇, Li Zhen) ซึ่งหอภาพยนตร์จีน (China Film Archive) นำมาเผยแพร่ซ้ำ สรุปว่าภาพยนตร์เรื่องนี้มีอยู่จริงและเคยฉายจริงด้วยความน่าจะเป็นสูง ส่วนปีที่ถ่ายยังเป็นที่ถกเถียง ([Li Zhen, via China Film Archive](https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03))

ปีของฝั่งตะวันตกอยู่ท้ายสุด: เอดเวิร์ด มายบริดจ์ (Eadweard Muybridge) ถ่ายภาพม้าแข่งชื่อแซลลี การ์ดเนอร์ (Sallie Gardner) ขณะวิ่งที่ลู่ปาโลอัลโตเมื่อ 19 มิถุนายน 1878 เป็นภาพชุดสิบสองเฟรม ([Library of Congress](https://www.loc.gov/item/97502309/)) หลุยส์ เลอ แพร็งซ์ (Louis Le Prince) ถ่าย *Roundhay Garden Scene* ที่เมืองลีดส์ในเดือนตุลาคม 1888 ([Science Museum Group](https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene)) แล้วหายตัวไปอย่างลึกลับในปี 1890 ([National Science and Media Museum](https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/)) พี่น้องลูมิแยร์ (Lumière) จัดฉายเชิงพาณิชย์ที่เก็บค่าเข้าชมครั้งแรกเมื่อ 28 ธันวาคม 1895 ที่กร็องกาเฟ (Grand Café) ในปารีส ([Institut Lumière](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

## ข้อความเคยเดินทางอย่างไร

สายเคเบิลใต้น้ำเปลี่ยนทะเลให้เป็นสายไฟ สายข้ามช่องแคบอังกฤษเส้นแรกในปี 1850 ใช้การได้เพียงไม่กี่ชั่วโมง ส่วนสายหุ้มเกราะที่วางในปีถัดมาใช้งานได้จริง ([Science History Institute](https://www.sciencehistory.org/stories/magazine/communicating-underwater/)) สายข้ามมหาสมุทรแอตแลนติกเส้นแรกส่งข้อความได้ในเดือนสิงหาคม 1858 แล้วก็หยุดทำงานภายในไม่กี่สัปดาห์ ([Library of Congress](https://guides.loc.gov/this-month-in-business-history/august/first-transatlantic-telegraph-cable)) หลังสายขาดระหว่างการวางในปี 1865 เรือ *Great Eastern* ก็วางสายที่ใช้งานได้ยั่งยืนในปี 1866 ([Science History Institute](https://www.sciencehistory.org/stories/magazine/communicating-underwater/))

เอเชียอยู่บนแผนที่ตั้งแต่ต้น บริษัทเกรตนอร์เทิร์นเทเลกราฟ (Great Northern Telegraph Company) วางสายเชื่อมฮ่องกง เซี่ยงไฮ้ นางาซากิ และวลาดีวอสตอค ในปี 1870–71 และเปิดให้บริการเมื่อ 1 มกราคม 1872 ([atlantic-cable.com, Great Northern](https://atlantic-cable.com/CableCos/GreatNorthern/))

จากนั้นตัวถ่ายทอดสัญญาณก็ขึ้นจากก้นทะเลสู่อวกาศ เทลสตาร์ (Telstar) ซึ่ง Bell Labs สร้างและ AT&T ออกทุน ถูกส่งขึ้นจากแหลมคะแนเวอรัลด้วยจรวด Delta เมื่อ 10 กรกฎาคม 1962 เป็นดาวเทียมดวงแรกที่เอกชนออกทุน ภายในไม่กี่ชั่วโมงก็ถ่ายทอดภาพโทรทัศน์สดครั้งแรกไปยังฝรั่งเศส และต่อมาถ่ายทอดโทรทัศน์สดข้ามแอตแลนติกครั้งแรกที่ผู้ชมในอเมริกาได้เห็น รวมทั้งโทรศัพท์ ข้อมูล และโทรสาร ([NASA](https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/)) ดาวเทียมสตาร์ลิงก์ (Starlink) ชุดแรก 60 ดวงขึ้นสู่วงโคจรด้วยจรวด Falcon 9 จากแหลมคะแนเวอรัลเมื่อ 23 พฤษภาคม 2019 ตามเวลาสหรัฐฯ ฝั่งตะวันออก (24 พฤษภาคม ตามเวลาสากล) ([Space.com](https://www.space.com/spacex-launches-60-starlink-internet-satellites.html)) ส่วนจำนวนดาวเทียมทั้งกลุ่มเปลี่ยนแปลงบ่อยเกินกว่าจะระบุเป็นตัวเลขเดียว

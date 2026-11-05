---
title: "From Press to Pixel"
weight: 46
date: 2026-01-02
draft: true
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 45
tags: []
summary: "When page and type become software — Wang Xuan's laser phototypesetting leads; Western PostScript and CSS at the bottom"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[From Woodblock to Movable Type]({{< relref "01d-woodblock-to-movable-type" >}}) left the page as something physical: ink, type, paper. This page is where the page becomes a file, and Chinese laser phototypesetting is the case that forced the problem into the open.

## Why Chinese forced the issue

A Latin font needs a few dozen sorts. A Chinese newspaper needs tens of thousands of characters, each drawn at several sizes and styles. Store every one as a dense grid of dots and the set will not fit in the computers of the late 1970s. Wang Xuan later wrote that the sheer number of characters pushed his team to describe glyphs by their outlines earlier than their Western peers did, to cut the amount of data. ([Wang Xuan, 1999, on Sina](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## Wang Xuan: laser phototypesetting

The China Computer Federation's history entry gives the engineering numbers. A single character came down from about 10,000 bits to an average of about 800, roughly 12 times smaller, and the whole system compressed by about 500 times, so about 4 MB held some 600,000 character images. The first newspaper sample page came out on 27 July 1979, and the first book set on the system, 《伍豪之剑》, is dated 15 September 1980. ([CCF Computing History, Huaguang / Founder system](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml))

In the same 1999 piece, Wang says the team fixed its own page-description format in 1986, and that format carried pages sent to remote printing plants from 1990 to 1994. By 1990 they expected PostScript to become the standard, and in autumn 1993 they released what he calls China's first PostScript Level 2 interpreter. Those are Wang's own accounts. ([Wang Xuan, 1999](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## Taiwan: a parallel first

The United Daily News in Taipei switched on its computer typesetting system on 16 September 1982. The paper describes it as a world first; it grew separately from the mainland laser-phototypesetting line. ([United Daily News anniversary book](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html))

## What the page became

Once type and layout live in software, the "press" is a renderer. Adobe released PostScript in 1984: a language that describes a page to a printer. ([CHM, PostScript](https://computerhistory.org/blog/postscript-a-digital-printing-press/)) On the web, CSS does the same job for screens. Selectors, the box model and the cascade decide how a document becomes a layout, and the words stay separate from how they look. ([W3C CSS Snapshot](https://www.w3.org/TR/CSS/))

Both lines, Chinese compression and Western page description, end in the same place: a page a machine can redraw without anyone setting type by hand.

> **Aside: the placeholder that means nothing**
>
> The filler text designers call *lorem ipsum* is scrambled Latin from Cicero's *De finibus bonorum et malorum*; the passage starts *Neque porro quisquam est qui dolorem ipsum quia dolor sit amet…*. Richard McClintock, a Latin professor turned publications director at Hampden-Sydney College, found the source. He could trace the filler back only as far as Letraset transfer sheets, a few decades before desktop publishing. Aldus PageMaker then shipped it with the software. The often-repeated line that a printer scrambled it in the 1500s is McClintock's guess, not a record. ([The Straight Dope](https://www.straightdope.com/21343427/what-does-the-filler-text-lorem-ipsum-mean))
>
> It belongs here because it shows that, once type is software, you can lay out a page before the words exist.

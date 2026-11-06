---
title: "From Press to Pixel"
weight: 51
date: 2026-01-02
draft: false
phase: "7 — Distributed Systems, Big Data & Orchestration"
series_index: 50
aliases:
  - /posts/43b-from-press-to-pixel/
  - /posts/49-from-press-to-pixel/
  - /posts/50-from-press-to-pixel/
tags: []
summary: "When page and type become software — Wang Xuan's laser phototypesetting leads; Western PostScript and CSS at the bottom"
image_prompt: "Technical diagram of Chinese character bitmap compressed to outline glyphs, then laser-scanned onto film, clean line art, labeled stages"
video_prompt: "20-second animation: dense Chinese character grid shrinks to a sparse outline, then a laser sweeps a page onto film, cool industrial tones"
schematics: "Diagram: character bitmap → compression → laser phototypesetting → digital outline fonts → CSS / browser layout"
---

[From Woodblock to Movable Type]({{< relref "02-woodblock-to-movable-type" >}}) left the page as something physical: ink, type, paper. This page is where the page becomes a file, and Chinese laser phototypesetting is the case that forced the problem into the open.

## Why Chinese forced the issue

A Latin font needs a few dozen sorts. A Chinese newspaper needs tens of thousands of characters, each drawn at several sizes and styles. Store every one as a dense grid of dots and the set will not fit in the computers of the late 1970s. Wang Xuan later wrote that the sheer number of characters pushed his team to describe glyphs by their outlines, to cut the amount of data. ([Wang Xuan, 1999, on Sina](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## Wang Xuan: laser phototypesetting

The China Computer Federation's history entry gives the engineering numbers. For a size-5 (五号) character, information fell from about 10,000 bits to an average of about 800 — roughly 12 times smaller. The same method also lets a glyph scale (larger, smaller, taller, flatter) without losing quality, so the overall saving reaches about 500 times; about 4 MB then held some 600,000 glyph masters (字头). Those are separate figures in the source — 800 bits is the compressed size-5 form, not what you get by dividing 4 MB by 600,000 — so they should not be multiplied together. The first newspaper sample page came out on 27 July 1979, and the first book set on the system, 《伍豪之剑》, is dated 15 September 1980. ([CCF Computing History, Huaguang / Founder system](https://www.ccf.org.cn/Computing_history/Full_List/2020/First_class/2021-01-20/722005.shtml))

In the same 1999 piece, Wang says the team fixed its own page-description format in 1986, and that format carried pages sent to remote printing plants from 1990 to 1994. By 1990 they expected PostScript to become the standard, and in autumn 1993 they released what he calls China's first PostScript Level 2 interpreter. Those are Wang's own accounts. ([Wang Xuan, 1999](https://finance.sina.com.cn/management/vision/1999-11-19/12733.html))

## Taiwan: a parallel first

The United Daily News in Taipei switched on its computer typesetting system on 16 September 1982. The paper describes it as the first Chinese-language daily to adopt computer typesetting; it grew separately from the mainland laser-phototypesetting line. ([United Daily News anniversary book](https://reading.udn.com/act/flipbook/20210203/files/basic-html/page273.html))

## What the page became

Once type and layout live in software, the "press" is a renderer. Adobe released PostScript in 1984: a language that describes a page to a printer. ([CHM, PostScript](https://computerhistory.org/blog/postscript-a-digital-printing-press/)) On the web, CSS does the same job for screens. Selectors, the box model and the cascade decide how a document becomes a layout, and the words stay separate from how they look. ([W3C CSS Snapshot](https://www.w3.org/TR/CSS/))

Both lines, Chinese compression and Western page description, end in the same place: a page a machine can redraw without anyone setting type by hand.

> **Aside: the placeholder that means nothing**
>
> The filler text designers call *lorem ipsum* is scrambled Latin from Cicero's *De finibus bonorum et malorum*; the passage starts *Neque porro quisquam est qui dolorem ipsum quia dolor sit amet…*. Richard McClintock, a Latin professor turned publications director at Hampden-Sydney College, found the source. He could trace the filler back only as far as Letraset transfer sheets. Aldus PageMaker then shipped it with the software. The often-repeated line that a printer scrambled it in the 1500s is McClintock's guess, not a record. ([The Straight Dope](https://www.straightdope.com/21343427/what-does-the-filler-text-lorem-ipsum-mean))
>
> It belongs here because it shows that, once type is software, you can lay out a page before the words exist.

## A parallel track: sequences that move

Printing freezes a page. Film freezes a sequence and plays it back.

Chinese handscrolls are an earlier case of guided, step-by-step looking, though not of cinema. The Palace Museum describes a handscroll as unrolled slowly, right to left. Its *Qingming Shanghe Tu* is 24.8 × 528 cm and shows more than 500 people. ([Palace Museum](https://www.dpm.org.cn/collection/paint/228226.html)) The British Museum dates its *Admonitions* scroll to the 5th–7th century, "after Gu Kaizhi." ([British Museum](https://www.britishmuseum.org/collection/object/A_1903-0408-0-1)) Calling handscrolls "proto-cinema" is our reading, not the museums'.

China's first film is usually said to be *Dingjunshan*, filmed around 1905 at Fengtai Photo Studio with the opera singer Tan Xinpei, though no contemporary 1905 record is known. Cheng Jihua dated it 1908 in 1956 and 1905 in the 1963 *History of the Development of Chinese Cinema*; the film is lost, and a widely shared playbill is a modern fake. Li Zhen (2025, via the China Film Archive) concludes it very probably existed and was shown, but title, maker, and year remain open. ([Li Zhen, via China Film Archive](https://www.cfa.org.cn/eportal/ui?articleKey=7d492603cf2c4501997f8258bbd732a5&columnId=bab0d753635c4d0bb869bc752c3b4e8e&pageId=37a0783c76bd4611b82235402ea26f03))

The Western dates at the bottom: Eadweard Muybridge photographed the horse Sallie Gardner in motion at Palo Alto on 19 June 1878. ([Library of Congress](https://www.loc.gov/item/97502309/)) Louis Le Prince filmed the *Roundhay Garden Scene* in Leeds in October 1888, then disappeared in 1890. ([Science Museum Group](https://collection.sciencemuseumgroup.org.uk/objects/co8646638/glass-copy-negative-of-roundhay-garden-scene); [National Science and Media Museum](https://blog.scienceandmediamuseum.org.uk/louis-le-prince-created-the-first-ever-moving-pictures/)) The Lumière brothers held their first paying public screening on 28 December 1895, at the Salon indien of the Grand Café in Paris (after private demonstrations earlier that year). ([Institut Lumière](https://www.institut-lumiere.org/musee/les-freres-lumiere-et-leurs-inventions/cinematographe.html))

## How the message used to travel

Undersea cables turned the sea into a wire. A cable across the English Channel failed within hours in 1850; an armoured one laid the next year worked. The 1865 Atlantic attempt broke; in 1866 the *Great Eastern* laid a lasting link and recovered the broken 1865 cable. ([Science History Institute](https://www.sciencehistory.org/stories/magazine/communicating-underwater/)) The first transatlantic cable carried messages in August 1858 and then failed; a truly reliable link came in 1866, with the *Great Eastern* carrying the cable. ([Library of Congress](https://guides.loc.gov/this-month-in-business-history/august/first-transatlantic-telegraph-cable))

Asia was on the map early. The Great Northern Telegraph Company laid cables linking Hong Kong, Shanghai, Nagasaki and Vladivostok in 1870–71, and opened them to traffic on 1 January 1872. ([atlantic-cable.com, Great Northern](https://atlantic-cable.com/CableCos/GreatNorthern/))

Then the relay left the seabed. Telstar, built by Bell Labs and paid for by AT&T, launched from Cape Canaveral on 10 July 1962. Within hours it relayed the first live television pictures, to France, and it later carried the first live transatlantic television seen in America, along with telephone calls, data and fax. ([NASA](https://www.nasa.gov/history/telstar-opened-era-of-global-satellite-television/)) Starlink's first batch of 60 satellites launched on 23 May 2019 (US Eastern; 24 May UTC); the constellation's size changes too often to give one number. ([Space.com](https://www.space.com/spacex-launches-60-starlink-internet-satellites.html))

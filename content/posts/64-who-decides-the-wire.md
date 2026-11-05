---
title: "Who Decides the Wire"
weight: 67
date: 2026-09-06
draft: false
phase: "Governance / Internet Civics"
series_index: 66
tags: []
summary: "Who names numbers, names, and encodings so heterogeneous networks can interoperate"
image_prompt: "Clean diagram of shared registries — protocol numbers, IP addresses, domain names, Unicode code points — flowing into one interoperable packet path, internet-governance infographic style"
video_prompt: "20-second animation: a packet gaining meaning only after number, name, and encoding registries agree, clean technical motion graphics"
schematics: "Diagram: numbers (IANA) / addresses (RIRs) / names (DNS+ICANN) / encodings (Unicode) as four shared coordination layers above TCP/IP"
---

ARPANET (Post 39) and TCP/IP (Post 41) solved how packets move. They did not, on their own, answer a quieter question: *who gets to say what the bits mean?* Port 80, an IPv4 prefix, `.com`, the code point for ก — none of those work unless distant operators treat the same identifiers the same way. The internet's governance story is the story of that agreement: not a parliament over the network, but a set of shared ledgers for **numbers**, **names**, and **encodings**.

## Documents Before Institutions

The first coordination tool was a document series. In April 1969, Steve Crocker published [RFC 1](https://www.rfc-editor.org/rfc/rfc1) — *Host Software* — as working notes for the ARPANET research community. The tone mattered: "Request for Comments," not "edict." Jon Postel edited the series for nearly three decades, turning informal memos into the durable public record of how the internet actually works. Door out: the [RFC Editor history](https://www.rfc-editor.org/history/).

When the research community outgrew hallway meetings, it grew the Internet Engineering Task Force (IETF). The load-bearing phrase is Dave Clark's: *rough consensus and running code* — standards earn their keep by shipping, not by voting. The IETF does not own the internet; it owns a process for arguing protocols into something operators will deploy. Door out: [ietf.org](https://www.ietf.org/).

## Numbers: Someone Has to Hand Out the Identifiers

Packets carry protocol numbers, port numbers, address blocks, ASN values, media types — identifiers that are worthless if two groups mint the same one for different meanings. For years that ledger lived in one place: the Internet Assigned Numbers Authority (IANA), run as a practical service by Jon Postel (with Joyce Reynolds as a long-time contact point) under research contracts at UCLA and later USC/ISI. IANA is the seed of a *kind*: a neutral registry for protocol parameters so implementations can interoperate without bilateral negotiation.

As the network scaled past one person's notebook, number resources split by *kind*. Protocol parameters stayed with IANA. IP address space moved toward Regional Internet Registries — ARIN (1997) for much of North America; RIPE NCC, APNIC, LACNIC, and AFRINIC are the same *kind* for other regions, with national or local Internet registries (NIRs) sitting under some of them where the region chose that model. The pattern is the point: scarce, unique identifiers need a custodian everyone can point at. Door out: [iana.org](https://www.iana.org/), [arin.net](https://www.arin.net/).

## Names: Humans Need Words; Machines Need Uniqueness

Paul Mockapetris's DNS specifications ([RFC 1034](https://www.rfc-editor.org/rfc/rfc1034), [RFC 1035](https://www.rfc-editor.org/rfc/rfc1035)) turned hierarchical names into a distributed lookup system on top of the address fabric. Names are political in a way raw numbers are not: people argue over words. Jon Postel's [RFC 1591](https://www.rfc-editor.org/rfc/rfc1591) framed early domain policy as stewardship.

By the late 1990s the U.S. government wanted those coordination functions out of a single research contract. ICANN (Internet Corporation for Assigned Names and Numbers) formed in 1998 — interim chair Esther Dyson — to hold the institutional seat for names and numbers policy while IANA continued as the operational registries under that umbrella. Read ICANN as another seed of a *kind*: a multi-stakeholder body whose job is stability and uniqueness of the shared namespace, not picking winners among applications. Door out: [icann.org](https://www.icann.org/).

## Encodings: The Payload Has to Mean the Same Glyph

Interoperation fails quietly when two ends disagree what a byte sequence *is*. The Unicode Consortium (founded 1991; early work from Joe Becker, Mark Davis, and others across companies that needed a single character set) maintains the shared mapping from abstract characters to code points — the reason Thai, Latin, and emoji can share one wire without each application inventing its own alphabet table. UTF-8 then became the dominant *on-the-wire* encoding for that repertoire. Door out: [unicode.org](https://www.unicode.org/), [Unicode Standard](https://www.unicode.org/standard/standard.html).

## Kin of the Same Kind

A few peers earn a sentence — same *kind* of shared meaning, not a standards-body tour:

- **W3C and WHATWG** — Tim Berners-Lee founded the World Wide Web Consortium (1994) to steward web platform standards; WHATWG later carried the living HTML/DOM specs when the browser vendors needed a faster iteration path. Same *kind*: who may define what a document and an API mean in the browser.
- **IEEE** — IEEE 802 is why Ethernet (Post 40) and Wi-Fi are not proprietary island dialects at the link layer.
- **ISO and peers** — formal international standards sit beside the RFC world where procurement, safety, or national bodies demand them; the internet mostly shipped on RFCs first and harmonized later.

## Why This Belongs in the Journey

Posts 39–41 are the engineering bet: packets, layers, unreliable substrate. This post is the civics bet underneath them: **shared meaning is infrastructure**. Without someone (and some process) deciding numbers, names, and encodings, every new network is a private language. The doors above are the primary sources — RFCs, registries, consortium pages.

Optional side paths from here: how people *found* things and *talked* on that shared wire (Post 43), or how wartime crypto forced machines that could keep secrets (Post 66). The main spine stays packets → systems → silicon → attention; this is a widen-the-lens beat you can take or skip.

<!--
ASSET CHECKLIST
[ ] Hero image generated from image_prompt above
[ ] Schematic(s) drawn/rendered per schematics field
[ ] Short-form video clip generated from video_prompt (optional, for LinkedIn/promo cross-post)
-->

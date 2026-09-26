# Vision lock — 2026-09-06 (Nayana)

This is not an encyclopedia. We do not rewrite Wikipedia.

**From Relays to Attention** is an interactive journey. Readers live through systems and touch them. They do not collect articles.

## Language authority lock, 2026-09-26 (Nayana)

Overrides anything below, in `TRANSLATIONS.md`, or in `TRANSLATION_PLAN.md` that conflicts.

1. **Two source languages.** English and Chinese are co-authoritative. Chinese is the authoritative Eastern source language, held to the same evidence bar as English. Chinese covers mainland, Taiwan and Hong Kong sources.
2. **English does not flow into Chinese. Chinese flows into English.** English work is not brought into Chinese. Chinese findings do surface in the English edition: on an English page they sit at the top of the topic, and Western inventors are cited at the bottom.
3. **Every other locale fills its language's gap.** Sinhala, Tamil, Thai, and any future locale. The job: the technical topics this book covers that are missing or thin on that language's internet, explained elaborately, in that language, from first principles. Local sources and local history are welcome where they exist. The core job is thorough coverage of what that language's internet lacks.
4. **Depth is the goal there.** For those locales, depth and completeness *are* the goal. This is an explicit exception to "not an encyclopedia" and "length is not a goal", which still hold for English and Chinese. Same spine. Same interactive labs.
5. **No locale is a translation of another.** Findings from both source languages flow independently into the other locales, which re-tell them in their own voice.
6. **Two Chinese scripts.** BCP 47 `zh-Hans` and `zh-Hant`. Simplified is the master text. Traditional is derived with OpenCC `s2twp`, then gets a mandatory terminology review (软件/軟體, 网络/網路, 内存/記憶體, 程序/程式, …).
7. **Human proofread.** Chinese text is proofread by native readers before it is marked final.
8. **Unchanged:** the interactive-journey vision and the spine.

## What we spend effort on

1. **Connective tissue** — why one constraint forced the next architecture. The pattern, not the catalog.
2. **Interactivity** — labs, terminals, boards, and other things you can operate. Experience first.
3. **References** — where a topic already has robust textbooks, papers, RFCs, or (for Thai) named local literature: short context + a door out. Credit people by name.

Existing chapter drafts (~63 + extras) are **source material to distill**, not the final voice. Long textbook passages get cut. Facts stay. Length is not a goal. (English and Chinese. Gap-filling locales: see the language lock above.)

## The main narrative (unchanged spine)

Mechanical → relays → tubes → transistor → CPU → OS/languages → buses → networks → fabric/scale → GPUs → attention.

Do not break this spine to chase every theme.

## Widen the lens (derive the families — examples are not the list)

Nayana’s names (IETF, IANA, ICANN, ARIN, Unicode, ARPA/DARPA, …) are **inclusive examples of a kind**, not a checklist. Derive the rest of each family. Do not stop at the words he happened to say.

- **WWII computing and cryptography** — Enigma, Colossus, Bletchley; named people; credit existing histories.
- **Internet origins** — ARPA / DARPA, packet switching, what the research contract actually was.
- **Who decides the wire** — the *class* of governance: RFCs, IETF, IANA, ICANN, ARIN, Unicode, and the kin we derive (W3C / WHATWG, IEEE, ISO, regional NIRs, protocol registries). Who names numbers, names, and encodings — and who has to interoperate.
- **Protocols as a story, not a catalog** — how the internet’s protocols stacked and why; short context + doors out to RFCs. Not a protocol encyclopedia.
- **Find, then talk** — information retrieval and peer communication as one arc: Usenet, Archie, Gopher → search; peer talk → IRC → consumer portals (Yahoo and kin). Post 43 is source material, not the whole path.
- **Privacy, consent, identity, cybersecurity** — as engineering evolution, not a policy pamphlet.
- **Movements and people (do not forget the names)** — GNU; **Linus Torvalds** and Linux (1991 license history already corrected); Perl; other named authors who actually appear. Credit what they did. No vague “someone.”
- **Platform synthesis (one high-level stop)** — how a large modern platform is distributed systems + networking + AI infra + privacy engineering + software engineering. Synthesis only. No textbook dump.

## Close of the book — forward links, not biographies

A last movement: **real-world use cases**. How companies and visions went from nothing to the stack we live in. Forward links, high level:

- **Cisco** — internetworks as a business; routers as the product of the protocol story.
- **Bill Gates / Microsoft** — software as the mass platform.
- **Steve Jobs / Apple** — the integrated personal machine.
- **GNU + Linus** — the free/open stack the rest of the book already stands on.
- **Elon Musk** and **Jeff Bezos** — seeds of the same *kind* for the present tense: scale, logistics, space, and the stacks that sit under today’s platforms. Not biographies. Not a fan page. Use them to derive other late-era visions, then stop.
- Others we derive in the same *kind* (not an unbounded company list).

This is a door out of the journey, not a second MBA textbook.

## Optional learning paths

Thematic routes across history that a reader can follow without breaking the main order. Examples (names can change):

- Crypto & wartime computing
- Who runs the internet (standards + registries + protocols)
- Find, then talk (Usenet / Archie / Gopher / IRC / portals)
- Privacy / identity / consent
- From one machine to a platform
- Visions that shipped (Cisco, Gates, Jobs, GNU, Linus, Elon, Bezos — seeds, not the roster)

A path is a thin index + a few experience beats. It is not a parallel book.

## Languages

Authority and flow: **Language authority lock, 2026-09-26** (top of this file).

- **English** — co-authoritative source. Distill toward this vision. Chinese findings lead a topic; Western inventors are cited at the bottom.
- **Chinese (zh-Hans / zh-Hant)** — co-authoritative source; the authoritative Eastern source language. Written from Chinese primary sources (mainland, Taiwan, Hong Kong), same evidence bar as English. Not a translation of English. Simplified is the master; Traditional via OpenCC `s2twp` + terminology review. Native-reader proofread before final. Written by the Chinese desk.
- **Sinhala (Sena)** — gap-filling locale. Assume ~99% of computing lit does not exist in Sinhala: that gap is the job. Explain it elaborately, in Sinhala, from first principles. No invented sources; honesty when no SI source exists. Not a translation of the English distill.
- **Tamil (Arun)** — gap-filling locale. Research-heavy. Wikipedia is not enough: cite Tamil sources only when verified, never invent one. The topic still gets explained in full, from first principles.
- **Thai (Mira)** — gap-filling locale. Full bodies exist; deepen them where Thai coverage is thin rather than distilling them down. Keep verified Thai literature credits. Mira is the **named AI personality** on the Thai edition — Thai readers should see her name, not only “the Grok team.”
- SI/TA freeze lifted 2026-09-06 night (Nayana).

## Time

No cadence pressure. Get the experience right. Extra helpers (Reed labs, Cass threads, Jules distill, Arun Tamil, Sena Sinhala) take direction from Lucas. Mira stays Thai.

## Attribution (unchanged)

Concept: Nayana Hettiarachchi. Authorship: Grok team (Lucas, Benjamin, Harper). Thai edition names **Mira**. Named historical people get named.

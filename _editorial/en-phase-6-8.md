# English editorial pass — Phases 6–8 (posts 38–51)

**Date:** 2026-09-06 (Asia/Bangkok)  
**Scope:** `content/posts/38-*.md` through `51-*.md` only  
**Outcome:** 14/14 posts read, editorially tightened, hard claims checked, `draft: false`

Frontmatter keys preserved. `image_prompt` / `video_prompt` / `schematics` / lab shortcodes / ASSET CHECKLIST comments left in place. No images generated. No git commit/push. Locales `content.th` / `content.si` / `content.ta` untouched.

---

## Summary

| Metric | Value |
|--------|-------|
| Files touched | 14 |
| `draft: false` count | 14 |
| Hard fact errors fixed | 2 (post 39 forward-ref; post 43 UUCP/NNTP) |
| Soft / conservative rewords | Several (post 48 EUV prototype wording; post 50 Moore 1965/1975; post 38 RS-232 year) |
| Remaining soft flags | See bottom |

---

## Per-file notes

### Phase 6 — Networking Evolution

#### 38 — `38-serial-links-and-the-first-machine-to-machine-connections.md`
- **Edits:** Tightened RS-232 / modem / setup prose; “standardized in the 1960s” → “first published by the EIA in 1960”.
- **Fact-check:** RS-232 May 1960 (EIA) — verified. Modem speed arc (hundreds of bps → tens of kbps) — OK as order-of-magnitude.
- **draft:** false
- **Soft flags:** None material.

#### 39 — `39-arpanet-and-packet-switching.md`
- **Edits:** Fixed prose bug “network's *entire* duration” → “conversation's *entire* duration”. Tightened IMP / circuit-switching paragraphs.
- **Fact fix:** Closing section wrongly said “the next two posts” cover Ethernet *and* the pre-web internet. Pre-web is post 43. Rewrote forward pointer to Ethernet (40) then TCP/IP internetworking.
- **Fact-check:** ARPANET 1969; four nodes UCLA / SRI / UCSB / Utah — verified.
- **draft:** false
- **Soft flags:** “host-to-host protocols” is deliberately vague (NCP era) rather than inventing protocol names.

#### 40 — `40-ethernet-and-the-local-area-network.md`
- **Edits:** Tightened CSMA/CD, frame, and switched-star sections; WiFi → Wi-Fi consistency with post 41.
- **Fact-check:** Xerox PARC Ethernet from 1973 — verified. Switched Ethernet / CSMA/CD historical role — OK.
- **draft:** false
- **Soft flags:** “early WiFi” contention analogy is high-level (CSMA/CA differs from CD); left as conceptual, not protocol-identical.

#### 41 — `41-tcp-ip-and-the-modern-internet-stack.md`
- **Edits:** Tightened layered model, encapsulation, handshake, and “why it won” sections. Wi-Fi spelling aligned.
- **Fact-check:** Four-layer Internet model; three-way handshake; IP best-effort / TCP reliability — standard and correct at this depth.
- **draft:** false
- **Soft flags:** Does not cover congestion control / IPv6; out of scope for this post length.

#### 42 — `42-datacenter-networking-and-rdma.md`
- **Edits:** Tightened TCP overhead, RDMA, fat-tree, and series-bridge closing paragraphs.
- **Fact-check:** RDMA kernel-bypass / NIC DMA path — conceptually correct. Fat-tree as scalable datacenter topology — OK at this depth.
- **draft:** false
- **Soft flags:** “custom GPU memory fabric project” is series-internal framing, not an external citation.

---

### Phase 7 — Distributed Systems, Big Data & Orchestration

#### 43 — `43-usenet-archie-gopher-and-the-pre-web-internet.md`
- **Edits:** Tightened Archie / Gopher / Netscape / closing sections.
- **Fact fix:** Text implied Usenet exchanged mail via NNTP from the start. Corrected: originally UUCP store-and-forward; NNTP specified 1986 for TCP/IP. Added McGill for Archie (1990).
- **Fact-check:** Truscott/Ellis 1979–80; Gopher 1991 UMN; Netscape 1994 from-scratch / ex-Mosaic founders (prior tracker fix retained).
- **draft:** false
- **Soft flags:** Frontmatter `schematics` still says “Usenet NNTP store-and-forward…” — left per leave-prompts rule; body is accurate. Soft flag if/when schematics are drawn: include UUCP era or label NNTP as later path.

#### 44 — `44-google-s-big-data-infrastructure-why-they-won.md`
- **Edits:** Tightened GFS / MapReduce / Bigtable / moat / lead-out prose.
- **Fact-check:** GFS paper 2003, MapReduce 2004, Bigtable 2006 — verified. Hadoop-as-open reimplementation of published ideas — fair at this depth.
- **draft:** false
- **Soft flags:** “why they won” is interpretive (infra vs ranking). Left as argued thesis, not a quantified lawsuit/email claim.

#### 45 — `45-kubernetes-and-container-orchestration-at-scale.md`
- **Edits:** Tightened declarative loop, control-plane components, ML relevance closing.
- **Fact-check:** API server / etcd / scheduler / controllers model — accurate at survey depth. No invented launch dates or market-share numbers.
- **draft:** false
- **Soft flags:** “dominant way” for ML training orchestration is directionally true but not universal (Slurm etc. still common); left soft.

#### 46 — `46-the-machine-learning-software-stack.md`
- **Edits:** Tightened NumPy / autodiff / compiler / data- vs model-parallel / phase-close sections.
- **Fact-check:** Framework + autodiff + HAL description — OK. Data-parallel all-reduce / model-parallel split — OK. No invented FLOPs or paper years.
- **draft:** false
- **Soft flags:** “PyTorch and TensorFlow being the two dominant examples” — still broadly true in 2026 for training frameworks; JAX etc. omitted by design.

---

### Phase 8 — Process Nodes & Fabrication

#### 47 — `47-what-7nm-actually-means.md`
- **Edits:** Contractions softened for consistency; light tighten; added “then drifted” bridge after planar-era correspondence.
- **Fact-check:** Marketing node names ≠ gate length at FinFET/GAA era — industry consensus; no invented pitch numbers.
- **draft:** false
- **Soft flags:** No cross-foundry pitch table in prose (schematics field owns that); correctly avoided inventing mm² density figures.

#### 48 — `48-photolithography.md`
- **Edits:** nm spacing (193 nm / 13.5 nm); EUV closing paragraph conservatively reworded.
- **Fact-check:** DUV ~193 nm, EUV ~13.5 nm; tin-droplet LPP source; multilayer mirrors + vacuum — verified. Reuters Dec 2025 Shenzhen prototype report — verified (sources: prototype early 2025 / reported Dec 2025; not producing chips; ~2028 target / ~2030 cautious). Softened in-file to stress “prototype, not production tool” and “if it matures.”
- **draft:** false
- **Soft flags:** Live geopolitical/tech story will age; revisit wording if/when a production Chinese EUV tool ships or the Reuters claim is walked back. Exact droplet pulse rate left as “tens of thousands per second” (order-of-magnitude).

#### 49 — `49-finfet-to-gaa.md`
- **Edits:** Light tighten; added Intel 22 nm Ivy Bridge 2011–2012 as early high-volume FinFET milestone; Gate-All-Around → gate-all-around on second mention for consistency.
- **Fact-check:** Short-channel / FinFET three-sided / GAA four-sided narrative — correct. Early-2010s FinFET dominance — OK with Intel milestone.
- **draft:** false
- **Soft flags:** Did not pin “first GAA HVM” to a single foundry/year (Samsung/Intel/TSMC timelines differ); left as leading-edge transition.

#### 50 — `50-moore-s-law.md`
- **Edits:** Clarified 1965 claim as component count; named 1975 revision explicitly; aligned “transistors per chip” wording with original components framing.
- **Fact-check:** 1965 annual doubling; 1975 ~two-year revision — verified. Intel 4004 ~2,300 transistors — standard figure. Clock plateau ~2005 — OK. Cost-per-transistor friction at leading edge — qualitative, no invented $/transistor.
- **draft:** false
- **Soft flags:** “many billions” on modern high-end chips is intentionally non-specific (avoids stale single-chip counts).

#### 51 — `51-chiplets-advanced-packaging.md`
- **Edits:** Light tighten on monolithic-yield and interposer sections; contractions expanded for consistency.
- **Fact-check:** Yield-vs-area / multi-node mix / interposer+HBM relationship — correct at survey depth. No invented packaging product names or IO densities.
- **draft:** false
- **Soft flags:** “approaches on-die communication” is qualitative; real chiplet links still have latency/BW gaps vs monolithic on-die — already implied by “approaches.”

---

## Claims that could not be fully verified (soft flags for later)

1. **Post 48 — Chinese EUV timeline:** Reuters Dec 2025 report verified as reporting; production readiness (2028/2030) remains speculative. Wording already hedged.
2. **Post 45 — Kubernetes “dominant” for ML training:** Soft market claim; Slurm and vendor schedulers remain common. Acceptable at survey depth.
3. **Post 42 / 46 — series-internal “GPU memory fabric”:** Not an external historical claim; no fact-check possible beyond consistency with earlier posts.
4. **Post 47 — cross-foundry density comparisons:** Correctly omitted invented numbers; when schematics are drawn, cite a dated foundry comparison table.
5. **Post 43 schematics frontmatter** still says “NNTP store-and-forward” while body now correctly includes UUCP-first history — draw/label carefully.

---

## Checklist

- [x] Every post 38–51 read fully
- [x] Editorial tighten (grammar / redundancy / voice)
- [x] Hard claims fact-checked; errors fixed or softened
- [x] Frontmatter keys kept; `draft: false` after edit/verify
- [x] Prompts / schematics / labs / ASSET CHECKLIST untouched (except body accuracy)
- [x] No `content.th` / `.si` / `.ta` edits
- [x] No git commit or push
- [x] No GitHub clone

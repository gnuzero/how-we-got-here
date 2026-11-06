# How We Got There

> **Provisional spine numbering.** Filenames follow public chapter numbers (`weight`). See [`_editorial/chapter-map.md`](_editorial/chapter-map.md) and re-run with `python3 scripts/renumber.py` if Nayana adjusts the map. Old URLs resolve via accumulating Hugo aliases.

Educational series at 3 posts/week — electronics fundamentals through modern AI hardware, plus the software and networking layers built on top. 63 technical chapters + Foreword + Glossary, ~45,000 words of draft text.

## Read the book

**Live site (canonical):** https://how-we-got-here.org/

Public GitHub Pages on the custom domain. Prefer this URL over any `github.io` mirror.

## Attribution

- **Concept and inspiration**: Nayana Hettiarachchi  
- **Authorship, research, structure, technical writing, and interactive labs**: The Grok Team (Grok, Lucas, Benjamin, Harper)  
- **Foreword**: Written by and attributed to the Grok Team

This work is offered as a public educational resource. The direction and decision to publish rest with the originator of the concept.

## Current status

63 technical chapters + Foreword + Glossary are present. Foreword and Glossary are published (`draft: false`). Remaining technical posts still carry `draft: true` and need editorial pass + assets. See `TRACKER.md`.

## Why this exists

Inspired by the *How Computers Work: Processor and Main Memory* text — a solid, technical treatment of CPU and memory architecture. This series is a **backfill and forward-fill** around that core, expanded to cover the full stack from mechanical calculation through modern AI silicon:

- **Backfill** — everything before the transistor existed: mechanical engines, relays, vacuum tubes (including ENIAC — the "30-ton switchboard"), and the physical limits that made semiconductor switching inevitable (Phase 1)
- **Core hardware** — device physics, CPU internals, and the architecture family tree from mainframes through x86/ARM/RISC-V (Phases 2–3)
- **Software layers** — operating systems, programming languages, compilers, and real-time systems built on top of the hardware (Phase 4)
- **Connecting machines** — buses/interconnects locally, then networking from serial links through modern datacenter RDMA (Phases 5–6)
- **Forward-fill** — process node scaling and fabrication, GPUs, and modern AI accelerator hardware (Phases 7–9)

Not a replacement for that book — an extension of its arc in every direction: backward in time, upward through the software stack, outward across the network, and forward into modern AI hardware.

## Local setup (on your Mac M5 or hqpro)

```bash
# Install Hugo (extended version, needed for SCSS)
brew install hugo

# Add the theme as a git submodule
cd how-computers-work
git submodule add https://github.com/alex-shpak/hugo-book themes/hugo-book

# Serve locally with drafts visible
hugo server -D
# -> http://localhost:1313
```

## Publishing a post

1. Edit `content/posts/NN-slug.md`
2. Set `draft: false` when ready
3. Check it off in `TRACKER.md`
4. Commit + push to `main` — GitHub Actions builds and deploys automatically

## GitHub Pages

Live at **https://how-we-got-here.org/** (public Pages). Deploy via `.github/workflows/deploy.yml` on push to `main`.

## Structure

```
content/posts/     ← 62 posts, full draft text written, frontmatter filled in
archetypes/         ← template for `hugo new posts/new-post.md`
hugo.toml           ← site config
TRACKER.md          ← weekly progress checklist
.github/workflows/  ← auto build + deploy on push
```

## Per-post assets

Every post's frontmatter has three pre-filled fields — starting points, edit before using:

- `image_prompt` — hero/mood image (Midjourney, DALL-E, SDXL, whatever you use)
- `video_prompt` — optional short clip for LinkedIn/promo cross-post
- `schematics` — what technical diagram(s) the post needs. **Recommendation:** don't AI-generate these — draw them by hand in Excalidraw or Figma. AI image gen reliably gets labels, arrows, and electrical correctness wrong; for a blog about how hardware actually works, wrong schematics undercut the whole premise. Use AI gen only for the non-technical hero/mood image.

`layouts/partials/asset-prompts.html` renders these prompts as a collapsible `<details>` block, but **only while `draft: true`** — so they're visible to you locally while writing but never leak onto the published page. Wire it into your post template with `{{ partial "asset-prompts.html" . }}` if the theme doesn't already show frontmatter params.

See `TRACKER.md` for the full per-post asset workflow.


## Interactive labs

Three self-contained, client-side interactive labs live in `static/labs/` and embed into any post via a shortcode:

- **`mini-cpu`** — custom 8-bit toy ISA (4-bit opcode/operand, 16B RAM, A/B registers, carry/zero flags). Fully self-built, no external dependencies. Assembler + step/run emulator in one HTML file.
- **`breadboard`** — circuit simulator, embeds [Falstad CircuitJS](https://www.falstad.com/circuit/) (no account needed) for logic gates/CMOS, with a link out to [Wokwi](https://wokwi.com) for real physical-breadboard + microcontroller-firmware simulation.
- **`vm-terminal`** — full x86 machine booting real Linux client-side via WebAssembly, powered by [v86](https://github.com/copy/v86). Loads its runtime/disk image live from v86's public CDN rather than bundling ~20MB+ binaries into this repo.

Embed one in a post body:

```markdown
{{</* lab type="mini-cpu" */>}}
{{</* lab type="breadboard" height="700" */>}}
{{</* lab type="vm-terminal" height="600" */>}}
```

25 posts already have a `labs:` field pre-set in frontmatter (and the matching shortcode already dropped into the post body) — see which ones via:

```bash
grep -l 'labs:' content/posts/*.md
```

`content/labs/_index.md` is a landing page listing all three, useful as a standalone `/labs/` route independent of any specific post.

**Offline/self-hosting note:** `vm-terminal` currently loads v86's WASM runtime and Linux disk image from `copy.sh` at runtime. For a fully offline build, download the same files from the [v86 GitHub releases](https://github.com/copy/v86) into `static/labs/vm-terminal/assets/` and update the URLs in that file's `<script>` block.

## Notes

- Theme: `hugo-book` — clean, good code-block/diagram support, no bloat
- `unsafe = true` in markup config lets you drop raw SVG/HTML for schematics inline
- Series metadata (`phase`, `series_index`) in frontmatter — can build a phase-nav template later if wanted

## Contributing and forking

Corrections, sources and new languages are welcome.

- **Report a problem or a missing tool:** open a [GitHub issue](https://github.com/gnuzero/how-we-got-here/issues). Please name the page, quote the claim, and link a public source. Wikipedia, museum and institutional pages, and open course notes are all fine.
- **Fix something:** fork the repo, make the change on a branch, and open a pull request. Keep one topic per PR. Every factual claim needs a cited public source that actually supports it. Where sources disagree, give both and say who says what.
- **Start a language:** languages are not a final set. Open an issue first and we'll help with the initial seeding. Each locale lives in `content.<lang>/`, with its interface strings in `i18n/<lang>.toml` and lab strings in `static/labs/<lab>/strings.<lang>.json`. The foreword mirrors the English one exactly.
- **Before you open a PR:** run `hugo` (all locales must build), `python3 scripts/renumber.py --check` and `python3 scripts/check-lab-strings.py`. Leave no internal notes, TODOs, HTML comments or merge-conflict markers in `content*/`.
- **Forks:** you can fork and republish under the licence terms below. Please keep the attribution and the source links, and say that your copy is modified.

## Licence

- **Book text** in `content*/`, the site layout, and the in-repo labs (`static/labs/difference-engine`, `mini-cpu`, `pebble-trays`, and the `breadboard` wrapper page) are licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/). See `LICENSE`.
- **Third-party labs and components keep their own licences.** Each lab's `ORIGIN.md` gives the details:

| Lab | Upstream | Licence |
|---|---|---|
| `analytical-engine` | John Walker, Analytical Engine emulator ([fourmilab.ch/babbage](https://www.fourmilab.ch/babbage/)); BigInteger.js by Peter Olson | Public domain / Unlicense |
| `breadboard` (simulator) | Paul Falstad / CircuitJS1 ([falstad.com/circuit](https://www.falstad.com/circuit/), [sharpie7/circuitjs1](https://github.com/sharpie7/circuitjs1)) | GPL-2.0-or-later |
| `vm-terminal` | v86 by Fabian and contributors ([copy/v86](https://github.com/copy/v86)); bundled binaries | BSD-2-Clause; binaries keep their upstream licences |
| `themes/hugo-book` (submodule) | [alex-shpak/hugo-book](https://github.com/alex-shpak/hugo-book) | MIT |

- **Images** keep the licence and credit shown in each caption.

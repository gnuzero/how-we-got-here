# English editorial pass — rest slice (Phases 5, 9–10 + meta)

Executor: Lucas finish pass  
Date: 2026-09-06 (Asia/Bangkok)

## Scope (steered)

Posts **00–30 already `draft: false`** — **skipped / not reverted**.

This pass covers only:
- Phase 5: `31`–`37`
- Phase 9: `52`–`56`
- Phase 10: `57`–`62`
- Culmination / reference: `63`, `98-timeline`, `99-glossary`
- Meta: `content/_index.md`; `content/about.md` Status only (**BTS left intact**)

Not touched: `01`–`10` (and rest of 00–30), `content.th/` / `content.si/` / `content.ta/`, git commit/push, images/schematics.

## Result

| Metric | Value |
|--------|-------|
| Assigned post files | **21** (`31`–`37`, `52`–`63`, `98`, `99`) |
| `draft: false` | **21 / 21** |
| `draft: true` remaining | **0** |
| Missing files | none |
| 00–30 | left `draft: false` (untouched / not reverted) |
| about.md BTS | intact |

## Files touched (this slice)

### Phase 5 (31–37)
- `31-buses-101.md` — `4GB` → `4 GB`; `draft: false`
- `32-from-isa-bus-to-pci-to-pcie.md` — light prose pass; `draft: false`
- `33-pcie-deep-dive.md` — light pass; Gen3/Gen5 x16 ~16 / ~64 GB/s kept; `draft: false`
- `34-memory-buses.md` — light pass; DDR5 16n + dual subchannels kept; `draft: false`
- `35-the-memory-wall.md` — light pass; `draft: false`
- `36-the-clock-speed-wall.md` — `4GHz` → `4 GHz`; `draft: false`
- `37-interconnects-at-scale.md` — light pass; `draft: false`

### Phase 9 (52–56)
- `52-why-gpus-exist.md` — `aren't` → `are not`; `draft: false`
- `53-cuda-cores-warps-and-occupancy.md` — `isn't` → `is not` (occupancy sentence); warp=32 kept; `draft: false`
- `54-gpu-memory-hierarchy.md` — **fixed wrong cross-ref** `Post 27` → `Post 35` (memory-wall framing); `draft: false`
- `55-tensor-cores.md` — light pass; 4×4×4 MMA wording kept; `draft: false`
- `56-multi-gpu-scaling.md` — light pass; `draft: false`

### Phase 10 + Attention (57–63)
- `57`–`62` — light editorial pass each; prior fact-check numbers kept (weight-stationary MXU, 2:4 speedups, CPO/photonics nuance, etc.); all `draft: false`
- `63-attention-is-all-you-need.md` — light pass; head/layer examples kept; `draft: false`

### Reference + meta
- `98-timeline.md` — already published; light read; no substantive edit
- `99-glossary.md` — already published; light read; no substantive edit
- `content/_index.md` — header + status line updated for completed English editorial pass / Timeline
- `content/about.md` — Status bullets only; **`## Behind the Scenes` unchanged**

## Soft flags (not blocking)

1. **Assets still unchecked** — `image_prompt` / `video_prompt` / `schematics` / ASSET CHECKLIST retained; no media generated.
2. **Labs** — not in this slice’s breadboard posts; Phase 5/9/10 have no lab shortcodes requiring re-check here.
3. **Post 63 LLM head/layer examples** — previously fact-checked; not re-verified against primary sources this pass.
4. **Nitefury / BridgeStack** project tie-ins in Phase 5/9 — left as intentional.
5. **No hard number inventions** — only unit/spacing/cross-ref fixes.

## Intentionally unchanged

- Posts `00`–`30` (including Phase 1–2)
- about.md Behind the Scenes section
- Locale trees; git (no commit/push)

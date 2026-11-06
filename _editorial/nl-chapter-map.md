# Dutch desk overlay — canonical map at 87ea16d

Desk: Sanne. Updated 6 November 2026 (Asia/Colombo).

## Authority

Use `_editorial/chapter-map.md` and `_editorial/chapter-map.json` as the single source of truth. This note is only a Dutch coverage/migration overlay, **not another numbering map**. It replaces the stale side-branch inventory; the complete old fork is preserved at `/workspace/freebook/forks/nl-old-98c1229`. Numbering remains provisional as stated by the canonical map.

The shared Markdown map is generated from JSON by `scripts/renumber.py`; the script currently hardcodes the seven existing locale roots. I did not infer authority to update either shared map, its `Locales` fields or the renumber script. Lucas should register `nl` in the coordinated structural change. Proposed additions to existing locale lists: `nl` for public 2, 3, 8, 28 and 56, once accepted.

## Exact migration (canonical entries, not guessed offsets)

| Old Dutch file | New Dutch file (`content.nl/posts/`) | Public / weight | series_index | EN date |
|---|---|---:|---:|---|
| `01d-woodblock-to-movable-type.md` | `02-woodblock-to-movable-type.md` | 2 | 1 | 2026-01-02 |
| `21-batch-processing-and-the-birth-of-the-operating-system.md` | `28-batch-processing-and-the-birth-of-the-operating-system.md` | 28 | 27 | 2026-01-01 |
| `48-photolithography.md` | `56-photolithography.md` | 56 | 55 | 2026-01-01 |
| new | `03-how-the-message-travelled.md` | 3 | 2 | absent in EN; omitted in NL |
| new | `08-capturing-light.md` | 8 | 7 | 2026-11-06 |

`draft`, `weight`, `series_index`, dates and alias histories match current English; phase/title/summary are Dutch. Existing chapter aliases use the same `/posts/.../` front-matter convention as current other locales; Hugo prefixes Dutch output paths. No stale old filename remains as the canonical Dutch chapter filename.

## Navigation

- 2: previous 1 (English) / next 3 (Dutch).
- 3: previous 2 (Dutch) / next 4 (`04-what-is-this-thing`, English, as linked from EN 3); relay side door 9 (English).
- 8: previous 7 / next 9; later side door 51; Dutch link back to 2.
- 28: previous 27 / next 29.
- 56: previous 55 / next 57.

Missing Dutch neighbors link explicitly to the English current canonical URLs, labelled “Engels”; they do not pretend that unwritten Dutch pages exist. No shared or Dutch landing links were ported. Only the Dutch posts section stub accompanies the five chapters.

## Proposed next coverage, using current public numbers

1. Review new 3 and 8 and the scoped/migrated 2, 28, 56.
2. Deep Dutch/Flemish research: 34 (Dijkstra/ALGOL), 35 (compilers), 10 (Dutch early machines), 25 (Electrologica/Philips), then 55/57/58/59 (ASML/imec/fabrication). These are research proposals, not yet sourced new claims.
3. Network/publishing research: 45 → 47 → 48 → 50 → 51 → 72. Optional local context for 4 organ take / 6 textile history only after primary-source checking.
4. Standard original coverage: remaining chapters in **canonical map order**, not the old TRACKER numbering. Foreword remains Nayana’s lane; reference pages are now 101/102.

# Dutch desk — clean-main handoff

Sanne; 6 November 2026 (Asia/Colombo).

## Base, preservation, scope

- Old checkout retained intact at `/workspace/freebook/forks/nl-old-98c1229` (old final commit `ea594ae`).
- New checkout: `/workspace/freebook/forks/nl`, cloned with `--no-hardlinks` from Lucas's read-only `/workspace/freebook/base-main`. Verified initial HEAD **`87ea16d4029c9fb57da71c786a9344e58efc8741`** before any content edits. No writes in base-main.
- Local branch `nl-desk`; remote `local` fetches `/workspace/freebook/base-main`, push URL `/dev/null`; no GitHub remote, push, merge, PR or deployment.
- All committed changes are restricted to `content.nl/` and `_editorial/nl-*.md`. No `hugo.toml`, `i18n/nl.toml`, `TRANSLATIONS.md`, shared map, shared script or landing-link change. No Dutch home/labs/paths landing copied. `content.nl/posts/_index.md` is a title-only section stub.
- Existing theme submodule initialized inside this checkout at pinned `45cbd2df81e5b1f261da1fdc6d190e072643efd9`; no gitlink or theme-content change.

## Current Dutch pages

| Public | File | Work |
|---:|---|---|
| 2 | `content.nl/posts/02-woodblock-to-movable-type.md` | Ported from old 01d; date now 2026-01-02, weight 2, series_index 1; current EN alias history retained |
| 8 | `content.nl/posts/08-capturing-light.md` | New original chapter; weight 8, series_index 7, date 2026-11-06; no aliases |
| 28 | `content.nl/posts/28-batch-processing-and-the-birth-of-the-operating-system.md` | Ported from old 21; weight 28, series_index 27; aliases follow EN |
| 56 | `content.nl/posts/56-photolithography.md` | Ported from old 48; weight 56, series_index 55; aliases follow EN |

All four use current canonical filenames; draft/date/order/alias fields match EN, with Dutch titles, summaries and phase labels. Explicit numbered previous/next links use current map and English destinations when Dutch neighbors do not yet exist. Chapter 8 links to current 51 as a later side door and back to Dutch 2. No old canonical Dutch chapter filenames were copied.

## Lucas rulings applied

- Coster plainly presented as a disputed origins legend, not a proven competing invention. Short exact quotation from Junius' Batavia (1588) via the Dutch translation appended to Joost Robbe's article, https://www.dbnl.org/tekst/_nee005201001_01/_nee005201001_01_0020.php . Translation credit explicitly notes Robbe's adaptation of Hellinga (article note 9). **Latin not collated**, stated in visible chapter text and here. Translation reopened during migration.
- Gutenberg and Helmasperger retained through the previously verified Library of Congress account, https://guides.loc.gov/gutenberg/introduction ; no claim of a fresh autopsy of the original instrument. Distinction from Piccolomini's unnamed witness account retained.
- Van der Linde section now explicitly labelled **secondhand**, via Busken Huet's review at https://www.dbnl.org/tekst/busk001litt04_01/busk001litt04_01_0001.php ; full 1870 book not collated.
- EWD196/EWD74 content retained under Lucas's approval; the separate EWD215 bridge remains sourced, with no shortest-path addition.
- ASML numbers and historical account remain clearly marked company claims. No new monopoly, production-ramp, independent-measurement or NatLab claim.
- New chapter 8 awaits Lucas review; source-by-source evidence and limitations are in `_editorial/nl-ch08-sources.md`.

## Canonical map

`_editorial/chapter-map.md` and `.json` remain authoritative and unchanged. `_editorial/nl-chapter-map.md` is a short migration/coverage overlay only, not a parallel invented chapter inventory. No shared `Locales` entry edited: the map is generated and current renumber tooling hardcodes existing locales; registering the new locales is left to Lucas's coordinated structural change. Suggested nl additions are public 2/8/28/56.

## Scaffold handoff

Patch outside repo: **`/workspace/freebook/forks/nl-scaffold.patch`**. It contains only proposed `hugo.toml` nl wiring and the existing natural-Dutch `i18n/nl.toml` from the first pass; no landing links. `git apply --check` passes against the new base. **Not applied or committed.** Lucas can adapt its weight to the coordinated ten-locale ordering. The old landing/scaffold remains recoverable in the preserved old fork.

Build test uses ignored local `.nl-build/scaffold.toml` only, passed as an additional config file; shared hugo.toml is untouched:

```sh
hugo --minify --config hugo.toml,.nl-build/scaffold.toml \
  --destination .nl-build/public --cacheDir "$PWD/.nl-build/cache"
```

This tests Dutch rendering without installing or committing the i18n file; it is not a claim of completed Dutch application/lab localization. A clean checkout of these content-only commits will not register nl until Lucas's structural change lands.

## Verification

- Hugo **0.165.0 extended**: default unchanged seven-locale build passes, no warnings/errors.
- Additional-config build: all eight locales including Dutch pass, no warnings/errors. The four chapter HTML outputs have `html lang="nl"`, nonempty content, correct canonical URLs and working English-to-Dutch exact-page switch links.
- Checked every root-relative link in the four rendered articles against generated output, including numbered previous/next neighbors; all resolve. Checked every inherited Dutch alias redirects to the corresponding current Dutch chapter.
- Compared draft/date/weight/series_index against current EN and ordering against canonical JSON. All match.
- `python3 scripts/renumber.py --check`: **0 problems**. This validates the base-supported locales; it does not register nl in that script.
- Shared config and both canonical maps compared byte-for-byte against 87ea16d; unchanged. `i18n/nl.toml` and `content.nl/_index.md` do not exist in new worktree.
- `git diff --check` passes. Build logs/check results under ignored `.nl-build/`. No CI run under Hugo 0.158.0 and no browser visual screenshot review.

Commits use per-command desk attribution `Sanne (Dutch desk) <sanne@localhost>`; no global identity configuration changed. See `git log 87ea16d..HEAD` for the new, content-only commit list; old-side-branch commits were not cherry-picked.

## Chapter 3 handoff — 6 November 2026 (Asia/Colombo)

- Continued directly from Lucas's queued `042bf20`, still on main ancestor `87ea16d`; no rebuild/rebase, push or shared-map edit.
- Added `content.nl/posts/03-how-the-message-travelled.md`; exact basename, weight 3, series_index 2 and empty aliases match current EN and canonical map. No date field invented.
- Added `_editorial/nl-ch03-sources.md`; source-specific evidence, date discrepancy and limits of the cable-letter transcript are explicit there and in the chapter.
- Chapter 2 now points to Dutch chapter 3; chapter 3 points back to Dutch 2 and onward to the real English chapter-4 route already used by EN. Five Dutch chapter pages now exist: 2, 3, 8, 28, 56.
- Unchanged external scaffold patch: `/workspace/freebook/forks/nl-scaffold.patch`; test-only language registration remains in ignored `.nl-build/scaffold.toml`. No locale configuration, i18n, landing page or shared index staged.
- Verification results are recorded in the chapter-3 source ledger after the checks run.

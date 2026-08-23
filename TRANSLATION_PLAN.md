# Translation Plan — Announcement MVP (TH / SI / TA)

Short plan only. Titles, descriptions, and attribution live in **`TRANSLATIONS.md`** — use those; do not reinvent.

## Chosen Hugo i18n approach

**Hugo multilingual mode with per-language `contentDir`** (translation by content directory), matching the **hugo-book** theme already vendored here (`themes/hugo-book/exampleSite`: `content.en` / `content.zh` / `content.he` + `[languages]`).

| Why this, not something else | |
|---|---|
| Matches theme | hugo-book’s example and docs use `contentDir`, not `content/<lang>/` trees or `*.th.md` filename translations. |
| Matches this repo | English already lives in flat `content/`; site already has `i18n/en.toml`. Keep EN where it is; add sibling content roots for other languages. |
| Not inventing | No new architecture beyond enabling what the theme expects. |

Config shape (when wiring later — not done in this commit):

- `defaultContentLanguage = "en"`
- `[languages.en]` → `contentDir = "content"` (existing tree unchanged)
- `[languages.th]` / `[languages.si]` / `[languages.ta]` → `contentDir = "content.th"` / `"content.si"` / `"content.ta"`
- UI / chrome strings: site `i18n/th.toml`, `i18n/si.toml`, `i18n/ta.toml` (same pattern as existing `i18n/en.toml`; theme ships its own `themes/hugo-book/i18n/*.yaml` for built-in chrome)

## Language codes

| Code | Language | Role |
|------|----------|------|
| `en` | English | Default (existing `content/`) |
| `th` | Thai | Announcement MVP |
| `si` | Sinhala | Announcement MVP |
| `ta` | Tamil | Announcement MVP |

## File placement conventions

Mirror the English relative path under each language’s `contentDir`:

- **Chapters / posts:** `content.<lang>/posts/<same-filename>.md`
- **Home:** `content.<lang>/_index.md`
- **Glossary:** `content.<lang>/posts/99-glossary.md`
- **UI strings:** `i18n/<lang>.toml` (site-level; optional overrides of theme keys)

English sources stay under `content/` (no mass rename required for MVP).

## Announcement MVP file list

For each of `th`, `si`, `ta`, create the same relative paths (bodies next; titles from `TRANSLATIONS.md`):

**Foreword**

- `content.th/posts/00-foreword.md`
- `content.si/posts/00-foreword.md`
- `content.ta/posts/00-foreword.md`

**Phase 1 (01–04)**

- `content.<lang>/posts/01-mechanical-electromechanical-computing.md`
- `content.<lang>/posts/02-relays-and-electromechanical-logic.md`
- `content.<lang>/posts/03-the-vacuum-tube-era.md`
- `content.<lang>/posts/04-why-the-transistor-had-to-happen.md`

**Attention (63)**

- `content.<lang>/posts/63-attention-is-all-you-need.md`

**Home / glossary chrome**

- `content.<lang>/_index.md`
- `content.<lang>/posts/99-glossary.md`
- `i18n/<lang>.toml` (series title / foreword label and other chrome as needed)

English references: `content/posts/00-foreword.md`, `01`–`04`, `63-attention-is-all-you-need.md`, `99-glossary.md`, `content/_index.md`.

## Workflow

1. Draft MVP pages locally under `content.th|si|ta/` (and `i18n/*.toml` as needed).
2. **Local git commit only.**
3. **Do not push** until ORG / remotes exist (see `GITHUB_SETUP.md`). No remotes are configured for this repo yet.

## Reference

- **Titles / short descriptions / attribution:** `TRANSLATIONS.md`
- **Theme multilingual example:** `themes/hugo-book/exampleSite/hugo.toml` (`[languages]` + `contentDir`)

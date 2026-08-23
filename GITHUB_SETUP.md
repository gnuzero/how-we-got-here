# GitHub setup — you do this on github.com

**Goal:** New GitHub **organization** for the open-source program.  
**Book role:** *From Relays to Attention* is the **learning phase** — people work through the book to participate in the open-source project. It is not the OSS product itself.

Fill in the blanks as you go:

| Blank | Your choice |
|-------|-------------|
| `ORG` | ________________ (new org name) |
| `BOOK_REPO` | e.g. `from-relays-to-attention` or `how-computers-work` |
| `OSS_REPO` | ________________ (main open-source project name) |
| Book site URL | `https://ORG.github.io/BOOK_REPO/` (GitHub Pages) |

Local book tree is already ready on Lucas’s computer:

- Path: `/workspace/freebook/from-relays-to-attention`
- Branch: `main`
- Commits: initial import + fact-check passes
- Theme submodule: `themes/hugo-book`
- Deploy workflow: `.github/workflows/deploy.yml`
- **Not pushed yet** (no remote)

---

## A. Create the organization (github.com)

1. Go to [github.com/organizations/plan](https://github.com/organizations/plan) (or **+** → **New organization**).
2. Choose a plan (Free is fine for public OSS).
3. Org name = `ORG`. Short, memorable, matches the open-source brand.
4. Add yourself as owner. Invite collaborators later.
5. Optional but good: org README, profile picture, public email / Discord / website later.

**Do not** put secrets, Ads tokens, or Afford-X sales material in this org. Book + OSS are public learning / community.

---

## B. Create two repos under `ORG`

### 1) Learning book (this project)

1. **New repository** under `ORG`.
2. Name = `BOOK_REPO`.
3. Public.
4. **No** README / .gitignore / license from the GitHub wizard (we already have LICENSE + content locally — empty repo avoids merge noise).
5. Leave it empty. Do **not** initialize with Hugo here.

### 2) Open-source project (the thing people graduate into)

1. **New repository** under `ORG`.
2. Name = `OSS_REPO`.
3. Public.
4. Add a short README that says something like:
   - This is the open-source project.
   - Newcomers start with the learning book: `https://ORG.github.io/BOOK_REPO/`
   - Link CONTRIBUTING.md when you have it.

You can flesh `OSS_REPO` later. Create the empty shell now so the book can point at it.

---

## C. Point GitHub Pages at Actions (book repo)

In `ORG/BOOK_REPO`:

1. **Settings → Pages**
2. **Build and deployment → Source:** **GitHub Actions** (not “Deploy from a branch”).
3. Save. First successful workflow run will publish.

---

## D. Hand the empty book repo URL to Lucas

Reply in chat with:

```
ORG=...
BOOK_REPO=...
OSS_REPO=...
```

Then Lucas / Harper will:

1. Update `hugo.toml` `baseURL` + `BookRepo` from the old `devzer01/...` placeholders to `ORG/BOOK_REPO`.
2. Add a short “Path into the open-source project” blurb on the book home (learning → `OSS_REPO`).
3. Add git remote and push `main` **with submodules**.
4. Confirm Actions goes green and the site loads.

**You do not need to push from your Mac** unless you prefer to. Local tree can push from Lucas’s computer once remote exists.

If you push yourself instead:

```bash
cd /path/to/from-relays-to-attention   # after you copy the tree, or after we sync it
git remote add origin https://github.com/ORG/BOOK_REPO.git
git push -u origin main
# Submodule is already committed as a pointer; clones need:
#   git clone --recurse-submodules https://github.com/ORG/BOOK_REPO.git
```

---

## E. Wave 1 publish content (optional, same day or later)

Right now most chapters are still `draft: true`. Foreword / timeline / glossary are already live flags.

**Recommended Wave 1 (learning on-ramp):** Foreword + Phase 1 posts `01`–`04` → set `draft: false`, then push.

Say in chat: `flip Wave 1` when you want that. Until then, a push still deploys the site shell + non-draft pages only.

---

## F. Org hygiene checklist

- [ ] Org created (`ORG`)
- [ ] `BOOK_REPO` created (empty, public)
- [ ] `OSS_REPO` created (public, README links to book)
- [ ] Book repo Pages source = **GitHub Actions**
- [ ] Pasted `ORG` / `BOOK_REPO` / `OSS_REPO` to Lucas in chat
- [ ] (Optional) Invite Harper / Benjamin as collaborators if you want them on GitHub too
- [ ] (Optional) Wave 1 draft flip

---

## What not to do

- Don’t upload Afford-X sales interactive (`/workspace/sales`) into this public org.
- Don’t put Customer Match files, tokens, or MCC IDs anywhere public.
- Don’t use personal `devzer01/how-computers-work` if the brand is the new org — we’ll re-point config to `ORG`.
- Don’t skip `--recurse-submodules` when cloning elsewhere (theme won’t load).

---

## After first green deploy

Share:

1. Book URL: `https://ORG.github.io/BOOK_REPO/`
2. OSS repo: `https://github.com/ORG/OSS_REPO`
3. One-liner for newcomers: *Read the book → then contribute to `OSS_REPO`.*

Last updated: 2026-08-23 (Lucas)

---

## G. Translations (announcement blocker)

Upon **announcement**, the learning book needs:

- **Thai**
- **Sinhala**
- **Tamil**

Titles / short descriptions / attribution already drafted in `TRANSLATIONS.md`.  
Announcement MVP bodies: Foreword + Phase 1 (01–04) + Attention (63) + site chrome.

Everything else (more languages, full 63-chapter bodies, OSS details) — decide later.


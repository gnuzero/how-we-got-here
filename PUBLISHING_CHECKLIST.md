# Publishing Checklist — How We Got There

## Ready now
- [x] Full first-draft content (63 technical chapters + Foreword + Glossary + Timeline)
- [x] Clear attribution (User = Concept & Inspirer; Grok Team = Authors)
- [x] Foreword attributed to Grok Team
- [x] LICENSE (CC BY 4.0)
- [x] Interactive labs functional
- [x] Thai / Sinhala / Tamil titles + descriptions + attribution paragraphs drafted
- [x] TRACKER.md updated

## Before first public release
- [ ] Editorial pass on remaining draft:true posts (or release in waves)
- [ ] Hero images + schematics for published posts
- [ ] Add Hugo Book theme as submodule (`git submodule add https://github.com/alex-shpak/hugo-book themes/hugo-book`)
- [ ] Create GitHub repo `devzer01/how-computers-work` (if not already)
- [ ] Add `.github/workflows/deploy.yml` for GitHub Pages
- [ ] Set `draft: false` on the posts you want live
- [ ] Push to main → GitHub Actions deploys to https://devzer01.github.io/how-computers-work/

## Optional next
- [ ] Full body translations of Phase 1 + Foreword + Attention post
- [ ] Offline asset packaging for vm-terminal if desired
- [ ] Additional language UI strings via Hugo i18n

## One-time GitHub Pages steps (from original README)
1. Create repo `devzer01/how-computers-work`
2. Settings → Pages → Source: GitHub Actions
3. First push to main triggers the workflow
4. Site live at the baseURL in hugo.toml

Last updated: 2026-08-22

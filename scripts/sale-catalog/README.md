# /migration catalog (standalone Thai sales page)

This is a special static page at `/migration/`. It is not part of the book
locale/i18n system, menus, or sitemap.

Live prices come from a link-shared inventory sheet. A scheduled GitHub Action
(`.github/workflows/refresh-migration-catalog.yml`, every 10 minutes, plus
`workflow_dispatch`) fetches the CSV with `SPREADSHEET_ID` and `SHEET_GID`
repo secrets, applies the Status/`สถานะ` = `ขายแล้ว` hide rule,
`HIDE_ROWS` (default `12,21,22`), `SALE_MAX_ROW` (default `37`), and the
asking-price-else-used-price rule, then writes `static/migration/items.json`
and triggers the Pages deploy. Those identifiers must never be committed or
put in client files.

## Update contact placeholders

1. Edit `scripts/sale-catalog/contact.json` (`whatsapp`, `phone`, `line`,
   `messenger`, `email`). Leave a field empty to keep the “กำลังอัปเดต”
   placeholder.
2. From the repo root, run `node scripts/sale-catalog/regenerate.mjs`.
3. Commit the updated `static/migration/index.html` and merge to `main`.

Do not put real contact details in chat or in the workflow file.

#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { parseCatalogFromCsv, parseHideRows, publicItems } = require("./catalog");

async function main() {
  const out = path.resolve(process.argv[2] || path.join(__dirname, "../../static/migration/items.json"));
  const spreadsheetId = process.env.SPREADSHEET_ID;
  const gid = process.env.SHEET_GID;
  const maxRow = parseInt(process.env.SALE_MAX_ROW || "37", 10);
  const hideRows = parseHideRows(process.env.HIDE_ROWS || "12,21,22");
  if (!spreadsheetId || !gid) {
    console.error("Missing SPREADSHEET_ID or SHEET_GID");
    process.exit(1);
  }
  if (!Number.isFinite(maxRow) || maxRow < 2) {
    console.error("Invalid SALE_MAX_ROW");
    process.exit(1);
  }

  const url =
    "https://docs.google.com/spreadsheets/d/" +
    encodeURIComponent(spreadsheetId) +
    "/export?format=csv&gid=" +
    encodeURIComponent(gid);
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    console.error("sheet_fetch_error");
    process.exit(1);
  }
  const text = await res.text();
  if (!text || !/used price|item description/i.test(text)) {
    console.error("sheet_fetch_error");
    process.exit(1);
  }

  const items = publicItems(parseCatalogFromCsv(text, { maxRow, hideRows }));
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify({ items }, null, 2) + "\n");
  console.log("Wrote", items.length, "items");
}

main().catch(() => {
  console.error("refresh_failed");
  process.exit(1);
});

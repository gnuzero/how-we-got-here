#!/usr/bin/env node
/**
 * Rebuilds static/migration/index.html from contact.json + the current
 * items.json snapshot. Does not write spreadsheet identifiers into public files.
 *
 * Usage (from repo root): node scripts/sale-catalog/regenerate.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const here = path.join(root, "scripts/sale-catalog");

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function filled(value) {
  return Boolean(value && String(value).trim() && !/placeholder/i.test(String(value)));
}

function button(href, label, pending, extraClass) {
  const cls = `btn${extraClass ? " " + extraClass : ""}${pending ? " is-placeholder" : ""}`;
  const badge = pending ? "กำลังอัปเดต" : "พร้อมติดต่อ";
  return `<a class="${cls}" href="${href}" rel="nofollow noopener">${label}<span>${badge}</span></a>`;
}

function contactButtons(cfg) {
  const wa = filled(cfg.whatsapp)
    ? button("https://wa.me/" + String(cfg.whatsapp).replace(/[^\d]/g, ""), "WhatsApp Business", false, "btn-wa")
    : button("https://wa.me/PLACEHOLDER", "WhatsApp Business", true, "btn-wa");
  const phone = filled(cfg.phone)
    ? button("tel:" + String(cfg.phone).replace(/\s+/g, ""), "โทรศัพท์", false)
    : button("tel:PLACEHOLDER", "โทรศัพท์", true);
  const lineHref = filled(cfg.line)
    ? (/^https?:/i.test(cfg.line) ? cfg.line : "https://line.me/ti/p/" + encodeURIComponent(cfg.line))
    : "https://line.me/ti/p/PLACEHOLDER";
  const line = button(lineHref, "LINE", !filled(cfg.line));
  const msHref = filled(cfg.messenger)
    ? (/^https?:/i.test(cfg.messenger) ? cfg.messenger : "https://m.me/" + encodeURIComponent(String(cfg.messenger).replace(/^@/, "")))
    : "https://m.me/PLACEHOLDER";
  const messenger = button(msHref, "Facebook Messenger", !filled(cfg.messenger));
  const email = filled(cfg.email)
    ? button("mailto:" + String(cfg.email).trim(), "อีเมล", false)
    : button("mailto:PLACEHOLDER", "อีเมล", true);
  return [wa, phone, line, messenger, email].join("\n        ");
}

function contactNote(cfg) {
  const ready = ["whatsapp", "phone", "line", "messenger", "email"].some((key) => filled(cfg[key]));
  if (ready) return "เลือกช่องทางที่สะดวก แล้วทักมาสอบถามสินค้าได้เลย";
  return "ช่องทางด้านล่างกำลังอัปเดต — ยังใช้ติดต่อไม่ได้ในขณะนี้";
}

const contact = readJson(path.join(here, "contact.json"));
const itemsFile = path.join(root, "static/migration/items.json");
const packed = readJson(itemsFile);
const items = Array.isArray(packed) ? packed : packed.items;
const tpl = fs.readFileSync(path.join(here, "index.html.tpl"), "utf8");
const html = tpl
  .replace("__CONTACT_NOTE__", contactNote(contact))
  .replace("__CONTACT_BUTTONS__", contactButtons(contact))
  .replace("__FALLBACK_JSON__", JSON.stringify(items).replace(/</g, "\\u003c"));
const out = path.join(root, "static/migration/index.html");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, html);
console.log("Wrote static/migration/index.html");

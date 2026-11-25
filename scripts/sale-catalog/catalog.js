"use strict";

/**
 * Server-side catalog helpers.
 * Public payload is only { name, price, description, quantity, age, verify }.
 */

const SOLD_STATUS = new Set(["sold", "ขายแล้ว", "sold out", "ขายหมด", "closed", "ปิดการขาย"]);

const HEADER_ALIASES = {
  description: ["item description", "description", "รายละเอียด", "รายการ", "สินค้า"],
  quantity: ["quantity", "qty", "จำนวน"],
  usedPrice: ["used price", "used", "ราคามือสอง"],
  askingPrice: ["asking", "asking price", "ราคาขาย", "ราคาเสนอ", "price"],
  status: ["status", "สถานะ"],
  invoiceDate: ["invoice date", "order date", "วันที่ใบแจ้งหนี้", "วันที่สั่งซื้อ"],
};

const ITEM_MAP = [
  { test: /5070\s*ti/i, name: "Gigabyte GeForce RTX 5070 Ti Eagle OC SFF 16GB", description: "การ์ดจอ 16GB GDDR7 รุ่นกะทัดรัด (SFF) มือสอง สภาพดี" },
  { test: /trident\s*z5/i, name: "G.Skill Trident Z5 RGB 64GB DDR5-6400", description: "แรม 64GB (32GB×2) DDR5 6400MHz Intel XMP สีดำ มือสอง สภาพดี" },
  { test: /vengeance/i, name: "Corsair Vengeance RGB 64GB DDR5-5600", description: "แรม 64GB (32GB×2) DDR5 5600MHz AMD EXPO / Intel XMP มือสอง สภาพดี" },
  { test: /9900\s*x3d/i, name: "AMD Ryzen 9 9900X3D", description: "ซีพียู 12 คอร์ 24 เธรด 4.4–5.5GHz ซ็อกเก็ต AM5 ไม่รวมคูลเลอร์ มือสอง สภาพดี" },
  { test: /9950\s*x/i, name: "AMD Ryzen 9 9950X", description: "ซีพียู 16 คอร์ 32 เธรด 4.3–5.7GHz ซ็อกเก็ต AM5 ไม่รวมคูลเลอร์ มือสอง สภาพดี" },
  { test: /hat3310/i, name: "Synology HAT3310 12TB", description: "ฮาร์ดดิสก์ 3.5 นิ้ว 12TB 7200rpm SATA มือสอง สภาพดี" },
  { test: /ts-?433/i, name: "QNAP TS-433", description: "NAS 4 ช่อง ARM 4 คอร์ หน่วยความจำ 4GB มือสอง สภาพดี" },
  { test: /strix\s*x870e/i, name: "ASUS ROG Strix X870E-E Gaming WiFi", description: "เมนบอร์ด ATX ซ็อกเก็ต AM5 DDR5 มี WiFi มือสอง สภาพดี" },
  { test: /sn850x/i, and: /2\s*tb/i, name: "WD Black SN850X 2TB", description: "SSD NVMe M.2 2280 PCIe 4.0 ไม่มีฮีตซิงก์ มือสอง สภาพดี" },
  { test: /sn850x/i, and: /1\s*tb/i, name: "WD Black SN850X 1TB", description: "SSD NVMe M.2 2280 PCIe 4.0 ไม่มีฮีตซิงก์ มือสอง สภาพดี" },
  { test: /trident\s*z\s*rgb/i, name: "G.Skill Trident Z RGB 32GB DDR4-3200", description: "แรม 32GB (16GB×2) DDR4 3200MHz มือสอง สภาพดี" },
  { test: /mp341cqw/i, name: "MSI PRO MP341CQW 34\"", description: "จอโค้ง 34 นิ้ว VA 2K 100Hz มือสอง สภาพดี" },
  { test: /ironwolf\s*pro/i, name: "Seagate IronWolf Pro 6TB", description: "ฮาร์ดดิสก์ 3.5 นิ้ว 6TB 7200rpm SATA สำหรับ NAS มือสอง สภาพดี" },
  { test: /prime\s*x870/i, name: "ASUS Prime X870-P WiFi-CSM", description: "เมนบอร์ด ATX ซ็อกเก็ต AM5 DDR5 มี WiFi มือสอง สภาพดี" },
  { test: /ds223j/i, name: "Synology DiskStation DS223j", description: "NAS 2 ช่อง หน่วยความจำ 1GB มือสอง สภาพดี" },
  { test: /xiaomi\s*tv\s*a\s*43/i, name: "Xiaomi TV A 43\" FHD 2026", description: "สมาร์ททีวี 43 นิ้ว Full HD ปี 2026 มือสอง สภาพดี" },
  { test: /red\s*plus/i, name: "WD Red Plus 4TB", description: "ฮาร์ดดิสก์ 3.5 นิ้ว 4TB 5400rpm SATA สำหรับ NAS มือสอง สภาพดี" },
  { test: /va3209/i, name: "ViewSonic VA3209-MH 31.5\"", description: "จอ IPS 31.5 นิ้ว Full HD 75Hz มือสอง สภาพดี" },
  { test: /7500\s*f/i, name: "AMD Ryzen 5 7500F", description: "ซีพียู 6 คอร์ 12 เธรด 3.7–5.0GHz ซ็อกเก็ต AM5 มือสอง สภาพดี" },
  { test: /fury\s*beast/i, name: "Kingston Fury Beast 8GB DDR5-5200", description: "แรม 8GB (8GB×1) DDR5 5200MHz สีดำ มือสอง สภาพดี" },
  { test: /h7\s*flow/i, name: "NZXT H7 Flow สีขาวด้าน", description: "เคส E-ATX สีขาวด้าน มือสอง สภาพดี" },
  { test: /th360/i, name: "Thermaltake TH360 V2 Ultra ARGB Snow", description: "คูลเลอร์น้ำ 360 มม. สีขาว มือสอง สภาพดี" },
  { test: /eap610/i, name: "TP-Link EAP610-Outdoor", description: "แอคเซสพอยต์ WiFi 6 AX1800 ใช้ในและนอกอาคาร มือสอง สภาพดี" },
  { test: /barracuda/i, name: "Seagate Barracuda 2TB", description: "ฮาร์ดดิสก์ 3.5 นิ้ว 2TB 7200rpm SATA มือสอง สภาพดี" },
  { test: /5600(?!\s*mhz)/i, name: "AMD Ryzen 5 5600", description: "ซีพียู 6 คอร์ 3.5GHz ซ็อกเก็ต AM4 มือสอง สภาพดี" },
  { test: /sg108-m2|tl-sg108-m2/i, name: "TP-Link TL-SG108-M2", description: "สวิตช์ 8 พอร์ต 2.5GbE ตัวถังโลหะ มือสอง สภาพดี" },
  { test: /wiko\s*t30/i, name: "Wiko T30 5G 4GB/128GB", description: "สมาร์ทโฟน 5G สีดำ หน่วยความจำ 4GB/128GB มือสอง สภาพดี" },
  { test: /toughpower\s*gt\s*snow/i, name: "Thermaltake Toughpower GT Snow 850W", description: "พาวเวอร์ซัพพลาย 850W 80 Plus Gold สีขาว มือสอง สภาพดี" },
  { test: /hiksemi|wave\(p\)/i, name: "Hiksemi Wave(P) 512GB", description: "SSD NVMe M.2 2280 PCIe 3.0 มือสอง สภาพดี" },
  { test: /rm850e/i, name: "Corsair RM850e 850W", description: "พาวเวอร์ซัพพลาย 850W Cybenetics Gold สีดำ มือสอง สภาพดี" },
  { test: /liquid\s*freezer\s*iii|liquid freezer iii/i, name: "Arctic Liquid Freezer III 240 A-RGB", description: "คูลเลอร์น้ำ 240 มม. สีดำ มือสอง สภาพดี" },
  { test: /b550m\s*aorus/i, name: "Gigabyte B550M Aorus Elite", description: "เมนบอร์ด Micro-ATX ซ็อกเก็ต AM4 DDR4 มือสอง สภาพดี" },
  { test: /b650m\s*d3hp/i, name: "Gigabyte B650M D3HP", description: "เมนบอร์ด Micro-ATX ซ็อกเก็ต AM5 DDR5 มือสอง สภาพดี" },
];

function normalizeHeader(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function parseHideRows(raw) {
  const rows = new Set();
  String(raw || "")
    .split(/[,\s]+/)
    .forEach((part) => {
      if (!part) return;
      const n = parseInt(part, 10);
      if (Number.isFinite(n) && n > 1) rows.add(n);
    });
  return rows;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cur = "";
  let inQuotes = false;
  const s = String(text || "").replace(/^\uFEFF/, "");
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (inQuotes) {
      if (c === '"') {
        if (s[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ",") {
      row.push(cur);
      cur = "";
    } else if (c === "\n") {
      row.push(cur);
      rows.push(row);
      row = [];
      cur = "";
    } else if (c !== "\r") {
      cur += c;
    }
  }
  if (cur.length || row.length) {
    row.push(cur);
    rows.push(row);
  }
  return rows.filter((r) => r.some((cell) => String(cell).trim() !== ""));
}

function cellText(value) {
  return value == null ? "" : String(value).trim();
}

function cellNumber(value) {
  const text = cellText(value)
    .replace(/บาท/gi, "")
    .replace(/[$,]/g, "")
    .trim();
  if (!text) return null;
  const n = Number(text);
  return Number.isFinite(n) ? n : null;
}


function parseInvoiceDate(value) {
  const text = cellText(value);
  if (!text) return null;
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) {
    const d = new Date(Date.UTC(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])));
    return Number.isNaN(d.getTime()) ? null : d;
  }
  const n = Number(text.replace(/,/g, ""));
  if (Number.isFinite(n) && n > 20000 && n < 80000) {
    // Excel serial date (days since 1899-12-30).
    const d = new Date(Date.UTC(1899, 11, 30) + Math.round(n) * 86400000);
    return Number.isNaN(d.getTime()) ? null : d;
  }
  const parsed = new Date(text);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function ageLabel(fromDate, now) {
  if (!fromDate) return "";
  const start = now || new Date();
  const days = Math.floor((start.getTime() - fromDate.getTime()) / 86400000);
  if (!Number.isFinite(days) || days < 0) return "";
  if (days < 60) return "ใช้งานมาแล้ว " + days + " วัน";
  const months = Math.max(1, Math.round(days / 30.437));
  return "ใช้งานมาแล้ว " + months + " เดือน";
}

const VERIFY = {
  gpu: "ตรวจสภาพได้ด้วย GPU-Z หรือ 3DMark และดูอุณหภูมิ",
  ram: "ตรวจสภาพได้ด้วย MemTest86 และการตั้งค่า XMP",
  cpu: "ตรวจสภาพได้ด้วย Cinebench และดูอุณหภูมิ",
  ssd: "ตรวจสุขภาพไดรฟ์ได้ด้วย CrystalDiskInfo",
  hdd: "ตรวจสุขภาพไดรฟ์ได้ด้วย CrystalDiskInfo",
  psu: "ตรวจสภาพได้ด้วยการทดสอบโหลด",
  monitor: "ตรวจจุดเสีย (dead pixel) ได้บนหน้าจอ",
  other: "ตรวจสภาพภายนอกได้ด้วยตา",
};

function itemKind(rawDescription) {
  const text = String(rawDescription || "");
  if (/vga|geforce|rtx|gtx|\bgpu\b|การ์ดแสดงผล/i.test(text)) return "gpu";
  if (/mainboard|motherboard|เมนบอร์ด/i.test(text)) return "other";
  if (/\bram\b|หน่วยความจำ|trident|vengeance|fury beast/i.test(text)) return "ram";
  if (/cpu|ryzen|ซีพียู/i.test(text)) return "cpu";
  if (/ssd|nvme|sn850|hiksemi|เอสเอสดี/i.test(text)) return "ssd";
  if (/hdd|ironwolf|barracuda|hat3310|red plus|ฮาร์ดดิสก์|hard disk/i.test(text)) return "hdd";
  if (/power supply|psu|toughpower|rm850|อุปกรณ์จ่ายไฟ/i.test(text)) return "psu";
  if (/monitor|จอมอนิเตอร์/i.test(text)) return "monitor";
  return "other";
}

function findHeaderIndex(headers, aliases) {
  for (let i = 0; i < headers.length; i++) {
    if (aliases.includes(headers[i])) return i;
  }
  return -1;
}

function detectColumns(headerRow) {
  const headers = (headerRow || []).map(cellText).map(normalizeHeader);
  const cols = {
    description: findHeaderIndex(headers, HEADER_ALIASES.description),
    quantity: findHeaderIndex(headers, HEADER_ALIASES.quantity),
    usedPrice: findHeaderIndex(headers, HEADER_ALIASES.usedPrice),
    askingPrice: findHeaderIndex(headers, HEADER_ALIASES.askingPrice),
    status: findHeaderIndex(headers, HEADER_ALIASES.status),
    itemNumber: findHeaderIndex(headers, ["item number", "sku", "รหัสสินค้า"]),
    invoiceDate: findHeaderIndex(headers, HEADER_ALIASES.invoiceDate),
  };

  if (cols.invoiceDate < 0) cols.invoiceDate = 1;
  if (cols.description < 0) cols.description = 3;
  if (cols.quantity < 0) cols.quantity = 6;
  if (cols.usedPrice < 0) cols.usedPrice = 7;

  // Asking price is often the unlabeled column immediately after Used Price.
  if (cols.askingPrice < 0 && cols.usedPrice >= 0) {
    const next = cols.usedPrice + 1;
    if (next < headers.length && !headers[next]) {
      cols.askingPrice = next;
    } else if (headerRow && headerRow.length > next) {
      cols.askingPrice = next;
    }
  }

  return cols;
}

function mapItem(rawDescription) {
  const text = String(rawDescription || "").replace(/\s+/g, " ").trim();
  for (const entry of ITEM_MAP) {
    if (!entry.test.test(text)) continue;
    if (entry.and && !entry.and.test(text)) continue;
    return { name: entry.name, description: entry.description };
  }

  let name = text.replace(/^[A-Za-z][A-Za-z0-9 /.-]*\s*\([^)]+\)\s*/u, "").trim();
  if (!name) name = text || "อุปกรณ์คอมพิวเตอร์";
  if (name.length > 90) name = name.slice(0, 87) + "…";
  return {
    name,
    description: "อุปกรณ์คอมพิวเตอร์มือสอง สภาพดี",
  };
}

function mergeKey(itemNumber, name) {
  if (itemNumber) return "sku:" + String(itemNumber).trim().toLowerCase();
  return "name:" + String(name).trim().toLowerCase();
}

function parseCatalogFromCsv(csvText, options) {
  const maxRow = options && Number.isFinite(options.maxRow) ? options.maxRow : 37;
  const hideRows = (options && options.hideRows) || new Set();
  const rows = parseCsv(csvText);
  if (rows.length < 2 || maxRow < 2) return [];

  const cols = detectColumns(rows[0]);
  const lastIndex = Math.min(rows.length, maxRow) - 1;
  const merged = new Map();

  for (let i = 1; i <= lastIndex; i++) {
    const sheetRow = i + 1; // header is row 1
    if (hideRows.has(sheetRow)) continue;

    const cells = rows[i] || [];
    if (cols.status >= 0) {
      const status = normalizeHeader(cellText(cells[cols.status]));
      if (SOLD_STATUS.has(status)) continue;
    }

    const rawDescription = cellText(cells[cols.description]);
    if (!rawDescription) continue;

    const asking = cols.askingPrice >= 0 ? cellNumber(cells[cols.askingPrice]) : null;
    const used = cols.usedPrice >= 0 ? cellNumber(cells[cols.usedPrice]) : null;
    const price = asking != null && asking > 0 ? asking : used;
    if (price == null || !(price > 0)) continue;

    const qtyRaw = cols.quantity >= 0 ? cellNumber(cells[cols.quantity]) : 1;
    const quantity = qtyRaw != null && qtyRaw > 0 ? qtyRaw : 1;
    const mapped = mapItem(rawDescription);
    const itemNumber = cols.itemNumber >= 0 ? cellText(cells[cols.itemNumber]) : "";
    const key = mergeKey(itemNumber, mapped.name);
    const invoiceDate = cols.invoiceDate >= 0 ? parseInvoiceDate(cells[cols.invoiceDate]) : null;
    const ageDays = invoiceDate ? Math.floor((Date.now() - invoiceDate.getTime()) / 86400000) : -1;
    const verify = VERIFY[itemKind(rawDescription)] || VERIFY.other;
    const age = ageLabel(invoiceDate);

    if (merged.has(key)) {
      const existing = merged.get(key);
      existing.quantity += quantity;
      if (ageDays > (existing.ageDays == null ? -1 : existing.ageDays)) {
        existing.ageDays = ageDays;
        existing.age = age;
      }
      continue;
    }

    merged.set(key, {
      name: mapped.name,
      price,
      description: mapped.description,
      quantity,
      age,
      verify,
      ageDays,
    });
  }

  return Array.from(merged.values());
}

function publicItems(items) {
  return (items || []).map((item) => ({
    name: item.name,
    price: item.price,
    description: item.description,
    quantity: item.quantity,
    age: item.age || "",
    verify: item.verify || "",
  }));
}

module.exports = {
  parseCsv,
  parseHideRows,
  parseCatalogFromCsv,
  mapItem,
  publicItems,
};

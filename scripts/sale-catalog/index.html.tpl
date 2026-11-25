<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>ขายอุปกรณ์คอมพิวเตอร์มือสอง</title>
  <meta name="description" content="อุปกรณ์คอมพิวเตอร์มือสอง สภาพดี ราคาเป็นกันเอง — การ์ดจอ ซีพียู แรม เครื่องเก็บข้อมูล และอื่นๆ">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="th_TH">
  <meta property="og:title" content="ขายอุปกรณ์คอมพิวเตอร์มือสอง">
  <meta property="og:description" content="อุปกรณ์คอมพิวเตอร์มือสอง สภาพดี ราคาเป็นกันเอง — การ์ดจอ ซีพียู แรม เครื่องเก็บข้อมูล และอื่นๆ">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="ขายอุปกรณ์คอมพิวเตอร์มือสอง">
  <meta name="twitter:description" content="อุปกรณ์คอมพิวเตอร์มือสอง สภาพดี ราคาเป็นกันเอง — การ์ดจอ ซีพียู แรม เครื่องเก็บข้อมูล และอื่นๆ">
  <style>
    :root {
      --bg: #f6f3ee;
      --card: #fff;
      --ink: #1c1917;
      --muted: #57534e;
      --line: #e7e0d8;
      --accent: #9a3412;
      --wa: #128c3f;
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; }
    body {
      font-family: system-ui, "Noto Sans Thai", "Sarabun", "Sukhumvit Set", "Thonburi", Tahoma, sans-serif;
      background: var(--bg);
      color: var(--ink);
      line-height: 1.5;
      font-size: 16px;
    }
    header, main, footer { width: min(720px, calc(100% - 32px)); margin: 0 auto; }
    header { padding: 28px 0 8px; }
    h1 { font-size: 1.55rem; line-height: 1.25; margin: 0 0 8px; }
    .lede { color: var(--muted); margin: 0 0 12px; }
    .notices { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 12px 16px; margin: 0 0 20px; }
    .notices p { margin: 0 0 8px; font-size: .95rem; }
    .notices p:last-child { margin: 0; }
    .list { display: grid; gap: 10px; padding: 0 0 28px; }
    article {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 14px 16px;
    }
    article h2 { font-size: 1.05rem; margin: 0 0 4px; }
    .price { font-weight: 700; font-size: 1.2rem; color: var(--accent); margin: 0; }
    .unit { font-weight: 500; font-size: .9rem; color: var(--muted); }
    .desc, .qty, .age, .verify { margin: 6px 0 0; color: var(--muted); font-size: .95rem; }
    .contact {
      background: var(--card);
      border: 1px solid var(--line);
      border-radius: 14px;
      padding: 16px;
      margin-bottom: 28px;
    }
    .contact h2 { margin: 0 0 6px; font-size: 1.15rem; }
    .note { margin: 0 0 12px; color: var(--muted); font-size: .95rem; }
    .actions { display: grid; gap: 8px; }
    .btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      color: var(--ink);
      background: #fafaf9;
      border: 1px solid var(--line);
      border-radius: 12px;
      padding: 12px 14px;
      min-height: 48px;
      font-weight: 600;
    }
    .btn span { font-weight: 500; color: var(--muted); font-size: .85rem; }
    .btn-wa { border-color: #a7f3d0; background: #ecfdf5; }
    .btn.is-placeholder { opacity: .85; }
    footer { color: var(--muted); font-size: .85rem; padding: 0 0 32px; }
    @media (min-width: 640px) {
      .actions { grid-template-columns: 1fr 1fr; }
    }
  </style>
</head>
<body>
  <header>
    <h1>ขายอุปกรณ์คอมพิวเตอร์มือสอง</h1>
    <p class="lede">สินค้ามือสอง สภาพดี ราคาต่อชิ้นเป็นบาท สอบถามหรือนัดดูของได้ตามช่องทางด้านล่าง</p>
    <div class="notices">
      <p>ผู้ขายเป็นชาวต่างชาติที่กำลังจะเดินทางออกนอกประเทศ</p>
      <p>เคสคอมพิวเตอร์มีรอยถลอกจากการขนย้าย แต่ฮาร์ดแวร์ทั้งหมดใช้งานได้ปกติ</p>
      <p>ผู้ซื้อขอตรวจเช็กเพิ่มเติมเพื่อยืนยันสภาพสินค้าได้ก่อนต่อรองราคา</p>
    </div>
  </header>
  <main>
    <section id="items" class="list" aria-live="polite"></section>
    <section class="contact" id="contact">
      <h2>ติดต่อผู้ขาย</h2>
      <p class="note">__CONTACT_NOTE__</p>
      <div class="actions">
        __CONTACT_BUTTONS__
      </div>
    </section>
  </main>
  <footer>ราคามีจำนวนจำกัด และอาจมีการเปลี่ยนแปลง</footer>
  <script type="application/json" id="fallback-items">__FALLBACK_JSON__</script>
  <script>
    (function () {
      var root = document.getElementById("items");
      function baht(n) {
        return Number(n).toLocaleString("th-TH") + " บาท";
      }
      function render(items) {
        if (!items || !items.length) {
          root.innerHTML = "<p class=\"lede\">ยังไม่มีรายการสินค้าในขณะนี้</p>";
          return;
        }
        var html = "";
        for (var i = 0; i < items.length; i++) {
          var it = items[i];
          var qty = Number(it.quantity) || 1;
          html += "<article><h2>" + escapeHtml(it.name) + "</h2>";
          html += "<p class=\"price\">" + baht(it.price);
          if (qty > 1) html += " <span class=\"unit\">ต่อชิ้น</span>";
          html += "</p><p class=\"desc\">" + escapeHtml(it.description || "") + "</p>";
          if (it.age) html += "<p class=\"age\">" + escapeHtml(it.age) + "</p>";
          if (it.verify) html += "<p class=\"verify\">" + escapeHtml(it.verify) + "</p>";
          if (qty > 1) html += "<p class=\"qty\">มี " + qty + " ชิ้น</p>";
          html += "</article>";
        }
        root.innerHTML = html;
      }
      function escapeHtml(s) {
        return String(s)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;");
      }
      var fallback = [];
      try {
        fallback = JSON.parse(document.getElementById("fallback-items").textContent);
      } catch (e) {}
      render(fallback);
      fetch("/migration/items.json", { headers: { Accept: "application/json" }, cache: "no-store" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (data) {
          if (Array.isArray(data)) render(data);
          else if (data && data.items) render(data.items);
        })
        .catch(function () {});
    })();
  </script>
</body>
</html>

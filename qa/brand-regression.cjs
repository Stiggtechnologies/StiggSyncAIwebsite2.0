const fs = require("fs"),
  path = require("path"),
  crypto = require("crypto"),
  assert = require("node:assert/strict");
const root = path.resolve(__dirname, ".."),
  brand = path.join(root, "public/brand");
const manifest = JSON.parse(
  fs.readFileSync(path.join(root, "qa/brand-manifest.json")),
);
for (const [file, expected] of Object.entries(manifest.assets)) {
  const b = fs.readFileSync(path.join(brand, file));
  assert.equal(
    crypto.createHash("sha256").update(b).digest("hex"),
    expected.sha256,
    file,
  );
  assert.equal(b.length, expected.bytes, file);
}
const light = fs.readFileSync(
  path.join(brand, "syncai-wordmark-light.svg"),
  "utf8",
);
const dark = fs.readFileSync(
  path.join(brand, "syncai-wordmark-dark.svg"),
  "utf8",
);
const icon = fs.readFileSync(path.join(brand, "syncai-icon.svg"), "utf8");
assert.equal(light.replace("#FEFEFE", "#1E2327"), dark);
assert(!/<text|<image|href=|<script/.test(light + dark + icon));
const glyphs = [...light.matchAll(/<path d="([^"]+)"/g)].map((x) => x[1]);
assert.equal(glyphs.length, 6);
assert(icon.includes(glyphs[4]));
const brass = light.match(/<path fill="#B4935D" d="([^"]+)"/)[1];
assert(icon.includes(brass));
for (const n of [16, 32, 48, 180, 192, 512]) {
  const b = fs.readFileSync(path.join(brand, `syncai-icon-${n}.png`));
  assert.equal(b.readUInt32BE(16), n);
  assert.equal(b.readUInt32BE(20), n);
}
const ico = fs.readFileSync(path.join(root, "app/favicon.ico"));
assert(ico.equals(fs.readFileSync(path.join(brand, "favicon.ico"))));
assert.equal(ico.readUInt16LE(4), 3);
assert.deepEqual(
  [0, 1, 2].map((i) => ico[6 + i * 16]),
  [16, 32, 48],
);
const social = fs.readFileSync(path.join(root, "app/opengraph-image.png"));
assert.equal(social.readUInt32BE(16), 1200);
assert.equal(social.readUInt32BE(20), 630);
const component = fs.readFileSync(
  path.join(root, "components/BrandWordmark.tsx"),
  "utf8",
);
assert(component.includes("syncai-wordmark-light.svg"));
assert(component.includes('aria-label="SyncAI home"'));
assert(component.includes('alt="SyncAI"'));
console.log(
  "Brand checks passed: checksums, six outlined glyphs, identical A/inset geometry, ICO frames, touch sizes, social dimensions and accessible shared wordmark.",
);

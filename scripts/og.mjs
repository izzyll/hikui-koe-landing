// Genera las imágenes Open Graph (1200×630) en public/ a partir de las capturas.
// Uso: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const W = 1200, H = 630;
const copy = {
  es: { tag: ['La respuesta justa,', 'en voz baja,', 'mientras presentas.'], foot: 'Gratis · Windows 10 / 11' },
  en: { tag: ['The right answer,', 'in a low voice,', 'while you present.'], foot: 'Free · Windows 10 / 11' },
};
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

for (const lang of ['es', 'en']) {
  const c = copy[lang];
  const shotW = 420;
  const shot = await sharp(`${root}src/assets/screens/live-${lang}.png`).resize({ width: shotW }).toBuffer();
  const shotH = Math.round((1280 / 920) * shotW);
  const mask = Buffer.from(`<svg width="${shotW}" height="${shotH}"><rect width="${shotW}" height="${shotH}" rx="16" fill="#fff"/></svg>`);
  const rounded = await sharp(shot).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs><radialGradient id="g" cx="0.78" cy="0.5" r="0.6"><stop offset="0" stop-color="#6c8cff" stop-opacity="0.22"/><stop offset="1" stop-color="#6c8cff" stop-opacity="0"/></radialGradient></defs>
  <rect width="${W}" height="${H}" fill="#111217"/><rect width="${W}" height="${H}" fill="url(#g)"/>
  <circle cx="86" cy="150" r="11" fill="#3ddc97"/>
  <text x="110" y="166" font-family="Segoe UI, Inter, sans-serif" font-weight="700" font-size="46" fill="#eceef4">Hikui Koe</text>
  <text x="76" y="225" font-family="Yu Gothic UI, Meiryo, Noto Sans JP, sans-serif" font-size="26" fill="#9a9eae">低い声</text>
  ${c.tag.map((l, i) => `<text x="74" y="${310 + i * 62}" font-family="Segoe UI, Inter, sans-serif" font-weight="700" font-size="50" letter-spacing="-1" fill="#eceef4">${esc(l)}</text>`).join('')}
  <text x="76" y="540" font-family="Segoe UI, Inter, sans-serif" font-size="26" fill="#6c8cff" font-weight="600">${esc(c.foot)}</text>
</svg>`;
  await sharp(Buffer.from(svg))
    .composite([{ input: rounded, left: W - shotW - 60, top: 70 }])
    .png({ compressionLevel: 9 })
    .toFile(`${root}public/og-${lang}.png`);
  console.log(`public/og-${lang}.png`);
}

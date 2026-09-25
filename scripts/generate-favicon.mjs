import { mkdir, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

const svg = `
<svg width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="24" y1="18" x2="232" y2="238" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2563EB"/>
      <stop offset="1" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>
  <rect width="256" height="256" rx="58" fill="url(#bg)"/>
  <rect x="48" y="48" width="68" height="68" rx="17" fill="white"/>
  <rect x="140" y="48" width="68" height="68" rx="17" fill="white" fill-opacity=".3"/>
  <rect x="48" y="140" width="68" height="68" rx="17" fill="white" fill-opacity=".3"/>
  <rect x="140" y="140" width="68" height="68" rx="17" fill="white" fill-opacity=".55"/>
</svg>`;

await mkdir('public/images', { recursive: true });
await writeFile('public/images/weblign-mark.svg', svg);

const png = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
await sharp(Buffer.from(svg)).resize(512, 512).png().toFile('public/images/weblign-mark.png');
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(0, 6);
header.writeUInt8(0, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
await writeFile('src/app/favicon.ico', Buffer.concat([header, png]));

console.log('Generated Weblign favicon assets.');

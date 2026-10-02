/**
 * Downloads remote blog/project images into /public/images/uploads so the site
 * serves them from its own origin.
 *
 *   node scripts/fetch-image.mjs <url> <slug> [width]
 *
 * Remote URLs work at runtime, but a local copy is faster (no extra DNS + TLS),
 * cannot break when the third party changes, and avoids leaking visitor IPs.
 * `width` is the target output width; height follows the source aspect ratio.
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';

const [url, slug, widthArg] = process.argv.slice(2);

if (!url || !slug) {
  console.error('usage: node scripts/fetch-image.mjs <url> <slug> [width]');
  process.exit(1);
}

const OUT_DIR = path.resolve('public/images/uploads');
const width = Number(widthArg) || 1200;

const safeSlug = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
if (!safeSlug) {
  console.error('slug must contain at least one letter or number');
  process.exit(1);
}

await fs.mkdir(OUT_DIR, { recursive: true });

const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 30_000);

let buffer;
try {
  const response = await fetch(url, {
    signal: controller.signal,
    headers: {
      // Some CDNs reject requests without a browser-like UA.
      'User-Agent': 'Mozilla/5.0 (compatible; WeblignImageFetch/1.0)',
    },
  });
  if (!response.ok) {
    console.error(`fetch failed: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  buffer = Buffer.from(await response.arrayBuffer());
} catch (error) {
  console.error(`fetch error: ${error.message}`);
  process.exit(1);
} finally {
  clearTimeout(timer);
}

const source = sharp(buffer);
const meta = await source.metadata();
const isPng = meta.format === 'png' || /\.png($|\?)/i.test(url);

const pipeline = source.rotate();
const file = path.join(OUT_DIR, `${safeSlug}.${isPng ? 'png' : 'webp'}`);

const resized = await pipeline
  .resize({ width, withoutEnlargement: true })
  .webp(isPng ? { quality: 88 } : { quality: 80 })
  .toBuffer();

if (isPng) {
  await fs.writeFile(file, resized);
} else {
  await fs.writeFile(file, resized);
}

const outMeta = await sharp(resized).metadata();
const beforeKb = Math.round(buffer.length / 1024);
const afterKb = Math.round(resized.length / 1024);

console.log(`saved    ${path.relative(process.cwd(), file)}`);
console.log(`source   ${meta.width}x${meta.height}  ${beforeKb} KB  (${meta.format})`);
console.log(`output   ${outMeta.width}x${outMeta.height}  ${afterKb} KB  (webp)`);
console.log(`\nUse this value in the admin image field:\n/images/uploads/${safeSlug}.${isPng ? 'png' : 'webp'}`);

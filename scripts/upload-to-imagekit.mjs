/**
 * Uploads an image to ImageKit so the site can serve it from a global CDN.
 *
 *   node scripts/upload-to-imagekit.mjs <local-file-or-url> [slug]
 *
 * Requires IMAGEKIT_PRIVATE_KEY in the environment (.env.local or the shell).
 * The private key is read from env only — never hardcoded, never committed.
 * Rotate it if it has ever been shared outside your machine.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const PRIVATE_KEY = process.env.IMAGEKIT_PRIVATE_KEY;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const BASE_URL = (process.env.NEXT_PUBLIC_IMAGEKIT_URL ?? 'https://ik.imagekit.io/uzfbs5ap1').replace(/\/$/, '');
const FOLDER = 'weblign';

const [, , source, slugArg] = process.argv;

if (!PRIVATE_KEY) {
  console.error('IMAGEKIT_PRIVATE_KEY is not set.');
  console.error('Add it to .env.local (gitignored) or export it in the shell.');
  process.exit(1);
}
if (!PUBLIC_KEY) {
  console.error('NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY is not set.');
  process.exit(1);
}
if (!source) {
  console.error('usage: node scripts/upload-to-imagekit.mjs <local-file|url> [slug]');
  process.exit(1);
}

const { publicKey, privateKey } = Object.fromEntries(
  PRIVATE_KEY.split('&').map((pair) => pair.split('=')),
);

const safeSlug = (slugArg ?? path.basename(source).split('.')[0])
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');

// --- Read the image bytes -------------------------------------------------
let buffer;
if (/^https?:\/\//i.test(source)) {
  const response = await fetch(source, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WeblignUpload/1.0)' },
  });
  if (!response.ok) {
    console.error(`fetch failed: ${response.status} ${response.statusText}`);
    process.exit(1);
  }
  buffer = Buffer.from(await response.arrayBuffer());
} else {
  buffer = await fs.readFile(source);
}

const contentType = (await guessType(buffer)) ?? 'image/jpeg';
const fileName = `${safeSlug}.${contentType.split('/')[1].replace('jpeg', 'jpg')}`;

// --- Sign the upload token ------------------------------------------------
const expires = Math.floor(Date.now() / 1000) + 2_400; // 40 minutes
const token = crypto
  .createHash('sha1')
  .update(tokenPayload(expires) + privateKey)
  .digest('hex');

function tokenPayload(expiry) {
  return JSON.stringify({ token: 'exp=' + expiry, publicKey, url: `${BASE_URL}/${FOLDER}/${fileName}` });
}

// --- Upload ---------------------------------------------------------------
const form = new FormData();
form.append('file', new Blob([buffer], { type: contentType }), fileName);
form.append('fileName', fileName);
form.append('folder', `/${FOLDER}`);
form.append('publicKey', publicKey);
form.append('signature', token);
form.append('expire', String(expires));

const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
  method: 'POST',
  body: form,
});

if (!response.ok) {
  console.error(`upload failed: ${response.status} ${await response.text()}`);
  process.exit(1);
}

const json = await response.json();

console.log(`uploaded  ${json.name}`);
console.log(`url       ${json.url}`);
console.log(`size      ${Math.round((json.size ?? 0) / 1024)} KB`);
console.log(`\nPaste this into the admin image field:\n${json.url}`);

async function guessType(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return 'image/png';
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'image/jpeg';
  if (buf.slice(0, 4).toString('ascii') === 'RIFF') return 'image/webp';
  if (buf.slice(12, 16).toString('ascii') === 'WEBP') return 'image/webp';
  return 'image/jpeg';
}

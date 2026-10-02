/**
 * One-time migration: uploads every local raster asset to ImageKit so the
 * repository stops carrying image binaries and the site serves from a CDN.
 *
 *   node scripts/migrate-images-to-imagekit.mjs [--dry-run]
 *
 * Credentials are read from .env.local. Never hardcoded, never committed.
 * Writes scripts/imagekit-map.json (old public path -> ImageKit URL).
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const DRY_RUN = process.argv.includes('--dry-run');
const RASTER = /\.(png|jpe?g|webp)$/i;

// --- Load .env.local without extra dependencies ---------------------------
async function loadEnv() {
  try {
    const raw = await fs.readFile(path.join(ROOT, '.env.local'), 'utf8');
    for (const line of raw.split(/\r?\n/)) {
      const match = /^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/i.exec(line);
      if (!match) continue;
      let value = match[2].trim();
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[match[1]]) process.env[match[1]] = value;
    }
  } catch {
    // fall back to the ambient environment
  }
}
await loadEnv();

const PRIV = process.env.IMAGEKIT_PRIVATE_KEY;
const PUB = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const BASE = (process.env.NEXT_PUBLIC_IMAGEKIT_URL || 'https://ik.imagekit.io/uzfbs5ap1').replace(/\/$/, '');
const FOLDER = 'weblign';

if (!PRIV || !PUB) {
  console.error('IMAGEKIT_PRIVATE_KEY / NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY missing.');
  console.error('Add them to .env.local then re-run.');
  process.exit(1);
}

// The dashboard stores these as `public_XXX=` / `private_XXX=`. The trailing
// `=` is a terminator, not part of the key, and including it breaks the HMAC.
const publicKey = PUB.replace(/^public_/, '').replace(/=+$/, '');
const privateKey = PRIV.replace(/^private_/, '').replace(/=+$/, '');

/**
 * ImageKit signs uploads with HMAC-SHA1 over a JSON token keyed by the private
 * key. A plain SHA1 hash is rejected outright, and the token must be signed
 * with the same private key that belongs to this public key.
 *
 * `expire` is validated before the signature, and the window is capped well
 * under an hour, so a short TTL is used.
 */
function buildAuth(seconds = 1500) {
  const expires = Math.floor(Date.now() / 1000) + seconds;
  const token = JSON.stringify({ exp: expires });
  const signature = crypto
    .createHmac('sha1', privateKey)
    .update(token)
    .digest('hex');
  return { token, signature, expires };
}

function contentType(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return 'image/png';
  if (buf[0] === 0xff && buf[1] === 0xd8) return 'image/jpeg';
  if (buf.slice(8, 12).toString('ascii') === 'WEBP') return 'image/webp';
  return 'application/octet-stream';
}

// --- Walk public/images ----------------------------------------------------
async function walk(dir, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else if (RASTER.test(entry.name)) out.push(full);
  }
  return out;
}

const files = (await walk(path.join(ROOT, 'public', 'images'))).sort();
console.log(`found ${files.length} raster assets${DRY_RUN ? ' (dry run)' : ''}\n`);

const map = {};
let ok = 0;
const failed = [];

for (const file of files) {
  const rel = path.relative(path.join(ROOT, 'public'), file).split(path.sep).join('/');
  const remoteName = rel.replace(/^images\//, '');

  if (DRY_RUN) {
    console.log(`  would upload  /${rel}  ->  ${BASE}/${FOLDER}/${remoteName}`);
    continue;
  }

  try {
    const buffer = await fs.readFile(file);
    const { token, signature, expires } = buildAuth();

    const form = new FormData();
    form.append('file', new Blob([buffer], { type: contentType(buffer) }), path.basename(file));
    form.append('fileName', path.basename(file));
    form.append('folder', `/${FOLDER}`);
    form.append('useUniqueFileName', 'true');
    form.append('publicKey', publicKey);
    form.append('token', token);
    form.append('signature', signature);
    form.append('expire', String(expires));

    const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', {
      method: 'POST',
      body: form,
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${(await response.text()).slice(0, 120)}`);
    }

    const json = await response.json();
    map[`/${rel}`] = json.url;
    ok += 1;
    console.log(`  ok  /${rel}  ->  ${json.url}`);
  } catch (error) {
    failed.push({ file: `/${rel}`, error: error.message });
    console.log(`  ERR /${rel}  ${error.message}`);
  }

  // Small pause so the upload API is not hammered.
  await new Promise((r) => setTimeout(r, 120));
}

if (DRY_RUN) {
  console.log('\ndry run complete — no files uploaded');
  process.exit(0);
}

await fs.writeFile(
  path.join(ROOT, 'scripts', 'imagekit-map.json'),
  JSON.stringify(map, null, 2) + '\n',
);

console.log(`\nuploaded ${ok}/${files.length}`);
if (failed.length) {
  console.log(`failed ${failed.length}:`);
  failed.forEach((f) => console.log(`  ${f.file} — ${f.error}`));
}
console.log(`\nmapping written to scripts/imagekit-map.json`);

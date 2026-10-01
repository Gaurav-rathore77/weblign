/**
 * Generates branded SVG thumbnail mockups for every portfolio project.
 * Run: node scripts/generate-project-thumbs.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('public/images/projects');
fs.mkdirSync(OUT, { recursive: true });

const W = 800;
const H = 450;

/** Tailwind-ish 700-shade palettes matching portfolioData gradients. */
const RAMPS = {
  blue: { a: '#1d4ed8', b: '#4338ca', c: '#6d28d9' },
  emerald: { a: '#047857', b: '#0f766e', c: '#0e7490' },
  orange: { a: '#c2410c', b: '#b45309', c: '#a16207' },
  sky: { a: '#0369a1', b: '#1d4ed8', c: '#4338ca' },
  violet: { a: '#6d28d9', b: '#7e22ce', c: '#a21caf' },
  rose: { a: '#be123c', b: '#be185d', c: '#b91c1c' },
  teal: { a: '#0f766e', b: '#0e7490', c: '#0369a1' },
  amber: { a: '#b45309', b: '#c2410c', b2: '#be123c', c: '#be123c' },
  indigo: { a: '#4338ca', b: '#6d28d9', c: '#7e22ce' },
  cyan: { a: '#0e7490', b: '#0369a1', c: '#1d4ed8' },
  fuchsia: { a: '#a21caf', b: '#be185d', c: '#be123c' },
  lime: { a: '#4d7c0f', b: '#15803d', c: '#047857' },
};

const shade = (hex, amt) => {
  const n = parseInt(hex.slice(1), 16);
  const clamp = (v) => Math.max(0, Math.min(255, v));
  const r = clamp(((n >> 16) & 255) + amt);
  const g = clamp(((n >> 8) & 255) + amt);
  const b = clamp((n & 255) + amt);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

/** Browser chrome shared by every mockup. */
const chrome = (p, id) => `
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#${id})"/>
  <rect x="0" y="0" width="${W}" height="${H}" fill="url(#${id})" opacity="0.5"/>
  <g opacity="0.10">
    <circle cx="${W - 70}" cy="70" r="120" fill="#ffffff"/>
    <circle cx="60" cy="${H - 40}" r="90" fill="#ffffff"/>
  </g>
  <rect x="40" y="34" width="${W - 80}" height="${H - 68}" rx="14" fill="#ffffff" opacity="0.97"/>
  <path d="M40 74 a14 14 0 0 1 14-14 h${W - 108} a14 14 0 0 1 14 14 v10 h-${W - 80} z" fill="${shade(p.c, -18)}"/>
  <circle cx="64" cy="62" r="5" fill="#ffffff" opacity="0.55"/>
  <circle cx="82" cy="62" r="5" fill="#ffffff" opacity="0.4"/>
  <circle cx="100" cy="62" r="5" fill="#ffffff" opacity="0.28"/>
  <rect x="128" y="56" width="300" height="12" rx="6" fill="#ffffff" opacity="0.75"/>
`;

/** Inner page body variants — keeps every thumb visually distinct. */
const VARIANTS = {
  hero(p) {
    return `
    <rect x="66" y="112" width="${W - 132}" height="96" rx="10" fill="${p.a}"/>
    <rect x="88" y="136" width="230" height="15" rx="7" fill="#ffffff" opacity="0.95"/>
    <rect x="88" y="162" width="160" height="11" rx="5" fill="#ffffff" opacity="0.6"/>
    <rect x="88" y="180" width="120" height="20" rx="10" fill="#ffffff" opacity="0.92"/>
    <rect x="${W - 200}" y="128" width="110" height="66" rx="10" fill="#ffffff" opacity="0.28"/>
    ${[0, 1, 2].map((i) => `<rect x="${66 + i * ((W - 132) / 3 + 8)}" y="228" width="${(W - 148) / 3}" height="128" rx="10" fill="${p.b}" opacity="0.16"/>`).join('')}
    ${[0, 1, 2].map((i) => `<rect x="${92 + i * ((W - 132) / 3 + 8)}" y="252" width="70" height="10" rx="5" fill="${p.a}" opacity="0.5"/><rect x="${92 + i * ((W - 132) / 3 + 8)}" y="274" width="120" height="8" rx="4" fill="${p.c}" opacity="0.25"/><rect x="${92 + i * ((W - 132) / 3 + 8)}" y="296" width="100" height="8" rx="4" fill="${p.c}" opacity="0.2"/>`).join('')}
    <rect x="66" y="372" width="${W - 132}" height="42" rx="10" fill="${p.c}" opacity="0.12"/>
  `;
  },

  form(p) {
    return `
    <rect x="66" y="112" width="200" height="150" rx="10" fill="${p.a}" opacity="0.14"/>
    <rect x="86" y="136" width="120" height="14" rx="7" fill="${p.a}" opacity="0.6"/>
    ${[0, 1, 2, 3].map((i) => `<rect x="86" y="${166 + i * 22}" width="150" height="8" rx="4" fill="${p.c}" opacity="0.28"/>`).join('')}
    <rect x="${W - 320}" y="112" width="254" height="228" rx="12" fill="${p.b}" opacity="0.12"/>
    <rect x="${W - 296}" y="136" width="130" height="14" rx="7" fill="${p.a}" opacity="0.6"/>
    ${[0, 1, 2].map((i) => `<rect x="${W - 296}" y="${168 + i * 40}" width="206" height="30" rx="8" fill="#ffffff" stroke="${p.c}" stroke-opacity="0.22"/>`).join('')}
    <rect x="${W - 296}" y="292" width="120" height="28" rx="14" fill="${p.a}"/>
    <rect x="66" y="366" width="${W - 132}" height="30" rx="8" fill="${p.c}" opacity="0.1"/>
  `;
  },

  grid(p) {
    const cols = 3;
    const rows = 2;
    const gap = 16;
    const cw = (W - 132 - gap * (cols - 1)) / cols;
    const ch = 104;
    let out = '';
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = 66 + c * (cw + gap);
        const y = 112 + r * (ch + gap);
        const col = [p.a, p.b, p.c][(r + c) % 3];
        out += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" rx="10" fill="${col}" opacity="0.15"/>`;
        out += `<rect x="${x + 16}" y="${y + 18}" width="${cw - 32}" height="10" rx="5" fill="${col}" opacity="0.5"/>`;
        out += `<rect x="${x + 16}" y="${y + 38}" width="${(cw - 32) * 0.7}" height="8" rx="4" fill="${col}" opacity="0.3"/>`;
        out += `<rect x="${x + 16}" y="${y + 60}" width="52" height="20" rx="10" fill="${col}" opacity="0.7"/>`;
      }
    }
    return `${out}<rect x="66" y="352" width="${W - 132}" height="30" rx="8" fill="${p.a}" opacity="0.12"/>`;
  },

  dashboard(p) {
    return `
    <rect x="66" y="112" width="128" height="228" rx="10" fill="${p.a}" opacity="0.14"/>
    ${[0, 1, 2, 3, 4].map((i) => `<rect x="82" y="${136 + i * 26}" width="${i === 0 ? 76 : 92}" height="9" rx="4" fill="${i === 0 ? p.b : p.c}" opacity="${i === 0 ? 0.75 : 0.25}"/>`).join('')}
    <rect x="210" y="112" width="132" height="66" rx="10" fill="${p.a}" opacity="0.15"/>
    <rect x="358" y="112" width="132" height="66" rx="10" fill="${p.b}" opacity="0.15"/>
    <rect x="506" y="112" width="132" height="66" rx="10" fill="${p.c}" opacity="0.15"/>
    ${[0, 1, 2].map((i) => `<rect x="${232 + i * 32}" y="152" width="20" height="10" rx="5" fill="${[p.a, p.b, p.c][i]}" opacity="0.6"/>`).join('')}
    <rect x="210" y="194" width="${W - 276}" height="146" rx="10" fill="${p.b}" opacity="0.1"/>
    <polyline points="234,306 288,272 342,290 396,238 450,254 504,214 558,228 612,196" fill="none" stroke="${p.a}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
    ${[236, 342, 450, 558, 610].map((x, i) => `<circle cx="${x}" cy="${[306, 290, 254, 228, 196][i]}" r="7" fill="#ffffff" stroke="${p.a}" stroke-width="4"/>`).join('')}
  `;
  },

  list(p) {
    return `
    <rect x="66" y="112" width="${W - 132}" height="52" rx="10" fill="${p.a}" opacity="0.12"/>
    ${[0, 1, 2].map((i) => `<circle cx="98" cy="${138 + i * 60}" r="16" fill="${[p.a, p.b, p.c][i]}" opacity="0.55"/>`).join('')}
    ${[0, 1, 2].map((i) => `<rect x="128" y="${128 + i * 60}" width="220" height="11" rx="5" fill="${p.a}" opacity="0.42"/><rect x="128" y="${150 + i * 60}" width="300" height="8" rx="4" fill="${p.c}" opacity="0.22"/>`).join('')}
    ${[0, 1, 2].map((i) => `<rect x="${W - 190}" y="${126 + i * 60}" width="104" height="24" rx="12" fill="${[p.a, p.b, p.c][i]}" opacity="0.72"/>`).join('')}
    <rect x="66" y="322" width="${W - 132}" height="46" rx="10" fill="${p.c}" opacity="0.1"/>
    <rect x="92" y="338" width="180" height="9" rx="4" fill="${p.a}" opacity="0.35"/>
  `;
  },

  map(p) {
    return `
    <rect x="66" y="112" width="${W - 132}" height="228" rx="10" fill="${p.b}" opacity="0.12"/>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<rect x="${96 + (i % 3) * 200}" y="${140 + Math.floor(i / 3) * 110}" width="150" height="84" rx="10" fill="${[p.a, p.b, p.c][i % 3]}" opacity="0.16"/>`).join('')}
    ${[0, 1, 2, 3, 4, 5].map((i) => `<circle cx="${140 + (i % 3) * 200}" cy="${164 + Math.floor(i / 3) * 110}" r="13" fill="${[p.a, p.b, p.c][i % 3]}" opacity="0.8"/>`).join('')}
    <path d="M140 164 Q300 260 460 164" fill="none" stroke="${p.a}" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 10" opacity="0.6"/>
  `;
  },
};

const VARIANT_CYCLE = ['hero', 'grid', 'list', 'form', 'dashboard', 'map'];

const projects = JSON.parse(fs.readFileSync('scripts/project-thumbs.json', 'utf8'));
let count = 0;

for (const [index, project] of projects.entries()) {
  const p = RAMPS[project.ramp] ?? RAMPS.blue;
  const id = `g${index}`;
  const variant = VARIANTS[project.variant ?? VARIANT_CYCLE[index % VARIANT_CYCLE.length]];
  const body = (VARIANTS[variant] ?? VARIANTS.hero)(p);

  const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="${id}" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop stop-color="${p.a}"/><stop offset="0.55" stop-color="${p.b}"/><stop offset="1" stop-color="${p.c}"/>
    </linearGradient>
  </defs>
  ${chrome(p, id)}${body}
</svg>
`;

  fs.writeFileSync(path.join(OUT, `${project.slug}.svg`), svg, 'utf8');
  count += 1;
}

console.log(`generated ${count} thumbnails in public/images/projects`);
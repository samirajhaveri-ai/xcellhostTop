import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { basename, join } from 'node:path';

const sourceDir = String.raw`C:\Users\vaishnavig\Downloads\page-HTML files\Autonomous Threat Management`;
const outputFile = new URL('../src/app/data/atm-solution-detail.data.ts', import.meta.url);

function extractBalancedDiv(html, start) {
  const token = /<div\b[^>]*>|<\/div>/gi;
  token.lastIndex = start;
  let depth = 0;
  let match;
  while ((match = token.exec(html))) {
    depth += match[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(start, token.lastIndex);
  }
  throw new Error(`Unbalanced hero diagram near character ${start}`);
}

function decode(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&times;/g, '×')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/\s+/g, ' ')
    .trim();
}

const details = {};
let sharedStyles = '';
for (const file of readdirSync(sourceDir).filter((name) => name.endsWith('.html') && name !== 'Autonomous Threat Management.html')) {
  const html = readFileSync(join(sourceDir, file), 'utf8');
  const slug = basename(file, '.html');
  const name = decode(html.match(/<h1>([\s\S]*?)<span class="h1b">/)?.[1] ?? slug);
  const tagline = decode(html.match(/<span class="h1b">([\s\S]*?)<\/span>/)?.[1] ?? '');
  const summary = decode(html.match(/<p class="sub">([\s\S]*?)<\/p>/)?.[1] ?? '');

  const overviewStart = html.search(/<section\b[^>]*id="overview"/i);
  const integrationsStart = html.search(/<section\b[^>]*id="integrations"/i);
  const contentEnd = html.indexOf('<section', integrationsStart + 8);
  if (overviewStart < 0 || integrationsStart < 0 || contentEnd < 0) {
    throw new Error(`Could not find overview-through-integrations range in ${file}`);
  }

  const heroStart = html.search(/<div class="dg"/i);
  if (heroStart < 0) throw new Error(`Could not find right-side diagram in ${file}`);

  const styles = [...html.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
    .map((match) => match[1])
    .join('\n')
    .replace(/:root/g, ':host');
  if (!sharedStyles) sharedStyles = styles;
  if (styles !== sharedStyles) throw new Error(`Reference stylesheet differs in ${file}`);

  const originalContent = html.slice(overviewStart, contentEnd);
  const overviewMatch = originalContent.match(/<p class="lead rv">([\s\S]*?)<\/p>/i);
  const overview = decode(overviewMatch?.[1] ?? '');
  const content = originalContent
    .replace(/<div class="eyebrow">Overview<\/div>/i, '<div class="eyebrow">What it covers</div>')
    .replace(/<p class="lead rv">[\s\S]*?<\/p>/i, '');

  details[slug] = {
    name,
    tagline,
    summary,
    overview,
    hero: extractBalancedDiv(html, heroStart),
    content,
  };
}

const banner = `/**\n * Generated from the supplied Autonomous Threat Management HTML references.\n * Re-run scripts/generate-atm-solution-data.mjs when those reference files change.\n */\n`;
writeFileSync(
  outputFile,
  `${banner}export interface AtmSolutionDetail {\n  name: string;\n  tagline: string;\n  summary: string;\n  overview: string;\n  hero: string;\n  content: string;\n}\n\nexport const ATM_SOLUTION_STYLES = ${JSON.stringify(sharedStyles)};\n\nexport const ATM_SOLUTION_DETAILS: Readonly<Record<string, AtmSolutionDetail>> = ${JSON.stringify(details, null, 2)};\n`,
  'utf8',
);

console.log(`Generated ${Object.keys(details).length} Autonomous Threat Management solution records.`);

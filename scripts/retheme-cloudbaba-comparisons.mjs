import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const comparisonDirectory = new URL('../public/comparisons/', import.meta.url);
const files = (await readdir(comparisonDirectory)).filter((file) => file.endsWith('.html'));

const colorReplacements = [
  [/#16a34a/gi, '#1565d8'],
  [/#15803d/gi, '#0b3e9c'],
  [/#22c55e/gi, '#3b82f6'],
  [/#4ade80/gi, '#8ab4ff'],
  [/#86efac/gi, '#bfd3f5'],
  [/#bbf7d0/gi, '#dce7ff'],
  [/#dcfce7/gi, '#e8f0fd'],
  [/#f0fdf4/gi, '#f4f8ff'],
  [/#0a3a2a/gi, '#0a3a80'],
  [/#04140c/gi, '#041e42'],
  [/#02090a/gi, '#02122b'],
  [/#1c3a26/gi, '#1c2a3a'],
  [/#047857/gi, '#0c3e8f'],
  [/#166534/gi, '#1049b3'],
  [/#a7f3d0/gi, '#cfe0fb'],
  [/rgba\(34\s*,\s*197\s*,\s*94\s*,/gi, 'rgba(21, 101, 216,'],
  [/rgba\(22\s*,\s*163\s*,\s*74\s*,/gi, 'rgba(11, 62, 156,'],
  [/rgba\(74\s*,\s*222\s*,\s*128\s*,/gi, 'rgba(138, 180, 255,'],
];

for (const file of files) {
  const fileUrl = new URL(file, comparisonDirectory);
  let html = await readFile(fileUrl, 'utf8');

  for (const [pattern, replacement] of colorReplacements) {
    html = html.replace(pattern, replacement);
  }

  await writeFile(fileUrl, html, 'utf8');
  console.log(`Rethemed ${join('public', 'comparisons', file)}`);
}

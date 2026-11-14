import fs from 'node:fs';
import path from 'node:path';

const mappings = [
  ['druva-certifications.html', 'druva-certifications.html'],
  ['veeam-certifications.html', 'veeam-certifications.html'],
  ['gemini-certifications.html', 'gemini-certifications.html'],
];

const sourceDirectory = process.argv[2];
if (!sourceDirectory) {
  throw new Error('Pass the directory containing the supplied certification HTML files.');
}

const destinationDirectory = path.resolve('public/imported-pages');
fs.mkdirSync(destinationDirectory, { recursive: true });

for (const [sourceName, destinationName] of mappings) {
  const sourcePath = path.resolve(sourceDirectory, sourceName);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const documentOpen = source.match(/<!doctype[^>]*>\s*<html[^>]*>/i)?.[0];
  const head = source.match(/<head\b[\s\S]*?<\/head>/i)?.[0];
  const mainMatch = source.match(/<main\b([^>]*)>([\s\S]*?)<\/main>/i);

  if (!documentOpen || !head || !mainMatch) {
    throw new Error(`Could not find the document shell and main content in ${sourcePath}.`);
  }

  // The Angular page supplies Insights and the standard closing CTA after the
  // imported content, so discard the supplied document's duplicate final CTA.
  const ctaMarker = mainMatch[2].search(/<!--\s*=+\s*CTA\s*=+\s*-->/i);
  const mainBody = (ctaMarker >= 0 ? mainMatch[2].slice(0, ctaMarker) : mainMatch[2]).trimEnd();

  // Retain page-specific behaviour while excluding the supplied header,
  // newsletter, footer, floating controls, search and mobile navigation.
  const afterMain = source.slice(source.indexOf('</main>', mainMatch.index) + '</main>'.length);
  const scripts = [...afterMain.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map(match => match[0])
    .join('\n');

  const imported = `${documentOpen}${head}<body><main${mainMatch[1]}>${mainBody}\n</main>${scripts}</body></html>\n`;
  const destinationPath = path.join(destinationDirectory, destinationName);
  fs.writeFileSync(destinationPath, imported, 'utf8');
  console.log(`Imported ${sourceName} -> ${path.relative(process.cwd(), destinationPath)}`);
}

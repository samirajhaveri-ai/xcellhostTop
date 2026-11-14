import fs from 'node:fs';
import path from 'node:path';

const files = [
  'cambodia-go-to-market-strategy.html',
  'japan-go-to-market-strategy.html',
];

const sourceDirectory = process.argv[2];
if (!sourceDirectory) {
  throw new Error('Pass the directory containing the supplied country strategy HTML files.');
}

const destinationDirectory = path.resolve('public/imported-pages');
fs.mkdirSync(destinationDirectory, { recursive: true });

for (const fileName of files) {
  const sourcePath = path.resolve(sourceDirectory, fileName);
  const source = fs.readFileSync(sourcePath, 'utf8');
  const documentOpen = source.match(/<!doctype[^>]*>\s*<html[^>]*>/i)?.[0];
  const head = source.match(/<head\b[\s\S]*?<\/head>/i)?.[0];
  const mainMatch = source.match(/<main\b([^>]*)>([\s\S]*?)<\/main>/i);

  if (!documentOpen || !head || !mainMatch) {
    throw new Error(`Could not find the document shell and main content in ${sourcePath}.`);
  }

  // The routed page supplies Insights and the standard blue closing CTA, so
  // remove the standalone document's duplicate closing CTA after its FAQ.
  const ctaMarker = mainMatch[2].search(/<!--\s*=+\s*CTA\s*=+\s*-->/i);
  const mainBody = (ctaMarker >= 0 ? mainMatch[2].slice(0, ctaMarker) : mainMatch[2]).trimEnd();

  // Retain page interactions but exclude the supplied header, footer,
  // newsletter, search, mobile navigation and floating contact controls.
  const afterMain = source.slice(source.indexOf('</main>', mainMatch.index) + '</main>'.length);
  const scripts = [...afterMain.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/gi)]
    .map(match => match[0])
    .join('\n');

  const imported = `${documentOpen}${head}<body><main${mainMatch[1]}>${mainBody}\n</main>${scripts}</body></html>\n`;
  const destinationPath = path.join(destinationDirectory, fileName);
  fs.writeFileSync(destinationPath, imported, 'utf8');
  console.log(`Imported ${fileName} -> ${path.relative(process.cwd(), destinationPath)}`);
}

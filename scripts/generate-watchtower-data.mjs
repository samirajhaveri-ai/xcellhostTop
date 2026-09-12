import { readFileSync, writeFileSync } from 'node:fs';

const sourceFile = String.raw`C:\Users\vaishnavig\Downloads\page-HTML files\New folder\watchtower.html`;
const additionsFile = String.raw`C:\Users\vaishnavig\Downloads\page-HTML files\New folder\watchtowerNew.html`;
const outputFile = new URL('../src/app/data/watchtower-reference.data.ts', import.meta.url);
const html = readFileSync(sourceFile, 'utf8');
const additionsHtml = readFileSync(additionsFile, 'utf8');

const originalStyles = [...html.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
  .map((match) => match[1])
  .join('\n');
const newStyles = [...additionsHtml.matchAll(/<style(?:\s[^>]*)?>([\s\S]*?)<\/style>/gi)]
  .map((match) => match[1])
  .join('\n');
const additionStyles = newStyles.match(
  /\/\* four pillars \*\/[\s\S]*?(?=\/\* marquee \*\/)/i,
)?.[0];
if (!additionStyles) throw new Error('Could not locate styles for the new Watchtower sections.');

// Keep every existing rule byte-for-byte, then append only the rules used by
// Capabilities, Signal sources and Roadmap.
const overviewLayoutStyles = `
/* Use compact, consistent spacing between all Watchtower sections. */
.pp-sec {
  padding-top: 56px;
  padding-bottom: 56px;
}

/* Keep the overview introduction full-width above its two-column details. */
#overview .ov {
  align-items: start;
  column-gap: 56px;
  row-gap: 24px;
}
#overview .ov > div:first-child {
  display: contents;
}
#overview .ov .sec-h,
#overview .ov .lead {
  grid-column: 1 / -1;
  max-width: none;
}
#overview .ov .sec-h {
  margin-bottom: 0;
}
#overview .ov .lead {
  margin-bottom: 8px;
}
#overview .ov-pts {
  grid-column: 1;
}
#overview .ov-panel {
  grid-column: 2;
  grid-row: 4;
}
@media (max-width: 1100px) {
  #overview .ov {
    grid-template-columns: 1fr;
  }
  #overview .ov-panel {
    grid-column: 1;
    grid-row: auto;
  }
}
@media (max-width: 860px) {
  .pp-sec {
    padding-top: 44px;
    padding-bottom: 44px;
  }
  .pp-hero .agentnet {
    margin-top: 0;
  }
}
`;
const styles = `${originalStyles}\n${additionStyles}\n${overviewLayoutStyles}`.replace(/:root/g, ':host');

const contentStart = html.search(/<section\b[^>]*class="[^"]*\bwt-hero\b[^"]*"/i);
const whyOffset = html.slice(contentStart).search(/<section\b[^>]*id="why"/i);
const contentEnd = whyOffset < 0 ? -1 : contentStart + whyOffset;
if (contentStart < 0 || contentEnd < 0) {
  throw new Error('Could not locate the Watchtower hero-to-features content range.');
}

const originalContent = html.slice(contentStart, contentEnd);
const originalSections = originalContent.match(/<section\b[^>]*>[\s\S]*?<\/section>/gi) ?? [];

function sectionId(section) {
  return section.match(/\bid=["']([^"']+)["']/i)?.[1] ?? '';
}

function sectionFrom(source, id) {
  const sections = source.match(/<section\b[^>]*>[\s\S]*?<\/section>/gi) ?? [];
  const section = sections.find((candidate) => sectionId(candidate) === id);
  if (!section) throw new Error(`Could not locate Watchtower section #${id}.`);
  return section;
}

function reorderOverviewIntro(section) {
  const introPattern = /<div class="ov"><div><div class="sec-h left rv"><div class="eyebrow">Overview<\/div>(<h2>[\s\S]*?<\/h2>)<\/div>(<p class="lead rv">[\s\S]*?<\/p>)(<div class="ov-pts">)/i;
  const reordered = section.replace(
    introPattern,
    '<div class="ov"><div><div class="sec-h left rv"><div class="eyebrow">Overview</div></div>$2<div class="sec-h left rv">$1</div>$3',
  );
  if (reordered === section) {
    throw new Error('Could not reorder the Watchtower overview introduction.');
  }
  return reordered;
}

function removeHeroInfoCard(section) {
  const cardPattern = /<div class="an-info" id="anInfo">[\s\S]*?(?=<div class="an-tick" id="anTick">)/i;
  const updated = section.replace(cardPattern, '');
  if (updated === section) {
    throw new Error('Could not locate the Watchtower hero information card.');
  }
  return updated;
}

const originalHero = originalSections.find((section) => /\bwt-hero\b/i.test(section));
const originalOverview = originalSections.find((section) => sectionId(section) === 'overview');
if (!originalHero || !originalOverview) throw new Error('Could not locate the existing Watchtower hero or overview.');
const hero = removeHeroInfoCard(originalHero);
const overview = reorderOverviewIntro(originalOverview);

const additions = ['pillars', 'signals', 'roadmap'].map((id) => sectionFrom(additionsHtml, id));
const remainingOriginalSections = originalSections.filter(
  (section) => section !== originalHero && section !== originalOverview,
);
const content = [hero, overview, ...additions, ...remainingOriginalSections].join('');
const banner = `/**\n * Generated from the supplied watchtower.html reference.\n * Re-run scripts/generate-watchtower-data.mjs when that file changes.\n */\n`;

writeFileSync(
  outputFile,
  `${banner}export const WATCHTOWER_REFERENCE_STYLES = ${JSON.stringify(styles)};\n\nexport const WATCHTOWER_REFERENCE_HTML = ${JSON.stringify(content)};\n`,
  'utf8',
);

console.log('Generated the Watchtower reference content.');

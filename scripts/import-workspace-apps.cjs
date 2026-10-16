const fs = require('node:fs');
const path = require('node:path');
const postcss = require('postcss');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied workspace apps HTML file as the first argument.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const scope = '#workspace-apps';
const sheet = postcss.parse(source.match(/<style>([\s\S]*?)<\/style>/i)[1]);
const animations = new Map();
sheet.walkAtRules(/keyframes$/, rule => {
  animations.set(rule.params, `workspace-apps-${rule.params}`);
  rule.params = animations.get(rule.params);
});
sheet.walkRules(rule => {
  if (rule.parent.type === 'atrule' && /keyframes$/.test(rule.parent.name)) return;
  rule.selectors = rule.selectors.map(selector => {
    if (selector === ':root' || selector === 'body') return scope;
    if (/^\.xw(?=[\s.:#\[]|$)/.test(selector)) return selector.replace(/^\.xw/, scope);
    return `${scope} ${selector}`;
  });
});
sheet.walkDecls(/^animation(?:-name)?$/, declaration => {
  for (const [name, replacement] of animations) {
    declaration.value = declaration.value.replace(new RegExp(`\\b${name}\\b`, 'g'), replacement);
  }
});
const branding = text => text
  .replaceAll('xcellhost-workspace-apps', 'workspace-apps')
  .replaceAll('<b>Xcell</b><em>Host</em> Workspace', '<b>XcellWorkspace</b>')
  .replaceAll('XcellHost Workspace', 'XcellWorkspace')
  .replaceAll('XcellHost%20Workspace', 'XcellWorkspace');
const section = branding(source.match(/<body>([\s\S]*?)<script>/i)[1].trim());
const script = branding(source.match(/<script>([\s\S]*?)<\/script>/i)[1]);
const css = sheet.toString() + '\n#workspace-apps { box-sizing: border-box; }\n#workspace-apps :is(h2,h3,h4) { font-family: Inter, sans-serif; text-transform: none; }\n';
fs.writeFileSync(path.join(root, 'public/assets/styles/workspace-apps.css'), css);
fs.writeFileSync(path.join(root, 'public/assets/scripts/workspace-apps.js'), script);

const pagePath = path.join(root, 'public/imported-sarv-workspace.html');
let page = fs.readFileSync(pagePath, 'utf8');
page = page.replace(/<!-- WORKSPACE APPS START -->[\s\S]*?<!-- WORKSPACE APPS END -->\s*/g, '')
  .replace(/<!-- WORKSPACE BOOKMARKS START -->[\s\S]*?<!-- WORKSPACE BOOKMARKS END -->\s*/g, '');
const links = [
  ['overview', 'Overview'], ['workspace-apps', 'Workspace Apps'], ['how', 'How It Works'],
  ['apps', 'All Tools'], ['day', 'A Day In Workspace'], ['consolidate', 'Savings Calculator'],
  ['compare', 'Comparison'], ['secure', 'Security'], ['pricing', 'Pricing'],
  ['why', 'Why XcellHost'], ['customer-feedback', 'Customer Experiences'], ['faq', 'FAQs'],
];
const bookmarks = '<!-- WORKSPACE BOOKMARKS START -->\n<nav class="smb-section-nav" aria-label="XcellWorkspace page sections"><div class="smb-section-nav-track">'
  + links.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')
  + '</div></nav>\n<!-- WORKSPACE BOOKMARKS END -->\n';
const overview = '<section class="sec" id="overview">';
const how = '<!-- ================= HOW IT WORKS ================= -->';
if (!page.includes(overview) || !page.includes(how)) throw new Error('Workspace section insertion points were not found.');
page = page.replace(overview, bookmarks + overview)
  .replace(how, '<!-- WORKSPACE APPS START -->\n' + section + '\n<!-- WORKSPACE APPS END -->\n\n' + how);
for (const href of [
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
  '/assets/styles/workspace-apps.css', '/assets/styles/section-navigation-flow.css',
]) {
  if (!page.includes(`href="${href}"`)) page = page.replace('</head>', `<link rel="stylesheet" href="${href}"></head>`);
}
if (!page.includes('src="/assets/scripts/workspace-apps.js"')) {
  page = page.replace('</body>', '<script src="/assets/scripts/workspace-apps.js"></script></body>');
}
fs.writeFileSync(pagePath, page);
console.log('Added scoped workspace apps and bookmark navigation.');

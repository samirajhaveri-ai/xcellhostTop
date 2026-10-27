const fs = require('node:fs');
const assert = require('node:assert/strict');
const { parse } = require('parse5');
let count = 0;
for (const name of fs.readdirSync('src/assets/cloud-connectivity')) {
  const html = fs.readFileSync('src/assets/cloud-connectivity/' + name, 'utf8');
  const sections = [];
  function walk(node) {
    if (node.tagName === 'section') sections.push(node.attrs.find(a => a.name === 'id')?.value);
    for (const child of node.childNodes || []) walk(child);
  }
  walk(parse(html));
  assert(!sections.includes('faq'), name);
  assert(!sections.includes('contact'), name);
  assert(sections.includes('plans'), name);
  assert(!html.includes('One call for the whole path'), name);
  console.log(name + ': FAQ and closing CTA removed; plans retained');
  count++;
}
assert.equal(count, 8);

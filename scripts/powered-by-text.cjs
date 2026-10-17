const { parse } = require('parse5');

// Only the Powered by rows added to these pages; preserve all other images.
const rows = /^(?:hosting-powered|managed-powered|power-powered|sentinel-powered|genians-powered-row|[\w-]*brand-below-ai|email-addon-brand|tsplus-ask-brand)$/;
const marks = /^(?:msq|ms-grid|ms-squares|cw-mark|gn-g)$/;
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value || '';
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');

function removePoweredByLogos(html) {
  const edits = [];
  const document = parse(html, { sourceCodeLocationInfo: true });
  function edit(node, replacement = '') {
    const loc = node.sourceCodeLocation;
    if (loc) edits.push({ start: loc.startOffset, end: loc.endOffset, replacement });
  }
  function clean(row) {
    const hasBrandText = text(row).replace(/powered\s+by|[|\s]/gi, '').length > 0;
    function visit(node) {
      if (attr(node, 'class').split(/\s+/).some(c => marks.test(c)) || node.tagName === 'svg') {
        edit(node);
        return;
      }
      if (node.tagName === 'img') {
        const brand = attr(node, 'alt').replace(/\s+logo$/i, '').trim();
        edit(node, !hasBrandText && brand ? '<span>' + escape(brand) + '</span>' : '');
        return;
      }
      (node.childNodes || []).forEach(visit);
    }
    (row.childNodes || []).forEach(visit);
  }
  function walk(node) {
    if (attr(node, 'class').split(/\s+/).some(c => rows.test(c))) {
      clean(node);
      return;
    }
    (node.childNodes || []).forEach(walk);
  }
  walk(document);
  for (const e of edits.sort((a,b) => b.start - a.start)) html = html.slice(0,e.start) + e.replacement + html.slice(e.end);
  return html;
}
module.exports = { removePoweredByLogos };

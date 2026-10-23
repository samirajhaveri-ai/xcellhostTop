const products = [
  { file:'codeguard-backup', slug:'codeguard-backup', kind:'backup' },
  { file:'positivessl-acme-caas-dv', slug:'positivessl-acme-caas-dv', kind:'acme' },
  { file:'sectigo-acme-caas-dv', slug:'sectigo-acme-certificate-as-a-service', kind:'acme' },
  { file:'sectigo-ev-code-signing-certificate', slug:'sectigo-ev-code-signing', kind:'signing' },
  { file:'sectigo-ev-multi-domain-ucc', slug:'sectigo-ev-ssl-multi-domain-ucc', kind:'ssl' },
  { file:'sectigo-hackerguardian', slug:'hackerguardian-pci-compliance-scanning', kind:'scan' },
  { file:'sectigo-ov-ssl', slug:'sectigo-ov-ssl', kind:'ssl' },
  { file:'sectigo-ov-ssl-multi-domain-ucc', slug:'sectigo-ov-ssl-multi-domain-ucc', kind:'ssl' },
  { file:'sectigo-ov-ssl-multi-domain-wildcard', slug:'sectigo-ov-ssl-multi-domain-wildcard', kind:'ssl' },
  { file:'sectigo-ov-wildcard-ssl', slug:'sectigo-ov-ssl-wildcard', kind:'ssl' },
  { file:'sectigo-ssl (1)', slug:'sectigo-ssl', kind:'ssl' },
  { file:'sectigo-ssl-installation-service', slug:'ssl-installation-service', kind:'installation' },
  { file:'sectigo-ssl-multi-domain-ucc', slug:'sectigo-ssl-multi-domain-ucc', kind:'ssl' },
];
const aliases = {
  ...Object.fromEntries(products.map(p=>[p.file,p.slug])),
  'sectigo': 'sectigo-ssl-certificates', 'digicert': 'digicert-ssl-certificates',
  'sectigo-code-signing-certificate': 'sectigo-code-signing',
  'xcellhost-sectigo-code-signing': 'sectigo-code-signing',
  'xcellhost-sectigo-ev-code-signing': 'sectigo-ev-code-signing',
  'sectigo-multi-domain-ucc-wildcard-dv': 'sectigo-multi-domain-wildcard/checkout',
  'xcellhost-ssl-installation-service': 'ssl-installation-service',
  'xcellhost-47-day-ssl': '47-days-ssl',
};
function localLinks(html) {
  return html.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html(#[^"]*)?"/g,
    (_,slug,hash)=>'href="/'+(aliases[slug]||slug)+(hash||'')+'" target="_top"');
}
module.exports = {products, aliases, localLinks};

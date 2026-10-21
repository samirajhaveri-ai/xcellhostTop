const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the supplied cloud HTML files.');
const root = path.resolve(__dirname, '..');
const pages = [
  ['co-location-services', 'Co-Location Services', 'co-location-services.html'],
  ['global-cloud', 'Global Cloud', 'global-cloud.html'],
];
// The supplied Private Cloud document is intentionally mapped to the requested Hybrid Cloud route.
pages.push(['hybrid-cloud', 'Private Cloud', 'private-cloud (1).html']);
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const labels = { who: 'Who It Is For', features: 'Features', locations: 'Locations', 'xgl-locations': 'Locations', plans: 'Plans', configure: 'Configurator', sizer: 'Sizing', platform: 'Platforms', compare: 'Compare', migrate: 'Migration', latency: 'Latency', drplan: 'DR Planner', onboard: 'Get Started', overview: 'Overview', capabilities: 'Capabilities', how: 'How It Works', deploy: 'Deployment', security: 'Security', usecases: 'Use Cases', pricing: 'Pricing', tools: 'Tools', vs: 'Compare', steps: 'Get Started', why: 'Why XcellHost', 'customer-feedback': 'Customer References', faq: 'FAQs' };
const integrationLogos = {
  'VMware vSphere': 'cloud-backup-platforms/vmware.svg',
  'OpenStack': 'cloud-integrations/openstack.svg',
  'OpenStack API': 'cloud-integrations/openstack.svg',
  'Proxmox VE': 'cloud-integrations/proxmox.svg',
  'Ceph storage': 'cloud-integrations/ceph.svg',
  'Kubernetes': 'platforms/kubernetes.png',
  'Terraform': 'platforms/terraform.png',
  'Ansible': 'cloud-integrations/ansible.svg',
  'Windows Server': 'plesk-servers/platform-windows-server.svg',
  'RHEL &amp; Linux': 'performance-cloud-platforms/redhat.svg',
  'Ubuntu': 'plesk-servers/platform-ubuntu.svg',
  'Debian': 'performance-cloud-platforms/debian.svg',
  'AlmaLinux': 'plesk-servers/platform-almalinux.svg',
  'Rocky Linux': 'plesk-servers/platform-rocky-linux.svg',
  'Docker': 'plesk-servers/platform-docker.svg',
  'XcellHost cloud &amp; backup': 'xcellhost-logo.png',
};
function integrationLogo(label) {
  const file = integrationLogos[label];
  const wide = /VMware|XcellHost/.test(label) ? ' cloud-integration-logo-wide' : '';
  return file ? '<img class="cloud-integration-logo' + wide + '" src="/assets/images/' + file + '" alt="" width="24" height="24">' : null;
}
function localLinks(html) {
  return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
    .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/')
    .replaceAll('BUY NOW', 'Buy Now')
    .replaceAll('href="/global-cloudthe"', 'href="/global-cloud"');
}
for (const [slug, title, filename] of pages) {
  const source = fs.readFileSync(path.join(directory, filename), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|related|more)"[^>]*>[\s\S]*?<\/section>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/g, '');
  main = main.replace(/<span class="pl [^"]+">[\s\S]*?<\/span>([^<]+)/g, (original, label) => {
    const logo = integrationLogo(label);
    return logo ? logo + label : original;
  });
  main = main.replace(/<i>[A-Z]<\/i>([^<]+)/g, (original, label) => {
    const logo = integrationLogo(label);
    return logo ? logo + label : original;
  });
  main = main.replace(/(<section\b[^>]*id="security"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$2</p>');
  main = main.replace(/(<section\b[^>]*id="why"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>Why XcellHost For ' + title + '</h2><p class="hosting-section-intro">$2</p>');
  if (!/<section\b[^>]*id="why"/.test(main)) {
    const reasons = [
      ['Deployment Planning', 'Plan your cloud environment around your users, applications and existing infrastructure.'],
      ['Pilot Before Rollout', 'Validate application access, desktop performance and user workflows with a pilot group.'],
      ['Hosted Or On-Premises', 'Choose a deployment approach suited to your organisation and support requirements.'],
      ['Migration Support', 'Agree a phased transition for users, applications and access policies.'],
      ['Operations & Support', 'Set clear responsibilities for monitoring, updates and escalation with the XcellHost team.'],
      ['INR Billing With GST', 'Receive a quotation covering your selected licences, infrastructure and support.'],
    ];
    main = main.replace(/(<section\b[^>]*id="faq")/, '<section class="sec" id="why"><div class="wrap"><div class="sh rv"><h2>Why XcellHost For ' + title + '</h2></div><div class="hosting-reasons">' + reasons.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>$1');
  }
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    section = section.replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
    const items = [...section.matchAll(/<div class="fq"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
    const expected = (section.match(/class="fq"/g) || []).length;
    if (!expected || items.length !== expected) throw new Error(slug + ': FAQ extraction mismatch');
    const half = Math.ceil(items.length / 2);
    const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Ask for customer references relevant to your ' + title + ' deployment and support needs.</p></div><button class="btn btn-orange" data-open="xhCallback" data-topic="' + title + ' customer references">Request Customer References</button></div></section>';
    return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  const sections = [...main.matchAll(/<section\b[^>]*id="([^"]+)"/g)].map(m => m[1]).filter(id => labels[id]);
  main = main.replace(/(<section\b[^>]*id="overview")/, '<nav class="product-section-nav" aria-label="Page sections"><div class="wrap">' + sections.map(id => '<a href="#' + id + '">' + labels[id] + '</a>').join('') + '</div></nav>$1');
  main = localLinks(main);
  let script = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]);
  script = script.replace(/([a-zA-Z]+)\.scrollIntoView\(\{behavior:R\?'auto':'smooth',block:'start'\}\)/g, "window.hostingJumpTo($1.id)")
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq', 'faq-layout', 'section-navigation-flow', 'hosting-tools', 'cloud-infrastructure'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '</body></html>';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), html);
  console.log(slug + ': imported original sections, tools and FAQ answers');
}


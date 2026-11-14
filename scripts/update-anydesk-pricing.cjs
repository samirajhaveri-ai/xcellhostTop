// INR prices checked against https://www.anydesk.com/en/pricing on 2026-11-12.
// Only the pricing cards, associated licence rates and currency precision change.
const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('parse5');
const file = path.join(__dirname, '../public/imported-anydesk.html');
let source = fs.readFileSync(file, 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, key) => n.attrs?.find(a => a.name === key)?.value;
const pricing = nodes.find(n => attr(n, 'id') === 'pricing');
const ladder = nodes.find(n => attr(n, 'class')?.split(/\s+/).includes('ak-ladder'));
const heading = pricing.childNodes.find(n => attr(n, 'class') === 'wrap').childNodes.find(n => attr(n, 'class') === 'sh rv');
const list = items => '<ul class="ad-features">' + items.map(i => '<li>' + i + '</li>').join('') + '</ul>';
const cards = `<div class="ak-ladder">
<article class="ad-price-card standard" data-ed="std" aria-labelledby="adStandard">
<img src="/assets/images/anydesk-pricing/standard.png" alt="Small team remote access workspace" width="330" height="330" loading="lazy">
<h3 id="adStandard">Standard</h3><div class="ad-price"><div class="ad-was"><s>₹1,921.00</s><span class="ad-discount">20% Off</span></div><strong class="ad-amount">₹1,536.80</strong><p class="ad-billing">per month for <b>1 connection</b> (billed annually)</p></div>
<p class="ad-summary">Secure remote access<br>for small teams</p><button class="ad-order" type="button" data-pick="std">Order Now</button>
${list(['Up to 20 users; 1 connection included','Add connections up to 20 at ₹1,729/month each, billed annually','500 managed devices included','User management and custom-branded client','File transfer, session recording and privacy mode'])}</article>
<article class="ad-price-card advanced" data-ed="adv" aria-labelledby="adAdvanced"><span class="ad-best">Best Value</span>
<img src="/assets/images/anydesk-pricing/advanced.png" alt="IT support team workspace" width="330" height="330" loading="lazy">
<h3 id="adAdvanced">Advanced</h3><div class="ad-price"><div class="ad-was"><s>₹4,286.00</s><span class="ad-discount">20% Off</span></div><strong class="ad-amount">₹3,428.80</strong><p class="ad-billing">per month for <b>2 connections</b>, each at <b>₹1,714.40</b> (<s>₹2,143.00</s>) (billed annually)</p></div>
<p class="ad-summary">Comprehensive solution for<br>IT &amp; technical support</p><button class="ad-order" type="button" data-pick="adv">Order Now</button>
${list(['Up to 100 users; 2 connections included','Add connections up to 50 at ₹1,729/month each, billed annually','1,000 managed devices included','Role management, MSI deployment and Group Policy','Phone support and Standard features'])}</article>
<article class="ad-price-card ultimate" data-ed="ult" aria-labelledby="adUltimate">
<img src="/assets/images/anydesk-pricing/ultimate.png" alt="Enterprise remote access infrastructure" width="330" height="330" loading="lazy">
<h3 id="adUltimate">Ultimate</h3><div class="ad-price ad-contact"><p><button type="button" data-open="xhCallback" data-topic="AnyDesk Ultimate — personalized quote">Contact us</button> <b>for a personalized quote</b></p></div>
<p class="ad-summary">Fully customizable<br>In the Cloud or On-premises</p><button class="ad-order" type="button" data-open="xhCallback" data-topic="AnyDesk Ultimate — personalized quote">Go Ultimate</button>
${list(['Starts at 5 licensed users; scalable organisation','2,000 managed devices included','Single sign-on and custom namespace','CRM and ITSM integration options','Dedicated support and Advanced features'])}</article>
</div>`;
const edits = [
  [ladder, cards],
  [heading, '<div class="sh rv"><span class="eyebrow">Editions &amp; Pricing</span><h2>AnyDesk Plans For Teams <span class="acc">And Organisations.</span></h2><p>Monthly prices billed annually. All prices exclude GST. <a href="https://anydesk.com/en/pricing" target="_blank" rel="noopener noreferrer">AnyDesk INR pricing</a> checked 12 November 2026.</p></div>'],
];
for (const [node, html] of edits.sort((a,b) => b[0].sourceCodeLocation.startOffset - a[0].sourceCodeLocation.startOffset)) {
  const loc = node.sourceCodeLocation;
  source = source.slice(0,loc.startOffset) + html + source.slice(loc.endOffset);
}
if (!source.includes('/assets/styles/anydesk-pricing.css')) source = source.replace('</head>', '<link rel="stylesheet" href="/assets/styles/anydesk-pricing.css"></head>');
source = source.replace("solo:{n:'Solo',m:1199,", "solo:{n:'Solo',m:1080,").replace("std:{n:'Standard',m:1799,", "std:{n:'Standard',m:1536.8,").replace("adv:{n:'Advanced',m:3999,", "adv:{n:'Advanced',m:3428.8,");
source = source.replace('var CONN=1499,SETUP=4999;', 'var CONN=1729,SETUP=4999;');
source = source.replaceAll('₹1,499/month*', '₹1,729/month').replaceAll('₹1,199', '₹1,080');
source = source.replace("function inr(n){return XH.inr?XH.inr(Math.round(n)):'₹'+Math.round(n).toLocaleString('en-IN');}", "function inr(n){var amount=Math.round((n+Number.EPSILON)*100)/100;return '₹'+amount.toLocaleString('en-IN',{minimumFractionDigits:Number.isInteger(amount)?0:2,maximumFractionDigits:2});}");
source = source.replace('var gst=Math.round(sub*.18);', 'var gst=Math.round(sub*.18*100)/100;');
source = source.replace("pickEd(k,ED[k].inc+(k==='adv'?1:0))", 'pickEd(k,ED[k].inc)');
fs.writeFileSync(file, source);
console.log('Updated AnyDesk team cards and matching licence calculations.');

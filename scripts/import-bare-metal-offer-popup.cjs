const fs = require('node:fs');
const path = require('node:path');

const sourceFile = process.argv[2];
if (!sourceFile) throw Error('Pass the supplied Bare Metal popup HTML file.');

let html = fs.readFileSync(sourceFile, 'utf8');
const replaceOnce = (search, replacement, label) => {
  if (!html.includes(search)) throw Error(`Could not adapt ${label}; source markup changed.`);
  html = html.replace(search, replacement);
};

replaceOnce(
  '<body style="margin:0;background:#edf2f9">',
  '<body style="margin:0;background:transparent">',
  'popup background',
);
replaceOnce(
  "function fill(){form.elements.LEADCF33.value='Bare Metal Servers';form.elements.Description.value='Bare Metal Diwali Offer — ₹10000 worth of credits\\nPage: '+location.href;}",
  "function fill(){form.elements.LEADCF33.value='Bare Metal Servers';form.elements.Description.value='Bare Metal Diwali Offer — ₹10000 worth of credits\\nPage: '+(document.referrer||location.href);}",
  'lead description',
);
replaceOnce(
  "function close(){if(modal.hidden)return;modal.hidden=true;fx.stop();document.body.style.overflow=previousOverflow;if(previousFocus&&typeof previousFocus.focus==='function')previousFocus.focus({preventScroll:true})}",
  "function close(){if(modal.hidden)return;modal.hidden=true;fx.stop();document.body.style.overflow=previousOverflow;if(previousFocus&&typeof previousFocus.focus==='function')previousFocus.focus({preventScroll:true});if(window.parent!==window)window.parent.postMessage({type:'xh-baremetal-popup-close'},location.origin)}",
  'close notification',
);
replaceOnce(
  "setTimeout(()=>{location.assign(DESTINATION_URL)},400)",
  "setTimeout(()=>{window.top.location.assign(DESTINATION_URL)},400)",
  'successful redirect',
);
replaceOnce(
  "if(location.protocol==='file:' || new URLSearchParams(location.search).has('popup-preview')){open()}else{openTimer=setTimeout(()=>{if(modal.hidden)open()},15000)}",
  'open()',
  'popup trigger',
);

const output = path.join(__dirname, '..', 'public', 'bare-metal-offer-popup.html');
fs.writeFileSync(output, html);
console.log('Imported the Bare Metal offer popup for the Angular page wrapper.');

const fs = require('fs');
const source = fs.readFileSync('output/check-service-banners.cjs', 'utf8');
fs.writeFileSync('output/preview-service-banner-run.cjs', source
  .replace(/const slugs=\[[^\n]+/, "const slugs=['cloud-router'];")
  .replace("if(slug==='cloud-router'){", "if(slug==='cloud-router'){ await evaluate('document.getElementById(\"introv\")?.click()'); await pause(400);"));

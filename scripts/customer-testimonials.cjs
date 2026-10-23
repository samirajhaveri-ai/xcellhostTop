const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const dataPath = path.join(root, 'src/app/data/customer-testimonials.data.ts');
const compiled = ts.transpileModule(fs.readFileSync(dataPath, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText;
const context = { exports: {} };
vm.runInNewContext(compiled, context, { filename: dataPath });
const reviewsByPage = context.exports.CUSTOMER_TESTIMONIALS;
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function pageSlug(file) {
  let slug = path.basename(file, '.html').replace(/^imported-/, '').replace(/^(?:sectigo-detail-|sectigo-supplied-|developer-|inference-|vps-page-)/, '');
  return ({'purple-team':'purple-team-assessment','openai-managed-services-page':'openai-managed-services','rapidssl':'rapidssl-ssl-certificates','sarv-workspace':'xcellworkspace'})[slug] || slug;
}

function renderTestimonials(slug, id = 'customer-feedback', reviews = reviewsByPage[slug] || []) {
  for (const review of reviews) {
    if (!review.name?.trim() || !review.role?.trim() || !review.quote?.trim()) throw new Error('Incomplete testimonial for ' + slug);
    if (review.rating !== undefined && (!Number.isInteger(review.rating) || review.rating < 1 || review.rating > 5)) throw new Error('Invalid testimonial rating for ' + slug);
  }
  const cards = reviews.map(r => {
    const initials = r.name.trim().split(/\s+/).map(word => word[0]).slice(0, 2).join('').toUpperCase();
    const stars = r.rating === undefined ? '' : '<div class="xh-testimonial-stars" role="img" aria-label="'+r.rating+' out of 5 stars">'+[1,2,3,4,5].map(n=>'<span'+(n>r.rating?' class="off"':'')+'>★</span>').join('')+'</div>';
    return '<article class="xh-testimonial-card"><div class="xh-quote-badge" aria-hidden="true">”</div><div class="xh-testimonial-avatar" aria-hidden="true">'+escape(initials)+'</div><h3 class="xh-testimonial-name">'+escape(r.name)+'</h3><div class="xh-testimonial-role">'+escape(r.role)+'</div>'+stars+'<blockquote>'+escape(r.quote)+'</blockquote></article>';
  }).join('');
  return '<section class="xh-customer-testimonials" id="'+escape(id)+'" data-testimonial-page="'+escape(slug)+'"'+(reviews.length?'':' hidden')+'>'+(reviews.length?'<div class="xh-testimonial-wrap"><h2>What Customers Say</h2><div class="xh-testimonial-grid">'+cards+'</div></div>':'')+'</section>';
}

function replaceReferenceSections(html, file) {
  let changed = false;
  let result = html.replace(/<section\b[^>]*>[\s\S]*?<\/section>/g, section => {
    if (!/request customer references/i.test(section) && !/data-testimonial-page=/.test(section)) return section;
    changed = true;
    const id = section.match(/\bid="([^"]+)"/)?.[1] || 'customer-feedback';
    return renderTestimonials(pageSlug(file), id);
  });
  if (changed) {
    const hasQuotes = !!reviewsByPage[pageSlug(file)]?.length;
    result = result.replace(/<a\b[^>]*href="#(?:customers|customer-feedback|customerFeedback)"[^>]*>/g, anchor => {
      const clean = anchor.replace(/\sdata-testimonial-nav(?:="[^"]*")?/g, '').replace(/\shidden(?:="[^"]*")?/g, '');
      return clean.slice(0, -1) + ' data-testimonial-nav' + (hasQuotes ? '' : ' hidden') + '>';
    });
  }
  if (!changed || result.includes('href="/assets/styles/customer-testimonials.css"')) return result;
  return result.replace('</head>', '<link rel="stylesheet" href="/assets/styles/customer-testimonials.css"></head>');
}

module.exports = { pageSlug, renderTestimonials, replaceReferenceSections };

import { CUSTOMER_TESTIMONIALS, ENDPOINT_CUSTOMER_TESTIMONIALS } from '../data/customer-testimonials.data';

type ContentRoot = Document | ShadowRoot;
const headings = 'h1,h2,h3,h4,.pp-sec,.sec-title';
const reviewCards = '.prv,.tcard,.pp-revs,.pp-tcards,blockquote,[class*="testimonial"],[class*="review-card"],[class*="reviews"],[class*="testi-grid"],.hosting-testimonials';
const faqContainers = '[id="faq" i],section[id*="faq" i],section[class*="-faq" i],section[class*="-fq" i],.faq-section,#ppFaq,section[aria-labelledby*="faq" i]';
const isFaq = (text: string) => /^(?:frequently\s+asked\s+questions|faqs?)(?:\b|\s|[—–:])/i.test(text.trim());
const isReviewHeading = (text: string) => /^(?:what\s+(?:our\s+)?customers\s+say|customer\s+testimonials|customer\s+reviews)$/i.test(text.trim());

function visible(element: Element): boolean {
  const win = element.ownerDocument.defaultView;
  for (let current: Element | null = element; current; current = current.parentElement) {
    if (current.hasAttribute('hidden') || win?.getComputedStyle(current).display === 'none') return false;
  }
  return true;
}

function rootsForPage(root: ContentRoot): ContentRoot[] {
  const owner = root.nodeType === 9 ? root as Document : root.ownerDocument;
  if (!owner) return [root];
  let top = owner;
  try { top = owner.defaultView?.top?.document || owner; } catch { /* Local document only. */ }
  const roots: ContentRoot[] = [];
  const visit = (item: ContentRoot) => {
    if (roots.includes(item)) return;
    roots.push(item);
    item.querySelectorAll('*').forEach(element => {
      if (element.shadowRoot) visit(element.shadowRoot);
      if (element.tagName === 'IFRAME') {
        try {
          const doc = (element as HTMLIFrameElement).contentDocument;
          if (doc) visit(doc);
        } catch { /* External video and chat frames are outside this page. */ }
      }
    });
  };
  visit(top);
  return roots;
}

function isOriginalReview(element: Element): boolean {
  // A generated section, its cards, and any wrapper containing it are not
  // evidence of product reviews. Otherwise an empty heading followed by our
  // own section causes every observer pass to remove and recreate that section.
  return !element.closest('[data-auto-customer-testimonials]') &&
    !element.querySelector('[data-auto-customer-testimonials]') &&
    visible(element) && (element.textContent?.trim().length || 0) > 80;
}

function existingReviews(root: ContentRoot): boolean {
  if ([...root.querySelectorAll('.prv,.tcard,.xh-testimonial-card,.testimonial-card,.review-card,.hosting-review')].some(card =>
    isOriginalReview(card),
  )) return true;
  return [...root.querySelectorAll(headings)].some(heading => {
    if (!isReviewHeading(heading.textContent || '') || (!visible(heading) && !heading.hasAttribute('data-testimonial-empty-heading')) || heading.closest('[data-auto-customer-testimonials]')) return false;
    const next = heading.nextElementSibling;
    if (next?.matches(reviewCards) && isOriginalReview(next)) return true;
    let parent = heading.parentElement;
    for (let depth = 0; parent && depth < 3; depth++, parent = parent.parentElement) {
      if (parent.matches('body,main,#ppage,.pp-body,.ppage')) break;
      if ([...parent.querySelectorAll(reviewCards)].some(isOriginalReview)) return true;
    }
    return false;
  });
}

/** Fill only missing testimonial sections, immediately ahead of a visible FAQ. */
export function ensureFaqCustomerTestimonials(root: ContentRoot): void {
  const excluded = 'header,footer,nav,aside,dialog,.modal,[role="dialog"]';
  const faqHeading = [...root.querySelectorAll(headings)].find(element =>
    isFaq(element.textContent || '') && visible(element) && !element.closest(excluded),
  ) || [...root.querySelectorAll(faqContainers)].find(element =>
    visible(element) && !element.closest(excluded) && !!element.querySelector('.fq,.faq2,details,button[aria-expanded],.faq-item,.faq-row'),
  );
  if (!faqHeading) return;
  const pageRoots = rootsForPage(root);
  const generated = pageRoots.flatMap(item => [...item.querySelectorAll('[data-auto-customer-testimonials]')]);
  if (pageRoots.some(item => item.querySelector('[data-customer-testimonials="off"]'))) {
    generated.forEach(element => element.remove());
    return;
  }
  if (pageRoots.some(existingReviews)) {
    generated.forEach(element => element.remove());
    pageRoots.forEach(item => item.querySelectorAll<HTMLElement>('[data-testimonial-empty-heading]').forEach(heading => {
      heading.hidden = false;
      heading.removeAttribute('data-testimonial-empty-heading');
    }));
    return;
  }
  if (generated.length) return;

  const doc = faqHeading.ownerDocument;
  let slug = '';
  try { slug = doc.defaultView?.top?.location.pathname.replace(/^\/+|\/+$/g, '') || ''; } catch { /* No product override. */ }
  const productReviews = CUSTOMER_TESTIMONIALS[slug];
  const reviews = productReviews?.length ? productReviews : ENDPOINT_CUSTOMER_TESTIMONIALS;
  const section = doc.createElement('section');
  section.className = 'xh-customer-testimonials xh-testimonials-simple';
  section.setAttribute('data-auto-customer-testimonials', slug);
  section.setAttribute('aria-label', 'What Customers Say');
  const wrap = doc.createElement('div');
  wrap.className = 'xh-testimonial-wrap';
  const title = doc.createElement('h2');
  title.textContent = 'What Customers Say';
  wrap.append(title);
  if (!productReviews?.length) {
    const attribution = doc.createElement('p');
    attribution.className = 'xh-testimonial-attribution';
    attribution.textContent = 'Feedback from XcellHost endpoint-security customers.';
    wrap.append(attribution);
  }
  const grid = doc.createElement('div');
  grid.className = 'xh-testimonial-grid';
  for (const review of reviews) {
    const card = doc.createElement('article');
    card.className = 'xh-testimonial-card';
    if (review.rating !== undefined) {
      const stars = doc.createElement('div');
      stars.className = 'xh-testimonial-stars';
      stars.setAttribute('role', 'img');
      stars.setAttribute('aria-label', `${review.rating} out of 5 stars`);
      stars.textContent = '★'.repeat(review.rating);
      card.append(stars);
    }
    const quote = doc.createElement('blockquote');
    quote.textContent = review.quote;
    const author = doc.createElement('div');
    author.className = 'xh-testimonial-author';
    const avatar = doc.createElement('span');
    avatar.className = 'xh-testimonial-avatar';
    avatar.setAttribute('aria-hidden', 'true');
    avatar.textContent = review.name.trim().split(/\s+/).map(word => word[0]).slice(0, 2).join('').toUpperCase();
    const identity = doc.createElement('div');
    const name = doc.createElement('h3');
    name.className = 'xh-testimonial-name';
    name.textContent = review.name;
    const role = doc.createElement('div');
    role.className = 'xh-testimonial-role';
    role.textContent = review.role;
    identity.append(name, role);
    author.append(avatar, identity);
    card.append(quote, author);
    grid.append(card);
  }
  wrap.append(grid);
  section.append(wrap);

  let anchor: Element = faqHeading;
  const faqSection = faqHeading.closest('section');
  if (faqSection && (faqSection.matches(faqContainers) || [...faqSection.querySelectorAll('h1,h2,.pp-sec,.sec-title')].every(h => isFaq(h.textContent || '')))) anchor = faqSection;
  else if (faqHeading.parentElement?.matches('.sh,.section-heading,.section-head')) anchor = faqHeading.parentElement;
  if (anchor.parentElement?.matches('.wrap,.container,.pp-body')) section.classList.add('xh-testimonials-contained');
  anchor.before(section);

  // Replace empty headings left by native templates without altering real cards.
  root.querySelectorAll<HTMLElement>(headings).forEach(heading => {
    if (heading !== title && isReviewHeading(heading.textContent || '') && !heading.closest('[data-auto-customer-testimonials]')) {
      heading.hidden = true;
      heading.setAttribute('data-testimonial-empty-heading', '');
    }
  });
  const styleTarget = root.nodeType === 9 ? doc.head : root;
  if (!root.querySelector('link[href="/assets/styles/customer-testimonials.css"]')) {
    const link = doc.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/assets/styles/customer-testimonials.css';
    styleTarget.appendChild(link);
  }
}

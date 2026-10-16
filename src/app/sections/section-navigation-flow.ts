import { installBookmarkScrolling } from './bookmark-scroll';

/** Apply shared bookmark styling inside imported documents and keep bars in page flow. */
export function useScrollingSectionNavigation(document: Document): void {
  if (!document.querySelector('link[href="/assets/styles/section-navigation-flow.css"]')) {
    const sheet = document.createElement('link');
    sheet.rel = 'stylesheet';
    sheet.href = '/assets/styles/section-navigation-flow.css';
    document.head.appendChild(sheet);
  }
  document.querySelectorAll<HTMLElement>(
    'nav[aria-label$="sections" i], nav[aria-label="On this page" i], aside[aria-label$="sections" i], .cybird-section-nav, .product-section-nav, .smb-section-nav, .cpanel-bookmarks, .openclaw-bookmarks',
  ).forEach(nav => {
    nav.style.setProperty('position', 'relative', 'important');
    nav.style.setProperty('top', 'auto', 'important');
    nav.style.setProperty('bottom', 'auto', 'important');
    nav.style.setProperty('translate', 'none', 'important');
    nav.style.setProperty('transform', 'none', 'important');
  });
  installBookmarkScrolling(document);
}

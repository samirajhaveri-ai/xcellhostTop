import { SITE } from '../data/site.data';

// Use the actual PHP endpoint so subscriptions do not depend on rewrite rules.
export const BLOG_RSS_URL = SITE.siteUrl.replace(/\/$/, '') + '/feeds/blog.php';
export const BLOG_RSS_SUBSCRIBE_URL = 'https://feedly.com/i/subscription/' + encodeURIComponent('feed/' + BLOG_RSS_URL);

export async function blogRssIsAvailable(request: typeof fetch = fetch): Promise<boolean> {
  try {
    const response = await request(BLOG_RSS_URL, {
      headers: { Accept: 'application/rss+xml' }, signal: AbortSignal.timeout(12000), cache: 'no-store',
    });
    if (!response.ok || !/\b(?:rss\+xml|xml)\b/i.test(response.headers.get('Content-Type') ?? '')) return false;
    const document = new DOMParser().parseFromString(await response.text(), 'application/xml');
    return !document.querySelector('parsererror') && document.documentElement.tagName === 'rss'
      && document.documentElement.getAttribute('version') === '2.0'
      && !!document.querySelector('channel > title');
  } catch {
    return false;
  }
}

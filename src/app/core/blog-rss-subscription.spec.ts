import { BLOG_RSS_URL, BLOG_RSS_SUBSCRIBE_URL, blogRssIsAvailable } from './blog-rss-subscription';

describe('Blog RSS subscription availability', () => {
  const xml = '<?xml version="1.0"?><rss version="2.0"><channel><title>XcellHost Blog</title><link>https://xcellhost.cloud/insights</link><description>Blog updates</description></channel></rss>';
  function request(body: string, contentType: string, status = 200): typeof fetch {
    return jasmine.createSpy('fetch').and.resolveTo(new Response(body, { status, headers: { 'Content-Type': contentType } }));
  }

  it('uses the direct public endpoint and Feedly’s documented button format', () => {
    expect(BLOG_RSS_URL).toBe('https://xcellhost.cloud/feeds/blog.php');
    expect(decodeURIComponent(BLOG_RSS_SUBSCRIBE_URL.split('/i/subscription/')[1])).toBe('feed/' + BLOG_RSS_URL);
  });

  it('allows a valid RSS response', async () => {
    expect(await blogRssIsAvailable(request(xml, 'application/rss+xml; charset=utf-8'))).toBeTrue();
  });

  it('rejects the live-site HTML fallback even when it returns HTTP 200', async () => {
    expect(await blogRssIsAvailable(request('<!doctype html><html><body><app-root></app-root></body></html>', 'text/html'))).toBeFalse();
  });

  it('rejects PHP source or HTML falsely labelled as XML', async () => {
    expect(await blogRssIsAvailable(request('<?php echo "not executed";', 'application/rss+xml'))).toBeFalse();
    expect(await blogRssIsAvailable(request('<html><body>Website</body></html>', 'application/xml'))).toBeFalse();
  });

  it('rejects failures and malformed RSS without sending users to Feedly', async () => {
    expect(await blogRssIsAvailable(request(xml, 'application/rss+xml', 503))).toBeFalse();
    expect(await blogRssIsAvailable(request('<rss version="2.0"><channel>', 'application/rss+xml'))).toBeFalse();
    const offline = jasmine.createSpy('fetch').and.rejectWith(new Error('Network unavailable'));
    expect(await blogRssIsAvailable(offline)).toBeFalse();
  });
});

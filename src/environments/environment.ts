/**
 * Runtime configuration.
 *
 * Every integration endpoint the original site left blank is collected here.
 * Fill one in and the matching feature starts posting; leave it empty and the
 * form falls back to opening WhatsApp / email instead, exactly as before.
 */
export const environment = {
  production: true,

  /** Base href the site is served from. '/' for a domain root. */
  baseHref: '/',

  /** POST target for the quote-cart checkout form. */
  checkoutWebhook: '',
  /** POST target for the free-trial form. */
  trialWebhook: '',
  /** POST target for the callback-request form. */
  callbackWebhook: '',
  /** POST target for the infosheet / presentation download gate. */
  docWebhook: '',
  /** POST target for the partner-programme form. */
  partnerWebhook: '',

  /** Chat completion endpoint for the website assistant. Empty = canned replies only. */
  chatEndpoint: '',
  /** Optional live-answer endpoint for product FAQ blocks. */
  faqApi: '',

  /** Local development uses Angular's proxy.conf.json to avoid browser CORS blocking. */
  strapiUrl: '',

  /** Public Algolia search configuration. Use a read-only Search API key, never an Admin key. */
  algoliaAppId: 'GH7MDMKNPP',
  algoliaIndexName: 'wp_searchable_posts',
  algoliaSearchApiKey: 'c5ceee3640b2b59da15b86069c653367',

  /** Public XcellHost YouTube feed; no API key is exposed in the browser. */
  youtubeChannelId: 'UCChA2em9-NJFlof3MuOe8Qg',
  youtubeFeedApi: '/feeds/youtube.php',
};

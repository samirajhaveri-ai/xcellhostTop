import { getBlogAdvertisement, getBlogAdvertisements } from './blog-advertisement';
import type { CmsBlogPost } from './blog-api.service';

const post = (values: Partial<CmsBlogPost>): CmsBlogPost => ({
  slug: 'article', title: 'Article', category: 'Technology', mainCategory: null,
  subCategory: null, product: null, relatedPages: null,
  ...values,
} as CmsBlogPost);

describe('Blog advertisements', () => {
  it('keeps the supplied Tally campaign creative for Tally articles', () => {
    const advertisement = getBlogAdvertisement(post({ relatedPages: 'tally-on-cloud' }));
    expect(advertisement.image).toContain('tally-on-cloud-blog-banner.jpg');
    expect(advertisement.href).toBe('/tally-on-cloud');
    expect(advertisement.imageOnly).toBeTrue();
  });

  it('selects product-specific campaigns from article metadata', () => {
    expect(getBlogAdvertisement(post({ relatedPages: 'geotrust-ssl-certificates' })).href).toBe('/geotrust-ssl-certificates');
    expect(getBlogAdvertisement(post({ title: 'Microsoft 365 migration guide' })).href).toBe('/microsoft-365-smb');
    expect(getBlogAdvertisement(post({ slug: 'nvidia-h200-gpu-cloud' })).href).toBe('/gpu-cloud');
    expect(getBlogAdvertisement(post({ category: 'Security', title: 'How SIEM works' })).href).toBe('/cloud-security-assessment');
  });

  it('always returns a relevant category or general campaign', () => {
    expect(getBlogAdvertisement(post({ category: 'Productivity' })).title).toBe('Modern Workplace Solutions');
    expect(getBlogAdvertisement(post({ category: 'Uncategorised' })).href).toBe('/cloud-infrastructure');
  });

  it('returns four unique and contextually related campaigns for every article', () => {
    const gpuAds = getBlogAdvertisements(post({ slug: 'nvidia-h200-gpu-cloud' }));
    expect(gpuAds.length).toBe(4);
    expect(new Set(gpuAds.map(advertisement => advertisement.href)).size).toBe(4);
    expect(gpuAds[0].href).toBe('/gpu-cloud');
    expect(gpuAds.map(advertisement => advertisement.href)).toContain('/ai');
    expect(new Set(gpuAds.map(advertisement => advertisement.format)).size).toBe(4);

    const fallbackAds = getBlogAdvertisements(post({ category: 'Uncategorised' }));
    expect(fallbackAds.length).toBe(4);
    expect(new Set(fallbackAds.map(advertisement => advertisement.href)).size).toBe(4);
  });
});

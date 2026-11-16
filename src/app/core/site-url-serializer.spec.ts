import { SiteUrlSerializer } from './site-url-serializer';

describe('SiteUrlSerializer', () => {
  const serializer = new SiteUrlSerializer();

  it('matches a prerendered directory URL to the same segments as a local URL', () => {
    const paths = (url: string) => serializer.parse(url).root.children['primary'].segments.map(segment => segment.path);
    expect(paths('/performance-cloud/')).toEqual(paths('/performance-cloud'));
    expect(paths('/company/about/')).toEqual(paths('/company/about'));
    expect(paths('/missing-page/')).toEqual(['missing-page']);
  });

  it('preserves query values, fragments, encoded path separators and the root', () => {
    const tree = serializer.parse('/performance-cloud/?next=%2Fcloud%2F#pricing');
    expect(tree.queryParams['next']).toBe('/cloud/');
    expect(tree.fragment).toBe('pricing');
    expect(serializer.serialize(serializer.parse('/cloud%2Fservers/'))).toBe('/cloud%2Fservers');
    expect(serializer.serialize(serializer.parse('/'))).toBe('/');
    expect(serializer.parse('/?next=/#section/').fragment).toBe('section/');
  });
});

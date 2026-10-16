import { computed, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlogApiService, CmsBlogPost, CmsInsightResource } from './blog-api.service';
import { CaseStudiesApiService } from './case-studies-api.service';
import { CaseStudy } from '../data/case-studies.data';
import { MEGA_MENU } from '../data/nav.data';
import { SiteSearchService } from './site-search.service';

describe('Current website search inventory', () => {
  let posts: BehaviorSubject<readonly CmsBlogPost[]>;
  let useCases: BehaviorSubject<readonly CmsInsightResource[]>;
  let studies: BehaviorSubject<readonly CaseStudy[]>;
  let service: SiteSearchService;
  const post = (overrides: Partial<CmsBlogPost> = {}): CmsBlogPost => ({
    title: 'Orion Cloud launch', slug: 'orion-cloud-launch', description: 'New cloud capability',
    content: 'Encrypted collaboration with a lunar relay.', category: 'Cloud', author: 'Editorial Team',
    publishedAt: '2026-10-16T08:00:00Z', date: '2026-10-16', ...overrides,
  } as CmsBlogPost);

  beforeEach(() => {
    posts = new BehaviorSubject<readonly CmsBlogPost[]>([]);
    useCases = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    studies = new BehaviorSubject<readonly CaseStudy[]>([]);
    TestBed.configureTestingModule({ providers: [
      provideRouter([
        { path: 'fresh-orion-page', title: 'Orion Quantum Console | XcellHost', children: [] },
        { path: 'orion-old', redirectTo: 'fresh-orion-page', pathMatch: 'full' },
        { path: 'orion-parent', children: [{ path: 'child', data: { searchTitle: 'Lunar nested page' }, children: [] }] },
        { path: ':slug', children: [] },
      ]),
      { provide: BlogApiService, useValue: { posts$: posts, useCases$: useCases, postsStatus: signal('ready') } },
      { provide: CaseStudiesApiService, useValue: { studies$: studies } },
    ] });
    service = TestBed.inject(SiteSearchService);
  });

  it('discovers routes by their real title, nested paths, and new routes after resetConfig', () => {
    expect(service.search('Orion Quantum')[0].url).toBe('/fresh-orion-page');
    expect(service.search('Lunar nested')[0].url).toBe('/orion-parent/child');
    const router = TestBed.inject(Router);
    router.resetConfig([...router.config, { path: 'new-pulsar-dashboard', title: 'Pulsar Telemetry', children: [] }]);
    service.refreshInventory();
    expect(service.search('Pulsar Telemetry')[0].url).toBe('/new-pulsar-dashboard');
    expect(service.browse().some(item => item.url.includes(':'))).toBeFalse();
  });

  it('uses explicit menu destinations, collapses redirects, and excludes external links', () => {
    const items = MEGA_MENU[0].tabs[0].groups[0].items;
    const originalLength = items.length;
    try {
      items.push(
        { title: 'Orion Research Control', desc: 'Newest menu content', pill: null, href: '/orion-old' },
        { title: 'External Orion Secret', desc: '', pill: null, href: 'https://external.example/orion' },
      );
      service.refreshInventory();
      expect(service.search('Orion Research')[0].url).toBe('/fresh-orion-page');
      expect(service.browse().filter(item => item.url === '/fresh-orion-page').length).toBe(1);
      expect(service.browse().some(item => item.url === '/orion-research-control')).toBeFalse();
      expect(service.search('External Orion Secret')).toEqual([]);
    } finally {
      items.splice(originalLength);
    }
  });

  it('reactively adds, edits, and removes CMS results without a new search query', () => {
    const results = computed(() => service.search('lunar relay'));
    expect(results()).toEqual([]);
    posts.next([post()]);
    expect(results()[0].url).toBe('/insights/orion-cloud-launch');
    posts.next([post({ slug: 'updated-orion', title: 'Updated Orion guide' })]);
    expect(results()[0].url).toBe('/insights/updated-orion');
    posts.next([]);
    expect(results()).toEqual([]);
  });

  it('matches full text, taxonomy and product references, with newest equally relevant articles first', () => {
    posts.next([
      post({ slug: 'older-orion', publishedAt: '2026-09-01T08:00:00Z' }),
      post({ relatedPages: 'quantum-console', product: 'Pulsar Toolkit', mainCategory: 'AI', subCategory: 'Knowledge Systems' }),
    ]);
    expect(service.search('Orion Cloud launch')[0].url).toBe('/insights/orion-cloud-launch');
    expect(service.search('quantum console').some(item => item.url === '/insights/orion-cloud-launch')).toBeTrue();
    expect(service.search('Pulsar Toolkit')[0].kind).toBe('Blog');
    expect(service.search('Knowledge Systems')[0].kind).toBe('Blog');
    expect(service.featured()[0].url).toBe('/insights/orion-cloud-launch');
  });

  it('includes published use cases and customer stories with working detail destinations', () => {
    useCases.next([{ ...post({ title: 'Orion migration', slug: 'orion-migration' }), kind: 'use-case' } as CmsInsightResource]);
    studies.next([{
      id: 'orion-customer', headline: 'Orion business outcome', summary: 'Customer migration',
      challenge: 'Fragmented records', solution: 'Unified observatory', impact: ['Faster decisions'],
      services: ['Orion'], industry: 'Science',
    } as unknown as CaseStudy]);
    expect(service.search('Orion migration').some(item => item.url === '/use-cases/orion-migration')).toBeTrue();
    expect(service.search('Unified observatory')[0].url).toBe('/case-studies/orion-customer');
  });
});

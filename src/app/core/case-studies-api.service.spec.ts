import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';
import { CaseStudiesApiService } from './case-studies-api.service';

describe('CaseStudiesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [provideHttpClient(), provideHttpClientTesting()],
  }));

  it('normalises hierarchical Strapi case studies', fakeAsync(() => {
    const service = TestBed.inject(CaseStudiesApiService);
    const http = TestBed.inject(HttpTestingController);
    let count = 0;
    let category = '';
    let coverUrl = '';
    const subscription = service.studies$.subscribe((studies) => {
      count = studies.length;
      category = studies[0]?.mainCategory ?? '';
      coverUrl = studies[0]?.coverImageUrl ?? '';
    });
    tick(0);
    http.expectOne((request) => request.url.endsWith('/api/case-studies')).flush({ data: [{
      documentId: 'cms-1', slug: 'secure-retail', mainCategory: 'Cybersecurity',
      subCategory: 'Retail', industry: 'Retail', profile: 'Enterprise', metric: '65%',
      metricLabel: 'Faster response', summary: 'A faster response workflow.',
      challenge: 'Slow triage.', solution: 'Managed SOC.', impact: ['Clear ownership'],
      services: ['Managed SOC'],
      coverImage: { url: '/uploads/secure-retail.jpg', alternativeText: 'Retail security team' },
    }] });
    expect(count).toBe(CASE_STUDIES.length + 1);
    expect(category).toBe('Cybersecurity');
    expect(coverUrl).toContain('/uploads/secure-retail.jpg');
    subscription.unsubscribe();
    http.verify();
  }));

  it('uses local stories when Strapi is unavailable', fakeAsync(() => {
    const service = TestBed.inject(CaseStudiesApiService);
    const http = TestBed.inject(HttpTestingController);
    let count = 0;
    const subscription = service.studies$.subscribe((studies) => count = studies.length);
    tick(0);
    http.expectOne((request) => request.url.endsWith('/api/case-studies')).flush({}, { status: 404, statusText: 'Not Found' });
    http.expectOne((request) => request.url.endsWith('/api/blogs')).flush({ data: [] });
    expect(count).toBe(CASE_STUDIES.length);
    subscription.unsubscribe();
    http.verify();
  }));

  it('uses Blog entries marked Case Study when a separate collection is unavailable', fakeAsync(() => {
    const service = TestBed.inject(CaseStudiesApiService);
    const http = TestBed.inject(HttpTestingController);
    let selected: CaseStudy | undefined;
    const subscription = service.studies$.subscribe((studies) => {
      selected = studies.find((study) => study.id === 'aegis-dpdpa');
    });
    tick(0);
    http.expectOne((request) => request.url.endsWith('/api/case-studies')).flush({}, { status: 404, statusText: 'Not Found' });
    http.expectOne((request) => request.url.endsWith('/api/blogs')).flush({ data: [{
      documentId: 'blog-case-1',
      title: 'Aegis Finance improves DPDPA readiness',
      slug: 'aegis-dpdpa',
      description: 'Privacy work moved into governed workflows.',
      author: 'Aegis Finance',
      category: 'Case Study',
      content: 'Industry: BFSI\nProfile: Enterprise\nMetric: 8 weeks\nOutcome: Core workflow readiness\nServices: SecureSetu, vDPO\n\n## Challenge\nEvidence was spread across trackers.\n\n## Solution\nXcellHost configured privacy workflows.\n\n## Results\n- Owners were assigned\n- Evidence became searchable',
      coverImage: { url: '/uploads/aegis.jpg' },
    }] });
    expect(selected?.customer).toBe('Aegis Finance');
    expect(selected?.challenge).toBe('Evidence was spread across trackers.');
    expect(selected?.impact).toEqual(['Owners were assigned', 'Evidence became searchable']);
    expect(selected?.coverImageUrl).toContain('/uploads/aegis.jpg');
    subscription.unsubscribe();
    http.verify();
  }));
});

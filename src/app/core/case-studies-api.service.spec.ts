import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CASE_STUDIES } from '../data/case-studies.data';
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
    const subscription = service.studies$.subscribe((studies) => {
      count = studies.length;
      category = studies[0]?.mainCategory ?? '';
    });
    tick(0);
    http.expectOne((request) => request.url.endsWith('/api/case-studies')).flush({ data: [{
      documentId: 'cms-1', slug: 'secure-retail', mainCategory: 'Cybersecurity',
      subCategory: 'Retail', industry: 'Retail', profile: 'Enterprise', metric: '65%',
      metricLabel: 'Faster response', summary: 'A faster response workflow.',
      challenge: 'Slow triage.', solution: 'Managed SOC.', impact: ['Clear ownership'],
      services: ['Managed SOC'],
    }] });
    expect(count).toBe(1);
    expect(category).toBe('Cybersecurity');
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
    expect(count).toBe(CASE_STUDIES.length);
    subscription.unsubscribe();
    http.verify();
  }));
});

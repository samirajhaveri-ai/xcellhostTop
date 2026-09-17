import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { BlogApiService, CmsBlogPost, CmsInsightResource } from './blog-api.service';

describe('Blog API pagination', () => {
  it('loads all CMS pages before publishing the complete list', fakeAsync(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const http = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(BlogApiService);
    let received: readonly CmsBlogPost[] = [];
    const subscription = service.posts$.subscribe(posts => received = posts);
    tick(0);
    const first = http.expectOne(request => request.params.get('pagination[page]') === '1');
    const data = Array.from({ length: 100 }, (_, index) => ({ documentId: String(index), category: 'Cloud' }));
    first.flush({ data, meta: { pagination: { page: 1, pageCount: 2 } } });
    expect(received.length).toBe(0);
    const second = http.expectOne(request => request.params.get('pagination[page]') === '2');
    second.flush({ data: [{ documentId: '100', category: 'Cloud' }], meta: { pagination: { page: 2, pageCount: 2 } } });
    expect(received.length).toBe(101);
    expect(received[100].documentId).toBe('100');
    subscription.unsubscribe();
    http.verify();
  }));

  it('maps new YouTube channel uploads into categorised insight cards', fakeAsync(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const http = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(BlogApiService);
    let received: readonly CmsBlogPost[] = [];
    const subscription = service.videos$.subscribe(videos => received = videos as readonly CmsBlogPost[]);
    tick(0);

    const request = http.expectOne(req => req.url.includes('api.rss2json.com'));
    expect(request.request.params.get('rss_url')).toContain('UCChA2em9-NJFlof3MuOe8Qg');
    request.flush({
      status: 'ok',
      items: [{
        title: 'DPDPA &amp; Consent Management',
        pubDate: '2026-07-23 14:40:47',
        link: 'https://www.youtube.com/watch?v=xpDGGwaCiWM',
        guid: 'yt:video:xpDGGwaCiWM',
        author: 'XcellHost Cloud Services',
        thumbnail: 'https://i.ytimg.com/vi/xpDGGwaCiWM/hqdefault.jpg',
        description: '',
        content: '',
      }],
    });

    expect(received.length).toBe(1);
    expect(received[0].title).toBe('DPDPA & Consent Management');
    expect(received[0].category).toBe('DPDPA');
    expect(received[0].coverImageUrl).toContain('xpDGGwaCiWM');
    subscription.unsubscribe();
    http.verify();
  }));

  it('loads use cases with blog taxonomy fields and resolves them by slug', fakeAsync(() => {
    TestBed.configureTestingModule({ providers: [provideHttpClient(), provideHttpClientTesting()] });
    const http = TestBed.inject(HttpTestingController);
    const service = TestBed.inject(BlogApiService);
    let received: readonly CmsInsightResource[] = [];
    let selectedDocumentId = '';
    const listSubscription = service.useCases$.subscribe(items => received = items);
    tick(0);

    const request = http.expectOne(req => req.url.endsWith('/api/use-cases'));
    expect(request.request.params.get('populate')).toBe('coverImage');
    request.flush({
      data: [{
        id: 1,
        documentId: 'use-case-1',
        title: 'Tally migration success',
        slug: 'tally-migration-success',
        description: 'A successful migration.',
        content: 'Use case body',
        author: 'XcellHost Team',
        date: '2026-09-17',
        time: '09:00',
        category: 'Accounting',
        mainCategory: 'Web Presence',
        subCategory: 'SMB Cloud',
        product: 'Tally on Cloud',
        relatedPages: 'tally-on-cloud',
      }],
      meta: { pagination: { page: 1, pageCount: 1 } },
    });

    expect(received.length).toBe(1);
    expect(received[0].kind).toBe('use-case');
    expect(received[0].product).toBe('Tally on Cloud');
    expect(received[0].relatedPages).toBe('tally-on-cloud');

    const detailSubscription = service.watchUseCaseBySlug('tally-migration-success')
      .subscribe(item => selectedDocumentId = item?.documentId ?? '');
    expect(selectedDocumentId).toBe('use-case-1');
    detailSubscription.unsubscribe();
    listSubscription.unsubscribe();
    http.verify();
  }));
});

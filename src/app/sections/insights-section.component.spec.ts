import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { BlogApiService, CmsInsightResource } from '../core/blog-api.service';
import { CaseStudiesApiService } from '../core/case-studies-api.service';
import { CatalogService, slugify } from '../core/catalog.service';
import { PRODUCT_VIDEOS } from '../data/products.data';
import { InsightsSectionComponent } from './insights-section.component';

describe('SMB Tools and VPS insight videos', () => {
  let feed: BehaviorSubject<readonly CmsInsightResource[]>;

  const video = (title: string, extra: Partial<CmsInsightResource> = {}) => ({
    title, videoUrl: 'https://youtu.be/eb8jyqFV6fM',
    relatedPages: null, product: null, ...extra,
  }) as CmsInsightResource;

  beforeEach(() => {
    feed = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    TestBed.configureTestingModule({
      imports: [InsightsSectionComponent],
      providers: [
        provideRouter([]),
        { provide: BlogApiService, useValue: { posts$: of([]), videos$: feed } },
        { provide: CaseStudiesApiService, useValue: { studies$: of([]) } },
      ],
    });
  });

  function render(slug: string) {
    const fixture = TestBed.createComponent(InsightsSectionComponent);
    fixture.componentRef.setInput('pageSlug', slug);
    fixture.componentInstance.activeView.set('videos');
    fixture.detectChanges();
    return fixture;
  }

  it('shows an app-specific empty state for every SMB Tools page instead of cloud videos', () => {
    feed.next([video('Tally on Cloud'), video('Cloud Drive'), video('Cloud Backup')]);
    const catalog = TestBed.inject(CatalogService);
    const apps = catalog.slugs.filter(slug => catalog.entryBySlug(slug)?.group === 'SMB Tools');
    expect(apps.length).toBe(11);
    for (const slug of apps) {
      const fixture = render(slug);
      const el: HTMLElement = fixture.nativeElement;
      const name = catalog.entryBySlug(slug)!.name;
      expect(el.querySelectorAll('.insights-video-card').length).withContext(slug).toBe(0);
      expect(el.querySelector('h2')?.textContent).toContain(name);
      expect(el.querySelector('[role="status"]')?.textContent).toContain(`No videos are available for ${name}`);
      expect(el.querySelector('.insights-empty a')?.getAttribute('href')).toContain(`service=${slug}`);
      fixture.destroy();
    }
  });

  it('uses related channel videos and filters sibling apps on navigation', () => {
    feed.next([video('Smart QR & NFC Automation walkthrough'), video('Billing Software overview')]);
    const fixture = render('smart-qr-and-nfc-automation');
    expect(fixture.nativeElement.querySelectorAll('.insights-video-card').length).toBe(1);
    expect(fixture.nativeElement.querySelector('.insights-video-card h3').textContent).toContain('Smart QR');
    fixture.componentRef.setInput('pageSlug', 'billing-software');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.insights-video-card').length).toBe(1);
    expect(fixture.nativeElement.querySelector('.insights-video-card h3').textContent).toContain('Billing Software');
  });

  it('shows a product-specific empty state on all 15 VPS pages', () => {
    feed.next([video('Tally on Cloud'), video('Cloud Drive'), video('Cloud Backup')]);
    const catalog = TestBed.inject(CatalogService);
    const pages = catalog.slugs.filter(slug => catalog.entryBySlug(slug)?.group === 'VPS Servers');
    expect(pages.length).toBe(15);
    for (const slug of pages) {
      const fixture = render(slug);
      const el: HTMLElement = fixture.nativeElement;
      const name = catalog.entryBySlug(slug)!.name;
      expect(el.querySelectorAll('.insights-video-card').length).withContext(slug).toBe(0);
      expect(el.querySelector('h2')?.textContent).toContain(name);
      expect(el.querySelector('[role="status"]')?.textContent).toContain(`No videos are available for ${name}`);
      expect(el.querySelector('.insights-empty a')?.getAttribute('href')).toContain(`service=${slug}`);
      fixture.destroy();
    }
  });

  it('matches each VPS product without including videos for sibling products', () => {
    const catalog = TestBed.inject(CatalogService);
    const pages = catalog.slugs.filter(slug => catalog.entryBySlug(slug)?.group === 'VPS Servers');
    feed.next(pages.map(slug => video(`${catalog.entryBySlug(slug)!.name} overview`)));
    const fixture = render(pages[0]);
    for (const slug of pages) {
      fixture.componentRef.setInput('pageSlug', slug);
      fixture.detectChanges();
      expect(fixture.componentInstance.resolvedVideos()?.map(item => item.title))
        .withContext(slug).toEqual([`${catalog.entryBySlug(slug)!.name} overview`]);
    }
  });

  it('keeps ERPNext page assignments working with its established route', () => {
    feed.next([
      video('ERPNext setup', { relatedPages: 'erp-next-hosting' }),
      video('ERPNext Hosting overview', { relatedPages: 'odoo-hosting' }),
    ]);
    const fixture = render('erp-next-hosting');
    expect(fixture.componentInstance.resolvedVideos()?.map(item => item.title)).toEqual(['ERPNext setup']);
  });

  it('accepts matching page assignments and respects assignments to another app', () => {
    feed.next([
      video('Getting started', { relatedPages: '/BILLING-SOFTWARE/' }),
      video('Billing Software guide', { relatedPages: 'hrm-attendance' }),
    ]);
    const fixture = render('billing-software');
    expect(fixture.componentInstance.resolvedVideos()?.map(item => item.title)).toEqual(['Getting started']);
  });

  it('keeps explicit video inputs, including an intentionally empty list', () => {
    feed.next([video('Billing Software overview')]);
    const fixture = render('billing-software');
    const explicit = [{ title: 'Selected video', src: TestBed.inject(DomSanitizer)
      .bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/a-Jy7VV13Do') }];
    fixture.componentRef.setInput('videos', explicit);
    fixture.detectChanges();
    expect(fixture.componentInstance.resolvedVideos()).toBe(explicit);
    fixture.componentRef.setInput('videos', []);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.insights-video-card').length).toBe(0);
    expect(fixture.componentInstance.videosLoading()).toBeFalse();
  });

  it('uses the existing product video catalog and removes duplicate channel entries', () => {
    PRODUCT_VIDEOS['Billing Software'] = ['eb8jyqFV6fM', ''];
    try {
      feed.next([video('Billing Software overview')]);
      const fixture = render(slugify('Billing Software'));
      expect(fixture.componentInstance.resolvedVideos()?.length).toBe(1);
      expect(fixture.componentInstance.resolvedVideos()?.[0].title).toContain('Product Intro');
    } finally {
      delete PRODUCT_VIDEOS['Billing Software'];
    }
  });

  it('does not embed invalid or non-YouTube sources', () => {
    feed.next([video('Billing Software', { videoUrl: 'https://example.com/watch?v=eb8jyqFV6fM' })]);
    expect(render('billing-software').componentInstance.resolvedVideos()).toEqual([]);
  });

  it('retains the general video cards on the homepage and other service pages', () => {
    for (const slug of ['', 'tally-on-cloud']) {
      const fixture = render(slug);
      expect(fixture.nativeElement.querySelectorAll('.insights-video-card').length).toBe(3);
      fixture.destroy();
    }
  });
});

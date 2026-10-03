import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';
import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { CaseStudiesApiService } from '../core/case-studies-api.service';
import { SeoService } from '../core/seo.service';
import { InsightsPage } from './insights.page';
import { BlogPage } from './blog.page';

@Component({ standalone: true, template: '' })
class ArticleStub {}

describe('Insights card navigation', () => {
  it('renders the shared product URL and preserves direct links to both published articles', async () => {
    const common = {
      relatedPages: 'acronis-genai-protection', category: 'Data Protection',
      description: 'AI protection', content: '# Protect your AI', author: 'XcellHost',
      date: '2026-09-23', time: '09:00',
    };
    const older = { ...common, slug: 'acronis-gen-ai-protection-is-now-live-secure-the-ai-era',
      title: 'Acronis GenAI launch', publishedAt: '2026-09-22T10:00:00Z' } as CmsBlogPost;
    const newer = { ...common, slug: 'acronis-gen-ai-protection-secure-generative-ai-usage-across-your-business-1',
      title: 'Acronis GenAI business protection', publishedAt: '2026-09-23T10:00:00Z' } as CmsBlogPost;
    await TestBed.configureTestingModule({
      providers: [
        provideRouter([{ path: 'insights/:slug', component: BlogPage }]),
        { provide: BlogApiService, useValue: { posts$: of([older, newer]) } },
        { provide: SeoService, useValue: { set: () => {}, setJsonLd: () => {} } },
      ],
    }).compileComponents();
    const harness = await RouterTestingHarness.create();
    for (const [slug, expected] of [
      ['acronis-genai-protection', newer], [older.slug, older], [newer.slug, newer],
    ] as const) {
      const page = await harness.navigateByUrl('/insights/' + slug, BlogPage);
      expect(page.post()?.slug).toBe(expected.slug);
      expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe(expected.title);
      expect(harness.routeNativeElement?.textContent).not.toContain('Article not found');
    }
    const page = await harness.navigateByUrl('/insights/missing-article', BlogPage);
    expect(page.post()).toBeNull();
    expect(harness.routeNativeElement?.querySelector('h1')?.textContent).toBe('Article not found');
  });

  it('opens the featured CMS article instead of the insights index', async () => {
    const slug = 'acronis-advanced-backup-complete-guide-to-modern-business-data-protection';
    const post = { documentId: 'acronis', slug, title: 'Acronis Advanced Backup', category: 'Data Protection', description: 'Backup and recovery', content: 'Article content', date: '2026-09-22', time: '02:00:00.000' } as CmsBlogPost;
    await TestBed.configureTestingModule({
      imports: [InsightsPage],
      providers: [
        provideRouter([{ path: 'insights/:slug', component: ArticleStub }]),
        { provide: BlogApiService, useValue: { posts$: of([post]), videos$: of([]), useCases$: of([]), documents$: of([]) } },
        { provide: CaseStudiesApiService, useValue: { studies$: of([]) } },
        { provide: SeoService, useValue: { set: () => {} } },
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(InsightsPage);
    fixture.detectChanges();
    await fixture.whenStable();
    const card = fixture.nativeElement.querySelector('a.insights-lead') as HTMLAnchorElement;
    expect(card).not.toBeNull();
    expect(card.getAttribute('href')).toBe('/insights/' + slug);
    card.click();
    await fixture.whenStable();
    expect(TestBed.inject(Router).url).toBe('/insights/' + slug);
  });
});

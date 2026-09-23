import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { of } from 'rxjs';
import { BlogApiService, CmsBlogPost } from '../core/blog-api.service';
import { SeoService } from '../core/seo.service';
import { InsightsPage } from './insights.page';

@Component({ standalone: true, template: '' })
class ArticleStub {}

describe('Insights card navigation', () => {
  it('opens the featured CMS article instead of the insights index', async () => {
    const slug = 'acronis-advanced-backup-complete-guide-to-modern-business-data-protection';
    const post = { documentId: 'acronis', slug, title: 'Acronis Advanced Backup', category: 'Data Protection', description: 'Backup and recovery', content: 'Article content', date: '2026-09-22', time: '02:00:00.000' } as CmsBlogPost;
    await TestBed.configureTestingModule({
      imports: [InsightsPage],
      providers: [
        provideRouter([{ path: 'insights/:slug', component: ArticleStub }]),
        { provide: BlogApiService, useValue: { posts$: of([post]), videos$: of([]), useCases$: of([]), documents$: of([]) } },
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

import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { of } from 'rxjs';
import { BlogApiService, CmsArticle } from '../core/blog-api.service';
import { SeoService } from '../core/seo.service';
import { BlogPage } from './blog.page';

describe('Article table of contents', () => {
  const posts = ['rtx-pro-6000', 'future-blog'].map(slug => ({
    slug, title: slug, author: 'XcellHost', description: 'Description',
    content: '# Overview\n\nIntroduction\n\n## Benefits\n\nDetails\n\n## Benefits\n\nMore details',
    category: 'Cloud', date: '2026-09-23', time: '05:00',
  } as CmsArticle));

  for (const base of ['insights', 'use-cases']) {
    it(`keeps ${base} links on the article and targets each unique heading`, async () => {
      await TestBed.configureTestingModule({
        providers: [
          provideRouter([
            { path: 'insights/:slug', component: BlogPage },
            { path: 'use-cases/:slug', component: BlogPage, data: { contentType: 'use-case' } },
          ], withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'top' }),
          withRouterConfig({ onSameUrlNavigation: 'reload' })),
          { provide: BlogApiService, useValue: { posts$: of(posts), useCases$: of(posts) } },
          { provide: SeoService, useValue: { set: () => {}, setJsonLd: () => {} } },
        ],
      }).compileComponents();
      const harness = await RouterTestingHarness.create();
      const router = TestBed.inject(Router);

      for (const post of posts) {
        const path = `/${base}/${post.slug}?source=test`;
        const page = await harness.navigateByUrl(path, BlogPage);
        harness.detectChanges();
        const links = Array.from(harness.routeNativeElement!.querySelectorAll<HTMLAnchorElement>('.article-toc a'));
        expect(links.length).toBe(3);
        expect(new Set(page.headings().map(heading => heading.id)).size).toBe(3);

        for (const link of links) {
          const id = new URL(link.href).hash.slice(1);
          expect(link.getAttribute('href')).toBe(`${path}#${id}`);
          expect(harness.routeNativeElement!.querySelector(`[id="${id}"]`)?.tagName).toBe('H2');
          link.click();
          await harness.fixture.whenStable();
          expect(router.url).toBe(`${path}#${id}`);
          expect(harness.routeDebugElement!.componentInstance).toBe(page);
        }
      }
    });
  }
});

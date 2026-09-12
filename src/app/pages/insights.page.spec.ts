import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { BlogApiService, CmsBlogPost, CmsInsightResource } from '../core/blog-api.service';
import { SeoService } from '../core/seo.service';
import { InsightsPage } from './insights.page';

describe('Insights pagination', () => {
  let posts: BehaviorSubject<readonly CmsBlogPost[]>;
  let videos: BehaviorSubject<readonly CmsInsightResource[]>;
  let useCases: BehaviorSubject<readonly CmsInsightResource[]>;
  let page: InsightsPage;
  const makePosts = (count: number) => Array.from({ length: count }, (_, index) => ({
    documentId: String(index), category: index < 21 ? 'Cloud' : 'Security',
  } as CmsBlogPost));

  beforeEach(() => {
    posts = new BehaviorSubject<readonly CmsBlogPost[]>(makePosts(41));
    videos = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    useCases = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    TestBed.configureTestingModule({ providers: [
      { provide: BlogApiService, useValue: { posts$: posts, videos$: videos, useCases$: useCases } },
      { provide: SeoService, useValue: { set: () => {} } },
    ] });
    page = TestBed.runInInjectionContext(() => new InsightsPage());
  });

  it('shows 20 distinct articles per full page, including the top story', () => {
    const ids: string[] = [];
    for (let number = 1; number <= 3; number++) {
      page.currentPage.set(number);
      const displayed = [page.featuredVisible()!, ...page.gridPosts()];
      expect(displayed.length).toBe(number === 3 ? 1 : 20);
      ids.push(...displayed.map(post => post.documentId));
    }
    expect(new Set(ids).size).toBe(41);
    expect(page.rangeStart()).toBe(41);
    expect(page.rangeEnd()).toBe(41);
  });

  it('resets pagination when changing topic and counts only matching posts', () => {
    page.currentPage.set(3);
    page.selectCategory('Cloud');
    expect(page.currentPage()).toBe(1);
    expect(page.visible().length).toBe(21);
    expect(page.totalPages()).toBe(2);
    expect(page.pagedPosts().every(post => post.category === 'Cloud')).toBeTrue();
  });

  it('clamps the current page after CMS posts are removed and handles an empty list', () => {
    page.currentPage.set(3);
    posts.next(makePosts(20));
    expect(page.currentPage()).toBe(1);
    expect(page.gridPosts().length).toBe(19);
    posts.next([]);
    expect(page.featuredVisible()).toBeNull();
    expect(page.rangeStart()).toBe(0);
    expect(page.rangeEnd()).toBe(0);
  });

  it('rejects invalid navigation and focuses the results for a valid page', () => {
    const results = jasmine.createSpyObj<HTMLElement>('results', ['focus', 'scrollIntoView']);
    page.goToPage(0, results);
    page.goToPage(4, results);
    expect(page.currentPage()).toBe(1);
    expect(results.focus).not.toHaveBeenCalled();
    page.goToPage(2, results);
    expect(page.currentPage()).toBe(2);
    expect(results.focus).toHaveBeenCalled();
    expect(results.scrollIntoView).toHaveBeenCalled();
  });

  it('filters the selected tab by search text and resets pagination', () => {
    videos.next([
      { documentId: 'video-1', kind: 'video', title: 'Tally setup guide', category: 'Tally' },
      { documentId: 'video-2', kind: 'video', title: 'Backup walkthrough', category: 'Backup' },
    ] as CmsInsightResource[]);
    page.selectTab('Videos');
    page.currentPage.set(2);
    page.search({ target: { value: 'tally' } } as unknown as Event);
    expect(page.currentPage()).toBe(1);
    expect(page.visible().map(item => item.documentId)).toEqual(['video-1']);
    expect(page.resultHeading()).toBe('All Videos');
  });

  it('expands main categories and filters their subcategories', () => {
    expect(page.categoryTree().map(branch => branch.name)).toEqual(['Technology']);
    page.selectMainCategory('Technology');
    expect(page.expandedMain()).toBe('Technology');
    expect(page.visible().length).toBe(41);
    page.selectSubCategory('Technology', 'Security');
    expect(page.visible().length).toBe(20);
    expect(page.visible().every(item => item.subCategory === 'Security')).toBeTrue();
    page.selectMainCategory('Technology');
    expect(page.expandedMain()).toBeNull();
    expect(page.activeSub()).toBe('');
  });
});

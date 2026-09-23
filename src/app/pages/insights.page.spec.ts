import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
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
      provideRouter([]),
      { provide: BlogApiService, useValue: { posts$: posts, videos$: videos, useCases$: useCases, videoStatus: signal('ready') } },
      { provide: SeoService, useValue: { set: () => {} } },
    ] });
    page = TestBed.runInInjectionContext(() => new InsightsPage());
  });

  it('renders clickable video cards and filters even when blogs fail', () => {
    const fixture = TestBed.createComponent(InsightsPage);
    videos.next([{
      documentId: 'youtube-phzscka8jMM', kind: 'video', title: 'Cloud server demo',
      description: 'A cloud demo', content: '', category: 'Cloud', mainCategory: 'Cloud',
      subCategory: 'General', date: '', time: '', author: 'XcellHost',
      videoUrl: 'https://www.youtube.com/watch?v=phzscka8jMM',
      coverImageUrl: 'https://i.ytimg.com/vi/phzscka8jMM/hqdefault.jpg',
    } as CmsInsightResource]);
    posts.error(new Error('CMS unavailable'));
    fixture.detectChanges();
    const tabs = fixture.nativeElement.querySelectorAll('.insights-tabs button');
    tabs[1].click();
    fixture.detectChanges();
    const lead = fixture.nativeElement.querySelector('.insights-lead') as HTMLAnchorElement;
    expect(lead.href).toBe('https://www.youtube.com/watch?v=phzscka8jMM');
    expect(lead.textContent).toContain('Watch on YouTube');
    expect(fixture.componentInstance.categoryCount('Cloud')).toBe(1);
    fixture.componentInstance.query.set('unmatched query');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.insights-empty').textContent).toContain('No matching videos');
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

  it('mirrors menu categories, expands submenus and filters their products', () => {
    expect(page.categoryTree().map(branch => branch.name)).toContain('Web Presence');
    expect(page.categoryTree().map(branch => branch.name)).toContain('Cloud');
    const webPresence = page.categoryTree().find(branch => branch.name === 'Web Presence')!;
    expect(webPresence.children.find(child => child.name === 'SMB Cloud')?.products
      .some(product => product.name === 'Tally on Cloud')).toBeTrue();

    page.selectMainCategory('Security');
    expect(page.expandedMain()).toBe('Security');
    expect(page.visible().length).toBe(20);
    page.selectSubCategory('Security', 'General');
    expect(page.visible().length).toBe(20);
    expect(page.visible().every(item => item.subCategory === 'General')).toBeTrue();
    page.selectProduct('Security', 'General', 'General');
    expect(page.activeProduct()).toBe('General');
    expect(page.visible().length).toBe(20);
    page.selectMainCategory('Security');
    expect(page.expandedMain()).toBeNull();
    expect(page.activeSub()).toBe('');
    expect(page.activeProduct()).toBe('');
  });

  it('assigns a blog to a menu product through relatedPages', () => {
    posts.next([{
      documentId: 'tally-blog',
      category: 'Accounting',
      relatedPages: 'tally-on-cloud',
    } as CmsBlogPost]);

    page.selectProduct('Web Presence', 'SMB Cloud', 'Tally on Cloud');
    expect(page.visible().map(item => item.documentId)).toEqual(['tally-blog']);
  });
});

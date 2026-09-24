import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BlogApiService, CmsBlogPost, CmsInsightResource, INSIGHT_DOCUMENT_TYPES } from '../core/blog-api.service';
import { CaseStudiesApiService } from '../core/case-studies-api.service';
import { SeoService } from '../core/seo.service';
import { CASE_STUDIES } from '../data/case-studies.data';
import { InsightsPage } from './insights.page';

describe('Insights pagination', () => {
  let posts: BehaviorSubject<readonly CmsBlogPost[]>;
  let videos: BehaviorSubject<readonly CmsInsightResource[]>;
  let useCases: BehaviorSubject<readonly CmsInsightResource[]>;
  let documents: BehaviorSubject<readonly CmsInsightResource[]>;
  let page: InsightsPage;
  const makePosts = (count: number) => Array.from({ length: count }, (_, index) => ({
    documentId: String(index), category: index < 21 ? 'Cloud' : 'Security',
  } as CmsBlogPost));

  beforeEach(() => {
    posts = new BehaviorSubject<readonly CmsBlogPost[]>(makePosts(41));
    videos = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    useCases = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    documents = new BehaviorSubject<readonly CmsInsightResource[]>([]);
    TestBed.configureTestingModule({ providers: [
      provideRouter([]),
      { provide: BlogApiService, useValue: { posts$: posts, videos$: videos, useCases$: useCases, documents$: documents, videoStatus: signal('ready') } },
      { provide: CaseStudiesApiService, useValue: { studies$: new BehaviorSubject(CASE_STUDIES) } },
      { provide: SeoService, useValue: { set: () => {} } },
    ] });
    page = TestBed.runInInjectionContext(() => new InsightsPage());
  });

  it('shows all five document tabs with shared categories, search and downloadable cards', () => {
    documents.next(INSIGHT_DOCUMENT_TYPES.map(type => ({
      documentId: type.kind, kind: type.kind, title: 'Tally ' + type.label,
      description: 'Cloud accounting resource', content: '', category: 'Accounting',
      relatedPages: 'tally-on-cloud', date: '2026-09-23', time: '09:00',
      downloadUrl: 'https://example.com/' + type.kind + '.pdf',
    } as CmsInsightResource)));
    const fixture = TestBed.createComponent(InsightsPage);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.insights-tabs button').length).toBe(8);
    expect(fixture.nativeElement.querySelectorAll('.insights-hero-resources a').length).toBe(8);
    for (const type of INSIGHT_DOCUMENT_TYPES) {
      const component = fixture.componentInstance;
      component.selectTab(type.label);
      expect(component.tabCount(type.label)).toBe(1);
      expect(component.resultHeading()).toBe('All ' + type.label);
      component.selectProduct('Web Presence', 'SMB Cloud', 'Tally on Cloud');
      expect(component.visible().length).toBe(1);
      fixture.detectChanges();
      const link = fixture.nativeElement.querySelector('.insights-lead') as HTMLAnchorElement;
      expect(link.href).toBe('https://example.com/' + type.kind + '.pdf');
      expect(link.target).toBe('_blank');
      component.search({ target: { value: 'missing' } } as unknown as Event);
      expect(component.visible().length).toBe(0);
      component.clearSearch();
    }
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

  it('shows customer case studies in All Use Cases and maps them into the sidebar taxonomy', () => {
    page.selectTab('Use Cases');
    expect(page.tabCount('Use Cases')).toBe(CASE_STUDIES.length);
    expect(page.visible().length).toBe(CASE_STUDIES.length);
    expect(page.categoryCount('Web Presence')).toBe(23);
    const smbCloud = page.categoryTree().find(branch => branch.name === 'Web Presence')?.children
      .find(child => child.name === 'SMB Cloud');
    expect(smbCloud?.count).toBe(11);
    expect(smbCloud?.products.find(product => product.name === 'Tally on Cloud')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Cloud Backup')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Cloud Drive')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Advanced Endpoint Security (EDR)')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Remote Monitoring & Mgmt (RMM)')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'SMB Cyber Security Appliance')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Microsoft 365 SMB')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Acronis GenAI Protection')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Cloud Disaster Recovery SMB')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'DPDPA For SMB')?.count).toBe(1);
    expect(smbCloud?.products.find(product => product.name === 'Workforce Analytics')?.count).toBe(1);
    const domains = page.categoryTree().find(branch => branch.name === 'Web Presence')?.children
      .find(child => child.name === 'Domains');
    expect(domains?.count).toBe(3);
    for (const product of [
      'Register a Domain Name', 'Transfer Your Domain', 'Latest Domain Extensions', 'Premium Domains',
      'Domain Protect+', 'Domain Whois Lookup', 'Domain Name Prices', 'Backorder Domains',
      'TLD Directory', 'AI Domain Generator', 'Ai Domain Advisor', 'Bharat Domains',
    ]) {
      expect(domains?.products.find(item => item.name === product)?.count).withContext(product).toBe(1);
    }
    const webHosting = page.categoryTree().find(branch => branch.name === 'Web Presence')?.children
      .find(child => child.name === 'Web Hosting');
    expect(webHosting?.count).toBe(3);
    for (const product of [
      'Windows Hosting', 'Linux Hosting', 'WordPress Hosting', 'Free Domain',
      'AI Website Builder', 'Migrate to XcellHost', 'Website Backup',
    ]) {
      expect(webHosting?.products.find(item => item.name === product)?.count).withContext(product).toBe(1);
    }
    const webTools = page.categoryTree().find(branch => branch.name === 'Web Presence')?.children
      .find(child => child.name === 'Web Tools');
    expect(webTools?.count).toBe(2);
    for (const product of [
      'cPanel Control Panel', 'Plesk Control Panel', 'Webuzo Control Panel', 'CloudLinux',
    ]) {
      expect(webTools?.products.find(item => item.name === product)?.count).withContext(product).toBe(1);
    }
    const requestedGroups: readonly [string, readonly string[]][] = [
      ['Web Security', [
        'Web Security (SiteLock)', 'Web Security (cWatch)', 'Thawte  SSL Certificates',
        'RapidSSL  SSL Certificates', 'CodeGuard Backup', 'HackerGuardian PCI Compliance Scanning',
        'TrustedSite Certifications',
      ]],
      ['Web Design', [
        'Web Design for CA, CS & Lawyers', 'Web Design for SMB', 'Web Design for Enterprise',
        'AI Website Builder',
      ]],
      ['Web Marketing', [
        'WhatsApp For Business', 'WhatsApp Broadcasting', 'Google My Business', 'E-mail Marketing',
        'SMS Marketing', 'Website SEO', 'Transactional Emails',
      ]],
      ['VPS Servers', [
        'Windows VPS', 'Linux VPS', 'n8n VPS', 'OpenClaw VPS', 'Trading VPS', 'Claude VPS',
        'Window 11 VPS', 'Odoo Hosting', 'ERP Next Hosting', 'Sage Hosting',
      ]],
    ];
    for (const [groupName, products] of requestedGroups) {
      const group = page.categoryTree().find(branch => branch.name === 'Web Presence')?.children
        .find(child => child.name === groupName);
      expect(group?.count).withContext(groupName).toBe(1);
      for (const product of products) {
        expect(group?.products.find(item => item.name === product)?.count).withContext(product).toBe(1);
      }
    }
    page.selectProduct('Web Presence', 'SMB Cloud', 'Cloud Backup');
    expect(page.visible().map(item => item.slug)).toEqual(['tally-cloud']);
    expect(page.insightHref(page.visible()[0])).toContain('/case-studies/');
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

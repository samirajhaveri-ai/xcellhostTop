import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';
import { caseStudiesForPage } from './case-study-matching';

describe('caseStudiesForPage', () => {
  it('keeps all studies on the homepage', () => {
    expect(caseStudiesForPage(CASE_STUDIES, [])).toBe(CASE_STUDIES);
  });

  it('matches the service title without including sibling Cloud products', () => {
    expect(caseStudiesForPage(CASE_STUDIES, ['/Cloud-Drive/']).map(study => study.id))
      .toEqual(['cloud-drive-collaboration']);
  });

  it('matches backup service aliases and multi-service studies', () => {
    expect(caseStudiesForPage(CASE_STUDIES, ['Cloud Backup (Acronis)']).map(study => study.id))
      .toEqual(['tally-cloud', 'ca-continuity']);
  });

  it('matches category pages by their category rather than showing all studies', () => {
    const results = caseStudiesForPage(CASE_STUDIES, ['security']);
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(study => study.mainCategory === 'Cybersecurity')).toBeTrue();
  });

  it('matches subcategory pages', () => {
    const results = caseStudiesForPage(CASE_STUDIES, ['Manufacturing']);
    expect(results.length).toBeGreaterThan(0);
    expect(results.every(study => study.subCategory === 'Manufacturing')).toBeTrue();
  });

  it('does not fall back to unrelated studies for an unmatched service', () => {
    expect(caseStudiesForPage(CASE_STUDIES, ['ai-chat-bot'])).toEqual([]);
  });

  it('uses explicit CMS page assignments before service or category labels', () => {
    const assigned: CaseStudy = { ...CASE_STUDIES[0], relatedPages: ['/gpu-clusters/'] };
    expect(caseStudiesForPage([assigned], ['gpu-clusters'])).toEqual([assigned]);
    expect(caseStudiesForPage([assigned], ['tally-on-cloud'])).toEqual([]);
  });

  it('supports page aliases and blank assignments', () => {
    const study: CaseStudy = { ...CASE_STUDIES[0], relatedPages: [' '] };
    expect(caseStudiesForPage([study], ['custom-page', 'Tally on Cloud'])).toEqual([study]);
  });
});

import { CHECKLISTS, ChecklistResource, ChecklistSection } from '../data/checklists.data';
import type { CmsInsightResource } from './blog-api.service';

export function checklistSections(content: string): ChecklistSection[] {
  const plain = content.replace(/<\/(?:h[1-6]|p|li)>/gi, '\n').replace(/<li[^>]*>/gi, '- ').replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ');
  const sections: { title: string; summary: string; items: string[] }[] = [];
  let current: { title: string; summary: string; items: string[] } | undefined;
  for (const line of plain.split(/\r?\n/)) {
    const heading = /^#{1,6}\s+(.+)$/.exec(line.trim()), item = /^\s*(?:[-*]|\d+[.)])\s+(?:\[[ xX]\]\s*)?(.+)$/.exec(line);
    if (heading) { current = { title: heading[1].trim(), summary: '', items: [] }; sections.push(current); }
    else if (item) { if (!current) { current = { title: 'Review checklist', summary: '', items: [] }; sections.push(current); } current.items.push(item[1].replace(/\*\*/g, '').trim()); }
  }
  return sections.filter(section => section.items.length > 0);
}
export function mergeChecklistResources(items: readonly CmsInsightResource[]): ChecklistResource[] {
  const resources = new Map<string, ChecklistResource>(CHECKLISTS.map(item => [item.slug, item]));
  for (const item of items.filter(item => item.kind === 'checklist')) {
    if (!/^[a-zA-Z0-9][a-zA-Z0-9-]*$/.test(item.slug || '')) continue;
    const fallback = resources.get(item.slug), sections = checklistSections(item.content || '');
    // Keep published documents that provide actual checklist items. Seeded resources
    // remain available while the CMS is loading or temporarily unavailable.
    if (!fallback && !sections.length) continue;
    resources.set(item.slug, {
      slug: item.slug, title: item.title || fallback?.title || 'Checklist', coverTitle: fallback?.coverTitle || [item.title || 'Checklist'],
      topic: fallback?.topic || item.product || item.category || 'Technology', date: /^\d{4}-\d{2}-\d{2}$/.test(item.date || '') ? item.date : fallback?.date || '',
      description: item.description || fallback?.description || 'A practical checklist for a team readiness review.',
      introduction: fallback?.introduction || [item.description || 'Use this checklist to review readiness with your team. Record evidence, open questions and follow-up owners.'],
      audience: fallback?.audience || 'Business and technology teams', sections: sections.length ? sections : fallback!.sections,
      cover: fallback?.cover || '/assets/images/checklists/review-template.svg', accent: fallback?.accent || '#1769d6', author: item.author || fallback?.author || 'XcellHost Editorial',
    });
  }
  return [...resources.values()];
}
export interface ChecklistRequest { fullName: string; email: string; phone: string; company: string; consent: boolean; }
export function validateChecklistRequest(request: ChecklistRequest): Partial<Record<keyof ChecklistRequest, string>> {
  const errors: Partial<Record<keyof ChecklistRequest, string>> = {};
  if (request.fullName.trim().length < 2 || request.fullName.trim().length > 100) errors.fullName = 'Enter your full name (2–100 characters).';
  if (request.email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email.trim())) errors.email = 'Enter a valid email address.';
  const digits = request.phone.replace(/\D/g, '');
  if (!/^[+()\d\s.-]+$/.test(request.phone.trim()) || digits.length < 7 || digits.length > 15) errors.phone = 'Enter a phone number with 7–15 digits.';
  if (request.company.trim().length < 2 || request.company.trim().length > 160) errors.company = 'Enter your company name (2–160 characters).';
  if (!request.consent) errors.consent = 'Confirm that your details may be used for this download request.';
  return errors;
}

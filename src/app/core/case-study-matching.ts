import { CaseStudy } from '../data/case-studies.data';

const aliases: readonly (readonly string[])[] = [
  ['cloud-backup', 'cloud-backup-acronis', 'acronis-backup', 'acronis-cloud-backup'],
  ['cloud', 'cloud-and-infrastructure'],
  ['security', 'cybersecurity'],
  ['data-protection', 'data-protection-and-compliance'],
];

function key(value: string): string {
  const normalised = value.trim().toLowerCase().replace(/^\/+|\/+$/g, '')
    .replace(/&/g, 'and').replace(/[().,/]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return aliases.find(group => group.includes(normalised))?.[0] ?? normalised;
}

/** Exact service/category matching avoids leaking every Cloud story onto each Cloud product. */
export function caseStudiesForPage(studies: readonly CaseStudy[], pageNames: readonly string[]): readonly CaseStudy[] {
  const identities = new Set(pageNames.map(key).filter(Boolean));
  if (!identities.size) return studies;
  return studies.filter(study => {
    // Explicit CMS page assignments take precedence over category or service labels.
    const assigned = (study.relatedPages ?? []).map(key).filter(Boolean);
    const labels = assigned.length ? assigned : [
      ...study.services, study.mainCategory, study.subCategory,
    ].map(key);
    return labels.some(label => identities.has(label));
  });
}

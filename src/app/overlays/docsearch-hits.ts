import type { DocSearchProps } from '@docsearch/js';

type Hits = Parameters<NonNullable<DocSearchProps['transformItems']>>[0];

/** This index stores articles as title/content records rather than DocSearch headings. */
export function normalizeKnowledgebaseHits(hits: Hits): Hits {
  return hits.map(hit => {
    if (hit.hierarchy?.lvl0 && hit.hierarchy?.lvl1) return hit;
    const record = hit as unknown as Record<string, unknown>;
    const title = typeof record['title'] === 'string' ? record['title'] : String(hit.objectID);
    const category = typeof record['category'] === 'string' ? record['category'] : 'Knowledgebase';
    const hierarchy = { lvl0: category, lvl1: title, lvl2: null, lvl3: null, lvl4: null, lvl5: null, lvl6: null };
    const escape = (text: string) => text.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!);
    const highlights = hit._highlightResult as typeof hit._highlightResult & { title?: typeof hit._highlightResult.hierarchy.lvl1 };
    const heading = { value: escape(title), matchLevel: 'none' as const, matchedWords: [] };
    const highlightedHierarchy = {
      lvl0: { value: escape(category), matchLevel: 'none' as const, matchedWords: [] },
      lvl1: highlights?.title ?? heading,
      lvl2: { ...heading, value: '' }, lvl3: { ...heading, value: '' },
      lvl4: { ...heading, value: '' }, lvl5: { ...heading, value: '' }, lvl6: { ...heading, value: '' },
    };
    return {
      ...hit, type: 'lvl1', hierarchy,
      _highlightResult: { ...hit._highlightResult, hierarchy: highlightedHierarchy },
      _snippetResult: { ...hit._snippetResult, hierarchy: highlightedHierarchy },
    } as typeof hit;
  });
}

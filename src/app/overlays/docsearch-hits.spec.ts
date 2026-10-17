import { normalizeKnowledgebaseHits } from './docsearch-hits';

describe('Knowledgebase record mapping', () => {
  it('maps the live index title/content format while preserving URLs and highlighted titles', () => {
    const records = [{
      objectID: 'cloud-backup', title: 'Cloud Backup', category: 'Data Protection',
      content: 'Recover your data', url: 'https://xcellhost.cloud/cloud-backup',
      _highlightResult: { title: { value: '<mark>Cloud</mark> Backup', matchLevel: 'full', matchedWords: ['cloud'] } },
    }] as unknown as Parameters<typeof normalizeKnowledgebaseHits>[0];
    const [hit] = normalizeKnowledgebaseHits(records);
    expect(hit.hierarchy.lvl0).toBe('Data Protection');
    expect(hit.hierarchy.lvl1).toBe('Cloud Backup');
    expect(hit._highlightResult.hierarchy.lvl1.value).toBe('<mark>Cloud</mark> Backup');
    expect(hit.url).toBe(records[0].url);
    expect(hit.type).toBe('lvl1');
  });

  it('keeps native DocSearch headings intact and escapes unhighlighted custom titles', () => {
    const native = { hierarchy: { lvl0: 'Docs', lvl1: 'Article' }, type: 'content' } as Parameters<typeof normalizeKnowledgebaseHits>[0][number];
    expect(normalizeKnowledgebaseHits([native])[0]).toBe(native);
    const custom = { objectID: 'one', title: '<img src=x>' } as unknown as typeof native;
    expect(normalizeKnowledgebaseHits([custom])[0]._highlightResult.hierarchy.lvl1.value).toBe('&lt;img src=x&gt;');
  });
});

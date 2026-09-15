import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ProductFaqComponent } from '../sections/product/product-faq.component';
import { CLOUD_GLOSSARY_TERMS, GlossaryCategory } from '../data/cloud-glossary.data';

@Component({
  selector: 'xh-cloud-glossary-page',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent],
  templateUrl: './cloud-glossary.page.html',
  styleUrl: './cloud-glossary.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudGlossaryPage {
  private readonly seo = inject(SeoService);
  readonly faqs: [string, string][] = [
    ['What is cloud computing?', 'Cloud computing delivers servers, storage, databases, networking and software over the internet, usually with flexible consumption-based pricing.'],
    ['What is the difference between public, private and hybrid cloud?', 'Public cloud uses shared provider infrastructure, private cloud is dedicated to one organisation, and hybrid cloud combines both models.'],
    ['How does cloud security work?', 'Cloud security combines identity controls, encryption, network protection, monitoring, backup and shared responsibility between provider and customer.'],
    ['Can XcellHost help us choose a cloud service?', 'Yes. XcellHost can assess your workload, security, compliance, performance and budget requirements before recommending an approach.'],
    ['Is the glossary suitable for non-technical readers?', 'Yes. Every topic is written in clear business language with enough context to support informed conversations.'],
    ['How often is the Cloud Glossary updated?', 'We continually expand and refine the glossary as cloud, cybersecurity, compliance and AI technologies evolve.'],
  ];
  readonly search = signal('');
  readonly activeCategory = signal<'all' | GlossaryCategory>('all');
  readonly categories: { key: 'all' | GlossaryCategory; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'core', label: 'Core concepts' },
    { key: 'service', label: 'Service models & vendors' },
    { key: 'infra', label: 'Infrastructure' },
    { key: 'devops', label: 'DevOps & delivery' },
    { key: 'data', label: 'Data & storage' },
    { key: 'cost', label: 'Cost & compliance' },
  ];
  readonly categoryLabels: Record<GlossaryCategory, string> = {
    core: 'Core concepts', service: 'Service models & vendors', infra: 'Infrastructure',
    devops: 'DevOps & delivery', data: 'Data & storage', cost: 'Cost & compliance',
  };
  readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  readonly glossaryGroups = computed(() => {
    const query = this.search().trim().toLowerCase();
    const category = this.activeCategory();
    const filtered = CLOUD_GLOSSARY_TERMS.filter((item) =>
      (category === 'all' || item.category === category) &&
      (!query || `${item.term} ${item.definition}`.toLowerCase().includes(query)),
    );
    return this.alphabet.map((letter) => ({
      letter,
      terms: filtered.filter((item) => item.term.toUpperCase().startsWith(letter)),
    })).filter((group) => group.terms.length);
  });
  readonly resultCount = computed(() => this.glossaryGroups().reduce((sum, group) => sum + group.terms.length, 0));

  constructor() {
    this.seo.set(
      'Cloud Glossary | Cloud Terms Explained by XcellHost',
      'A practical cloud glossary explaining infrastructure, security, governance, storage, networking and AI terminology.',
      '/under-construction/cloud-glossary/',
    );
  }

  selectCategory(category: 'all' | GlossaryCategory): void { this.activeCategory.set(category); }
  hasGlossaryLetter(letter: string): boolean { return this.glossaryGroups().some((group) => group.letter === letter); }
  termIcon(term: string, category: GlossaryCategory): string {
    const value = term.toLowerCase();
    if (value.includes('amazon web services')) return 'aws';
    if (value.includes('api') || value.includes('cross-connect') || value.includes('web service')) return 'link';
    if (value.includes('application') || value.includes('cluster') || value.includes('container') || value.includes('microservice')) return 'grid';
    if (value.includes('auto') || value.includes('migration') || value.includes('replication') || value.includes('restore')) return 'refresh';
    if (value.includes('server') || value.includes('compute') || value.includes('machine') || value.includes('infrastructure')) return 'server';
    if (value.includes('database') || value.includes('storage') || value.includes('backup') || value.includes('snapshot') || value.includes('data ')) return 'database';
    if (value.includes('security') || value.includes('firewall') || value.includes('iam') || value.includes('encryption') || value.includes('compliance')) return 'shield';
    if (value.includes('network') || value.includes('cdn') || value.includes('region') || value.includes('zone') || value.includes('ingress')) return 'network';
    if (category === 'devops' || value.includes('json') || value.includes('open source')) return 'code';
    if (category === 'cost') return 'cost';
    if (value.includes('availability') || value.includes('latency') || value.includes('uptime') || value.includes('workload')) return 'pulse';
    return 'cloud';
  }
}

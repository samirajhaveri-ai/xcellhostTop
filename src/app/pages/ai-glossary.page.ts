import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { AI_TERMS } from '../data/ai-glossary.data';
import { TrustBarComponent } from '../sections/trust-bar.component';
import { TestimonialsComponent } from '../sections/testimonials.component';
import { DomSanitizer } from '@angular/platform-browser';
import { WORLD_MAP_HTML } from '../data/site.data';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-ai-glossary-page',
  standalone: true,
  imports: [RouterLink, TrustBarComponent, TestimonialsComponent, InsightsSectionComponent],
  templateUrl: './ai-glossary.page.html',
  styleUrl: './security-glossary.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiGlossaryPage {
  readonly worldMap = inject(DomSanitizer).bypassSecurityTrustHtml(WORLD_MAP_HTML);
  private readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly topics = inject(CallbackTopicService);
  readonly aiPlatforms = [
    { name: 'ChatGPT', domain: 'chatgpt.com', url: 'https://chatgpt.com/?q=' },
    { name: 'Perplexity', domain: 'perplexity.ai', url: 'https://www.perplexity.ai/search?q=' },
    { name: 'Claude', domain: 'claude.ai', url: 'https://claude.ai/new?q=' },
    { name: 'Google Gemini', domain: 'gemini.google.com', url: 'https://gemini.google.com/app' },
    { name: 'Grok', domain: 'grok.com', url: 'https://grok.com/?q=' },
  ];
  readonly aiPrompt = encodeURIComponent('Explain artificial intelligence terms from the XcellHost AI Glossary in plain English.');
  requestDoc(kind: DocKind): void { this.docs.ask(kind, 'AI Glossary'); this.overlay.open('doc'); }
  requestCallback(): void { this.topics.ask('AI Glossary'); this.overlay.open('callback'); }
  readonly terms = AI_TERMS;
  readonly query = signal('');
  readonly category = signal('all');
  readonly letter = signal('all');
  readonly letters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '#'];
  readonly categories = [
  {
    "id": "all",
    "label": "All terms"
  },
  {
    "id": "genai",
    "label": "Generative AI"
  },
  {
    "id": "core",
    "label": "Core concepts"
  },
  {
    "id": "safety",
    "label": "Safety & ethics"
  },
  {
    "id": "ml",
    "label": "Machine learning"
  },
  {
    "id": "ops",
    "label": "MLOps & lifecycle"
  },
  {
    "id": "infra",
    "label": "Infrastructure & data"
  }
];
  readonly matchingTerms = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.terms.filter(t => (this.category() === 'all' || t.category === this.category())
      && (!query || `${t.term} ${t.definition}`.toLowerCase().includes(query)));
  });
  readonly availableLetters = computed(() => new Set(this.matchingTerms().map(t => this.initial(t.term))));
  readonly groups = computed(() => this.letters
    .filter(letter => this.letter() === 'all' || this.letter() === letter)
    .map(letter => ({ letter, terms: this.matchingTerms().filter(t => this.initial(t.term) === letter) }))
    .filter(group => group.terms.length));
  readonly count = computed(() => this.groups().reduce((sum, group) => sum + group.terms.length, 0));
  readonly solutions = [
  {
    "title": "Agentic AI",
    "description": "Build, secure and run autonomous AI agents for your business.",
    "path": "/agentic-ai"
  },
  {
    "title": "WAAP",
    "description": "AI-driven web & API protection, fully managed.",
    "path": "/waap-as-a-service"
  },
  {
    "title": "Watchtower",
    "description": "One intelligence layer across every tool in your stack.",
    "path": "/company/watchtower"
  },
  {
    "title": "GPU Cloud",
    "description": "On-demand NVIDIA GPUs for training and inference.",
    "path": "/gpu-cloud"
  }
];
  constructor() {
    inject(SeoService).set('AI Glossary | XcellHost',
      'Explore artificial intelligence terms in plain English. Search by term, category or letter to understand models, agents and AI concepts.', '/ai-glossary/');
  }
  private initial(term: string): string { return /^[A-Z]/i.test(term) ? term[0].toUpperCase() : '#'; }
  search(event: Event): void { this.query.set((event.target as HTMLInputElement).value); this.letter.set('all'); }
  selectCategory(id: string): void { this.category.set(id); this.letter.set('all'); }
  reset(): void { this.query.set(''); this.category.set('all'); this.letter.set('all'); }
}

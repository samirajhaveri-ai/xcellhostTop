import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, effect, inject, input, output, signal, untracked, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment';

interface AiSource { title: string; url: string; }
interface ChatMessage { id: number; role: 'user' | 'assistant'; text: string; sources?: AiSource[]; }

@Component({
  selector: 'xh-ai-assistant', standalone: true, imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ai-assistant.component.html', styleUrl: './ai-assistant.component.css',
})
export class AiAssistantComponent {
  readonly initialQuestion = input('');
  readonly navigate = output<void>();
  readonly draft = signal('');
  readonly messages = signal<ChatMessage[]>([]);
  readonly busy = signal(false);
  readonly error = signal('');
  readonly copied = signal<number | null>(null);
  readonly composerNotice = signal('');
  readonly prompts = ['Which cloud solution is right for my business?', 'How can I protect my business from cyber threats?', 'How do I back up Microsoft 365 data?', 'Tell me about Tally on Cloud'];
  private readonly composer = viewChild<ElementRef<HTMLTextAreaElement>>('composer');
  private readonly thread = viewChild<ElementRef<HTMLElement>>('thread');
  private controller?: AbortController;
  private generation = 0;
  private nextId = 1;
  private copyTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    afterNextRender(() => this.composer()?.nativeElement.focus());
    effect(() => {
      const question = this.initialQuestion();
      if (question) untracked(() => { this.draft.set(question); void this.send(); });
    });
    inject(DestroyRef).onDestroy(() => {
      this.generation++;
      this.controller?.abort();
      clearTimeout(this.copyTimer);
    });
  }

  onInput(event: Event): void { this.draft.set((event.target as HTMLTextAreaElement).value); }
  onKey(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing) {
      event.preventDefault(); void this.send();
    }
  }
  ask(prompt: string): void { this.draft.set(prompt); void this.send(); }

  async send(): Promise<void> {
    const text = this.draft().trim();
    if (!text || this.busy()) return;
    if (text.length > 2000) { this.composerNotice.set('Please keep your question under 2,000 characters.'); return; }
    this.composerNotice.set('');
    if (this.error()) this.messages.update(items => items.filter(item => item.id !== items.at(-1)?.id));
    this.messages.update(items => [...items, { id: this.nextId++, role: 'user', text }]);
    this.draft.set('');
    await this.requestAnswer();
  }

  async retry(messageId?: number): Promise<void> {
    if (this.busy()) return;
    if (messageId !== undefined) {
      const index = this.messages().findIndex(message => message.id === messageId && message.role === 'assistant');
      if (index < 0) return;
      this.messages.update(items => items.slice(0, index));
    }
    if (this.messages().at(-1)?.role !== 'user') return;
    await this.requestAnswer();
  }

  private async requestAnswer(): Promise<void> {
    const generation = ++this.generation;
    this.controller = new AbortController();
    const controller = this.controller;
    this.busy.set(true); this.error.set(''); this.scrollToLatest();
    const timeout = setTimeout(() => controller.abort(), 45000);
    try {
      const response = await fetch(environment.aiSearchEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: controller.signal,
        body: JSON.stringify({ messages: this.messages().slice(-12).map(({ role, text }) => ({ role, content: text })) }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(typeof body.error === 'string' ? body.error : 'The assistant is unavailable. Please try again.');
      if (typeof body.answer !== 'string' || !body.answer.trim()) throw new Error('The assistant could not answer. Please try again.');
      if (generation !== this.generation) return;
      const sources: AiSource[] = Array.isArray(body.sources) ? body.sources.filter((source: AiSource) =>
        typeof source?.title === 'string' && typeof source?.url === 'string' && /^\/(?!\/)[a-zA-Z0-9/_.-]*$/.test(source.url)
      ).slice(0, 6) : [];
      this.messages.update(items => [...items, { id: this.nextId++, role: 'assistant', text: body.answer, sources }]);
    } catch (error) {
      if (generation !== this.generation) return;
      this.error.set(controller.signal.aborted ? 'That took longer than expected. Please try again.' :
        error instanceof TypeError || error instanceof SyntaxError ? 'Could not connect to the assistant. Please try again.' :
        error instanceof Error ? error.message : 'Could not connect. Please try again.');
    } finally {
      clearTimeout(timeout);
      if (generation === this.generation) {
        this.busy.set(false); this.scrollToLatest(); this.composer()?.nativeElement.focus();
      }
    }
  }

  newChat(): void {
    this.generation++; this.controller?.abort();
    this.messages.set([]); this.draft.set(''); this.busy.set(false); this.error.set(''); this.copied.set(null); this.composerNotice.set('');
    this.composer()?.nativeElement.focus();
  }

  async copy(message: ChatMessage): Promise<void> {
    try {
      await navigator.clipboard.writeText(message.text);
      this.composerNotice.set(''); this.copied.set(message.id); clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => this.copied.set(null), 2000);
    } catch { this.composerNotice.set('Select the answer text to copy it.'); }
  }

  formatText(text: string): string {
    // Escape all model HTML before adding a small set of presentation tags.
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
      .replace(/^#{1,3} (.+)$/gm, '<strong>$1</strong>')
      .replace(/^[-*] /gm, '• ');
  }

  private scrollToLatest(): void {
    const element = this.thread()?.nativeElement;
    element?.ownerDocument.defaultView?.requestAnimationFrame(() => { element.scrollTop = element.scrollHeight; });
  }
}

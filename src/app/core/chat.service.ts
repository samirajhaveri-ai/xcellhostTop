import { Injectable, inject, signal } from '@angular/core';
import { ChatApiService, type AiSource } from './chat-api.service';
export interface ChatMessage { id: number; role: 'user' | 'assistant'; text: string; sources?: AiSource[]; }
@Injectable({ providedIn: 'root' })
export class ChatService {
  private readonly api = inject(ChatApiService);
  readonly messages = signal<ChatMessage[]>([]);
  readonly busy = signal(false);
  readonly error = signal('');
  private controller?: AbortController;
  private generation = 0;
  private nextId = 1;
  reset(): void {
    this.generation++; this.controller?.abort();
    this.messages.set([]); this.busy.set(false); this.error.set('');
  }
  async send(text: string): Promise<void> {
    const question = text.trim();
    if (!question || this.busy()) return;
    if (question.length > 2000) { this.error.set('Please keep your question under 2,000 characters.'); return; }
    // Replace an unanswered question when the customer edits it instead of retrying.
    if (this.messages().at(-1)?.role === 'user') this.messages.update(items => items.slice(0, -1));
    this.messages.update(items => [...items.slice(-100), { id: this.nextId++, role: 'user', text: question }]);
    await this.requestAnswer();
  }
  async retry(): Promise<void> {
    if (!this.busy() && this.messages().at(-1)?.role === 'user') await this.requestAnswer();
  }
  private async requestAnswer(): Promise<void> {
    const generation = ++this.generation;
    const controller = this.controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 50000);
    this.busy.set(true); this.error.set('');
    try {
      const reply = await this.api.ask(this.messages().map(message => ({ role: message.role, content: message.text })), controller.signal);
      if (generation !== this.generation) return;
      this.messages.update(items => [...items, { id: this.nextId++, role: 'assistant', text: reply.answer, sources: reply.sources }]);
    } catch (error) {
      if (generation === this.generation) this.error.set(error instanceof Error ? error.message : 'Could not connect. Please retry.');
    } finally {
      clearTimeout(timeout);
      if (generation === this.generation) this.busy.set(false);
    }
  }
}

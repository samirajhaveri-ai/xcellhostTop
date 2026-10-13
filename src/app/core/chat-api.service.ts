import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
export interface AiSource { title: string; url: string; }
export interface AiMessage { role: 'user' | 'assistant'; content: string; }
export interface AiReply { answer: string; sources: AiSource[]; }
export const GENIE_STARTERS = [
  'Tell me about Tally on Cloud',
  'Which backup service is right for my business?',
  'Compare Cloud Drive and Microsoft 365',
  'How can XcellHost help with DPDP compliance?',
] as const;
export function safeAiSourceUrl(value: string): boolean {
  if (/^\/(?!\/)[a-zA-Z0-9/_.-]*$/.test(value)) return true;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password && !url.port &&
      ['xcellhost.cloud', 'www.xcellhost.cloud', 'xcellhost.top', 'www.xcellhost.top'].includes(url.hostname);
  } catch { return false; }
}
export function boundedHistory(messages: AiMessage[]): AiMessage[] {
  let history = messages.slice(-11);
  while (history[0]?.role === 'assistant' || history.reduce((total, item) => total + item.content.length, 0) > 28000) history = history.slice(1);
  return history;
}
export function formatAiText(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>')
    .replace(/^#{1,3} (.+)$/gm, '<strong>$1</strong>');
}
@Injectable({ providedIn: 'root' })
export class ChatApiService {
  async ask(messages: AiMessage[], signal: AbortSignal): Promise<AiReply> {
    try {
      const response = await fetch(environment.chatEndpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, signal,
        body: JSON.stringify({ messages: boundedHistory(messages) }),
      });
      const body = await response.json() as Partial<AiReply> & { error?: string };
      if (!response.ok) throw new ChatApiError(typeof body.error === 'string' ? body.error.slice(0, 300) : 'XcellGenie is unavailable. Please retry or contact our team.');
      if (typeof body.answer !== 'string' || !body.answer.trim()) throw new ChatApiError('XcellGenie could not answer. Please retry.');
      const sources = Array.isArray(body.sources) ? body.sources.filter(source =>
        typeof source?.title === 'string' && typeof source?.url === 'string' && safeAiSourceUrl(source.url)
      ).slice(0, 6) : [];
      return { answer: body.answer, sources };
    } catch (error) {
      if (error instanceof ChatApiError) throw error;
      throw new ChatApiError(signal.aborted ? 'That took longer than expected. Please retry.' : 'Could not connect to XcellGenie. Please retry or contact our team.');
    }
  }
}
export class ChatApiError extends Error {}

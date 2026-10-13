import { TestBed } from '@angular/core/testing';
import { ChatService } from './chat.service';
import { ChatApiService, boundedHistory, formatAiText, safeAiSourceUrl, type AiMessage, type AiReply } from './chat-api.service';

describe('XcellGenie chat state', () => {
  let api: jasmine.SpyObj<ChatApiService>;
  let chat: ChatService;
  beforeEach(() => {
    api = jasmine.createSpyObj('ChatApiService', ['ask']);
    TestBed.configureTestingModule({ providers: [{ provide: ChatApiService, useValue: api }] });
    chat = TestBed.inject(ChatService);
  });
  it('retries an unanswered question without duplicating it', async () => {
    api.ask.and.rejectWith(new Error('Unavailable'));
    await chat.send('Tally on Cloud');
    expect(chat.error()).toBe('Unavailable'); expect(chat.messages().length).toBe(1);
    api.ask.and.resolveTo({ answer: 'Managed Tally.', sources: [] });
    await chat.retry(); expect(chat.messages().length).toBe(2); expect(chat.error()).toBe('');
  });
  it('ignores an answer arriving after the user clears chat', async () => {
    let complete!: (reply: AiReply) => void;
    api.ask.and.returnValue(new Promise(resolve => { complete = resolve; }));
    const pending = chat.send('Backup'); chat.reset(); complete({ answer: 'Old answer', sources: [] });
    await pending; expect(chat.messages()).toEqual([]); expect(chat.busy()).toBeFalse();
  });
  it('bounds request history at a user boundary and escapes model HTML', () => {
    const history: AiMessage[] = Array.from({ length: 25 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: String(i) }));
    expect(boundedHistory(history).length).toBe(11); expect(boundedHistory(history)[0].role).toBe('user');
    expect(formatAiText('<script>bad</script> **Cloud**')).toContain('&lt;script&gt;');
    expect(safeAiSourceUrl('https://xcellhost.cloud/tally-on-cloud')).toBeTrue();
    expect(safeAiSourceUrl('javascript:alert(1)')).toBeFalse();
  });
});

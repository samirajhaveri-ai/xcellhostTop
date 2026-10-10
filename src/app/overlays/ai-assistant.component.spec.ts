import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AiAssistantComponent } from './ai-assistant.component';

describe('XcellHost AI conversation', () => {
  function setup() {
    TestBed.configureTestingModule({ providers: [provideRouter([])] });
    const fixture = TestBed.createComponent(AiAssistantComponent);
    fixture.detectChanges();
    return fixture;
  }

  it('sends follow-up history and shows only safe website source links', async () => {
    const request = spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response(JSON.stringify({
      answer: 'Cloud backup protects your data.',
      sources: [{ title: 'Cloud backup', url: '/backup-cloud' }, { title: 'Unsafe', url: 'javascript:alert(1)' }],
    }), { status: 200 })));
    const fixture = setup();
    const component = fixture.componentInstance;
    component.draft.set('Tell me about cloud backup');
    await component.send();
    expect(component.messages().length).toBe(2);
    expect(component.messages()[1].sources?.length).toBe(1);
    component.draft.set('What about recovery?');
    await component.send();
    const body = JSON.parse(String(request.calls.mostRecent().args[1]?.body));
    expect(body.messages.map((message: { role: string }) => message.role)).toEqual(['user', 'assistant', 'user']);
    expect(body.messages[2].content).toBe('What about recovery?');
    fixture.destroy();
  });

  it('offers retry without duplicating a failed question', async () => {
    const request = spyOn(window, 'fetch').and.returnValue(Promise.resolve(new Response(JSON.stringify({ error: 'Temporarily unavailable.' }), { status: 503 })));
    const fixture = setup();
    const component = fixture.componentInstance;
    component.draft.set('Tell me about Tally on Cloud');
    await component.send();
    expect(component.error()).toBe('Temporarily unavailable.');
    expect(component.messages().length).toBe(1);
    request.and.returnValue(Promise.resolve(new Response(JSON.stringify({ answer: 'Tally hosting overview.' }), { status: 200 })));
    await component.retry();
    expect(component.messages().map(message => message.role)).toEqual(['user', 'assistant']);
    expect(component.error()).toBe('');
    fixture.destroy();
  });

  it('ignores a pending answer after New chat', async () => {
    let finish!: (response: Response) => void;
    spyOn(window, 'fetch').and.returnValue(new Promise(resolve => { finish = resolve; }));
    const fixture = setup();
    const component = fixture.componentInstance;
    component.draft.set('Which cloud plan?');
    const pending = component.send();
    component.newChat();
    finish(new Response(JSON.stringify({ answer: 'Old answer.' }), { status: 200 }));
    await pending;
    expect(component.messages()).toEqual([]);
    expect(component.busy()).toBeFalse();
    fixture.destroy();
  });

  it('escapes model HTML while allowing bold answer text', () => {
    const fixture = setup();
    const html = fixture.componentInstance.formatText('<img src=x onerror=alert(1)> **Cloud**');
    expect(html).toContain('&lt;img');
    expect(html).not.toContain('<img');
    expect(html).toContain('<strong>Cloud</strong>');
    fixture.destroy();
  });
});

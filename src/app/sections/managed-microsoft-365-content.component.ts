import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'xh-managed-microsoft-365-content',
  standalone: true,
  templateUrl: './managed-microsoft-365-content.component.html',
  styleUrl: './managed-microsoft-365-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedMicrosoft365ContentComponent {
  readonly activeCopilotApp = signal(0);

  readonly copilotApps = [
    {
      name: 'Word',
      title: 'Copilot in Word',
      description: 'Go from a blank page to a solid first draft in seconds. Ask Copilot to write, rewrite, shorten or change the tone — grounded in your own documents and notes.',
      bullets: ['Draft from a short prompt', 'Rewrite & change the tone', 'Summarise long documents', 'Turn notes into a polished doc'],
      prompts: [['“Draft a project proposal”', 'First draft ready in seconds'], ['“Make this more concise”', 'Rewritten · 40% shorter'], ['“Summarise this report”', '3 key points extracted']],
      caption: 'From blank page to first draft',
    },
    {
      name: 'Excel',
      title: 'Copilot in Excel',
      description: 'Ask questions of your data in plain English. Copilot spots trends, builds formulas and creates charts — no complex functions to remember.',
      bullets: ['Analyse data & spot trends', 'Generate formulas for you', 'Create charts instantly', 'Model what-if scenarios'],
      prompts: [['“What are the top trends here?”', '3 insights + a chart'], ['“Add a formula for margin %”', 'Formula inserted'], ['“Chart sales by region”', 'Column chart created']],
      caption: 'Answers from your spreadsheets',
    },
    {
      name: 'PowerPoint',
      title: 'Copilot in PowerPoint',
      description: 'Turn a document or a prompt into a designed deck, complete with speaker notes — then restyle or reorganise it with a single ask.',
      bullets: ['Create a deck from a document', 'Generate slides from a prompt', 'Add speaker notes', 'Restyle & reorganise slides'],
      prompts: [['“Create a deck from this doc”', '5 slides + notes'], ['“Add a summary slide”', 'Slide added'], ['“Make it more visual”', 'Layout restyled']],
      caption: 'A designed deck in minutes',
    },
    {
      name: 'Outlook',
      title: 'Copilot in Outlook',
      description: 'Clear your inbox faster. Copilot summarises long threads, drafts replies in your voice, and helps you find what needs a response.',
      bullets: ['Summarise long email threads', 'Draft & refine replies', 'Catch up on what you missed', 'Find action items fast'],
      prompts: [['“Summarise this thread”', 'Caught up in seconds'], ['“Draft a friendly reply”', 'Ready to review & send'], ['“What needs my reply?”', '3 emails flagged']],
      caption: 'Inbox zero, faster',
    },
    {
      name: 'Teams',
      title: 'Copilot in Teams',
      description: 'Never miss a thing. Copilot recaps meetings, lists decisions and action items, and answers questions about what was discussed — even if you joined late.',
      bullets: ['Recap meetings & calls', 'List decisions & action items', 'Catch up if you joined late', 'Summarise chat threads'],
      prompts: [['“Recap this meeting”', 'Summary + action items'], ['“What did I miss?”', 'Caught up instantly'], ['“List the decisions”', '4 decisions captured']],
      caption: 'Every meeting, summarised',
    },
  ] as const;

  selectCopilotApp(index: number): void {
    this.activeCopilotApp.set(index);
  }
}

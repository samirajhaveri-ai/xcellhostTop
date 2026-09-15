import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-agentic-ai-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './agentic-ai-content.component.html',
  styleUrl: './agentic-ai-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenticAiContentComponent {
  readonly selectedTier = signal(0);
}

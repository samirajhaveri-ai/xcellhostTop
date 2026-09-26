import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { WHY_XCELLHOST_CHAPTER_HEADINGS, WHY_XCELLHOST_REASON_GROUPS } from '../data/why-xcellhost-reasons.data';

@Component({
  selector: 'xh-why-xcellhost-reasons',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-xcellhost-reasons.component.html',
  styleUrl: './why-xcellhost-reasons.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyXcellhostReasonsComponent {
  readonly chapterHeadings = WHY_XCELLHOST_CHAPTER_HEADINGS;
  readonly groups = WHY_XCELLHOST_REASON_GROUPS;
}

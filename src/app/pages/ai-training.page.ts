import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

const COURSES = {
  integrated: {source: 'ai-training-integrated-program', title: 'Integrated AI Training Program', route: 'synapsem-ai-training-integrated-program'},
  medical: {source: 'ai-training-medical-doctors', title: 'AI Training For Medical Doctors', route: 'ai-training-for-medical-doctors'},
  insurance: {source: 'ai-training-insurance-professionals', title: 'AI Training For Insurance Professionals', route: 'ai-training-for-insurance-professionals'},
  accountants: {source: 'ai-training-chartered-accountants', title: 'AI Training For Chartered Accountants', route: 'ai-training-for-chartered-accountants'},
} as const;

@Component({
  selector: 'xh-ai-training-page', standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  templateUrl: './ai-training.page.html',
  styles: [':host{display:block}.training-closing{padding:24px 0 48px}.training-closing>.wrap{max-width:1280px}.training-actions{display:flex;gap:12px;flex-wrap:wrap}.training-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiTrainingPage {
  readonly course = COURSES[inject(ActivatedRoute).snapshot.data['training'] as keyof typeof COURSES];
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  constructor() {
    inject(SeoService).set(this.course.title + ' | XcellHost', 'Explore XcellAI Academy course modules, guided labs, delivery formats, seat pricing and enrolment with XcellHost.', '/' + this.course.route);
  }
  request(): void { this.topics.ask(this.course.title); this.overlay.open('callback'); }
}

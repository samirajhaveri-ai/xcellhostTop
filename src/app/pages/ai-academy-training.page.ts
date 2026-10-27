import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

const COURSES = {
  integrated: {source: 'ai-training-integrated-program', title: 'Integrated AI Training Program', route: 'synapsem-ai-training-integrated-program'},
  medical: {source: 'ai-training-medical-doctors', title: 'AI Training For Medical Doctors', route: 'ai-training-for-medical-doctors'},
  insurance: {source: 'ai-training-insurance-professionals', title: 'AI Training For Insurance Professionals', route: 'ai-training-for-insurance-professionals'},
  accountants: {source: 'ai-training-chartered-accountants', title: 'AI Training For Chartered Accountants', route: 'ai-training-for-chartered-accountants'},
} as const;

@Component({
  selector: 'xh-ai-academy-training-page', standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  templateUrl: './ai-training.page.html',
  styles: [':host{display:block}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiAcademyTrainingPage {
  readonly course = COURSES[inject(ActivatedRoute).snapshot.data['training'] as keyof typeof COURSES];
  constructor() {
    inject(SeoService).set(this.course.title + ' | XcellHost', 'Explore XcellAI Academy course modules, guided labs, delivery formats, seat pricing and enrolment with XcellHost.', '/' + this.course.route);
  }
}

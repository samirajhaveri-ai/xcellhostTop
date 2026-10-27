import { Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-managed-kubernetes-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content source="kubernetes" /><xh-insights-section pageSlug="managed-kubernetes" [videos]="videos" />`,
})
export class ManagedKubernetesPage {
  private readonly sanitizer = inject(DomSanitizer);
  readonly videos = [
    { title: 'Product Intro', src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/8aNZ-C9zXvw?rel=0&playsinline=1') },
    { title: 'Use Cases', src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube-nocookie.com/embed/FN_U3cKxOQE?rel=0&playsinline=1') },
  ];
}

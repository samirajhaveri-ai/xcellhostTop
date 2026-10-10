import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';
@Component({selector:'xh-security-consulting-page',standalone:true,imports:[ImportedInteractiveContentComponent,InsightsSectionComponent],template:`<xh-imported-interactive-content source="consulting" [consultingSlug]="slug" /><div id="consultingInsights"><xh-insights-section [pageSlug]="slug" /></div>`})
export class SecurityConsultingPage { readonly slug = inject(ActivatedRoute).snapshot.data['consultingSlug'] as string; }

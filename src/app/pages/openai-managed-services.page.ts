import { Component } from '@angular/core';
import { OpenAiManagedSourceComponent } from '../sections/openai-managed-source.component';

@Component({
  selector: 'xh-openai-managed-services-page',
  standalone: true,
  imports: [OpenAiManagedSourceComponent],
  template: '<xh-openai-managed-source />',
})
export class OpenAiManagedServicesPage {}

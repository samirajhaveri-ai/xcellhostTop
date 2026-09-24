import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CREATIVE_GPU_WORKLOAD_LOOP } from './gpu-workload-icons';

@Component({
  selector: 'xh-rtx-8000-use-cases',
  standalone: true,
  templateUrl: './rtx-8000-use-cases.component.html',
  styleUrl: './rtx-8000-use-cases.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rtx8000UseCasesComponent {
  readonly workloadLoop = CREATIVE_GPU_WORKLOAD_LOOP;
}

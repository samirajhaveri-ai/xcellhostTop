import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-comodo-pa-content',
  standalone: true,
  
  templateUrl: './comodo-pa-content.component.html',
  styleUrls: ['./digicert-smime-content.component.css', './comodo-pa-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComodoPaContentComponent {}

@Component({
  selector: 'xh-comodo-pa-hero',
  standalone: true,
  
  templateUrl: './comodo-pa-hero.component.html',
  styleUrl: './digicert-smime-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComodoPaHeroComponent {}

@Component({
  selector: 'xh-comodo-pa-faq',
  standalone: true,
  
  templateUrl: './comodo-pa-faq.component.html',
  styleUrl: './digicert-smime-faq.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComodoPaFaqComponent {}

@Component({
  selector: 'xh-comodo-pa-related',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './comodo-pa-related.component.html',
  styleUrl: './digicert-smime-related.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComodoPaRelatedComponent {}

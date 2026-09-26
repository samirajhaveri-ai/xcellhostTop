import { Component, ViewEncapsulation } from '@angular/core';
import { Microsoft365EnterpriseReferenceComponent } from './microsoft-365-enterprise-reference.component';

@Component({
  selector: 'xh-microsoft-365-enterprise-office365',
  standalone: true,
  templateUrl: './microsoft-365-enterprise-office365.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Microsoft365EnterpriseOffice365Component extends Microsoft365EnterpriseReferenceComponent {}

@Component({
  selector: 'xh-microsoft-365-enterprise-frontline',
  standalone: true,
  templateUrl: './microsoft-365-enterprise-frontline.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Microsoft365EnterpriseFrontlineComponent extends Microsoft365EnterpriseReferenceComponent {}

@Component({
  selector: 'xh-microsoft-365-enterprise-nonprofit',
  standalone: true,
  templateUrl: './microsoft-365-enterprise-nonprofit.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Microsoft365EnterpriseNonprofitComponent extends Microsoft365EnterpriseReferenceComponent {}

@Component({
  selector: 'xh-microsoft-365-enterprise-additional',
  standalone: true,
  templateUrl: './microsoft-365-enterprise-additional.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Microsoft365EnterpriseAdditionalComponent extends Microsoft365EnterpriseReferenceComponent {}

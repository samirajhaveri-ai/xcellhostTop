import { Routes } from '@angular/router';

/**
 * URLs mirror the original site exactly, so nothing that is already indexed breaks:
 *   /                          home
 *   /<service-slug>/           a service page   (e.g. /tally-on-cloud/)
 *   /category/<name>/          a category landing page
 *   /insights/<slug>/          an article
 *   /securesetu-dpdpa/         the DPDPA platform page
 *   /securesetu-dpdpa/<slug>/  one DPDPA module
 *   /about|/contact|/pricing|/insights
 *   /compare/
 */
export const routes: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home.page').then((m) => m.HomePage) },
  { path: 'compare', loadComponent: () => import('./pages/compare.page').then((m) => m.ComparePage) },
  { path: 'insights', loadComponent: () => import('./pages/insights.page').then((m) => m.InsightsPage) },
  { path: 'insights/:slug', loadComponent: () => import('./pages/blog.page').then((m) => m.BlogPage) },
  { path: 'securesetu-dpdpa', loadComponent: () => import('./pages/dpdpa.page').then((m) => m.DpdpaPage) },
  { path: 'securesetu-dpdpa/:slug', loadComponent: () => import('./pages/dpdpa-module.page').then((m) => m.DpdpaModulePage) },
  { path: 'about', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'about' } },
  { path: 'contact', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'contact' } },
  { path: 'pricing', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'pricing' } },
  { path: 'company/:slug', loadComponent: () => import('./pages/company.page').then((m) => m.CompanyPage) },
  { path: 'category/:name', loadComponent: () => import('./pages/category.page').then((m) => m.CategoryPage) },
  {
    path: 'acronis-advanced-edr-sla',
    loadComponent: () => import('./pages/acronis-advanced-edr-sla.page').then((m) => m.AcronisAdvancedEdrSlaPage),
  },
  {
    path: 'acronis-advanced-mdr-sla',
    loadComponent: () =>
      import('./pages/acronis-advanced-mdr-sla.page').then((m) => m.AcronisAdvancedMdrSlaPage),
  },
  {
    path: 'acronis-advanced-xdr-sla',
    loadComponent: () =>
      import('./pages/acronis-advanced-xdr-sla.page').then(
        (m) => m.AcronisAdvancedXdrSlaPage,
      ),
  },
  {
    path: 'acronis-backup-cloud-sla',
    loadComponent: () =>
      import('./pages/acronis-backup-cloud-sla.page').then(
        (m) => m.AcronisBackupCloudSlaPage,
      ),
  },
  {
    path: 'acronis-disaster-recovery-dr-sla',
    loadComponent: () =>
      import('./pages/acronis-disaster-recovery-dr-sla.page').then(
        (m) => m.AcronisDisasterRecoveryDrSlaPage,
      ),
  },
  {
    path: 'acronis-remote-monitoring-management-rmm-sla',
    data: { slaKey: 'rmm' },
    loadComponent: () => import('./pages/sla-document.page').then((m) => m.SlaDocumentPage),
  },
  {
    path: 'email-backup-for-microsoft-365-sla',
    data: { slaKey: 'emailBackup' },
    loadComponent: () => import('./pages/sla-document.page').then((m) => m.SlaDocumentPage),
  },
  {
    path: 'file-cloud-sla',
    data: { slaKey: 'fileCloud' },
    loadComponent: () => import('./pages/sla-document.page').then((m) => m.SlaDocumentPage),
  },
  // service pages sit at the root, so this must stay last
  { path: ':slug', loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage) },
  { path: '**', redirectTo: '' },
];

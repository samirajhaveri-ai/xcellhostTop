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
  { path: 'under-construction/:slug', loadComponent: () => import('./pages/under-construction.page').then((m) => m.UnderConstructionPage) },
  { path: 'under-construction', loadComponent: () => import('./pages/under-construction.page').then((m) => m.UnderConstructionPage) },
  {
    path: 'case-studies/:id',
    loadComponent: () =>
      import('./pages/case-study-detail.page').then((m) => m.CaseStudyDetailPage),
  },
  { path: 'case-studies', loadComponent: () => import('./pages/case-studies.page').then((m) => m.CaseStudiesPage) },
  { path: 'insights', loadComponent: () => import('./pages/insights.page').then((m) => m.InsightsPage) },
  { path: 'insights/:slug', loadComponent: () => import('./pages/blog.page').then((m) => m.BlogPage) },
  { path: 'securesetu-dpdpa', loadComponent: () => import('./pages/dpdpa.page').then((m) => m.DpdpaPage) },
  { path: 'securesetu-dpdpa/:slug', loadComponent: () => import('./pages/dpdpa-module.page').then((m) => m.DpdpaModulePage) },
  { path: 'about', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'about' } },
  { path: 'contact', loadComponent: () => import('./pages/contact.page').then((m) => m.ContactPage) },
  {
    path: 'microsoft-365-smb',
    loadComponent: () =>
      import('./pages/microsoft-365-smb.page').then((m) => m.Microsoft365SmbPage),
  },
  {
    path: 'google-workspace',
    loadComponent: () =>
      import('./pages/google-workspace.page').then((m) => m.GoogleWorkspacePage),
  },
  {
    path: 'dpdpa-for-smb',
    loadComponent: () =>
      import('./pages/dpdpa-for-smb.page').then((m) => m.DpdpaForSmbPage),
  },
  {
    path: 'payment-methods',
    loadComponent: () =>
      import('./pages/payment-methods.page').then((m) => m.PaymentMethodsPage),
  },
  {
    path: 'promo-offers',
    data: { title: 'Promos & Offers' },
    loadComponent: () =>
      import('./pages/under-construction.page').then((m) => m.UnderConstructionPage),
  },
  {
    path: 'company-profile',
    data: { title: 'Company Profile' },
    loadComponent: () =>
      import('./pages/under-construction.page').then((m) => m.UnderConstructionPage),
  },
  {
    path: 'career-handbook',
    data: { title: 'Career Handbook' },
    loadComponent: () =>
      import('./pages/under-construction.page').then((m) => m.UnderConstructionPage),
  },
  {
    path: 'partner-program',
    data: { title: 'Partner Program' },
    loadComponent: () =>
      import('./pages/under-construction.page').then((m) => m.UnderConstructionPage),
  },
  {
    path: 'geotrust-ssl-certificates',
    data: { productSlug: 'geotrust' },
    loadComponent: () =>
      import('./pages/geotrust-ssl-certificates.page').then(
        (m) => m.GeoTrustSslCertificatesPage,
      ),
  },
  {
    path: 'digicert-vmc',
    data: { productSlug: 'digicert-vmc' },
    loadComponent: () => import('./pages/digicert-vmc.page').then((m) => m.DigicertVmcPage),
  },
  {
    path: 'digicert-cmc',
    data: { productSlug: 'digicert-cmc' },
    loadComponent: () => import('./pages/digicert-cmc.page').then((m) => m.DigicertCmcPage),
  },
  { path: 'pricing', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'pricing' } },
  { path: 'company/:slug', loadComponent: () => import('./pages/company.page').then((m) => m.CompanyPage) },
  { path: 'category/:name', loadComponent: () => import('./pages/category.page').then((m) => m.CategoryPage) },
  {
    path: 'vendor-partners/:slug',
    loadComponent: () =>
      import('./pages/vendor-partner.page').then((m) => m.VendorPartnerPage),
  },
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
    loadComponent: () =>
      import('./pages/acronis-remote-monitoring-management-rmm-sla.page').then(
        (m) => m.AcronisRemoteMonitoringManagementRmmSlaPage,
      ),
  },
  {
    path: 'email-backup-for-microsoft-365-sla',
    loadComponent: () =>
      import('./pages/email-backup-for-microsoft-365-sla.page').then(
        (m) => m.EmailBackupForMicrosoft365SlaPage,
      ),
  },
  {
    path: 'file-cloud-sla',
    loadComponent: () =>
      import('./pages/file-cloud-sla.page').then((m) => m.FileCloudSlaPage),
  },
  {
    path: 'performance-cloud-sla',
    loadComponent: () =>
      import('./pages/performance-cloud-sla.page').then((m) => m.PerformanceCloudSlaPage),
  },
  {
    path: 'tally-on-cloud-sla',
    loadComponent: () =>
      import('./pages/tally-on-cloud-sla.page').then((m) => m.TallyOnCloudSlaPage),
  },
  {
    path: 'video-surveillance-as-a-service-vsaas-sla',
    loadComponent: () =>
      import('./pages/video-surveillance-as-a-service-vsaas-sla.page').then(
        (m) => m.VideoSurveillanceAsAServiceVsaasSlaPage,
      ),
  },
  {
    path: 'whatsapp-marketing-service-sla',
    loadComponent: () =>
      import('./pages/whatsapp-marketing-service-sla.page').then(
        (m) => m.WhatsappMarketingServiceSlaPage,
      ),
  },
  // service pages sit at the root, so this must stay last
  { path: ':slug', loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage) },
  { path: '**', redirectTo: '' },
];

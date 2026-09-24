import { Routes } from '@angular/router';

/**
 * URLs mirror the original site exactly, so nothing that is already indexed breaks:
 *   /                          home
 *   /<service-slug>/           a service page   (e.g. /tally-on-cloud/)
 *   /category/<name>/          a category landing page
 *   /insights/<slug>/          a blog article
 *   /use-cases/<slug>/         a use case
 *   /about|/contact|/pricing|/insights
 *   /compare/
 */
export const routes: Routes = [
  { path: 'explore-marketplace', loadComponent: () => import('./pages/explore-marketplace.page').then((m) => m.ExploreMarketplacePage) },
  { path: 'under-construction/careers-overview', redirectTo: 'company/careers-overview', pathMatch: 'full' },
  { path: 'promo-offers', redirectTo: 'promotion-and-offers', pathMatch: 'full' },
  { path: 'under-construction/promotion-and-offers', redirectTo: 'promotion-and-offers', pathMatch: 'full' },
  { path: 'under-construction/trust-watch', redirectTo: 'company/trust-watch', pathMatch: 'full' },
  { path: 'domains', redirectTo: 'register-a-domain-name', pathMatch: 'full' },
  { path: 'iot-infrastructure', redirectTo: 'iot-cloud', pathMatch: 'full' },
  { path: 'why-xcellhost', redirectTo: 'company/why-xcellhost', pathMatch: 'full' },
  { path: '', pathMatch: 'full', loadComponent: () => import('./pages/home.page').then((m) => m.HomePage) },
  { path: 'compare', loadComponent: () => import('./pages/compare.page').then((m) => m.ComparePage) },
  { path: 'compare-providers', loadComponent: () => import('./pages/compare-providers.page').then((m) => m.CompareProvidersPage) },
  {
    path: 'cloudbaba-vs-vultr',
    data: { comparison: 'vultr' },
    loadComponent: () => import('./pages/compare-provider-detail.page').then((m) => m.CompareProviderDetailPage),
  },
  {
    path: 'cloudbaba-vs-ovhcloud',
    data: { comparison: 'ovhcloud' },
    loadComponent: () => import('./pages/compare-provider-detail.page').then((m) => m.CompareProviderDetailPage),
  },
  {
    path: 'cloudbaba-vs-digitalocean',
    data: { comparison: 'digitalocean' },
    loadComponent: () => import('./pages/compare-provider-detail.page').then((m) => m.CompareProviderDetailPage),
  },
  {
    path: 'cloudbaba-vs-aws',
    data: { comparison: 'aws' },
    loadComponent: () => import('./pages/compare-provider-detail.page').then((m) => m.CompareProviderDetailPage),
  },
  {
    path: 'cloudbaba-vs-gcp',
    data: { comparison: 'gcp' },
    loadComponent: () => import('./pages/compare-provider-detail.page').then((m) => m.CompareProviderDetailPage),
  },
  {
    path: 'cloudbaba-vs-azure',
    data: { comparison: 'azure' },
    loadComponent: () => import('./pages/compare-provider-detail.page').then((m) => m.CompareProviderDetailPage),
  },
  { path: 'whatsapp-for-business', redirectTo: 'whatsapp-smb', pathMatch: 'full' },
  { path: 'bfsi-financial-services', redirectTo: 'bfsi-insurance-services', pathMatch: 'full' },
  { path: 'under-construction/infrastructure', redirectTo: 'infrastructure', pathMatch: 'full' },
  { path: 'under-construction/escalation-matrix', redirectTo: 'escalation-matrix', pathMatch: 'full' },
  { path: 'under-construction/partner-matrix', redirectTo: 'partner-matrix', pathMatch: 'full' },
  {
    path: 'under-construction/partner-overview',
    data: { pageSlug: 'partner-overview' },
    loadComponent: () => import('./pages/company.page').then((m) => m.CompanyPage),
  },
  { path: 'escalation-matrix', loadComponent: () => import('./pages/escalation-matrix.page').then((m) => m.EscalationMatrixPage) },
  { path: 'partner-matrix', loadComponent: () => import('./pages/partner-matrix.page').then((m) => m.PartnerMatrixPage) },
  { path: 'under-construction/cloud-login', redirectTo: 'cloud-login', pathMatch: 'full' },
  { path: 'cloud-login', loadComponent: () => import('./pages/cloud-login.page').then((m) => m.CloudLoginPage) },
  { path: 'signup', loadComponent: () => import('./pages/signup.page').then((m) => m.SignupPage) },
  {
    path: 'customer-login',
    data: { type: 'customer', heading: 'Customer Login', portal: 'Customer portal', description: 'Sign in to access your cloud dashboard and account services.' },
    loadComponent: () => import('./pages/portal-login.page').then((m) => m.PortalLoginPage),
  },
  {
    path: 'partner-login',
    data: { type: 'partner', heading: 'Partner Login', portal: 'Partner portal', description: 'Sign in to manage your customers, services and partner resources.' },
    loadComponent: () => import('./pages/portal-login.page').then((m) => m.PortalLoginPage),
  },
  {
    path: 'vendor-login',
    data: { type: 'vendor', heading: 'Vendor Login', portal: 'Vendor portal', description: 'Sign in to access vendor resources, requests and account tools.' },
    loadComponent: () => import('./pages/portal-login.page').then((m) => m.PortalLoginPage),
  },
  {
    path: 'employee-login',
    data: { type: 'employee', heading: 'Employee Login', portal: 'Employee portal', description: 'Sign in securely to access employee tools and internal resources.' },
    loadComponent: () => import('./pages/portal-login.page').then((m) => m.PortalLoginPage),
  },
  {
    path: 'under-construction/data-processing-agreement',
    loadComponent: () =>
      import('./pages/data-processing-agreement.page').then((m) => m.DataProcessingAgreementPage),
  },
  {
    path: 'under-construction/cloud-glossary',
    loadComponent: () =>
      import('./pages/cloud-glossary.page').then((m) => m.CloudGlossaryPage),
  },
  { path: 'under-construction/security-glossary', redirectTo: 'security-glossary', pathMatch: 'full' },
  { path: 'security-glossary', loadComponent: () => import('./pages/security-glossary.page').then((m) => m.SecurityGlossaryPage) },
  { path: 'under-construction/ai-glossary', redirectTo: 'ai-glossary', pathMatch: 'full' },
  { path: 'ai-glossary', loadComponent: () => import('./pages/ai-glossary.page').then((m) => m.AiGlossaryPage) },
  { path: 'under-construction/associations', redirectTo: 'associations', pathMatch: 'full' },
  {
    path: 'associations',
    loadComponent: () => import('./pages/associations.page').then((m) => m.AssociationsPage),
  },
  { path: 'under-construction/support-overview', redirectTo: 'support-overview', pathMatch: 'full' },
  { path: 'company/support-overview', redirectTo: 'support-overview', pathMatch: 'full' },
  {
    path: 'support-overview',
    loadComponent: () => import('./pages/support-overview.page').then((m) => m.SupportOverviewPage),
  },

  { path: 'under-construction/:slug', loadComponent: () => import('./pages/under-construction.page').then((m) => m.UnderConstructionPage) },
  { path: 'under-construction', loadComponent: () => import('./pages/under-construction.page').then((m) => m.UnderConstructionPage) },
  {
    path: 'case-studies/:id',
    loadComponent: () =>
      import('./pages/case-study-detail.page').then((m) => m.CaseStudyDetailPage),
  },
  { path: 'case-studies', loadComponent: () => import('./pages/case-studies.page').then((m) => m.CaseStudiesPage) },
  { path: 'insights', loadComponent: () => import('./pages/insights.page').then((m) => m.InsightsPage) },
  {
    path: 'insights/:slug',
    data: { contentType: 'blog' },
    loadComponent: () => import('./pages/blog.page').then((m) => m.BlogPage),
  },
  {
    path: 'use-cases/:slug',
    data: { contentType: 'use-case' },
    loadComponent: () => import('./pages/blog.page').then((m) => m.BlogPage),
  },
  { path: 'about', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'about' } },
  { path: 'contact', loadComponent: () => import('./pages/contact.page').then((m) => m.ContactPage) },
  { path: 'media-kit', loadComponent: () => import('./pages/media-kit.page').then((m) => m.MediaKitPage) },
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
    path: 'promotion-and-offers',
    loadComponent: () => import('./pages/promo-offers.page').then((m) => m.PromoOffersPage),
  },
  {
    path: 'our-team',
    redirectTo: 'company/our-team-our-story',
    pathMatch: 'full',
  },
  {
    path: 'company-profile',
    data: { title: 'Company Profile' },
    loadComponent: () =>
      import('./pages/company-profile.page').then((m) => m.CompanyProfilePage),
  },
  {
    path: 'career-handbook',
    data: { title: 'Career Handbook' },
    loadComponent: () =>
      import('./pages/under-construction.page').then((m) => m.UnderConstructionPage),
  },
  {
    path: 'partner-program',
    data: { productSlug: 'reseller-program' },
    loadComponent: () =>
      import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'autonomous-threat-management',
    data: { productSlug: 'autonomous-threat-management' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
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
    path: 'digicert-ssl-certificates',
    data: { productSlug: 'digicert-ssl-certificates' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'digicert',
    redirectTo: 'digicert-ssl-certificates',
    pathMatch: 'full',
  },
  {
    path: 'digicert-vmc',
    data: { productSlug: 'verified-mark-certificates-vmc' },
    loadComponent: () => import('./pages/digicert-vmc.page').then((m) => m.DigicertVmcPage),
  },
  {
    path: 'digicert-cmc',
    data: { productSlug: 'digicert-cmc' },
    loadComponent: () => import('./pages/digicert-cmc.page').then((m) => m.DigicertCmcPage),
  },
  {
    path: 'mobile-device-mgmt',
    data: { productSlug: 'cloud-mobile-device-mgmt' },
    loadComponent: () => import('./pages/cloud-mdm.page').then((m) => m.CloudMdmPage),
  },
  {
    path: 'cloud-mdm',
    data: { productSlug: 'cloud-mobile-device-mgmt' },
    loadComponent: () => import('./pages/cloud-mdm.page').then((m) => m.CloudMdmPage),
  },
  {
    path: 'cloud-mobile-device-mgmt',
    data: { productSlug: 'cloud-mobile-device-mgmt' },
    loadComponent: () => import('./pages/cloud-mdm.page').then((m) => m.CloudMdmPage),
  },
  { path: 'pricing', loadComponent: () => import('./pages/simple.page').then((m) => m.SimplePage), data: { key: 'pricing' } },
  { path: 'company/partnership-models', redirectTo: 'under-construction/partner-overview', pathMatch: 'full' },
  {
    path: 'company/our-platform',
    data: { productSlug: 'our-platform' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'company/trust-watch',
    data: { productSlug: 'watchtower' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  { path: 'company/watchtower', redirectTo: 'company/trust-watch', pathMatch: 'full' },
  {
    path: 'company/trust-center',
    loadComponent: () =>
      import('./pages/trust-center.page').then((m) => m.TrustCenterPage),
  },
  { path: 'platform-status', redirectTo: 'company/platform-status', pathMatch: 'full' },
  {
    path: 'company/platform-status',
    loadComponent: () => import('./pages/platform-status.page').then((m) => m.PlatformStatusPage),
  },
  { path: 'company/:slug', loadComponent: () => import('./pages/company.page').then((m) => m.CompanyPage) },
  { path: 'customer-stories', redirectTo: 'company/customer-stories', pathMatch: 'full' },
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
  { path: 'bare-metal-server', redirectTo: 'bare-metal-servers', pathMatch: 'full' },
  {
    path: 'cloud-devops-services',
    data: { productSlug: 'cloud-devops-services' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  { path: 'food-and-beverage', redirectTo: 'hospitality-cloud', pathMatch: 'full' },
  { path: 'acronis-edr', redirectTo: '', pathMatch: 'full' },
  {
    path: 'email-security-smb',
    data: { productSlug: 'vortex-seg' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'email-security-enterprise',
    data: { productSlug: 'vortex-seg' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  // service pages sit at the root, so this must stay last
  { path: 'co-location', redirectTo: 'co-location-services', pathMatch: 'full' },
  { path: ':slug', loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage) },
  { path: '**', redirectTo: '' },
];

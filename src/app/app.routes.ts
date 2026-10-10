import { FRAMEWORK_DETAILS } from './data/framework-details.data';
import { Routes } from '@angular/router';
import { MENU_SERVICE_PAGES } from './data/menu-service-pages.data';
import { INDUSTRY_CLOUD_PAGES } from './data/industry-cloud-pages.data';


export const routes: Routes = [
  { path: 'managed-grc', title: 'Managed GRC - XcellHost', data: { consultingSlug: 'managed-grc' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'iso-27001-consulting', title: 'ISO 27001 Consulting - XcellHost', data: { consultingSlug: 'iso-27001-consulting' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'iso-20000-itsm', title: 'ISO 20000 (ITSM) - XcellHost', data: { consultingSlug: 'iso-20000-itsm' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'iso-27017-cloud-infosec', title: 'ISO 27017 Cloud Security - XcellHost', data: { consultingSlug: 'iso-27017-cloud-infosec' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'iso-22301-bmc', title: 'ISO 22301 Business Continuity - XcellHost', data: { consultingSlug: 'iso-22301-bmc' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'iso-27018-pii-public-cloud', title: 'ISO 27018 PII Protection - XcellHost', data: { consultingSlug: 'iso-27018-pii-public-cloud' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'iso-42001ai-risk', title: 'ISO 42001 AI Management - XcellHost', data: { consultingSlug: 'iso-42001ai-risk' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'soc-1-cunsulting', title: 'SOC 1 Consulting - XcellHost', data: { consultingSlug: 'soc-1-cunsulting' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'soc-2-cunsulting', title: 'SOC 2 Consulting - XcellHost', data: { consultingSlug: 'soc-2-cunsulting' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'pci-consulting', title: 'PCI DSS Consulting - XcellHost', data: { consultingSlug: 'pci-consulting' }, loadComponent: () => import('./pages/security-consulting.page').then(m => m.SecurityConsultingPage) },
  { path: 'email-signing-certificates', title: 'Email Signing Certificates - XcellHost', loadComponent: () => import('./pages/email-signing-certificates.page').then(m => m.EmailSigningCertificatesPage) },
  { path: 'code-signing-certificates', title: 'Code Signing Certificates - XcellHost', loadComponent: () => import('./pages/code-signing-certificates.page').then(m => m.CodeSigningCertificatesPage) },
  { path: 'certificate-management', title: 'Certificate Management - XcellHost', loadComponent: () => import('./pages/certificate-management.page').then(m => m.CertificateManagementPage) },
  { path: 'website-security-solutions', title: 'Website Security Solutions - XcellHost', loadComponent: () => import('./pages/website-security-solutions.page').then(m => m.WebsiteSecuritySolutionsPage) },
  { path: 'mark-certificates', title: 'Mark Certificates - XcellHost', loadComponent: () => import('./pages/mark-certificates.page').then(m => m.MarkCertificatesPage) },
  { path: 'sectigo-ev-code-signing', title: 'Sectigo EV Code Signing - XcellHost', loadComponent: () => import('./pages/sectigo-ev-code-signing.page').then(m => m.SectigoEvCodeSigningPage) },
  { path: 'sectigo-code-signing', title: 'Sectigo Code Signing - XcellHost', loadComponent: () => import('./pages/sectigo-code-signing.page').then(m => m.SectigoCodeSigningPage) },
  { path: 'rapidssl-ssl-certificates', title: 'RapidSSL Certificates - XcellHost', loadComponent: () => import('./pages/rapidssl.page').then(m => m.RapidsslPage) },
  { path: 'sarv-workspace', title: 'Sarv Workspace - XcellHost', loadComponent: () => import('./pages/sarv-workspace.page').then(m => m.SarvWorkspacePage) },
  { path: 'cloud-contact-center', title: 'Cloud Contact Center - XcellHost', loadComponent: () => import('./pages/cloud-contact-center.page').then(m => m.CloudContactCenterPage) },
  { path: 'managed-kubernetes', title: 'Managed Kubernetes - XcellHost', loadComponent: () => import('./pages/managed-kubernetes.page').then(m => m.ManagedKubernetesPage) },
  { path: 'under-construction/podcasts', title: 'The Cloud Podcast - XcellHost', loadComponent: () => import('./pages/podcasts.page').then(m => m.PodcastsPage) },

  {
    path: 'explore-cloud-servers',
    data: { productSlug: 'performance-cloud' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },

  {
    path: 'compare-products',
    data: { title: 'Compare Products' },
    loadComponent: () => import('./pages/under-construction.page').then((m) => m.UnderConstructionPage),
  },

  {
    path: 'microsoft-365-tenant-to-tenant-migration',
    loadComponent: () => import('./pages/microsoft-365-tenant-to-tenant-migration.page').then((m) => m.Microsoft365TenantToTenantMigrationPage),
  },

  ...Object.keys(FRAMEWORK_DETAILS).map(slug => ({ path: 'cybersecurity-frameworks/' + slug, data: { productSlug: slug }, loadComponent: () => import('./pages/product.page').then(m => m.ProductPage) })),
  {
    path: 'microsoft-365-business-standard-no-teams',
    loadComponent: () => import('./pages/microsoft-365-business-standard-no-teams.page').then((m) => m.Microsoft365BusinessStandardNoTeamsPage),
  },
  {
    path: 'microsoft-365-business-basic-no-teams',
    loadComponent: () => import('./pages/microsoft-365-business-basic-no-teams.page').then((m) => m.Microsoft365BusinessBasicNoTeamsPage),
  },
  {
    path: 'microsoft-365-business-premium-no-teams',
    loadComponent: () => import('./pages/microsoft-365-business-premium-no-teams.page').then((m) => m.Microsoft365BusinessPremiumNoTeamsPage),
  },
  {
    path: 'microsoft-365-business-standard',
    loadComponent: () => import('./pages/microsoft-365-business-standard.page').then((m) => m.Microsoft365BusinessStandardPage),
  },
  {
    path: 'microsoft-365-business-premium',
    loadComponent: () => import('./pages/microsoft-365-business-premium.page').then((m) => m.Microsoft365BusinessPremiumPage),
  },
  {
    path: 'microsoft-365-business-basic',
    loadComponent: () => import('./pages/microsoft-365-business-basic.page').then((m) => m.Microsoft365BusinessBasicPage),
  },
  {
    path: 'edr-checkout',
    data: { checkoutProduct: 'edr' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'rmm-checkout',
    data: { checkoutProduct: 'rmm' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),

  },
  {
    path: 'acronis-genai-checkout',
    data: { checkoutProduct: 'genai' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'cybird-checkout',
    data: { checkoutProduct: 'cybird' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'smb-cloud-desktop/checkout',
    data: { checkoutProduct: 'smb-desktop' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'cloud-disaster-recovery-smb-checkout',
    data: { checkoutProduct: 'cdr-smb' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'dpdpa-for-smb/launch-checkout',
    data: { checkoutProduct: 'dpdpa-launch' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'dpdpa-for-smb/growth-checkout',
    data: { checkoutProduct: 'dpdpa-growth' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'dpdpa-for-smb/enterprise-enquiry',
    data: { checkoutProduct: 'dpdpa-enterprise' },
    loadComponent: () => import('./pages/checkout.page').then((m) => m.CheckoutPage),
  },
  {
    path: 'managed-redis',
    loadComponent: () => import('./pages/managed-redis.page').then((m) => m.ManagedRedisPage),
  },
  ...[...MENU_SERVICE_PAGES, ...INDUSTRY_CLOUD_PAGES].filter((page) => page.slug !== 'smart-qr-and-nfc-automation' && page.slug !== 'gcc-cloud').map((page) => ({
    path: page.slug,
    data: { servicePage: page },
    loadComponent: () => import('./pages/menu-service.page').then((m) => m.MenuServicePage),
  })),
  {
    path: 'gcc-cloud',
    loadComponent: () => import('./pages/gcc-cloud.page').then((m) => m.GccCloudPage),
  },
  { path: 'mobile-application-penetration-testing', redirectTo: 'mobile-application-security-testing', pathMatch: 'full' },
  { path: 'aeo-geo-automation4', redirectTo: 'aeo-geo-automation', pathMatch: 'full' },
  { path: 'managed-365', redirectTo: 'managed-microsoft-365', pathMatch: 'full' },
  {
    path: 'cybersecurity-frameworks',
    loadComponent: () => import('./pages/cybersecurity-frameworks.page').then((m) => m.CybersecurityFrameworksPage),
  },
  {
    path: 'managed-mysql',
    data: { databaseSlug: 'managed-mysql', title: 'Managed MySQL' },
    loadComponent: () => import('./pages/managed-database.page').then((m) => m.ManagedDatabasePage),
  },
  {
    path: 'managed-mariadb',
    data: { databaseSlug: 'managed-mariadb', title: 'Managed MariaDB' },
    loadComponent: () => import('./pages/managed-database.page').then((m) => m.ManagedDatabasePage),
  },
  {
    path: 'managed-postgresql',
    data: { databaseSlug: 'managed-postgresql', title: 'Managed PostgreSQL' },
    loadComponent: () => import('./pages/managed-database.page').then((m) => m.ManagedDatabasePage),
  },
  {
    path: 'managed-oracle',
    data: { databaseSlug: 'managed-oracle', title: 'Managed Oracle' },
    loadComponent: () => import('./pages/managed-database.page').then((m) => m.ManagedDatabasePage),
  },
  {
    path: 'microsoft-365-enterprise-office365',
    data: { productSlug: 'microsoft-365-enterprise-office365' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'microsoft-365-enterprise-frontline',
    data: { productSlug: 'microsoft-365-enterprise-frontline' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'microsoft-365-enterprise-nonprofit',
    data: { productSlug: 'microsoft-365-enterprise-nonprofit' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'microsoft-365-enterprise-additional',
    data: { productSlug: 'microsoft-365-enterprise-additional' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  { path: 'explore-marketplace', loadComponent: () => import('./pages/explore-marketplace.page').then(m => m.ExploreMarketplacePage) },
  { path: 'customer-testimonials', loadComponent: () => import('./pages/customer-testimonials.page').then(m => m.CustomerTestimonialsPage) },
  { path: 'under-construction/customer-testimonials', redirectTo: 'customer-testimonials', pathMatch: 'full' },
  { path: 'company/customer-testimonials', redirectTo: 'customer-testimonials', pathMatch: 'full' },
  { path: 'under-construction/careers-overview', redirectTo: 'company/careers-overview', pathMatch: 'full' },
  { path: 'promo-offers', redirectTo: 'promotion-and-offers', pathMatch: 'full' },
  { path: 'under-construction/promotion-and-offers', redirectTo: 'promotion-and-offers', pathMatch: 'full' },
  { path: 'under-construction/trust-watch', redirectTo: 'company/trust-watch', pathMatch: 'full' },
  { path: 'domains', redirectTo: 'register-a-domain-name', pathMatch: 'full' },
  { path: 'iot-infrastructure', redirectTo: 'iot-cloud', pathMatch: 'full' },
  { path: 'why-xcellhost', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'company/why-xcellhost', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'company/our-team-our-story', redirectTo: 'about-us', pathMatch: 'full' },
  { path: 'about-us', data: { pageSlug: 'our-team-our-story' }, loadComponent: () => import('./pages/company.page').then((m) => m.CompanyPage) },
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
  { path: 'associat', redirectTo: 'associations', pathMatch: 'full' },
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

  { path: 'under-construction/ai-use-policy', loadComponent: () => import('./pages/ai-use-policy.page').then((m) => m.AiUsePolicyPage) },
  { path: 'under-construction/tsplus-demo-center', redirectTo: 'tsplus-demo-center', pathMatch: 'full' },
  { path: 'tsplus-demo-center', loadComponent: () => import('./pages/tsplus-demo-center.page').then((m) => m.TsplusDemoCenterPage) },
  { path: 'under-construction/acronis-demo-center', redirectTo: 'acronis-demo-center', pathMatch: 'full' },
  { path: 'acronis-demo-center', loadComponent: () => import('./pages/acronis-demo-center.page').then((m) => m.AcronisDemoCenterPage) },
  { path: 'under-construction/druva-demo-center', redirectTo: 'druva-demo-center', pathMatch: 'full' },
  { path: 'druva-demo-center', loadComponent: () => import('./pages/druva-demo-center.page').then((m) => m.DruvaDemoCenterPage) },
  { path: 'under-construction/xcellhost-demo-center', redirectTo: 'xcellhost-demo-center', pathMatch: 'full' },
  { path: 'xcellhost-demo-center', loadComponent: () => import('./pages/xcellhost-demo-center.page').then((m) => m.XcellhostDemoCenterPage) },
  { path: 'under-construction/events-catalog', loadComponent: () => import('./pages/events-catalog.page').then((m) => m.EventsCatalogPage) },
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
    redirectTo: 'about-us',
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
    path: 'acme-certificate',
    loadComponent: () => import('./pages/acme-certificate.page').then((m) => m.AcmeCertificatePage),
  },
  {
    path: 'acme-certificates',
    redirectTo: 'acme-certificate',
    pathMatch: 'full',
  },
  {
    path: 'xcellhost-acme-certificate',
    redirectTo: 'acme-certificate',
    pathMatch: 'full',
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
  { path: 'vendor-partners/acronis', loadComponent: () => import('./pages/acronis-partner.page').then((m) => m.AcronisPartnerPage) },
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
  { path: 'nvidia-b300-nodes', loadComponent: () => import('./pages/nvidia-b300.page').then((m) => m.NvidiaB300Page) },
  { path: 'nvidia-h200', loadComponent: () => import('./pages/nvidia-h200.page').then((m) => m.NvidiaH200Page) },
  {
    path: 'cloud-devops-services',
    data: { productSlug: 'cloud-devops-services' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'cloud-drive/checkout',
    loadComponent: () =>
      import('./pages/cloud-drive-checkout.page').then((m) => m.CloudDriveCheckoutPage),
  },
  { path: 'acronis-edr', redirectTo: '', pathMatch: 'full' },
  {
    path: 'email-security-smb',
    data: { productSlug: 'vortex-seg', productDisplayName: 'Email Security SMB' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'email-security-enterprise',
    data: { productSlug: 'vortex-seg', productDisplayName: 'Email Security Enterprise' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  // service pages sit at the root, so this must stay last
  { path: 'comodo-enterprise-pro-basic-pa', redirectTo: 'comodo-personal-authentication', pathMatch: 'full' },
  { path: 'co-location', redirectTo: 'co-location-services', pathMatch: 'full' },
  {
    path: 'advanced-endpoint-security-edr',
    data: { productSlug: 'advanced-endpoint-security-edr' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'scrutiny-edr',
    data: { productSlug: 'scrutiny-edr' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  {
    path: 'cloud-drive',
    data: { productSlug: 'cloud-drive' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  { path: 'microsoft-365', redirectTo: 'microsoft-365-smb', pathMatch: 'full' },
  { path: 'secure-dmarc', redirectTo: 'enterprise-dmarc', pathMatch: 'full' },
  { path: ':slug', loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage) },
  { path: '**', redirectTo: '' },
];

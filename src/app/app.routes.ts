import { FRAMEWORK_DETAILS } from './data/framework-details.data';
import { Routes } from '@angular/router';
import { MENU_SERVICE_PAGES } from './data/menu-service-pages.data';
import { INDUSTRY_CLOUD_PAGES } from './data/industry-cloud-pages.data';


export const routes: Routes = [
  { path: 'breach-and-attack-simulation', title: 'Breach & Attack Simulation | XcellHost', loadComponent: () => import('./pages/breach-and-attack-simulation.page').then(m => m.BreachAndAttackSimulationPage) },
  { path: 'purple-team-assessment', title: 'Purple Team Assessment | XcellHost', loadComponent: () => import('./pages/purple-team.page').then(m => m.PurpleTeamPage) },
  { path: 'office-365-e1-nonprofit', title: 'Office 365 E1 Nonprofit | XcellHost', data: { microsoft365PlanSource: 'office-365-e1-nonprofit' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'teams-essentials-frontline', title: 'Teams Essentials for Frontline | XcellHost', data: { microsoft365PlanSource: 'teams-essentials-frontline' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'office-365-e5', title: 'Office 365 E5 | XcellHost', data: { microsoft365PlanSource: 'office-365-e5' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-f1', title: 'Microsoft 365 F1 | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-f1' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-e5', title: 'Microsoft 365 E5 | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-e5' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-e3', title: 'Microsoft 365 E3 | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-e3' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'office-365-e1', title: 'Office 365 E1 | XcellHost', data: { microsoft365PlanSource: 'office-365-e1' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'office-365-e3', title: 'Office 365 E3 | XcellHost', data: { microsoft365PlanSource: 'office-365-e3' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'office-365-f3', title: 'Office 365 F3 | XcellHost', data: { microsoft365PlanSource: 'office-365-f3' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-f3', title: 'Microsoft 365 F3 | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-f3' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'office-365-e3-nonprofit', title: 'Office 365 E3 Nonprofit | XcellHost', data: { microsoft365PlanSource: 'office-365-e3-nonprofit' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-business-premium-nonprofit', title: 'Microsoft 365 Business Premium Nonprofit | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-business-premium-nonprofit' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-e3-nonprofit', title: 'Microsoft 365 E3 Nonprofit | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-e3-nonprofit' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-f3-nonprofit', title: 'Microsoft 365 F3 Nonprofit | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-f3-nonprofit' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },
  { path: 'microsoft-365-e5-nonprofit', title: 'Microsoft 365 E5 Nonprofit | XcellHost', data: { microsoft365PlanSource: 'microsoft-365-e5-nonprofit' }, loadComponent: () => import('./pages/microsoft-365-plan.page').then(m => m.Microsoft365PlanPage) },

  { path: 'hybrid-cloud', title: 'Private Cloud | XcellHost', data: { cloudSource: 'hybrid-cloud' }, loadComponent: () => import('./pages/cloud-infrastructure.page').then(m => m.CloudInfrastructurePage) },
  { path: 'global-cloudthe', redirectTo: 'global-cloud', pathMatch: 'full' },
  { path: 'global-cloud', title: 'Global Cloud | XcellHost', data: { cloudSource: 'global-cloud' }, loadComponent: () => import('./pages/cloud-infrastructure.page').then(m => m.CloudInfrastructurePage) },
  { path: 'co-location-services', title: 'Co-Location Services | XcellHost', data: { cloudSource: 'co-location-services' }, loadComponent: () => import('./pages/cloud-infrastructure.page').then(m => m.CloudInfrastructurePage) },

  ...[
    { path: 'microsoft-entra-workload-id', name: 'Microsoft Entra Workload ID', description: 'Secure workload identities, applications and service principals with Microsoft Entra.' },
    { path: 'microsoft-entra-internet-access', name: 'Microsoft Entra Internet Access', description: 'Protect access to internet applications with identity-aware secure web access.' },
    { path: 'microsoft-entra-private-access', name: 'Microsoft Entra Private Access', description: 'Connect users securely to private applications with Zero Trust access.' },
    { path: 'microsoft-entra-id-governance', name: 'Microsoft Entra ID Governance', description: 'Manage identity lifecycles, access reviews and permissions across your organization.' },
    { path: 'microsoft-entra-id-p1', name: 'Microsoft Entra ID P1', description: 'Enable single sign-on, Conditional Access and self-service password reset.' },
    { path: 'microsoft-entra-id-p2', name: 'Microsoft Entra ID P2', description: 'Add risk-based Identity Protection and privileged identity management to Entra ID.' },
    { path: 'microsoft-entra-suite', name: 'Microsoft Entra Suite', description: 'Unify identity protection, governance, internet access and private application access.' },
  ].map(({ path, name, description }) => ({
    path,
    title: `${name} | XcellHost`,
    data: { productSlug: path, searchTitle: name, searchDescription: description },
    loadComponent: () => import('./pages/product.page').then(m => m.ProductPage),
  })),

  { path: 'accops-hyworks', title: 'Accops HyWorks | XcellHost', data: { accopsSource: 'accops-hyworks' }, loadComponent: () => import('./pages/accops-product.page').then(m => m.AccopsProductPage) },
  { path: 'accops-hysecure', title: 'Accops HySecure | XcellHost', data: { accopsSource: 'accops-hysecure' }, loadComponent: () => import('./pages/accops-product.page').then(m => m.AccopsProductPage) },
  { path: 'accops-hyid', title: 'Accops HyID | XcellHost', data: { accopsSource: 'accops-hyid' }, loadComponent: () => import('./pages/accops-product.page').then(m => m.AccopsProductPage) },
  { path: 'accops-hylabs', title: 'Accops HyLabs | XcellHost', data: { accopsSource: 'accops-hylabs' }, loadComponent: () => import('./pages/accops-product.page').then(m => m.AccopsProductPage) },
  { path: 'accops-hydesk', title: 'Accops HyDesk | XcellHost', data: { accopsSource: 'accops-hydesk' }, loadComponent: () => import('./pages/accops-product.page').then(m => m.AccopsProductPage) },
  { path: 'more-from-accops', title: 'More From Accops | XcellHost', data: { accopsSource: 'more-from-accops' }, loadComponent: () => import('./pages/accops-product.page').then(m => m.AccopsProductPage) },


  {
    path: 'vendor-partners/red-hat',
    title: 'Red Hat Partner India | XcellHost',
    loadComponent: () => import('./pages/red-hat.page').then(m => m.RedHatPage),
  },
  { path: 'red-hat', redirectTo: 'vendor-partners/red-hat', pathMatch: 'full' },
  {
    path: 'ssl-installation-service',
    title: 'SSL Installation Service | XcellHost',
    loadComponent: () => import('./pages/ssl-installation-service.page').then(m => m.SslInstallationServicePage),
  },
  { path: 'under-construction/ssl-installation-service', redirectTo: 'ssl-installation-service', pathMatch: 'full' },

  ...['ai-identity-security', 'ai-security-platform', 'ai-security-audit', 'ai-security-assessment', 'ai-red-teaming-services'].map(path => ({
    path,
    title: ({ 'ai-identity-security': 'AI Identity Security', 'ai-security-platform': 'AI Security Platform', 'ai-security-audit': 'AI Security Audit', 'ai-security-assessment': 'AI Security Assessment', 'ai-red-teaming-services': 'AI Red Teaming Services' } as Record<string, string>)[path] + ' | XcellHost',
    data: { aiSecuritySource: path },
    loadComponent: () => import('./pages/ai-security-imported.page').then(m => m.AiSecurityImportedPage),
  })),
  ...['managed-gws', 'managed-mdm', 'managed-intune-services', 'managed-phishing-simulation'].map(path => ({
    path,
    title: ({ 'managed-gws': 'Managed Google Workspace', 'managed-mdm': 'Managed MDM', 'managed-intune-services': 'Managed Intune Services', 'managed-phishing-simulation': 'Managed Phishing Simulation' } as Record<string, string>)[path] + ' | XcellHost',
    data: { managedProductivitySource: path },
    loadComponent: () => import('./pages/managed-productivity-imported.page').then(m => m.ManagedProductivityImportedPage),
  })),
  ...['power-pages', 'power-apps', 'power-automate', 'power-bi'].map(path => ({
    path,
    title: ({ 'power-pages': 'Microsoft Power Pages', 'power-apps': 'Microsoft Power Apps', 'power-automate': 'Microsoft Power Automate', 'power-bi': 'Microsoft Power BI' } as Record<string, string>)[path] + ' | XcellHost',
    data: { powerPlatformSource: path },
    loadComponent: () => import('./pages/power-platform-imported.page').then(m => m.PowerPlatformImportedPage),
  })),
  ...['cpanel-control-panel', 'plesk-control-panel', 'webuzo-control-panel', 'cloudlinux', 'plesk-servers', 'cpanel-servers'].map(path => ({
    path,
    title: ({ 'cpanel-control-panel': 'cPanel Control Panel', 'plesk-control-panel': 'Plesk Control Panel', 'webuzo-control-panel': 'Webuzo Control Panel', cloudlinux: 'CloudLinux OS Licence', 'plesk-servers': 'Plesk Servers', 'cpanel-servers': 'cPanel Servers' } as Record<string, string>)[path] + ' | XcellHost',
    data: { hostingToolSource: path },
    loadComponent: () => import('./pages/hosting-tools-imported.page').then(m => m.HostingToolsImportedPage),
  })),
  { path: 'managed-microsoft-sentinel', title: 'Managed Microsoft Sentinel | XcellHost', loadComponent: () => import('./pages/managed-microsoft-sentinel.page').then(m => m.ManagedMicrosoftSentinelPage) },
  { path: 'under-construction/managed-microsoft-sentinel', redirectTo: '/managed-microsoft-sentinel', pathMatch: 'full' },

  { path: 'dedicated-ai-servers', title: 'Dedicated AI Servers | XcellHost', loadComponent: () => import('./pages/dedicated-ai-servers.page').then(m => m.DedicatedAiServersPage) },

  { path: 'sage-300-hosting', title: 'Sage 300 ERP Hosting | XcellHost', data: { sageSource: 'sage-300-hosting' }, loadComponent: () => import('./pages/sage-imported.page').then(m => m.SageImportedPage) },
  { path: 'sage-x3-hosting', title: 'Sage X3 Hosting | XcellHost', data: { sageSource: 'sage-x3-hosting' }, loadComponent: () => import('./pages/sage-imported.page').then(m => m.SageImportedPage) },
  { path: 'virtual-networks', title: 'Virtual Networks | XcellHost', data: { networkSource: 'virtual-networks' }, loadComponent: () => import('./pages/cloud-network-imported.page').then(m => m.CloudNetworkImportedPage) },
  { path: 'virtual-firewalls', title: 'Virtual Firewalls | XcellHost', data: { networkSource: 'virtual-firewalls' }, loadComponent: () => import('./pages/cloud-network-imported.page').then(m => m.CloudNetworkImportedPage) },
  { path: 'virtual-load-balancer', title: 'Virtual Load Balancer | XcellHost', data: { networkSource: 'virtual-load-balancer' }, loadComponent: () => import('./pages/cloud-network-imported.page').then(m => m.CloudNetworkImportedPage) },
  { path: 'scrutiny-dlp', title: 'Scrutiny DLP | XcellHost', data: { scrutinySource: 'scrutiny-dlp' }, loadComponent: () => import('./pages/scrutiny-imported.page').then(m => m.ScrutinyImportedPage) },
  { path: 'sap-on-aws', title: 'SAP on AWS | XcellHost', loadComponent: () => import('./pages/sap-on-aws.page').then(m => m.SapOnAwsPage) },
  { path: 'sap-on-gcp', title: 'SAP on Google Cloud | XcellHost', loadComponent: () => import('./pages/sap-on-gcp.page').then(m => m.SapOnGcpPage) },
  { path: 'sap-on-azure', title: 'SAP on Azure | XcellHost', loadComponent: () => import('./pages/sap-on-azure.page').then(m => m.SapOnAzurePage) },

  { path: 'under-construction/openstack-api', redirectTo: '/openstack-api', pathMatch: 'full' },
  { path: 'openstack-api', title: 'OpenStack API | XcellHost', data: { developerSlug: 'openstack-api' }, loadComponent: () => import('./pages/developer-imported.page').then(m => m.DeveloperImportedPage) },
  { path: 'under-construction/terraform-provider', redirectTo: '/terraform-provider', pathMatch: 'full' },
  { path: 'terraform-provider', title: 'Terraform Provider | XcellHost', data: { developerSlug: 'terraform-provider' }, loadComponent: () => import('./pages/developer-imported.page').then(m => m.DeveloperImportedPage) },
  { path: 'under-construction/s3-object-storage-api', redirectTo: '/s3-object-storage-api', pathMatch: 'full' },
  { path: 's3-object-storage-api', title: 'S3 Object Storage API | XcellHost', data: { developerSlug: 's3-object-storage-api' }, loadComponent: () => import('./pages/developer-imported.page').then(m => m.DeveloperImportedPage) },
  { path: 'under-construction/openstack-cli', redirectTo: '/openstack-cli', pathMatch: 'full' },
  { path: 'openstack-cli', title: 'OpenStack CLI | XcellHost', data: { developerSlug: 'openstack-cli' }, loadComponent: () => import('./pages/developer-imported.page').then(m => m.DeveloperImportedPage) },
  { path: 'under-construction/openstack-credentials', redirectTo: '/openstack-credentials', pathMatch: 'full' },
  { path: 'openstack-credentials', title: 'OpenStack Credentials | XcellHost', data: { developerSlug: 'openstack-credentials' }, loadComponent: () => import('./pages/developer-imported.page').then(m => m.DeveloperImportedPage) },
  { path: 'under-construction/kubernetes-api', redirectTo: '/kubernetes-api', pathMatch: 'full' },
  { path: 'kubernetes-api', title: 'Kubernetes API | XcellHost', data: { developerSlug: 'kubernetes-api' }, loadComponent: () => import('./pages/developer-imported.page').then(m => m.DeveloperImportedPage) },

  { path: 'network-access-control-nac', title: 'Genian NAC | XcellHost', loadComponent: () => import('./pages/genian-nac.page').then(m => m.GenianNacPage) },

  // Veritas renders the supplied page content inside the existing site shell.
  { path: 'veritas', title: 'AI Visibility & SEO | XcellHost', loadComponent: () => import('./pages/veritas.page').then(m => m.VeritasPage) },

  { path: 'genian-nac', title: 'Genian NAC | XcellHost', loadComponent: () => import('./pages/genian-nac.page').then(m => m.GenianNacPage) },
  { path: 'bare-metal-servers/checkout', title: 'Complete Your Bare Metal Server Order | XcellHost', data: { checkoutProduct: 'bare-metal' }, loadComponent: () => import('./pages/checkout.page').then(m => m.CheckoutPage) },
  { path: 'gpu-servers/checkout', title: 'Complete Your GPU Server Order | XcellHost', data: { checkoutProduct: 'gpu' }, loadComponent: () => import('./pages/checkout.page').then(m => m.CheckoutPage) },
  { path: 'tally-on-cloud/checkout', data: { checkoutProduct: 'tally' }, loadComponent: () => import('./pages/checkout.page').then(m => m.CheckoutPage) },
  { path: 'serverless-inference', data: { inferenceSlug: 'serverless-inference' }, loadComponent: () => import('./pages/inference-imported.page').then(m => m.InferenceImportedPage) },
  { path: 'dedicated-inference', data: { inferenceSlug: 'dedicated-inference' }, loadComponent: () => import('./pages/inference-imported.page').then(m => m.InferenceImportedPage) },
  { path: 'model-catalog', data: { inferenceSlug: 'model-catalog' }, loadComponent: () => import('./pages/inference-imported.page').then(m => m.InferenceImportedPage) },
  { path: 'model-directory', data: { inferenceSlug: 'model-directory' }, loadComponent: () => import('./pages/inference-imported.page').then(m => m.InferenceImportedPage) },
  { path: 'sectigo-ssl', data: { sectigoSlug: 'sectigo-ssl' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ov-ssl-wildcard', data: { sectigoSlug: 'sectigo-ov-ssl-wildcard' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ov-ssl', data: { sectigoSlug: 'sectigo-ov-ssl' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-acme-certificate-as-a-service', data: { sectigoSlug: 'sectigo-acme-certificate-as-a-service' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ssl-wildcard', data: { sectigoSlug: 'sectigo-ssl-wildcard' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ssl-multi-domain-ucc', data: { sectigoSlug: 'sectigo-ssl-multi-domain-ucc' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ov-ssl-multi-domain-wildcard', data: { sectigoSlug: 'sectigo-ov-ssl-multi-domain-wildcard' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ov-ssl-multi-domain-ucc', data: { sectigoSlug: 'sectigo-ov-ssl-multi-domain-ucc' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ev-ssl-multi-domain-ucc', data: { sectigoSlug: 'sectigo-ev-ssl-multi-domain-ucc' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'sectigo-ev-ssl', data: { sectigoSlug: 'sectigo-ev-ssl' }, loadComponent: () => import('./pages/sectigo-detail.page').then(m => m.SectigoDetailPage) },
  { path: 'explore-vps', redirectTo: 'vps-hosting', pathMatch: 'full' },
  { path: 'wordpress-vps', data: { vpsSlug: 'wordpress-vps' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'windows-vps', data: { vpsSlug: 'windows-vps' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'vps-usa', data: { vpsSlug: 'vps-usa' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'vps-netherlands', data: { vpsSlug: 'vps-netherlands' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'vps-india', data: { vpsSlug: 'vps-india' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'vps-hosting', data: { vpsSlug: 'vps-hosting' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'openclaw-vps', data: { vpsSlug: 'openclaw-vps' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'n8n-vps', data: { vpsSlug: 'n8n-vps' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'cpanel-vps', data: { vpsSlug: 'cpanel-vps' }, loadComponent: () => import('./pages/vps-imported.page').then(m => m.VpsImportedPage) },
  { path: 'microsoft-visio', title: 'Microsoft Visio | XcellHost', loadComponent: () => import('./pages/microsoft-visio.page').then(m => m.MicrosoftVisioPage) },
  { path: 'microsoft-viva', title: 'Microsoft Viva | XcellHost', loadComponent: () => import('./pages/microsoft-viva.page').then(m => m.MicrosoftVivaPage) },
  { path: 'mcrosoft-project-server', title: 'Microsoft Project Server | XcellHost', loadComponent: () => import('./pages/project-server.page').then(m => m.ProjectServerPage) },
  { path: 'microsoft-project-server', redirectTo: 'mcrosoft-project-server', pathMatch: 'full' },
  { path: 'acronis-ai', title: 'Acronis AI Platform | XcellHost', data: { productSlug: 'acronis-ai' }, loadComponent: () => import('./pages/product.page').then(m => m.ProductPage) },


  {
    path: 'geotrust-true-businessid/checkout',
    title: 'GeoTrust True BusinessID Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-checkout.page').then(m => m.GeoTrustTrueBusinessIdCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid', data: { businessIdVariant: 'single' },
    loadComponent: () => import('./pages/geotrust-businessid.page').then(m => m.GeoTrustBusinessIdPage),
  },
  {
    path: 'geotrust-true-businessid-multi-domain/checkout',
    title: 'GeoTrust True BusinessID Multi-Domain Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-multi-domain-checkout.page').then(m => m.GeoTrustTrueBusinessIdMultiDomainCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid-multi-domain', data: { businessIdVariant: 'multi' },
    loadComponent: () => import('./pages/geotrust-businessid.page').then(m => m.GeoTrustBusinessIdPage),
  },
  {
    path: 'geotrust-true-businessid-ov/checkout',
    title: 'GeoTrust TrueBusiness ID OV (FLEX) Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-ov-flex-checkout.page').then(m => m.GeoTrustTrueBusinessIdOvFlexCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid-ov',
    title: 'GeoTrust TrueBusiness ID OV (FLEX) | XcellHost',
    data: { businessIdVariant: 'ovFlex' },
    loadComponent: () => import('./pages/geotrust-businessid.page').then(m => m.GeoTrustBusinessIdPage),
  },
  {
    path: 'geotrust-true-businessid-ev/checkout',
    title: 'GeoTrust True BusinessID with EV Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-with-ev-checkout.page').then(m => m.GeoTrustTrueBusinessIdWithEvCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid-ev',
    title: 'GeoTrust True BusinessID with EV | XcellHost',
    data: { businessIdVariant: 'ev' },
    loadComponent: () => import('./pages/geotrust-businessid.page').then(m => m.GeoTrustBusinessIdPage),
  },
  {
    path: 'geotrust-true-businessid-ev-multi-domain/checkout',
    title: 'GeoTrust TrueBusiness ID w/ EV Multi-Domain Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-ev-multi-domain-checkout.page').then(m => m.GeoTrustTrueBusinessIdEvMultiDomainCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid-ev-multi-domain', data: { businessIdVariant: 'evMulti' },
    loadComponent: () => import('./pages/geotrust-businessid.page').then(m => m.GeoTrustBusinessIdPage),
  },
  {
    path: 'geotrust-true-businessid-wildcard/checkout',
    title: 'GeoTrust True BusinessID Wildcard Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-wildcard-checkout.page').then(m => m.GeoTrustTrueBusinessIdWildcardCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid-wildcard', data: { businessIdVariant: 'wildcard' },
    loadComponent: () => import('./pages/geotrust-businessid.page').then(m => m.GeoTrustBusinessIdPage),
  },
  {
    path: 'geotrust-quickssl-premium-san/checkout',
    title: 'GeoTrust QuickSSL Premium SAN Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-quickssl-premium-san-checkout.page').then(m => m.GeoTrustQuickSslPremiumSanCheckoutPage),
  },
  {
    path: 'geotrust-quickssl-premium-san', data: { quickSslVariant: 'san' },
    loadComponent: () => import('./pages/geotrust-quickssl.page').then(m => m.GeoTrustQuickSslPage),
  },
  {
    path: 'geotrust-quickssl-premium/checkout',
    title: 'GeoTrust QuickSSL Premium Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-quickssl-premium-checkout.page').then(m => m.GeoTrustQuickSslPremiumCheckoutPage),
  },
  {
    path: 'geotrust-quickssl-premium', data: { quickSslVariant: 'single' },
    loadComponent: () => import('./pages/geotrust-quickssl.page').then(m => m.GeoTrustQuickSslPage),
  },
  {
    path: 'geotrust-quickssl-premium-wildcard/checkout',
    title: 'GeoTrust QuickSSL Premium Wildcard Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-quickssl-premium-wildcard-checkout.page').then(m => m.GeoTrustQuickSslPremiumWildcardCheckoutPage),
  },
  {
    path: 'geotrust-quickssl-premium-wildcard', data: { quickSslVariant: 'wildcard' },
    loadComponent: () => import('./pages/geotrust-quickssl.page').then(m => m.GeoTrustQuickSslPage),
  },
  {
    path: 'geotrust-dv-ssl-flex/checkout',
    title: 'GeoTrust DV SSL (FLEX) Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-dv-ssl-flex-checkout.page').then(m => m.GeoTrustDvSslFlexCheckoutPage),
  },
  {
    path: 'geotrust-dv-ssl-flex',
    title: 'GeoTrust DV SSL (FLEX) | XcellHost',
    loadComponent: () => import('./pages/geotrust-dv-ssl-flex.page').then(m => m.GeoTrustDvSslFlexPage),
  },
  {
    path: 'geotrust-true-businessid-ev-flex/checkout',
    title: 'GeoTrust TrueBusiness ID EV (FLEX) Checkout | XcellHost',
    loadComponent: () => import('./pages/geotrust-truebusiness-id-ev-flex-checkout.page').then(m => m.GeoTrustTrueBusinessIdEvFlexCheckoutPage),
  },
  {
    path: 'geotrust-true-businessid-ev-flex',
    title: 'GeoTrust TrueBusiness ID EV (FLEX) | XcellHost',
    loadComponent: () => import('./pages/geotrust-true-businessid-ev-flex.page').then(m => m.GeoTrustTrueBusinessIdEvFlexPage),
  },

  {
    path: 'digicert-ev-multi-domain-ssl/checkout',
    title: 'DigiCert EV Multi-Domain SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-ev-multi-domain-ssl-checkout.page').then(m => m.DigicertEvMultiDomainSslCheckoutPage),
  },
  {path:'digicert-ev-multi-domain-ssl',title:'DigiCert EV Multi-Domain SSL - XcellHost',data:{sslSlug:'digicert-ev-multi-domain-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-wildcard-ssl/checkout',
    title: 'DigiCert Wildcard SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-wildcard-ssl-checkout.page').then(m => m.DigicertWildcardSslCheckoutPage),
  },
  {path:'digicert-wildcard-ssl',title:'DigiCert Wildcard SSL - XcellHost',data:{sslSlug:'digicert-wildcard-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-secure-site-ssl/checkout',
    title: 'DigiCert Secure Site SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-secure-site-ssl-checkout.page').then(m => m.DigicertSecureSiteSslCheckoutPage),
  },
  {
    path: 'digicert-secure-site-ev-ssl/checkout',
    title: 'DigiCert Secure Site EV SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-secure-site-ev-ssl-checkout.page').then(m => m.DigicertSecureSiteEvSslCheckoutPage),
  },
  {path:'digicert-secure-site-ev-ssl',title:'DigiCert Secure Site EV SSL - XcellHost',data:{sslSlug:'digicert-secure-site-ev-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-secure-site-multi-domain-ssl/checkout',
    title: 'DigiCert Secure Site Multi-Domain Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-secure-site-multi-domain-checkout.page').then(m => m.DigicertSecureSiteMultiDomainCheckoutPage),
  },
  {path:'digicert-secure-site-multi-domain-ssl',title:'DigiCert Secure Site Multi-Domain - XcellHost',data:{sslSlug:'digicert-secure-site-multi-domain-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-secure-site-wildcard-ssl/checkout',
    title: 'DigiCert Secure Site Wildcard Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-secure-site-wildcard-checkout.page').then(m => m.DigicertSecureSiteWildcardCheckoutPage),
  },
  {path:'digicert-secure-site-wildcard-ssl',title:'DigiCert Secure Site Wildcard - XcellHost',data:{sslSlug:'digicert-secure-site-wildcard-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-secure-site-pro-ssl/checkout',
    title: 'DigiCert Secure Site Pro SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-secure-site-pro-ssl-checkout.page').then(m => m.DigicertSecureSiteProSslCheckoutPage),
  },
  {path:'digicert-secure-site-pro-ssl',title:'DigiCert Secure Site Pro SSL - XcellHost',data:{sslSlug:'digicert-secure-site-pro-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-secure-site-pro-ev-ssl/checkout',
    title: 'DigiCert Secure Site Pro EV SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-secure-site-pro-ev-ssl-checkout.page').then(m => m.DigicertSecureSiteProEvSslCheckoutPage),
  },
  {path:'digicert-secure-site-pro-ev-ssl',title:'DigiCert Secure Site Pro EV SSL - XcellHost',data:{sslSlug:'digicert-secure-site-pro-ev-ssl'},loadComponent:()=>import('./pages/digicert-ssl-detail.page').then(m=>m.DigicertSslDetailPage)},
  {
    path: 'digicert-multi-domain-ssl/checkout',
    title: 'DigiCert Multi-Domain SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-multi-domain-ssl-checkout.page').then(m => m.DigicertMultiDomainSslCheckoutPage),
  },
  { path: 'digicert-multi-domain-ssl', title: 'DigiCert Multi-Domain SSL - XcellHost', loadComponent: () => import('./pages/digicert-multi-domain-ssl.page').then(m => m.DigicertMultiDomainSslPage) },
  {
    path: 'digicert-ev-ssl/checkout',
    title: 'DigiCert Extended Validation SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-extended-validation-ssl-checkout.page').then(m => m.DigicertExtendedValidationSslCheckoutPage),
  },
  { path: 'digicert-ev-ssl', title: 'DigiCert EV SSL - XcellHost', loadComponent: () => import('./pages/digicert-ev-ssl.page').then(m => m.DigicertEvSslPage) },
  {
    path: 'digicert-standard-ssl/checkout',
    title: 'DigiCert Standard SSL Checkout | XcellHost',
    loadComponent: () => import('./pages/digicert-standard-ssl-checkout.page').then(m => m.DigicertStandardSslCheckoutPage),
  },
  { path: 'digicert-standard-ssl', title: 'DigiCert Standard SSL - XcellHost', loadComponent: () => import('./pages/digicert-standard-ssl.page').then(m => m.DigicertStandardSslPage) },

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
  { path: 'sarv-workspace', redirectTo: 'xcellworkspace', pathMatch: 'full' },
  { path: 'xcellworkspace', title: 'XcellWorkSpace - XcellHost', loadComponent: () => import('./pages/sarv-workspace.page').then(m => m.SarvWorkspacePage) },
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
    title: 'Product Comparisons | XcellHost',
    loadComponent: () => import('./pages/compare-products.page').then((m) => m.CompareProductsPage),
  },
  {
    path: 'compare-products/:comparison',
    loadComponent: () => import('./pages/product-comparison-detail.page').then((m) => m.ProductComparisonDetailPage),
  },

  {
    path: 'microsoft-365-tenant-to-tenant-migration',
    loadComponent: () => import('./pages/microsoft-365-tenant-to-tenant-migration.page').then((m) => m.Microsoft365TenantToTenantMigrationPage),
  },
  {
    path: 'microsoft-365-e7',
    title: 'Microsoft 365 E7 (Frontier Suite) | XcellHost',
    loadComponent: () => import('./pages/microsoft-365-e7.page').then((m) => m.Microsoft365E7Page),
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
    title: 'GCC Cloud | XcellHost',
    data: { networkSource: 'gcc-cloud' },
    loadComponent: () => import('./pages/cloud-network-imported.page').then((m) => m.CloudNetworkImportedPage),
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
  { path: 'sitemap', title: 'Sitemap | XcellHost', loadComponent: () => import('./pages/sitemap.page').then((m) => m.SitemapPage) },
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
  { path: 'under-construction/plesk-demo-center', redirectTo: 'plesk-demo-center', pathMatch: 'full' },
  { path: 'plesk-demo-center', data: { controlPanel: 'plesk' }, loadComponent: () => import('./pages/control-panel-demo-center.page').then((m) => m.ControlPanelDemoCenterPage) },
  {
    path: 'tally-demo-center',
    title: 'Tally Demo Center | XcellHost',
    data: { searchDescription: 'Explore Tally on Cloud workspace walkthroughs and request a live demo.' },
    loadComponent: () => import('./pages/tally-demo-center.page').then(m => m.TallyDemoCenterPage),
  },
  { path: 'under-construction/cpanel-demo-center', redirectTo: 'cpanel-demo-center', pathMatch: 'full' },
  { path: 'cpanel-demo-center', data: { controlPanel: 'cpanel' }, loadComponent: () => import('./pages/control-panel-demo-center.page').then((m) => m.ControlPanelDemoCenterPage) },
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
    path: 'acme-enabled-ssl-certificates',
    loadComponent: () => import('./pages/acme-certificate.page').then((m) => m.AcmeCertificatePage),
  },
  {
    path: 'acme-certificate',
    redirectTo: 'acme-enabled-ssl-certificates',
    pathMatch: 'full',
  },
  {
    path: 'acme-certificates',
    redirectTo: 'acme-enabled-ssl-certificates',
    pathMatch: 'full',
  },
  {
    path: 'xcellhost-acme-certificate',
    redirectTo: 'acme-enabled-ssl-certificates',
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
  { path: 'vendor-partners/tsplus', loadComponent: () => import('./pages/tsplus-partner.page').then((m) => m.TsplusPartnerPage) },
  {
    path: 'vendor-partners/fortinet',
    redirectTo: '/fortinet-fortigate',
    pathMatch: 'full',
  },
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
    path: 'explore-bare-metal-servers',
    data: { productSlug: 'bare-metal-servers' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
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
    title: 'Scrutiny EDR | XcellHost',
    data: { scrutinySource: 'scrutiny-edr' },
    loadComponent: () => import('./pages/scrutiny-imported.page').then((m) => m.ScrutinyImportedPage),
  },
  {
    path: 'cloud-drive',
    data: { productSlug: 'cloud-drive' },
    loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage),
  },
  { path: 'microsoft-365', redirectTo: 'microsoft-365-smb', pathMatch: 'full' },
  { path: 'secure-dmarc', redirectTo: 'enterprise-dmarc', pathMatch: 'full' },
  { path: 'clm-solutions', redirectTo: 'certificate-mgmt-solutions', pathMatch: 'full' },
  { path: 'zoho-sign', loadComponent: () => import('./pages/zoho-sign.page').then((m) => m.ZohoSignPage) },
  {
    path: 'accops-digital-workspace',
    loadComponent: () => import('./pages/accops-digital-workspace.page').then((m) => m.AccopsDigitalWorkspacePage),
  },
  {
    path: 'cloud-desktop-enterprise-vdi',
    loadComponent: () => import('./pages/cloud-desktop-enterprise-vdi.page').then((m) => m.CloudDesktopEnterpriseVdiPage),
  },
  {
    path: 'sap-hosting',
    loadComponent: () => import('./pages/sap-hosting.page').then((m) => m.SapHostingPage),
  },
  {
    path: 'sap-b1-cloud',
    loadComponent: () => import('./pages/sap-b1-cloud.page').then((m) => m.SapB1CloudPage),
  },
  {
    path: 'sap-s4-hana-private-cloud',
    loadComponent: () => import('./pages/sap-s4-hana-private-cloud.page').then((m) => m.SapS4HanaPrivateCloudPage),
  },
  {
    path: 'anydesk',
    loadComponent: () => import('./pages/anydesk.page').then((m) => m.AnydeskPage),
  },
  {
    path: 'teamviewer',
    loadComponent: () => import('./pages/teamviewer.page').then((m) => m.TeamviewerPage),
  },
  {
    path: 'fortinet-fortigate',
    loadComponent: () => import('./pages/fortinet-fortigate.page').then((m) => m.FortinetFortigatePage),
  },
  {
    path: 'whats-new',
    loadComponent: () => import('./pages/whats-new.page').then((m) => m.WhatsNewPage),
  },
  {
    path: 'acronis-ot',
    loadComponent: () => import('./pages/acronis-ot.page').then((m) => m.AcronisOtPage),
  },
  {
    path: 'anti-ransomware-warranty',
    loadComponent: () => import('./pages/anti-ransomware-warranty.page').then((m) => m.AntiRansomwareWarrantyPage),
  },
  { path: ':slug', loadComponent: () => import('./pages/product.page').then((m) => m.ProductPage) },
  { path: '**', redirectTo: '' },
];

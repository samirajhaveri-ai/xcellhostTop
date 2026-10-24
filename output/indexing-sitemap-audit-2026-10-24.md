# XcellHost indexing and sitemap audit

Generated: 2026-10-24T13:58:10.576Z

## Findings

- Audited 801 URLs from the workbook's "Non-indexed missing sitemap" sheet.
- 801 return HTTP 200, but 583 contain only the SPA shell and 215 are taxonomy or placeholder paths.
- 0 returned a noindex directive; 0 lacked a canonical tag; 12 canonicalized elsewhere.
- 799 return duplicate app-shell content, and 37 mapped canonical pages have no static internal-link reference in the repository.
- 126 legacy URLs map to a current published canonical page: 114 exact service/route mappings and 12 probable blog-title mappings.
- Legacy, taxonomy, parameter and soft-404 URLs should not be added to the sitemap. Their current canonical destinations are the sitemap candidates.

## Legacy URLs with a published canonical candidate

| Legacy URL | Published canonical | Mapping |
|---|---|---|
| https://xcellhost.cloud/bare-metal-server/ | https://xcellhost.cloud/bare-metal-servers/ | route-redirect |
| https://xcellhost.cloud/category/cloud-desktop/azure-virtual-desktop/ | https://xcellhost.cloud/azure-virtual-desktop/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/cloud-disaster-recovery/ | https://xcellhost.cloud/cloud-disaster-recovery/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/cloud-mobile-device-mgmt/ | https://xcellhost.cloud/cloud-mobile-device-mgmt/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/cloud-object-storage/ | https://xcellhost.cloud/cloud-object-storage/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/entra-id-backup/ | https://xcellhost.cloud/entra-id-backup/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/google-workspace-backup/ | https://xcellhost.cloud/google-workspace-backup/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/intelligent-backup/ | https://xcellhost.cloud/intelligent-backup/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-data-protect/microsoft-365-backup/ | https://xcellhost.cloud/microsoft-365-backup/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-erp/sap-on-cloud/ | https://xcellhost.cloud/sap-on-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/apm-as-a-service/ | https://xcellhost.cloud/apm-as-a-service/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-cdn/ | https://xcellhost.cloud/cloud-cdn/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-connectivity/ | https://xcellhost.cloud/cloud-connectivity/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-dns/ | https://xcellhost.cloud/cloud-dns/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-nac/ | https://xcellhost.cloud/cloud-nac/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-sase/ | https://xcellhost.cloud/cloud-sase/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-sd-wan/ | https://xcellhost.cloud/cloud-sd-wan/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/cloud-vpn/ | https://xcellhost.cloud/cloud-vpn/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-networking/unified-ztna/ | https://xcellhost.cloud/unified-ztna/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-productivity/business-e-mail/ | https://xcellhost.cloud/business-e-mail/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-productivity/cloud-conferencing/ | https://xcellhost.cloud/cloud-conferencing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-productivity/cloud-pbx/ | https://xcellhost.cloud/cloud-pbx/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-productivity/email-encryption/ | https://xcellhost.cloud/email-encryption/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-productivity/email-signature/ | https://xcellhost.cloud/email-signature/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud-productivity/enterprise-dmarc/ | https://xcellhost.cloud/enterprise-dmarc/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud_infra/dedicated-private-cloud/ | https://xcellhost.cloud/dedicated-private-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud_infra/global-cloud/ | https://xcellhost.cloud/global-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud_infra/hybrid-cloud/ | https://xcellhost.cloud/hybrid-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud_infra/marg-on-cloud/ | https://xcellhost.cloud/marg-on-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/cloud_infra/performance-cloud/ | https://xcellhost.cloud/performance-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-aws/ | https://xcellhost.cloud/managed-aws/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-azure/ | https://xcellhost.cloud/managed-azure/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-devops/ | https://xcellhost.cloud/managed-devops/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-intune-services/ | https://xcellhost.cloud/managed-intune-services/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-kubernetes/ | https://xcellhost.cloud/managed-kubernetes/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-multi-cloud/ | https://xcellhost.cloud/managed-multi-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/managed-cloud-2/managed-oracle-cloud/ | https://xcellhost.cloud/managed-oracle-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/smb_cloud/ca-cloud/ | https://xcellhost.cloud/ca-cloud/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/smb_cloud/cloud-backup/ | https://xcellhost.cloud/cloud-backup/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/smb_cloud/smb-cloud-desktop/ | https://xcellhost.cloud/smb-cloud-desktop/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/cloud/smb_cloud/web-security-sitelock/ | https://xcellhost.cloud/web-security-sitelock/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/comodo-code-signing/ | https://xcellhost.cloud/comodo-code-signing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/comodo-ev-code-signing/ | https://xcellhost.cloud/comodo-ev-code-signing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/device-attestation-certificates/ | https://xcellhost.cloud/device-attestation-certificates/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/digicert-code-signing/ | https://xcellhost.cloud/digicert-code-signing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/managed-pki/ | https://xcellhost.cloud/managed-pki/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/private-ca/ | https://xcellhost.cloud/private-ca/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/sectigo-code-signing/ | https://xcellhost.cloud/sectigo-code-signing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/sectigo-ev-code-signing/ | https://xcellhost.cloud/sectigo-ev-code-signing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/ssl-certificates/ | https://xcellhost.cloud/ssl-certificates/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/ssl-certificates/digicert-ssl-certificates/ | https://xcellhost.cloud/digicert-ssl-certificates/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/digital-trust/ssl-certificates/geotrust-ssl-certificates/ | https://xcellhost.cloud/geotrust-ssl-certificates/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-consulting/cyber-security-audit/ | https://xcellhost.cloud/cyber-security-audit/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-consulting/managed-grc/ | https://xcellhost.cloud/managed-grc/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-consulting/source-code-review/ | https://xcellhost.cloud/source-code-review/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-identity/cloud-identity/ | https://xcellhost.cloud/cloud-identity/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-identity/identity-platform/ | https://xcellhost.cloud/identity-platform/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-identity/zero-trust-security-access/ | https://xcellhost.cloud/zero-trust-security-access/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-ir/ir-monitoring/ | https://xcellhost.cloud/ir-monitoring/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-ir/ir-plan-review/ | https://xcellhost.cloud/ir-plan-review/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-ir/ir-retainers/ | https://xcellhost.cloud/ir-retainers/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-ir/tabletop-exercises/ | https://xcellhost.cloud/tabletop-exercises/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-ir/threat-hunting-training/ | https://xcellhost.cloud/threat-hunting-training/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-operations/ | https://xcellhost.cloud/security-operations/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-operations/cloud-security-log-monitoring/ | https://xcellhost.cloud/cloud-security-log-monitoring/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-operations/cloud-siem-as-a-service/ | https://xcellhost.cloud/cloud-siem-as-a-service/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-operations/managed-microsoft-sentinel/ | https://xcellhost.cloud/managed-microsoft-sentinel/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-products/certified-disk-erasure/ | https://xcellhost.cloud/certified-disk-erasure/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-products/cloud-dlp/ | https://xcellhost.cloud/cloud-dlp/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-products/cloud-password-manager/ | https://xcellhost.cloud/cloud-password-manager/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/blue-team-assessment/ | https://xcellhost.cloud/blue-team-assessment/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/cloud-security-posture-mgmt/ | https://xcellhost.cloud/cloud-security-posture-mgmt/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/digital-risk-monitoring/ | https://xcellhost.cloud/digital-risk-monitoring/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/ot-assessment/ | https://xcellhost.cloud/ot-assessment/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/patch-mgmt-as-a-service/ | https://xcellhost.cloud/patch-mgmt-as-a-service/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/red-team-assessment/ | https://xcellhost.cloud/red-team-assessment/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/threat-intelligence/ | https://xcellhost.cloud/threat-intelligence/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-risk-assessment/vapt-services/ | https://xcellhost.cloud/vapt-services/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-testing/api-penetration-testing/ | https://xcellhost.cloud/api-penetration-testing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-testing/iot-penetration-testing/ | https://xcellhost.cloud/iot-penetration-testing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/security/security-training/security-awareness-training/ | https://xcellhost.cloud/security-awareness-training/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/software/data-analytics/ | https://xcellhost.cloud/data-analytics/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/software/data-engineering/ | https://xcellhost.cloud/data-engineering/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/software/data-governance/ | https://xcellhost.cloud/data-governance/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/software/data-modernization/ | https://xcellhost.cloud/data-modernization/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/software/data-visualization/ | https://xcellhost.cloud/data-visualization/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/software/data-warehouse/ | https://xcellhost.cloud/data-warehouse/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-capability/case-management/ | https://xcellhost.cloud/case-management/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-capability/ndr/ | https://xcellhost.cloud/ndr/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-capability/ng-siem/ | https://xcellhost.cloud/ng-siem/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-capability/security-stack-consolidation/ | https://xcellhost.cloud/security-stack-consolidation/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-capability/ueba/ | https://xcellhost.cloud/ueba/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-industry/government/ | https://xcellhost.cloud/government/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-industry/manufacturing/ | https://xcellhost.cloud/manufacturing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-use-case/compromised-credentials/ | https://xcellhost.cloud/compromised-credentials/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-use-case/insider-threat/ | https://xcellhost.cloud/insider-threat/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-use-case/lateral-movement/ | https://xcellhost.cloud/lateral-movement/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-use-case/malware/ | https://xcellhost.cloud/malware/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/solutions/by-use-case/phishing/ | https://xcellhost.cloud/phishing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/domains/domain-protect/ | https://xcellhost.cloud/domain-protect/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/domains/premium-domains/ | https://xcellhost.cloud/premium-domains/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/hosting/linux-hosting/ | https://xcellhost.cloud/linux-hosting/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/hosting/migrate-to-xcellhost/ | https://xcellhost.cloud/migrate-to-xcellhost/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/hosting/plesk-control-panel/ | https://xcellhost.cloud/plesk-control-panel/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/hosting/website-backup/ | https://xcellhost.cloud/website-backup/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/hosting/windows-hosting/ | https://xcellhost.cloud/windows-hosting/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/marketing/google-my-business/ | https://xcellhost.cloud/google-my-business/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/marketing/managed-seo/ | https://xcellhost.cloud/managed-seo/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/marketing/sms-marketing/ | https://xcellhost.cloud/sms-marketing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/category/web-presence/marketing/whatsapp-marketing/ | https://xcellhost.cloud/whatsapp-marketing/ | legacy-taxonomy-alias |
| https://xcellhost.cloud/cloud-data-protection-lp/ | https://xcellhost.cloud/insights/cloud-backup-secure-automated-and-recoverable-business-data-protection/ | probable-blog (0.75) |
| https://xcellhost.cloud/digicert-ssl-certificates-sample-1/ | https://xcellhost.cloud/insights/digicert-ssl-certificates-guide/ | probable-blog (1.00) |
| https://xcellhost.cloud/digicert-ssl-certificates-sample-2/ | https://xcellhost.cloud/insights/digicert-ssl-certificates-guide/ | probable-blog (1.00) |
| https://xcellhost.cloud/digicert-ssl-certificates-sample-3/ | https://xcellhost.cloud/insights/digicert-ssl-certificates-guide/ | probable-blog (1.00) |
| https://xcellhost.cloud/digicert/ | https://xcellhost.cloud/digicert-ssl-certificates/ | route-redirect |
| https://xcellhost.cloud/geotrust-ssl-certificates-sample-1/ | https://xcellhost.cloud/insights/geotrust-ssl-certificates-guide/ | probable-blog (1.00) |
| https://xcellhost.cloud/geotrust-ssl-certificates-sample-3/ | https://xcellhost.cloud/insights/geotrust-ssl-certificates-guide/ | probable-blog (1.00) |
| https://xcellhost.cloud/managed-oracle-cloud-sample-1/ | https://xcellhost.cloud/insights/managed-oracle-cloud-services-in-india-xcell-host/ | probable-blog (1.00) |
| https://xcellhost.cloud/managed-oracle-cloud-sample-2/ | https://xcellhost.cloud/insights/managed-oracle-cloud-services-in-india-xcell-host/ | probable-blog (1.00) |
| https://xcellhost.cloud/sectigo-ev-code-signing-certificate/ | https://xcellhost.cloud/sectigo-ev-code-signing/ | route-redirect |
| https://xcellhost.cloud/secure-dmarc/ | https://xcellhost.cloud/enterprise-dmarc/ | route-redirect |
| https://xcellhost.cloud/secure-internet-gateway-sample-1/ | https://xcellhost.cloud/insights/how-secure-web-gateway-swg-works-a-complete-guide-to-secure-internet-access/ | probable-blog (1.00) |
| https://xcellhost.cloud/secure-internet-gateway-sample-2-copy/ | https://xcellhost.cloud/insights/how-secure-web-gateway-swg-works-a-complete-guide-to-secure-internet-access/ | probable-blog (1.00) |
| https://xcellhost.cloud/secure-internet-gateway-sample-2/ | https://xcellhost.cloud/insights/how-secure-web-gateway-swg-works-a-complete-guide-to-secure-internet-access/ | probable-blog (1.00) |
| https://xcellhost.cloud/secure-internet-gateway/ | https://xcellhost.cloud/insights/how-secure-web-gateway-swg-works-a-complete-guide-to-secure-internet-access/ | probable-blog (1.00) |
| https://xcellhost.cloud/why-xcellhost/ | https://xcellhost.cloud/about-us/ | route-redirect |

The CSV contains the complete URL-level HTTP, canonical, robots, duplicate-content, internal-link reference and classification results.

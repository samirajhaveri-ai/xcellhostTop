
(function(){
'use strict';
var d=document,XH=window.XH,$=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var R=!!XH.reduce;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
function vl(u){return 'Commvault';}
function slug(s){return s.toLowerCase().replace(/\([^)]*\)/g,' ').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');}

/* =====================================================================
   COMMVAULT_SERVICES — the ONE data source for the catalogue cards, pill counts,
   search, hero visual counters, popular strip, finder and stack builder.
   Sources (read 7 Nov 2026, WebSearch + WebFetch; commvault.com is fetched through the URLs search surfaces):
     commvault.com/products-a-to-z (31 capabilities + 3 Commvault Cloud packages), /platform.md (modified 18 Sep 2026),
     /platform-release (Commvault Cloud Unity, Nov 2025), /packaging.md (Silver · Gold · Platinum, modified 6 Aug 2026),
     /saas-pricing (USD list prices), /clumio/solutions.md (modified 28 Sep 2026), /cloud-rewind, /trust-center,
     /commvault-cloud-success-services.md (modified 2 Jul 2026), /commvault-remote-managed-services.md;
     documentation.commvault.com: 11.46 storage solutions (HyperScale → Grid / Flex / Edge), 11.46 Innovation Release
     newsletter (Jul–Oct 2026; Risk Analysis → Data Posture 360), 2024 "Disaster Recovery is now Auto Recovery",
     v11 Air Gap Protect, SaaS Security and Compliance; metallic.io ("Metallic is now part of Commvault Cloud");
     Commvault news: Satori Cyber acquisition (2025), RSAC 18 Mar 2026 (Data Access Governance, powered by Satori),
     13 Apr 2026 (Data Activate, AI Protect, AI Studio), 18 Aug 2026 (Cloud Rewind Azure coverage),
     9 Sep 2026 (Active Directory Pre Recover), 30 Sep 2026 (AgentRecover for laptops), 15 Oct 2026
     (Threat Scan + Data Posture 360 for Microsoft 365), Jul 2025 (Clumio Backtrack for DynamoDB).
   Raw notes: scratchpad/commvault-services/raw.json. Descriptions are XcellHost wording.
   COMMVAULT_SERVICES_CATS row = [key, name, colour, icon, description, [[subKey, subName], …]]
   COMMVAULT_SERVICES row = [name, catKey, subKey, description, vendorUrl, flags, xcellhostPage, note, xcellhostPrice]
     flags[0] = entry type (see TYPE) · other flags: p = popular with Indian businesses · r = renamed (note gives
                former name) · l = legacy / end of sale · e = early access or preview, per Commvault · n = new in 2025–26
     xcellhostPage  = local XcellHost page for it ("" = none)
     xcellhostPrice = price copied EXACTLY from that local XcellHost page ("" = price on quote).
                      No Commvault prices exist on local XcellHost pages, so Commvault resale is always on quote.
                      Commvault's own USD SaaS list prices (commvault.com/saas-pricing, read 7 Nov 2026) appear only in
                      the "SaaS list prices" rows, "per Commvault", never converted to INR.
   Retired names are dropped (COMMVAULT_SERVICES_DROPPED, for reference only).
   ===================================================================== */
var B='https://www.commvault.com',DOC='https://documentation.commvault.com';
var COMMVAULT_SERVICES_CATS=[
 ["plat","Commvault Cloud platform & AI","#0066FF","layers","Commvault Cloud as SaaS or software, the Unity platform release, the consoles, and the AI engine, assistant, agents and MCP server built into it",[["core","Platform & consoles"],["ai","AI, agents & automation"]]],
 ["bk","Backup & Recovery — workloads","#0D9488","disk","Backup and recovery for virtual machines, Kubernetes, databases, AI data, files and objects, endpoints and DevOps tools, plus replication and failover",[["vm","VMs, containers & failover"],["db","Databases & AI data"],["fo","Files, objects & archive"],["ep","Endpoints & DevOps"]]],
 ["saas","SaaS protection (formerly Metallic)","#4338CA","cloud","Commvault Cloud backup for Microsoft 365, Dynamics 365, Salesforce and Google Workspace — the service once sold as Metallic — with the 2026 Microsoft 365 add-ons",[["m365","Microsoft 365 & Dynamics 365"],["oth","Salesforce & Google Workspace"]]],
 ["id","Identity resilience","#0E7490","user-check","Backup, change detection and recovery for Active Directory, Entra ID and Okta — from a single object to a full forest",[["ad","Active Directory & Entra ID"],["okta","Okta & clean standby"]]],
 ["cyr","Cyber resilience & clean recovery","#B91C1C","shield","Threat Scan, ThreatWise deception, anomaly detection, Cleanroom, synthetic recovery and the air-gapped copy that ransomware cannot reach",[["det","Detect & deceive"],["rec","Clean recovery"],["ag","Air gap & isolation"]]],
 ["cn","Cloud-native: Cloud Rewind & Clumio","#7C3AED","refresh","Cloud Rewind (from the Appranix acquisition) to rebuild whole cloud applications, and Clumio by Commvault for petabyte-scale AWS and Google Cloud data",[["rw","Cloud Rewind"],["cl","Clumio by Commvault"]]],
 ["dsec","Data security & compliance","#FF8A00","eye","Data Posture 360, structured-data discovery, Data Access Governance powered by Satori, permission insights, and eDiscovery with Commvault Cloud Compliance",[["dspm","Posture & access governance"],["comp","Compliance & eDiscovery"]]],
 ["stor","On-prem storage & appliances","#475569","server","The Commvault storage family — Grid, Flex and Edge, formerly HyperScale X, Flex and Edge — with Air Gap for Grid and the legacy appliances still supported",[["sol","Grid, Flex & Edge"],["leg","Legacy appliances"]]],
 ["pkg","Packages, SaaS prices & deployment","#15803D","tag","The Silver, Gold and Platinum packages, the recovery packages, Commvault's published USD SaaS list prices, and Government Cloud, Dedicated Instance and marketplace options",[["pk","Packages & add-ons"],["usd","SaaS list prices (USD)"],["dep","Deployment options"]]],
 ["svc","Commvault services & support","#0369A1","users","Commvault's own success programmes, Remote Managed Services and ransomware response experts",[["succ","Success programmes"],["ms","Managed & response services"]]],
 ["xh","XcellHost services alongside Commvault","#0B132B","headset","XcellHost's own backup operations, DR, immutable storage and identity backup in Mumbai, at the prices on the linked XcellHost pages",[["set","Set up & recover"],["run","Run & store in India"]]]
];
var COMMVAULT_SERVICES=[
["Commvault Cloud Unity","plat","core","The Commvault Cloud platform release that brings data protection, data security, identity resilience and cyber recovery into one cloud-native platform.",B+"/platform-release","cpn","commvault-cloud-platform.html","Released November 2025; products now grouped as IDRecover, CyberRecover, SaaSRecover, CoreRecover and AgentRecover","" ],
["Commvault Cloud — SaaS","plat","core","Backup, recovery and cyber resilience delivered as a service from Commvault's cloud — no backup servers or storage for you to run.",B+"/platform","cpr","commvault-cloud-platform.html","Formerly Metallic — Metallic became part of Commvault Cloud in November 2023",""],
["Commvault Cloud — Software","plat","core","Self-managed Commvault software for your own data centre or cloud account, with the same policies and workloads as the SaaS edition.",DOC+"/11.46/software/newsletter_for_new_features_in_innovation_release_11_46.html","cp","commvault-cloud-platform.html","Current Innovation Release 11.46",""],
["Commvault Console & Command Center","plat","core","Web consoles for plans, backups, restores and reports across SaaS and software estates; release 11.46 updates the Commvault Console and adds cost visibility for MSPs.",B+"/platform-release","c","commvault-cloud-platform.html","",""],
["Security IQ","plat","core","Security insights, risk monitoring and suspicious-behaviour alerts across your protected data.",B+"/platform/security-iq","c","commvault-cloud-platform.html","",""],
["Metallic AI","plat","ai","The AI automation engine inside Commvault Cloud that drives anomaly detection, insights and recommendations.",B+"/platform/metallic-ai","c","commvault-ai.html","Keeps the Metallic name as Commvault's AI engine",""],
["Arlie","plat","ai","Generative-AI assistant for questions, reports and code; Arlie Recover guides recovery steps.",B+"/packaging","c","commvault-ai.html","Included from the Silver package; Arlie Recover listed in release 11.46",""],
["AI Studio","plat","ai","Build custom agents or use Commvault's built-in resilience agents from the Agent Library, connected to your systems through the MCP server.",B+"/news/commvault-introduces-innovations-to-advance-secure-controlled-agentic-transformation-in-the-enterprise","cn","commvault-ai.html","Announced 13 Apr 2026",""],
["MCP Server","plat","ai","Model Context Protocol server that lets approved AI agents query and act on Commvault data and workflows.",B+"/platform","cn","commvault-ai.html","Listed as an AI extension on commvault.com/platform",""],
["Data Activate","plat","ai","Classifies and curates backup-derived data, then publishes vetted datasets in open table formats for analytics and AI.",B+"/solutions/data-rooms","cn","commvault-ai.html","Announced 13 Apr 2026",""],
["AI Protect","plat","ai","Discovers AI agents, maps their activity to your AI stack and recovers the applications and full stacks behind them.",B+"/news/commvault-introduces-innovations-to-advance-secure-controlled-agentic-transformation-in-the-enterprise","an","commvault-ai.html","Announced 13 Apr 2026; now folded into AgentRecover (Commvault blog, updated 10 Nov 2026)",""],
["AgentRecover","plat","ai","Recoverability for enterprise AI environments, including agent configurations and AI data on managed Windows and macOS laptops.",B+"/platform/endpoint-backup-and-recovery","cne","commvault-ai.html","Announced 30 Sep 2026; laptop AI-tool protection GA in the coming months, through existing endpoint licences",""],
["Backup & Recovery","bk","vm","Backup and recovery across on-premises, edge and cloud workloads from one platform and one set of plans.",B+"/platform/backup-and-recovery","wp","commvault-vm-kubernetes-backup.html","",""],
["Backup & Recovery for VM","bk","vm","Backup and instant recovery for VMware, Hyper-V, Nutanix AHV, Proxmox VE, OpenShift Virtualization, Azure, EC2 and OCI virtual machines.",B+"/platform/vm-backup","wp","commvault-vm-kubernetes-backup.html","",""],
["Backup & Recovery for Kubernetes","bk","vm","Single-console backup, migration and recovery for AKS, EKS, OKE and any CNCF-certified Kubernetes.",B+"/platform/kubernetes-backup","w","commvault-vm-kubernetes-backup.html","",""],
["Auto Recovery","bk","vm","Replication, orchestrated recovery groups and automated failover and failback across cloud, on-premises and SaaS.",B+"/platform/auto-recovery","wr","commvault-vm-kubernetes-backup.html","Formerly Commvault Disaster Recovery — renamed Auto Recovery in the 2023–24 platform releases",""],
["Backup & Recovery for Databases","bk","db","Protection for SQL Server, Oracle, SAP HANA, PostgreSQL, MongoDB Atlas and cloud databases such as RDS, Aurora and Cloud SQL.",B+"/platform/database-backup","wp","commvault-database-backup.html","",""],
["AI Workload Protection","bk","db","Backup and recovery for data and AI platforms such as Databricks and Snowflake, data lakes and vector retrieval systems.",B+"/solutions/ai-data-resilience","wn","commvault-database-backup.html","Part of the Commvault Cloud Unity release",""],
["Backup & Recovery for Files & Objects","bk","fo","Protection for file servers, NAS, Azure Blob and Files, Amazon S3 and OCI object storage.",B+"/platform/file-object-backup","w","commvault-file-object-backup.html","",""],
["Archive for Files & Objects","bk","fo","Moves cold files and objects to cheaper cloud tiers under retention policy, to cut storage cost and compliance risk.",B+"/platform/file-object-and-archive","w","commvault-file-object-backup.html","",""],
["Backup & Recovery for Endpoints","bk","ep","Backup of Windows, macOS and Linux laptops and desktops, with self-service restore and cloud storage.",B+"/platform/endpoint-backup-and-recovery","w","commvault-endpoint-devops-backup.html","",""],
["Backup & Recovery for DevOps","bk","ep","Backup and granular recovery of repositories and project data in GitHub, GitLab and Azure DevOps.",B+"/platform/backup-and-recovery-for-devops","w","commvault-endpoint-devops-backup.html","",""],
["Backup & Recovery for Microsoft 365","saas","m365","Backup of Exchange Online, OneDrive, SharePoint and Teams with long retention, kept outside your tenant.",B+"/platform/microsoft-365-backup","wpr","commvault-microsoft-365-backup.html","Sold as Metallic Microsoft 365 Backup before November 2023",""],
["Backup & Recovery for Microsoft Dynamics 365","saas","m365","Protects Dynamics 365 Sales, Marketing, Customer Service and Field Service data from deletion, corruption and ransomware.",B+"/platform/microsoft-dynamics-365-backup","w","commvault-microsoft-365-backup.html","",""],
["Threat Scan for Microsoft 365","saas","m365","Paid add-on that scans Exchange, OneDrive, SharePoint and Teams backups for malware, encryption and other signs of compromise.",B+"/platform/threat-scan","ane","commvault-microsoft-365-backup.html","Announced 15 Oct 2026; early access preview, GA targeted early 2027",""],
["Data Posture 360 for Microsoft 365","saas","m365","Paid add-on that maps sensitive data such as PII across Microsoft 365 and flags exposure risk.",B+"/platform/data-posture-360","ane","commvault-microsoft-365-backup.html","Announced 15 Oct 2026; early access preview, GA targeted early 2027",""],
["Backup & Recovery for Salesforce","saas","oth","Backup of Salesforce production and sandbox orgs, with granular and point-in-time restore.",B+"/platform/salesforce-backup","wp","commvault-salesforce-google-workspace-backup.html","",""],
["Backup & Recovery for Google Workspace","saas","oth","Protects Gmail, Drive and other Google Workspace data from deletion and attack.",B+"/platform/google-workspace","wp","commvault-salesforce-google-workspace-backup.html","Per commvault.com Google Workspace page, read 19 Nov 2026","US$1.70 / 3.60 / 6.00 per user a month"],
["Backup & Recovery for Active Directory","id","ad","Backs up Active Directory and Entra ID together, with object-level restore or full forest recovery.",B+"/platform/active-directory","wpr","commvault-identity-resilience.html","Entra ID was formerly Azure AD",""],
["Active Directory — Advanced & Enterprise editions","id","ad","The two Commvault licence editions for Active Directory protection named in release 11.46 — we help you pick the one that fits your forest.",DOC+"/11.46/software/newsletter_for_new_features_in_innovation_release_11_46.html","p","commvault-identity-resilience.html","Listed in the 11.46 release notes",""],
["Identity change & anomaly detection","id","ad","Watches privilege and configuration changes in your directory and reverts unauthorised ones from a clean copy.",B+"/platform-release","cn","commvault-identity-resilience.html","Part of the Commvault Cloud Unity release",""],
["Okta","id","okta","Continuous, immutable backup and granular recovery of your Okta tenant.",B+"/platform/okta","wn","commvault-identity-resilience.html","Also listed as Identity Resilience for Okta; announced 5 Mar 2026 — general availability not confirmed",""],
["Active Directory Pre Recover","id","okta","Keeps a clean standby copy of Active Directory in an isolated Cleanroom, checked by Threat Scan, so you can fail over in minutes instead of rebuilding a forest.",B+"/platform/active-directory","cne","commvault-identity-resilience.html","Announced 9 Sep 2026; early access in the coming months, included for enterprise AD customers",""],
["Threat Scan","cyr","det","Scans backup data for malware and encrypted files so you do not restore the infection back into production.",B+"/platform/threat-scan","cp","commvault-cyber-resilience.html","",""],
["ThreatWise","cyr","det","Cyber deception — decoy assets that give early warning of ransomware and attackers moving inside your network.",B+"/platform/threatwise","c","commvault-cyber-resilience.html","",""],
["AI threat & anomaly detection","cyr","det","Flags unusual access, file changes and data patterns across identities and backups, and can quarantine affected workloads.",B+"/platform-release","c","commvault-cyber-resilience.html","",""],
["Security integrations & SOAR","cyr","det","Sends Commvault alerts to Microsoft Sentinel, Palo Alto XSOAR, CrowdStrike Falcon Fusion SOAR, ServiceNow and others for automated response.",B+"/platform-release","c","commvault-cyber-resilience.html","",""],
["Commvault Cleanroom","cyr","rec","On-demand isolated cloud environment for recovery testing, forensics and clean restore, with automated runbooks.",B+"/platform/cleanroom-recovery","apr","commvault-cleanroom-recovery.html","Formerly Cleanroom Recovery; sold as an add-on",""],
["AI-Assisted Synthetic Recovery","cyr","rec","Combines the clean versions of files from several backups into one verified recovery point.",B+"/platform-release","cn","commvault-cleanroom-recovery.html","Part of the Commvault Cloud Unity release",""],
["Hosted Control Plane Recovery","cyr","rec","Brings back your Commvault control plane from Commvault's cloud if your own backup servers are hit.",B+"/packaging","c","commvault-cleanroom-recovery.html","Included in the Gold package",""],
["Commvault Air Gap","cyr","ag","Air-gapped, immutable cloud storage managed by Commvault, kept apart from your network and admin credentials.",B+"/platform/commvault-air-gap","apr","commvault-cleanroom-recovery.html","Formerly Air Gap Protect — the documentation still uses that name; also written AirGap",""],
["Immutable storage & zero-trust controls","cyr","ag","Locked backup copies, end-to-end encryption, multi-person approval and zero-trust access built into every package.",B+"/packaging","c","commvault-cleanroom-recovery.html","Included from the Silver package",""],
["Cloud Rewind","cn","rw","Captures cloud applications with their configuration and rebuilds them, in order, after ransomware, an outage or a bad change.",B+"/cloud-rewind","apr","commvault-cloud-rewind.html","From Commvault's acquisition of Appranix; sold as an add-on workload, metered by protected cloud resources",""],
["Cloud Rewind for AWS","cn","rw","Point-in-time, in-sync copies of AWS workloads and their configuration, with no infrastructure-as-code to write.",B+"/cloud-rewind","a","commvault-cloud-rewind.html","",""],
["Cloud Rewind for Azure","cn","rw","Discovers Azure resources, protects their configuration and rebuilds the environment on demand.",B+"/cloud-rewind","an","commvault-cloud-rewind.html","Azure resource coverage expansion announced 18 Aug 2026, rolling out in the coming months",""],
["Cloud Rewind for Google Cloud","cn","rw","Point-in-time copies and automated rebuild of Google Cloud workloads.",B+"/cloud-rewind","a","commvault-cloud-rewind.html","",""],
["Clumio by Commvault","cn","cl","Cloud-native SaaS backup and recovery for AWS and Google Cloud that scales to petabytes and billions of objects.",B+"/Clumio","wp","clumio-by-commvault.html","Clumio is now part of Commvault",""],
["Clumio Backtrack for Amazon S3","cn","cl","Rolls Amazon S3 data back to a point in time, near-instantly, at very large scale.",B+"/Clumio","w","clumio-by-commvault.html","",""],
["Clumio Backtrack for Amazon DynamoDB","cn","cl","Near-instant rollback and granular recovery of DynamoDB tables.",B+"/Clumio","wn","clumio-by-commvault.html","Announced July 2025",""],
["Clumio for Apache Iceberg on AWS","cn","cl","Protects Iceberg tables on AWS, including S3 Tables, for AI and analytics lakehouses.",B+"/clumio/solutions","wn","clumio-by-commvault.html","",""],
["Clumio for RDS, Aurora, Neptune & DocumentDB","cn","cl","Air-gapped backup and recovery for AWS managed databases.",B+"/clumio/solutions","w","clumio-by-commvault.html","",""],
["Clumio for EC2 & EBS","cn","cl","Backup and recovery of EC2 instances and EBS volumes outside your AWS account.",B+"/clumio/solutions","w","clumio-by-commvault.html","",""],
["Clumio for Google Cloud Storage","cn","cl","Backup and recovery for Google Cloud Storage buckets.",B+"/clumio/solutions","wn","clumio-by-commvault.html","Clumio support for Google Cloud",""],
["Data Posture 360","dsec","dspm","Finds sensitive and redundant, obsolete or trivial data across your estate and shows who can reach it.",B+"/platform/data-posture-360","cpr","commvault-data-security.html","Formerly Risk Analysis — renamed in release 11.46 (2026); included in the Platinum package",""],
["Structured data discovery & classification","dsec","dspm","AI-based classification of sensitive data in databases, flagging high concentrations, excess access and over-retention.",B+"/solutions/data-and-ai-security","cne","commvault-data-security.html","Announced 18 Mar 2026; GA targeted for late summer 2026, per Commvault",""],
["Data Access Governance","dsec","dspm","Real-time monitoring and control of who reads structured data, including vector databases, opened from Commvault Cloud by single sign-on.",B+"/solutions/data-and-ai-security","anr","commvault-data-security.html","Powered by Satori, acquired by Commvault in 2025; listed on the packaging page as Data Access Manager",""],
["Permission insights & risk remediation","dsec","dspm","File and user permission insights, entitlement management and automated fixes for risky access.",B+"/packaging","c","commvault-data-security.html","Included in the Platinum package",""],
["Commvault Cloud Compliance","dsec","comp","eDiscovery and governance — search, collect and hold electronically stored information from your backups.",B+"/platform/compliance","w","commvault-data-security.html","",""],
["Silver package","pkg","pk","Foundation package: zero-trust architecture, encryption, immutable storage, any-to-any recovery, anomaly detection and the Arlie assistant.",B+"/packaging","pp","commvault-packages-pricing.html","Per commvault.com/packaging; price on quote",""],
["Gold package","pkg","pk","Silver plus replication, orchestrated failover and failback, recovery validation, threat detection and hosted control-plane recovery.",B+"/packaging","pp","commvault-packages-pricing.html","Per commvault.com/packaging; price on quote",""],
["Platinum package","pkg","pk","Gold plus sensitive-data discovery, permission insights, ROT data analysis, entitlement management and automated risk remediation.",B+"/packaging","p","commvault-packages-pricing.html","Per commvault.com/packaging; price on quote",""],
["Autonomous Recovery package","pkg","pk","Backup, archive, replication and disaster recovery with ransomware protection built in.",B+"/solutions/autonomous-recovery","p","commvault-packages-pricing.html","Listed under Commvault Cloud Packages on the A-to-Z page",""],
["Cyber Recovery package","pkg","pk","Cyber readiness and recovery — backup, DR, threat scanning and cyber deception together.",B+"/solutions/cyber-recovery","p","commvault-packages-pricing.html","Listed under Commvault Cloud Packages on the A-to-Z page",""],
["Operational Recovery package","pkg","pk","Backup and recovery for hybrid workloads, aimed at the lowest total cost.",B+"/solutions/operational-recovery","p","commvault-packages-pricing.html","Listed under Commvault Cloud Packages on the A-to-Z page",""],
["Data migration add-on","pkg","pk","Brings backup data from legacy products into Commvault so you can retire them and still restore old recovery points.",B+"/packaging","a","commvault-packages-pricing.html","",""],
["Microsoft 365 Backup — list price","pkg","usd","Per Commvault: Standard from US$1.70 per user a month (5 GB per user); Enterprise from US$3.60 (50 GB); Enterprise with Compliance from US$4.50.",B+"/saas-pricing","pp","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026; volume discounts over 750 users",""],
["Salesforce Backup — list price","pkg","usd","Per Commvault: US$3.60 per user a month, production and sandbox, unlimited storage.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026",""],
["Dynamics 365 Backup — list price","pkg","usd","Per Commvault: US$3.60 per user a month, production and sandbox, unlimited storage.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026",""],
["Virtual Machine Backup — list price","pkg","usd","Per Commvault: US$102.49 per 10-pack of VMs a month.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026; volume discounts over 50 VMs",""],
["Kubernetes Backup — list price","pkg","usd","Per Commvault: US$90 per TB a month.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026",""],
["Database Backup — list price","pkg","usd","Per Commvault: from US$90 per TB a month for physical or cloud databases (databases inside a VM are not included).",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026",""],
["Endpoint Backup — list price","pkg","usd","Per Commvault: Essentials from US$7.50 per user a month; with Compliance from US$9.35; unlimited storage, 1-year retention.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026",""],
["File & Object Backup — list price","pkg","usd","Per Commvault: from US$58.50 per TB a month.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026",""],
["File & Object Archive — list price","pkg","usd","Per Commvault: US$900 per 100 TB a month.",B+"/saas-pricing","p","commvault-packages-pricing.html","Per commvault.com/saas-pricing, read 7 Nov 2026; volume discounts over 500 TB",""],
["Commvault Cloud for Government","pkg","dep","Commvault Cloud for public-sector customers, with FedRAMP High authorisation.",B+"/platform/government-cloud","c","commvault-packages-pricing.html","FedRAMP High services extended to managed service providers in 2026",""],
["Dedicated Instance","pkg","dep","An isolated, single-tenant deployment of the Commvault Cloud SaaS service for regulated industries.",B+"/platform/dedicated-instance","c","commvault-packages-pricing.html","",""],
["AWS & Azure Marketplace","pkg","dep","Buy Commvault Cloud through your AWS or Azure Marketplace account, against existing cloud commitments.",B+"/platform","c","commvault-packages-pricing.html","",""],
["Commvault Grid","stor","sol","Scale-out, multi-node backup storage with load balancing for mid-size to large data centres — as an appliance or on your own servers.",DOC+"/11.46/software/commvault_storage_solutions.html","hrp","commvault-grid-flex-edge.html","Formerly HyperScale X — renamed in 2026",""],
["Commvault Flex","stor","sol","High-performance option where compute and storage scale separately, on certified storage from Everpure, VAST, NetApp, HPE and Hitachi, for multi-petabyte sites.",B+"/platform/on-prem/commvault-flex","hr","commvault-grid-flex-edge.html","Formerly HyperScale Flex",""],
["Commvault Edge","stor","sol","Economical backup storage for branches, edge sites and small to medium data centres, validated on Dell, HPE and Lenovo.",B+"/platform/on-prem/commvault-edge","hr","commvault-grid-flex-edge.html","Formerly HyperScale Edge",""],
["Air Gap for Grid","stor","sol","Isolated, immutable copy inside a Commvault Grid cluster for on-premises cyber recovery.",DOC+"/11.46/software/commvault_storage_solutions.html","hr","commvault-grid-flex-edge.html","Formerly Air Gap for HyperScale X; Air Gap for Flex is planned",""],
["HyperScale 1.5","stor","leg","Earlier Commvault scale-out appliance, kept for existing customers.",DOC+"/11.46/software/commvault_storage_solutions.html","hl","commvault-grid-flex-edge.html","Not for new deployments; supported to 31 Dec 2026",""],
["Remote Office Appliance (RO1200)","stor","leg","Small backup appliance for remote offices.",DOC+"/11.46/software/commvault_storage_solutions.html","hl","commvault-grid-flex-edge.html","Nearing end of life; Commvault recommends Commvault Edge",""],
["Foundational Success","svc","succ","Included with every subscription: a designated Customer Success Manager and community access.",B+"/enterprise-success-program","k","commvault-managed-services.html","",""],
["Essential Success","svc","succ","Paid tier with a Technical Account Manager, daily proactive monitoring, semi-annual health scans and incident management.",B+"/enterprise-success-program","k","commvault-managed-services.html","",""],
["Enterprise Success Program","svc","succ","Top tier: in-region TAM, quarterly strategic reviews, upgrade planning, professional-services credits and faster response targets.",B+"/enterprise-success-program","k","commvault-managed-services.html","",""],
["Remote Managed Services","svc","ms","Commvault monitors, manages and tunes your Commvault estate for you.",B+"/commvault-remote-managed-services","k","commvault-managed-services.html","Covered by Commvault's ISO/IEC 27001 scope",""],
["Ransomware response","svc","ms","Commvault experts who advise during an attack and help make sure critical data restores.",B+"/packaging","k","commvault-managed-services.html","Listed as an add-on on the packaging page",""],
["Onboarding & transition","xh","set","Assessment, runbooks and a first restore test before we take over running your backups.",B+"/platform/backup-and-recovery","m","veeam-services.html","As on our Veeam catalogue's Resilience Operations rows","₹24,999 one-time*"],
["DR readiness assessment & runbook","xh","set","Our engineers map your systems, set recovery targets and write the runbook a restore follows.",B+"/platform/auto-recovery","m","cloud-disaster-recovery-smb.html","Marked a new placeholder on that page","₹29,999 one-time*"],
["Private Cloud DR target in Mumbai","xh","set","Dedicated 3-node cluster in Mumbai to restore or replicate backups into.",B+"/platform/auto-recovery","mp","cloud-disaster-recovery-smb.html","3 nodes","From ₹49,999 / mo*"],
["Quarterly restore drill","xh","set","A scheduled test restore with a signed report, so recoverability is proven, not assumed.",B+"/platform/cleanroom-recovery","m","cloud-disaster-recovery-smb.html","","₹4,999 / quarter*"],
["Backup operations — Essential","xh","run","Our 24×7 NOC watches backup jobs and fixes failures, with a monthly report. Minimum 5 workloads.",B+"/platform/backup-and-recovery","mp","veeam-services.html","Resilience Operations, scoped to your backup estate","₹999 / workload / mo*"],
["Managed DR","xh","run","Replication operated, drills run and runbooks kept current by XcellHost. Minimum 5 workloads.",B+"/platform/auto-recovery","mp","cloud-disaster-recovery-smb.html","Plus backup and standby compute","₹2,499 / workload / mo*"],
["Immutable India storage (Mumbai)","xh","run","Immutable backup storage in our Mumbai data centre, as an India copy alongside Commvault Air Gap.",B+"/platform/commvault-air-gap","m","cloud-disaster-recovery-smb.html","","₹1,999 / TB / mo*"],
["Server backup","xh","run","XcellHost server backup with copies in Mumbai, rebuilt at DR on demand.",B+"/platform/backup-and-recovery","m","cloud-disaster-recovery-smb.html","As on XcellBackup / Direct Backup","₹999 / server / mo*"],
["Entra ID Backup by XcellHost","xh","run","Entra ID backup with a copy stored in India, restored in minutes.",B+"/platform/active-directory","mp","entra-id-backup.html","","₹125 / user / mo*"],
["Daily backup for books of accounts","xh","run","Daily, logged backups kept in India for Rule 46(8) evidence — storage in Mumbai.",B+"/platform/backup-and-recovery","m","rule-468-daily-backup-books-of-accounts.html","XcellBackup storage · Mumbai","₹6 / GB / mo*"],
["Acronis Essentials — server","xh","run","An XcellHost-run alternative for smaller estates — Acronis Essentials per server.",B+"/platform/backup-and-recovery","m","acronis-services.html","Workstations from ₹349 a month*","₹1,499 / server / mo*"]
];
var COMMVAULT_SERVICES_DROPPED=["Metallic product names — now Commvault Cloud (SaaS), November 2023","HyperScale X, HyperScale Flex, HyperScale Edge names — now Commvault Grid, Flex and Edge (2026)","Air Gap for HyperScale X name — now Air Gap for Grid","Risk Analysis name — now Data Posture 360 (release 11.46)","Commvault Disaster Recovery name — now Auto Recovery (2024)","Air Gap Protect name — now Commvault Air Gap on commvault.com","Cleanroom Recovery name — now Commvault Cleanroom","Appranix name — now Cloud Rewind","Satori Cyber name — now Data Access Governance / Data Access Manager","Solution pages (industry pages, ResOps book, Readiverse) — not products, not listed","Older product names not on the current commvault.com A-to-Z list — not listed"];

var ICON={plat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',bk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',saas:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',id:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',cyr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',cn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',dsec:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',stor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',pkg:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',svc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',xh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><rect x="2" y="15" width="5" height="7" rx="2"/><rect x="17" y="15" width="5" height="7" rx="2"/></svg>'};
var TYPE={"c":["g","Commvault Cloud"],"w":["s","Workload"],"a":["v","Add-on"],"h":["w","Storage & appliance"],"p":["pl","Package & price"],"k":["o","Commvault service"],"m":["m","XcellHost"]};
var TYPEL={"c":"Commvault Cloud platform capability","w":"Workload protection — SaaS or software","a":"Commvault add-on or add-on workload","h":"Commvault on-premises storage or appliance","p":"Commvault package, edition or USD list price per Commvault — XcellHost resale on quote","k":"Service delivered by Commvault","m":"XcellHost service alongside Commvault"};
var CAT={};COMMVAULT_SERVICES_CATS.forEach(function(c,i){CAT[c[0]]={k:c[0],n:c[1],col:c[2],d:c[4],subs:c[5],i:i};});
var SV=COMMVAULT_SERVICES.map(function(r,i){var f=r[5];return {i:i,n:r[0],c:r[1],g:r[2],d:r[3],u:r[4],t:f.charAt(0),p:f.indexOf('p')>0,rn:f.indexOf('r')>0,l:f.indexOf('l')>0,e:f.indexOf('e')>0,nw:f.indexOf('n')>0,x:r[6],note:r[7],pr:r[8]||'',s:slug(r[0])};});
SV.forEach(function(s){s.key=(s.n+' '+s.d+' '+CAT[s.c].n+' '+s.note+' '+TYPEL[s.t]+(s.x?' managed by xcellhost':'')+' '+s.pr).toLowerCase();});
var BYN={},BYS={};SV.forEach(function(s){BYN[s.n]=s;BYS[s.s]=s;});
var PER={};SV.forEach(function(s){PER[s.c]=(PER[s.c]||0)+1;});
var CATS=COMMVAULT_SERVICES_CATS.map(function(c){return CAT[c[0]];}).filter(function(c){return PER[c.k];});
var TOTAL=SV.length;
var U='products',U1='product';function un(n){return n===1?U1:U;}
$$('[data-cm="total"]').forEach(function(e){e.textContent=TOTAL;});$$('[data-cm="cats"]').forEach(function(e){e.textContent=CATS.length;});$$('[data-cm="rn"]').forEach(function(e){e.textContent=SV.filter(function(x){return x.rn;}).length;});
XH.vcData=SV;

/* =============== one shared rAF loop (pauses offscreen / hidden tab) =============== */
var TK=[],running=false;
function addTick(el,fn){var t={el:el,fn:fn,on:false};TK.push(t);XH.whenVisible(el,function(v){t.on=v&&!d.hidden;wake();});return t;}
function wake(){if(R||running)return;if(TK.some(function(t){return t.on;})){running=true;requestAnimationFrame(loop);}}
function loop(now){var any=false;for(var i=0;i<TK.length;i++){if(TK[i].on){any=true;TK[i].fn(now);}}if(any&&!d.hidden)requestAnimationFrame(loop);else running=false;}
d.addEventListener('visibilitychange',function(){TK.forEach(function(t){if(d.hidden)t.on=false;else{var r=t.el.getBoundingClientRect();t.on=r.bottom>0&&r.top<innerHeight;}});wake();});

/* =============== hero counters =============== */
(function(){var els=$$('[data-cmc]'),tg={total:TOTAL,cats:CATS.length};
  if(R){els.forEach(function(e){e.textContent=tg[e.getAttribute('data-cmc')];});return;}
  var t0=null;function step(now){if(t0===null)t0=now;var k=Math.min(1,(now-t0)/1400),e=1-Math.pow(1-k,3);els.forEach(function(el){el.textContent=Math.round(tg[el.getAttribute('data-cmc')]*e);});if(k<1)requestAnimationFrame(step);}
  setTimeout(function(){requestAnimationFrame(step);},400);})();

/* =============== hero visual: five drawn scenes (sample data, no vendor logo) — runs on the shared rAF loop =============== */
(function(){var cv=$('#cmCv'),stage=$('#aoStage');if(!cv||!stage)return;var cx=cv.getContext('2d'),W=0,H=0,dpr=1;
  var vn=$('#cmVN'),vc=$('#cmVC'),vt=$('#cmVT'),dots=$$('#cmDots button[data-k]'),pz=$('#cmPz');
  var DUR=5500,cur=0,el=0,last=0,paused=false,hover=false;
  var SC=[['Every workload, one plan','Backup & Recovery'],['Last clean copy found','Threat Scan'],['Air gap survives attack','Air Gap'],['Cloud app rebuilt in order','Cloud Rewind'],['Identity change undone','Identity']];
  function P(){var dk=XH.dark&&XH.dark();return dk?{ink:'#E8EEFA',mut:'#A9B8D6',line:'#1B2D52',card:'#06122A',card2:'#13254A',bl:'#0066FF',blT:'#7fb0ff',or:'#FF8A00',rd:'#c0392b',gr:'#16a34a',nv:'#0B132B',dk:1}:{ink:'#0B132B',mut:'#5B6782',line:'#E1E7F2',card:'#F3F6FC',card2:'#E6ECF7',bl:'#0066FF',blT:'#0066FF',or:'#FF8A00',rd:'#c0392b',gr:'#16a34a',nv:'#0B132B',dk:0};}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}function eo(k){return 1-Math.pow(1-k,3);}function lerp(a,b,k){return a+(b-a)*k;}
  function rr(x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
  function box(x,y,w,h,r,fill,stroke,lw){rr(x,y,w,h,r);if(fill){cx.fillStyle=fill;cx.fill();}if(stroke){cx.strokeStyle=stroke;cx.lineWidth=lw||1.2;cx.stroke();}}
  function tx(s,x,y,sz,wt,col,al,mono,maxw){cx.font=(wt||600)+' '+sz+'px '+(mono?'"IBM Plex Mono", monospace':'Sora, sans-serif');cx.fillStyle=col;cx.textAlign=al||'left';cx.textBaseline='middle';
    if(maxw&&cx.measureText(s).width>maxw){while(s.length>2&&cx.measureText(s+'…').width>maxw)s=s.slice(0,-1);s+='…';}cx.fillText(s,x,y);}
  function dot(x,y,r,c){cx.beginPath();cx.arc(x,y,r,0,Math.PI*2);cx.fillStyle=c;cx.fill();}
  function ln(x1,y1,x2,y2,c,w,dash){cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);cx.strokeStyle=c;cx.lineWidth=w||1.2;cx.setLineDash(dash||[]);cx.stroke();cx.setLineDash([]);}
  function pill(s,x,y,sz,bg,col,al){cx.font='700 '+sz+'px "IBM Plex Mono", monospace';var w=cx.measureText(s).width+16,h=sz+10,x0=al==='center'?x-w/2:al==='right'?x-w:x;box(x0,y-h/2,w,h,h/2,bg);tx(s,x0+8,y+.5,sz,700,col,'left',1);return w;}
  function tick(x,y,s,c){cx.beginPath();cx.moveTo(x-s,y);cx.lineTo(x-s*.25,y+s*.7);cx.lineTo(x+s,y-s*.7);cx.strokeStyle=c;cx.lineWidth=2;cx.stroke();}
  function cross(x,y,s,c){ln(x-s,y-s,x+s,y+s,c,2);ln(x+s,y-s,x-s,y+s,c,2);}
  function lock(x,y,s,c){cx.beginPath();cx.arc(x,y-s*.35,s*.5,Math.PI,0);cx.strokeStyle=c;cx.lineWidth=2;cx.stroke();box(x-s*.75,y-s*.35,s*1.5,s*1.1,2.5,c);}
  function area(){var nar=W<420;return {x0:14,x1:W-14,y0:nar?50:56,y1:H-(nar?46:52),nar:nar,fs:nar?9.5:11};}
  function glow(c){return c.dk?'rgba(127,176,255,.45)':'rgba(0,102,255,.32)';}

  /* 1 · backup: five workloads flow through one plan into immutable recovery points */
  var WL=['VMware & Hyper-V','SQL · Oracle · SAP','Microsoft 365','Kubernetes','File servers & S3'];
  function s0(t,c,A){var w=A.x1-A.x0,h=A.y1-A.y0,n=WL.length,rh=h/n,sw=A.nar?w*.34:w*.3,hx=A.x0+w*.58,hy=A.y0+h/2,hr=Math.min(h*.19,w*.1),vw=Math.min(112,w*.24),vh=Math.min(128,h*.66),vx=A.x1-vw,vy=hy-vh/2,cnt=0;
    ln(hx+hr,hy,vx,hy,glow(c),1.4,[4,4]);
    WL.forEach(function(s,i){var y=A.y0+rh*(i+.5);box(A.x0,y-rh*.34,sw,rh*.68,8,c.card,c.line);dot(A.x0+12,y,A.nar?3.5:4.5,c.blT);tx(s,A.x0+22,y,A.fs-1.8,600,c.ink,'left',0,sw-28);
      ln(A.x0+sw,y,hx-hr,hy,c.line,1.1);
      for(var k=0;k<2;k++){var per=1700,t0=i*260+k*per/2;if(t<t0)continue;var u=((t-t0)%per)/per,done=Math.floor((t-t0)/per);cnt+=done;
        if(u<.55){var q=eo(u/.55);dot(lerp(A.x0+sw+3,hx-hr,q),lerp(y,hy,q),A.nar?2.6:3.2,c.blT);}
        else{var q2=eo((u-.55)/.45);dot(lerp(hx+hr,vx-4,q2),hy,A.nar?2.6:3.2,c.or);}}});
    cx.beginPath();cx.arc(hx,hy,hr,0,Math.PI*2);cx.fillStyle=c.nv;cx.fill();cx.strokeStyle=c.bl;cx.lineWidth=2.2;cx.stroke();
    if(!R){cx.beginPath();cx.arc(hx,hy,hr+5,-Math.PI/2,-Math.PI/2+((t%1700)/1700)*Math.PI*2);cx.strokeStyle='rgba(255,138,0,.7)';cx.lineWidth=2;cx.stroke();}
    tx('PLAN',hx,hy-hr*.28,A.fs-3,800,'#FFB866','center',1);tx('RPO 4h',hx,hy+hr*.22,A.fs-.5,800,'#fff','center',0,hr*1.8);
    tx(A.nar?'One plan':'One plan · sample',hx,hy+hr+14,A.fs-3,700,c.mut,'center',1,w*.3);
    box(vx,vy,vw,vh,12,c.nv,c.bl,1.6);lock(vx+vw/2,vy+22,9,'#FFB866');
    tx('IMMUTABLE',vx+vw/2,vy+44,A.fs-3.5,800,'#FFB866','center',1,vw-10);tx(String(8000+cnt*3),vx+vw/2,vy+vh/2+10,A.fs+8,800,'#fff','center',0,vw-10);tx('recovery points',vx+vw/2,vy+vh/2+30,A.fs-3.5,600,'#C9D6F0','center',0,vw-10);
    tx(A.nar?'5 workloads':'5 workload types · sample data',A.x0+w/2,A.y1-4,A.fs-2.5,700,c.mut,'center',1);}

  /* 2 · Threat Scan sweeps recovery points, flags infected copies, picks the last clean one and restores it into a Cleanroom */
  var DAY=['Mon','Tue','Wed','Thu','Fri','Sat','Sun','Today'],BADI={5:1,6:1,7:1};
  function s1(t,c,A){var w=A.x1-A.x0,h=A.y1-A.y0,n=DAY.length,ty=A.y0+h*.2,gap=(w-30)/(n-1),sx=A.x0+15,scan=lerp(sx-10,sx+gap*(n-1)+10,eo(seg(200,2400,t))),pick=4,px=sx+gap*pick,picked=t>2600;
    tx('RECOVERY POINTS',A.x0,ty-26,A.fs-3,800,c.mut,'left',1);
    ln(sx,ty,sx+gap*(n-1),ty,c.line,2);
    for(var i=0;i<n;i++){var x=sx+gap*i,seen=scan>x,bad=BADI[i],col=!seen?c.card2:bad?c.rd:c.gr;dot(x,ty,A.nar?6:7.5,col);if(seen&&bad)cross(x,ty,3,'#fff');else if(seen)tick(x,ty,3,'#fff');
      if(!A.nar||i%2===0||i===n-1)tx(DAY[i],x,ty+18,A.fs-3.5,600,c.mut,'center',1);}
    if(t<2500&&!R){ln(scan,ty-16,scan,ty+12,c.or,2.2);pill('Threat Scan',clamp(scan,A.x0+44,A.x1-44),ty+36,A.fs-3.5,c.or,'#fff','center');}
    if(picked){var a=eo(seg(2600,2900,t));cx.globalAlpha=a;cx.beginPath();cx.arc(px,ty,13,0,Math.PI*2);cx.strokeStyle=c.or;cx.lineWidth=2.2;cx.stroke();
      pill(A.nar?'Last clean':'Last clean point · Fri',px,ty+38,A.fs-3.5,c.gr,'#fff','center');
      if(!A.nar)pill('3 infected · skipped',sx+gap*6,ty+38,A.fs-3.5,'rgba(192,57,43,.14)',c.rd,'center');cx.globalAlpha=1;}
    var bw=Math.min(w*.7,300),bh=Math.min(h*.36,92),bx=A.x0+(w-bw)/2,by=A.y1-bh-6,cols=6,gp=6,cw=(bw-24-(cols-1)*gp)/cols,ch=Math.min(26,bh-44);
    if(picked){var k=eo(seg(2900,3300,t));ln(px,ty+52,lerp(px,bx+bw/2,k),lerp(ty+52,by,k),glow(c),1.6,[4,3]);}
    box(bx,by,bw,bh,12,c.nv,t>4300?c.gr:c.bl,1.8);tx('CLEANROOM',bx+12,by+15,A.fs-3,800,'#FFB866','left',1);tx(t>4300?'VERIFIED':'isolated',bx+bw-12,by+15,A.fs-3.5,800,t>4300?'#7BE39A':'#C9D6F0','right',1);
    for(var j=0;j<cols;j++){var on=t>3300+j*160;box(bx+12+j*(cw+gp),by+bh-ch-12,cw,ch,4,on?'rgba(22,163,74,.85)':'rgba(255,255,255,.12)');}}

  /* 3 · Air gap: copies cross a one-way gate; ransomware encrypts the primary and tries to delete the vault — denied; restore from the air gap */
  function s2(t,c,A){var w=A.x1-A.x0,h=A.y1-A.y0,pw=A.nar?w*.4:w*.36,ph=Math.min(h*.66,150),py=A.y0+(h-ph)/2+8,vx=A.x1-pw,gx=A.x0+w/2,cols=3,rows=3,gp=6,cw=(pw-24-(cols-1)*gp)/cols,ch=(ph-46-(rows-1)*gp)/rows,hit=t>2400,rest=t>3700;
    box(A.x0,py,pw,ph,12,c.card,hit&&!rest?c.rd:rest?c.gr:c.line,1.6);tx('PRIMARY',A.x0+12,py+15,A.fs-3,800,c.mut,'left',1);tx(rest?'RESTORED':hit?'ENCRYPTED':'backups',A.x0+pw-12,py+15,A.fs-3.5,800,rest?c.gr:hit?c.rd:c.mut,'right',1);
    box(vx,py,pw,ph,12,c.nv,c.bl,1.8);tx('AIR GAP',vx+12,py+15,A.fs-3,800,'#FFB866','left',1);lock(vx+pw-18,py+16,6,'#FFB866');
    for(var i=0;i<cols*rows;i++){var r=Math.floor(i/cols),k=i%cols,x=k*(cw+gp)+12,y=py+30+r*(ch+gp),enc=hit&&t>2400+i*60,back=rest&&t>3700+i*70;
      box(A.x0+x,y,cw,ch,3,back?'rgba(22,163,74,.8)':enc?'rgba(192,57,43,.8)':c.card2);box(vx+x,y,cw,ch,3,t>300+i*120?'rgba(127,176,255,.55)':'rgba(255,255,255,.1)');}
    ln(gx,py-10,gx,py+ph+10,c.or,2,[6,4]);tx(A.nar?'ONE-WAY':'ONE-WAY GATE',gx,py-20,A.fs-3.5,800,c.or,'center',1);
    if(!rest){for(var q=0;q<3;q++){var u=((t/1400)+q/3)%1;if(t<2200||!hit)dot(lerp(A.x0+pw+6,vx-6,u),py+ph*.4+q*12,3,c.blT);}}
    if(hit){var ay=Math.min(py+ph+20,A.y1-22),a=eo(seg(2500,2900,t));cx.globalAlpha=a;pill(A.nar?'Delete → denied':'Delete vault → denied · immutable',gx,ay,A.fs-3.5,c.rd,'#fff','center');cx.globalAlpha=1;
      if(t>2600)cross(gx,py+ph*.3,5,c.rd);}
    if(rest){var k2=eo(seg(3700,4300,t));for(var m=0;m<3;m++){var u2=(k2+m*.18)%1;dot(lerp(vx-6,A.x0+pw+6,u2),py+ph*.72,3,c.gr);}}
    tx(rest?'Restored from the air-gapped copy · sample':'Sample data',A.x0+w/2,A.y1-2,A.fs-3,700,rest?c.gr:c.mut,'center',1,w);}

  /* 4 · Cloud Rewind: a cloud app is wiped by a bad change, then rebuilt in dependency order */
  var ND=[['Network · VPC',.5,.12],['IAM & keys',.17,.12],['Load balancer',.5,.38],['Web ×3',.2,.62],['App tier',.5,.62],['Database',.8,.62],['Object store',.8,.38]],ED=[[0,2],[1,4],[2,3],[2,4],[4,5],[4,6],[0,6]],ORD=[0,1,6,5,4,2,3];
  function s3(t,c,A){var w=A.x1-A.x0,h=A.y1-A.y0,bw=A.nar?w*.27:Math.min(118,w*.24),bh=24,down=t>900,rb=t>1900,pos=ND.map(function(n){return [A.x0+w*n[1],A.y0+h*n[2]+6];});
    function st(i){var o=ORD.indexOf(i),tr=2000+o*330;return !down?0:(rb&&t>tr)?2:1;}
    ED.forEach(function(e){var a=pos[e[0]],b=pos[e[1]],s1=st(e[0]),s2=st(e[1]),ok=s1!==1&&s2!==1;ln(a[0],a[1],b[0],b[1],ok?glow(c):'rgba(192,57,43,.35)',1.3,ok?[]:[4,4]);});
    ND.forEach(function(n,i){var p=pos[i],s=st(i),col=s===1?c.rd:s===2?c.gr:c.line;box(p[0]-bw/2,p[1]-bh/2,bw,bh,8,c.card,col,1.5);tx(n[0],p[0],p[1],A.fs-2.5,700,s===1?c.rd:c.ink,'center',0,bw-10);
      if(s===2&&!A.nar)tick(p[0]+bw/2-11,p[1],3.2,c.gr);});
    var cxp=A.x0+w*.5,cyp=A.y1-12;
    if(!down)tx('7 resources · in sync · sample',cxp,cyp,A.fs-2.5,700,c.mut,'center',1);
    else if(!rb)pill(A.nar?'Config wiped':'Ransomware · config wiped',cxp,cyp,A.fs-3,c.rd,'#fff','center');
    else{var done=ORD.filter(function(i){return st(i)===2;}).length,sec=Math.min(done,7)*6+Math.round(seg(1900,4400,t)*4);pill((done<7?'Rewinding… ':'Rebuilt in order · ')+done+'/7 · '+(A.nar?'':'00:')+(sec<10?'0':'')+sec+(A.nar?'s':' min'),cxp,cyp,A.fs-3,done<7?c.or:c.gr,'#fff','center');}}

  /* 5 · Identity: an unauthorised privilege change is detected, compared with backup and rolled back */
  var OBJ=[['Domain Admins group',1],['Conditional Access policy',0],['Okta app assignment',0],['Default Domain GPO',0]];
  var STP=[[1300,'Change detected','+3 members · sample'],[1900,'Compared with backup','not approved'],[2500,'Rolled back','object restored'],[3200,'Clean AD standby','checked by Threat Scan'],[4200,'Closed','report to owner']];
  function s4(t,c,A){var w=A.x1-A.x0,h=A.y1-A.y0,pw=A.nar?w*.52:w*.48,n=OBJ.length,rh=Math.min(40,h/n),oy=A.y0+(h-rh*n)/2;
    OBJ.forEach(function(o,i){var y=oy+rh*(i+.5),bad=o[1]&&t>900&&t<2500,fix=o[1]&&t>=2500;box(A.x0,y-rh*.38,pw,rh*.76,8,c.card,bad?c.rd:fix?c.gr:c.line,1.4);
      tx(o[0],A.x0+10,y,A.fs-2,600,c.ink,'left',0,pw-(A.nar?40:96));
      if(bad){var a=eo(seg(900,1200,t));cx.globalAlpha=a;pill(A.nar?'+3':'+3 members',A.x0+pw-8,y,A.fs-3.5,c.rd,'#fff','right');cx.globalAlpha=1;}
      else if(fix)pill(A.nar?'OK':'Reverted',A.x0+pw-8,y,A.fs-3.5,c.gr,'#fff','right');
      else tick(A.x0+pw-14,y,4,c.gr);});
    var px=A.x0+pw+(A.nar?12:20),sw=A.x1-px,sh=Math.min(36,h/5);
    STP.forEach(function(s,i){var y=A.y0+sh*(i+.5)+(h-sh*5)/2,on=t>s[0],a=eo(seg(s[0],s[0]+300,t));
      dot(px+7,y,on?6:4.5,on?(i===4?c.gr:i===0?c.rd:c.bl):c.line);if(i<4)ln(px+7,y+7,px+7,y+sh-7,c.line,1.2);
      cx.globalAlpha=on?1:.45;tx(s[1],px+20,y-(A.nar?0:6),A.fs-1.5,700,c.ink,'left',0,sw-24);if(!A.nar)tx(s[2],px+20,y+8,A.fs-3.5,600,c.mut,'left',1,sw-24);cx.globalAlpha=1;
      if(on&&a<1&&!R){cx.globalAlpha=1-a;cx.beginPath();cx.arc(px+7,y,6+a*8,0,Math.PI*2);cx.strokeStyle=c.bl;cx.lineWidth=1.5;cx.stroke();cx.globalAlpha=1;}});}

  var SCN=[s0,s1,s2,s3,s4];
  function size(){var r=cv.getBoundingClientRect();W=Math.max(10,r.width);H=Math.max(10,r.height);dpr=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);cx.setTransform(dpr,0,0,dpr,0,0);labels();paint();}
  function paint(){var c=P(),A=area();cx.clearRect(0,0,W,H);SCN[cur](R?4600:el,c,A);}
  function labels(){vn.textContent=SC[cur][0];vc.textContent=W&&W<420?(cur+1)+' / 5 · sample':'Scene '+(cur+1)+' of 5 · sample data';vt.textContent=SC[cur][1];
    dots.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.setAttribute('aria-selected',on?'true':'false');var ii=$('i',b);if(ii)ii.style.setProperty('--p',on&&R?1:0);});}
  function go(k){cur=(k+5)%5;el=0;labels();paint();}
  function frame(now){if(!last||now-last>200)last=now;var dt=now-last;last=now;if(!(paused||hover))el+=dt;if(el>=DUR){go(cur+1);return;}paint();var ii=$('i',dots[cur]);if(ii)ii.style.setProperty('--p',(el/DUR).toFixed(3));}
  dots.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-k'));});});
  if(pz)pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('paused',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');pz.setAttribute('aria-pressed',paused?'true':'false');});
  stage.addEventListener('mouseenter',function(){hover=true;});stage.addEventListener('mouseleave',function(){hover=false;});
  var sx=null;cv.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});cv.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
  cv.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse')sx=e.clientX;});cv.addEventListener('pointerup',function(e){if(e.pointerType!=='mouse'||sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
  labels();size();addEventListener('resize',size);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(paint);
  new MutationObserver(paint).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  window.__aoHero={go:go,pause:function(p){paused=!!p;},seek:function(t){el=+t;paint();}};
  if(R){if(pz)pz.hidden=true;return;}
  addTick(cv,frame);})();

/* =============== stack state =============== */
var SKEY='commvault-services-stack';
var STACK=[];try{STACK=(XH.store(SKEY)||[]).filter(function(n){return BYN[n];});}catch(e){STACK=[];}
var stackRender=function(){};
function toggleStack(nm){var i=STACK.indexOf(nm);if(i>-1)STACK.splice(i,1);else STACK.push(nm);try{XH.store(SKEY,STACK);}catch(_){}stackRender();if(i<0)XH.toast('Added to stack — '+nm);}
function addQuote(s){XH.cart.add({key:'commvault-services-'+s.s,name:s.n+' · via XcellHost',sub:'Commvault · '+CAT[s.c].n+' · '+(s.pr?s.pr.replace(/\*/g,'')+' (indicative, excl. GST) — confirm on quote':'price on quote'),price:0,qty:1});}

/* =================== CATALOGUE (client card format) =================== */
(function(){
  var box=$('#cmCards'),jump=$('#cmJump'),stat=$('#cmStat'),q=$('#cmQ'),hq=$('#cmHQ'),empty=$('#cmEmpty'),bar=$('#cmBar'),hdr=$('.hdr'),main=$('#main');
  var TOP=0;function setTop(){TOP=hdr?Math.round(hdr.getBoundingClientRect().height):0;main.style.setProperty('--cmTop',TOP+'px');}setTop();addEventListener('resize',setTop);
  var CARD={},st={q:''};
  function noteHTML(s){return s.note?' <em class="'+(s.rn?'rn':'')+'">'+esc(s.note)+'</em>':'';}
  function rowHTML(s){var ty=TYPE[s.t],b='<span class="cm-bd '+ty[0]+'" title="'+TYPEL[s.t]+'">'+ty[1]+'</span>';
    if(s.rn)b+='<span class="cm-bd rn">Renamed</span>';
    if(s.nw)b+='<span class="cm-bd nw">New</span>';if(s.e)b+='<span class="cm-bd ea">Early access</span>';
    if(s.l)b+='<span class="cm-bd lt">Legacy</span>';
    if(s.p)b+='<span class="cm-bd pp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>Popular</span>';
    if(s.x)b+='<a class="cm-bd xh" href="'+s.x+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>Managed by XcellHost</a>';
    b+=s.pr?'<span class="cm-bd pr" title="XcellHost price, indicative, excl. 18% GST">'+esc(s.pr)+'</span>':'<span class="cm-bd pq">Price on quote</span>';
    return '<div class="cm-rw" id="svc-'+s.s+'" data-i="'+s.i+'" data-logo-slot="'+esc(s.n)+'"><span class="cm-ri" aria-hidden="true">'+ICON[s.c]+'</span>'+
      '<div class="cm-rt"><b class="cm-rn">'+esc(s.n)+'</b><span class="cm-bds">'+b+'</span><p class="cm-rd">'+esc(s.d)+noteHTML(s)+'</p></div>'+
      '<div class="cm-ra">'+(s.t==='m'&&s.x?'<a class="cm-ext" href="'+s.x+'" aria-label="'+esc(s.n)+' on XcellHost">XcellHost <span aria-hidden="true">→</span></a>':'<a class="cm-ext" href="'+esc(s.u)+'" target="_blank" rel="noopener" aria-label="'+esc(s.n)+' on '+vl(s.u)+'’s site">'+vl(s.u)+' <span aria-hidden="true">↗</span></a>')+
      '<button type="button" class="cm-sk" data-n="'+esc(s.n)+'" aria-pressed="false"><span>+ Stack</span></button>'+
      '<button type="button" class="cm-aq" data-i="'+s.i+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg><span>Add to quote</span></button></div></div>';}
  var frag=d.createDocumentFragment();
  CATS.forEach(function(c){var el=d.createElement('article');el.className='cm-card'+(c.col==='#0B132B'?' nv':'');el.id='cat-'+c.k;el.style.setProperty('--c',c.col);el.setAttribute('aria-labelledby','cmh-'+c.k);
    var subs=c.subs.filter(function(g){return SV.some(function(s){return s.c===c.k&&s.g===g[0];});});
    var pills=subs.map(function(g){var n=SV.filter(function(s){return s.c===c.k&&s.g===g[0];}).length;return '<button type="button" class="cm-pill" data-g="'+g[0]+'" aria-expanded="false" aria-controls="cmp-'+c.k+'"><span class="cm-pn">'+esc(g[1])+'</span><span class="cm-pc">'+n+'</span></button>';}).join('');
    var rows=subs.map(function(g){return '<div class="cm-sg" data-g="'+g[0]+'"><h4>'+esc(g[1])+'</h4>'+SV.filter(function(s){return s.c===c.k&&s.g===g[0];}).map(rowHTML).join('')+'</div>';}).join('');
    el.innerHTML='<header class="cm-chd"><span class="cm-ci" aria-hidden="true">'+ICON[c.k]+'</span><h3 id="cmh-'+c.k+'">'+esc(c.n)+'</h3><span class="cm-cnt"><b>'+PER[c.k]+'</b> '+un(PER[c.k])+'</span></header>'+
      '<p class="cm-cd">'+esc(c.d)+'</p><div class="cm-pills" role="group" aria-label="'+esc(c.n)+' groups">'+pills+'<button type="button" class="cm-all" aria-expanded="false" aria-controls="cmp-'+c.k+'">Show all '+PER[c.k]+' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button></div>'+
      '<div class="cm-panel" id="cmp-'+c.k+'" hidden><div class="cm-ph"><b class="cm-pt2"></b><button type="button" class="cm-x" aria-label="Close list"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>'+rows+'</div>';
    CARD[c.k]=el;frag.appendChild(el);});
  box.appendChild(frag);
  SV.forEach(function(s){s.el=d.getElementById('svc-'+s.s);s.nm=s.el.querySelector('.cm-rn');s.dd=s.el.querySelector('.cm-rd');});
  var SHORT={"Commvault Cloud platform & AI": "Platform & AI", "Backup & Recovery — workloads": "Workloads", "SaaS protection (formerly Metallic)": "SaaS", "Identity resilience": "Identity", "Cyber resilience & clean recovery": "Cyber recovery", "Cloud-native: Cloud Rewind & Clumio": "Cloud Rewind & Clumio", "Data security & compliance": "Data security", "On-prem storage & appliances": "Storage", "Packages, SaaS prices & deployment": "Packages & prices", "Commvault services & support": "Commvault services", "XcellHost services alongside Commvault": "XcellHost services"};
  jump.innerHTML=CATS.map(function(c){return '<a href="#cat-'+c.k+'" data-k="'+c.k+'"'+(c.col==='#0B132B'?' class="nv"':'')+' style="--c:'+c.col+'"><i></i>'+esc(SHORT[c.n]||c.n)+'<b>'+PER[c.k]+'</b></a>';}).join('');

  function openCard(k,g,noAnim){var el=CARD[k],p=$('.cm-panel',el);el.dataset.open=g||'';
    $$('.cm-pill',el).forEach(function(b){var on=g===b.dataset.g;b.classList.toggle('on',on);b.setAttribute('aria-expanded',on?'true':'false');});
    var all=$('.cm-all',el);all.classList.toggle('on',g==='all');all.setAttribute('aria-expanded',g==='all'?'true':'false');
    all.innerHTML=(g==='all'?'Hide all':'Show all '+PER[k])+' <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
    if(!g){p.hidden=true;el.classList.remove('open');return;}
    p.hidden=false;el.classList.add('open');filterRows(el,g);
    if(!noAnim&&!R){p.classList.remove('in');void p.offsetWidth;p.classList.add('in');}}
  function filterRows(el,g){var qq=st.q,n=0,k=el.id.slice(4);$('.cm-panel',el).dataset.mode=(qq||g==='all'||g==='q')?'multi':'one';
    $$('.cm-sg',el).forEach(function(sg){var vis=0;$$('.cm-rw',sg).forEach(function(r){var s=SV[+r.dataset.i],ok=(qq?s.key.indexOf(qq)>-1:(g==='all'||sg.dataset.g===g));r.hidden=!ok;if(ok)vis++;});sg.hidden=!vis;n+=vis;});
    var lab=qq?n+' match'+(n===1?'':'es')+' in '+CAT[k].n:(g==='all'?'All '+PER[k]+' · '+CAT[k].n:(CAT[k].subs.filter(function(x){return x[0]===g;})[0]||['',''])[1]+' · '+n+' '+un(n));
    $('.cm-pt2',el).textContent=lab;}
  box.addEventListener('click',function(e){var t=e.target,b;
    if((b=t.closest('.cm-pill'))){var el=b.closest('.cm-card');if(st.q){clearQ();}openCard(el.id.slice(4),el.dataset.open===b.dataset.g?null:b.dataset.g);return;}
    if((b=t.closest('.cm-all'))){var el2=b.closest('.cm-card');if(st.q){clearQ();}openCard(el2.id.slice(4),el2.dataset.open==='all'?null:'all');return;}
    if((b=t.closest('.cm-x'))){var el3=b.closest('.cm-card');if(st.q){clearQ();}openCard(el3.id.slice(4),null);el3.scrollIntoView({block:'nearest',behavior:R?'auto':'smooth'});return;}
    if((b=t.closest('.cm-sk'))){toggleStack(b.dataset.n);return;}
    if((b=t.closest('.cm-aq'))){addQuote(SV[+b.dataset.i]);b.classList.add('ok');setTimeout(function(){b.classList.remove('ok');},1500);}});

  function hl(el,txt,qq){if(!qq){el.textContent=txt;return;}var lo=txt.toLowerCase(),i=lo.indexOf(qq);if(i<0){el.textContent=txt;return;}el.innerHTML=esc(txt.slice(0,i))+'<mark>'+esc(txt.slice(i,i+qq.length))+'</mark>'+esc(txt.slice(i+qq.length));}
  function apply(){var qq=st.q,shown=0;
    SV.forEach(function(s){hl(s.nm,s.n,qq);if(qq){s.dd.innerHTML='';var sp=d.createElement('span');hl(sp,s.d,qq);s.dd.appendChild(sp);if(s.note){var em=d.createElement('em');if(s.rn)em.className='rn';em.textContent=s.note;s.dd.appendChild(d.createTextNode(' '));s.dd.appendChild(em);}}else{s.dd.innerHTML=esc(s.d)+noteHTML(s);}});
    CATS.forEach(function(c){var el=CARD[c.k],m=SV.filter(function(s){return s.c===c.k&&(!qq||s.key.indexOf(qq)>-1);});
      el.hidden=!m.length;shown+=m.length;
      $$('.cm-pill',el).forEach(function(b){var n=m.filter(function(s){return s.g===b.dataset.g;}).length;b.hidden=qq&&!n;$('.cm-pc',b).textContent=qq?n:SV.filter(function(s){return s.c===c.k&&s.g===b.dataset.g;}).length;});
      $('.cm-cnt',el).innerHTML=qq?'<b>'+m.length+'</b> of '+PER[c.k]:'<b>'+PER[c.k]+'</b> '+un(PER[c.k]);
      var ja=$('a[data-k="'+c.k+'"]',jump);ja.hidden=!m.length;$('b',ja).textContent=m.length;
      if(qq&&m.length){var p=$('.cm-panel',el);p.hidden=false;el.classList.add('open');el.dataset.open='q';filterRows(el,'q');$$('.cm-pill,.cm-all',el).forEach(function(b){b.classList.remove('on');});}
      else if(!qq&&el.dataset.open==='q'){openCard(c.k,null,true);}});
    empty.hidden=shown>0;
    stat.textContent=qq?'Showing '+shown+' of '+TOTAL+' '+U:'Showing all '+TOTAL+' '+U;
    XH.vcShown=shown;}
  var tmr;function setQ(v,src){st.q=v.trim().toLowerCase();if(src!==q)q.value=v;if(src!==hq)hq.value=v;clearTimeout(tmr);tmr=setTimeout(apply,60);}
  function clearQ(){st.q='';q.value='';hq.value='';apply();}
  XH.vcSearch=function(v){st.q=v.trim().toLowerCase();q.value=v;hq.value=v;apply();};
  q.addEventListener('input',function(){setQ(q.value,q);});
  hq.addEventListener('input',function(){setQ(hq.value,hq);});
  $('#cmHS').addEventListener('submit',function(e){e.preventDefault();setQ(hq.value,hq);toCat();});
  hq.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();setQ(hq.value,hq);toCat();}});
  $('#cmReset').addEventListener('click',function(){clearQ();q.focus();});
  function toCat(){var y=box.getBoundingClientRect().top+scrollY-TOP-bar.getBoundingClientRect().height-16;window.scrollTo({top:y,behavior:R?'auto':'smooth'});}
  /* '/' focuses this page's catalogue search; window capture so the site-wide '/' search does not also open */
  window.addEventListener('keydown',function(e){if(e.key==='/'&&!e.ctrlKey&&!e.metaKey&&!e.altKey&&!/INPUT|TEXTAREA|SELECT/.test((d.activeElement||{}).tagName||'')&&!d.querySelector('.modal.open,#xhSearch.open')){e.preventDefault();e.stopPropagation();var r=box.getBoundingClientRect();(r.top<innerHeight&&r.bottom>0?q:hq).focus();}},true);
  function toCard(k){var el=CARD[k];var y=el.getBoundingClientRect().top+scrollY-TOP-bar.getBoundingClientRect().height-14;window.scrollTo({top:y,behavior:R?'auto':'smooth'});}
  jump.addEventListener('click',function(e){var a=e.target.closest('a[data-k]');if(!a)return;e.preventDefault();toCard(a.dataset.k);history.replaceState(null,'','#cat-'+a.dataset.k);});
  var tick=false;function spy(){tick=false;var m=TOP+bar.getBoundingClientRect().height+60,cur=null;CATS.forEach(function(c){var el=CARD[c.k];if(el.hidden)return;if(el.getBoundingClientRect().top<=m)cur=c.k;});
    $$('a',jump).forEach(function(a){var on=a.dataset.k===cur;if(on!==a.classList.contains('on')){a.classList.toggle('on',on);if(on){var jr=jump.getBoundingClientRect(),ar=a.getBoundingClientRect();if(ar.left<jr.left||ar.right>jr.right)jump.scrollBy({left:ar.left-jr.left-40,behavior:'auto'});}}});
    bar.classList.toggle('stuck',bar.getBoundingClientRect().top<=TOP+1);}
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(spy);}},{passive:true});spy();
  function deep(){var h=decodeURIComponent(location.hash.slice(1)),s;
    if(/^cat-/.test(h)&&CARD[h.slice(4)]){var el0=CARD[h.slice(4)];setTimeout(function(){window.scrollTo({top:el0.getBoundingClientRect().top+scrollY-TOP-bar.getBoundingClientRect().height-14,behavior:'instant'});},30);return true;}
    if(!/^svc-/.test(h)||!(s=BYS[h.slice(4)]))return false;
    if(st.q)clearQ();openCard(s.c,s.g,true);
    function place(){var r=s.el.getBoundingClientRect();window.scrollTo({top:r.top+scrollY-TOP-bar.getBoundingClientRect().height-30,behavior:'instant'});}
    place();setTimeout(place,120);setTimeout(function(){place();s.el.classList.remove('flash');void s.el.offsetWidth;s.el.classList.add('flash');},420);return true;}
  XH.vcDeep=deep;XH.vcOpen=openCard;
  addEventListener('hashchange',deep);d.addEventListener('click',function(e){var a=e.target.closest('a[href^="#svc-"]');if(a&&a.getAttribute('href')===location.hash){e.preventDefault();deep();}});
  apply();if(location.hash)setTimeout(deep,60);
})();

/* =================== POPULAR STRIP =================== */
(function(){var box=$('#cmPops');if(!box)return;
  var LIST=[["Backup & Recovery for Microsoft 365", ""], ["Backup & Recovery for VM", ""], ["Backup & Recovery for Databases", ""], ["Commvault Air Gap", ""], ["Threat Scan", ""], ["Commvault Cleanroom", ""], ["Backup & Recovery for Active Directory", ""], ["Cloud Rewind", ""], ["Commvault Grid", ""], ["Gold package", ""], ["Managed DR", "cloud-disaster-recovery-smb.html"], ["Entra ID Backup by XcellHost", "entra-id-backup.html"]];
  box.innerHTML=LIST.filter(function(x){return BYN[x[0]];}).map(function(x,k){var s=BYN[x[0]],h=x[1]||('#svc-'+s.s),c=CAT[s.c];
    return '<a class="cm-pc2'+(c.col==='#0B132B'?' nv':'')+'" href="'+h+'" style="--k:'+k+';--c:'+c.col+'"><i>'+ICON[s.c]+'</i><b>'+esc(s.n)+'</b><small>'+esc(s.d)+'</small>'+(s.pr?'<small class="cm-pp"><b>'+esc(s.pr)+'</b></small>':'')+'<em>'+(x[1]?'XcellHost page →':'In the catalogue →')+'</em></a>';}).join('');})();

/* =================== PRICES (copied from local XcellHost pages) =================== */
$$('em[data-p]').forEach(function(e){e.textContent=XH.inr(+e.getAttribute('data-p'));});

/* =================== FINDER (goal → products) + STACK BUILDER =================== */
(function(){
  // goal: [key, icon, label, where XcellHost starts, why, [products]] — prices only from local XcellHost pages (indicative, excl. GST)
  var GOALS=[["m365", "", "Back up Microsoft 365", "Backup & Recovery for Microsoft 365", "Exchange, OneDrive, SharePoint and Teams backed up outside your tenant, with Threat Scan and Data Posture 360 as 2026 add-ons and an India copy of Entra ID from XcellHost.", ["Backup & Recovery for Microsoft 365", "Threat Scan for Microsoft 365", "Data Posture 360 for Microsoft 365", "Backup & Recovery for Active Directory", "Microsoft 365 Backup — list price", "Entra ID Backup by XcellHost"]], ["dc", "", "Protect a data centre", "Commvault Cloud (Software) on Commvault Grid", "VMs, databases and file servers on one set of plans, stored on Grid in your data centre, with an immutable copy off site and our NOC watching the jobs.", ["Backup & Recovery for VM", "Backup & Recovery for Databases", "Backup & Recovery for Files & Objects", "Commvault Grid", "Air Gap for Grid", "Backup operations — Essential", "Onboarding & transition"]], ["ransom", "", "Recover from ransomware", "Gold package + Commvault Cleanroom", "Scan backups for malware, keep an air-gapped copy, test and restore into an isolated Cleanroom, and get Commvault's response experts if the worst happens.", ["Threat Scan", "ThreatWise", "Commvault Air Gap", "Commvault Cleanroom", "AI-Assisted Synthetic Recovery", "Ransomware response", "Quarterly restore drill"]], ["dr", "", "Disaster recovery & failover", "Auto Recovery", "Replication with orchestrated failover and failback, tested on a schedule — into the cloud or our Mumbai Private Cloud DR target.", ["Auto Recovery", "Gold package", "Private Cloud DR target in Mumbai", "Managed DR", "DR readiness assessment & runbook"]], ["cloud", "", "Rebuild cloud apps", "Cloud Rewind", "Capture AWS, Azure and Google Cloud applications with their configuration and rebuild them in order after a bad change or an attack.", ["Cloud Rewind", "Cloud Rewind for AWS", "Cloud Rewind for Azure", "Cloud Rewind for Google Cloud", "Backup & Recovery for Kubernetes"]], ["aws", "", "Petabyte-scale AWS data", "Clumio by Commvault", "S3, DynamoDB, Iceberg tables and AWS databases backed up outside your account, with Backtrack to roll data back fast.", ["Clumio by Commvault", "Clumio Backtrack for Amazon S3", "Clumio Backtrack for Amazon DynamoDB", "Clumio for Apache Iceberg on AWS", "Clumio for RDS, Aurora, Neptune & DocumentDB", "Clumio for EC2 & EBS"]], ["id", "", "Protect identity", "Backup & Recovery for Active Directory", "Object-level or full-forest recovery for AD and Entra ID, Okta backup, change rollback and a clean AD standby.", ["Backup & Recovery for Active Directory", "Identity change & anomaly detection", "Okta", "Active Directory Pre Recover", "Entra ID Backup by XcellHost"]], ["saas", "", "Salesforce & Dynamics 365", "Backup & Recovery for Salesforce", "Production and sandbox orgs backed up with unlimited storage — Commvault publishes a US$3.60 per user list price for each.", ["Backup & Recovery for Salesforce", "Backup & Recovery for Microsoft Dynamics 365", "Backup & Recovery for Google Workspace", "Salesforce Backup — list price", "Dynamics 365 Backup — list price"]], ["data", "", "Find & govern sensitive data", "Platinum package", "Find PII and ROT data, see who can reach it, govern access to databases with Satori-powered controls and run eDiscovery from backups.", ["Data Posture 360", "Structured data discovery & classification", "Data Access Governance", "Permission insights & risk remediation", "Commvault Cloud Compliance", "Platinum package"]], ["ai", "", "Protect AI & data lakes", "AI Workload Protection", "Back up Databricks, Snowflake and vector stores, protect AI agents and their configurations, and publish clean data for AI.", ["AI Workload Protection", "AI Protect", "AgentRecover", "Data Activate", "AI Studio", "MCP Server"]], ["edge", "", "Branches & endpoints", "Commvault Edge + endpoint backup", "Small-site backup storage validated on Dell, HPE and Lenovo, plus laptop backup with self-service restore.", ["Commvault Edge", "Backup & Recovery for Endpoints", "Endpoint Backup — list price", "Backup & Recovery for DevOps"]], ["india", "", "Keep a copy in India", "XcellHost immutable storage in Mumbai", "An immutable India copy, daily logged backups for Rule 46(8) and Entra ID backup kept in India, run by our team.", ["Immutable India storage (Mumbai)", "Daily backup for books of accounts", "Entra ID Backup by XcellHost", "Server backup", "Backup operations — Essential"]]],GI={m365:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',dc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',ransom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',dr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',aws:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg>',id:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',saas:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',data:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',ai:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',edge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',india:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>'};GOALS.forEach(function(g){g[1]=GI[g[0]];});
  var gb=$('#cmGoals'),rec=$('#cmRec'),sl=$('#cmSL'),sle=$('#cmSLe'),sbn=$('#cmSbN'),stkN=$('#cmStkN'),form=$('#cmQF'),ta=$('#cmFS'),fu=$('#cmFU');
  gb.innerHTML=GOALS.map(function(g){return '<button type="button" data-g="'+g[0]+'" aria-pressed="false">'+g[1]+'<span>'+g[2]+'</span></button>';}).join('');
  function pick(id){var g=GOALS.filter(function(x){return x[0]===id;})[0];$$('button',gb).forEach(function(b){var on=b.getAttribute('data-g')===id;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on?'true':'false');});
    var L=g[5].filter(function(n){return BYN[n];});
    rec.innerHTML='<div class="cm-edp"><small>Where XcellHost starts</small><b>'+esc(g[3])+'</b><p>'+esc(g[4])+'</p></div>'+
      '<div class="cm-rh"><b>'+L.length+' '+un(L.length)+' for “'+esc(g[2])+'”</b><button type="button" class="btn btn-blue btn-sm" id="cmAddAll"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg> Add all to stack</button></div><ol>'+L.map(function(n,k){var s=BYN[n],c=CAT[s.c];return '<li'+(c.col==='#0B132B'?' class="nv"':'')+' style="--k:'+k+';--c:'+c.col+'"><i>'+ICON[s.c]+'</i><span><a href="#svc-'+s.s+'">'+esc(s.n)+'</a><small>'+esc(s.d)+(s.pr?' · <b>'+esc(s.pr)+'</b>':'')+'</small></span><button type="button" class="cm-rk" data-n="'+esc(n)+'" aria-pressed="'+(STACK.indexOf(n)>-1)+'" aria-label="Toggle '+esc(n)+' in stack">'+(STACK.indexOf(n)>-1?'✓':'+')+'</button></li>';}).join('')+'</ol><p class="cm-fine">A starting point — we confirm the Commvault package, add-ons, SaaS or software and who runs what with you. Commvault resale is on quote; US$ figures are Commvault list prices; ₹ prices are XcellHost services from the linked pages · indicative · excl. 18% GST.</p>';
    $('#cmAddAll').addEventListener('click',function(){L.forEach(function(n){if(STACK.indexOf(n)<0)STACK.push(n);});try{XH.store(SKEY,STACK);}catch(_){}render();XH.toast(L.length+' '+un(L.length)+' in your stack');});}
  gb.addEventListener('click',function(e){var b=e.target.closest('button[data-g]');if(b)pick(b.getAttribute('data-g'));});
  rec.addEventListener('click',function(e){var b=e.target.closest('.cm-rk');if(b)toggleStack(b.getAttribute('data-n'));});
  function txt(){var u=fu.value.trim();return STACK.length?'Commvault stack ('+STACK.length+' '+un(STACK.length)+(u?', size: '+u:'')+'):\n'+STACK.map(function(x){var s=BYN[x];return '- '+x+' ['+CAT[s.c].n+']'+(s.pr?' — '+s.pr:'');}).join('\n'):'';}
  function render(){var n=STACK.length;sbn.textContent=n;stkN.textContent=n;$('#cmStk').classList.toggle('has',n>0);sle.hidden=n>0;
    var by={};STACK.forEach(function(x){var s=BYN[x];(by[s.c]=by[s.c]||[]).push(s);});
    sl.innerHTML=CATS.filter(function(c){return by[c.k];}).map(function(c){return '<li'+(c.col==='#0B132B'?' class="nv"':'')+' style="--c:'+c.col+'"><b>'+ICON[c.k]+esc(c.n)+'</b><span>'+by[c.k].map(function(s){return '<em>'+esc(s.n)+'<button type="button" data-rm="'+esc(s.n)+'" aria-label="Remove '+esc(s.n)+'">×</button></em>';}).join('')+'</span></li>';}).join('');
    SV.forEach(function(s){var b=s.el&&s.el.querySelector('.cm-sk');if(!b)return;var on=STACK.indexOf(s.n)>-1;b.setAttribute('aria-pressed',on?'true':'false');b.classList.toggle('on',on);$('span',b).textContent=on?'✓ In stack':'+ Stack';});
    $$('.cm-rk',rec).forEach(function(b){var on=STACK.indexOf(b.getAttribute('data-n'))>-1;b.setAttribute('aria-pressed',on?'true':'false');b.textContent=on?'✓':'+';});
    ta.value=txt();}
  stackRender=render;
  fu.addEventListener('change',function(){ta.value=txt();});
  sl.addEventListener('click',function(e){var b=e.target.closest('[data-rm]');if(b)toggleStack(b.getAttribute('data-rm'));});
  $('#cmSX').addEventListener('click',function(){STACK.length=0;try{XH.store(SKEY,STACK);}catch(_){}render();});
  $('#cmSQ').addEventListener('click',function(){form.hidden=false;render();if(!STACK.length)ta.placeholder='e.g. Microsoft 365 backup for 400 users, 60 VMs and 12 TB of SQL on Commvault Grid, Air Gap + Cleanroom, Cloud Rewind for AWS';setTimeout(function(){$('#cmFN').focus();},40);});
  $('#cmSC').addEventListener('click',function(){if(!STACK.length){XH.toast('Your stack is empty');return;}STACK.forEach(function(x){addQuote(BYN[x]);});});
  XH.onForm('commvault-services-stack',function(data,f){var b=d.createElement('div');b.className='done';b.innerHTML='<div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Quotation request received</h4><p></p>';
    $('p',b).textContent='Thanks '+(data.name||'').split(' ')[0]+' — we will reply to '+data.email+' with a design and an INR quotation for '+(STACK.length?STACK.length+' Commvault '+un(STACK.length):'your Commvault needs')+'.';
    f.hidden=true;f.parentNode.insertBefore(b,f);XH.toast('Request received');return false;});
  render();pick(GOALS[0][0]);
})();

/* =================== COMPLIANCE BADGES (CSS text badges, no official marks) =================== */
(function(){
  var GC=[["ISO/IEC 27001:2022", "ISO/IEC", "Commvault Cloud SaaS & Remote Managed Services", "https://www.commvault.com/trust-center"], ["SOC 2 Type II", "AICPA", "Commvault Cloud SaaS", "https://www.commvault.com/trust-center"], ["FedRAMP High", "US FedRAMP", "Commvault Cloud for Government", "https://www.commvault.com/trust-center"], ["PCI", "PCI SSC", "Commvault Cloud SaaS, per Commvault", "https://www.commvault.com/trust-center"], ["CJIS", "US FBI CJIS", "Commvault Cloud SaaS, per Commvault", "https://www.commvault.com/trust-center"], ["IRAP", "Australia, ASD", "Assessed — Commvault Cloud SaaS", "https://www.commvault.com/trust-center"], ["GovRAMP", "GovRAMP", "Authorized, per Commvault", "https://www.commvault.com/trust-center"], ["FIPS 140-3", "NIST", "Compliant cryptography, per Commvault", "https://www.commvault.com/trust-center"], ["NIST 800-53 CP-9 & CP-10", "NIST", "Backup & recovery controls", "https://www.commvault.com/trust-center"], ["VPAT 2.5", "WCAG · Sec. 508", "Accessibility conformance report", "https://www.commvault.com/trust-center"]];
  var XC=[['ISO 9001','ISO','Quality management'],['ISO/IEC 27001','ISO/IEC','Information security'],['ISO/IEC 27017','ISO/IEC','Cloud security'],['ISO/IEC 27018','ISO/IEC','PII protection'],['ISO/IEC 20000-1','ISO/IEC','IT service management'],['SOC 2 Type I &amp; II','AICPA','Service controls'],['MeitY empanelled','MeitY','Government of India'],['Tier IV','Data centre','Facility tier']];
  function seal(x,k,href){var tag=href?'a':'div';return '<!-- LOGO SLOT: official certification mark file --><'+tag+' class="cm-seal2" style="--k:'+k+'"'+(href?' href="'+href+'" target="_blank" rel="noopener"':'')+'><span class="cm-sh"><small>'+x[1]+'</small><b>'+x[0]+'</b></span><span class="cm-sd">'+x[2]+(href?' <i aria-hidden="true">↗</i>':'')+'</span></'+tag+'>';}
  $('#cmSealsA').innerHTML=GC.map(function(x,k){return seal(x,k,x[3]);}).join('');
  $('#cmSealsX').innerHTML=XC.map(function(x,k){return seal(x,k);}).join('');
  $$('.cm-seals').forEach(function(g){if(R){g.classList.add('on');return;}XH.whenVisible(g,function(v){if(v)g.classList.add('on');});});
})();
})();


/**
 * The header mega-menu tree: 8 top-level menus,
 * 29 tabs, 208 links.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { MenuTop } from './models';
import { VPS_PRODUCT_COPY } from './vps-product-copy.data';

export const MEGA_MENU: MenuTop[] = [
  {
    "label": "Web Presence",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "0",
        "label": "SMB Cloud",
        "on": true,
        "featureCards": [
          {
            "label": "Endpoint security",
            "title": "Advanced Endpoint Security (EDR)",
            "body": "Identify, protect, detect, respond and recover from endpoint threats.",
            "image": "/assets/images/menu-edr-labeled.png",
            "link": "/advanced-endpoint-security-edr"
          },
          {
            "label": "Web Presence",
            "title": "Cloud Backup",
            "body": "Safeguard all your files with secure online data protection.",
            "image": "/assets/images/menu-cloud-backup.png",
            "imagePosition": "center 35%",
            "link": "/cloud-backup"
          }
        ],
        "groups": [
          {
            "heading": "SMB Cloud",
            "items": [
              
              {
                "title": "Tally on Cloud",
                "pill": "Top seller",
                "desc": null
              },

              {
                "title": "Cloud Backup",
                "pill": "Popular",
                "desc": null
              },
              {
                "title": "Cloud Drive",
                "pill": null,
                "desc": null
              },

              {
                "title": "Advanced Endpoint Security (EDR)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Remote Monitoring & Mgmt (RMM)",
                "pill": null,
                "desc": null
              },
              {
                "title": "SMB Cyber Security Appliance",
                "pill": "New",
                "desc": null
              },
               {
                "title": "Microsoft 365 SMB",
                "pill": null,
                "desc": "Cloud productivity tools with migration and 24/7 support"
              },
              {
                "title": "SMB Cloud Desktop",
                "pill": null,
                "desc": null
              },
              {
                "title": "Acronis GenAI Protection",
                "pill": "New",
                "desc": null
              },
              
              {
                "title": "Cloud Disaster Recovery SMB",
                "pill": null,
                "desc": null
              },
              {
                "title": "DPDPA For SMB",
                "pill": null,
                "desc": null
              },
              {
                "title": "Workforce Analytics",
                "pill": null,
                "desc": null
              },
              
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "Domains",
        "on": true,
        "groups": [
          {
            "heading": "Domains",
            "items": [
              {

                "title": "Register a Domain Name",
                "pill": null,
                "desc": "Get your domain name now 🚀"
              },
              {
                "title": "Transfer Your Domain",
                "pill": "1-yr free ext.",
                "desc": "Get a 1 Year Free Extension 🆓"
              },
              {
                "title": "Latest Domain Extensions",
                "pill": null,
                "desc": "Explore new and relevant domain options 🌐"
              },
              {
                "title": "Premium Domains",
                "pill": null,
                "desc": "Get a headstart with a prime domain name 🏆"
              },
              {
                "title": "Domain Protect+",
                "pill": null,
                "desc": "Hide your contact info from spammers 🚫"
              },
              {
                "title": "Domain Whois Lookup",
                "pill": null,
                "desc": "Take a look at a domain's registry record 📋"
              },
              {
                "title": "Domain Name Prices",
                "pill": null,
                "desc": "Compare prices across TLDs 🔄"
              },
              {
                "title": "Backorder Domains",
                "pill": null,
                "desc": "Reserve a domain name for future availability 🕰️"
              },
              {
                "title": "TLD Directory",
                "pill": null,
                "desc": "Reserve a domain name for future availability 🕰️"
              },
              {
                "title": "AI Domain Generator",
                "pill": null,
                "desc": "Reserve a domain name for future availability 🕰️"
              },
              
              {
                "title": "Ai Domain Advisor",
                "pill": "FREE",
                "desc": "Reserve a domain name for future availability 🕰️"
              },
              {
                "title": "Bharat Domains",
                "pill": "FREE",
                "desc": "Reserve a domain name for future availability 🕰️"
              },
              
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Web Hosting",
        "on": false,
        "groups": [
          {
            "heading": "Web Hosting",
            "items": [
              {
                "title": "Windows Hosting",
                "pill": null,
                "desc": "Reliable Microsoft-certified hosting 💻"
              },
              {
                "title": "Linux Hosting",
                "pill": null,
                "desc": "Reliable Linux-certified hosting 🐧"
              },
              {
                "title": "WordPress Hosting",
                "pill": null,
                "desc": "Optimized hosting for WordPress sites ⚡"
              },
              {
                "title": "Free Domain",
                "pill": "FREE",
                "desc": "Reserve a domain name for future availability 🕰️"
              },
              {
                "title": "AI Website Builder",
                "pill": "",
                "desc": "Make your website in minutes ✨"
              },
              {
                "title": "Migrate to XcellHost",
                "pill": null,
                "desc": "Seamless migration to XcellHost's cloud services 🌐"
              },
              {
                "title": "Website Backup",
                "pill": null,
                "desc": "Secure, automated backups to safeguard your website 🔒"
              },
              
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "Web Tools",
        "on": true,
        "groups": [
          {
            "heading": "Tools",
            "items": [
              
              {
                "title": "cPanel Control Panel",
                "pill": null,
                "desc": "Manage your hosting easily with a user-friendly control panel 🖱️"
              },
              {
                "title": "Plesk Control Panel",
                "pill": null,
                "desc": "A powerful web hosting control panel 🎛️"
              },
              {
                "title": "Webuzo Control Panel",
                "pill": null,
                "desc": "A powerful web hosting control panel 🎛️"
              },
              {
                "title": "CloudLinux",
                "pill": null,
                "desc": "A powerful web hosting control panel 🎛️"
              },
              {
                "title": "Plesk Servers",
                "pill": null,
                "desc": "A powerful web hosting control panel 🎛️"
              },
              {
                "title": "cPanel Servers",
                "pill": null,
                "desc": "A powerful web hosting control panel 🎛️"
              },
              
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "Web Security",
        "on": true,
        "groups": [
          {
            "heading": "Web Security",
            "items": [
              {
                "title": "Web Security (SiteLock)",
                "pill": null,
                "desc": "Digital safety with our comprehensive web solutions 🌐"
              },
              {
                "title": "Web Security (cWatch)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Thawte  SSL Certificates",
                "pill": null,
                "desc": null
              },
              {
                "title": "RapidSSL  SSL Certificates",
                "pill": null,
                "desc": null
              },
              {
                "title": "CodeGuard Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "HackerGuardian PCI Compliance Scanning",
                "pill": null,
                "desc": null
              },
              {
                "title": "TrustedSite Certifications",
                "pill": null,
                "desc": null
              },
              {
                "title": "Imunify360",
                "pill": null,
                "desc": null
              },

              
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "Web Design",
        "on": true,
        "groups": [
          {
            "heading": "Web Design",
            "items": [
              {
                "title": "Web Design for CA, CS & Lawyers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Web Design for SMB",
                "pill": null,
                "desc": null
              },
              {
                "title": "Web Design for Enterprise",
                "pill": null,
                "desc": null
              },
              {
                "title": "AI Website Builder",
                "pill": null,
                "desc": "Reliable AI Website Builder hosting 🐧"
              },
              {
                "title": "AI Logo Maker",
                "pill": null,
                "desc": "Reliable AI Website Builder hosting 🐧"
              },
              
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Web Marketing",
        "on": false,
        "groups": [
          {
            "heading": "Web Marketing",
            "items": [
              {
                "title": "WhatsApp For Business",
                "pill": "AI Powered",
                "desc": "Official WhatsApp Business API for sales, support and automation"
              },
              {
                "title": "WhatsApp Broadcasting",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Google My Business",
                "pill": "AI Powered",
                "desc": "Improve your business visibility on Google 👋"
              },
              {
                "title": "E-mail Marketing",
                "pill": null,
                "desc": "Engage customers effectively with targeted email campaigns 🎯"
              },
              
              {
                "title": "SMS Marketing",
                "pill": null,
                "desc": "Reach customers instantly with impactful text campaigns 📲"
              },
              {
                "title": "Website SEO",
                "pill": "AI Powered",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              
              {
                "title": "Transactional Emails",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Veritas",
                "href": "/veritas",
                "pill": "New",
                "desc": "Site audits, keyword research, local SEO and AI-answer visibility in one workspace."
              },
              
            ]
          }
        ]
      },
      {
        "g": "7",
        "label": "VPS Servers",
        "on": false,
        "groups": [
          {
            "heading": "Virtual Private Servers",
            "items": [
              {
                "title": "Explore VPS",
                "href": "/vps-hosting",
                "pill": "New",
                "desc": "Explore VPS plans, locations and server configurations."
              },
              {
                "title": "VPS India",
                "href": "/vps-india",
                "pill": null,
                "desc": "Explore VPS hosting in Mumbai, India."
              },
              {
                "title": "VPS USA",
                "href": "/vps-usa",
                "pill": null,
                "desc": "Explore VPS hosting in New York, USA."
              },
              {
                "title": "VPS Netherlands",
                "href": "/vps-netherlands",
                "pill": null,
                "desc": "Explore VPS hosting in Amsterdam, Netherlands."
              },
              {
                "title": "Windows VPS",
                "pill": "New",
                "desc": VPS_PRODUCT_COPY['Windows VPS'].tagline
              },
              {
                "title": "Linux VPS",
                "pill": "New",
                "desc": VPS_PRODUCT_COPY['Linux VPS'].tagline
              },
              
              {
                "title": "n8n VPS",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['n8n VPS'].tagline
              },
              {
                "title": "OpenClaw VPS",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['OpenClaw VPS'].tagline
              },
              {
                "title": "cPanel VPS",
                "href": "/cpanel-vps",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['cPanel VPS'].tagline
              },
              {
                "title": "WordPress VPS",
                "href": "/wordpress-vps",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['WordPress VPS'].tagline
              },
              {
                "title": "Trading VPS",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['Trading VPS'].tagline
              },
              {
                "title": "Claude VPS",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['Claude VPS'].tagline
              },
              {
                "title": "Window 11 VPS",
                "pill": "1-Click",
                "desc": VPS_PRODUCT_COPY['Window 11 VPS'].tagline
              },
              {
                "title": "Odoo Hosting",
                "pill": null,
                "desc": VPS_PRODUCT_COPY['Odoo Hosting'].tagline
              },
              {
                "title": "ERPNext Hosting",
                "pill": null,
                "desc": VPS_PRODUCT_COPY['ERPNext Hosting'].tagline
              },
              {
                "title": "Dokploy Hosting",
                "pill": null,
                "desc": VPS_PRODUCT_COPY['Dokploy Hosting'].tagline
              },
              {
                "title": "Hermes AI Hosting",
                "pill": null,
                "desc": VPS_PRODUCT_COPY['Hermes AI Hosting'].tagline
              },
              {
                "title": "Coolify Hosting",
                "pill": null,
                "desc": VPS_PRODUCT_COPY['Coolify'].tagline
              },
              {
                "title": "DeepSeek Hosting",
                "pill": null,
                "desc": VPS_PRODUCT_COPY['DeepSeek Hosting'].tagline
              }, 
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "SMB Tools",
        "on": false,
        "groups": [
          {
            "heading": "SMB Tools",
            "items": [
              {
                "title": "Bio Link + Digital Visiting Card",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Smart QR & NFC Automation",
                "href": "/smart-qr-and-nfc-automation",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "AI Review MagicQR",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Digital Menu & Catalog Management",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Lead Generation & Pipeline CRM",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Billing Software",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "HRM + Attendance",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "Instant Website",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "WordPress Automation",
                "href": "/wordpress-automation",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
              {
                "title": "AEO + GEO Automation",
                "href": "/aeo-geo-automation",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },
                  {
                "title": "Instagram Automation",
                "pill": "New",
                "desc": "Maximise online visibility and reach your target audience 🎯"
              },

            ]
          }
        ]
      },
    ]
  },
  {
    "label": "Cloud",
    "noDrop": false,
    "feature": null,
    "tabs": [
      
      {
        "g": "0",
        "label": "Cloud Infra",
        "on": false,
        "groups": [
          {
            "heading": "Cloud Infra",
            "items": [
              {
                "title": "Performance Cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Bare Metal Servers",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "GPU Servers",
                "pill": "High demand",
                "desc": null
              },
             
              {
                "title": "Private Cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Global Cloud",
                "pill": null,
                "desc": null,
                "href": "/global-cloud"
              },
              {
                "title": "Co-Location Services",
                "pill": null,
                "desc": null,
                "href": "/co-location-services"
              },
              {
                "title": "Hybrid Cloud",
                "pill": null,
                "desc": null,
                "href": "/hybrid-cloud"
              },
              {
                "title": "Edge Cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "CDN Cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "IoT Cloud",
                "pill": null,
                "desc": "Managed device connectivity, edge processing and IoT platforms"
              },
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "Cloud Servers",
        "on": false,
        "groups": [
          {
            "heading": "Cloud Servers",
            "items": [
              {
                "title": "Explore Cloud Servers",
                "pill": null,
                "desc": null
              },
              {
                "title": "General Compute",
                "pill": null,
                "desc": null
              },
              {
                "title": "CPU Optimized",
                "pill": null,
                "desc": null
              },
              {
                "title": "Memory Optimized",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Bare Metal Servers",
        "on": false,
        "groups": [
          {
            "heading": "Bare Metal Servers",
            "items": [
              {
                "title": "Explore Bare Metal Servers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Windows Servers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Linux Servers",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "RPC Nodes",
                "pill": null,
                "desc": null
              },
              {
                "title": "Storage Servers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Virtualization Servers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cloud Repatriation",
                "pill": null,
                "desc": null
              },
              {
                "title": "Gaming Servers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Dedicated AI Servers",
                "href": "/dedicated-ai-servers",
                "pill": null,
                "desc": "Dedicated NVIDIA GPU servers in Mumbai for AI training, fine-tuning and inference."
              },
              
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "GPU Servers",
        "on": false,
        "groups": [
          {
            "heading": "Entry Level GPU",
            "items": [
              {
                "title": "NVIDIA L40S",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA L4",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA A30",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA A2",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA H200",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA H100",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA A100",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA B300",
                "pill": null,
                "desc": null
              },
              {
                "title": "RTX Pro 6000",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA RTX 6000 Ada",
                "pill": null,
                "desc": null
              },
              {
                "title": "RTX A6000",
                "pill": null,
                "desc": null
              },
              {
                "title": "RTX 8000",
                "pill": null,
                "desc": null
              },
              {
                "title": "NVIDIA Vera Rubin",
                "pill": null,
                "desc": null
              },
              {
                "title": "GPU Clusters",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Inference Cloud",
        "on": false,
        "groups": [
          {
            "heading": "Inference Cloud",
            "items": [
              {
                "title": "Serverless Inference",
                "pill": null,
                "desc": null
              },
              {
                "title": "Dedicated Inference",
                "pill": null,
                "desc": null
              },
              {
                "title": "Model Catalog",
                "pill": null,
                "desc": null
              },
              {
                "title": "Model Directory",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "20",
        "label": "Container & Images",
        "on": false,
        "groups": [
          {
            "heading": "Images & Container",
            "items": [
              {
                "title": "Kubernetes as a Services",
                "pill": null,
                "desc": null
              },
              {
                "title": "Docker as a Services",
                "pill": null,
                "desc": null
              },
              {
                "title": "Container Registry",
                "pill": null,
                "desc": null
              },
              {
                "title": "Container as a Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "Function as a Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "OpenShift as a Service",
                "pill": null,
                "desc": null
              },

               
            ]
          }
        ]
      },
      {
        "g": "7",
        "label": "Managed Databases",
        "on": false,
        "groups": [
          {
            "heading": "Managed Databases",
            "items": [
              {
                "title": "Managed Microsoft SQL",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed PostgreSQL",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed MySQL",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed MariaDB",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Redis",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed MongoDB",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Oracle",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft SQL-Server Comparision",
                "pill": null,
                "desc": null,
                "href": "/sql-server-comparision"
              },
              {
                "title": "Windows-Server Comparision",
                "pill": null,
                "desc": null,
                "href": "/windows-server-comparision"
              },
              

            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "Managed Services",
        "on": false,
        "groups": [
          {
            "heading": "Managed Services",
            "items": [
              {
                "title": "Resilience Operations",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cloud Operations",
                "pill": null,
                "desc": null
              },
              {
                "title": "Database Operations",
                "pill": null,
                "desc": null
              },
              {
                "title": "Network Operations",
                "pill": null,
                "desc": null
              },
              {
                "title": "Security Operations",
                "pill": null,
                "desc": null
              },
              {
                "title": "Workspace Operations",
                "pill": null,
                "desc": null
              },
              {
                "title": "Server Management",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "9",
        "label": "Managed Public Cloud",
        "on": false,
        "groups": [
          {
            "heading": "Managed Public Cloud",
            "items": [
              
              {
                "title": "Managed AWS",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Azure",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Google Cloud (GCP)",
                "pill": null,
                "href": "/vendor-partners/google-cloud",
                "desc": null
              },
              {
                "title": "Managed Oracle Cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Multi-Cloud Manager ",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Kubernetes",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "10",
        "label": "Managed DevOps",
        "on": false,
        "groups": [
          {
            "heading": "Managed DevOps",
            "items": [
              {
                "title": "Cloud DevOps Services",
                "pill": null,
                "desc": null
              },
              {
                "title": "AWS DevOps",
                "pill": null,
                "desc": null
              },
              {
                "title": "Azure DevOps",
                "pill": null,
                "desc": null
              },
              {
                "title": "GCP DevOps",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "11",
        "label": "",
        "on": false,
        "groups": [
          {
            "heading": "DevOps Tools",
            "items": [

              {
                "title": "Terraform",
                "pill": null,
                "desc": null
              },
              {
                "title": "Ansible",
                "pill": null,
                "desc": null
              },
              {
                "title": "Puppet",
                "pill": null,
                "desc": null
              },
              {
                "title": "Chef",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "12",
        "label": "Managed Monitoring",
        "on": false,
        "groups": [
          {
            "heading": "Managed Monitoring",
            "items": [
              {
                "title": "Cloud Monitoring",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cloud Observability",
                "pill": null,
                "desc": null
              },
              {
                "title": "Video Surveillance as a Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "IOT Monitoring",
                "pill": null,
                "desc": null
              },
              {
                "title": "Digital Experience Monitoring",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      
      {
        "g": "15",
        "label": "Network & Security",
        "on": false,
        "featureCards": [
          {
            "label": "Cloud",
            "title": "Virtual Networks",
            "body": "Connect your cloud resources with secure virtual networks.",
            "image": "/assets/images/menu-virtual-networks-v3.png",
            "link": "/virtual-networks"
          },
          {
            "label": "Cloud",
            "title": "Virtual Firewalls",
            "body": "Protect your cloud network with virtual firewall security.",
            "image": "/assets/images/menu-virtual-firewalls-v3.png",
            "link": "/virtual-firewalls"
          }
        ],
        "groups": [
          {
            "heading": "Network & Security",
            "items": [
              {
                "title": "Virtual Networks",
                "href": "/virtual-networks",
                "pill": null,
                "desc": null
              },
              {
                "title": "Virtual Firewalls",
                "href": "/virtual-firewalls",
                "pill": null,
                "desc": null
              },
              {
                "title": "Virtual Load Balancer",
                "href": "/virtual-load-balancer",
                "pill": null,
                "desc": null
              },
              {
                "title": "DNS",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Bandwidth",
                "pill": null,
                "desc": null
              },
              {
                "title": "Public IP",
                "pill": null,
                "desc": null
              },
              {
                "title": "CloudConnect",
                "pill": null,
                "desc": null
              },
              {
                "title": "DirectConnect",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "WAF",
                "pill": null,
                "desc": null
              },
              {
                "title": "Endpoint Security",
                "pill": null,
                "desc": null
              },
              {
                "title": "SSL",
                "pill": null,
                "desc": null
              },
              

            ]
          }
        ]
      },
      {
        "g": "Managed IT",
        "label": "Managed IT",
        "on": false,
        "featureCards": [
          {
            "label": "Cloud",
            "title": "Virtual Networks",
            "body": "Connect your cloud resources with secure virtual networks.",
            "image": "/assets/images/menu-virtual-networks-v3.png",
            "link": "/virtual-networks"
          },
          {
            "label": "Cloud",
            "title": "Virtual Firewalls",
            "body": "Protect your cloud network with virtual firewall security.",
            "image": "/assets/images/menu-virtual-firewalls-v3.png",
            "link": "/virtual-firewalls"
          }
        ],
        "groups": [
          {
            "heading": "Managed IT",
            "items": [
              {
                "title": "vCIO as a Service",
                "href": "/vcio-as-a-service",
                "pill": null,
                "desc": null
              },
              {
                "title": "vCTO as a Service",
                
                "pill": null,
                "desc": null
              },
              {
                "title": "vDPO as a Service",
                
                "pill": null,
                "desc": null
              },
              {
                "title": "vCFAIO as a Service",
                
                "pill": null,
                "desc": null
              },
              {
                "title": "vCISO as a Service",
                
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      }, 
    ]
  },
  {
    "label": "Productivity",
    "noDrop": false,
    "feature": null,
    "tabs": [
      
      {
        "g": "0",
        "label": "Email Services",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "XcellWorkSpace",
            "body": "Bring business email, documents and teamwork into one workspace.",
            "image": "/assets/images/menu-productivity-xcellworkspace-v1.png",
            "link": "/xcellworkspace"
          },
          {
            "label": "Productivity",
            "title": "Microsoft 365 SMB",
            "body": "Equip your team with cloud productivity and collaboration tools.",
            "image": "/assets/images/menu-productivity-microsoft-365-smb-v1.png",
            "link": "/microsoft-365-smb"
          }
        ],
        "groups": [
          {
            "heading": "Email Services",
            "items": [
              {
                "title": "XcellWorkSpace",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft 365 SMB",
                "pill": null,
                "desc": "Cloud productivity tools with migration and 24/7 support"
              },
              {
                "title": "Microsoft 365 Enterprise",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft 365 E7",
                "pill": null,
                "desc": "Explore the Frontier Suite, Copilot, Agent 365 and Entra Suite.",
                "href": "/microsoft-365-e7"
              },
              {
                "title": "Google Workspace",
                "pill": null,
                "desc": null
              },
              {
                "title": "Zoho Workspace",
                "pill": null,
                "desc": null
              },
              
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "Email Security",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Email Security SMB",
            "body": "Protect your business inboxes from spam, phishing and malware.",
            "image": "/assets/images/menu-productivity-email-security-smb-v1.png",
            "link": "/email-security-smb"
          },
          {
            "label": "Productivity",
            "title": "Email Security Enterprise",
            "body": "Secure enterprise email with advanced threat protection.",
            "image": "/assets/images/menu-productivity-email-security-enterprise-v1.png",
            "link": "/email-security-enterprise"
          }
        ],
        "groups": [
          {
            "heading": "Email Security",
            "items": [
              {
                "title": "Email Security SMB",
                "pill": null,
                "desc": "Advanced email security, DLP and archival",
                "href": "/email-security-smb"
              },
              {
                "title": "Email Security Enterprise",
                "pill": null,
                "desc": "Advanced email security, DLP and archival",
                "href": "/email-security-enterprise"
              },
              {
                "title": "Advanced Email Security",
                "pill": null,
                "desc": null
              },
              {
                "title": "Enterprise DMARC",
                "pill": "Best seller",
                "desc": null
              },
              
              {
                "title": "Email Encryption",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Microsoft 365 Security Assessment",
                "pill": null,
                "desc": null
              },
              {
                "title": "Google Security Assessment",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Security Posture Management",
                "pill": null,
                "desc": null
              },   
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Email Data Protection",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Email Backup",
            "body": "Keep business email protected and ready to restore.",
            "image": "/assets/images/menu-productivity-email-backup-v1.png",
            "link": "/email-backup"
          },
          {
            "label": "Productivity",
            "title": "Email Archiving",
            "body": "Preserve and search business email with secure archiving.",
            "image": "/assets/images/menu-productivity-email-archiving-v1.png",
            "link": "/email-archiving"
          }
        ],
        "groups": [
          {
            "heading": "Email Data Protection",
            "items": [
              {
                "title": "Email Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "Email Archiving ",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "Email Addons",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Email Signature",
            "body": "Create consistent, professional email signatures for your team.",
            "image": "/assets/images/menu-productivity-email-signature-v1.png",
            "link": "/email-signature"
          },
          {
            "label": "Productivity",
            "title": "Microsoft 365 Training",
            "body": "Help your team get more from Microsoft 365.",
            "image": "/assets/images/menu-productivity-microsoft-365-training-v1.png",
            "link": "/microsoft-365-training"
          }
        ],
        "groups": [
          {
            "heading": "Email Addons",
            "items": [
              
              {
                "title": "Email Signature",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Microsoft 365 Training",
                "pill": null,
                "desc": null
              },
              {
                "title": "Mcrosoft Project Server",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Viva",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Visio",
                "pill": null,
                "desc": null
              }, 
              
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "Collaboration Services",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Cloud Conferencing",
            "body": "Connect your team with cloud meetings and collaboration.",
            "image": "/assets/images/menu-productivity-cloud-conferencing-v1.png",
            "link": "/cloud-conferencing"
          },
          {
            "label": "Productivity",
            "title": "Cloud Contact Center",
            "body": "Support customers through a connected cloud contact center.",
            "image": "/assets/images/menu-productivity-cloud-contact-center-v1.png",
            "link": "/cloud-contact-center"
          }
        ],
        "groups": [
          {
            "heading": "Collaboration Services",
            "items": [
              
              {
                "title": "Cloud Conferencing",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Cloud Contact Center",
                "pill": null,
                "desc": null
              },
              {
                "title": "Zoom Conferenceing",
                "pill": null,
                "desc": null
              },  
              
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "Cloud Desktop",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "SMB Cloud Desktop",
            "body": "Access your business desktop securely from anywhere.",
            "image": "/assets/images/menu-productivity-smb-cloud-desktop-v1.png",
            "link": "/smb-cloud-desktop"
          },
          {
            "label": "Productivity",
            "title": "Cloud Desktop Enterprise (VDI)",
            "body": "Deliver secure virtual desktops across your organization.",
            "image": "/assets/images/menu-productivity-cloud-desktop-enterprise-v1.png",
            "link": "/cloud-desktop-enterprise-vdi"
          }
        ],
        "groups": [
          {
            "heading": "Cloud Desktop",
            "items": [
              {
                "title": "SMB Cloud Desktop",
                "pill": null,
                "desc": null
              },

              {
                "title": "Cloud Desktop Enterprise (VDI)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Accops Digital Workspace",
                "pill": null,
                "desc": null
              },
              {
                "title": "Windows 365",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },  
      {
        "g": "6",
        "label": "Microsoft Copilot",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Microsoft Copilot",
            "body": "Work smarter with AI assistance across everyday tasks.",
            "image": "/assets/images/menu-productivity-microsoft-copilot-v1.png",
            "link": "/microsoft-copilot"
          },
          {
            "label": "Productivity",
            "title": "Microsoft Copilot Studio",
            "body": "Build AI agents and connect your business workflows.",
            "image": "/assets/images/menu-productivity-copilot-studio-v1.png",
            "link": "/microsoft-copilot-studio"
          }
        ],
        "groups": [
          {
            "heading": "Microsoft Copilot",
            "items": [
              
              {
                "title": "Microsoft Copilot ",
                "pill": "Hot Seller",
                "desc": null
              },
              {
                "title": "Microsoft Copilot Studio",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Copilot Consulting ",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Copilot Training",
                "pill": null,
                "desc": null
              }, 
              
            ]
          }
        ]
      },
      {
        "g": "7",
        "label": "Managed Productivity",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Managed Microsoft 365",
            "body": "Keep Microsoft 365 running smoothly with expert management.",
            "image": "/assets/images/menu-productivity-managed-microsoft-365-v1.png",
            "link": "/managed-microsoft-365"
          },
          {
            "label": "Productivity",
            "title": "Managed GWS",
            "body": "Simplify Google Workspace administration and support.",
            "image": "/assets/images/menu-productivity-managed-google-workspace-v1.png",
            "link": "/managed-gws"
          }
        ],
        "groups": [
          {
            "heading": "Managed Productivity",
            "items": [
              
              {
                "title": "Managed Microsoft 365",
                "href": "/managed-microsoft-365",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed GWS",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed MDM",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Intune Services",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Phishing Simulation",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Agent 365",
                "href": "/microsoft-agent-365",
                "pill": null,
                "desc": "Discover, govern and secure your AI agents with XcellHost"
              },
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "Microsoft Power",
        "on": false,
        "featureCards": [
          {
            "label": "Productivity",
            "title": "Power BI",
            "body": "Turn business data into clear dashboards and insights.",
            "image": "/assets/images/menu-productivity-power-bi-v1.png",
            "link": "/power-bi"
          },
          {
            "label": "Productivity",
            "title": "Power Automate",
            "body": "Automate routine tasks and connect your business processes.",
            "image": "/assets/images/menu-productivity-power-automate-v1.png",
            "link": "/power-automate"
          }
        ],
        "groups": [
          {
            "heading": "Microsoft Power Platform",
            "items": [
              
              {
                "title": "Power BI",
                "pill": null,
                "desc": null
              },
              {
                "title": "Power Automate",
                "pill": null,
                "desc": null
              },
              {
                "title": "Power Pages",
                "pill": null,
                "desc": null
              },
              {
                "title": "Power Apps",
                "pill": null,
                "desc": null
              }, 
            ]
          }
        ]
      },
    ]
  },

  {
    "label": "Data Protection",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "1",
        "label": "SaaS Backup",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "Microsoft 365 Backup",
            "body": "Protect Microsoft 365 email and files with cloud backup.",
            "image": "/assets/images/menu-data-protection-microsoft-365-backup-v1.png",
            "link": "/microsoft-365-backup"
          },
          {
            "label": "Data Protection",
            "title": "Google Workspace Backup",
            "body": "Back up Google Workspace data and restore it when needed.",
            "image": "/assets/images/menu-data-protection-google-workspace-backup-v1.png",
            "link": "/google-workspace-backup"
          }
        ],
        "groups": [
          {
            "heading": "Saas Backup",
            "items": [
               {
                "title": "Microsoft 365 Backup",
                "pill": "Best seller",
                "desc": null
              },
              {
                "title": "Google Workspace Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "Entra ID Backup",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "SalesForce Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "Claude Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "GitHub Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "Zoho Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "Dropbox Backup",
                "pill": null,
                "desc": null
              },
              {
                "title": "Box Backup",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },

      {
        "g": "0",
        "label": "Information Archive",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "Cloud Object Storage",
            "body": "Store and protect your business data in cloud object storage.",
            "image": "/assets/images/menu-data-protection-cloud-object-storage-v1.png",
            "link": "/cloud-object-storage"
          }
        ],
        "groups": [
          {
            "heading": "Information Archive",
            "items": [
               {
                "title": "Cloud Object Storage",
                "pill": "Best seller",
                "desc": null
              },
              
            ]
          }
        ]
      },
      
      {
        "g": "2",
        "label": "Acronis Cyber Protect",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "Acronis Backup Advanced",
            "body": "Protect business workloads with advanced backup and recovery.",
            "image": "/assets/images/menu-data-protection-acronis-backup-advanced-v1.png",
            "link": "/acronis-backup-advanced"
          },
          {
            "label": "Data Protection",
            "title": "Acronis True Image",
            "body": "Keep computers and important files backed up and protected.",
            "image": "/assets/images/menu-data-protection-acronis-true-image-v1.png",
            "link": "/acronis-true-image"
          }
        ],
        "groups": [
          {
            "heading": "Acronis Cyber Protect",
            "items": [
              
              {
                "title": "Acronis Backup Advanced",
                "pill": null,
                "desc": null
              },
              {
                "title": "Acronis True Image",
                "pill": null,
                "desc": null
              },
               {
                "title": "Direct Backup To Public Cloud Backup",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "Druva Resilience",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "Explore Druva Platform",
            "body": "Explore cloud data protection and resilience with Druva.",
            "image": "/assets/images/menu-data-protection-druva-platform-v1.png",
            "link": "/explore-druva-platform"
          },
          {
            "label": "Data Protection",
            "title": "AI Resilience",
            "body": "Explore AI resilience for your business data.",
            "image": "/assets/images/menu-data-protection-ai-resilience-v1.png",
            "link": "/ai-resilience"
          }
        ],
        "groups": [
          {
            "heading": "Druva Resilience",
            "items": [
              {
                "title": "Explore Druva Platform",
                "pill": null,
                "desc": null
              },
              {
                "title": "AI Resilience",
                "pill": null,
                "desc": null
              },
              {
                "title": "Identity Resilience",
                "pill": null,
                "desc": null
              },
              {
                "title": "eDiscovery & Compliance",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Resilience",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cyber Resilience",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      }, 
      {
        "g": "4",
        "label": "Veeam Platform",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "Veeam Overview",
            "body": "Explore backup, recovery and data resilience with Veeam.",
            "image": "/assets/images/menu-data-protection-veeam-platform-v1.png",
            "link": "/veeam-overview"
          }
        ],
        "groups": [
          {
            "heading": "Veeam Platform",
            "items": [
               {
                "title": "Veeam Overview",
                "pill": "Best seller",
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "CommVault Platform",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "CommVault Overview",
            "body": "Explore enterprise data protection with CommVault.",
            "image": "/assets/images/menu-data-protection-commvault-platform-v1.png",
            "link": "/commvault-overview"
          }
        ],
        "groups": [
          {
            "heading": "CommVault Data Platform",
            "items": [
               {
                "title": "CommVault Overview",
                "pill": "Best seller",
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Cloud DR",
        "on": false,
        "featureCards": [
          {
            "label": "Data Protection",
            "title": "Cloud Disaster Recovery for SMB",
            "body": "Keep your business ready with cloud disaster recovery.",
            "image": "/assets/images/menu-data-protection-cloud-dr-smb-v1.png",
            "link": "/cloud-disaster-recovery-for-smb"
          },
          {
            "label": "Data Protection",
            "title": "Cloud Disaster Recovery for Enterprise",
            "body": "Support business continuity with enterprise disaster recovery.",
            "image": "/assets/images/menu-data-protection-cloud-dr-enterprise-v1.png",
            "link": "/cloud-disaster-recovery-for-enterprise"
          }
        ],
        "groups": [
          {
            "heading": "Cloud Disaster Recovery",
            "items": [
              {
                "title": "Cloud Disaster Recovery for SMB",
                "pill": "Best seller",
                "desc": null
              },
              {
                "title": "Cloud Disaster Recovery for Enterprise",
                "pill": "Best seller",
                "desc": null
              },
              {
                "title": "AWS Cloud Disaster Recovery",
                "pill": "Best seller",
                "desc": null
              },
              {
                "title": "Azure Cloud Disaster Recovery",
                "pill": "Best seller",
                "desc": null
              },
              {
                "title": "GCP Cloud Disaster Recovery",
                "pill": "Best seller",
                "desc": null
              },
              {
                "title": "SAP Cloud Disaster Recovery",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
    ]
  },
  {
    "label": "Digital Trust",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "0",
        "label": "SSL by Brand",
        "on": true,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "GeoTrust SSL Certificates",
            "body": "Secure websites with GeoTrust SSL certificates.",
            "image": "/assets/images/menu-digital-trust-geotrust-ssl-v1.png",
            "link": "/geotrust-ssl-certificates"
          },
          {
            "label": "Digital Trust",
            "title": "DigiCert SSL Certificates",
            "body": "Explore DigiCert certificates for website security.",
            "image": "/assets/images/menu-digital-trust-digicert-ssl-v1.png",
            "link": "/digicert-ssl-certificates"
          }
        ],
        "groups": [
          {
            "heading": "SSL by Brand",
            "items": [
              {
                "title": "GeoTrust SSL Certificates",
                "pill": "Popular",
                "desc": null
              },
              {
                "title": "DigiCert SSL Certificates",
                "href": "/digicert-ssl-certificates",
                "pill": null,
                "desc": null
              },
              {
                "title": "Sectigo SSL Certificates" ,
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "SSL by Types",
        "on": true,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "SSL Certificates",
            "body": "Secure website connections with SSL certificates.",
            "image": "/assets/images/menu-digital-trust-ssl-certificates-v1.png",
            "link": "/ssl-certificates"
          },
          {
            "label": "Digital Trust",
            "title": "Code Signing Certificates",
            "body": "Verify software authenticity with code signing certificates.",
            "image": "/assets/images/menu-digital-trust-code-signing-certificates-v1.png",
            "link": "/code-signing-certificates"
          }
        ],
        "groups": [
          {
            "heading": "SSL by Types",
            "items": [
              {
                "title": "SSL Certificates",
                "pill": "Popular",
                "desc": null
              },
              {
                "title": "Code Signing Certificates",
                "pill": null,
                "desc": null
              },
              {
                "title": "Email Signing Certificates" ,
                "pill": null,
                "desc": null
              },
              {
                "title": "Mark Certificates",
                "pill": null,
                "desc": null
              },
              {
                "title": "Website Security Solutions",
                "pill": null,
                "desc": null
              },
              {
                "title": "Certificate Management",
                "pill": null,
                "desc": null
              },
              {
                "title": "Automatic SSL Certificate",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "SSL Automation Tools",
        "label": "SSL Automation Tools",
        "on": true,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "AutoInstall SSL For Linux & Windows",
            "body": "Automate SSL installation for Linux and Windows.",
            "image": "/assets/images/menu-digital-trust-autoinstall-ssl-v1.png",
            "link": "/autoinstall-ssl-for-linux-and-windows"
          },
          {
            "label": "Digital Trust",
            "title": "AutoInstall SSL For Web Hosts",
            "body": "Simplify SSL installation across web hosting environments.",
            "image": "/assets/images/menu-digital-trust-web-host-ssl-v1.png",
            "link": "/autoinstall-ssl-for-web-hosts"
          }
        ],
        "groups": [
          {
            "heading": "SSL Automation Tools",
            "items": [
              {
                "title": "AutoInstall SSL For Linux & Windows",
                "pill": "Popular",
                "desc": null
              },
              {
                "title": "AutoInstall SSL For Web Hosts",
                "pill": "Popular",
                "desc": null
              },
                  {
                "title": "ACME-Enabled SSL Certificates",
                "pill": "Popular",
                "desc": null
              },
                  {
                "title": "Certificate Lifecycle Management Platforms",
                "pill": "Popular",
                "desc": null
              },
              {
                "title": "47-Days-SSL",
                "pill": "Popular",
                "desc": null
              },
              {
                "title": "SSL Installation Service",
                "href": "/ssl-installation-service",
                "pill": "Popular",
                "desc": "Expert SSL installation, CSR generation, certificate chain setup and testing."
              },
              
           
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Managed PKI",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "Certificate Mgmt Solutions",
            "body": "Manage digital certificates and their lifecycle.",
            "image": "/assets/images/menu-digital-trust-certificate-management-v1.png",
            "link": "/certificate-mgmt-solutions"
          },
          {
            "label": "Digital Trust",
            "title": "Managed PKI",
            "body": "Explore managed public key infrastructure.",
            "image": "/assets/images/menu-digital-trust-managed-pki-v1.png",
            "link": "/managed-pki"
          }
        ],
        "groups": [
          {
            "heading": "Managed PKI",
            "items": [
              {
                "title": "Certificate Mgmt Solutions",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed PKI",
                "pill": null,
                "desc": null
              },
              {
                "title": "Private CA",
                "pill": null,
                "desc": null
              },
              {
                "title": "IoT PKI",
                "pill": null,
                "desc": "Unique device identities, secure provisioning and lifecycle management"
              },
              {
                "title": "IoT Device Certificates",
                "pill": null,
                "desc": "Unique X.509 identities for devices, automated renewal and revocation"
              },
              {
                "title": "Cloud Code Signing",
                "pill": null,
                "desc": "Sign builds from CI/CD with HSM-protected keys, policies and approvals"
              },
              {
                "title": "Matter DAC",
                "pill": null,
                "desc": "Matter Device Attestation Certificates for trusted smart-home devices"
              },
              {
                "title": "PKI Software",
                "pill": null,
                "desc": "Compare PKI platforms and deploy CA, RA, OCSP and HSM infrastructure"
              },
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "Software Trust",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "Comodo Code Signing",
            "body": "Protect software integrity with trusted digital signatures.",
            "image": "/assets/images/menu-digital-trust-comodo-code-signing-v1.png",
            "link": "/comodo-code-signing"
          },
          {
            "label": "Digital Trust",
            "title": "Comodo EV Code Signing",
            "body": "Explore code signing with extended publisher validation.",
            "image": "/assets/images/menu-digital-trust-comodo-ev-code-signing-v1.png",
            "link": "/comodo-ev-code-signing"
          }
        ],
        "groups": [
          {
            "heading": "Code Signing",
            "items": [
              {
                "title": "Comodo Code Signing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Comodo EV Code Signing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Sectigo Code Signing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Sectigo EV Code Signing",
                "pill": null,
                "desc": null
              },
              {
                "title": "DigiCert Code Signing",
                "pill": null,
                "desc": null
              },
              {
                "title": "DigiCert EV Code Signing",
                "pill": null,
                "desc": null
              }
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "Messaging Trust",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "DigiCert S/MIME Class 1",
            "body": "Sign and protect email with DigiCert S/MIME certificates.",
            "image": "/assets/images/menu-digital-trust-digicert-smime-class-1-v1.png",
            "link": "/digicert-smime-class-1"
          },
          {
            "label": "Digital Trust",
            "title": "DigiCert S/MIME (OV)",
            "body": "Explore organization-validated email signing certificates.",
            "image": "/assets/images/menu-digital-trust-digicert-smime-ov-v1.png",
            "link": "/digicert-smime-ov"
          }
        ],
        "groups": [
          {
            "heading": "Email Signing",
            "items": [
              {
                "title": "DigiCert S/MIME Class 1",
                "pill": null,
                "desc": null
              },
              {
                "title": "DigiCert S/MIME (OV)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Comodo Personal Authentication",
                "href": "/comodo-personal-authentication",
                "pill": null,
                "desc": null
              }
            ]
          }
        ]
      },
      {
        "g": "Device Trust ",
        "label": "Device Trust",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "IoT Certificates Management",
            "body": "Manage certificate identities for connected devices.",
            "image": "/assets/images/menu-digital-trust-iot-certificates-v1.png",
            "link": "/iot-certificates-management"
          },
          {
            "label": "Digital Trust",
            "title": "Device Attestation Certificates",
            "body": "Verify device identities with attestation certificates.",
            "image": "/assets/images/menu-digital-trust-device-attestation-v1.png",
            "link": "/device-attestation-certificates"
          }
        ],
        "groups": [
          {
            "heading": "Device Trust",
            "items": [
              {
                "title": "IoT Certificates Management",
                "pill": null,
                "desc": null
              },
              {
                "title": "Device Attestation Certificates",
                "pill": null,
                "desc": null
              }
              
            ]
          }
        ]
      },
      {
        "g": "Content Trust",
        "label": "Content Trust",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "DigiCert Content Trust Manager",
            "body": "Sign images, video and documents with verifiable content provenance.",
            "image": "/assets/images/menu-digital-trust-document-security-v1.png",
            "link": "/document-security"
          }
        ],
        "groups": [
          {
            "heading": "Content Trust",
            "items": [
              {
                "title": "DigiCert Content Trust Manager",
                "href": "/document-security",
                "pill": null,
                "desc": null
              },
              
              
            ]
          }
        ]
      },
      {
        "g": "AI Agent Trust",
        "label": "AI Agent Trust",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "DigiCert AI Trust Manager",
            "body": "Discover AI agents, assign accountable identities and govern their access.",
            "image": "/assets/images/menu-digital-trust-ai-agent-trust-v1.png",
            "link": "/digicert-ai-trust-manager"
          }
        ],
        "groups": [
          {
            "heading": "AI Agent Trust",
            "items": [
              {
                "title": "DigiCert AI Trust Manager",
                "href": "/digicert-ai-trust-manager",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "DNS Trust",
        "label": "DNS Trust",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "DigiCert DNS",
            "body": "Explore authoritative DNS, DNSSEC, traffic steering and failover.",
            "image": "/assets/images/menu-digital-trust-dns-trust-v1.png",
            "link": "/digicert-dns"
          }
        ],
        "groups": [
          {
            "heading": "DNS Trust",
            "items": [
              {
                "title": "DigiCert DNS",
                "href": "/digicert-dns",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "Mark Certificates",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "Verified Mark Certificates (VMC)",
            "body": "Display your verified brand identity in supported email clients.",
            "image": "/assets/images/menu-digital-trust-verified-mark-certificates-v1.png",
            "link": "/verified-mark-certificates-vmc"
          },
          {
            "label": "Digital Trust",
            "title": "Digicert VMC",
            "body": "Explore DigiCert Verified Mark Certificates.",
            "image": "/assets/images/menu-digital-trust-digicert-vmc-v1.png",
            "link": "/digicert-vmc"
          }
        ],
        "groups": [
          {
            "heading": "Mark Certificate",
            "items": [
              {
                "title": "Verified Mark Certificates (VMC)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Dimake icert VMC ",
                "pill": null,
                "desc": null
              },
              {
                "title": "Digicert CMC",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Digital Signature",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "Docusign",
            "body": "Explore digital signing for business agreements.",
            "image": "/assets/images/menu-digital-trust-docusign-v1.png",
            "link": "/docusign"
          },
          {
            "label": "Digital Trust",
            "title": "Zoho Sign",
            "body": "Send, sign and manage documents with Zoho Sign.",
            "image": "/assets/images/menu-digital-trust-zoho-sign-v1.png",
            "link": "/zoho-sign"
          }
        ],
        "groups": [
          {
            "heading": "Digital Signature",
            "items": [
              {
                "title": "Docusign",
                "pill": null,
                "desc": null
              },
              {
                "title": "Zoho Sign",
                "href": "/zoho-sign",
                "pill": null,
                "desc": "Send, sign and manage documents with signing workflows and audit trails."
              },
              
            ]
          }
        ]
      },
      {
        "g": "Quantum Cryptography",
        "label": "Quantum Cryptography",
        "on": false,
        "featureCards": [
          {
            "label": "Digital Trust",
            "title": "DigiCert Quantum Central",
            "body": "Inventory cryptography, prioritise quantum risk and plan your migration.",
            "image": "/assets/images/menu-digital-trust-quantum-cryptography-v1.png",
            "link": "/digicert-quantum-central"
          }
        ],
        "groups": [
          {
            "heading": "Quantum Cryptography",
            "items": [
              {
                "title": "DigiCert Quantum Central",
                "href": "/digicert-quantum-central",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      
    ]
  },
  {
    "label": "Security",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "0",
        "label": "EndPoint Security",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "MDM",
            "body": "Manage and protect business devices from one place.",
            "image": "/assets/images/menu-security-mdm-v1.png",
            "link": "/cloud-mobile-device-mgmt"
          },
          {
            "label": "Security",
            "title": "MDR",
            "body": "Explore managed threat detection and response.",
            "image": "/assets/images/menu-security-mdr-v1.png",
            "link": "/mdr"
          }
        ],
        "groups": [
          {
            "heading": "EndPoint Security",
            "items": [
              {
                "title": "Scrutiny DLP",
                "href": "/scrutiny-dlp",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Scrutiny EDR",
                "href": "/scrutiny-edr",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Acronis MDR",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Acronis XDR",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Mobile Device Mgmt",
                "pill": null,
                "desc": null,
              },
              
              
              {
                "title": "Microsoft Defender",
                "pill": null,
                "desc": null
              },
              {
                "title": "Mobile App Security",
                "href": "/mobile-app-security",
                "pill": null,
                "desc": "Protect Android and iOS apps with runtime security, device binding and fraud controls."
              },
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "Cloud Security",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "AWS Security",
            "body": "Explore protection for your AWS cloud environment.",
            "image": "/assets/images/menu-security-aws-security-v1.png",
            "link": "/aws-security"
          },
          {
            "label": "Security",
            "title": "Azure Security",
            "body": "Explore security for Azure workloads and identities.",
            "image": "/assets/images/menu-security-azure-security-v1.png",
            "link": "/azure-security"
          }
        ],
        "groups": [
          {
            "heading": "Cloud Security",
            "items": [
              {
                "title": "AWS Security",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Azure Security",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "GCP Security",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Cloud Security Posture (CSPM)",
                "pill": "Free trial",
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Network Security",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "Network Access Control (NAC)",
            "body": "Control which devices can access your business network.",
            "image": "/assets/images/menu-security-network-access-control-v1.png",
            "link": "/network-access-control-nac"
          },
          {
            "label": "Security",
            "title": "Network Detection & Response (NDR)",
            "body": "Monitor network activity and investigate threats.",
            "image": "/assets/images/menu-security-network-detection-response-v1.png",
            "link": "/network-detection-and-response-ndr"
          }
        ],
        "groups": [
          {
            "heading": "Network Security",
            "items": [
              {
                "title": "Network Access Control (NAC)",
                "href": "/network-access-control-nac",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Network Detection & Response (NDR)",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Unified SASE",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "IP Address Mgmt (IPAM)",
                "pill": "Free trial",
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "39",
        "label": "Identity Security",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "Microsoft Entra ID",
            "body": "Explore identity and access security with Microsoft Entra ID.",
            "image": "/assets/images/menu-security-microsoft-entra-id-v1.png",
            "link": "/microsoft-entra-id"
          },
          {
            "label": "Security",
            "title": "Multi-Factor Authentication",
            "body": "Add identity verification to protect business access.",
            "image": "/assets/images/menu-security-multi-factor-authentication-v1.png",
            "link": "/multi-factor-authentication"
          }
        ],
        "groups": [
          {
            "heading": "identity Security",
            "items": [
              {
                "title": "Microsoft Entra ID",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Multi-Factor Authentication",
                "href": "/multi-factor-authentication",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Identity & Access Management",
                "href": "/identity-and-access-management",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Privileged Access Management",
                "href": "/privileged-access-management",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Privileged Identity Management",
                "href": "/privileged-identity-management",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Identity Governance and Administration",
                "href": "/identity-governance-and-administration",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "IAM Assessment",
                "href": "/iam-assessment",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Active Directory Assessment ",
                "href": "/active-directory-assessment",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Security Hardware Token",
                "href": "/security-hardware-token",
                "pill": "Free trial",
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "Data Security",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "Data Encryption",
            "body": "Protect sensitive business information with encryption.",
            "image": "/assets/images/menu-security-data-encryption-v1.png",
            "link": "/data-encryption"
          },
          {
            "label": "Security",
            "title": "Data Security Posture Mgmt",
            "body": "Understand and manage security risks across business data.",
            "image": "/assets/images/menu-security-data-security-posture-v1.png",
            "link": "/data-security-posture-mgmt"
          }
        ],
        "groups": [
          {
            "heading": "Data Security",
            "items": [
              
              {
                "title": "Data Encryption",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Data Security Posture Mgmt",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Database Activity Monitoring (DAM)",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "AI Data Detection & Response",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "File Integrity Monitoring",
                "pill": "Free trial",
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "OT+IOT Security",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "Acronis OT",
            "body": "Explore protection for operational technology environments.",
            "image": "/assets/images/menu-security-acronis-ot-v1.png",
            "link": "/acronis-ot"
          },
          {
            "label": "Security",
            "title": "Kaspersky OT",
            "body": "Explore industrial cybersecurity for operational technology.",
            "image": "/assets/images/menu-security-kaspersky-ot-v1.png",
            "link": "/kaspersky-ot"
          }
        ],
        "groups": [
          {
            "heading": "OT+IOT Security",
            "items": [
              {
                "title": "Acronis OT",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Kaspersky OT",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "IOT Security",
                "pill": "Free trial",
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Security Testing",
        "on": true,
        "featureCards": [
          {
            "label": "Security",
            "title": "VAPT Services",
            "body": "Identify vulnerabilities with security testing services.",
            "image": "/assets/images/menu-security-vapt-services-v1.png",
            "link": "/vapt-services"
          },
          {
            "label": "Security",
            "title": "Continuous Pen As a Services",
            "body": "Explore ongoing penetration testing for your systems.",
            "image": "/assets/images/menu-security-continuous-pen-testing-v1.png",
            "link": "/continuous-pen-as-a-services"
          }
        ],
        "groups": [
          {
            "heading": "Security Testing",
            "items": [
              {
                "title": "VAPT Services",
                "href": "/vapt-services",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Continuous Pen As a Services",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "Continuous Threat Exposure (CTEM)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Source Code Review",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Network Penetration Testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "External Network Penetration Testing",
                "href": "/external-network-penetration-testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Web App Penetration Testing",
                "href": "/web-app-penetration-testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Mobile App Penetration Testing",
                "href": "/mobile-app-penetration-testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Mobile Application Security Testing",
                "href": "/mobile-application-security-testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "API Penetration Testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "IoT Penetration Testing",
                "href": "/iot-penetration-testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Application Security Testing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Application Security Testing Platform",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "7",
        "label": "Security Assessment",
        "on": false,
        "featureCards": [
          {
            "label": "Security",
            "title": "Cloud Security Assessment",
            "body": "Review security controls and risks in your cloud environment.",
            "image": "/assets/images/menu-security-cloud-security-assessment-v1.png",
            "link": "/cloud-security-assessment"
          },
          {
            "label": "Security",
            "title": "Digital Risk Monitoring",
            "body": "Monitor digital exposure and external business risks.",
            "image": "/assets/images/menu-security-digital-risk-monitoring-v1.png",
            "link": "/digital-risk-monitoring"
          }
        ],
        "groups": [
          {
            "heading": "Security Assessment",
            "items": [
              {
                "title": "Cloud Security Assessment",
                "pill": null,
                "desc": null
              },
              {
                "title": "Digital Risk Monitoring",
                "pill": null,
                "desc": null
              },
              {
                "title": "Threat Intelligence",
                "pill": null,
                "desc": null
              },
              {
                "title": "Red Team Assessment",
                "pill": null,
                "desc": null
              },
              {
                "title": "Blue Team Assessment",
                "pill": null,
                "desc": null
              },
                {
                "title": "Purple Team Assessment",
                "pill": null,
                "desc": null
              },
              {
                "title": "OT Assessment",
                "pill": null,
                "desc": null
              },
              {
                "title": "Breach & Attack Simulation",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Bug Bounty",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Third Party Risk Management",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cyber Security Audit",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "Security Operations",
        "on": false,
        "featureCards": [
          {
            "label": "Security",
            "title": "Autonomous Threat Management",
            "body": "Explore AI-driven threat detection and automated response.",
            "image": "/assets/images/menu-security-autonomous-threat-management-v1.png",
            "link": "/autonomous-threat-management"
          },
          {
            "label": "Security",
            "title": "Cloud Security Log Monitoring",
            "body": "Monitor cloud security logs and investigate suspicious activity.",
            "image": "/assets/images/menu-security-cloud-security-log-monitoring-v1.png",
            "link": "/cloud-security-log-monitoring"
          }
        ],
        "groups": [
          {
            "heading": "Security Operations",
            "items": [
              {
                "title": "Autonomous Threat Management",
                "pill": null,
                "desc": "AI-driven threat detection, investigation and automated response",
                "href": "/autonomous-threat-management"
              },
              {
                "title": "Cloud Security Log Monitoring",
                "pill": null,
                "desc": null
              },
              {
                "title": "SIEM-as-a-Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "SOC as a Services",
                "pill": null,
                "desc": null,
                "href": "/vortex-soc"
              },
              {
                "title": "WAAP as-a-Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Detection & Response (MDR)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Extended Detection Response (XDR)",
                "pill": null,
                "desc": null
              },
              {
                "title": "DevSecOps as a Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cyber Range as a Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "Patch Mgmt-as-a-Service",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Managed Threat Hunting",
                "pill": null,
                "desc": null,
                "href": "/vortex-soc"
              },
              {
                "title": "Managed Threat Intelligence",
                "pill": null,
                "desc": null,
                "href": "/vortex-soc"
              },
              
              
            ]
          }
        ]
      },
      {
        "g": "9",
        "label": "Security Consulting",
        "on": false,
        "featureCards": [
          {
            "label": "Security",
            "title": "DPDPA Consulting",
            "body": "Explore consulting for data privacy and protection.",
            "image": "/assets/images/menu-security-dpdpa-consulting-v1.png",
            "link": "/dpdpa-consulting"
          },
          {
            "label": "Security",
            "title": "vDPO-as-a-Service",
            "body": "Get support for data protection responsibilities.",
            "image": "/assets/images/menu-security-vdpo-service-v1.png",
            "link": "/vdpo-as-a-service"
          }
        ],
        "groups": [
          {
            "heading": "Security Consulting",
            "items": [
              {
                "title": "DPDPA Consulting",
                "pill": "In focus",
                "desc": null
              },
              {
                "title": "vDPO-as-a-Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "vCISO-As-A-Service",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed GRC",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "ISO 27001 (InfoSec)",
                "pill": null,
                "desc": null
              },
                     {
                "title": "ISO 20000 (ITSM)",
                "pill": null,
                "desc": null
              },
                     {
                "title": "ISO 27017 (Cloud infosec)",
                "pill": null,
                "desc": null
              },
              {
                "title": "ISO 22301 (BMC)",
                "pill": null,
                "desc": null
              },
                     {
                "title": "ISO 27018 (PII Public Cloud)",
                "pill": null,
                "desc": null
              },
              {
                "title": "ISO 42001(AI Risk)",
                "pill": null,
                "desc": null
              },
              {
                "title": "SOC 1 Cunsulting",
                "pill": null,
                "desc": null
              },
              {
                "title": "SOC 2 Cunsulting",
                "pill": null,
                "desc": null
              },
              {
                "title": "PCI Consulting",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "10",
        "label": "Security Training",
        "on": false,
        "featureCards": [
          {
            "label": "Security",
            "title": "Security Awareness Training",
            "body": "Build practical cybersecurity awareness across your team.",
            "image": "/assets/images/menu-security-security-awareness-training-v1.png",
            "link": "/security-awareness-training"
          },
          {
            "label": "Security",
            "title": "Incident Response Training",
            "body": "Help your team prepare for security incidents.",
            "image": "/assets/images/menu-security-incident-response-training-v1.png",
            "link": "/incident-response-training"
          }
        ],
        "groups": [
          {
            "heading": "Security Training",
            "items": [
              {
                "title": "Security Awareness Training",
                "pill": "In focus",
                "desc": null
              },
              {
                "title": "Incident Response Training",
                "pill": "In focus",
                "desc": null
              },
              {
                "title": "Data Privacy Training",
                "pill": "In focus",
                "desc": null
              },
              {
                "title": "Tabletop Exercises",
                "pill": "In focus",
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "11",
        "label": "Security Software",
        "on": false,
        "featureCards": [
          {
            "label": "Security",
            "title": "Certificate Disk Erasure",
            "body": "Explore secure disk erasure for business data.",
            "image": "/assets/images/menu-security-disk-erasure-v1.png",
            "link": "/certificate-disk-erasure"
          },
          {
            "label": "Security",
            "title": "Forensic Software",
            "body": "Explore tools for digital evidence and forensic investigation.",
            "image": "/assets/images/menu-security-forensic-software-v1.png",
            "link": "/forensic-software"
          }
        ],
        "groups": [
          {
            "heading": "Security Software",
            "items": [
              {
                "title": "Certificate Disk Erasure",
                "pill": "In focus",
                "desc": null
              },
              {
                "title": "Forensic Software",
                "pill": "In focus",
                "desc": null
              },
              
            ]
          }
        ]
      },
      
    ]
  },
  {
    "label": "AI",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "0",
        "label": "AI Tools",
        "on": true,
        "featureCards": [
          {
            "label": "AI",
            "title": "AI Chat Bot",
            "body": "Answer customer questions with an AI chat assistant",
            "image": "/assets/images/menu-ai-ai-chat-bot-v1.png",
            "link": "/ai-chat-bot"
          },
          {
            "label": "AI",
            "title": "AI Receptionist",
            "body": "Handle incoming calls and appointment bookings with AI",
            "image": "/assets/images/menu-ai-ai-receptionist-v1.png",
            "link": "/ai-receptionist"
          }
        ],
        "groups": [
          {
            "heading": "AI Tools",
            "items": [
              {
                "title": "AI Chat Bot",
                "pill": null,
                "desc": "Answer customer questions with an AI chat assistant"
              },
              {
                "title": "AI Receptionist",
                "pill": null,
                "desc": "Handle incoming calls and appointment bookings with AI"
              },
              {
                "title": "AI Voice Bot",
                "pill": "1-yr free ext.",
                "desc": "Automate customer conversations with a voice assistant"
              },
              {
                "title": "AI Sales Bot",
                "pill": null,
                "desc": "Engage prospects and qualify leads with AI"
              },
              {
                "title": "AI Lab As Service",
                "pill": null,
                "desc": "Experiment with AI models in a managed lab environment"
              },
         
              {
                "title": "AI Agent Studio",
                "pill": null,
                "desc": "Build and manage AI agents for business workflows"
              },
              
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "AI Build",
        "on": false,
        "featureCards": [
          {
            "label": "AI",
            "title": "AI App Builder",
            "body": "Create AI-powered applications for your business",
            "image": "/assets/images/menu-ai-ai-app-builder-v1.png",
            "link": "/ai-app-builder"
          },
          {
            "label": "AI",
            "title": "AI IDE Lab",
            "body": "Develop and test AI projects in a dedicated workspace",
            "image": "/assets/images/menu-ai-ai-ide-lab-v1.png",
            "link": "/ai-ide-lab"
          }
        ],
        "groups": [
          {
            "heading": "AI Build",
            "items": [
              {
                "title": "AI App Builder",
                "pill": null,
                "desc": "Create AI-powered applications for your business"
              },
              {
                "title": "AI IDE Lab",
                "pill": null,
                "desc": "Develop and test AI projects in a dedicated workspace"
              },
              {
                "title": "AI Factory",
                "pill": null,
                "desc": "Develop and test AI projects in a dedicated workspace"
              },
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "AI Training",
        "on": false,
        "featureCards": [
          {
            "label": "AI",
            "title": "Synapsem-AI Training Integrated Program",
            "body": "Build practical AI skills through a structured training program",
            "image": "/assets/images/menu-ai-ai-training-integrated-v1.png",
            "link": "/synapsem-ai-training-integrated-program"
          },
          {
            "label": "AI",
            "title": "Synapsem-AI Training Live Online",
            "body": "Learn AI through live, instructor-led online sessions",
            "image": "/assets/images/menu-ai-ai-training-online-v1.png",
            "link": "/synapsem-ai-training-live-online"
          }
        ],
        "groups": [
          {
            "heading": "AI Training",
            "items": [
              
              {
                "title": "Integrated AI Training Program",
                "pill": null,
                "desc": "Hands-on AI foundations, tools and workflows",
                "href": "/ai-training-integrated-program"
              },
              {
                "title": "Live Online AI Training",
                "pill": null,
                "desc": "Instructor-led online sessions and practical labs",
                "href": "/ai-training-live-online"
              },
              {
                "title": "AI Training for Educators",
                "pill": null,
                "desc": "AI for teaching, lesson planning and assessment",
                "href": "/ai-training-educators"
              },
              {
                "title": "AI Training for Insurance Professionals",
                "pill": null,
                "desc": "Practical AI skills for insurance workflows",
                "href": "/ai-training-insurance-professionals"
              },
              {
                "title": "AI Training for Medical Doctors",
                "pill": null,
                "desc": "AI for documentation, evidence and communication",
                "href": "/ai-training-medical-doctors"
              },
              {
                "title": "AI Training for Chartered Accountants",
                "pill": null,
                "href": "/ai-training-for-chartered-accountants",
                "desc": "Apply AI to GST, audit, tax and Excel with professional review"
              },
              {
                "title": "AI Training for Lawyer",
                "pill": null,
                "desc": "Apply AI to GST, audit, tax and Excel with professional review"
              },
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "AI Consulting",
        "on": false,
        "featureCards": [
          {
            "label": "AI",
            "title": "AI App Builder",
            "body": "Create AI-powered applications for your business",
            "image": "/assets/images/menu-ai-ai-app-builder-v1.png",
            "link": "/ai-app-builder"
          },
          {
            "label": "AI",
            "title": "AI Website Builder",
            "body": "Create business websites with AI-assisted design tools",
            "image": "/assets/images/menu-ai-ai-website-builder-v1.png",
            "link": "/ai-website-builder"
          }
        ],
        "groups": [
          {
            "heading": "AI Consulting",
            "items": [
              {
                "title": "AI App Builder",
                "pill": null,
                "desc": "Create AI-powered applications for your business"
              },
              {
                "title": "AI Website Builder",
                "pill": null,
                "desc": "Create business websites with AI-assisted design tools"
              },
              {
                "title": "AI IDE Lab",
                "pill": null,
                "desc": "Develop and test AI projects in a dedicated workspace"
              },
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "AI Security",
        "on": false,
        "featureCards": [
          {
            "label": "AI",
            "title": "AI Red Teaming Services",
            "body": "Test AI systems for prompt attacks and unsafe responses",
            "image": "/assets/images/menu-ai-ai-red-teaming-v1.png",
            "link": "/ai-red-teaming-services"
          },
          {
            "label": "AI",
            "title": "AI Security Assessment",
            "body": "Identify vulnerabilities and risks in your AI systems",
            "image": "/assets/images/menu-ai-ai-security-assessment-v1.png",
            "link": "/ai-security-assessment"
          }
        ],
        "groups": [
          {
            "heading": "AI Security",
            "items": [
              {
                "title": "AI Red Teaming Services",
                "pill": null,
                "desc": "Test AI systems for prompt attacks and unsafe responses"
              },
              {
                "title": "AI Security Assessment",
                "pill": null,
                "desc": "Identify vulnerabilities and risks in your AI systems"
              },
              {
                "title": "AI Security Audit",
                "pill": null,
                "desc": "Review AI security controls and data protection practices"
              },
              {
                "title": "AI Security Platform",
                "pill": null,
                "desc": "Monitor AI activity and manage threats across AI systems"
              },
              {
                "title": "AI Identity Security",
                "pill": null,
                "desc": "Manage access and permissions for AI agents and services"
              },
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "AI Governance",
        "on": false,
        "featureCards": [
          {
            "label": "AI",
            "title": "AI App Builder",
            "body": "Create AI-powered applications for your business",
            "image": "/assets/images/menu-ai-ai-app-builder-v1.png",
            "link": "/ai-app-builder"
          },
          {
            "label": "AI",
            "title": "AI Website Builder",
            "body": "Create business websites with AI-assisted design tools",
            "image": "/assets/images/menu-ai-ai-website-builder-v1.png",
            "link": "/ai-website-builder"
          }
        ],
        "groups": [
          {
            "heading": "AI Governance",
            "items": [
              {
                "title": "AI Adoption Framework",
                "href": "/ai-adoption-framework",
                "pill": null,
                "desc": "Plan AI adoption across strategy, readiness, governance, pilots and scale."
              },
              {
                "title": "AI Factory",
                "href": "/ai-factory",
                "pill": null,
                "desc": "Sovereign GPU infrastructure, training and inference in India"
              },
              {
                "title": "AI App Builder",
                "pill": null,
                "desc": "Create AI-powered applications for your business"
              },
              {
                "title": "AI Website Builder",
                "pill": null,
                "desc": "Create business websites with AI-assisted design tools"
              },
              {
                "title": "AI IDE Lab",
                "pill": null,
                "desc": "Develop and test AI projects in a dedicated workspace"
              },
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "AI Managed Services",
        "on": false,
        "featureCards": [
          {
            "label": "AI",
            "title": "Anthropic Managed Services",
            "body": "Get help deploying and managing Anthropic Claude solutions",
            "image": "/assets/images/menu-ai-anthropic-managed-v1.png",
            "link": "/anthropic-managed-services"
          },
          {
            "label": "AI",
            "title": "OpenAI Managed Services",
            "body": "Get help deploying and managing OpenAI solutions",
            "image": "/assets/images/menu-ai-openai-managed-v1.png",
            "link": "/openai-managed-services"
          }
        ],
        "groups": [
          {
            "heading": "AI Managed Services",
            "items": [
              {
                "title": "Anthropic Managed Services",
                "pill": null,
                "desc": "Get help deploying and managing Anthropic Claude solutions"
              },
              {
                "title": "OpenAI Managed Services",
                "href": "/openai-managed-services",
                "pill": null,
                "desc": "Get help deploying and managing OpenAI solutions"
              },
              {
                "title": "Gemini Managed Services",
                "href": "/gemini-managed-services",
                "pill": null,
                "desc": "Get help deploying and managing OpenAI solutions"
              },
                   {
                "title": "AIOps-as-a-Service",
                "pill": null,
                "desc": "Detect issues and automate routine IT operations with AI"
              },
              
            ]
          }
        ]
      },
      
      
    ]
  },
  {
    "label": "Marketplace",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "0",
        "label": "Remote Access Tools",
        "on": true,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "TSplus Remote Access",
            "body": "Access business desktops and applications remotely.",
            "image": "/assets/images/menu-marketplace-tsplus-remote-access-v1.png",
            "link": "/tsplus-remote-access"
          },
          {
            "label": "Marketplace",
            "title": "TSplus Advanced Security",
            "body": "Explore protection for remote servers and access.",
            "image": "/assets/images/menu-marketplace-tsplus-advanced-security-v1.png",
            "link": "/tsplus-advanced-security"
          }
        ],
        "groups": [
          {
            "heading": "Remote Access Tools",
            "items": [
              {
                "title": "TSplus Remote Access",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "TSplus Advanced Security",
                "pill": null,
                "desc": null
              },
              {
                "title": "TSplus Remote Support",
                "pill": null,
                "desc": null
              },
              {
                "title": "TSplus Server Monitoring",
                "pill": null,
                "desc": null
              },
              {
                "title": "TeamViewer",
                "pill": null,
                "desc": null
              },
              {
                "title": "AnyDesk",
                "pill": null,
                "desc": "Secure remote access, unattended connections and support",
                "href": "/anydesk"
              },
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "Microsoft Software",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Microsoft Software",
            "body": "Contact our team to explore Microsoft software options.",
            "image": "/assets/images/menu-marketplace-microsoft-software-v1.png",
            "link": "/contact"
          }
        ],
        "groups": [
          {
            "heading": "Microsoft Software",
            "items": [
              {
                "title": "No Data",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Microsoft Security",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Microsoft Identity & Access",
            "body": "Explore identity and access security for your organization.",
            "image": "/assets/images/menu-marketplace-microsoft-identity-access-v1.png",
            "link": "/microsoft-identity-and-access"
          },
          {
            "label": "Marketplace",
            "title": "Microsoft SIEM & XDR",
            "body": "Explore coordinated threat monitoring and response.",
            "image": "/assets/images/menu-marketplace-microsoft-siem-xdr-v1.png",
            "link": "/microsoft-siem-and-xdr"
          }
        ],
        "groups": [
          {
            "heading": "Microsoft Security",
            "items": [
              
              {
                "title": "Microsoft Identity & Access",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft SIEM & XDR",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Cloud Security",
                "pill": null,
                "desc": null
              },
              {
                "title": "Endpoint Security & Management",
                "pill": null,
                "desc": null
              },
              {
                "title": "Risk Management & Privacy",
                "pill": null,
                "desc": null
              },
              {
                "title": "Microsoft Information Protection",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Microsoft Sentinel",
                "href": "/managed-microsoft-sentinel",
                "pill": null,
                "desc": null
              },
              {
                "title": "Managed Microsoft XDR",
                "pill": "In focus",
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "CloudFlare Security",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "All CloudFlare Products",
            "body": "Explore Cloudflare products for application and network security.",
            "image": "/assets/images/menu-marketplace-cloudflare-security-v1.png",
            "link": "/all-cloudflare-products"
          }
        ],
        "groups": [
          {
            "heading": "CloudFlare Security",
            "items": [
              {
                "title": "All CloudFlare Products",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "Fortinet Security",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "All Fortinet Products",
            "body": "Explore Fortinet security products and solutions.",
            "image": "/assets/images/menu-marketplace-fortinet-products-v1.png",
            "link": "/all-fortinet-products"
          },
          {
            "label": "Marketplace",
            "title": "FortiGate",
            "body": "Protect your network with Fortinet next-generation firewalls",
            "image": "/assets/images/menu-marketplace-fortigate-v1.png",
            "link": "/fortinet-fortigate"
          }
        ],
        "groups": [
          {
            "heading": "Fortinet Security",
            "items": [
              {
                "title": "All Fortinet Products",
                "pill": null,
                "desc": null
              },
              {
                "title": "FortiGate",
                "pill": null,
                "desc": "Protect your network with Fortinet next-generation firewalls",
                "href": "/fortinet-fortigate"
              },
            ]
          }
        ]
      },
      {
        "g": "5",
        "label": "PaloAlto Security",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "All PaloAlto Products",
            "body": "Explore Palo Alto products for enterprise security.",
            "image": "/assets/images/menu-marketplace-paloalto-security-v1.png",
            "link": "/all-paloalto-products"
          }
        ],
        "groups": [
          {
            "heading": "PaloAlto Security",
            "items": [
              {
                "title": "All PaloAlto Products",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Qualys Security",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Qualys Security",
            "body": "Contact our team to explore Qualys security options.",
            "image": "/assets/images/menu-marketplace-qualys-security-v1.png",
            "link": "/contact"
          }
        ],
        "groups": [
          {
            "heading": "Qualys Security",
            "items": [
              {
                "title": "No",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "7",
        "label": "Data as a Services",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Databricks Platform",
            "body": "Explore Databricks for data and analytics workloads.",
            "image": "/assets/images/menu-marketplace-databricks-platform-v1.png",
            "link": "/databricks-platform"
          },
          {
            "label": "Marketplace",
            "title": "Snowflake Platform",
            "body": "Explore Snowflake for cloud data workloads.",
            "image": "/assets/images/menu-marketplace-snowflake-platform-v1.png",
            "link": "/snowflake-platform"
          }
        ],
        "groups": [
          {
            "heading": "Data as a Services",
            "items": [
              {
                "title": "Databricks Platform",
                "pill": null,
                "desc": null
              },
              {
                "title": "Snowflake Platform",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Visualization",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Modernization",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Data Analytics",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Engineering",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Visualization",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Warehouse",
                "pill": null,
                "desc": null
              },
              {
                "title": "Data Governance",
                "pill": null,
                "desc": null
              },
              
              {
                "title": "Data Modernization",
                "pill": null,
                "desc": null
              },
              
              
              {
                "title": "Data Fabric",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "9",
        "label": "On Premises Cloud",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Data Center Build Services",
            "body": "Explore infrastructure planning and data center build services.",
            "image": "/assets/images/menu-marketplace-data-center-build-v1.png",
            "link": "/data-center-build-services"
          },
          {
            "label": "Marketplace",
            "title": "Acronis Cyber Frame (HCI)",
            "body": "Explore Acronis Cyber Frame hyperconverged infrastructure.",
            "image": "/assets/images/menu-marketplace-acronis-cyber-frame-v1.png",
            "link": "/acronis-cyber-frame-hci"
          }
        ],
        "groups": [
          {
            "heading": "On Premises Cloud",
            "items": [
              {
                "title": "Data Center Build Services",
                "pill": null,
                "desc": null
              },
              {
                "title": "Acronis Cyber Frame (HCI)",
                "pill": null,
                "desc": null
              },
              {
                "title": "Vmware Migration",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "10",
        "label": "Managed Migration",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Cloud Migration",
            "body": "Plan, migrate and validate your cloud workloads",
            "image": "/assets/images/menu-marketplace-cloud-migration-v1.png",
            "link": "/cloud-migration"
          },
          {
            "label": "Marketplace",
            "title": "AWS Migration",
            "body": "Explore migration services for AWS environments.",
            "image": "/assets/images/menu-marketplace-aws-migration-v1.png",
            "link": "/aws-migration"
          }
        ],
        "groups": [
          {
            "heading": "Managed Migration",
            "items": [
              {
                "title": "Cloud Migration",
                "pill": null,
                "desc": "Plan, migrate and validate your cloud workloads",
                "href": "/cloud-migration"
              },
              {
                "title": "AWS Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Azure Migration ",
                "pill": null,
                "desc": null
              },
              {
                "title": "GCP Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Database Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Active Directory Migration ",
                "pill": null,
                "desc": null
              },
              {
                "title": "MailBox Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "File Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Site Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Archive Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Teams Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Slack Migration",
                "pill": null,
                "desc": null
              },
              {
                "title": "Dropbox Migration",
                "pill": null,
                "desc": "Migrate Dropbox files, folders and permissions to Microsoft 365 or Google Workspace",
                "href": "/dropbox-migration"
              },
              {
                "title": "Box Migration",
                "pill": null,
                "desc": "Migrate Box files, folders and permissions to Microsoft 365 or Google Workspace",
                "href": "/box-migration"
              },
              
            ]
          }
        ]
      },
      {
        "g": "13",
        "label": "Cloud Connectivity",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Cloud Connectivity",
            "body": "Connect business environments through cloud networks.",
            "image": "/assets/images/menu-marketplace-cloud-connectivity-v1.png",
            "link": "/cloud-connectivity"
          },
          {
            "label": "Marketplace",
            "title": "Cloud Router",
            "body": "Explore routing for connected cloud environments.",
            "image": "/assets/images/menu-marketplace-cloud-router-v1.png",
            "link": "/cloud-router"
          }
        ],
        "groups": [
          {
            "heading": "Cloud Connectivity",
            "items": [
              {
                "title": "Cloud Connectivity",
                "pill": null,
                "href": "/cloud-connectivity",
                "desc": null
              },
              {
                "title": "Cloud Router",
                "pill": null,
                "href": "/cloud-router",
                "desc": null
              },
              {
                "title": "Private Connect",
                "pill": null,
                "href": "/private-connect",
                "desc": null
              },
              {
                "title": "IP Transit",
                "pill": null,
                "href": "/ip-transit",
                "desc": null
              },
              {
                "title": "Virtual Edge",
                "pill": null,
                "href": "/virtual-edge",
                "desc": null
              },
              {
                "title": "Managed Wi-Fi",
                "pill": null,
                "href": "/managed-wifi",
                "desc": null
              },
              {
                "title": "Managed SD WAN",
                "pill": null,
                "href": "/managed-sd-wan",
                "desc": null
              },
              {
                "title": "Edge Network",
                "pill": null,
                "href": "/edge-network",
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "14",
        "label": "SAP On Cloud",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "SAP Hosting",
            "body": "Explore managed hosting for SAP workloads.",
            "image": "/assets/images/menu-marketplace-sap-hosting-v1.png",
            "link": "/sap-hosting"
          },
          {
            "label": "Marketplace",
            "title": "SAP B1 Cloud",
            "body": "Explore cloud hosting for SAP Business One.",
            "image": "/assets/images/menu-marketplace-sap-b1-cloud-v1.png",
            "link": "/sap-b1-cloud"
          }
        ],
        "groups": [
          {
            "heading": "SAP On Cloud",
            "items": [
              {
                "title": "SAP Hosting",
                "pill": null,
                "desc": null
              },
              {
                "title": "SAP B1 Cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "SAP S4 HANA Private Cloud ",
                "pill": null,
                "desc": null
              },
              {
                "title": "SAP On AWS ",
                "href": "/sap-on-aws",
                "pill": null,
                "desc": null
              },
              {
                "title": "SAP On GCP ",
                "href": "/sap-on-gcp",
                "pill": null,
                "desc": null
              },
              {
                "title": "SAP On Azure ",
                "href": "/sap-on-azure",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
       {
        "g": "15",
        "label": "Sage On Cloud",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Sage 300 Hosting",
            "body": "Run Sage 300 on managed cloud hosting with remote access, backups and support.",
            "image": "/assets/images/menu-marketplace-sage-300-hosting-v1.png",
            "link": "/sage-300-hosting"
          },
          {
            "label": "Marketplace",
            "title": "Sage X3 Hosting",
            "body": "Host your Sage X3 environment with managed infrastructure, backups and support.",
            "image": "/assets/images/menu-marketplace-sage-x3-hosting-v1.png",
            "link": "/sage-x3-hosting"
          }
        ],
        "groups": [
          {
            "heading": "Sage On Cloud",
            "items": [
              {
                "title": "Sage 300 Hosting",
                "href": "/sage-300-hosting",
                "pill": null,
                "desc": "Run Sage 300 on managed cloud hosting with remote access, backups and support."
              },
              {
                "title": "Sage X3 Hosting",
                "href": "/sage-x3-hosting",
                "pill": null,
                "desc": "Host your Sage X3 environment with managed infrastructure, backups and support."
              },
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "View Marketplace -->",
        "on": false,
        "featureCards": [
          {
            "label": "Marketplace",
            "title": "Software Marketplace",
            "body": "Contact our team to explore available software and services.",
            "image": "/assets/images/menu-marketplace-marketplace-v1.png",
            "link": "/contact"
          }
        ],
        "groups": [
          {
        
            "heading": "Software Marketplace",
            "items": [
              {
                "title": "Asset Tokenization Platform",
                "href": "/asset-tokenization-platform",
                "pill": null,
                "desc": "Tokenize and trace real-world assets with a managed Hyperledger Fabric network."
              },
              {
                "title": "Fractional Chief AI Officer",
                "href": "/fractional-chief-ai-officer",
                "pill": null,
                "desc": "Give your AI programme a senior owner for strategy, governance and board reporting."
              },
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "",
        "on": false,
        "groups": [
          {
            "heading": "Security Marketplace",
            "items": [
              {
                "title": "No Data",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "",
        "on": false,
        "groups": [
          {
            "heading": "AI Apps Marketplace",
            "items": [
              {
                "title": "No Data",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
    ]
  },
  {
    "label": "Solutions",
    "noDrop": false,
    "feature": null,
    "tabs": [
      {
        "g": "0",
        "label": "By Industry",
        "on": true,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "CA Cloud",
            "body": "Explore cloud services for accounting and audit teams.",
            "image": "/assets/images/menu-solutions-ca-cloud-v1.png",
            "link": "/ca-cloud"
          },
          {
            "label": "Solutions",
            "title": "SMB Cloud",
            "body": "Explore cloud solutions for small and medium businesses.",
            "image": "/assets/images/menu-solutions-smb-cloud-v1.png",
            "link": "/smb-cloud"
          }
        ],
        "groups": [
          {
            "heading": "By Industry",
            "items": [
              {
                "title": "CA Cloud",
                "href": "/ca-cloud",
                "pill": "Free trial",
                "desc": null
              },
              {
                "title": "SMB Cloud",
                "href": "/smb-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "BFSI Cloud",
                "href": "/bfsi-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Insurance Cloud",
                "href": "/insurance-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Manufacturing Cloud",
                "href": "/manufacturing-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Smart Manufacturing",
                "href": "/smart-manufacturing",
                "pill": null,
                "desc": "Industry 5.0, IIoT, digital twins and predictive maintenance"
              },
              {
                "title": "Government Cloud",
                "href": "/government-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Higher Education Cloud",
                "href": "/higher-education-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Pharmaceutical Cloud",
                "href": "/pharmaceutical-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Construction Cloud",
                "href": "/construction-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Hospitality Cloud",
                "href": "/hospitality-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Logistics Cloud",
                "href": "/logistics-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "HealthCare Cloud",
                "href": "/healthcare-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "Retail Cloud",
                "href": "/retail-cloud",
                "pill": null,
                "desc": null
              },
              {
                "title": "GCC Cloud",
                "href": "/gcc-cloud",
                "pill": null,
                "desc": "Managed cloud infrastructure, security and support for GCC teams."
              },
              {
                "title": "Food and Beverage Cloud",
                "href": "/food-and-beverage",
                "pill": null,
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "By Use Case",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "Compromised Credentials",
            "body": "Explore protection against compromised business credentials.",
            "image": "/assets/images/menu-solutions-compromised-credentials-v1.png",
            "link": "/compromised-credentials"
          },
          {
            "label": "Solutions",
            "title": "Insider Threat",
            "body": "Explore detection and response for insider threats.",
            "image": "/assets/images/menu-solutions-insider-threat-v1.png",
            "link": "/insider-threat"
          }
        ],
        "groups": [
          {
            "heading": "By Use Case",
            "items": [
              {
                "title": "Compromised Credentials",
                "pill": null,
                "desc": null
              },
              {
                "title": "Insider Threat",
                "pill": null,
                "desc": null
              },
              {
                "title": "Lateral Movement",
                "pill": null,
                "desc": null
              },
              {
                "title": "Malware",
                "pill": null,
                "desc": null
              },
              {
                "title": "OT Security",
                "pill": null,
                "desc": null
              },
              {
                "title": "Phishing",
                "pill": null,
                "desc": null
              },
              {
                "title": "Ransomware",
                "pill": null,
                "desc": null
              },
              {
                "title": "Security Stack Consolidation",
                "pill": null,
                "desc": null
              }
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "By Capability",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "NG-SIEM",
            "body": "Explore next-generation security event monitoring.",
            "image": "/assets/images/menu-solutions-ng-siem-v1.png",
            "link": "/ng-siem"
          },
          {
            "label": "Solutions",
            "title": "NDR",
            "body": "Explore network detection and response capabilities.",
            "image": "/assets/images/menu-solutions-ndr-v1.png",
            "link": "/ndr"
          }
        ],
        "groups": [
          {
            "heading": "By Capability",
            "items": [
              {
                "title": "NG-SIEM",
                "pill": null,
                "desc": null
              },
              {
                "title": "NDR",
                "pill": null,
                "desc": null
              },
              {
                "title": "UEBA",
                "pill": null,
                "desc": null
              },
              {
                "title": "Case Management",
                "pill": null,
                "desc": null
              }
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "By Vendors",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "Acronis",
            "body": "Cyber protection, backup and endpoint management",
            "image": "/assets/images/menu-solutions-acronis-v1.png",
            "link": "/vendor-partners/acronis"
          },
          {
            "label": "Solutions",
            "title": "Microsoft",
            "body": "Productivity, collaboration and business applications",
            "image": "/assets/images/menu-solutions-microsoft-v1.png",
            "link": "/vendor-partners/microsoft-services"
          }
        ],
        "groups": [
          {
            "heading": "By Vendors",
            "items": [
              {
                "title": "Acronis",
                "pill": null,
                "desc": "Cyber protection, backup and endpoint management",
                "href": "/vendor-partners/acronis"
              },
              {
                "title": "Microsoft",
                "pill": null,
                "desc": "Productivity, collaboration and business applications",
                "href": "/vendor-partners/microsoft-services"
              },
              {
                "title": "TSplus",
                "pill": null,
                "desc": "Secure remote access and application delivery",
                "href": "/vendor-partners/tsplus"
              },
              {
                "title": "Microsoft Azure",
                "pill": null,
                "desc": "Cloud infrastructure, applications and identity services",
                "href": "/vendor-partners/microsoft-azure"
              },
              {
                "title": "Amazon Web Services",
                "pill": null,
                "desc": "Scalable public-cloud infrastructure and services",
                "href": "/vendor-partners/amazon-web-services"
              },
              {
                "title": "Google Cloud",
                "pill": null,
                "desc": "Cloud computing, data and AI services",
                "href": "/vendor-partners/google-cloud"
              },
              {
                "title": "Oracle Cloud",
                "pill": null,
                "desc": "Oracle Cloud Infrastructure, databases and multicloud services",
                "href": "/vendor-partners/oracle-cloud"
              },
              {
                "title": "IBM Multicloud",
                "pill": null,
                "desc": "Hybrid and multicloud infrastructure solutions",
                "href": "/vendor-partners/ibm-multicloud"
              },
              {
                "title": "Red Hat",
                "pill": null,
                "desc": "Enterprise open-source and hybrid-cloud platforms",
                "href": "/vendor-partners/red-hat"
              },
              
              {
                "title": "DigiCert",
                "pill": null,
                "desc": "Enterprise certificates, PKI and digital trust",
                "href": "/vendor-partners/digicert"
              },
              {
                "title": "GeoTrust",
                "pill": null,
                "desc": "Enterprise certificates, PKI and digital trust",
                "href": "/vendor-partners/geotrust"
              },
              {
                "title": "Sectigo",
                "pill": null,
                "desc": "SSL, certificate lifecycle and digital identity",
                "href": "/vendor-partners/sectigo"
              },
              
              {
                "title": "Kaspersky",
                "pill": null,
                "desc": "Endpoint and industrial cybersecurity solutions",
                "href": "/vendor-partners/kaspersky"
              },
              {
                "title": "Fortinet",
                "pill": null,
                "desc": "Network security, firewall and secure access solutions",
                "href": "/vendor-partners/fortinet"
              },
              {
                "title": "HPE",
                "pill": null,
                "desc": "Enterprise compute, storage and hybrid IT platforms",
                "href": "/vendor-partners/hpe"
              },
              {
                "title": "Dell",
                "pill": null,
                "desc": "Servers, storage, infrastructure and business IT solutions",
                "href": "/vendor-partners/dell"
              },
              {
                "title": "Cybird",
                "pill": null,
                "desc": "Cybersecurity solutions, protection services and digital resilience",
                "href": "/vendor-partners/cybird"
              },
              {
                "title": "DPO Genie365",
                "pill": null,
                "desc": "Privacy operations and data-protection compliance",
                "href": "/vendor-partners/dpo-genie"
              },
              {
                "title": "SentinelOne",
                "pill": null,
                "desc": "AI-powered endpoint security and response",
                "href": "/vendor-partners/sentinelone"
              },
              {
                "title": "OpenText",
                "pill": null,
                "desc": "OpenText vendor partnership",
                "href": "/vendor-partners/opentext"
              },
              
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "By Technology",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "Cloud Infrastructure",
            "body": "High-performance compute, storage and hosting",
            "image": "/assets/images/menu-solutions-cloud-infrastructure-v1.png",
            "link": "/performance-cloud"
          },
          {
            "label": "Solutions",
            "title": "Backup & Disaster Recovery",
            "body": "Protected workloads and rapid service recovery",
            "image": "/assets/images/menu-solutions-backup-disaster-recovery-v1.png",
            "link": "/cloud-disaster-recovery"
          }
        ],
        "groups": [
          {
            "heading": "By Technology",
            "items": [
              {
                "title": "Cloud Infrastructure",
                "pill": null,
                "desc": "High-performance compute, storage and hosting",
                "href": "/performance-cloud"
              },
              {
                "title": "Backup & Disaster Recovery",
                "pill": null,
                "desc": "Protected workloads and rapid service recovery",
                "href": "/cloud-disaster-recovery"
              },
              {
                "title": "AI & Automation",
                "pill": null,
                "desc": "AI-assisted operations, security and productivity",
                "href": "/acronis-genai"
              },
              {
                "title": "Email & Collaboration",
                "pill": null,
                "desc": "Cloud productivity, messaging and teamwork",
                "href": "/microsoft-365-smb"
              },
              {
                "title": "Identity & Access",
                "pill": null,
                "desc": "Secure identities, access policies and authentication",
                "href": "/microsoft-entra-id"
              },
              {
                "title": "Virtual Desktop & Remote Work",
                "pill": null,
                "desc": "Secure desktops and applications from anywhere",
                "href": "/azure-virtual-desktop"
              },
              {
                "title": "Networking & SASE",
                "pill": null,
                "desc": "Cloud-managed connectivity and secure access",
                "href": "/cloud-sase"
              },
              {
                "title": "Digital Trust & PKI",
                "pill": null,
                "desc": "Certificates, signing and trusted digital identity",
                "href": "/digicert"
              },
              {
                "title": "Blockchain as a Service",
                "pill": null,
                "desc": "Certificates, signing and trusted digital identity",
                "href": "/digicert"
              }
            ]
          }
        ]
      },
      {
        "g": "11",
        "label": "By Role",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "CIO",
            "body": "Explore technology solutions for information leaders.",
            "image": "/assets/images/menu-solutions-cio-v1.png",
            "link": "/cio"
          },
          {
            "label": "Solutions",
            "title": "CTO",
            "body": "Explore technology solutions for engineering leaders.",
            "image": "/assets/images/menu-solutions-cto-v1.png",
            "link": "/cto"
          }
        ],
        "groups": [
          {
            "heading": "By Role",
            "items": [
               {
                "title": "CIO",
                "pill": null,
                "desc": null
              },
              {
                "title": "CTO",
                "pill": "In focus",
                "desc": null
              },
              {
                "title": "CISO",
                "pill": null,
                "desc": null
              },
              {
                "title": "DPO",
                "pill": null,
                "desc": null
              },  
              
            ]
          }
        ]
      },
      {
        "g": "12",
        "label": "Cyber Insurance",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "Cyber Insurance",
            "body": "Contact our team to discuss cyber insurance.",
            "image": "/assets/images/menu-solutions-cyber-insurance-v1.png",
            "link": "/contact"
          }
        ],
        "groups": [
          {
            "heading": "Cyber Insurance",
            "items": [
              {
                "title": "No Data",
                "pill": "In focus",
                "desc": null
              },
              
            ]
          }
        ]
      },
      {
        "g": "13",
        "label": "Acronis Solutions",
        "on": false,
        "featureCards": [
          {
            "label": "Solutions",
            "title": "Acronis AI",
            "body": "AI-native protection, management and automation on one platform",
            "image": "/assets/images/menu-solutions-acronis-ai-v1.png",
            "link": "/acronis-ai"
          },
          {
            "label": "Solutions",
            "title": "Cyberfit Score Tool",
            "body": "AI-native protection, management and automation on one platform",
            "image": "/assets/images/menu-solutions-cyberfit-score-v1.png",
            "link": "/cyberfit-score-tool"
          }
        ],
        "groups": [
          {
            "heading": "Acronis Solutions",
            "items": [
              {
                "title": "Acronis AI",
                "href": "/acronis-ai",
                "pill": "In focus",
                "desc": "AI-native protection, management and automation on one platform"
              },
               {
                "title": "Cyberfit Score Tool",
                "href": "/cyberfit-score-tool",
                "pill": "In focus",
                "desc": "AI-native protection, management and automation on one platform"
              },
               {
                "title": "Anti Ransomware Warranty",
                "href": "/anti-ransomware-warranty",
                "pill": "In focus",
                "desc": "AI-native protection, management and automation on one platform"
              },
              {
                "title": "Acronis Cyber Intelligence",
                "href": "/acronis-cyber-intelligence",
                "pill": "In focus",
                "desc": "AI dashboards, analytics and client-ready reports in Acronis Cyber Console"
              },
              {
                "title": "Acronis Cyber Frame",
                "href": "/acronis-cyber-frame",
                "pill": "In focus",
                "desc": "Compute, storage and networking with built-in cyber protection"
              },
              {
                "title": "Acronis Workflow Automation",
                "href": "/acronis-workflow-automation",
                "pill": "In focus",
                "desc": "No-code workflows across backup, IT management and security"
              },
            ],
          }
        ]
      },
      

    ]
  },
  {
    "label": "Company",
    "noDrop": false,
    "feature": null,
    "tabs": [
      
      {
        "g": "0",
        "label": "About Us",
        "on": true,
        "featureCards": [
          {
            "label": "Company",
            "title": "Contact Us",
            "body": "We'd love to hear from you",
            "image": "/assets/images/menu-company-contact-us-v1.png",
            "link": "/contact"
          },
          {
            "label": "Company",
            "title": "Customer Testimonials",
            "body": "Secure, scalable cloud expertise since 1999",
            "image": "/assets/images/menu-company-customer-testimonials-v1.png",
            "link": "/customer-testimonials"
          }
        ],
        "groups": [
          {
            "heading": "About Us",
            "items": [
              {
                "title": "Contact Us",
                "pill": null,
                "desc": "We'd love to hear from you"
              },
              {
                "title": "Customer Testimonials",
                "href": "/customer-testimonials",
                "pill": null,
                "desc": "Secure, scalable cloud expertise since 1999"
              },
              {
                "title": "About Us",
                "pill": null,
                "desc": "Meet the people and story behind XcellHost"
              },
              {
                "title": "Global Data Centers",
                "href": "/company/data-centers-global",
                "pill": null,
                "desc": "Global locations for resilient workloads"
              },
              {
                "title": "Vendor Partners",
                "pill": null,
                "desc": "Technology partnerships across cloud and security"
              },
              {
                "title": "Our Platform",
                "pill": null,
                "desc": "We'd love to hear from you"
              },
              {
                "title": "Infrastructure",
                "pill": null,
                "desc": "We'd love to hear from you"
              },
              {
                "title": "Certifications",
                "pill": null,
                "desc": "Credentials that reflect trusted delivery"
              },
              {
                "title": "Awards",
                "pill": null,
                "desc": "Recognition for our cloud and security expertise"
              },
              {
                "title": "Associations",
                "pill": null,
                "desc": "Recognition for our cloud and security expertise"
              },
              {
                "title": "Corporate Social Responsibility",
                "pill": null,
                "desc": "We'd love to hear from you"
              },
              {
                "title": "Services Index",
                "pill": null,
                "desc": "We'd love to hear from you"
              },
              {
                "title": "Whats New",
                "pill": null,
                "desc": "Explore new cloud, security and AI services",
                "href": "/whats-new"
              },
              
              {
                "title": "Promotion & Offers",
                "pill": null,
                "desc": "We'd love to hear from you"
              },
              {
                "title": "Company Profile",
                "pill": null,
                "desc": null,
                "href": "https://flipbooks.officeinfra.com/books/Company-Profile/#p=1"
              },
            ]
          }
        ]
      },
      {
        "g": "3",
        "label": "Support Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Support Overview",
            "body": "Find the right route to technical help",
            "image": "/assets/images/menu-company-support-overview-v1.png",
            "link": "/support-overview"
          },
          {
            "label": "Company",
            "title": "Customer Support",
            "body": "Find the right route to technical help",
            "image": "/assets/images/menu-company-customer-support-v1.png",
            "link": "/support-overview"
          }
        ],
        "groups": [
          {
            "heading": "Support",
            "items": [
              {
                "title": "Support Overview",
                "pill": "24×7",
                "desc": "Find the right route to technical help"
              },
              {
                "title": "Customer Support",
                "pill": "24×7",
                "desc": "Find the right route to technical help"
              },
              {
                "title": "Submit a Ticket",
                "pill": null,
                "desc": "Create a trackable service request"
              },
              {
                "title": "Knowledgebase",
                "href": "https://supportdesk.xcellhost.cloud/portal/en/kb",
                "pill": null,
                "desc": "Guidance for common service tasks"
              },
              {
                "title": "Remote Assist",
                "pill": null,
                "desc": "Secure attended troubleshooting"
              },
              {
                "title": "Escalation Matrix",
                "pill": null,
                "desc": "Support contacts and escalation levels"
              },
              {
                "title": "Services Status",
                "pill": null,
                "desc": "Support contacts and escalation levels"
              },
              {
                "title": "Speed Test",
                "pill": null,
                "desc": "Support contacts and escalation levels"
              },
              {
                "title": "Looking Glass",
                "pill": null,
                "desc": "Support contacts and escalation levels"
              },
              
            ]
          }
        ]
      },
      {
        "g": "1",
        "label": "Partner Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Partner Overview",
            "body": "Start your XcellHost partner journey",
            "image": "/assets/images/menu-company-partner-overview-v1.png",
            "link": "/under-construction/partner-overview"
          },
          {
            "label": "Company",
            "title": "Partner Stories",
            "body": "Start your XcellHost partner journey",
            "image": "/assets/images/menu-company-partner-stories-v1.png",
            "link": "/under-construction/partner-stories"
          }
        ],
        "groups": [
          {
            "heading": "Partner",
            "items": [
              {
                "title": "Partner Overview",
                "pill": null,
                "desc": "Start your XcellHost partner journey"
              },
              {
                "title": "Partner Stories",
                "pill": null,
                "desc": "Start your XcellHost partner journey"
              },
              {
                "title": "Partner Contact Matrix",
                "href": "/partner-matrix",
                "pill": null,
                "desc": "Connect with channel sales, pre-sales, support and billing teams"
              },
              {
                "title": "Partner/Signup ",
                "pill": null,
                "desc": "Start your XcellHost partner journey"
              },
              {
                "title": "Partnership Models",
                "pill": null,
                "desc": "Choose a model that fits your business"
              },
              {
                "title": "Affiliate Program",
                "pill": null,
                "desc": "Introduce customers to XcellHost services"
              },
            ]
          }
        ]
      },
      {
        "g": "2",
        "label": "Careers Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Careers Overview",
            "body": "Discover our culture and ways of working",
            "image": "/assets/images/menu-company-careers-overview-v1.png",
            "link": "/company/careers-overview"
          },
          {
            "label": "Company",
            "title": "Career Handbook",
            "body": "Discover our culture and ways of working",
            "image": "/assets/images/menu-company-career-handbook-v1.png",
            "link": "/company/career-handbook"
          }
        ],
        "groups": [
          {
            "heading": "Careers",
            "items": [
              {
                "title": "Careers Overview",
                "pill": null,
                "desc": "Discover our culture and ways of working"
              },
              {
                "title": "Career Handbook",
                "pill": null,
                "desc": "Discover our culture and ways of working"
              },
              {
                "title": "Apply For Job",
                "pill": null,
                "desc": "Build your future with XcellHost"
              },
            ]
          }
        ]
      },
      
      {
        "g": "10",
        "label": "Trust Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Trust Center",
            "body": "Explore trust and assurance information.",
            "image": "/assets/images/menu-company-trust-center-v1.png",
            "link": "/company/trust-center"
          },
          {
            "label": "Company",
            "title": "Trust Watch",
            "body": "One intelligence layer",
            "image": "/assets/images/menu-company-trust-watch-v1.png",
            "link": "/company/trust-watch"
          }
        ],
        "groups": [
          
          {
            "heading": "Trust Center",
            "items": [
              {
                "title": "Trust Center",  
                "pill": null,
                "desc": null
              },
              {
                "title": "Trust Watch",
                "pill": null,
                "desc": "One intelligence layer"
              },
            
            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "Legal Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Privacy Policy",
            "body": "How we handle personal information",
            "image": "/assets/images/menu-company-privacy-policy-v1.png",
            "link": "/company/privacy-policy"
          },
          {
            "label": "Company",
            "title": "Terms of Services",
            "body": "The terms that govern XcellHost services",
            "image": "/assets/images/menu-company-terms-of-services-v1.png",
            "link": "/company/terms-of-service"
          }
        ],
        "groups": [
          {
            "heading": "Legal Center",
            "items": [
              {
                "title": "Privacy Policy",
                "pill": null,
                "desc": "How we handle personal information"
              },
              {
                "title": "Terms of Services",
                "pill": null,
                "desc": "The terms that govern XcellHost services"
              },
              {
                "title": "Refund Policy",
                "pill": null,
                "desc": "Eligibility and the refund review process"
              },
              {
                "title": "Cookie Policy",
                "pill": null,
                "desc": "How cookies are used on the XcellHost website"
              },
              {
                "title": "Fair Usage Policy",
                "pill": null,
                "desc": "How cookies are used on the XcellHost website"
              },
              {
                "title": "Data Processing Agreement",
                "pill": null,
                "desc": "How customer personal data is processed and protected"
              },
              {
                "title": "AI Use Policy",
                "pill": null,
                "desc": "How XcellHost uses AI with human oversight and client data protections"
              },
              {
                "title": "No TDS on Software Purchases",
                "href": "/tds-software-declaration",
                "pill": null,
                "desc": "Understand your software invoice declaration and request a letter from billing"
              },

            ]
          }
        ]
      },
      {
        "g": "4",
        "label": "",
        "on": false,
        "groups": [
          {
            "heading": "Service Level Agreements",
            "items": [
              {
                "title": "Acronis Backup Cloud SLA",
                "pill": null,
                "desc": "Cloud backup service commitments"
              },
              {
                "title": "Acronis Advanced EDR SLA",
                "pill": null,
                "desc": "Endpoint detection and response service commitments"
              },
              {
                "title": "Acronis Advanced MDR SLA",
                "pill": null,
                "desc": "Managed detection and response service commitments"
              },
              {
                "title": "Acronis Advanced XDR SLA",
                "pill": null,
                "desc": "Extended detection and response service commitments"
              },
              
              {
                "title": "Acronis Disaster Recovery (DR) SLA",
                "pill": null,
                "desc": "Disaster recovery service commitments",
                "href": "/acronis-disaster-recovery-dr-sla"
              },
              {
                "title": "Acronis Remote Monitoring and Management SLA",
                "pill": null,
                "desc": "Remote monitoring and management commitments",
                "href": "/acronis-remote-monitoring-management-rmm-sla"
              },
              {
                "title": "Email Backup for Microsoft 365 SLA",
                "pill": null,
                "desc": "Microsoft 365 email backup commitments",
                "href": "/email-backup-for-microsoft-365-sla"
              },
              {
                "title": "File Cloud SLA",
                "pill": null,
                "desc": "Cloud file service commitments",
                "href": "/file-cloud-sla"
              },
              {
                "title": "Performance Cloud SLA",
                "pill": null,
                "desc": "Performance cloud service commitments",
                "href": "/performance-cloud-sla"
              },
              {
                "title": "Tally on Cloud SLA",
                "pill": null,
                "desc": "Tally cloud service commitments",
                "href": "/tally-on-cloud-sla"
              },
              {
                "title": "Video Surveillance as a Service (VSaaS) SLA",
                "pill": null,
                "desc": "Cloud video surveillance service commitments",
                "href": "/video-surveillance-as-a-service-vsaas-sla"
              },
              {
                "title": "WhatsApp Marketing Service SLA",
                "pill": null,
                "desc": "WhatsApp marketing service commitments",
                "href": "/whatsapp-marketing-service-sla"
              }
            ]
          }
        ]
      },
      {
        "g": "6",
        "label": "Events Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Events Catalog",
            "body": "Event",
            "image": "/assets/images/menu-company-events-catalog-v1.png",
            "link": "/under-construction/events-catalog"
          },
          {
            "label": "Company",
            "title": "Webinars Catalog",
            "body": "Webinars",
            "image": "/assets/images/menu-company-webinars-catalog-v1.png",
            "link": "/under-construction/webinars-catalog"
          }
        ],
        "groups": [
          {
            "heading": "Events Center",
            "items": [
              {
                "title": "Events Catalog",
                "pill": null,
                "desc": "Event"
              },
              {
                "title": "Webinars Catalog",
                "pill": null,
                "desc": "Webinars"
              },
              {
                "title": "Podcasts",
                "pill": null,
                "desc": "Podcasts"
              },

              
            ]
          }
        ]
      },
      {
        "g": "7",
        "label": "Tools Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Network Tools",
            "body": "Explore tools for network checks and diagnostics.",
            "image": "/assets/images/menu-company-network-tools-v1.png",
            "link": "/under-construction/network-tools"
          },
          {
            "label": "Company",
            "title": "Mail Tools",
            "body": "Explore tools for email checks and troubleshooting.",
            "image": "/assets/images/menu-company-mail-tools-v1.png",
            "link": "/under-construction/mail-tools"
          }
        ],
        "groups": [
          {
            "heading": "Tools Center",
            "items": [
              {
                "title": "Network Tools",
                "pill": null,
                "desc": null
              },
              {
                "title": "Mail Tools",
                "pill": null,
                "desc": null
              },
              {
                "title": "SSL Tools",
                "pill": null,
                "desc": null
              },
              {
                "title": "Domain Tools",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "Developer Tools",
        "label": "Developer Tools",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "OpenStack API",
            "body": "Explore OpenStack API resources.",
            "image": "/assets/images/menu-company-openstack-api-v1.png",
            "link": "/openstack-api"
          },
          {
            "label": "Company",
            "title": "Terraform Provider",
            "body": "Explore infrastructure automation with Terraform.",
            "image": "/assets/images/menu-company-terraform-provider-v1.png",
            "link": "/terraform-provider"
          }
        ],
        "groups": [
          {
            "heading": "Developer Tools",
            "items": [
              {
                "title": "OpenStack API",
                "href": "/openstack-api",
                "pill": null,
                "desc": null
              },
              {
                "title": "Terraform Provider",
                "href": "/terraform-provider",
                "pill": null,
                "desc": null
              },
              {
                "title": "S3 Object Storage API",
                "href": "/s3-object-storage-api",
                "pill": null,
                "desc": null
              },
              {
                "title": "OpenStack CLI",
                "href": "/openstack-cli",
                "pill": null,
                "desc": null
              },
              {
                "title": "OpenStack Credentials",
                "href": "/openstack-credentials",
                "pill": null,
                "desc": null
              },
              {
                "title": "Kubernetes API",
                "href": "/kubernetes-api",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "Learning Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Blogs",
            "body": "Read articles, ideas and practical guidance.",
            "image": "/assets/images/menu-company-blogs-v1.png",
            "link": "/insights"
          },
          {
            "label": "Company",
            "title": "Customer Stories",
            "body": "See how customers transform with our services",
            "image": "/assets/images/menu-company-customer-stories-v1.png",
            "link": "/case-studies"
          }
        ],
        "groups": [
          {
            "heading": "Learning Center",
            "items": [
              {
                "title": "Blogs",
                "pill": null,
                "desc": null
              },
              {
                "title": "Customer Stories",
                "pill": null,
                "desc": "See how customers transform with our services",
                "href": "/case-studies"
              },
              {
                "title": "Whitepapers",
                "pill": null,
                "desc": null
              },
              {
                "title": "Infographics",
                "pill": null,
                "desc": null
              },
              {
                "title": "Cloud Glossary",
                "pill": null,
                "desc": null
              },
              {
                "title": "Security Glossary",
                "href": "/security-glossary",
                "pill": null,
                "desc": null
              },
              {
                "title": "AI Glossary",
                "href": "/ai-glossary",
                "pill": null,
                "desc": null
              },
              {
                "title": "Developer Tools ",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      {
        "g": "9",
        "label": "Experience Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Acronis Demo Center",
            "body": "Interactive Acronis product tours and video demos",
            "image": "/assets/images/menu-company-acronis-demo-center-v1.png",
            "link": "/acronis-demo-center"
          },
          {
            "label": "Company",
            "title": "TSPlus Demo Center",
            "body": "Watch TSplus Remote Access connection demos",
            "image": "/assets/images/menu-company-tsplus-demo-center-v1.png",
            "link": "/tsplus-demo-center"
          }
        ],
        "groups": [
          {
            "heading": "Experience Center",
            "items": [
              
               {
                "title": "Acronis Demo Center",
                "pill": null,
                "desc": "Interactive Acronis product tours and video demos",
                "href": "/acronis-demo-center"
              },
              {
                "title": "TSPlus Demo Center",
                "pill": null,
                "desc": "Watch TSplus Remote Access connection demos",
                "href": "/tsplus-demo-center"
              },
              
              {
                "title": "DPDPA Demo Center",
                "pill": null,
                "desc": "Watch XcellHost product videos and demos",
                "href": "/xcellhost-demo-center"
              },
              {
                "title": "Druva Demo Center",
                "pill": null,
                "desc": "Explore Druva cyber resilience videos and product demos",
                "href": "/druva-demo-center"
              },
             
              {
                "title": "Plesk Demo Center",
                "pill": null,
                "desc": "Plesk Obsidian and WordPress management walkthroughs",
                "href": "/plesk-demo-center"
              },
              {
                "title": "Tally Demo Center",
                "pill": null,
                "desc": "Explore Tally on Cloud demos and product walkthroughs",
                "href": "/tally-demo-center"
              },
              {
                "title": "cPanel Demo Center",
                "pill": null,
                "desc": "Official cPanel, WHM and WP Toolkit video guides",
                "href": "/cpanel-demo-center"
              },
              {
                "title": "Product Tours",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
      
      {
        "g": "11",
        "label": "Media Center",
        "on": false,
        "featureCards": [
          {
            "label": "Company",
            "title": "Media Kit",
            "body": "Explore company media resources.",
            "image": "/assets/images/menu-company-media-kit-v1.png",
            "link": "/media-kit"
          },
          {
            "label": "Company",
            "title": "Press Release",
            "body": "Explore company announcements and press releases.",
            "image": "/assets/images/menu-company-press-release-v1.png",
            "link": "/under-construction/press-release"
          }
        ],
        "groups": [
          {
            "heading": "Media center",
            "items": [
              {
                "title": "Media Kit",
                "pill": null,
                "desc": null,
                "href": "/media-kit"
              },
              {
                "title": "Press Release",
                "pill": null,
                "desc": null
              },
              {
                "title": "Brand Kit",
                "pill": null,
                "desc": null
              }
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "",
        "on": false,
        "featureCards": [
          {
            "label": "Ebook",
            "title": "State of Infrastructure",
            "body": "Insights into modern infrastructure priorities and change.",
            "image": "/assets/images/menu-blogs.svg",
            "link": "https://flipbooks.officeinfra.com/books/wout/#p=1",
            "fresh": true
          },
          {
            "label": "Ebook",
            "title": "State of Security",
            "body": "Insights into today's threats, controls and security priorities.",
            "image": "/assets/images/menu-blogs.svg",
            "link": "https://flipbooks.officeinfra.com/books/zrdc/#p=1"
          }
        ],
        "groups": [
          {
            "heading": "Flipbooks ",
            "items": [
              {
                "title": "SMB Catalog ",
                "pill": null,
                "desc": null,
                "href": "https://flipbooks.officeinfra.com/books/SMB-Cloud-Services/"
              },
              {
                "title": "Acronis Cyber Protect Cloud",
                "pill": null,
                "desc": null,
                "href": "https://flipbooks.officeinfra.com/books/Acronis-Cyber-Protect-Cloud-compressed/"
              },
              {
                "title": "Microsoft 365 ",
                "pill": null,
                "desc": null,
                "href": "https://flipbooks.officeinfra.com/books/Microsoft-365-Platfrom/"
              },
              {
                "title": "Performance Cloud",
                "pill": null,
                "desc": null,
                "href": "https://flipbooks.officeinfra.com/books/guzk/"
              },
              
            ]
          }
        ]
      },
      {
        "g": "8",
        "label": "",
        "on": false,
        "groups": [
          {
            "heading": "Ebooks",
            "items": [
              {
                "title": "State of Infrastructure",
                "pill": null,
                "desc": null
              },
              {
                "title": "State of Security",
                "pill": null,
                "desc": null
              },
              {
                "title": "Unified Cyber Defense Platform",
                "pill": null,
                "desc": null
              },
              {
                "title": "DPDP Act  Guide",
                "pill": null,
                "desc": null
              },
              {
                "title": "DPDP Handbook",
                "pill": null,
                "desc": null
              },
            ]
          }
        ]
      },
    ]
  },
  
];

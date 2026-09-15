import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-why-xcellhost-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './why-xcellhost-content.component.html',
  styleUrl: './why-xcellhost-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyXcellhostContentComponent {
  readonly chapterHeadings = ['Experience you can count on', 'Keep your business running smoothly', 'Infrastructure for your next big idea', 'Grow with confidence', 'One partner for the long run'];
  readonly groups = [
  {
    "title": "Built on trust",
    "subtitle": "Experience, infrastructure and people you can count on.",
    "reasons": [
      {
        "number": "01",
        "icon": "workspace_premium",
        "title": "25+ Years of Cloud Experience",
        "body": "Trusted managed cloud service provider since 1999."
      },
      {
        "number": "02",
        "icon": "flag",
        "title": "Indian Cloud Infrastructure",
        "body": "Hosted on secure data centers in India for better performance and compliance."
      },
      {
        "number": "03",
        "icon": "support_agent",
        "title": "24×7 Managed Support",
        "body": "Round-the-clock NOC and SOC support for business continuity."
      },
      {
        "number": "04",
        "icon": "bolt",
        "title": "High-Performance Cloud Servers",
        "body": "Fast compute, NVMe storage, and optimized cloud infrastructure."
      },
      {
        "number": "05",
        "icon": "verified_user",
        "title": "Secure Cloud Hosting",
        "body": "Built-in security layers to protect business applications and data."
      }
    ]
  },
  {
    "title": "Ready for your everyday work",
    "subtitle": "Keep your applications, teams and data connected.",
    "reasons": [
      {
        "number": "06",
        "icon": "bar_chart",
        "title": "Tally on Cloud Expertise",
        "body": "Run TallyPrime securely from anywhere, anytime."
      },
      {
        "number": "07",
        "icon": "desktop_windows",
        "title": "Remote Desktop Cloud Solutions",
        "body": "Secure cloud desktop access for employees, accountants, auditors, and branches."
      },
      {
        "number": "08",
        "icon": "backup",
        "title": "Cloud Backup & Disaster Recovery",
        "body": "Protect data with backup, restore, and DR-ready options."
      },
      {
        "number": "09",
        "icon": "shield",
        "title": "Advanced Endpoint Security",
        "body": "EDR, XDR, RMM, and managed security solutions for businesses."
      },
      {
        "number": "10",
        "icon": "cloud",
        "title": "Managed AWS, Azure, GCP & OCI Services",
        "body": "Expert support for public cloud deployments and management."
      }
    ]
  },
  {
    "title": "Power for what comes next",
    "subtitle": "Purpose-built infrastructure with security at its core.",
    "reasons": [
      {
        "number": "11",
        "icon": "dns",
        "title": "Private Cloud & Performance Cloud Options",
        "body": "Dedicated and high-performance cloud solutions for demanding workloads."
      },
      {
        "number": "12",
        "icon": "storage",
        "title": "Bare Metal Servers",
        "body": "Powerful dedicated infrastructure for performance-sensitive applications."
      },
      {
        "number": "13",
        "icon": "memory",
        "title": "GPU Cloud & AI-Ready Infrastructure",
        "body": "Infrastructure support for AI, ML, rendering, and advanced workloads."
      },
      {
        "number": "14",
        "icon": "verified",
        "title": "ISO-Certified Processes",
        "body": "Professional service delivery with compliance-focused operations."
      },
      {
        "number": "15",
        "icon": "lock",
        "title": "Data Security First Approach",
        "body": "Security, monitoring, backup, and access control are built into the service model."
      }
    ]
  },
  {
    "title": "Room to grow",
    "subtitle": "More flexibility. Less complexity. A cloud that moves with you.",
    "reasons": [
      {
        "number": "16",
        "icon": "move_up",
        "title": "Free Migration Assistance",
        "body": "Smooth migration from local servers or other hosting providers."
      },
      {
        "number": "17",
        "icon": "trending_up",
        "title": "Scalable Infrastructure",
        "body": "Easily scale CPU, RAM, storage, users, and applications as business grows."
      },
      {
        "number": "18",
        "icon": "payments",
        "title": "Affordable Monthly Plans",
        "body": "Flexible pricing for SMBs, startups, enterprises, and professional offices."
      },
      {
        "number": "19",
        "icon": "public",
        "title": "Multi-Location Access",
        "body": "Work securely from office, home, branch, factory, or while travelling."
      },
      {
        "number": "20",
        "icon": "hub",
        "title": "Centralized IT Management",
        "body": "Manage servers, users, applications, backup, security, and monitoring from one place."
      }
    ]
  },
  {
    "title": "A partner for the long run",
    "subtitle": "Support that stays with your business, from the first migration onward.",
    "reasons": [
      {
        "number": "21",
        "icon": "autorenew",
        "title": "Business Continuity Focus",
        "body": "Reduce downtime with proactive monitoring, backup, and support."
      },
      {
        "number": "22",
        "icon": "handshake",
        "title": "Strong Partner Ecosystem",
        "body": "Solutions from trusted technology partners like Acronis, Microsoft, TSplus, and more."
      },
      {
        "number": "23",
        "icon": "policy",
        "title": "Compliance-Friendly Cloud",
        "body": "Suitable for businesses needing better control over data, audit logs, backup, and security."
      },
      {
        "number": "24",
        "icon": "tune",
        "title": "Custom Cloud Solutions",
        "body": "Tailored cloud architecture for SMBs, BFSI, healthcare, retail, manufacturing, education, and more."
      },
      {
        "number": "25",
        "icon": "all_inclusive",
        "title": "One Cloud Partner for Everything",
        "body": "Hosting, migration, security, backup, remote access, monitoring, and managed support under one roof."
      }
    ]
  }
];
}

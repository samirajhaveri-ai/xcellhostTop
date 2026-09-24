import { Faq } from './models';

interface ServiceExtras {
  security: { intro: string; rows: [string, string][] };
  why: { title: string; body: string; icon: string }[];
  faqs: Faq[];
}

export const SUPPLIED_SERVICE_EXTRAS: Record<'cloud-devops-services' | 'server-management', ServiceExtras> = {
  'cloud-devops-services': {
    security: {
      intro: 'Build security checks into delivery workflows and keep cloud changes visible. XcellHost helps teams apply access controls, review infrastructure changes and monitor production services.',
      rows: [
        ['Pipeline security', 'Code, dependency and image scanning in CI/CD workflows'],
        ['Infrastructure changes', 'Version-controlled configuration and review before deployment'],
        ['Access control', 'Role-based access and protected deployment credentials'],
        ['Runtime visibility', 'Monitoring, logs and alerts for cloud and container workloads'],
        ['Response', 'Defined escalation and remediation procedures for production issues'],
      ],
    },
    why: [
      { title: 'Multi-cloud experience', body: 'Plan delivery workflows across AWS, Azure and Google Cloud.', icon: 'M7 18h10a5 5 0 0 0 0-10 6 6 0 0 0-11-1 3 3 0 0 0 1 6z' },
      { title: 'Automation first', body: 'Use pipelines and infrastructure as code to make releases repeatable.', icon: 'M20 7h-5V2M4 17h5v5M5.8 9a7 7 0 0 1 11.7-3.5L20 7M4 17l2.5 1.5A7 7 0 0 0 18.2 15' },
      { title: 'Security in delivery', body: 'Add scanning, access controls and review steps to the release process.', icon: 'M12 2l8 3v6c0 5-3 9-8 11-5-2-8-6-8-11V5zM9 12l2 2 4-4' },
      { title: 'Clear observability', body: 'Bring metrics, logs and alerts together for faster troubleshooting.', icon: 'M3 18l6-6 4 4 8-9M15 7h6v6' },
      { title: 'Practical handover', body: 'Document pipelines and train your team as part of delivery.', icon: 'M5 3h14v18H5zM9 8h6M9 12h6M9 16h4' },
      { title: 'Ongoing support', body: 'Keep improving reliability, performance and cloud spend after rollout.', icon: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2zM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2z' },
    ],
    faqs: [
      ['What can XcellHost automate?', 'Projects can include build and release pipelines, infrastructure provisioning, container deployment, monitoring and operational runbooks. Scope depends on your current environment.'],
      ['Do you work with our existing cloud provider?', 'XcellHost can assess workflows on AWS, Azure and Google Cloud and design a delivery approach around your existing tools and accounts.'],
      ['Can you help with Kubernetes?', 'Yes. Work can include cluster setup, deployment workflows, observability and ongoing operational support.'],
      ['Will our team be able to maintain the pipelines?', 'Documentation and knowledge transfer can be included so your team understands the workflows and can operate them confidently.'],
      ['How is a DevOps engagement scoped?', 'The team reviews your applications, repositories, infrastructure and release goals before recommending a project or managed support scope.'],
    ],
  },
  'server-management': {
    security: {
      intro: 'Protect and maintain servers through controlled access, patching, monitoring and recovery planning. XcellHost can manage these operations across your supported hosting environment.',
      rows: [
        ['Access', 'Named administrator access and least-privilege permissions'],
        ['Patching', 'Operating system and supported software update planning'],
        ['Threat protection', 'Firewall, malware checks and server hardening'],
        ['Backups', 'Backup monitoring and restore testing as agreed in the service scope'],
        ['Monitoring', 'Health, capacity and availability alerts with escalation procedures'],
      ],
    },
    why: [
      { title: 'Experienced administrators', body: 'Get help across Linux, Windows and common control panels.', icon: 'M4 4h16v12H4zM8 20h8M12 16v4' },
      { title: 'Proactive maintenance', body: 'Plan updates and review server health before issues disrupt users.', icon: 'M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
      { title: 'Security focus', body: 'Combine access reviews, hardening, patching and malware response.', icon: 'M12 2l8 3v6c0 5-3 9-8 11-5-2-8-6-8-11V5zM9 12l2 2 4-4' },
      { title: 'Backup oversight', body: 'Monitor backup jobs and agree on a recovery process for critical data.', icon: 'M4 7h13M14 4l3 3-3 3M20 17H7m3-3-3 3 3 3' },
      { title: 'One support team', body: 'Use a consistent contact for administration and incident escalation.', icon: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2zM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2z' },
      { title: 'Flexible scope', body: 'Match management tasks and response expectations to your servers.', icon: 'M4 6h16M4 12h16M4 18h16M8 3v18' },
    ],
    faqs: [
      ['Which servers can you manage?', 'XcellHost can assess Linux and Windows servers across supported cloud, dedicated and virtual hosting environments. The agreed scope identifies each managed server.'],
      ['Can you work with our control panel?', 'Common panels such as cPanel, Plesk and DirectAdmin can be included after a compatibility review.'],
      ['Are backups included?', 'Backup monitoring and recovery tasks depend on the selected plan and the backup system in place. The scope should define retention and restore testing.'],
      ['How are security updates handled?', 'The team can schedule supported operating system and application updates around your maintenance windows and change process.'],
      ['What happens during an incident?', 'The response process follows the support scope, monitoring alerts and agreed escalation contacts.'],
    ],
  },
};

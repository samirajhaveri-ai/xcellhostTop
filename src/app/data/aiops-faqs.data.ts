import { Faq } from './models';

// First eight FAQs from the supplied AIOps HTML.
export const AIOPS_FAQS: Faq[] = [
  [
    "What is AIOps?",
    "AIOps — artificial intelligence for IT operations — applies big data and machine learning to operations data such as metrics, logs, traces and events. It automates event correlation, anomaly detection and root-cause analysis, so engineers work on a few real incidents instead of thousands of alerts."
  ],
  [
    "How is AIOps different from the monitoring we already have?",
    "Monitoring collects signals and fires alerts on thresholds. AIOps sits on top: it learns normal behaviour, groups related alerts, ranks the likely cause and can run approved fixes. Your existing monitoring usually stays and becomes a data source."
  ],
  [
    "Do we have to replace our tools?",
    "No. We work with leading observability platforms, cloud-native monitoring on AWS, Azure and Google Cloud, Prometheus and Grafana, and OpenTelemetry*. Where there are gaps, we recommend the lightest tool that closes them."
  ],
  [
    "Will auto-remediation change production without us knowing?",
    "No. Every runbook is written and tested with you and sits behind an approval gate. You decide which low-risk actions, such as clearing a temp folder, may run automatically and which need a named approver. Every action is logged in the ticket."
  ],
  [
    "How much noise reduction should we expect?",
    "It depends on how many duplicate and related alerts you have today. We measure your baseline during onboarding and report noise and MTTR every month. We do not promise a fixed percentage before we have seen your data."
  ],
  [
    "What data leaves our environment, and where is it stored?",
    "Operational telemetry — metrics, logs, traces and events — not business records. We can keep it in Indian data centres, mask sensitive fields at ingestion and agree retention with you, including the 180-day option for CERT-In."
  ],
  [
    "How does the GenAI incident copilot work?",
    "It drafts plain-English summaries, timelines and post-incident reviews from the incident's own alerts, changes and notes. An engineer reviews every summary before it is shared; it does not take actions on its own."
  ],
  [
    "Which ITSM tools do you integrate with?",
    "Leading ITSM platforms* with two-way updates: incidents open with context, update as the NOC works them and close with resolution notes. If you have no ITSM tool, tickets run in XcellHost's."
  ]
];

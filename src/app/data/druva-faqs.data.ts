import { Faq } from './models';

export const DRUVA_FAQS: Faq[] = [
  [
    "What is the Druva Resilience Cloud?",
    "It is Druva's fully managed, 100% SaaS platform for backup, recovery and cyber resilience. Druva calls it resilience as a service: it protects SaaS apps such as Microsoft 365, Google Workspace and Salesforce, laptops, virtual machines, databases, file shares, AWS and Azure workloads and identity systems, keeps immutable copies in Druva's cloud and helps you recover from deletion, ransomware, compromised accounts and unwanted AI changes. There is no backup hardware or software for you to run."
  ],
  [
    "What do AI, identity, cyber and data resilience mean in practice?",
    "Data resilience is backup, restore and disaster recovery. Cyber resilience adds detection, quarantine of infected snapshots and clean recovery after ransomware. Identity resilience protects Entra ID, Active Directory and Okta so you can roll back malicious changes. AI resilience keeps the data AI tools use governed and lets you reverse changes made by copilots or agents."
  ],
  [
    "How does the free trial work?",
    "Request a trial with the button at the top of this page. We confirm the workloads you want to test, set up the trial tenant with you and help connect a first workload such as Microsoft 365 or a few laptops. Trial length and scope are set by Druva; we share the details when we call you back."
  ],
  [
    "Doesn't Microsoft already back up Microsoft 365?",
    "Microsoft keeps the service available and offers short recycle-bin and retention windows, but restoring data your users, a script, an AI agent or an attacker deleted or encrypted is your responsibility. A separate backup gives you long retention, point-in-time restores and a copy outside your tenant that a compromised admin account cannot touch."
  ],
  [
    "How does Druva help with ransomware?",
    "Backups are immutable and air-gapped from your network, so attackers cannot delete them. Druva watches for unusual encryption or deletion, quarantines suspicious snapshots, lets you search backups for indicators of compromise and runs a curated restore that brings back the most recent clean version of each file. Try the simulator above to see how the timings compare."
  ],
  [
    "What is the US$10 million resilience guarantee?",
    "It is Druva's own guarantee programme for eligible customers, covering certain data-loss and recovery commitments up to that amount. Eligibility, editions and conditions are set by Druva — we share the current terms with your quotation. It is not an XcellHost guarantee."
  ],
  [
    "Where is our data stored? Is there an India region?",
    "Druva runs on AWS in 26 regions worldwide and lets you choose the region per workload. Ask us about India region availability for the workloads you want to protect; we confirm the storage region in writing before you sign."
  ],
  [
    "Does it help with DPDP Act, CERT-In, RBI or SEBI requirements?",
    "It supports them. Retention policies, erasure and legal hold help with DPDP Act obligations; long-term retention helps keep logs for CERT-In's rolling 180 days; immutable copies and documented recovery drills support RBI and SEBI expectations on backup, BCP and DR. No backup product makes you compliant on its own, so your compliance team should map each requirement."
  ]
];

// FAQs from the supplied Enterprise RAG as a Service document.
export const ENTERPRISE_RAG_FAQS: [string, string][] = [
  [
    "What is enterprise RAG?",
    "Retrieval-augmented generation looks up relevant passages in your knowledge and gives them to a language model as context. Enterprise RAG adds what a large organisation needs around it: identity and permissions, connectors, governance, evaluation, private hosting and an SLA."
  ],
  [
    "How is this different from RAG as a Service?",
    "Both run on Sarv's Knowledge & RAG platform. RAG as a Service suits a first assistant on a single source set. Enterprise RAG adds SSO, permission-aware retrieval, connectors, PII redaction, audit logs, customer-managed keys, dedicated or private deployment and a 99.95% SLA."
  ],
  [
    "Will users see documents they are not allowed to open?",
    "No — that is the design goal. Access labels are taken from the source system and applied as a filter during retrieval, so restricted passages never reach the prompt. We test this with real user accounts in the pilot.*"
  ],
  [
    "Which systems can you connect?",
    "Connectors for leading enterprise systems* — intranet and document libraries, cloud drives, wikis, issue trackers, IT service management, CRM, ERP, file shares and databases. Availability and permission mapping are confirmed per system during discovery."
  ],
  [
    "Can it run entirely inside India, or inside our own network?",
    "Yes. Choose private deployment in XcellHost's Mumbai Tier IV data centre, or deployment into your VPC or on-premises after a feasibility review*. Sources, vectors, prompts, logs and keys then stay in India unless you choose an external model."
  ],
  [
    "Which models can we use? Is our data used for training?",
    "Hosted models from major providers, or private open models on GPU in India (priced on quote). Your content and prompts are not used to train models*, and we confirm each provider's terms in the contract."
  ],
  [
    "How is personal data protected?",
    "PII redaction in prompts and logs*, per-source access, separate retention settings, encryption in transit and at rest with customer-managed keys via Cloud HSM*, and monitoring by our 24×7 SOC. For wider data-loss prevention, see Scrutiny DLP."
  ],
  [
    "How do you measure answer quality?",
    "A golden set of questions with expected sources, scored for groundedness, citation accuracy, retrieval hit rate and correct refusals before launch and every month after. Drift alerts and human feedback feed the fixes."
  ],
  [
    "Does retrieval guarantee correct answers?",
    "No. Missing or outdated sources, retrieval misses and model mistakes can still cause wrong answers. RAG makes answers checkable and reduces made-up ones; it does not remove the need to evaluate and monitor."
  ],
  [
    "What does the SLA cover?",
    "99.95% availability on Enterprise and Dedicated plans, 24×7 incident handling by our Mumbai NOC + SOC with escalation to Sarv, and a named technical account manager on Enterprise*. Service credits and exclusions are set out in the contract."
  ],
  [
    "Does it help with RBI, SEBI or ISO 42001 audits?",
    "It produces the evidence those reviews ask for — source lists, access records, audit logs, evaluation results and an exit plan. Compliance stays with your organisation; our ISO 42001 consulting can help build the wider programme."
  ],
  [
    "How do we start?",
    "Bring sample sources with their access groups, representative questions and the journey you have in mind. We run a pilot and send results, a deployment recommendation and an INR quotation. A proof of concept is ₹1,99,999* one-time, excl. GST."
  ]
];

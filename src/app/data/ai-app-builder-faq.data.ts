// FAQs from the supplied AI Apps Builder document.
export const AI_APP_BUILDER_FAQS: [string, string][] = [
  [
    "What is the XcellHost AI Apps Builder?",
    "A low-code studio for building AI apps, agents, chatbots and workflows. You describe the job or start from a template, refine the flow on a visual canvas, test it in a live preview and publish it to a website, WhatsApp, an internal assistant or an API — hosted in India."
  ],
  [
    "Do we need developers?",
    "No for most apps: business teams can build assistants, RAG bots and simple workflows with blocks. Developers can add custom code blocks, write connectors to in-house systems and export flow definitions when they want more control."
  ],
  [
    "How does RAG over our documents work?",
    "Documents are split into passages, turned into embeddings and stored in a vector index. For each question the app retrieves the most relevant passages and gives them to the model, which answers from them and cites the source. Access rules decide which users can retrieve which documents. See our AI Vector Database page for the index behind it."
  ],
  [
    "Which models can we use?",
    "Leading hosted model APIs — including OpenAI, Azure OpenAI, Google Gemini and Anthropic Claude* — through your own keys or ours, and open models served from XcellHost serverless or dedicated inference in India. You can switch the model per flow and compare them on your test set."
  ],
  [
    "Can the app work on WhatsApp?",
    "Yes, on the Team and Enterprise plans. We connect a number to Meta's WhatsApp Business Platform, get message templates approved and set up opt-in and opt-out. Meta charges per delivered template message under its current pricing; replies within the 24-hour customer-service window are not charged. Meta's charges are billed at actuals."
  ],
  [
    "How do guardrails stop wrong or unsafe answers?",
    "Guardrail blocks check input and output: they mask personal data such as phone, PAN or account numbers, detect prompt-injection attempts, keep the app to its allowed topics and can force \"I don't know\" when no source supports an answer. Blocked events are logged for review. No guardrail is perfect, so we also run evaluation sets before every publish."
  ],
  [
    "Where is our data stored, and is it used to train models?",
    "Documents, indexes, conversations and logs stay in XcellHost's Mumbai data centre and/or partner data centres*. We do not use your data to train models. When you call a hosted model API, prompts go to that provider under its data terms; choose open models on Indian GPUs if prompts must stay in India."
  ],
  [
    "How is pricing worked out?",
    "You pay per builder seat per month — Builder ₹2,499* and Team ₹6,499* (min 3 seats) — and Enterprise is quoted. People who use your apps are not counted. Model usage is billed at actuals on your keys or drawn from prepaid XcellHost credit packs of ₹5,000, ₹25,000 or ₹1,00,000. GPUs are always priced on quote. All prices exclude 18% GST."
  ],
  [
    "Can it handle complex apps and agents?",
    "Yes, step by step. Simple assistants come together from one brief; multi-step agents that call several tools, branch on conditions and wait for human approval are built by iterating on the canvas, with custom code blocks where needed. We suggest starting narrow and widening once the evals hold."
  ],
  [
    "Is it ready for enterprise security reviews?",
    "XcellHost operates under ISO 27001 and ISO 20000-1. The builder supports SSO, role-based access, audit logs, encryption in transit and at rest, PII masking and log retention in India, with private deployment and NDA / MSA on Enterprise. We share security documentation during your review."
  ],
  [
    "Do we own what we build, and can we leave?",
    "Yes. Your flows, prompts, test sets, documents and conversation logs are yours. You can export flow definitions and data at any time, and on exit we hand over exports and delete your workspace on a written date you agree."
  ],
  [
    "What else does XcellHost offer around AI?",
    "Managed vector databases, AI IDE labs for data teams, a model catalog with serverless and dedicated inference, GPU servers in the AI Factory, managed OpenAI, Gemini and Microsoft Agent 365 services, and AI training programmes for teams."
  ]
];

// FAQs from the supplied AI as a Service document.
export const AI_AS_SERVICE_FAQS: [string, string][] = [
  [
    "What is AI as a Service?",
    "AI as a Service means using AI capabilities — GPUs, models, retrieval, applications and governance — as managed services you pay for by use or by month, instead of buying hardware and building every layer yourself. XcellAI offers the full stack from XcellHost's Mumbai data centre."
  ],
  [
    "Which GPUs can we use?",
    "NVIDIA L4 (24 GB), RTX PRO 6000 Blackwell Server Edition (96 GB) and H200 (141 GB). Serverless inference runs on a shared, autoscaled pool; dedicated endpoints and bare-metal servers are reserved for you. GPU capacity is always priced on quote."
  ],
  [
    "What is the difference between pay-as-you-go, reserved and managed?",
    "Pay-as-you-go draws down prepaid credit per token on shared GPUs. Reserved gives you GPUs or endpoints of your own for a monthly fee. Managed means XcellHost runs a whole service — such as RAG, a vector database or AIOps — for a monthly plan. You can mix all three on one contract."
  ],
  [
    "Do prompts and documents stay in India?",
    "For models we host — serverless, dedicated, vector databases and RAG — yes: they run in our Mumbai data centre and partner DCs*. Managed Gemini, OpenAI and Microsoft 365 Copilot run on those providers' infrastructure under their data-location terms, which we document for your risk team."
  ],
  [
    "Which models are available?",
    "Our Model Catalog lists 17 open models for chat, code, reasoning, embeddings, speech, images and safety — including Llama, Qwen, Mistral, Gemma and Whisper families — each under its own licence. Alongside them we manage Google Gemini, OpenAI models and Microsoft 365 Copilot. You can also bring your own fine-tuned model to a dedicated endpoint."
  ],
  [
    "How is usage billed?",
    "Serverless usage draws down prepaid credit packs of ₹5,000, ₹25,000 or ₹1,00,000* at per-token rates. Managed services are monthly plans; licences such as Copilot are per user per month. Everything is invoiced in INR with 18% GST by XcellHost."
  ],
  [
    "Can we connect AI to our own documents safely?",
    "Yes. RAG as a Service and Enterprise RAG index your sources into a managed vector database, keep document permissions, and return answers with citations. Personal data can be masked at the gateway before it reaches a model."
  ],
  [
    "How do you handle AI security and guardrails?",
    "Managed endpoints log every call and check inputs and outputs for personal data and policy breaches. For deeper assurance we offer AI security assessments, authorised red teaming of LLM apps and agents, a shadow-AI and prompt-DLP platform, and identity governance for AI agents."
  ],
  [
    "Does this make us ISO 42001 certified?",
    "No — certification comes from an accredited certification body. Our ISO 42001 consulting builds the AI management system (inventory, policy, risk register, impact assessments) to be ready for audit, and the platform produces evidence for it. XcellHost is not a certification body."
  ],
  [
    "How does this help with DPDP and MeitY guidelines?",
    "India hosting, PII masking, consent-aware data flows and breach-ready logs help you meet DPDP obligations as they phase in through 2026 and 2027. Our governance layer maps your AI inventory and risk register to MeitY's India AI Governance Guidelines of November 2025. Compliance remains your responsibility."
  ],
  [
    "How quickly can we start?",
    "Serverless inference can be used as soon as a credit pack is active and keys are issued. A typical first project runs a one-week discovery, then a proof of concept of up to four weeks on your data*, before hardening and scale-up."
  ],
  [
    "What happens if we want to leave?",
    "Your data, prompts, indexes and fine-tuned weights are yours. The API is OpenAI-compatible, most models are open-weight, and on exit we export indexes and logs on request, hand over configuration and remove our access."
  ]
];

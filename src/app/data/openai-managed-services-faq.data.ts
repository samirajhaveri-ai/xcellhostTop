// Questions and answers from the supplied openai-managed-services.html.
export const OPENAI_MANAGED_SERVICES_FAQS: [string, string][] = [
  [
    "Is XcellHost an OpenAI partner?",
    "No — XcellHost is an independent managed-service provider. We build and run solutions on OpenAI models accessed via Microsoft's Azure OpenAI Service or the OpenAI API, under your own Azure subscription or OpenAI organisation. XcellHost is a Microsoft Gold Partner."
  ],
  [
    "Azure OpenAI or the OpenAI API — which should we use?",
    "For regulated or sensitive data we usually recommend Azure OpenAI: it runs in your Azure tenant with private networking, Entra ID and Azure Policy, and can be billed in INR through XcellHost. The OpenAI API often gets new features first and suits fast-moving products. Many clients use both; we decide per use case in the design step."
  ],
  [
    "Will our data be used to train OpenAI's models?",
    "Per Microsoft, prompts and completions in Azure OpenAI are not available to OpenAI and are not used to train foundation models. Per OpenAI, data sent to the API is not used for training by default. We also configure logging, retention and abuse-monitoring options to suit your policy."
  ],
  [
    "Can the data stay in India?",
    "Partly, depending on the route. Azure OpenAI resources can be created in India regions such as South India, but which models and deployment types are offered there varies — and \"Global\" deployments may process prompts outside India. OpenAI offers data-at-rest residency in India for eligible API projects. If everything must stay on Indian infrastructure we run open models on XcellHost's own GPU cloud."
  ],
  [
    "How does this help with the DPDP Act and CERT-In directions?",
    "We design for purpose limitation and data minimisation, mask personal data before it reaches the model, keep audit logs on Indian infrastructure for at least 180 days, document processors, and support your 6-hour CERT-In incident reporting. These controls help you meet your obligations; responsibility for compliance stays with your organisation."
  ],
  [
    "Do you fine-tune models?",
    "Rarely first. Most business needs are met by good prompts, retrieval (RAG) and evaluation. OpenAI has said it is winding down its self-serve fine-tuning platform, so where tuning is genuinely needed we use Azure's managed fine-tuning in supported regions or tune an open model on XcellHost — after a test shows it beats prompting."
  ],
  [
    "What does a proof of concept include?",
    "One use case built on a sample of your real data, an agreed set of test questions with pass criteria, basic guardrails, a demo app (web or Teams) and a written report on quality, cost per request and what production would need. Indicative ₹1,99,999* excl. GST, up to four weeks."
  ],
  [
    "How do you control token costs?",
    "Budgets and alerts per app, routing simple questions to smaller model tiers, prompt caching, trimming retrieved context, batching where latency allows, and monthly reviews of the most expensive conversations. The estimator above shows how much tier choice matters."
  ],
  [
    "Can the assistant work in Hindi and other Indian languages?",
    "OpenAI's current models handle Hindi and several Indian languages, including mixed Hindi–English. Quality varies by language and topic, so we include those languages in the evaluation set and test them before launch."
  ],
  [
    "Can it connect to our CRM, ERP or Tally?",
    "Yes, through tool-calling (function calling) with scoped service accounts. Read actions run directly; write actions such as updating a record or raising an invoice can require a human approval step. We log every tool call."
  ],
  [
    "What happens when a model version is retired?",
    "OpenAI and Microsoft publish retirement dates for model versions. Under a managed package we test the successor model against your evaluation set, adjust prompts and switch before the deadline, and tell you if cost or quality changes."
  ],
  [
    "Who owns the prompts, data and code?",
    "You do. Resources live in your Azure subscription or OpenAI organisation, and the prompts, evaluation sets, integration code and runbooks are handed over if you move the service in-house or elsewhere."
  ]
];

import { Faq } from './models';

// Questions and answers from the supplied Managed Gemini Services document.
export const GEMINI_MANAGED_FAQS: Faq[] = [
  [
    "Is XcellHost a Google partner?",
    "XcellHost supplies and manages Google Workspace and Google Cloud as a Google Cloud partner* — confirm the current partner listing with us. We are an independent service provider, not Google. XcellHost is also a Microsoft Gold Partner."
  ],
  [
    "Gemini for Workspace or Gemini Enterprise — which do we need?",
    "If your teams mainly work in Gmail, Docs, Sheets and Meet, Gemini in a Workspace edition is usually the start. Gemini Enterprise suits teams that need agents and search across many systems — including Microsoft 365, Salesforce or SAP data. Many companies use both. The edition picker above gives a first answer; we confirm it in the readiness assessment."
  ],
  [
    "Is our data used to train Gemini models?",
    "Google's Workspace privacy hub says prompt content isn't used to train generative AI models outside your domain without your permission, and that Gemini app chats and Gemini Notebook content aren't reviewed by human reviewers. We check the settings that apply to each product you license."
  ],
  [
    "Can our Gemini data stay in India?",
    "It depends on the product. Workspace data-region controls for Gemini currently cover US and EU processing. Gemini Enterprise offers an India in-country option that Google lists as GA with allowlist. On the Agent Platform, India (asia-south1) is listed for some Google models, while global endpoints give no residency guarantee. We choose and document the location per use case."
  ],
  [
    "What is Gemini Notebook?",
    "It is the new name for NotebookLM, which Google began rolling out on 16 July 2026. It is a research notebook grounded in the sources you add. Note that, per Google, your organisation's data-region settings don't apply to data in Gemini Notebook — we cover this in your AI policy."
  ],
  [
    "What's happening to Gemini Code Assist?",
    "Per Google, new Standard and Enterprise subscriptions can't be purchased from 9 October 2026. Existing subscriptions stay supported to contract end; licences can be added until 31 January 2027, annual renewals end 31 January 2027 and monthly renewals end 31 December 2027. Google says agentic coding moves to Antigravity, included in Gemini Enterprise editions. We plan that transition with you."
  ],
  [
    "What does DLP for Gemini actually block?",
    "In Workspace, DLP rules for Gemini can stop Gemini from using sensitive Google Drive files as a source (block) or let it proceed and log the event (audit). Google lists it for Enterprise Standard and Plus, Frontline Standard and Plus and several Education editions. For custom apps and agents, we add Model Armor, which screens prompts and replies for sensitive data and prompt injection."
  ],
  [
    "Can Google Vault keep Gemini conversations?",
    "Yes. Google says admins can retain, hold, search and export Gemini app conversations with Vault. We set the retention rules to match your record-keeping policy and legal-hold process, and confirm which of your licences include Vault."
  ],
  [
    "What is a Gem, and what do you build?",
    "A Gem is a custom Gemini expert set up once with instructions and reference files — for example, an accounts-SOP Gem or a policy FAQ Gem. Our Gem pack turns five of your procedures into tested, shareable Gems, with an owner and review date for each."
  ],
  [
    "What does RAG over Drive or BigQuery involve?",
    "We connect Gemini to the right Drive folders or BigQuery tables, respect existing permissions, build a test set of real questions, and measure how often answers are correct and cited. The proof of concept runs up to four weeks and ends with a report on quality, cost and what production would need."
  ],
  [
    "How do you keep Gemini costs under control?",
    "For licences: assign seats by need, remove unused ones and right-size editions every quarter. For Agent Platform usage: budgets and alerts, quotas, routing simple requests to smaller models, caching and trimming context. The monthly report shows spend next to adoption."
  ],
  [
    "How are Google licences priced and billed?",
    "Licence prices are on quote — we confirm the current price for your edition, term and seat count in writing. XcellHost bills licences and its own service fees on one INR invoice with GST. Agent Platform usage is billed at actuals."
  ]
];

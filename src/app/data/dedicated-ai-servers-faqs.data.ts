// Imported from the supplied Dedicated AI Servers page.
export const DEDICATED_AI_SERVERS_FAQS: readonly (readonly [string, string])[] = [
  [
    "What hardware does a good AI server need?",
    "Data-centre NVIDIA GPUs with enough memory for your model, a server-grade CPU (AMD EPYC or Intel Xeon), plenty of ECC RAM — usually 128 GB or more — fast NVMe storage for datasets and checkpoints, and 10 Gbps or faster networking. We size each part to your workload."
  ],
  [
    "Does the CPU matter if the GPU does the maths?",
    "Yes. The CPU loads and pre-processes data, schedules jobs and feeds the GPUs. A weak CPU or too little RAM leaves expensive GPUs idle, so we balance cores and memory against GPU count."
  ],
  [
    "What does the CPU do versus the GPU?",
    "The CPU runs control flow, I/O, tokenisation and data pipelines; the GPU runs the parallel matrix maths of training and inference. Both need to keep up with each other."
  ],
  [
    "Can I upgrade my AI server later?",
    "Yes. You can add GPUs where the chassis allows, move up to a larger GPU (for example L4 → RTX PRO 6000 → H200), add RAM and NVMe, upgrade to 25 or 100 Gbps, or add more servers on a private network."
  ],
  [
    "How is my data protected?",
    "Servers are single-tenant, with optional disk encryption, isolated private VLANs, role-based access, OS hardening and DDoS filtering, inside XcellHost's ISO 27001-certified operations. You control root access."
  ],
  [
    "Does my data stay in India?",
    "Yes. The servers sit in our Mumbai data centre, so training data, prompts and model weights stay in India — useful when you need to show data residency under the DPDP Act or sector rules."
  ],
  [
    "How much does a dedicated GPU server cost?",
    "Every GPU configuration is priced on quote, because GPU supply and build options change. Use the configurator above to send your build and we email a written quotation — monthly, with committed 6- and 12-month discounts available on quote."
  ],
  [
    "Will I get a GST invoice?",
    "Yes. You are billed monthly in INR by XcellHost Cloud Services Pvt. Ltd. with a GST invoice; prices exclude 18% GST."
  ],
  [
    "How long does delivery take?",
    "Delivery dates are confirmed on quotation; 8-GPU H200 HGX and on-request accelerators are built to order. Your quote confirms the date."
  ],
  [
    "Is there a setup fee?",
    "No setup fee on standard builds*. Custom or built-to-order configurations are confirmed in your quote."
  ],
  [
    "Should I choose serverless or a dedicated server?",
    "Serverless or pay-per-use inference suits spiky or early-stage traffic. A dedicated server suits steady workloads, fine-tuning, training and strict data control — once GPUs are busy most of the month it usually works out better. We can start you on serverless inference and move you to dedicated hardware later."
  ],
  [
    "Can you install CUDA and my frameworks?",
    "Yes. On request we preinstall the NVIDIA driver, CUDA toolkit, Docker with the NVIDIA container toolkit, and frameworks such as PyTorch or vLLM. With managed plans we also help with Kubernetes and MLOps tooling."
  ]
];

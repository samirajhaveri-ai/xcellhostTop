import { Faq } from './models';
export const VERA_RUBIN_FAQS: Faq[] = [
  [
    "How Does The Rubin GPU Differ From Blackwell?",
    "Three areas drive the gap: memory (HBM4 at 22 TB/s versus HBM3e at 8 TB/s), compute (50 PFLOPS NVFP4 versus about 10) and interconnect (NVLink 6 at 3.6 TB/s per GPU). Together NVIDIA cites about 5× the inference performance and a tenth of the inference cost per token versus Blackwell NVL72."
  ],
  [
    "DGX Rubin NVL72 Or HGX Rubin NVL8 — Which Do I Need?",
    "NVL72 is the rack-scale flagship — 72 GPUs and 36 Vera CPUs unified in one rack — for frontier training and serving trillion-parameter models. NVL8 is an 8-GPU server with an Intel Xeon 6 host for enterprises that want Rubin-class compute without a full NVL72 deployment."
  ],
  [
    "Which Workloads Make Sense On Vera Rubin?",
    "Trillion-parameter MoE training, agentic AI inference, million-token context windows, high-throughput generative AI and scientific computing. For models under about 70B parameters, H200 or Blackwell GPUs are often more economical; Rubin's advantage grows above about 200B."
  ],
  [
    "When Will Vera Rubin Be Available, And How Is It Priced?",
    "NVIDIA put Vera Rubin into production in Q1 2026, with partner availability from H2 2026. XcellHost is taking early-access reservations now; pricing is quoted per workload as GPU-as-a-Service, reserved capacity or dedicated clusters, billed in INR with GST."
  ],
  [
    "What Power And Cooling Does Vera Rubin Need?",
    "An NVL72 rack draws about 227 kW and requires direct liquid cooling; NVL8 servers are also liquid cooled. XcellHost confirms the hosting facility and cooling design for your deployment during scoping."
  ],
  [
    "Can You Build Multi-Rack Clusters?",
    "Yes. Deployments can scale from NVL8 servers or a single NVL72 rack to multi-rack clusters using Quantum-X800 InfiniBand for training or Spectrum-X Ethernet for inference."
  ],
  [
    "What Software Is Supported?",
    "PyTorch, TensorFlow, JAX, CUDA 12+, TensorRT-LLM, Triton, RAPIDS, vLLM, NVIDIA AI Enterprise and NIM microservices — installed and validated before handover."
  ],
  [
    "Can I Start On H200 Now And Move To Rubin Later?",
    "Yes. Many teams train and serve on XcellHost H200 or H100 today and move workloads to Rubin capacity when it is delivered — the CUDA software stack carries over."
  ]
];

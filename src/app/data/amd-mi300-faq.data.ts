// FAQs from the supplied AMD MI300X document.
export const AMD_MI300_FAQS: [string, string][] = [
  [
    "What is XcellHost's AMD MI300X GPU rental?",
    "A managed rental of servers with AMD Instinct MI300X GPUs, from one GPU to a full 8-GPU node, set up with ROCm and your frameworks and operated 24×7 by XcellHost from Mumbai. You pay monthly in rupees with GST. MI300X is sourced on request, so availability and price are confirmed in your quotation."
  ],
  [
    "What are the MI300X's main specifications?",
    "Per AMD: 192 GB HBM3 with up to 5.3 TB/s peak bandwidth, 304 compute units and 1,216 matrix cores on the CDNA 3 architecture, 256 MB Infinity Cache, 1,307.4 TFLOPS dense FP16/BF16 and 2,614.9 TFLOPS dense FP8, seven 128 GB/s Infinity Fabric links, PCIe Gen 5 x16 and a 750 W maximum board power."
  ],
  [
    "Which workloads suit the MI300X best?",
    "Memory-bound work: serving large language models, long-context inference, fine-tuning larger models, multi-GPU training and FP64 HPC. If your model fits comfortably on a smaller GPU, an NVIDIA L4 or RTX PRO 6000 may cost less to run."
  ],
  [
    "How does the MI300X compare with NVIDIA H200 and H100?",
    "On published specs, MI300X has more memory (192 GB against 141 GB on H200 and 80 GB on H100) and more bandwidth (5.3 TB/s against 4.8 and 3.35 TB/s). Dense FP16 and FP8 peaks are also higher. NVIDIA's CUDA ecosystem is wider, so code built around CUDA-only libraries may run better on H200. Use the spec comparer above and ask us for a test run."
  ],
  [
    "Why is there no price on this page?",
    "Every GPU configuration is priced on quote. The rate depends on GPU count, term, storage, network, access model, how much is managed and current MI300X supply. Use the configurator and XcellHost replies with a rupee quotation, GST shown separately."
  ],
  [
    "Can I rent MI300X for a short project?",
    "Yes. On-demand capacity is billed monthly, and 1-, 6- and 12-month reservations are available, usually at a lower monthly rate for longer terms. Minimum terms and notice periods are stated in the quotation."
  ],
  [
    "Is MI300X always available?",
    "No. MI300X is not part of XcellHost's standard line-up of NVIDIA L4, RTX PRO 6000 and H200, so we source it on request. We confirm availability and a delivery date before you commit, and can offer H200 if MI300X can't be delivered in time."
  ],
  [
    "Will my PyTorch or CUDA code run on ROCm?",
    "PyTorch, TensorFlow, JAX, ONNX Runtime and vLLM have ROCm builds, so most model code runs with little or no change. Custom CUDA kernels need porting with HIP. We test your stack on the node before go-live and tell you what needs changing."
  ],
  [
    "What support and guarantees are included?",
    "24×7 monitoring and support from XcellHost's Mumbai NOC and SOC by phone, WhatsApp and email, plus XcellHost's 99.95% infrastructure uptime SLA as set out in your contract. Hardware faults are handled by our team, with replacement terms stated in the quotation."
  ],
  [
    "Does our data stay in India?",
    "Yes. The node is operated from Mumbai, and your data, prompts, outputs, weights and logs stay on infrastructure XcellHost runs in India. That helps you meet DPDP Act and CERT-In requirements, though your own processes still matter."
  ],
  [
    "How do I get started?",
    "Configure a node on this page and request a quotation, book a sales call, or WhatsApp +91 86570 32540. We confirm availability, agree the configuration, provision and test the node, then hand it over with access."
  ],
  [
    "Why choose MI300X over other GPUs?",
    "Choose MI300X when GPU memory is your limit: it lets large models run on fewer GPUs, leaves room for long context, and runs on an open software stack. Choose H200 when your code depends on CUDA-only tools, and L4 or RTX PRO 6000 when your models are smaller."
  ]
];

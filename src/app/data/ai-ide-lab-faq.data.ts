// FAQs from the supplied AI IDE Lab document.
export const AI_IDE_LAB_FAQS: [string, string][] = [
  [
    "What is AI IDE Lab as a Service?",
    "A managed set of browser-based development workspaces for AI and data science. Each user gets JupyterLab or VS Code in the browser with PyTorch, TensorFlow, CUDA and common libraries preinstalled, persistent storage and the compute they need — CPU, high-memory or an NVIDIA GPU. XcellHost hosts and runs it."
  ],
  [
    "Do learners need to install anything?",
    "No. A current web browser is enough. Workspaces run in our data centre, so a basic laptop or Chromebook works. VS Code desktop users can also connect to their workspace over a secure tunnel if you enable it*."
  ],
  [
    "Which frameworks and CUDA versions are included?",
    "Standard images include Python, PyTorch, TensorFlow/Keras, fast.ai, scikit-learn, pandas and common Hugging Face libraries, with a recent CUDA and cuDNN release matched to the framework versions. We can pin older versions for a course and build custom images on request."
  ],
  [
    "Which GPUs can a workspace use, and what do they cost?",
    "NVIDIA L4 (24 GB), RTX PRO 6000 Blackwell Server Edition (96 GB) and H200 (141 GB), as a full GPU or — on RTX PRO 6000 and H200 — an isolated MIG slice. GPU configurations are priced on quote, based on GPU model, count and hours; we do not publish GPU prices."
  ],
  [
    "What happens to my work when a workspace shuts down?",
    "Notebooks, code and data in your home folder sit on a persistent volume and stay there. Idle shutdown stops the compute — and releases the GPU — after the idle time you set, typically 15–60 minutes. Restarting brings back the same files; running variables in memory are lost, so save checkpoints."
  ],
  [
    "How do team spaces and quotas work?",
    "Admins create spaces for a team or course, attach shared datasets (read-only or read-write) and set per-user limits for CPU, GPU hours and storage. Users see their remaining quota; admins get a usage report each month."
  ],
  [
    "Can we use Git and our model registry?",
    "Yes. Git is built into JupyterLab and VS Code, and workspaces can reach your Git hosting over HTTPS or SSH. Images can include the client for your experiment tracker or model registry, such as MLflow*, so runs and models are logged where your team already looks."
  ],
  [
    "How is access secured?",
    "Sign-in through your identity provider using SAML 2.0 or OpenID Connect, with MFA. Roles separate admins, faculty and learners; each workspace is isolated in its own container with its own volume; traffic is encrypted in transit and access is logged."
  ],
  [
    "Where is our data stored?",
    "In XcellHost's Mumbai Tier IV data centre and/or Indian partner data centres*. Workspaces, volumes and backups stay in India unless you ask otherwise, which helps with the DPDP Act and CERT-In log-retention directions."
  ],
  [
    "How do I size a lab for a class?",
    "Use the lab sizing tool above: learners, sessions, hours, weeks and the share of work on GPU give you CPU and GPU hours, peak workspaces and GPUs at peak. Most introductory courses need CPU seats plus a small GPU pool for deep-learning weeks."
  ],
  [
    "Can students and staff also get AI training?",
    "Yes. Pair the lab with AI training for educators from ₹9,999 per seat*, live online AI training at ₹14,999 per seat* or the integrated AI programme, all excl. GST."
  ],
  [
    "What is the uptime commitment and how do we leave?",
    "The platform is covered by XcellHost's 99.95% uptime SLA and supported 24×7. On exit we export notebooks, data and image definitions on request, then delete volumes and backups and confirm in writing."
  ]
];

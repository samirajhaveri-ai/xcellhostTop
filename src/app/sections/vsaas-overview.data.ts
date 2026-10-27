// Content and detection previews from the supplied VSaaS HTML.
export const VSAAS_ANALYTICS = [
  {
    "title": "Business efficiency",
    "description": "Insights from your existing cameras.",
    "features": [
      "People counting",
      "Missing staff",
      "Queue management",
      "Heatmaps"
    ],
    "position": [
      30,
      40,
      18,
      46
    ],
    "label": "COUNT 214",
    "camera": "Store entry",
    "color": "#22C55E"
  },
  {
    "title": "Safety & hazard",
    "description": "Real-time hazard detection with automated alerts.",
    "features": [
      "PPE / safety-kit detection",
      "Smoke & fire detection",
      "Hard-hat detection"
    ],
    "position": [
      42,
      30,
      16,
      52
    ],
    "label": "PPE KIT NOT DETECTED",
    "camera": "Warehouse",
    "color": "#F43F5E"
  },
  {
    "title": "Investigation",
    "description": "Find people, vehicles and events in seconds.",
    "features": [
      "Person of interest",
      "Vehicle of interest",
      "Number-plate recognition (ANPR)",
      "Face recognition",
      "Area & colour search"
    ],
    "position": [
      56,
      48,
      30,
      26
    ],
    "label": "MH 01 AB 2345",
    "camera": "Main gate",
    "color": "#FBBF24"
  },
  {
    "title": "Security",
    "description": "Detect, deter and respond to threats.",
    "features": [
      "Intrusion detection",
      "Line crossing",
      "Double line crossing",
      "Loitering",
      "Overcrowding"
    ],
    "position": [
      22,
      34,
      14,
      50
    ],
    "label": "INTRUSION · ZONE B",
    "camera": "Perimeter",
    "color": "#F43F5E"
  },
  {
    "title": "Agentic AI",
    "description": "Learns and adapts — no rigid rules to maintain.",
    "features": [
      "Context-aware decisions",
      "Self-learning models",
      "Agentic bot calling",
      "AI root-cause reports"
    ],
    "position": [
      46,
      26,
      18,
      48
    ],
    "label": "AGENT · CALLING GUARD",
    "camera": "Command centre",
    "color": "#FBBF24"
  },
  {
    "title": "Vision AI",
    "description": "Custom models trained on your own data.",
    "features": [
      "Custom detections",
      "Tailored tracking",
      "Your environment & use case",
      "Beyond off-the-shelf accuracy"
    ],
    "position": [
      35,
      28,
      24,
      50
    ],
    "label": "CUSTOM MODEL · 98%",
    "camera": "Production line",
    "color": "#FBBF24"
  }
] as const;

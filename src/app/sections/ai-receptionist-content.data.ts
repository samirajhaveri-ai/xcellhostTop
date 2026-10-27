import { Faq } from '../data/models';

// Demo conversations and prices from the supplied ai-receptionist.html.
export const RECEPTIONIST_DEMOS = [
  {
    "key": "clinic",
    "title": "Dental clinic",
    "rows": [
      [
        "ai",
        "Good morning, Smile Care Dental — this is Asha. How can I help?"
      ],
      [
        "c",
        "Hi, I'd like a cleaning appointment this week."
      ],
      [
        "ai",
        "Of course. I have Thursday at 11:00 or Friday at 4:30. Which suits you?"
      ],
      [
        "c",
        "Friday at 4:30, please."
      ],
      [
        "ai",
        "Done — Friday 4:30 pm is booked. You'll get an SMS confirmation. Anything else?"
      ],
      [
        "sys",
        "Appointment added to calendar · summary emailed to reception"
      ]
    ]
  },
  {
    "key": "ca",
    "title": "CA / accounts firm",
    "rows": [
      [
        "ai",
        "Thank you for calling Mehta & Associates. How may I help you?"
      ],
      [
        "c",
        "I need to talk to someone about my GST filing."
      ],
      [
        "ai",
        "I'll connect you with our GST team. May I have your name and GSTIN first?"
      ],
      [
        "c",
        "Rahul Shah, GSTIN 27AAB…"
      ],
      [
        "ai",
        "Thanks, Rahul. Transferring you to the GST desk now."
      ],
      [
        "sys",
        "Call routed to GST team · caller details logged"
      ]
    ]
  },
  {
    "key": "shop",
    "title": "Retail store",
    "rows": [
      [
        "ai",
        "Hello, Urban Threads. How can I help today?"
      ],
      [
        "c",
        "What time do you close on Sunday?"
      ],
      [
        "ai",
        "We're open 11 am to 8 pm on Sundays at our Andheri West store."
      ],
      [
        "c",
        "Great, and do you have parking?"
      ],
      [
        "ai",
        "Yes — free parking is available in the building basement."
      ],
      [
        "sys",
        "Answered from website · summary emailed"
      ]
    ]
  }
] as const;

export const RECEPTIONIST_PLANS = [
  {
    "key": "lite",
    "name": "Lite",
    "includedCalls": 30,
    "extraCallPrice": 39,
    "price": 2499
  },
  {
    "key": "plus",
    "name": "Plus",
    "includedCalls": 100,
    "extraCallPrice": 29,
    "price": 4499
  },
  {
    "key": "unl",
    "name": "Unlimited",
    "includedCalls": 0,
    "extraCallPrice": 0,
    "price": 6999
  }
] as const;

/** The original AI Receptionist benefits, rendered with the shared page cards. */
export const RECEPTIONIST_WHY = [
  { icon: 'M6 4h12M6 9h12M9 4c6 0 6 10 0 10H6l9 7', title: 'INR billing + GST invoice', body: 'Pay in rupees with GST input credit — no international card.' },
  { icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18', title: 'Built for India', body: 'Indian numbers, Indian accents and timezones, with data hosted in India.' },
  { icon: 'M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6zM9 12l2 2 4-4', title: 'Privacy first', body: 'Calls and summaries handled under DPDP-aligned processes, with recording controls.' },
  { icon: 'M4 14v-2a8 8 0 0 1 16 0v2M3 14h4v6H3zM17 14h4v6h-4z', title: 'Human help 24×7', body: 'XcellHost engineers help set up, tune and support your receptionist.' },
  { icon: 'm12 3 9 5-9 5-9-5zM3 13l9 5 9-5', title: 'Part of XcellHost', body: 'Pair it with business email, websites, CRM and WhatsApp automation from one provider.' },
  { icon: 'm5 12 5 5 9-10', title: 'No lock-in', body: 'Monthly plans you can cancel anytime; annual plans save 20%.' },
];

export const RECEPTIONIST_FAQS: Faq[] = [
  ['What is an AI receptionist?', 'An AI receptionist answers phone calls in a natural voice, handles common questions, takes messages and routes callers to the right team. XcellHost also supports appointment booking and sends an email summary after each call.'],
  ['Can it answer calls outside office hours?', 'Yes. AI Receptionist answers calls 24×7, including weekends and holidays, using your business greeting and instructions.'],
  ['Can it book appointments?', 'Calendar booking is included on Plus and Unlimited. Connect your calendar so the receptionist can check availability and book, move or confirm appointments during a call.'],
  ['Can it transfer a call to my team?', 'Yes. Configure call forwarding and department routing so sales, support or accounts enquiries reach the right person or number.'],
  ['How does it learn about my business?', 'It uses your website and the business details you provide to answer questions about services, prices, opening hours and location. Review the information and try sample calls during setup.'],
  ['Will I receive a summary after each call?', 'Every plan includes an email summary with caller details, the reason for calling and any messages or actions agreed during the conversation.'],
  ['Which plans are available?', 'Lite starts at ₹2,499/month with 30 included calls, Plus at ₹4,499/month with 100 calls, and Unlimited at ₹6,999/month. Lite and Plus additional calls cost ₹39 and ₹29 respectively. Prices exclude 18% GST.'],
  ['Does it work with my CRM and automation tools?', 'The Unlimited plan supports API integrations with CRM, helpdesk and automation tools. Calendar booking is available on Plus and Unlimited. Confirm your integration requirements with the team during setup.'],
  ['Can I customise the greeting and voice?', 'Yes. Use your business name and greeting, choose a voice and tone, and configure instructions for common questions, messages and call routing.'],
  ['Can I control call recording and privacy settings?', 'Recording controls and the handling of calls and summaries are reviewed during onboarding. Discuss consent, access and your business privacy requirements with the team before enabling recording.'],
  ['Is there a free trial or annual discount?', 'A 1-month free trial is available. Monthly plans can be cancelled anytime, and annual billing saves 20%. Use the plan calculator above to compare pricing for your expected call volume.'],
];

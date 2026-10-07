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

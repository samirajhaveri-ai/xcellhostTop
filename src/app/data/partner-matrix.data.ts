// Visible rows transcribed from Channel Partner Contact Matrix.xlsx, Sheet1.
export interface PartnerContact {
  readonly name: string;
  readonly designation: string;
  readonly email: string;
  readonly officePhone: string;
  readonly city: string;
  readonly mobile: string;
  readonly purpose: string;
}

export interface PartnerTeam {
  readonly id: string;
  readonly name: string;
  readonly icon: string;
  readonly description: string;
  readonly contacts: readonly PartnerContact[];
}

export const PARTNER_TEAMS: readonly PartnerTeam[] = [
  {
    id: 'sales',
    name: 'Channel Sales',
    icon: 'handshake',
    description: 'Field and regional sales contacts for channel partners and end-customer opportunities.',
    contacts: [
      { name: 'Mr. Syed Rashed', designation: 'Cloud Sales Advisor - West', email: 'rasheds@xcellhost.cloud', officePhone: '', city: 'Aurangabad', mobile: '+918433989914', purpose: 'End customers' },
      { name: 'Mr. Ajay Gupta', designation: 'Cloud Sales Advisor - West', email: 'ajayg@xcellhost.cloud', officePhone: '', city: 'Mumbai', mobile: '+918591857830', purpose: 'Field sales' },
    ],
  },
  {
    id: 'presales',
    name: 'Pre-Sales',
    icon: 'lightbulb',
    description: 'Solution guidance for cloud security, productivity, email and partner opportunities.',
    contacts: [
      { name: 'Mr. Vijay Ram Das', designation: 'Technical Support Executive - L3', email: 'vijayramd@xcellhost.cloud', officePhone: '', city: 'Kolkata', mobile: '+917980760594', purpose: 'Security services pre-sales' },
      { name: 'Mr. Mohammad Talha', designation: 'Cloud Productivity Pre-Sales Advisor', email: 'mohammadt@xcellhost.cloud', officePhone: '', city: 'Aurangabad', mobile: '+917028202721', purpose: 'Email services pre-sales' },
      { name: 'Mr. Amit Yadav', designation: 'Cloud Security Pre-Sales Advisor', email: 'amity@xcellhost.cloud', officePhone: '', city: 'Mumbai', mobile: '+917084507734', purpose: 'Support issues' },
      { name: 'Mr. Rizwan Shaikh', designation: 'Service Delivery Manager', email: 'rizwans@xcellhost.cloud', officePhone: '+912267111555', city: 'Mumbai', mobile: '+918828127278', purpose: 'Pre-sales' },
    ],
  },
  {
    id: 'support',
    name: 'Partner Support',
    icon: 'support_agent',
    description: 'Technical assistance and issue coordination for active partner services.',
    contacts: [
      { name: 'Mr. Santosh Behra', designation: 'Technical Support Executive - L2', email: 'santoshb@xcellhost.cloud', officePhone: '', city: 'Mumbai', mobile: '+919556539937', purpose: 'Support issues' },
    ],
  },
  {
    id: 'finance-admin',
    name: 'Finance & Admin',
    icon: 'receipt_long',
    description: 'Billing, accounts payable and vendor administration contacts.',
    contacts: [
      { name: 'Mr. Abhishek Pandey', designation: 'Billing Manager', email: 'abhishekp@xcellhost.cloud', officePhone: '+912267111521', city: 'Mumbai', mobile: '+919004660960', purpose: 'Billing' },
      { name: 'Mr. Sanjay Jade', designation: 'Accounts Payable', email: 'sanjayj@xcellhost.cloud', officePhone: '+912267111520', city: 'Mumbai', mobile: '+918657475375', purpose: 'Vendors only' },
      { name: 'Mrs. Mayuri Shinde', designation: 'General Admin', email: 'mayuris@xcellhost.cloud', officePhone: '+912267111555', city: 'Mumbai', mobile: '+918657475374', purpose: 'Vendors only' },
    ],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    icon: 'workspace_premium',
    description: 'Executive contact for strategic channel sales and partnership direction.',
    contacts: [
      { name: 'Mr. Samir Jhaveri', designation: 'Managing Director', email: 'samir@xcellhost.cloud', officePhone: '+912267111555', city: 'Mumbai', mobile: '+919867256975', purpose: 'Strategic sales' },
    ],
  },
];

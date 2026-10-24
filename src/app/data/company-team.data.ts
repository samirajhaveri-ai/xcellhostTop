/** Shared About Us team directory, also used for blog author photos and roles. */
export interface CompanyTeamMember {
  readonly initials: string;
  readonly name: string;
  readonly role: string;
  readonly image: string;
}

export const COMPANY_TEAM: Readonly<Record<'managementTeam' | 'advisoryTeam' | 'salesTeam' | 'marketing' | 'AITeams' | 'developers' | 'accountantTeam' | 'graphicDesignerTeam' | 'adminTeam' | 'technicalSupportTeam', readonly CompanyTeamMember[]>> = {
  managementTeam: [
     { initials: 'YT', name: 'Yogendra Trivedi', role: 'Managaging Director', image: '/assets/images/Yogesh Trivedi.png' },
    { initials: 'YJ', name: 'Yogendra Jagger', role: 'Regional Director - EMEA Middle East & Africa', image: '/assets/images/TEAMS PHOTO/Yogendra.png' },
    { initials: '', name: '', role: '', image: '/assets/images/WhatsApp Image 2026-10-23 at 4.17.01 PM.jpeg' },
    { initials: 'AN', name: 'Abhishek Nimbalkar', role: 'Chief AI Officer', image: '/assets/images/TEAMS PHOTO/Abhishek.png' },
    { initials: 'PN', name: 'Prashant N.V', role: 'Service Delivery Director', image: '/assets/images/TEAMS PHOTO/Prashant.png' },
    { initials: 'T', name: 'AI Management Intelligence Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    
  ],

  advisoryTeam: [
    { initials: 'SJ', name: 'CA Suraj Jain', role: 'Financial Advisor', image: '/assets/images/TEAMS PHOTO/Suraj JAin.png' },
    { initials: 'SM', name: 'CA Surendra Mehra', role: 'Chartered Accountant', image: '/assets/images/TEAMS PHOTO/Mehara.png' },
    { initials: 'UJ', name: 'Upendra Joshi ', role: 'International Alliances', image: '/assets/images/TEAMS PHOTO/Upendra.png' },
    { initials: 'CP', name: 'Christopher Pinto', role: 'Sales Consultant', image: '/assets/images/TEAMS PHOTO/cristopher.png' },
  ],

  salesTeam: [
    { initials: 'RS', name: 'Rahul Sanghavi', role: 'Cloud Sales Head', image: '/assets/images/TEAMS PHOTO/Rahul Sanghavi.png' },
    { initials: 'AP', name: 'Abhishek Pandey', role: 'Cloud Sales Manager', image: '/assets/images/TEAMS PHOTO/Abhishek Pandey.png' },
    { initials: 'SK', name: 'Sushil Kumar', role: 'Cloud-PreSales Manager', image: 'assets/images/TEAMS PHOTO/Sudhil.png' },
    { initials: 'RS', name: 'Rashed Syed', role: 'Cloud Advisor - PreSales', image: '/assets/images/TEAMS PHOTO/Rashed.png' },
    { initials: 'MG', name: 'Mihir Ambokar ', role: 'Cloud Advisor - PreSales', image: '/assets/images/TEAMS PHOTO/Mihir.png' },
    { initials: 'AG', name: 'Ajay Gupta', role: 'Cloud Advisor - PreSales', image: '/assets/images/TEAMS PHOTO/Ajay Gupta.png' },
    
    { initials: 'AG', name: 'AI SDR Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'AG', name: 'AI Lead Qualification Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI RFP/RFQ Response Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Proposal Generator Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Competitor Intelligence Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ],

  marketing: [
    { initials: 'AN', name: 'Aryan Nair', role: 'Social Media Manager', image: '/assets/images/TEAMS PHOTO/Aryan.png' },
    { initials: 'RS', name: 'Ravi Sharma', role: 'SEO+GTM Engineer', image: '/assets/images/TEAMS PHOTO/Ravi.png' },
    { initials: 'OM', name: 'Omkarnath Mishra', role: 'Video Editor', image: '/assets/images/TEAMS PHOTO/Omkarnath Mishra.jpeg' },
    { initials: 'RS', name: 'AI SEO/AEO/GEO Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'RS', name: 'AI Social Media Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'RS', name: 'AI Conversation Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ],

  AITeams: [
    { initials: 'AT', name: 'Advet Tambe', role: 'AI Engineer', image: '/assets/images/TEAMS PHOTO/Advet.png' },
    { initials: 'VC', name: 'Vishal Chaubey', role: 'Automation Engineer', image: '/assets/images/TEAMS PHOTO/vishal.png' },
    { initials: 'VC', name: 'AI Market Research Specialist', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Content Strategy& Copilot Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Paid Media& Ad Performance Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ],

  developers: [
    { initials: 'SV', name: 'Sujeet Vishwakarma', role: 'Senior Developer', image: '/assets/images/TEAMS PHOTO/Sujeet Vishwakarma.png' },
    { initials: 'VG', name: 'Vaishnavi Ghaghare', role: 'Web Developer', image: '/assets/images/TEAMS PHOTO/Vaishnavi Ghaghare.png' },
    { initials: 'DV', name: 'Divya Varma', role: 'Web Developer', image: '/assets/images/TEAMS PHOTO/Divya Varma.png' },
    { initials: 'VT', name: 'Vibha Tiwari', role: 'Web Developer', image: '/assets/images/TEAMS PHOTO/Vibha Tiwari.png' },
    { initials: 'AS', name: 'Adarsh Singh', role: 'Web Developer', image: '/assets/images/TEAMS PHOTO/Adarsh Singh.png' },
  ],

  accountantTeam: [
    { initials: 'SJ', name: 'Sanjay Jade', role: 'Account Manager', image: '/assets/images/TEAMS PHOTO/Sanjay Jade.png' },
    { initials: 'RB', name: 'Rutuja Bhoga', role: 'Account Assistance', image: '/assets/images/TEAMS PHOTO/Rutuja Bhoga.png' },
    { initials: 'RB', name: 'AI Cashflow Forecast Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'RB', name: 'AI Payment Followup Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ],

  graphicDesignerTeam: [
    { initials: 'SP', name: 'Shantaram Palkar', role:'Graphic Designer Manager', image: '/assets/images/TEAMS PHOTO/Shantaram Palkar.png' },
    { initials: 'NS', name: 'Nishant Shinde', role: 'Graphic Designer L2', image: '/assets/images/TEAMS PHOTO/Nishant Shinde.png' },
   { initials: 'SV', name: 'Shakshita Vangade', role: 'Graphic Designer L1', image: '/assets/images/TEAMS PHOTO/Shakshita Vangade.png' },
     { initials: 'NS', name: 'AI Generative Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ],

  adminTeam: [
    { initials: 'MS', name: 'Mayuri Shinde', role: 'Admin Manager', image: '/assets/images/TEAMS PHOTO/Mayuri Shinde.png' },
      { initials: 'T', name: 'Tejas Nashiba', role: 'Admin Exceutive ', image: 'assets/images/TEAMS PHOTO/Tejas Nashiba.png' },
    { initials: 'T', name: 'AI Command Center Orchestrator', role: '', image: '/assets/images/Robot-enhanced.png' },
  ],

  technicalSupportTeam: [
    { initials: 'RS', name: 'Rizwan Shaikh', role: 'Technical Support Manager', image: '/assets/images/TEAMS PHOTO/Rizwan.png' },
    { initials: 'AY', name: 'Amit Yadav', role: 'Technical Support Executive- L3', image: '/assets/images/TEAMS PHOTO/Amit Yadav.png' },
    { initials: 'SB', name: 'Santosh kumar Behera', role: 'Technical Support Executive - L2', image: '/assets/images/TEAMS PHOTO/Santosh.png' },
     { initials: 'TM', name: 'Talha Mohammad', role: 'Technical Support Executive-L2', image: '/assets/images/TEAMS PHOTO/Talha.png' },
     { initials: 'TM', name: 'Manisha Gupta', role: 'Technical Support Executive-L2', image: '/assets/images/TEAMS PHOTO/Manisha Gupta.png' },
    { initials: 'PA', name: 'Purva Angre', role: 'Technical Support Executive-L1', image: '/assets/images/TEAMS PHOTO/Purva.png' },
    { initials: 'TM', name: 'AI Customer Support-Service', role: '', image: '/assets/images/Robot-enhanced.png' }
  ],
};

/** Excludes unnamed entries and AI agents from the human author directory. */
export const HUMAN_TEAM_MEMBERS = Object.values(COMPANY_TEAM).flat().filter(member =>
  member.name.trim() && !member.name.startsWith('AI ') && !member.image.includes('Robot-enhanced')
);

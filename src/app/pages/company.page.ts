import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';
import { COMPANY_PAGES } from '../data/company.data';
import { WORLD_MAP_HTML } from '../data/site.data';
import { HeroNetDirective } from '../sections/product';
import { ResellerProgramContentComponent } from '../sections/reseller-program-content.component';
import { TeamStructureComponent } from '../sections/team-structure.component';
import { WhyXcellhostContentComponent } from '../sections/why-xcellhost-content.component';
import { ZohoJobListingComponent } from '../sections/zoho-job-listing.component';

@Component({
  selector: 'xh-company-page',
  standalone: true,
  imports: [RouterLink, HeroNetDirective, ResellerProgramContentComponent, TeamStructureComponent, WhyXcellhostContentComponent, ZohoJobListingComponent],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './company.page.html',
  styleUrl: './company.page.css',
})
export class CompanyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? this.route.snapshot.data['pageSlug'] ?? '')),
    { initialValue: '' },
  );

  readonly page = computed(() => COMPANY_PAGES[this.slug()] ?? null);
  readonly worldMap: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(WORLD_MAP_HTML);

  companyAskAiHref(platform: 'chatgpt' | 'perplexity' | 'claude' | 'google'): string {
    const prompt = encodeURIComponent('Tell me about XcellHost certifications, including ISO 27001 and ISO 20000-1, and what they mean for customers.');
    if (platform === 'chatgpt') return `https://chatgpt.com/?q=${prompt}`;
    if (platform === 'perplexity') return `https://www.perplexity.ai/search/new?q=${prompt}`;
    if (platform === 'claude') return `https://claude.ai/new?q=${prompt}`;
    return 'https://gemini.google.com/app';
  }

  readonly careerLifeCards = [
    { title: 'Everyday at XcellHost', caption: 'A look inside our everyday workspace.', image: '/assets/images/career-workplace.webp', alt: 'XcellHost colleagues working at office workstations' },
    { title: 'Working together', caption: 'Shared ideas and teamwork in action.', image: '/assets/images/career-teamwork.webp', alt: 'XcellHost team working alongside one another' },
    { title: 'Connecting with our community', caption: 'Representing XcellHost and building connections.', image: '/assets/images/career-event.jpg', alt: 'Team members at the XcellHost managed cloud exhibition stand' },
    { title: 'Life in our office', caption: 'Moments of collaboration from around our office.', image: '/assets/images/career-office.jpg', alt: 'Photo collage of XcellHost office meetings and workspaces' },
  ] as const;
  readonly careerValues = [
    { icon: 'volunteer_activism', title: 'Empathy', subtitle: 'Humanity', body: 'We listen to colleagues and customers, take time to understand their needs and treat people with kindness. Care and respect help everyone feel they belong.' },
    { icon: 'verified_user', title: 'Integrity', subtitle: 'Honesty', body: 'We say what we mean and follow through on our commitments. Fair decisions, clear expectations and accountability help us earn trust every day.' },
    { icon: 'forum', title: 'Transparency', subtitle: 'Openness', body: 'We share information, communicate clearly and welcome questions. Every voice matters, and feedback helps us learn and improve together.' },
    { icon: 'handshake', title: 'Dedication', subtitle: 'Commitment', body: 'We take ownership of our work and keep learning. We work through challenges together and focus on dependable outcomes for customers and colleagues.' },
  ] as const;
  readonly activeCareerSlide = signal(0);
  readonly careerStories = [
    { title: 'Growing through new challenges', text: 'Every new challenge is a chance to learn, take ownership and build confidence with support from the team.', name: 'Employee story', topic: 'Professional growth' },
    { title: 'Finding strength in teamwork', text: 'Strong teamwork helps us solve difficult problems, share knowledge and keep moving forward together.', name: 'Employee story', topic: 'Teamwork' },
    { title: 'Turning ideas into impact', text: 'Ideas are welcomed here. We explore improvements, put them into practice and focus on meaningful customer impact.', name: 'Employee story', topic: 'Ideas and innovation' },
    { title: 'Learning something new', text: 'Learning happens through questions, practice and conversations with others. Use this space for an employee’s personal reflection on a skill they developed, a colleague who helped them and how that experience shaped their work.', name: 'Employee story', topic: 'Continuous learning' },
  ] as const;

  readonly careerStoryCards = computed(() => {
    const employees = [this.developers[0], this.developers[1], this.graphicDesignerTeam[1]];
    return this.careerStories.slice(0, 3).map((story, index) => ({ story, employee: employees[index] }));
  });

  readonly activeCareerStory = signal(0);
  readonly currentCareerStory = computed(() => this.careerStories[this.activeCareerStory()]);
  readonly currentCareerStoryEmployee = computed(() =>
    [this.developers[1], this.developers[2], this.graphicDesignerTeam[1], this.technicalSupportTeam[1]][this.activeCareerStory()],
  );
  moveCareerStory(direction: number): void {
    this.activeCareerStory.update(index => (index + direction + this.careerStories.length) % this.careerStories.length);
  }

  readonly careerCareTabs = [
    { id: 'learning', label: 'Learning & Development', intro: 'Build your skills, share your knowledge and explore the next step in your career.', cards: [
      { icon: 'explore', title: 'Leadership Development', body: 'Grow the communication, planning and people skills that help teams succeed.' },
      { icon: 'menu_book', title: 'Continuous Learning', body: 'Keep exploring cloud platforms, technical concepts and professional skills.' },
      { icon: 'groups', title: 'Starting Your Career', body: 'Build confidence as you move from learning concepts to solving workplace challenges.' },
      { icon: 'forum', title: 'Learning Conversations', body: 'Discuss your interests, ask questions and learn from the experience of colleagues.' },
      { icon: 'smart_toy', title: 'AI & Technical Skills', body: 'Explore evolving tools and practical approaches to technology.' },
      { icon: 'lightbulb', title: 'Ideas & Innovation', body: 'Bring fresh perspectives to everyday problems and share what you discover.' },
      { icon: 'school', title: 'Professional Growth', body: 'Identify the knowledge and capabilities that support your next career step.' },
      { icon: 'track_changes', title: 'Personal Development', body: 'Build habits that support focus, collaboration and meaningful progress.' },
      { icon: 'star', title: 'Growing Together', body: 'Learn through shared challenges and contribute to the success of your team.' },
    ] },
    { id: 'rewards', label: 'Rewards & Benefits', intro: 'Explore how your contribution, career goals and role fit together at XcellHost.', cards: [
      { icon: 'trending_up', title: 'Performance & Progress', body: 'Discuss role expectations, goals and how your contribution will be evaluated.' },
      { icon: 'workspace_premium', title: 'Recognition & Growth', body: 'Bring your achievements and career ambitions into conversations with your team.' },
      { icon: 'redeem', title: 'Your Benefits Package', body: 'Our careers team can explain the benefits and eligibility that apply to your role.' },
    ] },
    { id: 'health', label: 'Health & Security', intro: 'Your wellbeing matters. Talk with our careers team about the support available for your role.', cards: [
      { icon: 'health_and_safety', title: 'Health Coverage', body: 'Ask about available health benefits, coverage and eligibility during the hiring process.' },
      { icon: 'family_restroom', title: 'Family Support', body: 'Discuss family-related needs and the policies relevant to your circumstances.' },
      { icon: 'child_care', title: 'Parenthood & Leave', body: 'Get clarity on applicable parental leave and support as your family grows.' },
      { icon: 'favorite', title: 'Everyday Wellbeing', body: 'Make space for conversations about wellbeing and sustainable working habits.' },
      { icon: 'support_agent', title: 'Finding Support', body: 'Connect with the right team to discuss workplace concerns and available assistance.' },
      { icon: 'verified_user', title: 'A Respectful Workplace', body: 'Help build a working environment shaped by care, respect and responsibility.' },
    ] },
  ] as const;
  readonly activeCareerCareTab = signal(0);
  readonly careerCareContent = computed(() => this.careerCareTabs[this.activeCareerCareTab()]);

  onCareerCareKeydown(event: KeyboardEvent, index: number): void {
    let next = index;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % this.careerCareTabs.length; break;
      case 'ArrowLeft': next = (index + this.careerCareTabs.length - 1) % this.careerCareTabs.length; break;
      case 'Home': next = 0; break;
      case 'End': next = this.careerCareTabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    this.activeCareerCareTab.set(next);
    (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }
  readonly visibleCareerLifeCards = computed(() =>
    Array.from({ length: 3 }, (_, offset) =>
      this.careerLifeCards[(this.activeCareerSlide() + offset) % this.careerLifeCards.length],
    ),
  );

  readonly careerCertificationPeriods = [
    'NOV 2025–NOV 2026', 'OCT 2024–OCT 2025', 'NOV 2023–NOV 2024',
    'NOV 2022–NOV 2023', 'OCT 2021–OCT 2022', 'OCT 2020–SEPT 2021',
    'OCT 2019–SEP 2020', 'NOV 2018–OCT 2019',
  ] as const;

  readonly founder = {
    name: 'Dr. Samir Jhaveri',
    role: 'Managing Director, XcellHost Cloud Services Pvt. Ltd.',
    specialties: 'Cloud, cybersecurity, AI and digital marketing',
    summary:
      'A long-time technology leader with over two decades in the industry, guiding XcellHost since 1999 and helping SMBs and enterprises simplify cloud operations.',
    note:
      'Our approach is simple: give customers practical guidance, deliver what was promised and stay accountable after go-live.',
  } as const;

  readonly managementTeam = [
    { initials: 'YJ', name: 'Yogendra Jagger', role: 'Regional Director - EMEA Middle East & Africa', image: '/assets/images/team-yogendra-jagger.png' },
    { initials: 'AN', name: 'Abhishek Nimbalkar', role: 'Chief AI Officer', image: '/assets/images/Abhishek_Nimbalkar.png' },
    { initials: 'PN', name: 'Prashant N.V', role: 'Service Delivery Director', image: '/assets/images/team-prashant-nv.png' },
    { initials: 'T', name: 'AI Management Intelligence Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;

  readonly advisoryTeam = [
    { initials: 'SJ', name: 'CA Suraj Jain', role: 'Financial Advisor', image: '/assets/images/team-suraj-jain.png' },
    { initials: 'SM', name: 'CA Surendra Mehra', role: 'Chartered Accountant', image: '/assets/images/Mehra.png' },
     { initials: 'UJ', name: 'Upendra Joshi ', role: 'Consultant', image: '/assets/images/Upendra.jpg' },
  ] as const;

  readonly salesTeam = [
    { initials: 'AP', name: 'Abhishek Pandey', role: 'Cloud Sales Manager', image: '/assets/images/team-abhishek-pandey.png' },
    { initials: 'SK', name: 'Sushil Kumar', role: 'Cloud-PreSales Manager', image: 'assets/images/Sushil Kumar.jpeg' },
    { initials: 'RS', name: 'Rashed Syed', role: 'Cloud Advisor - PreSales', image: '/assets/images/Rashed Sayed.png' },
    { initials: 'MG', name: 'Mihir Ambokar ', role: 'Cloud Advisor - PreSales', image: '/assets/images/Mihir Ambokar.png' },
    { initials: 'AG', name: 'Ajay Gupta', role: 'Cloud Advisor - PreSales', image: '/assets/images/Ajay Gupta.png' },
    { initials: 'AG', name: 'AI SDR Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'AG', name: 'AI Lead Qualification Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI RFP/RFQ Response Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Proposal Generator Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Competitor Intelligence Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;
  
  readonly marketing = [
    { initials: 'AN', name: 'Aryan Nair', role: 'Social Media Manager', image: '/assets/images/team-aryan-nair.png' },
    { initials: 'RS', name: 'Ravi Sharma', role: 'SEO+GTM Engineer', image: '/assets/images/team-ravi-sharma.png' },
    { initials: 'RS', name: 'AI SEO/AEO/GEO Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'RS', name: 'AI Social Media Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'RS', name: 'AI Conversation Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;

  readonly AITeams = [
    { initials: 'AT', name: 'Advet Tambe', role: 'AI Engineer', image: '/assets/images/team-advet-thambe.jpeg' },
    { initials: 'VC', name: 'Vishal Chaubey', role: 'Automation Engineer', image: '/assets/images/team-vishal-chaubey.png' },
    { initials: 'VC', name: 'AI Market Research Specialist', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Content Strategy& Copilot Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'VC', name: 'AI Paid Media& Ad Performance Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;

  readonly developers: readonly { initials: string; name: string; role: string; image: string }[] = [
    { initials: 'SV', name: 'Sujeet Vishwakarma', role: 'Developer', image: '/assets/images/team-sujeet-vishwakarma.jpeg' },
    { initials: 'VG', name: 'Vaishnavi Ghaghare', role: 'Web Developer', image: '/assets/images/team-vaishnavi-ghaghare.png' },
    { initials: 'DV', name: 'Divya Varma', role: 'Web Developer', image: '/assets/images/team-divya-varma.jpeg' },
    { initials: 'VT', name: 'Vibha Tiwari', role: 'Web Developer', image: '/assets/images/team-vibha-tiwari.png' },
    { initials: 'AS', name: 'Adarsh Singh', role: 'Web Developer', image: '/assets/images/Adarsh Singh.jpeg' },
  ];

  readonly accountantTeam = [
    { initials: 'SJ', name: 'Sanjay Jade', role: 'Account Manager', image: '/assets/images/team-sanjay-jade.png' },
    { initials: 'RB', name: 'Rutuja Bhoga', role: 'Account Assistance', image: '/assets/images/team-rutuja-bhoga.jpeg' },
    { initials: 'RB', name: 'AI Cashflow Forecast Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
    { initials: 'RB', name: 'AI Payment Followup Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;

  readonly graphicDesignerTeam = [
    { initials: 'SP', name: 'Shantaram Palkar', role:'Graphic Manager', image: '/assets/images/team-shantaram-palkar.png' },
    { initials: 'SV', name: 'Shakshita Vangade', role: 'Graphic Designer L1', image: '/assets/images/team-shakshita-vangade.jpeg' },
    { initials: 'NS', name: 'Nishant Shinde', role: 'Graphic Designer L2', image: '/assets/images/team-nishant-shinde.png' },
     { initials: 'NS', name: 'AI Generative Agent', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;

  readonly adminTeam = [
    { initials: 'MS', name: 'Mayuri Shinde', role: 'Admin Manager', image: '/assets/images/team-mayuri-shinde.png' },
      { initials: 'T', name: 'Tejas Nashiba', role: 'Admin ', image: 'assets/images/Tejas photo.jpg' },
    { initials: 'T', name: 'AI Command Center Orchestrator', role: '', image: '/assets/images/Robot-enhanced.png' },
  ] as const;

  readonly technicalSupportTeam = [
    { initials: 'RS', name: 'Rizwan Shaikh', role: 'Technical Manager', image: '/assets/images/team-rizwan-shaikh.png' },
    { initials: 'AY', name: 'Amit Yadav', role: 'Technical L3', image: '/assets/images/Amit Yadav.png' },
    { initials: 'SB', name: 'Santosh kumar Behera', role: 'Technical Support Executive - L2', image: '/assets/images/Santosh Behra.png' },
     { initials: 'TM', name: 'Talha Mohammad', role: 'Technical L2', image: '/assets/images/Talha.png' },
     { initials: 'TM', name: 'Manisha Gupta', role: 'Technical L2', image: '/assets/images/Manisha.png' },
    { initials: 'PA', name: 'Purva Angre', role: 'Technical L1', image: '/assets/images/team-purva-angre.png' },
    { initials: 'SY', name: 'Saurav Yadav', role:  'Cloud Executive', image: '/assets/images/Saurav Yadav.png' },
    { initials: 'TM', name: 'AI Customer Support-Service', role: '', image: '/assets/images/Robot-enhanced.png' }
  ] as const;

  readonly securityTeam = [
    'CISO / Head of Cybersecurity',
    'SOC Manager',
    'SOC Analyst (L1/L2/L3)',
    'SIEM Engineer',
    'XDR / EDR Engineer',
    'Security Engineer',
    'Vulnerability Assessment Engineer',
    'Penetration Tester',
    'Incident Response Analyst',
    'Threat Intelligence Analyst',
    'GRC / Compliance Specialist',
  ].map(name => ({ name, role: '', image: '/assets/images/Robot-enhanced.png' }));

  readonly teamTabs = [
    { id: 'all', label: 'All Team' },
    { id: 'management', label: 'Management' },
    { id: 'technical-support', label: 'Technical Support' },
    { id: 'security', label: 'Security' },
    { id: 'advisory', label: 'Advisory' },
    { id: 'sales', label: 'Sales' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'AITeams', label: 'AI' },
    { id: 'developers', label: 'Developers' },
    { id: 'accountant', label: 'Accounts' },
    { id: 'graphic-designer', label: 'Graphic Designer' },
    { id: 'admin', label: 'Admin' },
  ] as const;
  readonly activeTeamTab = signal<string>('all');
  teamDepartmentLabel(department: string): string {
    return this.teamTabs.find(tab => tab.id === department)?.label ?? department;
  }
  teamDepartmentIcon(department: string): string {
    const icons: Record<string, string> = {
      all: 'groups', management: 'business_center', advisory: 'forum',
      sales: 'trending_up', marketing: 'campaign', AITeams: 'psychology', developers: 'code',
      accountant: 'calculate', 'graphic-designer': 'palette', admin: 'admin_panel_settings',
      'technical-support': 'support_agent', security: 'shield',
    };
    return icons[department] ?? 'groups';
  }
  readonly teamMembers = [
    ...this.managementTeam.map(member => ({ ...member, department: 'management' })),
    ...this.technicalSupportTeam.map(member => ({ ...member, department: 'technical-support' })),
    ...this.securityTeam.map(member => ({ ...member, department: 'security' })),
    ...this.advisoryTeam.map(member => ({ ...member, department: 'advisory' })),
    ...this.salesTeam.map(member => ({ ...member, department: 'sales' })),
    ...this.marketing.map(member => ({ ...member, department: 'marketing' })),
    ...this.AITeams.map(member => ({ ...member, department: 'AITeams' })),
    ...this.developers.map(member => ({ ...member, department: 'developers' })),
    ...this.accountantTeam.map(member => ({ ...member, department: 'accountant' })),
    ...this.graphicDesignerTeam.map(member => ({ ...member, department: 'graphic-designer' })),
    ...this.adminTeam.map(member => ({ ...member, department: 'admin' })),
    
  ];
  readonly visibleTeamMembers = computed(() => this.teamMembers.filter(member =>
    this.activeTeamTab() === 'all' || member.department === this.activeTeamTab(),
  ));

  onTeamTabKeydown(event: KeyboardEvent, index: number): void {
    let next = index;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % this.teamTabs.length; break;
      case 'ArrowLeft': next = (index + this.teamTabs.length - 1) % this.teamTabs.length; break;
      case 'Home': next = 0; break;
      case 'End': next = this.teamTabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    this.activeTeamTab.set(this.teamTabs[next].id);
    const tabList = (event.currentTarget as HTMLElement).parentElement;
    tabList?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
  }

  readonly values = [
    { title: 'Teamwork', body: 'We work across functions so customers get one coordinated answer.' },
    { title: 'Integrity', body: 'We say what we can do, do what we say and keep the record clear.' },
    { title: 'Respect', body: 'People and customer situations are handled with care and fairness.' },
    { title: 'Diligence', body: 'The small details matter, especially in operational work that others depend on.' },
  ] as const;

  readonly commitmentStats = [
    { value: '1999', label: 'Serving customers since' },
    { value: '10,000+', label: 'Businesses supported' },
    { value: '24x7', label: 'Monitoring and response' },
    { value: '1 team', label: 'For cloud, security and support' },
  ] as const;

  readonly contactCards = [
    {
      label: 'Call us',
      value: '+91 22 6711 1555',
      note: 'Best for sales, service guidance and urgent issues.',
      href: 'tel:+912267111555',
    },
    {
      label: 'Email us',
      value: 'sales@xcellhost.cloud',
      note: 'For a project conversation or written details.',
      href: 'mailto:sales@xcellhost.cloud',
    },
    {
      label: 'WhatsApp',
      value: '+91 8657032540',
      note: 'Fastest route for a quick introduction.',
      href: 'https://wa.me/918657032540',
    },
  ] as const;

  private readonly additionalCredentials = [
    { label: 'ISO', name: '9001', status: 'Certified' },
    { label: 'ISO', name: '27001', status: 'Certified' },
    { label: 'ISO', name: '27002', status: 'Certified' },
    { label: 'ISO', name: '27017', status: 'Certified' },
    { label: 'ISO', name: '27018', status: 'Certified' },
    { label: 'ISO', name: '29100', status: 'Certified' },
    { label: 'ISO', name: '20000-1', status: 'Certified' },
    { label: 'SOC 2', name: 'Type I', status: 'Certified' },
    { label: 'SOC 2', name: 'Type II', status: 'Certified' },
    { label: '', name: 'MEITY', status: 'Certified' },
    { label: '', name: 'TIER IV', status: 'Certified' },
    { label: 'CMM1', name: 'LEVEL 3', status: 'Certified' },
    { label: '', name: 'DPDPA', status: 'Compliant' },
    { label: '', name: 'GEM', status: 'Registered' },
    { label: '', name: 'VAPT', status: 'Certified' },
    { label: '', name: 'DUNS', status: 'Registered' },
    { label: '', name: 'Justdial', status: 'Verified Supplier' },
    { label: '', name: 'IndiaMart', status: 'Verified Supplier' },
  ] as const;

  readonly existingCertifications = [
    {
      title: 'ISO/IEC 27001:2013',
      status: 'Certified',
      type: 'Information Security Management System',
      image: '/assets/images/company-recognition/iso-27001-certificate.jpg',
      alt: 'XcellHost ISO IEC 27001:2013 certificate',
    },
    {
      title: 'ISO/IEC 20000-1:2018',
      status: 'Certified',
      type: 'IT Service Management System',
      image: '/assets/images/company-recognition/iso-20000-certificate.jpg',
      alt: 'XcellHost ISO IEC 20000-1:2018 certificate',
    },
  ] as const;
  readonly certifications = [
    ...this.existingCertifications,
    ...this.additionalCredentials
      .filter(badge => !(badge.label === 'ISO' && ['27001', '20000-1'].includes(badge.name)))
      .map(badge => ({
        title: [badge.label, badge.name].filter(Boolean).join(' '),
        type: badge.status,
        status: badge.status,
        image: '',
        alt: '',
      })),
  ];
  readonly activeCertification = signal(0);
  private readonly requestedCertification = toSignal(
    this.route.queryParamMap.pipe(map(params => params.get('certification'))),
    { initialValue: null },
  );
  private readonly syncRequestedCertification = effect(() => {
    if (this.slug() !== 'certifications-awards') return;
    const index = Number(this.requestedCertification());
    if (Number.isInteger(index) && index >= 0 && index < this.certifications.length) {
      this.activeCertification.set(index);
    }
  });

  readonly awardYears = ['2026', '2025', '2024', '2023', '2022', '2018'] as const;
  readonly activeAwardYear = signal<(typeof this.awardYears)[number]>('2025');

  readonly awards = [
    { year: '2025', title: 'Asian-African Iconic Awards', image: '/assets/images/company-recognition/asian-african.png' },
    { year: '2024', title: 'Emerging Partner of the Year â€” India West', image: '/assets/images/company-recognition/emerging-partner-of-the-year.png' },
    { year: '2024', title: 'IT Expo 2024', image: '/assets/images/company-recognition/it-expo.png' },
    { year: '2023', title: 'MSP India Summit 2023', image: '/assets/images/company-recognition/india-summit-2023.png' },
    { year: '2023', title: 'TAIT Membership', image: '/assets/images/company-recognition/tait-membership.png' },
    { year: '2023', title: 'The Institute of Cost Accountants of India', image: '/assets/images/company-recognition/institute-cost-accountants-india.png' },
    { year: '2022', title: 'Kaspersky Emerging MSP Partner of the Year', image: '/assets/images/company-recognition/kaspersky.png' },
    { year: '2022', title: 'Grahams Award of Excellence', image: '/assets/images/company-recognition/graham.png' },
    { year: '2018', title: 'Emerging Cloud Solution Provider of the Year', image: '/assets/images/company-recognition/summit-awards-2018.png' },
  ] as const;

  readonly visibleAwards = computed(() =>
    this.awards.filter((award) => award.year === this.activeAwardYear()),
  );

  readonly partnerCategories = [
    { title: 'Strategic cloud & infrastructure', description: 'Cloud platforms, hyperscalers and datacentre infrastructure.', partners: [
      ['Microsoft Partner', '02-microsoft-partner.png'], ['Azure', '01-azure.png'], ['AWS', '21-aws.png'], ['Google Cloud Platform', '41-google-cloud-platform.png'], ['Oracle Cloud Infrastructure', '61-oracle-cloud-infrastructure.png'], ['Equinix', '42-equinix.png'],
    ] },
    { title: 'SSL certificates & PKI', description: 'Public trust, TLS certificates and digital identity.', partners: [
      ['DigiCert', '03-digicert.png'], ['GeoTrust', '62-geotrust.png'], ['Sectigo', '23-sectigo.png'],
    ] },
    { title: 'Web, network & DNS security', description: 'WAF, DDoS protection, firewalls and secure network services.', partners: [
      ['Cybird', '../cybird-powered-by.png'], ['cWatch', '43-cwatch.png'], ['Prophaze', '63-prophaze.png'], ['Fortinet', '64-fortinet.png'], ['Palo Alto Networks', '05-palo-alto-networks-1.png'], ['Infoblox', '12-infoblox.png'],
    ] },
    { title: 'Digital risk & threat intelligence', description: 'External risk monitoring and actionable threat intelligence.', partners: [
      ['Foresiet', '04-foresiet.png'], ['Kaspersky Digital Footprint Intelligence', '24-kaspersky-digital-footprint-intelligence.png'], ['Kaspersky Threat Intelligence', '44-kaspersky-threat-intelligence.png'],
    ] },
    { title: 'Endpoint security', description: 'Endpoint protection, detection and managed response.', partners: [
      ['Acronis', '22-acronis-1.png'], ['Microsoft Defender for Endpoint', '45-microsoft-defender-for-endpoint.png'],
    ] },
    { title: 'Email security', description: 'Secure email gateways, anti-phishing and trusted messaging.', partners: [
      ['Threatcop', '06-threatcop.png'], ['RPost', '26-rpost.png'], ['Mimecast Partner', '46-mimecast-partner.png'], ['SpamExperts', '65-spamexperts.png'],
    ] },
    { title: 'SASE & data security', description: 'Secure access, information protection and data loss prevention.', partners: [
      ['Kite Cyber', '07-kite-cyber.png'], ['Data Resolve', '66-data-resolve.png'],
    ] },
    { title: 'Data protection', description: 'Backup, cyber resilience and SaaS data recovery.', partners: [
      ['Druva', '27-druva.png'], ['Veeam', '47-veeam.png'], ['NinjaOne', '81-ninjaone.svg'],
    ] },
    { title: 'Network access, vulnerability & patching', description: 'Asset visibility, exposure management and remediation.', partners: [
      ['Genians', '08-genians.png'], ['SecPod', '28-secpod.png'], ['Qualys', '48-qualys.png'],
    ] },
    { title: 'SIEM, XDR, SOC & SOAR', description: 'Security analytics, detection, orchestration and response.', partners: [
      ['Wazuh', '09-wazuh.png'], ['Azure Sentinel', '30-azure-sentinel.png'], ['FortiSIEM', '69-fortisiem.png'],
    ] },
    { title: 'Identity, governance & cloud posture', description: 'IAM, privileged access, compliance automation and CSPM.', partners: [
      ['Arcon', '11-arcon.png'], ['Scrut Automation', '31-scrut-automation.png'], ['CloudWize', '32-cloudwize.png'], ['Drata', '51-drata.png'], ['OneLogin', '70-onelogin.png'], ['Prisma Cloud', '71-prisma-cloud.png'],
    ] },
    { title: 'Remote work & collaboration', description: 'Secure remote access, support and digital workspaces.', partners: [
      ['TSplus', '16-tsplus.png'], ['TeamViewer', '13-teamviewer.png'], ['AnyDesk', '33-anydesk.png'], ['GoTo', '52-goto.png'], ['Accops', '72-accops.png'],
    ] },
    { title: 'Cloud & security monitoring', description: 'Infrastructure, application and service observability.', partners: [
      ['New Relic', '14-new-relic.png'], ['Datadog', '34-datadog.png'], ['Site24x7', '53-site24x7.png'], ['Elastic', '73-elastic.png'],
    ] },
    { title: 'OT & industrial security', description: 'Protection for operational technology and industrial environments.', partners: [
      ['Acronis Cyber Protect OT', '74-acronis-cyber-protect-ot.png'], ['Kaspersky Industrial CyberSecurity', '15-kaspersky-industrial-cybersecurity.png'], ['Nozomi Networks', '35-nozomi-networks.png'],
    ] },
    { title: 'Network segmentation', description: 'Zero-trust segmentation and lateral-movement containment.', partners: [
      ['ColorTokens', '17-colortokens.png'], ['Illumio', '36-illumio.png'],
    ] },
    { title: 'Security training & professional bodies', description: 'Cybersecurity learning, certification and professional development.', partners: [
      ['SANS', '18-sans.png'], ['ISC2', '19-isc2.png'], ['ISACA', '40-isaca.png'], ['CompTIA', '56-comptia.png'], ['EC-Council', '76-ec-council.png'],
    ] },
    { title: 'Data privacy & cyber risk', description: 'Privacy operations, governance and financial risk quantification.', partners: [
      ['Ardent', '20-ardent.png'], ['OneTrust', '38-onetrust.png'], ['Risknox.ai', '39-risknox-ai.png'],
    ] },
    { title: 'API, mobile & breach simulation', description: 'API protection, unified endpoint management and attack simulation.', partners: [
      ['Salt Security', '54-salt-security.png'], ['Scalefusion', '55-scalefusion.png'], ['FourCore', '59-fourcore.png'], ['Protectt.ai', '75-protectt-ai.png'], ['XM Cyber', '79-xm-cyber.png'],
    ] },
    { title: 'Security audit & application security', description: 'Policy assurance, firewall audit and secure software delivery.', partners: [
      ['AlgoSec', '37-algosec.png'], ['FireMon', '57-firemon-1.png'], ['Synopsys', '77-synopsys.png'],
    ] },
    { title: 'Security hardware & software', description: 'Cryptographic hardware and specialised security tooling.', partners: [
      ['Utimaco', '58-utimo.png'], ['Securaze', '78-securaze.png'],
    ] },
  ] as const;

  constructor() {
    effect(() => {
      const page = this.page();
      if (!page) {
        void this.router.navigate(['/']);
        return;
      }
      const path = this.slug() === 'partner-overview'
        ? '/under-construction/partner-overview/'
        : `/company/${this.slug()}/`;
      this.seo.set(`${page.title} â€” XcellHost`, page.tagline, path);
    });
  }
}


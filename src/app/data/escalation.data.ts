// Contact details transcribed from Escalation Matrix.xlsx, sheet 'Final'.
export interface EscalationContact {
  readonly level: string; readonly role: string; readonly name: string;
  readonly email: string; readonly phone: string; readonly mobile: string;
}
export interface EscalationDepartment {
  readonly id: string; readonly name: string; readonly icon: string;
  readonly coverage: string; readonly contacts: readonly EscalationContact[];
}
export const ESCALATION_DEPARTMENTS: readonly EscalationDepartment[] = [
    {
        "id":  "windows",
        "name":  "Cloud Windows",
        "icon":  "desktop_windows",
        "coverage":  "Windows Private Cloud Server \u0026 Public Cloud Server Related, Operating system related, Application installation, Server maintenance and Monitoring related issues",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "SERVER+MTG Support Helpdesk",
                             "name":  "Cloud Operations Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Technical Support Executive-L1",
                             "name":  "Purva Angre",
                             "email":  "purvaa@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918451010685"
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Team Lead  - Cloud Server",
                             "name":  "Santosh Behera",
                             "email":  "santoshb@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917666926257"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Manager Windows",
                             "name":  "Amit Yadav",
                             "email":  "Amity@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917084507734"
                         }
                     ]
    },
    {
        "id":  "linux",
        "name":  "Cloud Linux",
        "icon":  "terminal",
        "coverage":  "Linux Private Cloud Server \u0026 Public Cloud Server related, based Websites, FTP, DNS, Control Panel, Mailing Related issues, SSL issues",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Linux Support Helpdesk",
                             "name":  "Cloud Linux Support Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Cloud Linux Engineer",
                            "name":  "Amit Yadav",
                            "email":  "Amity@xcellhost.cloud",
                             "phone":  "+912267111555",
                            "mobile":  "+917084507734"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Cloud Service Delivery Manager",
                             "name":  "Rizwan Shaikh",
                             "email":  "rizwans@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918828127278"
                         }
                     ]
    },
    {
        "id":  "messaging",
        "name":  "Cloud Messaging",
        "icon":  "mail",
        "coverage":  "Windows based Websites, FTP, DNS, Control Panel, Mailing Related issues, SSL issues",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "MSG Support Helpdesk",
                             "name":  "Cloud Windows Support Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Team Lead",
                             "name":  "Mohammad Tallah",
                             "email":  "mohammadt@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917028202721"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Cloud Service Delivery Manager",
                             "name":  "Rizwan Shaikh",
                             "email":  "rizwans@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918828127278"
                         }
                     ]
    },
    {
        "id":  "database",
        "name":  "Cloud Database",
        "icon":  "database",
        "coverage":  "Microsoft SQL Database related issues",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Database Support Helpdesk",
                             "name":  "Cloud Database Support Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Cloud Database Specialist",
                             "name":  "Manisha Gupta",
                             "email":  "manishag@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917268868310"
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Team Lead - Cloud Windows",
                             "name":  "Amit Yadav",
                             "email":  "Amity@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917084507734"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Cloud Service Delivery Manager",
                             "name":  "Rizwan Shaikh",
                             "email":  "rizwans@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918828127278"
                         }
                     ]
    },
    {
        "id":  "network",
        "name":  "Cloud Network",
        "icon":  "lan",
        "coverage":  "Network related, Internet Connectivity Related, Server Security related and Antivirus Related matters",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Network Support Helpdesk",
                             "name":  "Cloud Network Support Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Cloud Security Engineer",
                             "name":  "Manisha Gupta",
                             "email":  "manishag@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917268868310"
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Team Lead - System",
                             "name":  "Amit Yadav",
                             "email":  "Amity@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917084507734"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Cloud Service Delivery Manager",
                             "name":  "Rizwan Shaikh",
                             "email":  "rizwans@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918828127278"
                         },
                         {
                             "level":  "Level 4",
                             "role":  "Cloud Backup Manager",
                             "name":  "Sharif Shaikh",
                             "email":  "sharifs@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918828127278"
                         }
                     ]
    },
    {
        "id":  "backup",
        "name":  "Cloud Backup",
        "icon":  "backup",
        "coverage":  "Network related, Internet Connectivity Related, Server Security related and Antivirus Related matters",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Network Support Helpdesk",
                             "name":  "Cloud Network Support Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Team Lead - Cloud Backup Executive",
                             "name":  "Manisha Gupta",
                             "email":  "manishag@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+917268868310"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Cloud Backup Manager",
                             "name":  "Sharif Shaikh",
                             "email":  "sharifs@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918828127278"
                         }
                     ]
    },
    {
        "id":  "sales",
        "name":  "Cloud Sales",
        "icon":  "handshake",
        "coverage":  "",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Cloud Inside Sales Specialist",
                            "name":  "Cloud Advisor",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                            "role":  "Cloud Advisor",
                             "name":  "Ajay Gupta",
                             "email":  "ajayg@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918591857830"
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Cloud Advisor",
                             "name":  "Mihir Ambokar",
                             "email":  "mihira@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918976779385"
                         },
                         {
                             "level":  "Level 2",
                            "role":  "Cloud Sales Manager",
                             "name":  "Rashed Sayyed",
                             "email":  "Rasheds@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918433989914"
                         }
                     ]
    },
    {
        "id":  "billing",
        "name":  "Customer Billing",
        "icon":  "receipt_long",
        "coverage":  "",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Cloud Payable",
                             "name":  "Cloud Payable Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Cloud Payable Executive",
                             "name":  "Rutuja Bhoga",
                             "email":  "rutujab@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918108440740"
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Cloud Billing Executive",
                             "name":  "Abhishek Pandey",
                             "email":  "abhishekp@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+919004660960"
                         },
                         {
                             "level":  "Level 3",
                             "role":  "Account Receivable Executive",
                             "name":  "Sanjay Jade",
                             "email":  "sanjayj@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918097785983"
                         }
                     ]
    },
    {
        "id":  "success",
        "name":  "Customer Success",
        "icon":  "sentiment_satisfied",
        "coverage":  "Customer Related Issues \u0026 Support",
        "contacts":  [
                         {
                             "level":  "Primary contact",
                             "role":  "Network Support Helpdesk",
                             "name":  "Cloud Network Support Executive",
                             "email":  "support@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  ""
                         },
                         {
                             "level":  "Level 1",
                             "role":  "Executive",
                             "name":  "Vaishnavi Ghagare",
                             "email":  "vaishnavig@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918451010685"
                         },
                         {
                             "level":  "Level 2",
                             "role":  "Team Lead",
                             "name":  "Purva Angre",
                             "email":  "purvaa@xcellhost.cloud",
                             "phone":  "+912267111555",
                             "mobile":  "+918451010685"
                         }
                     ]
    }
];

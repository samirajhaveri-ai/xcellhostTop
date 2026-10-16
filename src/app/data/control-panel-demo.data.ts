export interface ControlPanelDemoVideo {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly source: string;
}

export interface ControlPanelDemoConfig {
  readonly key: 'plesk' | 'cpanel';
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
  readonly videos: readonly ControlPanelDemoVideo[];
}

export const CONTROL_PANEL_DEMO_CONFIGS: Readonly<Record<'plesk' | 'cpanel', ControlPanelDemoConfig>> = {
  plesk: {
    key: 'plesk',
    name: 'Plesk',
    title: 'Plesk Demo Center',
    description: 'Watch practical Plesk walkthroughs for the Obsidian dashboard, WordPress Toolkit, domains, SSL certificates, subdomains and backups.',
    canonicalPath: '/plesk-demo-center/',
    videos: [
      {
        id: 'Ff1UTQjkhMc',
        title: 'Plesk Obsidian Introduction',
        description: 'Tour the Plesk Obsidian platform for managing servers, websites, applications and hosting operations.',
        source: 'Plesk',
      },
      {
        id: 'dn-zAZiQrwE',
        title: 'Using the WordPress Toolkit',
        description: 'Create and manage WordPress websites, themes, plugins and security from the Plesk dashboard.',
        source: 'Plesk',
      },
      {
        id: 'zbx0f4SKHvs',
        title: 'Add and Configure a Domain in Plesk',
        description: 'Add a new domain, configure its hosting space and connect the required DNS records.',
        source: 'Knowledge Server Plus',
      },
      {
        id: 'OzY3o_sJk7E',
        title: 'Install a Let’s Encrypt SSL Certificate',
        description: 'Secure a Plesk-hosted website with a free Let’s Encrypt SSL certificate.',
        source: 'Knowledge Server Plus',
      },
      {
        id: '7bt_ctDHC4Q',
        title: 'Add a Subdomain to Plesk',
        description: 'Create and manage a subdomain and connect its DNS record to the hosting environment.',
        source: 'Pen Publishing Interactive',
      },
      {
        id: 'osJru2wflhU',
        title: 'Set Up and Schedule Plesk Backups',
        description: 'Use Backup Manager to create, schedule, download and restore Plesk backups.',
        source: 'Knowledge Server Plus',
      },
    ],
  },
  cpanel: {
    key: 'cpanel',
    name: 'cPanel',
    title: 'cPanel Demo Center',
    description: 'Learn the cPanel and WHM interfaces through official walkthroughs covering login, files, email, WordPress and server administration.',
    canonicalPath: '/cpanel-demo-center/',
    videos: [
      {
        id: 'K19xlT8g7ys',
        title: 'How to Log In to cPanel',
        description: 'Learn the standard ways to reach and securely sign in to the cPanel interface.',
        source: 'cPanelTV',
      },
      {
        id: 'sKyAs-8S65c',
        title: 'Navigate the cPanel Jupiter Interface',
        description: 'Tour the Jupiter dashboard and find the tools used to manage a hosting account.',
        source: 'cPanelTV',
      },
      {
        id: 'gvfe1IYS444',
        title: 'Use cPanel File Manager',
        description: 'Upload, edit, move and manage website files with the browser-based File Manager.',
        source: 'cPanelTV',
      },
      {
        id: 'CpXXfMfFBHA',
        title: 'Manage Email Accounts',
        description: 'Review and manage mailboxes, storage limits, passwords and connected devices.',
        source: 'cPanelTV',
      },
      {
        id: '-kcB89N5RDE',
        title: 'Introduction to WP Toolkit for cPanel',
        description: 'Install and maintain WordPress sites, plugins, themes, updates and security from one dashboard.',
        source: 'cPanelTV',
      },
      {
        id: 'rwePjwXIc3E',
        title: 'Introduction to the WHM Interface',
        description: 'Explore WebHost Manager tools for accounts, server configuration and hosting administration.',
        source: 'cPanelTV',
      },
    ],
  },
};

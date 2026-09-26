/** Connection demonstrations shared by Remote Access and the TSplus Demo Center. */
export const TSPLUS_REMOTE_ACCESS_EXPERIENCES = [
  {
    title: 'RDP – Full Desktop Standard MSTSC',
    description: 'The user accesses the full desktop via the standard Microsoft RDP client.',
    video: '/assets/video/tsplus-ra-rdp-standard.mp4',
  },
  {
    title: 'RDP – Full Desktop 1-click Connection',
    description: 'The user accesses the full desktop via the TSplus Client in one click.',
    video: '/assets/video/tsplus-ra-rdp-one-click.mp4',
  },
  {
    title: 'RemoteApp – Floating Panel',
    description: 'The user launches an app in one click from the floating panel on their local desktop.',
    video: '/assets/video/tsplus-ra-remoteapp-floating-panel.mp4',
  },
  {
    title: 'RemoteApp – Application Panel',
    description: 'The user launches an app in one click from the application panel on their local desktop.',
    video: '/assets/video/tsplus-ra-remoteapp-application-panel.mp4',
  },
  {
    title: 'RemoteApp – Single Application Launch',
    description: 'The application starts automatically when the user connects.',
    video: '/assets/video/tsplus-ra-remoteapp-single-app.mp4',
  },
  {
    title: 'HTML5 – Full Desktop',
    description: 'The user signs in through the web portal and accesses the full desktop in any browser.',
    video: '/assets/video/tsplus-ra-html5-full-desktop.mp4',
  },
  {
    title: 'HTML5 – Single Application Launch',
    description: 'The user signs in through the web portal and the application launches automatically in the browser.',
    video: '/assets/video/tsplus-ra-html5-single-app.mp4',
  },
  {
    title: 'HTML5 – Progressive Web App',
    description: 'The user accesses the full desktop through a focused Progressive Web App experience.',
    video: '/assets/video/tsplus-ra-html5-progressive-web-app.mp4',
  },
  {
    title: 'HTML5 – Web Portal',
    description: 'The user signs in through the web portal and opens applications in separate browser tabs.',
    video: '/assets/video/tsplus-ra-html5-web-portal.mp4',
  },
] as const;

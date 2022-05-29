type ProjectDetails = {
  name: string,
  date: string,
  description: string,
}

const projects: ProjectDetails[] = [
  {
    name: 'Codifly\'s Corporate Website',
    date: 'Jun 2021',
    description: `In my month working as a student at Codifly, I was stationed at
      the helm of the redesign of their corporate website's
      homepage. In a hands-on fashion, I was able to quickly get to
      grips with React and Flow and helped finalise the migration to
      TypeScript.`
  },
  {
    name: 'Reservation System for HIER.',
    date: 'Sept 2021 - Jan 2022',
    description: `In my last year of studying at HoGent, I was paired up with 4
      others to create an online reservation service for <i>HIER.</i>.{' '}
      <i>HIER.</i> is a place where people can go to hold meetings and
      participate in coworking. Using Blazor and the Android SDK we made
      a single page application and mobile application to suit their
      needs.`
  },
  {
    name: 'The Home Stack',
    date: 'Oct 2021 (ongoing)',
    description: `A Traefik reverse proxy hooked up to over 15 other containerised services. A
      variation of a Plex stack, a Rocket Chat server and a personal
      blog. All connected with an Organizr dashboard, secured through
      Google OAuth, and available only within Belgium thanks to
      Cloudflare DNS with a Let's Encrypt certificate for SSL verification.`
  },
  {
    name: 'Depannage Steps',
    date: 'Feb 2022 - May 2022',
    description: `A webplatform for the breakdown services provider, Depannage
      Steps. It serves as a fully functional replacement for their
      traditional paper-based administration. Automatic PDF generation,
      tracking of ongoing assignments and many more administrative
      helpers.
      Throughout my internship at Codifly this React front-end with a
      NodeJS back-end was the project I worked on most of the time. I
      introduced new features, most notably the ability to spread
      assignment between multiple drivers.`
  },
  {
    name: 'Thesis',
    date: 'Sep 2021 (Ongoing)',
    description: `A comparative study of different upcoming JavaScript/TypeScript
      bundlers to identify the most noteworthy and relevant names for
      possible use within Codifly. (Available for reading soon)`
  }
];

export default projects;
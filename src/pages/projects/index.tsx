import React from 'react';
import 'bulma/css/bulma.css';
import { Section, Container, Heading, Columns } from 'react-bulma-components';

export default () => (
  <Section>
    <Container>
      <Columns centered>
        <Columns.Column size="half" textAlign="center">
          <Heading size={1} spaced>
            Projects
          </Heading>
          <Container mb={4}>
            <Heading size={4}>Codifly&apos;s Corporate Website</Heading>
            <Heading size={6} subtitle mb={1}>
              Jun 2021
            </Heading>
            <p>
              In my month working as a student at Codifly, I was stationed at
              the helm of the redesign of their corporate website&apos;s
              homepage. In a hands-on fashion, I was able to quickly get to
              grips with React and Flow and helped finalise the migration to
              TypeScript.
            </p>
          </Container>
          <Container mb={4}>
            <Heading size={4}>Reservation System for HIER.</Heading>
            <Heading size={6} subtitle mb={1}>
              Sept 2021 - Jan 2022
            </Heading>
            <p>
              In my last year of studying at HoGent, I was paired up with 4
              others to create an online reservation service for <i>HIER.</i>.{' '}
              <i>HIER.</i> is a place where people can go to hold meetings and
              participate in coworking. Using Blazor and the Android SDK we made
              a single page application and mobile application to suit their
              needs.
            </p>
          </Container>
          <Container mb={4}>
            <Heading size={4}>The Home Stack</Heading>
            <Heading size={6} subtitle mb={1}>
              Oct 2021 (ongoing)
            </Heading>
            <p>
              A Traefik reverse proxy hooked up to over 15 other services. A
              variation of a Plex stack, a Rocket Chat server and a personal
              blog. All connected with an Organizr dashboard, secured through
              Google OAuth, and available only within Belgium thanks to
              Cloudflare DNS with a Let&apos;s Encrypt certificate.
            </p>
            <p>Containerised with docker-compose.</p>
          </Container>
          <Container mb={4}>
            <Heading size={4}>Depannage Steps</Heading>
            <Heading size={6} subtitle mb={1}>
              Feb 2022 (ongoing)
            </Heading>
            <p>
              A webplatform for the breakdown services provider, Depannage
              Steps. It serves as a fully functional replacement for their
              traditional paper-based administration. Automatic PDF generation,
              tracking of ongoing assignments and many more administrative
              helpers.
            </p>
            <p>
              Throughout my internship at Codifly this React front-end with a
              NodeJS back-end was the project I worked on most of the time. I
              introduced new features, most notably the ability to spread
              assignment between multiple drivers.
            </p>
          </Container>
          <Container mb={4}>
            <Heading size={4}>Thesis</Heading>
            <Heading size={6} subtitle mb={1}>
              Sep 2021 - May 2022
            </Heading>
            <p>
              A comparative study of different upcoming JavaScript/TypeScript
              bundlers to identify the most noteworthy and relevant names for
              possible use within Codifly. (Available for reading soon)
            </p>
          </Container>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);

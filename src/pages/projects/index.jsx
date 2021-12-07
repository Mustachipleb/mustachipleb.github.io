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
            <Heading size={4}>Codifly&apos;s corporate website</Heading>
            <Heading size={7} subtitle mb={1}>
              Jun 2021
            </Heading>
            <p>
              In my month working as a student at Codifly, I was stationed at
              the helm of the redesign of their corporate website&apos;s
              homepage. In a hands-on fashion, I was able to quickly get to
              grips with React and Flow.
            </p>
          </Container>
          <Container mb={4}>
            <Heading size={4}>Reservation system for HIER.</Heading>
            <Heading size={7} subtitle mb={1}>
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
            <Heading size={4}>The home stack</Heading>
            <Heading size={7} subtitle mb={1}>
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
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);

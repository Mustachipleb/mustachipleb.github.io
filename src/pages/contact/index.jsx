import React from 'react';
import 'bulma/css/bulma.css';
import { Section, Container, Heading, Columns } from 'react-bulma-components';

export default () => (
  <Section>
    <Container>
      <Columns centered>
        <Columns.Column size="half" textAlign="center">
          <Heading size={1} spaced>
            Contact
          </Heading>
          <Heading size={4} subtitle mb={1}>
            E-mail
          </Heading>
          <a
            href="mailto:nicolasvandamme2@hotmail.com"
            className="is-block mb-4"
          >
            nicolasvandamme2@hotmail.com
          </a>
          <Heading size={4} subtitle mb={1}>
            LinkedIn
          </Heading>
          <a
            href="https://www.linkedin.com/in/nicolasvandammecs/"
            className="is-block mb-4"
          >
            nicolasvandammecs
          </a>
          <Heading size={4} subtitle mb={1}>
            Phone
          </Heading>
          <a href="tel:+32470540130" className="is-block mb-4">
            +32 470 54 01 30
          </a>
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);

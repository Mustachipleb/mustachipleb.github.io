import React from 'react';
import Lottie from 'lottie-react';
import 'bulma/css/bulma.css';
import { Section, Container, Heading, Columns } from 'react-bulma-components';

import animation from './animations/notfound.json';

export default () => (
  <Section>
    <Container>
      <Columns>
        <Columns.Column>
          <Heading size={1}>Oops...</Heading>
          <Heading size={3}>
            I looked far and wide for the page you asked for, but I found
            nothing.
          </Heading>
          <Lottie animationData={animation} />
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);

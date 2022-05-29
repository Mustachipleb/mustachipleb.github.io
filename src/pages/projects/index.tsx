import React from 'react';
import 'bulma/css/bulma.css';
import { Section, Container, Heading, Columns } from 'react-bulma-components';
import projects from './projects';

export default () => (
  <Section>
    <Container>
      <Columns centered>
        <Columns.Column size="two-thirds" textAlign="center">
          {projects.map(project => (
            <Container mb={6} key={project.name}>
              <Heading size={4}>{project.name}</Heading>
              <Heading size={6} subtitle mb={1}>
                {project.date}
              </Heading>
              <p>
                {project.description}
              </p>
            </Container>
          ))}
        </Columns.Column>
      </Columns>
    </Container>
  </Section>
);

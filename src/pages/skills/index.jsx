import React from 'react';
import 'bulma/css/bulma.css';
import { Section, Container, Heading, Tile } from 'react-bulma-components';

export default () => (
  <>
    <Section>
      <Container>
        <Heading size={1}>Skills</Heading>
        <Tile kind="ancestor">
          <Tile vertical>
            <Tile>
              <Tile vertical size={4}>
                <Tile kind="parent">
                  <Tile kind="child" backgroundColor="primary" p={2}>
                    C#
                  </Tile>
                </Tile>
              </Tile>
              <Tile vertical size={8}>
                <Tile>
                  <Tile vertical size={7}>
                    <Tile kind="parent">
                      <Tile kind="child" backgroundColor="info" p={2}>
                        React
                      </Tile>
                    </Tile>
                    <Tile kind="parent">
                      <Tile kind="child" backgroundColor="danger" p={2}>
                        Angular
                      </Tile>
                    </Tile>
                  </Tile>
                  <Tile vertical size={5}>
                    <Tile kind="parent">
                      <Tile kind="child" backgroundColor="dark" p={2}>
                        Git
                      </Tile>
                    </Tile>
                  </Tile>
                </Tile>
                <Tile>
                  <Tile kind="parent">
                    <Tile kind="child" backgroundColor="success" p={2}>
                      Unix
                    </Tile>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>
            <Tile>
              <Tile kind="parent" size={8}>
                <Tile kind="child" backgroundColor="warning" p={2}>
                  Java
                </Tile>
              </Tile>
              <Tile kind="parent">
                <Tile kind="child" backgroundColor="link" p={2}>
                  SQL
                </Tile>
              </Tile>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  </>
);

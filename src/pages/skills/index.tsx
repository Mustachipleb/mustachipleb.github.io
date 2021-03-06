import React from 'react';
import 'bulma/css/bulma.css';
import {
  Section,
  Container,
  Heading,
  Tile,
  Content,
  Element,
  Tag,
  Columns,
} from 'react-bulma-components';
import styled from 'styled-components';

type TechProps = {
  name: string;
  rating: number;
}

const RatingsTick = styled(Element)`
  border-radius: 9999px;
  opacity: ${({ opacity }) => opacity}%;
  vertical-align: middle;
`;

const Tech = ({ name, rating }: TechProps) => {
  const ratingObj = [];
  for (let i = 4; i >= 0; i--) {
    ratingObj.push(
      <RatingsTick
        display="inline-block"
        p={2}
        mr={1}
        backgroundColor="light"
        opacity={i < rating ? 100 : 30}
      />,
    );
  }

  return (
    <Columns marginless>
      <Columns.Column p="0">
        <Heading
          subtitle
          textColor="white"
          textWeight="semibold"
          marginless
          pb={2}
        >
          {name}
        </Heading>
      </Columns.Column>
      <Columns.Column size={7} p="0">
        <Content display="flex" flexDirection="row-reverse" mt={1}>
          {ratingObj}
        </Content>
      </Columns.Column>
    </Columns>
  );
};

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
                  <Tile
                    kind="child"
                    backgroundColor="primary"
                    p={3}
                    display="flex"
                    flexDirection="column"
                  >
                    <Tech name="C#" rating={5} />
                    <Content textColor="white">
                      <p>
                        From WPF to Blazor, with over 5 years of experience
                        writing C# code, I&apos;m confident in my ability to
                        work with most concepts related to it. Especially
                        ASP.NET Core and Entity Framework Core.
                      </p>
                    </Content>
                    <Content textColor="white" mt="auto">
                      <Element display="flex" flexWrap="wrap">
                        <Tag mt={2} mr={2}>
                          ASP.NET Core
                        </Tag>
                        <Tag mt={2} mr={2}>
                          Blazor
                        </Tag>
                        <Tag mt={2} mr={2}>
                          EF Core
                        </Tag>
                        <Tag mt={2} mr={2}>
                          AutoMapper
                        </Tag>
                        <Tag mt={2} mr={2}>
                          LINQ
                        </Tag>
                      </Element>
                    </Content>
                  </Tile>
                </Tile>
              </Tile>
              <Tile vertical size={8}>
                <Tile>
                  <Tile vertical size={7}>
                    <Tile kind="parent">
                      <Tile
                        kind="child"
                        backgroundColor="info"
                        p={3}
                        display="flex"
                        flexDirection="column"
                      >
                        <Tech name="React" rating={5} />
                        <Content textColor="white">
                          <p>
                            The place where I did my internship and the place
                            where I currently work, Codifly, is where I first
                            came in contact with React. Since then, I like to
                            believe I&apos;ve become a capable React developer.
                          </p>
                        </Content>
                        <Content textColor="white" mt="auto">
                          <Element display="flex" flexWrap="wrap">
                            <Tag mt={2} mr={2}>
                              Mocha
                            </Tag>
                            <Tag mt={2} mr={2}>
                              Apollo
                            </Tag>
                            <Tag mt={2} mr={2}>
                              Cypress
                            </Tag>
                            <Tag mt={2} mr={2}>
                              GraphQL
                            </Tag>
                          </Element>
                        </Content>
                      </Tile>
                    </Tile>
                    <Tile kind="parent">
                      <Tile
                        kind="child"
                        backgroundColor="danger"
                        p={3}
                        display="flex"
                        flexDirection="column"
                      >
                        <Tech name="Angular" rating={2} />
                        <Content textColor="white">
                          <p>
                            My first experience with SPAs, I believe it acted as
                            a great plus in the process of learning best
                            practices with Javascript and Typescript.
                          </p>
                        </Content>
                      </Tile>
                    </Tile>
                  </Tile>
                  <Tile vertical size={5}>
                    <Tile kind="parent">
                      <Tile
                        kind="child"
                        backgroundColor="dark"
                        p={3}
                        display="flex"
                        flexDirection="column"
                      >
                        <Tech name="Git" rating={4} />
                        <Content textColor="white">
                          <p>
                            Part of being a good developer is good experience
                            with version control. Atomic commits and descriptive
                            concise titles paired with knowledge of best
                            practices makes for a good whole.
                          </p>
                        </Content>
                      </Tile>
                    </Tile>
                  </Tile>
                </Tile>
                <Tile>
                  <Tile kind="parent">
                    <Tile
                      kind="child"
                      backgroundColor="success"
                      p={3}
                      display="flex"
                      flexDirection="column"
                    >
                      <Tech name="Systems" rating={3} />
                      <Content textColor="white">
                        <p>
                          While I&apos;m not a system administrator, I love
                          tinkering with my Ubuntu servers at home. That plus my
                          (attempt at) daily driving Linux makes for a good
                          knowledge of it.
                        </p>
                      </Content>
                      <Content textColor="white" mt="auto">
                        <Element display="flex" flexWrap="wrap">
                          <Tag mt={2} mr={2}>
                            Ubuntu
                          </Tag>
                          <Tag mt={2} mr={2}>
                            MacOS
                          </Tag>
                          <Tag mt={2} mr={2}>
                            Docker
                          </Tag>
                          <Tag mt={2} mr={2}>
                            docker-compose
                          </Tag>
                          <Tag mt={2} mr={2}>
                            Portainer
                          </Tag>
                          <Tag mt={2} mr={2}>
                            Grafana
                          </Tag>
                        </Element>
                      </Content>
                    </Tile>
                  </Tile>
                </Tile>
              </Tile>
            </Tile>
            <Tile>
              <Tile kind="parent">
                <Tile
                  kind="child"
                  backgroundColor="link"
                  p={3}
                  display="flex"
                  flexDirection="column"
                >
                  <Tech name="SQL" rating={4} />
                  <Content textColor="white">
                    <p>
                      I have a good knowledge of advanced SQL concepts, such as
                      CTEs, window functions, stored procedures etc.
                    </p>
                  </Content>
                  <Content textColor="white" mt="auto">
                    <Element display="flex" flexWrap="wrap">
                      <Tag mt={2} mr={2}>
                        Transact-SQL
                      </Tag>
                      <Tag mt={2} mr={2}>
                        PostgreSQL
                      </Tag>
                    </Element>
                  </Content>
                </Tile>
              </Tile>
            </Tile>
          </Tile>
        </Tile>
      </Container>
    </Section>
  </>
);

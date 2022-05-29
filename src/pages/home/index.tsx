import React from 'react';
import 'bulma/css/bulma.css';
import {
  Section,
  Container,
  Heading,
  Image,
  Columns,
} from 'react-bulma-components';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import animation1 from './animations/animation1.json';
import animation2 from './animations/animation2.json';
import animation3 from './animations/animation3.json';
import portrait from './images/portrait.jpg';

const CenteredColumn = styled(Columns.Column)`
  text-align: center;
  max-width: 50%;
  margin: 0 auto;
`;

const StyledSection = styled(Section)`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export default () => (
  <>
    <StyledSection>
      <Container>
        <Columns>
          <Columns.Column>
            <Heading size={1}>Nicolas Van Damme</Heading>
            <Heading subtitle size={4}>
              Web &amp; Mobile Developer @ Codifly
            </Heading>
          </Columns.Column>
          <Columns.Column size={3}>
            <Image src={portrait} alt="" rounded />
          </Columns.Column>
        </Columns>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <Columns>
          <Columns.Column>
            <Heading size={3}>A learner at heart</Heading>
            <Columns>
              <Columns.Column offset={1}>
                If there&apos;s one thing I love doing, it&apos;s tinkering with
                new technologies. Whether it be a new framework or a personal
                project, my interest in the IT world goes far and wide.
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={3}>
            <Lottie animationData={animation1} loop/>
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <Columns>
          <Columns.Column size={4}>
            <Lottie animationData={animation2} loop/>
          </Columns.Column>
          <Columns.Column>
            <Heading size={3}>A team player</Heading>
            <Columns>
              <Columns.Column offset={1}>
                My ability to reflect on my own abilities and personality allows
                me to be a very reliable team member. Transparancy is a trait
                which I hold close to my heart.
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <Columns>
          <Columns.Column>
            <Heading>Communication</Heading>
            <Columns>
              <Columns.Column offset={1}>
                Good communication paves the way for great projects and good
                comradery. I strive to be open and fair towards everyone around
                me, and am not afraid to voice concerns.
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={5}>
            <Lottie animationData={animation3} loop/>
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </StyledSection>
    <StyledSection>
      <Container>
        <Columns>
          <CenteredColumn>
            <Heading textSize={4}>
              Did I spark your interest? Do you want to have a word with me? My
              contact information is available right{' '}
              <Link to="/contact">here</Link>.
            </Heading>
          </CenteredColumn>
        </Columns>
      </Container>
    </StyledSection>
  </>
);

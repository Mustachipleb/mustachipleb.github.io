import React from 'react';
import 'bulma/css/bulma.css';
import {
  Section, Container, Heading, Image, Columns,
} from 'react-bulma-components';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

import animation1 from './animations/animation1.json';
import animation2 from './animations/animation2.json';
import animation3 from './animations/animation3.json';
import animation4 from './animations/animation4.json';
import portrait from './images/portrait.jpg';

export default () => (
  <>
    <Section>
      <Container>
        <Columns>
          <Columns.Column>
            <Heading size={1}>Nicolas Van Damme</Heading>
            <Heading subtitle size={4}>Web &amp; Enterprise developer</Heading>
          </Columns.Column>
          <Columns.Column size={4}>
            <Image src={portrait} alt="" rounded />
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns>
          <Columns.Column>
            <Heading size={3}>Up to date with technology</Heading>
            <Columns>
              <Columns.Column offset={1}>
                Initially specialised in C#, I acquired a newfound love for React after working for a company called Codifly.
                With these 2 combined, I can tackle both functional and object-oriented workloads with relative ease.
                New technologies spark my interest, and I keep myself up to date with what I work on and with.
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={3}>
            <Lottie
              animationData={animation1}
            />
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns>
          <Columns.Column size={4}>
            <Lottie
              animationData={animation2}
            />
          </Columns.Column>
          <Columns.Column>
            <Heading size={3}>Know yourself</Heading>
            <Columns>
              <Columns.Column offset={1}>
                I pride myself in my ability to reflect on my own abilities and personality.
                By having this insight, I am able to be a very reliable team player.
                I always aim to tell the truth, and am by extension able to provide accurate estimations on a daily basis.
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns>
          <Columns.Column>
            <Heading>Communication is key</Heading>
            <Columns>
              <Columns.Column offset={1}>
                Next to my technical capibilities, I also value good communication.
                Good communication paves the way for great projects, great people, and great friends.
                Developers often are on the introverted side, so am I.
                However, it would never stop me from being open and fair towards everyone around me.
                It would never stop me from being that guy you never get any updates or question from.
                We&apos;re here to learn, that never ends.
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={5}>
            <Lottie
              animationData={animation3}
            />
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </Section>
    <Section>
      <Container>
        <Columns>
          <Columns.Column size={3}>
            <Lottie
              animationData={animation4}
            />
          </Columns.Column>
          <Columns.Column>
            <Heading>Final word</Heading>
            <Columns>
              <Columns.Column offset={1}>
                Did I spark your interest? Do you want to have a word with me?
                My contact information is available right
                {' '}
                <Link to="/contact">here</Link>
                .
              </Columns.Column>
            </Columns>
          </Columns.Column>
          <Columns.Column size={1} />
        </Columns>
      </Container>
    </Section>
  </>
);

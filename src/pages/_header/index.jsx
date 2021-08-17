import 'bulma/css/bulma.css';
import { Section, Container, Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom';

export default () => (
  <Section py={1}>
    <Container>
      <Navbar>
        <Navbar.Menu>
          <Navbar.Item>
            <Link to="/">About me</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/skills">My skills</Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/contact">Contact me</Link>
          </Navbar.Item>
        </Navbar.Menu>
      </Navbar>
    </Container>
  </Section>
);

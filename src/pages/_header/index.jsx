import 'bulma/css/bulma.css';
import { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom';

export default () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Navbar>
      <Navbar.Brand>
        <Navbar.Burger
          onClick={handleClick}
          className={`${active ? 'is-active' : ''}`}
        />
      </Navbar.Brand>
      <Navbar.Menu className={`${active ? 'is-active' : ''}`}>
        <Navbar.Container>
          <Link to="/" onClick={handleClick}>
            <Navbar.Item>About me</Navbar.Item>
          </Link>
          <Link to="/skills" onClick={handleClick}>
            <Navbar.Item>Skills</Navbar.Item>
          </Link>
          <Link to="/contact" onClick={handleClick}>
            <Navbar.Item>Contact me</Navbar.Item>
          </Link>
          <Link to="/projects" onClick={handleClick}>
            <Navbar.Item>Projects</Navbar.Item>
          </Link>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

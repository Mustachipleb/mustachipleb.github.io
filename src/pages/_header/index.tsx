import 'bulma/css/bulma.css';
import { useState } from 'react';
import { Navbar } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -999;
`;

const Extension = styled.div`
  width: 100%;
  height: 4rem;
  background-color: #00cba9;
`;

const TransparentNavbar = styled(Navbar)`
  background-color: rgba(0, 0, 0, 0);
`;

export default () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Background>
        <Extension />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#00cba9"
            fillOpacity="1"
            d="M0,256L80,218.7C160,181,320,107,480,96C640,85,800,139,960,170.7C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            data-darkreader-inline-fill=""
          />
        </svg>
      </Background>
      <TransparentNavbar>
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
      </TransparentNavbar>
    </>
  );
};

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
              <div className='navbar-item'>About me</div>
            </Link>
            <Link to="/skills" onClick={handleClick}>
              <div className='navbar-item'>Skills</div>
            </Link>
            <Link to="/contact" onClick={handleClick}>
              <div className='navbar-item'>Contact me</div>
            </Link>
            <Link to="/projects" onClick={handleClick}>
              <div className='navbar-item'>Projects</div>
            </Link>
          </Navbar.Container>
        </Navbar.Menu>
      </TransparentNavbar>
    </>
  );
};

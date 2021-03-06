import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';
// Construção do Menu Hamburguer 
const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navShowing, setNavShowing] = useState(false);
  const [navClosing, setNavClosing] = useState(false);

  const [windowScrolled, setWindowScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10 && !windowScrolled) setWindowScrolled(true);
      if (window.scrollY <= 10 && windowScrolled) setWindowScrolled(false);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [windowScrolled]);

  const toggleNavigation = () => {
    if (navOpen === true) {
      setNavClosing(true);

      return setTimeout(() => {
        setNavClosing(false);
        setNavOpen(state => !state);
      }, 600);
    }

    setNavShowing(true);
    setNavOpen(state => !state);

    return setTimeout(() => {
      setNavShowing(false);
    }, 600);
  };
  // Fim do menu Hamburguer
  return (
    <Container
      navOpen={navOpen}
      navShowing={navShowing}
      navClosing={navClosing}
      windowScrolled={windowScrolled}
    >
      <a href="#landing">
        <h2>Healthy Food</h2>
      </a>

      <div>
        <nav>
          <ul>
            <a onClick={toggleNavigation} href="#recipes">
              <li>
                <span>healthy recipes</span>
              </li>
            </a>

            <a onClick={toggleNavigation} href="#blog">
              <li>
                <span>blog</span>
              </li>
            </a>

            <a onClick={toggleNavigation} href="#join">
              <li>
                <span>join</span>
              </li>
            </a>
          </ul>
        </nav>

        <Link to="/register">
            <li>REGISTER</li>
        </Link>

        <button type="button" className="hamburguer" onClick={toggleNavigation}>
          <ul>
            <li />
            <li />
            <li />
          </ul>
        </button>
      </div>
    </Container>
  );
};

export { Header };

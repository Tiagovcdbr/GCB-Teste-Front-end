import React from 'react';

import { About } from './About';
import { Blog } from './Blog';
import { Footer } from './Footer';
import { Header } from './Header';
import { Join } from './Join';
import { Landing } from './Landing';
import { Recipes } from './Recipes';
import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <Landing />

      <Recipes />

      <About />

      <Blog />

      <Join />

      <Footer />
    </Container>
  );
};

export { Home };

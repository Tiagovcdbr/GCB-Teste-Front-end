import React from 'react';

import aboutSVG from '../../../assets/images/about.svg';
import { Button } from '../../../components';

import styled from 'styled-components';

const About: React.FC = () => {
  return (
    <Container id="about">
      <div>
        <img src={aboutSVG} alt="About" />
        <div className="content">
          <h2>The best services ready To serve you</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>

          <p>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.
          </p>

          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>

          <Button hasShadow>Know more</Button>
        </div>
      </div>
    </Container>
  );
};

export { About };
/* Estilizando o About por meio do styled components dentro do mesmo documento
Caso o código de estilo fique grande é melhor criar um arquivo index.ts separado  */
const Container = styled.section`
  width: 100vw;
  height: var(--section-height);

  > div {
    padding: 0 var(--padding-lateral) 0 0;
    height: 100%;

    display: flex;
    justify-content: center;

    div.content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.4rem;

      > h2 {
        color: var(--cll-title);
      }

      > p,
      > h2 {
        max-width: 26rem;
        min-width: 26rem;
      }

      button {
        margin-top: 2rem;
      }
    }

    > img {
      height: 100%;
    }
  }

  @media (max-width: 559px) {
    > div > img {
      display: none;
    }
  }

  @media (min-width: 560px) {
    > div {
      justify-content: flex-end;

      div.content {
        flex: 1;
      }
    }
  }

  @media (min-width: 1440px) {
    > div {
      gap: 6vw;
    }
  }
`;

// Fim da Estilização e seus filhos com responsividade


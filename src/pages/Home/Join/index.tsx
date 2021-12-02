import React from 'react';
import styled from 'styled-components';

import joinImage from '../../../assets/images/join.svg';
import { Button, Input } from '../../../components';

const Join: React.FC = () => {
  return (
    <Container id="join">
      <div>
        <div className="content">
          <h2>Join our membership to get special offer</h2>
          <div className="form-controls">
            <Input placeholder="Enter your email address" />
            <Button hasShadow>Join</Button>
          </div>
        </div>
        <img src={joinImage} alt="Join us" />
      </div>
    </Container>
  );
};

export { Join };

// Estilizando o Container com styled components

const Container = styled.section`
  width: 100vw;
  height: var(--section-height);
  max-height: 42rem;

  > div {
    padding: 0 0 0 var(--padding-lateral);
    height: 100%;

    display: flex;
    justify-content: space-between;

    div.content {
      flex: 1;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;

      > h2 {
        min-width: 26rem;
        max-width: 26rem;
        color: var(--cll-title);
      }

      div.form-controls {
        width: 100%;
        max-width: 26rem;

        display: flex;
        gap: 1rem;
        justify-content: center;
      }
    }

    > img {
      height: 100%;
    }
  }

  @media (min-width: 768px) {
    > div {
      gap: 10rem;
    }
  }
`;

// Fim da estilização Container e seus filhos

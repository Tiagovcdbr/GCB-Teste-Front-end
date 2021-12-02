import React from 'react';
import { FiSearch } from 'react-icons/fi';

import landing from '../../../assets/images/landing.svg';
import { Button, Input } from '../../../components';
import styled from 'styled-components';

const Landing: React.FC = () => {
  return (
    <Container id="landing">
      <div>
        <div className="content">
          <h1>Ready for Trying a new recipe?</h1>
          <div className="form-controls">
            <Input type="text" placeholder="Search healthy foods" />
            <Button type="button" iconOnly>
              <FiSearch />
            </Button>
          </div>
        </div>
        <img src={landing} alt="healthy foods" />
      </div>
    </Container>
  );
};

export { Landing };

// Inicio da estilização do Container 

const Container = styled.div`
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

      > h1 {
        min-width: 26rem;
        max-width: 26rem;
        color: var(--cll-title-darker);
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
`;

// Fim da estilização Container e seus filhos

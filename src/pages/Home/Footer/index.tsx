import React from 'react';
import { MdCopyright } from 'react-icons/md';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        <MdCopyright />
        Copyrights 2019 Stack. All Rights Reserved.
      </p>

      <ul>
        <a href="/">
          <li>Privacy Policy</li>
        </a>

        <a href="/">
          <li>Terms and Conditions</li>
        </a>
      </ul>
    </Container>
  );
};

export { Footer };
// Estilizando o Container com styled components

const Container = styled.footer`
  padding: 2rem var(--padding-lateral);
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    color: var(--cll-title-darker);
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  ul {
    display: flex;
    gap: 1.5rem;
  }

  a {
    color: var(--cll-text-darker);
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

// Fim da estilização do Container

import styled from 'styled-components';

export const Container = styled.footer`
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

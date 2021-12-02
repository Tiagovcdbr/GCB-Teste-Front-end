import styled from 'styled-components';

export const Container = styled.section`
  padding: 3.2rem 0 8rem;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--cll-background-darker);

  header {
    text-align: center;

    p {
      margin-top: 1rem;
      max-width: 26rem;
      color: var(--cll-text-darker);
    }
  }

  > div {
    margin-top: 4rem;
    width: 100%;
    max-width: 90rem;

    .swiper-container {
      overflow: visible;
    }
  }
`;

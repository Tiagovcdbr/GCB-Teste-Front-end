import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  navOpen: boolean;
  navShowing: boolean;
  navClosing: boolean;
  windowScrolled: boolean;
}

const NavbarOpeningAnimation = keyframes`
  from {
    clip-path: circle(20% at 100% 0%);

  }
  to {
    clip-path: circle(80% at 50% 50%);
  }
`;

export const Container = styled.header<IContainerProps>`
  width: 100%;
  padding: 1.5rem var(--padding-lateral);

  z-index: 3;
  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background 0.4s;

  ${props =>
    props.windowScrolled &&
    css`
      background: var(--cll-background);
    `};

  h2 {
    color: var(--cll-primary);
  }

  div {
    display: flex;
    align-items: center;
    gap: 2rem;

    nav {
      ul {
        display: flex;
        align-items: center;

        a {
          li {
            padding: 1rem;
            transition: background 0.2s, filter 0.2s;
            border-bottom: 2px solid transparent;

            transition: border-color 0.2s;

            @media (min-width: 1200px) {
              &:hover,
              &:focus {
                border-color: ${props =>
                  props.windowScrolled
                    ? 'var(--cll-primary)'
                    : 'var(--cll-in-primary)'};
              }
            }

            span {
              color: ${props =>
                props.windowScrolled
                  ? 'var(--cll-primary)'
                  : 'var(--cll-in-primary)'};
              font-weight: 700;
              text-transform: uppercase;

              transition: color 0.2s;
            }
          }
        }
      }

      @media (max-width: 1199px) {
        display: ${props => (props.navOpen ? 'block' : 'none')};
        width: 100%;
        height: 100vh;

        position: fixed;
        top: 0;
        right: 0;
        background: var(--cll-primary);
        clip-path: circle(100% at 50% 50%);
        animation-duration: 600ms;
        animation-fill-mode: both;

        ${props =>
          props.navShowing &&
          css`
            animation-name: ${NavbarOpeningAnimation};
          `};

        ${props =>
          props.navClosing &&
          css`
            animation-name: ${NavbarOpeningAnimation};
            animation-direction: reverse;
          `};

        ul {
          width: 100%;
          height: 100%;

          flex-direction: column;
          justify-content: center;

          a {
            width: 100%;
            text-align: center;

            li {
              padding: 2rem 0;

              &:hover,
              &:focus {
                background: var(--cll-primary);
                filter: brightness(0.92);
              }

              span {
                font-size: 1.5rem;
                color: var(--cll-in-primary);
              }
            }
          }
        }
      }
    }

    button:not(.hamburguer) {
      font-weight: 700;

      ${props =>
        !props.windowScrolled &&
        css`
          background: var(--cll-in-primary);
          color: var(--cll-primary);
        `};
    }

    button.hamburguer {
      background: none;
      border: 0;
      border-radius: var(--boxes-radius);
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.95);
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.6rem;

        li {
          height: 1.5px;
          width: 1.8rem;
          background: ${props =>
            props.windowScrolled
              ? 'var(--cll-primary)'
              : 'var(--cll-in-primary)'};

          transition: transform 0.2s, background 0.2s;

          &:nth-child(2) {
            width: 1.6rem;
          }
        }
      }

      ${props =>
        props.navOpen &&
        css`
          position: fixed;
          top: 3rem;
          right: 3rem;

          border: 1px solid var(--cll-in-primary);
          width: 4rem;
          height: 4rem;

          background: var(--cll-in-primary);

          ul li {
            background: var(--cll-primary);
          }
        `};

      ${props =>
        props.navOpen &&
        !props.navClosing &&
        css`
          ul {
            li:first-child {
              transform: translateY(0.35rem) rotate(45deg);
            }

            li:last-child {
              transform: translateY(-0.35rem) rotate(-45deg);
            }

            li:nth-child(2) {
              display: none;
            }
          }
        `};
    }
  }

  @media (min-width: 1200px) {
    nav {
      display: block;
    }

    button.hamburguer {
      display: none;
    }
  }
`;

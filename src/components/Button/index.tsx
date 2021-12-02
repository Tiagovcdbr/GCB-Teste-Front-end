import React from 'react';
import styled, { css } from 'styled-components';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconOnly?: boolean;
  hasShadow?: boolean;
}

const Button: React.FC<IButtonProps> = ({
  children,
  iconOnly,
  hasShadow,
  ...rest
}) => {
  return (
    <Container iconOnly={iconOnly} hasShadow={hasShadow} {...rest}>
      {children}
    </Container>
  );
};

export { Button };
// Inicio da estilização Container e seus filhos 
// Foi realizado a estilização em uma só página com styled components
interface IContainerProps {
  iconOnly?: boolean;
  hasShadow?: boolean;
}

const Container = styled.button<IContainerProps>`
  --padding-lateral: 1.5rem;
  --font-size: ${props => (props.iconOnly ? '1.6rem' : '1.2rem')};

  height: 3rem;
  ${props =>
    props.iconOnly ? 'width: 3rem;' : 'padding: 0 var(--padding-lateral);'}

  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  background: var(--cll-primary);
  border: 1px solid var(--cll-primary);
  border-radius: var(--boxes-radius);
  color: var(--cll-in-primary);

  font-size: var(--font-size);
  white-space: nowrap;

  transition: filter 0.2s, background 0.2s, color 0.2s;

  &:hover {
    filter: brightness(0.92);
  }

  ${props =>
    props.hasShadow &&
    css`
      position: relative;

      &::before {
        content: '';
        position: absolute;
        height: 80%;
        width: 70%;
        bottom: 0;

        box-shadow: 0px 2px 12px 6px rgba(186, 220, 88, 0.8);
        border-radius: 8px;
      }
    `};
`;

// Fim da estilização

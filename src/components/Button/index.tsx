import React from 'react';

import { Container } from './styles';

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

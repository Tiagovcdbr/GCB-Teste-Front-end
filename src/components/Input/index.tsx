import React from 'react';

import { Container } from './styles';

type TInputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<TInputProps> = props => {
  return <Container {...props} />;
};

export { Input };

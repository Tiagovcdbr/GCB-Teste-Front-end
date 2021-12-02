import React from 'react';

import { Container } from './styles';

interface ICardProps {
  text: string;
  imageSrc: string;
  imgAlt?: string;
  type?: 'inline' | 'column';
}

const Card: React.FC<ICardProps> = ({
  children,
  text,
  imageSrc,
  imgAlt,
  type,
}) => {
  return (
    <Container type={type || 'column'}>
      <img src={imageSrc} alt={imgAlt || text} />
      <div>
        <h3>{text}</h3>
        {children}
      </div>
    </Container>
  );
};

export { Card };

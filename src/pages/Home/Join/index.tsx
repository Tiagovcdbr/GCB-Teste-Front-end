import React from 'react';

import joinImage from '../../../assets/images/join.svg';
import { Button, Input } from '../../../components';
import { Container } from './styles';

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

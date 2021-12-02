import React from 'react';
import { FiSearch } from 'react-icons/fi';

import landing from '../../../assets/images/landing.svg';
import { Button, Input } from '../../../components';
import { Container } from './styles';

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

import './styles/global.css';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import  Routes  from './Routes/routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};
export { App };

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <Routes />

    <GlobalStyle />
  </Router>
);

export default App;

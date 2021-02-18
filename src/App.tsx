import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Logo from './components/Logo';
import Routes from './routes';
import GlobalStyles from './styles/global';



const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Logo />

        <Routes />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}

export default App;

import React from 'react';
import Footer from './components/Footer/Footer';

import Dashboard from './views/dashboard';
import Main from './views/main';
import styled from 'styled-components';
import { Container } from './styles/style';

const App = () => {

  return (
    <Container className="app">
       <Dashboard/>
      <Main/>
      <Footer/>
    </Container>
  );
};

export default App;
import React from 'react';
import NavBar from './NavBar';
import { Container } from 'semantic-ui-react';
import HomePage from '../../features/fitstack/home/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar/>
    <Container>
      <Route path='/' component={HomePage}
      />
    </Container>
    </>
  );
}

export default App;

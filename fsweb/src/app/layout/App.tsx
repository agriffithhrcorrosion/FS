import React from 'react';
import NavBar from './NavBar';
import { Container, Segment } from 'semantic-ui-react';
import HomePage from '../../features/fitstack/home/HomePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Segment inverted style={{ minHeight: '650px' }} >
        <NavBar />
        <Container>
          <Route path='/' component={HomePage}/>
        </Container>


      </Segment>

    </>
  );
}

export default App;

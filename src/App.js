import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

const App = () => {
  return (
    <GoogleOAuthProvider clientId='89469551900-dp3tnlshf90qc4i1kqgt7fnuiuoqcobk.apps.googleusercontent.com'>
      <BrowserRouter>
        <Container maxwidth='lg'>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/auth' exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;

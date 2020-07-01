import React from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import AuthContainer from './containers/AuthContainer';
import './sass/App.scss'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" component={AuthContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

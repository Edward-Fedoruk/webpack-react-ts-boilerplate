import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import HelloWorld from './components/HelloWorld';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HelloWorld} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(
  <Router />,
  document.getElementById('app'),
);

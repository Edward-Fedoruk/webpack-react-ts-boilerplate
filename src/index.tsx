import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import HelloWorld from './components/HelloWorld/HelloWorld';

ReactDOM.render(
  <HelloWorld text="!" />,
  document.getElementById('app'),
);

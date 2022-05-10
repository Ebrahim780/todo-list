import React from 'react';
import reactDom from 'react-dom';
import App from './containers/App';
import './styles/materialize.css';
import './styles/index.css';

reactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
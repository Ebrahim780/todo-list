import React from 'react';
import reactDom from 'react-dom';
import App from './containers/App';
import './styles/index.css';
import './styles/materialize.min.css';

reactDom.render (
  <React.Fragment>
    <App/>
  </React.Fragment>,
  document.getElementById('root')
)
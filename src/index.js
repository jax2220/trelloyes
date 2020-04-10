import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './Components/Store';
import App from './Components/App';

ReactDOM.render(
  <React.StrictMode>
    <App store={STORE} />
  </React.StrictMode>,
  document.getElementById('root')
);



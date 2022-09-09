import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*

Strict mode cause double rendering. Adding a console.log() in the App component will illustrate What
I mean here. The reffered code will display the same message twice.

*/

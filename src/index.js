import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setupMirage } from './mirageSetup';

const environment = process.env.REACT_APP_ENVIRONMENT;
console.log({ environment });
if (environment === 'mirage') {
  setupMirage({ environment });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

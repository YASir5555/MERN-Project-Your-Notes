import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './translate';
import App from './App';
import './assets/css/main.min.css';
import { AppProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

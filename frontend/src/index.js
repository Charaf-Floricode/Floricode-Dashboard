// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';        // note: react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) {
  throw new Error('No root container found in index.html');
}

const root = ReactDOM.createRoot(container);   // createRoot, not render
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

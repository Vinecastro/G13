// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importando BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Envolvendo o componente App com BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

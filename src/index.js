import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client instead of react-dom
import App from './App';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

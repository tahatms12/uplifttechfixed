import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import './styles/prose.css';

// Register service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { type: 'module' })
    .then(reg => {
      reg.navigationPreload.enable();
      reg.update();
    });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
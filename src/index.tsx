import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App, StoreProvider } from './app';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>,
);

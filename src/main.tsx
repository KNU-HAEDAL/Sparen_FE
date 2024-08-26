import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { globalStyle } from './styles/globalStyles.ts';
import '@/styles/reset.css';
import { Global } from '@emotion/react';

const root = createRoot(document.getElementById('root')!);

root.render(
  <>
    <Global styles={globalStyle} />
    <App />
  </>
);

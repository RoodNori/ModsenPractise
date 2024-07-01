import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../Header';
import Main from '../Main';
import { GlobalStyles } from './styled';


function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Main />
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);

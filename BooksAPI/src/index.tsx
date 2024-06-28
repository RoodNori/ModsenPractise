import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyles } from './styled';

interface IProps {}

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

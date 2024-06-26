import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header/index';

interface AppProps {}

function App() {
  return (
    <>
    <Header />
    
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);

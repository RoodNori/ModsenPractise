import * as React from 'react';
import { createRoot } from 'react-dom/client';
import TodoList from '../TodoList';
import RandomImage from '../RandomImage';
import ChangeableButton from '../ChangeableButton';

function App() {
  return (
    <>
      <TodoList />
      <div />
      <RandomImage />
      <div />
      <ChangeableButton />
      <div />
    </>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<App />);

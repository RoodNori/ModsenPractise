import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../../store';


function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const root = createRoot(document.getElementById('root'));

root.render(<Root />);

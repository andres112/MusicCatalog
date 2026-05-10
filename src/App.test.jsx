import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import allReducer from './reducers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = createStore(allReducer);
  const root = createRoot(div);

  act(() => {
    root.render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  act(() => {
    root.unmount();
  });
});

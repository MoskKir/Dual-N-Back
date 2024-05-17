import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

export const withStore = Component => props => (
  <Provider store={store}>
    <Component {...props} />
  </Provider>
);

import React from 'react';
import { ScreenProvider } from 'hooks';

export const withScreen = Component => props => (
  <ScreenProvider>
    <Component {...props} />
  </ScreenProvider>
);

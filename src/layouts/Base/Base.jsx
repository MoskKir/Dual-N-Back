import React from 'react';
import { Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import {
  Header,
} from 'components';

const Component = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Main app</title>
      </Helmet>

      <div
        style={{
          width: '100%',
        }}
      >
        <Header />
      </div>
      {children}
    </>
  );
};

export const Base = Component;

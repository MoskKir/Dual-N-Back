import React from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Typography,
  Button,
  Grid,
} from '@mui/material';


import {
  Statistics,
  Session,
  Matrix,
  Menu,
} from 'components';

export const InfoPage = () => {
  return (
    <>
      <Helmet>
        <title>Dual N-Back | Info</title>
      </Helmet>

      <Grid style={{
        width: '100%',
        height: '100%',
        flexWrap: 'nowrap',
        padding: '16px',
      }}
        container
      >
        info page
      </Grid>
    </>
  );
};

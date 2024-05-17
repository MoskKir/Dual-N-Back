import React from 'react';

import {
  Typography,
  Grid,
} from '@mui/material';

export const Session = ({ trialsCount, trialTime }) => {
  return (
    <Grid container spacing={3} direction={'column'}>
      <Grid item>
        <Typography variant="h6">
          Session:
        </Typography>
        <Typography variant="h6">
          {(trialTime / 1000).toFixed(2)} sec/trial
        </Typography>
        <Typography variant="h6">
          {trialsCount} trials
        </Typography>
        <Typography variant="h6">
          {Math.round(trialsCount * (trialTime / 1000))} seconds
        </Typography>
      </Grid>
    </Grid>
  )
};

import React from 'react';

import {
  Typography,
  Grid,
} from '@mui/material';

const mockList = [{
  name: 'D2B',
  result: '33%',
}, {
  name: 'D2B',
  result: '33%',
}]

export const Statistics = ({  }) => {
  return (
    <Grid container spacing={3} direction={'column'} textAlign={'end'}>
      <Grid item>
        <Typography variant="h6">
          Sessions today: 2
        </Typography>
        <Typography variant="h6">
          Today's Last 20:
        </Typography>
        <Typography variant="h6">
          DNB average: 2.00
        </Typography>
      </Grid>
      <Grid item>
        {mockList.map(({name, result}, index) => (
          <Typography key={index} variant="body1">{`#${index + 1} ${name} ${result}`}</Typography>
        ))}
      </Grid>
    </Grid>
  )
};

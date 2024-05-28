import React from 'react';

import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
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

import {
  finishSession,
  runSession,
} from 'services/main';

import {
  useScreen,
  useKey,
} from 'hooks';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { isMobile } = useScreen();

  const isRunning = useSelector(({ app }) => app.isRunning);
  const trialsCount = useSelector(({ app }) => app.trialsCount);
  const arrayOfPositions = useSelector(({ app }) => app.arrayOfPositions);
  const arrayOfSuccesPositions = useSelector(({ app }) => app.arrayOfSuccesPositions);
  const trialTime = useSelector(({ app }) => app.trialTime);

  const nBack = 2;

  const handleStartKey = () => {
    dispatch(runSession({ trialsCount, nBack }));
  };

  useKey('Space', handleStartKey);
  useKey('Backquote', () => {
    dispatch(finishSession());
  });

  return (
    <>
      <Helmet>
        <title>Main Page</title>
      </Helmet>

      <Grid style={{
        width: '100%',
        height: '100%',
        flexWrap: 'nowrap',
        padding: '16px',
      }}
        container
        direction={ isMobile ? 'column' : 'row' }
      >
        { !isMobile && (
          <Grid container item spacing={3} direction={'column'} xs={4} justifyContent="space-between">
            {!isRunning ? (
              <>
                <Grid item>
                  <Menu />
                </Grid>
                <Grid item>
                  <Session
                    trialsCount={trialsCount}
                    trialTime={trialTime}
                  />
                </Grid>
              </>
            ) : (
              <Grid item>
                <Grid container spacing={3} direction={'column'}>
                  <Grid item>
                    <Button variant="text" color="inherit"
                      onClick={() => dispatch(finishSession())}
                    >
                      ~ : Stop
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        )}

        <Grid container justifyContent={'center'}>
          <Matrix
            isRunning={isRunning}
            arrayOfPositions={arrayOfPositions}
            arrayOfSuccesPositions={arrayOfSuccesPositions}
            trialTime={trialTime}
          />
          {!isRunning && (
            <Grid container justifyContent="center"
              style={{
                height: '48px',
              }}
            >
              <Button
                variant="outlined"
                color='inherit'
                onClick={handleStartKey}
              >
                <Typography variant="h6">
                  Press SPACE to begin session #3: Dual 2-Back
                </Typography>
              </Button>
            </Grid>
          )}
        </Grid>

        <Grid item xs={4}>
          {!true &&
            <Statistics />
          }
        </Grid>
      </Grid>
    </>
  );
};

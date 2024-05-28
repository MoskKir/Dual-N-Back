import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Matrix.css';

import { CurrentBox } from '../index';

import {
  finishSession,
} from 'services/main';

import {
  Typography,
  Button,
  Grid,
} from '@mui/material';

import {
  useScreen,
  useKey,
} from 'hooks';

export const MatrixComponent = ({
  isRunning,
  arrayOfPositions,
  arrayOfSuccesPositions,
  trialTime
}) => {
  const dispatch = useDispatch();
  const { isMobile } = useScreen();

  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const [currentValue, setCurrentValue] = useState(null);
  const [indexOfCurrentValue, setIndexOfCurrentValue] = useState(0);

  const [succesedIndexes, setSuccesedIndexes] = useState([]);

  const [errorTrials, setErrorTrials] = useState([]);

  const [isSucceseTrial, setIsSucceseTrial] = useState(null);
  const [pressedKey, setPressedKey] = useState(null);


  const handleKeyDown = (keyCode) => {
    setPressedKey(keyCode);

    const id = setTimeout(() => {
      setPressedKey(null);
    }, 300);

    return () => clearInterval(id);
  };

  const handleKeyA = () => {
    handleKeyDown('KeyA');
    const containsIndex = succesedIndexes.indexOf(indexOfCurrentValue);

    if (containsIndex >= 0) {
      succesedIndexes.splice(containsIndex, 1);
      setSuccesedIndexes(succesedIndexes);

      setIsSucceseTrial(true);
    } else {
      setErrorTrials(indexOfCurrentValue);

      setIsSucceseTrial(false);
    }
  };

  const handleKeyL = () => {};

  useKey('KeyA', handleKeyA);
  useKey('KeyL', handleKeyL);

  useEffect(() => {
    if (isRunning) {
      const intervalId = setInterval(() => {
        if (indexOfCurrentValue < arrayOfPositions.length) {
          setCurrentValue(arrayOfPositions[indexOfCurrentValue]);
          setIndexOfCurrentValue(prev => prev + 1);

          setIsSucceseTrial(null);
          setPressedKey(null);
        } else {
          clearInterval(intervalId);
          setCurrentValue(null);
          setIndexOfCurrentValue(0);

          setIsSucceseTrial(null);
          setPressedKey(null);

          dispatch(finishSession());
        }
      }, trialTime);

      return () => {
        clearInterval(intervalId);
      }
    }
  }, [isRunning, arrayOfPositions, trialTime, indexOfCurrentValue]);

  return (
    <Grid
      sx={{
        ...(isMobile && { width: 'inherit' }),
        height: '70vh',
        paddingTop: '5rem',
      }}
    >
      <Grid
        ref={containerRef}
        sx={{
          aspectRatio: 1/ 1,
          display: 'flex',
          justifyContent: 'center',
          ...(isMobile ? { width: '100%' } : { height: '100%' }),
        }}
      >
        <div className="grid">
          <div className="square">
            {currentValue === 1 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 2 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 3 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 4 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 5 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 6 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 7 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 8 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
          <div className="square">
            {currentValue === 9 && <CurrentBox key={indexOfCurrentValue}/>}
          </div>
        </div>
      </Grid>

      <Grid container justifyContent="space-between" style={{ paddingTop: '3em' }}>
        <Grid>
          <Button
            variant={ pressedKey ? "contained" : "outlined"}
            color={ isSucceseTrial && pressedKey === "KeyA" ? "success"
              : !isSucceseTrial && pressedKey === "KeyA" ? "error" : "inherit"
            }
            onClick={handleKeyA}
          >
            <Typography variant="h6">A : Position</Typography>
          </Button>
        </Grid>
        <Grid>
          <Button
            variant="outlined"
            color='inherit'
            onClick={() => {}}
            disabled
          >
            <Typography variant="h6">L : Audio</Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
};

export const Matrix = React.memo(MatrixComponent);

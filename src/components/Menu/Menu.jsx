import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Menu.css';

import {
  Button,
  Grid,
} from '@mui/material';

import { useSelector, useDispatch } from 'react-redux';

function toggleFullScreen() {
  if (!document.fullscreenElement &&
      !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // не в полноэкранном режиме в других браузерах
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
};

import {
  useKey,
} from '../../hooks/useKey';

import {
  setTrialsCount,
  setTrialTime,
} from 'store/actions/app';

export const Menu = ({  }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [pressedKey, setPressedKey] = useState(null);

  const trialsCount = useSelector(({ app }) => app.trialsCount);
  const trialTime = useSelector(({ app }) => app.trialTime);

  const handleKeyDown = (keyCode) => {
    setPressedKey(keyCode);
  };

  const handleGoToInfoPage = () => {
    history.push('/info');
    window.location.reload();
  };

  const handleDecreaseTrials = () => {
    dispatch(setTrialsCount(trialsCount - 1));
    handleKeyDown('KeyE')
  };
  const handleIncreaseTrials = () => {
    dispatch(setTrialsCount(trialsCount + 1));
    handleKeyDown('KeyR')
  };

  const handleDecreaseSpeed = () => {
    dispatch(setTrialTime(trialTime - 100));
    handleKeyDown('KeyT')
  };
  const handleIncreaseSpeed = () => {
    dispatch(setTrialTime(trialTime + 100));
    handleKeyDown('KeyY')
  };

  useKey('KeyH', () => {
    handleGoToInfoPage();
  });
  useKey('KeyE', () => {
    handleDecreaseTrials();
  });
  useKey('KeyR', () => {
    handleIncreaseTrials();
  });
  useKey('KeyT', () => {
    handleDecreaseSpeed();
  });
  useKey('KeyY', () => {
    handleIncreaseSpeed();
  });

  const handleKeyUp = () => setPressedKey(null);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <Grid container spacing={2} direction={'column'}>
      <Grid item>
        <Button
          variant={ pressedKey === "KeyH" ? "contained" : "text" }
          color={ pressedKey === "KeyH" ? "success" : "inherit" }
          onClick={handleGoToInfoPage}
          disabled
        >
          H: Help / Tutorial
        </Button>
      </Grid>

      <Grid item>
        <Grid item>
          <Button
            variant={ pressedKey === "KeyQ" ? "contained" : "text" }
            color={ pressedKey === "KeyQ" ? "success" : "inherit" }
            onClick={() => {}}
          >
            Q: Decrease N-Back
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="inherit">
            W: Increase N-Back
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <Grid item>
          <Button
            variant={ pressedKey === "KeyE" ? "contained" : "text" }
            color={ pressedKey === "KeyE" ? "success" : "inherit" }
            onClick={handleDecreaseTrials}
          >
            E: Decrease Trials
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={ pressedKey === "KeyR" ? "contained" : "text" }
            color={ pressedKey === "KeyR" ? "success" : "inherit" }
            onClick={handleIncreaseTrials}
          >
            R: Increase Trials
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <Grid item>
          <Button
            variant={ pressedKey === "KeyT" ? "contained" : "text" }
            color={ pressedKey === "KeyT" ? "success" : "inherit" }
            onClick={handleDecreaseSpeed}
          >
            T: Decrease Speed
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant={ pressedKey === "KeyY" ? "contained" : "text" }
            color={ pressedKey === "KeyY" ? "success" : "inherit" }
            onClick={handleIncreaseSpeed}
          >
            Y: Increase Speed
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <Grid item>
          <Button
            variant="text"
            color="inherit"
            onClick={toggleFullScreen}
          >
            F11: Full Screen
          </Button>
        </Grid>
      </Grid>

      <Grid item>
        <Grid item>
          <Button variant="text" color="inherit" disabled>
            C: Choose Game Type
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="inherit" disabled>
            S: Select Sounds
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="inherit" disabled>
            I: Select Images
          </Button>
        </Grid>
        <Grid item>
          <Button variant="text" color="inherit" disabled>
            M: Standart Mode
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <Grid item>
          <Button variant="text" color="inherit" disabled>
            G: Daily Progress Graph
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
};

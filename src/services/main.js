import {
  setArrayOfSuccesPositions,
  setArrayOfPositions,
  setTrialsCount,
  setTrialTime,
  startSession,
  stopSession,
} from 'store/actions/app';

import {
  addDualNBackValues,
  checkIndexesBack,
  fillArray,
} from '../utils/array';

export const runSession = ({ trialsCount, nBack }) => dispatch => {
  const array = fillArray(trialsCount);

  const arrayOfPositions = addDualNBackValues(array, nBack);

  const arrayOfSuccesPositions = checkIndexesBack(arrayOfPositions, nBack);

  dispatch(setArrayOfPositions(arrayOfPositions));
  dispatch(setArrayOfSuccesPositions(arrayOfSuccesPositions));

  dispatch(startSession());
};

export const finishSession = () => dispatch => {
  dispatch(setArrayOfPositions([]));
  dispatch(setArrayOfSuccesPositions([]));

  dispatch(stopSession());
};

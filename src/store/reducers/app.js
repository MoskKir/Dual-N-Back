import { APP } from 'store/types';
import { app as is } from 'store/initialState';

export const setLoading = (state, { key, value }) => ({
  ...state,
  loading: {
    ...state.loading,
    [key]: value,
  },
});

export const setIsRunning = (state, value) => ({
  ...state,
  isRunning: value
});

export const setArrayOfPositions = (state, value) => ({
  ...state,
  arrayOfPositions: value
});

export const setArrayOfSuccesPositions = (state, value) => ({
  ...state,
  arrayOfSuccesPositions: value
});

export const setTrialTime = (state, value) => ({
  ...state,
  trialTime: Math.max(100, value)
});

export const setTrialsCount = (state, value) => ({
  ...state,
  trialsCount: Math.max(3, value)
});

export default (state = is, { type, payload }) => {
  switch (type) {
    case APP.SET_LOADING:
      return setLoading(state, payload);

    case APP.SET_IS_RUNNING:
      return setIsRunning(state, payload);
    case APP.SET_ARRAY_OF_POSITIONS:
      return setArrayOfPositions(state, payload);
    case APP.SET_ARRAY_OF_SUCCES_POSITIONS:
      return setArrayOfSuccesPositions(state, payload);
    case APP.SET_TRIAL_TIME:
      return setTrialTime(state, payload);
    case APP.SET_TRIAL_COUNT:
      return setTrialsCount(state, payload);
    default:
      return state;
  }
};

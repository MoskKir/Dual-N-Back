import { APP } from 'store/types';
import { pack } from 'store/utils';

export const startLoading = key => dispatch => dispatch(pack(APP.SET_LOADING, { key, value: true }));

export const stopLoading = key => dispatch => dispatch(pack(APP.SET_LOADING, { key, value: false }));



export const startSession = () => dispatch => dispatch(pack(APP.SET_IS_RUNNING, true));

export const stopSession = () => dispatch => dispatch(pack(APP.SET_IS_RUNNING, false));

export const setArrayOfPositions = array => dispatch => dispatch(pack(APP.SET_ARRAY_OF_POSITIONS, array));

export const setArrayOfSuccesPositions = array => dispatch => dispatch(pack(APP.SET_ARRAY_OF_SUCCES_POSITIONS, array));

export const setArrayOfSounds = array => dispatch => dispatch(pack(APP.SET_ARRAY_OF_SOUNDS, array));

export const setArrayOfNumbers = array => dispatch => dispatch(pack(APP.SET_ARRAY_OF_NUMBERS, array));

export const setArrayOfColors = array => dispatch => dispatch(pack(APP.SET_ARRAY_OF_COLORS, array));

export const setTrialTime = milliseconds => dispatch => dispatch(pack(APP.SET_TRIAL_TIME, milliseconds));

export const setTrialsCount = trialsCount => dispatch => dispatch(pack(APP.SET_TRIAL_COUNT, trialsCount));



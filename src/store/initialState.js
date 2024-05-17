export const app = {
  navigation: {
    visible: localStorage.getItem('app.navigation_type') === 'full',
  },
  loading: {},
  isRunning: false,
  arrayOfPositions: [],
  arrayOfSuccesPositions: [],
  arrayOfSounds: [],
  arrayOfNumbers: [],
  arrayOfColors: [],
  trialTime: 3000,
  trialsCount: 20,
};

export default {
  app,
};

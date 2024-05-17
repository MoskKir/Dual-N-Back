export const isLoading = key => ({ app }) => !!app.loading[key];

export const isRunning = ({ app }) => !!app.isRunning;

export const selectArrayOfPositions = ({ app }) => app.arrayOfPositions;

export const selectTrialTime = ({ app }) => app.trialTime;

export const selectTrialsCount = ({ app }) => app.trialsCount;

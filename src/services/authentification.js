import config from 'config';
import api from 'api';
import authenticationApi from 'api/authentication';
import { applyLocale } from 'services/i18n';
import { updateAccount } from 'store/actions/account';

const resetSession = () => {
  localStorage.removeItem(config.auth.tokens.refresh);
  localStorage.removeItem(config.auth.tokens.access);
  delete api.defaults.headers.common['Authorization'];
};

export const setSession = ({
  refreshToken,
  accessToken,
}) => {
  localStorage.setItem(config.auth.tokens.refresh, refreshToken);
  localStorage.setItem(config.auth.tokens.access, accessToken);
  api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const refreshSession = async () => {
  try {
    const refreshToken = localStorage.getItem(config.auth.tokens.refresh);
    const session = await authenticationApi.refreshSession(refreshToken);

    setSession(session);
  } catch (err) {
    await logOut();
  }
};

export const identify = () => async dispatch => {
  try {
    const data = await authenticationApi.identify();
    applyLocale(data.locale)(dispatch);
    updateAccount(data)(dispatch);
  } catch (err) {
    if (err.code === 403) {
      resetSession();
      window.location.href = config.auth.paths.login;
    }
  }
};

export const logOut = async () => {
  try {
    await authenticationApi.logOut();
  } catch (err) {}
  resetSession();
  window.location.href = config.auth.paths.login;
};

export const isAuthenticated = () =>
  !!localStorage.getItem(config.auth.tokens.refresh) &&
  !!localStorage.getItem(config.auth.tokens.access);

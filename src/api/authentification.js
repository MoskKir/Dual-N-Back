import api from '.';

export const logIn = credentials => api.post('/authentication', credentials);

export const logOut = () => api.delete('/authentication');

export const identify = () => api.get('/authentication');

export const refreshSession = refreshToken => api.put(`/authentication?refreshToken=${refreshToken}`);

export const changePassword = (password, newPassword) => api.put('/authentication/password', { password, newPassword });

export const checkPasswordRecoveryToken = (token, email) => api.get('/authentication/guest/password', { params: { token, email }});
export const checkEmailChangeToken = (token, email) => api.get('/authentication/email', { params: { token, email }});

export const requestPasswordRecovery = email => api.post('/authentication/guest/password', { email });
export const requestEmailChange = email => api.post('/authentication/email', { email });

export const recoveryPassword = (token, email, password) => api.put('/authentication/guest/password', { password }, { params: { token, email }});
export const changeEmail = (token, email) => api.put('/authentication/email', null, { params: { token, email }});

export default {
  checkPasswordRecoveryToken,
  requestPasswordRecovery,
  checkEmailChangeToken,
  requestEmailChange,
  recoveryPassword,
  changePassword,
  refreshSession,
  changeEmail,
  identify,
  logOut,
  logIn,
};

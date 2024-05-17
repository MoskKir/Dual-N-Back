import axios from 'axios';
import config from 'config';
import toaster from 'services/toaster';
import {
  refreshSession,
  logOut,
} from 'services/authentication';

const session = {
  accessToken: localStorage.getItem(config.auth.tokens.access),
  refreshing: {
    processing: false,
    timeout: 100,
  },
};

const instance = axios.create({
  baseURL: config.apiUrl,
  ...(session.accessToken ? {
    headers: {
      'Authorization': `Bearer ${session.accessToken}`,
    },
  } : {}),
});

const interceptSuccessResponse = ({ data }) => data;

const processHttpError = err => {
  const httpError = err.response && err.response.data;

  if (httpError) {
    if (httpError.redirect) {
      logOut();
      return err;
    }

    const { status: code } = err.response;
    const { message, filePath, stack } = httpError;

    if (stack) {
      const collection = stack.reduce((batch, { key, text }) => {
        batch[key] = batch[key]
          ? [...batch[key], text]
          : [text];
        return batch;
      }, {});

      return {
        code,
        isHttp: true,
        collection,
        ...(filePath && { filePath }),
      };
    } else {
      const type = httpError.type && toaster[httpError.type] ? httpError.type : 'error';
      toaster[type](message);

      return {
        code,
        isHttp: true,
        message,
        ...(filePath && { filePath }),
      };
    }
  } else if (!axios.isCancel(err) && err.message !== 'Request aborted') {
    session.refreshing.processing = false;
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return err;
};

instance.interceptors.response.use(
  interceptSuccessResponse,
  async err => {
    if (err.response && err.response.status === 401) {
      try {
        if (session.refreshing.processing) {
          await new Promise(resolve => {
            const interval = setInterval(() => {
              if (!session.refreshing.processing) {
                clearInterval(interval);
                resolve();
              }
            }, session.refreshing.timeout);
          });
        } else {
          session.refreshing.processing = true;
          await refreshSession();
          setTimeout(() => session.refreshing.processing = false, session.refreshing.timeout * 2);
        }
        return Promise.resolve(
          interceptSuccessResponse(
            await axios.request(err.config)
          )
        );
      } catch (err) {
        return Promise.reject(
          processHttpError(err)
        );
      }
    }

    return Promise.reject(
      processHttpError(err)
    );
  }
);

instance.setLocale = locale => instance.defaults.headers.common['Locale'] = locale;

export default instance;
